/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [701],
  {
    73175: (e) => {
      e.exports = {
        LoginDialog: "login_LoginDialog_2y6W_",
        AccountPasswordPanel: "login_AccountPasswordPanel_3hiT2",
        LoginPanelBackground: "login_LoginPanelBackground_3rFou",
        LoginPanelContent: "login_LoginPanelContent_1dgRm",
        ErrorMessage: "login_ErrorMessage_Xp7bS",
        AccountPasswordForm: "login_AccountPasswordForm_3M0na",
        AuthenticationPanel: "login_AuthenticationPanel_1mvos",
        AccountNameLabel: "login_AccountNameLabel_2mGS5",
        MedName: "login_MedName_2J9dc",
        LargeName: "login_LargeName_26ejp",
        PasswordDots: "login_PasswordDots_2hvaY",
        MedPass: "login_MedPass_3dfHR",
        LargePass: "login_LargePass_3iXGb",
        AccountFieldHeader: "login_AccountFieldHeader_ItWep",
        PasswordFieldHeader: "login_PasswordFieldHeader_2GJed",
        NeedHelpLink: "login_NeedHelpLink_3nqR4",
        NeedHelpHighlight: "login_NeedHelpHighlight_25N0C",
        CreateAccountLink: "login_CreateAccountLink_r1OCj",
        LoginCreateSeperator: "login_LoginCreateSeperator_25iPN",
        RefreshCaptchaText: "login_RefreshCaptchaText_28Gin",
        SigningInAccountName: "login_SigningInAccountName_2Bjab",
        SigninTitle: "login_SigninTitle_Pk26-",
        RememberMeCheck: "login_RememberMeCheck_zkf30",
        SteamUpsellContainer: "login_SteamUpsellContainer_1bNqn",
        SteamUpsell: "login_SteamUpsell_3MQ_K",
        CaptchaContainer: "login_CaptchaContainer_2nqhJ",
        CaptchaBlock: "login_CaptchaBlock_1iLPO",
        CaptchaImageAndInput: "login_CaptchaImageAndInput_2Frvv",
        CaptchaImageBox: "login_CaptchaImageBox_uMoA_",
        CaptchaImage: "login_CaptchaImage_2tJ2w",
        CaptchaInput: "login_CaptchaInput_1hrke",
        AuthenticatorInputcontainer: "login_AuthenticatorInputcontainer_2YRk7",
        Highlight: "login_Highlight_1Ea3M",
        LoginComplete: "login_LoginComplete_KmQja",
      };
    },
    55914: (e, t, a) => {
      "use strict";
      a.d(t, { Gt: () => m, Te: () => h, ze: () => l });
      var s = a(70655),
        n = a(22188),
        r = a(75255),
        o = a(81130),
        i = a(41311);
      var l, m;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.AccountName = 1)] = "AccountName"),
          (e[(e.EmailCode = 2)] = "EmailCode"),
          (e[(e.TwoFactorCode = 3)] = "TwoFactorCode"),
          (e[(e.Complete = 4)] = "Complete");
      })(l || (l = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.InvalidCode = 1)] = "InvalidCode");
        })(m || (m = {}));
      class h {
        constructor(e, t) {
          (this.m_strBaseURL = ""),
            (this.m_strOAuthClientID = ""),
            (this.m_fnLoginComplete = null),
            (this.m_bRequestInFlight = !1),
            (this.m_eCurrentStep = l.AccountName),
            (this.m_strErrorMessage = ""),
            (this.m_strEmailDomain = ""),
            (this.m_strCaptchaURL = ""),
            (this.m_eSteamGuardCodeError = m.None),
            (this.m_strBaseURL = e),
            (this.m_strOAuthClientID = t),
            (this.m_userFields = {
              strUserName: "",
              strPassword: "",
              strTwoFactorCode: "",
              strEmailAuthCode: "",
              emailSteamID: "",
              gidCaptcha: "",
              strCaptchaText: "",
              bRememberLogin: !1,
            });
        }
        Shutdown() {
          this.m_fnLoginComplete = null;
        }
        SetLoginCompleteCallback(e) {
          this.m_fnLoginComplete = e;
        }
        SetUserName(e) {
          this.m_userFields.strUserName = e;
        }
        GetUserName() {
          return this.m_userFields.strUserName;
        }
        SetPassword(e) {
          this.m_userFields.strPassword = e;
        }
        GetPassword() {
          return this.m_userFields.strPassword;
        }
        SetRememberPassword(e) {
          this.m_userFields.bRememberLogin = e;
        }
        GetRememberPassword() {
          return this.m_userFields.bRememberLogin;
        }
        SetEmailAuthCode(e) {
          this.m_userFields.strEmailAuthCode = e;
        }
        GetEmailAuthCode() {
          return this.m_userFields.strEmailAuthCode;
        }
        GetEmailDomain() {
          return this.m_strEmailDomain;
        }
        SetTwoFactorCode(e) {
          this.m_userFields.strTwoFactorCode = e;
        }
        GetTwoFactorCode() {
          return this.m_userFields.strTwoFactorCode;
        }
        SetCaptchaText(e) {
          this.m_userFields.strCaptchaText = e;
        }
        GetCaptchaText() {
          return this.m_userFields.strCaptchaText;
        }
        IsRequestInFlight() {
          return this.m_bRequestInFlight;
        }
        GetCurrentStep() {
          return this.m_eCurrentStep;
        }
        GetErrorMessage() {
          return this.m_strErrorMessage;
        }
        SetInitialErrorMessage(e) {
          this.m_strErrorMessage = e;
        }
        GetSteamGuardCodeError() {
          return this.m_eSteamGuardCodeError;
        }
        GetCaptchaURL() {
          return this.m_strCaptchaURL;
        }
        DoLogin() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (this.m_bRequestInFlight) return;
            (0, n.z)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let e = yield (0, r.He)(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields
            );
            (0, n.z)(() => {
              (this.m_bRequestInFlight = !1), this.UpdateLoginResult(e);
            });
          });
        }
        UpdateLoginResult(e) {
          if (!e)
            return (
              console.log("Login timeout"),
              void (this.m_strErrorMessage = (0, i.Xx)(
                "#ConnectionTrouble_FailedToConnect"
              ))
            );
          if (e.login_complete) {
            if (((this.m_eCurrentStep = l.Complete), this.m_fnLoginComplete)) {
              let t = {
                steamID: e.oauth ? e.oauth.steamid : "",
                strAccountName: e.oauth ? e.oauth.account_name : "",
                strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
              };
              this.m_fnLoginComplete(t);
            }
          } else
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = m.None),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL("-1"),
                  this.m_eCurrentStep != l.TwoFactorCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = (0, i.Xx)(
                      "#MobileLogin_IncorrectSteamGuard"
                    )),
                    (this.m_eSteamGuardCodeError = m.InvalidCode),
                    (this.m_userFields.strTwoFactorCode = "")),
                  (this.m_eCurrentStep = l.TwoFactorCode))
                : e.captcha_needed && e.captcha_gid
                ? ((this.m_eCurrentStep = l.AccountName),
                  this.UpdateCaptchaURL(e.captcha_gid))
                : e.emailauth_needed
                ? (e.emaildomain && (this.m_strEmailDomain = e.emaildomain),
                  e.emailsteamid &&
                    (this.m_userFields.emailSteamID = e.emailsteamid),
                  this.m_eCurrentStep != l.EmailCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = (0, i.Xx)(
                      "#MobileLogin_IncorrectSteamGuard"
                    )),
                    (this.m_eSteamGuardCodeError = m.InvalidCode),
                    (this.m_userFields.strEmailAuthCode = "")),
                  (this.m_eCurrentStep = l.EmailCode))
                : e.agreement_session_url
                ? (this.Shutdown(),
                  console.log(window.location.href),
                  (window.location.href =
                    e.agreement_session_url + "&redir=" + window.location.href))
                : console.log("Unhandled login error");
        }
        RefreshCaptcha() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            let e = yield (0, r.p1)(this.m_strBaseURL);
            e ? this.UpdateCaptchaURL(e) : console.log("Failed to get captcha");
          });
        }
        UpdateCaptchaURL(e) {
          (this.m_userFields.gidCaptcha = e),
            (this.m_userFields.strCaptchaText = ""),
            (this.m_strCaptchaURL =
              "-1" != e ? (0, r.yI)(this.m_strBaseURL, e) : "");
        }
      }
      (0, s.gn)([n.LO], h.prototype, "m_bRequestInFlight", void 0),
        (0, s.gn)([n.LO], h.prototype, "m_userFields", void 0),
        (0, s.gn)([n.LO], h.prototype, "m_eCurrentStep", void 0),
        (0, s.gn)([n.LO], h.prototype, "m_strErrorMessage", void 0),
        (0, s.gn)([n.LO], h.prototype, "m_strEmailDomain", void 0),
        (0, s.gn)([n.LO], h.prototype, "m_strCaptchaURL", void 0),
        (0, s.gn)([n.LO], h.prototype, "m_eSteamGuardCodeError", void 0),
        (0, s.gn)([o.a], h.prototype, "DoLogin", null),
        (0, s.gn)([n.aD.bound], h.prototype, "UpdateCaptchaURL", null);
    },
    3786: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => _ });
      var s = a(70655),
        n = a(67294),
        r = a(48341),
        o = a(95598),
        i = a(29323),
        l = a(64839),
        m = a(7573),
        h = a(73175),
        c = a.n(h),
        g = a(55914),
        u = a(13596),
        p = a(41311),
        d = a(90666);
      let _ = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_manager = new g.Te(this.props.baseURL)),
            this.props.onLoginComplete &&
              this.m_manager.SetLoginCompleteCallback(
                this.props.onLoginComplete
              );
        }
        componentWillUnmount() {
          this.m_manager.Shutdown();
        }
        render() {
          let e = this.props,
            { baseURL: t, onLoginComplete: a, className: r } = e,
            i = (0, s._T)(e, ["baseURL", "onLoginComplete", "className"]),
            l = (0, m.Z)(c().LoginDialog, r),
            h = this.m_manager.GetCurrentStep(),
            p = this.m_manager.GetErrorMessage();
          return n.createElement(
            "div",
            Object.assign({ className: l }, i),
            n.createElement(
              "div",
              { className: c().LoginPanelBackground },
              n.createElement(o.ui7, null)
            ),
            n.createElement(
              "div",
              { className: c().LoginPanelContent },
              p && n.createElement(C, { text: p }),
              h == g.ze.AccountName &&
                n.createElement(L, {
                  manager: this.m_manager,
                  autoFocus: this.props.autoFocus,
                }),
              h == g.ze.TwoFactorCode &&
                n.createElement(S, {
                  manager: this.m_manager,
                  authtype: g.ze.TwoFactorCode,
                }),
              h == g.ze.EmailCode &&
                n.createElement(S, {
                  manager: this.m_manager,
                  authtype: g.ze.EmailCode,
                }),
              h == g.ze.Complete &&
                n.createElement(
                  "div",
                  { className: c().LoginComplete },
                  n.createElement(u.V, null)
                )
            )
          );
        }
      };
      function C(e) {
        return n.createElement("div", { className: c().ErrorMessage }, e.text);
      }
      _ = (0, s.gn)([i.Pi], _);
      let L = class extends n.Component {
        constructor(e) {
          super(e), (this.state = { nNameSize: 0, nPassSize: 0 });
        }
        OnSubmit(e) {
          e.preventDefault(), this.props.manager.DoLogin();
        }
        OnChangeName(e) {
          let t = e.target.value || "";
          this.props.manager.SetUserName(e.target.value),
            t.length > 24 && t.length < 39
              ? this.setState({ nNameSize: 1 })
              : t.length > 38
              ? this.setState({ nNameSize: 2 })
              : this.setState({ nNameSize: 0 });
        }
        OnChangePassword(e) {
          let t = e.target.value || "";
          (t = t.replace(/[^\x00-\x7F]/g, "")),
            this.props.manager.SetPassword(t),
            t.length > 19 && t.length < 39
              ? this.setState({ nPassSize: 1 })
              : t.length > 38
              ? this.setState({ nPassSize: 2 })
              : this.setState({ nPassSize: 0 });
        }
        OnChangeRememberPass(e) {
          this.props.manager.SetRememberPassword(e.target.checked);
        }
        render() {
          let e,
            t,
            a = this.props.manager;
          return (
            (t =
              1 == this.state.nPassSize
                ? c().MedPass
                : 2 == this.state.nPassSize
                ? c().LargePass
                : c().DefaultPass),
            (e =
              1 == this.state.nNameSize
                ? c().MedName
                : 2 == this.state.nNameSize
                ? c().LargeName
                : c().DefaultNAme),
            n.createElement(
              "div",
              { className: c().AccountPasswordPanel },
              n.createElement(
                "div",
                { className: c().SigninTitle },
                (0, p.Xx)("#Login_SignIn")
              ),
              n.createElement(
                "form",
                { className: c().AccountPasswordForm, onSubmit: this.OnSubmit },
                n.createElement(r.II, {
                  autoFocus: this.props.autoFocus,
                  className: (0, m.Z)(c().AccountNameLabel, e),
                  label: (0, p.Xx)("#Login_AccountName"),
                  type: "text",
                  value: a.GetUserName(),
                  focusOnMount: !0,
                  maxLength: 64,
                  onChange: this.OnChangeName,
                }),
                n.createElement(r.II, {
                  bIsPassword: !0,
                  className: (0, m.Z)(c().PasswordDots, t),
                  label: (0, p.Xx)("#Login_Password"),
                  type: "password",
                  autoComplete: "off",
                  maxLength: 64,
                  size: 64,
                  value: a.GetPassword(),
                  onChange: this.OnChangePassword,
                }),
                n.createElement(r.ji, {
                  className: c().RememberMeCheck,
                  label: (0, p.Xx)("#Login_RememberMe"),
                  disabled: !1,
                  onChange: () => this.OnChangeRememberPass,
                  checked: a.GetRememberPassword(),
                }),
                a.GetCaptchaURL() && n.createElement(E, { manager: a }),
                n.createElement(
                  r.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, p.Xx)("#Login_SignIn").toLocaleUpperCase()
                )
              ),
              n.createElement(
                "a",
                { className: c().NeedHelpLink, href: d.De.HELP_BASE_URL },
                (0, p.Xx)("#Login_ForgotPassword")
              ),
              n.createElement("div", { className: c().LoginCreateSeperator }),
              n.createElement(
                "div",
                { className: c().SteamUpsellContainer },
                n.createElement(
                  "div",
                  { className: c().SteamUpsell },
                  (0, p.Xx)("#Login_NoSteamAccount")
                ),
                n.createElement(
                  "div",
                  { className: c().CreateAccountLink },
                  n.createElement(
                    "a",
                    { href: `${d.De.STORE_BASE_URL}join/` },
                    (0, p.Xx)("#Login_CreateAccount")
                  )
                )
              )
            )
          );
        }
      };
      (0, s.gn)([l.ak], L.prototype, "OnSubmit", null),
        (0, s.gn)([l.ak], L.prototype, "OnChangeName", null),
        (0, s.gn)([l.ak], L.prototype, "OnChangePassword", null),
        (0, s.gn)([l.ak], L.prototype, "OnChangeRememberPass", null),
        (L = (0, s.gn)([i.Pi], L));
      let E = class extends n.Component {
        OnCaptchaText(e) {
          this.props.manager.SetCaptchaText(e.target.value);
        }
        RefreshCaptcha(e) {
          this.props.manager.RefreshCaptcha();
        }
        render() {
          let e = this.props.manager;
          return n.createElement(
            "div",
            { className: c().CaptchaContainer },
            n.createElement(
              "div",
              { className: c().CaptchaBlock },
              n.createElement(
                "div",
                { className: c().CaptchaImageAndInput },
                n.createElement(
                  "div",
                  { className: c().CaptchaImageBox },
                  n.createElement("img", {
                    className: c().CaptchaImage,
                    src: e.GetCaptchaURL(),
                  })
                ),
                n.createElement(r.II, {
                  className: c().CaptchaInput,
                  type: "text",
                  autoComplete: "off",
                  maxLength: 6,
                  value: e.GetCaptchaText(),
                  onChange: this.OnCaptchaText,
                })
              ),
              n.createElement(
                "div",
                { className: c().ErrorMessage },
                (0, p.Xx)("#Login_CaptchaVerification")
              )
            ),
            n.createElement(
              "div",
              null,
              n.createElement(
                "span",
                {
                  className: c().RefreshCaptchaText,
                  onClick: this.RefreshCaptcha,
                },
                (0, p.Xx)("#Login_RefreshCaptcha")
              )
            )
          );
        }
      };
      (0, s.gn)([l.ak], E.prototype, "OnCaptchaText", null),
        (0, s.gn)([l.ak], E.prototype, "RefreshCaptcha", null),
        (E = (0, s.gn)([i.Pi], E));
      let S = class extends n.Component {
        OnSubmit(e) {
          e.preventDefault(), this.props.manager.DoLogin();
        }
        OnChangeAuthCode(e) {
          this.props.authtype == g.ze.TwoFactorCode
            ? this.props.manager.SetTwoFactorCode(e.target.value)
            : this.props.manager.SetEmailAuthCode(e.target.value);
        }
        render() {
          let e,
            t = this.props.manager,
            a = "",
            s = null,
            i = "",
            l = t.GetSteamGuardCodeError() == g.Gt.InvalidCode;
          switch (this.props.authtype) {
            case g.ze.TwoFactorCode:
              (a = t.GetTwoFactorCode()),
                (s = (0, p.Xx)("#Login_Enter2FA")),
                (e = n.createElement(o.vT2, null)),
                (i = (0, p.Xx)("#Login_Enter2FAHelp"));
              break;
            case g.ze.EmailCode:
              (a = t.GetEmailAuthCode()),
                (s = (0, p.kQ)(
                  "#Login_SentSteamguard",
                  n.createElement(
                    "span",
                    { className: c().Highlight },
                    "@",
                    t.GetEmailDomain()
                  )
                )),
                (i = (0, p.Xx)("#Login_EnterSteamguard")),
                (e = n.createElement(o.wr9, null));
          }
          return n.createElement(
            "div",
            { className: c().AuthenticationPanel },
            n.createElement(r.__, null, (0, p.Xx)("#Login_SigningIn")),
            n.createElement(
              "div",
              { className: c().SigningInAccountName },
              t.GetUserName()
            ),
            n.createElement(r.Ac, null, s),
            n.createElement(
              "div",
              { className: c().AuthenticatorInputcontainer },
              e,
              n.createElement(
                "form",
                { className: c().AccountPasswordForm, onSubmit: this.OnSubmit },
                n.createElement(r.II, {
                  className: (0, m.Z)(c().AccountName),
                  label: "Steam Guard Code",
                  type: "text",
                  autoComplete: "off",
                  focusOnMount: !0,
                  maxLength: 64,
                  value: a,
                  onChange: this.OnChangeAuthCode,
                }),
                n.createElement(
                  r.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, p.Xx)("#Login_SteamguardSubmit").toLocaleUpperCase()
                )
              )
            ),
            n.createElement(
              "a",
              {
                className: (0, m.Z)(
                  c().NeedHelpLink,
                  l ? c().NeedHelpHighlight : null
                ),
                href: "http://help.steampowered.com/",
              },
              i
            )
          );
        }
      };
      (0, s.gn)([l.ak], S.prototype, "OnSubmit", null),
        (0, s.gn)([l.ak], S.prototype, "OnChangeAuthCode", null),
        (S = (0, s.gn)([i.Pi], S));
    },
  },
]);
