(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4843],
  {
    chunkid: function (_, _) {
      var _, _, _;
      (_ = []),
        (_ = function _() {
          "use strict";
          var _ =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== _
                    ? _
                    : {},
            _ = !_.document && !!_.postMessage,
            _ = _.IS_PAPA_WORKER || !1,
            _ = {},
            _ = 0,
            _ = {
              parse: function (_, _) {
                var _ = (_ = _ || {}).dynamicTyping || !1;
                if (
                  (_(_) && ((_.dynamicTypingFunction = _), (_ = {})),
                  (_.dynamicTyping = _),
                  (_.transform = !!_(_.transform) && _.transform),
                  _.worker && _.WORKERS_SUPPORTED)
                ) {
                  var _ = (function () {
                    if (!_.WORKERS_SUPPORTED) return !1;
                    var _,
                      _,
                      _ =
                        ((_ = _.URL || _.webkitURL || null),
                        (_ = _.toString()),
                        _.BLOB_URL ||
                          (_.BLOB_URL = _.createObjectURL(
                            new Blob(
                              [
                                "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                                "(",
                                _,
                                ")();",
                              ],
                              {
                                type: "text/javascript",
                              },
                            ),
                          ))),
                      _ = new _.Worker(_);
                    return (_.onmessage = _), (_._ = _++), (_[_._] = _);
                  })();
                  return (
                    (_.userStep = _.step),
                    (_.userChunk = _.chunk),
                    (_.userComplete = _.complete),
                    (_.userError = _.error),
                    (_.step = _(_.step)),
                    (_.chunk = _(_.chunk)),
                    (_.complete = _(_.complete)),
                    (_.error = _(_.error)),
                    delete _.worker,
                    void _.postMessage({
                      input: _,
                      config: _,
                      workerId: _._,
                    })
                  );
                }
                var _ = null;
                return (
                  _.NODE_STREAM_INPUT,
                  "string" == typeof _
                    ? ((_ = (function (_) {
                        return 65279 === _.charCodeAt(0) ? _.slice(1) : _;
                      })(_)),
                      (_ = _.download ? new _(_) : new _(_)))
                    : !0 === _.readable && _(_.read) && _(_._)
                      ? (_ = new _(_))
                      : ((_.File && _ instanceof File) ||
                          _ instanceof Object) &&
                        (_ = new _(_)),
                  _.stream(_)
                );
              },
              unparse: function (_, _) {
                var _ = !1,
                  _ = !0,
                  _ = ",",
                  _ = "\r\n",
                  _ = '"',
                  _ = _ + _,
                  _ = !1,
                  _ = null,
                  _ = !1;
                !(function () {
                  if ("object" == typeof _) {
                    if (
                      ("string" != typeof _.delimiter ||
                        _.BAD_DELIMITERS.filter(function (_) {
                          return -1 !== _.delimiter.indexOf(_);
                        }).length ||
                        (_ = _.delimiter),
                      ("boolean" == typeof _.quotes ||
                        "function" == typeof _.quotes ||
                        Array.isArray(_.quotes)) &&
                        (_ = _.quotes),
                      ("boolean" != typeof _.skipEmptyLines &&
                        "string" != typeof _.skipEmptyLines) ||
                        (_ = _.skipEmptyLines),
                      "string" == typeof _.newline && (_ = _.newline),
                      "string" == typeof _.quoteChar && (_ = _.quoteChar),
                      "boolean" == typeof _.header && (_ = _.header),
                      Array.isArray(_.columns))
                    ) {
                      if (0 === _.columns.length)
                        throw new Error("Option columns is empty");
                      _ = _.columns;
                    }
                    void 0 !== _.escapeChar && (_ = _.escapeChar + _),
                      ("boolean" == typeof _.escapeFormulae ||
                        _.escapeFormulae instanceof RegExp) &&
                        (_ =
                          _.escapeFormulae instanceof RegExp
                            ? _.escapeFormulae
                            : /^[=+\-@\t\r].*$/);
                  }
                })();
                var _ = new RegExp(_(_), "g");
                if (
                  ("string" == typeof _ && (_ = JSON.parse(_)),
                  Array.isArray(_))
                ) {
                  if (!_.length || Array.isArray(_[0])) return _(null, _, _);
                  if ("object" == typeof _[0])
                    return _(_ || Object.keys(_[0]), _, _);
                } else if ("object" == typeof _)
                  return (
                    "string" == typeof _.data && (_.data = JSON.parse(_.data)),
                    Array.isArray(_.data) &&
                      (_.fields || (_.fields = (_.meta && _.meta.fields) || _),
                      _.fields ||
                        (_.fields = Array.isArray(_.data[0])
                          ? _.fields
                          : "object" == typeof _.data[0]
                            ? Object.keys(_.data[0])
                            : []),
                      Array.isArray(_.data[0]) ||
                        "object" == typeof _.data[0] ||
                        (_.data = [_.data])),
                    _(_.fields || [], _.data || [], _)
                  );
                throw new Error("Unable to serialize unrecognized input");
                function _(_, _, _) {
                  var _ = "";
                  "string" == typeof _ && (_ = JSON.parse(_)),
                    "string" == typeof _ && (_ = JSON.parse(_));
                  var _ = Array.isArray(_) && 0 < _.length,
                    _ = !Array.isArray(_[0]);
                  if (_ && _) {
                    for (var _ = 0; _ < _.length; _++)
                      0 < _ && (_ += _), (_ += _(_[_], _));
                    0 < _.length && (_ += _);
                  }
                  for (var _ = 0; _ < _.length; _++) {
                    var _ = _ ? _.length : _[_].length,
                      _ = !1,
                      _ = _
                        ? 0 === Object.keys(_[_]).length
                        : 0 === _[_].length;
                    if (
                      (_ &&
                        !_ &&
                        (_ =
                          "greedy" === _
                            ? "" === _[_].join("").trim()
                            : 1 === _[_].length && 0 === _[_][0].length),
                      "greedy" === _ && _)
                    ) {
                      for (var _ = [], _ = 0; _ < _; _++) {
                        var _ = _ ? _[_] : _;
                        _.push(_[_][_]);
                      }
                      _ = "" === _.join("").trim();
                    }
                    if (!_) {
                      for (var _ = 0; _ < _; _++) {
                        0 < _ && !_ && (_ += _);
                        var _ = _ && _ ? _[_] : _;
                        _ += _(_[_][_], _);
                      }
                      _ < _.length - 1 && (!_ || (0 < _ && !_)) && (_ += _);
                    }
                  }
                  return _;
                }
                function _(_, _) {
                  if (null == _) return "";
                  if (_.constructor === Date)
                    return JSON.stringify(_).slice(1, 25);
                  var _ = !1;
                  _ &&
                    "string" == typeof _ &&
                    _.test(_) &&
                    ((_ = "'" + _), (_ = !0));
                  var _ = _.toString().replace(_, _);
                  return (_ =
                    _ ||
                    !0 === _ ||
                    ("function" == typeof _ && _(_, _)) ||
                    (Array.isArray(_) && _[_]) ||
                    (function (_, _) {
                      for (var _ = 0; _ < _.length; _++)
                        if (-1 < _.indexOf(_[_])) return !0;
                      return !1;
                    })(_, _.BAD_DELIMITERS) ||
                    -1 < _.indexOf(_) ||
                    " " === _.charAt(0) ||
                    " " === _.charAt(_.length - 1))
                    ? _ + _ + _
                    : _;
                }
              },
            };
          if (
            ((_.RECORD_SEP = String.fromCharCode(30)),
            (_.UNIT_SEP = String.fromCharCode(31)),
            (_.BYTE_ORDER_MARK = "\ufeff"),
            (_.BAD_DELIMITERS = ["\r", "\n", '"', _.BYTE_ORDER_MARK]),
            (_.WORKERS_SUPPORTED = !_ && !!_.Worker),
            (_.NODE_STREAM_INPUT = 1),
            (_.LocalChunkSize = 10485760),
            (_.RemoteChunkSize = 5242880),
            (_.DefaultDelimiter = ","),
            (_.Parser = _),
            (_.ParserHandle = _),
            (_.NetworkStreamer = _),
            (_.FileStreamer = _),
            (_.StringStreamer = _),
            (_.ReadableStreamStreamer = _),
            _.jQuery)
          ) {
            var _ = _.jQuery;
            _._.parse = function (_) {
              var _ = _.config || {},
                _ = [];
              return (
                this.each(function (_) {
                  if (
                    "INPUT" !== _(this).prop("tagName").toUpperCase() ||
                    "file" !== _(this).attr("type").toLowerCase() ||
                    !_.FileReader ||
                    !this.files ||
                    0 === this.files.length
                  )
                    return !0;
                  for (var _ = 0; _ < this.files.length; _++)
                    _.push({
                      file: this.files[_],
                      inputElem: this,
                      instanceConfig: _.extend({}, _),
                    });
                }),
                _(),
                this
              );
              function _() {
                if (0 !== _.length) {
                  var _,
                    _,
                    _,
                    _,
                    _ = _[0];
                  if (_(_.before)) {
                    var _ = _.before(_.file, _.inputElem);
                    if ("object" == typeof _) {
                      if ("abort" === _.action)
                        return (
                          (_ = "AbortError"),
                          (_ = _.file),
                          (_ = _.inputElem),
                          (_ = _.reason),
                          void (
                            _(_.error) &&
                            _.error(
                              {
                                name: _,
                              },
                              _,
                              _,
                              _,
                            )
                          )
                        );
                      if ("skip" === _.action) return void _();
                      "object" == typeof _.config &&
                        (_.instanceConfig = _.extend(
                          _.instanceConfig,
                          _.config,
                        ));
                    } else if ("skip" === _) return void _();
                  }
                  var _ = _.instanceConfig.complete;
                  (_.instanceConfig.complete = function (_) {
                    _(_) && _(_, _.file, _.inputElem), _();
                  }),
                    _.parse(_.file, _.instanceConfig);
                } else _(_.complete) && _.complete();
              }
              function _() {
                _.splice(0, 1), _();
              }
            };
          }
          function _(_) {
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
              (this._completeResults = {
                data: [],
                errors: [],
                meta: {},
              }),
              function (_) {
                var _ = _(_);
                (_.chunkSize = parseInt(_.chunkSize)),
                  _.step || _.chunk || (_.chunkSize = null),
                  (this._handle = new _(_)),
                  ((this._handle.streamer = this)._config = _);
              }.call(this, _),
              (this.parseChunk = function (_, _) {
                if (this.isFirstChunk && _(this._config.beforeFirstChunk)) {
                  var _ = this._config.beforeFirstChunk(_);
                  void 0 !== _ && (_ = _);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var _ = this._partialLine + _;
                this._partialLine = "";
                var _ = this._handle.parse(_, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var _ = _.meta.cursor;
                  this._finished ||
                    ((this._partialLine = _.substring(_ - this._baseIndex)),
                    (this._baseIndex = _)),
                    _ && _.data && (this._rowCount += _.data.length);
                  var _ =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (_)
                    _.postMessage({
                      results: _,
                      workerId: _.WORKER_ID,
                      finished: _,
                    });
                  else if (_(this._config.chunk) && !_) {
                    if (
                      (this._config.chunk(_, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    (_ = void 0), (this._completeResults = void 0);
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(_.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(_.errors)),
                      (this._completeResults.meta = _.meta)),
                    this._completed ||
                      !_ ||
                      !_(this._config.complete) ||
                      (_ && _.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    _ || (_ && _.meta.paused) || this._nextChunk(),
                    _
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (_) {
                _(this._config.error)
                  ? this._config.error(_)
                  : _ &&
                    this._config.error &&
                    _.postMessage({
                      workerId: _.WORKER_ID,
                      error: _,
                      finished: !1,
                    });
              });
          }
          function _(_) {
            var _;
            (_ = _ || {}).chunkSize || (_.chunkSize = _.RemoteChunkSize),
              _.call(this, _),
              (this._nextChunk = _
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (_) {
                (this._input = _), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((_ = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (_.withCredentials = this._config.withCredentials),
                    _ ||
                      ((_.onload = _(this._chunkLoaded, this)),
                      (_.onerror = _(this._chunkError, this))),
                    _.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !_,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var _ = this._config.downloadRequestHeaders;
                    for (var _ in _) _.setRequestHeader(_, _[_]);
                  }
                  if (this._config.chunkSize) {
                    var _ = this._start + this._config.chunkSize - 1;
                    _.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + _,
                    );
                  }
                  try {
                    _.send(this._config.downloadRequestBody);
                  } catch (_) {
                    this._chunkError(_.message);
                  }
                  _ && 0 === _.status && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                4 === _.readyState &&
                  (_.status < 200 || 400 <= _.status
                    ? this._chunkError()
                    : ((this._start += this._config.chunkSize
                        ? this._config.chunkSize
                        : _.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          (function (_) {
                            var _ = _.getResponseHeader("Content-Range");
                            return null === _
                              ? -1
                              : parseInt(_.substring(_.lastIndexOf("/") + 1));
                          })(_)),
                      this.parseChunk(_.responseText)));
              }),
              (this._chunkError = function (_) {
                var _ = _.statusText || _;
                this._sendError(new Error(_));
              });
          }
          function _(_) {
            var _, _;
            (_ = _ || {}).chunkSize || (_.chunkSize = _.LocalChunkSize),
              _.call(this, _);
            var _ = "undefined" != typeof FileReader;
            (this.stream = function (_) {
              (this._input = _),
                (_ = _.slice || _.webkitSlice || _.mozSlice),
                _
                  ? (((_ = new FileReader()).onload = _(
                      this._chunkLoaded,
                      this,
                    )),
                    (_.onerror = _(this._chunkError, this)))
                  : (_ = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var _ = this._input;
                if (this._config.chunkSize) {
                  var _ = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  );
                  _ = _.call(_, this._start, _);
                }
                var _ = _.readAsText(_, this._config.encoding);
                _ ||
                  this._chunkLoaded({
                    target: {
                      result: _,
                    },
                  });
              }),
              (this._chunkLoaded = function (_) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(_.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(_.error);
              });
          }
          function _(_) {
            var _;
            _.call(this, (_ = _ || {})),
              (this.stream = function (_) {
                return (_ = _), this._nextChunk();
              }),
              (this._nextChunk = function () {
                if (!this._finished) {
                  var _,
                    _ = this._config.chunkSize;
                  return (
                    _
                      ? ((_ = _.substring(0, _)), (_ = _.substring(_)))
                      : ((_ = _), (_ = "")),
                    (this._finished = !_),
                    this.parseChunk(_)
                  );
                }
              });
          }
          function _(_) {
            _.call(this, (_ = _ || {}));
            var _ = [],
              _ = !0,
              _ = !1;
            (this.pause = function () {
              _.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                _.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (_) {
                (this._input = _),
                  this._input._("data", this._streamData),
                  this._input._("end", this._streamEnd),
                  this._input._("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                _ && 1 === _.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  _.length ? this.parseChunk(_.shift()) : (_ = !0);
              }),
              (this._streamData = _(function (_) {
                try {
                  _.push(
                    "string" == typeof _
                      ? _
                      : _.toString(this._config.encoding),
                  ),
                    _ &&
                      ((_ = !1),
                      this._checkIsFinished(),
                      this.parseChunk(_.shift()));
                } catch (_) {
                  this._streamError(_);
                }
              }, this)),
              (this._streamError = _(function (_) {
                this._streamCleanUp(), this._sendError(_);
              }, this)),
              (this._streamEnd = _(function () {
                this._streamCleanUp(), (_ = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = _(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function _(_) {
            var _,
              _,
              _,
              _ = Math.pow(2, 53),
              _ = -_,
              _ = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              _ =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              _ = this,
              _ = 0,
              _ = 0,
              _ = !1,
              _ = !1,
              _ = [],
              _ = {
                data: [],
                errors: [],
                meta: {},
              };
            if (_(_.step)) {
              var _ = _.step;
              _.step = function (_) {
                if (((_ = _), _())) _();
                else {
                  if ((_(), 0 === _.data.length)) return;
                  (_ += _.data.length),
                    _.preview && _ > _.preview
                      ? _.abort()
                      : ((_.data = _.data[0]), _(_, _));
                }
              };
            }
            function _(_) {
              return "greedy" === _.skipEmptyLines
                ? "" === _.join("").trim()
                : 1 === _.length && 0 === _[0].length;
            }
            function _() {
              return (
                _ &&
                  _ &&
                  (_(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      _.DefaultDelimiter +
                      "'",
                  ),
                  (_ = !1)),
                _.skipEmptyLines &&
                  (_.data = _.data.filter(function (_) {
                    return !_(_);
                  })),
                _() &&
                  (function () {
                    if (_)
                      if (Array.isArray(_.data[0])) {
                        for (var _ = 0; _() && _ < _.data.length; _++)
                          _.data[_].forEach(_);
                        _.data.splice(0, 1);
                      } else _.data.forEach(_);
                    function _(_, _) {
                      _(_.transformHeader) && (_ = _.transformHeader(_, _)),
                        _.push(_);
                    }
                  })(),
                (function () {
                  if (!_ || (!_.header && !_.dynamicTyping && !_.transform))
                    return _;
                  function _(_, _) {
                    var _,
                      _ = _.header ? {} : [];
                    for (_ = 0; _ < _.length; _++) {
                      var _ = _,
                        _ = _[_];
                      _.header && (_ = _ >= _.length ? "__parsed_extra" : _[_]),
                        _.transform && (_ = _.transform(_, _)),
                        (_ = _(_, _)),
                        "__parsed_extra" === _
                          ? ((_[_] = _[_] || []), _[_].push(_))
                          : (_[_] = _);
                    }
                    return (
                      _.header &&
                        (_ > _.length
                          ? _(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                _.length +
                                " fields but parsed " +
                                _,
                              _ + _,
                            )
                          : _ < _.length &&
                            _(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                _.length +
                                " fields but parsed " +
                                _,
                              _ + _,
                            )),
                      _
                    );
                  }
                  var _ = 1;
                  return (
                    !_.data.length || Array.isArray(_.data[0])
                      ? ((_.data = _.data.map(_)), (_ = _.data.length))
                      : (_.data = _(_.data, 0)),
                    _.header && _.meta && (_.meta.fields = _),
                    (_ += _),
                    _
                  );
                })()
              );
            }
            function _() {
              return _.header && 0 === _.length;
            }
            function _(_, _) {
              return (
                (_ = _),
                _.dynamicTypingFunction &&
                  void 0 === _.dynamicTyping[_] &&
                  (_.dynamicTyping[_] = _.dynamicTypingFunction(_)),
                !0 === (_.dynamicTyping[_] || _.dynamicTyping)
                  ? "true" === _ ||
                    "TRUE" === _ ||
                    ("false" !== _ &&
                      "FALSE" !== _ &&
                      ((function (_) {
                        if (_.test(_)) {
                          var _ = parseFloat(_);
                          if (_ < _ && _ < _) return !0;
                        }
                        return !1;
                      })(_)
                        ? parseFloat(_)
                        : _.test(_)
                          ? new Date(_)
                          : "" === _
                            ? null
                            : _))
                  : _
              );
              var _;
            }
            function _(_, _, _, _) {
              var _ = {
                type: _,
                code: _,
                message: _,
              };
              void 0 !== _ && (_.row = _), _.errors.push(_);
            }
            (this.parse = function (_, _, _) {
              var _ = _.quoteChar || '"';
              if (
                (_.newline ||
                  (_.newline = (function (_, _) {
                    _ = _.substring(0, 1048576);
                    var _ = new RegExp(_(_) + "([^]*?)" + _(_), "gm"),
                      _ = (_ = _.replace(_, "")).split("\r"),
                      _ = _.split("\n"),
                      _ = 1 < _.length && _[0].length < _[0].length;
                    if (1 === _.length || _) return "\n";
                    for (var _ = 0, _ = 0; _ < _.length; _++)
                      "\n" === _[_][0] && _++;
                    return _ >= _.length / 2 ? "\r\n" : "\r";
                  })(_, _)),
                (_ = !1),
                _.delimiter)
              )
                _(_.delimiter) &&
                  ((_.delimiter = _.delimiter(_)),
                  (_.meta.delimiter = _.delimiter));
              else {
                var _ = (function (_, _, _, _, _) {
                  var _, _, _, _;
                  _ = _ || [",", "\t", "|", ";", _.RECORD_SEP, _.UNIT_SEP];
                  for (var _ = 0; _ < _.length; _++) {
                    var _ = _[_],
                      _ = 0,
                      _ = 0,
                      _ = 0;
                    _ = void 0;
                    for (
                      var _ = new _({
                          comments: _,
                          delimiter: _,
                          newline: _,
                          preview: 10,
                        }).parse(_),
                        _ = 0;
                      _ < _.data.length;
                      _++
                    )
                      if (_ && _(_.data[_])) _++;
                      else {
                        var _ = _.data[_].length;
                        (_ += _),
                          void 0 !== _
                            ? 0 < _ && ((_ += Math.abs(_ - _)), (_ = _))
                            : (_ = _);
                      }
                    0 < _.data.length && (_ /= _.data.length - _),
                      (void 0 === _ || _ <= _) &&
                        (void 0 === _ || _ < _) &&
                        1.99 < _ &&
                        ((_ = _), (_ = _), (_ = _));
                  }
                  return {
                    successful: !!(_.delimiter = _),
                    bestDelimiter: _,
                  };
                })(
                  _,
                  _.newline,
                  _.skipEmptyLines,
                  _.comments,
                  _.delimitersToGuess,
                );
                _.successful
                  ? (_.delimiter = _.bestDelimiter)
                  : ((_ = !0), (_.delimiter = _.DefaultDelimiter)),
                  (_.meta.delimiter = _.delimiter);
              }
              var _ = _(_);
              return (
                _.preview && _.header && _.preview++,
                (_ = _),
                (_ = new _(_)),
                (_ = _.parse(_, _, _)),
                _(),
                _
                  ? {
                      meta: {
                        paused: !0,
                      },
                    }
                  : _ || {
                      meta: {
                        paused: !1,
                      },
                    }
              );
            }),
              (this.paused = function () {
                return _;
              }),
              (this.pause = function () {
                (_ = !0),
                  _.abort(),
                  (_ = _(_.chunk) ? "" : _.substring(_.getCharIndex()));
              }),
              (this.resume = function () {
                _.streamer._halted
                  ? ((_ = !1), _.streamer.parseChunk(_, !0))
                  : setTimeout(_.resume, 3);
              }),
              (this.aborted = function () {
                return _;
              }),
              (this.abort = function () {
                (_ = !0),
                  _.abort(),
                  (_.meta.aborted = !0),
                  _(_.complete) && _.complete(_),
                  (_ = "");
              });
          }
          function _(_) {
            return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(_) {
            var _,
              _ = (_ = _ || {}).delimiter,
              _ = _.newline,
              _ = _.comments,
              _ = _.step,
              _ = _.preview,
              _ = _.fastMode,
              _ = (_ =
                void 0 === _.quoteChar || null === _.quoteChar
                  ? '"'
                  : _.quoteChar);
            if (
              (void 0 !== _.escapeChar && (_ = _.escapeChar),
              ("string" != typeof _ || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
                (_ = ","),
              _ === _)
            )
              throw new Error("Comment character same as delimiter");
            !0 === _
              ? (_ = "#")
              : ("string" != typeof _ || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
                (_ = !1),
              "\n" !== _ && "\r" !== _ && "\r\n" !== _ && (_ = "\n");
            var _ = 0,
              _ = !1;
            (this.parse = function (_, _, _) {
              if ("string" != typeof _)
                throw new Error("Input must be a string");
              var _ = _.length,
                _ = _.length,
                _ = _.length,
                _ = _.length,
                _ = _(_),
                _ = [],
                _ = [],
                _ = [],
                _ = (_ = 0);
              if (!_) return _();
              if (_.header && !_) {
                var _ = _.split(_)[0].split(_),
                  _ = [],
                  _ = {},
                  _ = !1;
                for (var _ in _) {
                  var _ = _[_];
                  _(_.transformHeader) && (_ = _.transformHeader(_, _));
                  var _ = _,
                    _ = _[_] || 0;
                  for (
                    0 < _ && ((_ = !0), (_ = _ + "_" + _)), _[_] = _ + 1;
                    _.includes(_);
                  )
                    _ = _ + "_" + _;
                  _.push(_);
                }
                if (_) {
                  var _ = _.split(_);
                  (_[0] = _.join(_)), (_ = _.join(_));
                }
              }
              if (_ || (!1 !== _ && -1 === _.indexOf(_))) {
                for (var _ = _.split(_), _ = 0; _ < _.length; _++) {
                  if (((_ = _[_]), (_ += _.length), _ !== _.length - 1))
                    _ += _.length;
                  else if (_) return _();
                  if (!_ || _.substring(0, _) !== _) {
                    if (_) {
                      if (((_ = []), _(_.split(_)), _(), _)) return _();
                    } else _(_.split(_));
                    if (_ && _ <= _) return (_ = _.slice(0, _)), _(!0);
                  }
                }
                return _();
              }
              for (
                var _ = _.indexOf(_, _),
                  _ = _.indexOf(_, _),
                  _ = new RegExp(_(_) + _(_), "g"),
                  _ = _.indexOf(_, _);
                ;
              )
                if (_[_] !== _)
                  if (_ && 0 === _.length && _.substring(_, _ + _) === _) {
                    if (-1 === _) return _();
                    (_ = _ + _), (_ = _.indexOf(_, _)), (_ = _.indexOf(_, _));
                  } else if (-1 !== _ && (_ < _ || -1 === _))
                    _.push(_.substring(_, _)),
                      (_ = _ + _),
                      (_ = _.indexOf(_, _));
                  else {
                    if (-1 === _) break;
                    if ((_.push(_.substring(_, _)), _(_ + _), _ && (_(), _)))
                      return _();
                    if (_ && _.length >= _) return _(!0);
                  }
                else
                  for (_ = _, _++; ; ) {
                    if (-1 === (_ = _.indexOf(_, _ + 1)))
                      return (
                        _ ||
                          _.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: _.length,
                            index: _,
                          }),
                        _()
                      );
                    if (_ === _ - 1) return _(_.substring(_, _).replace(_, _));
                    if (_ !== _ || _[_ + 1] !== _) {
                      if (_ === _ || 0 === _ || _[_ - 1] !== _) {
                        -1 !== _ && _ < _ + 1 && (_ = _.indexOf(_, _ + 1)),
                          -1 !== _ && _ < _ + 1 && (_ = _.indexOf(_, _ + 1));
                        var _ = _(-1 === _ ? _ : Math.min(_, _));
                        if (_.substr(_ + 1 + _, _) === _) {
                          _.push(_.substring(_, _).replace(_, _)),
                            _[(_ = _ + 1 + _ + _)] !== _ &&
                              (_ = _.indexOf(_, _)),
                            (_ = _.indexOf(_, _)),
                            (_ = _.indexOf(_, _));
                          break;
                        }
                        var _ = _(_);
                        if (_.substring(_ + 1 + _, _ + 1 + _ + _) === _) {
                          if (
                            (_.push(_.substring(_, _).replace(_, _)),
                            _(_ + 1 + _ + _),
                            (_ = _.indexOf(_, _)),
                            (_ = _.indexOf(_, _)),
                            _ && (_(), _))
                          )
                            return _();
                          if (_ && _.length >= _) return _(!0);
                          break;
                        }
                        _.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: _.length,
                          index: _,
                        }),
                          _++;
                      }
                    } else _++;
                  }
              return _();
              function _(_) {
                _.push(_), (_ = _);
              }
              function _(_) {
                var _ = 0;
                if (-1 !== _) {
                  var _ = _.substring(_ + 1, _);
                  _ && "" === _.trim() && (_ = _.length);
                }
                return _;
              }
              function _(_) {
                return (
                  _ ||
                    (void 0 === _ && (_ = _.substring(_)),
                    _.push(_),
                    (_ = _),
                    _(_),
                    _ && _()),
                  _()
                );
              }
              function _(_) {
                (_ = _), _(_), (_ = []), (_ = _.indexOf(_, _));
              }
              function _(_) {
                return {
                  data: _,
                  errors: _,
                  meta: {
                    delimiter: _,
                    linebreak: _,
                    aborted: _,
                    truncated: !!_,
                    cursor: _ + (_ || 0),
                  },
                };
              }
              function _() {
                _(_()), (_ = []), (_ = []);
              }
            }),
              (this.abort = function () {
                _ = !0;
              }),
              (this.getCharIndex = function () {
                return _;
              });
          }
          function _(_) {
            var _ = _.data,
              _ = _[_.workerId],
              _ = !1;
            if (_.error) _.userError(_.error, _.file);
            else if (_.results && _.results.data) {
              var _ = {
                abort: function () {
                  (_ = !0),
                    _(_.workerId, {
                      data: [],
                      errors: [],
                      meta: {
                        aborted: !0,
                      },
                    });
                },
                pause: _,
                resume: _,
              };
              if (_(_.userStep)) {
                for (
                  var _ = 0;
                  _ < _.results.data.length &&
                  (_.userStep(
                    {
                      data: _.results.data[_],
                      errors: _.results.errors,
                      meta: _.results.meta,
                    },
                    _,
                  ),
                  !_);
                  _++
                );
                delete _.results;
              } else
                _(_.userChunk) &&
                  (_.userChunk(_.results, _, _.file), delete _.results);
            }
            _.finished && !_ && _(_.workerId, _.results);
          }
          function _(_, _) {
            var _ = _[_];
            _(_.userComplete) && _.userComplete(_), _.terminate(), delete _[_];
          }
          function _() {
            throw new Error("Not implemented.");
          }
          function _(_) {
            if ("object" != typeof _ || null === _) return _;
            var _ = Array.isArray(_) ? [] : {};
            for (var _ in _) _[_] = _(_[_]);
            return _;
          }
          function _(_, _) {
            return function () {
              _.apply(_, arguments);
            };
          }
          function _(_) {
            return "function" == typeof _;
          }
          return (
            _ &&
              (_.onmessage = function (_) {
                var _ = _.data;
                if (
                  (void 0 === _.WORKER_ID && _ && (_.WORKER_ID = _.workerId),
                  "string" == typeof _.input)
                )
                  _.postMessage({
                    workerId: _.WORKER_ID,
                    results: _.parse(_.input, _.config),
                    finished: !0,
                  });
                else if (
                  (_.File && _.input instanceof File) ||
                  _.input instanceof Object
                ) {
                  var _ = _.parse(_.input, _.config);
                  _ &&
                    _.postMessage({
                      workerId: _.WORKER_ID,
                      results: _,
                      finished: !0,
                    });
                }
              }),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            _
          );
        }),
        void 0 === (_ = "function" == typeof _ ? _.apply(_, _) : _) ||
          (_.exports = _);
    },
    chunkid: function (_, _) {
      var _, _, _;
      (_ = []),
        (_ = function _() {
          "use strict";
          var _ =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== _
                    ? _
                    : {},
            _ = !_.document && !!_.postMessage,
            _ = _ && /blob:/i.test((_.location || {}).protocol),
            _ = {},
            _ = 0,
            _ = {
              parse: function (_, _) {
                var _ = (_ = _ || {}).dynamicTyping || !1;
                if (
                  (_(_) && ((_.dynamicTypingFunction = _), (_ = {})),
                  (_.dynamicTyping = _),
                  (_.transform = !!_(_.transform) && _.transform),
                  _.worker && _.WORKERS_SUPPORTED)
                ) {
                  var _ = (function () {
                    if (!_.WORKERS_SUPPORTED) return !1;
                    var _,
                      _,
                      _ =
                        ((_ = _.URL || _.webkitURL || null),
                        (_ = _.toString()),
                        _.BLOB_URL ||
                          (_.BLOB_URL = _.createObjectURL(
                            new Blob(["(", _, ")();"], {
                              type: "text/javascript",
                            }),
                          ))),
                      _ = new _.Worker(_);
                    return (_.onmessage = _), (_._ = _++), (_[_._] = _);
                  })();
                  return (
                    (_.userStep = _.step),
                    (_.userChunk = _.chunk),
                    (_.userComplete = _.complete),
                    (_.userError = _.error),
                    (_.step = _(_.step)),
                    (_.chunk = _(_.chunk)),
                    (_.complete = _(_.complete)),
                    (_.error = _(_.error)),
                    delete _.worker,
                    void _.postMessage({
                      input: _,
                      config: _,
                      workerId: _._,
                    })
                  );
                }
                var _ = null;
                return (
                  _.NODE_STREAM_INPUT,
                  "string" == typeof _
                    ? (_ = _.download ? new _(_) : new _(_))
                    : !0 === _.readable && _(_.read) && _(_._)
                      ? (_ = new _(_))
                      : ((_.File && _ instanceof File) ||
                          _ instanceof Object) &&
                        (_ = new _(_)),
                  _.stream(_)
                );
              },
              unparse: function (_, _) {
                var _ = !1,
                  _ = !0,
                  _ = ",",
                  _ = "\r\n",
                  _ = '"',
                  _ = _ + _,
                  _ = !1,
                  _ = null;
                !(function () {
                  if ("object" == typeof _) {
                    if (
                      ("string" != typeof _.delimiter ||
                        _.BAD_DELIMITERS.filter(function (_) {
                          return -1 !== _.delimiter.indexOf(_);
                        }).length ||
                        (_ = _.delimiter),
                      ("boolean" == typeof _.quotes ||
                        Array.isArray(_.quotes)) &&
                        (_ = _.quotes),
                      ("boolean" != typeof _.skipEmptyLines &&
                        "string" != typeof _.skipEmptyLines) ||
                        (_ = _.skipEmptyLines),
                      "string" == typeof _.newline && (_ = _.newline),
                      "string" == typeof _.quoteChar && (_ = _.quoteChar),
                      "boolean" == typeof _.header && (_ = _.header),
                      Array.isArray(_.columns))
                    ) {
                      if (0 === _.columns.length)
                        throw new Error("Option columns is empty");
                      _ = _.columns;
                    }
                    void 0 !== _.escapeChar && (_ = _.escapeChar + _);
                  }
                })();
                var _ = new RegExp(_(_), "g");
                if (
                  ("string" == typeof _ && (_ = JSON.parse(_)),
                  Array.isArray(_))
                ) {
                  if (!_.length || Array.isArray(_[0])) return _(null, _, _);
                  if ("object" == typeof _[0]) return _(_ || _(_[0]), _, _);
                } else if ("object" == typeof _)
                  return (
                    "string" == typeof _.data && (_.data = JSON.parse(_.data)),
                    Array.isArray(_.data) &&
                      (_.fields || (_.fields = _.meta && _.meta.fields),
                      _.fields ||
                        (_.fields = Array.isArray(_.data[0])
                          ? _.fields
                          : _(_.data[0])),
                      Array.isArray(_.data[0]) ||
                        "object" == typeof _.data[0] ||
                        (_.data = [_.data])),
                    _(_.fields || [], _.data || [], _)
                  );
                throw new Error("Unable to serialize unrecognized input");
                function _(_) {
                  if ("object" != typeof _) return [];
                  var _ = [];
                  for (var _ in _) _.push(_);
                  return _;
                }
                function _(_, _, _) {
                  var _ = "";
                  "string" == typeof _ && (_ = JSON.parse(_)),
                    "string" == typeof _ && (_ = JSON.parse(_));
                  var _ = Array.isArray(_) && 0 < _.length,
                    _ = !Array.isArray(_[0]);
                  if (_ && _) {
                    for (var _ = 0; _ < _.length; _++)
                      0 < _ && (_ += _), (_ += _(_[_], _));
                    0 < _.length && (_ += _);
                  }
                  for (var _ = 0; _ < _.length; _++) {
                    var _ = _ ? _.length : _[_].length,
                      _ = !1,
                      _ = _
                        ? 0 === Object.keys(_[_]).length
                        : 0 === _[_].length;
                    if (
                      (_ &&
                        !_ &&
                        (_ =
                          "greedy" === _
                            ? "" === _[_].join("").trim()
                            : 1 === _[_].length && 0 === _[_][0].length),
                      "greedy" === _ && _)
                    ) {
                      for (var _ = [], _ = 0; _ < _; _++) {
                        var _ = _ ? _[_] : _;
                        _.push(_[_][_]);
                      }
                      _ = "" === _.join("").trim();
                    }
                    if (!_) {
                      for (var _ = 0; _ < _; _++) {
                        0 < _ && !_ && (_ += _);
                        var _ = _ && _ ? _[_] : _;
                        _ += _(_[_][_], _);
                      }
                      _ < _.length - 1 && (!_ || (0 < _ && !_)) && (_ += _);
                    }
                  }
                  return _;
                }
                function _(_, _) {
                  if (null == _) return "";
                  if (_.constructor === Date)
                    return JSON.stringify(_).slice(1, 25);
                  _ = _.toString().replace(_, _);
                  var _ =
                    ("boolean" == typeof _ && _) ||
                    (Array.isArray(_) && _[_]) ||
                    (function (_, _) {
                      for (var _ = 0; _ < _.length; _++)
                        if (-1 < _.indexOf(_[_])) return !0;
                      return !1;
                    })(_, _.BAD_DELIMITERS) ||
                    -1 < _.indexOf(_) ||
                    " " === _.charAt(0) ||
                    " " === _.charAt(_.length - 1);
                  return _ ? _ + _ + _ : _;
                }
              },
            };
          if (
            ((_.RECORD_SEP = String.fromCharCode(30)),
            (_.UNIT_SEP = String.fromCharCode(31)),
            (_.BYTE_ORDER_MARK = "\ufeff"),
            (_.BAD_DELIMITERS = ["\r", "\n", '"', _.BYTE_ORDER_MARK]),
            (_.WORKERS_SUPPORTED = !_ && !!_.Worker),
            (_.NODE_STREAM_INPUT = 1),
            (_.LocalChunkSize = 10485760),
            (_.RemoteChunkSize = 5242880),
            (_.DefaultDelimiter = ","),
            (_.Parser = _),
            (_.ParserHandle = _),
            (_.NetworkStreamer = _),
            (_.FileStreamer = _),
            (_.StringStreamer = _),
            (_.ReadableStreamStreamer = _),
            _.jQuery)
          ) {
            var _ = _.jQuery;
            _._.parse = function (_) {
              var _ = _.config || {},
                _ = [];
              return (
                this.each(function (_) {
                  if (
                    "INPUT" !== _(this).prop("tagName").toUpperCase() ||
                    "file" !== _(this).attr("type").toLowerCase() ||
                    !_.FileReader ||
                    !this.files ||
                    0 === this.files.length
                  )
                    return !0;
                  for (var _ = 0; _ < this.files.length; _++)
                    _.push({
                      file: this.files[_],
                      inputElem: this,
                      instanceConfig: _.extend({}, _),
                    });
                }),
                _(),
                this
              );
              function _() {
                if (0 !== _.length) {
                  var _,
                    _,
                    _,
                    _,
                    _ = _[0];
                  if (_(_.before)) {
                    var _ = _.before(_.file, _.inputElem);
                    if ("object" == typeof _) {
                      if ("abort" === _.action)
                        return (
                          (_ = "AbortError"),
                          (_ = _.file),
                          (_ = _.inputElem),
                          (_ = _.reason),
                          void (
                            _(_.error) &&
                            _.error(
                              {
                                name: _,
                              },
                              _,
                              _,
                              _,
                            )
                          )
                        );
                      if ("skip" === _.action) return void _();
                      "object" == typeof _.config &&
                        (_.instanceConfig = _.extend(
                          _.instanceConfig,
                          _.config,
                        ));
                    } else if ("skip" === _) return void _();
                  }
                  var _ = _.instanceConfig.complete;
                  (_.instanceConfig.complete = function (_) {
                    _(_) && _(_, _.file, _.inputElem), _();
                  }),
                    _.parse(_.file, _.instanceConfig);
                } else _(_.complete) && _.complete();
              }
              function _() {
                _.splice(0, 1), _();
              }
            };
          }
          function _(_) {
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
              (this._completeResults = {
                data: [],
                errors: [],
                meta: {},
              }),
              function (_) {
                var _ = _(_);
                (_.chunkSize = parseInt(_.chunkSize)),
                  _.step || _.chunk || (_.chunkSize = null),
                  (this._handle = new _(_)),
                  ((this._handle.streamer = this)._config = _);
              }.call(this, _),
              (this.parseChunk = function (_, _) {
                if (this.isFirstChunk && _(this._config.beforeFirstChunk)) {
                  var _ = this._config.beforeFirstChunk(_);
                  void 0 !== _ && (_ = _);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var _ = this._partialLine + _;
                this._partialLine = "";
                var _ = this._handle.parse(_, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var _ = _.meta.cursor;
                  this._finished ||
                    ((this._partialLine = _.substring(_ - this._baseIndex)),
                    (this._baseIndex = _)),
                    _ && _.data && (this._rowCount += _.data.length);
                  var _ =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (_)
                    _.postMessage({
                      results: _,
                      workerId: _.WORKER_ID,
                      finished: _,
                    });
                  else if (_(this._config.chunk) && !_) {
                    if (
                      (this._config.chunk(_, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    (_ = void 0), (this._completeResults = void 0);
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(_.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(_.errors)),
                      (this._completeResults.meta = _.meta)),
                    this._completed ||
                      !_ ||
                      !_(this._config.complete) ||
                      (_ && _.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    _ || (_ && _.meta.paused) || this._nextChunk(),
                    _
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (_) {
                _(this._config.error)
                  ? this._config.error(_)
                  : _ &&
                    this._config.error &&
                    _.postMessage({
                      workerId: _.WORKER_ID,
                      error: _,
                      finished: !1,
                    });
              });
          }
          function _(_) {
            var _;
            (_ = _ || {}).chunkSize || (_.chunkSize = _.RemoteChunkSize),
              _.call(this, _),
              (this._nextChunk = _
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (_) {
                (this._input = _), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((_ = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (_.withCredentials = this._config.withCredentials),
                    _ ||
                      ((_.onload = _(this._chunkLoaded, this)),
                      (_.onerror = _(this._chunkError, this))),
                    _.open("GET", this._input, !_),
                    this._config.downloadRequestHeaders)
                  ) {
                    var _ = this._config.downloadRequestHeaders;
                    for (var _ in _) _.setRequestHeader(_, _[_]);
                  }
                  if (this._config.chunkSize) {
                    var _ = this._start + this._config.chunkSize - 1;
                    _.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + _,
                    );
                  }
                  try {
                    _.send();
                  } catch (_) {
                    this._chunkError(_.message);
                  }
                  _ && 0 === _.status
                    ? this._chunkError()
                    : (this._start += this._config.chunkSize);
                }
              }),
              (this._chunkLoaded = function () {
                4 === _.readyState &&
                  (_.status < 200 || 400 <= _.status
                    ? this._chunkError()
                    : ((this._finished =
                        !this._config.chunkSize ||
                        this._start >
                          (function (_) {
                            var _ = _.getResponseHeader("Content-Range");
                            return null === _
                              ? -1
                              : parseInt(_.substr(_.lastIndexOf("/") + 1));
                          })(_)),
                      this.parseChunk(_.responseText)));
              }),
              (this._chunkError = function (_) {
                var _ = _.statusText || _;
                this._sendError(new Error(_));
              });
          }
          function _(_) {
            var _, _;
            (_ = _ || {}).chunkSize || (_.chunkSize = _.LocalChunkSize),
              _.call(this, _);
            var _ = "undefined" != typeof FileReader;
            (this.stream = function (_) {
              (this._input = _),
                (_ = _.slice || _.webkitSlice || _.mozSlice),
                _
                  ? (((_ = new FileReader()).onload = _(
                      this._chunkLoaded,
                      this,
                    )),
                    (_.onerror = _(this._chunkError, this)))
                  : (_ = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var _ = this._input;
                if (this._config.chunkSize) {
                  var _ = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  );
                  _ = _.call(_, this._start, _);
                }
                var _ = _.readAsText(_, this._config.encoding);
                _ ||
                  this._chunkLoaded({
                    target: {
                      result: _,
                    },
                  });
              }),
              (this._chunkLoaded = function (_) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(_.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(_.error);
              });
          }
          function _(_) {
            var _;
            _.call(this, (_ = _ || {})),
              (this.stream = function (_) {
                return (_ = _), this._nextChunk();
              }),
              (this._nextChunk = function () {
                if (!this._finished) {
                  var _ = this._config.chunkSize,
                    _ = _ ? _.substr(0, _) : _;
                  return (
                    (_ = _ ? _.substr(_) : ""),
                    (this._finished = !_),
                    this.parseChunk(_)
                  );
                }
              });
          }
          function _(_) {
            _.call(this, (_ = _ || {}));
            var _ = [],
              _ = !0,
              _ = !1;
            (this.pause = function () {
              _.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                _.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (_) {
                (this._input = _),
                  this._input._("data", this._streamData),
                  this._input._("end", this._streamEnd),
                  this._input._("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                _ && 1 === _.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  _.length ? this.parseChunk(_.shift()) : (_ = !0);
              }),
              (this._streamData = _(function (_) {
                try {
                  _.push(
                    "string" == typeof _
                      ? _
                      : _.toString(this._config.encoding),
                  ),
                    _ &&
                      ((_ = !1),
                      this._checkIsFinished(),
                      this.parseChunk(_.shift()));
                } catch (_) {
                  this._streamError(_);
                }
              }, this)),
              (this._streamError = _(function (_) {
                this._streamCleanUp(), this._sendError(_);
              }, this)),
              (this._streamEnd = _(function () {
                this._streamCleanUp(), (_ = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = _(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function _(_) {
            var _,
              _,
              _,
              _ = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
              _ =
                /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
              _ = this,
              _ = 0,
              _ = 0,
              _ = !1,
              _ = !1,
              _ = [],
              _ = {
                data: [],
                errors: [],
                meta: {},
              };
            if (_(_.step)) {
              var _ = _.step;
              _.step = function (_) {
                if (((_ = _), _())) _();
                else {
                  if ((_(), 0 === _.data.length)) return;
                  (_ += _.data.length),
                    _.preview && _ > _.preview ? _.abort() : _(_, _);
                }
              };
            }
            function _(_) {
              return "greedy" === _.skipEmptyLines
                ? "" === _.join("").trim()
                : 1 === _.length && 0 === _[0].length;
            }
            function _() {
              if (
                (_ &&
                  _ &&
                  (_(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      _.DefaultDelimiter +
                      "'",
                  ),
                  (_ = !1)),
                _.skipEmptyLines)
              )
                for (var _ = 0; _ < _.data.length; _++)
                  _(_.data[_]) && _.data.splice(_--, 1);
              return (
                _() &&
                  (function () {
                    if (_)
                      if (Array.isArray(_.data[0])) {
                        for (var _ = 0; _() && _ < _.data.length; _++)
                          _.data[_].forEach(_);
                        _.data.splice(0, 1);
                      } else _.data.forEach(_);
                    function _(_) {
                      _(_.transformHeader) && (_ = _.transformHeader(_)),
                        _.push(_);
                    }
                  })(),
                (function () {
                  if (!_ || (!_.header && !_.dynamicTyping && !_.transform))
                    return _;
                  function _(_, _) {
                    var _,
                      _ = _.header ? {} : [];
                    for (_ = 0; _ < _.length; _++) {
                      var _ = _,
                        _ = _[_];
                      _.header && (_ = _ >= _.length ? "__parsed_extra" : _[_]),
                        _.transform && (_ = _.transform(_, _)),
                        (_ = _(_, _)),
                        "__parsed_extra" === _
                          ? ((_[_] = _[_] || []), _[_].push(_))
                          : (_[_] = _);
                    }
                    return (
                      _.header &&
                        (_ > _.length
                          ? _(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                _.length +
                                " fields but parsed " +
                                _,
                              _ + _,
                            )
                          : _ < _.length &&
                            _(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                _.length +
                                " fields but parsed " +
                                _,
                              _ + _,
                            )),
                      _
                    );
                  }
                  var _ = 1;
                  return (
                    !_.data[0] || Array.isArray(_.data[0])
                      ? ((_.data = _.data.map(_)), (_ = _.data.length))
                      : (_.data = _(_.data, 0)),
                    _.header && _.meta && (_.meta.fields = _),
                    (_ += _),
                    _
                  );
                })()
              );
            }
            function _() {
              return _.header && 0 === _.length;
            }
            function _(_, _) {
              return (
                (_ = _),
                _.dynamicTypingFunction &&
                  void 0 === _.dynamicTyping[_] &&
                  (_.dynamicTyping[_] = _.dynamicTypingFunction(_)),
                !0 === (_.dynamicTyping[_] || _.dynamicTyping)
                  ? "true" === _ ||
                    "TRUE" === _ ||
                    ("false" !== _ &&
                      "FALSE" !== _ &&
                      (_.test(_)
                        ? parseFloat(_)
                        : _.test(_)
                          ? new Date(_)
                          : "" === _
                            ? null
                            : _))
                  : _
              );
              var _;
            }
            function _(_, _, _, _) {
              _.errors.push({
                type: _,
                code: _,
                message: _,
                row: _,
              });
            }
            (this.parse = function (_, _, _) {
              var _ = _.quoteChar || '"';
              if (
                (_.newline ||
                  (_.newline = (function (_, _) {
                    _ = _.substr(0, 1048576);
                    var _ = new RegExp(_(_) + "([^]*?)" + _(_), "gm"),
                      _ = (_ = _.replace(_, "")).split("\r"),
                      _ = _.split("\n"),
                      _ = 1 < _.length && _[0].length < _[0].length;
                    if (1 === _.length || _) return "\n";
                    for (var _ = 0, _ = 0; _ < _.length; _++)
                      "\n" === _[_][0] && _++;
                    return _ >= _.length / 2 ? "\r\n" : "\r";
                  })(_, _)),
                (_ = !1),
                _.delimiter)
              )
                _(_.delimiter) &&
                  ((_.delimiter = _.delimiter(_)),
                  (_.meta.delimiter = _.delimiter));
              else {
                var _ = (function (_, _, _, _, _) {
                  var _, _, _, _;
                  _ = _ || [",", "\t", "|", ";", _.RECORD_SEP, _.UNIT_SEP];
                  for (var _ = 0; _ < _.length; _++) {
                    var _ = _[_],
                      _ = 0,
                      _ = 0,
                      _ = 0;
                    _ = void 0;
                    for (
                      var _ = new _({
                          comments: _,
                          delimiter: _,
                          newline: _,
                          preview: 10,
                        }).parse(_),
                        _ = 0;
                      _ < _.data.length;
                      _++
                    )
                      if (_ && _(_.data[_])) _++;
                      else {
                        var _ = _.data[_].length;
                        (_ += _),
                          void 0 !== _
                            ? 0 < _ && ((_ += Math.abs(_ - _)), (_ = _))
                            : (_ = _);
                      }
                    0 < _.data.length && (_ /= _.data.length - _),
                      (void 0 === _ || _ <= _) &&
                        (void 0 === _ || _ < _) &&
                        1.99 < _ &&
                        ((_ = _), (_ = _), (_ = _));
                  }
                  return {
                    successful: !!(_.delimiter = _),
                    bestDelimiter: _,
                  };
                })(
                  _,
                  _.newline,
                  _.skipEmptyLines,
                  _.comments,
                  _.delimitersToGuess,
                );
                _.successful
                  ? (_.delimiter = _.bestDelimiter)
                  : ((_ = !0), (_.delimiter = _.DefaultDelimiter)),
                  (_.meta.delimiter = _.delimiter);
              }
              var _ = _(_);
              return (
                _.preview && _.header && _.preview++,
                (_ = _),
                (_ = new _(_)),
                (_ = _.parse(_, _, _)),
                _(),
                _
                  ? {
                      meta: {
                        paused: !0,
                      },
                    }
                  : _ || {
                      meta: {
                        paused: !1,
                      },
                    }
              );
            }),
              (this.paused = function () {
                return _;
              }),
              (this.pause = function () {
                (_ = !0), _.abort(), (_ = _.substr(_.getCharIndex()));
              }),
              (this.resume = function () {
                _.streamer._halted
                  ? ((_ = !1), _.streamer.parseChunk(_, !0))
                  : setTimeout(this.resume, 3);
              }),
              (this.aborted = function () {
                return _;
              }),
              (this.abort = function () {
                (_ = !0),
                  _.abort(),
                  (_.meta.aborted = !0),
                  _(_.complete) && _.complete(_),
                  (_ = "");
              });
          }
          function _(_) {
            return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(_) {
            var _,
              _ = (_ = _ || {}).delimiter,
              _ = _.newline,
              _ = _.comments,
              _ = _.step,
              _ = _.preview,
              _ = _.fastMode,
              _ = (_ = void 0 === _.quoteChar ? '"' : _.quoteChar);
            if (
              (void 0 !== _.escapeChar && (_ = _.escapeChar),
              ("string" != typeof _ || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
                (_ = ","),
              _ === _)
            )
              throw new Error("Comment character same as delimiter");
            !0 === _
              ? (_ = "#")
              : ("string" != typeof _ || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
                (_ = !1),
              "\n" !== _ && "\r" !== _ && "\r\n" !== _ && (_ = "\n");
            var _ = 0,
              _ = !1;
            (this.parse = function (_, _, _) {
              if ("string" != typeof _)
                throw new Error("Input must be a string");
              var _ = _.length,
                _ = _.length,
                _ = _.length,
                _ = _.length,
                _ = _(_),
                _ = [],
                _ = [],
                _ = [],
                _ = (_ = 0);
              if (!_) return _();
              if (_ || (!1 !== _ && -1 === _.indexOf(_))) {
                for (var _ = _.split(_), _ = 0; _ < _.length; _++) {
                  if (((_ = _[_]), (_ += _.length), _ !== _.length - 1))
                    _ += _.length;
                  else if (_) return _();
                  if (!_ || _.substr(0, _) !== _) {
                    if (_) {
                      if (((_ = []), _(_.split(_)), _(), _)) return _();
                    } else _(_.split(_));
                    if (_ && _ <= _) return (_ = _.slice(0, _)), _(!0);
                  }
                }
                return _();
              }
              for (
                var _ = _.indexOf(_, _),
                  _ = _.indexOf(_, _),
                  _ = new RegExp(_(_) + _(_), "g"),
                  _ = _.indexOf(_, _);
                ;
              )
                if (_[_] !== _)
                  if (_ && 0 === _.length && _.substr(_, _) === _) {
                    if (-1 === _) return _();
                    (_ = _ + _), (_ = _.indexOf(_, _)), (_ = _.indexOf(_, _));
                  } else {
                    if (-1 !== _ && (_ < _ || -1 === _)) {
                      if (-1 === _) {
                        _.push(_.substring(_, _)),
                          (_ = _ + _),
                          (_ = _.indexOf(_, _));
                        continue;
                      }
                      var _ = _(_, _, _);
                      if (_ && _.nextDelim) {
                        (_ = _.nextDelim),
                          (_ = _.quoteSearch),
                          _.push(_.substring(_, _)),
                          (_ = _ + _),
                          (_ = _.indexOf(_, _));
                        continue;
                      }
                    }
                    if (-1 === _) break;
                    if ((_.push(_.substring(_, _)), _(_ + _), _ && (_(), _)))
                      return _();
                    if (_ && _.length >= _) return _(!0);
                  }
                else
                  for (_ = _, _++; ; ) {
                    if (-1 === (_ = _.indexOf(_, _ + 1)))
                      return (
                        _ ||
                          _.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: _.length,
                            index: _,
                          }),
                        _()
                      );
                    if (_ === _ - 1) return _(_.substring(_, _).replace(_, _));
                    if (_ !== _ || _[_ + 1] !== _) {
                      if (_ === _ || 0 === _ || _[_ - 1] !== _) {
                        var _ = _(-1 === _ ? _ : Math.min(_, _));
                        if (_[_ + 1 + _] === _) {
                          _.push(_.substring(_, _).replace(_, _)),
                            _[(_ = _ + 1 + _ + _)] !== _ &&
                              (_ = _.indexOf(_, _)),
                            (_ = _.indexOf(_, _)),
                            (_ = _.indexOf(_, _));
                          break;
                        }
                        var _ = _(_);
                        if (_.substr(_ + 1 + _, _) === _) {
                          if (
                            (_.push(_.substring(_, _).replace(_, _)),
                            _(_ + 1 + _ + _),
                            (_ = _.indexOf(_, _)),
                            (_ = _.indexOf(_, _)),
                            _ && (_(), _))
                          )
                            return _();
                          if (_ && _.length >= _) return _(!0);
                          break;
                        }
                        _.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: _.length,
                          index: _,
                        }),
                          _++;
                      }
                    } else _++;
                  }
              return _();
              function _(_) {
                _.push(_), (_ = _);
              }
              function _(_) {
                var _ = 0;
                if (-1 !== _) {
                  var _ = _.substring(_ + 1, _);
                  _ && "" === _.trim() && (_ = _.length);
                }
                return _;
              }
              function _(_) {
                return (
                  _ ||
                    (void 0 === _ && (_ = _.substr(_)),
                    _.push(_),
                    (_ = _),
                    _(_),
                    _ && _()),
                  _()
                );
              }
              function _(_) {
                (_ = _), _(_), (_ = []), (_ = _.indexOf(_, _));
              }
              function _(_, _) {
                return {
                  data: _ ? _[0] : _,
                  errors: _,
                  meta: {
                    delimiter: _,
                    linebreak: _,
                    aborted: _,
                    truncated: !!_,
                    cursor: _ + (_ || 0),
                  },
                };
              }
              function _() {
                _(_(void 0, !0)), (_ = []), (_ = []);
              }
              function _(_, _, _) {
                var _ = {
                    nextDelim: void 0,
                    quoteSearch: void 0,
                  },
                  _ = _.indexOf(_, _ + 1);
                if (_ < _ && _ < _ && (_ < _ || -1 === _)) {
                  var _ = _.indexOf(_, _);
                  if (-1 === _) return _;
                  _ < _ && (_ = _.indexOf(_, _ + 1)), (_ = _(_, _, _));
                } else
                  _ = {
                    nextDelim: _,
                    quoteSearch: _,
                  };
                return _;
              }
            }),
              (this.abort = function () {
                _ = !0;
              }),
              (this.getCharIndex = function () {
                return _;
              });
          }
          function _(_) {
            var _ = _.data,
              _ = _[_.workerId],
              _ = !1;
            if (_.error) _.userError(_.error, _.file);
            else if (_.results && _.results.data) {
              var _ = {
                abort: function () {
                  (_ = !0),
                    _(_.workerId, {
                      data: [],
                      errors: [],
                      meta: {
                        aborted: !0,
                      },
                    });
                },
                pause: _,
                resume: _,
              };
              if (_(_.userStep)) {
                for (
                  var _ = 0;
                  _ < _.results.data.length &&
                  (_.userStep(
                    {
                      data: _.results.data[_],
                      errors: _.results.errors,
                      meta: _.results.meta,
                    },
                    _,
                  ),
                  !_);
                  _++
                );
                delete _.results;
              } else
                _(_.userChunk) &&
                  (_.userChunk(_.results, _, _.file), delete _.results);
            }
            _.finished && !_ && _(_.workerId, _.results);
          }
          function _(_, _) {
            var _ = _[_];
            _(_.userComplete) && _.userComplete(_), _.terminate(), delete _[_];
          }
          function _() {
            throw new Error("Not implemented.");
          }
          function _(_) {
            if ("object" != typeof _ || null === _) return _;
            var _ = Array.isArray(_) ? [] : {};
            for (var _ in _) _[_] = _(_[_]);
            return _;
          }
          function _(_, _) {
            return function () {
              _.apply(_, arguments);
            };
          }
          function _(_) {
            return "function" == typeof _;
          }
          return (
            _ &&
              (_.onmessage = function (_) {
                var _ = _.data;
                if (
                  (void 0 === _.WORKER_ID && _ && (_.WORKER_ID = _.workerId),
                  "string" == typeof _.input)
                )
                  _.postMessage({
                    workerId: _.WORKER_ID,
                    results: _.parse(_.input, _.config),
                    finished: !0,
                  });
                else if (
                  (_.File && _.input instanceof File) ||
                  _.input instanceof Object
                ) {
                  var _ = _.parse(_.input, _.config);
                  _ &&
                    _.postMessage({
                      workerId: _.WORKER_ID,
                      results: _,
                      finished: !0,
                    });
                }
              }),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            _
          );
        }),
        void 0 === (_ = "function" == typeof _ ? _.apply(_, _) : _) ||
          (_.exports = _);
    },
  },
]);
