/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8919],
  {
    62906: (e) => {
      e.exports = {
        Login: "newlogindialog_Login_ZOBYq",
        SideBySide: "newlogindialog_SideBySide_1Wl13",
        QRSection: "newlogindialog_QRSection_2ZDyS",
        ScanQRButton: "newlogindialog_ScanQRButton_IsYb2",
        QRIcon: "newlogindialog_QRIcon_2zKSq",
        QRCodeContainer: "newlogindialog_QRCodeContainer_3YjUm",
        QR: "newlogindialog_QR_1d6FZ",
        HideButton: "newlogindialog_HideButton_u88sc",
        ShowQR: "newlogindialog_ShowQR_12nP-",
        UseMobileAppForQR: "newlogindialog_UseMobileAppForQR_9xgsv",
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
        RefreshButtonContainer: "newlogindialog_RefreshButtonContainer_2SbbR",
        SignInButtonContainer: "newlogindialog_SignInButtonContainer_14fsn",
        RefreshQuitButton: "newlogindialog_RefreshQuitButton_KFTqb",
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
        Disabled: "newlogindialog_Disabled_2HFP7",
        Loading: "newlogindialog_Loading_i9MK3",
        RefreshTitle: "newlogindialog_RefreshTitle_2IXDr",
        RefreshReason: "newlogindialog_RefreshReason_3jz0o",
        StandardLayout: "newlogindialog_StandardLayout_286eh",
        PrimaryHeader: "newlogindialog_PrimaryHeader_39uMK",
        FormContainer: "newlogindialog_FormContainer_3jLIH",
        Embedded: "newlogindialog_Embedded_CpeGc",
        Compact: "newlogindialog_Compact_9CHmB",
        HeaderLogo: "newlogindialog_HeaderLogo_1rtyT",
        EmbeddedRoot: "newlogindialog_EmbeddedRoot_2Vbrf",
        EmbeddedRootFooter: "newlogindialog_EmbeddedRootFooter_1HRJ1",
        AccountCreation: "newlogindialog_AccountCreation_19yGb",
        AccountCreationPrompt: "newlogindialog_AccountCreationPrompt_1h5_x",
        FailureTitle: "newlogindialog_FailureTitle_A3Y-u",
        FailureDescription: "newlogindialog_FailureDescription_3gFes",
      };
    },
    1105: (e) => {
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
    72036: (e) => {
      e.exports = {
        QRBits: "qrcode_QRBits_3FhhK",
        Bit: "qrcode_Bit_2Yuvr",
        Active: "qrcode_Active_274P1",
      };
    },
    73474: (e, t, r) => {
      "use strict";
      var i;
      r.d(t, { Z: () => z });
      function n(e, t, r) {
        null != e &&
          ("number" == typeof e
            ? this.fromNumber(e, t, r)
            : null == t && "string" != typeof e
            ? this.fromString(e, 256)
            : this.fromString(e, t));
      }
      function s() {
        return new n(null);
      }
      "Microsoft Internet Explorer" == navigator.appName
        ? ((n.prototype.am = function (e, t, r, i, n, s) {
            for (var a = 32767 & t, o = t >> 15; --s >= 0; ) {
              var l = 32767 & this[e],
                c = this[e++] >> 15,
                u = o * l + c * a;
              (n =
                ((l = a * l + ((32767 & u) << 15) + r[i] + (1073741823 & n)) >>>
                  30) +
                (u >>> 15) +
                o * c +
                (n >>> 30)),
                (r[i++] = 1073741823 & l);
            }
            return n;
          }),
          (i = 30))
        : "Netscape" != navigator.appName
        ? ((n.prototype.am = function (e, t, r, i, n, s) {
            for (; --s >= 0; ) {
              var a = t * this[e++] + r[i] + n;
              (n = Math.floor(a / 67108864)), (r[i++] = 67108863 & a);
            }
            return n;
          }),
          (i = 26))
        : ((n.prototype.am = function (e, t, r, i, n, s) {
            for (var a = 16383 & t, o = t >> 14; --s >= 0; ) {
              var l = 16383 & this[e],
                c = this[e++] >> 14,
                u = o * l + c * a;
              (n =
                ((l = a * l + ((16383 & u) << 14) + r[i] + n) >> 28) +
                (u >> 14) +
                o * c),
                (r[i++] = 268435455 & l);
            }
            return n;
          }),
          (i = 28)),
        (n.prototype.DB = i),
        (n.prototype.DM = (1 << i) - 1),
        (n.prototype.DV = 1 << i);
      (n.prototype.FV = Math.pow(2, 52)),
        (n.prototype.F1 = 52 - i),
        (n.prototype.F2 = 2 * i - 52);
      var a,
        o,
        l = new Array();
      for (a = "0".charCodeAt(0), o = 0; o <= 9; ++o) l[a++] = o;
      for (a = "a".charCodeAt(0), o = 10; o < 36; ++o) l[a++] = o;
      for (a = "A".charCodeAt(0), o = 10; o < 36; ++o) l[a++] = o;
      function c(e) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e);
      }
      function u(e, t) {
        var r = l[e.charCodeAt(t)];
        return null == r ? -1 : r;
      }
      function m(e) {
        var t = s();
        return t.fromInt(e), t;
      }
      function d(e) {
        var t,
          r = 1;
        return (
          0 != (t = e >>> 16) && ((e = t), (r += 16)),
          0 != (t = e >> 8) && ((e = t), (r += 8)),
          0 != (t = e >> 4) && ((e = t), (r += 4)),
          0 != (t = e >> 2) && ((e = t), (r += 2)),
          0 != (t = e >> 1) && ((e = t), (r += 1)),
          r
        );
      }
      function h(e) {
        this.m = e;
      }
      function g(e) {
        (this.m = e),
          (this.mp = e.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (e.DB - 15)) - 1),
          (this.mt2 = 2 * e.t);
      }
      function f(e, t) {
        return e & t;
      }
      function p(e, t) {
        return e | t;
      }
      function _(e, t) {
        return e ^ t;
      }
      function b(e, t) {
        return e & ~t;
      }
      function y(e) {
        if (0 == e) return -1;
        var t = 0;
        return (
          0 == (65535 & e) && ((e >>= 16), (t += 16)),
          0 == (255 & e) && ((e >>= 8), (t += 8)),
          0 == (15 & e) && ((e >>= 4), (t += 4)),
          0 == (3 & e) && ((e >>= 2), (t += 2)),
          0 == (1 & e) && ++t,
          t
        );
      }
      function B(e) {
        for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
        return t;
      }
      function w() {}
      function S(e) {
        return e;
      }
      function C(e) {
        (this.r2 = s()),
          (this.q3 = s()),
          n.ONE.dlShiftTo(2 * e.t, this.r2),
          (this.mu = this.r2.divide(e)),
          (this.m = e);
      }
      (h.prototype.convert = function (e) {
        return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
      }),
        (h.prototype.revert = function (e) {
          return e;
        }),
        (h.prototype.reduce = function (e) {
          e.divRemTo(this.m, null, e);
        }),
        (h.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (h.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (g.prototype.convert = function (e) {
          var t = s();
          return (
            e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(n.ZERO) > 0 && this.m.subTo(t, t),
            t
          );
        }),
        (g.prototype.revert = function (e) {
          var t = s();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (g.prototype.reduce = function (e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var r = 32767 & e[t],
              i =
                (r * this.mpl +
                  (((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              e[(r = t + this.m.t)] += this.m.am(0, i, e, t, 0, this.m.t);
              e[r] >= e.DV;

            )
              (e[r] -= e.DV), e[++r]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }),
        (g.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (g.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (n.prototype.copyTo = function (e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }),
        (n.prototype.fromInt = function (e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0);
        }),
        (n.prototype.fromString = function (e, t) {
          var r;
          if (16 == t) r = 4;
          else if (8 == t) r = 3;
          else if (256 == t) r = 8;
          else if (2 == t) r = 1;
          else if (32 == t) r = 5;
          else {
            if (4 != t) return void this.fromRadix(e, t);
            r = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var i = e.length, s = !1, a = 0; --i >= 0; ) {
            var o = 8 == r ? 255 & e[i] : u(e, i);
            o < 0
              ? "-" == e.charAt(i) && (s = !0)
              : ((s = !1),
                0 == a
                  ? (this[this.t++] = o)
                  : a + r > this.DB
                  ? ((this[this.t - 1] |=
                      (o & ((1 << (this.DB - a)) - 1)) << a),
                    (this[this.t++] = o >> (this.DB - a)))
                  : (this[this.t - 1] |= o << a),
                (a += r) >= this.DB && (a -= this.DB));
          }
          8 == r &&
            0 != (128 & e[0]) &&
            ((this.s = -1),
            a > 0 && (this[this.t - 1] |= ((1 << (this.DB - a)) - 1) << a)),
            this.clamp(),
            s && n.ZERO.subTo(this, this);
        }),
        (n.prototype.clamp = function () {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }),
        (n.prototype.dlShiftTo = function (e, t) {
          var r;
          for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
          for (r = e - 1; r >= 0; --r) t[r] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }),
        (n.prototype.drShiftTo = function (e, t) {
          for (var r = e; r < this.t; ++r) t[r - e] = this[r];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }),
        (n.prototype.lShiftTo = function (e, t) {
          var r,
            i = e % this.DB,
            n = this.DB - i,
            s = (1 << n) - 1,
            a = Math.floor(e / this.DB),
            o = (this.s << i) & this.DM;
          for (r = this.t - 1; r >= 0; --r)
            (t[r + a + 1] = (this[r] >> n) | o), (o = (this[r] & s) << i);
          for (r = a - 1; r >= 0; --r) t[r] = 0;
          (t[a] = o), (t.t = this.t + a + 1), (t.s = this.s), t.clamp();
        }),
        (n.prototype.rShiftTo = function (e, t) {
          t.s = this.s;
          var r = Math.floor(e / this.DB);
          if (r >= this.t) t.t = 0;
          else {
            var i = e % this.DB,
              n = this.DB - i,
              s = (1 << i) - 1;
            t[0] = this[r] >> i;
            for (var a = r + 1; a < this.t; ++a)
              (t[a - r - 1] |= (this[a] & s) << n), (t[a - r] = this[a] >> i);
            i > 0 && (t[this.t - r - 1] |= (this.s & s) << n),
              (t.t = this.t - r),
              t.clamp();
          }
        }),
        (n.prototype.subTo = function (e, t) {
          for (var r = 0, i = 0, n = Math.min(e.t, this.t); r < n; )
            (i += this[r] - e[r]), (t[r++] = i & this.DM), (i >>= this.DB);
          if (e.t < this.t) {
            for (i -= e.s; r < this.t; )
              (i += this[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; r < e.t; )
              (i -= e[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            i -= e.s;
          }
          (t.s = i < 0 ? -1 : 0),
            i < -1 ? (t[r++] = this.DV + i) : i > 0 && (t[r++] = i),
            (t.t = r),
            t.clamp();
        }),
        (n.prototype.multiplyTo = function (e, t) {
          var r = this.abs(),
            i = e.abs(),
            s = r.t;
          for (t.t = s + i.t; --s >= 0; ) t[s] = 0;
          for (s = 0; s < i.t; ++s) t[s + r.t] = r.am(0, i[s], t, s, 0, r.t);
          (t.s = 0), t.clamp(), this.s != e.s && n.ZERO.subTo(t, t);
        }),
        (n.prototype.squareTo = function (e) {
          for (var t = this.abs(), r = (e.t = 2 * t.t); --r >= 0; ) e[r] = 0;
          for (r = 0; r < t.t - 1; ++r) {
            var i = t.am(r, t[r], e, 2 * r, 0, 1);
            (e[r + t.t] += t.am(
              r + 1,
              2 * t[r],
              e,
              2 * r + 1,
              i,
              t.t - r - 1
            )) >= t.DV && ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1));
          }
          e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
            (e.s = 0),
            e.clamp();
        }),
        (n.prototype.divRemTo = function (e, t, r) {
          var i = e.abs();
          if (!(i.t <= 0)) {
            var a = this.abs();
            if (a.t < i.t)
              return (
                null != t && t.fromInt(0), void (null != r && this.copyTo(r))
              );
            null == r && (r = s());
            var o = s(),
              l = this.s,
              c = e.s,
              u = this.DB - d(i[i.t - 1]);
            u > 0
              ? (i.lShiftTo(u, o), a.lShiftTo(u, r))
              : (i.copyTo(o), a.copyTo(r));
            var m = o.t,
              h = o[m - 1];
            if (0 != h) {
              var g = h * (1 << this.F1) + (m > 1 ? o[m - 2] >> this.F2 : 0),
                f = this.FV / g,
                p = (1 << this.F1) / g,
                _ = 1 << this.F2,
                b = r.t,
                y = b - m,
                B = null == t ? s() : t;
              for (
                o.dlShiftTo(y, B),
                  r.compareTo(B) >= 0 && ((r[r.t++] = 1), r.subTo(B, r)),
                  n.ONE.dlShiftTo(m, B),
                  B.subTo(o, o);
                o.t < m;

              )
                o[o.t++] = 0;
              for (; --y >= 0; ) {
                var w =
                  r[--b] == h
                    ? this.DM
                    : Math.floor(r[b] * f + (r[b - 1] + _) * p);
                if ((r[b] += o.am(0, w, r, y, 0, m)) < w)
                  for (o.dlShiftTo(y, B), r.subTo(B, r); r[b] < --w; )
                    r.subTo(B, r);
              }
              null != t && (r.drShiftTo(m, t), l != c && n.ZERO.subTo(t, t)),
                (r.t = m),
                r.clamp(),
                u > 0 && r.rShiftTo(u, r),
                l < 0 && n.ZERO.subTo(r, r);
            }
          }
        }),
        (n.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var e = this[0];
          if (0 == (1 & e)) return 0;
          var t = 3 & e;
          return (t =
            ((t =
              ((t =
                ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) &
                255) *
                (2 - (((65535 & e) * t) & 65535))) &
              65535) *
              (2 - ((e * t) % this.DV))) %
            this.DV) > 0
            ? this.DV - t
            : -t;
        }),
        (n.prototype.isEven = function () {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }),
        (n.prototype.exp = function (e, t) {
          if (e > 4294967295 || e < 1) return n.ONE;
          var r = s(),
            i = s(),
            a = t.convert(this),
            o = d(e) - 1;
          for (a.copyTo(r); --o >= 0; )
            if ((t.sqrTo(r, i), (e & (1 << o)) > 0)) t.mulTo(i, a, r);
            else {
              var l = r;
              (r = i), (i = l);
            }
          return t.revert(r);
        }),
        (n.prototype.toString = function (e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var t;
          if (16 == e) t = 4;
          else if (8 == e) t = 3;
          else if (2 == e) t = 1;
          else if (32 == e) t = 5;
          else {
            if (4 != e) return this.toRadix(e);
            t = 2;
          }
          var r,
            i = (1 << t) - 1,
            n = !1,
            s = "",
            a = this.t,
            o = this.DB - ((a * this.DB) % t);
          if (a-- > 0)
            for (
              o < this.DB && (r = this[a] >> o) > 0 && ((n = !0), (s = c(r)));
              a >= 0;

            )
              o < t
                ? ((r = (this[a] & ((1 << o) - 1)) << (t - o)),
                  (r |= this[--a] >> (o += this.DB - t)))
                : ((r = (this[a] >> (o -= t)) & i),
                  o <= 0 && ((o += this.DB), --a)),
                r > 0 && (n = !0),
                n && (s += c(r));
          return n ? s : "0";
        }),
        (n.prototype.negate = function () {
          var e = s();
          return n.ZERO.subTo(this, e), e;
        }),
        (n.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (n.prototype.compareTo = function (e) {
          var t = this.s - e.s;
          if (0 != t) return t;
          var r = this.t;
          if (0 != (t = r - e.t)) return t;
          for (; --r >= 0; ) if (0 != (t = this[r] - e[r])) return t;
          return 0;
        }),
        (n.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + d(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (n.prototype.mod = function (e) {
          var t = s();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(n.ZERO) > 0 && e.subTo(t, t),
            t
          );
        }),
        (n.prototype.modPowInt = function (e, t) {
          var r;
          return (
            (r = e < 256 || t.isEven() ? new h(t) : new g(t)), this.exp(e, r)
          );
        }),
        (n.ZERO = m(0)),
        (n.ONE = m(1)),
        (w.prototype.convert = S),
        (w.prototype.revert = S),
        (w.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r);
        }),
        (w.prototype.sqrTo = function (e, t) {
          e.squareTo(t);
        }),
        (C.prototype.convert = function (e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = s();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (C.prototype.revert = function (e) {
          return e;
        }),
        (C.prototype.reduce = function (e) {
          for (
            e.drShiftTo(this.m.t - 1, this.r2),
              e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            e.compareTo(this.r2) < 0;

          )
            e.dAddOffset(1, this.m.t + 1);
          for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
            e.subTo(this.m, e);
        }),
        (C.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (C.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        });
      var v = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509,
        ],
        E = (1 << 26) / v[v.length - 1];
      (n.prototype.chunkSize = function (e) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(e));
      }),
        (n.prototype.toRadix = function (e) {
          if ((null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36))
            return "0";
          var t = this.chunkSize(e),
            r = Math.pow(e, t),
            i = m(r),
            n = s(),
            a = s(),
            o = "";
          for (this.divRemTo(i, n, a); n.signum() > 0; )
            (o = (r + a.intValue()).toString(e).substr(1) + o),
              n.divRemTo(i, n, a);
          return a.intValue().toString(e) + o;
        }),
        (n.prototype.fromRadix = function (e, t) {
          this.fromInt(0), null == t && (t = 10);
          for (
            var r = this.chunkSize(t),
              i = Math.pow(t, r),
              s = !1,
              a = 0,
              o = 0,
              l = 0;
            l < e.length;
            ++l
          ) {
            var c = u(e, l);
            c < 0
              ? "-" == e.charAt(l) && 0 == this.signum() && (s = !0)
              : ((o = t * o + c),
                ++a >= r &&
                  (this.dMultiply(i), this.dAddOffset(o, 0), (a = 0), (o = 0)));
          }
          a > 0 && (this.dMultiply(Math.pow(t, a)), this.dAddOffset(o, 0)),
            s && n.ZERO.subTo(this, this);
        }),
        (n.prototype.fromNumber = function (e, t, r) {
          if ("number" == typeof t)
            if (e < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(e, r),
                  this.testBit(e - 1) ||
                    this.bitwiseTo(n.ONE.shiftLeft(e - 1), p, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(t);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > e &&
                    this.subTo(n.ONE.shiftLeft(e - 1), this);
          else {
            var i = new Array(),
              s = 7 & e;
            (i.length = 1 + (e >> 3)),
              t.nextBytes(i),
              s > 0 ? (i[0] &= (1 << s) - 1) : (i[0] = 0),
              this.fromString(i, 256);
          }
        }),
        (n.prototype.bitwiseTo = function (e, t, r) {
          var i,
            n,
            s = Math.min(e.t, this.t);
          for (i = 0; i < s; ++i) r[i] = t(this[i], e[i]);
          if (e.t < this.t) {
            for (n = e.s & this.DM, i = s; i < this.t; ++i)
              r[i] = t(this[i], n);
            r.t = this.t;
          } else {
            for (n = this.s & this.DM, i = s; i < e.t; ++i) r[i] = t(n, e[i]);
            r.t = e.t;
          }
          (r.s = t(this.s, e.s)), r.clamp();
        }),
        (n.prototype.changeBit = function (e, t) {
          var r = n.ONE.shiftLeft(e);
          return this.bitwiseTo(r, t, r), r;
        }),
        (n.prototype.addTo = function (e, t) {
          for (var r = 0, i = 0, n = Math.min(e.t, this.t); r < n; )
            (i += this[r] + e[r]), (t[r++] = i & this.DM), (i >>= this.DB);
          if (e.t < this.t) {
            for (i += e.s; r < this.t; )
              (i += this[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; r < e.t; )
              (i += e[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            i += e.s;
          }
          (t.s = i < 0 ? -1 : 0),
            i > 0 ? (t[r++] = i) : i < -1 && (t[r++] = this.DV + i),
            (t.t = r),
            t.clamp();
        }),
        (n.prototype.dMultiply = function (e) {
          (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }),
        (n.prototype.dAddOffset = function (e, t) {
          for (; this.t <= t; ) this[this.t++] = 0;
          for (this[t] += e; this[t] >= this.DV; )
            (this[t] -= this.DV),
              ++t >= this.t && (this[this.t++] = 0),
              ++this[t];
        }),
        (n.prototype.multiplyLowerTo = function (e, t, r) {
          var i,
            n = Math.min(this.t + e.t, t);
          for (r.s = 0, r.t = n; n > 0; ) r[--n] = 0;
          for (i = r.t - this.t; n < i; ++n)
            r[n + this.t] = this.am(0, e[n], r, n, 0, this.t);
          for (i = Math.min(e.t, t); n < i; ++n)
            this.am(0, e[n], r, n, 0, t - n);
          r.clamp();
        }),
        (n.prototype.multiplyUpperTo = function (e, t, r) {
          --t;
          var i = (r.t = this.t + e.t - t);
          for (r.s = 0; --i >= 0; ) r[i] = 0;
          for (i = Math.max(t - this.t, 0); i < e.t; ++i)
            r[this.t + i - t] = this.am(t - i, e[i], r, 0, 0, this.t + i - t);
          r.clamp(), r.drShiftTo(1, r);
        }),
        (n.prototype.modInt = function (e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            r = this.s < 0 ? e - 1 : 0;
          if (this.t > 0)
            if (0 == t) r = this[0] % e;
            else
              for (var i = this.t - 1; i >= 0; --i) r = (t * r + this[i]) % e;
          return r;
        }),
        (n.prototype.millerRabin = function (e) {
          var t = this.subtract(n.ONE),
            r = t.getLowestSetBit();
          if (r <= 0) return !1;
          var i = t.shiftRight(r);
          (e = (e + 1) >> 1) > v.length && (e = v.length);
          for (var a = s(), o = 0; o < e; ++o) {
            a.fromInt(v[o]);
            var l = a.modPow(i, this);
            if (0 != l.compareTo(n.ONE) && 0 != l.compareTo(t)) {
              for (var c = 1; c++ < r && 0 != l.compareTo(t); )
                if (0 == (l = l.modPowInt(2, this)).compareTo(n.ONE)) return !1;
              if (0 != l.compareTo(t)) return !1;
            }
          }
          return !0;
        }),
        (n.prototype.clone = function () {
          var e = s();
          return this.copyTo(e), e;
        }),
        (n.prototype.intValue = function () {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }),
        (n.prototype.byteValue = function () {
          return 0 == this.t ? this.s : (this[0] << 24) >> 24;
        }),
        (n.prototype.shortValue = function () {
          return 0 == this.t ? this.s : (this[0] << 16) >> 16;
        }),
        (n.prototype.signum = function () {
          return this.s < 0
            ? -1
            : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
        }),
        (n.prototype.toByteArray = function () {
          var e = this.t,
            t = new Array();
          t[0] = this.s;
          var r,
            i = this.DB - ((e * this.DB) % 8),
            n = 0;
          if (e-- > 0)
            for (
              i < this.DB &&
              (r = this[e] >> i) != (this.s & this.DM) >> i &&
              (t[n++] = r | (this.s << (this.DB - i)));
              e >= 0;

            )
              i < 8
                ? ((r = (this[e] & ((1 << i) - 1)) << (8 - i)),
                  (r |= this[--e] >> (i += this.DB - 8)))
                : ((r = (this[e] >> (i -= 8)) & 255),
                  i <= 0 && ((i += this.DB), --e)),
                0 != (128 & r) && (r |= -256),
                0 == n && (128 & this.s) != (128 & r) && ++n,
                (n > 0 || r != this.s) && (t[n++] = r);
          return t;
        }),
        (n.prototype.equals = function (e) {
          return 0 == this.compareTo(e);
        }),
        (n.prototype.min = function (e) {
          return this.compareTo(e) < 0 ? this : e;
        }),
        (n.prototype.max = function (e) {
          return this.compareTo(e) > 0 ? this : e;
        }),
        (n.prototype.and = function (e) {
          var t = s();
          return this.bitwiseTo(e, f, t), t;
        }),
        (n.prototype.or = function (e) {
          var t = s();
          return this.bitwiseTo(e, p, t), t;
        }),
        (n.prototype.xor = function (e) {
          var t = s();
          return this.bitwiseTo(e, _, t), t;
        }),
        (n.prototype.andNot = function (e) {
          var t = s();
          return this.bitwiseTo(e, b, t), t;
        }),
        (n.prototype.not = function () {
          for (var e = s(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }),
        (n.prototype.shiftLeft = function (e) {
          var t = s();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }),
        (n.prototype.shiftRight = function (e) {
          var t = s();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }),
        (n.prototype.getLowestSetBit = function () {
          for (var e = 0; e < this.t; ++e)
            if (0 != this[e]) return e * this.DB + y(this[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (n.prototype.bitCount = function () {
          for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r)
            e += B(this[r] ^ t);
          return e;
        }),
        (n.prototype.testBit = function (e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t
            ? 0 != this.s
            : 0 != (this[t] & (1 << e % this.DB));
        }),
        (n.prototype.setBit = function (e) {
          return this.changeBit(e, p);
        }),
        (n.prototype.clearBit = function (e) {
          return this.changeBit(e, b);
        }),
        (n.prototype.flipBit = function (e) {
          return this.changeBit(e, _);
        }),
        (n.prototype.add = function (e) {
          var t = s();
          return this.addTo(e, t), t;
        }),
        (n.prototype.subtract = function (e) {
          var t = s();
          return this.subTo(e, t), t;
        }),
        (n.prototype.multiply = function (e) {
          var t = s();
          return this.multiplyTo(e, t), t;
        }),
        (n.prototype.divide = function (e) {
          var t = s();
          return this.divRemTo(e, t, null), t;
        }),
        (n.prototype.remainder = function (e) {
          var t = s();
          return this.divRemTo(e, null, t), t;
        }),
        (n.prototype.divideAndRemainder = function (e) {
          var t = s(),
            r = s();
          return this.divRemTo(e, t, r), new Array(t, r);
        }),
        (n.prototype.modPow = function (e, t) {
          var r,
            i,
            n = e.bitLength(),
            a = m(1);
          if (n <= 0) return a;
          (r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
            (i = n < 8 ? new h(t) : t.isEven() ? new C(t) : new g(t));
          var o = new Array(),
            l = 3,
            c = r - 1,
            u = (1 << r) - 1;
          if (((o[1] = i.convert(this)), r > 1)) {
            var f = s();
            for (i.sqrTo(o[1], f); l <= u; )
              (o[l] = s()), i.mulTo(f, o[l - 2], o[l]), (l += 2);
          }
          var p,
            _,
            b = e.t - 1,
            y = !0,
            B = s();
          for (n = d(e[b]) - 1; b >= 0; ) {
            for (
              n >= c
                ? (p = (e[b] >> (n - c)) & u)
                : ((p = (e[b] & ((1 << (n + 1)) - 1)) << (c - n)),
                  b > 0 && (p |= e[b - 1] >> (this.DB + n - c))),
                l = r;
              0 == (1 & p);

            )
              (p >>= 1), --l;
            if (((n -= l) < 0 && ((n += this.DB), --b), y))
              o[p].copyTo(a), (y = !1);
            else {
              for (; l > 1; ) i.sqrTo(a, B), i.sqrTo(B, a), (l -= 2);
              l > 0 ? i.sqrTo(a, B) : ((_ = a), (a = B), (B = _)),
                i.mulTo(B, o[p], a);
            }
            for (; b >= 0 && 0 == (e[b] & (1 << n)); )
              i.sqrTo(a, B),
                (_ = a),
                (a = B),
                (B = _),
                --n < 0 && ((n = this.DB - 1), --b);
          }
          return i.revert(a);
        }),
        (n.prototype.modInverse = function (e) {
          var t = e.isEven();
          if ((this.isEven() && t) || 0 == e.signum()) return n.ZERO;
          for (
            var r = e.clone(),
              i = this.clone(),
              s = m(1),
              a = m(0),
              o = m(0),
              l = m(1);
            0 != r.signum();

          ) {
            for (; r.isEven(); )
              r.rShiftTo(1, r),
                t
                  ? ((s.isEven() && a.isEven()) ||
                      (s.addTo(this, s), a.subTo(e, a)),
                    s.rShiftTo(1, s))
                  : a.isEven() || a.subTo(e, a),
                a.rShiftTo(1, a);
            for (; i.isEven(); )
              i.rShiftTo(1, i),
                t
                  ? ((o.isEven() && l.isEven()) ||
                      (o.addTo(this, o), l.subTo(e, l)),
                    o.rShiftTo(1, o))
                  : l.isEven() || l.subTo(e, l),
                l.rShiftTo(1, l);
            r.compareTo(i) >= 0
              ? (r.subTo(i, r), t && s.subTo(o, s), a.subTo(l, a))
              : (i.subTo(r, i), t && o.subTo(s, o), l.subTo(a, l));
          }
          return 0 != i.compareTo(n.ONE)
            ? n.ZERO
            : l.compareTo(e) >= 0
            ? l.subtract(e)
            : l.signum() < 0
            ? (l.addTo(e, l), l.signum() < 0 ? l.add(e) : l)
            : l;
        }),
        (n.prototype.pow = function (e) {
          return this.exp(e, new w());
        }),
        (n.prototype.gcd = function (e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            r = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(r) < 0) {
            var i = t;
            (t = r), (r = i);
          }
          var n = t.getLowestSetBit(),
            s = r.getLowestSetBit();
          if (s < 0) return t;
          for (
            n < s && (s = n), s > 0 && (t.rShiftTo(s, t), r.rShiftTo(s, r));
            t.signum() > 0;

          )
            (n = t.getLowestSetBit()) > 0 && t.rShiftTo(n, t),
              (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
              t.compareTo(r) >= 0
                ? (t.subTo(r, t), t.rShiftTo(1, t))
                : (r.subTo(t, r), r.rShiftTo(1, r));
          return s > 0 && r.lShiftTo(s, r), r;
        }),
        (n.prototype.isProbablePrime = function (e) {
          var t,
            r = this.abs();
          if (1 == r.t && r[0] <= v[v.length - 1]) {
            for (t = 0; t < v.length; ++t) if (r[0] == v[t]) return !0;
            return !1;
          }
          if (r.isEven()) return !1;
          for (t = 1; t < v.length; ) {
            for (var i = v[t], n = t + 1; n < v.length && i < E; ) i *= v[n++];
            for (i = r.modInt(i); t < n; ) if (i % v[t++] == 0) return !1;
          }
          return r.millerRabin(e);
        });
      const R = n;
      var F = function (e, t) {
          (this.modulus = new R(e, 16)),
            (this.encryptionExponent = new R(t, 16));
        },
        T = {
          base64:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function (e) {
            if (!e) return !1;
            var t,
              r,
              i,
              n,
              s,
              a,
              o,
              l = "",
              c = 0;
            do {
              (n = (t = e.charCodeAt(c++)) >> 2),
                (s = ((3 & t) << 4) | ((r = e.charCodeAt(c++)) >> 4)),
                (a = ((15 & r) << 2) | ((i = e.charCodeAt(c++)) >> 6)),
                (o = 63 & i),
                isNaN(r) ? (a = o = 64) : isNaN(i) && (o = 64),
                (l +=
                  this.base64.charAt(n) +
                  this.base64.charAt(s) +
                  this.base64.charAt(a) +
                  this.base64.charAt(o));
            } while (c < e.length);
            return l;
          },
          decode: function (e) {
            if (!e) return !1;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            var t,
              r,
              i,
              n,
              s = "",
              a = 0;
            do {
              (t = this.base64.indexOf(e.charAt(a++))),
                (r = this.base64.indexOf(e.charAt(a++))),
                (i = this.base64.indexOf(e.charAt(a++))),
                (n = this.base64.indexOf(e.charAt(a++))),
                (s += String.fromCharCode((t << 2) | (r >> 4))),
                64 != i &&
                  (s += String.fromCharCode(((15 & r) << 4) | (i >> 2))),
                64 != n && (s += String.fromCharCode(((3 & i) << 6) | n));
            } while (a < e.length);
            return s;
          },
        },
        M = {
          hex: "0123456789abcdef",
          encode: function (e) {
            if (!e) return !1;
            var t,
              r = "",
              i = 0;
            do {
              (t = e.charCodeAt(i++)),
                (r += this.hex.charAt((t >> 4) & 15) + this.hex.charAt(15 & t));
            } while (i < e.length);
            return r;
          },
          decode: function (e) {
            if (!e) return !1;
            e = e.replace(/[^0-9abcdef]/g, "");
            var t = "",
              r = 0;
            do {
              t += String.fromCharCode(
                ((this.hex.indexOf(e.charAt(r++)) << 4) & 240) |
                  (15 & this.hex.indexOf(e.charAt(r++)))
              );
            } while (r < e.length);
            return t;
          },
        };
      const z = {
        getPublicKey: function (e, t) {
          return new F(e, t);
        },
        encrypt: function (e, t) {
          return (
            !!t &&
            !!(e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)) &&
            !!(e = e.modPowInt(t.encryptionExponent, t.modulus)) &&
            (1 == (1 & (e = e.toString(16)).length) && (e = "0" + e),
            T.encode(M.decode(e)))
          );
        },
        pkcs1pad2: function (e, t) {
          if (t < e.length + 11) return null;
          for (var r = [], i = e.length - 1; i >= 0 && t > 0; )
            r[--t] = e.charCodeAt(i--);
          for (r[--t] = 0; t > 2; )
            r[--t] = Math.floor(254 * Math.random()) + 1;
          return (r[--t] = 2), (r[--t] = 0), new R(r);
        },
      };
    },
    92742: (e, t, r) => {
      "use strict";
      r.d(t, {
        NZ: () => i,
        TG: () => n,
        io: () => f,
        qO: () => p,
        tY: () => g,
      });
      var i,
        n,
        s = r(70655),
        a = r(22188),
        o = r(9669),
        l = r.n(o),
        c = r(58114),
        u = r(81130),
        m = (r(26149), r(90666)),
        d = r(88514),
        h = (r(99925), r(79742));
      function g(e) {
        const {
            shared_secret: t,
            identity_secret: r,
            secret_1: i,
            status: n,
            uri: a,
            server_time: o,
          } = e,
          l = (0, s._T)(e, [
            "shared_secret",
            "identity_secret",
            "secret_1",
            "status",
            "uri",
            "server_time",
          ]);
        return Object.assign(
          {
            shared_secret: h.JQ(t),
            identity_secret: h.JQ(r),
            secret_1: h.JQ(i),
          },
          l
        );
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Generic = 1)] = "Generic"),
          (e[(e.Expired = 2)] = "Expired");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_Success = 0)] = "k_Success"),
            (e[(e.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
            (e[(e.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail");
        })(n || (n = {}));
      class f {
        constructor(e, t, r) {
          (this.m_bRemoteInteraction = !1),
            (this.m_eFailureState = i.None),
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            try {
              const e = c.gA.Init(d.Uy);
              e.Body().set_client_id(this.m_strClientID),
                e.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  e.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const t = yield d.$h.PollAuthSessionStatus(this.m_transport, e),
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
                    ? (this.m_eFailureState = i.Expired)
                    : (console.error(
                        `Failed to poll auth session. Result: ${r}`
                      ),
                      (this.m_eFailureState = i.Generic)),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              }
              const {
                new_challenge_url: n,
                new_client_id: s,
                refresh_token: a,
                access_token: o,
                account_name: l,
                had_remote_interaction: u,
              } = t.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!u),
                a
                  ? (this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: a,
                      strAccessToken: o,
                      strAccountName: l,
                    }),
                    r)
                  : (n && (this.m_strChallengeURL = n),
                    s && (this.m_strClientID = s),
                    (this.m_activeTimerID = window.setTimeout(
                      this.PollForUpdate,
                      this.m_msPollInterval
                    )),
                    r)
              );
            } catch (e) {
              return (
                console.error(`Failed to poll auth session. ${e}`),
                (this.m_eFailureState = i.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        SetTokenToRevoke(e) {
          this.m_strTokenToRevoke = e;
        }
        GetFailureState() {
          return this.m_eFailureState;
        }
        BHadRemoteInteraction() {
          return this.m_bRemoteInteraction;
        }
      }
      function p(e) {
        const t = new FormData();
        t.append("nonce", e),
          t.append("sessionid", m.De.SESSIONID),
          t.append("redir", document.location.href);
        const r = `${m.De.LOGIN_BASE_URL}jwt/finalizelogin`;
        return l()
          .post(r, t, { withCredentials: !0 })
          .then(
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
                  n.k_PrimaryDomainFail
                );
              const { transfer_info: r, steamID: i, primary_domain: a } = t;
              return Promise.all(
                r.map(({ url: e, params: t }) =>
                  (function (e, t) {
                    return (0, s.mG)(this, void 0, void 0, function* () {
                      const r = new URL(e);
                      let i = !0;
                      try {
                        const n = new FormData();
                        Object.keys(t).forEach((e) => n.append(e, t[e]));
                        const s = yield l().post(e, n, {
                          withCredentials: !0,
                          timeout: 1e4,
                        });
                        200 !== s.status
                          ? (console.error(
                              `Transfer login to ${r.host} failed with status code: ${s.status}`
                            ),
                            (i = !1))
                          : 1 !== s.data.result &&
                            (console.error(
                              `Transfer login to ${r.host} failed with result: ${s.data.result}`
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
                    let r = n.k_Success;
                    return (
                      e.forEach((e) => {
                        e.bSuccess ||
                          (t && e.domain.toLowerCase() === t.toLowerCase()
                            ? (r = n.k_PrimaryDomainFail)
                            : r == n.k_Success &&
                              (r = n.k_SecondaryDomainFail));
                      }),
                      r
                    );
                  })(e, a),
                () => n.k_SecondaryDomainFail
              );
            },
            () => (
              console.error("Failed to finalize login. Initial call failed."),
              n.k_PrimaryDomainFail
            )
          );
      }
      (0, s.gn)([a.LO], f.prototype, "m_strChallengeURL", void 0),
        (0, s.gn)([a.LO], f.prototype, "m_bRemoteInteraction", void 0),
        (0, s.gn)([a.LO], f.prototype, "m_eFailureState", void 0),
        (0, s.gn)([u.a], f.prototype, "PollForUpdate", null),
        (0, s.gn)([u.a], f.prototype, "SetTokenToRevoke", null);
    },
    75255: (e, t, r) => {
      "use strict";
      r.d(t, { He: () => d, IC: () => m, p1: () => c, yI: () => u });
      var i = r(70655),
        n = r(9669),
        s = r.n(n);
      const a = r(73474).Z;
      function o(e, t) {
        return e.endsWith("/") || (e += "/"), `${e}login/${t}/`;
      }
      function l() {
        let e = new FormData();
        return e.append("donotcache", new Date().getTime().toString()), e;
      }
      function c(e) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          let t = l(),
            r = o(e, "refreshcaptcha"),
            i = "";
          try {
            let e = yield s().post(r, t);
            if (200 != e.status) return !1;
            i = e.data.gid;
          } catch (e) {
            return !1;
          }
          return i;
        });
      }
      function u(e, t) {
        return o(e, "rendercaptcha") + `?gid=${t}`;
      }
      function m(e, t) {
        let r = a.getPublicKey(t.publickey_mod, t.publickey_exp),
          i = a.encrypt(e, r);
        return !1 === i ? null : i;
      }
      function d(e, t, r) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (
            ((r = Object.assign({}, r)).strUserName &&
              (r.strUserName = r.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !r.strPassword || r.strPassword.match(/[^\x00-\x7F]/))
          )
            return null;
          if (!r.strUserName) return null;
          let n = yield (function (e, t) {
            return (0, i.mG)(this, void 0, void 0, function* () {
              let r = l();
              r.append("username", t);
              let i,
                n = o(e, "getrsakey");
              try {
                let e = yield s().post(n, r);
                if (200 != e.status) return null;
                let t = e.data;
                if (
                  !(
                    t &&
                    t.success &&
                    t.publickey_mod &&
                    t.publickey_exp &&
                    t.timestamp
                  )
                )
                  return null;
                i = t;
              } catch (e) {
                return null;
              }
              return i;
            });
          })(e, r.strUserName);
          if (!n) return console.log("Failed to get RSA key"), null;
          let a = yield (function (e, t, r, n) {
            return (0, i.mG)(this, void 0, void 0, function* () {
              const i = m(r.strPassword, n);
              if (!i) return null;
              let a = l();
              a.append("password", i),
                a.append("username", r.strUserName),
                a.append("twofactorcode", r.strTwoFactorCode || ""),
                a.append("emailauth", r.strEmailAuthCode || ""),
                a.append("loginfriendlyname", ""),
                a.append("captchagid", r.gidCaptcha || ""),
                a.append("captcha_text", r.strCaptchaText || ""),
                a.append("emailsteamid", r.emailSteamID || ""),
                a.append("rsatimestamp", n.timestamp),
                a.append("remember_login", r.bRememberLogin ? "true" : "false");
              let c = {};
              t &&
                (a.append("oauth_client_id", t),
                a.append("mobile_chat_client", "true"));
              let u,
                d = o(e, "dologin");
              try {
                let e = yield s().post(d, a, c);
                if (200 != e.status) return null;
                let t = e.data;
                if (!t) return null;
                t.oauth && (t.oauth = JSON.parse(t.oauth)), (u = t);
              } catch (e) {
                return null;
              }
              return u;
            });
          })(e, t, r, n);
          return a;
        });
      }
    },
    28274: (e, t, r) => {
      "use strict";
      r.d(t, { wK: () => X, pT: () => j });
      var i = r(70655),
        n = r(67294),
        s = r(58114),
        a = r(7573),
        o = r(22188),
        l = r(9669),
        c = r.n(l),
        u = r(90666),
        m = r(92742),
        d = (r(26149), r(13271)),
        h = r(22975),
        g = r(75255),
        f = r(88514),
        p = (r(21205), r(65902)),
        _ = r(99925);
      class b extends m.io {
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
          return (0, i.mG)(this, void 0, void 0, function* () {
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
                return (0, i.mG)(this, void 0, void 0, function* () {
                  const r = s.gA.Init(f.kp);
                  r.Body().set_account_name(t);
                  try {
                    const t = yield f.$h.GetPasswordRSAPublicKey(e, r);
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
                      timestamp: s,
                    } = t.Body().toObject();
                    return i && n && s
                      ? { publickey_exp: i, publickey_mod: n, timestamp: s }
                      : (console.error(
                          `Missing expected field in RSA Key: ${JSON.stringify({
                            publickey_exp: i,
                            publickey_mod: n,
                            timestamp: s,
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
              const a = (0, g.IC)(t, n),
                l = s.gA.Init(f._u);
              l.Body().set_account_name(e),
                l.Body().set_encrypted_password(a),
                l.Body().set_encryption_timestamp(n.timestamp),
                l.Body().set_remember_login(!!r),
                l.Body().set_platform_type(this.m_ePlatformType),
                l.Body().set_device_friendly_name(window.navigator.userAgent),
                l.Body().set_persistence(r ? 1 : 0);
              const d = yield f.$h.BeginAuthSessionViaCredentials(
                this.m_transport,
                l
              );
              return (0, o.z)(() =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  const t = d.GetEResult(),
                    r = d.Hdr().transport_error();
                  if (1 !== t)
                    return 5 === t
                      ? ((this.m_eStatus = 2), t)
                      : (console.error(
                          `Failed to start auth session. Result: ${t} Transport: ${r}`
                        ),
                        (this.m_eFailureState = m.NZ.Generic),
                        this.m_onCompleteCallback({ bSuccess: !1 }),
                        t);
                  this.m_strAccountName = e;
                  const {
                    client_id: i,
                    request_id: n,
                    interval: s,
                    allowed_confirmations: a,
                    steamid: o,
                    weak_token: l,
                  } = d.Body().toObject();
                  if (
                    ((this.m_msPollInterval = 1e3 * s),
                    (this.m_strClientID = i),
                    (this.m_rgRequestID = n),
                    (this.m_steamid = o),
                    (this.m_strWeakAuthToken = l),
                    a.find(({ confirmation_type: e }) => 6 === e))
                  ) {
                    const e = new FormData();
                    e.append("sessionid", u.De.SESSIONID),
                      e.append("clientid", i),
                      e.append("steamid", this.m_steamid);
                    const t = `${u.De.LOGIN_BASE_URL}jwt/checkdevice`;
                    try {
                      if (
                        1 ==
                        (yield c().post(t, e, { withCredentials: !0 })).data
                          .result
                      )
                        return (this.m_eStatus = 4), this.StartPolling(!0), 1;
                    } catch (e) {
                      console.log(`checkdevice ajax failed: ${e.message}`);
                    }
                  }
                  const h = (function (e) {
                      let t = e[0] || 0;
                      e.length > 1 && (t = e.sort((e, t) => y[e] - y[t])[0]);
                      return t;
                    })(a.map(({ confirmation_type: e }) => e)),
                    g = a.find(({ confirmation_type: e }) => e === h);
                  switch (
                    (g &&
                      g.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        g.associated_message),
                    h)
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
                (this.m_eFailureState = m.NZ.Generic),
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            try {
              const r = 3 === this.m_eStatus || 10 === this.m_eStatus,
                i = s.gA.Init(f.Am);
              i.Body().set_client_id(this.m_strClientID),
                i.Body().set_steamid(this.m_steamid),
                i.Body().set_code(e),
                i.Body().set_code_type(r ? 2 : 3);
              const n = (yield f.$h.UpdateAuthSessionWithSteamGuardCode(
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
                      (this.m_eFailureState = m.NZ.Expired),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      n
                    );
                  default:
                    return (
                      console.error(
                        `Failed to update auth session with SG code. Result: ${n}`
                      ),
                      (this.m_eFailureState = m.NZ.Generic),
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
                (this.m_eFailureState = m.NZ.Generic),
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.m_weakAuthWebInterface = new p.J(
              u.De.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken
            );
            try {
              const e = s.gA.Init(_._w),
                t = yield _.Sz.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  e
                );
              1 != t.GetEResult()
                ? (t.DEBUG_LogToConsole(),
                  console.error(
                    "An unexpected error occured while adding an authenticator",
                    t.GetEResult()
                  ),
                  (this.m_eFailureState = m.NZ.Generic),
                  (this.m_eStatus = 15))
                : (console.log("Server sent us an SMS"), (this.m_eStatus = 8));
            } catch (e) {
              console.error(
                "An unexpected error occured while moving an authenticator",
                e
              ),
                (this.m_eFailureState = m.NZ.Generic),
                (this.m_eStatus = 15);
            }
          });
        }
        ResendMoveCode() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e = s.gA.Init(_._w),
              t = yield _.Sz.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                e
              );
            1 != t.GetEResult()
              ? (t.DEBUG_LogToConsole(),
                console.error(
                  "An unexpected error occured while adding an authenticator",
                  t.GetEResult()
                ),
                (this.m_eFailureState = m.NZ.Generic),
                (this.m_eStatus = 15))
              : (console.log("Server resent us an SMS"), (this.m_eStatus = 8));
          });
        }
        FinishMoveAuthenticator(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = s.gA.Init(_.AX);
            t.Body().set_sms_code(e), t.Body().set_generate_new_token(!0);
            const r = yield _.Sz.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              t
            );
            94 == r.GetEResult()
              ? (console.log(`Invalid SMS code for authenticator move ${e}`),
                (this.m_eStatus = 12))
              : r.Body().success()
              ? ((this.m_replacementAuthenticator = (0, m.tY)(
                  r.Body().replacement_token().toObject()
                )),
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
                (this.m_eFailureState = m.NZ.Generic),
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
      (0, i.gn)([o.LO], b.prototype, "m_eStatus", void 0),
        (0, i.gn)([h.ak], b.prototype, "Start", null),
        (0, i.gn)([h.ak], b.prototype, "SendSteamGuardCode", null),
        (0, i.gn)([h.ak], b.prototype, "UseCodeOverride", null),
        (0, i.gn)([h.ak], b.prototype, "CantAccessCode", null),
        (0, i.gn)([h.ak], b.prototype, "StartMoveAuthenticator", null),
        (0, i.gn)([h.ak], b.prototype, "ResendMoveCode", null),
        (0, i.gn)([h.ak], b.prototype, "FinishMoveAuthenticator", null),
        (0, i.gn)([h.ak], b.prototype, "FinishMoveRecovery", null),
        (0, i.gn)([h.ak], b.prototype, "GoBack", null);
      const y = [4, 3, 2, 1, 0, 5].reduce((e, t, r) => ((e[t] = r), e), {});
      function B(e) {
        return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= 5;
      }
      function w(e) {
        return B(e) && 5 === e.length;
      }
      class S extends m.io {
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (0 !== this.m_eStatus)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance."
                ),
                2
              );
            this.m_eStatus = 1;
            try {
              const e = s.gA.Init(f.oZ);
              e.Body().set_platform_type(this.m_ePlatformType),
                e.Body().set_device_friendly_name(window.navigator.userAgent);
              const t = yield f.$h.BeginAuthSessionViaQR(this.m_transport, e),
                r = t.GetEResult(),
                i = t.Hdr().transport_error();
              if (1 !== r)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${r} Transport: ${i}`
                  ),
                  (this.m_eFailureState = m.NZ.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              const {
                client_id: n,
                challenge_url: a,
                interval: o,
                request_id: l,
              } = t.Body().toObject();
              return (
                (this.m_strClientID = n),
                (this.m_strChallengeURL = a),
                (this.m_msPollInterval = 1e3 * o),
                (this.m_rgRequestID = l),
                (this.m_eStatus = 2),
                this.StartPolling(!1),
                r
              );
            } catch (e) {
              return (
                console.error(`Failed to start auth session. ${e}`),
                (this.m_eFailureState = m.NZ.Generic),
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
      (0, i.gn)([o.LO], S.prototype, "m_eStatus", void 0);
      var C,
        v = r(62906),
        E = r.n(v),
        R = r(36876),
        F = r.n(R),
        T = r(72036),
        M = r.n(T);
      function z(e) {
        let {
          quality: t = C.M,
          children: r,
          className: i,
          activeBitColor: s = null,
          inactiveBitColor: o = null,
          borderWidth: l = 3,
        } = e;
        const c = (function (e, t = {}) {
          const { typeNumber: r, errorCorrectLevel: i } = t,
            [s, a] = (0, n.useState)();
          return (
            (0, n.useEffect)(() => {
              a(F()(e, { typeNumber: r, errorCorrectLevel: i }).modules);
            }, [e, r, i]),
            s
          );
        })(r, { typeNumber: 6, errorCorrectLevel: t });
        if (!c) return null;
        let u = [];
        for (let e = 0; e < l; e++) u.push(Array(c.length + 2 * l).fill(!1));
        for (let e = 0; e < c.length; e++)
          u.push([].concat(Array(l).fill(!1), c[e], Array(l).fill(!1)));
        for (let e = 0; e < l; e++) u.push(Array(c.length + 2 * l).fill(!1));
        const m = [],
          d = (0, a.Z)(M().Bit),
          h = (0, a.Z)(M().Bit, M().Active),
          g = null !== s ? { backgroundColor: s } : {},
          f = null !== o ? { backgroundColor: o } : {};
        for (let e = 0; e < u.length; e++)
          for (let t = 0; t < u.length; t++) {
            const r = u[e][t];
            m.push(
              n.createElement("div", {
                key: `${e}_${t}`,
                className: r ? h : d,
                style: r ? g : f,
              })
            );
          }
        let p = u.length;
        return n.createElement(
          "div",
          {
            className: (0, a.Z)(M().QRBits, i),
            style: { gridTemplateColumns: `repeat( ${p}, 1fr )` },
          },
          m
        );
      }
      !(function (e) {
        (e[(e.L = 1)] = "L"),
          (e[(e.M = 0)] = "M"),
          (e[(e.Q = 3)] = "Q"),
          (e[(e.H = 2)] = "H");
      })(C || (C = {}));
      var A = r(1105),
        k = r.n(A);
      r(92398);
      function x(e) {
        const {
            transport: t,
            onComplete: r,
            onStatusChange: i,
            platform: s,
          } = e,
          {
            eStatus: o,
            strChallengeURL: l,
            bHadRemoteInteraction: c,
            reset: m,
            setTokenToRevoke: h,
          } = (function (e) {
            const [t, r] = (0, n.useState)(new S(e));
            return (
              (0, n.useEffect)(
                () => (
                  t.Start(),
                  () => {
                    t.Stop();
                  }
                ),
                [t]
              ),
              (0, d.SZ)(() => ({
                strChallengeURL: t.GetChallengeURL(),
                eFailureStatue: t.GetFailureState(),
                eStatus: t.GetStatus(),
                bHadRemoteInteraction: t.BHadRemoteInteraction(),
                reset: () => r(new S(e)),
                setTokenToRevoke: t.SetTokenToRevoke,
              }))
            );
          })({ transport: t, onComplete: r, ePlatformType: s });
        (0, n.useEffect)(() => i && i(o), [i, o]);
        const g = 2 === o ? l : u.De.STORE_BASE_URL,
          f = 0 === o || 1 === o || c,
          p = 4 === o,
          _ = 3 === o,
          b = f || p || _;
        return (
          (0, n.useEffect)(() => {
            var t;
            (null === (t = e.refreshInfo) || void 0 === t
              ? void 0
              : t.login_token_id) && h(e.refreshInfo.login_token_id);
          }, [e.refreshInfo]),
          n.createElement(
            "div",
            { className: k().Column },
            n.createElement(
              "div",
              null,
              n.createElement(
                z,
                {
                  borderWidth: 0,
                  activeBitColor: "#212328",
                  inactiveBitColor: "white",
                  quality: O(g),
                  className: (0, a.Z)(k().LoginQR, b && k().Blur),
                },
                g
              ),
              b &&
                n.createElement(
                  "div",
                  { className: k().Overlay },
                  n.createElement(
                    "div",
                    { className: k().Box },
                    f && n.createElement(N, { size: "small" }),
                    p && n.createElement(L, { reset: m }),
                    _ && n.createElement(W, null)
                  )
                )
            )
          )
        );
      }
      function O(e) {
        return e.length <= 90 ? C.Q : void 0;
      }
      function N(e) {
        const { size: t } = e;
        return n.createElement("div", {
          className: (0, a.Z)(
            k().Loading,
            "small" == t && k().Small,
            ("medium" == t || !t) && k().Medium,
            "large" == t && k().Large
          ),
        });
      }
      function L(e) {
        return n.createElement(
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
          n.createElement("path", {
            fill: "none",
            stroke: "#fff",
            strokeWidth: "30",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
          }),
          n.createElement("polygon", {
            points: "147.639,108.361 245.755,10.166 245.834,108.361",
            fill: "#fff",
          })
        );
      }
      function W() {
        return n.createElement(
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
          n.createElement("polyline", {
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
      var D = r(41311),
        V = r(13596);
      const I = (0, n.createContext)(!1),
        H = () => (0, n.useContext)(I);
      function j() {
        return n.createElement(
          "div",
          { className: E().Login },
          n.createElement(ce, {
            reset: () => window.location.reload(),
            failure: m.NZ.Generic,
          })
        );
      }
      function X(e) {
        return n.createElement(
          U,
          Object.assign({}, e, {
            onSuccess: (t) => {
              const { strRefreshToken: r } = t;
              (0, m.qO)(r).then(
                (t) => e.onComplete(t),
                () => e.onComplete(m.TG.k_PrimaryDomainFail)
              );
            },
            embedded: "modal" === e.theme,
          })
        );
      }
      function U(e) {
        const { embedded: t } = e,
          r = (0, i._T)(e, ["embedded"]);
        return n.createElement(
          I.Provider,
          { value: t },
          n.createElement(
            "div",
            { className: E().Login },
            n.createElement(P, Object.assign({}, r))
          )
        );
      }
      function P(e) {
        const {
            transport: t,
            onSuccess: r,
            platform: i,
            disableQR: s,
            autoFocus: a,
            refreshInfo: o,
            renderSuccess: l = () => n.createElement(Me, null),
          } = e,
          c = ({
            bSuccess: e,
            strRefreshToken: t,
            strAccessToken: i,
            strAccountName: n,
          }) => {
            e &&
              r({ strRefreshToken: t, strAccessToken: i, strAccountName: n });
          };
        let {
          eStatus: h,
          eFailureState: g,
          strConfirmationAssociatedMessage: f,
          strAccountName: p,
          start: _,
          reset: y,
          addCode: B,
          goBack: w,
          useCodeOverride: S,
          setTokenToRevoke: C,
        } = (function (e) {
          const [t, r] = (0, n.useState)(new b(e));
          return (0, d.SZ)(() => ({
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
            reset: () => r(new b(e)),
            goBack: t.GoBack,
            setTokenToRevoke: t.SetTokenToRevoke,
          }));
        })({ transport: t, onComplete: c, ePlatformType: i });
        const [v, R] = (0, n.useState)(0),
          F = H(),
          T = !(0 === h || 1 === h || 2 === h),
          M = ({ strAccountName: e, strPassword: t, bRememberMe: r }) =>
            _(e, t, r);
        if (
          ((0, n.useEffect)(() => {
            var t;
            (null === (t = e.refreshInfo) || void 0 === t
              ? void 0
              : t.login_token_id) && C(e.refreshInfo.login_token_id);
          }, [e.refreshInfo]),
          !T)
        ) {
          const r = n.createElement(
            "div",
            { className: E().SideBySide },
            n.createElement(q, {
              onSubmit: M,
              status: h,
              autoFocus: a,
              refreshInfo: e.refreshInfo,
            }),
            !s &&
              n.createElement(Q, {
                transport: t,
                onQRStatusChange: R,
                onComplete: c,
                platform: i,
                refreshInfo: o,
              })
          );
          if (F) {
            let e = u.De.IN_CLIENT;
            return n.createElement(
              Se,
              { gap: u.De.IN_LOGIN ? 36 : void 0, className: E().EmbeddedRoot },
              !e && !1,
              u.De.IN_LOGIN &&
                n.createElement(Te, { className: E().HeaderLogo }),
              n.createElement(G, { refreshInfo: o }),
              !e && n.createElement(Z, null),
              r,
              n.createElement(
                "div",
                { className: E().EmbeddedRootFooter },
                n.createElement(
                  Be,
                  {
                    href: `${
                      u.De.HELP_BASE_URL
                    }wizard/HelpWithLogin?redir=${encodeURIComponent(
                      document.location.href
                    )}`,
                  },
                  (0, D.Xx)("#Login_Help_SignIn")
                ),
                n.createElement(
                  "div",
                  { className: E().AccountCreation },
                  n.createElement(
                    "span",
                    { className: E().AccountCreationPrompt },
                    (0, D.Xx)("#Login_NoSteamAccount")
                  ),
                  n.createElement(
                    Be,
                    { inline: !0, href: `${u.De.STORE_BASE_URL}join/` },
                    (0, D.Xx)("#Login_CreateAccount")
                  )
                )
              )
            );
          }
          const l = n.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
            },
            !1,
            n.createElement(
              "div",
              { className: E().PrimaryHeader },
              e.refreshInfo
                ? (0, D.Xx)("#Login_RefreshSignIn")
                : (0, D.Xx)("#Login_SignIn")
            ),
            n.createElement(G, { refreshInfo: e.refreshInfo }),
            n.createElement(Z, null)
          );
          return n.createElement(Fe, { title: l }, r);
        }
        switch (h) {
          case 1:
          case 13:
            return n.createElement(le, null);
          case 5:
          case 11:
          case 3:
          case 10:
            const e = 5 === h || 11 === h;
            return n.createElement(me, {
              type: e ? "mobile" : "email",
              onSubmitCode: B,
              status: h,
              associatedLabel: f,
              accountName: p,
              onBack: w,
            });
          case 6:
          case 4:
            const t = 6 === h;
            return n.createElement(ye, {
              type: t ? "mobile" : "email",
              accountName: p,
              onUseCodeOverride: S,
            });
          case 16:
            return n.createElement(ue, { reset: y });
          case 15:
            return n.createElement(ce, { reset: y, failure: g });
          case 14:
            return n.createElement(Fe, { compact: !0 }, l());
          default:
            return (
              console.error(`Unknown Phase: ${h}`),
              n.createElement(ce, { reset: y, failure: m.NZ.Generic })
            );
        }
      }
      function G(e) {
        var t, r;
        if (!u.De.IN_LOGIN_REFRESH) return null;
        let i;
        switch (
          null !==
            (r =
              null === (t = e.refreshInfo) || void 0 === t
                ? void 0
                : t.reason) && void 0 !== r
            ? r
            : 2
        ) {
          case 2:
          case 7:
          default:
            i = "#Login_RefreshReason_Generic";
            break;
          case 6:
            i = "#Login_RefreshReason_LoggedInElsewhere";
            break;
          case 34:
            i = "#Login_RefreshReason_LogonSessionReplaced";
            break;
          case 5:
            i = "#Login_RefreshReason_InvalidPassword";
            break;
          case 26:
            i = "#Login_RefreshReason_Revoked";
            break;
          case 27:
            i = "#Login_RefreshReason_Expired";
            break;
          case 49:
            i = "#Login_RefreshReason_PasswordRequiredToKickSession";
            break;
          case 43:
            i = "#Login_RefreshReason_AccountDisabled";
            break;
          case 69:
            i = "#Login_RefreshReason_ParentalControlRestricted";
            break;
          case 84:
            i = "#Login_RefreshReason_RateLimitExceeded";
        }
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: E().RefreshTitle },
            (0, D.Xx)("#Login_RefreshSignIn")
          ),
          n.createElement("div", { className: E().RefreshReason }, (0, D.Xx)(i))
        );
      }
      function Z() {
        let e;
        return (
          (e =
            window.location.href.includes("?") &&
            window.location.href.indexOf("vlogin") >
              window.location.href.indexOf("?")
              ? window.location.href.slice(
                  0,
                  window.location.href.indexOf("vlogin") - 1
                )
              : window.location.href.includes("?")
              ? window.location.href + "&oldauth=1"
              : window.location.href + "?oldauth=1"),
          n.createElement(
            "div",
            { style: { fontSize: "12px" } },
            (0, D.yu)(
              "#Login_SignIn_EscapeHatch",
              n.createElement("a", {
                href: e,
                style: { textDecoration: "underline" },
              })
            )
          )
        );
      }
      function q(e) {
        var t;
        const {
            onSubmit: r,
            status: i,
            autoFocus: s,
            refreshInfo: a,
            rememberMeDefault: o = !0,
          } = e,
          [l, c] = (0, n.useState)(
            null !== (t = null == a ? void 0 : a.account_name) && void 0 !== t
              ? t
              : ""
          ),
          [m, d] = (0, n.useState)(""),
          [h, g] = (0, n.useState)(o),
          [f, p] = (0, n.useState)(!1),
          _ = H(),
          b = 2 === i && !f,
          y = b
            ? n.createElement(oe, null, (0, D.Xx)("#Login_CheckCredentials"))
            : n.createElement(oe, null, " "),
          B = s && !a,
          w = s && !!a;
        return n.createElement(
          we,
          {
            onSubmit: () => {
              f &&
                r({ strAccountName: l, strPassword: m, bRememberMe: h }).then(
                  () => p(!1)
                );
            },
            className: E().LoginForm,
          },
          n.createElement($, {
            tone: b ? "danger" : void 0,
            label: n.createElement(
              K,
              { highlight: !0 },
              (0, D.Xx)("#Login_SignIn_WithAccountName")
            ),
            value: l,
            onChange: (e) => {
              p(!0), c(e);
            },
            autoFocus: B,
            disabled: u.De.IN_LOGIN_REFRESH,
          }),
          n.createElement($, {
            tone: b ? "danger" : void 0,
            label: n.createElement(K, null, (0, D.Xx)("#Login_Password")),
            value: m,
            onChange: (e) => {
              p(!0), d(e);
            },
            type: "password",
            autoFocus: w,
          }),
          n.createElement(ee, {
            label: (0, D.Xx)("#Login_RememberMe_Short"),
            value: h,
            onChange: g,
          }),
          n.createElement(re, null),
          y,
          !_ &&
            n.createElement(
              Be,
              {
                href: `${
                  u.De.HELP_BASE_URL
                }wizard/HelpWithLogin?redir=${encodeURIComponent(
                  document.location.href
                )}`,
                align: "center",
              },
              (0, D.Xx)("#Login_Help_SignIn")
            )
        );
      }
      function Q(e) {
        const {
            onQRStatusChange: t,
            transport: r,
            onComplete: i,
            platform: s,
            refreshInfo: o,
          } = e,
          [l, c] = (0, n.useState)(!1);
        return n.createElement(
          "div",
          { className: E().QRSection },
          n.createElement(
            "button",
            {
              className: (0, a.Z)(E().ScanQRButton, l ? E().HideButton : ""),
              onClick: () => c(!l),
            },
            n.createElement(be, { className: E().QRIcon }),
            (0, D.Xx)("#Login_ScanAQRCode_Button")
          ),
          n.createElement(
            "div",
            { className: (0, a.Z)(E().QRCodeContainer, l ? E().ShowQR : "") },
            n.createElement(
              K,
              { highlight: !0 },
              (0, D.Xx)("#Login_SignIn_OrWithQRCode")
            ),
            n.createElement(
              "div",
              { className: E().QR },
              n.createElement(x, {
                onStatusChange: t,
                transport: r,
                onComplete: i,
                platform: s,
                refreshInfo: o,
              })
            )
          ),
          n.createElement(
            "div",
            { className: E().UseMobileAppForQR },
            (0, D.yu)(
              "#Login_UseMobileAppForQR_Inline",
              n.createElement(Be, {
                href: `${u.De.STORE_BASE_URL}mobile`,
                align: "center",
              })
            )
          )
        );
      }
      function $(e) {
        const { label: t, error: r, tone: s, autoFocus: a } = e,
          o = (0, i._T)(e, ["label", "error", "tone", "autoFocus"]),
          l = null != s ? s : r ? "danger" : void 0;
        return n.createElement(
          "div",
          { className: E().TextField },
          "string" == typeof t ? n.createElement(K, null, t) : t,
          n.createElement(Y, { type: "error" }, r),
          n.createElement(J, Object.assign({ autoFocus: a, tone: l }, o))
        );
      }
      function K(e) {
        const { children: t, highlight: r } = e;
        return n.createElement(
          "div",
          { className: (0, a.Z)(E().FieldLabel, r && E().Highlight) },
          t
        );
      }
      function J(e) {
        const {
          value: t,
          onChange: r,
          type: i = "text",
          tone: s,
          className: o,
          autoFocus: l,
          disabled: c,
        } = e;
        return n.createElement("input", {
          value: t,
          type: i,
          autoFocus: l,
          onChange: (e) => r(e.target.value),
          className: (0, a.Z)(E().TextInput, "danger" === s && E().Danger, o),
          disabled: c,
        });
      }
      function Y(e) {
        const { children: t, type: r } = e;
        return n.createElement(
          "div",
          { className: (0, a.Z)(E().FieldHint, "error" === r && E().Error) },
          t
        );
      }
      function ee(e) {
        const { label: t, onChange: r, value: i } = e;
        let s = () => {
          r && r(!i);
        };
        return n.createElement(
          "div",
          {
            className: E().CheckboxField,
            onClick: s,
            onKeyPress: (e) => {
              " " == e.key && s();
            },
          },
          n.createElement(te, { value: i }),
          n.createElement("div", { className: E().CheckboxFieldLabel }, t)
        );
      }
      function te(e) {
        const { value: t } = e;
        return n.createElement(
          "div",
          { tabIndex: 0, className: E().Checkbox },
          t && n.createElement("div", { className: E().Check })
        );
      }
      function re(e) {
        var t;
        return u.De.IN_LOGIN_REFRESH &&
          (null === (t = SteamClient.User) || void 0 === t
            ? void 0
            : t.StartShutdown)
          ? n.createElement(ne, null)
          : n.createElement(ie, null);
      }
      function ie() {
        return n.createElement(
          "div",
          { className: E().SignInButtonContainer },
          n.createElement(se, null, (0, D.Xx)("#Login_SignIn"))
        );
      }
      function ne() {
        return n.createElement(
          "div",
          { className: E().RefreshButtonContainer },
          n.createElement(
            "button",
            { className: E().SubmitButton, type: "submit" },
            (0, D.Xx)("#Login_SignIn")
          ),
          n.createElement(
            "button",
            {
              className: E().RefreshQuitButton,
              onClick: () => {
                SteamClient.User.StartShutdown(!0);
              },
            },
            (0, D.Xx)("#Login_ExitSteam")
          )
        );
      }
      function se(e) {
        return n.createElement(ae, Object.assign({ type: "submit" }, e));
      }
      function ae(e) {
        return n.createElement(
          "button",
          Object.assign({ className: E().SubmitButton }, e)
        );
      }
      function oe(e) {
        const t = e.children || " ";
        return n.createElement("div", { className: E().FormError }, t);
      }
      function le() {
        return n.createElement(
          Fe,
          { compact: !0 },
          n.createElement(
            Se,
            { alignItems: "center" },
            n.createElement(V.V, null)
          )
        );
      }
      function ce(e) {
        const { reset: t, failure: r } = e,
          { title: i, description: s } = (function (e) {
            switch (e) {
              case m.NZ.None:
                return { title: "", description: "" };
              case m.NZ.Expired:
                return {
                  title: (0, D.Xx)("#Login_Error_Expired_Title"),
                  description: (0, D.Xx)("#Login_Error_Expired_Description"),
                };
              case m.NZ.Generic:
              default:
                return {
                  title: (0, D.Xx)("#Error_Generic"),
                  description: (0, D.Xx)("#Login_Error_Default_Description"),
                };
            }
          })(r);
        return n.createElement(
          Fe,
          { compact: !0 },
          n.createElement(
            Se,
            { alignItems: "center", gap: 12 },
            n.createElement("div", { className: E().FailureTitle }, i),
            n.createElement("div", { className: E().FailureDescription }, s),
            n.createElement(ae, { onClick: t }, (0, D.Xx)("#Button_Back"))
          )
        );
      }
      function ue(e) {
        const { reset: t } = e;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement("div", null, "The login process was stopped."),
          n.createElement("button", { onClick: t }, "Reset")
        );
      }
      function me(e) {
        const {
            type: t,
            onSubmitCode: r,
            status: i,
            accountName: s,
            associatedLabel: a,
            onBack: o,
          } = e,
          [l, c] = (0, n.useState)([]),
          [m, d] = (0, n.useState)(!1),
          [h, g] = (0, n.useState)(!1),
          f = l.join(""),
          p = w(f),
          _ = (e) => {
            g(!0),
              r(e).then(() => {
                d(!1), g(!1);
              });
          },
          b = !m && (11 === i || 10 === i),
          y = n.createElement(
            Be,
            {
              href: `${u.De.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`,
              align: "center",
            },
            (0, D.Xx)("#Login_Help_AccessMobileApp")
          );
        return n.createElement(
          Fe,
          {
            title: (0, D.Xx)("#Login_Title_SteamGuard"),
            bottom: y,
            compact: !0,
          },
          n.createElement(
            we,
            {
              onSubmit: () => {
                p && _(f);
              },
            },
            n.createElement(
              Se,
              { alignItems: "center", gap: 20 },
              n.createElement(ge, { type: t, accountName: s }),
              n.createElement(
                Se,
                { alignItems: "center", gap: 2 },
                b &&
                  n.createElement(
                    oe,
                    null,
                    (0, D.Xx)("#Login_IncorrectSteamGuard")
                  ),
                n.createElement(ve, {
                  value: l,
                  onChange: (e) => {
                    m || d(!0), c(e);
                    const t = e.join("");
                    w(t) && _(t);
                  },
                  tone: b ? "danger" : void 0,
                  loading: h,
                })
              ),
              "mobile" === t
                ? n.createElement(de, null)
                : n.createElement(he, { emailAddress: a })
            )
          )
        );
      }
      function de() {
        return n.createElement(
          Ce,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: E().EnterCodeFromMobileContainer,
          },
          n.createElement(
            "div",
            { className: E().EnterCodeFromMobile },
            (0, D.Xx)("#Login_EnterMobileCode")
          ),
          n.createElement(pe, { className: E().AwaitingMobileConfIcon })
        );
      }
      function he(e) {
        return n.createElement(
          Ce,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: E().EnterCodeFromEmailContainer,
          },
          n.createElement(
            Re,
            { align: "center", spacing: 6 },
            n.createElement(
              "div",
              { className: E().EnterCodeFromEmail },
              (0, D.kQ)(
                "#Login_EnterEmailCode",
                n.createElement(
                  "span",
                  { className: E().EnterCodeEmailAddress },
                  e.emailAddress
                )
              )
            )
          ),
          n.createElement(_e, { className: E().AwaitingMobileConfIcon })
        );
      }
      function ge(e) {
        const { accountName: t, type: r } = e,
          i =
            "mobile" === r
              ? (0, D.Xx)("#Login_MobileProtectingAccount")
              : (0, D.Xx)("#Login_EmailProtectingAccount"),
          s = H();
        return n.createElement(
          "div",
          { className: E().ProtectingAccount },
          n.createElement(
            "div",
            { className: E().Label },
            (0, D.kQ)(
              "#Login_ActiveAccountName",
              n.createElement("span", { className: E().AccountName }, t)
            )
          ),
          !s && n.createElement("div", { className: E().Description }, i)
        );
      }
      function fe() {
        return n.createElement(
          Se,
          { gap: 10, alignItems: "center" },
          n.createElement(
            "div",
            { className: E().AwaitingMobileConfText },
            (0, D.Xx)("#Login_AwaitingMobileConfirmation")
          ),
          n.createElement(pe, { className: E().AwaitingMobileConfIcon })
        );
      }
      function pe(e) {
        return n.createElement(
          "svg",
          { viewBox: "0 0 55 49", fill: "none", className: e.className },
          n.createElement("path", {
            d: "M36.1497 0.664062H18.7667C16.0532 0.664062 13.8485 2.86796 13.8485 5.49568V43.3009C13.8485 46.0134 16.0532 48.1326 18.7667 48.1326H36.0649C38.7784 48.1326 40.9831 45.9287 40.9831 43.3009V5.49568C40.9831 2.78319 38.8632 0.664062 36.1497 0.664062ZM38.1848 43.3009C38.1848 44.4029 37.2521 45.3353 36.1497 45.3353H18.7667C17.6643 45.3353 16.7316 44.4029 16.7316 43.3009V42.1142H38.1848V43.3009ZM38.1848 39.317H16.7316V9.73394H38.1848V39.317ZM38.1848 6.93669H16.7316V5.49568C16.7316 4.39373 17.6643 3.46131 18.7667 3.46131H36.0649C37.1673 3.46131 38.1 4.39373 38.1 5.49568V6.93669H38.1848ZM44.7988 14.7351C44.2053 14.9894 43.9509 15.5827 44.1205 16.1761C45.7316 20.3296 45.7316 24.9069 44.1205 29.0604C43.8661 29.6538 44.2053 30.3319 44.7988 30.5014C44.9684 30.5862 45.0532 30.5862 45.2228 30.5862C45.7316 30.5862 46.1556 30.3319 46.3252 29.8233C48.1907 25.1612 48.1907 19.9905 46.3252 15.2437C46.0708 14.8198 45.3924 14.4808 44.7988 14.7351ZM10.1176 14.7351C9.52399 14.4808 8.84562 14.8198 8.67603 15.4132C6.81054 20.0753 6.81054 25.246 8.67603 29.9928C8.84562 30.4166 9.2696 30.7557 9.77837 30.7557C9.94796 30.7557 10.0328 30.7557 10.2023 30.6709C10.7959 30.4166 11.0503 29.8233 10.8807 29.2299C9.2696 25.0764 9.2696 20.4991 10.8807 16.3456C10.9655 15.5827 10.7111 14.9894 10.1176 14.7351ZM52.3456 11.9378C52.0912 11.3445 51.4977 11.0902 50.9041 11.2597C50.3105 11.514 50.0562 12.1074 50.2257 12.7007V12.7855C52.9392 19.0581 52.9392 26.2631 50.2257 32.451C50.1409 32.7053 50.0562 33.0444 50.2257 33.2987C50.3105 33.553 50.5649 33.8072 50.8193 33.892C50.9889 33.9768 51.0737 33.9768 51.2433 33.9768C51.6673 33.9768 52.0912 33.7225 52.2608 33.2987C55.3135 26.6022 55.3135 18.719 52.3456 11.9378ZM4.69065 12.7855C4.94504 12.1921 4.69065 11.514 4.09709 11.2597C3.8427 11.1749 3.50352 11.0902 3.24913 11.2597C2.99475 11.3445 2.74036 11.5988 2.65557 11.8531C-0.312272 18.719 -0.312272 26.5174 2.65557 33.3834C2.82516 33.8072 3.24913 34.0615 3.67311 34.0615C3.8427 34.0615 4.01229 34.0615 4.09709 33.9768C4.35147 33.892 4.60586 33.6377 4.69065 33.3834C4.77545 33.1291 4.77545 32.7901 4.69065 32.5358C1.9772 26.2631 1.9772 19.0581 4.69065 12.7855ZM20.3778 15.9218C21.2257 15.9218 21.8193 15.2437 21.8193 14.4808C21.8193 13.7179 21.1409 13.0398 20.3778 13.0398C19.6146 13.0398 18.9363 13.7179 18.9363 14.4808C18.9363 15.2437 19.6146 15.9218 20.3778 15.9218ZM24.1088 15.9218C24.9567 15.9218 25.5503 15.2437 25.5503 14.4808C25.5503 13.7179 24.8719 13.0398 24.1088 13.0398C23.2608 13.0398 22.6673 13.7179 22.6673 14.4808C22.5825 15.2437 23.2608 15.9218 24.1088 15.9218ZM27.755 15.9218C28.6029 15.9218 29.1965 15.2437 29.1965 14.4808C29.1965 13.7179 28.5181 13.0398 27.755 13.0398C26.907 13.0398 26.3135 13.7179 26.3135 14.4808C26.3135 15.2437 26.9918 15.9218 27.755 15.9218ZM31.4012 15.9218C32.2491 15.9218 32.8427 15.2437 32.8427 14.4808C32.8427 13.7179 32.1643 13.0398 31.4012 13.0398C30.5532 13.0398 29.9597 13.7179 29.9597 14.4808C29.9597 15.2437 30.638 15.9218 31.4012 15.9218ZM35.1322 15.9218C35.9801 15.9218 36.5737 15.2437 36.5737 14.4808C36.5737 13.7179 35.8953 13.0398 35.1322 13.0398C34.2842 13.0398 33.6907 13.7179 33.6907 14.4808C33.6059 15.2437 34.2842 15.9218 35.1322 15.9218Z",
            fill: "#1A99FF",
          })
        );
      }
      function _e(e) {
        return n.createElement(
          "svg",
          { viewBox: "0 0 58 56", fill: "none", className: e.className },
          n.createElement("path", {
            d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
            fill: "#1A99FF",
          })
        );
      }
      function be(e) {
        return n.createElement(
          "svg",
          { className: e.className, viewBox: "0 0 25 25", fill: "none" },
          n.createElement("path", {
            d: "M5.77051 0H0V5.76795H5.77051V0ZM4.83807 4.83871H0.929121V0.929245H4.83807V4.83871Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M4.02169 1.69238H1.63916V4.07523H4.02169V1.69238Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M9.6127 0H7.69141V1.92155H9.6127V0Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M1.92129 9.61475H0V11.5396V13.4612H1.92129V11.5396V9.61475Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M5.77031 9.61475H3.8457V11.5363H5.77031V9.61475Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M3.84268 7.69238H1.92139V9.61393H3.84268V7.69238Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M21.1535 9.61436V7.69282H19.2289H17.3076V9.61436H19.2289V11.5392H21.1535V13.4608H19.2289H17.3076V11.5392V9.61436H15.383V7.69282H17.3076V5.76795V3.84641H15.383V1.92155H17.3076V0H15.383H13.4617H11.5371V1.92155H13.4617V3.84641V5.76795H11.5371V7.69282H13.4617V9.61436V11.5392H11.5371V13.4608H13.4617V15.3856V17.3072H11.5371V19.232H13.4617V21.1536V23.0785H11.5371V25H13.4617H15.383H17.3076V23.0785H15.383V21.1536H17.3076V19.232V17.3072H15.383V15.3856H17.3076H19.2289V17.3072H21.1535V15.3856H23.0748V17.3072H24.9994V15.3856V13.4608H23.0748V11.5392H24.9994V9.61436H23.0748H21.1535Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M19.23 0V5.76795H25.0005V0H19.23ZM24.068 4.83871H20.1591V0.929245H24.068V4.83871Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M23.2541 1.69238H20.8716V4.07523H23.2541V1.69238Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M0 24.9999H5.77051V19.2319H0V24.9999ZM0.929121 20.1612H4.83807V24.0706H0.929121V20.1612Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M4.02169 20.9248H1.63916V23.3076H4.02169V20.9248Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M11.5378 19.2319H9.61319V17.307H11.5378V15.3855V13.4606H9.61319V11.5391H11.5378V9.6142H9.61319V7.69266V5.7678H11.5378V3.84625V1.92139H9.61319V3.84625H7.6919V5.7678V7.69266H5.7706V9.6142H7.6919V11.5391H5.7706V13.4606H7.6919V15.3855H5.7706V13.4606H3.846H1.92139V15.3855H3.846V17.307H5.7706H7.6919V19.2319V21.1534H9.61319V23.0783H11.5378V21.1534V19.2319Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M9.6127 23.0786H7.69141V25.0002H9.6127V23.0786Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M1.92129 15.3853H0V17.3068H1.92129V15.3853Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M19.23 24.9999H25.0005V19.2319H19.23V24.9999ZM20.1591 20.1612H24.068V24.0706H20.1591V20.1612Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M23.2541 20.9248H20.8716V23.3076H23.2541V20.9248Z",
            fill: "currentColor",
          })
        );
      }
      function ye(e) {
        const { type: t, accountName: r, onUseCodeOverride: i } = e,
          s = H(),
          a = n.createElement(
            Be,
            {
              align: "center",
              href: `${u.De.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`,
            },
            (0, D.Xx)("#Login_Help_AccessMobileApp")
          ),
          o = s
            ? n.createElement(
                "div",
                { style: { paddingBottom: "20px" } },
                n.createElement(
                  Be,
                  { align: "center", onClick: i },
                  (0, D.Xx)("#Login_EnterCodeInstead")
                )
              )
            : n.createElement(
                "div",
                { onClick: i, className: E().EnterCodeInsteadLink },
                (0, D.Xx)("#Login_EnterCodeInstead")
              );
        return n.createElement(
          Fe,
          {
            title: (0, D.Xx)("#Login_Title_SteamGuard"),
            bottom: a,
            compact: !0,
          },
          n.createElement(
            Se,
            { gap: 40 },
            n.createElement(ge, { type: t, accountName: r }),
            n.createElement(fe, null),
            o
          )
        );
      }
      function Be(e) {
        const { children: t, align: r, inline: i } = e,
          s = (0, a.Z)(E().TextLink, "center" === r && E().TextAlignCenter);
        if ("href" in e)
          return n.createElement("a", { className: s, href: e.href }, t);
        {
          const r = i ? "span" : "div";
          return n.createElement(r, { className: s, onClick: e.onClick }, t);
        }
      }
      function we(e) {
        const { onSubmit: t, children: r, className: i } = e;
        return n.createElement(
          "form",
          { onSubmit: (e) => (e.preventDefault(), t(), !1), className: i },
          r
        );
      }
      function Se(e) {
        const {
            alignItems: t,
            justifyContent: r,
            gap: i,
            className: s,
            children: o,
          } = e,
          l = (0, a.Z)(
            E().FlexCol,
            "center" === t && E().AlignItemsCenter,
            "center" === r && E().JustifyContentCenter,
            s
          ),
          c = i ? { gap: "number" == typeof i ? `${i}px` : i } : void 0;
        return n.createElement("div", { className: l, style: c }, o);
      }
      function Ce(e) {
        const {
            children: t,
            justifyContent: r,
            alignItems: i,
            className: s,
          } = e,
          a = {
            display: "flex",
            flexDirection: "row",
            justifyContent: r,
            alignItems: i,
          };
        return n.createElement("div", { style: a, className: s }, t);
      }
      function ve(e) {
        const { onChange: t } = e,
          r = (0, i._T)(e, ["onChange"]);
        return n.createElement(
          Ee,
          Object.assign(
            {
              length: 5,
              onChange: (e) => {
                B((e = e.map((e) => e.toUpperCase())).join("").trim()) && t(e);
              },
              autoFocus: !0,
            },
            r
          )
        );
      }
      function Ee(e) {
        const {
            length: t,
            value: r,
            onChange: i,
            onPaste: s,
            tone: o,
            autoFocus: l,
            disabled: c,
            loading: u,
          } = e,
          m = (0, n.useRef)([]),
          d = () => i(m.current.map((e) => e.value)),
          h = (e) => {
            const t = e.target.nextElementSibling;
            e.target.value && t && t.focus(), d();
          },
          g = (e) => {
            var t;
            -1 === m.current.findIndex((e) => !!e.value)
              ? null === (t = m.current[0]) || void 0 === t || t.select()
              : e.target.select();
          },
          f = (e) => {
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
          p = (e) => {
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
          _ = [];
        for (let e = 0; e < t; e++)
          _.push(
            n.createElement("input", {
              type: "text",
              maxLength: 1,
              key: e,
              ref: (t) => (m.current[e] = t),
              onChange: h,
              onFocus: g,
              onClick: (e) => e.stopPropagation(),
              onKeyDown: f,
              onPaste: p,
              value: r[e] ? r[e][0] : "",
              autoComplete: "none",
              autoFocus: 0 === e && l,
              disabled: c || u,
            })
          );
        return n.createElement(
          "div",
          {
            className: (0, a.Z)(
              E().SegmentedCharacterInput,
              "danger" === o && E().Danger,
              c && E().Disabled
            ),
            onClick: () => {
              const e = m.current.find((e) => !e.value);
              e ? e.focus() : m.current[m.current.length - 1].focus();
            },
          },
          u &&
            n.createElement(
              "div",
              { className: E().Loading },
              n.createElement(V.V, { size: "small" })
            ),
          _
        );
      }
      function Re(e) {
        const { children: t, spacing: r = 0, align: i } = e;
        return n.createElement(
          Se,
          { alignItems: i },
          n.Children.map(t, (e, t) =>
            e
              ? n.createElement(
                  "div",
                  { style: t > 0 ? { paddingTop: `${r}px` } : void 0 },
                  e
                )
              : null
          ).filter(Boolean)
        );
      }
      function Fe(e) {
        const { title: t, children: r, bottom: i, compact: s } = e,
          o = H();
        return n.createElement(
          Se,
          {
            gap: 32,
            className: (0, a.Z)(
              E().StandardLayout,
              o && E().Embedded,
              s && E().Compact,
              u.De.IN_CLIENT && "IN_CLIENT"
            ),
          },
          "string" == typeof t
            ? n.createElement("div", { className: E().PrimaryHeader }, t)
            : t,
          n.createElement("div", { className: E().FormContainer }, r),
          i
        );
      }
      function Te(e) {
        return n.createElement(
          "svg",
          {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
          },
          n.createElement("path", {
            d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
            fill: "#E0E1E6",
          }),
          n.createElement("path", {
            d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
            fill: "#E0E1E6",
          }),
          n.createElement("path", {
            d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
            fill: "#E0E1E6",
          }),
          n.createElement("path", {
            d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
            fill: "#E0E1E6",
          }),
          n.createElement("path", {
            d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
            fill: "#E0E1E6",
          }),
          n.createElement("path", {
            d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
            fill: "#E0E1E6",
          }),
          n.createElement("path", {
            d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
            fill: "#E0E1E6",
          }),
          n.createElement("path", {
            d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
            fill: "#E0E1E6",
          }),
          n.createElement("path", {
            d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
            fill: "#E0E1E6",
          })
        );
      }
      function Me() {
        return n.createElement(
          Se,
          { alignItems: "center", justifyContent: "center" },
          n.createElement(V.V, null)
        );
      }
    },
    88514: (e, t, r) => {
      "use strict";
      r.d(t, {
        $h: () => E,
        Am: () => b,
        Uy: () => h,
        _u: () => m,
        kp: () => a,
        oZ: () => c,
      });
      var i = r(33019),
        n = r(40110);
      r(21205);
      const s = i.Message;
      class a extends s {
        constructor(e = null) {
          super(),
            a.prototype.account_name || n.aR(a.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  account_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = n.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Request";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.publickey_mod || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
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
          return "CAuthentication_GetPasswordRSAPublicKey_Response";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(),
            l.prototype.confirmation_type || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
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
          return "CAuthentication_AllowedConfirmation";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.device_friendly_name || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
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
          return "CAuthentication_BeginAuthSessionViaQR_Request";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(),
            u.prototype.client_id || n.aR(u.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
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
                  allowed_confirmations: { n: 5, c: l, r: !0, q: !0 },
                  version: { n: 6, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
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
          return "CAuthentication_BeginAuthSessionViaQR_Response";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(),
            m.prototype.device_friendly_name || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
          return "CAuthentication_BeginAuthSessionViaCredentials_Request";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(),
            d.prototype.client_id || n.aR(d.M()),
            s.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  request_id: { n: 2, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  interval: { n: 3, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  allowed_confirmations: { n: 4, c: l, r: !0, q: !0 },
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
          return "CAuthentication_BeginAuthSessionViaCredentials_Response";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.client_id || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
          return "CAuthentication_PollAuthSessionStatus_Request";
        }
      }
      class g extends s {
        constructor(e = null) {
          super(),
            g.prototype.new_client_id || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
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
          return "CAuthentication_PollAuthSessionStatus_Response";
        }
      }
      class f extends s {
        constructor(e = null) {
          super(),
            f.prototype.ip || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
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
          return "CAuthentication_GetAuthSessionInfo_Response";
        }
      }
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.client_ids || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  client_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeRepeatedUint64String,
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
          return "CAuthentication_GetAuthSessionsForAccount_Response";
        }
      }
      class _ extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.client_id || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
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
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
        }
      }
      class B extends s {
        constructor(e = null) {
          super(),
            B.prototype.access_token || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  access_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CAuthentication_AccessToken_GenerateForApp_Response";
        }
      }
      class w extends s {
        constructor(e = null) {
          super(),
            w.prototype.refresh_token || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Response";
        }
      }
      class S extends s {
        constructor(e = null) {
          super(),
            S.prototype.nonce || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  nonce: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  expiry: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CCloudGaming_CreateNonce_Response";
        }
      }
      class C extends s {
        constructor(e = null) {
          super(),
            C.prototype.appid || n.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  minutes_remaining: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
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
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_TimeRemaining";
        }
      }
      class v extends s {
        constructor(e = null) {
          super(),
            v.prototype.entries || n.aR(v.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { entries: { n: 2, c: C, r: !0, q: !0 } },
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
          return "CCloudGaming_GetTimeRemaining_Response";
        }
      }
      var E, R;
      !(function (e) {
        (e.GetPasswordRSAPublicKey = function (e, t) {
          return e.SendMsg("Authentication.GetPasswordRSAPublicKey#1", t, o, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.BeginAuthSessionViaQR = function (e, t) {
            return e.SendMsg("Authentication.BeginAuthSessionViaQR#1", t, u, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.BeginAuthSessionViaCredentials = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              t,
              d,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.PollAuthSessionStatus = function (e, t) {
            return e.SendMsg("Authentication.PollAuthSessionStatus#1", t, g, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAuthSessionInfo = function (e, t) {
            return e.SendMsg("Authentication.GetAuthSessionInfo#1", t, f, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              t,
              _,
              { ePrivilege: 1 }
            );
          }),
          (e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              t,
              y,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GenerateAccessTokenForApp = function (e, t) {
            return e.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              t,
              B,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetAuthSessionsForAccount = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              t,
              p,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.MigrateMobileSession = function (e, t) {
            return e.SendMsg("Authentication.MigrateMobileSession#1", t, w, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(E || (E = {})),
        (function (e) {
          (e.CreateNonce = function (e, t) {
            return e.SendMsg("CloudGaming.CreateNonce#1", t, S, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
            (e.GetTimeRemaining = function (e, t) {
              return e.SendMsg("CloudGaming.GetTimeRemaining#1", t, v, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            });
        })(R || (R = {}));
    },
    99925: (e, t, r) => {
      "use strict";
      r.d(t, { AX: () => p, Sz: () => B, _w: () => g });
      var i = r(33019),
        n = r(40110);
      const s = i.Message;
      class a extends s {
        constructor(e = null) {
          super(),
            a.prototype.state || n.aR(a.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
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
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = n.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Status_Response";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.shared_secret || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
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
          return "CTwoFactor_AddAuthenticator_Response";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new l();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_SendEmail_Response";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.success || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
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
          return "CTwoFactor_FinalizeAddAuthenticator_Response";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(),
            u.prototype.success || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
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
          return "CTwoFactor_RemoveAuthenticator_Response";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(),
            m.prototype.codes || n.aR(m.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  codes: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
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
          return "CTwoFactor_CreateEmergencyCodes_Response";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_DestroyEmergencyCodes_Response";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.valid || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  valid: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
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
          return "CTwoFactor_ValidateToken_Response";
        }
      }
      class g extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
        }
      }
      class f extends s {
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
      class _ extends s {
        constructor(e = null) {
          super(),
            _.prototype.shared_secret || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
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
          return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.success || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  replacement_token: { n: 2, c: _ },
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
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Response";
        }
      }
      var B;
      !(function (e) {
        (e.QueryStatus = function (e, t) {
          return e.SendMsg("TwoFactor.QueryStatus#1", t, a, { ePrivilege: 1 });
        }),
          (e.AddAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.AddAuthenticator#1", t, o, {
              ePrivilege: 1,
            });
          }),
          (e.SendEmail = function (e, t) {
            return e.SendMsg("TwoFactor.SendEmail#1", t, l, { ePrivilege: 1 });
          }),
          (e.FinalizeAddAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.FinalizeAddAuthenticator#1", t, c, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateTokenVersion = function (e, t) {
            return e.SendMsg("TwoFactor.UpdateTokenVersion#1", t, y, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.RemoveAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.RemoveAuthenticator#1", t, u, {
              ePrivilege: 9,
            });
          }),
          (e.CreateEmergencyCodes = function (e, t) {
            return e.SendMsg("TwoFactor.CreateEmergencyCodes#1", t, m, {
              ePrivilege: 1,
            });
          }),
          (e.DestroyEmergencyCodes = function (e, t) {
            return e.SendMsg("TwoFactor.DestroyEmergencyCodes#1", t, d, {
              ePrivilege: 1,
            });
          }),
          (e.ValidateToken = function (e, t) {
            return e.SendMsg("TwoFactor.ValidateToken#1", t, h, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveAuthenticatorViaChallengeStart = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              t,
              f,
              { ePrivilege: 9, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.RemoveAuthenticatorViaChallengeContinue = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              t,
              b,
              { ePrivilege: 9, eWebAPIKeyRequirement: 1 }
            );
          });
      })(B || (B = {}));
    },
    13596: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => o });
      var i = r(67294),
        n = r(95598),
        s = r(50732),
        a = r.n(s);
      class o extends i.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(a().throbber_small)
            : "medium" == this.props.size
            ? e.push(a().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(a().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(a().throbber_xxlarge)
            : e.push(a().throbber_large);
        }
        render() {
          let e = [a().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(a().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(a().Static);
          let t = i.createElement(
            "div",
            { className: e.join(" ") },
            i.createElement(
              "div",
              { className: a().Throbber },
              i.createElement(n.wUs, { className: a().base }),
              i.createElement(n.wUs, { className: a().blur })
            )
          );
          return i.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? a().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              i.createElement(
                "div",
                { className: a().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
  },
]);
