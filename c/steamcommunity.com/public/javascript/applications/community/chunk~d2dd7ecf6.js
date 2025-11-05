(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9505],
  {
    chunkid: (module) => {
      module.exports = {
        SavedImage: "_1y3QVgsz4daj3E3S5wzwt-",
        SaveButtonCtn: "_2Edwnbc-tjinTT_s7zIKTd",
        SaveButton: "_2hloqzkRkAWkw50l4XPN-N",
        HaventSavedInAShortTime: "_3xoBR2gVk2F0Bmejh20Yhl",
        HaventSavedInALongTime: "_1bg505mDp3agK0eHP0NoxI",
        Pulse: "_3oWE-wt1PQ7Rv2IJ0vCmO",
        SaveSuccessNotification: "_1gabCN13JTZzv2A2fXqGve",
        slideIn: "_2kGhkRiew8we__yyM1878e",
        slideOut: "_2oAIIbl5uoREv1Es4TZkUQ",
        SaveSuccessTitle: "_1d5GXYH4AY9WFkoszJVzsQ",
      };
    },
    chunkid: function (_, _) {
      var _, _, _;
      (_ = []),
        (_ = function _() {
          var _,
            _ =
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
            _ = {};
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
                var _ = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < _) {
                  let _ = this._config.newline;
                  _ ||
                    ((_ = this._config.quoteChar || '"'),
                    (_ = this._handle.guessLineEndings(_, _))),
                    (_ = [..._.split(_).slice(_)].join(_));
                }
                this.isFirstChunk &&
                  _(this._config.beforeFirstChunk) &&
                  void 0 !== (_ = this._config.beforeFirstChunk(_)) &&
                  (_ = _),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (_ = this._partialLine + _);
                var _ =
                  ((this._partialLine = ""),
                  this._handle.parse(_, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((_ = _.meta.cursor),
                    this._finished ||
                      ((this._partialLine = _.substring(_ - this._baseIndex)),
                      (this._baseIndex = _)),
                    _ && _.data && (this._rowCount += _.data.length),
                    (_ =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    _)
                  )
                    __webpack_require__.postMessage({
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
                    this._completeResults = _ = void 0;
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
                    __webpack_require__.postMessage({
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
                    var _,
                      _ = this._config.downloadRequestHeaders;
                    for (_ in _) _.setRequestHeader(_, _[_]);
                  }
                  var _;
                  this._config.chunkSize &&
                    ((_ = this._start + this._config.chunkSize - 1),
                    _.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + _,
                    ));
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
                    : ((this._start +=
                        this._config.chunkSize || _.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((_) =>
                            null !== (_ = _.getResponseHeader("Content-Range"))
                              ? parseInt(_.substring(_.lastIndexOf("/") + 1))
                              : -1)(_)),
                      this.parseChunk(_.responseText)));
              }),
              (this._chunkError = function (_) {
                (_ = _.statusText || _), this._sendError(new Error(_));
              });
          }
          function _(_) {
            (_ = _ || {}).chunkSize || (_.chunkSize = _.LocalChunkSize),
              _.call(this, _);
            var _,
              _,
              _ = "undefined" != typeof FileReader;
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
                var _ = this._input,
                  _ =
                    (this._config.chunkSize &&
                      ((_ = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (_ = __webpack_require__.call(_, this._start, _))),
                    _.readAsText(_, this._config.encoding));
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
                var _, _;
                if (!this._finished)
                  return (
                    (_ = this._config.chunkSize),
                    (_ = _
                      ? ((_ = _.substring(0, _)), _.substring(_))
                      : ((_ = _), "")),
                    (this._finished = !_),
                    this.parseChunk(_)
                  );
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
                _.skipEmptyLines &&
                  (_.data = _.data.filter(function (_) {
                    return !_(_);
                  })),
                _())
              ) {
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
              }
              function _(_, _) {
                for (var _ = _.header ? {} : [], _ = 0; _ < _.length; _++) {
                  var _ = _,
                    _ = _[_];
                  (_ = ((_, _) =>
                    ((_) => (
                      _.dynamicTypingFunction &&
                        void 0 === _.dynamicTyping[_] &&
                        (_.dynamicTyping[_] = _.dynamicTypingFunction(_)),
                      !0 === (_.dynamicTyping[_] || _.dynamicTyping)
                    ))(_)
                      ? "true" === _ ||
                        "TRUE" === _ ||
                        ("false" !== _ &&
                          "FALSE" !== _ &&
                          (((_) => {
                            if (
                              _.test(_) &&
                              ((_ = parseFloat(_)), _ < _ && _ < _)
                            )
                              return 1;
                          })(_)
                            ? parseFloat(_)
                            : _.test(_)
                              ? new Date(_)
                              : "" === _
                                ? null
                                : _))
                      : _)(
                    (_ = _.header
                      ? _ >= _.length
                        ? "__parsed_extra"
                        : _[_]
                      : _),
                    (_ = _.transform ? _.transform(_, _) : _),
                  )),
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
              var _;
              _ &&
                (_.header || _.dynamicTyping || _.transform) &&
                ((_ = 1),
                !_.data.length || Array.isArray(_.data[0])
                  ? ((_.data = _.data.map(_)), (_ = _.data.length))
                  : (_.data = _(_.data, 0)),
                _.header && _.meta && (_.meta.fields = _),
                (_ += _));
            }
            function _() {
              return _.header && 0 === _.length;
            }
            function _(_, _, _, _) {
              (_ = {
                type: _,
                code: _,
                message: _,
              }),
                void 0 !== _ && (_.row = _),
                _.errors.push(_);
            }
            _(_.step) &&
              ((_ = _.step),
              (_.step = function (_) {
                (_ = _),
                  _()
                    ? _()
                    : (_(),
                      0 !== _.data.length &&
                        ((_ += _.data.length),
                        _.preview && _ > _.preview
                          ? __webpack_require__.abort()
                          : ((_.data = _.data[0]), _(_, _))));
              })),
              (this.parse = function (_, _, _) {
                var _ = _.quoteChar || '"';
                return (
                  _.newline || (_.newline = this.guessLineEndings(_, _)),
                  (_ = !1),
                  _.delimiter
                    ? _(_.delimiter) &&
                      ((_.delimiter = _.delimiter(_)),
                      (_.meta.delimiter = _.delimiter))
                    : ((_ = ((_, _, _, _, _) => {
                        var _, _, _, _;
                        _ = _ || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          _.RECORD_SEP,
                          _.UNIT_SEP,
                        ];
                        for (var _ = 0; _ < _.length; _++) {
                          for (
                            var _,
                              _ = _[_],
                              _ = 0,
                              _ = 0,
                              _ = 0,
                              _ =
                                ((_ = void 0),
                                new _({
                                  comments: _,
                                  delimiter: _,
                                  newline: _,
                                  preview: 10,
                                }).parse(_)),
                              _ = 0;
                            _ < _.data.length;
                            _++
                          )
                            _ && _(_.data[_])
                              ? _++
                              : ((_ += _ = _.data[_].length),
                                void 0 === _
                                  ? (_ = _)
                                  : 0 < _ && ((_ += Math.abs(_ - _)), (_ = _)));
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
                      )).successful
                        ? (_.delimiter = _.bestDelimiter)
                        : ((_ = !0), (_.delimiter = _.DefaultDelimiter)),
                      (_.meta.delimiter = _.delimiter)),
                  (_ = _(_)),
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
                  (_ = _(_.chunk)
                    ? ""
                    : _.substring(__webpack_require__.getCharIndex()));
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
                  __webpack_require__.abort(),
                  (_.meta.aborted = !0),
                  _(_.complete) && _.complete(_),
                  (_ = "");
              }),
              (this.guessLineEndings = function (_, _) {
                (_ = _.substring(0, 1048576)),
                  (_ = new RegExp(_(_) + "([^]*?)" + _(_), "gm"));
                var _ = (_ = _.replace(_, "")).split("\r");
                if (
                  ((_ =
                    1 < (_ = _.split("\n")).length &&
                    _[0].length < _[0].length),
                  1 === _.length || _)
                )
                  return "\n";
                for (var _ = 0, _ = 0; _ < _.length; _++)
                  "\n" === _[_][0] && _++;
                return _ >= _.length / 2 ? "\r\n" : "\r";
              });
          }
          function _(_) {
            return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(_) {
            var _ = (_ = _ || {}).delimiter,
              _ = _.newline,
              _ = _.comments,
              _ = _.step,
              _ = _.preview,
              _ = _.fastMode,
              _ = null,
              _ = !1,
              _ = null == _.quoteChar ? '"' : _.quoteChar,
              _ = _;
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
                if (_[_] === _)
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
                    if (_ === _ && _[_ + 1] === _) _++;
                    else if (_ === _ || 0 === _ || _[_ - 1] !== _) {
                      -1 !== _ && _ < _ + 1 && (_ = _.indexOf(_, _ + 1));
                      var _ = _(
                        -1 ===
                          (_ = -1 !== _ && _ < _ + 1 ? _.indexOf(_, _ + 1) : _)
                          ? _
                          : Math.min(_, _),
                      );
                      if (_.substr(_ + 1 + _, _) === _) {
                        _.push(_.substring(_, _).replace(_, _)),
                          _[(_ = _ + 1 + _ + _)] !== _ && (_ = _.indexOf(_, _)),
                          (_ = _.indexOf(_, _)),
                          (_ = _.indexOf(_, _));
                        break;
                      }
                      if (
                        ((_ = _(_)),
                        _.substring(_ + 1 + _, _ + 1 + _ + _) === _)
                      ) {
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
                        message: "Trailing quote on quoted field is malformed",
                        row: _.length,
                        index: _,
                      }),
                        _++;
                    }
                  }
                else if (_ && 0 === _.length && _.substring(_, _ + _) === _) {
                  if (-1 === _) return _();
                  (_ = _ + _), (_ = _.indexOf(_, _)), (_ = _.indexOf(_, _));
                } else if (-1 !== _ && (_ < _ || -1 === _))
                  _.push(_.substring(_, _)), (_ = _ + _), (_ = _.indexOf(_, _));
                else {
                  if (-1 === _) break;
                  if ((_.push(_.substring(_, _)), _(_ + _), _ && (_(), _)))
                    return _();
                  if (_ && _.length >= _) return _(!0);
                }
              return _();
              function _(_) {
                _.push(_), (_ = _);
              }
              function _(_) {
                var _ = 0;
                return -1 !== _ &&
                  (_ = _.substring(_ + 1, _)) &&
                  "" === _.trim()
                  ? _.length
                  : _;
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
                if (_.header && !_ && _.length && !_) {
                  var _ = _[0],
                    _ = Object.create(null),
                    _ = new Set(_);
                  let _ = !1;
                  for (let _ = 0; _ < _.length; _++) {
                    let _ = _[_];
                    if (
                      _[
                        (_ = _(_.transformHeader) ? _.transformHeader(_, _) : _)
                      ]
                    ) {
                      let _,
                        _ = _[_];
                      for (; (_ = _ + "_" + _), _++, _.has(_); );
                      _.add(_),
                        (_[_] = _),
                        _[_]++,
                        (_ = !0),
                        ((_ = null === _ ? {} : _)[_] = _);
                    } else (_[_] = 1), (_[_] = _);
                    _.add(_);
                  }
                  _ && console.warn("Duplicate headers found and renamed."),
                    (_ = !0);
                }
                return {
                  data: _,
                  errors: _,
                  meta: {
                    delimiter: _,
                    linebreak: _,
                    aborted: _,
                    truncated: !!_,
                    cursor: _ + (_ || 0),
                    renamedHeaders: _,
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
            var _,
              _ = Array.isArray(_) ? [] : {};
            for (_ in _) _[_] = _(_[_]);
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
            (_.parse = function (_, _) {
              var _ = (_ = _ || {}).dynamicTyping || !1;
              if (
                (_(_) && ((_.dynamicTypingFunction = _), (_ = {})),
                (_.dynamicTyping = _),
                (_.transform = !!_(_.transform) && _.transform),
                !_.worker || !_.WORKERS_SUPPORTED)
              )
                return (
                  (_ = null),
                  _.NODE_STREAM_INPUT,
                  "string" == typeof _
                    ? ((_ = ((_) =>
                        65279 !== _.charCodeAt(0) ? _ : _.slice(1))(_)),
                      (_ = new (_.download ? _ : _)(_)))
                    : !0 === _.readable && _(_.read) && _(_._)
                      ? (_ = new _(_))
                      : ((_.File && _ instanceof File) ||
                          _ instanceof Object) &&
                        (_ = new _(_)),
                  _.stream(_)
                );
              ((_ = (() => {
                var _;
                return (
                  !!_.WORKERS_SUPPORTED &&
                  ((_ = (() => {
                    var _ = _.URL || _.webkitURL || null,
                      _ = _.toString();
                    return (
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
                      ))
                    );
                  })()),
                  ((_ = new _.Worker(_)).onmessage = _),
                  (_._ = _++),
                  (_[_._] = _))
                );
              })()).userStep = _.step),
                (_.userChunk = _.chunk),
                (_.userComplete = _.complete),
                (_.userError = _.error),
                (_.step = _(_.step)),
                (_.chunk = _(_.chunk)),
                (_.complete = _(_.complete)),
                (_.error = _(_.error)),
                delete _.worker,
                _.postMessage({
                  input: _,
                  config: _,
                  workerId: _._,
                });
            }),
            (_.unparse = function (_, _) {
              var _ = !1,
                _ = !0,
                _ = ",",
                _ = "\r\n",
                _ = '"',
                _ = _ + _,
                _ = !1,
                _ = null,
                _ = !1,
                _ =
                  ((() => {
                    if ("object" == typeof _) {
                      if (
                        ("string" != typeof _.delimiter ||
                          _.BAD_DELIMITERS.filter(function (_) {
                            return -1 !== _.delimiter.indexOf(_);
                          }).length ||
                          (_ = _.delimiter),
                        ("boolean" != typeof _.quotes &&
                          "function" != typeof _.quotes &&
                          !Array.isArray(_.quotes)) ||
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
                        _.escapeFormulae instanceof RegExp
                          ? (_ = _.escapeFormulae)
                          : "boolean" == typeof _.escapeFormulae &&
                            _.escapeFormulae &&
                            (_ = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(_(_), "g"));
              if (
                ("string" == typeof _ && (_ = JSON.parse(_)), Array.isArray(_))
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
                var _ = "",
                  _ =
                    ("string" == typeof _ && (_ = JSON.parse(_)),
                    "string" == typeof _ && (_ = JSON.parse(_)),
                    Array.isArray(_) && 0 < _.length),
                  _ = !Array.isArray(_[0]);
                if (_ && _) {
                  for (var _ = 0; _ < _.length; _++)
                    0 < _ && (_ += _), (_ += _(_[_], _));
                  0 < _.length && (_ += _);
                }
                for (var _ = 0; _ < _.length; _++) {
                  var _ = (_ ? _ : _[_]).length,
                    _ = !1,
                    _ = _ ? 0 === Object.keys(_[_]).length : 0 === _[_].length;
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
                var _, _;
                return null == _
                  ? ""
                  : _.constructor === Date
                    ? JSON.stringify(_).slice(1, 25)
                    : ((_ = !1),
                      _ &&
                        "string" == typeof _ &&
                        _.test(_) &&
                        ((_ = "'" + _), (_ = !0)),
                      (_ = _.toString().replace(_, _)),
                      (_ =
                        _ ||
                        !0 === _ ||
                        ("function" == typeof _ && __webpack_require__(_, _)) ||
                        (Array.isArray(_) && _[_]) ||
                        ((_, _) => {
                          for (var _ = 0; _ < _.length; _++)
                            if (-1 < _.indexOf(_[_])) return !0;
                          return !1;
                        })(_, _.BAD_DELIMITERS) ||
                        -1 < _.indexOf(_) ||
                        " " === _.charAt(0) ||
                        " " === _.charAt(_.length - 1))
                        ? _ + _ + _
                        : _);
              }
            }),
            (_.RECORD_SEP = String.fromCharCode(30)),
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
            _.jQuery &&
              ((_ = _.jQuery)._.parse = function (_) {
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
                  if (0 === _.length) _(_.complete) && _.complete();
                  else {
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
                  }
                }
                function _() {
                  _.splice(0, 1), _();
                }
              }),
            _ &&
              (_.onmessage = function (_) {
                (_ = _.data),
                  void 0 === _.WORKER_ID && _ && (_.WORKER_ID = _.workerId),
                  "string" == typeof _.input
                    ? __webpack_require__.postMessage({
                        workerId: _.WORKER_ID,
                        results: _.parse(_.input, _.config),
                        finished: !0,
                      })
                    : ((_.File && _.input instanceof File) ||
                        _.input instanceof Object) &&
                      (_ = _.parse(_.input, _.config)) &&
                      __webpack_require__.postMessage({
                        workerId: _.WORKER_ID,
                        results: _,
                        finished: !0,
                      });
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
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: [
            "crowdin_metadata_for_clan_event",
            _.ConvertTo64BitString(),
            _,
          ],
          queryFn: async () => {
            const _ = _._.Init(_._);
            _.Body().set_steamid(_.ConvertTo64BitString()),
              _.Body().set_itemid(_);
            const _ = await _._.GetClanEventCrowdInMetadata(_, _);
            return 1 != _.GetEResult() ? null : _.Body().toObject();
          },
        });
      }
      async function _(_, _) {
        const _ = _._.Init(_._);
        __webpack_require__.Body().set_steamid(_);
        const _ = await _._.GetClanCrowdInMetadata(_, _);
        if (42 === _.GetEResult())
          return {
            crowdin_project_id: null,
            crowdin_directory_id: null,
            push_by_default: !1,
          };
        if (1 !== _.GetEResult()) throw _.GetEResult();
        return _.Body().toObject();
      }
      function _(_) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: ["clan_crowdin_mapping", _],
          queryFn: async () => await _(_, _),
        });
      }
      function _(_) {
        return (function (_) {
          const _ = (0, _._)(),
            _ = (0, _._)({
              queryKey: _.queryKey,
              queryFn: async () => _.queryFn(_, ..._.args),
            });
          return _.children(_);
        })({
          queryKey: ["clan_crowdin_mapping", _.clanSteamId],
          queryFn: _,
          args: [_.clanSteamId],
          children: _.children,
        });
      }
      const _ = (0, _.createContext)(null);
      function _(_) {
        const _ = _(_.clanInfo.clanSteamID.ConvertTo64BitString());
        let _ = !1;
        return (
          _.isSuccess && (_ = _.data.push_by_default),
          _.createElement(
            _.Provider,
            {
              value: {
                clanSteamId: _.clanInfo.clanSteamID,
                bPushToCrowdInByDefault: _,
              },
            },
            _.children,
          )
        );
      }
      function _(_, _, _) {
        const _ = (0, _._)();
        return (0, _._)({
          mutationKey: ["fetch_translation_for_clan_event", _, _, _],
          mutationFn: async function () {
            return await (async function (_, _, _, _) {
              const _ = _._.Init(_._);
              _.Body().set_language(_),
                _.Body().set_steamid(_),
                _.Body().set_itemid(_);
              const _ = await _._.FetchTranslationFromCrowdIn(_, _);
              if (1 != _.GetEResult())
                throw new Error(
                  `Error from FetchLocalizationForClanEventFromCrowdIn: ${_.GetErrorMessage()} (${_.GetEResult()})`,
                );
              return _.Body().toObject();
            })(_, _, _, _);
          },
          retry: !1,
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
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
      _.m_DummyValueForQuestionHack = 0;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
    },
  },
]);
