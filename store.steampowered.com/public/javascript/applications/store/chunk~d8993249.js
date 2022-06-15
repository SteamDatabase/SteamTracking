/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    DSrS: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return l;
      }),
        a.d(t, "c", function () {
          return m;
        }),
        a.d(t, "a", function () {
          return c;
        });
      var n = a("mrSG"),
        s = a("2vnA"),
        r = a("cHF8"),
        o = a("vYsE"),
        i = a("GXif");
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
      class c {
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
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_bRequestInFlight) return;
            Object(s.G)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let e = yield Object(r.a)(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields
            );
            Object(s.G)(() => {
              (this.m_bRequestInFlight = !1), this.UpdateLoginResult(e);
            });
          });
        }
        UpdateLoginResult(e) {
          if (!e)
            return (
              console.log("Login timeout"),
              void (this.m_strErrorMessage = Object(i.g)(
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
                    ((this.m_strErrorMessage = Object(i.g)(
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
                    ((this.m_strErrorMessage = Object(i.g)(
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
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = yield Object(r.d)(this.m_strBaseURL);
            e ? this.UpdateCaptchaURL(e) : console.log("Failed to get captcha");
          });
        }
        UpdateCaptchaURL(e) {
          (this.m_userFields.gidCaptcha = e),
            (this.m_userFields.strCaptchaText = ""),
            (this.m_strCaptchaURL =
              "-1" != e ? Object(r.b)(this.m_strBaseURL, e) : "");
        }
      }
      Object(n.b)([s.C], c.prototype, "m_bRequestInFlight", void 0),
        Object(n.b)([s.C], c.prototype, "m_userFields", void 0),
        Object(n.b)([s.C], c.prototype, "m_eCurrentStep", void 0),
        Object(n.b)([s.C], c.prototype, "m_strErrorMessage", void 0),
        Object(n.b)([s.C], c.prototype, "m_strEmailDomain", void 0),
        Object(n.b)([s.C], c.prototype, "m_strCaptchaURL", void 0),
        Object(n.b)([s.C], c.prototype, "m_eSteamGuardCodeError", void 0),
        Object(n.b)([o.a], c.prototype, "DoLogin", null),
        Object(n.b)([s.k.bound], c.prototype, "UpdateCaptchaURL", null);
    },
    pVzq: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return _;
      });
      var n = a("mrSG"),
        s = a("q1tI"),
        r = a.n(s),
        o = a("7ast"),
        i = a("e356"),
        l = a("TyAF"),
        m = a("hCpY"),
        c = a("GbHM"),
        h = a("tVW8"),
        g = a.n(h),
        d = a("DSrS"),
        u = a("kWcV"),
        p = a("GXif"),
        C = a("/Q1a");
      let _ = class extends r.a.Component {
        constructor(e) {
          super(e),
            (this.m_manager = new d.a(this.props.baseURL)),
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
            { baseURL: t, onLoginComplete: a, className: s } = e,
            o = Object(n.c)(e, ["baseURL", "onLoginComplete", "className"]),
            l = Object(c.a)(g.a.LoginDialog, s),
            m = this.m_manager.GetCurrentStep(),
            h = this.m_manager.GetErrorMessage();
          return r.a.createElement(
            "div",
            Object.assign({ className: l }, o),
            r.a.createElement(
              "div",
              { className: g.a.LoginPanelBackground },
              r.a.createElement(i.ob, null)
            ),
            r.a.createElement(
              "div",
              { className: g.a.LoginPanelContent },
              h && r.a.createElement(b, { text: h }),
              m == d.b.AccountName &&
                r.a.createElement(S, { manager: this.m_manager }),
              m == d.b.TwoFactorCode &&
                r.a.createElement(L, {
                  manager: this.m_manager,
                  authtype: d.b.TwoFactorCode,
                }),
              m == d.b.EmailCode &&
                r.a.createElement(L, {
                  manager: this.m_manager,
                  authtype: d.b.EmailCode,
                }),
              m == d.b.Complete &&
                r.a.createElement(
                  "div",
                  { className: g.a.LoginComplete },
                  r.a.createElement(u.a, null)
                )
            )
          );
        }
      };
      function b(e) {
        return r.a.createElement(
          "div",
          { className: g.a.ErrorMessage },
          e.text
        );
      }
      _ = Object(n.b)([l.a], _);
      let S = class extends r.a.Component {
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
                ? g.a.MedPass
                : 2 == this.state.nPassSize
                ? g.a.LargePass
                : g.a.DefaultPass),
            (e =
              1 == this.state.nNameSize
                ? g.a.MedName
                : 2 == this.state.nNameSize
                ? g.a.LargeName
                : g.a.DefaultNAme),
            r.a.createElement(
              "div",
              { className: g.a.AccountPasswordPanel },
              r.a.createElement(
                "div",
                { className: g.a.SigninTitle },
                Object(p.g)("#Login_SignIn")
              ),
              r.a.createElement(
                "form",
                { className: g.a.AccountPasswordForm, onSubmit: this.OnSubmit },
                r.a.createElement(o.z, {
                  className: Object(c.a)(g.a.AccountNameLabel, e),
                  label: Object(p.g)("#Login_AccountName"),
                  type: "text",
                  value: a.GetUserName(),
                  focusOnMount: !0,
                  maxLength: 64,
                  onChange: this.OnChangeName,
                }),
                r.a.createElement(o.z, {
                  bIsPassword: !0,
                  className: Object(c.a)(g.a.PasswordDots, t),
                  label: Object(p.g)("#Login_Password"),
                  type: "password",
                  autoComplete: "off",
                  maxLength: 64,
                  size: 64,
                  value: a.GetPassword(),
                  onChange: this.OnChangePassword,
                }),
                r.a.createElement(o.f, {
                  className: g.a.RememberMeCheck,
                  label: Object(p.g)("#Login_RememberMe"),
                  disabled: !1,
                  onChange: () => this.OnChangeRememberPass,
                  checked: a.GetRememberPassword(),
                }),
                a.GetCaptchaURL() && r.a.createElement(E, { manager: a }),
                r.a.createElement(
                  o.F,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  Object(p.g)("#Login_SignIn").toLocaleUpperCase()
                )
              ),
              r.a.createElement(
                "a",
                { className: g.a.NeedHelpLink, href: C.d.HELP_BASE_URL },
                Object(p.g)("#Login_ForgotPassword")
              ),
              r.a.createElement("div", { className: g.a.LoginCreateSeperator }),
              r.a.createElement(
                "div",
                { className: g.a.SteamUpsellContainer },
                r.a.createElement(
                  "div",
                  { className: g.a.SteamUpsell },
                  Object(p.g)("#Login_NoSteamAccount")
                ),
                r.a.createElement(
                  "div",
                  { className: g.a.CreateAccountLink },
                  r.a.createElement(
                    "a",
                    { href: `${C.d.STORE_BASE_URL}join/` },
                    Object(p.g)("#Login_CreateAccount")
                  )
                )
              )
            )
          );
        }
      };
      Object(n.b)([m.b], S.prototype, "OnSubmit", null),
        Object(n.b)([m.b], S.prototype, "OnChangeName", null),
        Object(n.b)([m.b], S.prototype, "OnChangePassword", null),
        Object(n.b)([m.b], S.prototype, "OnChangeRememberPass", null),
        (S = Object(n.b)([l.a], S));
      let E = class extends r.a.Component {
        OnCaptchaText(e) {
          this.props.manager.SetCaptchaText(e.target.value);
        }
        RefreshCaptcha(e) {
          this.props.manager.RefreshCaptcha();
        }
        render() {
          let e = this.props.manager;
          return r.a.createElement(
            "div",
            { className: g.a.CaptchaContainer },
            r.a.createElement(
              "div",
              { className: g.a.CaptchaBlock },
              r.a.createElement(
                "div",
                { className: g.a.CaptchaImageAndInput },
                r.a.createElement(
                  "div",
                  { className: g.a.CaptchaImageBox },
                  r.a.createElement("img", {
                    className: g.a.CaptchaImage,
                    src: e.GetCaptchaURL(),
                  })
                ),
                r.a.createElement(o.z, {
                  className: g.a.CaptchaInput,
                  type: "text",
                  autoComplete: "off",
                  maxLength: 6,
                  value: e.GetCaptchaText(),
                  onChange: this.OnCaptchaText,
                })
              ),
              r.a.createElement(
                "div",
                { className: g.a.ErrorMessage },
                Object(p.g)("#Login_CaptchaVerification")
              )
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "span",
                {
                  className: g.a.RefreshCaptchaText,
                  onClick: this.RefreshCaptcha,
                },
                Object(p.g)("#Login_RefreshCaptcha")
              )
            )
          );
        }
      };
      Object(n.b)([m.b], E.prototype, "OnCaptchaText", null),
        Object(n.b)([m.b], E.prototype, "RefreshCaptcha", null),
        (E = Object(n.b)([l.a], E));
      let L = class extends r.a.Component {
        OnSubmit(e) {
          e.preventDefault(), this.props.manager.DoLogin();
        }
        OnChangeAuthCode(e) {
          this.props.authtype == d.b.TwoFactorCode
            ? this.props.manager.SetTwoFactorCode(e.target.value)
            : this.props.manager.SetEmailAuthCode(e.target.value);
        }
        render() {
          let e,
            t = this.props.manager,
            a = "",
            n = null,
            s = "",
            l = t.GetSteamGuardCodeError() == d.c.InvalidCode;
          switch (this.props.authtype) {
            case d.b.TwoFactorCode:
              (a = t.GetTwoFactorCode()),
                (n = Object(p.g)("#Login_Enter2FA")),
                (e = r.a.createElement(i.N, null)),
                (s = Object(p.g)("#Login_Enter2FAHelp"));
              break;
            case d.b.EmailCode:
              (a = t.GetEmailAuthCode()),
                (n = Object(p.o)(
                  "#Login_SentSteamguard",
                  r.a.createElement(
                    "span",
                    { className: g.a.Highlight },
                    "@",
                    t.GetEmailDomain()
                  )
                )),
                (s = Object(p.g)("#Login_EnterSteamguard")),
                (e = r.a.createElement(i.D, null));
          }
          return r.a.createElement(
            "div",
            { className: g.a.AuthenticationPanel },
            r.a.createElement(o.C, null, Object(p.g)("#Login_SigningIn")),
            r.a.createElement(
              "div",
              { className: g.a.SigningInAccountName },
              t.GetUserName()
            ),
            r.a.createElement(o.d, null, n),
            r.a.createElement(
              "div",
              { className: g.a.AuthenticatorInputcontainer },
              e,
              r.a.createElement(
                "form",
                { className: g.a.AccountPasswordForm, onSubmit: this.OnSubmit },
                r.a.createElement(o.z, {
                  className: Object(c.a)(g.a.AccountName),
                  label: "Steam Guard Code",
                  type: "text",
                  autoComplete: "off",
                  focusOnMount: !0,
                  maxLength: 64,
                  value: a,
                  onChange: this.OnChangeAuthCode,
                }),
                r.a.createElement(
                  o.F,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  Object(p.g)("#Login_SteamguardSubmit").toLocaleUpperCase()
                )
              )
            ),
            r.a.createElement(
              "a",
              {
                className: Object(c.a)(
                  g.a.NeedHelpLink,
                  l ? g.a.NeedHelpHighlight : null
                ),
                href: "http://help.steampowered.com/",
              },
              s
            )
          );
        }
      };
      Object(n.b)([m.b], L.prototype, "OnSubmit", null),
        Object(n.b)([m.b], L.prototype, "OnChangeAuthCode", null),
        (L = Object(n.b)([l.a], L));
    },
    tVW8: function (e, t, a) {
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
  },
]);
