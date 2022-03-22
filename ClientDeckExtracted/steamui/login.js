/* Third-party software licenses can be found at licenses.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    "2kmG": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return u;
        });
      var a,
        o = n("q1tI"),
        r = n.n(o),
        i = n("tmER"),
        l = n.n(i),
        c = n("exH9"),
        s = n("8CFY"),
        m = n.n(s);
      function u(e) {
        let { quality: t, children: n, className: i, activeBitStyle: s } = e;
        void 0 === t && (t = a.M), (s = s || {});
        const u = (function (e, t = {}) {
          const { typeNumber: n, errorCorrectLevel: a } = t,
            [r, i] = Object(o.useState)();
          return (
            Object(o.useEffect)(() => {
              i(l()(e, { typeNumber: n, errorCorrectLevel: a }).modules);
            }, [e, n, a]),
            r
          );
        })(n, { typeNumber: 6, errorCorrectLevel: t });
        if (!u) return null;
        const d = Object(c.a)(m.a.Bit),
          g = Object(c.a)(m.a.Bit, m.a.Active),
          C = [];
        for (let e = 0; e < u.length; e++)
          for (let t = 0; t < u.length; t++) {
            const n = u[e][t],
              a = n ? g : d;
            C.push(
              r.a.createElement("div", {
                key: `${e}_${t}`,
                className: a,
                style: n ? s : {},
              })
            );
          }
        return r.a.createElement(
          "div",
          {
            className: Object(c.a)(m.a.QRBits, i),
            style: { gridTemplateColumns: `repeat( ${u.length}, 1fr )` },
          },
          C
        );
      }
      !(function (e) {
        (e[(e.L = 1)] = "L"),
          (e[(e.M = 0)] = "M"),
          (e[(e.Q = 3)] = "Q"),
          (e[(e.H = 2)] = "H");
      })(a || (a = {}));
    },
    "8CFY": function (e, t, n) {
      e.exports = {
        QRBits: "qrcode_QRBits_3BALY",
        Bit: "qrcode_Bit_1YVDT",
        Active: "qrcode_Active_1zNnN",
      };
    },
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
        Overlay: "qrlogin_Overlay_464mF",
        Box: "qrlogin_Box_2ltn2",
        Column: "qrlogin_Column_2u8B9",
      };
    },
    v6T8: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return de;
        });
      var a = n("mrSG"),
        o = n("q1tI"),
        r = n.n(o),
        i = n("lkRc"),
        l = n("bxBv"),
        c = n("exH9"),
        s = n("2vnA"),
        m = n("e/SB"),
        u = (n("mgoM"), n("aoTL")),
        d = n("opsS"),
        g = n("c3ho"),
        C = n("7gg6");
      class _ extends m.a {
        constructor(e) {
          super(
            e.transport,
            (t) => {
              this.m_eStatus = t.bSuccess ? 10 : 11;
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
            (this.m_bUsingCodeOverride = !1);
        }
        Start(e, t, n) {
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
              const o = yield (function (e, t) {
                return Object(a.a)(this, void 0, void 0, function* () {
                  const n = l.b.Init(C.d);
                  n.Body().set_account_name(t);
                  try {
                    const t = yield C.a.GetPasswordRSAPublicKey(e, n);
                    if (1 !== t.GetEResult())
                      return (
                        console.error(
                          `Failed to get RSA key with EResult: ${t.GetEResult()}`
                        ),
                        null
                      );
                    const {
                      publickey_exp: a,
                      publickey_mod: o,
                      timestamp: r,
                    } = t.Body().toObject();
                    return a && o && r
                      ? { publickey_exp: a, publickey_mod: o, timestamp: r }
                      : (console.error(
                          `Missing expected field in RSA Key: ${JSON.stringify({
                            publickey_exp: a,
                            publickey_mod: o,
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
              const r = Object(g.c)(t, o),
                i = l.b.Init(C.b);
              i.Body().set_account_name(e),
                i.Body().set_encrypted_password(r),
                i.Body().set_encryption_timestamp(o.timestamp),
                i.Body().set_remember_login(!!n),
                i.Body().set_platform_type(this.m_ePlatformType);
              const c = yield C.a.BeginAuthSessionViaCredentials(
                  this.m_transport,
                  i
                ),
                s = c.GetEResult();
              if (1 !== s)
                switch (s) {
                  case 5:
                    return (this.m_eStatus = 2), s;
                  default:
                    return (
                      console.error(
                        `Failed to start auth session. Result: ${s}`
                      ),
                      (this.m_strErrorMessage = "Uh Oh"),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      s
                    );
                }
              this.m_strAccountName = e;
              const {
                client_id: m,
                request_id: u,
                interval: d,
                allowed_confirmations: _,
                steamid: b,
              } = c.Body().toObject();
              (this.m_msPollInterval = 1e3 * d),
                (this.m_strClientID = m),
                (this.m_rgRequestID = u),
                (this.m_steamid = b);
              const h = (function (e) {
                  let t = e[0] || 0;
                  e.length > 1 && (t = e.sort((e, t) => E[e] - E[t])[0]);
                  return t;
                })(_.map(({ confirmation_type: e }) => e)),
                p = _.find(({ confirmation_type: e }) => e === h);
              switch (
                (p &&
                  p.associated_message &&
                  (this.m_strConfirmationAssociatedMessage =
                    p.associated_message),
                h)
              ) {
                case 1:
                  return (this.m_eStatus = 9), this.StartPolling(), s;
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
              return s;
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
                n = l.b.Init(C.f);
              n.Body().set_client_id(this.m_strClientID),
                n.Body().set_steamid(this.m_steamid),
                n.Body().set_code(e),
                n.Body().set_code_type(t ? 2 : 3);
              const a = (yield C.a.UpdateAuthSessionWithSteamGuardCode(
                this.m_transport,
                n
              )).GetEResult();
              if (1 !== a)
                switch (a) {
                  case 65:
                  case 88:
                    return (this.m_eStatus = t ? 7 : 8), a;
                  default:
                    return (
                      console.error(
                        `Failed to update auth session with SG code. Result: ${a}`
                      ),
                      (this.m_strErrorMessage = "Uh Oh"),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      a
                    );
                }
              return (this.m_eStatus = 9), this.StartPolling(), a;
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
      Object(a.b)([s.C], _.prototype, "m_eStatus", void 0),
        Object(a.b)([d.b], _.prototype, "Start", null),
        Object(a.b)([d.b], _.prototype, "SendSteamGuardCode", null),
        Object(a.b)([d.b], _.prototype, "UseCodeOverride", null),
        Object(a.b)([d.b], _.prototype, "GoBack", null);
      const E = [3, 2, 1, 0, 4, 5].reduce((e, t, n) => ((e[t] = n), e), {});
      function b(e) {
        return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= 5;
      }
      var h = n("rJu4"),
        p = n("QmxF"),
        f = n.n(p),
        S = (n("tmER"), n("2kmG")),
        v = n("TKup"),
        L = n.n(v);
      function w(e) {
        const {
            transport: t,
            onComplete: n,
            onStatusChange: a,
            platform: l,
          } = e,
          { eStatus: s, strChallengeURL: m, strError: u, reset: d } = Object(
            h.a
          )({ transport: t, onComplete: n, ePlatformType: l });
        Object(o.useEffect)(() => a && a(s), [s]);
        const g = 2 === s ? m : i.c.STORE_BASE_URL,
          C = 0 === s || 1 === s,
          _ = 4 === s,
          E = 3 === s,
          b = C || _ || E;
        return r.a.createElement(
          "div",
          { className: L.a.Column },
          r.a.createElement(
            "div",
            { className: L.a.LoginQR },
            r.a.createElement(
              S.b,
              {
                quality: y(g),
                className: Object(c.a)(L.a.LoginQR, b && L.a.Blur),
              },
              g
            ),
            b &&
              r.a.createElement(
                "div",
                { className: L.a.Overlay },
                r.a.createElement(
                  "div",
                  { className: L.a.Box },
                  C && r.a.createElement(O, null),
                  _ && r.a.createElement(N, null, u),
                  E && r.a.createElement(A, null)
                )
              )
          )
        );
      }
      function y(e) {
        return e.length <= 90 ? S.a.Q : void 0;
      }
      function O() {
        return r.a.createElement("div", null, "Loading...");
      }
      function N(e) {
        return r.a.createElement(
          "div",
          { className: L.a.ErrorMessage },
          e.children
        );
      }
      function A() {
        return r.a.createElement("div", { className: L.a.Success }, "Success!");
      }
      var j = n("TLQK"),
        k = n("0OaU");
      const M = Object(o.createContext)(!1),
        B = () => Object(o.useContext)(M);
      function H(e) {
        const { embedded: t } = e,
          n = Object(a.c)(e, ["embedded"]);
        return r.a.createElement(
          M.Provider,
          { value: t },
          r.a.createElement(F, Object.assign({}, n))
        );
      }
      function F(e) {
        const {
            transport: t,
            onSuccess: n,
            platform: a,
            disableQR: l,
            autoFocus: c,
            renderSuccess: s = () => r.a.createElement(se, null),
          } = e,
          m = ({ bSuccess: e, strRefreshToken: t, strAccessToken: a }) => {
            e && n({ strRefreshToken: t, strAccessToken: a });
          };
        let {
          eStatus: d,
          strError: g,
          strConfirmationAssociatedMessage: C,
          strAccountName: E,
          start: b,
          reset: h,
          addCode: p,
          goBack: S,
          useCodeOverride: v,
        } = (function (e) {
          const [t, n] = Object(o.useState)(new _(e));
          return Object(u.d)(() => ({
            strAccountName: t.GetAccountName(),
            strError: t.GetErrorMessage(),
            strConfirmationAssociatedMessage: t.GetConfirmationAssociatedMessage(),
            eStatus: t.GetStatus(),
            bCanGoBack: t.BCanGoBack(),
            start: t.Start,
            addCode: t.SendSteamGuardCode,
            useCodeOverride: t.UseCodeOverride,
            reset: () => n(new _(e)),
            goBack: t.GoBack,
          }));
        })({ transport: t, onComplete: m, ePlatformType: a });
        const [L, y] = Object(o.useState)(0),
          O = B(),
          N = ({ strAccountName: e, strPassword: t }) => b(e, t);
        if (!!(0 === d || 1 === d || 2 === d)) {
          const e = () => alert("TODO"),
            n = r.a.createElement(
              "div",
              { className: f.a.SideBySide },
              r.a.createElement(I, { onSubmit: N, status: d, autoFocus: c }),
              !l &&
                r.a.createElement(
                  "div",
                  { className: f.a.QRSection },
                  r.a.createElement(
                    R,
                    { highlight: !0 },
                    Object(j.g)("#Login_SignIn_OrWithQRCode")
                  ),
                  r.a.createElement(
                    "div",
                    { className: f.a.QR },
                    r.a.createElement(w, {
                      onStatusChange: y,
                      transport: t,
                      onComplete: m,
                      platform: a,
                    })
                  ),
                  r.a.createElement(
                    ee,
                    { onClick: e, align: "center" },
                    Object(j.g)("#Login_GetMobileApp_Link")
                  )
                )
            );
          return O
            ? r.a.createElement(
                ne,
                { gap: 18, className: f.a.EmbeddedRoot },
                r.a.createElement(ce, { className: f.a.HeaderLogo }),
                n,
                r.a.createElement(
                  "div",
                  { className: f.a.EmbeddedRootFooter },
                  r.a.createElement(
                    ee,
                    {
                      href: `${
                        i.c.HELP_BASE_URL
                      }wizard/HelpWithLogin?redir=${encodeURIComponent(
                        document.location.href
                      )}`,
                    },
                    Object(j.g)("#Login_Help_SignIn")
                  ),
                  r.a.createElement(
                    "div",
                    { className: f.a.AccountCreation },
                    r.a.createElement(
                      "span",
                      { className: f.a.AccountCreationPrompt },
                      Object(j.g)("#Login_NoSteamAccount")
                    ),
                    r.a.createElement(
                      ee,
                      { inline: !0, href: `${i.c.STORE_BASE_URL}join/` },
                      Object(j.g)("#Login_CreateAccount")
                    )
                  )
                ),
                !1
              )
            : r.a.createElement(
                le,
                {
                  title: O
                    ? r.a.createElement(ce, { className: f.a.HeaderLogo })
                    : Object(j.g)("#Login_SignIn"),
                },
                n,
                !1
              );
        }
        switch (d) {
          case 1:
          case 9:
            return r.a.createElement(U, null);
          case 5:
          case 8:
          case 3:
          case 7:
            const e = 5 === d || 8 === d;
            return r.a.createElement($, {
              type: e ? "mobile" : "email",
              onSubmitCode: p,
              status: d,
              associatedLabel: C,
              accountName: E,
              onBack: S,
            });
          case 6:
          case 4:
            const t = 6 === d;
            return r.a.createElement(X, {
              type: t ? "mobile" : "email",
              accountName: E,
              onUseCodeOverride: v,
            });
          case 12:
            return r.a.createElement(Q, { reset: h });
          case 11:
            return r.a.createElement(D, { reset: h });
          case 10:
            return r.a.createElement(le, { compact: !0 }, s());
          default:
            return (
              console.error(`Unknown Phase: ${d}`),
              r.a.createElement(D, { reset: h })
            );
        }
      }
      function I(e) {
        const { onSubmit: t, status: n, autoFocus: a } = e,
          [l, c] = Object(o.useState)(""),
          [s, m] = Object(o.useState)(""),
          [u, d] = Object(o.useState)(!1),
          [g, C] = Object(o.useState)(!1),
          _ = B(),
          E = 2 === n && !g,
          b = E
            ? r.a.createElement(P, null, Object(j.g)("#Login_CheckCredentials"))
            : r.a.createElement(P, null, " ");
        return r.a.createElement(
          te,
          {
            onSubmit: () => {
              g &&
                t({
                  strAccountName: l,
                  strPassword: s,
                  bRememberMe: u,
                }).then(() => C(!1));
            },
            className: f.a.LoginForm,
          },
          r.a.createElement(x, {
            tone: E ? "danger" : void 0,
            label: r.a.createElement(
              R,
              { highlight: !0 },
              Object(j.g)("#Login_SignIn_WithAccountName")
            ),
            value: l,
            onChange: (e) => {
              C(!0), c(e);
            },
            autoFocus: a,
          }),
          r.a.createElement(x, {
            tone: E ? "danger" : void 0,
            label: r.a.createElement(R, null, Object(j.g)("#Login_Password")),
            value: s,
            onChange: (e) => {
              C(!0), m(e);
            },
            type: "password",
          }),
          r.a.createElement(G, null),
          b,
          !_ &&
            r.a.createElement(
              ee,
              {
                href: `${
                  i.c.HELP_BASE_URL
                }wizard/HelpWithLogin?redir=${encodeURIComponent(
                  document.location.href
                )}`,
                align: "center",
              },
              Object(j.g)("#Login_Help_SignIn")
            )
        );
      }
      function x(e) {
        const { label: t, error: n, tone: o } = e,
          i = Object(a.c)(e, ["label", "error", "tone"]),
          l = null != o ? o : n ? "danger" : void 0;
        return r.a.createElement(
          "div",
          { className: f.a.TextField },
          "string" == typeof t ? r.a.createElement(R, null, t) : t,
          r.a.createElement(T, { type: "error" }, n),
          r.a.createElement(V, Object.assign({ tone: l }, i))
        );
      }
      function R(e) {
        const { children: t, highlight: n } = e;
        return r.a.createElement(
          "div",
          { className: Object(c.a)(f.a.FieldLabel, n && f.a.Highlight) },
          t
        );
      }
      function V(e) {
        const {
          value: t,
          onChange: n,
          type: a = "text",
          tone: o,
          className: i,
          autoFocus: l,
        } = e;
        return r.a.createElement("input", {
          value: t,
          type: a,
          autoFocus: l,
          onChange: (e) => n(e.target.value),
          className: Object(c.a)(
            f.a.TextInput,
            "danger" === o && f.a.Danger,
            i
          ),
        });
      }
      function T(e) {
        const { children: t, type: n } = e;
        return r.a.createElement(
          "div",
          { className: Object(c.a)(f.a.FieldHint, "error" === n && f.a.Error) },
          t
        );
      }
      function G() {
        return r.a.createElement(
          "div",
          { className: f.a.SignInButtonContainer },
          r.a.createElement(Z, null, "Sign in")
        );
      }
      function Z(e) {
        const { disabled: t, children: n } = e;
        return r.a.createElement(
          "button",
          { type: "submit", className: f.a.SubmitButton, disabled: t },
          n
        );
      }
      function P(e) {
        const t = e.children || " ";
        return r.a.createElement("div", { className: f.a.FormError }, t);
      }
      function U() {
        return r.a.createElement(k.a, null);
      }
      function D(e) {
        const { reset: t } = e;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement("div", null, "Uh oh... somethign went wrong."),
          r.a.createElement("button", { onClick: t }, "Reset")
        );
      }
      function Q(e) {
        const { reset: t } = e;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement("div", null, "The login process was stopped."),
          r.a.createElement("button", { onClick: t }, "Reset")
        );
      }
      function $(e) {
        const {
            type: t,
            onSubmitCode: n,
            status: a,
            accountName: l,
            associatedLabel: c,
            onBack: s,
          } = e,
          [m, u] = Object(o.useState)([]),
          [d, g] = Object(o.useState)(!1),
          C = m.join(""),
          _ = (function (e) {
            return b(e) && 5 === e.length;
          })(C),
          E = !d && (8 === a || 7 === a),
          h = r.a.createElement(
            ee,
            {
              href: `${i.c.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`,
              align: "center",
            },
            Object(j.g)("#Login_Help_AccessMobileApp")
          );
        return r.a.createElement(
          le,
          {
            title: Object(j.g)("#Login_Title_SteamGuard"),
            bottom: h,
            compact: !0,
          },
          r.a.createElement(
            te,
            { onSubmit: () => _ && n(C).then(() => g(!1)) },
            r.a.createElement(
              ne,
              { alignItems: "center", gap: 20 },
              r.a.createElement(K, { type: t, accountName: l }),
              r.a.createElement(
                ne,
                { gap: 12, alignItems: "center" },
                r.a.createElement(
                  ne,
                  { alignItems: "center", gap: 2 },
                  r.a.createElement(
                    P,
                    null,
                    E && Object(j.g)("#Login_IncorrectSteamGuard")
                  ),
                  r.a.createElement(oe, {
                    value: m,
                    onChange: (e) => {
                      d || g(!0), u(e);
                    },
                    tone: E ? "danger" : void 0,
                  })
                ),
                r.a.createElement(
                  Z,
                  { disabled: !_ },
                  Object(j.g)("#Button_Go")
                )
              ),
              "mobile" === t
                ? r.a.createElement(q, null)
                : r.a.createElement(W, { emailAddress: c })
            )
          )
        );
      }
      function q() {
        return r.a.createElement(
          ae,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: f.a.EnterCodeFromMobileContainer,
          },
          r.a.createElement(
            "div",
            { className: f.a.EnterCodeFromMobile },
            Object(j.g)("#Login_EnterMobileCode")
          ),
          r.a.createElement(Y, { className: f.a.AwaitingMobileConfIcon })
        );
      }
      function W(e) {
        return r.a.createElement(
          ae,
          {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: f.a.EnterCodeFromEmailContainer,
          },
          r.a.createElement(
            ie,
            { align: "center", spacing: 6 },
            r.a.createElement(
              "div",
              { className: f.a.EnterCodeFromEmail },
              Object(j.p)(
                "#Login_EnterEmailCode",
                r.a.createElement(
                  "span",
                  { className: f.a.EnterCodeEmailAddress },
                  e.emailAddress
                )
              )
            )
          ),
          r.a.createElement(z, { className: f.a.AwaitingMobileConfIcon })
        );
      }
      function K(e) {
        const { accountName: t, type: n } = e,
          a =
            "mobile" === n
              ? Object(j.g)("#Login_MobileProtectingAccount")
              : Object(j.g)("#Login_EmailProtectingAccount"),
          o = B();
        return r.a.createElement(
          "div",
          { className: f.a.ProtectingAccount },
          r.a.createElement(
            "div",
            { className: f.a.Label },
            Object(j.p)(
              "#Login_ActiveAccountName",
              r.a.createElement("span", { className: f.a.AccountName }, t)
            )
          ),
          !o && r.a.createElement("div", { className: f.a.Description }, a)
        );
      }
      function J() {
        return r.a.createElement(
          ne,
          { alignItems: "center" },
          r.a.createElement(
            "div",
            { className: f.a.AwaitingMobileConfText },
            Object(j.g)("#Login_AwaitingMobileConfirmation")
          ),
          r.a.createElement(Y, { className: f.a.AwaitingMobileConfIcon })
        );
      }
      function Y(e) {
        return r.a.createElement(
          "svg",
          { viewBox: "0 0 55 49", fill: "none", className: e.className },
          r.a.createElement("path", {
            d:
              "M36.1497 0.664062H18.7667C16.0532 0.664062 13.8485 2.86796 13.8485 5.49568V43.3009C13.8485 46.0134 16.0532 48.1326 18.7667 48.1326H36.0649C38.7784 48.1326 40.9831 45.9287 40.9831 43.3009V5.49568C40.9831 2.78319 38.8632 0.664062 36.1497 0.664062ZM38.1848 43.3009C38.1848 44.4029 37.2521 45.3353 36.1497 45.3353H18.7667C17.6643 45.3353 16.7316 44.4029 16.7316 43.3009V42.1142H38.1848V43.3009ZM38.1848 39.317H16.7316V9.73394H38.1848V39.317ZM38.1848 6.93669H16.7316V5.49568C16.7316 4.39373 17.6643 3.46131 18.7667 3.46131H36.0649C37.1673 3.46131 38.1 4.39373 38.1 5.49568V6.93669H38.1848ZM44.7988 14.7351C44.2053 14.9894 43.9509 15.5827 44.1205 16.1761C45.7316 20.3296 45.7316 24.9069 44.1205 29.0604C43.8661 29.6538 44.2053 30.3319 44.7988 30.5014C44.9684 30.5862 45.0532 30.5862 45.2228 30.5862C45.7316 30.5862 46.1556 30.3319 46.3252 29.8233C48.1907 25.1612 48.1907 19.9905 46.3252 15.2437C46.0708 14.8198 45.3924 14.4808 44.7988 14.7351ZM10.1176 14.7351C9.52399 14.4808 8.84562 14.8198 8.67603 15.4132C6.81054 20.0753 6.81054 25.246 8.67603 29.9928C8.84562 30.4166 9.2696 30.7557 9.77837 30.7557C9.94796 30.7557 10.0328 30.7557 10.2023 30.6709C10.7959 30.4166 11.0503 29.8233 10.8807 29.2299C9.2696 25.0764 9.2696 20.4991 10.8807 16.3456C10.9655 15.5827 10.7111 14.9894 10.1176 14.7351ZM52.3456 11.9378C52.0912 11.3445 51.4977 11.0902 50.9041 11.2597C50.3105 11.514 50.0562 12.1074 50.2257 12.7007V12.7855C52.9392 19.0581 52.9392 26.2631 50.2257 32.451C50.1409 32.7053 50.0562 33.0444 50.2257 33.2987C50.3105 33.553 50.5649 33.8072 50.8193 33.892C50.9889 33.9768 51.0737 33.9768 51.2433 33.9768C51.6673 33.9768 52.0912 33.7225 52.2608 33.2987C55.3135 26.6022 55.3135 18.719 52.3456 11.9378ZM4.69065 12.7855C4.94504 12.1921 4.69065 11.514 4.09709 11.2597C3.8427 11.1749 3.50352 11.0902 3.24913 11.2597C2.99475 11.3445 2.74036 11.5988 2.65557 11.8531C-0.312272 18.719 -0.312272 26.5174 2.65557 33.3834C2.82516 33.8072 3.24913 34.0615 3.67311 34.0615C3.8427 34.0615 4.01229 34.0615 4.09709 33.9768C4.35147 33.892 4.60586 33.6377 4.69065 33.3834C4.77545 33.1291 4.77545 32.7901 4.69065 32.5358C1.9772 26.2631 1.9772 19.0581 4.69065 12.7855ZM20.3778 15.9218C21.2257 15.9218 21.8193 15.2437 21.8193 14.4808C21.8193 13.7179 21.1409 13.0398 20.3778 13.0398C19.6146 13.0398 18.9363 13.7179 18.9363 14.4808C18.9363 15.2437 19.6146 15.9218 20.3778 15.9218ZM24.1088 15.9218C24.9567 15.9218 25.5503 15.2437 25.5503 14.4808C25.5503 13.7179 24.8719 13.0398 24.1088 13.0398C23.2608 13.0398 22.6673 13.7179 22.6673 14.4808C22.5825 15.2437 23.2608 15.9218 24.1088 15.9218ZM27.755 15.9218C28.6029 15.9218 29.1965 15.2437 29.1965 14.4808C29.1965 13.7179 28.5181 13.0398 27.755 13.0398C26.907 13.0398 26.3135 13.7179 26.3135 14.4808C26.3135 15.2437 26.9918 15.9218 27.755 15.9218ZM31.4012 15.9218C32.2491 15.9218 32.8427 15.2437 32.8427 14.4808C32.8427 13.7179 32.1643 13.0398 31.4012 13.0398C30.5532 13.0398 29.9597 13.7179 29.9597 14.4808C29.9597 15.2437 30.638 15.9218 31.4012 15.9218ZM35.1322 15.9218C35.9801 15.9218 36.5737 15.2437 36.5737 14.4808C36.5737 13.7179 35.8953 13.0398 35.1322 13.0398C34.2842 13.0398 33.6907 13.7179 33.6907 14.4808C33.6059 15.2437 34.2842 15.9218 35.1322 15.9218Z",
            fill: "#1A99FF",
          })
        );
      }
      function z(e) {
        return r.a.createElement(
          "svg",
          { viewBox: "0 0 58 56", fill: "none", className: e.className },
          r.a.createElement("path", {
            d:
              "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
            fill: "#1A99FF",
          })
        );
      }
      function X(e) {
        const { type: t, accountName: n, onUseCodeOverride: a } = e,
          o = B(),
          i = r.a.createElement(
            ee,
            { align: "center", onClick: () => alert("TODO") },
            Object(j.g)("#Login_Help_AccessMobileApp")
          ),
          l = o
            ? r.a.createElement(
                ee,
                { align: "center", onClick: a },
                Object(j.g)("#Login_EnterCodeInstead")
              )
            : r.a.createElement(
                "div",
                { onClick: a, className: f.a.EnterCodeInsteadLink },
                Object(j.g)("#Login_EnterCodeInstead")
              );
        return r.a.createElement(
          le,
          {
            title: Object(j.g)("#Login_Title_SteamGuard"),
            bottom: i,
            compact: !0,
          },
          r.a.createElement(
            ne,
            { gap: 20 },
            r.a.createElement(K, { type: t, accountName: n }),
            r.a.createElement(J, null),
            l
          )
        );
      }
      function ee(e) {
        const { children: t, align: n, inline: a } = e,
          o = Object(c.a)(f.a.TextLink, "center" === n && f.a.TextAlignCenter);
        if ("href" in e)
          return r.a.createElement("a", { className: o, href: e.href }, t);
        {
          const n = a ? "span" : "div";
          return r.a.createElement(n, { className: o, onClick: e.onClick }, t);
        }
      }
      function te(e) {
        const { onSubmit: t, children: n, className: a } = e;
        return r.a.createElement(
          "form",
          { onSubmit: (e) => (e.preventDefault(), t(), !1), className: a },
          n
        );
      }
      function ne(e) {
        const {
            alignItems: t,
            justifyContent: n,
            gap: a,
            className: o,
            children: i,
          } = e,
          l = Object(c.a)(
            f.a.FlexCol,
            "center" === t && f.a.AlignItemsCenter,
            "center" === n && f.a.JustifyContentCenter,
            o
          ),
          s = a ? { gap: "number" == typeof a ? `${a}px` : a } : void 0;
        return r.a.createElement("div", { className: l, style: s }, i);
      }
      function ae(e) {
        const {
            children: t,
            justifyContent: n,
            alignItems: a,
            className: o,
          } = e,
          i = {
            display: "flex",
            flexDirection: "row",
            justifyContent: n,
            alignItems: a,
          };
        return r.a.createElement("div", { style: i, className: o }, t);
      }
      function oe(e) {
        const { value: t, onChange: n, tone: a } = e;
        return r.a.createElement(re, {
          length: 5,
          value: t,
          onChange: (e) => {
            b((e = e.map((e) => e.toUpperCase())).join("").trim()) && n(e);
          },
          tone: a,
          autoFocus: !0,
        });
      }
      function re(e) {
        const { length: t, value: n, onChange: a, tone: i, autoFocus: l } = e,
          s = Object(o.useRef)([]),
          m = () => a(s.current.map((e) => e.value)),
          u = (e) => {
            const t = e.target.nextElementSibling;
            e.target.value && t && t.focus(), m();
          },
          d = (e) => {
            var t;
            -1 === s.current.findIndex((e) => !!e.value)
              ? null === (t = s.current[0]) || void 0 === t || t.select()
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
                ((n.value = ""), n.focus(), e.preventDefault(), m());
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
              a = 0;
            for (; n && a < t.length; )
              n.focus(),
                (n.value = t.charAt(a)),
                (n = n.nextElementSibling),
                a++;
            m(), e.preventDefault();
          },
          _ = [];
        for (let e = 0; e < t; e++)
          _.push(
            r.a.createElement("input", {
              type: "text",
              maxLength: 1,
              key: e,
              ref: (t) => (s.current[e] = t),
              onChange: u,
              onFocus: d,
              onClick: (e) => e.stopPropagation(),
              onKeyDown: g,
              onPaste: C,
              value: n[e] ? n[e][0] : "",
              autoComplete: "none",
              autoFocus: 0 === e && l,
            })
          );
        return r.a.createElement(
          "div",
          {
            className: Object(c.a)(
              f.a.SegmentedCharacterInput,
              "danger" === i && f.a.Danger
            ),
            onClick: () => {
              const e = s.current.find((e) => !e.value);
              e ? e.focus() : s.current[s.current.length - 1].focus();
            },
          },
          _
        );
      }
      function ie(e) {
        const { children: t, spacing: n = 0, align: a } = e;
        return r.a.createElement(
          ne,
          { alignItems: a },
          r.a.Children.map(t, (e, t) =>
            e
              ? r.a.createElement(
                  "div",
                  { style: t > 0 ? { paddingTop: `${n}px` } : void 0 },
                  e
                )
              : null
          ).filter(Boolean)
        );
      }
      function le(e) {
        const { title: t, children: n, bottom: a, compact: o } = e,
          i = B();
        return r.a.createElement(
          ne,
          {
            gap: 18,
            className: Object(c.a)(
              f.a.StandardLayout,
              i && f.a.Embedded,
              o && f.a.Compact
            ),
          },
          "string" == typeof t
            ? r.a.createElement("div", { className: f.a.PrimaryHeader }, t)
            : t,
          r.a.createElement("div", { className: f.a.FormContainer }, n),
          a
        );
      }
      function ce(e) {
        return r.a.createElement(
          "svg",
          {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
          },
          r.a.createElement("path", {
            d:
              "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
            fill: "#E0E1E6",
          }),
          r.a.createElement("path", {
            d:
              "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
            fill: "#E0E1E6",
          }),
          r.a.createElement("path", {
            d:
              "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
            fill: "#E0E1E6",
          }),
          r.a.createElement("path", {
            d:
              "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
            fill: "#E0E1E6",
          }),
          r.a.createElement("path", {
            d:
              "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
            fill: "#E0E1E6",
          }),
          r.a.createElement("path", {
            d:
              "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
            fill: "#E0E1E6",
          }),
          r.a.createElement("path", {
            d:
              "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
            fill: "#E0E1E6",
          }),
          r.a.createElement("path", {
            d:
              "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
            fill: "#E0E1E6",
          }),
          r.a.createElement("path", {
            d:
              "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
            fill: "#E0E1E6",
          })
        );
      }
      function se() {
        return r.a.createElement(
          ne,
          { alignItems: "center", justifyContent: "center" },
          r.a.createElement(U, null)
        );
      }
      n("TX96");
      var me = n("WBba");
      const ue = () =>
        Object(a.a)(void 0, void 0, void 0, function* () {
          console.log("hi");
        });
      function de(e) {
        const [t, n] = Object(o.useState)(!0);
        return t
          ? r.a.createElement(H, {
              transport: new me.a(i.c.WEBAPI_BASE_URL).GetServiceTransport(),
              onSuccess: ue,
              platform: 1,
            })
          : r.a.createElement(
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
    },
  },
]);
//# sourceMappingURL=login.js.map
