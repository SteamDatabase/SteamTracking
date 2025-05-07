(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3318],
  {
    chunkid: (module) => {
      module.exports = {
        BreadContainer: "_3jswbLK3E0Uf47oGyc6qUG",
      };
    },
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module) => {
      module.exports = {
        DialogCtn: "e7i0Hs6j09gCdPXXjl7Lk",
      };
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
                          (_.BLOB_URL = __webpack_require__.createObjectURL(
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
                  _ = __webpack_require__.call(_, this._start, _);
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
                    _.preview && _ > _.preview
                      ? __webpack_require__.abort()
                      : _(_, _);
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
                (_ = __webpack_require__.parse(_, _, _)),
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
                  __webpack_require__.abort(),
                  (_ = _.substr(__webpack_require__.getCharIndex()));
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
                  __webpack_require__.abort(),
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
            if (_.error) __webpack_require__.userError(_.error, _.file);
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
                  (__webpack_require__.userStep(
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
                  (__webpack_require__.userChunk(_.results, _, _.file),
                  delete _.results);
            }
            _.finished && !_ && _(_.workerId, _.results);
          }
          function _(_, _) {
            var _ = _[_];
            _(_.userComplete) && __webpack_require__.userComplete(_),
              __webpack_require__.terminate(),
              delete _[_];
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
        void 0 ===
          (_ = "function" == typeof _ ? __webpack_require__.apply(_, _) : _) ||
          (_.exports = _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { crumbs: _, className: __webpack_require__ } = _;
        return _ && 0 != _.length
          ? _.createElement(
              "div",
              {
                className: (0, _._)(_.BreadContainer, __webpack_require__),
              },
              _.createElement(
                _._,
                {
                  className: "blockbg",
                  "flow-children": "row",
                },
                _.map((_) => {
                  const _ = new Array();
                  return (
                    _.url.startsWith("http")
                      ? _.push(
                          _.createElement(
                            _._,
                            {
                              key: "anchor_" + _.name,
                              href: _.url,
                            },
                            _.name,
                          ),
                        )
                      : _.push(
                          _.createElement(
                            _._,
                            {
                              key: "link_" + _.name,
                              _: _.url,
                            },
                            _.name,
                          ),
                        ),
                    _.push(
                      _.createElement(
                        "span",
                        {
                          key: _.name + "span",
                        },
                        " > ",
                      ),
                    ),
                    _
                  );
                }),
              ),
              _.createElement("div", {
                style: {
                  clear: "left",
                },
              }),
            )
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor(_) {
          (0, _._)(this),
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
              ..._,
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
            (this.m_lastUpdateTime = _ ? Math.floor(Date.now() / 1e3) : 0);
        }
        reset(_) {
          (this.m_stats.library_overview_shown = _.library_overview_shown),
            (this.m_stats.library_overview_read = _.library_overview_read),
            (this.m_stats.app_details_spotlight_shown =
              _.app_details_spotlight_shown),
            (this.m_stats.app_details_spotlight_read =
              _.app_details_spotlight_read),
            (this.m_stats.app_details_activity_shown =
              _.app_details_activity_shown),
            (this.m_stats.app_details_activity_read =
              _.app_details_activity_read),
            (this.m_stats.store_app_page_shown = _.store_app_page_shown),
            (this.m_stats.store_app_page_read = _.store_app_page_read),
            (this.m_stats.store_front_page_shown = _.store_front_page_shown),
            (this.m_stats.store_front_page_read = _.store_front_page_read),
            (this.m_stats.community_hub_shown = _.community_hub_shown),
            (this.m_stats.community_hub_read = _.community_hub_read),
            (this.m_stats.news_hub_shown = _.news_hub_shown),
            (this.m_stats.news_hub_read = _.news_hub_read),
            (this.m_stats.event_scroller_read = _.event_scroller_read),
            (this.m_stats.total_showm =
              _.library_overview_shown +
              _.app_details_activity_shown +
              _.app_details_spotlight_shown +
              _.store_app_page_shown +
              _.store_front_page_shown +
              _.community_hub_shown +
              _.news_hub_shown),
            (this.m_stats.total_read =
              _.library_overview_read +
              _.app_details_activity_read +
              _.app_details_spotlight_read +
              _.store_app_page_read +
              _.store_front_page_read +
              _.community_hub_read +
              _.news_hub_read +
              _.event_scroller_read),
            (this.m_lastUpdateTime = Date.now() / 1e3);
        }
        m_stats = void 0;
        m_lastUpdateTime = void 0;
      }
      (0, _._)([_._], _.prototype, "m_stats", void 0),
        (0, _._)([_._], _.prototype, "m_lastUpdateTime", void 0);
      class _ {
        m_mapPerEventStats = new Map();
        m_mapSummaryStats = new Map();
        m_bLoadedFromConfig = !1;
        constructor() {
          (0, _._)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let _ = (0, _._)("trackingdatasummary", "application_config");
            this.ValidateStoreDefault(_) &&
              this.m_mapSummaryStats.set(_.clan_account_id, new _(_));
            let _ = (0, _._)("trackingdataevents", "application_config");
            this.ValidateStoreDefaultList(_) &&
              _.forEach((_) => {
                let _ = _._.InitFromClanID(_.clan_account_id),
                  _ = this.GetKey(_, _.event_gid);
                this.m_mapPerEventStats.set(_, new _(_));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !(!_ || "object" != typeof _ || !_.clan_account_id) &&
            "number" == typeof _.clan_account_id &&
            _.clan_account_id > 0
          );
        }
        ValidateStoreDefaultList(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) &&
            "number" == typeof _[0].clan_account_id &&
            _[0].clan_account_id > 0
          );
        }
        GetStatsFor(_, _) {
          this.LazyInit();
          let _ = this.GetKey(_, _);
          return (
            this.m_mapPerEventStats.has(_) ||
              this.m_mapPerEventStats.set(_, new _(null)),
            this.m_mapPerEventStats.get(_)
          );
        }
        GetTotalStats(_) {
          return (
            this.LazyInit(),
            this.m_mapSummaryStats.has(_.GetAccountID()) ||
              this.m_mapSummaryStats.set(_.GetAccountID(), new _(null)),
            this.m_mapSummaryStats.get(_.GetAccountID())
          );
        }
        GetKey(_, _) {
          return _.GetAccountID() + "_" + _;
        }
        async LoadStatsForEvents(_, _, _) {
          this.LazyInit();
          let _ = Date.now() / 1e3,
            _ = _.filter((_) => {
              let _ = this.GetKey(_, _),
                _ = this.m_mapPerEventStats.get(_);
              return !_ || null == _.m_stats || _.m_lastUpdateTime < _ - 3600;
            });
          if (!_ || 0 == _.length) return !0;
          let _ = (0, _._)() + "actions/ajaxgetpartnereventsreport",
            _ = {
              sessionid: _._.SESSIONID,
              clan_account_id: _.GetAccountID(),
              gidlist: _.join(","),
            };
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _?.token,
            });
            return (
              (0, _._)(() => {
                this.m_mapSummaryStats.set(
                  _.GetAccountID(),
                  new _(_.data.summary),
                ),
                  _.data.events_detail.forEach((_) => {
                    let _ = this.GetKey(_, _.event_gid);
                    if (this.m_mapPerEventStats.has(_)) {
                      this.m_mapPerEventStats.get(_).reset(_);
                    } else this.m_mapPerEventStats.set(_, new _(_));
                  });
              }),
              !0
            );
          } catch (_) {
            let _ = (0, _._)(_);
            console.error("CPartnerEventReportingStore " + _.strErrorMsg, _);
          }
          return !1;
        }
        BHasEventStats(_, _) {
          let _ = _._.InitFromClanID(_),
            _ = this.GetKey(_, _),
            _ = this.m_mapPerEventStats.get(_);
          return Boolean(_ && _.m_stats);
        }
      }
      (0, _._)([_._], _.prototype, "m_mapPerEventStats", void 0),
        (0, _._)([_._], _.prototype, "m_mapSummaryStats", void 0),
        (0, _._)([_._], _.prototype, "LazyInit", null);
      const _ = new _();
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      class _ {
        static ParseCSVFile(_) {
          return new Promise((_, _) => {
            const _ = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: _,
              error: (_) =>
                __webpack_require__({
                  errors: [_],
                }),
            };
            _().parse(_, _);
          });
        }
        static ReadFile(_) {
          return new Promise((_, _) => {
            const _ = new FileReader();
            (_.onload = (_) => _(_.result)), _.readAsText(_);
          });
        }
        static WriteFile(_, _) {
          let _ = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(_, _);
          else {
            const _ = window.URL.createObjectURL(_);
            _.href = _;
          }
          __webpack_require__.setAttribute("download", _),
            __webpack_require__.click();
          try {
            document.removeChild(_);
          } catch (_) {}
        }
        static WriteCSVToFile(_, _) {
          const _ = _().unparse(_, {
            header: !0,
          });
          _.WriteFile(
            new Blob([_], {
              type: "text/csv:charset=utf-8;",
            }),
            _,
          );
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(_, _) {
          const _ = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let _ =
            "<" +
            __webpack_require__() +
            'xml version="1.0" encoding="UTF-8" ' +
            __webpack_require__() +
            ">\n";
          (_ += new XMLSerializer().serializeToString(_)),
            _.WriteFile(
              new Blob([_], {
                type: "application/xml:charset=utf-8;",
              }),
              _,
            );
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = {
        include_basic_info: !0,
      };
      function _(_) {
        const { clanInfo: _, closeModal: __webpack_require__ } = _,
          [_] = (0, _._)(_.appid, _),
          [_, _] = _.useState(!0),
          [_, _] = _.useState(!0),
          _ = 1063339200,
          _ = _._.GetTimeNowWithOverride(),
          [_, _] = _.useState(_ - _._.PerMonth),
          [_, _] = _.useState(_),
          [_, _] = _.useState(-1),
          _ = _ >= 0;
        return _.createElement(
          _._,
          {
            strTitle: (0, _._)("#EventDashboard_Stats_title"),
            strDescription: (0, _._)("#EventDashboard_Stats_desc"),
            closeModal: __webpack_require__,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: _,
            onOK: () =>
              (async function (_, _, _, _, _) {
                const _ = new Array(),
                  _ = _().CancelToken.source();
                let _ = 0;
                _(_);
                const _ = 100;
                let _,
                  _ = 0,
                  _ = new Array();
                const _ = (0, _._)(_._.LANGUAGE);
                do {
                  if (
                    ((_ += 1),
                    (_ = await _._.LoadAdjacentPartnerEvents(
                      _,
                      _.clanSteamID,
                      void 0,
                      0,
                      _,
                      {
                        rtime_oldestevent: _,
                        only_summaries: !0,
                      },
                      _,
                    )),
                    _?.length > 0)
                  ) {
                    (_ += _.length), _(_), (_ = _[_.length - 1].GID);
                    const _ = _.filter(
                      (_) => _.startTime <= _ && _.BIsVisibleEvent(),
                    ).map((_) => _.GID);
                    _.length > 0 &&
                      (await _.LoadStatsForEvents(_.clanSteamID, _, _),
                      (_ += _.length),
                      _(_),
                      __webpack_require__.forEach((_) => {
                        const _ = _.GetStatsFor(_.clanSteamID, _),
                          _ = _._.GetClanEventModel(_),
                          _ = _.GetStartTimeAndDateUnixSeconds(),
                          _ = _.GetEndTimeAndDateUnixSeconds();
                        _.push({
                          appid: _.appid,
                          app_name: _?.GetName() || "",
                          event_name: _.GetNameWithFallback(_),
                          event_type: _.GetEventTypeAsString(),
                          event_start_date: (0, _._)(_) + " @ " + (0, _._)(_),
                          event_end_date: (0, _._)(_) + " @ " + (0, _._)(_),
                          ..._.m_stats,
                          event_gid: "'" + _,
                        });
                      }));
                  }
                } while (_.length == _ && _ < 100);
                return (
                  _.WriteCSVToFile(
                    _,
                    "event_stats_" +
                      _.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                      ".csv",
                  ),
                  !0
                );
              })(_, _, _ ? _ : _, _ ? Number.MAX_SAFE_INTEGER : _, _).then(() =>
                __webpack_require__(),
              ),
          },
          Boolean(_.appid && !_)
            ? _.createElement(_._, {
                string: (0, _._)("#Loading"),
                position: "center",
                size: "medium",
              })
            : _.createElement(
                "div",
                {
                  className: _().DialogCtn,
                },
                _.createElement(
                  "div",
                  {
                    className: "DialogLabel",
                  },
                  (0, _._)("#EventDashboard_Stats_Oldest_Title"),
                ),
                _.createElement(
                  "div",
                  {
                    className: "_DialogInputContainer _DialogLayout",
                  },
                  _.createElement(_._, {
                    label: (0, _._)("#EventDashboard_Stats_Oldest"),
                    onChange: _,
                    checked: _,
                    disabled: _,
                  }),
                  !_ &&
                    _.createElement(
                      "div",
                      null,
                      (0, _._)("#EventDashboard_Stats_Oldest_Override"),
                      _.createElement(_._, {
                        nEarliestTime: _,
                        nLatestTime: _ ? void 0 : _,
                        bShowTimeZone: !0,
                        fnGetTimeToUpdate: () => _,
                        fnSetTimeToUpdate: _,
                        disabled: _,
                      }),
                    ),
                ),
                _.createElement(
                  "div",
                  {
                    className: "DialogLabel",
                  },
                  (0, _._)("#EventDashboard_Stats_Newest_Title"),
                ),
                _.createElement(
                  "div",
                  {
                    className: "_DialogInputContainer _DialogLayout",
                  },
                  _.createElement(_._, {
                    label: (0, _._)("#EventDashboard_Stats_Newest"),
                    onChange: _,
                    checked: _,
                    disabled: _,
                  }),
                  !_ &&
                    _.createElement(
                      "div",
                      null,
                      (0, _._)("#EventDashboard_Stats_Newest_Override"),
                      _.createElement(_._, {
                        nEarliestTime: _ ? _ : _,
                        bShowTimeZone: !0,
                        fnGetTimeToUpdate: () => _,
                        fnSetTimeToUpdate: _,
                        disabled: _,
                      }),
                    ),
                ),
                _ &&
                  _.createElement(_._, {
                    position: "center",
                    size: "medium",
                    string: (0, _._)("#EventDashboard_Stats_Progress", _),
                  }),
              ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            summary: _,
            clanSteamID: __webpack_require__,
            bEventIsInModerationQueue: _,
            bIsAllowedInLibrary: _,
            bCompact: _,
          } = _,
          _ = _.total_read + _.total_showm,
          [_] = (0, _._)("expanded", !1),
          [_, _] = _.useState(!!_ || _);
        if (0 == _) return null;
        const _ = _._.GetClanInfoByClanAccountID(
          __webpack_require__.GetAccountID(),
        );
        return _.createElement(
          "div",
          {
            className: (0, _._)(_ ? _.EventDetailView : _.DashboardView),
          },
          _.createElement(
            "div",
            {
              className: (0, _._)(_.HeaderCtn),
            },
            !_ &&
              _.createElement(
                "div",
                {
                  className: _.StatsCtnTitle,
                },
                _.createElement(
                  "div",
                  {
                    className: _.StatTitle,
                  },
                  (0, _._)("#EventDashBoard_SummaryStats_Title"),
                  _.createElement(_._, {
                    tooltip: (0, _._)("#EventDashBoard_SummaryStats_Desc"),
                  }),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsActionRow,
                  },
                  _.createElement(
                    _._,
                    {
                      onClick: (_) =>
                        (0, _._)(
                          _,
                          `${_._.PARTNER_BASE_URL}/doc/marketing/event_tools/stats`,
                        ),
                    },
                    (0, _._)("#EventDashBoard_SummaryStats_AboutStats"),
                  ),
                  _.createElement(
                    _._,
                    {
                      onClick: (_) =>
                        (0, _._)(
                          _.createElement(_, {
                            clanInfo: _,
                          }),
                          (0, _._)(_),
                        ),
                    },
                    (0, _._)("#EventDashBoard_SummaryStats_Export"),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsActionRow,
                  },
                  _.createElement(
                    _._,
                    {
                      onClick: () => _(!_),
                    },
                    (0, _._)("#EventDashBoard_SummaryStats_Details"),
                  ),
                ),
              ),
            _.createElement(
              "div",
              {
                className: _.TotalsCtn,
              },
              _.createElement(
                "div",
                {
                  className: _.HeaderStat,
                },
                _.createElement(
                  "span",
                  {
                    className: _.StatDescription,
                  },
                  (0, _._)("#EventDashBoard_SummaryStats_TotalImpressions"),
                ),
                _.createElement(
                  "span",
                  {
                    className: _.StatFigure,
                  },
                  (0, _._)(_.total_showm),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _.HeaderStat,
                },
                _.createElement(
                  "span",
                  {
                    className: _.StatDescription,
                  },
                  (0, _._)("#EventDashBoard_SummaryStats_TotalViews"),
                ),
                _.createElement(
                  "span",
                  {
                    className: _.StatFigure,
                  },
                  (0, _._)(_.total_read),
                ),
              ),
            ),
          ),
          Boolean(_ && _) &&
            _.createElement(
              "div",
              {
                className: _.ModerationWarningCtn,
              },
              _.createElement(
                "div",
                {
                  className: _.ModerationWarning,
                },
                (0, _._)("#EventDashBoard_ModerationQueueWarning"),
              ),
              _.createElement(
                "a",
                {
                  href:
                    _._.PARTNER_BASE_URL +
                    "doc/marketing/event_tools/moderation",
                },
                (0, _._)("#EventDashBoard_Location_ModerationTitle"),
              ),
            ),
          _ &&
            _.createElement(
              "div",
              {
                className: (0, _._)(_.StatsCtn),
              },
              _ &&
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(
                      _.StatsLeftSection,
                      _ && _.DisabledStats,
                    ),
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.StatsTitle_ctn,
                    },
                    _.createElement(
                      "span",
                      null,
                      (0, _._)("#EventDashBoard_Location_LibraryHome"),
                    ),
                    _.createElement(
                      "span",
                      {
                        className: _.ModerationNote,
                      },
                      "( ",
                      (0, _._)("#EventDashBoard_Location_WaitingModeraion"),
                      " )",
                    ),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _.StatsTitle,
                    },
                    _.createElement(
                      "span",
                      null,
                      (0, _._)("#EventDashBoard_Summary_LibraryHome_Shown"),
                    ),
                    _.createElement(
                      "span",
                      null,
                      (0, _._)(_.library_overview_shown),
                    ),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _.StatsTitle,
                    },
                    _.createElement(
                      "span",
                      null,
                      (0, _._)("#EventDashBoard_Summary_LibraryHome_Read"),
                    ),
                    _.createElement(
                      "span",
                      null,
                      (0, _._)(_.library_overview_read),
                    ),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _.StatsTitle_ctn,
                    },
                    _.createElement(
                      "span",
                      null,
                      (0, _._)("#EventDashBoard_Location_LibraryDetail"),
                    ),
                    _.createElement(
                      "span",
                      {
                        className: _.ModerationNote,
                      },
                      "( ",
                      (0, _._)("#EventDashBoard_Location_WaitingModeraion"),
                      " )",
                    ),
                  ),
                  _.app_details_spotlight_shown > 0 &&
                    _.createElement(
                      _.Fragment,
                      null,
                      _.createElement(
                        "div",
                        {
                          className: _.StatsTitle,
                        },
                        _.createElement(
                          "span",
                          null,
                          (0, _._)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown",
                          ),
                        ),
                        _.createElement(
                          "span",
                          null,
                          (0, _._)(_.app_details_spotlight_shown),
                        ),
                      ),
                      _.createElement(
                        "div",
                        {
                          className: _.StatsTitle,
                        },
                        _.createElement(
                          "span",
                          null,
                          (0, _._)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Read",
                          ),
                        ),
                        _.createElement(
                          "span",
                          null,
                          (0, _._)(_.app_details_spotlight_read),
                        ),
                      ),
                    ),
                  _.createElement(
                    "div",
                    {
                      className: _.StatsTitle,
                    },
                    _.createElement(
                      "span",
                      null,
                      (0, _._)(
                        "#EventDashBoard_Summary_AppDetailActivity_Shown",
                      ),
                    ),
                    _.createElement(
                      "span",
                      null,
                      (0, _._)(_.app_details_activity_shown),
                    ),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _.StatsTitle,
                    },
                    _.createElement(
                      "span",
                      null,
                      (0, _._)(
                        "#EventDashBoard_Summary_AppDetailActivity_Read",
                      ),
                    ),
                    _.createElement(
                      "span",
                      null,
                      (0, _._)(_.app_details_activity_read),
                    ),
                  ),
                ),
              _.createElement(
                "div",
                {
                  className: _.StatsRightSection,
                },
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle_ctn,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Location_StoreDetail"),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Summary_StoreAppPage_Shown"),
                  ),
                  _.createElement(
                    "span",
                    null,
                    (0, _._)(_.store_app_page_shown),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Summary_StoreAppPage_Read"),
                  ),
                  _.createElement(
                    "span",
                    null,
                    (0, _._)(_.store_app_page_read),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle_ctn,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Location_CommunityDetail"),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Summary_Community_Shown"),
                  ),
                  _.createElement(
                    "span",
                    null,
                    (0, _._)(_.community_hub_shown),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Summary_Community_Read"),
                  ),
                  _.createElement("span", null, (0, _._)(_.community_hub_read)),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle_ctn,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Location_NewsHubDetail"),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Summary_NewsHub_Shown"),
                  ),
                  _.createElement("span", null, (0, _._)(_.news_hub_shown)),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.StatsTitle,
                  },
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventDashBoard_Summary_NewsHub_Read"),
                  ),
                  _.createElement("span", null, (0, _._)(_.news_hub_read)),
                ),
              ),
            ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.lazy(() =>
          Promise.all([
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
          ]).then(__webpack_require__.bind(__webpack_require__, 70834)),
        ),
        _ = (0, _._)((_) => {
          const {
              event: _,
              lang: __webpack_require__,
              partnerEventStore: _,
              emoticonStore: _,
              nOverrideStartTime: _,
              nOverrideEndTime: _,
              adminPanel: _,
              otherEventRow: _,
              titleBar: _,
            } = _,
            _ = _.appid,
            _ = _.clanSteamID.GetAccountID(),
            _ = (0, _._)(),
            [_, _] = (0, _._)(_, {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            }),
            [_, _] = (0, _._)(_);
          if (
            (_.useEffect(() => window.scrollTo(0, 0), [_, _]),
            !_.bLoaded || !_ || (_ && !_ && 2 !== _))
          )
            return _.createElement(
              "div",
              {
                className: _().FlexCenter,
                style: {
                  height: "400px",
                },
              },
              _.createElement(_._, {
                size: "medium",
                string: (0, _._)("#Loading"),
              }),
            );
          let _ = _.GetDescriptionWithFallback(__webpack_require__);
          const _ = (0, _._)(_, _._.k_eStoreNewsHub, "allowRelative");
          return _.createElement(_, {
            event: _,
            lang: __webpack_require__,
            titleBar: _,
            body: _.createElement(
              _._,
              null,
              _.createElement(
                "div",
                {
                  className: _().EventDetailTitleContainer,
                },
                _.createElement(_._, {
                  crumbs: [
                    {
                      name: (0, _._)("#BreadCrumbs_AllEvents"),
                      url: (0, _._)(
                        _,
                        _._.k_eStoreUsersNewsHub,
                        "allowRelative",
                      ),
                    },
                    {
                      name: (0, _._)(
                        "#BreadCrumbs_GameEvents",
                        _?.GetName() || _.group_name,
                      ),
                      url: _,
                    },
                  ],
                }),
                _.createElement(
                  "div",
                  {
                    className: _().EventDetailTitle,
                  },
                  _.GetNameWithFallback(__webpack_require__),
                ),
                _.BHasSubTitle(__webpack_require__) &&
                  _.createElement(
                    "div",
                    {
                      className: _().EventDetailsSubTitle,
                    },
                    _.GetSubTitle(__webpack_require__),
                  ),
              ),
              Boolean(_.BEventCanShowBroadcastWidget(_)) &&
                _.createElement(
                  "div",
                  {
                    className: _().EventBroadcastCtn,
                  },
                  _.createElement(
                    _.Suspense,
                    {
                      fallback: null,
                    },
                    _.createElement(_, {
                      event: _,
                      bIsPreview: _,
                      accountIDs: _ ? _.jsondata.broadcast_whitelist : void 0,
                    }),
                  ),
                ),
              _.createElement(
                "div",
                {
                  className: (0, _._)(_().EventColumns, "EventDetail"),
                },
                _.createElement(
                  "div",
                  {
                    className: _().EventDetailsDescription,
                  },
                  _.createElement(
                    _._,
                    null,
                    _.BHasTag("steam_award_nomination_request") &&
                      _.createElement(_.EventDisplaySteamAwardNomination, {
                        event: _,
                        lang: __webpack_require__,
                        previewMode: _,
                      }),
                    _.BHasTag("steam_award_vote_request") &&
                      _.createElement(_.WinterSaleSteamAwardVoteWrapper, {
                        appID: _.appid,
                        bIsEventActionEnabled: _.BIsEventActionEnabled(),
                        voteCategories: _.GetSteamAwardNomineeCategories(),
                      }),
                  ),
                  _.createElement(
                    _._,
                    null,
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)(
                          "EventDetailsBody",
                          _().EventDetailsBody,
                        ),
                      },
                      _.createElement(_._, {
                        text: _ || "",
                        partnerEventStore: _,
                        showErrorInfo: _,
                        event: _,
                        languageOverride: __webpack_require__,
                      }),
                      Boolean(
                        _.jsondata.bSaleEnabled && _.jsondata.sale_vanity_id,
                      ) &&
                        _.createElement(
                          "div",
                          {
                            className: (0, _._)(_().ReadMoreCnt),
                          },
                          _.createElement(_._, {
                            gidEvent: _.GID,
                          }),
                          _.createElement(
                            "a",
                            {
                              className: (0, _._)(_().Button, "LinkButton"),
                              href: (0, _._)(_.GetSaleURL()),
                            },
                            (0, _._)("#Event_Button_VisitSalePage"),
                          ),
                        ),
                      Boolean(_.jsondata.associated_appid) &&
                        _.createElement(_._, {
                          _: _.jsondata.associated_appid,
                          inputType: "game",
                        }),
                    ),
                  ),
                  _.createElement(
                    _._,
                    null,
                    _.createElement(_._, {
                      event: _,
                    }),
                  ),
                  Boolean(_.jsondata.read_more_link) &&
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)(_().ReadMoreCnt),
                      },
                      _.createElement(
                        _._,
                        {
                          className: (0, _._)(_().Button),
                          href: _.jsondata.read_more_link,
                        },
                        (0, _._)("#EventEmail_Button_ClickForMoreDetails"),
                      ),
                    ),
                  _.createElement("span", {
                    className: _().Clear,
                  }),
                  _.createElement(
                    _._,
                    null,
                    Boolean(_.appid) &&
                      _.createElement(_._, {
                        appid: _.appid,
                      }),
                    Boolean(_.jsondata.sale_social_media_items) &&
                      _.createElement(_._, {
                        gidClanEvent: _.GID,
                        rgSocial: _.jsondata.sale_social_media_items,
                      }),
                  ),
                ),
                _.createElement(
                  _._,
                  null,
                  _.createElement(_, {
                    event: _,
                    lang: __webpack_require__,
                    nOverrideStartTime: _,
                    nOverrideEndTime: _,
                  }),
                ),
              ),
              _.createElement(_._, {
                eventModel: _,
                emoticonStore: _,
                partnerEventStore: _,
              }),
            ),
            postbody: _.createElement(_._, null, _, _),
            footer: _.createElement(
              _._,
              null,
              _.createElement(
                "div",
                {
                  className: _().AppSummaryCtn,
                },
                _.createElement(
                  "div",
                  {
                    className: _().EventBodyPosition,
                  },
                  Boolean(_) &&
                    _.createElement(
                      "div",
                      {
                        className: _().AppSummaryWidgetTitleCtn,
                      },
                      _.createElement(
                        "span",
                        {
                          className: _().Title,
                        },
                        (0, _._)("#CreatorHome_ThisGame"),
                      ),
                      _.createElement(
                        "div",
                        {
                          className: (0, _._)(
                            _().AppSummaryWidgetCtn,
                            "AppSummaryWidgetCtn",
                          ),
                        },
                        _.createElement(_._, {
                          _: _.appid,
                          type: (0, _._)(_.GetAppType()),
                        }),
                      ),
                    ),
                  _.createElement(_._, {
                    appid: _.appid,
                    bSmallFormat: !0,
                  }),
                ),
              ),
            ),
          });
        }),
        _ = (0, _._)((_) => {
          const {
              event: _,
              lang: __webpack_require__,
              titleBar: _,
              body: _,
              postbody: _,
              footer: _,
            } = _,
            _ = _.GetImageURLWithFallback("background", __webpack_require__),
            _ = _.BIsImageSafeForAllAges("background", __webpack_require__),
            _ = "lang_" + (0, _._)(__webpack_require__),
            _ =
              !!_ &&
              _.BImageNeedScreenshotFallback("background", __webpack_require__);
          return _.createElement(
            "div",
            {
              className: (0, _._)(
                _().EventDetailsPageContainer,
                _,
                _().PartnerEventFont,
                _
                  ? _().DetailArtworkAgeAppropriate
                  : _().DetailArtworkAgeNotAppropriate,
                !_ && _().NoTitleArtwork,
                _ && _().ScreenshotInsteadOfCover,
              ),
            },
            _.createElement(_._, {
              appId: _.appid,
              clanId: _.clanSteamID.GetAccountID(),
            }),
            _,
            _.createElement(_, {
              strImageURL: _,
            }),
            _.createElement(_, {
              strImageURL: _,
              body: _,
              postbody: _,
            }),
            Boolean(_) && _.createElement(_._, null, _),
          );
        }),
        _ = (_) => {
          const { strImageURL: _ } = _;
          return _.createElement(
            "div",
            {
              className: _().EventCoverImageCtn,
            },
            _.createElement(
              "div",
              {
                className: _().EventCoverImageBlr,
              },
              _ &&
                _.createElement(
                  _.Fragment,
                  null,
                  _.createElement("div", {
                    className: _().EventCoverImageFuzz,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${_})`,
                    },
                  }),
                  _.createElement("div", {
                    className: _().EventCoverImage,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${_})`,
                    },
                  }),
                ),
            ),
            _ &&
              _.createElement("div", {
                className: _().CoverImageGradient,
              }),
          );
        },
        _ = (_) => {
          const { body: _, postbody: __webpack_require__, strImageURL: _ } = _;
          return _.createElement(
            "div",
            {
              className: _().EventBodyCtn,
            },
            _.createElement("div", {
              className: _().EventBackgroundBlurCtn,
            }),
            _.createElement(
              "div",
              {
                className: _().EventBodyPosition,
              },
              _.createElement(
                "div",
                {
                  className: _().EventBody,
                },
                Boolean(_) &&
                  _.createElement("div", {
                    className: _().EventBackgroundBlur,
                    style: {
                      backgroundImage: `url(${_})`,
                    },
                  }),
                _.createElement(_._, null, _),
              ),
              Boolean(__webpack_require__) &&
                _.createElement(_._, null, __webpack_require__),
            ),
          );
        };
      function _(_) {
        const {
            event: _,
            lang: __webpack_require__,
            nOverrideStartTime: _,
            nOverrideEndTime: _,
          } = _,
          [_, _, _, _, _, _] = (0, _._)(() => [
            _.appid,
            _.clanSteamID,
            _._.GetTimeNowWithOverride(),
            _ || _.GetStartTimeAndDateUnixSeconds(),
            _.GetCategoryAsString(),
            _.type,
          ]),
          [_] = (0, _._)(_, {
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          }),
          [_, _] = (0, _._)(_.GetAccountID());
        return _
          ? _.appid && !_
            ? null
            : _.createElement(
                "div",
                {
                  className: _().EventDetailTitleDesc,
                },
                _.createElement(
                  "div",
                  {
                    className: _().EventDetailsSticky,
                  },
                  _.is_ogg
                    ? _.createElement(_, {
                        appid: _.appid,
                      })
                    : _.createElement(_, {
                        clanSteamID: _,
                      }),
                  _.createElement(_._, {
                    event: _,
                    nOverrideEndTime: _,
                    nOverrideStartTime: _,
                  }),
                  28 !== _ &&
                    _ < _ &&
                    _.createElement(
                      "div",
                      {
                        className: _().EventDetailTimeInfo,
                      },
                      _.createElement(_._, {
                        eventModel: _,
                        lang: __webpack_require__,
                      }),
                    ),
                  _.createElement(
                    "div",
                    {
                      className: _().EventDetailUserType,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _().RightSideTitles,
                      },
                      (0, _._)("#EventDisplay_RightColumnTitle_EventType"),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().EventDetailsType,
                      },
                      _,
                      " ",
                    ),
                  ),
                  _.createElement(_, {
                    event: _,
                    bIsOGG: _.is_ogg,
                  }),
                ),
              )
          : ((0, _._)(
              _,
              "EventDetailsRightColumn - clan info (" +
                _.GetAccountID() +
                ") is missing",
            ),
            null);
      }
      function _(_) {
        const { appid: _ } = _;
        (0, _._)(_ && 0 != _, "Expected Appid In Game Info Section");
        const [__webpack_require__] = (0, _._)(_, {
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        });
        return _.createElement(
          "div",
          {
            className: _().EventDetailGameCallToAction,
          },
          _.createElement(
            "div",
            {
              className: _().RightSideTitles,
            },
            _._.some((_) => _ === _)
              ? (0, _._)("#EventDisplay_RightColumnTitle_Blog")
              : (0, _._)("#EventDisplay_RightColumnTitle_Game"),
          ),
          _.createElement(_._, {
            imageType: "header",
            capsule: {
              _: _,
              type: "game",
            },
            bHidePriceIfOwned: !0,
            bHideStatusBanners: !0,
          }),
          _.createElement(
            "div",
            {
              className: (0, _._)(_().GameActions),
            },
            __webpack_require__
              ? _.createElement(_._, {
                  appid: _,
                  bIsFree: __webpack_require__.BIsFree(),
                  bIsComingSoon: __webpack_require__.BIsComingSoon(),
                  className: _().ActionButton,
                })
              : _.createElement(_._, {
                  size: "small",
                  position: "center",
                }),
          ),
        );
      }
      function _(_) {
        const { clanSteamID: _ } = _,
          [__webpack_require__, _] = (0, _._)(_.GetAccountID());
        return _
          ? _.createElement(
              "div",
              {
                className: _().EventDetailGameCallToAction,
              },
              _.createElement(
                "div",
                {
                  className: _().RightSideTitles,
                },
                _.group_name,
              ),
              _.createElement(
                _._,
                {
                  href: (0, _._)(_._.GetCreatorStoreURL(_)),
                },
                _.createElement("div", {
                  className: _().EventDetailsAvatar,
                  style: {
                    backgroundImage: `url(${_.avatar_full_url})`,
                  },
                }),
              ),
            )
          : ((0, _._)(
              _,
              "EventDetailsRightCreatorInfo - clan info (" +
                _.GetAccountID() +
                ") is missing",
            ),
            null);
      }
      const _ = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"];
      let _ = class extends _.Component {
        GenerateOptions() {
          let _ = new Array();
          return (
            _.forEach((_) =>
              _.push(
                _.createElement(
                  "option",
                  {
                    key: _,
                    value: _,
                  },
                  _,
                ),
              ),
            ),
            _
          );
        }
        OnLanguageChange(_) {
          this.props.fnOverrideLocale(_.currentTarget.value);
        }
        render() {
          if (
            !_._.Get().GetPartnerEventPermissions(this.props.event.clanSteamID)
              .valve_admin
          )
            return _.createElement("div", null);
          let _ = this.GenerateOptions();
          return _.createElement(
            "div",
            {
              style: {
                paddingTop: 10,
              },
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _().FlexColumnContainer,
                  _().ValveOnlyBackground,
                ),
              },
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _().EventEditorTextTitle,
                    _().ValveSupportOnly,
                  ),
                },
                "Valve Support Tools (VO)",
              ),
              _.createElement("span", null, "Override Locale"),
              _.createElement(
                "select",
                {
                  onChange: this.OnLanguageChange,
                },
                _,
              ),
            ),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnLanguageChange", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        m_cancelSignal = _().CancelToken.source();
        componentDidMount() {
          const { event: _ } = this.props;
          _.BIsPartnerEvent() &&
            _.BIsVisibleEvent() &&
            _._.Get()
              .LoadSingleAppEventPermissions(_.clanSteamID)
              .then((_) => {
                _ &&
                  _.can_edit &&
                  _.LoadStatsForEvents(
                    _.clanSteamID,
                    [_.GID],
                    this.m_cancelSignal,
                  );
              });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventDisplayEditorInfo cancelled");
        }
        render() {
          const { event: _, bIsOGG: _ } = this.props;
          if (!_._.Get().GetPartnerEventPermissions(_.clanSteamID).can_edit)
            return null;
          const _ =
            _.BIsPartnerEvent() &&
            _.BIsVisibleEvent() &&
            _.GetStatsFor(_.clanSteamID, _.GID);
          return _.createElement(
            _._,
            null,
            _.createElement(
              "div",
              {
                className: _().EditorStatsCtn,
              },
              _.createElement(
                "div",
                {
                  className: _().EditorStatsRow,
                },
                _.createElement(
                  "span",
                  null,
                  (0, _._)("#EventEditor_Comments"),
                ),
                _.createElement("span", null, (0, _._)(_.nCommentCount)),
              ),
              _.createElement(
                "div",
                {
                  className: _().EditorStatsRow,
                },
                _.createElement("span", null, (0, _._)("#EventEditor_UpVotes")),
                _.createElement(
                  "span",
                  null,
                  _.nVotesUp ? (0, _._)(_.nVotesUp) : 0,
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _().EditorStatsRow,
                },
                _.createElement(
                  "span",
                  null,
                  (0, _._)("#EventEditor_DownVotes"),
                ),
                _.createElement(
                  "span",
                  null,
                  _.nVotesDown ? (0, _._)(_.nVotesDown) : 0,
                ),
              ),
            ),
            Boolean(_) &&
              _.createElement(
                "div",
                {
                  className: _().EditorStatsCtn,
                },
                (0, _._)("#EventDashBoard_SummaryStats_Admin_Title"),
                _.createElement(_, {
                  summary: _.m_stats,
                  clanSteamID: _.clanSteamID,
                  bIsAllowedInLibrary: _,
                  bEventIsInModerationQueue: (0, _._)(_),
                  bCompact: !0,
                }),
              ),
          );
        }
      };
      _ = (0, _._)([_._], _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = "hh:mm a",
        _ = "HH:mm";
      function _(_) {
        const {
          nLatestTime: _,
          nEarliestTime: __webpack_require__,
          fnGetTimeToUpdate: _,
          onError: _,
          strAlsoShowTimeZone: _,
          disabled: _,
          bNoDefaultDate: _,
          className: _,
          strDescToolTip: _,
          strDescription: _,
          bShowTimeZone: _,
          strInvalidDateTimeLocalizedMsg: _,
          fnIsValidDateTime: _,
          bWeekdaysOnly: _,
          fnSetTimeToUpdate: _,
          bForce24HourFormat: _,
        } = _;
        let _ =
          (function () {
            const _ = _()("2025-01-14T13:00:00");
            return _.format("LT").toLowerCase().includes("13");
          })() || _
            ? _
            : _;
        const _ = _(),
          [_, _] = _.useState(_ > 0 ? _()(1e3 * _) : null),
          [_, _] = _.useState(),
          [_, _] = _.useState(),
          _ = (function (_, _, _, _, _) {
            const _ = _ && _(),
              _ = _ && !_(_).isValid(),
              _ = _ && !_(_).isValid();
            let _ = null;
            (_ || _ || "string" == typeof _ || !1 === _) &&
              ((_ = (0, _._)(_ || "#DateTimePicker_Fallback_Invalid_DateTime")),
              _
                ? (_ = (0, _._)("#DateTimePicker_Time_CannotParse"))
                : _
                  ? (_ = (0, _._)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof _ && (_ = _));
            return (
              _.useEffect(() => {
                _ && _(_);
              }, [_, _]),
              _
            );
          })(_, _, _, _, _),
          _ = !_ && _;
        let _, _;
        if (
          _ &&
          __webpack_require__ &&
          _ == __webpack_require__ &&
          __webpack_require__ > _._.GetTimeNowWithOverride()
        ) {
          const _ = _().unix(__webpack_require__);
          (_ = {
            hours: {
              max: _.hour(),
              min: _.hour(),
              step: 0,
            },
            minutes: {
              max: _.minute(),
              min: _.minute(),
              step: 0,
            },
            seconds: {
              max: _.seconds(),
              min: _.seconds(),
              step: 0,
            },
            milliseconds: {
              max: 0,
              min: 0,
              step: 0,
            },
          }),
            (_ = _);
        }
        _ || !__webpack_require__ || _ || (_ = _().unix(__webpack_require__));
        const _ = _()._.guess(),
          _ = _().unix(_)._(_),
          _ = !!_ && _ != _ && _().unix(_)._(_),
          {
            fnOnInput: _,
            fnOnInputBlur: _,
            fnOnChange: _,
          } = _(
            _,
            (_) => {
              if (_) return;
              _(null);
              const _ = _(),
                _ = _().unix(_ || _._.GetTimeNowWithOverride());
              (_ = _.clone()).hour(__webpack_require__.hour()),
                _.minute(__webpack_require__.minute()),
                _.second(0),
                _(_.unix()),
                _(_);
            },
            _,
          ),
          {
            fnOnInput: _,
            fnOnInputBlur: _,
            fnOnChange: _,
          } = _(
            _,
            (_) => {
              if (_) return;
              _(null);
              let _ = _(),
                _ = 0;
              if (_) {
                const _ = _().unix(_);
                (_ = _.clone()).year(__webpack_require__.year()),
                  _.month(__webpack_require__.month()),
                  _.date(__webpack_require__.date()),
                  (_ = _.unix());
              } else {
                _ =
                  _().unix(_).hour(0).second(0).minutes(0).unix() +
                  3600 * _.hour() +
                  60 * _.minutes();
              }
              _(_), _(_().unix(_));
            },
            _,
          );
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().EventTimeSection, _),
          },
          _.createElement(
            "div",
            {
              className: (0, _._)(_().EventTimeTitle, "DialogLabel"),
            },
            _.createElement(
              _._,
              {
                toolTipContent: _,
                direction: "top",
              },
              Boolean(_) && _.createElement("span", null, _),
            ),
            _ &&
              _.createElement(
                "span",
                {
                  className: _().DateErrorCtn,
                },
                _.createElement("img", {
                  src: _._,
                }),
                _,
              ),
          ),
          _.createElement(
            "div",
            {
              className: _().FlexRowContainer,
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(_().InputBorder, _().TimeBlock),
              },
              _.createElement(_(), {
                onChange: _,
                timeFormat: !1,
                value: null != _ ? _ : _,
                isValidDate: (_) =>
                  !_ &&
                  (function (_, _, _, _) {
                    const _ = _().unix(_).hour(0).seconds(0).minute(0);
                    let _ = _.unix() >= _.unix();
                    if (_ && _ && _ >= _) {
                      const _ = _().unix(_).hour(23).minute(59).seconds(59);
                      _ = _.unix() <= _.unix();
                    }
                    _ &&
                      _ &&
                      ((0 != _.weekday() && 6 != _.weekday()) || (_ = !1));
                    return _;
                  })(__webpack_require__, _, _, _),
                initialValue: _,
                inputProps: {
                  placeholder: (0, _._)("#DateTimePicker_Enter_Date"),
                  className: (0, _._)(
                    _().DateWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: _,
                  onChange: (_) => _(_.currentTarget.value),
                  onBlur: (_) => _(_.currentTarget.value),
                },
              }),
              !!_ &&
                _.createElement(
                  "div",
                  {
                    className: _().PacificTimeHint,
                  },
                  _.format("L"),
                ),
            ),
            _.createElement(
              "div",
              {
                className: (0, _._)(_().InputBorder, _().TimeBlock),
              },
              _.createElement(_(), {
                onChange: _,
                dateFormat: !1,
                timeFormat: _,
                timeConstraints: _,
                value: null != _ ? _ : _,
                inputProps: {
                  placeholder: (0, _._)("#DateTimePicker_Enter_Time"),
                  className: (0, _._)(
                    _().TimeWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: _,
                  onChange: (_) => _(_.currentTarget.value),
                  onBlur: (_) => _(_.currentTarget.value),
                },
              }),
              !!_ &&
                _.createElement(
                  "div",
                  {
                    className: _().PacificTimeHint,
                  },
                  _.format("LT"),
                ),
            ),
            _ &&
              _.createElement(
                "div",
                null,
                _.createElement(
                  "div",
                  {
                    className: _().TimeZone,
                  },
                  _.zoneAbbr(),
                ),
                !!_ &&
                  _.createElement(
                    "div",
                    {
                      className: _().TimeZone,
                    },
                    _.zoneAbbr(),
                  ),
              ),
          ),
          Boolean(_) &&
            _.createElement(
              "div",
              null,
              (0, _._)("#DateTimePicker_DateTime_Fixed"),
            ),
        );
      }
      function _(_, _, _) {
        const [_, _] = _.useState(!1);
        return {
          fnOnInput: (_) => {
            __webpack_require__(_), _(!0);
          },
          fnOnInputBlur: (_) => {
            if (_) {
              const _ = _(_);
              _.isValid() && _(_);
            }
            _(!1);
          },
          fnOnChange: (_) => {
            if (!_)
              if ("string" == typeof _) {
                const _ = _(_);
                _.isValid() && _(_);
              } else _(_);
          },
        };
      }
      function _(_) {
        return _()(
          _,
          (function () {
            const _ = _()("2025-01-14").format("L").split(/[-/.]/),
              _ = _.indexOf("14");
            return _.indexOf("01") < _;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function _(_) {
        return _()(_, [_, _], !1);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
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
          const _ =
            _._.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
          try {
            const _ = await _().get(_, {
              withCredentials: !0,
            });
            if (1 == _?.data?.success)
              return (
                (this.m_objApprovalPriviledge = {
                  bHasAccess: _.data.bHasAccess,
                }),
                this.m_objApprovalPriviledge
              );
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                _.strErrorMsg,
              _,
            );
          }
          return {
            bHasAccess: !1,
          };
        }
        static s_Singleton;
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        constructor() {
          (0, _._)(this);
          let _ = (0, _._)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(_)
            ? ("dev" === _._.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    _.bHasAccess,
                ),
              (this.m_objApprovalPriviledge = _),
              (this.m_LoadingPriviledgePromise = null))
            : (_._.logged_in && _._.EREALM === _._.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = {
                bHasAccess: !1,
              });
        }
        ValidateStoreDefault(_) {
          return _ && "object" == typeof _ && "boolean" == typeof _.bHasAccess;
        }
      }
      (0, _._)([_._], _.prototype, "m_objApprovalPriviledge", void 0);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
          const [_, __webpack_require__] = _.useState(null),
            { eventModel: _ } = _;
          let _ = _.clanSteamID.GetAccountID();
          _.useEffect(() => {
            const _ = _().CancelToken.source();
            return (
              (async () => {
                const _ = _._.InitFromClanID(_),
                  _ = await _._.Get().LoadSingleAppEventPermissions(_),
                  _ = await _.Get().HintLoadAppApprovalPriviledge();
                _.token.reason ||
                  __webpack_require__(
                    _._.is_support || _.can_edit || _.bHasAccess,
                  );
              })(),
              () => _.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [_]);
          const _ = _._.InitFromClanID(_);
          return _._.is_support ||
            _._.Get().GetPartnerEventPermissions(_).can_edit
            ? _.createElement(_._, {
                eventModel: _,
                partnerEventStore: _.partnerEventStore,
                addtionalAdminButtons: _
                  ? [
                      _.createElement(_, {
                        key: "removesteamchina",
                        eventModel: _,
                      }),
                    ]
                  : void 0,
              })
            : _.Get().BHasSteamChinaAppApprovalPriviledge()
              ? _.createElement(
                  "div",
                  {
                    className: _.DisplayAdminPanel,
                  },
                  _.createElement(
                    "span",
                    {
                      className: _.DisplayAdminPanel_Title,
                    },
                    (0, _._)("#EventDisplay_Admin_Title"),
                  ),
                  _.createElement(_, {
                    key: "removesteamchina",
                    eventModel: _,
                  }),
                )
              : null;
        }),
        _ = (_) => {
          const { eventModel: _ } = _;
          return _.createElement(
            "div",
            {
              className: (0, _._)(
                _.Button,
                _.AdminButton,
                _.ValveOnlyBackground,
              ),
              onClick: (_) => {
                let _ = !1;
                (0, _._)(
                  _.createElement(
                    _._,
                    {
                      strTitle: (0, _._)(
                        "#EventAdmin_Moderation_HideEventInSC",
                      ),
                      strDescription: (0, _._)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc",
                      ),
                      bDestructiveWarning: !0,
                      closeModal: _.closeModal,
                      onOK: () => {
                        (_ = !0),
                          (async () => {
                            let _ = new URLSearchParams();
                            __webpack_require__.append(
                              "sessionid",
                              _._.SESSIONID,
                            ),
                              __webpack_require__.append(
                                "clan_accountid",
                                "" + _.clanSteamID.GetAccountID(),
                              ),
                              __webpack_require__.append(
                                "gid_clan_event",
                                "" + _.GID,
                              );
                            let _ = !1,
                              _ = 0;
                            try {
                              const _ = `${_._.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                _ = await _().post(_, _, {
                                  withCredentials: !0,
                                });
                              (_ =
                                1 == _?.data?.success ||
                                29 == _?.data?.success),
                                29 == _?.data?.success &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${_.clanSteamID.GetAccountID()} : ${_.GID}; event is still removed from SC`,
                                  ),
                                (_ = _?.data?.success);
                            } catch (_) {
                              const _ = (0, _._)(_);
                              (_ = _.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    _.strErrorMsg,
                                  _,
                                );
                            }
                            _.closeModal && _.closeModal(),
                              (0, _._)(
                                _
                                  ? _.createElement(
                                      _._,
                                      {
                                        bAlertDialog: !0,
                                      },
                                      (0, _._)("#EventDisplay_Share_Success"),
                                    )
                                  : _.createElement(
                                      _._,
                                      null,
                                      (0, _._)("#EventDisplay_Share_Failure") +
                                        " " +
                                        _,
                                    ),
                                window,
                              );
                          })();
                      },
                    },
                    _ &&
                      _.createElement(_._, {
                        size: "medium",
                        position: "center",
                      }),
                  ),
                  (0, _._)(_),
                );
              },
            },
            (0, _._)("#EventAdmin_Moderation_HideEventInSC"),
          );
        };
    },
  },
]);
