/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2695],
    {
      56589: (B, T, l) => {
        var u = l(48763),
          E = l(2163),
          g = function (m, f) {
            f = f || {};
            var r = new u(f.typeNumber || -1, f.errorCorrectLevel || E.H);
            return r.addData(m), r.make(), r;
          };
        (g.ErrorCorrectLevel = E), (B.exports = g);
      },
      27932: (B, T, l) => {
        var u = l(91446);
        function E(g) {
          (this.mode = u.MODE_8BIT_BYTE), (this.data = g);
        }
        (E.prototype = {
          getLength: function (g) {
            return this.data.length;
          },
          write: function (g) {
            for (var m = 0; m < this.data.length; m++)
              g.put(this.data.charCodeAt(m), 8);
          },
        }),
          (B.exports = E);
      },
      86028: (B) => {
        function T() {
          (this.buffer = new Array()), (this.length = 0);
        }
        (T.prototype = {
          get: function (l) {
            var u = Math.floor(l / 8);
            return ((this.buffer[u] >>> (7 - (l % 8))) & 1) == 1;
          },
          put: function (l, u) {
            for (var E = 0; E < u; E++)
              this.putBit(((l >>> (u - E - 1)) & 1) == 1);
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (l) {
            var u = Math.floor(this.length / 8);
            this.buffer.length <= u && this.buffer.push(0),
              l && (this.buffer[u] |= 128 >>> (this.length % 8)),
              this.length++;
          },
        }),
          (B.exports = T);
      },
      2163: (B) => {
        B.exports = { L: 1, M: 0, Q: 3, H: 2 };
      },
      24967: (B, T, l) => {
        var u = l(70555);
        function E(g, m) {
          if (g.length == null) throw new Error(g.length + "/" + m);
          for (var f = 0; f < g.length && g[f] == 0; ) f++;
          this.num = new Array(g.length - f + m);
          for (var r = 0; r < g.length - f; r++) this.num[r] = g[r + f];
        }
        (E.prototype = {
          get: function (g) {
            return this.num[g];
          },
          getLength: function () {
            return this.num.length;
          },
          multiply: function (g) {
            for (
              var m = new Array(this.getLength() + g.getLength() - 1), f = 0;
              f < this.getLength();
              f++
            )
              for (var r = 0; r < g.getLength(); r++)
                m[f + r] ^= u.gexp(u.glog(this.get(f)) + u.glog(g.get(r)));
            return new E(m, 0);
          },
          mod: function (g) {
            if (this.getLength() - g.getLength() < 0) return this;
            for (
              var m = u.glog(this.get(0)) - u.glog(g.get(0)),
                f = new Array(this.getLength()),
                r = 0;
              r < this.getLength();
              r++
            )
              f[r] = this.get(r);
            for (var r = 0; r < g.getLength(); r++)
              f[r] ^= u.gexp(u.glog(g.get(r)) + m);
            return new E(f, 0).mod(g);
          },
        }),
          (B.exports = E);
      },
      48763: (B, T, l) => {
        var u = l(27932),
          E = l(56941),
          g = l(86028),
          m = l(96709),
          f = l(24967);
        function r(n, e) {
          (this.typeNumber = n),
            (this.errorCorrectLevel = e),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.dataCache = null),
            (this.dataList = []);
        }
        var a = r.prototype;
        (a.addData = function (n) {
          var e = new u(n);
          this.dataList.push(e), (this.dataCache = null);
        }),
          (a.isDark = function (n, e) {
            if (
              n < 0 ||
              this.moduleCount <= n ||
              e < 0 ||
              this.moduleCount <= e
            )
              throw new Error(n + "," + e);
            return this.modules[n][e];
          }),
          (a.getModuleCount = function () {
            return this.moduleCount;
          }),
          (a.make = function () {
            if (this.typeNumber < 1) {
              var n = 1;
              for (n = 1; n < 40; n++) {
                for (
                  var e = E.getRSBlocks(n, this.errorCorrectLevel),
                    t = new g(),
                    o = 0,
                    i = 0;
                  i < e.length;
                  i++
                )
                  o += e[i].dataCount;
                for (var i = 0; i < this.dataList.length; i++) {
                  var s = this.dataList[i];
                  t.put(s.mode, 4),
                    t.put(s.getLength(), m.getLengthInBits(s.mode, n)),
                    s.write(t);
                }
                if (t.getLengthInBits() <= o * 8) break;
              }
              this.typeNumber = n;
            }
            this.makeImpl(!1, this.getBestMaskPattern());
          }),
          (a.makeImpl = function (n, e) {
            (this.moduleCount = this.typeNumber * 4 + 17),
              (this.modules = new Array(this.moduleCount));
            for (var t = 0; t < this.moduleCount; t++) {
              this.modules[t] = new Array(this.moduleCount);
              for (var o = 0; o < this.moduleCount; o++)
                this.modules[t][o] = null;
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(n, e),
              this.typeNumber >= 7 && this.setupTypeNumber(n),
              this.dataCache == null &&
                (this.dataCache = r.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList,
                )),
              this.mapData(this.dataCache, e);
          }),
          (a.setupPositionProbePattern = function (n, e) {
            for (var t = -1; t <= 7; t++)
              if (!(n + t <= -1 || this.moduleCount <= n + t))
                for (var o = -1; o <= 7; o++)
                  e + o <= -1 ||
                    this.moduleCount <= e + o ||
                    ((0 <= t && t <= 6 && (o == 0 || o == 6)) ||
                    (0 <= o && o <= 6 && (t == 0 || t == 6)) ||
                    (2 <= t && t <= 4 && 2 <= o && o <= 4)
                      ? (this.modules[n + t][e + o] = !0)
                      : (this.modules[n + t][e + o] = !1));
          }),
          (a.getBestMaskPattern = function () {
            for (var n = 0, e = 0, t = 0; t < 8; t++) {
              this.makeImpl(!0, t);
              var o = m.getLostPoint(this);
              (t == 0 || n > o) && ((n = o), (e = t));
            }
            return e;
          }),
          (a.createMovieClip = function (n, e, t) {
            var o = n.createEmptyMovieClip(e, t),
              i = 1;
            this.make();
            for (var s = 0; s < this.modules.length; s++)
              for (var v = s * i, h = 0; h < this.modules[s].length; h++) {
                var L = h * i,
                  p = this.modules[s][h];
                p &&
                  (o.beginFill(0, 100),
                  o.moveTo(L, v),
                  o.lineTo(L + i, v),
                  o.lineTo(L + i, v + i),
                  o.lineTo(L, v + i),
                  o.endFill());
              }
            return o;
          }),
          (a.setupTimingPattern = function () {
            for (var n = 8; n < this.moduleCount - 8; n++)
              this.modules[n][6] == null && (this.modules[n][6] = n % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++)
              this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
          }),
          (a.setupPositionAdjustPattern = function () {
            for (
              var n = m.getPatternPosition(this.typeNumber), e = 0;
              e < n.length;
              e++
            )
              for (var t = 0; t < n.length; t++) {
                var o = n[e],
                  i = n[t];
                if (this.modules[o][i] == null)
                  for (var s = -2; s <= 2; s++)
                    for (var v = -2; v <= 2; v++)
                      s == -2 ||
                      s == 2 ||
                      v == -2 ||
                      v == 2 ||
                      (s == 0 && v == 0)
                        ? (this.modules[o + s][i + v] = !0)
                        : (this.modules[o + s][i + v] = !1);
              }
          }),
          (a.setupTypeNumber = function (n) {
            for (
              var e = m.getBCHTypeNumber(this.typeNumber), t = 0;
              t < 18;
              t++
            ) {
              var o = !n && ((e >> t) & 1) == 1;
              this.modules[Math.floor(t / 3)][
                (t % 3) + this.moduleCount - 8 - 3
              ] = o;
            }
            for (var t = 0; t < 18; t++) {
              var o = !n && ((e >> t) & 1) == 1;
              this.modules[(t % 3) + this.moduleCount - 8 - 3][
                Math.floor(t / 3)
              ] = o;
            }
          }),
          (a.setupTypeInfo = function (n, e) {
            for (
              var t = (this.errorCorrectLevel << 3) | e,
                o = m.getBCHTypeInfo(t),
                i = 0;
              i < 15;
              i++
            ) {
              var s = !n && ((o >> i) & 1) == 1;
              i < 6
                ? (this.modules[i][8] = s)
                : i < 8
                  ? (this.modules[i + 1][8] = s)
                  : (this.modules[this.moduleCount - 15 + i][8] = s);
            }
            for (var i = 0; i < 15; i++) {
              var s = !n && ((o >> i) & 1) == 1;
              i < 8
                ? (this.modules[8][this.moduleCount - i - 1] = s)
                : i < 9
                  ? (this.modules[8][15 - i - 1 + 1] = s)
                  : (this.modules[8][15 - i - 1] = s);
            }
            this.modules[this.moduleCount - 8][8] = !n;
          }),
          (a.mapData = function (n, e) {
            for (
              var t = -1,
                o = this.moduleCount - 1,
                i = 7,
                s = 0,
                v = this.moduleCount - 1;
              v > 0;
              v -= 2
            )
              for (v == 6 && v--; ; ) {
                for (var h = 0; h < 2; h++)
                  if (this.modules[o][v - h] == null) {
                    var L = !1;
                    s < n.length && (L = ((n[s] >>> i) & 1) == 1);
                    var p = m.getMask(e, o, v - h);
                    p && (L = !L),
                      (this.modules[o][v - h] = L),
                      i--,
                      i == -1 && (s++, (i = 7));
                  }
                if (((o += t), o < 0 || this.moduleCount <= o)) {
                  (o -= t), (t = -t);
                  break;
                }
              }
          }),
          (r.PAD0 = 236),
          (r.PAD1 = 17),
          (r.createData = function (n, e, t) {
            for (
              var o = E.getRSBlocks(n, e), i = new g(), s = 0;
              s < t.length;
              s++
            ) {
              var v = t[s];
              i.put(v.mode, 4),
                i.put(v.getLength(), m.getLengthInBits(v.mode, n)),
                v.write(i);
            }
            for (var h = 0, s = 0; s < o.length; s++) h += o[s].dataCount;
            if (i.getLengthInBits() > h * 8)
              throw new Error(
                "code length overflow. (" +
                  i.getLengthInBits() +
                  ">" +
                  h * 8 +
                  ")",
              );
            for (
              i.getLengthInBits() + 4 <= h * 8 && i.put(0, 4);
              i.getLengthInBits() % 8 != 0;
            )
              i.putBit(!1);
            for (
              ;
              !(
                i.getLengthInBits() >= h * 8 ||
                (i.put(r.PAD0, 8), i.getLengthInBits() >= h * 8)
              );
            )
              i.put(r.PAD1, 8);
            return r.createBytes(i, o);
          }),
          (r.createBytes = function (n, e) {
            for (
              var t = 0,
                o = 0,
                i = 0,
                s = new Array(e.length),
                v = new Array(e.length),
                h = 0;
              h < e.length;
              h++
            ) {
              var L = e[h].dataCount,
                p = e[h].totalCount - L;
              (o = Math.max(o, L)), (i = Math.max(i, p)), (s[h] = new Array(L));
              for (var d = 0; d < s[h].length; d++)
                s[h][d] = 255 & n.buffer[d + t];
              t += L;
              var A = m.getErrorCorrectPolynomial(p),
                M = new f(s[h], A.getLength() - 1),
                D = M.mod(A);
              v[h] = new Array(A.getLength() - 1);
              for (var d = 0; d < v[h].length; d++) {
                var c = d + D.getLength() - v[h].length;
                v[h][d] = c >= 0 ? D.get(c) : 0;
              }
            }
            for (var C = 0, d = 0; d < e.length; d++) C += e[d].totalCount;
            for (var P = new Array(C), w = 0, d = 0; d < o; d++)
              for (var h = 0; h < e.length; h++)
                d < s[h].length && (P[w++] = s[h][d]);
            for (var d = 0; d < i; d++)
              for (var h = 0; h < e.length; h++)
                d < v[h].length && (P[w++] = v[h][d]);
            return P;
          }),
          (B.exports = r);
      },
      56941: (B, T, l) => {
        var u = l(2163);
        function E(g, m) {
          (this.totalCount = g), (this.dataCount = m);
        }
        (E.RS_BLOCK_TABLE = [
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
          (E.getRSBlocks = function (g, m) {
            var f = E.getRsBlockTable(g, m);
            if (f == null)
              throw new Error(
                "bad rs block @ typeNumber:" + g + "/errorCorrectLevel:" + m,
              );
            for (var r = f.length / 3, a = new Array(), n = 0; n < r; n++)
              for (
                var e = f[n * 3 + 0], t = f[n * 3 + 1], o = f[n * 3 + 2], i = 0;
                i < e;
                i++
              )
                a.push(new E(t, o));
            return a;
          }),
          (E.getRsBlockTable = function (g, m) {
            switch (m) {
              case u.L:
                return E.RS_BLOCK_TABLE[(g - 1) * 4 + 0];
              case u.M:
                return E.RS_BLOCK_TABLE[(g - 1) * 4 + 1];
              case u.Q:
                return E.RS_BLOCK_TABLE[(g - 1) * 4 + 2];
              case u.H:
                return E.RS_BLOCK_TABLE[(g - 1) * 4 + 3];
              default:
                return;
            }
          }),
          (B.exports = E);
      },
      70555: (B) => {
        for (
          var T = {
              glog: function (u) {
                if (u < 1) throw new Error("glog(" + u + ")");
                return T.LOG_TABLE[u];
              },
              gexp: function (u) {
                for (; u < 0; ) u += 255;
                for (; u >= 256; ) u -= 255;
                return T.EXP_TABLE[u];
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256),
            },
            l = 0;
          l < 8;
          l++
        )
          T.EXP_TABLE[l] = 1 << l;
        for (var l = 8; l < 256; l++)
          T.EXP_TABLE[l] =
            T.EXP_TABLE[l - 4] ^
            T.EXP_TABLE[l - 5] ^
            T.EXP_TABLE[l - 6] ^
            T.EXP_TABLE[l - 8];
        for (var l = 0; l < 255; l++) T.LOG_TABLE[T.EXP_TABLE[l]] = l;
        B.exports = T;
      },
      91446: (B) => {
        B.exports = {
          MODE_NUMBER: 1,
          MODE_ALPHA_NUM: 2,
          MODE_8BIT_BYTE: 4,
          MODE_KANJI: 8,
        };
      },
      96709: (B, T, l) => {
        var u = l(91446),
          E = l(24967),
          g = l(70555),
          m = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7,
          },
          f = {
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
            getBCHTypeInfo: function (r) {
              for (
                var a = r << 10;
                f.getBCHDigit(a) - f.getBCHDigit(f.G15) >= 0;
              )
                a ^= f.G15 << (f.getBCHDigit(a) - f.getBCHDigit(f.G15));
              return ((r << 10) | a) ^ f.G15_MASK;
            },
            getBCHTypeNumber: function (r) {
              for (
                var a = r << 12;
                f.getBCHDigit(a) - f.getBCHDigit(f.G18) >= 0;
              )
                a ^= f.G18 << (f.getBCHDigit(a) - f.getBCHDigit(f.G18));
              return (r << 12) | a;
            },
            getBCHDigit: function (r) {
              for (var a = 0; r != 0; ) a++, (r >>>= 1);
              return a;
            },
            getPatternPosition: function (r) {
              return f.PATTERN_POSITION_TABLE[r - 1];
            },
            getMask: function (r, a, n) {
              switch (r) {
                case m.PATTERN000:
                  return (a + n) % 2 == 0;
                case m.PATTERN001:
                  return a % 2 == 0;
                case m.PATTERN010:
                  return n % 3 == 0;
                case m.PATTERN011:
                  return (a + n) % 3 == 0;
                case m.PATTERN100:
                  return (Math.floor(a / 2) + Math.floor(n / 3)) % 2 == 0;
                case m.PATTERN101:
                  return ((a * n) % 2) + ((a * n) % 3) == 0;
                case m.PATTERN110:
                  return (((a * n) % 2) + ((a * n) % 3)) % 2 == 0;
                case m.PATTERN111:
                  return (((a * n) % 3) + ((a + n) % 2)) % 2 == 0;
                default:
                  throw new Error("bad maskPattern:" + r);
              }
            },
            getErrorCorrectPolynomial: function (r) {
              for (var a = new E([1], 0), n = 0; n < r; n++)
                a = a.multiply(new E([1, g.gexp(n)], 0));
              return a;
            },
            getLengthInBits: function (r, a) {
              if (1 <= a && a < 10)
                switch (r) {
                  case u.MODE_NUMBER:
                    return 10;
                  case u.MODE_ALPHA_NUM:
                    return 9;
                  case u.MODE_8BIT_BYTE:
                    return 8;
                  case u.MODE_KANJI:
                    return 8;
                  default:
                    throw new Error("mode:" + r);
                }
              else if (a < 27)
                switch (r) {
                  case u.MODE_NUMBER:
                    return 12;
                  case u.MODE_ALPHA_NUM:
                    return 11;
                  case u.MODE_8BIT_BYTE:
                    return 16;
                  case u.MODE_KANJI:
                    return 10;
                  default:
                    throw new Error("mode:" + r);
                }
              else if (a < 41)
                switch (r) {
                  case u.MODE_NUMBER:
                    return 14;
                  case u.MODE_ALPHA_NUM:
                    return 13;
                  case u.MODE_8BIT_BYTE:
                    return 16;
                  case u.MODE_KANJI:
                    return 12;
                  default:
                    throw new Error("mode:" + r);
                }
              else throw new Error("type:" + a);
            },
            getLostPoint: function (r) {
              for (var a = r.getModuleCount(), n = 0, e = 0; e < a; e++)
                for (var t = 0; t < a; t++) {
                  for (var o = 0, i = r.isDark(e, t), s = -1; s <= 1; s++)
                    if (!(e + s < 0 || a <= e + s))
                      for (var v = -1; v <= 1; v++)
                        t + v < 0 ||
                          a <= t + v ||
                          (s == 0 && v == 0) ||
                          (i == r.isDark(e + s, t + v) && o++);
                  o > 5 && (n += 3 + o - 5);
                }
              for (var e = 0; e < a - 1; e++)
                for (var t = 0; t < a - 1; t++) {
                  var h = 0;
                  r.isDark(e, t) && h++,
                    r.isDark(e + 1, t) && h++,
                    r.isDark(e, t + 1) && h++,
                    r.isDark(e + 1, t + 1) && h++,
                    (h == 0 || h == 4) && (n += 3);
                }
              for (var e = 0; e < a; e++)
                for (var t = 0; t < a - 6; t++)
                  r.isDark(e, t) &&
                    !r.isDark(e, t + 1) &&
                    r.isDark(e, t + 2) &&
                    r.isDark(e, t + 3) &&
                    r.isDark(e, t + 4) &&
                    !r.isDark(e, t + 5) &&
                    r.isDark(e, t + 6) &&
                    (n += 40);
              for (var t = 0; t < a; t++)
                for (var e = 0; e < a - 6; e++)
                  r.isDark(e, t) &&
                    !r.isDark(e + 1, t) &&
                    r.isDark(e + 2, t) &&
                    r.isDark(e + 3, t) &&
                    r.isDark(e + 4, t) &&
                    !r.isDark(e + 5, t) &&
                    r.isDark(e + 6, t) &&
                    (n += 40);
              for (var L = 0, t = 0; t < a; t++)
                for (var e = 0; e < a; e++) r.isDark(e, t) && L++;
              var p = Math.abs((100 * L) / a / a - 50) / 5;
              return (n += p * 10), n;
            },
          };
        B.exports = f;
      },
    },
  ]);
})();
