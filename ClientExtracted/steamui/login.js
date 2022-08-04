/* Third-party software licenses can be found at licenses.txt */
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [4535],
  {
    59701: (e) => {
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
        AccountCreationPrompt: "newlogindialog_AccountCreationPrompt_1h5_x",
        FailureTitle: "newlogindialog_FailureTitle_A3Y-u",
        FailureDescription: "newlogindialog_FailureDescription_3gFes",
      };
    },
    43921: (e) => {
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
    50885: (e) => {
      e.exports = {
        QRBits: "qrcode_QRBits_3FhhK",
        Bit: "qrcode_Bit_2Yuvr",
        Active: "qrcode_Active_274P1",
      };
    },
    8199: (e) => {
      e.exports = {
        Login: "login_Login_VZ6x_",
        TitleBar: "login_TitleBar_1C4of",
        CloseButton: "login_CloseButton_1mcCj",
      };
    },
    14344: (e, t, n) => {
      "use strict";
      n.d(t, { JQ: () => o, s_: () => u });
      var o,
        a = n(67294),
        r = n(36876),
        i = n.n(r),
        s = n(45520),
        l = n(50885),
        c = n.n(l);
      function u(e) {
        let {
          quality: t,
          children: n,
          className: r,
          activeBitStyle: l,
          suppressBorder: u,
        } = e;
        void 0 === t && (t = o.M), (l = l || {});
        let m = !u;
        const d = (function (e, t = {}) {
          const { typeNumber: n, errorCorrectLevel: o } = t,
            [r, s] = (0, a.useState)();
          return (
            (0, a.useEffect)(() => {
              s(i()(e, { typeNumber: n, errorCorrectLevel: o }).modules);
            }, [e, n, o]),
            r
          );
        })(n, { typeNumber: 6, errorCorrectLevel: t });
        if (!d) return null;
        const g = (0, s.Z)(c().Bit),
          C = (0, s.Z)(c().Bit, c().Active),
          _ = [];
        function h(e, t, n) {
          const o = e ? C : g;
          _.push(
            a.createElement("div", {
              key: `${n}_${t}`,
              className: o,
              style: e ? l : {},
            })
          );
        }
        if (m) for (let e = -1; e < d.length + 1; e++) h(!1, e, -1);
        for (let e = 0; e < d.length; e++) {
          m && h(!1, -1, e);
          for (let t = 0; t < d.length; t++) {
            h(d[e][t], t, e);
          }
          m && h(!1, d.length, e);
        }
        if (m) for (let e = 0; e < d.length + 2; e++) h(!1, e, d.length);
        let E = d.length;
        return (
          m && (E += 2),
          a.createElement(
            "div",
            {
              className: (0, s.Z)(c().QRBits, r),
              style: { gridTemplateColumns: `repeat( ${E}, 1fr )` },
            },
            _
          )
        );
      }
      !(function (e) {
        (e[(e.L = 1)] = "L"),
          (e[(e.M = 0)] = "M"),
          (e[(e.Q = 3)] = "Q"),
          (e[(e.H = 2)] = "H");
      })(o || (o = {}));
    },
    13061: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => ke });
      var o = n(67294),
        a = n(8199),
        r = n.n(a),
        i = n(7952),
        s = n(78869),
        l = n(70655),
        c = n(10708),
        u = n(45520),
        m = n(22188),
        d = n(9669),
        g = n.n(d),
        C = n(61673),
        _ = (n(65030), n(13271)),
        h = n(82155),
        E = n(14838),
        p = n(36378),
        f = (n(21151), n(38440)),
        S = n(62689);
      class v extends C.io {
        constructor(e) {
          super(
            e.transport,
            (t) => {
              this.m_eStatus = t.bSuccess ? 14 : 15;
              const n = t.bSuccess
                ? Object.assign(Object.assign({}, t), {
                    strAccountName: this.m_strAccountName,
                    steamid: this.m_steamid,
                  })
                : t;
              e.onComplete(n);
            },
            e.ePlatformType
          ),
            (this.m_eStatus = 0),
            (this.m_strConfirmationAssociatedMessage = ""),
            (this.m_bUsingCodeOverride = !1),
            (this.m_strWeakAuthToken = "");
        }
        Start(e, t, n) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            if (0 !== this.m_eStatus && 2 !== this.m_eStatus)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance."
                ),
                2
              );
            (this.m_eStatus = 1), (this.m_bUsingCodeOverride = !1);
            try {
              const o = yield (function (e, t) {
                return (0, l.mG)(this, void 0, void 0, function* () {
                  const n = c.gA.Init(p.kp);
                  n.Body().set_account_name(t);
                  try {
                    const t = yield p.$h.GetPasswordRSAPublicKey(e, n);
                    if ((t.DEBUG_LogToConsole(), 1 !== t.GetEResult()))
                      return (
                        console.error(
                          `Failed to get RSA key with EResult: ${t.GetEResult()}`
                        ),
                        null
                      );
                    const {
                      publickey_exp: o,
                      publickey_mod: a,
                      timestamp: r,
                    } = t.Body().toObject();
                    return o && a && r
                      ? { publickey_exp: o, publickey_mod: a, timestamp: r }
                      : (console.error(
                          `Missing expected field in RSA Key: ${JSON.stringify({
                            publickey_exp: o,
                            publickey_mod: a,
                            timestamp: r,
                          })}`
                        ),
                        null);
                  } catch (e) {
                    return console.error(`Failed to get RSA key: ${e}`), null;
                  }
                });
              })(this.m_transport, e);
              if (!o)
                return (
                  console.error(
                    "Cannot start auth session without a valid RSA key"
                  ),
                  2
                );
              const a = (0, E.IC)(t, o),
                r = c.gA.Init(p._u);
              r.Body().set_account_name(e),
                r.Body().set_encrypted_password(a),
                r.Body().set_encryption_timestamp(o.timestamp),
                r.Body().set_remember_login(!!n),
                r.Body().set_platform_type(this.m_ePlatformType),
                r.Body().set_device_friendly_name(window.navigator.userAgent),
                r.Body().set_persistence(n ? 1 : 0);
              const i = yield p.$h.BeginAuthSessionViaCredentials(
                this.m_transport,
                r
              );
              return (0, m.z)(() =>
                (0, l.mG)(this, void 0, void 0, function* () {
                  const t = i.GetEResult(),
                    n = i.Hdr().transport_error();
                  if (1 !== t)
                    return 5 === t
                      ? ((this.m_eStatus = 2), t)
                      : (console.error(
                          `Failed to start auth session. Result: ${t} Transport: ${n}`
                        ),
                        (this.m_eFailureState = C.NZ.Generic),
                        this.m_onCompleteCallback({ bSuccess: !1 }),
                        t);
                  this.m_strAccountName = e;
                  const {
                    client_id: o,
                    request_id: a,
                    interval: r,
                    allowed_confirmations: l,
                    steamid: c,
                    weak_token: u,
                  } = i.Body().toObject();
                  if (
                    ((this.m_msPollInterval = 1e3 * r),
                    (this.m_strClientID = o),
                    (this.m_rgRequestID = a),
                    (this.m_steamid = c),
                    (this.m_strWeakAuthToken = u),
                    l.find(({ confirmation_type: e }) => 6 === e))
                  ) {
                    const e = new FormData();
                    e.append("sessionid", s.De.SESSIONID),
                      e.append("clientid", o),
                      e.append("steamid", this.m_steamid);
                    const t = `${s.De.LOGIN_BASE_URL}jwt/checkdevice`;
                    try {
                      if (
                        1 ==
                        (yield g().post(t, e, { withCredentials: !0 })).data
                          .result
                      )
                        return (this.m_eStatus = 4), this.StartPolling(!0), 1;
                    } catch (e) {
                      console.log(`checkdevice ajax failed: ${e.message}`);
                    }
                  }
                  const m = (function (e) {
                      let t = e[0] || 0;
                      e.length > 1 && (t = e.sort((e, t) => b[e] - b[t])[0]);
                      return t;
                    })(l.map(({ confirmation_type: e }) => e)),
                    d = l.find(({ confirmation_type: e }) => e === m);
                  switch (
                    (d &&
                      d.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        d.associated_message),
                    m)
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
                (this.m_eFailureState = C.NZ.Generic),
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
          return (0, l.mG)(this, void 0, void 0, function* () {
            try {
              const n = 3 === this.m_eStatus || 10 === this.m_eStatus,
                o = c.gA.Init(p.Am);
              o.Body().set_client_id(this.m_strClientID),
                o.Body().set_steamid(this.m_steamid),
                o.Body().set_code(e),
                o.Body().set_code_type(n ? 2 : 3);
              const a = (yield p.$h.UpdateAuthSessionWithSteamGuardCode(
                this.m_transport,
                o
              )).GetEResult();
              if (1 !== a) {
                if (!t) return a;
                switch (a) {
                  case 65:
                  case 88:
                    return (this.m_eStatus = n ? 10 : 11), a;
                  case 27:
                    return (
                      (this.m_eFailureState = C.NZ.Expired),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      a
                    );
                  default:
                    return (
                      console.error(
                        `Failed to update auth session with SG code. Result: ${a}`
                      ),
                      (this.m_eFailureState = C.NZ.Generic),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      a
                    );
                }
              }
              return (this.m_eStatus = 13), this.StartPolling(), a;
            } catch (e) {
              return (
                console.error(
                  `Failed to update auth session with SG code. ${e}`
                ),
                (this.m_eFailureState = C.NZ.Generic),
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
          return (0, l.mG)(this, void 0, void 0, function* () {
            this.m_weakAuthWebInterface = new f.J(
              s.De.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken
            );
            try {
              const e = c.gA.Init(S._w),
                t = yield S.Sz.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  e
                );
              1 != t.GetEResult()
                ? (t.DEBUG_LogToConsole(),
                  console.error(
                    "An unexpected error occured while adding an authenticator",
                    t.GetEResult()
                  ),
                  (this.m_eFailureState = C.NZ.Generic),
                  (this.m_eStatus = 15))
                : (console.log("Server sent us an SMS"), (this.m_eStatus = 8));
            } catch (e) {
              console.error(
                "An unexpected error occured while moving an authenticator",
                e
              ),
                (this.m_eFailureState = C.NZ.Generic),
                (this.m_eStatus = 15);
            }
          });
        }
        ResendMoveCode() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const e = c.gA.Init(S._w),
              t = yield S.Sz.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                e
              );
            1 != t.GetEResult()
              ? (t.DEBUG_LogToConsole(),
                console.error(
                  "An unexpected error occured while adding an authenticator",
                  t.GetEResult()
                ),
                (this.m_eFailureState = C.NZ.Generic),
                (this.m_eStatus = 15))
              : (console.log("Server resent us an SMS"), (this.m_eStatus = 8));
          });
        }
        FinishMoveAuthenticator(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const t = c.gA.Init(S.AX);
            t.Body().set_sms_code(e), t.Body().set_generate_new_token(!0);
            const n = yield S.Sz.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              t
            );
            94 == n.GetEResult()
              ? (console.log(`Invalid SMS code for authenticator move ${e}`),
                (this.m_eStatus = 12))
              : n.Body().success()
              ? ((this.m_replacementAuthenticator = (0, C.tY)(
                  n.Body().replacement_token().toObject()
                )),
                console.log(
                  "Server sent us a replacement token",
                  this.m_replacementAuthenticator
                ),
                (this.m_eStatus = 9),
                (this.m_bUsingCodeOverride = !1))
              : (n.DEBUG_LogToConsole(),
                console.error(
                  "Error when calling RemoveAuthenticatorViaChallengeContinue",
                  n.GetEResult()
                ),
                (this.m_eFailureState = C.NZ.Generic),
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
      (0, l.gn)([m.LO], v.prototype, "m_eStatus", void 0),
        (0, l.gn)([h.ak], v.prototype, "Start", null),
        (0, l.gn)([h.ak], v.prototype, "SendSteamGuardCode", null),
        (0, l.gn)([h.ak], v.prototype, "UseCodeOverride", null),
        (0, l.gn)([h.ak], v.prototype, "CantAccessCode", null),
        (0, l.gn)([h.ak], v.prototype, "StartMoveAuthenticator", null),
        (0, l.gn)([h.ak], v.prototype, "ResendMoveCode", null),
        (0, l.gn)([h.ak], v.prototype, "FinishMoveAuthenticator", null),
        (0, l.gn)([h.ak], v.prototype, "FinishMoveRecovery", null),
        (0, l.gn)([h.ak], v.prototype, "GoBack", null);
      const b = [4, 3, 2, 1, 0, 5].reduce((e, t, n) => ((e[t] = n), e), {});
      function L(e) {
        return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= 5;
      }
      var w = n(12369),
        y = n(59701),
        k = n.n(y),
        A = n(14344),
        x = n(43921),
        N = n.n(x);
      function R(e) {
        const {
            transport: t,
            onComplete: n,
            onStatusChange: a,
            platform: r,
          } = e,
          {
            eStatus: i,
            strChallengeURL: l,
            bHadRemoteInteraction: c,
            reset: m,
          } = (0, w.P)({ transport: t, onComplete: n, ePlatformType: r });
        (0, o.useEffect)(() => a && a(i), [a, i]);
        const d = 2 === i ? l : s.De.STORE_BASE_URL,
          g = 0 === i || 1 === i || c,
          C = 4 === i,
          _ = 3 === i,
          h = g || C || _;
        return o.createElement(
          "div",
          { className: N().Column },
          o.createElement(
            "div",
            { className: N().LoginQR },
            o.createElement(
              A.s_,
              {
                quality: I(d),
                className: (0, u.Z)(N().LoginQR, h && N().Blur),
              },
              d
            ),
            h &&
              o.createElement(
                "div",
                { className: N().Overlay },
                o.createElement(
                  "div",
                  { className: N().Box },
                  g && o.createElement(F, { size: "small" }),
                  C && o.createElement(B, { reset: m }),
                  _ && o.createElement(M, null)
                )
              )
          )
        );
      }
      function I(e) {
        return e.length <= 90 ? A.JQ.Q : void 0;
      }
      function F(e) {
        const { size: t } = e;
        return o.createElement("div", {
          className: (0, u.Z)(
            N().Loading,
            "small" == t && N().Small,
            ("medium" == t || !t) && N().Medium,
            "large" == t && N().Large
          ),
        });
      }
      function B(e) {
        return o.createElement(
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
          o.createElement("path", {
            fill: "none",
            stroke: "#fff",
            strokeWidth: "30",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
          }),
          o.createElement("polygon", {
            points: "147.639,108.361 245.755,10.166 245.834,108.361",
            fill: "#fff",
          })
        );
      }
      function M() {
        return o.createElement(
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
          o.createElement("polyline", {
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
      var H = n(27194),
        G = n(62081);
      n(21645);
      const T = (0, o.createContext)(!1),
        Z = () => (0, o.useContext)(T);
      function D(e) {
        const { embedded: t } = e,
          n = (0, l._T)(e, ["embedded"]);
        return o.createElement(
          T.Provider,
          { value: t },
          o.createElement(
            "div",
            { className: k().Login },
            o.createElement(V, Object.assign({}, n))
          )
        );
      }
      function V(e) {
        const {
            transport: t,
            onSuccess: n,
            platform: a,
            disableQR: r,
            autoFocus: i,
            refreshInfo: l,
            renderSuccess: c = () => o.createElement(ve, null),
          } = e,
          u = ({
            bSuccess: e,
            strRefreshToken: t,
            strAccessToken: o,
            strAccountName: a,
          }) => {
            e &&
              n({ strRefreshToken: t, strAccessToken: o, strAccountName: a });
          };
        let {
          eStatus: m,
          eFailureState: d,
          strConfirmationAssociatedMessage: g,
          strAccountName: h,
          start: E,
          reset: p,
          addCode: f,
          goBack: S,
          useCodeOverride: b,
        } = (function (e) {
          const [t, n] = (0, o.useState)(new v(e));
          return (0, _.SZ)(() => ({
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
            reset: () => n(new v(e)),
            goBack: t.GoBack,
          }));
        })({ transport: t, onComplete: u, ePlatformType: a });
        const [L, w] = (0, o.useState)(0),
          y = Z(),
          A = ({ strAccountName: e, strPassword: t, bRememberMe: n }) =>
            E(e, t, n);
        if (!!(0 === m || 1 === m || 2 === m)) {
          const n = o.createElement(
            "div",
            { className: k().SideBySide },
            o.createElement(X, {
              onSubmit: A,
              status: m,
              autoFocus: i,
              refreshInfo: e.refreshInfo,
            }),
            !r &&
              o.createElement(
                "div",
                { className: k().QRSection },
                o.createElement(
                  Q,
                  { highlight: !0 },
                  (0, H.Xx)("#Login_SignIn_OrWithQRCode")
                ),
                o.createElement(
                  "div",
                  { className: k().QR },
                  o.createElement(R, {
                    onStatusChange: w,
                    transport: t,
                    onComplete: u,
                    platform: a,
                  })
                ),
                o.createElement(
                  de,
                  { href: `${s.De.STORE_BASE_URL}mobile`, align: "center" },
                  (0, H.Xx)("#Login_GetMobileApp_Link")
                )
              )
          );
          if (y) {
            let e = s.De.IN_CLIENT;
            return o.createElement(
              Ce,
              { gap: 36, className: k().EmbeddedRoot },
              !e &&
                o.createElement(
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
              !l && o.createElement(Se, { className: k().HeaderLogo }),
              o.createElement(P, { refreshInfo: l }),
              !e && o.createElement(U, null),
              n,
              o.createElement(
                "div",
                { className: k().EmbeddedRootFooter },
                o.createElement(
                  de,
                  {
                    href: `${
                      s.De.HELP_BASE_URL
                    }wizard/HelpWithLogin?redir=${encodeURIComponent(
                      document.location.href
                    )}`,
                  },
                  (0, H.Xx)("#Login_Help_SignIn")
                ),
                o.createElement(
                  "div",
                  { className: k().AccountCreation },
                  o.createElement(
                    "span",
                    { className: k().AccountCreationPrompt },
                    (0, H.Xx)("#Login_NoSteamAccount")
                  ),
                  o.createElement(
                    de,
                    { inline: !0, href: `${s.De.STORE_BASE_URL}join/` },
                    (0, H.Xx)("#Login_CreateAccount")
                  )
                )
              ),
              !e && !1
            );
          }
          const c = o.createElement(
            "div",
            { style: { display: "flex", flexDirection: "column", gap: "8px" } },
            o.createElement(
              "div",
              { style: { fontSize: "14px", color: "#d8d632", width: "380px" } },
              "QR code functionality is currently limited to play testers with the updated app. Inquire in the mobile slack channel."
            ),
            o.createElement(
              "div",
              { className: k().PrimaryHeader },
              e.refreshInfo
                ? (0, H.Xx)("#Login_RefreshSignIn")
                : (0, H.Xx)("#Login_SignIn")
            ),
            o.createElement(P, { refreshInfo: e.refreshInfo }),
            o.createElement(U, null)
          );
          return o.createElement(fe, { title: c }, n, !1);
        }
        switch (m) {
          case 1:
          case 13:
            return o.createElement(te, null);
          case 5:
          case 11:
          case 3:
          case 10:
            const e = 5 === m || 11 === m;
            return o.createElement(ae, {
              type: e ? "mobile" : "email",
              onSubmitCode: f,
              status: m,
              associatedLabel: g,
              accountName: h,
              onBack: S,
            });
          case 6:
          case 4:
            const t = 6 === m;
            return o.createElement(me, {
              type: t ? "mobile" : "email",
              accountName: h,
              onUseCodeOverride: b,
            });
          case 16:
            return o.createElement(oe, { reset: p });
          case 15:
            return o.createElement(ne, { reset: p, failure: d });
          case 14:
            return o.createElement(fe, { compact: !0 }, c());
          default:
            return (
              console.error(`Unknown Phase: ${m}`),
              o.createElement(ne, { reset: p, failure: C.NZ.Generic })
            );
        }
      }
      function P(e) {
        if (!e.refreshInfo) return null;
        let t;
        switch (e.refreshInfo.reason) {
          case 2:
          case 7:
          default:
            t = "#Login_RefreshReason_Generic";
            break;
          case 6:
            t = "#Login_RefreshReason_LoggedInElsewhere";
            break;
          case 34:
            t = "#Login_RefreshReason_LogonSessionReplaced";
            break;
          case 5:
            t = "#Login_RefreshReason_InvalidPassword";
            break;
          case 26:
            t = "#Login_RefreshReason_Revoked";
            break;
          case 27:
            t = "#Login_RefreshReason_Expired";
            break;
          case 49:
            t = "#Login_RefreshReason_PasswordRequiredToKickSession";
            break;
          case 43:
            t = "#Login_RefreshReason_AccountDisabled";
            break;
          case 69:
            t = "#Login_RefreshReason_ParentalControlRestricted";
            break;
          case 84:
            t = "#Login_RefreshReason_RateLimitExceeded";
        }
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: k().RefreshTitle },
            (0, H.Xx)("#Login_RefreshSignIn")
          ),
          o.createElement("div", { className: k().RefreshReason }, (0, H.Xx)(t))
        );
      }
      function U() {
        const e = window.location.href.includes("?")
          ? window.location.href + "&oldauth=1"
          : window.location.href + "?oldauth=1";
        return o.createElement(
          "div",
          { style: { fontSize: "12px" } },
          "Having trouble with new login? ",
          o.createElement(
            "a",
            { href: e, style: { textDecoration: "underline" } },
            "Click here"
          ),
          " to use the old experience."
        );
      }
      function X(e) {
        var t;
        const {
            onSubmit: n,
            status: a,
            autoFocus: r,
            refreshInfo: i,
            rememberMeDefault: l = !0,
          } = e,
          [c, u] = (0, o.useState)(
            null !== (t = null == i ? void 0 : i.account_name) && void 0 !== t
              ? t
              : ""
          ),
          [m, d] = (0, o.useState)(""),
          [g, C] = (0, o.useState)(l),
          [_, h] = (0, o.useState)(!1),
          E = Z(),
          p = 2 === a && !_,
          f = p
            ? o.createElement(ee, null, (0, H.Xx)("#Login_CheckCredentials"))
            : o.createElement(ee, null, " "),
          S = r && !i,
          v = r && !!i;
        return o.createElement(
          ge,
          {
            onSubmit: () => {
              _ &&
                n({ strAccountName: c, strPassword: m, bRememberMe: g }).then(
                  () => h(!1)
                );
            },
            className: k().LoginForm,
          },
          o.createElement(O, {
            tone: p ? "danger" : void 0,
            label: o.createElement(
              Q,
              { highlight: !0 },
              (0, H.Xx)("#Login_SignIn_WithAccountName")
            ),
            value: c,
            onChange: (e) => {
              h(!0), u(e);
            },
            autoFocus: S,
            disabled: !!i,
          }),
          o.createElement(O, {
            tone: p ? "danger" : void 0,
            label: o.createElement(Q, null, (0, H.Xx)("#Login_Password")),
            value: m,
            onChange: (e) => {
              h(!0), d(e);
            },
            type: "password",
            autoFocus: v,
          }),
          o.createElement(q, {
            label: (0, H.Xx)("#Login_RememberMe_Short"),
            value: g,
            onChange: C,
          }),
          i ? o.createElement(J, null) : o.createElement(z, null),
          f,
          !E &&
            o.createElement(
              de,
              {
                href: `${
                  s.De.HELP_BASE_URL
                }wizard/HelpWithLogin?redir=${encodeURIComponent(
                  document.location.href
                )}`,
                align: "center",
              },
              (0, H.Xx)("#Login_Help_SignIn")
            )
        );
      }
      function O(e) {
        const { label: t, error: n, tone: a, autoFocus: r } = e,
          i = (0, l._T)(e, ["label", "error", "tone", "autoFocus"]),
          s = null != a ? a : n ? "danger" : void 0;
        return o.createElement(
          "div",
          { className: k().TextField },
          "string" == typeof t ? o.createElement(Q, null, t) : t,
          o.createElement(j, { type: "error" }, n),
          o.createElement($, Object.assign({ autoFocus: r, tone: s }, i))
        );
      }
      function Q(e) {
        const { children: t, highlight: n } = e;
        return o.createElement(
          "div",
          { className: (0, u.Z)(k().FieldLabel, n && k().Highlight) },
          t
        );
      }
      function $(e) {
        const {
          value: t,
          onChange: n,
          type: a = "text",
          tone: r,
          className: i,
          autoFocus: s,
          disabled: l,
        } = e;
        return o.createElement("input", {
          value: t,
          type: a,
          autoFocus: s,
          onChange: (e) => n(e.target.value),
          className: (0, u.Z)(k().TextInput, "danger" === r && k().Danger, i),
          disabled: l,
        });
      }
      function j(e) {
        const { children: t, type: n } = e;
        return o.createElement(
          "div",
          { className: (0, u.Z)(k().FieldHint, "error" === n && k().Error) },
          t
        );
      }
      function q(e) {
        const { label: t, onChange: n, value: a } = e;
        let r = () => {
          n && n(!a);
        };
        return o.createElement(
          "div",
          {
            className: k().CheckboxField,
            onClick: r,
            onKeyPress: (e) => {
              (" " != e.key && "Enter" != e.key) || r();
            },
          },
          o.createElement(W, { value: a }),
          o.createElement("div", { className: k().CheckboxFieldLabel }, t)
        );
      }
      function W(e) {
        const { value: t } = e;
        return o.createElement(
          "div",
          { tabIndex: 0, className: k().Checkbox },
          t && o.createElement("div", { className: k().Check })
        );
      }
      function z() {
        return o.createElement(
          "div",
          { className: k().SignInButtonContainer },
          o.createElement(K, null, (0, H.Xx)("#Login_SignIn"))
        );
      }
      function J() {
        return o.createElement(
          "div",
          { className: k().RefreshButtonContainer },
          o.createElement(
            "button",
            { className: k().SubmitButton, type: "submit" },
            (0, H.Xx)("#Login_SignIn")
          ),
          o.createElement(
            "button",
            {
              className: k().RefreshQuitButton,
              onClick: () => {
                SteamClient.User.StartShutdown(!0);
              },
            },
            (0, H.Xx)("#Login_ExitSteam")
          )
        );
      }
      function K(e) {
        return o.createElement(Y, Object.assign({ type: "submit" }, e));
      }
      function Y(e) {
        return o.createElement(
          "button",
          Object.assign({ className: k().SubmitButton }, e)
        );
      }
      function ee(e) {
        const t = e.children || " ";
        return o.createElement("div", { className: k().FormError }, t);
      }
      function te() {
        return o.createElement(
          fe,
          { compact: !0 },
          o.createElement(
            Ce,
            { alignItems: "center" },
            o.createElement(G.V, null)
          )
        );
      }
      function ne(e) {
        const { reset: t, failure: n } = e,
          { title: a, description: r } = (function (e) {
            switch (e) {
              case C.NZ.None:
                return { title: "", description: "" };
              case C.NZ.Expired:
                return {
                  title: (0, H.Xx)("#Login_Error_Expired_Title"),
                  description: (0, H.Xx)("#Login_Error_Expired_Description"),
                };
              case C.NZ.Generic:
              default:
                return {
                  title: (0, H.Xx)("#Error_Generic"),
                  description: (0, H.Xx)("#Login_Error_Default_Description"),
                };
            }
          })(n);
        return o.createElement(
          fe,
          { compact: !0 },
          o.createElement(
            Ce,
            { alignItems: "center", gap: 12 },
            o.createElement("div", { className: k().FailureTitle }, a),
            o.createElement("div", { className: k().FailureDescription }, r),
            o.createElement(Y, { onClick: t }, (0, H.Xx)("#Button_Back"))
          )
        );
      }
      function oe(e) {
        const { reset: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement("div", null, "The login process was stopped."),
          o.createElement("button", { onClick: t }, "Reset")
        );
      }
      function ae(e) {
        const {
            type: t,
            onSubmitCode: n,
            status: a,
            accountName: r,
            associatedLabel: i,
            onBack: l,
          } = e,
          [c, u] = (0, o.useState)([]),
          [m, d] = (0, o.useState)(!1),
          [g, C] = (0, o.useState)(!1),
          _ = c.join(""),
          h = (function (e) {
            return L(e) && 5 === e.length;
          })(_),
          E = () => {
            h && n(_).then(() => d(!1));
          };
        (0, o.useEffect)(() => {
          g && (C(!1), E());
        }, [g]);
        const p = !m && (11 === a || 10 === a),
          f = o.createElement(
            de,
            {
              href: `${s.De.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`,
              align: "center",
            },
            (0, H.Xx)("#Login_Help_AccessMobileApp")
          );
        return o.createElement(
          fe,
          {
            title: (0, H.Xx)("#Login_Title_SteamGuard"),
            bottom: f,
            compact: !0,
          },
          o.createElement(
            ge,
            { onSubmit: E },
            o.createElement(
              Ce,
              { alignItems: "center", gap: 20 },
              o.createElement(se, { type: t, accountName: r }),
              o.createElement(
                Ce,
                { gap: 12, alignItems: "center" },
                o.createElement(
                  Ce,
                  { alignItems: "center", gap: 2 },
                  p &&
                    o.createElement(
                      ee,
                      null,
                      (0, H.Xx)("#Login_IncorrectSteamGuard")
                    ),
                  o.createElement(he, {
                    value: c,
                    onChange: (e) => {
                      m || d(!0), u(e);
                    },
                    onPaste: () => {
                      C(!0);
                    },
                    tone: p ? "danger" : void 0,
                  })
                ),
                o.createElement(K, { disabled: !h }, (0, H.Xx)("#Button_Go"))
              ),
              "mobile" === t
                ? o.createElement(re, null)
                : o.createElement(ie, { emailAddress: i })
            )
          )
        );
      }
      function re() {
        return o.createElement(
          _e,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: k().EnterCodeFromMobileContainer,
          },
          o.createElement(
            "div",
            { className: k().EnterCodeFromMobile },
            (0, H.Xx)("#Login_EnterMobileCode")
          ),
          o.createElement(ce, { className: k().AwaitingMobileConfIcon })
        );
      }
      function ie(e) {
        return o.createElement(
          _e,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: k().EnterCodeFromEmailContainer,
          },
          o.createElement(
            pe,
            { align: "center", spacing: 6 },
            o.createElement(
              "div",
              { className: k().EnterCodeFromEmail },
              (0, H.kQ)(
                "#Login_EnterEmailCode",
                o.createElement(
                  "span",
                  { className: k().EnterCodeEmailAddress },
                  e.emailAddress
                )
              )
            )
          ),
          o.createElement(ue, { className: k().AwaitingMobileConfIcon })
        );
      }
      function se(e) {
        const { accountName: t, type: n } = e,
          a =
            "mobile" === n
              ? (0, H.Xx)("#Login_MobileProtectingAccount")
              : (0, H.Xx)("#Login_EmailProtectingAccount"),
          r = Z();
        return o.createElement(
          "div",
          { className: k().ProtectingAccount },
          o.createElement(
            "div",
            { className: k().Label },
            (0, H.kQ)(
              "#Login_ActiveAccountName",
              o.createElement("span", { className: k().AccountName }, t)
            )
          ),
          !r && o.createElement("div", { className: k().Description }, a)
        );
      }
      function le() {
        return o.createElement(
          Ce,
          { gap: 10, alignItems: "center" },
          o.createElement(
            "div",
            { className: k().AwaitingMobileConfText },
            (0, H.Xx)("#Login_AwaitingMobileConfirmation")
          ),
          o.createElement(ce, { className: k().AwaitingMobileConfIcon })
        );
      }
      function ce(e) {
        return o.createElement(
          "svg",
          { viewBox: "0 0 55 49", fill: "none", className: e.className },
          o.createElement("path", {
            d: "M36.1497 0.664062H18.7667C16.0532 0.664062 13.8485 2.86796 13.8485 5.49568V43.3009C13.8485 46.0134 16.0532 48.1326 18.7667 48.1326H36.0649C38.7784 48.1326 40.9831 45.9287 40.9831 43.3009V5.49568C40.9831 2.78319 38.8632 0.664062 36.1497 0.664062ZM38.1848 43.3009C38.1848 44.4029 37.2521 45.3353 36.1497 45.3353H18.7667C17.6643 45.3353 16.7316 44.4029 16.7316 43.3009V42.1142H38.1848V43.3009ZM38.1848 39.317H16.7316V9.73394H38.1848V39.317ZM38.1848 6.93669H16.7316V5.49568C16.7316 4.39373 17.6643 3.46131 18.7667 3.46131H36.0649C37.1673 3.46131 38.1 4.39373 38.1 5.49568V6.93669H38.1848ZM44.7988 14.7351C44.2053 14.9894 43.9509 15.5827 44.1205 16.1761C45.7316 20.3296 45.7316 24.9069 44.1205 29.0604C43.8661 29.6538 44.2053 30.3319 44.7988 30.5014C44.9684 30.5862 45.0532 30.5862 45.2228 30.5862C45.7316 30.5862 46.1556 30.3319 46.3252 29.8233C48.1907 25.1612 48.1907 19.9905 46.3252 15.2437C46.0708 14.8198 45.3924 14.4808 44.7988 14.7351ZM10.1176 14.7351C9.52399 14.4808 8.84562 14.8198 8.67603 15.4132C6.81054 20.0753 6.81054 25.246 8.67603 29.9928C8.84562 30.4166 9.2696 30.7557 9.77837 30.7557C9.94796 30.7557 10.0328 30.7557 10.2023 30.6709C10.7959 30.4166 11.0503 29.8233 10.8807 29.2299C9.2696 25.0764 9.2696 20.4991 10.8807 16.3456C10.9655 15.5827 10.7111 14.9894 10.1176 14.7351ZM52.3456 11.9378C52.0912 11.3445 51.4977 11.0902 50.9041 11.2597C50.3105 11.514 50.0562 12.1074 50.2257 12.7007V12.7855C52.9392 19.0581 52.9392 26.2631 50.2257 32.451C50.1409 32.7053 50.0562 33.0444 50.2257 33.2987C50.3105 33.553 50.5649 33.8072 50.8193 33.892C50.9889 33.9768 51.0737 33.9768 51.2433 33.9768C51.6673 33.9768 52.0912 33.7225 52.2608 33.2987C55.3135 26.6022 55.3135 18.719 52.3456 11.9378ZM4.69065 12.7855C4.94504 12.1921 4.69065 11.514 4.09709 11.2597C3.8427 11.1749 3.50352 11.0902 3.24913 11.2597C2.99475 11.3445 2.74036 11.5988 2.65557 11.8531C-0.312272 18.719 -0.312272 26.5174 2.65557 33.3834C2.82516 33.8072 3.24913 34.0615 3.67311 34.0615C3.8427 34.0615 4.01229 34.0615 4.09709 33.9768C4.35147 33.892 4.60586 33.6377 4.69065 33.3834C4.77545 33.1291 4.77545 32.7901 4.69065 32.5358C1.9772 26.2631 1.9772 19.0581 4.69065 12.7855ZM20.3778 15.9218C21.2257 15.9218 21.8193 15.2437 21.8193 14.4808C21.8193 13.7179 21.1409 13.0398 20.3778 13.0398C19.6146 13.0398 18.9363 13.7179 18.9363 14.4808C18.9363 15.2437 19.6146 15.9218 20.3778 15.9218ZM24.1088 15.9218C24.9567 15.9218 25.5503 15.2437 25.5503 14.4808C25.5503 13.7179 24.8719 13.0398 24.1088 13.0398C23.2608 13.0398 22.6673 13.7179 22.6673 14.4808C22.5825 15.2437 23.2608 15.9218 24.1088 15.9218ZM27.755 15.9218C28.6029 15.9218 29.1965 15.2437 29.1965 14.4808C29.1965 13.7179 28.5181 13.0398 27.755 13.0398C26.907 13.0398 26.3135 13.7179 26.3135 14.4808C26.3135 15.2437 26.9918 15.9218 27.755 15.9218ZM31.4012 15.9218C32.2491 15.9218 32.8427 15.2437 32.8427 14.4808C32.8427 13.7179 32.1643 13.0398 31.4012 13.0398C30.5532 13.0398 29.9597 13.7179 29.9597 14.4808C29.9597 15.2437 30.638 15.9218 31.4012 15.9218ZM35.1322 15.9218C35.9801 15.9218 36.5737 15.2437 36.5737 14.4808C36.5737 13.7179 35.8953 13.0398 35.1322 13.0398C34.2842 13.0398 33.6907 13.7179 33.6907 14.4808C33.6059 15.2437 34.2842 15.9218 35.1322 15.9218Z",
            fill: "#1A99FF",
          })
        );
      }
      function ue(e) {
        return o.createElement(
          "svg",
          { viewBox: "0 0 58 56", fill: "none", className: e.className },
          o.createElement("path", {
            d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
            fill: "#1A99FF",
          })
        );
      }
      function me(e) {
        const { type: t, accountName: n, onUseCodeOverride: a } = e,
          r = Z(),
          i = o.createElement(
            de,
            {
              align: "center",
              href: `${s.De.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`,
            },
            (0, H.Xx)("#Login_Help_AccessMobileApp")
          ),
          l = r
            ? o.createElement(
                "div",
                { style: { paddingBottom: "20px" } },
                o.createElement(
                  de,
                  { align: "center", onClick: a },
                  (0, H.Xx)("#Login_EnterCodeInstead")
                )
              )
            : o.createElement(
                "div",
                { onClick: a, className: k().EnterCodeInsteadLink },
                (0, H.Xx)("#Login_EnterCodeInstead")
              );
        return o.createElement(
          fe,
          {
            title: (0, H.Xx)("#Login_Title_SteamGuard"),
            bottom: i,
            compact: !0,
          },
          o.createElement(
            Ce,
            { gap: 40 },
            o.createElement(se, { type: t, accountName: n }),
            o.createElement(le, null),
            l
          )
        );
      }
      function de(e) {
        const { children: t, align: n, inline: a } = e,
          r = (0, u.Z)(k().TextLink, "center" === n && k().TextAlignCenter);
        if ("href" in e)
          return o.createElement("a", { className: r, href: e.href }, t);
        {
          const n = a ? "span" : "div";
          return o.createElement(n, { className: r, onClick: e.onClick }, t);
        }
      }
      function ge(e) {
        const { onSubmit: t, children: n, className: a } = e;
        return o.createElement(
          "form",
          { onSubmit: (e) => (e.preventDefault(), t(), !1), className: a },
          n
        );
      }
      function Ce(e) {
        const {
            alignItems: t,
            justifyContent: n,
            gap: a,
            className: r,
            children: i,
          } = e,
          s = (0, u.Z)(
            k().FlexCol,
            "center" === t && k().AlignItemsCenter,
            "center" === n && k().JustifyContentCenter,
            r
          ),
          l = a ? { gap: "number" == typeof a ? `${a}px` : a } : void 0;
        return o.createElement("div", { className: s, style: l }, i);
      }
      function _e(e) {
        const {
            children: t,
            justifyContent: n,
            alignItems: a,
            className: r,
          } = e,
          i = {
            display: "flex",
            flexDirection: "row",
            justifyContent: n,
            alignItems: a,
          };
        return o.createElement("div", { style: i, className: r }, t);
      }
      function he(e) {
        const { value: t, onChange: n, onPaste: a, tone: r } = e;
        return o.createElement(Ee, {
          length: 5,
          value: t,
          onChange: (e) => {
            L((e = e.map((e) => e.toUpperCase())).join("").trim()) && n(e);
          },
          onPaste: () => a && a(),
          tone: r,
          autoFocus: !0,
        });
      }
      function Ee(e) {
        const {
            length: t,
            value: n,
            onChange: a,
            onPaste: r,
            tone: i,
            autoFocus: s,
          } = e,
          l = (0, o.useRef)([]),
          c = () => a(l.current.map((e) => e.value)),
          m = (e) => {
            const t = e.target.nextElementSibling;
            e.target.value && t && t.focus(), c();
          },
          d = (e) => {
            var t;
            -1 === l.current.findIndex((e) => !!e.value)
              ? null === (t = l.current[0]) || void 0 === t || t.select()
              : e.target.select();
          },
          g = (e) => {
            const t = e.target;
            if ("Backspace" === e.key || "Delete" === e.key) {
              const n =
                "Backspace" === e.key
                  ? t.previousElementSibling
                  : t.nextElementSibling;
              "" === t.value &&
                n &&
                ((n.value = ""), n.focus(), e.preventDefault(), c());
            } else if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
              const n =
                "ArrowLeft" === e.key
                  ? t.previousElementSibling
                  : t.nextElementSibling;
              n && (n.focus(), e.preventDefault());
            }
          },
          C = (e) => {
            const t = e.clipboardData.getData("Text");
            let n = e.target,
              o = 0;
            for (; n && o < t.length; )
              n.focus(),
                (n.value = t.charAt(o)),
                (n = n.nextElementSibling),
                o++;
            c(), e.preventDefault(), r && r();
          },
          _ = [];
        for (let e = 0; e < t; e++)
          _.push(
            o.createElement("input", {
              type: "text",
              maxLength: 1,
              key: e,
              ref: (t) => (l.current[e] = t),
              onChange: m,
              onFocus: d,
              onClick: (e) => e.stopPropagation(),
              onKeyDown: g,
              onPaste: C,
              value: n[e] ? n[e][0] : "",
              autoComplete: "none",
              autoFocus: 0 === e && s,
            })
          );
        return o.createElement(
          "div",
          {
            className: (0, u.Z)(
              k().SegmentedCharacterInput,
              "danger" === i && k().Danger
            ),
            onClick: () => {
              const e = l.current.find((e) => !e.value);
              e ? e.focus() : l.current[l.current.length - 1].focus();
            },
          },
          _
        );
      }
      function pe(e) {
        const { children: t, spacing: n = 0, align: a } = e;
        return o.createElement(
          Ce,
          { alignItems: a },
          o.Children.map(t, (e, t) =>
            e
              ? o.createElement(
                  "div",
                  { style: t > 0 ? { paddingTop: `${n}px` } : void 0 },
                  e
                )
              : null
          ).filter(Boolean)
        );
      }
      function fe(e) {
        const { title: t, children: n, bottom: a, compact: r } = e,
          i = Z();
        return o.createElement(
          Ce,
          {
            gap: 32,
            className: (0, u.Z)(
              k().StandardLayout,
              i && k().Embedded,
              r && k().Compact,
              s.De.IN_CLIENT && "IN_CLIENT"
            ),
          },
          "string" == typeof t
            ? o.createElement("div", { className: k().PrimaryHeader }, t)
            : t,
          o.createElement("div", { className: k().FormContainer }, n),
          a
        );
      }
      function Se(e) {
        return o.createElement(
          "svg",
          {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
          },
          o.createElement("path", {
            d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
            fill: "#E0E1E6",
          }),
          o.createElement("path", {
            d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
            fill: "#E0E1E6",
          }),
          o.createElement("path", {
            d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
            fill: "#E0E1E6",
          }),
          o.createElement("path", {
            d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
            fill: "#E0E1E6",
          }),
          o.createElement("path", {
            d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
            fill: "#E0E1E6",
          }),
          o.createElement("path", {
            d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
            fill: "#E0E1E6",
          }),
          o.createElement("path", {
            d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
            fill: "#E0E1E6",
          }),
          o.createElement("path", {
            d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
            fill: "#E0E1E6",
          }),
          o.createElement("path", {
            d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
            fill: "#E0E1E6",
          })
        );
      }
      function ve() {
        return o.createElement(
          Ce,
          { alignItems: "center", justifyContent: "center" },
          o.createElement(G.V, null)
        );
      }
      n(40792);
      var be = n(86487);
      n(29669);
      let Le = !1;
      function we() {
        return (0, l.mG)(this, void 0, void 0, function* () {
          if (Le) return;
          Le = !0;
          const e = s.De.LANGUAGE,
            t = H.LJ.GetLanguageFallback(e),
            n = e === t,
            [o, a] = yield Promise.all([
              (0, be.I2)(e),
              n ? null : (0, be.I2)(t),
            ]);
          H.Yt.InitFromObjects(o, a, null, null);
        });
      }
      const ye = (e) => {
        console.log("Login success"),
          SteamClient.Auth.SetLoginToken(e.strRefreshToken, e.strAccountName);
      };
      function ke(e) {
        const [t, n] = (0, o.useState)(!0),
          a = (function () {
            const [e, t] = o.useState(!1);
            return (
              o.useEffect(() => {
                Promise.all([we()]).then(() => {
                  t(!0);
                });
              }, []),
              e
            );
          })();
        return t
          ? a
            ? o.createElement(Ae, null)
            : null
          : o.createElement(
              "div",
              {
                style: { color: "white" },
                onClick: () => {
                  n(!0);
                },
              },
              "Initiate"
            );
      }
      function Ae(e) {
        let t = new f.J(s.De.WEBAPI_BASE_URL).GetServiceTransport(),
          [n, a] = (0, o.useState)(null);
        (0, o.useEffect)(() => {
          SteamClient.Auth.GetRefreshInfo().then((e) => {
            1 != e.reason ? a(e) : a(null);
          });
        }, []);
        const i = `${null == n ? void 0 : n.account_name}${
          null == n ? void 0 : n.reason
        }`;
        return o.createElement(
          "div",
          { className: r().Login },
          o.createElement(xe, null),
          o.createElement(D, {
            key: i,
            autoFocus: !0,
            transport: t,
            onSuccess: ye,
            platform: 1,
            embedded: !0,
            refreshInfo: n,
          })
        );
      }
      function xe(e) {
        return o.createElement(
          "div",
          { className: r().TitleBar },
          o.createElement(
            "div",
            { className: r().CloseButton },
            o.createElement(i.X, null)
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=login.js.map
