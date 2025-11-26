(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8589],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = function (_, _) {
          var _ = new _(
            (_ = _ || {}).typeNumber || -1,
            _.errorCorrectLevel || _._,
          );
          return __webpack_require__.addData(_), __webpack_require__.make(), _;
        };
      (_.ErrorCorrectLevel = _), (module.exports = _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid");
      function _(_) {
        (this.mode = _.MODE_8BIT_BYTE), (this.data = _);
      }
      (_.prototype = {
        getLength: function (_) {
          return this.data.length;
        },
        write: function (_) {
          for (var _ = 0; _ < this.data.length; _++)
            _.put(this.data.charCodeAt(_), 8);
        },
      }),
        (module.exports = _);
    },
    chunkid: (module) => {
      function _() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (_.prototype = {
        get: function (_) {
          var _ = Math.floor(_ / 8);
          return 1 == ((this.buffer[_] >>> (7 - (_ % 8))) & 1);
        },
        put: function (_, _) {
          for (var _ = 0; _ < _; _++)
            this.putBit(1 == ((_ >>> (_ - _ - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (_) {
          var _ = Math.floor(this.length / 8);
          this.buffer.length <= _ && this.buffer.push(0),
            _ && (this.buffer[_] |= 128 >>> (this.length % 8)),
            this.length++;
        },
      }),
        (module.exports = _);
    },
    chunkid: (module) => {
      module.exports = {
        _: 1,
        _: 0,
        _: 3,
        _: 2,
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid");
      function _(_, _) {
        if (null == _.length) throw new Error(_.length + "/" + _);
        for (var _ = 0; _ < _.length && 0 == _[_]; ) _++;
        this.num = new Array(_.length - _ + _);
        for (var _ = 0; _ < _.length - _; _++) this.num[_] = _[_ + _];
      }
      (_.prototype = {
        get: function (_) {
          return this.num[_];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (_) {
          for (
            var _ = new Array(this.getLength() + _.getLength() - 1), _ = 0;
            _ < this.getLength();
            _++
          )
            for (var _ = 0; _ < _.getLength(); _++)
              _[_ + _] ^= _.gexp(_.glog(this.get(_)) + _.glog(_.get(_)));
          return new _(_, 0);
        },
        mod: function (_) {
          if (this.getLength() - _.getLength() < 0) return this;
          for (
            var _ = _.glog(this.get(0)) - _.glog(_.get(0)),
              _ = new Array(this.getLength()),
              _ = 0;
            _ < this.getLength();
            _++
          )
            _[_] = this.get(_);
          for (_ = 0; _ < _.getLength(); _++)
            _[_] ^= _.gexp(_.glog(_.get(_)) + _);
          return new _(_, 0).mod(_);
        },
      }),
        (module.exports = _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        (this.typeNumber = _),
          (this.errorCorrectLevel = _),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var _ = _.prototype;
      (_.addData = function (_) {
        var _ = new _(_);
        this.dataList.push(_), (this.dataCache = null);
      }),
        (_.isDark = function (_, _) {
          if (_ < 0 || this.moduleCount <= _ || _ < 0 || this.moduleCount <= _)
            throw new Error(_ + "," + _);
          return this.modules[_][_];
        }),
        (_.getModuleCount = function () {
          return this.moduleCount;
        }),
        (_.make = function () {
          if (this.typeNumber < 1) {
            var _ = 1;
            for (_ = 1; _ < 40; _++) {
              for (
                var _ = _.getRSBlocks(_, this.errorCorrectLevel),
                  _ = new _(),
                  _ = 0,
                  _ = 0;
                _ < _.length;
                _++
              )
                _ += _[_].dataCount;
              for (_ = 0; _ < this.dataList.length; _++) {
                var _ = this.dataList[_];
                __webpack_require__.put(_.mode, 4),
                  __webpack_require__.put(
                    _.getLength(),
                    _.getLengthInBits(_.mode, _),
                  ),
                  _.write(_);
              }
              if (__webpack_require__.getLengthInBits() <= 8 * _) break;
            }
            this.typeNumber = _;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (_.makeImpl = function (_, _) {
          (this.moduleCount = 4 * this.typeNumber + 17),
            (this.modules = new Array(this.moduleCount));
          for (var _ = 0; _ < this.moduleCount; _++) {
            this.modules[_] = new Array(this.moduleCount);
            for (var _ = 0; _ < this.moduleCount; _++)
              this.modules[_][_] = null;
          }
          this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(_, _),
            this.typeNumber >= 7 && this.setupTypeNumber(_),
            null == this.dataCache &&
              (this.dataCache = _.createData(
                this.typeNumber,
                this.errorCorrectLevel,
                this.dataList,
              )),
            this.mapData(this.dataCache, _);
        }),
        (_.setupPositionProbePattern = function (_, _) {
          for (var _ = -1; _ <= 7; _++)
            if (!(_ + _ <= -1 || this.moduleCount <= _ + _))
              for (var _ = -1; _ <= 7; _++)
                _ + _ <= -1 ||
                  this.moduleCount <= _ + _ ||
                  (this.modules[_ + _][_ + _] =
                    (0 <= _ && _ <= 6 && (0 == _ || 6 == _)) ||
                    (0 <= _ && _ <= 6 && (0 == _ || 6 == _)) ||
                    (2 <= _ && _ <= 4 && 2 <= _ && _ <= 4));
        }),
        (_.getBestMaskPattern = function () {
          for (var _ = 0, _ = 0, _ = 0; _ < 8; _++) {
            this.makeImpl(!0, _);
            var _ = _.getLostPoint(this);
            (0 == _ || _ > _) && ((_ = _), (_ = _));
          }
          return _;
        }),
        (_.createMovieClip = function (_, _, _) {
          var _ = _.createEmptyMovieClip(_, _);
          this.make();
          for (var _ = 0; _ < this.modules.length; _++)
            for (var _ = 1 * _, _ = 0; _ < this.modules[_].length; _++) {
              var _ = 1 * _;
              this.modules[_][_] &&
                (_.beginFill(0, 100),
                _.moveTo(_, _),
                _.lineTo(_ + 1, _),
                _.lineTo(_ + 1, _ + 1),
                _.lineTo(_, _ + 1),
                _.endFill());
            }
          return _;
        }),
        (_.setupTimingPattern = function () {
          for (var _ = 8; _ < this.moduleCount - 8; _++)
            null == this.modules[_][6] && (this.modules[_][6] = _ % 2 == 0);
          for (var _ = 8; _ < this.moduleCount - 8; _++)
            null == this.modules[6][_] && (this.modules[6][_] = _ % 2 == 0);
        }),
        (_.setupPositionAdjustPattern = function () {
          for (
            var _ = _.getPatternPosition(this.typeNumber), _ = 0;
            _ < _.length;
            _++
          )
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_],
                _ = _[_];
              if (null == this.modules[_][_])
                for (var _ = -2; _ <= 2; _++)
                  for (var _ = -2; _ <= 2; _++)
                    this.modules[_ + _][_ + _] =
                      -2 == _ ||
                      2 == _ ||
                      -2 == _ ||
                      2 == _ ||
                      (0 == _ && 0 == _);
            }
        }),
        (_.setupTypeNumber = function (_) {
          for (
            var _ = _.getBCHTypeNumber(this.typeNumber), _ = 0;
            _ < 18;
            _++
          ) {
            var _ = !_ && 1 == ((_ >> _) & 1);
            this.modules[Math.floor(_ / 3)][
              (_ % 3) + this.moduleCount - 8 - 3
            ] = _;
          }
          for (_ = 0; _ < 18; _++) {
            _ = !_ && 1 == ((_ >> _) & 1);
            this.modules[(_ % 3) + this.moduleCount - 8 - 3][
              Math.floor(_ / 3)
            ] = _;
          }
        }),
        (_.setupTypeInfo = function (_, _) {
          for (
            var _ = (this.errorCorrectLevel << 3) | _,
              _ = _.getBCHTypeInfo(_),
              _ = 0;
            _ < 15;
            _++
          ) {
            var _ = !_ && 1 == ((_ >> _) & 1);
            _ < 6
              ? (this.modules[_][8] = _)
              : _ < 8
                ? (this.modules[_ + 1][8] = _)
                : (this.modules[this.moduleCount - 15 + _][8] = _);
          }
          for (_ = 0; _ < 15; _++) {
            _ = !_ && 1 == ((_ >> _) & 1);
            _ < 8
              ? (this.modules[8][this.moduleCount - _ - 1] = _)
              : _ < 9
                ? (this.modules[8][15 - _ - 1 + 1] = _)
                : (this.modules[8][15 - _ - 1] = _);
          }
          this.modules[this.moduleCount - 8][8] = !_;
        }),
        (_.mapData = function (_, _) {
          for (
            var _ = -1,
              _ = this.moduleCount - 1,
              _ = 7,
              _ = 0,
              _ = this.moduleCount - 1;
            _ > 0;
            _ -= 2
          )
            for (6 == _ && _--; ; ) {
              for (var _ = 0; _ < 2; _++)
                if (null == this.modules[_][_ - _]) {
                  var _ = !1;
                  _ < _.length && (_ = 1 == ((_[_] >>> _) & 1)),
                    _.getMask(_, _, _ - _) && (_ = !_),
                    (this.modules[_][_ - _] = _),
                    -1 == --_ && (_++, (_ = 7));
                }
              if ((_ += _) < 0 || this.moduleCount <= _) {
                (_ -= _), (_ = -_);
                break;
              }
            }
        }),
        (_.PAD0 = 236),
        (_.PAD1 = 17),
        (_.createData = function (_, _, _) {
          for (
            var _ = _.getRSBlocks(_, _), _ = new _(), _ = 0;
            _ < _.length;
            _++
          ) {
            var _ = _[_];
            _.put(_.mode, 4),
              _.put(_.getLength(), _.getLengthInBits(_.mode, _)),
              _.write(_);
          }
          var _ = 0;
          for (_ = 0; _ < _.length; _++) _ += _[_].dataCount;
          if (_.getLengthInBits() > 8 * _)
            throw new Error(
              "code length overflow. (" +
                _.getLengthInBits() +
                ">" +
                8 * _ +
                ")",
            );
          for (
            _.getLengthInBits() + 4 <= 8 * _ && _.put(0, 4);
            _.getLengthInBits() % 8 != 0;
          )
            _.putBit(!1);
          for (
            ;
            !(
              _.getLengthInBits() >= 8 * _ ||
              (_.put(_.PAD0, 8), _.getLengthInBits() >= 8 * _)
            );
          )
            _.put(_.PAD1, 8);
          return _.createBytes(_, _);
        }),
        (_.createBytes = function (_, _) {
          for (
            var _ = 0,
              _ = 0,
              _ = 0,
              _ = new Array(_.length),
              _ = new Array(_.length),
              _ = 0;
            _ < _.length;
            _++
          ) {
            var _ = _[_].dataCount,
              _ = _[_].totalCount - _;
            (_ = Math.max(_, _)), (_ = Math.max(_, _)), (_[_] = new Array(_));
            for (var _ = 0; _ < _[_].length; _++)
              _[_][_] = 255 & _.buffer[_ + _];
            _ += _;
            var _ = _.getErrorCorrectPolynomial(_),
              _ = new _(_[_], _.getLength() - 1).mod(_);
            _[_] = new Array(_.getLength() - 1);
            for (_ = 0; _ < _[_].length; _++) {
              var _ = _ + _.getLength() - _[_].length;
              _[_][_] = _ >= 0 ? _.get(_) : 0;
            }
          }
          var _ = 0;
          for (_ = 0; _ < _.length; _++) _ += _[_].totalCount;
          var _ = new Array(_),
            _ = 0;
          for (_ = 0; _ < _; _++)
            for (_ = 0; _ < _.length; _++)
              _ < _[_].length && (_[_++] = _[_][_]);
          for (_ = 0; _ < _; _++)
            for (_ = 0; _ < _.length; _++)
              _ < _[_].length && (_[_++] = _[_][_]);
          return _;
        }),
        (module.exports = _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid");
      function _(_, _) {
        (this.totalCount = _), (this.dataCount = _);
      }
      (_.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16],
      ]),
        (_.getRSBlocks = function (_, _) {
          var _ = _.getRsBlockTable(_, _);
          if (null == _)
            throw new Error(
              "bad rs block @ typeNumber:" + _ + "/errorCorrectLevel:" + _,
            );
          for (var _ = _.length / 3, _ = new Array(), _ = 0; _ < _; _++)
            for (
              var _ = _[3 * _ + 0], _ = _[3 * _ + 1], _ = _[3 * _ + 2], _ = 0;
              _ < _;
              _++
            )
              _.push(new _(_, _));
          return _;
        }),
        (_.getRsBlockTable = function (_, _) {
          switch (_) {
            case _._:
              return _.RS_BLOCK_TABLE[4 * (_ - 1) + 0];
            case _._:
              return _.RS_BLOCK_TABLE[4 * (_ - 1) + 1];
            case _._:
              return _.RS_BLOCK_TABLE[4 * (_ - 1) + 2];
            case _._:
              return _.RS_BLOCK_TABLE[4 * (_ - 1) + 3];
            default:
              return;
          }
        }),
        (module.exports = _);
    },
    chunkid: (module) => {
      for (
        var _ = {
            glog: function (_) {
              if (_ < 1) throw new Error("glog(" + _ + ")");
              return _.LOG_TABLE[_];
            },
            gexp: function (_) {
              for (; _ < 0; ) _ += 255;
              for (; _ >= 256; ) _ -= 255;
              return _.EXP_TABLE[_];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          _ = 0;
        _ < 8;
        _++
      )
        _.EXP_TABLE[_] = 1 << _;
      for (_ = 8; _ < 256; _++)
        _.EXP_TABLE[_] =
          _.EXP_TABLE[_ - 4] ^
          _.EXP_TABLE[_ - 5] ^
          _.EXP_TABLE[_ - 6] ^
          _.EXP_TABLE[_ - 8];
      for (_ = 0; _ < 255; _++) _.LOG_TABLE[_.EXP_TABLE[_]] = _;
      module.exports = _;
    },
    chunkid: (module) => {
      module.exports = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8,
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = 0,
        _ = 1,
        _ = 2,
        _ = 3,
        _ = 4,
        _ = 5,
        _ = 6,
        _ = 7,
        _ = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function (_) {
            for (
              var _ = _ << 10;
              _.getBCHDigit(_) - _.getBCHDigit(_.G15) >= 0;
            )
              _ ^= _.G15 << (_.getBCHDigit(_) - _.getBCHDigit(_.G15));
            return ((_ << 10) | _) ^ _.G15_MASK;
          },
          getBCHTypeNumber: function (_) {
            for (
              var _ = _ << 12;
              _.getBCHDigit(_) - _.getBCHDigit(_.G18) >= 0;
            )
              _ ^= _.G18 << (_.getBCHDigit(_) - _.getBCHDigit(_.G18));
            return (_ << 12) | _;
          },
          getBCHDigit: function (_) {
            for (var _ = 0; 0 != _; ) _++, (_ >>>= 1);
            return _;
          },
          getPatternPosition: function (_) {
            return _.PATTERN_POSITION_TABLE[_ - 1];
          },
          getMask: function (_, _, _) {
            switch (_) {
              case _:
                return (_ + _) % 2 == 0;
              case _:
                return _ % 2 == 0;
              case _:
                return _ % 3 == 0;
              case _:
                return (_ + _) % 3 == 0;
              case _:
                return (Math.floor(_ / 2) + Math.floor(_ / 3)) % 2 == 0;
              case _:
                return ((_ * _) % 2) + ((_ * _) % 3) == 0;
              case _:
                return (((_ * _) % 2) + ((_ * _) % 3)) % 2 == 0;
              case _:
                return (((_ * _) % 3) + ((_ + _) % 2)) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + _);
            }
          },
          getErrorCorrectPolynomial: function (_) {
            for (var _ = new _([1], 0), _ = 0; _ < _; _++)
              _ = _.multiply(new _([1, _.gexp(_)], 0));
            return _;
          },
          getLengthInBits: function (_, _) {
            if (1 <= _ && _ < 10)
              switch (_) {
                case _.MODE_NUMBER:
                  return 10;
                case _.MODE_ALPHA_NUM:
                  return 9;
                case _.MODE_8BIT_BYTE:
                case _.MODE_KANJI:
                  return 8;
                default:
                  throw new Error("mode:" + _);
              }
            else if (_ < 27)
              switch (_) {
                case _.MODE_NUMBER:
                  return 12;
                case _.MODE_ALPHA_NUM:
                  return 11;
                case _.MODE_8BIT_BYTE:
                  return 16;
                case _.MODE_KANJI:
                  return 10;
                default:
                  throw new Error("mode:" + _);
              }
            else {
              if (!(_ < 41)) throw new Error("type:" + _);
              switch (_) {
                case _.MODE_NUMBER:
                  return 14;
                case _.MODE_ALPHA_NUM:
                  return 13;
                case _.MODE_8BIT_BYTE:
                  return 16;
                case _.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:" + _);
              }
            }
          },
          getLostPoint: function (_) {
            for (var _ = _.getModuleCount(), _ = 0, _ = 0; _ < _; _++)
              for (var _ = 0; _ < _; _++) {
                for (var _ = 0, _ = _.isDark(_, _), _ = -1; _ <= 1; _++)
                  if (!(_ + _ < 0 || _ <= _ + _))
                    for (var _ = -1; _ <= 1; _++)
                      _ + _ < 0 ||
                        _ <= _ + _ ||
                        (0 == _ && 0 == _) ||
                        (_ == _.isDark(_ + _, _ + _) && _++);
                _ > 5 && (_ += 3 + _ - 5);
              }
            for (_ = 0; _ < _ - 1; _++)
              for (_ = 0; _ < _ - 1; _++) {
                var _ = 0;
                _.isDark(_, _) && _++,
                  _.isDark(_ + 1, _) && _++,
                  _.isDark(_, _ + 1) && _++,
                  _.isDark(_ + 1, _ + 1) && _++,
                  (0 != _ && 4 != _) || (_ += 3);
              }
            for (_ = 0; _ < _; _++)
              for (_ = 0; _ < _ - 6; _++)
                _.isDark(_, _) &&
                  !_.isDark(_, _ + 1) &&
                  _.isDark(_, _ + 2) &&
                  _.isDark(_, _ + 3) &&
                  _.isDark(_, _ + 4) &&
                  !_.isDark(_, _ + 5) &&
                  _.isDark(_, _ + 6) &&
                  (_ += 40);
            for (_ = 0; _ < _; _++)
              for (_ = 0; _ < _ - 6; _++)
                _.isDark(_, _) &&
                  !_.isDark(_ + 1, _) &&
                  _.isDark(_ + 2, _) &&
                  _.isDark(_ + 3, _) &&
                  _.isDark(_ + 4, _) &&
                  !_.isDark(_ + 5, _) &&
                  _.isDark(_ + 6, _) &&
                  (_ += 40);
            var _ = 0;
            for (_ = 0; _ < _; _++)
              for (_ = 0; _ < _; _++) _.isDark(_, _) && _++;
            return (_ += 10 * (Math.abs((100 * _) / _ / _ - 50) / 5));
          },
        };
      module.exports = _;
    },
  },
]);
