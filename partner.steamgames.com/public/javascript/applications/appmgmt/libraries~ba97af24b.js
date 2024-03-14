/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9749],
  {
    59223: (e, r, t) => {
      var i = t(99928),
        n = t(62679),
        a = function (e, r) {
          var t = new i(
            (r = r || {}).typeNumber || -1,
            r.errorCorrectLevel || n.H,
          );
          return t.addData(e), t.make(), t;
        };
      (a.ErrorCorrectLevel = n), (e.exports = a);
    },
    72529: (e, r, t) => {
      var i = t(83415);
      function n(e) {
        (this.mode = i.MODE_8BIT_BYTE), (this.data = e);
      }
      (n.prototype = {
        getLength: function (e) {
          return this.data.length;
        },
        write: function (e) {
          for (var r = 0; r < this.data.length; r++)
            e.put(this.data.charCodeAt(r), 8);
        },
      }),
        (e.exports = n);
    },
    6438: (e) => {
      function r() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (r.prototype = {
        get: function (e) {
          var r = Math.floor(e / 8);
          return 1 == ((this.buffer[r] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, r) {
          for (var t = 0; t < r; t++)
            this.putBit(1 == ((e >>> (r - t - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          var r = Math.floor(this.length / 8);
          this.buffer.length <= r && this.buffer.push(0),
            e && (this.buffer[r] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = r);
    },
    62679: (e) => {
      e.exports = { L: 1, M: 0, Q: 3, H: 2 };
    },
    23652: (e, r, t) => {
      var i = t(71455);
      function n(e, r) {
        if (null == e.length) throw new Error(e.length + "/" + r);
        for (var t = 0; t < e.length && 0 == e[t]; ) t++;
        this.num = new Array(e.length - t + r);
        for (var i = 0; i < e.length - t; i++) this.num[i] = e[i + t];
      }
      (n.prototype = {
        get: function (e) {
          return this.num[e];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (e) {
          for (
            var r = new Array(this.getLength() + e.getLength() - 1), t = 0;
            t < this.getLength();
            t++
          )
            for (var a = 0; a < e.getLength(); a++)
              r[t + a] ^= i.gexp(i.glog(this.get(t)) + i.glog(e.get(a)));
          return new n(r, 0);
        },
        mod: function (e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (
            var r = i.glog(this.get(0)) - i.glog(e.get(0)),
              t = new Array(this.getLength()),
              a = 0;
            a < this.getLength();
            a++
          )
            t[a] = this.get(a);
          for (a = 0; a < e.getLength(); a++)
            t[a] ^= i.gexp(i.glog(e.get(a)) + r);
          return new n(t, 0).mod(e);
        },
      }),
        (e.exports = n);
    },
    99928: (e, r, t) => {
      var i = t(72529),
        n = t(29071),
        a = t(6438),
        s = t(16723),
        o = t(23652);
      function c(e, r) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = r),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var l = c.prototype;
      (l.addData = function (e) {
        var r = new i(e);
        this.dataList.push(r), (this.dataCache = null);
      }),
        (l.isDark = function (e, r) {
          if (e < 0 || this.moduleCount <= e || r < 0 || this.moduleCount <= r)
            throw new Error(e + "," + r);
          return this.modules[e][r];
        }),
        (l.getModuleCount = function () {
          return this.moduleCount;
        }),
        (l.make = function () {
          if (this.typeNumber < 1) {
            var e = 1;
            for (e = 1; e < 40; e++) {
              for (
                var r = n.getRSBlocks(e, this.errorCorrectLevel),
                  t = new a(),
                  i = 0,
                  o = 0;
                o < r.length;
                o++
              )
                i += r[o].dataCount;
              for (o = 0; o < this.dataList.length; o++) {
                var c = this.dataList[o];
                t.put(c.mode, 4),
                  t.put(c.getLength(), s.getLengthInBits(c.mode, e)),
                  c.write(t);
              }
              if (t.getLengthInBits() <= 8 * i) break;
            }
            this.typeNumber = e;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (l.makeImpl = function (e, r) {
          (this.moduleCount = 4 * this.typeNumber + 17),
            (this.modules = new Array(this.moduleCount));
          for (var t = 0; t < this.moduleCount; t++) {
            this.modules[t] = new Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++)
              this.modules[t][i] = null;
          }
          this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, r),
            this.typeNumber >= 7 && this.setupTypeNumber(e),
            null == this.dataCache &&
              (this.dataCache = c.createData(
                this.typeNumber,
                this.errorCorrectLevel,
                this.dataList,
              )),
            this.mapData(this.dataCache, r);
        }),
        (l.setupPositionProbePattern = function (e, r) {
          for (var t = -1; t <= 7; t++)
            if (!(e + t <= -1 || this.moduleCount <= e + t))
              for (var i = -1; i <= 7; i++)
                r + i <= -1 ||
                  this.moduleCount <= r + i ||
                  (this.modules[e + t][r + i] =
                    (0 <= t && t <= 6 && (0 == i || 6 == i)) ||
                    (0 <= i && i <= 6 && (0 == t || 6 == t)) ||
                    (2 <= t && t <= 4 && 2 <= i && i <= 4));
        }),
        (l.getBestMaskPattern = function () {
          for (var e = 0, r = 0, t = 0; t < 8; t++) {
            this.makeImpl(!0, t);
            var i = s.getLostPoint(this);
            (0 == t || e > i) && ((e = i), (r = t));
          }
          return r;
        }),
        (l.createMovieClip = function (e, r, t) {
          var i = e.createEmptyMovieClip(r, t);
          this.make();
          for (var n = 0; n < this.modules.length; n++)
            for (var a = 1 * n, s = 0; s < this.modules[n].length; s++) {
              var o = 1 * s;
              this.modules[n][s] &&
                (i.beginFill(0, 100),
                i.moveTo(o, a),
                i.lineTo(o + 1, a),
                i.lineTo(o + 1, a + 1),
                i.lineTo(o, a + 1),
                i.endFill());
            }
          return i;
        }),
        (l.setupTimingPattern = function () {
          for (var e = 8; e < this.moduleCount - 8; e++)
            null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
          for (var r = 8; r < this.moduleCount - 8; r++)
            null == this.modules[6][r] && (this.modules[6][r] = r % 2 == 0);
        }),
        (l.setupPositionAdjustPattern = function () {
          for (
            var e = s.getPatternPosition(this.typeNumber), r = 0;
            r < e.length;
            r++
          )
            for (var t = 0; t < e.length; t++) {
              var i = e[r],
                n = e[t];
              if (null == this.modules[i][n])
                for (var a = -2; a <= 2; a++)
                  for (var o = -2; o <= 2; o++)
                    this.modules[i + a][n + o] =
                      -2 == a ||
                      2 == a ||
                      -2 == o ||
                      2 == o ||
                      (0 == a && 0 == o);
            }
        }),
        (l.setupTypeNumber = function (e) {
          for (
            var r = s.getBCHTypeNumber(this.typeNumber), t = 0;
            t < 18;
            t++
          ) {
            var i = !e && 1 == ((r >> t) & 1);
            this.modules[Math.floor(t / 3)][
              (t % 3) + this.moduleCount - 8 - 3
            ] = i;
          }
          for (t = 0; t < 18; t++) {
            i = !e && 1 == ((r >> t) & 1);
            this.modules[(t % 3) + this.moduleCount - 8 - 3][
              Math.floor(t / 3)
            ] = i;
          }
        }),
        (l.setupTypeInfo = function (e, r) {
          for (
            var t = (this.errorCorrectLevel << 3) | r,
              i = s.getBCHTypeInfo(t),
              n = 0;
            n < 15;
            n++
          ) {
            var a = !e && 1 == ((i >> n) & 1);
            n < 6
              ? (this.modules[n][8] = a)
              : n < 8
                ? (this.modules[n + 1][8] = a)
                : (this.modules[this.moduleCount - 15 + n][8] = a);
          }
          for (n = 0; n < 15; n++) {
            a = !e && 1 == ((i >> n) & 1);
            n < 8
              ? (this.modules[8][this.moduleCount - n - 1] = a)
              : n < 9
                ? (this.modules[8][15 - n - 1 + 1] = a)
                : (this.modules[8][15 - n - 1] = a);
          }
          this.modules[this.moduleCount - 8][8] = !e;
        }),
        (l.mapData = function (e, r) {
          for (
            var t = -1,
              i = this.moduleCount - 1,
              n = 7,
              a = 0,
              o = this.moduleCount - 1;
            o > 0;
            o -= 2
          )
            for (6 == o && o--; ; ) {
              for (var c = 0; c < 2; c++)
                if (null == this.modules[i][o - c]) {
                  var l = !1;
                  a < e.length && (l = 1 == ((e[a] >>> n) & 1)),
                    s.getMask(r, i, o - c) && (l = !l),
                    (this.modules[i][o - c] = l),
                    -1 == --n && (a++, (n = 7));
                }
              if ((i += t) < 0 || this.moduleCount <= i) {
                (i -= t), (t = -t);
                break;
              }
            }
        }),
        (c.PAD0 = 236),
        (c.PAD1 = 17),
        (c.createData = function (e, r, t) {
          for (
            var i = n.getRSBlocks(e, r), o = new a(), l = 0;
            l < t.length;
            l++
          ) {
            var u = t[l];
            o.put(u.mode, 4),
              o.put(u.getLength(), s.getLengthInBits(u.mode, e)),
              u.write(o);
          }
          var m = 0;
          for (l = 0; l < i.length; l++) m += i[l].dataCount;
          if (o.getLengthInBits() > 8 * m)
            throw new Error(
              "code length overflow. (" +
                o.getLengthInBits() +
                ">" +
                8 * m +
                ")",
            );
          for (
            o.getLengthInBits() + 4 <= 8 * m && o.put(0, 4);
            o.getLengthInBits() % 8 != 0;

          )
            o.putBit(!1);
          for (
            ;
            !(
              o.getLengthInBits() >= 8 * m ||
              (o.put(c.PAD0, 8), o.getLengthInBits() >= 8 * m)
            );

          )
            o.put(c.PAD1, 8);
          return c.createBytes(o, i);
        }),
        (c.createBytes = function (e, r) {
          for (
            var t = 0,
              i = 0,
              n = 0,
              a = new Array(r.length),
              c = new Array(r.length),
              l = 0;
            l < r.length;
            l++
          ) {
            var u = r[l].dataCount,
              m = r[l].totalCount - u;
            (i = Math.max(i, u)), (n = Math.max(n, m)), (a[l] = new Array(u));
            for (var d = 0; d < a[l].length; d++)
              a[l][d] = 255 & e.buffer[d + t];
            t += u;
            var B = s.getErrorCorrectPolynomial(m),
              b = new o(a[l], B.getLength() - 1).mod(B);
            c[l] = new Array(B.getLength() - 1);
            for (d = 0; d < c[l].length; d++) {
              var y = d + b.getLength() - c[l].length;
              c[l][d] = y >= 0 ? b.get(y) : 0;
            }
          }
          var g = 0;
          for (d = 0; d < r.length; d++) g += r[d].totalCount;
          var w = new Array(g),
            _ = 0;
          for (d = 0; d < i; d++)
            for (l = 0; l < r.length; l++)
              d < a[l].length && (w[_++] = a[l][d]);
          for (d = 0; d < n; d++)
            for (l = 0; l < r.length; l++)
              d < c[l].length && (w[_++] = c[l][d]);
          return w;
        }),
        (e.exports = c);
    },
    29071: (e, r, t) => {
      var i = t(62679);
      function n(e, r) {
        (this.totalCount = e), (this.dataCount = r);
      }
      (n.RS_BLOCK_TABLE = [
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
        (n.getRSBlocks = function (e, r) {
          var t = n.getRsBlockTable(e, r);
          if (null == t)
            throw new Error(
              "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + r,
            );
          for (var i = t.length / 3, a = new Array(), s = 0; s < i; s++)
            for (
              var o = t[3 * s + 0], c = t[3 * s + 1], l = t[3 * s + 2], u = 0;
              u < o;
              u++
            )
              a.push(new n(c, l));
          return a;
        }),
        (n.getRsBlockTable = function (e, r) {
          switch (r) {
            case i.L:
              return n.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case i.M:
              return n.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case i.Q:
              return n.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case i.H:
              return n.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
        (e.exports = n);
    },
    71455: (e) => {
      for (
        var r = {
            glog: function (e) {
              if (e < 1) throw new Error("glog(" + e + ")");
              return r.LOG_TABLE[e];
            },
            gexp: function (e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return r.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          t = 0;
        t < 8;
        t++
      )
        r.EXP_TABLE[t] = 1 << t;
      for (t = 8; t < 256; t++)
        r.EXP_TABLE[t] =
          r.EXP_TABLE[t - 4] ^
          r.EXP_TABLE[t - 5] ^
          r.EXP_TABLE[t - 6] ^
          r.EXP_TABLE[t - 8];
      for (t = 0; t < 255; t++) r.LOG_TABLE[r.EXP_TABLE[t]] = t;
      e.exports = r;
    },
    83415: (e) => {
      e.exports = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8,
      };
    },
    16723: (e, r, t) => {
      var i = t(83415),
        n = t(23652),
        a = t(71455),
        s = 0,
        o = 1,
        c = 2,
        l = 3,
        u = 4,
        m = 5,
        d = 6,
        B = 7,
        b = {
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
          getBCHTypeInfo: function (e) {
            for (
              var r = e << 10;
              b.getBCHDigit(r) - b.getBCHDigit(b.G15) >= 0;

            )
              r ^= b.G15 << (b.getBCHDigit(r) - b.getBCHDigit(b.G15));
            return ((e << 10) | r) ^ b.G15_MASK;
          },
          getBCHTypeNumber: function (e) {
            for (
              var r = e << 12;
              b.getBCHDigit(r) - b.getBCHDigit(b.G18) >= 0;

            )
              r ^= b.G18 << (b.getBCHDigit(r) - b.getBCHDigit(b.G18));
            return (e << 12) | r;
          },
          getBCHDigit: function (e) {
            for (var r = 0; 0 != e; ) r++, (e >>>= 1);
            return r;
          },
          getPatternPosition: function (e) {
            return b.PATTERN_POSITION_TABLE[e - 1];
          },
          getMask: function (e, r, t) {
            switch (e) {
              case s:
                return (r + t) % 2 == 0;
              case o:
                return r % 2 == 0;
              case c:
                return t % 3 == 0;
              case l:
                return (r + t) % 3 == 0;
              case u:
                return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0;
              case m:
                return ((r * t) % 2) + ((r * t) % 3) == 0;
              case d:
                return (((r * t) % 2) + ((r * t) % 3)) % 2 == 0;
              case B:
                return (((r * t) % 3) + ((r + t) % 2)) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + e);
            }
          },
          getErrorCorrectPolynomial: function (e) {
            for (var r = new n([1], 0), t = 0; t < e; t++)
              r = r.multiply(new n([1, a.gexp(t)], 0));
            return r;
          },
          getLengthInBits: function (e, r) {
            if (1 <= r && r < 10)
              switch (e) {
                case i.MODE_NUMBER:
                  return 10;
                case i.MODE_ALPHA_NUM:
                  return 9;
                case i.MODE_8BIT_BYTE:
                case i.MODE_KANJI:
                  return 8;
                default:
                  throw new Error("mode:" + e);
              }
            else if (r < 27)
              switch (e) {
                case i.MODE_NUMBER:
                  return 12;
                case i.MODE_ALPHA_NUM:
                  return 11;
                case i.MODE_8BIT_BYTE:
                  return 16;
                case i.MODE_KANJI:
                  return 10;
                default:
                  throw new Error("mode:" + e);
              }
            else {
              if (!(r < 41)) throw new Error("type:" + r);
              switch (e) {
                case i.MODE_NUMBER:
                  return 14;
                case i.MODE_ALPHA_NUM:
                  return 13;
                case i.MODE_8BIT_BYTE:
                  return 16;
                case i.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:" + e);
              }
            }
          },
          getLostPoint: function (e) {
            for (var r = e.getModuleCount(), t = 0, i = 0; i < r; i++)
              for (var n = 0; n < r; n++) {
                for (var a = 0, s = e.isDark(i, n), o = -1; o <= 1; o++)
                  if (!(i + o < 0 || r <= i + o))
                    for (var c = -1; c <= 1; c++)
                      n + c < 0 ||
                        r <= n + c ||
                        (0 == o && 0 == c) ||
                        (s == e.isDark(i + o, n + c) && a++);
                a > 5 && (t += 3 + a - 5);
              }
            for (i = 0; i < r - 1; i++)
              for (n = 0; n < r - 1; n++) {
                var l = 0;
                e.isDark(i, n) && l++,
                  e.isDark(i + 1, n) && l++,
                  e.isDark(i, n + 1) && l++,
                  e.isDark(i + 1, n + 1) && l++,
                  (0 != l && 4 != l) || (t += 3);
              }
            for (i = 0; i < r; i++)
              for (n = 0; n < r - 6; n++)
                e.isDark(i, n) &&
                  !e.isDark(i, n + 1) &&
                  e.isDark(i, n + 2) &&
                  e.isDark(i, n + 3) &&
                  e.isDark(i, n + 4) &&
                  !e.isDark(i, n + 5) &&
                  e.isDark(i, n + 6) &&
                  (t += 40);
            for (n = 0; n < r; n++)
              for (i = 0; i < r - 6; i++)
                e.isDark(i, n) &&
                  !e.isDark(i + 1, n) &&
                  e.isDark(i + 2, n) &&
                  e.isDark(i + 3, n) &&
                  e.isDark(i + 4, n) &&
                  !e.isDark(i + 5, n) &&
                  e.isDark(i + 6, n) &&
                  (t += 40);
            var u = 0;
            for (n = 0; n < r; n++)
              for (i = 0; i < r; i++) e.isDark(i, n) && u++;
            return (t += 10 * (Math.abs((100 * u) / r / r - 50) / 5));
          },
        };
      e.exports = b;
    },
    5490: (e, r, t) => {
      "use strict";
      t.d(r, {
        $h: () => ee,
        Am: () => p,
        Uy: () => g,
        _u: () => b,
        kp: () => c,
        oZ: () => d,
        up: () => u,
      });
      var i = t(10059),
        n = t(39087),
        a = t(79545),
        s = t(23722);
      const o = i.Message;
      class c extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.account_name || n.aR(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  account_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Request";
        }
      }
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.publickey_mod || n.aR(l.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  publickey_mod: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  publickey_exp: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  timestamp: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Response";
        }
      }
      class u extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.device_friendly_name || n.aR(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  platform_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  os_type: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  gaming_device_type: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  client_count: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  machine_id: { n: 6, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_DeviceDetails";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.confirmation_type || n.aR(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  confirmation_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  associated_message: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AllowedConfirmation";
        }
      }
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.device_friendly_name || n.aR(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  platform_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  device_details: { n: 3, c: u },
                  website_id: {
                    n: 4,
                    d: "Unknown",
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Request";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.client_id || n.aR(B.M()),
            o.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  challenge_url: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  request_id: { n: 3, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  interval: { n: 4, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  allowed_confirmations: { n: 5, c: m, r: !0, q: !0 },
                  version: { n: 6, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Response";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.device_friendly_name || n.aR(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  account_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  encrypted_password: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  encryption_timestamp: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  remember_login: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  platform_type: {
                    n: 6,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  persistence: {
                    n: 7,
                    d: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  website_id: {
                    n: 8,
                    d: "Unknown",
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  device_details: { n: 9, c: u },
                  guard_data: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  language: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  qos_level: {
                    n: 12,
                    d: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Request";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.client_id || n.aR(y.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  request_id: { n: 2, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  interval: { n: 3, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  allowed_confirmations: { n: 4, c: m, r: !0, q: !0 },
                  steamid: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  weak_token: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  agreement_session_url: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  extended_error_message: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Response";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.client_id || n.aR(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  request_id: { n: 2, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  token_to_revoke: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Request";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.new_client_id || n.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  new_client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  new_challenge_url: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  refresh_token: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  access_token: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  had_remote_interaction: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  account_name: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  new_guard_data: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  agreement_session_url: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Response";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.client_id || n.aR(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Request";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.ip || n.aR(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  ip: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  geoloc: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  city: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  state: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  country: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  platform_type: {
                    n: 6,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  device_friendly_name: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  version: { n: 8, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  login_history: {
                    n: 9,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  requestor_location_mismatch: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  high_usage_login: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  requested_persistence: {
                    n: 12,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Response";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Request";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.client_ids || n.aR(F.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  client_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint64String,
                    pbr: n.FE.readPackedUint64String,
                    bw: n.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Response";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.version || n.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  version: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  client_id: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  steamid: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  signature: { n: 4, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  confirm: {
                    n: 5,
                    d: !1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  persistence: {
                    n: 6,
                    d: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.client_id || n.aR(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  code: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  code_type: { n: 4, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.agreement_session_url || n.aR(S.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  agreement_session_url: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.refresh_token || n.aR(R.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  refresh_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  renewal_type: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Request";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.access_token || n.aR(T.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  access_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  refresh_token: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Response";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Request";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.refresh_tokens || n.aR(W.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  refresh_tokens: { n: 1, c: O, r: !0, q: !0 },
                  requesting_token: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.time || n.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  time: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  ip: { n: 2, c: s.j7 },
                  locale: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  country: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  state: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  city: { n: 6, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.token_id || n.aR(O.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  token_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  token_description: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_updated: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  platform_type: {
                    n: 4,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  logged_in: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  os_platform: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  auth_type: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  gaming_device_type: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  first_seen: { n: 9, c: E },
                  last_seen: { n: 10, c: E },
                  os_type: { n: 11, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.token || n.aR(j.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  token: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  revoke_action: {
                    n: 2,
                    d: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_Token_Revoke_Request";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_Token_Revoke_Response";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.token_id || n.aR(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  token_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  revoke_action: {
                    n: 3,
                    d: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  signature: { n: 4, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Revoke_Request";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Revoke_Response";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || n.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  token: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  signature: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Request";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.refresh_token || n.aR(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  refresh_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  access_token: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Response";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.token_id || n.aR(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  token_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  token_description: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_updated: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  platform_type: {
                    n: 4,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  token_state: { n: 5, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  owner_steamid: {
                    n: 6,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  os_platform: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  os_type: { n: 8, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  auth_type: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  gaming_device_type: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  first_seen: { n: 11, c: D },
                  last_seen: { n: 12, c: D },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenDescription";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.time || n.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  time: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  ip: { n: 2, c: s.j7 },
                  country: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  state: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  city: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenDescription_TokenUsageEvent";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.action || n.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  action: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  time: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  ip: { n: 3, c: s.j7 },
                  actor: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenAudit";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.steamid || n.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  include_revoked_tokens: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.refresh_tokens || n.aR(N.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  refresh_tokens: { n: 1, c: U, r: !0, q: !0 },
                  last_token_reset: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(N.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.token_id || n.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  token_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.refresh_tokens || n.aR(q.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { refresh_tokens: { n: 1, c: U, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.token_id || n.aR(G.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  token_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_RevokeToken_Request";
        }
      }
      class K extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_RevokeToken_Response";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.token_id || n.aR(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  token_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_GetTokenHistory_Request";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.history || n.aR(V.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { history: { n: 1, c: x, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(V.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_GetTokenHistory_Response";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.platform || n.aR(Q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  platform: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Request";
        }
      }
      class $ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.nonce || n.aR($.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  nonce: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  expiry: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA($.M(), e, r);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Response";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.appid || n.aR(Y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  minutes_remaining: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_TimeRemaining";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.platform || n.aR(J.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  platform: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Request";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.entries || n.aR(Z.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { entries: { n: 2, c: Y, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(Z.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Response";
        }
      }
      var ee, re, te;
      !(function (e) {
        (e.GetPasswordRSAPublicKey = function (e, r) {
          return e.SendMsg(
            "Authentication.GetPasswordRSAPublicKey#1",
            (0, a.MD)(c, r),
            l,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.BeginAuthSessionViaQR = function (e, r) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, a.MD)(d, r),
              B,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BeginAuthSessionViaCredentials = function (e, r) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, a.MD)(b, r),
              y,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.PollAuthSessionStatus = function (e, r) {
            return e.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, a.MD)(g, r),
              w,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetAuthSessionInfo = function (e, r) {
            return e.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, a.MD)(_, r),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateAuthSessionWithMobileConfirmation = function (e, r) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, a.MD)(z, r),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateAuthSessionWithSteamGuardCode = function (e, r) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, a.MD)(p, r),
              S,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GenerateAccessTokenForApp = function (e, r) {
            return e.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, a.MD)(R, r),
              T,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.EnumerateTokens = function (e, r) {
            return e.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, a.MD)(v, r),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAuthSessionsForAccount = function (e, r) {
            return e.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, a.MD)(h, r),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigrateMobileSession = function (e, r) {
            return e.SendMsg(
              "Authentication.MigrateMobileSession#1",
              (0, a.MD)(I, r),
              k,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RevokeToken = function (e, r) {
            return e.SendMsg(
              "Authentication.RevokeToken#1",
              (0, a.MD)(j, r),
              A,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RevokeRefreshToken = function (e, r) {
            return e.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, a.MD)(C, r),
              X,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(ee || (ee = {})),
        (function (e) {
          (e.QueryRefreshTokensByAccount = function (e, r) {
            return e.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, a.MD)(P, r),
              N,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
            (e.QueryRefreshTokenByID = function (e, r) {
              return e.SendMsg(
                "AuthenticationSupport.QueryRefreshTokenByID#1",
                (0, a.MD)(L, r),
                q,
                { bConstMethod: !0, ePrivilege: 5 },
              );
            }),
            (e.RevokeToken = function (e, r) {
              return e.SendMsg(
                "AuthenticationSupport.RevokeToken#1",
                (0, a.MD)(G, r),
                K,
                { ePrivilege: 5 },
              );
            }),
            (e.GetTokenHistory = function (e, r) {
              return e.SendMsg(
                "AuthenticationSupport.GetTokenHistory#1",
                (0, a.MD)(H, r),
                V,
                { bConstMethod: !0, ePrivilege: 5 },
              );
            });
        })(re || (re = {})),
        (function (e) {
          (e.CreateNonce = function (e, r) {
            return e.SendMsg("CloudGaming.CreateNonce#1", (0, a.MD)(Q, r), $, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
            (e.GetTimeRemaining = function (e, r) {
              return e.SendMsg(
                "CloudGaming.GetTimeRemaining#1",
                (0, a.MD)(J, r),
                Z,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            });
        })(te || (te = {}));
    },
    46945: (e, r, t) => {
      "use strict";
      t.d(r, { AX: () => F, Sz: () => R, _w: () => f });
      var i = t(10059),
        n = t(39087),
        a = t(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.sender_time || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  sender_time: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Time_Request";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.server_time || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  server_time: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  skew_tolerance_seconds: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  large_time_jink: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  probe_frequency_seconds: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  adjusted_time_probe_frequency_seconds: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  hint_probe_frequency_seconds: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  sync_timeout: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  try_again_seconds: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  max_attempts: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Time_Response";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.steamid || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Status_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.state || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  state: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  inactivation_reason: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  authenticator_type: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  authenticator_allowed: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  steamguard_scheme: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  token_gid: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  email_validated: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  device_identifier: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_created: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  revocation_attempts_remaining: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  classified_agent: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  allow_external_authenticator: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  time_transferred: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  version: { n: 14, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Status_Response";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.steamid || n.aR(m.M()),
            s.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  authenticator_time: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  serial_number: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  authenticator_type: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  device_identifier: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  http_headers: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  version: {
                    n: 8,
                    d: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_AddAuthenticator_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.shared_secret || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  shared_secret: {
                    n: 1,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  serial_number: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  revocation_code: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  uri: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  server_time: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  account_name: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  token_gid: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  identity_secret: {
                    n: 8,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  secret_1: { n: 9, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  status: { n: 10, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  phone_number_hint: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  confirm_type: {
                    n: 12,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_AddAuthenticator_Response";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.steamid || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_type: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  include_activation_code: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_SendEmail_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_SendEmail_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  authenticator_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  authenticator_time: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  activation_code: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  http_headers: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  validate_sms_code: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_FinalizeAddAuthenticator_Request";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.success || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  server_time: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  status: { n: 4, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_FinalizeAddAuthenticator_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.revocation_code || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  revocation_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  revocation_reason: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  steamguard_scheme: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  remove_all_steamguard_cookies: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticator_Request";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.success || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  server_time: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  revocation_attempts_remaining: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticator_Response";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.success || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.sms_code || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  sms_code: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  generate_new_token: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  version: {
                    n: 3,
                    d: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.shared_secret || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  shared_secret: {
                    n: 1,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  serial_number: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  revocation_code: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  uri: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  server_time: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  account_name: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  token_gid: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  identity_secret: {
                    n: 8,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  secret_1: { n: 9, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  status: { n: 10, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  steamguard_scheme: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  steamid: {
                    n: 12,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.success || n.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  replacement_token: { n: 2, c: z },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || n.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  version: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  signature: { n: 3, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Response";
        }
      }
      var R;
      !(function (e) {
        (e.QueryTime = function (e, r) {
          return e.SendMsg("TwoFactor.QueryTime#1", (0, a.MD)(o, r), c, {
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.QueryStatus = function (e, r) {
            return e.SendMsg("TwoFactor.QueryStatus#1", (0, a.MD)(l, r), u, {
              ePrivilege: 1,
            });
          }),
          (e.AddAuthenticator = function (e, r) {
            return e.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, a.MD)(m, r),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.SendEmail = function (e, r) {
            return e.SendMsg("TwoFactor.SendEmail#1", (0, a.MD)(B, r), b, {
              ePrivilege: 1,
            });
          }),
          (e.FinalizeAddAuthenticator = function (e, r) {
            return e.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, a.MD)(y, r),
              g,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateTokenVersion = function (e, r) {
            return e.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, a.MD)(p, r),
              S,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RemoveAuthenticator = function (e, r) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, a.MD)(w, r),
              _,
              { ePrivilege: 9 },
            );
          }),
          (e.RemoveAuthenticatorViaChallengeStart = function (e, r) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, a.MD)(f, r),
              h,
              { ePrivilege: 9 },
            );
          }),
          (e.RemoveAuthenticatorViaChallengeContinue = function (e, r) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, a.MD)(F, r),
              M,
              { ePrivilege: 9 },
            );
          });
      })(R || (R = {}));
    },
  },
]);
