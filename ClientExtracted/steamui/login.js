/* Third-party software licenses can be found at licenses.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    QmxF: function (e, t, n) {
      e.exports = {
        SideBySide: "newlogindialog_SideBySide_ZHRZ8",
        QRSection: "newlogindialog_QRSection_3wSeH",
        QR: "newlogindialog_QR_35Q-U",
        TextField: "newlogindialog_TextField_3BkiH",
        TextInput: "newlogindialog_TextInput_2GBWe",
        Danger: "newlogindialog_Danger_16BUa",
        LoginForm: "newlogindialog_LoginForm_2v60t",
        FieldLabel: "newlogindialog_FieldLabel_XrYge",
        Highlight: "newlogindialog_Highlight_12zBm",
        CheckboxField: "newlogindialog_CheckboxField_1Qku5",
        CheckboxFieldLabel: "newlogindialog_CheckboxFieldLabel_10bGi",
        Checkbox: "newlogindialog_Checkbox_LBS7I",
        Check: "newlogindialog_Check_28MB9",
        SignInButtonContainer: "newlogindialog_SignInButtonContainer_16fbi",
        SubmitButton: "newlogindialog_SubmitButton_DjSvC",
        Text: "newlogindialog_Text_1zFEa",
        Center: "newlogindialog_Center_2jDjx",
        TextLink: "newlogindialog_TextLink_1K431",
        FormError: "newlogindialog_FormError_1W_6H",
        TextAlignCenter: "newlogindialog_TextAlignCenter_2FyQD",
        FlexCol: "newlogindialog_FlexCol_1NOsG",
        AlignItemsCenter: "newlogindialog_AlignItemsCenter_2QHQ1",
        JustifyContentCenter: "newlogindialog_JustifyContentCenter_2tsIi",
        ProtectingAccount: "newlogindialog_ProtectingAccount_3JBYG",
        Label: "newlogindialog_Label_1hKgi",
        AccountName: "newlogindialog_AccountName_31Vq4",
        Description: "newlogindialog_Description_2o5mE",
        AwaitingMobileConfText: "newlogindialog_AwaitingMobileConfText_2WgwH",
        AwaitingMobileConfIcon: "newlogindialog_AwaitingMobileConfIcon_3WvDp",
        EnterCodeInsteadLink: "newlogindialog_EnterCodeInsteadLink_2YsaR",
        EnterCodeFromMobileContainer:
          "newlogindialog_EnterCodeFromMobileContainer_2Io_J",
        EnterCodeFromEmailContainer:
          "newlogindialog_EnterCodeFromEmailContainer_1YQZI",
        EnterCodeFromMobile: "newlogindialog_EnterCodeFromMobile_1rEWO",
        EnterCodeFromEmail: "newlogindialog_EnterCodeFromEmail_3aMbj",
        EnterCodeEmailAddress: "newlogindialog_EnterCodeEmailAddress_3BKzb",
        CodeInputFieldContainer: "newlogindialog_CodeInputFieldContainer_3FIQq",
        CodeInputField: "newlogindialog_CodeInputField_1gZuG",
        SegmentContainer: "newlogindialog_SegmentContainer_8gteG",
        Segment: "newlogindialog_Segment_3l55O",
        SegmentedCharacterInput: "newlogindialog_SegmentedCharacterInput_1l8pX",
        StandardLayout: "newlogindialog_StandardLayout_2EuR6",
        PrimaryHeader: "newlogindialog_PrimaryHeader_g5L61",
        FormContainer: "newlogindialog_FormContainer_3XCnc",
        Embedded: "newlogindialog_Embedded_2R_n2",
        Compact: "newlogindialog_Compact_3FB9K",
        HeaderLogo: "newlogindialog_HeaderLogo_3v6Wn",
        EmbeddedRoot: "newlogindialog_EmbeddedRoot_2v9dC",
        EmbeddedRootFooter: "newlogindialog_EmbeddedRootFooter_27aIt",
        AccountCreationPrompt: "newlogindialog_AccountCreationPrompt_3dwSW",
      };
    },
    TKup: function (e, t, n) {
      e.exports = {
        LoginQR: "qrlogin_LoginQR_xlEVp",
        Blur: "qrlogin_Blur_1rteF",
        QRBits: "qrlogin_QRBits_1ySP9",
        Bit: "qrlogin_Bit_3ma26",
        Active: "qrlogin_Active_M9jfk",
        Overlay: "qrlogin_Overlay_464mF",
        Box: "qrlogin_Box_2ltn2",
        Column: "qrlogin_Column_2u8B9",
      };
    },
    v6T8: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return Ne;
        });
      var r = n("mrSG"),
        i = n("q1tI"),
        a = n.n(i),
        o = n("exH9"),
        s = n("2vnA"),
        c = n("bxBv"),
        l = (n("vDqi"), n("XxJJ")),
        u = n("lkRc"),
        m = n("hRO2"),
        d = n("OS8t"),
        f = m.Message;
      var g,
        b,
        p = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.account_name || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      account_name: {
                        n: 1,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_GetPasswordRSAPublicKey_Request";
            }),
            t
          );
        })(f),
        _ = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.publickey_mod || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      publickey_mod: {
                        n: 1,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      publickey_exp: {
                        n: 2,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      timestamp: {
                        n: 3,
                        br: d.d.readUint64String,
                        bw: d.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_GetPasswordRSAPublicKey_Response";
            }),
            t
          );
        })(f),
        h = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.confirmation_type || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      confirmation_type: {
                        n: 1,
                        br: d.d.readEnum,
                        bw: d.h.writeEnum,
                      },
                      associated_message: {
                        n: 2,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_AllowedConfirmation";
            }),
            t
          );
        })(f),
        C = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.device_friendly_name || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      device_friendly_name: {
                        n: 1,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      platform_type: {
                        n: 2,
                        br: d.d.readEnum,
                        bw: d.h.writeEnum,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_BeginAuthSessionViaQR_Request";
            }),
            t
          );
        })(f),
        y = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.client_id || d.a(t.M()),
              f.initialize(r, n, 0, -1, [5], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      client_id: {
                        n: 1,
                        br: d.d.readUint64String,
                        bw: d.h.writeUint64String,
                      },
                      challenge_url: {
                        n: 2,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      request_id: {
                        n: 3,
                        br: d.d.readBytes,
                        bw: d.h.writeBytes,
                      },
                      interval: { n: 4, br: d.d.readFloat, bw: d.h.writeFloat },
                      allowed_confirmations: { n: 5, c: h, r: !0, q: !0 },
                      version: { n: 6, br: d.d.readInt32, bw: d.h.writeInt32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_BeginAuthSessionViaQR_Response";
            }),
            t
          );
        })(f),
        v = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.device_friendly_name || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      device_friendly_name: {
                        n: 1,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      account_name: {
                        n: 2,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      encrypted_password: {
                        n: 3,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      encryption_timestamp: {
                        n: 4,
                        br: d.d.readUint64String,
                        bw: d.h.writeUint64String,
                      },
                      remember_login: {
                        n: 5,
                        br: d.d.readBool,
                        bw: d.h.writeBool,
                      },
                      platform_type: {
                        n: 6,
                        br: d.d.readEnum,
                        bw: d.h.writeEnum,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_BeginAuthSessionViaCredentials_Request";
            }),
            t
          );
        })(f),
        B = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.client_id || d.a(t.M()),
              f.initialize(r, n, 0, -1, [4], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      client_id: {
                        n: 1,
                        br: d.d.readUint64String,
                        bw: d.h.writeUint64String,
                      },
                      request_id: {
                        n: 2,
                        br: d.d.readBytes,
                        bw: d.h.writeBytes,
                      },
                      interval: { n: 3, br: d.d.readFloat, bw: d.h.writeFloat },
                      allowed_confirmations: { n: 4, c: h, r: !0, q: !0 },
                      steamid: {
                        n: 5,
                        br: d.d.readUint64String,
                        bw: d.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_BeginAuthSessionViaCredentials_Response";
            }),
            t
          );
        })(f),
        S = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.client_id || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      client_id: {
                        n: 1,
                        br: d.d.readUint64String,
                        bw: d.h.writeUint64String,
                      },
                      request_id: {
                        n: 2,
                        br: d.d.readBytes,
                        bw: d.h.writeBytes,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_PollAuthSessionStatus_Request";
            }),
            t
          );
        })(f),
        w = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.new_client_id || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      new_client_id: {
                        n: 1,
                        br: d.d.readUint64String,
                        bw: d.h.writeUint64String,
                      },
                      new_challenge_url: {
                        n: 2,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      refresh_token: {
                        n: 3,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      access_token: {
                        n: 4,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_PollAuthSessionStatus_Response";
            }),
            t
          );
        })(f),
        E = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.ip || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      ip: { n: 1, br: d.d.readString, bw: d.h.writeString },
                      geoloc: { n: 2, br: d.d.readString, bw: d.h.writeString },
                      city: { n: 3, br: d.d.readString, bw: d.h.writeString },
                      state: { n: 4, br: d.d.readString, bw: d.h.writeString },
                      country: {
                        n: 5,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                      platform_type: {
                        n: 6,
                        br: d.d.readEnum,
                        bw: d.h.writeEnum,
                      },
                      device_friendly_name: {
                        n: 7,
                        br: d.d.readString,
                        bw: d.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_GetAuthSessionInfo_Response";
            }),
            t
          );
        })(f),
        M = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return f.initialize(n, t, 0, -1, void 0, null), n;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
            }),
            t
          );
        })(f),
        O = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.client_id || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      client_id: {
                        n: 1,
                        br: d.d.readUint64String,
                        bw: d.h.writeUint64String,
                      },
                      steamid: {
                        n: 2,
                        br: d.d.readFixed64String,
                        bw: d.h.writeFixed64String,
                      },
                      code: { n: 3, br: d.d.readString, bw: d.h.writeString },
                      code_type: { n: 4, br: d.d.readEnum, bw: d.h.writeEnum },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
            }),
            t
          );
        })(f),
        R = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return f.initialize(n, t, 0, -1, void 0, null), n;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
            }),
            t
          );
        })(f),
        j = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.nonce || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      nonce: { n: 1, br: d.d.readString, bw: d.h.writeString },
                      expiry: { n: 2, br: d.d.readUint32, bw: d.h.writeUint32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CCloudGaming_CreateNonce_Response";
            }),
            t
          );
        })(f),
        z = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.appid || d.a(t.M()),
              f.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: d.d.readUint32, bw: d.h.writeUint32 },
                      minutes_remaining: {
                        n: 2,
                        br: d.d.readUint32,
                        bw: d.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CCloudGaming_TimeRemaining";
            }),
            t
          );
        })(f),
        F = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.entries || d.a(t.M()),
              f.initialize(r, n, 0, -1, [2], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { entries: { n: 2, c: z, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = d.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return d.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return d.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new m.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return d.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              d.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new m.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CCloudGaming_GetTimeRemaining_Response";
            }),
            t
          );
        })(f);
      !(function (e) {
        (e.GetPasswordRSAPublicKey = function (e, t) {
          return e.SendMsg("Authentication.GetPasswordRSAPublicKey#1", t, _, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.BeginAuthSessionViaQR = function (e, t) {
            return e.SendMsg("Authentication.BeginAuthSessionViaQR#1", t, y, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.BeginAuthSessionViaCredentials = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              t,
              B,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.PollAuthSessionStatus = function (e, t) {
            return e.SendMsg("Authentication.PollAuthSessionStatus#1", t, w, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAuthSessionInfo = function (e, t) {
            return e.SendMsg("Authentication.GetAuthSessionInfo#1", t, E, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              t,
              M,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              t,
              R,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          });
      })(g || (g = {})),
        (function (e) {
          (e.CreateNonce = function (e, t) {
            return e.SendMsg("CloudGaming.CreateNonce#1", t, j, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
            (e.GetTimeRemaining = function (e, t) {
              return e.SendMsg("CloudGaming.GetTimeRemaining#1", t, F, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            });
        })(b || (b = {}));
      var A = (function () {
        function e(e, t, n) {
          (this.m_transport = e),
            (this.m_onCompleteCallback = t),
            (this.m_ePlatformType = n);
        }
        return (
          (e.prototype.StartPolling = function () {
            this.m_activeTimerID = window.setTimeout(
              this.PollForUpdate,
              this.m_msPollInterval
            );
          }),
          (e.prototype.StopPolling = function () {
            window.clearTimeout(this.m_activeTimerID),
              (this.m_activeTimerID = void 0);
          }),
          (e.prototype.PollForUpdate = function () {
            return Object(r.b)(this, void 0, void 0, function () {
              var e, t, n, i, a, o, s, l, u;
              return Object(r.e)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      (e = c.b.Init(S))
                        .Body()
                        .set_client_id(this.m_strClientID),
                      e.Body().set_request_id(this.m_rgRequestID),
                      [4, g.PollAuthSessionStatus(this.m_transport, e)]
                    );
                  case 1:
                    return (
                      (t = r.sent()),
                      1 !== (n = t.GetEResult())
                        ? (console.error(
                            "Failed to poll auth session. Result: " + n
                          ),
                          (this.m_strErrorMessage = "Uh Oh"),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          [2, n])
                        : ((i = t.Body().toObject()),
                          (a = i.new_challenge_url),
                          (o = i.new_client_id),
                          (s = i.refresh_token),
                          (l = i.access_token),
                          s
                            ? (this.m_onCompleteCallback({
                                bSuccess: !0,
                                strRefreshToken: s,
                                strAccessToken: l,
                              }),
                              [2, n])
                            : (a && (this.m_strChallengeURL = a),
                              o && (this.m_strClientID = o),
                              (this.m_activeTimerID = window.setTimeout(
                                this.PollForUpdate,
                                this.m_msPollInterval
                              )),
                              [2, n]))
                    );
                  case 2:
                    return (
                      (u = r.sent()),
                      console.error("Failed to poll auth session. " + u),
                      (this.m_strErrorMessage = "Uh Oh"),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      [2, 2]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.GetErrorMessage = function () {
            return this.m_strErrorMessage;
          }),
          Object(r.c)([s.C], e.prototype, "m_strChallengeURL", void 0),
          Object(r.c)([s.C], e.prototype, "m_strErrorMessage", void 0),
          Object(r.c)([l.a], e.prototype, "PollForUpdate", null),
          e
        );
      })();
      var L = n("aoTL"),
        N = n("opsS"),
        W = n("c3ho"),
        T = (function (e) {
          function t(t) {
            var n =
              e.call(
                this,
                t.transport,
                function (e) {
                  n.m_eStatus = e.bSuccess ? 10 : 11;
                  var i = e.bSuccess
                    ? Object(r.a)(Object(r.a)({}, e), {
                        strAccountName: n.m_strAccountName,
                        steamid: n.m_steamid,
                      })
                    : e;
                  t.onComplete(i);
                },
                t.ePlatformType
              ) || this;
            return (
              (n.m_eStatus = 0),
              (n.m_strConfirmationAssociatedMessage = ""),
              (n.m_bUsingCodeOverride = !1),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.Start = function (e, t, n) {
              return Object(r.b)(this, void 0, void 0, function () {
                var i, a, o, s, l, u, m, d, f, b, p, _, h, C;
                return Object(r.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (0 !== this.m_eStatus && 2 !== this.m_eStatus)
                        return (
                          console.error(
                            "Cannot start an already started auth session. Create a new session instance."
                          ),
                          [2, 2]
                        );
                      (this.m_eStatus = 1),
                        (this.m_bUsingCodeOverride = !1),
                        (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 4, , 5]), [4, k(this.m_transport, e)]
                      );
                    case 2:
                      return (i = r.sent())
                        ? ((a = Object(W.c)(t, i)),
                          (o = c.b.Init(v)).Body().set_account_name(e),
                          o.Body().set_encrypted_password(a),
                          o.Body().set_encryption_timestamp(i.timestamp),
                          o.Body().set_remember_login(!!n),
                          o.Body().set_platform_type(this.m_ePlatformType),
                          [
                            4,
                            g.BeginAuthSessionViaCredentials(
                              this.m_transport,
                              o
                            ),
                          ])
                        : (console.error(
                            "Cannot start auth session without a valid RSA key"
                          ),
                          [2, 2]);
                    case 3:
                      if (((s = r.sent()), 1 !== (l = s.GetEResult())))
                        switch (l) {
                          case 5:
                            return (this.m_eStatus = 2), [2, l];
                          default:
                            return (
                              console.error(
                                "Failed to start auth session. Result: " + l
                              ),
                              (this.m_strErrorMessage = "Uh Oh"),
                              this.m_onCompleteCallback({ bSuccess: !1 }),
                              [2, l]
                            );
                        }
                      switch (
                        ((this.m_strAccountName = e),
                        (u = s.Body().toObject()),
                        (m = u.client_id),
                        (d = u.request_id),
                        (f = u.interval),
                        (b = u.allowed_confirmations),
                        (p = u.steamid),
                        (this.m_msPollInterval = 1e3 * f),
                        (this.m_strClientID = m),
                        (this.m_rgRequestID = d),
                        (this.m_steamid = p),
                        (_ = (function (e) {
                          var t = e[0] || 0;
                          e.length > 1 &&
                            (t = e.sort(function (e, t) {
                              return I[e] - I[t];
                            })[0]);
                          return t;
                        })(
                          b.map(function (e) {
                            return e.confirmation_type;
                          })
                        )),
                        (h = b.find(function (e) {
                          return e.confirmation_type === _;
                        })) &&
                          h.associated_message &&
                          (this.m_strConfirmationAssociatedMessage =
                            h.associated_message),
                        _)
                      ) {
                        case 1:
                          return (
                            (this.m_eStatus = 9), this.StartPolling(), [2, l]
                          );
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
                      return [2, l];
                    case 4:
                      return (
                        (C = r.sent()),
                        console.error("Failed to start auth session. " + C),
                        (this.m_strErrorMessage = "Uh Oh"),
                        this.m_onCompleteCallback({ bSuccess: !1 }),
                        [2, 2]
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.Stop = function () {
              this.StopPolling(), (this.m_eStatus = 12);
            }),
            (t.prototype.GetStatus = function () {
              return this.m_eStatus;
            }),
            (t.prototype.GetConfirmationAssociatedMessage = function () {
              return this.m_strConfirmationAssociatedMessage;
            }),
            (t.prototype.GetAccountName = function () {
              return this.m_strAccountName;
            }),
            (t.prototype.SendSteamGuardCode = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                var t, n, i, a, o;
                return Object(r.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 2, , 3]),
                        (t = 3 === this.m_eStatus || 7 === this.m_eStatus),
                        (n = c.b.Init(O))
                          .Body()
                          .set_client_id(this.m_strClientID),
                        n.Body().set_steamid(this.m_steamid),
                        n.Body().set_code(e),
                        n.Body().set_code_type(t ? 2 : 3),
                        [
                          4,
                          g.UpdateAuthSessionWithSteamGuardCode(
                            this.m_transport,
                            n
                          ),
                        ]
                      );
                    case 1:
                      if (((i = r.sent()), 1 !== (a = i.GetEResult())))
                        switch (a) {
                          case 65:
                          case 88:
                            return (this.m_eStatus = t ? 7 : 8), [2, a];
                          default:
                            return (
                              console.error(
                                "Failed to update auth session with SG code. Result: " +
                                  a
                              ),
                              (this.m_strErrorMessage = "Uh Oh"),
                              this.m_onCompleteCallback({ bSuccess: !1 }),
                              [2, a]
                            );
                        }
                      return (this.m_eStatus = 9), this.StartPolling(), [2, a];
                    case 2:
                      return (
                        (o = r.sent()),
                        console.error(
                          "Failed to update auth session with SG code. " + o
                        ),
                        (this.m_strErrorMessage = "Uh Oh"),
                        this.m_onCompleteCallback({ bSuccess: !1 }),
                        [2, 2]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.UseCodeOverride = function () {
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
                    "Don't know how to UseCodeOverride from login session status " +
                      this.m_eStatus
                  );
              }
            }),
            (t.prototype.BCanGoBack = function () {
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
            }),
            (t.prototype.GoBack = function () {
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
                    "Don't know how to GoBack from login session status " +
                      this.m_eStatus
                  );
              }
            }),
            Object(r.c)([s.C], t.prototype, "m_eStatus", void 0),
            Object(r.c)([N.a], t.prototype, "Start", null),
            Object(r.c)([N.a], t.prototype, "SendSteamGuardCode", null),
            Object(r.c)([N.a], t.prototype, "UseCodeOverride", null),
            Object(r.c)([N.a], t.prototype, "GoBack", null),
            t
          );
        })(A);
      function k(e, t) {
        return Object(r.b)(this, void 0, void 0, function () {
          var n, i, a, o, s, l, u;
          return Object(r.e)(this, function (r) {
            switch (r.label) {
              case 0:
                (n = c.b.Init(p)).Body().set_account_name(t), (r.label = 1);
              case 1:
                return (
                  r.trys.push([1, 3, , 4]), [4, g.GetPasswordRSAPublicKey(e, n)]
                );
              case 2:
                return 1 !== (i = r.sent()).GetEResult()
                  ? (console.error(
                      "Failed to get RSA key with EResult: " + i.GetEResult()
                    ),
                    [2, null])
                  : ((a = i.Body().toObject()),
                    (o = a.publickey_exp),
                    (s = a.publickey_mod),
                    (l = a.timestamp),
                    o && s && l
                      ? [
                          2,
                          { publickey_exp: o, publickey_mod: s, timestamp: l },
                        ]
                      : (console.error(
                          "Missing expected field in RSA Key: " +
                            JSON.stringify({
                              publickey_exp: o,
                              publickey_mod: s,
                              timestamp: l,
                            })
                        ),
                        [2, null]));
              case 3:
                return (
                  (u = r.sent()),
                  console.error("Failed to get RSA key: " + u),
                  [2, null]
                );
              case 4:
                return [2];
            }
          });
        });
      }
      var I = [3, 2, 1, 0, 4, 5].reduce(function (e, t, n) {
        return (e[t] = n), e;
      }, {});
      function P(e) {
        return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= 5;
      }
      var U = n("QmxF"),
        H = n.n(U),
        G = n("tmER"),
        x = n.n(G),
        V = (function (e) {
          function t(t) {
            var n =
              e.call(
                this,
                t.transport,
                function (e) {
                  (n.m_eStatus = e.bSuccess ? 3 : 4), t.onComplete(e);
                },
                t.ePlatformType
              ) || this;
            return (n.m_eStatus = 0), n;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.Start = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e, t, n, i, a, o, s, l, u;
                return Object(r.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (0 !== this.m_eStatus)
                        return (
                          console.error(
                            "Cannot start an already started auth session. Create a new session instance."
                          ),
                          [2, 2]
                        );
                      (this.m_eStatus = 1), (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        (e = c.b.Init(C))
                          .Body()
                          .set_platform_type(this.m_ePlatformType),
                        [4, g.BeginAuthSessionViaQR(this.m_transport, e)]
                      );
                    case 2:
                      return (
                        (t = r.sent()),
                        1 !== (n = t.GetEResult())
                          ? (console.error(
                              "Failed to start auth session. Result: " + n
                            ),
                            (this.m_strErrorMessage = "Uh Oh"),
                            this.m_onCompleteCallback({ bSuccess: !1 }),
                            [2, n])
                          : ((i = t.Body().toObject()),
                            (a = i.client_id),
                            (o = i.challenge_url),
                            (s = i.interval),
                            (l = i.request_id),
                            (this.m_strClientID = a),
                            (this.m_strChallengeURL = o),
                            (this.m_msPollInterval = 1e3 * s),
                            (this.m_rgRequestID = l),
                            (this.m_eStatus = 2),
                            this.StartPolling(),
                            [2, n])
                      );
                    case 3:
                      return (
                        (u = r.sent()),
                        console.error("Failed to start auth session. " + u),
                        (this.m_strErrorMessage = "Uh Oh"),
                        this.m_onCompleteCallback({ bSuccess: !1 }),
                        [2, 2]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.Stop = function () {
              this.StopPolling(), (this.m_eStatus = 5);
            }),
            (t.prototype.GetChallengeURL = function () {
              return this.m_strChallengeURL;
            }),
            (t.prototype.GetStatus = function () {
              return this.m_eStatus;
            }),
            Object(r.c)([s.C], t.prototype, "m_eStatus", void 0),
            t
          );
        })(A);
      var Z = n("TKup"),
        D = n.n(Z);
      function q(e) {
        var t = e.transport,
          n = e.onComplete,
          r = e.onStatusChange,
          s = (function (e) {
            var t = Object(i.useState)(new V(e)),
              n = t[0],
              r = t[1];
            return (
              Object(i.useEffect)(
                function () {
                  return (
                    n.Start(),
                    function () {
                      n.Stop();
                    }
                  );
                },
                [n]
              ),
              Object(L.d)(function () {
                return {
                  strChallengeURL: n.GetChallengeURL(),
                  strError: n.GetErrorMessage(),
                  eStatus: n.GetStatus(),
                  reset: function () {
                    return r(new V(e));
                  },
                };
              })
            );
          })({ transport: t, onComplete: n, ePlatformType: e.platform }),
          c = s.eStatus,
          l = s.strChallengeURL,
          m = s.strError;
        s.reset;
        Object(i.useEffect)(
          function () {
            return r && r(c);
          },
          [c]
        );
        var d = 2 === c ? l : u.c.STORE_BASE_URL,
          f = 0 === c || 1 === c,
          g = 4 === c,
          b = 3 === c,
          p = f || g || b;
        return a.a.createElement(
          "div",
          { className: D.a.Column },
          a.a.createElement(
            "div",
            { className: D.a.LoginQR },
            a.a.createElement(
              Q,
              { className: Object(o.a)(D.a.LoginQR, p && D.a.Blur) },
              d
            ),
            p &&
              a.a.createElement(
                "div",
                { className: D.a.Overlay },
                a.a.createElement(
                  "div",
                  { className: D.a.Box },
                  f && a.a.createElement(K, null),
                  g && a.a.createElement(J, null, m),
                  b && a.a.createElement(X, null)
                )
              )
          )
        );
      }
      function Q(e) {
        var t,
          n,
          r = e.children,
          s = e.className,
          c =
            ((n =
              (t = r).length <= 90
                ? { typeNumber: 6, errorCorrectLevel: 3 }
                : void 0),
            (function (e, t) {
              void 0 === t && (t = {});
              var n = t.typeNumber,
                r = t.errorCorrectLevel,
                a = Object(i.useState)(),
                o = a[0],
                s = a[1];
              return (
                Object(i.useEffect)(
                  function () {
                    s(x()(e, { typeNumber: n, errorCorrectLevel: r }).modules);
                  },
                  [e, n, r]
                ),
                o
              );
            })(t, n));
        if (!c) return null;
        for (var l = [], u = 0; u < c.length; u++)
          for (var m = 0; m < c.length; m++)
            l.push(
              a.a.createElement("div", {
                key: u + "_" + m,
                className: Object(o.a)(D.a.Bit, c[u][m] && D.a.Active),
              })
            );
        return a.a.createElement(
          "div",
          {
            className: Object(o.a)(D.a.QRBits, s),
            style: { gridTemplateColumns: "repeat( " + c.length + ", 1fr )" },
          },
          l
        );
      }
      function K() {
        return a.a.createElement("div", null, "Loading...");
      }
      function J(e) {
        return a.a.createElement(
          "div",
          { className: D.a.ErrorMessage },
          e.children
        );
      }
      function X() {
        return a.a.createElement("div", { className: D.a.Success }, "Success!");
      }
      var Y = n("TLQK"),
        $ = n("0OaU"),
        ee = Object(i.createContext)(!1),
        te = function () {
          return Object(i.useContext)(ee);
        };
      function ne(e) {
        var t = e.embedded,
          n = Object(r.f)(e, ["embedded"]);
        return a.a.createElement(
          ee.Provider,
          { value: t },
          a.a.createElement(re, Object(r.a)({}, n))
        );
      }
      function re(e) {
        var t = e.transport,
          n = e.onSuccess,
          r = e.platform,
          o = e.disableQR,
          s = e.autoFocus,
          c = e.renderSuccess,
          l =
            void 0 === c
              ? function () {
                  return a.a.createElement(Ae, null);
                }
              : c,
          m = function (e) {
            var t = e.bSuccess,
              r = e.strRefreshToken,
              i = e.strAccessToken;
            t && n({ strRefreshToken: r, strAccessToken: i });
          },
          d = (function (e) {
            var t = Object(i.useState)(new T(e)),
              n = t[0],
              r = t[1];
            return Object(L.d)(function () {
              return {
                strAccountName: n.GetAccountName(),
                strError: n.GetErrorMessage(),
                strConfirmationAssociatedMessage: n.GetConfirmationAssociatedMessage(),
                eStatus: n.GetStatus(),
                bCanGoBack: n.BCanGoBack(),
                start: n.Start,
                addCode: n.SendSteamGuardCode,
                useCodeOverride: n.UseCodeOverride,
                reset: function () {
                  return r(new T(e));
                },
                goBack: n.GoBack,
              };
            });
          })({ transport: t, onComplete: m, ePlatformType: r }),
          f = d.eStatus,
          g = (d.strError, d.strConfirmationAssociatedMessage),
          b = d.strAccountName,
          p = d.start,
          _ = d.reset,
          h = d.addCode,
          C = d.goBack,
          y = d.useCodeOverride,
          v = Object(i.useState)(0),
          B = (v[0], v[1]),
          S = te();
        if (!!(0 === f || 1 === f || 2 === f)) {
          var w = a.a.createElement(
            "div",
            { className: H.a.SideBySide },
            a.a.createElement(ie, {
              onSubmit: function (e) {
                var t = e.strAccountName,
                  n = e.strPassword;
                return p(t, n);
              },
              status: f,
              autoFocus: s,
            }),
            !o &&
              a.a.createElement(
                "div",
                { className: H.a.QRSection },
                a.a.createElement(
                  oe,
                  { highlight: !0 },
                  Object(Y.f)("#Login_SignIn_OrWithQRCode")
                ),
                a.a.createElement(
                  "div",
                  { className: H.a.QR },
                  a.a.createElement(q, {
                    onStatusChange: B,
                    transport: t,
                    onComplete: m,
                    platform: r,
                  })
                ),
                a.a.createElement(
                  Se,
                  {
                    onClick: function () {
                      return alert("TODO");
                    },
                    align: "center",
                  },
                  Object(Y.f)("#Login_GetMobileApp_Link")
                )
              )
          );
          return S
            ? a.a.createElement(
                Ee,
                { gap: 18, className: H.a.EmbeddedRoot },
                a.a.createElement(Fe, { className: H.a.HeaderLogo }),
                w,
                a.a.createElement(
                  "div",
                  { className: H.a.EmbeddedRootFooter },
                  a.a.createElement(
                    Se,
                    {
                      href:
                        u.c.HELP_BASE_URL +
                        "wizard/HelpWithLogin?redir=" +
                        encodeURIComponent(document.location.href),
                    },
                    Object(Y.f)("#Login_Help_SignIn")
                  ),
                  a.a.createElement(
                    "div",
                    { className: H.a.AccountCreation },
                    a.a.createElement(
                      "span",
                      { className: H.a.AccountCreationPrompt },
                      Object(Y.f)("#Login_NoSteamAccount")
                    ),
                    a.a.createElement(
                      Se,
                      { inline: !0, href: u.c.STORE_BASE_URL + "join/" },
                      Object(Y.f)("#Login_CreateAccount")
                    )
                  )
                ),
                !1
              )
            : a.a.createElement(
                ze,
                {
                  title: S
                    ? a.a.createElement(Fe, { className: H.a.HeaderLogo })
                    : Object(Y.f)("#Login_SignIn"),
                },
                w,
                !1
              );
        }
        switch (f) {
          case 1:
          case 9:
            return a.a.createElement(de, null);
          case 5:
          case 8:
          case 3:
          case 7:
            var E = 5 === f || 8 === f;
            return a.a.createElement(be, {
              type: E ? "mobile" : "email",
              onSubmitCode: h,
              status: f,
              associatedLabel: g,
              accountName: b,
              onBack: C,
            });
          case 6:
          case 4:
            var M = 6 === f;
            return a.a.createElement(Be, {
              type: M ? "mobile" : "email",
              accountName: b,
              onUseCodeOverride: y,
            });
          case 12:
            return a.a.createElement(ge, { reset: _ });
          case 11:
            return a.a.createElement(fe, { reset: _ });
          case 10:
            return a.a.createElement(ze, { compact: !0 }, l());
          default:
            return (
              console.error("Unknown Phase: " + f),
              a.a.createElement(fe, { reset: _ })
            );
        }
      }
      function ie(e) {
        var t = e.onSubmit,
          n = e.status,
          r = e.autoFocus,
          o = Object(i.useState)(""),
          s = o[0],
          c = o[1],
          l = Object(i.useState)(""),
          m = l[0],
          d = l[1],
          f = Object(i.useState)(!1),
          g = f[0],
          b = (f[1], Object(i.useState)(!1)),
          p = b[0],
          _ = b[1],
          h = te(),
          C = 2 === n && !p,
          y = C
            ? a.a.createElement(
                me,
                null,
                Object(Y.f)("#Login_CheckCredentials")
              )
            : a.a.createElement(me, null, " ");
        return a.a.createElement(
          we,
          {
            onSubmit: function () {
              p &&
                t({ strAccountName: s, strPassword: m, bRememberMe: g }).then(
                  function () {
                    return _(!1);
                  }
                );
            },
            className: H.a.LoginForm,
          },
          a.a.createElement(ae, {
            tone: C ? "danger" : void 0,
            label: a.a.createElement(
              oe,
              { highlight: !0 },
              Object(Y.f)("#Login_SignIn_WithAccountName")
            ),
            value: s,
            onChange: function (e) {
              _(!0), c(e);
            },
            autoFocus: r,
          }),
          a.a.createElement(ae, {
            tone: C ? "danger" : void 0,
            label: a.a.createElement(oe, null, Object(Y.f)("#Login_Password")),
            value: m,
            onChange: function (e) {
              _(!0), d(e);
            },
            type: "password",
          }),
          a.a.createElement(le, null),
          y,
          !h &&
            a.a.createElement(
              Se,
              {
                href:
                  u.c.HELP_BASE_URL +
                  "wizard/HelpWithLogin?redir=" +
                  encodeURIComponent(document.location.href),
                align: "center",
              },
              Object(Y.f)("#Login_Help_SignIn")
            )
        );
      }
      function ae(e) {
        var t = e.label,
          n = e.error,
          i = e.tone,
          o = Object(r.f)(e, ["label", "error", "tone"]),
          s = null != i ? i : n ? "danger" : void 0;
        return a.a.createElement(
          "div",
          { className: H.a.TextField },
          "string" == typeof t ? a.a.createElement(oe, null, t) : t,
          a.a.createElement(ce, { type: "error" }, n),
          a.a.createElement(se, Object(r.a)({ tone: s }, o))
        );
      }
      function oe(e) {
        var t = e.children,
          n = e.highlight;
        return a.a.createElement(
          "div",
          { className: Object(o.a)(H.a.FieldLabel, n && H.a.Highlight) },
          t
        );
      }
      function se(e) {
        var t = e.value,
          n = e.onChange,
          r = e.type,
          i = void 0 === r ? "text" : r,
          s = e.tone,
          c = e.className,
          l = e.autoFocus;
        return a.a.createElement("input", {
          value: t,
          type: i,
          autoFocus: l,
          onChange: function (e) {
            return n(e.target.value);
          },
          className: Object(o.a)(
            H.a.TextInput,
            "danger" === s && H.a.Danger,
            c
          ),
        });
      }
      function ce(e) {
        var t = e.children,
          n = e.type;
        return a.a.createElement(
          "div",
          { className: Object(o.a)(H.a.FieldHint, "error" === n && H.a.Error) },
          t
        );
      }
      function le() {
        return a.a.createElement(
          "div",
          { className: H.a.SignInButtonContainer },
          a.a.createElement(ue, null, "Sign in")
        );
      }
      function ue(e) {
        var t = e.disabled,
          n = e.children;
        return a.a.createElement(
          "button",
          { type: "submit", className: H.a.SubmitButton, disabled: t },
          n
        );
      }
      function me(e) {
        var t = e.children || " ";
        return a.a.createElement("div", { className: H.a.FormError }, t);
      }
      function de() {
        return a.a.createElement($.a, null);
      }
      function fe(e) {
        var t = e.reset;
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement("div", null, "Uh oh... somethign went wrong."),
          a.a.createElement("button", { onClick: t }, "Reset")
        );
      }
      function ge(e) {
        var t = e.reset;
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement("div", null, "The login process was stopped."),
          a.a.createElement("button", { onClick: t }, "Reset")
        );
      }
      function be(e) {
        var t = e.type,
          n = e.onSubmitCode,
          r = e.status,
          o = e.accountName,
          s = e.associatedLabel,
          c = (e.onBack, Object(i.useState)([])),
          l = c[0],
          m = c[1],
          d = Object(i.useState)(!1),
          f = d[0],
          g = d[1],
          b = l.join(""),
          p = (function (e) {
            return P(e) && 5 === e.length;
          })(b),
          _ = !f && (8 === r || 7 === r),
          h = a.a.createElement(
            Se,
            {
              href:
                u.c.HELP_BASE_URL +
                "wizard/HelpWithLoginInfo?lost=8&issueid=402",
              align: "center",
            },
            Object(Y.f)("#Login_Help_AccessMobileApp")
          );
        return a.a.createElement(
          ze,
          {
            title: Object(Y.f)("#Login_Title_SteamGuard"),
            bottom: h,
            compact: !0,
          },
          a.a.createElement(
            we,
            {
              onSubmit: function () {
                return (
                  p &&
                  n(b).then(function () {
                    return g(!1);
                  })
                );
              },
            },
            a.a.createElement(
              Ee,
              { alignItems: "center", gap: 20 },
              a.a.createElement(he, { type: t, accountName: o }),
              a.a.createElement(
                Ee,
                { gap: 12, alignItems: "center" },
                a.a.createElement(
                  Ee,
                  { alignItems: "center", gap: 2 },
                  a.a.createElement(
                    me,
                    null,
                    _ && Object(Y.f)("#Login_IncorrectSteamGuard")
                  ),
                  a.a.createElement(Oe, {
                    value: l,
                    onChange: function (e) {
                      f || g(!0), m(e);
                    },
                    tone: _ ? "danger" : void 0,
                  })
                ),
                a.a.createElement(
                  ue,
                  { disabled: !p },
                  Object(Y.f)("#Button_Go")
                )
              ),
              "mobile" === t
                ? a.a.createElement(pe, null)
                : a.a.createElement(_e, { emailAddress: s })
            )
          )
        );
      }
      function pe() {
        return a.a.createElement(
          Me,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: H.a.EnterCodeFromMobileContainer,
          },
          a.a.createElement(
            "div",
            { className: H.a.EnterCodeFromMobile },
            Object(Y.f)("#Login_EnterMobileCode")
          ),
          a.a.createElement(ye, { className: H.a.AwaitingMobileConfIcon })
        );
      }
      function _e(e) {
        return a.a.createElement(
          Me,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: H.a.EnterCodeFromEmailContainer,
          },
          a.a.createElement(
            je,
            { align: "center", spacing: 6 },
            a.a.createElement(
              "div",
              { className: H.a.EnterCodeFromEmail },
              Object(Y.o)(
                "#Login_EnterEmailCode",
                a.a.createElement(
                  "span",
                  { className: H.a.EnterCodeEmailAddress },
                  e.emailAddress
                )
              )
            )
          ),
          a.a.createElement(ve, { className: H.a.AwaitingMobileConfIcon })
        );
      }
      function he(e) {
        var t = e.accountName,
          n =
            "mobile" === e.type
              ? Object(Y.f)("#Login_MobileProtectingAccount")
              : Object(Y.f)("#Login_EmailProtectingAccount"),
          r = te();
        return a.a.createElement(
          "div",
          { className: H.a.ProtectingAccount },
          a.a.createElement(
            "div",
            { className: H.a.Label },
            Object(Y.o)(
              "#Login_ActiveAccountName",
              a.a.createElement("span", { className: H.a.AccountName }, t)
            )
          ),
          !r && a.a.createElement("div", { className: H.a.Description }, n)
        );
      }
      function Ce() {
        return a.a.createElement(
          Ee,
          { alignItems: "center" },
          a.a.createElement(
            "div",
            { className: H.a.AwaitingMobileConfText },
            Object(Y.f)("#Login_AwaitingMobileConfirmation")
          ),
          a.a.createElement(ye, { className: H.a.AwaitingMobileConfIcon })
        );
      }
      function ye(e) {
        return a.a.createElement(
          "svg",
          { viewBox: "0 0 55 49", fill: "none", className: e.className },
          a.a.createElement("path", {
            d:
              "M36.1497 0.664062H18.7667C16.0532 0.664062 13.8485 2.86796 13.8485 5.49568V43.3009C13.8485 46.0134 16.0532 48.1326 18.7667 48.1326H36.0649C38.7784 48.1326 40.9831 45.9287 40.9831 43.3009V5.49568C40.9831 2.78319 38.8632 0.664062 36.1497 0.664062ZM38.1848 43.3009C38.1848 44.4029 37.2521 45.3353 36.1497 45.3353H18.7667C17.6643 45.3353 16.7316 44.4029 16.7316 43.3009V42.1142H38.1848V43.3009ZM38.1848 39.317H16.7316V9.73394H38.1848V39.317ZM38.1848 6.93669H16.7316V5.49568C16.7316 4.39373 17.6643 3.46131 18.7667 3.46131H36.0649C37.1673 3.46131 38.1 4.39373 38.1 5.49568V6.93669H38.1848ZM44.7988 14.7351C44.2053 14.9894 43.9509 15.5827 44.1205 16.1761C45.7316 20.3296 45.7316 24.9069 44.1205 29.0604C43.8661 29.6538 44.2053 30.3319 44.7988 30.5014C44.9684 30.5862 45.0532 30.5862 45.2228 30.5862C45.7316 30.5862 46.1556 30.3319 46.3252 29.8233C48.1907 25.1612 48.1907 19.9905 46.3252 15.2437C46.0708 14.8198 45.3924 14.4808 44.7988 14.7351ZM10.1176 14.7351C9.52399 14.4808 8.84562 14.8198 8.67603 15.4132C6.81054 20.0753 6.81054 25.246 8.67603 29.9928C8.84562 30.4166 9.2696 30.7557 9.77837 30.7557C9.94796 30.7557 10.0328 30.7557 10.2023 30.6709C10.7959 30.4166 11.0503 29.8233 10.8807 29.2299C9.2696 25.0764 9.2696 20.4991 10.8807 16.3456C10.9655 15.5827 10.7111 14.9894 10.1176 14.7351ZM52.3456 11.9378C52.0912 11.3445 51.4977 11.0902 50.9041 11.2597C50.3105 11.514 50.0562 12.1074 50.2257 12.7007V12.7855C52.9392 19.0581 52.9392 26.2631 50.2257 32.451C50.1409 32.7053 50.0562 33.0444 50.2257 33.2987C50.3105 33.553 50.5649 33.8072 50.8193 33.892C50.9889 33.9768 51.0737 33.9768 51.2433 33.9768C51.6673 33.9768 52.0912 33.7225 52.2608 33.2987C55.3135 26.6022 55.3135 18.719 52.3456 11.9378ZM4.69065 12.7855C4.94504 12.1921 4.69065 11.514 4.09709 11.2597C3.8427 11.1749 3.50352 11.0902 3.24913 11.2597C2.99475 11.3445 2.74036 11.5988 2.65557 11.8531C-0.312272 18.719 -0.312272 26.5174 2.65557 33.3834C2.82516 33.8072 3.24913 34.0615 3.67311 34.0615C3.8427 34.0615 4.01229 34.0615 4.09709 33.9768C4.35147 33.892 4.60586 33.6377 4.69065 33.3834C4.77545 33.1291 4.77545 32.7901 4.69065 32.5358C1.9772 26.2631 1.9772 19.0581 4.69065 12.7855ZM20.3778 15.9218C21.2257 15.9218 21.8193 15.2437 21.8193 14.4808C21.8193 13.7179 21.1409 13.0398 20.3778 13.0398C19.6146 13.0398 18.9363 13.7179 18.9363 14.4808C18.9363 15.2437 19.6146 15.9218 20.3778 15.9218ZM24.1088 15.9218C24.9567 15.9218 25.5503 15.2437 25.5503 14.4808C25.5503 13.7179 24.8719 13.0398 24.1088 13.0398C23.2608 13.0398 22.6673 13.7179 22.6673 14.4808C22.5825 15.2437 23.2608 15.9218 24.1088 15.9218ZM27.755 15.9218C28.6029 15.9218 29.1965 15.2437 29.1965 14.4808C29.1965 13.7179 28.5181 13.0398 27.755 13.0398C26.907 13.0398 26.3135 13.7179 26.3135 14.4808C26.3135 15.2437 26.9918 15.9218 27.755 15.9218ZM31.4012 15.9218C32.2491 15.9218 32.8427 15.2437 32.8427 14.4808C32.8427 13.7179 32.1643 13.0398 31.4012 13.0398C30.5532 13.0398 29.9597 13.7179 29.9597 14.4808C29.9597 15.2437 30.638 15.9218 31.4012 15.9218ZM35.1322 15.9218C35.9801 15.9218 36.5737 15.2437 36.5737 14.4808C36.5737 13.7179 35.8953 13.0398 35.1322 13.0398C34.2842 13.0398 33.6907 13.7179 33.6907 14.4808C33.6059 15.2437 34.2842 15.9218 35.1322 15.9218Z",
            fill: "#1A99FF",
          })
        );
      }
      function ve(e) {
        return a.a.createElement(
          "svg",
          { viewBox: "0 0 58 56", fill: "none", className: e.className },
          a.a.createElement("path", {
            d:
              "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
            fill: "#1A99FF",
          })
        );
      }
      function Be(e) {
        var t = e.type,
          n = e.accountName,
          r = e.onUseCodeOverride,
          i = te(),
          o = a.a.createElement(
            Se,
            {
              align: "center",
              onClick: function () {
                return alert("TODO");
              },
            },
            Object(Y.f)("#Login_Help_AccessMobileApp")
          ),
          s = i
            ? a.a.createElement(
                Se,
                { align: "center", onClick: r },
                Object(Y.f)("#Login_EnterCodeInstead")
              )
            : a.a.createElement(
                "div",
                { onClick: r, className: H.a.EnterCodeInsteadLink },
                Object(Y.f)("#Login_EnterCodeInstead")
              );
        return a.a.createElement(
          ze,
          {
            title: Object(Y.f)("#Login_Title_SteamGuard"),
            bottom: o,
            compact: !0,
          },
          a.a.createElement(
            Ee,
            { gap: 20 },
            a.a.createElement(he, { type: t, accountName: n }),
            a.a.createElement(Ce, null),
            s
          )
        );
      }
      function Se(e) {
        var t = e.children,
          n = e.align,
          r = e.inline,
          i = Object(o.a)(H.a.TextLink, "center" === n && H.a.TextAlignCenter);
        if ("href" in e)
          return a.a.createElement("a", { className: i, href: e.href }, t);
        var s = r ? "span" : "div";
        return a.a.createElement(s, { className: i, onClick: e.onClick }, t);
      }
      function we(e) {
        var t = e.onSubmit,
          n = e.children,
          r = e.className;
        return a.a.createElement(
          "form",
          {
            onSubmit: function (e) {
              return e.preventDefault(), t(), !1;
            },
            className: r,
          },
          n
        );
      }
      function Ee(e) {
        var t = e.alignItems,
          n = e.justifyContent,
          r = e.gap,
          i = e.className,
          s = e.children,
          c = Object(o.a)(
            H.a.FlexCol,
            "center" === t && H.a.AlignItemsCenter,
            "center" === n && H.a.JustifyContentCenter,
            i
          ),
          l = r ? { gap: "number" == typeof r ? r + "px" : r } : void 0;
        return a.a.createElement("div", { className: c, style: l }, s);
      }
      function Me(e) {
        var t = e.children,
          n = e.justifyContent,
          r = e.alignItems,
          i = e.className,
          o = {
            display: "flex",
            flexDirection: "row",
            justifyContent: n,
            alignItems: r,
          };
        return a.a.createElement("div", { style: o, className: i }, t);
      }
      function Oe(e) {
        var t = e.value,
          n = e.onChange,
          r = e.tone;
        return a.a.createElement(Re, {
          length: 5,
          value: t,
          onChange: function (e) {
            P(
              (e = e.map(function (e) {
                return e.toUpperCase();
              }))
                .join("")
                .trim()
            ) && n(e);
          },
          tone: r,
          autoFocus: !0,
        });
      }
      function Re(e) {
        for (
          var t = e.length,
            n = e.value,
            r = e.onChange,
            s = e.tone,
            c = e.autoFocus,
            l = Object(i.useRef)([]),
            u = function () {
              return r(
                l.current.map(function (e) {
                  return e.value;
                })
              );
            },
            m = function (e) {
              var t = e.target.nextElementSibling;
              e.target.value && t && t.focus(), u();
            },
            d = function (e) {
              var t;
              -1 ===
              l.current.findIndex(function (e) {
                return !!e.value;
              })
                ? null === (t = l.current[0]) || void 0 === t || t.select()
                : e.target.select();
            },
            f = function (e) {
              var t = e.target;
              if ("Backspace" === e.key || "Delete" === e.key) {
                var n =
                  "Backspace" === e.key
                    ? t.previousElementSibling
                    : t.nextElementSibling;
                "" === t.value &&
                  n &&
                  ((n.value = ""), n.focus(), e.preventDefault(), u());
              } else if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
                (n =
                  "ArrowLeft" === e.key
                    ? t.previousElementSibling
                    : t.nextElementSibling) && (n.focus(), e.preventDefault());
              }
            },
            g = function (e) {
              for (
                var t = e.clipboardData.getData("Text"), n = e.target, r = 0;
                n && r < t.length;

              )
                n.focus(),
                  (n.value = t.charAt(r)),
                  (n = n.nextElementSibling),
                  r++;
              u(), e.preventDefault();
            },
            b = [],
            p = function (e) {
              b.push(
                a.a.createElement("input", {
                  type: "text",
                  maxLength: 1,
                  key: e,
                  ref: function (t) {
                    return (l.current[e] = t);
                  },
                  onChange: m,
                  onFocus: d,
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  onKeyDown: f,
                  onPaste: g,
                  value: n[e] ? n[e][0] : "",
                  autoComplete: "none",
                  autoFocus: 0 === e && c,
                })
              );
            },
            _ = 0;
          _ < t;
          _++
        )
          p(_);
        return a.a.createElement(
          "div",
          {
            className: Object(o.a)(
              H.a.SegmentedCharacterInput,
              "danger" === s && H.a.Danger
            ),
            onClick: function () {
              var e = l.current.find(function (e) {
                return !e.value;
              });
              e ? e.focus() : l.current[l.current.length - 1].focus();
            },
          },
          b
        );
      }
      function je(e) {
        var t = e.children,
          n = e.spacing,
          r = void 0 === n ? 0 : n,
          i = e.align;
        return a.a.createElement(
          Ee,
          { alignItems: i },
          a.a.Children.map(t, function (e, t) {
            return e
              ? a.a.createElement(
                  "div",
                  { style: t > 0 ? { paddingTop: r + "px" } : void 0 },
                  e
                )
              : null;
          }).filter(Boolean)
        );
      }
      function ze(e) {
        var t = e.title,
          n = e.children,
          r = e.bottom,
          i = e.compact,
          s = te();
        return a.a.createElement(
          Ee,
          {
            gap: 18,
            className: Object(o.a)(
              H.a.StandardLayout,
              s && H.a.Embedded,
              i && H.a.Compact
            ),
          },
          "string" == typeof t
            ? a.a.createElement("div", { className: H.a.PrimaryHeader }, t)
            : t,
          a.a.createElement("div", { className: H.a.FormContainer }, n),
          r
        );
      }
      function Fe(e) {
        return a.a.createElement(
          "svg",
          {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
          },
          a.a.createElement("path", {
            d:
              "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
            fill: "#E0E1E6",
          }),
          a.a.createElement("path", {
            d:
              "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
            fill: "#E0E1E6",
          }),
          a.a.createElement("path", {
            d:
              "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
            fill: "#E0E1E6",
          }),
          a.a.createElement("path", {
            d:
              "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
            fill: "#E0E1E6",
          }),
          a.a.createElement("path", {
            d:
              "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
            fill: "#E0E1E6",
          }),
          a.a.createElement("path", {
            d:
              "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
            fill: "#E0E1E6",
          }),
          a.a.createElement("path", {
            d:
              "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
            fill: "#E0E1E6",
          }),
          a.a.createElement("path", {
            d:
              "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
            fill: "#E0E1E6",
          }),
          a.a.createElement("path", {
            d:
              "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
            fill: "#E0E1E6",
          })
        );
      }
      function Ae() {
        return a.a.createElement(
          Ee,
          { alignItems: "center", justifyContent: "center" },
          a.a.createElement(de, null)
        );
      }
      var Le = function () {
        return Object(r.b)(void 0, void 0, void 0, function () {
          return Object(r.e)(this, function (e) {
            return console.log("hi"), [2];
          });
        });
      };
      function Ne(e) {
        var t = e.cm.GetServiceTransport();
        return a.a.createElement(ne, {
          transport: t,
          onSuccess: Le,
          platform: 1,
        });
      }
    },
  },
]);
//# sourceMappingURL=login.js.map
