/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    H38U: function (e, t, r) {
      var i = r("f4xo"),
        n = r("rcnY"),
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
        var t = new i(e);
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
                var t = n.getRSBlocks(e, this.errorCorrectLevel),
                  r = new a(),
                  i = 0,
                  o = 0;
                o < t.length;
                o++
              )
                i += t[o].dataCount;
              for (o = 0; o < this.dataList.length; o++) {
                var l = this.dataList[o];
                r.put(l.mode, 4),
                  r.put(l.getLength(), s.getLengthInBits(l.mode, e)),
                  l.write(r);
              }
              if (r.getLengthInBits() <= 8 * i) break;
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
              for (var i = -1; i <= 7; i++)
                t + i <= -1 ||
                  this.moduleCount <= t + i ||
                  (this.modules[e + r][t + i] =
                    (0 <= r && r <= 6 && (0 == i || 6 == i)) ||
                    (0 <= i && i <= 6 && (0 == r || 6 == r)) ||
                    (2 <= r && r <= 4 && 2 <= i && i <= 4));
        }),
        (c.getBestMaskPattern = function () {
          for (var e = 0, t = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var i = s.getLostPoint(this);
            (0 == r || e > i) && ((e = i), (t = r));
          }
          return t;
        }),
        (c.createMovieClip = function (e, t, r) {
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
        (c.setupTypeNumber = function (e) {
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
        (c.setupTypeInfo = function (e, t) {
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
        (c.mapData = function (e, t) {
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
              for (var l = 0; l < 2; l++)
                if (null == this.modules[i][o - l]) {
                  var c = !1;
                  a < e.length && (c = 1 == ((e[a] >>> n) & 1)),
                    s.getMask(t, i, o - l) && (c = !c),
                    (this.modules[i][o - l] = c),
                    -1 == --n && (a++, (n = 7));
                }
              if ((i += r) < 0 || this.moduleCount <= i) {
                (i -= r), (r = -r);
                break;
              }
            }
        }),
        (l.PAD0 = 236),
        (l.PAD1 = 17),
        (l.createData = function (e, t, r) {
          for (
            var i = n.getRSBlocks(e, t), o = new a(), c = 0;
            c < r.length;
            c++
          ) {
            var u = r[c];
            o.put(u.mode, 4),
              o.put(u.getLength(), s.getLengthInBits(u.mode, e)),
              u.write(o);
          }
          var d = 0;
          for (c = 0; c < i.length; c++) d += i[c].dataCount;
          if (o.getLengthInBits() > 8 * d)
            throw new Error(
              "code length overflow. (" +
                o.getLengthInBits() +
                ">" +
                8 * d +
                ")"
            );
          for (
            o.getLengthInBits() + 4 <= 8 * d && o.put(0, 4);
            o.getLengthInBits() % 8 != 0;

          )
            o.putBit(!1);
          for (
            ;
            !(
              o.getLengthInBits() >= 8 * d ||
              (o.put(l.PAD0, 8), o.getLengthInBits() >= 8 * d)
            );

          )
            o.put(l.PAD1, 8);
          return l.createBytes(o, i);
        }),
        (l.createBytes = function (e, t) {
          for (
            var r = 0,
              i = 0,
              n = 0,
              a = new Array(t.length),
              l = new Array(t.length),
              c = 0;
            c < t.length;
            c++
          ) {
            var u = t[c].dataCount,
              d = t[c].totalCount - u;
            (i = Math.max(i, u)), (n = Math.max(n, d)), (a[c] = new Array(u));
            for (var m = 0; m < a[c].length; m++)
              a[c][m] = 255 & e.buffer[m + r];
            r += u;
            var g = s.getErrorCorrectPolynomial(d),
              h = new o(a[c], g.getLength() - 1).mod(g);
            l[c] = new Array(g.getLength() - 1);
            for (m = 0; m < l[c].length; m++) {
              var _ = m + h.getLength() - l[c].length;
              l[c][m] = _ >= 0 ? h.get(_) : 0;
            }
          }
          var b = 0;
          for (m = 0; m < t.length; m++) b += t[m].totalCount;
          var f = new Array(b),
            B = 0;
          for (m = 0; m < i; m++)
            for (c = 0; c < t.length; c++)
              m < a[c].length && (f[B++] = a[c][m]);
          for (m = 0; m < n; m++)
            for (c = 0; c < t.length; c++)
              m < l[c].length && (f[B++] = l[c][m]);
          return f;
        }),
        (e.exports = l);
    },
    Iq15: function (e, t, r) {
      var i = r("nVVt"),
        n = r("dWSS"),
        a = r("dQei"),
        s = 0,
        o = 1,
        l = 2,
        c = 3,
        u = 4,
        d = 5,
        m = 6,
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
              case d:
                return ((t * r) % 2) + ((t * r) % 3) == 0;
              case m:
                return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
              case g:
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
                    for (var l = -1; l <= 1; l++)
                      n + l < 0 ||
                        t <= n + l ||
                        (0 == o && 0 == l) ||
                        (s == e.isDark(i + o, n + l) && a++);
                a > 5 && (r += 3 + a - 5);
              }
            for (i = 0; i < t - 1; i++)
              for (n = 0; n < t - 1; n++) {
                var c = 0;
                e.isDark(i, n) && c++,
                  e.isDark(i + 1, n) && c++,
                  e.isDark(i, n + 1) && c++,
                  e.isDark(i + 1, n + 1) && c++,
                  (0 != c && 4 != c) || (r += 3);
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
            var u = 0;
            for (n = 0; n < t; n++)
              for (i = 0; i < t; i++) e.isDark(i, n) && u++;
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
        Loading: "qrlogin_Loading_3wHZW",
        LoadAmin: "qrlogin_LoadAmin_1xU0q",
        Small: "qrlogin_Small_2qsUN",
        Medium: "qrlogin_Medium_1nypP",
        Large: "qrlogin_Large_elAzl",
      };
    },
    OPJs: function (e, t, r) {
      e.exports = {
        QRBits: "qrcode_QRBits_3FhhK",
        Bit: "qrcode_Bit_2Yuvr",
        Active: "qrcode_Active_274P1",
      };
    },
    SvVX: function (e, t, r) {
      e.exports = { LoginContainer: "login_LoginContainer_2kLRm" };
    },
    WTXQ: function (e, t, r) {
      e.exports = {
        Login: "newlogindialog_Login_ZOBYq",
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
        FailureTitle: "newlogindialog_FailureTitle_A3Y-u",
        FailureDescription: "newlogindialog_FailureDescription_3gFes",
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
          i = 0;
        i < 8;
        i++
      )
        r.EXP_TABLE[i] = 1 << i;
      for (i = 8; i < 256; i++)
        r.EXP_TABLE[i] =
          r.EXP_TABLE[i - 4] ^
          r.EXP_TABLE[i - 5] ^
          r.EXP_TABLE[i - 6] ^
          r.EXP_TABLE[i - 8];
      for (i = 0; i < 255; i++) r.LOG_TABLE[r.EXP_TABLE[i]] = i;
      e.exports = r;
    },
    dWSS: function (e, t, r) {
      var i = r("dQei");
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
    f4xo: function (e, t, r) {
      var i = r("nVVt");
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
          return _t;
        });
      var i = r("q1tI"),
        n = r.n(i),
        a = r("mrSG"),
        s = r("9XWO"),
        o = r("GbHM"),
        l = r("2vnA"),
        c = r("vDqi"),
        u = r.n(c),
        d = r("/Q1a"),
        m = r("vYsE"),
        g = (r("msu0"), r("hRO2")),
        h = r("3dpo");
      r("Nr4G");
      const _ = g.Message;
      class b extends _ {
        constructor(e = null) {
          super(),
            b.prototype.account_name || h.a(b.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  account_name: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
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
          return "CAuthentication_GetPasswordRSAPublicKey_Request";
        }
      }
      class f extends _ {
        constructor(e = null) {
          super(),
            f.prototype.publickey_mod || h.a(f.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = h.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(f.M(), e, t);
        }
        static fromObject(e) {
          return h.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Response";
        }
      }
      class B extends _ {
        constructor(e = null) {
          super(),
            B.prototype.confirmation_type || h.a(B.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
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
          return "CAuthentication_AllowedConfirmation";
        }
      }
      class y extends _ {
        constructor(e = null) {
          super(),
            y.prototype.device_friendly_name || h.a(y.M()),
            _.initialize(this, e, 0, -1, void 0, null);
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
                  platform_type: { n: 2, br: h.d.readEnum, bw: h.h.writeEnum },
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
          return "CAuthentication_BeginAuthSessionViaQR_Request";
        }
      }
      class p extends _ {
        constructor(e = null) {
          super(),
            p.prototype.client_id || h.a(p.M()),
            _.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
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
                  allowed_confirmations: { n: 5, c: B, r: !0, q: !0 },
                  version: { n: 6, br: h.d.readInt32, bw: h.h.writeInt32 },
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
          return "CAuthentication_BeginAuthSessionViaQR_Response";
        }
      }
      class w extends _ {
        constructor(e = null) {
          super(),
            w.prototype.device_friendly_name || h.a(w.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
                  persistence: {
                    n: 7,
                    d: 1,
                    br: h.d.readEnum,
                    bw: h.h.writeEnum,
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
          return "CAuthentication_BeginAuthSessionViaCredentials_Request";
        }
      }
      class C extends _ {
        constructor(e = null) {
          super(),
            C.prototype.client_id || h.a(C.M()),
            _.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  request_id: { n: 2, br: h.d.readBytes, bw: h.h.writeBytes },
                  interval: { n: 3, br: h.d.readFloat, bw: h.h.writeFloat },
                  allowed_confirmations: { n: 4, c: B, r: !0, q: !0 },
                  steamid: {
                    n: 5,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  weak_token: { n: 6, br: h.d.readString, bw: h.h.writeString },
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
          return "CAuthentication_BeginAuthSessionViaCredentials_Response";
        }
      }
      class S extends _ {
        constructor(e = null) {
          super(),
            S.prototype.client_id || h.a(S.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  request_id: { n: 2, br: h.d.readBytes, bw: h.h.writeBytes },
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
          return "CAuthentication_PollAuthSessionStatus_Request";
        }
      }
      class v extends _ {
        constructor(e = null) {
          super(),
            v.prototype.new_client_id || h.a(v.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
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
                  had_remote_interaction: {
                    n: 5,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
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
          return "CAuthentication_PollAuthSessionStatus_Response";
        }
      }
      class M extends _ {
        constructor(e = null) {
          super(),
            M.prototype.ip || h.a(M.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
                  version: { n: 8, br: h.d.readInt32, bw: h.h.writeInt32 },
                  login_history: { n: 9, br: h.d.readEnum, bw: h.h.writeEnum },
                  requestor_location_mismatch: {
                    n: 10,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                  high_usage_login: {
                    n: 11,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
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
          return "CAuthentication_GetAuthSessionInfo_Response";
        }
      }
      class E extends _ {
        constructor(e = null) {
          super(),
            E.prototype.client_ids || h.a(E.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
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
          return "CAuthentication_GetAuthSessionsForAccount_Response";
        }
      }
      class R extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
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
      class z extends _ {
        constructor(e = null) {
          super(),
            z.prototype.client_id || h.a(z.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
        }
      }
      class O extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
        }
      }
      class F extends _ {
        constructor(e = null) {
          super(),
            F.prototype.access_token || h.a(F.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  access_token: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = h.e(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(F.M(), e, t);
        }
        static fromObject(e) {
          return h.c(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Response";
        }
      }
      class A extends _ {
        constructor(e = null) {
          super(),
            A.prototype.refresh_token || h.a(A.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  refresh_token: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  access_token: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = h.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(A.M(), e, t);
        }
        static fromObject(e) {
          return h.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Response";
        }
      }
      class T extends _ {
        constructor(e = null) {
          super(),
            T.prototype.nonce || h.a(T.M()),
            _.initialize(this, e, 0, -1, void 0, null);
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
      class j extends _ {
        constructor(e = null) {
          super(),
            j.prototype.appid || h.a(j.M()),
            _.initialize(this, e, 0, -1, void 0, null);
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
      class L extends _ {
        constructor(e = null) {
          super(),
            L.prototype.entries || h.a(L.M()),
            _.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { entries: { n: 2, c: j, r: !0, q: !0 } },
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
          return "CCloudGaming_GetTimeRemaining_Response";
        }
      }
      var W, k;
      !(function (e) {
        (e.GetPasswordRSAPublicKey = function (e, t) {
          return e.SendMsg("Authentication.GetPasswordRSAPublicKey#1", t, f, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.BeginAuthSessionViaQR = function (e, t) {
            return e.SendMsg("Authentication.BeginAuthSessionViaQR#1", t, p, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.BeginAuthSessionViaCredentials = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              t,
              C,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.PollAuthSessionStatus = function (e, t) {
            return e.SendMsg("Authentication.PollAuthSessionStatus#1", t, v, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAuthSessionInfo = function (e, t) {
            return e.SendMsg("Authentication.GetAuthSessionInfo#1", t, M, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              t,
              R,
              { ePrivilege: 1 }
            );
          }),
          (e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              t,
              O,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GenerateAccessTokenForApp = function (e, t) {
            return e.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              t,
              F,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetAuthSessionsForAccount = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              t,
              E,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.MigrateMobileSession = function (e, t) {
            return e.SendMsg("Authentication.MigrateMobileSession#1", t, A, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(W || (W = {})),
        (function (e) {
          (e.CreateNonce = function (e, t) {
            return e.SendMsg("CloudGaming.CreateNonce#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
            (e.GetTimeRemaining = function (e, t) {
              return e.SendMsg("CloudGaming.GetTimeRemaining#1", t, L, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            });
        })(k || (k = {}));
      const N = g.Message;
      class I extends N {
        constructor(e = null) {
          super(),
            I.prototype.state || h.a(I.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  state: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                  inactivation_reason: {
                    n: 2,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                  authenticator_type: {
                    n: 3,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                  authenticator_allowed: {
                    n: 4,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                  steamguard_scheme: {
                    n: 5,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                  token_gid: { n: 6, br: h.d.readString, bw: h.h.writeString },
                  email_validated: {
                    n: 7,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                  device_identifier: {
                    n: 8,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  time_created: {
                    n: 9,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                  revocation_attempts_remaining: {
                    n: 10,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                  classified_agent: {
                    n: 11,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  allow_external_authenticator: {
                    n: 12,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                  time_transferred: {
                    n: 13,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = h.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(I.M(), e, t);
        }
        static fromObject(e) {
          return h.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Status_Response";
        }
      }
      class P extends N {
        constructor(e = null) {
          super(),
            P.prototype.shared_secret || h.a(P.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  shared_secret: {
                    n: 1,
                    br: h.d.readBytes,
                    bw: h.h.writeBytes,
                  },
                  serial_number: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  revocation_code: {
                    n: 3,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  uri: { n: 4, br: h.d.readString, bw: h.h.writeString },
                  server_time: {
                    n: 5,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  account_name: {
                    n: 6,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  token_gid: { n: 7, br: h.d.readString, bw: h.h.writeString },
                  identity_secret: {
                    n: 8,
                    br: h.d.readBytes,
                    bw: h.h.writeBytes,
                  },
                  secret_1: { n: 9, br: h.d.readBytes, bw: h.h.writeBytes },
                  status: { n: 10, br: h.d.readInt32, bw: h.h.writeInt32 },
                  phone_number_hint: {
                    n: 11,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = h.e(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(P.M(), e, t);
        }
        static fromObject(e) {
          return h.c(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_AddAuthenticator_Response";
        }
      }
      class x extends N {
        constructor(e = null) {
          super(), N.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_SendEmail_Response";
        }
      }
      class U extends N {
        constructor(e = null) {
          super(),
            U.prototype.success || h.a(U.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  success: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                  want_more: { n: 2, br: h.d.readBool, bw: h.h.writeBool },
                  server_time: {
                    n: 3,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  status: { n: 4, br: h.d.readInt32, bw: h.h.writeInt32 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = h.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(U.M(), e, t);
        }
        static fromObject(e) {
          return h.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_FinalizeAddAuthenticator_Response";
        }
      }
      class D extends N {
        constructor(e = null) {
          super(),
            D.prototype.success || h.a(D.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  success: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                  server_time: {
                    n: 3,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  revocation_attempts_remaining: {
                    n: 5,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = h.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(D.M(), e, t);
        }
        static fromObject(e) {
          return h.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticator_Response";
        }
      }
      class G extends N {
        constructor(e = null) {
          super(),
            G.prototype.codes || h.a(G.M()),
            N.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  codes: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.d.readString,
                    bw: h.h.writeRepeatedString,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = h.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(G.M(), e, t);
        }
        static fromObject(e) {
          return h.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_CreateEmergencyCodes_Response";
        }
      }
      class H extends N {
        constructor(e = null) {
          super(), N.initialize(this, e, 0, -1, void 0, null);
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
          let t = new g.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_DestroyEmergencyCodes_Response";
        }
      }
      class V extends N {
        constructor(e = null) {
          super(),
            V.prototype.valid || h.a(V.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  valid: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = h.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(V.M(), e, t);
        }
        static fromObject(e) {
          return h.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_ValidateToken_Response";
        }
      }
      class q extends N {
        constructor(e = null) {
          super(), N.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
        }
      }
      class $ extends N {
        constructor(e = null) {
          super(),
            $.prototype.success || h.a($.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  success: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = h.e($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g($.M(), e, t);
        }
        static fromObject(e) {
          return h.c($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f($.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
        }
      }
      class Z extends N {
        constructor(e = null) {
          super(),
            Z.prototype.sms_code || h.a(Z.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  sms_code: { n: 1, br: h.d.readString, bw: h.h.writeString },
                  generate_new_token: {
                    n: 2,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = h.e(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(Z.M(), e, t);
        }
        static fromObject(e) {
          return h.c(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
        }
      }
      class Q extends N {
        constructor(e = null) {
          super(),
            Q.prototype.shared_secret || h.a(Q.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  shared_secret: {
                    n: 1,
                    br: h.d.readBytes,
                    bw: h.h.writeBytes,
                  },
                  serial_number: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  revocation_code: {
                    n: 3,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  uri: { n: 4, br: h.d.readString, bw: h.h.writeString },
                  server_time: {
                    n: 5,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  account_name: {
                    n: 6,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  token_gid: { n: 7, br: h.d.readString, bw: h.h.writeString },
                  identity_secret: {
                    n: 8,
                    br: h.d.readBytes,
                    bw: h.h.writeBytes,
                  },
                  secret_1: { n: 9, br: h.d.readBytes, bw: h.h.writeBytes },
                  status: { n: 10, br: h.d.readInt32, bw: h.h.writeInt32 },
                  steamguard_scheme: {
                    n: 11,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                  steamid: {
                    n: 12,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = h.e(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(Q.M(), e, t);
        }
        static fromObject(e) {
          return h.c(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
        }
      }
      class K extends N {
        constructor(e = null) {
          super(),
            K.prototype.success || h.a(K.M()),
            N.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  success: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                  replacement_token: { n: 2, c: Q },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = h.e(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(K.M(), e, t);
        }
        static fromObject(e) {
          return h.c(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
        }
      }
      class J extends N {
        constructor(e = null) {
          super(), N.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new g.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new g.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new g.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Response";
        }
      }
      var X;
      !(function (e) {
        (e.QueryStatus = function (e, t) {
          return e.SendMsg("TwoFactor.QueryStatus#1", t, I, { ePrivilege: 1 });
        }),
          (e.AddAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.AddAuthenticator#1", t, P, {
              ePrivilege: 1,
            });
          }),
          (e.SendEmail = function (e, t) {
            return e.SendMsg("TwoFactor.SendEmail#1", t, x, { ePrivilege: 1 });
          }),
          (e.FinalizeAddAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.FinalizeAddAuthenticator#1", t, U, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateTokenVersion = function (e, t) {
            return e.SendMsg("TwoFactor.UpdateTokenVersion#1", t, J, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.RemoveAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.RemoveAuthenticator#1", t, D, {
              ePrivilege: 9,
            });
          }),
          (e.CreateEmergencyCodes = function (e, t) {
            return e.SendMsg("TwoFactor.CreateEmergencyCodes#1", t, G, {
              ePrivilege: 1,
            });
          }),
          (e.DestroyEmergencyCodes = function (e, t) {
            return e.SendMsg("TwoFactor.DestroyEmergencyCodes#1", t, H, {
              ePrivilege: 1,
            });
          }),
          (e.ValidateToken = function (e, t) {
            return e.SendMsg("TwoFactor.ValidateToken#1", t, V, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveAuthenticatorViaChallengeStart = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              t,
              $,
              { ePrivilege: 9, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.RemoveAuthenticatorViaChallengeContinue = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              t,
              K,
              { ePrivilege: 9, eWebAPIKeyRequirement: 1 }
            );
          });
      })(X || (X = {}));
      var Y,
        ee,
        te = r("H7XF");
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Generic = 1)] = "Generic"),
          (e[(e.Expired = 2)] = "Expired");
      })(Y || (Y = {})),
        (function (e) {
          (e[(e.k_Success = 0)] = "k_Success"),
            (e[(e.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
            (e[(e.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail");
        })(ee || (ee = {}));
      class re {
        constructor(e, t, r) {
          (this.m_bRemoteInteraction = !1),
            (this.m_eFailureState = Y.None),
            (this.m_transport = e),
            (this.m_onCompleteCallback = t),
            (this.m_ePlatformType = r);
        }
        StartPolling(e = !0) {
          e
            ? this.PollForUpdate()
            : (this.m_activeTimerID = window.setTimeout(
                this.PollForUpdate,
                this.m_msPollInterval
              ));
        }
        StopPolling() {
          window.clearTimeout(this.m_activeTimerID),
            (this.m_activeTimerID = void 0);
        }
        PollForUpdate() {
          return Object(a.a)(this, void 0, void 0, function* () {
            try {
              const e = s.b.Init(S);
              e.Body().set_client_id(this.m_strClientID),
                e.Body().set_request_id(this.m_rgRequestID);
              const t = yield W.PollAuthSessionStatus(this.m_transport, e),
                r = t.GetEResult();
              if (1 !== r) {
                if (2 === r) {
                  const e = t.Hdr().transport_error();
                  if (
                    (console.error(
                      `Failed to poll auth session. Result ${r}. Transport Error: ${e}`
                    ),
                    2 === e || 3 === e)
                  )
                    return (
                      window.setTimeout(
                        this.PollForUpdate,
                        this.m_msPollInterval
                      ),
                      1
                    );
                }
                return (
                  9 === r || 27 === r
                    ? (this.m_eFailureState = Y.Expired)
                    : (console.error(
                        `Failed to poll auth session. Result: ${r}`
                      ),
                      (this.m_eFailureState = Y.Generic)),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              }
              const {
                new_challenge_url: i,
                new_client_id: n,
                refresh_token: a,
                access_token: o,
                had_remote_interaction: l,
              } = t.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!l),
                a
                  ? (this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: a,
                      strAccessToken: o,
                    }),
                    r)
                  : (i && (this.m_strChallengeURL = i),
                    n && (this.m_strClientID = n),
                    (this.m_activeTimerID = window.setTimeout(
                      this.PollForUpdate,
                      this.m_msPollInterval
                    )),
                    r)
              );
            } catch (e) {
              return (
                console.error(`Failed to poll auth session. ${e}`),
                (this.m_eFailureState = Y.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        GetFailureState() {
          return this.m_eFailureState;
        }
        BHadRemoteInteraction() {
          return this.m_bRemoteInteraction;
        }
      }
      function ie(e) {
        const t = new FormData();
        t.append("nonce", e),
          t.append("sessionid", d.d.SESSIONID),
          t.append("redir", document.location.href);
        const r = `${d.d.LOGIN_BASE_URL}jwt/finalizelogin`;
        return u.a.post(r, t, { withCredentials: !0 }).then(
          (e) => {
            const { data: t } = e;
            if (
              !(
                t &&
                t.transfer_info &&
                t.steamID &&
                Array.isArray(t.transfer_info)
              )
            )
              return (
                console.error(
                  "Result of finalizelogin does not match expecations!"
                ),
                ee.k_PrimaryDomainFail
              );
            const { transfer_info: r, steamID: i, primary_domain: n } = t;
            return Promise.all(
              r.map(({ url: e, params: t }) =>
                (function (e, t) {
                  return Object(a.a)(this, void 0, void 0, function* () {
                    const r = new URL(e);
                    let i = !0;
                    try {
                      const n = new FormData();
                      Object.keys(t).forEach((e) => n.append(e, t[e]));
                      const a = yield u.a.post(e, n, {
                        withCredentials: !0,
                        timeout: 1e4,
                      });
                      200 !== a.status
                        ? (console.error(
                            `Transfer login to ${r.host} failed with status code: ${a.status}`
                          ),
                          (i = !1))
                        : 1 !== a.data.result &&
                          (console.error(
                            `Transfer login to ${r.host} failed with result: ${a.data.result}`
                          ),
                          (i = !1));
                    } catch (e) {
                      console.error(
                        `Transfer login to ${r.host} failed: "${e}"`
                      ),
                        (i = !1);
                    }
                    return { bSuccess: i, domain: r.host };
                  });
                })(e, Object.assign(Object.assign({}, t), { steamID: i }))
              )
            ).then(
              (e) =>
                (function (e, t) {
                  let r = ee.k_Success;
                  return (
                    e.forEach((e) => {
                      e.bSuccess ||
                        (t && e.domain.toLowerCase() === t.toLowerCase()
                          ? (r = ee.k_PrimaryDomainFail)
                          : r == ee.k_Success &&
                            (r = ee.k_SecondaryDomainFail));
                    }),
                    r
                  );
                })(e, n),
              () => ee.k_SecondaryDomainFail
            );
          },
          () => (
            console.error("Failed to finalize login. Initial call failed."),
            ee.k_PrimaryDomainFail
          )
        );
      }
      Object(a.b)([l.C], re.prototype, "m_strChallengeURL", void 0),
        Object(a.b)([l.C], re.prototype, "m_bRemoteInteraction", void 0),
        Object(a.b)([l.C], re.prototype, "m_eFailureState", void 0),
        Object(a.b)([m.a], re.prototype, "PollForUpdate", null);
      var ne = r("aoTL"),
        ae = r("hCpY"),
        se = r("cHF8"),
        oe = r("rmVU");
      class le extends re {
        constructor(e) {
          super(
            e.transport,
            (t) => {
              this.m_eStatus = t.bSuccess ? 14 : 15;
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
            (this.m_bUsingCodeOverride = !1),
            (this.m_strWeakAuthToken = "");
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
              const i = yield (function (e, t) {
                return Object(a.a)(this, void 0, void 0, function* () {
                  const r = s.b.Init(b);
                  r.Body().set_account_name(t);
                  try {
                    const t = yield W.GetPasswordRSAPublicKey(e, r);
                    if ((t.DEBUG_LogToConsole(), 1 !== t.GetEResult()))
                      return (
                        console.error(
                          `Failed to get RSA key with EResult: ${t.GetEResult()}`
                        ),
                        null
                      );
                    const {
                      publickey_exp: i,
                      publickey_mod: n,
                      timestamp: a,
                    } = t.Body().toObject();
                    return i && n && a
                      ? { publickey_exp: i, publickey_mod: n, timestamp: a }
                      : (console.error(
                          `Missing expected field in RSA Key: ${JSON.stringify({
                            publickey_exp: i,
                            publickey_mod: n,
                            timestamp: a,
                          })}`
                        ),
                        null);
                  } catch (e) {
                    return console.error(`Failed to get RSA key: ${e}`), null;
                  }
                });
              })(this.m_transport, e);
              if (!i)
                return (
                  console.error(
                    "Cannot start auth session without a valid RSA key"
                  ),
                  2
                );
              const n = Object(se.c)(t, i),
                o = s.b.Init(w);
              o.Body().set_account_name(e),
                o.Body().set_encrypted_password(n),
                o.Body().set_encryption_timestamp(i.timestamp),
                o.Body().set_remember_login(!!r),
                o.Body().set_platform_type(this.m_ePlatformType),
                o.Body().set_device_friendly_name(window.navigator.userAgent),
                o.Body().set_persistence(r ? 1 : 0);
              const c = yield W.BeginAuthSessionViaCredentials(
                this.m_transport,
                o
              );
              return Object(l.G)(() =>
                Object(a.a)(this, void 0, void 0, function* () {
                  const t = c.GetEResult();
                  if (1 !== t)
                    switch (t) {
                      case 5:
                        return (this.m_eStatus = 2), t;
                      case 84:
                      case 43:
                      case 118:
                      case 20:
                      default:
                        return (
                          console.error(
                            `Failed to start auth session. Result: ${t}`
                          ),
                          (this.m_eFailureState = Y.Generic),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          t
                        );
                    }
                  this.m_strAccountName = e;
                  const {
                    client_id: r,
                    request_id: i,
                    interval: n,
                    allowed_confirmations: a,
                    steamid: s,
                    weak_token: o,
                  } = c.Body().toObject();
                  if (
                    ((this.m_msPollInterval = 1e3 * n),
                    (this.m_strClientID = r),
                    (this.m_rgRequestID = i),
                    (this.m_steamid = s),
                    (this.m_strWeakAuthToken = o),
                    a.find(({ confirmation_type: e }) => 6 === e))
                  ) {
                    const e = new FormData();
                    e.append("sessionid", d.d.SESSIONID),
                      e.append("clientid", r),
                      e.append("steamid", this.m_steamid);
                    const t = `${d.d.STORE_BASE_URL}login/checkdevice`;
                    if (
                      1 ==
                      (yield u.a.post(t, e, { withCredentials: !0 })).data
                        .result
                    )
                      return (this.m_eStatus = 4), this.StartPolling(!0), 1;
                  }
                  const l = (function (e) {
                      let t = e[0] || 0;
                      e.length > 1 && (t = e.sort((e, t) => ce[e] - ce[t])[0]);
                      return t;
                    })(a.map(({ confirmation_type: e }) => e)),
                    m = a.find(({ confirmation_type: e }) => e === l);
                  switch (
                    (m &&
                      m.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        m.associated_message),
                    l)
                  ) {
                    case 1:
                      return (this.m_eStatus = 13), this.StartPolling(), t;
                    case 2:
                      this.m_eStatus = 3;
                      break;
                    case 5:
                      (this.m_eStatus = 4), this.StartPolling(!1);
                      break;
                    case 3:
                      this.m_eStatus = 5;
                      break;
                    case 4:
                      (this.m_eStatus = 6), this.StartPolling(!1);
                  }
                  return t;
                })
              );
            } catch (e) {
              return (
                console.error(`Failed to start auth session. ${e}`),
                (this.m_eFailureState = Y.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        Stop() {
          this.StopPolling(), (this.m_eStatus = 16);
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
        GetSteamID() {
          return this.m_steamid;
        }
        GetReplacementAuthenticator() {
          return this.m_replacementAuthenticator;
        }
        SendSteamGuardCode(e, t = !0) {
          return Object(a.a)(this, void 0, void 0, function* () {
            try {
              const r = 3 === this.m_eStatus || 10 === this.m_eStatus,
                i = s.b.Init(z);
              i.Body().set_client_id(this.m_strClientID),
                i.Body().set_steamid(this.m_steamid),
                i.Body().set_code(e),
                i.Body().set_code_type(r ? 2 : 3);
              const n = (yield W.UpdateAuthSessionWithSteamGuardCode(
                this.m_transport,
                i
              )).GetEResult();
              if (1 !== n) {
                if (!t) return n;
                switch (n) {
                  case 65:
                  case 88:
                    return (this.m_eStatus = r ? 10 : 11), n;
                  case 27:
                    return (
                      (this.m_eFailureState = Y.Expired),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      n
                    );
                  default:
                    return (
                      console.error(
                        `Failed to update auth session with SG code. Result: ${n}`
                      ),
                      (this.m_eFailureState = Y.Generic),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      n
                    );
                }
              }
              return (this.m_eStatus = 13), this.StartPolling(), n;
            } catch (e) {
              return (
                console.error(
                  `Failed to update auth session with SG code. ${e}`
                ),
                (this.m_eFailureState = Y.Generic),
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
        CantAccessCode() {
          console.log("can't access code"), (this.m_eStatus = 7);
        }
        StartMoveAuthenticator() {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.m_weakAuthWebInterface = new oe.a(
              d.d.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken
            );
            try {
              const e = s.b.Init(q),
                t = yield X.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  e
                );
              1 != t.GetEResult()
                ? (t.DEBUG_LogToConsole(),
                  console.error(
                    "An unexpected error occured while adding an authenticator",
                    t.GetEResult()
                  ),
                  (this.m_eFailureState = Y.Generic),
                  (this.m_eStatus = 15))
                : (console.log("Server sent us an SMS"), (this.m_eStatus = 8));
            } catch (e) {
              console.error(
                "An unexpected error occured while moving an authenticator",
                e
              ),
                (this.m_eFailureState = Y.Generic),
                (this.m_eStatus = 15);
            }
          });
        }
        ResendMoveCode() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = s.b.Init(q),
              t = yield X.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                e
              );
            1 != t.GetEResult()
              ? (t.DEBUG_LogToConsole(),
                console.error(
                  "An unexpected error occured while adding an authenticator",
                  t.GetEResult()
                ),
                (this.m_eFailureState = Y.Generic),
                (this.m_eStatus = 15))
              : (console.log("Server resent us an SMS"), (this.m_eStatus = 8));
          });
        }
        FinishMoveAuthenticator(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const t = s.b.Init(Z);
            t.Body().set_sms_code(e), t.Body().set_generate_new_token(!0);
            const r = yield X.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              t
            );
            94 == r.GetEResult()
              ? (console.log(`Invalid SMS code for authenticator move ${e}`),
                (this.m_eStatus = 12))
              : r.Body().success()
              ? ((this.m_replacementAuthenticator = (function (e) {
                  const {
                      shared_secret: t,
                      identity_secret: r,
                      secret_1: i,
                      status: n,
                      uri: s,
                      server_time: o,
                    } = e,
                    l = Object(a.c)(e, [
                      "shared_secret",
                      "identity_secret",
                      "secret_1",
                      "status",
                      "uri",
                      "server_time",
                    ]);
                  return Object.assign(
                    {
                      shared_secret: te.fromByteArray(t),
                      identity_secret: te.fromByteArray(r),
                      secret_1: te.fromByteArray(i),
                    },
                    l
                  );
                })(r.Body().replacement_token().toObject())),
                console.log(
                  "Server sent us a replacement token",
                  this.m_replacementAuthenticator
                ),
                (this.m_eStatus = 9),
                (this.m_bUsingCodeOverride = !1))
              : (r.DEBUG_LogToConsole(),
                console.error(
                  "Error when calling RemoveAuthenticatorViaChallengeContinue",
                  r.GetEResult()
                ),
                (this.m_eFailureState = Y.Generic),
                (this.m_eStatus = 15));
          });
        }
        FinishMoveRecovery() {
          console.log(
            "Moving to hand the code to the server and finish the login"
          ),
            (this.m_eStatus = 5);
        }
        BCanGoBack() {
          switch (this.m_eStatus) {
            case 5:
            case 11:
            case 3:
            case 10:
            case 6:
            case 4:
            case 7:
            case 8:
            case 12:
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
            case 11:
              this.m_eStatus = this.m_bUsingCodeOverride ? 6 : 0;
              break;
            case 7:
            case 8:
            case 12:
              this.m_eStatus = (this.m_bUsingCodeOverride, 5);
              break;
            case 3:
            case 10:
              this.m_eStatus = this.m_bUsingCodeOverride ? 4 : 0;
              break;
            default:
              return void console.error(
                `Don't know how to GoBack from login session status ${this.m_eStatus}`
              );
          }
        }
      }
      Object(a.b)([l.C], le.prototype, "m_eStatus", void 0),
        Object(a.b)([ae.b], le.prototype, "Start", null),
        Object(a.b)([ae.b], le.prototype, "SendSteamGuardCode", null),
        Object(a.b)([ae.b], le.prototype, "UseCodeOverride", null),
        Object(a.b)([ae.b], le.prototype, "CantAccessCode", null),
        Object(a.b)([ae.b], le.prototype, "StartMoveAuthenticator", null),
        Object(a.b)([ae.b], le.prototype, "ResendMoveCode", null),
        Object(a.b)([ae.b], le.prototype, "FinishMoveAuthenticator", null),
        Object(a.b)([ae.b], le.prototype, "FinishMoveRecovery", null),
        Object(a.b)([ae.b], le.prototype, "GoBack", null);
      const ce = [4, 3, 2, 1, 0, 5].reduce((e, t, r) => ((e[t] = r), e), {});
      function ue(e) {
        return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= 5;
      }
      class de extends re {
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
              const e = s.b.Init(y);
              e.Body().set_platform_type(this.m_ePlatformType),
                e.Body().set_device_friendly_name(window.navigator.userAgent);
              const t = yield W.BeginAuthSessionViaQR(this.m_transport, e),
                r = t.GetEResult();
              if (1 !== r)
                return (
                  console.error(`Failed to start auth session. Result: ${r}`),
                  (this.m_eFailureState = Y.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              const {
                client_id: i,
                challenge_url: n,
                interval: a,
                request_id: o,
              } = t.Body().toObject();
              return (
                (this.m_strClientID = i),
                (this.m_strChallengeURL = n),
                (this.m_msPollInterval = 1e3 * a),
                (this.m_rgRequestID = o),
                (this.m_eStatus = 2),
                this.StartPolling(!1),
                r
              );
            } catch (e) {
              return (
                console.error(`Failed to start auth session. ${e}`),
                (this.m_eFailureState = Y.Generic),
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
      Object(a.b)([l.C], de.prototype, "m_eStatus", void 0);
      var me,
        ge = r("WTXQ"),
        he = r.n(ge),
        _e = r("tmER"),
        be = r.n(_e),
        fe = r("OPJs"),
        Be = r.n(fe);
      function ye(e) {
        let { quality: t, children: r, className: a, activeBitStyle: s } = e;
        void 0 === t && (t = me.M), (s = s || {});
        const l = (function (e, t = {}) {
          const { typeNumber: r, errorCorrectLevel: n } = t,
            [a, s] = Object(i.useState)();
          return (
            Object(i.useEffect)(() => {
              s(be()(e, { typeNumber: r, errorCorrectLevel: n }).modules);
            }, [e, r, n]),
            a
          );
        })(r, { typeNumber: 6, errorCorrectLevel: t });
        if (!l) return null;
        const c = Object(o.a)(Be.a.Bit),
          u = Object(o.a)(Be.a.Bit, Be.a.Active),
          d = [];
        for (let e = 0; e < l.length; e++)
          for (let t = 0; t < l.length; t++) {
            const r = l[e][t],
              i = r ? u : c;
            d.push(
              n.a.createElement("div", {
                key: `${e}_${t}`,
                className: i,
                style: r ? s : {},
              })
            );
          }
        return n.a.createElement(
          "div",
          {
            className: Object(o.a)(Be.a.QRBits, a),
            style: { gridTemplateColumns: `repeat( ${l.length}, 1fr )` },
          },
          d
        );
      }
      !(function (e) {
        (e[(e.L = 1)] = "L"),
          (e[(e.M = 0)] = "M"),
          (e[(e.Q = 3)] = "Q"),
          (e[(e.H = 2)] = "H");
      })(me || (me = {}));
      var pe = r("Kd3+"),
        we = r.n(pe);
      function Ce(e) {
        const {
            transport: t,
            onComplete: r,
            onStatusChange: a,
            platform: s,
          } = e,
          {
            eStatus: l,
            strChallengeURL: c,
            bHadRemoteInteraction: u,
            reset: m,
          } = (function (e) {
            const [t, r] = Object(i.useState)(new de(e));
            return (
              Object(i.useEffect)(
                () => (
                  t.Start(),
                  () => {
                    t.Stop();
                  }
                ),
                [t]
              ),
              Object(ne.d)(() => ({
                strChallengeURL: t.GetChallengeURL(),
                eFailureStatue: t.GetFailureState(),
                eStatus: t.GetStatus(),
                bHadRemoteInteraction: t.BHadRemoteInteraction(),
                reset: () => r(new de(e)),
              }))
            );
          })({ transport: t, onComplete: r, ePlatformType: s });
        Object(i.useEffect)(() => a && a(l), [a, l]);
        const g = 2 === l ? c : d.d.STORE_BASE_URL,
          h = 0 === l || 1 === l || u,
          _ = 4 === l,
          b = 3 === l,
          f = h || _ || b;
        return n.a.createElement(
          "div",
          { className: we.a.Column },
          n.a.createElement(
            "div",
            { className: we.a.LoginQR },
            n.a.createElement(
              ye,
              {
                quality: Se(g),
                className: Object(o.a)(we.a.LoginQR, f && we.a.Blur),
              },
              g
            ),
            f &&
              n.a.createElement(
                "div",
                { className: we.a.Overlay },
                n.a.createElement(
                  "div",
                  { className: we.a.Box },
                  h && n.a.createElement(ve, { size: "small" }),
                  _ && n.a.createElement(Me, { reset: m }),
                  b && n.a.createElement(Ee, null)
                )
              )
          )
        );
      }
      function Se(e) {
        return e.length <= 90 ? me.Q : void 0;
      }
      function ve(e) {
        const { size: t } = e;
        return n.a.createElement("div", {
          className: Object(o.a)(
            we.a.Loading,
            "small" == t && we.a.Small,
            ("medium" == t || !t) && we.a.Medium,
            "large" == t && we.a.Large
          ),
        });
      }
      function Me(e) {
        return n.a.createElement(
          "svg",
          {
            onClick: e.reset,
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "40px", height: "40px", cursor: "pointer" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          n.a.createElement("path", {
            fill: "none",
            stroke: "#fff",
            strokeWidth: "30",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
          }),
          n.a.createElement("polygon", {
            points: "147.639,108.361 245.755,10.166 245.834,108.361",
            fill: "#fff",
          })
        );
      }
      function Ee() {
        return n.a.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "45px", height: "45px" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          n.a.createElement("polyline", {
            fill: "none",
            stroke: "#fff",
            strokeWidth: "24",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "49.5,147.75 95,210.75 206.5,45.25 ",
          })
        );
      }
      var Re = r("GXif"),
        ze = r("kWcV");
      const Oe = Object(i.createContext)(!1),
        Fe = () => Object(i.useContext)(Oe);
      function Ae() {
        return n.a.createElement(
          "div",
          { className: he.a.Login },
          n.a.createElement(Ze, {
            reset: () => window.location.reload(),
            failure: Y.Generic,
          })
        );
      }
      function Te(e) {
        return n.a.createElement(
          je,
          Object.assign({}, e, {
            onSuccess: (t) => {
              const { strRefreshToken: r } = t;
              ie(r).then(
                (t) => e.onComplete(t),
                () => e.onComplete(ee.k_PrimaryDomainFail)
              );
            },
            embedded: "modal" === e.theme,
          })
        );
      }
      function je(e) {
        const { embedded: t } = e,
          r = Object(a.c)(e, ["embedded"]);
        return n.a.createElement(
          Oe.Provider,
          { value: t },
          n.a.createElement(
            "div",
            { className: he.a.Login },
            n.a.createElement(Le, Object.assign({}, r))
          )
        );
      }
      function Le(e) {
        const {
            transport: t,
            onSuccess: r,
            platform: a,
            disableQR: s,
            autoFocus: o,
            renderSuccess: l = () => n.a.createElement(gt, null),
          } = e,
          c = ({ bSuccess: e, strRefreshToken: t, strAccessToken: i }) => {
            e && r({ strRefreshToken: t, strAccessToken: i });
          };
        let {
          eStatus: u,
          eFailureState: m,
          strConfirmationAssociatedMessage: g,
          strAccountName: h,
          start: _,
          reset: b,
          addCode: f,
          goBack: B,
          useCodeOverride: y,
        } = (function (e) {
          const [t, r] = Object(i.useState)(new le(e));
          return Object(ne.d)(() => ({
            strAccountName: t.GetAccountName(),
            steamid: t.GetSteamID(),
            eFailureState: t.GetFailureState(),
            strConfirmationAssociatedMessage:
              t.GetConfirmationAssociatedMessage(),
            eStatus: t.GetStatus(),
            bCanGoBack: t.BCanGoBack(),
            start: t.Start,
            addCode: t.SendSteamGuardCode,
            useCodeOverride: t.UseCodeOverride,
            cantAccessCode: t.CantAccessCode,
            startMoveAuthenticator: t.StartMoveAuthenticator,
            resendMoveCode: t.ResendMoveCode,
            finishMoveAuthenticator: t.FinishMoveAuthenticator,
            finishMoveRecovery: t.FinishMoveRecovery,
            replacementAuthenticator: t.GetReplacementAuthenticator(),
            reset: () => r(new le(e)),
            goBack: t.GoBack,
          }));
        })({ transport: t, onComplete: c, ePlatformType: a });
        const [p, w] = Object(i.useState)(0),
          C = Fe(),
          S = ({ strAccountName: e, strPassword: t, bRememberMe: r }) =>
            _(e, t, r);
        if (!!(0 === u || 1 === u || 2 === u)) {
          const e = n.a.createElement(
            "div",
            { className: he.a.SideBySide },
            n.a.createElement(ke, { onSubmit: S, status: u, autoFocus: o }),
            !s &&
              n.a.createElement(
                "div",
                { className: he.a.QRSection },
                n.a.createElement(
                  Ie,
                  { highlight: !0 },
                  Object(Re.g)("#Login_SignIn_OrWithQRCode")
                ),
                n.a.createElement(
                  "div",
                  { className: he.a.QR },
                  n.a.createElement(Ce, {
                    onStatusChange: w,
                    transport: t,
                    onComplete: c,
                    platform: a,
                  })
                ),
                n.a.createElement(
                  nt,
                  { href: `${d.d.STORE_BASE_URL}mobile`, align: "center" },
                  Object(Re.g)("#Login_GetMobileApp_Link")
                )
              )
          );
          if (C) {
            let t = d.d.IN_CLIENT;
            return n.a.createElement(
              st,
              { gap: 36, className: he.a.EmbeddedRoot },
              !t &&
                n.a.createElement(
                  "div",
                  {
                    style: {
                      fontSize: "14px",
                      color: "#d8d632",
                      width: "380px",
                    },
                  },
                  "QR code functionality is currently limited to play testers with the updated app. Inquire in the mobile slack channel."
                ),
              n.a.createElement(mt, { className: he.a.HeaderLogo }),
              !t && n.a.createElement(We, null),
              e,
              n.a.createElement(
                "div",
                { className: he.a.EmbeddedRootFooter },
                n.a.createElement(
                  nt,
                  {
                    href: `${
                      d.d.HELP_BASE_URL
                    }wizard/HelpWithLogin?redir=${encodeURIComponent(
                      document.location.href
                    )}`,
                  },
                  Object(Re.g)("#Login_Help_SignIn")
                ),
                n.a.createElement(
                  "div",
                  { className: he.a.AccountCreation },
                  n.a.createElement(
                    "span",
                    { className: he.a.AccountCreationPrompt },
                    Object(Re.g)("#Login_NoSteamAccount")
                  ),
                  n.a.createElement(
                    nt,
                    { inline: !0, href: `${d.d.STORE_BASE_URL}join/` },
                    Object(Re.g)("#Login_CreateAccount")
                  )
                )
              ),
              !t && !1
            );
          }
          const r = n.a.createElement(
            "div",
            { style: { display: "flex", flexDirection: "column", gap: "8px" } },
            n.a.createElement(
              "div",
              { style: { fontSize: "14px", color: "#d8d632", width: "380px" } },
              "QR code functionality is currently limited to play testers with the updated app. Inquire in the mobile slack channel."
            ),
            n.a.createElement(
              "div",
              { className: he.a.PrimaryHeader },
              Object(Re.g)("#Login_SignIn")
            ),
            n.a.createElement(We, null)
          );
          return n.a.createElement(dt, { title: r }, e, !1);
        }
        switch (u) {
          case 1:
          case 13:
            return n.a.createElement($e, null);
          case 5:
          case 11:
          case 3:
          case 10:
            const e = 5 === u || 11 === u;
            return n.a.createElement(Ke, {
              type: e ? "mobile" : "email",
              onSubmitCode: f,
              status: u,
              associatedLabel: g,
              accountName: h,
              onBack: B,
            });
          case 6:
          case 4:
            const t = 6 === u;
            return n.a.createElement(it, {
              type: t ? "mobile" : "email",
              accountName: h,
              onUseCodeOverride: y,
            });
          case 16:
            return n.a.createElement(Qe, { reset: b });
          case 15:
            return n.a.createElement(Ze, { reset: b, failure: m });
          case 14:
            return n.a.createElement(dt, { compact: !0 }, l());
          default:
            return (
              console.error(`Unknown Phase: ${u}`),
              n.a.createElement(Ze, { reset: b, failure: Y.Generic })
            );
        }
      }
      function We() {
        const e = window.location.href.includes("?")
          ? window.location.href + "&oldauth=1"
          : window.location.href + "?oldauth=1";
        return n.a.createElement(
          "div",
          { style: { fontSize: "12px" } },
          "Having trouble with new login? ",
          n.a.createElement(
            "a",
            { href: e, style: { textDecoration: "underline" } },
            "Click here"
          ),
          " to use the old experience."
        );
      }
      function ke(e) {
        const { onSubmit: t, status: r, autoFocus: a } = e,
          [s, o] = Object(i.useState)(""),
          [l, c] = Object(i.useState)(""),
          [u, m] = Object(i.useState)(!1),
          [g, h] = Object(i.useState)(!1),
          _ = Fe(),
          b = 2 === r && !g,
          f = b
            ? n.a.createElement(
                qe,
                null,
                Object(Re.g)("#Login_CheckCredentials")
              )
            : n.a.createElement(qe, null, " ");
        return n.a.createElement(
          at,
          {
            onSubmit: () => {
              g &&
                t({ strAccountName: s, strPassword: l, bRememberMe: u }).then(
                  () => h(!1)
                );
            },
            className: he.a.LoginForm,
          },
          n.a.createElement(Ne, {
            tone: b ? "danger" : void 0,
            label: n.a.createElement(
              Ie,
              { highlight: !0 },
              Object(Re.g)("#Login_SignIn_WithAccountName")
            ),
            value: s,
            onChange: (e) => {
              h(!0), o(e);
            },
            autoFocus: a,
          }),
          n.a.createElement(Ne, {
            tone: b ? "danger" : void 0,
            label: n.a.createElement(Ie, null, Object(Re.g)("#Login_Password")),
            value: l,
            onChange: (e) => {
              h(!0), c(e);
            },
            type: "password",
          }),
          n.a.createElement(Ue, {
            label: Object(Re.g)("#Login_RememberMe_Short"),
            value: u,
            onChange: m,
          }),
          n.a.createElement(Ge, null),
          f,
          !_ &&
            n.a.createElement(
              nt,
              {
                href: `${
                  d.d.HELP_BASE_URL
                }wizard/HelpWithLogin?redir=${encodeURIComponent(
                  document.location.href
                )}`,
                align: "center",
              },
              Object(Re.g)("#Login_Help_SignIn")
            )
        );
      }
      function Ne(e) {
        const { label: t, error: r, tone: i, autoFocus: s } = e,
          o = Object(a.c)(e, ["label", "error", "tone", "autoFocus"]),
          l = null != i ? i : r ? "danger" : void 0;
        return n.a.createElement(
          "div",
          { className: he.a.TextField },
          "string" == typeof t ? n.a.createElement(Ie, null, t) : t,
          n.a.createElement(xe, { type: "error" }, r),
          n.a.createElement(Pe, Object.assign({ autoFocus: s, tone: l }, o))
        );
      }
      function Ie(e) {
        const { children: t, highlight: r } = e;
        return n.a.createElement(
          "div",
          { className: Object(o.a)(he.a.FieldLabel, r && he.a.Highlight) },
          t
        );
      }
      function Pe(e) {
        const {
          value: t,
          onChange: r,
          type: i = "text",
          tone: a,
          className: s,
          autoFocus: l,
        } = e;
        return n.a.createElement("input", {
          value: t,
          type: i,
          autoFocus: l,
          onChange: (e) => r(e.target.value),
          className: Object(o.a)(
            he.a.TextInput,
            "danger" === a && he.a.Danger,
            s
          ),
        });
      }
      function xe(e) {
        const { children: t, type: r } = e;
        return n.a.createElement(
          "div",
          {
            className: Object(o.a)(he.a.FieldHint, "error" === r && he.a.Error),
          },
          t
        );
      }
      function Ue(e) {
        const { label: t, onChange: r, value: i } = e;
        let a = () => {
          r && r(!i);
        };
        return n.a.createElement(
          "div",
          {
            className: he.a.CheckboxField,
            onClick: a,
            onKeyPress: (e) => {
              (" " != e.key && "Enter" != e.key) || a();
            },
          },
          n.a.createElement(De, { value: i }),
          n.a.createElement("div", { className: he.a.CheckboxFieldLabel }, t)
        );
      }
      function De(e) {
        const { value: t } = e;
        return n.a.createElement(
          "div",
          { tabIndex: 0, className: he.a.Checkbox },
          t && n.a.createElement("div", { className: he.a.Check })
        );
      }
      function Ge() {
        return n.a.createElement(
          "div",
          { className: he.a.SignInButtonContainer },
          n.a.createElement(He, null, Object(Re.g)("#Login_SignIn"))
        );
      }
      function He(e) {
        return n.a.createElement(Ve, Object.assign({ type: "submit" }, e));
      }
      function Ve(e) {
        return n.a.createElement(
          "button",
          Object.assign({ className: he.a.SubmitButton }, e)
        );
      }
      function qe(e) {
        const t = e.children || " ";
        return n.a.createElement("div", { className: he.a.FormError }, t);
      }
      function $e() {
        return n.a.createElement(
          dt,
          { compact: !0 },
          n.a.createElement(
            st,
            { alignItems: "center" },
            n.a.createElement(ze.a, null)
          )
        );
      }
      function Ze(e) {
        const { reset: t, failure: r } = e,
          { title: i, description: a } = (function (e) {
            switch (e) {
              case Y.None:
                return { title: "", description: "" };
              case Y.Expired:
                return {
                  title: Object(Re.g)("#Login_Error_Expired_Title"),
                  description: Object(Re.g)("#Login_Error_Expired_Description"),
                };
              case Y.Generic:
              default:
                return {
                  title: Object(Re.g)("#Error_Generic"),
                  description: Object(Re.g)("#Login_Error_Default_Description"),
                };
            }
          })(r);
        return n.a.createElement(
          dt,
          { compact: !0 },
          n.a.createElement(
            st,
            { alignItems: "center", gap: 12 },
            n.a.createElement("div", { className: he.a.FailureTitle }, i),
            n.a.createElement("div", { className: he.a.FailureDescription }, a),
            n.a.createElement(Ve, { onClick: t }, Object(Re.g)("#Button_Back"))
          )
        );
      }
      function Qe(e) {
        const { reset: t } = e;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement("div", null, "The login process was stopped."),
          n.a.createElement("button", { onClick: t }, "Reset")
        );
      }
      function Ke(e) {
        const {
            type: t,
            onSubmitCode: r,
            status: a,
            accountName: s,
            associatedLabel: o,
            onBack: l,
          } = e,
          [c, u] = Object(i.useState)([]),
          [m, g] = Object(i.useState)(!1),
          [h, _] = Object(i.useState)(!1),
          b = c.join(""),
          f = (function (e) {
            return ue(e) && 5 === e.length;
          })(b),
          B = () => {
            f && r(b).then(() => g(!1));
          };
        Object(i.useEffect)(() => {
          h && (_(!1), B());
        }, [h]);
        const y = !m && (11 === a || 10 === a),
          p = n.a.createElement(
            nt,
            {
              href: `${d.d.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`,
              align: "center",
            },
            Object(Re.g)("#Login_Help_AccessMobileApp")
          );
        return n.a.createElement(
          dt,
          {
            title: Object(Re.g)("#Login_Title_SteamGuard"),
            bottom: p,
            compact: !0,
          },
          n.a.createElement(
            at,
            { onSubmit: B },
            n.a.createElement(
              st,
              { alignItems: "center", gap: 20 },
              n.a.createElement(Ye, { type: t, accountName: s }),
              n.a.createElement(
                st,
                { gap: 12, alignItems: "center" },
                n.a.createElement(
                  st,
                  { alignItems: "center", gap: 2 },
                  y &&
                    n.a.createElement(
                      qe,
                      null,
                      Object(Re.g)("#Login_IncorrectSteamGuard")
                    ),
                  n.a.createElement(lt, {
                    value: c,
                    onChange: (e) => {
                      m || g(!0), u(e);
                    },
                    onPaste: () => {
                      _(!0);
                    },
                    tone: y ? "danger" : void 0,
                  })
                ),
                n.a.createElement(
                  He,
                  { disabled: !f },
                  Object(Re.g)("#Button_Go")
                )
              ),
              "mobile" === t
                ? n.a.createElement(Je, null)
                : n.a.createElement(Xe, { emailAddress: o })
            )
          )
        );
      }
      function Je() {
        return n.a.createElement(
          ot,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: he.a.EnterCodeFromMobileContainer,
          },
          n.a.createElement(
            "div",
            { className: he.a.EnterCodeFromMobile },
            Object(Re.g)("#Login_EnterMobileCode")
          ),
          n.a.createElement(tt, { className: he.a.AwaitingMobileConfIcon })
        );
      }
      function Xe(e) {
        return n.a.createElement(
          ot,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: he.a.EnterCodeFromEmailContainer,
          },
          n.a.createElement(
            ut,
            { align: "center", spacing: 6 },
            n.a.createElement(
              "div",
              { className: he.a.EnterCodeFromEmail },
              Object(Re.p)(
                "#Login_EnterEmailCode",
                n.a.createElement(
                  "span",
                  { className: he.a.EnterCodeEmailAddress },
                  e.emailAddress
                )
              )
            )
          ),
          n.a.createElement(rt, { className: he.a.AwaitingMobileConfIcon })
        );
      }
      function Ye(e) {
        const { accountName: t, type: r } = e,
          i =
            "mobile" === r
              ? Object(Re.g)("#Login_MobileProtectingAccount")
              : Object(Re.g)("#Login_EmailProtectingAccount"),
          a = Fe();
        return n.a.createElement(
          "div",
          { className: he.a.ProtectingAccount },
          n.a.createElement(
            "div",
            { className: he.a.Label },
            Object(Re.p)(
              "#Login_ActiveAccountName",
              n.a.createElement("span", { className: he.a.AccountName }, t)
            )
          ),
          !a && n.a.createElement("div", { className: he.a.Description }, i)
        );
      }
      function et() {
        return n.a.createElement(
          st,
          { gap: 10, alignItems: "center" },
          n.a.createElement(
            "div",
            { className: he.a.AwaitingMobileConfText },
            Object(Re.g)("#Login_AwaitingMobileConfirmation")
          ),
          n.a.createElement(tt, { className: he.a.AwaitingMobileConfIcon })
        );
      }
      function tt(e) {
        return n.a.createElement(
          "svg",
          { viewBox: "0 0 55 49", fill: "none", className: e.className },
          n.a.createElement("path", {
            d: "M36.1497 0.664062H18.7667C16.0532 0.664062 13.8485 2.86796 13.8485 5.49568V43.3009C13.8485 46.0134 16.0532 48.1326 18.7667 48.1326H36.0649C38.7784 48.1326 40.9831 45.9287 40.9831 43.3009V5.49568C40.9831 2.78319 38.8632 0.664062 36.1497 0.664062ZM38.1848 43.3009C38.1848 44.4029 37.2521 45.3353 36.1497 45.3353H18.7667C17.6643 45.3353 16.7316 44.4029 16.7316 43.3009V42.1142H38.1848V43.3009ZM38.1848 39.317H16.7316V9.73394H38.1848V39.317ZM38.1848 6.93669H16.7316V5.49568C16.7316 4.39373 17.6643 3.46131 18.7667 3.46131H36.0649C37.1673 3.46131 38.1 4.39373 38.1 5.49568V6.93669H38.1848ZM44.7988 14.7351C44.2053 14.9894 43.9509 15.5827 44.1205 16.1761C45.7316 20.3296 45.7316 24.9069 44.1205 29.0604C43.8661 29.6538 44.2053 30.3319 44.7988 30.5014C44.9684 30.5862 45.0532 30.5862 45.2228 30.5862C45.7316 30.5862 46.1556 30.3319 46.3252 29.8233C48.1907 25.1612 48.1907 19.9905 46.3252 15.2437C46.0708 14.8198 45.3924 14.4808 44.7988 14.7351ZM10.1176 14.7351C9.52399 14.4808 8.84562 14.8198 8.67603 15.4132C6.81054 20.0753 6.81054 25.246 8.67603 29.9928C8.84562 30.4166 9.2696 30.7557 9.77837 30.7557C9.94796 30.7557 10.0328 30.7557 10.2023 30.6709C10.7959 30.4166 11.0503 29.8233 10.8807 29.2299C9.2696 25.0764 9.2696 20.4991 10.8807 16.3456C10.9655 15.5827 10.7111 14.9894 10.1176 14.7351ZM52.3456 11.9378C52.0912 11.3445 51.4977 11.0902 50.9041 11.2597C50.3105 11.514 50.0562 12.1074 50.2257 12.7007V12.7855C52.9392 19.0581 52.9392 26.2631 50.2257 32.451C50.1409 32.7053 50.0562 33.0444 50.2257 33.2987C50.3105 33.553 50.5649 33.8072 50.8193 33.892C50.9889 33.9768 51.0737 33.9768 51.2433 33.9768C51.6673 33.9768 52.0912 33.7225 52.2608 33.2987C55.3135 26.6022 55.3135 18.719 52.3456 11.9378ZM4.69065 12.7855C4.94504 12.1921 4.69065 11.514 4.09709 11.2597C3.8427 11.1749 3.50352 11.0902 3.24913 11.2597C2.99475 11.3445 2.74036 11.5988 2.65557 11.8531C-0.312272 18.719 -0.312272 26.5174 2.65557 33.3834C2.82516 33.8072 3.24913 34.0615 3.67311 34.0615C3.8427 34.0615 4.01229 34.0615 4.09709 33.9768C4.35147 33.892 4.60586 33.6377 4.69065 33.3834C4.77545 33.1291 4.77545 32.7901 4.69065 32.5358C1.9772 26.2631 1.9772 19.0581 4.69065 12.7855ZM20.3778 15.9218C21.2257 15.9218 21.8193 15.2437 21.8193 14.4808C21.8193 13.7179 21.1409 13.0398 20.3778 13.0398C19.6146 13.0398 18.9363 13.7179 18.9363 14.4808C18.9363 15.2437 19.6146 15.9218 20.3778 15.9218ZM24.1088 15.9218C24.9567 15.9218 25.5503 15.2437 25.5503 14.4808C25.5503 13.7179 24.8719 13.0398 24.1088 13.0398C23.2608 13.0398 22.6673 13.7179 22.6673 14.4808C22.5825 15.2437 23.2608 15.9218 24.1088 15.9218ZM27.755 15.9218C28.6029 15.9218 29.1965 15.2437 29.1965 14.4808C29.1965 13.7179 28.5181 13.0398 27.755 13.0398C26.907 13.0398 26.3135 13.7179 26.3135 14.4808C26.3135 15.2437 26.9918 15.9218 27.755 15.9218ZM31.4012 15.9218C32.2491 15.9218 32.8427 15.2437 32.8427 14.4808C32.8427 13.7179 32.1643 13.0398 31.4012 13.0398C30.5532 13.0398 29.9597 13.7179 29.9597 14.4808C29.9597 15.2437 30.638 15.9218 31.4012 15.9218ZM35.1322 15.9218C35.9801 15.9218 36.5737 15.2437 36.5737 14.4808C36.5737 13.7179 35.8953 13.0398 35.1322 13.0398C34.2842 13.0398 33.6907 13.7179 33.6907 14.4808C33.6059 15.2437 34.2842 15.9218 35.1322 15.9218Z",
            fill: "#1A99FF",
          })
        );
      }
      function rt(e) {
        return n.a.createElement(
          "svg",
          { viewBox: "0 0 58 56", fill: "none", className: e.className },
          n.a.createElement("path", {
            d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
            fill: "#1A99FF",
          })
        );
      }
      function it(e) {
        const { type: t, accountName: r, onUseCodeOverride: i } = e,
          a = Fe(),
          s = n.a.createElement(
            nt,
            {
              align: "center",
              href: `${d.d.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`,
            },
            Object(Re.g)("#Login_Help_AccessMobileApp")
          ),
          o = a
            ? n.a.createElement(
                "div",
                { style: { paddingBottom: "20px" } },
                n.a.createElement(
                  nt,
                  { align: "center", onClick: i },
                  Object(Re.g)("#Login_EnterCodeInstead")
                )
              )
            : n.a.createElement(
                "div",
                { onClick: i, className: he.a.EnterCodeInsteadLink },
                Object(Re.g)("#Login_EnterCodeInstead")
              );
        return n.a.createElement(
          dt,
          {
            title: Object(Re.g)("#Login_Title_SteamGuard"),
            bottom: s,
            compact: !0,
          },
          n.a.createElement(
            st,
            { gap: 40 },
            n.a.createElement(Ye, { type: t, accountName: r }),
            n.a.createElement(et, null),
            o
          )
        );
      }
      function nt(e) {
        const { children: t, align: r, inline: i } = e,
          a = Object(o.a)(
            he.a.TextLink,
            "center" === r && he.a.TextAlignCenter
          );
        if ("href" in e)
          return n.a.createElement("a", { className: a, href: e.href }, t);
        {
          const r = i ? "span" : "div";
          return n.a.createElement(r, { className: a, onClick: e.onClick }, t);
        }
      }
      function at(e) {
        const { onSubmit: t, children: r, className: i } = e;
        return n.a.createElement(
          "form",
          { onSubmit: (e) => (e.preventDefault(), t(), !1), className: i },
          r
        );
      }
      function st(e) {
        const {
            alignItems: t,
            justifyContent: r,
            gap: i,
            className: a,
            children: s,
          } = e,
          l = Object(o.a)(
            he.a.FlexCol,
            "center" === t && he.a.AlignItemsCenter,
            "center" === r && he.a.JustifyContentCenter,
            a
          ),
          c = i ? { gap: "number" == typeof i ? `${i}px` : i } : void 0;
        return n.a.createElement("div", { className: l, style: c }, s);
      }
      function ot(e) {
        const {
            children: t,
            justifyContent: r,
            alignItems: i,
            className: a,
          } = e,
          s = {
            display: "flex",
            flexDirection: "row",
            justifyContent: r,
            alignItems: i,
          };
        return n.a.createElement("div", { style: s, className: a }, t);
      }
      function lt(e) {
        const { value: t, onChange: r, onPaste: i, tone: a } = e;
        return n.a.createElement(ct, {
          length: 5,
          value: t,
          onChange: (e) => {
            ue((e = e.map((e) => e.toUpperCase())).join("").trim()) && r(e);
          },
          onPaste: () => i && i(),
          tone: a,
          autoFocus: !0,
        });
      }
      function ct(e) {
        const {
            length: t,
            value: r,
            onChange: a,
            onPaste: s,
            tone: l,
            autoFocus: c,
          } = e,
          u = Object(i.useRef)([]),
          d = () => a(u.current.map((e) => e.value)),
          m = (e) => {
            const t = e.target.nextElementSibling;
            e.target.value && t && t.focus(), d();
          },
          g = (e) => {
            var t;
            -1 === u.current.findIndex((e) => !!e.value)
              ? null === (t = u.current[0]) || void 0 === t || t.select()
              : e.target.select();
          },
          h = (e) => {
            const t = e.target;
            if ("Backspace" === e.key || "Delete" === e.key) {
              const r =
                "Backspace" === e.key
                  ? t.previousElementSibling
                  : t.nextElementSibling;
              "" === t.value &&
                r &&
                ((r.value = ""), r.focus(), e.preventDefault(), d());
            } else if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
              const r =
                "ArrowLeft" === e.key
                  ? t.previousElementSibling
                  : t.nextElementSibling;
              r && (r.focus(), e.preventDefault());
            }
          },
          _ = (e) => {
            const t = e.clipboardData.getData("Text");
            let r = e.target,
              i = 0;
            for (; r && i < t.length; )
              r.focus(),
                (r.value = t.charAt(i)),
                (r = r.nextElementSibling),
                i++;
            d(), e.preventDefault(), s && s();
          },
          b = [];
        for (let e = 0; e < t; e++)
          b.push(
            n.a.createElement("input", {
              type: "text",
              maxLength: 1,
              key: e,
              ref: (t) => (u.current[e] = t),
              onChange: m,
              onFocus: g,
              onClick: (e) => e.stopPropagation(),
              onKeyDown: h,
              onPaste: _,
              value: r[e] ? r[e][0] : "",
              autoComplete: "none",
              autoFocus: 0 === e && c,
            })
          );
        return n.a.createElement(
          "div",
          {
            className: Object(o.a)(
              he.a.SegmentedCharacterInput,
              "danger" === l && he.a.Danger
            ),
            onClick: () => {
              const e = u.current.find((e) => !e.value);
              e ? e.focus() : u.current[u.current.length - 1].focus();
            },
          },
          b
        );
      }
      function ut(e) {
        const { children: t, spacing: r = 0, align: i } = e;
        return n.a.createElement(
          st,
          { alignItems: i },
          n.a.Children.map(t, (e, t) =>
            e
              ? n.a.createElement(
                  "div",
                  { style: t > 0 ? { paddingTop: `${r}px` } : void 0 },
                  e
                )
              : null
          ).filter(Boolean)
        );
      }
      function dt(e) {
        const { title: t, children: r, bottom: i, compact: a } = e,
          s = Fe();
        return n.a.createElement(
          st,
          {
            gap: 32,
            className: Object(o.a)(
              he.a.StandardLayout,
              s && he.a.Embedded,
              a && he.a.Compact
            ),
          },
          "string" == typeof t
            ? n.a.createElement("div", { className: he.a.PrimaryHeader }, t)
            : t,
          n.a.createElement("div", { className: he.a.FormContainer }, r),
          i
        );
      }
      function mt(e) {
        return n.a.createElement(
          "svg",
          {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
          },
          n.a.createElement("path", {
            d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
            fill: "#E0E1E6",
          }),
          n.a.createElement("path", {
            d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
            fill: "#E0E1E6",
          }),
          n.a.createElement("path", {
            d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
            fill: "#E0E1E6",
          }),
          n.a.createElement("path", {
            d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
            fill: "#E0E1E6",
          }),
          n.a.createElement("path", {
            d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
            fill: "#E0E1E6",
          }),
          n.a.createElement("path", {
            d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
            fill: "#E0E1E6",
          }),
          n.a.createElement("path", {
            d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
            fill: "#E0E1E6",
          }),
          n.a.createElement("path", {
            d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
            fill: "#E0E1E6",
          }),
          n.a.createElement("path", {
            d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
            fill: "#E0E1E6",
          })
        );
      }
      function gt() {
        return n.a.createElement(
          st,
          { alignItems: "center", justifyContent: "center" },
          n.a.createElement(ze.a, null)
        );
      }
      var ht = r("SvVX");
      function _t(e) {
        const { redirectUrl: t = d.d.STORE_BASE_URL } = e,
          [r] = Object(i.useState)(
            new oe.a(d.d.WEBAPI_BASE_URL).GetAnonymousServiceTransport()
          ),
          [a, s] = Object(i.useState)(!1);
        return n.a.createElement(
          "div",
          { className: ht.LoginContainer },
          a
            ? n.a.createElement(Ae, null)
            : n.a.createElement(Te, {
                autoFocus: !0,
                transport: r,
                platform: 2,
                onComplete: (e) => {
                  e == ee.k_PrimaryDomainFail
                    ? s(!0)
                    : window.location.assign(t);
                },
                redirectUrl: t,
              })
        );
      }
    },
    rcnY: function (e, t, r) {
      var i = r("aRTE");
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
              "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t
            );
          for (var i = r.length / 3, a = new Array(), s = 0; s < i; s++)
            for (
              var o = r[3 * s + 0], l = r[3 * s + 1], c = r[3 * s + 2], u = 0;
              u < o;
              u++
            )
              a.push(new n(l, c));
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
    tmER: function (e, t, r) {
      var i = r("H38U"),
        n = r("aRTE"),
        a = function (e, t) {
          var r = new i(
            (t = t || {}).typeNumber || -1,
            t.errorCorrectLevel || n.H
          );
          return r.addData(e), r.make(), r;
        };
      (a.ErrorCorrectLevel = n), (e.exports = a);
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
