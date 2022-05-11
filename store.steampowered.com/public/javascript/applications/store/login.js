/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    H38U: function (e, t, r) {
      var n = r("f4xo"),
        i = r("rcnY"),
        a = r("wU8J"),
        s = r("Iq15"),
        o = r("dWSS");
      function l(e, t) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var c = l.prototype;
      (c.addData = function (e) {
        var t = new n(e);
        this.dataList.push(t), (this.dataCache = null);
      }),
        (c.isDark = function (e, t) {
          if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
            throw new Error(e + "," + t);
          return this.modules[e][t];
        }),
        (c.getModuleCount = function () {
          return this.moduleCount;
        }),
        (c.make = function () {
          if (this.typeNumber < 1) {
            var e = 1;
            for (e = 1; e < 40; e++) {
              for (
                var t = i.getRSBlocks(e, this.errorCorrectLevel),
                  r = new a(),
                  n = 0,
                  o = 0;
                o < t.length;
                o++
              )
                n += t[o].dataCount;
              for (o = 0; o < this.dataList.length; o++) {
                var l = this.dataList[o];
                r.put(l.mode, 4),
                  r.put(l.getLength(), s.getLengthInBits(l.mode, e)),
                  l.write(r);
              }
              if (r.getLengthInBits() <= 8 * n) break;
            }
            this.typeNumber = e;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (c.makeImpl = function (e, t) {
          (this.moduleCount = 4 * this.typeNumber + 17),
            (this.modules = new Array(this.moduleCount));
          for (var r = 0; r < this.moduleCount; r++) {
            this.modules[r] = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++)
              this.modules[r][n] = null;
          }
          this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, t),
            this.typeNumber >= 7 && this.setupTypeNumber(e),
            null == this.dataCache &&
              (this.dataCache = l.createData(
                this.typeNumber,
                this.errorCorrectLevel,
                this.dataList
              )),
            this.mapData(this.dataCache, t);
        }),
        (c.setupPositionProbePattern = function (e, t) {
          for (var r = -1; r <= 7; r++)
            if (!(e + r <= -1 || this.moduleCount <= e + r))
              for (var n = -1; n <= 7; n++)
                t + n <= -1 ||
                  this.moduleCount <= t + n ||
                  (this.modules[e + r][t + n] =
                    (0 <= r && r <= 6 && (0 == n || 6 == n)) ||
                    (0 <= n && n <= 6 && (0 == r || 6 == r)) ||
                    (2 <= r && r <= 4 && 2 <= n && n <= 4));
        }),
        (c.getBestMaskPattern = function () {
          for (var e = 0, t = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var n = s.getLostPoint(this);
            (0 == r || e > n) && ((e = n), (t = r));
          }
          return t;
        }),
        (c.createMovieClip = function (e, t, r) {
          var n = e.createEmptyMovieClip(t, r);
          this.make();
          for (var i = 0; i < this.modules.length; i++)
            for (var a = 1 * i, s = 0; s < this.modules[i].length; s++) {
              var o = 1 * s;
              this.modules[i][s] &&
                (n.beginFill(0, 100),
                n.moveTo(o, a),
                n.lineTo(o + 1, a),
                n.lineTo(o + 1, a + 1),
                n.lineTo(o, a + 1),
                n.endFill());
            }
          return n;
        }),
        (c.setupTimingPattern = function () {
          for (var e = 8; e < this.moduleCount - 8; e++)
            null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
          for (var t = 8; t < this.moduleCount - 8; t++)
            null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
        }),
        (c.setupPositionAdjustPattern = function () {
          for (
            var e = s.getPatternPosition(this.typeNumber), t = 0;
            t < e.length;
            t++
          )
            for (var r = 0; r < e.length; r++) {
              var n = e[t],
                i = e[r];
              if (null == this.modules[n][i])
                for (var a = -2; a <= 2; a++)
                  for (var o = -2; o <= 2; o++)
                    this.modules[n + a][i + o] =
                      -2 == a ||
                      2 == a ||
                      -2 == o ||
                      2 == o ||
                      (0 == a && 0 == o);
            }
        }),
        (c.setupTypeNumber = function (e) {
          for (
            var t = s.getBCHTypeNumber(this.typeNumber), r = 0;
            r < 18;
            r++
          ) {
            var n = !e && 1 == ((t >> r) & 1);
            this.modules[Math.floor(r / 3)][
              (r % 3) + this.moduleCount - 8 - 3
            ] = n;
          }
          for (r = 0; r < 18; r++) {
            n = !e && 1 == ((t >> r) & 1);
            this.modules[(r % 3) + this.moduleCount - 8 - 3][
              Math.floor(r / 3)
            ] = n;
          }
        }),
        (c.setupTypeInfo = function (e, t) {
          for (
            var r = (this.errorCorrectLevel << 3) | t,
              n = s.getBCHTypeInfo(r),
              i = 0;
            i < 15;
            i++
          ) {
            var a = !e && 1 == ((n >> i) & 1);
            i < 6
              ? (this.modules[i][8] = a)
              : i < 8
              ? (this.modules[i + 1][8] = a)
              : (this.modules[this.moduleCount - 15 + i][8] = a);
          }
          for (i = 0; i < 15; i++) {
            a = !e && 1 == ((n >> i) & 1);
            i < 8
              ? (this.modules[8][this.moduleCount - i - 1] = a)
              : i < 9
              ? (this.modules[8][15 - i - 1 + 1] = a)
              : (this.modules[8][15 - i - 1] = a);
          }
          this.modules[this.moduleCount - 8][8] = !e;
        }),
        (c.mapData = function (e, t) {
          for (
            var r = -1,
              n = this.moduleCount - 1,
              i = 7,
              a = 0,
              o = this.moduleCount - 1;
            o > 0;
            o -= 2
          )
            for (6 == o && o--; ; ) {
              for (var l = 0; l < 2; l++)
                if (null == this.modules[n][o - l]) {
                  var c = !1;
                  a < e.length && (c = 1 == ((e[a] >>> i) & 1)),
                    s.getMask(t, n, o - l) && (c = !c),
                    (this.modules[n][o - l] = c),
                    -1 == --i && (a++, (i = 7));
                }
              if ((n += r) < 0 || this.moduleCount <= n) {
                (n -= r), (r = -r);
                break;
              }
            }
        }),
        (l.PAD0 = 236),
        (l.PAD1 = 17),
        (l.createData = function (e, t, r) {
          for (
            var n = i.getRSBlocks(e, t), o = new a(), c = 0;
            c < r.length;
            c++
          ) {
            var u = r[c];
            o.put(u.mode, 4),
              o.put(u.getLength(), s.getLengthInBits(u.mode, e)),
              u.write(o);
          }
          var m = 0;
          for (c = 0; c < n.length; c++) m += n[c].dataCount;
          if (o.getLengthInBits() > 8 * m)
            throw new Error(
              "code length overflow. (" +
                o.getLengthInBits() +
                ">" +
                8 * m +
                ")"
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
              (o.put(l.PAD0, 8), o.getLengthInBits() >= 8 * m)
            );

          )
            o.put(l.PAD1, 8);
          return l.createBytes(o, n);
        }),
        (l.createBytes = function (e, t) {
          for (
            var r = 0,
              n = 0,
              i = 0,
              a = new Array(t.length),
              l = new Array(t.length),
              c = 0;
            c < t.length;
            c++
          ) {
            var u = t[c].dataCount,
              m = t[c].totalCount - u;
            (n = Math.max(n, u)), (i = Math.max(i, m)), (a[c] = new Array(u));
            for (var d = 0; d < a[c].length; d++)
              a[c][d] = 255 & e.buffer[d + r];
            r += u;
            var g = s.getErrorCorrectPolynomial(m),
              h = new o(a[c], g.getLength() - 1).mod(g);
            l[c] = new Array(g.getLength() - 1);
            for (d = 0; d < l[c].length; d++) {
              var f = d + h.getLength() - l[c].length;
              l[c][d] = f >= 0 ? h.get(f) : 0;
            }
          }
          var _ = 0;
          for (d = 0; d < t.length; d++) _ += t[d].totalCount;
          var b = new Array(_),
            C = 0;
          for (d = 0; d < n; d++)
            for (c = 0; c < t.length; c++)
              d < a[c].length && (b[C++] = a[c][d]);
          for (d = 0; d < i; d++)
            for (c = 0; c < t.length; c++)
              d < l[c].length && (b[C++] = l[c][d]);
          return b;
        }),
        (e.exports = l);
    },
    Iq15: function (e, t, r) {
      var n = r("nVVt"),
        i = r("dWSS"),
        a = r("dQei"),
        s = 0,
        o = 1,
        l = 2,
        c = 3,
        u = 4,
        m = 5,
        d = 6,
        g = 7,
        h = {
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
              h.getBCHDigit(t) - h.getBCHDigit(h.G15) >= 0;

            )
              t ^= h.G15 << (h.getBCHDigit(t) - h.getBCHDigit(h.G15));
            return ((e << 10) | t) ^ h.G15_MASK;
          },
          getBCHTypeNumber: function (e) {
            for (
              var t = e << 12;
              h.getBCHDigit(t) - h.getBCHDigit(h.G18) >= 0;

            )
              t ^= h.G18 << (h.getBCHDigit(t) - h.getBCHDigit(h.G18));
            return (e << 12) | t;
          },
          getBCHDigit: function (e) {
            for (var t = 0; 0 != e; ) t++, (e >>>= 1);
            return t;
          },
          getPatternPosition: function (e) {
            return h.PATTERN_POSITION_TABLE[e - 1];
          },
          getMask: function (e, t, r) {
            switch (e) {
              case s:
                return (t + r) % 2 == 0;
              case o:
                return t % 2 == 0;
              case l:
                return r % 3 == 0;
              case c:
                return (t + r) % 3 == 0;
              case u:
                return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
              case m:
                return ((t * r) % 2) + ((t * r) % 3) == 0;
              case d:
                return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
              case g:
                return (((t * r) % 3) + ((t + r) % 2)) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + e);
            }
          },
          getErrorCorrectPolynomial: function (e) {
            for (var t = new i([1], 0), r = 0; r < e; r++)
              t = t.multiply(new i([1, a.gexp(r)], 0));
            return t;
          },
          getLengthInBits: function (e, t) {
            if (1 <= t && t < 10)
              switch (e) {
                case n.MODE_NUMBER:
                  return 10;
                case n.MODE_ALPHA_NUM:
                  return 9;
                case n.MODE_8BIT_BYTE:
                case n.MODE_KANJI:
                  return 8;
                default:
                  throw new Error("mode:" + e);
              }
            else if (t < 27)
              switch (e) {
                case n.MODE_NUMBER:
                  return 12;
                case n.MODE_ALPHA_NUM:
                  return 11;
                case n.MODE_8BIT_BYTE:
                  return 16;
                case n.MODE_KANJI:
                  return 10;
                default:
                  throw new Error("mode:" + e);
              }
            else {
              if (!(t < 41)) throw new Error("type:" + t);
              switch (e) {
                case n.MODE_NUMBER:
                  return 14;
                case n.MODE_ALPHA_NUM:
                  return 13;
                case n.MODE_8BIT_BYTE:
                  return 16;
                case n.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:" + e);
              }
            }
          },
          getLostPoint: function (e) {
            for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
              for (var i = 0; i < t; i++) {
                for (var a = 0, s = e.isDark(n, i), o = -1; o <= 1; o++)
                  if (!(n + o < 0 || t <= n + o))
                    for (var l = -1; l <= 1; l++)
                      i + l < 0 ||
                        t <= i + l ||
                        (0 == o && 0 == l) ||
                        (s == e.isDark(n + o, i + l) && a++);
                a > 5 && (r += 3 + a - 5);
              }
            for (n = 0; n < t - 1; n++)
              for (i = 0; i < t - 1; i++) {
                var c = 0;
                e.isDark(n, i) && c++,
                  e.isDark(n + 1, i) && c++,
                  e.isDark(n, i + 1) && c++,
                  e.isDark(n + 1, i + 1) && c++,
                  (0 != c && 4 != c) || (r += 3);
              }
            for (n = 0; n < t; n++)
              for (i = 0; i < t - 6; i++)
                e.isDark(n, i) &&
                  !e.isDark(n, i + 1) &&
                  e.isDark(n, i + 2) &&
                  e.isDark(n, i + 3) &&
                  e.isDark(n, i + 4) &&
                  !e.isDark(n, i + 5) &&
                  e.isDark(n, i + 6) &&
                  (r += 40);
            for (i = 0; i < t; i++)
              for (n = 0; n < t - 6; n++)
                e.isDark(n, i) &&
                  !e.isDark(n + 1, i) &&
                  e.isDark(n + 2, i) &&
                  e.isDark(n + 3, i) &&
                  e.isDark(n + 4, i) &&
                  !e.isDark(n + 5, i) &&
                  e.isDark(n + 6, i) &&
                  (r += 40);
            var u = 0;
            for (i = 0; i < t; i++)
              for (n = 0; n < t; n++) e.isDark(n, i) && u++;
            return (r += 10 * (Math.abs((100 * u) / t / t - 50) / 5));
          },
        };
      e.exports = h;
    },
    "Kd3+": function (e, t, r) {
      e.exports = {
        LoginQR: "qrlogin_LoginQR_1wtS3",
        Blur: "qrlogin_Blur_3j1v-",
        Overlay: "qrlogin_Overlay_2VJKT",
        Box: "qrlogin_Box_2Lr2C",
        Column: "qrlogin_Column_2UEUT",
      };
    },
    OPJs: function (e, t, r) {
      e.exports = {
        QRBits: "qrcode_QRBits_3FhhK",
        Bit: "qrcode_Bit_2Yuvr",
        Active: "qrcode_Active_274P1",
      };
    },
    WTXQ: function (e, t, r) {
      e.exports = {
        SideBySide: "newlogindialog_SideBySide_1Wl13",
        QRSection: "newlogindialog_QRSection_2ZDyS",
        QR: "newlogindialog_QR_1d6FZ",
        TextField: "newlogindialog_TextField_2KXGK",
        TextInput: "newlogindialog_TextInput_2eKVn",
        Danger: "newlogindialog_Danger_1-HwJ",
        LoginForm: "newlogindialog_LoginForm_3Tsg9",
        FieldLabel: "newlogindialog_FieldLabel_3d8dp",
        Highlight: "newlogindialog_Highlight_XyqzE",
        CheckboxField: "newlogindialog_CheckboxField_2QWD5",
        CheckboxFieldLabel: "newlogindialog_CheckboxFieldLabel_2yrCY",
        Checkbox: "newlogindialog_Checkbox_3tTFg",
        Check: "newlogindialog_Check_6EoZE",
        SignInButtonContainer: "newlogindialog_SignInButtonContainer_14fsn",
        SubmitButton: "newlogindialog_SubmitButton_2QgFE",
        Text: "newlogindialog_Text_3omtv",
        Center: "newlogindialog_Center_1blSs",
        TextLink: "newlogindialog_TextLink_1cnUQ",
        FormError: "newlogindialog_FormError_1Mcy9",
        TextAlignCenter: "newlogindialog_TextAlignCenter_2meUB",
        FlexCol: "newlogindialog_FlexCol_1mhmm",
        AlignItemsCenter: "newlogindialog_AlignItemsCenter_30P8x",
        JustifyContentCenter: "newlogindialog_JustifyContentCenter_LWEzR",
        ProtectingAccount: "newlogindialog_ProtectingAccount_1aop9",
        Label: "newlogindialog_Label_2SE9Z",
        AccountName: "newlogindialog_AccountName_3Vjp0",
        Description: "newlogindialog_Description_QApnT",
        AwaitingMobileConfText: "newlogindialog_AwaitingMobileConfText_7LmnT",
        AwaitingMobileConfIcon: "newlogindialog_AwaitingMobileConfIcon_2hLC_",
        EnterCodeInsteadLink: "newlogindialog_EnterCodeInsteadLink_37AOB",
        EnterCodeFromMobileContainer:
          "newlogindialog_EnterCodeFromMobileContainer_T68fB",
        EnterCodeFromEmailContainer:
          "newlogindialog_EnterCodeFromEmailContainer_2pVTW",
        EnterCodeFromMobile: "newlogindialog_EnterCodeFromMobile_1Rruw",
        EnterCodeFromEmail: "newlogindialog_EnterCodeFromEmail_1-D_t",
        EnterCodeEmailAddress: "newlogindialog_EnterCodeEmailAddress_2zLvb",
        CodeInputFieldContainer: "newlogindialog_CodeInputFieldContainer_3Ua6v",
        CodeInputField: "newlogindialog_CodeInputField_IuMwV",
        SegmentContainer: "newlogindialog_SegmentContainer_17vl6",
        Segment: "newlogindialog_Segment_2HqKU",
        SegmentedCharacterInput: "newlogindialog_SegmentedCharacterInput_1kJ6q",
        StandardLayout: "newlogindialog_StandardLayout_286eh",
        PrimaryHeader: "newlogindialog_PrimaryHeader_39uMK",
        FormContainer: "newlogindialog_FormContainer_3jLIH",
        Embedded: "newlogindialog_Embedded_CpeGc",
        Compact: "newlogindialog_Compact_9CHmB",
        HeaderLogo: "newlogindialog_HeaderLogo_1rtyT",
        EmbeddedRoot: "newlogindialog_EmbeddedRoot_2Vbrf",
        EmbeddedRootFooter: "newlogindialog_EmbeddedRootFooter_1HRJ1",
        AccountCreationPrompt: "newlogindialog_AccountCreationPrompt_1h5_x",
      };
    },
    aRTE: function (e, t) {
      e.exports = { L: 1, M: 0, Q: 3, H: 2 };
    },
    dQei: function (e, t) {
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
          n = 0;
        n < 8;
        n++
      )
        r.EXP_TABLE[n] = 1 << n;
      for (n = 8; n < 256; n++)
        r.EXP_TABLE[n] =
          r.EXP_TABLE[n - 4] ^
          r.EXP_TABLE[n - 5] ^
          r.EXP_TABLE[n - 6] ^
          r.EXP_TABLE[n - 8];
      for (n = 0; n < 255; n++) r.LOG_TABLE[r.EXP_TABLE[n]] = n;
      e.exports = r;
    },
    dWSS: function (e, t, r) {
      var n = r("dQei");
      function i(e, t) {
        if (null == e.length) throw new Error(e.length + "/" + t);
        for (var r = 0; r < e.length && 0 == e[r]; ) r++;
        this.num = new Array(e.length - r + t);
        for (var n = 0; n < e.length - r; n++) this.num[n] = e[n + r];
      }
      (i.prototype = {
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
              t[r + a] ^= n.gexp(n.glog(this.get(r)) + n.glog(e.get(a)));
          return new i(t, 0);
        },
        mod: function (e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (
            var t = n.glog(this.get(0)) - n.glog(e.get(0)),
              r = new Array(this.getLength()),
              a = 0;
            a < this.getLength();
            a++
          )
            r[a] = this.get(a);
          for (a = 0; a < e.getLength(); a++)
            r[a] ^= n.gexp(n.glog(e.get(a)) + t);
          return new i(r, 0).mod(e);
        },
      }),
        (e.exports = i);
    },
    f4xo: function (e, t, r) {
      var n = r("nVVt");
      function i(e) {
        (this.mode = n.MODE_8BIT_BYTE), (this.data = e);
      }
      (i.prototype = {
        getLength: function (e) {
          return this.data.length;
        },
        write: function (e) {
          for (var t = 0; t < this.data.length; t++)
            e.put(this.data.charCodeAt(t), 8);
        },
      }),
        (e.exports = i);
    },
    nVVt: function (e, t) {
      e.exports = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8,
      };
    },
    oTPU: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return De;
        });
      var n = r("q1tI"),
        i = r.n(n),
        a = r("mrSG"),
        s = r("9XWO"),
        o = r("GbHM"),
        l = r("2vnA"),
        c = r("vDqi"),
        u = r.n(c),
        m = r("vYsE"),
        d = (r("msu0"), r("/Q1a")),
        g = r("hRO2"),
        h = r("3dpo");
      const f = g.Message;
      class _ extends f {
        constructor(e = null) {
          super(),
            _.prototype.account_name || h.a(_.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  account_name: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = h.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(_.M(), e, t);
        }
        static fromObject(e) {
          return h.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Request";
        }
      }
      class b extends f {
        constructor(e = null) {
          super(),
            b.prototype.publickey_mod || h.a(b.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  publickey_mod: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  publickey_exp: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  timestamp: {
                    n: 3,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = h.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(b.M(), e, t);
        }
        static fromObject(e) {
          return h.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Response";
        }
      }
      class C extends f {
        constructor(e = null) {
          super(),
            C.prototype.confirmation_type || h.a(C.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  confirmation_type: {
                    n: 1,
                    br: h.d.readEnum,
                    bw: h.h.writeEnum,
                  },
                  associated_message: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(C.M(), e, t);
        }
        static fromObject(e) {
          return h.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AllowedConfirmation";
        }
      }
      class p extends f {
        constructor(e = null) {
          super(),
            p.prototype.device_friendly_name || h.a(p.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  platform_type: { n: 2, br: h.d.readEnum, bw: h.h.writeEnum },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = h.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(p.M(), e, t);
        }
        static fromObject(e) {
          return h.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Request";
        }
      }
      class B extends f {
        constructor(e = null) {
          super(),
            B.prototype.client_id || h.a(B.M()),
            f.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  challenge_url: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  request_id: { n: 3, br: h.d.readBytes, bw: h.h.writeBytes },
                  interval: { n: 4, br: h.d.readFloat, bw: h.h.writeFloat },
                  allowed_confirmations: { n: 5, c: C, r: !0, q: !0 },
                  version: { n: 6, br: h.d.readInt32, bw: h.h.writeInt32 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = h.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(B.M(), e, t);
        }
        static fromObject(e) {
          return h.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Response";
        }
      }
      class y extends f {
        constructor(e = null) {
          super(),
            y.prototype.device_friendly_name || h.a(y.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  account_name: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  encrypted_password: {
                    n: 3,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  encryption_timestamp: {
                    n: 4,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  remember_login: { n: 5, br: h.d.readBool, bw: h.h.writeBool },
                  platform_type: { n: 6, br: h.d.readEnum, bw: h.h.writeEnum },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = h.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(y.M(), e, t);
        }
        static fromObject(e) {
          return h.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Request";
        }
      }
      class w extends f {
        constructor(e = null) {
          super(),
            w.prototype.client_id || h.a(w.M()),
            f.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  request_id: { n: 2, br: h.d.readBytes, bw: h.h.writeBytes },
                  interval: { n: 3, br: h.d.readFloat, bw: h.h.writeFloat },
                  allowed_confirmations: { n: 4, c: C, r: !0, q: !0 },
                  steamid: {
                    n: 5,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = h.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(w.M(), e, t);
        }
        static fromObject(e) {
          return h.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Response";
        }
      }
      class E extends f {
        constructor(e = null) {
          super(),
            E.prototype.client_id || h.a(E.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  request_id: { n: 2, br: h.d.readBytes, bw: h.h.writeBytes },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = h.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(E.M(), e, t);
        }
        static fromObject(e) {
          return h.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Request";
        }
      }
      class S extends f {
        constructor(e = null) {
          super(),
            S.prototype.new_client_id || h.a(S.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  new_client_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  new_challenge_url: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  refresh_token: {
                    n: 3,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  access_token: {
                    n: 4,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = h.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(S.M(), e, t);
        }
        static fromObject(e) {
          return h.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Response";
        }
      }
      class v extends f {
        constructor(e = null) {
          super(),
            v.prototype.ip || h.a(v.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  ip: { n: 1, br: h.d.readString, bw: h.h.writeString },
                  geoloc: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  city: { n: 3, br: h.d.readString, bw: h.h.writeString },
                  state: { n: 4, br: h.d.readString, bw: h.h.writeString },
                  country: { n: 5, br: h.d.readString, bw: h.h.writeString },
                  platform_type: { n: 6, br: h.d.readEnum, bw: h.h.writeEnum },
                  device_friendly_name: {
                    n: 7,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = h.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(v.M(), e, t);
        }
        static fromObject(e) {
          return h.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Response";
        }
      }
      class M extends f {
        constructor(e = null) {
          super(),
            M.prototype.client_ids || h.a(M.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  client_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.d.readUint64String,
                    bw: h.h.writeRepeatedUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = h.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(M.M(), e, t);
        }
        static fromObject(e) {
          return h.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Response";
        }
      }
      class R extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
        }
      }
      class O extends f {
        constructor(e = null) {
          super(),
            O.prototype.client_id || h.a(O.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  code: { n: 3, br: h.d.readString, bw: h.h.writeString },
                  code_type: { n: 4, br: h.d.readEnum, bw: h.h.writeEnum },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = h.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(O.M(), e, t);
        }
        static fromObject(e) {
          return h.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
        }
      }
      class A extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
        }
      }
      class L extends f {
        constructor(e = null) {
          super(),
            L.prototype.access_token || h.a(L.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  access_token: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = h.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(L.M(), e, t);
        }
        static fromObject(e) {
          return h.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Response";
        }
      }
      class T extends f {
        constructor(e = null) {
          super(),
            T.prototype.nonce || h.a(T.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  nonce: { n: 1, br: h.d.readString, bw: h.h.writeString },
                  expiry: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = h.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(T.M(), e, t);
        }
        static fromObject(e) {
          return h.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Response";
        }
      }
      class j extends f {
        constructor(e = null) {
          super(),
            j.prototype.appid || h.a(j.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                  minutes_remaining: {
                    n: 2,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = h.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(j.M(), e, t);
        }
        static fromObject(e) {
          return h.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_TimeRemaining";
        }
      }
      class z extends f {
        constructor(e = null) {
          super(),
            z.prototype.entries || h.a(z.M()),
            f.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { entries: { n: 2, c: j, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = h.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(z.M(), e, t);
        }
        static fromObject(e) {
          return h.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Response";
        }
      }
      var F, N;
      !(function (e) {
        (e.GetPasswordRSAPublicKey = function (e, t) {
          return e.SendMsg("Authentication.GetPasswordRSAPublicKey#1", t, b, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.BeginAuthSessionViaQR = function (e, t) {
            return e.SendMsg("Authentication.BeginAuthSessionViaQR#1", t, B, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.BeginAuthSessionViaCredentials = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              t,
              w,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.PollAuthSessionStatus = function (e, t) {
            return e.SendMsg("Authentication.PollAuthSessionStatus#1", t, S, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAuthSessionInfo = function (e, t) {
            return e.SendMsg("Authentication.GetAuthSessionInfo#1", t, v, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              t,
              R,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              t,
              A,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GenerateAccessTokenForApp = function (e, t) {
            return e.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              t,
              L,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetAuthSessionsForAccount = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              t,
              M,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          });
      })(F || (F = {})),
        (function (e) {
          (e.CreateNonce = function (e, t) {
            return e.SendMsg("CloudGaming.CreateNonce#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
            (e.GetTimeRemaining = function (e, t) {
              return e.SendMsg("CloudGaming.GetTimeRemaining#1", t, z, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            });
        })(N || (N = {}));
      class k {
        constructor(e, t, r) {
          (this.m_transport = e),
            (this.m_onCompleteCallback = t),
            (this.m_ePlatformType = r);
        }
        StartPolling() {
          this.m_activeTimerID = window.setTimeout(
            this.PollForUpdate,
            this.m_msPollInterval
          );
        }
        StopPolling() {
          window.clearTimeout(this.m_activeTimerID),
            (this.m_activeTimerID = void 0);
        }
        PollForUpdate() {
          return Object(a.a)(this, void 0, void 0, function* () {
            try {
              const e = s.b.Init(E);
              e.Body().set_client_id(this.m_strClientID),
                e.Body().set_request_id(this.m_rgRequestID);
              const t = yield F.PollAuthSessionStatus(this.m_transport, e),
                r = t.GetEResult();
              if (1 !== r)
                return (
                  console.error(`Failed to poll auth session. Result: ${r}`),
                  (this.m_strErrorMessage = "Uh Oh"),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              const {
                new_challenge_url: n,
                new_client_id: i,
                refresh_token: a,
                access_token: o,
              } = t.Body().toObject();
              return a
                ? (this.m_onCompleteCallback({
                    bSuccess: !0,
                    strRefreshToken: a,
                    strAccessToken: o,
                  }),
                  r)
                : (n && (this.m_strChallengeURL = n),
                  i && (this.m_strClientID = i),
                  (this.m_activeTimerID = window.setTimeout(
                    this.PollForUpdate,
                    this.m_msPollInterval
                  )),
                  r);
            } catch (e) {
              return (
                console.error(`Failed to poll auth session. ${e}`),
                (this.m_strErrorMessage = "Uh Oh"),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        GetErrorMessage() {
          return this.m_strErrorMessage;
        }
      }
      Object(a.b)([l.C], k.prototype, "m_strChallengeURL", void 0),
        Object(a.b)([l.C], k.prototype, "m_strErrorMessage", void 0),
        Object(a.b)([m.a], k.prototype, "PollForUpdate", null);
      var P = r("aoTL"),
        I = r("hCpY"),
        W = r("cHF8");
      class U extends k {
        constructor(e) {
          super(
            e.transport,
            (t) => {
              this.m_eStatus = t.bSuccess ? 10 : 11;
              const r = t.bSuccess
                ? Object.assign(Object.assign({}, t), {
                    strAccountName: this.m_strAccountName,
                    steamid: this.m_steamid,
                  })
                : t;
              e.onComplete(r);
            },
            e.ePlatformType
          ),
            (this.m_eStatus = 0),
            (this.m_strConfirmationAssociatedMessage = ""),
            (this.m_bUsingCodeOverride = !1);
        }
        Start(e, t, r) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (0 !== this.m_eStatus && 2 !== this.m_eStatus)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance."
                ),
                2
              );
            (this.m_eStatus = 1), (this.m_bUsingCodeOverride = !1);
            try {
              const n = yield (function (e, t) {
                return Object(a.a)(this, void 0, void 0, function* () {
                  const r = s.b.Init(_);
                  r.Body().set_account_name(t);
                  try {
                    const t = yield F.GetPasswordRSAPublicKey(e, r);
                    if (1 !== t.GetEResult())
                      return (
                        console.error(
                          `Failed to get RSA key with EResult: ${t.GetEResult()}`
                        ),
                        null
                      );
                    const {
                      publickey_exp: n,
                      publickey_mod: i,
                      timestamp: a,
                    } = t.Body().toObject();
                    return n && i && a
                      ? { publickey_exp: n, publickey_mod: i, timestamp: a }
                      : (console.error(
                          `Missing expected field in RSA Key: ${JSON.stringify({
                            publickey_exp: n,
                            publickey_mod: i,
                            timestamp: a,
                          })}`
                        ),
                        null);
                  } catch (e) {
                    return console.error(`Failed to get RSA key: ${e}`), null;
                  }
                });
              })(this.m_transport, e);
              if (!n)
                return (
                  console.error(
                    "Cannot start auth session without a valid RSA key"
                  ),
                  2
                );
              const i = Object(W.c)(t, n),
                o = s.b.Init(y);
              o.Body().set_account_name(e),
                o.Body().set_encrypted_password(i),
                o.Body().set_encryption_timestamp(n.timestamp),
                o.Body().set_remember_login(!!r),
                o.Body().set_platform_type(this.m_ePlatformType);
              const l = yield F.BeginAuthSessionViaCredentials(
                  this.m_transport,
                  o
                ),
                c = l.GetEResult();
              if (1 !== c)
                switch (c) {
                  case 5:
                    return (this.m_eStatus = 2), c;
                  default:
                    return (
                      console.error(
                        `Failed to start auth session. Result: ${c}`
                      ),
                      (this.m_strErrorMessage = "Uh Oh"),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      c
                    );
                }
              this.m_strAccountName = e;
              const {
                client_id: u,
                request_id: m,
                interval: d,
                allowed_confirmations: g,
                steamid: h,
              } = l.Body().toObject();
              (this.m_msPollInterval = 1e3 * d),
                (this.m_strClientID = u),
                (this.m_rgRequestID = m),
                (this.m_steamid = h);
              const f = (function (e) {
                  let t = e[0] || 0;
                  e.length > 1 && (t = e.sort((e, t) => x[e] - x[t])[0]);
                  return t;
                })(g.map(({ confirmation_type: e }) => e)),
                b = g.find(({ confirmation_type: e }) => e === f);
              switch (
                (b &&
                  b.associated_message &&
                  (this.m_strConfirmationAssociatedMessage =
                    b.associated_message),
                f)
              ) {
                case 1:
                  return (this.m_eStatus = 9), this.StartPolling(), c;
                case 2:
                  this.m_eStatus = 3;
                  break;
                case 5:
                  (this.m_eStatus = 4), this.StartPolling();
                  break;
                case 3:
                  this.m_eStatus = 5;
                  break;
                case 4:
                  (this.m_eStatus = 6), this.StartPolling();
              }
              return c;
            } catch (e) {
              return (
                console.error(`Failed to start auth session. ${e}`),
                (this.m_strErrorMessage = "Uh Oh"),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        Stop() {
          this.StopPolling(), (this.m_eStatus = 12);
        }
        GetStatus() {
          return this.m_eStatus;
        }
        GetConfirmationAssociatedMessage() {
          return this.m_strConfirmationAssociatedMessage;
        }
        GetAccountName() {
          return this.m_strAccountName;
        }
        SendSteamGuardCode(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            try {
              const t = 3 === this.m_eStatus || 7 === this.m_eStatus,
                r = s.b.Init(O);
              r.Body().set_client_id(this.m_strClientID),
                r.Body().set_steamid(this.m_steamid),
                r.Body().set_code(e),
                r.Body().set_code_type(t ? 2 : 3);
              const n = (yield F.UpdateAuthSessionWithSteamGuardCode(
                this.m_transport,
                r
              )).GetEResult();
              if (1 !== n)
                switch (n) {
                  case 65:
                  case 88:
                    return (this.m_eStatus = t ? 7 : 8), n;
                  default:
                    return (
                      console.error(
                        `Failed to update auth session with SG code. Result: ${n}`
                      ),
                      (this.m_strErrorMessage = "Uh Oh"),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      n
                    );
                }
              return (this.m_eStatus = 9), this.StartPolling(), n;
            } catch (e) {
              return (
                console.error(
                  `Failed to update auth session with SG code. ${e}`
                ),
                (this.m_strErrorMessage = "Uh Oh"),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        UseCodeOverride() {
          switch (this.m_eStatus) {
            case 6:
              return (
                (this.m_bUsingCodeOverride = !0), void (this.m_eStatus = 5)
              );
            case 4:
              return (
                (this.m_bUsingCodeOverride = !0), void (this.m_eStatus = 3)
              );
            default:
              return void console.error(
                `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`
              );
          }
        }
        BCanGoBack() {
          switch (this.m_eStatus) {
            case 5:
            case 8:
            case 3:
            case 7:
            case 6:
            case 4:
              return !0;
            default:
              return !1;
          }
        }
        GoBack() {
          switch (this.m_eStatus) {
            case 6:
            case 4:
              this.m_eStatus = 0;
              break;
            case 5:
            case 8:
              this.m_eStatus = this.m_bUsingCodeOverride ? 6 : 0;
              break;
            case 3:
            case 7:
              this.m_eStatus = this.m_bUsingCodeOverride ? 4 : 0;
              break;
            default:
              return void console.error(
                `Don't know how to GoBack from login session status ${this.m_eStatus}`
              );
          }
        }
      }
      Object(a.b)([l.C], U.prototype, "m_eStatus", void 0),
        Object(a.b)([I.b], U.prototype, "Start", null),
        Object(a.b)([I.b], U.prototype, "SendSteamGuardCode", null),
        Object(a.b)([I.b], U.prototype, "UseCodeOverride", null),
        Object(a.b)([I.b], U.prototype, "GoBack", null);
      const x = [3, 2, 1, 0, 4, 5].reduce((e, t, r) => ((e[t] = r), e), {});
      function D(e) {
        return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= 5;
      }
      class H extends k {
        constructor(e) {
          super(
            e.transport,
            (t) => {
              (this.m_eStatus = t.bSuccess ? 3 : 4), e.onComplete(t);
            },
            e.ePlatformType
          ),
            (this.m_eStatus = 0);
        }
        Start() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (0 !== this.m_eStatus)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance."
                ),
                2
              );
            this.m_eStatus = 1;
            try {
              const e = s.b.Init(p);
              e.Body().set_platform_type(this.m_ePlatformType);
              const t = yield F.BeginAuthSessionViaQR(this.m_transport, e),
                r = t.GetEResult();
              if (1 !== r)
                return (
                  console.error(`Failed to start auth session. Result: ${r}`),
                  (this.m_strErrorMessage = "Uh Oh"),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              const {
                client_id: n,
                challenge_url: i,
                interval: a,
                request_id: o,
              } = t.Body().toObject();
              return (
                (this.m_strClientID = n),
                (this.m_strChallengeURL = i),
                (this.m_msPollInterval = 1e3 * a),
                (this.m_rgRequestID = o),
                (this.m_eStatus = 2),
                this.StartPolling(),
                r
              );
            } catch (e) {
              return (
                console.error(`Failed to start auth session. ${e}`),
                (this.m_strErrorMessage = "Uh Oh"),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        Stop() {
          this.StopPolling(), (this.m_eStatus = 5);
        }
        GetChallengeURL() {
          return this.m_strChallengeURL;
        }
        GetStatus() {
          return this.m_eStatus;
        }
      }
      Object(a.b)([l.C], H.prototype, "m_eStatus", void 0);
      var G,
        V = r("WTXQ"),
        q = r.n(V),
        Z = r("tmER"),
        K = r.n(Z),
        Q = r("OPJs"),
        $ = r.n(Q);
      function J(e) {
        let { quality: t, children: r, className: a, activeBitStyle: s } = e;
        void 0 === t && (t = G.M), (s = s || {});
        const l = (function (e, t = {}) {
          const { typeNumber: r, errorCorrectLevel: i } = t,
            [a, s] = Object(n.useState)();
          return (
            Object(n.useEffect)(() => {
              s(K()(e, { typeNumber: r, errorCorrectLevel: i }).modules);
            }, [e, r, i]),
            a
          );
        })(r, { typeNumber: 6, errorCorrectLevel: t });
        if (!l) return null;
        const c = Object(o.a)($.a.Bit),
          u = Object(o.a)($.a.Bit, $.a.Active),
          m = [];
        for (let e = 0; e < l.length; e++)
          for (let t = 0; t < l.length; t++) {
            const r = l[e][t],
              n = r ? u : c;
            m.push(
              i.a.createElement("div", {
                key: `${e}_${t}`,
                className: n,
                style: r ? s : {},
              })
            );
          }
        return i.a.createElement(
          "div",
          {
            className: Object(o.a)($.a.QRBits, a),
            style: { gridTemplateColumns: `repeat( ${l.length}, 1fr )` },
          },
          m
        );
      }
      !(function (e) {
        (e[(e.L = 1)] = "L"),
          (e[(e.M = 0)] = "M"),
          (e[(e.Q = 3)] = "Q"),
          (e[(e.H = 2)] = "H");
      })(G || (G = {}));
      var X = r("Kd3+"),
        Y = r.n(X);
      function ee(e) {
        const {
            transport: t,
            onComplete: r,
            onStatusChange: a,
            platform: s,
          } = e,
          {
            eStatus: l,
            strChallengeURL: c,
            strError: u,
            reset: m,
          } = (function (e) {
            const [t, r] = Object(n.useState)(new H(e));
            return (
              Object(n.useEffect)(
                () => (
                  t.Start(),
                  () => {
                    t.Stop();
                  }
                ),
                [t]
              ),
              Object(P.d)(() => ({
                strChallengeURL: t.GetChallengeURL(),
                strError: t.GetErrorMessage(),
                eStatus: t.GetStatus(),
                reset: () => r(new H(e)),
              }))
            );
          })({ transport: t, onComplete: r, ePlatformType: s });
        Object(n.useEffect)(() => a && a(l), [a, l]);
        const g = 2 === l ? c : d.d.STORE_BASE_URL,
          h = 0 === l || 1 === l,
          f = 4 === l,
          _ = 3 === l,
          b = h || f || _;
        return i.a.createElement(
          "div",
          { className: Y.a.Column },
          i.a.createElement(
            "div",
            { className: Y.a.LoginQR },
            i.a.createElement(
              J,
              {
                quality: te(g),
                className: Object(o.a)(Y.a.LoginQR, b && Y.a.Blur),
              },
              g
            ),
            b &&
              i.a.createElement(
                "div",
                { className: Y.a.Overlay },
                i.a.createElement(
                  "div",
                  { className: Y.a.Box },
                  h && i.a.createElement(re, null),
                  f && i.a.createElement(ne, null, u),
                  _ && i.a.createElement(ie, null)
                )
              )
          )
        );
      }
      function te(e) {
        return e.length <= 90 ? G.Q : void 0;
      }
      function re() {
        return i.a.createElement("div", null, "Loading...");
      }
      function ne(e) {
        return i.a.createElement(
          "div",
          { className: Y.a.ErrorMessage },
          e.children
        );
      }
      function ie() {
        return i.a.createElement("div", { className: Y.a.Success }, "Success!");
      }
      var ae = r("GXif"),
        se = r("kWcV");
      const oe = Object(n.createContext)(!1),
        le = () => Object(n.useContext)(oe);
      function ce(e) {
        !(function (e) {
          const t = Object(n.useRef)(e);
          (t.current = e),
            Object(n.useEffect)(() => {
              t.current &&
                u.a
                  .post(`${d.d.LOGIN_BASE_URL}jwt/ajaxstatus`, null, {
                    withCredentials: !0,
                  })
                  .then((e) => {
                    var r;
                    1 ===
                      (null === (r = null == e ? void 0 : e.data) ||
                      void 0 === r
                        ? void 0
                        : r.result) &&
                      window.location.assign(
                        `${
                          d.d.LOGIN_BASE_URL
                        }jwt/refresh?redir=${encodeURIComponent(t.current)}`
                      );
                  });
            }, [t]);
        })(e.redirectUrl);
        return i.a.createElement(
          ue,
          Object.assign({}, e, {
            onSuccess: (t) => {
              const { strRefreshToken: r } = t;
              (function (e) {
                const t = new FormData();
                t.append("nonce", e),
                  t.append("sessionid", d.d.SESSIONID),
                  t.append("redir", document.location.href);
                const r = `${d.d.LOGIN_BASE_URL}jwt/finalizelogin`;
                return u.a.post(r, t, { withCredentials: !0 }).then(
                  (e) => {
                    const { data: t } = e;
                    if (!(t && t.landing && t.steamID && t.nonce))
                      return (
                        console.error(
                          "Result of finalizelogin does not match expecations!"
                        ),
                        !1
                      );
                    const { landing: r, steamID: n, nonce: i } = t;
                    return u.a.get(`${r}?steamID=${n}&nonce=${i}`).then(
                      () => !0,
                      () => (
                        console.error(
                          "Failed to finalize login. Domain specific call failed."
                        ),
                        !1
                      )
                    );
                  },
                  () => (
                    console.error(
                      "Failed to finalize login. Initial call failed."
                    ),
                    !1
                  )
                );
              })(r).then(
                (t) => e.onComplete(t),
                () => e.onComplete(!1)
              );
            },
            embedded: "modal" === e.theme,
          })
        );
      }
      function ue(e) {
        const { embedded: t } = e,
          r = Object(a.c)(e, ["embedded"]);
        return i.a.createElement(
          oe.Provider,
          { value: t },
          i.a.createElement(me, Object.assign({}, r))
        );
      }
      function me(e) {
        const {
            transport: t,
            onSuccess: r,
            platform: a,
            disableQR: s,
            autoFocus: o,
            renderSuccess: l = () => i.a.createElement(Ue, null),
          } = e,
          c = ({ bSuccess: e, strRefreshToken: t, strAccessToken: n }) => {
            e && r({ strRefreshToken: t, strAccessToken: n });
          };
        let {
          eStatus: u,
          strError: m,
          strConfirmationAssociatedMessage: g,
          strAccountName: h,
          start: f,
          reset: _,
          addCode: b,
          goBack: C,
          useCodeOverride: p,
        } = (function (e) {
          const [t, r] = Object(n.useState)(new U(e));
          return Object(P.d)(() => ({
            strAccountName: t.GetAccountName(),
            strError: t.GetErrorMessage(),
            strConfirmationAssociatedMessage: t.GetConfirmationAssociatedMessage(),
            eStatus: t.GetStatus(),
            bCanGoBack: t.BCanGoBack(),
            start: t.Start,
            addCode: t.SendSteamGuardCode,
            useCodeOverride: t.UseCodeOverride,
            reset: () => r(new U(e)),
            goBack: t.GoBack,
          }));
        })({ transport: t, onComplete: c, ePlatformType: a });
        const [B, y] = Object(n.useState)(0),
          w = le(),
          E = ({ strAccountName: e, strPassword: t }) => f(e, t);
        if (!!(0 === u || 1 === u || 2 === u)) {
          const e = () => alert("TODO"),
            r = i.a.createElement(
              "div",
              { className: q.a.SideBySide },
              i.a.createElement(de, { onSubmit: E, status: u, autoFocus: o }),
              !s &&
                i.a.createElement(
                  "div",
                  { className: q.a.QRSection },
                  i.a.createElement(
                    he,
                    { highlight: !0 },
                    Object(ae.f)("#Login_SignIn_OrWithQRCode")
                  ),
                  i.a.createElement(
                    "div",
                    { className: q.a.QR },
                    i.a.createElement(ee, {
                      onStatusChange: y,
                      transport: t,
                      onComplete: c,
                      platform: a,
                    })
                  ),
                  i.a.createElement(
                    Te,
                    { onClick: e, align: "center" },
                    Object(ae.f)("#Login_GetMobileApp_Link")
                  )
                )
            );
          return w
            ? i.a.createElement(
                ze,
                { gap: 18, className: q.a.EmbeddedRoot },
                i.a.createElement(We, { className: q.a.HeaderLogo }),
                r,
                i.a.createElement(
                  "div",
                  { className: q.a.EmbeddedRootFooter },
                  i.a.createElement(
                    Te,
                    {
                      href: `${
                        d.d.HELP_BASE_URL
                      }wizard/HelpWithLogin?redir=${encodeURIComponent(
                        document.location.href
                      )}`,
                    },
                    Object(ae.f)("#Login_Help_SignIn")
                  ),
                  i.a.createElement(
                    "div",
                    { className: q.a.AccountCreation },
                    i.a.createElement(
                      "span",
                      { className: q.a.AccountCreationPrompt },
                      Object(ae.f)("#Login_NoSteamAccount")
                    ),
                    i.a.createElement(
                      Te,
                      { inline: !0, href: `${d.d.STORE_BASE_URL}join/` },
                      Object(ae.f)("#Login_CreateAccount")
                    )
                  )
                ),
                !1
              )
            : i.a.createElement(
                Ie,
                {
                  title: w
                    ? i.a.createElement(We, { className: q.a.HeaderLogo })
                    : Object(ae.f)("#Login_SignIn"),
                },
                r,
                !1
              );
        }
        switch (u) {
          case 1:
          case 9:
            return i.a.createElement(Be, null);
          case 5:
          case 8:
          case 3:
          case 7:
            const e = 5 === u || 8 === u;
            return i.a.createElement(Ee, {
              type: e ? "mobile" : "email",
              onSubmitCode: b,
              status: u,
              associatedLabel: g,
              accountName: h,
              onBack: C,
            });
          case 6:
          case 4:
            const t = 6 === u;
            return i.a.createElement(Le, {
              type: t ? "mobile" : "email",
              accountName: h,
              onUseCodeOverride: p,
            });
          case 12:
            return i.a.createElement(we, { reset: _ });
          case 11:
            return i.a.createElement(ye, { reset: _ });
          case 10:
            return i.a.createElement(Ie, { compact: !0 }, l());
          default:
            return (
              console.error(`Unknown Phase: ${u}`),
              i.a.createElement(ye, { reset: _ })
            );
        }
      }
      function de(e) {
        const { onSubmit: t, status: r, autoFocus: a } = e,
          [s, o] = Object(n.useState)(""),
          [l, c] = Object(n.useState)(""),
          [u, m] = Object(n.useState)(!1),
          [g, h] = Object(n.useState)(!1),
          f = le(),
          _ = 2 === r && !g,
          b = _
            ? i.a.createElement(
                pe,
                null,
                Object(ae.f)("#Login_CheckCredentials")
              )
            : i.a.createElement(pe, null, " ");
        return i.a.createElement(
          je,
          {
            onSubmit: () => {
              g &&
                t({
                  strAccountName: s,
                  strPassword: l,
                  bRememberMe: u,
                }).then(() => h(!1));
            },
            className: q.a.LoginForm,
          },
          i.a.createElement(ge, {
            tone: _ ? "danger" : void 0,
            label: i.a.createElement(
              he,
              { highlight: !0 },
              Object(ae.f)("#Login_SignIn_WithAccountName")
            ),
            value: s,
            onChange: (e) => {
              h(!0), o(e);
            },
            autoFocus: a,
          }),
          i.a.createElement(ge, {
            tone: _ ? "danger" : void 0,
            label: i.a.createElement(he, null, Object(ae.f)("#Login_Password")),
            value: l,
            onChange: (e) => {
              h(!0), c(e);
            },
            type: "password",
          }),
          i.a.createElement(be, null),
          b,
          !f &&
            i.a.createElement(
              Te,
              {
                href: `${
                  d.d.HELP_BASE_URL
                }wizard/HelpWithLogin?redir=${encodeURIComponent(
                  document.location.href
                )}`,
                align: "center",
              },
              Object(ae.f)("#Login_Help_SignIn")
            )
        );
      }
      function ge(e) {
        const { label: t, error: r, tone: n } = e,
          s = Object(a.c)(e, ["label", "error", "tone"]),
          o = null != n ? n : r ? "danger" : void 0;
        return i.a.createElement(
          "div",
          { className: q.a.TextField },
          "string" == typeof t ? i.a.createElement(he, null, t) : t,
          i.a.createElement(_e, { type: "error" }, r),
          i.a.createElement(fe, Object.assign({ tone: o }, s))
        );
      }
      function he(e) {
        const { children: t, highlight: r } = e;
        return i.a.createElement(
          "div",
          { className: Object(o.a)(q.a.FieldLabel, r && q.a.Highlight) },
          t
        );
      }
      function fe(e) {
        const {
          value: t,
          onChange: r,
          type: n = "text",
          tone: a,
          className: s,
          autoFocus: l,
        } = e;
        return i.a.createElement("input", {
          value: t,
          type: n,
          autoFocus: l,
          onChange: (e) => r(e.target.value),
          className: Object(o.a)(
            q.a.TextInput,
            "danger" === a && q.a.Danger,
            s
          ),
        });
      }
      function _e(e) {
        const { children: t, type: r } = e;
        return i.a.createElement(
          "div",
          { className: Object(o.a)(q.a.FieldHint, "error" === r && q.a.Error) },
          t
        );
      }
      function be() {
        return i.a.createElement(
          "div",
          { className: q.a.SignInButtonContainer },
          i.a.createElement(Ce, null, "Sign in")
        );
      }
      function Ce(e) {
        const { disabled: t, children: r } = e;
        return i.a.createElement(
          "button",
          { type: "submit", className: q.a.SubmitButton, disabled: t },
          r
        );
      }
      function pe(e) {
        const t = e.children || " ";
        return i.a.createElement("div", { className: q.a.FormError }, t);
      }
      function Be() {
        return i.a.createElement(se.a, null);
      }
      function ye(e) {
        const { reset: t } = e;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement("div", null, "Uh oh... somethign went wrong."),
          i.a.createElement("button", { onClick: t }, "Reset")
        );
      }
      function we(e) {
        const { reset: t } = e;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement("div", null, "The login process was stopped."),
          i.a.createElement("button", { onClick: t }, "Reset")
        );
      }
      function Ee(e) {
        const {
            type: t,
            onSubmitCode: r,
            status: a,
            accountName: s,
            associatedLabel: o,
            onBack: l,
          } = e,
          [c, u] = Object(n.useState)([]),
          [m, g] = Object(n.useState)(!1),
          h = c.join(""),
          f = (function (e) {
            return D(e) && 5 === e.length;
          })(h),
          _ = !m && (8 === a || 7 === a),
          b = i.a.createElement(
            Te,
            {
              href: `${d.d.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`,
              align: "center",
            },
            Object(ae.f)("#Login_Help_AccessMobileApp")
          );
        return i.a.createElement(
          Ie,
          {
            title: Object(ae.f)("#Login_Title_SteamGuard"),
            bottom: b,
            compact: !0,
          },
          i.a.createElement(
            je,
            { onSubmit: () => f && r(h).then(() => g(!1)) },
            i.a.createElement(
              ze,
              { alignItems: "center", gap: 20 },
              i.a.createElement(Me, { type: t, accountName: s }),
              i.a.createElement(
                ze,
                { gap: 12, alignItems: "center" },
                i.a.createElement(
                  ze,
                  { alignItems: "center", gap: 2 },
                  i.a.createElement(
                    pe,
                    null,
                    _ && Object(ae.f)("#Login_IncorrectSteamGuard")
                  ),
                  i.a.createElement(Ne, {
                    value: c,
                    onChange: (e) => {
                      m || g(!0), u(e);
                    },
                    tone: _ ? "danger" : void 0,
                  })
                ),
                i.a.createElement(
                  Ce,
                  { disabled: !f },
                  Object(ae.f)("#Button_Go")
                )
              ),
              "mobile" === t
                ? i.a.createElement(Se, null)
                : i.a.createElement(ve, { emailAddress: o })
            )
          )
        );
      }
      function Se() {
        return i.a.createElement(
          Fe,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: q.a.EnterCodeFromMobileContainer,
          },
          i.a.createElement(
            "div",
            { className: q.a.EnterCodeFromMobile },
            Object(ae.f)("#Login_EnterMobileCode")
          ),
          i.a.createElement(Oe, { className: q.a.AwaitingMobileConfIcon })
        );
      }
      function ve(e) {
        return i.a.createElement(
          Fe,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: q.a.EnterCodeFromEmailContainer,
          },
          i.a.createElement(
            Pe,
            { align: "center", spacing: 6 },
            i.a.createElement(
              "div",
              { className: q.a.EnterCodeFromEmail },
              Object(ae.m)(
                "#Login_EnterEmailCode",
                i.a.createElement(
                  "span",
                  { className: q.a.EnterCodeEmailAddress },
                  e.emailAddress
                )
              )
            )
          ),
          i.a.createElement(Ae, { className: q.a.AwaitingMobileConfIcon })
        );
      }
      function Me(e) {
        const { accountName: t, type: r } = e,
          n =
            "mobile" === r
              ? Object(ae.f)("#Login_MobileProtectingAccount")
              : Object(ae.f)("#Login_EmailProtectingAccount"),
          a = le();
        return i.a.createElement(
          "div",
          { className: q.a.ProtectingAccount },
          i.a.createElement(
            "div",
            { className: q.a.Label },
            Object(ae.m)(
              "#Login_ActiveAccountName",
              i.a.createElement("span", { className: q.a.AccountName }, t)
            )
          ),
          !a && i.a.createElement("div", { className: q.a.Description }, n)
        );
      }
      function Re() {
        return i.a.createElement(
          ze,
          { alignItems: "center" },
          i.a.createElement(
            "div",
            { className: q.a.AwaitingMobileConfText },
            Object(ae.f)("#Login_AwaitingMobileConfirmation")
          ),
          i.a.createElement(Oe, { className: q.a.AwaitingMobileConfIcon })
        );
      }
      function Oe(e) {
        return i.a.createElement(
          "svg",
          { viewBox: "0 0 55 49", fill: "none", className: e.className },
          i.a.createElement("path", {
            d:
              "M36.1497 0.664062H18.7667C16.0532 0.664062 13.8485 2.86796 13.8485 5.49568V43.3009C13.8485 46.0134 16.0532 48.1326 18.7667 48.1326H36.0649C38.7784 48.1326 40.9831 45.9287 40.9831 43.3009V5.49568C40.9831 2.78319 38.8632 0.664062 36.1497 0.664062ZM38.1848 43.3009C38.1848 44.4029 37.2521 45.3353 36.1497 45.3353H18.7667C17.6643 45.3353 16.7316 44.4029 16.7316 43.3009V42.1142H38.1848V43.3009ZM38.1848 39.317H16.7316V9.73394H38.1848V39.317ZM38.1848 6.93669H16.7316V5.49568C16.7316 4.39373 17.6643 3.46131 18.7667 3.46131H36.0649C37.1673 3.46131 38.1 4.39373 38.1 5.49568V6.93669H38.1848ZM44.7988 14.7351C44.2053 14.9894 43.9509 15.5827 44.1205 16.1761C45.7316 20.3296 45.7316 24.9069 44.1205 29.0604C43.8661 29.6538 44.2053 30.3319 44.7988 30.5014C44.9684 30.5862 45.0532 30.5862 45.2228 30.5862C45.7316 30.5862 46.1556 30.3319 46.3252 29.8233C48.1907 25.1612 48.1907 19.9905 46.3252 15.2437C46.0708 14.8198 45.3924 14.4808 44.7988 14.7351ZM10.1176 14.7351C9.52399 14.4808 8.84562 14.8198 8.67603 15.4132C6.81054 20.0753 6.81054 25.246 8.67603 29.9928C8.84562 30.4166 9.2696 30.7557 9.77837 30.7557C9.94796 30.7557 10.0328 30.7557 10.2023 30.6709C10.7959 30.4166 11.0503 29.8233 10.8807 29.2299C9.2696 25.0764 9.2696 20.4991 10.8807 16.3456C10.9655 15.5827 10.7111 14.9894 10.1176 14.7351ZM52.3456 11.9378C52.0912 11.3445 51.4977 11.0902 50.9041 11.2597C50.3105 11.514 50.0562 12.1074 50.2257 12.7007V12.7855C52.9392 19.0581 52.9392 26.2631 50.2257 32.451C50.1409 32.7053 50.0562 33.0444 50.2257 33.2987C50.3105 33.553 50.5649 33.8072 50.8193 33.892C50.9889 33.9768 51.0737 33.9768 51.2433 33.9768C51.6673 33.9768 52.0912 33.7225 52.2608 33.2987C55.3135 26.6022 55.3135 18.719 52.3456 11.9378ZM4.69065 12.7855C4.94504 12.1921 4.69065 11.514 4.09709 11.2597C3.8427 11.1749 3.50352 11.0902 3.24913 11.2597C2.99475 11.3445 2.74036 11.5988 2.65557 11.8531C-0.312272 18.719 -0.312272 26.5174 2.65557 33.3834C2.82516 33.8072 3.24913 34.0615 3.67311 34.0615C3.8427 34.0615 4.01229 34.0615 4.09709 33.9768C4.35147 33.892 4.60586 33.6377 4.69065 33.3834C4.77545 33.1291 4.77545 32.7901 4.69065 32.5358C1.9772 26.2631 1.9772 19.0581 4.69065 12.7855ZM20.3778 15.9218C21.2257 15.9218 21.8193 15.2437 21.8193 14.4808C21.8193 13.7179 21.1409 13.0398 20.3778 13.0398C19.6146 13.0398 18.9363 13.7179 18.9363 14.4808C18.9363 15.2437 19.6146 15.9218 20.3778 15.9218ZM24.1088 15.9218C24.9567 15.9218 25.5503 15.2437 25.5503 14.4808C25.5503 13.7179 24.8719 13.0398 24.1088 13.0398C23.2608 13.0398 22.6673 13.7179 22.6673 14.4808C22.5825 15.2437 23.2608 15.9218 24.1088 15.9218ZM27.755 15.9218C28.6029 15.9218 29.1965 15.2437 29.1965 14.4808C29.1965 13.7179 28.5181 13.0398 27.755 13.0398C26.907 13.0398 26.3135 13.7179 26.3135 14.4808C26.3135 15.2437 26.9918 15.9218 27.755 15.9218ZM31.4012 15.9218C32.2491 15.9218 32.8427 15.2437 32.8427 14.4808C32.8427 13.7179 32.1643 13.0398 31.4012 13.0398C30.5532 13.0398 29.9597 13.7179 29.9597 14.4808C29.9597 15.2437 30.638 15.9218 31.4012 15.9218ZM35.1322 15.9218C35.9801 15.9218 36.5737 15.2437 36.5737 14.4808C36.5737 13.7179 35.8953 13.0398 35.1322 13.0398C34.2842 13.0398 33.6907 13.7179 33.6907 14.4808C33.6059 15.2437 34.2842 15.9218 35.1322 15.9218Z",
            fill: "#1A99FF",
          })
        );
      }
      function Ae(e) {
        return i.a.createElement(
          "svg",
          { viewBox: "0 0 58 56", fill: "none", className: e.className },
          i.a.createElement("path", {
            d:
              "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
            fill: "#1A99FF",
          })
        );
      }
      function Le(e) {
        const { type: t, accountName: r, onUseCodeOverride: n } = e,
          a = le(),
          s = i.a.createElement(
            Te,
            { align: "center", onClick: () => alert("TODO") },
            Object(ae.f)("#Login_Help_AccessMobileApp")
          ),
          o = a
            ? i.a.createElement(
                Te,
                { align: "center", onClick: n },
                Object(ae.f)("#Login_EnterCodeInstead")
              )
            : i.a.createElement(
                "div",
                { onClick: n, className: q.a.EnterCodeInsteadLink },
                Object(ae.f)("#Login_EnterCodeInstead")
              );
        return i.a.createElement(
          Ie,
          {
            title: Object(ae.f)("#Login_Title_SteamGuard"),
            bottom: s,
            compact: !0,
          },
          i.a.createElement(
            ze,
            { gap: 20 },
            i.a.createElement(Me, { type: t, accountName: r }),
            i.a.createElement(Re, null),
            o
          )
        );
      }
      function Te(e) {
        const { children: t, align: r, inline: n } = e,
          a = Object(o.a)(q.a.TextLink, "center" === r && q.a.TextAlignCenter);
        if ("href" in e)
          return i.a.createElement("a", { className: a, href: e.href }, t);
        {
          const r = n ? "span" : "div";
          return i.a.createElement(r, { className: a, onClick: e.onClick }, t);
        }
      }
      function je(e) {
        const { onSubmit: t, children: r, className: n } = e;
        return i.a.createElement(
          "form",
          { onSubmit: (e) => (e.preventDefault(), t(), !1), className: n },
          r
        );
      }
      function ze(e) {
        const {
            alignItems: t,
            justifyContent: r,
            gap: n,
            className: a,
            children: s,
          } = e,
          l = Object(o.a)(
            q.a.FlexCol,
            "center" === t && q.a.AlignItemsCenter,
            "center" === r && q.a.JustifyContentCenter,
            a
          ),
          c = n ? { gap: "number" == typeof n ? `${n}px` : n } : void 0;
        return i.a.createElement("div", { className: l, style: c }, s);
      }
      function Fe(e) {
        const {
            children: t,
            justifyContent: r,
            alignItems: n,
            className: a,
          } = e,
          s = {
            display: "flex",
            flexDirection: "row",
            justifyContent: r,
            alignItems: n,
          };
        return i.a.createElement("div", { style: s, className: a }, t);
      }
      function Ne(e) {
        const { value: t, onChange: r, tone: n } = e;
        return i.a.createElement(ke, {
          length: 5,
          value: t,
          onChange: (e) => {
            D((e = e.map((e) => e.toUpperCase())).join("").trim()) && r(e);
          },
          tone: n,
          autoFocus: !0,
        });
      }
      function ke(e) {
        const { length: t, value: r, onChange: a, tone: s, autoFocus: l } = e,
          c = Object(n.useRef)([]),
          u = () => a(c.current.map((e) => e.value)),
          m = (e) => {
            const t = e.target.nextElementSibling;
            e.target.value && t && t.focus(), u();
          },
          d = (e) => {
            var t;
            -1 === c.current.findIndex((e) => !!e.value)
              ? null === (t = c.current[0]) || void 0 === t || t.select()
              : e.target.select();
          },
          g = (e) => {
            const t = e.target;
            if ("Backspace" === e.key || "Delete" === e.key) {
              const r =
                "Backspace" === e.key
                  ? t.previousElementSibling
                  : t.nextElementSibling;
              "" === t.value &&
                r &&
                ((r.value = ""), r.focus(), e.preventDefault(), u());
            } else if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
              const r =
                "ArrowLeft" === e.key
                  ? t.previousElementSibling
                  : t.nextElementSibling;
              r && (r.focus(), e.preventDefault());
            }
          },
          h = (e) => {
            const t = e.clipboardData.getData("Text");
            let r = e.target,
              n = 0;
            for (; r && n < t.length; )
              r.focus(),
                (r.value = t.charAt(n)),
                (r = r.nextElementSibling),
                n++;
            u(), e.preventDefault();
          },
          f = [];
        for (let e = 0; e < t; e++)
          f.push(
            i.a.createElement("input", {
              type: "text",
              maxLength: 1,
              key: e,
              ref: (t) => (c.current[e] = t),
              onChange: m,
              onFocus: d,
              onClick: (e) => e.stopPropagation(),
              onKeyDown: g,
              onPaste: h,
              value: r[e] ? r[e][0] : "",
              autoComplete: "none",
              autoFocus: 0 === e && l,
            })
          );
        return i.a.createElement(
          "div",
          {
            className: Object(o.a)(
              q.a.SegmentedCharacterInput,
              "danger" === s && q.a.Danger
            ),
            onClick: () => {
              const e = c.current.find((e) => !e.value);
              e ? e.focus() : c.current[c.current.length - 1].focus();
            },
          },
          f
        );
      }
      function Pe(e) {
        const { children: t, spacing: r = 0, align: n } = e;
        return i.a.createElement(
          ze,
          { alignItems: n },
          i.a.Children.map(t, (e, t) =>
            e
              ? i.a.createElement(
                  "div",
                  { style: t > 0 ? { paddingTop: `${r}px` } : void 0 },
                  e
                )
              : null
          ).filter(Boolean)
        );
      }
      function Ie(e) {
        const { title: t, children: r, bottom: n, compact: a } = e,
          s = le();
        return i.a.createElement(
          ze,
          {
            gap: 18,
            className: Object(o.a)(
              q.a.StandardLayout,
              s && q.a.Embedded,
              a && q.a.Compact
            ),
          },
          "string" == typeof t
            ? i.a.createElement("div", { className: q.a.PrimaryHeader }, t)
            : t,
          i.a.createElement("div", { className: q.a.FormContainer }, r),
          n
        );
      }
      function We(e) {
        return i.a.createElement(
          "svg",
          {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
          },
          i.a.createElement("path", {
            d:
              "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
            fill: "#E0E1E6",
          }),
          i.a.createElement("path", {
            d:
              "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
            fill: "#E0E1E6",
          }),
          i.a.createElement("path", {
            d:
              "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
            fill: "#E0E1E6",
          }),
          i.a.createElement("path", {
            d:
              "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
            fill: "#E0E1E6",
          }),
          i.a.createElement("path", {
            d:
              "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
            fill: "#E0E1E6",
          }),
          i.a.createElement("path", {
            d:
              "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
            fill: "#E0E1E6",
          }),
          i.a.createElement("path", {
            d:
              "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
            fill: "#E0E1E6",
          }),
          i.a.createElement("path", {
            d:
              "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
            fill: "#E0E1E6",
          }),
          i.a.createElement("path", {
            d:
              "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
            fill: "#E0E1E6",
          })
        );
      }
      function Ue() {
        return i.a.createElement(
          ze,
          { alignItems: "center", justifyContent: "center" },
          i.a.createElement(Be, null)
        );
      }
      var xe = r("rmVU");
      function De(e) {
        const { redirectUrl: t = d.d.STORE_BASE_URL } = e,
          [r] = Object(n.useState)(
            new xe.a(d.d.WEBAPI_BASE_URL).GetAnonymousServiceTransport()
          );
        return i.a.createElement(ce, {
          transport: r,
          platform: 2,
          onComplete: () => window.location.assign(t),
          redirectUrl: t,
        });
      }
    },
    rcnY: function (e, t, r) {
      var n = r("aRTE");
      function i(e, t) {
        (this.totalCount = e), (this.dataCount = t);
      }
      (i.RS_BLOCK_TABLE = [
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
        (i.getRSBlocks = function (e, t) {
          var r = i.getRsBlockTable(e, t);
          if (null == r)
            throw new Error(
              "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t
            );
          for (var n = r.length / 3, a = new Array(), s = 0; s < n; s++)
            for (
              var o = r[3 * s + 0], l = r[3 * s + 1], c = r[3 * s + 2], u = 0;
              u < o;
              u++
            )
              a.push(new i(l, c));
          return a;
        }),
        (i.getRsBlockTable = function (e, t) {
          switch (t) {
            case n.L:
              return i.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case n.M:
              return i.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case n.Q:
              return i.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case n.H:
              return i.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
        (e.exports = i);
    },
    tmER: function (e, t, r) {
      var n = r("H38U"),
        i = r("aRTE"),
        a = function (e, t) {
          var r = new n(
            (t = t || {}).typeNumber || -1,
            t.errorCorrectLevel || i.H
          );
          return r.addData(e), r.make(), r;
        };
      (a.ErrorCorrectLevel = i), (e.exports = a);
    },
    wU8J: function (e, t) {
      function r() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (r.prototype = {
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
        (e.exports = r);
    },
  },
]);
