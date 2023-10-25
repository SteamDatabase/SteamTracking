/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6499],
  {
    28545: (e, t, r) => {
      var i = r(63735),
        n = r(97922),
        a = function (e, t) {
          var r = new i(
            (t = t || {}).typeNumber || -1,
            t.errorCorrectLevel || n.H,
          );
          return r.addData(e), r.make(), r;
        };
      (a.ErrorCorrectLevel = n), (e.exports = a);
    },
    68850: (e, t, r) => {
      var i = r(66722);
      function n(e) {
        (this.mode = i.MODE_8BIT_BYTE), (this.data = e);
      }
      (n.prototype = {
        getLength: function (e) {
          return this.data.length;
        },
        write: function (e) {
          for (var t = 0; t < this.data.length; t++)
            e.put(this.data.charCodeAt(t), 8);
        },
      }),
        (e.exports = n);
    },
    15378: (e) => {
      function t() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          var t = Math.floor(e / 8);
          return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, t) {
          for (var r = 0; r < t; r++)
            this.putBit(1 == ((e >>> (t - r - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          var t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    97922: (e) => {
      e.exports = { L: 1, M: 0, Q: 3, H: 2 };
    },
    55546: (e, t, r) => {
      var i = r(35389);
      function n(e, t) {
        if (null == e.length) throw new Error(e.length + "/" + t);
        for (var r = 0; r < e.length && 0 == e[r]; ) r++;
        this.num = new Array(e.length - r + t);
        for (var i = 0; i < e.length - r; i++) this.num[i] = e[i + r];
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
            var t = new Array(this.getLength() + e.getLength() - 1), r = 0;
            r < this.getLength();
            r++
          )
            for (var a = 0; a < e.getLength(); a++)
              t[r + a] ^= i.gexp(i.glog(this.get(r)) + i.glog(e.get(a)));
          return new n(t, 0);
        },
        mod: function (e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (
            var t = i.glog(this.get(0)) - i.glog(e.get(0)),
              r = new Array(this.getLength()),
              a = 0;
            a < this.getLength();
            a++
          )
            r[a] = this.get(a);
          for (a = 0; a < e.getLength(); a++)
            r[a] ^= i.gexp(i.glog(e.get(a)) + t);
          return new n(r, 0).mod(e);
        },
      }),
        (e.exports = n);
    },
    63735: (e, t, r) => {
      var i = r(68850),
        n = r(19888),
        a = r(15378),
        s = r(59275),
        o = r(55546);
      function c(e, t) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var u = c.prototype;
      (u.addData = function (e) {
        var t = new i(e);
        this.dataList.push(t), (this.dataCache = null);
      }),
        (u.isDark = function (e, t) {
          if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
            throw new Error(e + "," + t);
          return this.modules[e][t];
        }),
        (u.getModuleCount = function () {
          return this.moduleCount;
        }),
        (u.make = function () {
          if (this.typeNumber < 1) {
            var e = 1;
            for (e = 1; e < 40; e++) {
              for (
                var t = n.getRSBlocks(e, this.errorCorrectLevel),
                  r = new a(),
                  i = 0,
                  o = 0;
                o < t.length;
                o++
              )
                i += t[o].dataCount;
              for (o = 0; o < this.dataList.length; o++) {
                var c = this.dataList[o];
                r.put(c.mode, 4),
                  r.put(c.getLength(), s.getLengthInBits(c.mode, e)),
                  c.write(r);
              }
              if (r.getLengthInBits() <= 8 * i) break;
            }
            this.typeNumber = e;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (u.makeImpl = function (e, t) {
          (this.moduleCount = 4 * this.typeNumber + 17),
            (this.modules = new Array(this.moduleCount));
          for (var r = 0; r < this.moduleCount; r++) {
            this.modules[r] = new Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++)
              this.modules[r][i] = null;
          }
          this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, t),
            this.typeNumber >= 7 && this.setupTypeNumber(e),
            null == this.dataCache &&
              (this.dataCache = c.createData(
                this.typeNumber,
                this.errorCorrectLevel,
                this.dataList,
              )),
            this.mapData(this.dataCache, t);
        }),
        (u.setupPositionProbePattern = function (e, t) {
          for (var r = -1; r <= 7; r++)
            if (!(e + r <= -1 || this.moduleCount <= e + r))
              for (var i = -1; i <= 7; i++)
                t + i <= -1 ||
                  this.moduleCount <= t + i ||
                  (this.modules[e + r][t + i] =
                    (0 <= r && r <= 6 && (0 == i || 6 == i)) ||
                    (0 <= i && i <= 6 && (0 == r || 6 == r)) ||
                    (2 <= r && r <= 4 && 2 <= i && i <= 4));
        }),
        (u.getBestMaskPattern = function () {
          for (var e = 0, t = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var i = s.getLostPoint(this);
            (0 == r || e > i) && ((e = i), (t = r));
          }
          return t;
        }),
        (u.createMovieClip = function (e, t, r) {
          var i = e.createEmptyMovieClip(t, r);
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
        (u.setupTimingPattern = function () {
          for (var e = 8; e < this.moduleCount - 8; e++)
            null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
          for (var t = 8; t < this.moduleCount - 8; t++)
            null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
        }),
        (u.setupPositionAdjustPattern = function () {
          for (
            var e = s.getPatternPosition(this.typeNumber), t = 0;
            t < e.length;
            t++
          )
            for (var r = 0; r < e.length; r++) {
              var i = e[t],
                n = e[r];
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
        (u.setupTypeNumber = function (e) {
          for (
            var t = s.getBCHTypeNumber(this.typeNumber), r = 0;
            r < 18;
            r++
          ) {
            var i = !e && 1 == ((t >> r) & 1);
            this.modules[Math.floor(r / 3)][
              (r % 3) + this.moduleCount - 8 - 3
            ] = i;
          }
          for (r = 0; r < 18; r++) {
            i = !e && 1 == ((t >> r) & 1);
            this.modules[(r % 3) + this.moduleCount - 8 - 3][
              Math.floor(r / 3)
            ] = i;
          }
        }),
        (u.setupTypeInfo = function (e, t) {
          for (
            var r = (this.errorCorrectLevel << 3) | t,
              i = s.getBCHTypeInfo(r),
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
        (u.mapData = function (e, t) {
          for (
            var r = -1,
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
                  var u = !1;
                  a < e.length && (u = 1 == ((e[a] >>> n) & 1)),
                    s.getMask(t, i, o - c) && (u = !u),
                    (this.modules[i][o - c] = u),
                    -1 == --n && (a++, (n = 7));
                }
              if ((i += r) < 0 || this.moduleCount <= i) {
                (i -= r), (r = -r);
                break;
              }
            }
        }),
        (c.PAD0 = 236),
        (c.PAD1 = 17),
        (c.createData = function (e, t, r) {
          for (
            var i = n.getRSBlocks(e, t), o = new a(), u = 0;
            u < r.length;
            u++
          ) {
            var l = r[u];
            o.put(l.mode, 4),
              o.put(l.getLength(), s.getLengthInBits(l.mode, e)),
              l.write(o);
          }
          var m = 0;
          for (u = 0; u < i.length; u++) m += i[u].dataCount;
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
        (c.createBytes = function (e, t) {
          for (
            var r = 0,
              i = 0,
              n = 0,
              a = new Array(t.length),
              c = new Array(t.length),
              u = 0;
            u < t.length;
            u++
          ) {
            var l = t[u].dataCount,
              m = t[u].totalCount - l;
            (i = Math.max(i, l)), (n = Math.max(n, m)), (a[u] = new Array(l));
            for (var d = 0; d < a[u].length; d++)
              a[u][d] = 255 & e.buffer[d + r];
            r += l;
            var B = s.getErrorCorrectPolynomial(m),
              b = new o(a[u], B.getLength() - 1).mod(B);
            c[u] = new Array(B.getLength() - 1);
            for (d = 0; d < c[u].length; d++) {
              var _ = d + b.getLength() - c[u].length;
              c[u][d] = _ >= 0 ? b.get(_) : 0;
            }
          }
          var y = 0;
          for (d = 0; d < t.length; d++) y += t[d].totalCount;
          var g = new Array(y),
            h = 0;
          for (d = 0; d < i; d++)
            for (u = 0; u < t.length; u++)
              d < a[u].length && (g[h++] = a[u][d]);
          for (d = 0; d < n; d++)
            for (u = 0; u < t.length; u++)
              d < c[u].length && (g[h++] = c[u][d]);
          return g;
        }),
        (e.exports = c);
    },
    19888: (e, t, r) => {
      var i = r(97922);
      function n(e, t) {
        (this.totalCount = e), (this.dataCount = t);
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
        (n.getRSBlocks = function (e, t) {
          var r = n.getRsBlockTable(e, t);
          if (null == r)
            throw new Error(
              "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t,
            );
          for (var i = r.length / 3, a = new Array(), s = 0; s < i; s++)
            for (
              var o = r[3 * s + 0], c = r[3 * s + 1], u = r[3 * s + 2], l = 0;
              l < o;
              l++
            )
              a.push(new n(c, u));
          return a;
        }),
        (n.getRsBlockTable = function (e, t) {
          switch (t) {
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
    35389: (e) => {
      for (
        var t = {
            glog: function (e) {
              if (e < 1) throw new Error("glog(" + e + ")");
              return t.LOG_TABLE[e];
            },
            gexp: function (e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return t.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          r = 0;
        r < 8;
        r++
      )
        t.EXP_TABLE[r] = 1 << r;
      for (r = 8; r < 256; r++)
        t.EXP_TABLE[r] =
          t.EXP_TABLE[r - 4] ^
          t.EXP_TABLE[r - 5] ^
          t.EXP_TABLE[r - 6] ^
          t.EXP_TABLE[r - 8];
      for (r = 0; r < 255; r++) t.LOG_TABLE[t.EXP_TABLE[r]] = r;
      e.exports = t;
    },
    66722: (e) => {
      e.exports = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8,
      };
    },
    59275: (e, t, r) => {
      var i = r(66722),
        n = r(55546),
        a = r(35389),
        s = 0,
        o = 1,
        c = 2,
        u = 3,
        l = 4,
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
              var t = e << 10;
              b.getBCHDigit(t) - b.getBCHDigit(b.G15) >= 0;

            )
              t ^= b.G15 << (b.getBCHDigit(t) - b.getBCHDigit(b.G15));
            return ((e << 10) | t) ^ b.G15_MASK;
          },
          getBCHTypeNumber: function (e) {
            for (
              var t = e << 12;
              b.getBCHDigit(t) - b.getBCHDigit(b.G18) >= 0;

            )
              t ^= b.G18 << (b.getBCHDigit(t) - b.getBCHDigit(b.G18));
            return (e << 12) | t;
          },
          getBCHDigit: function (e) {
            for (var t = 0; 0 != e; ) t++, (e >>>= 1);
            return t;
          },
          getPatternPosition: function (e) {
            return b.PATTERN_POSITION_TABLE[e - 1];
          },
          getMask: function (e, t, r) {
            switch (e) {
              case s:
                return (t + r) % 2 == 0;
              case o:
                return t % 2 == 0;
              case c:
                return r % 3 == 0;
              case u:
                return (t + r) % 3 == 0;
              case l:
                return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
              case m:
                return ((t * r) % 2) + ((t * r) % 3) == 0;
              case d:
                return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
              case B:
                return (((t * r) % 3) + ((t + r) % 2)) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + e);
            }
          },
          getErrorCorrectPolynomial: function (e) {
            for (var t = new n([1], 0), r = 0; r < e; r++)
              t = t.multiply(new n([1, a.gexp(r)], 0));
            return t;
          },
          getLengthInBits: function (e, t) {
            if (1 <= t && t < 10)
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
            else if (t < 27)
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
              if (!(t < 41)) throw new Error("type:" + t);
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
            for (var t = e.getModuleCount(), r = 0, i = 0; i < t; i++)
              for (var n = 0; n < t; n++) {
                for (var a = 0, s = e.isDark(i, n), o = -1; o <= 1; o++)
                  if (!(i + o < 0 || t <= i + o))
                    for (var c = -1; c <= 1; c++)
                      n + c < 0 ||
                        t <= n + c ||
                        (0 == o && 0 == c) ||
                        (s == e.isDark(i + o, n + c) && a++);
                a > 5 && (r += 3 + a - 5);
              }
            for (i = 0; i < t - 1; i++)
              for (n = 0; n < t - 1; n++) {
                var u = 0;
                e.isDark(i, n) && u++,
                  e.isDark(i + 1, n) && u++,
                  e.isDark(i, n + 1) && u++,
                  e.isDark(i + 1, n + 1) && u++,
                  (0 != u && 4 != u) || (r += 3);
              }
            for (i = 0; i < t; i++)
              for (n = 0; n < t - 6; n++)
                e.isDark(i, n) &&
                  !e.isDark(i, n + 1) &&
                  e.isDark(i, n + 2) &&
                  e.isDark(i, n + 3) &&
                  e.isDark(i, n + 4) &&
                  !e.isDark(i, n + 5) &&
                  e.isDark(i, n + 6) &&
                  (r += 40);
            for (n = 0; n < t; n++)
              for (i = 0; i < t - 6; i++)
                e.isDark(i, n) &&
                  !e.isDark(i + 1, n) &&
                  e.isDark(i + 2, n) &&
                  e.isDark(i + 3, n) &&
                  e.isDark(i + 4, n) &&
                  !e.isDark(i + 5, n) &&
                  e.isDark(i + 6, n) &&
                  (r += 40);
            var l = 0;
            for (n = 0; n < t; n++)
              for (i = 0; i < t; i++) e.isDark(i, n) && l++;
            return (r += 10 * (Math.abs((100 * l) / t / t - 50) / 5));
          },
        };
      e.exports = b;
    },
    7786: (e, t, r) => {
      "use strict";
      r.d(t, {
        $h: () => h,
        Am: () => I,
        Hb: () => m,
        Uy: () => v,
        _u: () => T,
        hn: () => d,
        kp: () => p,
        oZ: () => M,
        up: () => S,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328),
        s = r(21907),
        o = r(76322);
      const c = i.Message;
      var u, l, m, d, B, b, _, y, g, h, w, f;
      !(function (e) {
        (e[(e.k_ECaptchaAnnotationNone = 0)] = "k_ECaptchaAnnotationNone"),
          (e[(e.k_ECaptchaAnnotationLegitimate = 1)] =
            "k_ECaptchaAnnotationLegitimate"),
          (e[(e.k_ECaptchaAnnotationFraudulent = 2)] =
            "k_ECaptchaAnnotationFraudulent"),
          (e[(e.k_ECaptchaAnnotationUnspecified = 3)] =
            "k_ECaptchaAnnotationUnspecified");
      })(u || (u = {})),
        (function (e) {
          (e[(e.k_EAuthSessionSecurityHistory_Invalid = 0)] =
            "k_EAuthSessionSecurityHistory_Invalid"),
            (e[(e.k_EAuthSessionSecurityHistory_UsedPreviously = 1)] =
              "k_EAuthSessionSecurityHistory_UsedPreviously"),
            (e[(e.k_EAuthSessionSecurityHistory_NoPriorHistory = 2)] =
              "k_EAuthSessionSecurityHistory_NoPriorHistory");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EAuthSessionGuardType_Unknown = 0)] =
            "k_EAuthSessionGuardType_Unknown"),
            (e[(e.k_EAuthSessionGuardType_None = 1)] =
              "k_EAuthSessionGuardType_None"),
            (e[(e.k_EAuthSessionGuardType_EmailCode = 2)] =
              "k_EAuthSessionGuardType_EmailCode"),
            (e[(e.k_EAuthSessionGuardType_DeviceCode = 3)] =
              "k_EAuthSessionGuardType_DeviceCode"),
            (e[(e.k_EAuthSessionGuardType_DeviceConfirmation = 4)] =
              "k_EAuthSessionGuardType_DeviceConfirmation"),
            (e[(e.k_EAuthSessionGuardType_EmailConfirmation = 5)] =
              "k_EAuthSessionGuardType_EmailConfirmation"),
            (e[(e.k_EAuthSessionGuardType_MachineToken = 6)] =
              "k_EAuthSessionGuardType_MachineToken"),
            (e[(e.k_EAuthSessionGuardType_LegacyMachineAuth = 7)] =
              "k_EAuthSessionGuardType_LegacyMachineAuth");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EAuthTokenPlatformType_Unknown = 0)] =
            "k_EAuthTokenPlatformType_Unknown"),
            (e[(e.k_EAuthTokenPlatformType_SteamClient = 1)] =
              "k_EAuthTokenPlatformType_SteamClient"),
            (e[(e.k_EAuthTokenPlatformType_WebBrowser = 2)] =
              "k_EAuthTokenPlatformType_WebBrowser"),
            (e[(e.k_EAuthTokenPlatformType_MobileApp = 3)] =
              "k_EAuthTokenPlatformType_MobileApp");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_ETokenRenewalType_None = 0)] = "k_ETokenRenewalType_None"),
            (e[(e.k_ETokenRenewalType_Allow = 1)] =
              "k_ETokenRenewalType_Allow");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_EAuthTokenRevokeLogout = 0)] = "k_EAuthTokenRevokeLogout"),
            (e[(e.k_EAuthTokenRevokePermanent = 1)] =
              "k_EAuthTokenRevokePermanent"),
            (e[(e.k_EAuthTokenRevokeReplaced = 2)] =
              "k_EAuthTokenRevokeReplaced"),
            (e[(e.k_EAuthTokenRevokeSupport = 3)] =
              "k_EAuthTokenRevokeSupport"),
            (e[(e.k_EAuthTokenRevokeConsume = 4)] =
              "k_EAuthTokenRevokeConsume"),
            (e[(e.k_EAuthTokenRevokeNonRememberedLogout = 5)] =
              "k_EAuthTokenRevokeNonRememberedLogout"),
            (e[(e.k_EAuthTokenRevokeNonRememberedPermanent = 6)] =
              "k_EAuthTokenRevokeNonRememberedPermanent"),
            (e[(e.k_EAuthTokenRevokeAutomatic = 7)] =
              "k_EAuthTokenRevokeAutomatic");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EAuthTokenState_Invalid = 0)] = "k_EAuthTokenState_Invalid"),
            (e[(e.k_EAuthTokenState_New = 1)] = "k_EAuthTokenState_New"),
            (e[(e.k_EAuthTokenState_Confirmed = 2)] =
              "k_EAuthTokenState_Confirmed"),
            (e[(e.k_EAuthTokenState_Issued = 3)] = "k_EAuthTokenState_Issued"),
            (e[(e.k_EAuthTokenState_Denied = 4)] = "k_EAuthTokenState_Denied"),
            (e[(e.k_EAuthTokenState_LoggedOut = 5)] =
              "k_EAuthTokenState_LoggedOut"),
            (e[(e.k_EAuthTokenState_Consumed = 6)] =
              "k_EAuthTokenState_Consumed"),
            (e[(e.k_EAuthTokenState_Revoked = 99)] =
              "k_EAuthTokenState_Revoked");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ECaptchaUsageNone = 0)] = "k_ECaptchaUsageNone"),
            (e[(e.k_ECaptchaUsageGeneric = 1)] = "k_ECaptchaUsageGeneric"),
            (e[(e.k_ECaptchaUsageAccountCreation = 2)] =
              "k_ECaptchaUsageAccountCreation"),
            (e[(e.k_ECaptchaUsageHelpRequest = 3)] =
              "k_ECaptchaUsageHelpRequest"),
            (e[(e.k_ECaptchaUsageLogon = 4)] = "k_ECaptchaUsageLogon"),
            (e[(e.k_ECaptchaUsageChina = 5)] = "k_ECaptchaUsageChina"),
            (e[(e.k_ECaptchaUsageContactForm = 6)] =
              "k_ECaptchaUsageContactForm"),
            (e[(e.k_ECaptchaUsageRedeemGiftCard = 7)] =
              "k_ECaptchaUsageRedeemGiftCard"),
            (e[(e.k_ECaptchaUsageMax = 8)] = "k_ECaptchaUsageMax");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ECaptchaTypeNone = 0)] = "k_ECaptchaTypeNone"),
            (e[(e.k_ECaptchaTypeLegacy = 1)] = "k_ECaptchaTypeLegacy"),
            (e[(e.k_ECaptchaTypeReCaptcha = 2)] = "k_ECaptchaTypeReCaptcha"),
            (e[(e.k_ECaptchaTypeMax = 3)] = "k_ECaptchaTypeMax");
        })(g || (g = {}));
      class p extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.account_name || n.aR(p.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  account_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
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
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Request";
        }
      }
      class F extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.publickey_mod || n.aR(F.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
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
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Response";
        }
      }
      class S extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.device_friendly_name || n.aR(S.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
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
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_DeviceDetails";
        }
      }
      class z extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.confirmation_type || n.aR(z.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AllowedConfirmation";
        }
      }
      class M extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.device_friendly_name || n.aR(M.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
                  device_details: { n: 3, c: S },
                  website_id: {
                    n: 4,
                    d: "Unknown",
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
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
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Request";
        }
      }
      class R extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.client_id || n.aR(R.M()),
            c.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
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
                  allowed_confirmations: { n: 5, c: z, r: !0, q: !0 },
                  version: { n: 6, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
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
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Response";
        }
      }
      class T extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.device_friendly_name || n.aR(T.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
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
                    d: s.fq.k_ESessionPersistence_Persistent,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  website_id: {
                    n: 8,
                    d: "Unknown",
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  device_details: { n: 9, c: S },
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
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Request";
        }
      }
      class E extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.client_id || n.aR(E.M()),
            c.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  request_id: { n: 2, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  interval: { n: 3, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  allowed_confirmations: { n: 4, c: z, r: !0, q: !0 },
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
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Response";
        }
      }
      class v extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.client_id || n.aR(v.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
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
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Request";
        }
      }
      class W extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.new_client_id || n.aR(W.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
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
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Response";
        }
      }
      class A extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.client_id || n.aR(A.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Request";
        }
      }
      class k extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.ip || n.aR(k.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
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
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Response";
        }
      }
      class C extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Request";
        }
      }
      class O extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.client_ids || n.aR(O.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
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
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Response";
        }
      }
      class j extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.version || n.aR(j.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
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
                    d: s.fq.k_ESessionPersistence_Persistent,
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
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
        }
      }
      class X extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
        }
      }
      class I extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.client_id || n.aR(I.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
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
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
        }
      }
      class U extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.agreement_session_url || n.aR(U.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  agreement_session_url: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
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
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
        }
      }
      class D extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.refresh_token || n.aR(D.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
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
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Request";
        }
      }
      class x extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.access_token || n.aR(x.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
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
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Response";
        }
      }
      class P extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Request";
        }
      }
      class N extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.refresh_tokens || n.aR(N.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  refresh_tokens: { n: 1, c: G, r: !0, q: !0 },
                  requesting_token: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response";
        }
      }
      class L extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.time || n.aR(L.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  time: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  ip: { n: 2, c: o.j7 },
                  locale: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  country: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  state: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  city: { n: 6, br: n.FE.readString, bw: n.Xc.writeString },
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
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
        }
      }
      class G extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.token_id || n.aR(G.M()),
            c.initialize(this, e, 0, -1, void 0, null);
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
                  first_seen: { n: 9, c: L },
                  last_seen: { n: 10, c: L },
                  os_type: { n: 11, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
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
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
        }
      }
      class q extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.token || n.aR(q.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  token: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  revoke_action: {
                    n: 2,
                    d: b.k_EAuthTokenRevokePermanent,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
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
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_Token_Revoke_Request";
        }
      }
      class H extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_Token_Revoke_Response";
        }
      }
      class K extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.token_id || n.aR(K.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
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
                    d: b.k_EAuthTokenRevokePermanent,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  signature: { n: 4, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Revoke_Request";
        }
      }
      class V extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Revoke_Response";
        }
      }
      class Q extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.steamid || n.aR(Q.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
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
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Request";
        }
      }
      class $ extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.refresh_token || n.aR($.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
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
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Response";
        }
      }
      class Y extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.token_id || n.aR(Y.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
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
                  first_seen: { n: 11, c: J },
                  last_seen: { n: 12, c: J },
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
        static toObject(e, t) {
          return n.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenDescription";
        }
      }
      class J extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.time || n.aR(J.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  time: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  ip: { n: 2, c: o.j7 },
                  country: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  state: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  city: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
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
        static toObject(e, t) {
          return n.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenDescription_TokenUsageEvent";
        }
      }
      class Z extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.action || n.aR(Z.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  action: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  time: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  ip: { n: 3, c: o.j7 },
                  actor: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
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
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenAudit";
        }
      }
      class ee extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.steamid || n.aR(ee.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
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
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
        }
      }
      class te extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.refresh_tokens || n.aR(te.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  refresh_tokens: { n: 1, c: Y, r: !0, q: !0 },
                  last_token_reset: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
        }
      }
      class re extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.token_id || n.aR(re.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  token_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
        }
      }
      class ie extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.refresh_tokens || n.aR(ie.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: { refresh_tokens: { n: 1, c: Y, r: !0, q: !0 } },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = n.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
        }
      }
      class ne extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.token_id || n.aR(ne.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
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
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = n.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ne.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_RevokeToken_Request";
        }
      }
      class ae extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_RevokeToken_Response";
        }
      }
      class se extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.token_id || n.aR(se.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  token_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = n.Bh(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(se.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_GetTokenHistory_Request";
        }
      }
      class oe extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.history || n.aR(oe.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: { history: { n: 1, c: Z, r: !0, q: !0 } },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = n.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_GetTokenHistory_Response";
        }
      }
      class ce extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.platform || n.aR(ce.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  platform: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = n.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Request";
        }
      }
      class ue extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.nonce || n.aR(ue.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  nonce: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  expiry: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = n.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ue.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Response";
        }
      }
      class le extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.appid || n.aR(le.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  minutes_remaining: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = n.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(le.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_TimeRemaining";
        }
      }
      class me extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.platform || n.aR(me.M()),
            c.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
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
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = n.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(me.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Request";
        }
      }
      class de extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.entries || n.aR(de.M()),
            c.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { entries: { n: 2, c: le, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = n.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(de.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Response";
        }
      }
      !(function (e) {
        (e.GetPasswordRSAPublicKey = function (e, t) {
          return e.SendMsg(
            "Authentication.GetPasswordRSAPublicKey#1",
            (0, a.MD)(p, t),
            F,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.BeginAuthSessionViaQR = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, a.MD)(M, t),
              R,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BeginAuthSessionViaCredentials = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, a.MD)(T, t),
              E,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.PollAuthSessionStatus = function (e, t) {
            return e.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, a.MD)(v, t),
              W,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetAuthSessionInfo = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, a.MD)(A, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, a.MD)(j, t),
              X,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, a.MD)(I, t),
              U,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GenerateAccessTokenForApp = function (e, t) {
            return e.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, a.MD)(D, t),
              x,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.EnumerateTokens = function (e, t) {
            return e.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, a.MD)(P, t),
              N,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAuthSessionsForAccount = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, a.MD)(C, t),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigrateMobileSession = function (e, t) {
            return e.SendMsg(
              "Authentication.MigrateMobileSession#1",
              (0, a.MD)(Q, t),
              $,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RevokeToken = function (e, t) {
            return e.SendMsg(
              "Authentication.RevokeToken#1",
              (0, a.MD)(q, t),
              H,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RevokeRefreshToken = function (e, t) {
            return e.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, a.MD)(K, t),
              V,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(h || (h = {})),
        (function (e) {
          (e.QueryRefreshTokensByAccount = function (e, t) {
            return e.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, a.MD)(ee, t),
              te,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
            (e.QueryRefreshTokenByID = function (e, t) {
              return e.SendMsg(
                "AuthenticationSupport.QueryRefreshTokenByID#1",
                (0, a.MD)(re, t),
                ie,
                { bConstMethod: !0, ePrivilege: 5 },
              );
            }),
            (e.RevokeToken = function (e, t) {
              return e.SendMsg(
                "AuthenticationSupport.RevokeToken#1",
                (0, a.MD)(ne, t),
                ae,
                { ePrivilege: 5 },
              );
            }),
            (e.GetTokenHistory = function (e, t) {
              return e.SendMsg(
                "AuthenticationSupport.GetTokenHistory#1",
                (0, a.MD)(se, t),
                oe,
                { bConstMethod: !0, ePrivilege: 5 },
              );
            });
        })(w || (w = {})),
        (function (e) {
          (e.CreateNonce = function (e, t) {
            return e.SendMsg(
              "CloudGaming.CreateNonce#1",
              (0, a.MD)(ce, t),
              ue,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetTimeRemaining = function (e, t) {
              return e.SendMsg(
                "CloudGaming.GetTimeRemaining#1",
                (0, a.MD)(me, t),
                de,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            });
        })(f || (f = {}));
    },
    48086: (e, t, r) => {
      "use strict";
      r.d(t, { AX: () => p, Sz: () => R, _w: () => w });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
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
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
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
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Time_Response";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.steamid || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
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
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Status_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.state || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
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
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
                  sms_phone_id: {
                    n: 6,
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
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
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
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
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
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
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
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_SendEmail_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamid || n.aR(_.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
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
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_FinalizeAddAuthenticator_Request";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.success || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  want_more: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  server_time: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  status: { n: 4, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
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
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_FinalizeAddAuthenticator_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.revocation_code || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
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
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticator_Request";
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
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticator_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.success || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
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
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.sms_code || n.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
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
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.shared_secret || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
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
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.success || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  replacement_token: { n: 2, c: F },
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
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Response";
        }
      }
      var R;
      !(function (e) {
        (e.QueryTime = function (e, t) {
          return e.SendMsg("TwoFactor.QueryTime#1", (0, a.MD)(o, t), c, {
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.QueryStatus = function (e, t) {
            return e.SendMsg("TwoFactor.QueryStatus#1", (0, a.MD)(u, t), l, {
              ePrivilege: 1,
            });
          }),
          (e.AddAuthenticator = function (e, t) {
            return e.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, a.MD)(m, t),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.SendEmail = function (e, t) {
            return e.SendMsg("TwoFactor.SendEmail#1", (0, a.MD)(B, t), b, {
              ePrivilege: 1,
            });
          }),
          (e.FinalizeAddAuthenticator = function (e, t) {
            return e.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, a.MD)(_, t),
              y,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateTokenVersion = function (e, t) {
            return e.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, a.MD)(z, t),
              M,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RemoveAuthenticator = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, a.MD)(g, t),
              h,
              { ePrivilege: 9 },
            );
          }),
          (e.RemoveAuthenticatorViaChallengeStart = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, a.MD)(w, t),
              f,
              { ePrivilege: 9 },
            );
          }),
          (e.RemoveAuthenticatorViaChallengeContinue = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, a.MD)(p, t),
              S,
              { ePrivilege: 9 },
            );
          });
      })(R || (R = {}));
    },
  },
]);
