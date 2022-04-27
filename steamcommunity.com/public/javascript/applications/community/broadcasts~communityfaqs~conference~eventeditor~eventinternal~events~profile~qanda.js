/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "0OaU": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      });
      var n = r("q1tI"),
        a = r.n(n),
        s = r("6Y59"),
        i = r("2i24"),
        o = r.n(i);
      class l extends a.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(o.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(o.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(o.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(o.a.throbber_xxlarge)
            : e.push(o.a.throbber_large);
        }
        render() {
          let e = [o.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(o.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(o.a.Static);
          let t = a.a.createElement(
            "div",
            { className: e.join(" ") },
            a.a.createElement(
              "div",
              { className: o.a.Throbber },
              a.a.createElement(s.nb, { className: o.a.base }),
              a.a.createElement(s.nb, { className: o.a.blur })
            )
          );
          return a.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? o.a.throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              a.a.createElement(
                "div",
                { className: o.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    "5izx": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return f;
      }),
        r.d(t, "c", function () {
          return g;
        }),
        r.d(t, "b", function () {
          return E;
        });
      var n = r("mrSG"),
        a = r("2vnA"),
        s = r("wd/R"),
        i = r.n(s),
        o = r("s4NR"),
        l = r.n(o),
        h = r("q1tI"),
        c = r.n(h),
        u = r("65aj"),
        m = r("X2UP"),
        p = r("lkRc");
      r("X3Ds");
      class d {
        constructor() {
          (this.bOpenEventLandingPage = !1),
            (this.bIncludeFeaturedAsGameSource = !0),
            (this.nOverrideDateNow = void 0);
        }
        get bRequireAllEventsLoadedInTimeBlock() {
          return !1;
        }
        get bIsFollowingEnabled() {
          return p.c.EREALM != u.ESteamRealm.k_ESteamRealmChina;
        }
        get bIsCuratorsEnabled() {
          return p.c.EREALM != u.ESteamRealm.k_ESteamRealmChina;
        }
        get bIncludeCurators() {
          return !0;
        }
        GetTimeNowWithOverride() {
          return this.nOverrideDateNow
            ? this.nOverrideDateNow
            : Math.floor(Date.now() / 1e3);
        }
        GetTimeNowWithOverrideAsDate() {
          return this.nOverrideDateNow
            ? new Date(1e3 * this.nOverrideDateNow)
            : new Date();
        }
        BHasTimeOverride() {
          return Boolean(this.nOverrideDateNow);
        }
        ParseDevOverrides(e) {
          if (!e || 0 == e.length) return;
          const t = l.a.parse("?" == e[0] ? e.substring(1) : e);
          if (
            "string" == typeof t.t &&
            ("dev" == p.c.WEB_UNIVERSE || "beta" == p.c.WEB_UNIVERSE)
          ) {
            let e = /^\d+$/.test(t.t)
              ? i.a.unix(Number.parseInt(t.t))
              : i()(t.t);
            (this.nOverrideDateNow = Math.floor(e.unix())),
              console.log(
                "CEventCalendarDevFeatures overriding partner event time: " +
                  this.nOverrideDateNow +
                  " " +
                  e.format()
              );
          }
        }
      }
      Object(n.b)([a.C], d.prototype, "nOverrideDateNow", void 0);
      const f = new d();
      function g(e = 1) {
        const [t, r] = c.a.useState(() => b()),
          n = Object(m.a)("useTimeNowWithOverride"),
          a = c.a.useCallback(() => {
            n.token.reason || r(b());
          }, []);
        return (
          c.a.useEffect(() => {
            const t = 1e3 * e,
              r = t - (Date.now() % t),
              n = window.setTimeout(a, r);
            return () => {
              window.clearTimeout(n);
            };
          }, [t, e, a]),
          t
        );
      }
      window.g_EventCalendarDevFeatures = f;
      const v = new Date(),
        _ = Math.floor(v.getTime() / 1e3);
      function b() {
        const e = Math.floor(Date.now() / 1e3);
        return f.nOverrideDateNow ? f.nOverrideDateNow + (e - _) : e;
      }
      function E() {
        return c.a.useMemo(() => {
          return null !== (e = f.nOverrideDateNow) && void 0 !== e ? e : _;
          var e;
        }, []);
      }
    },
    "8H1D": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return s;
        });
      var n = r("lkRc");
      const a = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let r = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = a),
          44 == e.length && ((r = e.substr(-4)), (e = e.substr(0, 40)));
        let s = n.c.AVATAR_BASE_URL;
        return (
          s ||
            ((s = n.c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (s += e.substr(0, 2) + "/")),
          (s += e),
          t && "small" != t && (s += "_" + t),
          (s += r),
          s
        );
      }
    },
    AiWL: function (e, t, r) {
      "use strict";
      r("mgoM");
    },
    BFsE: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return I;
      });
      var n = r("mrSG"),
        a = r("q1tI"),
        s = r.n(a),
        i = r("2vnA"),
        o = r("vDqi"),
        l = r.n(o);
      const h = r("r+Z0").default;
      function c(e, t) {
        return e.endsWith("/") || (e += "/"), `${e}login/${t}/`;
      }
      function u() {
        let e = new FormData();
        return e.append("donotcache", new Date().getTime().toString()), e;
      }
      function m(e, t, r, a) {
        return Object(n.a)(this, void 0, void 0, function* () {
          const n = (function (e, t) {
            let r = h.getPublicKey(t.publickey_mod, t.publickey_exp),
              n = h.encrypt(e, r);
            return !1 === n ? null : n;
          })(r.strPassword, a);
          if (!n) return null;
          let s = u();
          s.append("password", n),
            s.append("username", r.strUserName),
            s.append("twofactorcode", r.strTwoFactorCode || ""),
            s.append("emailauth", r.strEmailAuthCode || ""),
            s.append("loginfriendlyname", ""),
            s.append("captchagid", r.gidCaptcha || ""),
            s.append("captcha_text", r.strCaptchaText || ""),
            s.append("emailsteamid", r.emailSteamID || ""),
            s.append("rsatimestamp", a.timestamp),
            s.append("remember_login", r.bRememberLogin ? "true" : "false");
          let i = {};
          t &&
            (s.append("oauth_client_id", t),
            s.append("mobile_chat_client", "true"));
          let o,
            m = c(e, "dologin");
          try {
            let e = yield l.a.post(m, s, i);
            if (200 != e.status) return null;
            let t = e.data;
            if (!t) return null;
            t.oauth && (t.oauth = JSON.parse(t.oauth)), (o = t);
          } catch (e) {
            return null;
          }
          return o;
        });
      }
      function p(e, t, r) {
        return Object(n.a)(this, void 0, void 0, function* () {
          if (
            ((r = Object.assign({}, r)).strUserName &&
              (r.strUserName = r.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !r.strPassword || r.strPassword.match(/[^\x00-\x7F]/))
          )
            return null;
          if (!r.strUserName) return null;
          let a = yield (function (e, t) {
            return Object(n.a)(this, void 0, void 0, function* () {
              let r = u();
              r.append("username", t);
              let n,
                a = c(e, "getrsakey");
              try {
                let e = yield l.a.post(a, r);
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
                n = t;
              } catch (e) {
                return null;
              }
              return n;
            });
          })(e, r.strUserName);
          return a
            ? yield m(e, t, r, a)
            : (console.log("Failed to get RSA key"), null);
        });
      }
      var d = r("XxJJ"),
        f = r("TLQK");
      var g, v;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.AccountName = 1)] = "AccountName"),
          (e[(e.EmailCode = 2)] = "EmailCode"),
          (e[(e.TwoFactorCode = 3)] = "TwoFactorCode"),
          (e[(e.Complete = 4)] = "Complete");
      })(g || (g = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.InvalidCode = 1)] = "InvalidCode");
        })(v || (v = {}));
      class _ {
        constructor(e, t) {
          (this.m_strBaseURL = ""),
            (this.m_strOAuthClientID = ""),
            (this.m_fnLoginComplete = null),
            (this.m_bRequestInFlight = !1),
            (this.m_eCurrentStep = g.AccountName),
            (this.m_strErrorMessage = ""),
            (this.m_strEmailDomain = ""),
            (this.m_strCaptchaURL = ""),
            (this.m_eSteamGuardCodeError = v.None),
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
            Object(i.G)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let e = yield p(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields
            );
            Object(i.G)(() => {
              (this.m_bRequestInFlight = !1), this.UpdateLoginResult(e);
            });
          });
        }
        UpdateLoginResult(e) {
          if (!e)
            return (
              console.log("Login timeout"),
              void (this.m_strErrorMessage = Object(f.f)(
                "#ConnectionTrouble_FailedToConnect"
              ))
            );
          if (e.login_complete) {
            if (((this.m_eCurrentStep = g.Complete), this.m_fnLoginComplete)) {
              let t = {
                steamID: e.oauth ? e.oauth.steamid : "",
                strAccountName: e.oauth ? e.oauth.account_name : "",
                strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
              };
              this.m_fnLoginComplete(t);
            }
          } else
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = v.None),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL("-1"),
                  this.m_eCurrentStep != g.TwoFactorCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = Object(f.f)(
                      "#MobileLogin_IncorrectSteamGuard"
                    )),
                    (this.m_eSteamGuardCodeError = v.InvalidCode),
                    (this.m_userFields.strTwoFactorCode = "")),
                  (this.m_eCurrentStep = g.TwoFactorCode))
                : e.captcha_needed && e.captcha_gid
                ? ((this.m_eCurrentStep = g.AccountName),
                  this.UpdateCaptchaURL(e.captcha_gid))
                : e.emailauth_needed
                ? (e.emaildomain && (this.m_strEmailDomain = e.emaildomain),
                  e.emailsteamid &&
                    (this.m_userFields.emailSteamID = e.emailsteamid),
                  this.m_eCurrentStep != g.EmailCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = Object(f.f)(
                      "#MobileLogin_IncorrectSteamGuard"
                    )),
                    (this.m_eSteamGuardCodeError = v.InvalidCode),
                    (this.m_userFields.strEmailAuthCode = "")),
                  (this.m_eCurrentStep = g.EmailCode))
                : e.agreement_session_url
                ? (this.Shutdown(),
                  console.log(window.location.href),
                  (window.location.href =
                    e.agreement_session_url + "&redir=" + window.location.href))
                : console.log("Unhandled login error");
        }
        RefreshCaptcha() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = yield (function (e) {
              return Object(n.a)(this, void 0, void 0, function* () {
                let t = u(),
                  r = c(e, "refreshcaptcha"),
                  n = "";
                try {
                  let e = yield l.a.post(r, t);
                  if (200 != e.status) return !1;
                  n = e.data.gid;
                } catch (e) {
                  return !1;
                }
                return n;
              });
            })(this.m_strBaseURL);
            e ? this.UpdateCaptchaURL(e) : console.log("Failed to get captcha");
          });
        }
        UpdateCaptchaURL(e) {
          (this.m_userFields.gidCaptcha = e),
            (this.m_userFields.strCaptchaText = ""),
            (this.m_strCaptchaURL =
              "-1" != e
                ? (function (e, t) {
                    return c(e, "rendercaptcha") + `?gid=${t}`;
                  })(this.m_strBaseURL, e)
                : "");
        }
      }
      Object(n.b)([i.C], _.prototype, "m_bRequestInFlight", void 0),
        Object(n.b)([i.C], _.prototype, "m_userFields", void 0),
        Object(n.b)([i.C], _.prototype, "m_eCurrentStep", void 0),
        Object(n.b)([i.C], _.prototype, "m_strErrorMessage", void 0),
        Object(n.b)([i.C], _.prototype, "m_strEmailDomain", void 0),
        Object(n.b)([i.C], _.prototype, "m_strCaptchaURL", void 0),
        Object(n.b)([i.C], _.prototype, "m_eSteamGuardCodeError", void 0),
        Object(n.b)([d.a], _.prototype, "DoLogin", null),
        Object(n.b)([i.k.bound], _.prototype, "UpdateCaptchaURL", null);
      var b = r("Mgs7"),
        E = r("6Y59"),
        C = r("TyAF"),
        T = r("opsS"),
        y = r("exH9"),
        S = r("N6Aq"),
        D = r.n(S),
        j = r("0OaU"),
        O = r("lkRc");
      let w = class extends s.a.Component {
        constructor(e) {
          super(e),
            (this.m_manager = new _(this.props.baseURL)),
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
            { baseURL: t, onLoginComplete: r, className: a } = e,
            i = Object(n.c)(e, ["baseURL", "onLoginComplete", "className"]),
            o = Object(y.a)(D.a.LoginDialog, a),
            l = this.m_manager.GetCurrentStep(),
            h = this.m_manager.GetErrorMessage();
          return s.a.createElement(
            "div",
            Object.assign({ className: o }, i),
            s.a.createElement(
              "div",
              { className: D.a.LoginPanelBackground },
              s.a.createElement(E.kb, null)
            ),
            s.a.createElement(
              "div",
              { className: D.a.LoginPanelContent },
              h && s.a.createElement(A, { text: h }),
              l == g.AccountName &&
                s.a.createElement(N, { manager: this.m_manager }),
              l == g.TwoFactorCode &&
                s.a.createElement(B, {
                  manager: this.m_manager,
                  authtype: g.TwoFactorCode,
                }),
              l == g.EmailCode &&
                s.a.createElement(B, {
                  manager: this.m_manager,
                  authtype: g.EmailCode,
                }),
              l == g.Complete &&
                s.a.createElement(
                  "div",
                  { className: D.a.LoginComplete },
                  s.a.createElement(j.a, null)
                )
            )
          );
        }
      };
      function A(e) {
        return s.a.createElement(
          "div",
          { className: D.a.ErrorMessage },
          e.text
        );
      }
      w = Object(n.b)([C.a], w);
      let N = class extends s.a.Component {
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
            r = this.props.manager;
          return (
            (t =
              1 == this.state.nPassSize
                ? D.a.MedPass
                : 2 == this.state.nPassSize
                ? D.a.LargePass
                : D.a.DefaultPass),
            (e =
              1 == this.state.nNameSize
                ? D.a.MedName
                : 2 == this.state.nNameSize
                ? D.a.LargeName
                : D.a.DefaultNAme),
            s.a.createElement(
              "div",
              { className: D.a.AccountPasswordPanel },
              s.a.createElement(
                "div",
                { className: D.a.SigninTitle },
                Object(f.f)("#Login_SignIn")
              ),
              s.a.createElement(
                "form",
                { className: D.a.AccountPasswordForm, onSubmit: this.OnSubmit },
                s.a.createElement(b.A, {
                  className: Object(y.a)(D.a.AccountNameLabel, e),
                  label: Object(f.f)("#Login_AccountName"),
                  type: "text",
                  value: r.GetUserName(),
                  focusOnMount: !0,
                  maxLength: 64,
                  onChange: this.OnChangeName,
                }),
                s.a.createElement(b.A, {
                  bIsPassword: !0,
                  className: Object(y.a)(D.a.PasswordDots, t),
                  label: Object(f.f)("#Login_Password"),
                  type: "password",
                  autoComplete: "off",
                  maxLength: 64,
                  size: 64,
                  value: r.GetPassword(),
                  onChange: this.OnChangePassword,
                }),
                s.a.createElement(b.g, {
                  className: D.a.RememberMeCheck,
                  label: Object(f.f)("#Login_RememberMe"),
                  disabled: !1,
                  onChange: () => this.OnChangeRememberPass,
                  checked: r.GetRememberPassword(),
                }),
                r.GetCaptchaURL() && s.a.createElement(L, { manager: r }),
                s.a.createElement(
                  b.G,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  Object(f.f)("#Login_SignIn").toLocaleUpperCase()
                )
              ),
              s.a.createElement(
                "a",
                { className: D.a.NeedHelpLink, href: O.c.HELP_BASE_URL },
                Object(f.f)("#Login_ForgotPassword")
              ),
              s.a.createElement("div", { className: D.a.LoginCreateSeperator }),
              s.a.createElement(
                "div",
                { className: D.a.SteamUpsellContainer },
                s.a.createElement(
                  "div",
                  { className: D.a.SteamUpsell },
                  Object(f.f)("#Login_NoSteamAccount")
                ),
                s.a.createElement(
                  "div",
                  { className: D.a.CreateAccountLink },
                  s.a.createElement(
                    "a",
                    { href: `${O.c.STORE_BASE_URL}join/` },
                    Object(f.f)("#Login_CreateAccount")
                  )
                )
              )
            )
          );
        }
      };
      Object(n.b)([T.b], N.prototype, "OnSubmit", null),
        Object(n.b)([T.b], N.prototype, "OnChangeName", null),
        Object(n.b)([T.b], N.prototype, "OnChangePassword", null),
        Object(n.b)([T.b], N.prototype, "OnChangeRememberPass", null),
        (N = Object(n.b)([C.a], N));
      let L = class extends s.a.Component {
        OnCaptchaText(e) {
          this.props.manager.SetCaptchaText(e.target.value);
        }
        RefreshCaptcha(e) {
          this.props.manager.RefreshCaptcha();
        }
        render() {
          let e = this.props.manager;
          return s.a.createElement(
            "div",
            { className: D.a.CaptchaContainer },
            s.a.createElement(
              "div",
              { className: D.a.CaptchaBlock },
              s.a.createElement(
                "div",
                { className: D.a.CaptchaImageAndInput },
                s.a.createElement(
                  "div",
                  { className: D.a.CaptchaImageBox },
                  s.a.createElement("img", {
                    className: D.a.CaptchaImage,
                    src: e.GetCaptchaURL(),
                  })
                ),
                s.a.createElement(b.A, {
                  className: D.a.CaptchaInput,
                  type: "text",
                  autoComplete: "off",
                  maxLength: 6,
                  value: e.GetCaptchaText(),
                  onChange: this.OnCaptchaText,
                })
              ),
              s.a.createElement(
                "div",
                { className: D.a.ErrorMessage },
                Object(f.f)("#Login_CaptchaVerification")
              )
            ),
            s.a.createElement(
              "div",
              null,
              s.a.createElement(
                "span",
                {
                  className: D.a.RefreshCaptchaText,
                  onClick: this.RefreshCaptcha,
                },
                Object(f.f)("#Login_RefreshCaptcha")
              )
            )
          );
        }
      };
      Object(n.b)([T.b], L.prototype, "OnCaptchaText", null),
        Object(n.b)([T.b], L.prototype, "RefreshCaptcha", null),
        (L = Object(n.b)([C.a], L));
      let B = class extends s.a.Component {
        OnSubmit(e) {
          e.preventDefault(), this.props.manager.DoLogin();
        }
        OnChangeAuthCode(e) {
          this.props.authtype == g.TwoFactorCode
            ? this.props.manager.SetTwoFactorCode(e.target.value)
            : this.props.manager.SetEmailAuthCode(e.target.value);
        }
        render() {
          let e,
            t = this.props.manager,
            r = "",
            n = null,
            a = "",
            i = t.GetSteamGuardCodeError() == v.InvalidCode;
          switch (this.props.authtype) {
            case g.TwoFactorCode:
              (r = t.GetTwoFactorCode()),
                (n = Object(f.f)("#Login_Enter2FA")),
                (e = s.a.createElement(E.I, null)),
                (a = Object(f.f)("#Login_Enter2FAHelp"));
              break;
            case g.EmailCode:
              (r = t.GetEmailAuthCode()),
                (n = Object(f.m)(
                  "#Login_SentSteamguard",
                  s.a.createElement(
                    "span",
                    { className: D.a.Highlight },
                    "@",
                    t.GetEmailDomain()
                  )
                )),
                (a = Object(f.f)("#Login_EnterSteamguard")),
                (e = s.a.createElement(E.x, null));
          }
          return s.a.createElement(
            "div",
            { className: D.a.AuthenticationPanel },
            s.a.createElement(b.D, null, Object(f.f)("#Login_SigningIn")),
            s.a.createElement(
              "div",
              { className: D.a.SigningInAccountName },
              t.GetUserName()
            ),
            s.a.createElement(b.e, null, n),
            s.a.createElement(
              "div",
              { className: D.a.AuthenticatorInputcontainer },
              e,
              s.a.createElement(
                "form",
                { className: D.a.AccountPasswordForm, onSubmit: this.OnSubmit },
                s.a.createElement(b.A, {
                  className: Object(y.a)(D.a.AccountName),
                  label: "Steam Guard Code",
                  type: "text",
                  autoComplete: "off",
                  focusOnMount: !0,
                  maxLength: 64,
                  value: r,
                  onChange: this.OnChangeAuthCode,
                }),
                s.a.createElement(
                  b.G,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  Object(f.f)("#Login_SteamguardSubmit").toLocaleUpperCase()
                )
              )
            ),
            s.a.createElement(
              "a",
              {
                className: Object(y.a)(
                  D.a.NeedHelpLink,
                  i ? D.a.NeedHelpHighlight : null
                ),
                href: "http://help.steampowered.com/",
              },
              a
            )
          );
        }
      };
      Object(n.b)([T.b], B.prototype, "OnSubmit", null),
        Object(n.b)([T.b], B.prototype, "OnChangeAuthCode", null),
        (B = Object(n.b)([C.a], B));
      var R = r("ka0M");
      class x extends s.a.Component {
        OnLoginComplete(e) {
          window.location.href =
            this.props.redirectURL &&
            this.props.redirectURL !== Object(O.d)() + "login"
              ? this.props.redirectURL
              : O.c.COMMUNITY_BASE_URL;
        }
        render() {
          return O.h && O.h.logged_in
            ? (this.OnLoginComplete(), null)
            : s.a.createElement(
                "div",
                null,
                s.a.createElement(w, {
                  baseURL: Object(O.d)(),
                  onLoginComplete: this.OnLoginComplete,
                })
              );
        }
      }
      Object(n.b)([T.b], x.prototype, "OnLoginComplete", null);
      class P extends s.a.Component {
        render() {
          return s.a.createElement(
            R.a,
            {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
            },
            s.a.createElement(x, { redirectURL: this.props.redirectURL })
          );
        }
      }
      function I() {
        Object(R.d)(
          s.a.createElement(P, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: Object(f.f)("#Login_SignIn") }
        );
      }
    },
    Ee63: function (e, t, r) {
      e.exports = {
        DateAndTime: "localdateandtime_DateAndTime_2V6GL",
        DateAndTimeInline: "localdateandtime_DateAndTimeInline_HZ6b2",
        At: "localdateandtime_At_Fn5EU",
        ActiveEvent: "localdateandtime_ActiveEvent_rT7Ek",
        ActiveEventCallOut: "localdateandtime_ActiveEventCallOut_2pJft",
        RightSideTitles: "localdateandtime_RightSideTitles_4LAnP",
        DateToolTip: "localdateandtime_DateToolTip_2E5LH",
        ShortDateAndTime: "localdateandtime_ShortDateAndTime_MBkkh",
        ShortDateRange: "localdateandtime_ShortDateRange_3CN6I",
      };
    },
    N6Aq: function (e, t, r) {
      e.exports = {
        LoginDialog: "login_LoginDialog_2Hj3a",
        AccountPasswordPanel: "login_AccountPasswordPanel_2LBKJ",
        LoginPanelBackground: "login_LoginPanelBackground_3Xp1H",
        LoginPanelContent: "login_LoginPanelContent_UB5zI",
        ErrorMessage: "login_ErrorMessage_3oDNF",
        AccountPasswordForm: "login_AccountPasswordForm_2Mp7X",
        AuthenticationPanel: "login_AuthenticationPanel_ApHu0",
        AccountNameLabel: "login_AccountNameLabel_1WzDF",
        MedName: "login_MedName_3V1uw",
        LargeName: "login_LargeName_142CN",
        PasswordDots: "login_PasswordDots_1Xbz8",
        MedPass: "login_MedPass_2pUx4",
        LargePass: "login_LargePass_3268n",
        AccountFieldHeader: "login_AccountFieldHeader_2bLG3",
        PasswordFieldHeader: "login_PasswordFieldHeader_a3a45",
        NeedHelpLink: "login_NeedHelpLink_1Mi1l",
        NeedHelpHighlight: "login_NeedHelpHighlight_2RCec",
        CreateAccountLink: "login_CreateAccountLink_x0Czn",
        LoginCreateSeperator: "login_LoginCreateSeperator__TANI",
        RefreshCaptchaText: "login_RefreshCaptchaText_1_C2P",
        SigningInAccountName: "login_SigningInAccountName_2Tg37",
        SigninTitle: "login_SigninTitle_xJ2mR",
        RememberMeCheck: "login_RememberMeCheck_1caeW",
        SteamUpsellContainer: "login_SteamUpsellContainer_2Ge6a",
        SteamUpsell: "login_SteamUpsell_3r5LW",
        CaptchaContainer: "login_CaptchaContainer_1waDj",
        CaptchaBlock: "login_CaptchaBlock_1ltax",
        CaptchaImageAndInput: "login_CaptchaImageAndInput_3HUT2",
        CaptchaImageBox: "login_CaptchaImageBox_dzf2f",
        CaptchaImage: "login_CaptchaImage_3I-c1",
        CaptchaInput: "login_CaptchaInput_FnbII",
        AuthenticatorInputcontainer: "login_AuthenticatorInputcontainer_2_2v6",
        Highlight: "login_Highlight_1tsys",
        LoginComplete: "login_LoginComplete_2aP2X",
      };
    },
    OS6B: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      r("mgoM");
      var n = r("vDqi"),
        a = r.n(n),
        s = r("bxBv");
      function i(e) {
        if (a.a.isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof s.b)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    Qcoi: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return f;
      }),
        r.d(t, "b", function () {
          return g;
        }),
        r.d(t, "c", function () {
          return v;
        });
      var n = r("mrSG"),
        a = r("vDqi"),
        s = r.n(a),
        i = r("2vnA"),
        o = r("q1tI"),
        l = r.n(o),
        h = (r("mgoM"), r("65aj"), r("8H1D")),
        c = r("kLLr"),
        u = (r("AiWL"), r("r64O")),
        m = r("OS6B"),
        p = r("lkRc");
      class d {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return Object(n.a)(this, void 0, void 0, function* () {
            Object(u.a)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs"
            );
            let r = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == r.length) return this.m_mapProfilesLoading.get(e[0]);
            let n = p.c.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              a = s.a.get(n, {
                params: { steamids: r.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            r.forEach((e) => this.m_mapProfilesLoading.set(e, a));
            let i = yield a;
            i.data &&
              200 == i.status &&
              i.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = Object(h.a)(e.avatar_url, "medium")),
                  (e.avatar_url_full = Object(h.a)(e.avatar_url, "full")),
                  (e.avatar_url = Object(h.a)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
          });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            c.a.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            c.a.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? p.c.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : p.c.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      Object(n.b)([i.C], d.prototype, "m_mapProfiles", void 0);
      const f = new d();
      function g(e) {
        const t = l.a.useMemo(
            () => (e ? ("string" == typeof e ? new c.a(e) : e) : null),
            [e]
          ),
          [r, n] = Object(o.useState)(!!t && !f.BHasProfileBySteamID(t));
        Object(o.useEffect)(() => {
          const e = s.a.CancelToken.source();
          return (
            t &&
              !f.BHasProfileBySteamID(t) &&
              f
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const r = Object(m.a)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      r.strErrorMsg,
                    r
                  );
                })
                .finally(() => {
                  e.token.reason || n(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [r, !!t && f.GetProfileBySteamID(t)];
      }
      function v(e) {
        return g(l.a.useMemo(() => c.a.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = f;
    },
    RnhZ: function (e, t, r) {
      var n = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN",
      };
      function a(e) {
        var t = s(e);
        return r(t);
      }
      function s(e) {
        if (!r.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (a.keys = function () {
        return Object.keys(n);
      }),
        (a.resolve = s),
        (e.exports = a),
        (a.id = "RnhZ");
    },
    X2UP: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r("vDqi"),
        a = r.n(n),
        s = r("q1tI"),
        i = r.n(s);
      function o(e) {
        const t = i.a.useRef(a.a.CancelToken.source());
        return (
          i.a.useEffect(() => {
            const r = t.current;
            return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
    YLyR: function (e, t, r) {
      "use strict";
      r.d(t, "f", function () {
        return d;
      }),
        r.d(t, "e", function () {
          return f;
        }),
        r.d(t, "a", function () {
          return g;
        }),
        r.d(t, "g", function () {
          return v;
        }),
        r.d(t, "b", function () {
          return _;
        }),
        r.d(t, "d", function () {
          return b;
        }),
        r.d(t, "c", function () {
          return E;
        });
      var n = r("mrSG"),
        a = r("q1tI"),
        s = r("5E+2"),
        i = r("TLQK"),
        o = r("TyAF"),
        l = r("exH9"),
        h = r("CdLH"),
        c = r("Ee63"),
        u = r.n(c),
        m = r("5izx");
      const p = r("f0Wu");
      function d(e) {
        const t = p.tz.guess(),
          r = p.unix(e).tz(t),
          n = Object(i.c)();
        return n && r.locale(n), r.format("LT");
      }
      function f(e, t) {
        const r = p.tz.guess(),
          n = p.unix(e).tz(r),
          s = Object(i.c)();
        return (
          s && n.locale(s),
          a.createElement(
            a.Fragment,
            null,
            n.format("LT"),
            t
              ? a.createElement(
                  "span",
                  { "data-tooltip-text": n.format("Z") + ", " + r },
                  " ",
                  n.zoneAbbr()
                )
              : null
          )
        );
      }
      const g = Object(o.a)((e) => {
          const {
              dateAndTime: t,
              bSingleLine: r,
              bOnlyTime: n,
              bOnlyDate: s,
            } = e,
            o = !n && Boolean(t),
            l = !s && Boolean(t),
            h = o && Object(i.k)(t),
            c = e.stylesmodule
              ? Object.assign(Object.assign({}, u.a), e.stylesmodule)
              : u.a;
          return r
            ? a.createElement(
                "span",
                { className: n || s ? c.DateAndTimeInline : c.DateAndTime },
                o && h,
                a.createElement("span", null, " "),
                Boolean(t && l) && f(t, !0)
              )
            : a.createElement(
                "div",
                { className: c.DateAndTime },
                o &&
                  a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("div", { className: c.LocalizedDate }, h),
                    " ",
                    a.createElement("span", { className: c.At }, "@")
                  ),
                a.createElement(
                  "div",
                  { className: c.LocalizedTime },
                  Boolean(t && l) && f(t, !0)
                )
              );
        }),
        v = (e) => {
          var t;
          const r = a.createElement(g, {
            dateAndTime: e.rtFullDate,
            bSingleLine: !0,
            stylesmodule: e.stylesmodule,
          });
          return a.createElement(
            s.a,
            {
              toolTipContent: r,
              direction: "top",
              className: e.className,
              strTooltipClassname:
                null === (t = e.stylesmodule) || void 0 === t
                  ? void 0
                  : t.DateToolTip,
            },
            e.children
          );
        };
      let _ = class extends a.Component {
        render() {
          const { startDateAndTime: e, endDateAndTime: t } = this.props,
            r = this.props.stylesmodule
              ? Object.assign(Object.assign({}, u.a), this.props.stylesmodule)
              : u.a;
          let n =
            this.props.bHideEndTime ||
            null == this.props.endDateAndTime ||
            this.props.endDateAndTime < 1;
          if (null == e || 0 == e)
            return a.createElement(
              "div",
              { className: r.DateAndTime },
              a.createElement(
                "span",
                { className: r.RightSideTitles },
                Object(i.f)("#EventDisplay_TimeRange")
              ),
              Object(i.f)("#EventDisplay_TimeDisplayNone")
            );
          let s = m.a.GetTimeNowWithOverride();
          if (n)
            return a.createElement(
              "div",
              { className: r.StartDate },
              a.createElement(
                "div",
                { className: r.RightSideTitles },
                Object(i.f)(
                  e < s
                    ? "#EventDisplay_TimeInPast"
                    : "#EventDisplay_TimeUpcoming"
                ),
                " "
              ),
              a.createElement(g, { stylesmodule: r, dateAndTime: e })
            );
          let o = e <= s && s <= t;
          const c = Object(h.b)(new Date(1e3 * e), new Date(1e3 * t));
          return a.createElement(
            "div",
            { className: r.MultiDateAndTime },
            a.createElement(
              "div",
              { className: r.StartDate },
              a.createElement(
                "span",
                { className: r.RightSideTitles },
                Object(i.f)(
                  e >= s
                    ? "#EventDisplay_TimeBeginsOn"
                    : t >= s
                    ? "#EventDisplay_TimeBeginsOn_Past"
                    : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past"
                )
              ),
              a.createElement(g, {
                stylesmodule: r,
                bSingleLine: !0,
                dateAndTime: e,
              })
            ),
            a.createElement(
              "div",
              { className: r.EndDate },
              a.createElement(
                "span",
                { className: r.RightSideTitles },
                Object(i.f)(
                  t < s
                    ? "#EventDisplay_TimeEndsOn_Past"
                    : "#EventDisplay_TimeEndsOn"
                )
              ),
              a.createElement(g, {
                stylesmodule: r,
                bSingleLine: !0,
                bOnlyTime: c,
                dateAndTime: t,
              })
            ),
            o &&
              a.createElement(
                "span",
                { className: r.ActiveEvent },
                a.createElement(
                  "span",
                  {
                    className: Object(l.a)(
                      r.RightSideTitles,
                      r.ActiveEventCallOut
                    ),
                  },
                  Object(i.f)("#Time_Now")
                )
              )
          );
        }
      };
      _ = Object(n.b)([o.a], _);
      let b = class extends a.Component {
        render() {
          const {
              startDateAndTime: e,
              endDateAndTime: t,
              bHideEndTime: r,
            } = this.props,
            n = this.props.stylesmodule
              ? Object.assign(Object.assign({}, u.a), this.props.stylesmodule)
              : u.a;
          if (null == e || 0 == e)
            return a.createElement(
              "div",
              { className: n.DateAndTime },
              a.createElement(
                "span",
                { className: n.RightSideTitles },
                Object(i.f)("#EventDisplay_TimeRange")
              ),
              Object(i.f)("#EventDisplay_TimeDisplayNone")
            );
          const s = m.a.GetTimeNowWithOverrideAsDate(),
            o = m.a.GetTimeNowWithOverride(),
            l = Object(h.c)(new Date(1e3 * e), s),
            c = a.createElement(
              "div",
              { className: n.ShortDateAndTime },
              Object(i.k)(e, l)
            );
          let p = a.createElement(
            v,
            { rtFullDate: e, stylesmodule: n },
            a.createElement(
              "div",
              { className: n.RightSideTitles },
              Object(i.f)(
                e < o
                  ? "#EventDisplay_TimeInPast"
                  : "#EventDisplay_TimeUpcoming"
              )
            ),
            c
          );
          if (
            (o < e &&
              e < o + h.f.PerWeek &&
              (p = a.createElement(
                v,
                { rtFullDate: e, stylesmodule: n },
                a.createElement(
                  "div",
                  { className: n.RightSideTitles },
                  Object(i.m)(
                    "#EventDisplay_EventUpcoming_WithDateAndTime",
                    c,
                    a.createElement(
                      "div",
                      { className: n.ShortDateAndTime },
                      f(e),
                      " "
                    )
                  )
                )
              )),
            r || null == t || t < 1)
          )
            return p;
          const d = e <= o && o <= t;
          d &&
            (p = a.createElement(
              v,
              { rtFullDate: e, className: n.ActiveEvent, stylesmodule: n },
              a.createElement(
                "span",
                { className: n.ActiveEventCallOut },
                Object(i.f)("#Time_Now")
              )
            ));
          let g = null;
          const _ = d ? t - o : t - e;
          if (_ <= h.f.PerDay) {
            const e = a.createElement(
              "div",
              { className: n.ShortDateAndTime },
              Object(i.p)(_, !0)
            );
            g =
              t < o
                ? a.createElement(
                    "div",
                    { className: n.RightSideTitles },
                    Object(i.f)("#EventDisplay_TimeEndsOn_Ran"),
                    e
                  )
                : a.createElement(
                    "div",
                    { className: n.RightSideTitles },
                    Object(i.m)(
                      d
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      e
                    )
                  );
          } else {
            const e = s.getFullYear() == new Date(1e3 * t).getFullYear();
            g = a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                { className: n.RightSideTitles },
                Object(i.f)(
                  t < o
                    ? "#EventDisplay_TimeEndsOn_Past"
                    : "#EventDisplay_TimeEndsOn"
                )
              ),
              a.createElement(
                "div",
                { className: n.ShortDateAndTime },
                Object(i.k)(t, e)
              )
            );
          }
          const b = a.createElement(v, { rtFullDate: t, stylesmodule: n }, g);
          return a.createElement("div", { className: n.ShortDateRange }, p, b);
        }
      };
      function E(e) {
        const {
          rtStartDate: t,
          rtEndDate: r,
          strMonthFormat: n,
          className: s,
        } = e;
        return a.createElement(
          "div",
          { className: s },
          (function (e, t, r) {
            const n = m.a.GetTimeNowWithOverrideAsDate(),
              a = new Date(1e3 * e),
              s = new Date(1e3 * t),
              o = n.getFullYear() == a.getFullYear(),
              l = n.getFullYear() == s.getFullYear(),
              h = a.getFullYear() == s.getFullYear(),
              c = h && a.getMonth() == s.getMonth(),
              u = c && a.getDate() == s.getDate(),
              p = {
                day: "numeric",
                month: null != r ? r : "long",
                year: o ? void 0 : "numeric",
              },
              d = a.toLocaleDateString(i.e.GetPreferredLocales(), p);
            if (u) return d;
            {
              const e = {
                day: "numeric",
                month: c && l ? void 0 : null != r ? r : "long",
                year: h ? void 0 : "numeric",
              };
              return (
                d + " - " + s.toLocaleDateString(i.e.GetPreferredLocales(), e)
              );
            }
          })(t, r, n),
          " "
        );
      }
      b = Object(n.b)([o.a], b);
    },
    bS9Q: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function a(e, t) {
        return n(e.toLocaleLowerCase(), t.toLocaleLowerCase());
      }
      function s(e) {
        if (!e) return "";
        if (DOMParser) {
          return new DOMParser().parseFromString(e, "text/html").documentElement
            .textContent;
        }
        return e;
      }
      function i(e, t = "") {
        return e.replace(/\bhttps?:\/\/\S+/gi, t);
      }
      function o(e, t, r = !0) {
        let n = e.trim();
        if (((n = n.replace(r ? /\s+/g : /[ \t]+/g, " ")), n.length > t)) {
          n = n.substring(0, t);
          let e = n.replace(/^(.*([.!?])) .*$/, "$1"),
            a = e.length;
          (a < 0.6 * t || a == t) && (e = n.replace(/ [^ ]*$/, "...")),
            (n = r ? e.replace(/(\r\n|\n|\r)/gm, "") : e);
        }
        return n;
      }
      function l(e) {
        let t,
          r,
          n = 0;
        if (0 === e.length) return n;
        for (t = 0; t < e.length; t++)
          (r = e.charCodeAt(t)), (n = (n << 5) - n + r), (n |= 0);
        return n;
      }
      r.d(t, "e", function () {
        return n;
      }),
        r.d(t, "f", function () {
          return a;
        }),
        r.d(t, "b", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "a", function () {
          return l;
        });
    },
    fpVW: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        PartnerEventFont: "partnereventshared_PartnerEventFont_LK4bX",
        BetaContainer: "partnereventshared_BetaContainer_GBqhj",
        EventBetaTextTitle: "partnereventshared_EventBetaTextTitle_3R7Hr",
        Clear: "partnereventshared_Clear_3UhsQ",
        Divider: "partnereventshared_Divider_3B5HO",
        EventDefaultRowContainer:
          "partnereventshared_EventDefaultRowContainer_3WO6c",
        EventStartPublic: "partnereventshared_EventStartPublic_2LU_Y",
        EventOptions: "partnereventshared_EventOptions_2r_Qe",
        FlexColumnContainer: "partnereventshared_FlexColumnContainer_1qhLq",
        FlexRowContainer: "partnereventshared_FlexRowContainer_Ke5f1",
        FlexContainSpaceBetween:
          "partnereventshared_FlexContainSpaceBetween_3nPGW",
        FlexRowWrapSpaceBetweenContainer:
          "partnereventshared_FlexRowWrapSpaceBetweenContainer_19CjI",
        FlexRowWrapFlexStartContainer:
          "partnereventshared_FlexRowWrapFlexStartContainer_tyP_c",
        SaveBackground: "partnereventshared_SaveBackground_V0mbI",
        SupportedGroupLabel: "partnereventshared_SupportedGroupLabel_APmJN",
        LanguageWithContent: "partnereventshared_LanguageWithContent_2Cd1u",
        InputBorder: "partnereventshared_InputBorder_Obyys",
        RadioOption: "partnereventshared_RadioOption_3iJX1",
        EventEditorTextTitleCtn:
          "partnereventshared_EventEditorTextTitleCtn_htm7d",
        doclink: "partnereventshared_doclink_1-bAK",
        EventEditorUnpaddedTextTitle:
          "partnereventshared_EventEditorUnpaddedTextTitle_9hsCL",
        EventEditorTextTitle: "partnereventshared_EventEditorTextTitle_18fHx",
        EventEditorTextTitleLengthInfo:
          "partnereventshared_EventEditorTextTitleLengthInfo_2nHJ1",
        EventSectionTitleCtn: "partnereventshared_EventSectionTitleCtn_onqWK",
        EventSectionTitle: "partnereventshared_EventSectionTitle_Idd_A",
        EventSectionSpacer: "partnereventshared_EventSectionSpacer_1Bloe",
        EventSectionMoreBtn: "partnereventshared_EventSectionMoreBtn_uckBi",
        EventEditorSpacerPadding:
          "partnereventshared_EventEditorSpacerPadding_1RBfN",
        EventEditorVisibilityCtn:
          "partnereventshared_EventEditorVisibilityCtn_1nqBh",
        EventEditorTextSubTitle:
          "partnereventshared_EventEditorTextSubTitle_1i_pY",
        FloatingTitle: "partnereventshared_FloatingTitle_31XRt",
        EventEditorEventStatus:
          "partnereventshared_EventEditorEventStatus_2JGoL",
        EventHidden: "partnereventshared_EventHidden_2H6fn",
        EventVisible: "partnereventshared_EventVisible_3Z0Qr",
        EventBarTitleCtn: "partnereventshared_EventBarTitleCtn_WfVze",
        EventBarTitle: "partnereventshared_EventBarTitle_29kVX",
        EventBarBack: "partnereventshared_EventBarBack_s3r9b",
        EditPreviewButton: "partnereventshared_EditPreviewButton_1FhZQ",
        Delete: "partnereventshared_Delete_32kR7",
        Disabled: "partnereventshared_Disabled_2wVCx",
        BrowseMoreButton: "partnereventshared_BrowseMoreButton_1Yrcl",
        Button: "partnereventshared_Button_1ABCO",
        Icon: "partnereventshared_Icon_1dDpS",
        Primary: "partnereventshared_Primary_30ipl",
        ClearThings: "partnereventshared_ClearThings_3x_qL",
        OnIndicator: "partnereventshared_OnIndicator_1GBsB",
        OffIndicator: "partnereventshared_OffIndicator_w0I94",
        IconImage: "partnereventshared_IconImage_2RY89",
        RightColumnContainer: "partnereventshared_RightColumnContainer_30-E9",
        EventPublishButton: "partnereventshared_EventPublishButton_3nIAe",
        FloatRight: "partnereventshared_FloatRight_1bzHf",
        TTip: "partnereventshared_TTip_2aWuk",
        ValveSupportOnly: "partnereventshared_ValveSupportOnly_wC6-U",
        ArtworkAgeNotAppropriate:
          "partnereventshared_ArtworkAgeNotAppropriate_3V64Z",
        EventDashboardHeader: "partnereventshared_EventDashboardHeader_2kZr_",
        ContainerSpaceBetween: "partnereventshared_ContainerSpaceBetween_3gYZG",
        EventDashboardTitles: "partnereventshared_EventDashboardTitles_1ym4r",
        EventDashboardActions: "partnereventshared_EventDashboardActions_2z_02",
        EventDashboardStatsCtn:
          "partnereventshared_EventDashboardStatsCtn_3IptF",
        EventDashboardAppCtn: "partnereventshared_EventDashboardAppCtn_2iPrK",
        maintitle: "partnereventshared_maintitle_vEk_z",
        AppTitle: "partnereventshared_AppTitle_l-Ow7",
        subtitle: "partnereventshared_subtitle_2mJfc",
        ValveOnlyBackground: "partnereventshared_ValveOnlyBackground_Jckrn",
        ValveOnlyAdminBackground:
          "partnereventshared_ValveOnlyAdminBackground_3HVu1",
        Columns: "partnereventshared_Columns_1oVIR",
        LeftCol: "partnereventshared_LeftCol_3PPz-",
        RightCol: "partnereventshared_RightCol_25xel",
        DropDownScroll: "partnereventshared_DropDownScroll_1CewB",
        CloseButton: "partnereventshared_CloseButton_gR2gS",
        CloseSectionTools: "partnereventshared_CloseSectionTools_1d0D9",
        HalfColumn: "partnereventshared_HalfColumn_3Xmp4",
        tooltip_Ctn: "partnereventshared_tooltip_Ctn_3nqxI",
        SaleEditorSpacing: "partnereventshared_SaleEditorSpacing_2ZGwd",
        SaleSectionHeader: "partnereventshared_SaleSectionHeader_2WMiQ",
        SaleSectionContainer: "partnereventshared_SaleSectionContainer_3gb3J",
        AddSectionButton: "partnereventshared_AddSectionButton_2_djj",
        EventElementRequired: "partnereventshared_EventElementRequired_12rm6",
        EventElementOptional: "partnereventshared_EventElementOptional_1mpG6",
        HelperTooltip: "partnereventshared_HelperTooltip_3T6MQ",
        PixelOffsetCtn: "partnereventshared_PixelOffsetCtn_3Xk96",
        PixelOffsetRow: "partnereventshared_PixelOffsetRow_2PtWb",
        PixelOffsetNote: "partnereventshared_PixelOffsetNote_JjEwa",
        PixelOffsetCallout: "partnereventshared_PixelOffsetCallout_f5QZT",
        Error: "partnereventshared_Error_mSSED",
        GamepadOnlyScrollPanel:
          "partnereventshared_GamepadOnlyScrollPanel_2NO6w",
      };
    },
    "r+Z0": function (e, t, r) {
      "use strict";
      var n;
      r.r(t);
      function a(e, t, r) {
        null != e &&
          ("number" == typeof e
            ? this.fromNumber(e, t, r)
            : null == t && "string" != typeof e
            ? this.fromString(e, 256)
            : this.fromString(e, t));
      }
      function s() {
        return new a(null);
      }
      "Microsoft Internet Explorer" == navigator.appName
        ? ((a.prototype.am = function (e, t, r, n, a, s) {
            for (var i = 32767 & t, o = t >> 15; --s >= 0; ) {
              var l = 32767 & this[e],
                h = this[e++] >> 15,
                c = o * l + h * i;
              (a =
                ((l = i * l + ((32767 & c) << 15) + r[n] + (1073741823 & a)) >>>
                  30) +
                (c >>> 15) +
                o * h +
                (a >>> 30)),
                (r[n++] = 1073741823 & l);
            }
            return a;
          }),
          (n = 30))
        : "Netscape" != navigator.appName
        ? ((a.prototype.am = function (e, t, r, n, a, s) {
            for (; --s >= 0; ) {
              var i = t * this[e++] + r[n] + a;
              (a = Math.floor(i / 67108864)), (r[n++] = 67108863 & i);
            }
            return a;
          }),
          (n = 26))
        : ((a.prototype.am = function (e, t, r, n, a, s) {
            for (var i = 16383 & t, o = t >> 14; --s >= 0; ) {
              var l = 16383 & this[e],
                h = this[e++] >> 14,
                c = o * l + h * i;
              (a =
                ((l = i * l + ((16383 & c) << 14) + r[n] + a) >> 28) +
                (c >> 14) +
                o * h),
                (r[n++] = 268435455 & l);
            }
            return a;
          }),
          (n = 28)),
        (a.prototype.DB = n),
        (a.prototype.DM = (1 << n) - 1),
        (a.prototype.DV = 1 << n);
      (a.prototype.FV = Math.pow(2, 52)),
        (a.prototype.F1 = 52 - n),
        (a.prototype.F2 = 2 * n - 52);
      var i,
        o,
        l = new Array();
      for (i = "0".charCodeAt(0), o = 0; o <= 9; ++o) l[i++] = o;
      for (i = "a".charCodeAt(0), o = 10; o < 36; ++o) l[i++] = o;
      for (i = "A".charCodeAt(0), o = 10; o < 36; ++o) l[i++] = o;
      function h(e) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e);
      }
      function c(e, t) {
        var r = l[e.charCodeAt(t)];
        return null == r ? -1 : r;
      }
      function u(e) {
        var t = s();
        return t.fromInt(e), t;
      }
      function m(e) {
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
      function p(e) {
        this.m = e;
      }
      function d(e) {
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
      function g(e, t) {
        return e | t;
      }
      function v(e, t) {
        return e ^ t;
      }
      function _(e, t) {
        return e & ~t;
      }
      function b(e) {
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
      function E(e) {
        for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
        return t;
      }
      function C() {}
      function T(e) {
        return e;
      }
      function y(e) {
        (this.r2 = s()),
          (this.q3 = s()),
          a.ONE.dlShiftTo(2 * e.t, this.r2),
          (this.mu = this.r2.divide(e)),
          (this.m = e);
      }
      (p.prototype.convert = function (e) {
        return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
      }),
        (p.prototype.revert = function (e) {
          return e;
        }),
        (p.prototype.reduce = function (e) {
          e.divRemTo(this.m, null, e);
        }),
        (p.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (p.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (d.prototype.convert = function (e) {
          var t = s();
          return (
            e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(a.ZERO) > 0 && this.m.subTo(t, t),
            t
          );
        }),
        (d.prototype.revert = function (e) {
          var t = s();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (d.prototype.reduce = function (e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var r = 32767 & e[t],
              n =
                (r * this.mpl +
                  (((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              e[(r = t + this.m.t)] += this.m.am(0, n, e, t, 0, this.m.t);
              e[r] >= e.DV;

            )
              (e[r] -= e.DV), e[++r]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }),
        (d.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (d.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (a.prototype.copyTo = function (e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }),
        (a.prototype.fromInt = function (e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0);
        }),
        (a.prototype.fromString = function (e, t) {
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
          for (var n = e.length, s = !1, i = 0; --n >= 0; ) {
            var o = 8 == r ? 255 & e[n] : c(e, n);
            o < 0
              ? "-" == e.charAt(n) && (s = !0)
              : ((s = !1),
                0 == i
                  ? (this[this.t++] = o)
                  : i + r > this.DB
                  ? ((this[this.t - 1] |=
                      (o & ((1 << (this.DB - i)) - 1)) << i),
                    (this[this.t++] = o >> (this.DB - i)))
                  : (this[this.t - 1] |= o << i),
                (i += r) >= this.DB && (i -= this.DB));
          }
          8 == r &&
            0 != (128 & e[0]) &&
            ((this.s = -1),
            i > 0 && (this[this.t - 1] |= ((1 << (this.DB - i)) - 1) << i)),
            this.clamp(),
            s && a.ZERO.subTo(this, this);
        }),
        (a.prototype.clamp = function () {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }),
        (a.prototype.dlShiftTo = function (e, t) {
          var r;
          for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
          for (r = e - 1; r >= 0; --r) t[r] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }),
        (a.prototype.drShiftTo = function (e, t) {
          for (var r = e; r < this.t; ++r) t[r - e] = this[r];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }),
        (a.prototype.lShiftTo = function (e, t) {
          var r,
            n = e % this.DB,
            a = this.DB - n,
            s = (1 << a) - 1,
            i = Math.floor(e / this.DB),
            o = (this.s << n) & this.DM;
          for (r = this.t - 1; r >= 0; --r)
            (t[r + i + 1] = (this[r] >> a) | o), (o = (this[r] & s) << n);
          for (r = i - 1; r >= 0; --r) t[r] = 0;
          (t[i] = o), (t.t = this.t + i + 1), (t.s = this.s), t.clamp();
        }),
        (a.prototype.rShiftTo = function (e, t) {
          t.s = this.s;
          var r = Math.floor(e / this.DB);
          if (r >= this.t) t.t = 0;
          else {
            var n = e % this.DB,
              a = this.DB - n,
              s = (1 << n) - 1;
            t[0] = this[r] >> n;
            for (var i = r + 1; i < this.t; ++i)
              (t[i - r - 1] |= (this[i] & s) << a), (t[i - r] = this[i] >> n);
            n > 0 && (t[this.t - r - 1] |= (this.s & s) << a),
              (t.t = this.t - r),
              t.clamp();
          }
        }),
        (a.prototype.subTo = function (e, t) {
          for (var r = 0, n = 0, a = Math.min(e.t, this.t); r < a; )
            (n += this[r] - e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
          if (e.t < this.t) {
            for (n -= e.s; r < this.t; )
              (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB);
            n += this.s;
          } else {
            for (n += this.s; r < e.t; )
              (n -= e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
            n -= e.s;
          }
          (t.s = n < 0 ? -1 : 0),
            n < -1 ? (t[r++] = this.DV + n) : n > 0 && (t[r++] = n),
            (t.t = r),
            t.clamp();
        }),
        (a.prototype.multiplyTo = function (e, t) {
          var r = this.abs(),
            n = e.abs(),
            s = r.t;
          for (t.t = s + n.t; --s >= 0; ) t[s] = 0;
          for (s = 0; s < n.t; ++s) t[s + r.t] = r.am(0, n[s], t, s, 0, r.t);
          (t.s = 0), t.clamp(), this.s != e.s && a.ZERO.subTo(t, t);
        }),
        (a.prototype.squareTo = function (e) {
          for (var t = this.abs(), r = (e.t = 2 * t.t); --r >= 0; ) e[r] = 0;
          for (r = 0; r < t.t - 1; ++r) {
            var n = t.am(r, t[r], e, 2 * r, 0, 1);
            (e[r + t.t] += t.am(
              r + 1,
              2 * t[r],
              e,
              2 * r + 1,
              n,
              t.t - r - 1
            )) >= t.DV && ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1));
          }
          e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
            (e.s = 0),
            e.clamp();
        }),
        (a.prototype.divRemTo = function (e, t, r) {
          var n = e.abs();
          if (!(n.t <= 0)) {
            var i = this.abs();
            if (i.t < n.t)
              return (
                null != t && t.fromInt(0), void (null != r && this.copyTo(r))
              );
            null == r && (r = s());
            var o = s(),
              l = this.s,
              h = e.s,
              c = this.DB - m(n[n.t - 1]);
            c > 0
              ? (n.lShiftTo(c, o), i.lShiftTo(c, r))
              : (n.copyTo(o), i.copyTo(r));
            var u = o.t,
              p = o[u - 1];
            if (0 != p) {
              var d = p * (1 << this.F1) + (u > 1 ? o[u - 2] >> this.F2 : 0),
                f = this.FV / d,
                g = (1 << this.F1) / d,
                v = 1 << this.F2,
                _ = r.t,
                b = _ - u,
                E = null == t ? s() : t;
              for (
                o.dlShiftTo(b, E),
                  r.compareTo(E) >= 0 && ((r[r.t++] = 1), r.subTo(E, r)),
                  a.ONE.dlShiftTo(u, E),
                  E.subTo(o, o);
                o.t < u;

              )
                o[o.t++] = 0;
              for (; --b >= 0; ) {
                var C =
                  r[--_] == p
                    ? this.DM
                    : Math.floor(r[_] * f + (r[_ - 1] + v) * g);
                if ((r[_] += o.am(0, C, r, b, 0, u)) < C)
                  for (o.dlShiftTo(b, E), r.subTo(E, r); r[_] < --C; )
                    r.subTo(E, r);
              }
              null != t && (r.drShiftTo(u, t), l != h && a.ZERO.subTo(t, t)),
                (r.t = u),
                r.clamp(),
                c > 0 && r.rShiftTo(c, r),
                l < 0 && a.ZERO.subTo(r, r);
            }
          }
        }),
        (a.prototype.invDigit = function () {
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
        (a.prototype.isEven = function () {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }),
        (a.prototype.exp = function (e, t) {
          if (e > 4294967295 || e < 1) return a.ONE;
          var r = s(),
            n = s(),
            i = t.convert(this),
            o = m(e) - 1;
          for (i.copyTo(r); --o >= 0; )
            if ((t.sqrTo(r, n), (e & (1 << o)) > 0)) t.mulTo(n, i, r);
            else {
              var l = r;
              (r = n), (n = l);
            }
          return t.revert(r);
        }),
        (a.prototype.toString = function (e) {
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
            n = (1 << t) - 1,
            a = !1,
            s = "",
            i = this.t,
            o = this.DB - ((i * this.DB) % t);
          if (i-- > 0)
            for (
              o < this.DB && (r = this[i] >> o) > 0 && ((a = !0), (s = h(r)));
              i >= 0;

            )
              o < t
                ? ((r = (this[i] & ((1 << o) - 1)) << (t - o)),
                  (r |= this[--i] >> (o += this.DB - t)))
                : ((r = (this[i] >> (o -= t)) & n),
                  o <= 0 && ((o += this.DB), --i)),
                r > 0 && (a = !0),
                a && (s += h(r));
          return a ? s : "0";
        }),
        (a.prototype.negate = function () {
          var e = s();
          return a.ZERO.subTo(this, e), e;
        }),
        (a.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (a.prototype.compareTo = function (e) {
          var t = this.s - e.s;
          if (0 != t) return t;
          var r = this.t;
          if (0 != (t = r - e.t)) return t;
          for (; --r >= 0; ) if (0 != (t = this[r] - e[r])) return t;
          return 0;
        }),
        (a.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + m(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (a.prototype.mod = function (e) {
          var t = s();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(a.ZERO) > 0 && e.subTo(t, t),
            t
          );
        }),
        (a.prototype.modPowInt = function (e, t) {
          var r;
          return (
            (r = e < 256 || t.isEven() ? new p(t) : new d(t)), this.exp(e, r)
          );
        }),
        (a.ZERO = u(0)),
        (a.ONE = u(1)),
        (C.prototype.convert = T),
        (C.prototype.revert = T),
        (C.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r);
        }),
        (C.prototype.sqrTo = function (e, t) {
          e.squareTo(t);
        }),
        (y.prototype.convert = function (e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = s();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (y.prototype.revert = function (e) {
          return e;
        }),
        (y.prototype.reduce = function (e) {
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
        (y.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (y.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        });
      var S = [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29,
          31,
          37,
          41,
          43,
          47,
          53,
          59,
          61,
          67,
          71,
          73,
          79,
          83,
          89,
          97,
          101,
          103,
          107,
          109,
          113,
          127,
          131,
          137,
          139,
          149,
          151,
          157,
          163,
          167,
          173,
          179,
          181,
          191,
          193,
          197,
          199,
          211,
          223,
          227,
          229,
          233,
          239,
          241,
          251,
          257,
          263,
          269,
          271,
          277,
          281,
          283,
          293,
          307,
          311,
          313,
          317,
          331,
          337,
          347,
          349,
          353,
          359,
          367,
          373,
          379,
          383,
          389,
          397,
          401,
          409,
          419,
          421,
          431,
          433,
          439,
          443,
          449,
          457,
          461,
          463,
          467,
          479,
          487,
          491,
          499,
          503,
          509,
        ],
        D = (1 << 26) / S[S.length - 1];
      (a.prototype.chunkSize = function (e) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(e));
      }),
        (a.prototype.toRadix = function (e) {
          if ((null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36))
            return "0";
          var t = this.chunkSize(e),
            r = Math.pow(e, t),
            n = u(r),
            a = s(),
            i = s(),
            o = "";
          for (this.divRemTo(n, a, i); a.signum() > 0; )
            (o = (r + i.intValue()).toString(e).substr(1) + o),
              a.divRemTo(n, a, i);
          return i.intValue().toString(e) + o;
        }),
        (a.prototype.fromRadix = function (e, t) {
          this.fromInt(0), null == t && (t = 10);
          for (
            var r = this.chunkSize(t),
              n = Math.pow(t, r),
              s = !1,
              i = 0,
              o = 0,
              l = 0;
            l < e.length;
            ++l
          ) {
            var h = c(e, l);
            h < 0
              ? "-" == e.charAt(l) && 0 == this.signum() && (s = !0)
              : ((o = t * o + h),
                ++i >= r &&
                  (this.dMultiply(n), this.dAddOffset(o, 0), (i = 0), (o = 0)));
          }
          i > 0 && (this.dMultiply(Math.pow(t, i)), this.dAddOffset(o, 0)),
            s && a.ZERO.subTo(this, this);
        }),
        (a.prototype.fromNumber = function (e, t, r) {
          if ("number" == typeof t)
            if (e < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(e, r),
                  this.testBit(e - 1) ||
                    this.bitwiseTo(a.ONE.shiftLeft(e - 1), g, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(t);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > e &&
                    this.subTo(a.ONE.shiftLeft(e - 1), this);
          else {
            var n = new Array(),
              s = 7 & e;
            (n.length = 1 + (e >> 3)),
              t.nextBytes(n),
              s > 0 ? (n[0] &= (1 << s) - 1) : (n[0] = 0),
              this.fromString(n, 256);
          }
        }),
        (a.prototype.bitwiseTo = function (e, t, r) {
          var n,
            a,
            s = Math.min(e.t, this.t);
          for (n = 0; n < s; ++n) r[n] = t(this[n], e[n]);
          if (e.t < this.t) {
            for (a = e.s & this.DM, n = s; n < this.t; ++n)
              r[n] = t(this[n], a);
            r.t = this.t;
          } else {
            for (a = this.s & this.DM, n = s; n < e.t; ++n) r[n] = t(a, e[n]);
            r.t = e.t;
          }
          (r.s = t(this.s, e.s)), r.clamp();
        }),
        (a.prototype.changeBit = function (e, t) {
          var r = a.ONE.shiftLeft(e);
          return this.bitwiseTo(r, t, r), r;
        }),
        (a.prototype.addTo = function (e, t) {
          for (var r = 0, n = 0, a = Math.min(e.t, this.t); r < a; )
            (n += this[r] + e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
          if (e.t < this.t) {
            for (n += e.s; r < this.t; )
              (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB);
            n += this.s;
          } else {
            for (n += this.s; r < e.t; )
              (n += e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
            n += e.s;
          }
          (t.s = n < 0 ? -1 : 0),
            n > 0 ? (t[r++] = n) : n < -1 && (t[r++] = this.DV + n),
            (t.t = r),
            t.clamp();
        }),
        (a.prototype.dMultiply = function (e) {
          (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }),
        (a.prototype.dAddOffset = function (e, t) {
          for (; this.t <= t; ) this[this.t++] = 0;
          for (this[t] += e; this[t] >= this.DV; )
            (this[t] -= this.DV),
              ++t >= this.t && (this[this.t++] = 0),
              ++this[t];
        }),
        (a.prototype.multiplyLowerTo = function (e, t, r) {
          var n,
            a = Math.min(this.t + e.t, t);
          for (r.s = 0, r.t = a; a > 0; ) r[--a] = 0;
          for (n = r.t - this.t; a < n; ++a)
            r[a + this.t] = this.am(0, e[a], r, a, 0, this.t);
          for (n = Math.min(e.t, t); a < n; ++a)
            this.am(0, e[a], r, a, 0, t - a);
          r.clamp();
        }),
        (a.prototype.multiplyUpperTo = function (e, t, r) {
          --t;
          var n = (r.t = this.t + e.t - t);
          for (r.s = 0; --n >= 0; ) r[n] = 0;
          for (n = Math.max(t - this.t, 0); n < e.t; ++n)
            r[this.t + n - t] = this.am(t - n, e[n], r, 0, 0, this.t + n - t);
          r.clamp(), r.drShiftTo(1, r);
        }),
        (a.prototype.modInt = function (e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            r = this.s < 0 ? e - 1 : 0;
          if (this.t > 0)
            if (0 == t) r = this[0] % e;
            else
              for (var n = this.t - 1; n >= 0; --n) r = (t * r + this[n]) % e;
          return r;
        }),
        (a.prototype.millerRabin = function (e) {
          var t = this.subtract(a.ONE),
            r = t.getLowestSetBit();
          if (r <= 0) return !1;
          var n = t.shiftRight(r);
          (e = (e + 1) >> 1) > S.length && (e = S.length);
          for (var i = s(), o = 0; o < e; ++o) {
            i.fromInt(S[o]);
            var l = i.modPow(n, this);
            if (0 != l.compareTo(a.ONE) && 0 != l.compareTo(t)) {
              for (var h = 1; h++ < r && 0 != l.compareTo(t); )
                if (0 == (l = l.modPowInt(2, this)).compareTo(a.ONE)) return !1;
              if (0 != l.compareTo(t)) return !1;
            }
          }
          return !0;
        }),
        (a.prototype.clone = function () {
          var e = s();
          return this.copyTo(e), e;
        }),
        (a.prototype.intValue = function () {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }),
        (a.prototype.byteValue = function () {
          return 0 == this.t ? this.s : (this[0] << 24) >> 24;
        }),
        (a.prototype.shortValue = function () {
          return 0 == this.t ? this.s : (this[0] << 16) >> 16;
        }),
        (a.prototype.signum = function () {
          return this.s < 0
            ? -1
            : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
        }),
        (a.prototype.toByteArray = function () {
          var e = this.t,
            t = new Array();
          t[0] = this.s;
          var r,
            n = this.DB - ((e * this.DB) % 8),
            a = 0;
          if (e-- > 0)
            for (
              n < this.DB &&
              (r = this[e] >> n) != (this.s & this.DM) >> n &&
              (t[a++] = r | (this.s << (this.DB - n)));
              e >= 0;

            )
              n < 8
                ? ((r = (this[e] & ((1 << n) - 1)) << (8 - n)),
                  (r |= this[--e] >> (n += this.DB - 8)))
                : ((r = (this[e] >> (n -= 8)) & 255),
                  n <= 0 && ((n += this.DB), --e)),
                0 != (128 & r) && (r |= -256),
                0 == a && (128 & this.s) != (128 & r) && ++a,
                (a > 0 || r != this.s) && (t[a++] = r);
          return t;
        }),
        (a.prototype.equals = function (e) {
          return 0 == this.compareTo(e);
        }),
        (a.prototype.min = function (e) {
          return this.compareTo(e) < 0 ? this : e;
        }),
        (a.prototype.max = function (e) {
          return this.compareTo(e) > 0 ? this : e;
        }),
        (a.prototype.and = function (e) {
          var t = s();
          return this.bitwiseTo(e, f, t), t;
        }),
        (a.prototype.or = function (e) {
          var t = s();
          return this.bitwiseTo(e, g, t), t;
        }),
        (a.prototype.xor = function (e) {
          var t = s();
          return this.bitwiseTo(e, v, t), t;
        }),
        (a.prototype.andNot = function (e) {
          var t = s();
          return this.bitwiseTo(e, _, t), t;
        }),
        (a.prototype.not = function () {
          for (var e = s(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }),
        (a.prototype.shiftLeft = function (e) {
          var t = s();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }),
        (a.prototype.shiftRight = function (e) {
          var t = s();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }),
        (a.prototype.getLowestSetBit = function () {
          for (var e = 0; e < this.t; ++e)
            if (0 != this[e]) return e * this.DB + b(this[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (a.prototype.bitCount = function () {
          for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r)
            e += E(this[r] ^ t);
          return e;
        }),
        (a.prototype.testBit = function (e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t
            ? 0 != this.s
            : 0 != (this[t] & (1 << e % this.DB));
        }),
        (a.prototype.setBit = function (e) {
          return this.changeBit(e, g);
        }),
        (a.prototype.clearBit = function (e) {
          return this.changeBit(e, _);
        }),
        (a.prototype.flipBit = function (e) {
          return this.changeBit(e, v);
        }),
        (a.prototype.add = function (e) {
          var t = s();
          return this.addTo(e, t), t;
        }),
        (a.prototype.subtract = function (e) {
          var t = s();
          return this.subTo(e, t), t;
        }),
        (a.prototype.multiply = function (e) {
          var t = s();
          return this.multiplyTo(e, t), t;
        }),
        (a.prototype.divide = function (e) {
          var t = s();
          return this.divRemTo(e, t, null), t;
        }),
        (a.prototype.remainder = function (e) {
          var t = s();
          return this.divRemTo(e, null, t), t;
        }),
        (a.prototype.divideAndRemainder = function (e) {
          var t = s(),
            r = s();
          return this.divRemTo(e, t, r), new Array(t, r);
        }),
        (a.prototype.modPow = function (e, t) {
          var r,
            n,
            a = e.bitLength(),
            i = u(1);
          if (a <= 0) return i;
          (r = a < 18 ? 1 : a < 48 ? 3 : a < 144 ? 4 : a < 768 ? 5 : 6),
            (n = a < 8 ? new p(t) : t.isEven() ? new y(t) : new d(t));
          var o = new Array(),
            l = 3,
            h = r - 1,
            c = (1 << r) - 1;
          if (((o[1] = n.convert(this)), r > 1)) {
            var f = s();
            for (n.sqrTo(o[1], f); l <= c; )
              (o[l] = s()), n.mulTo(f, o[l - 2], o[l]), (l += 2);
          }
          var g,
            v,
            _ = e.t - 1,
            b = !0,
            E = s();
          for (a = m(e[_]) - 1; _ >= 0; ) {
            for (
              a >= h
                ? (g = (e[_] >> (a - h)) & c)
                : ((g = (e[_] & ((1 << (a + 1)) - 1)) << (h - a)),
                  _ > 0 && (g |= e[_ - 1] >> (this.DB + a - h))),
                l = r;
              0 == (1 & g);

            )
              (g >>= 1), --l;
            if (((a -= l) < 0 && ((a += this.DB), --_), b))
              o[g].copyTo(i), (b = !1);
            else {
              for (; l > 1; ) n.sqrTo(i, E), n.sqrTo(E, i), (l -= 2);
              l > 0 ? n.sqrTo(i, E) : ((v = i), (i = E), (E = v)),
                n.mulTo(E, o[g], i);
            }
            for (; _ >= 0 && 0 == (e[_] & (1 << a)); )
              n.sqrTo(i, E),
                (v = i),
                (i = E),
                (E = v),
                --a < 0 && ((a = this.DB - 1), --_);
          }
          return n.revert(i);
        }),
        (a.prototype.modInverse = function (e) {
          var t = e.isEven();
          if ((this.isEven() && t) || 0 == e.signum()) return a.ZERO;
          for (
            var r = e.clone(),
              n = this.clone(),
              s = u(1),
              i = u(0),
              o = u(0),
              l = u(1);
            0 != r.signum();

          ) {
            for (; r.isEven(); )
              r.rShiftTo(1, r),
                t
                  ? ((s.isEven() && i.isEven()) ||
                      (s.addTo(this, s), i.subTo(e, i)),
                    s.rShiftTo(1, s))
                  : i.isEven() || i.subTo(e, i),
                i.rShiftTo(1, i);
            for (; n.isEven(); )
              n.rShiftTo(1, n),
                t
                  ? ((o.isEven() && l.isEven()) ||
                      (o.addTo(this, o), l.subTo(e, l)),
                    o.rShiftTo(1, o))
                  : l.isEven() || l.subTo(e, l),
                l.rShiftTo(1, l);
            r.compareTo(n) >= 0
              ? (r.subTo(n, r), t && s.subTo(o, s), i.subTo(l, i))
              : (n.subTo(r, n), t && o.subTo(s, o), l.subTo(i, l));
          }
          return 0 != n.compareTo(a.ONE)
            ? a.ZERO
            : l.compareTo(e) >= 0
            ? l.subtract(e)
            : l.signum() < 0
            ? (l.addTo(e, l), l.signum() < 0 ? l.add(e) : l)
            : l;
        }),
        (a.prototype.pow = function (e) {
          return this.exp(e, new C());
        }),
        (a.prototype.gcd = function (e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            r = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(r) < 0) {
            var n = t;
            (t = r), (r = n);
          }
          var a = t.getLowestSetBit(),
            s = r.getLowestSetBit();
          if (s < 0) return t;
          for (
            a < s && (s = a), s > 0 && (t.rShiftTo(s, t), r.rShiftTo(s, r));
            t.signum() > 0;

          )
            (a = t.getLowestSetBit()) > 0 && t.rShiftTo(a, t),
              (a = r.getLowestSetBit()) > 0 && r.rShiftTo(a, r),
              t.compareTo(r) >= 0
                ? (t.subTo(r, t), t.rShiftTo(1, t))
                : (r.subTo(t, r), r.rShiftTo(1, r));
          return s > 0 && r.lShiftTo(s, r), r;
        }),
        (a.prototype.isProbablePrime = function (e) {
          var t,
            r = this.abs();
          if (1 == r.t && r[0] <= S[S.length - 1]) {
            for (t = 0; t < S.length; ++t) if (r[0] == S[t]) return !0;
            return !1;
          }
          if (r.isEven()) return !1;
          for (t = 1; t < S.length; ) {
            for (var n = S[t], a = t + 1; a < S.length && n < D; ) n *= S[a++];
            for (n = r.modInt(n); t < a; ) if (n % S[t++] == 0) return !1;
          }
          return r.millerRabin(e);
        });
      var j = a,
        O = function (e, t) {
          (this.modulus = new j(e, 16)),
            (this.encryptionExponent = new j(t, 16));
        },
        w = {
          base64:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function (e) {
            if (!e) return !1;
            var t,
              r,
              n,
              a,
              s,
              i,
              o,
              l = "",
              h = 0;
            do {
              (a = (t = e.charCodeAt(h++)) >> 2),
                (s = ((3 & t) << 4) | ((r = e.charCodeAt(h++)) >> 4)),
                (i = ((15 & r) << 2) | ((n = e.charCodeAt(h++)) >> 6)),
                (o = 63 & n),
                isNaN(r) ? (i = o = 64) : isNaN(n) && (o = 64),
                (l +=
                  this.base64.charAt(a) +
                  this.base64.charAt(s) +
                  this.base64.charAt(i) +
                  this.base64.charAt(o));
            } while (h < e.length);
            return l;
          },
          decode: function (e) {
            if (!e) return !1;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            var t,
              r,
              n,
              a,
              s = "",
              i = 0;
            do {
              (t = this.base64.indexOf(e.charAt(i++))),
                (r = this.base64.indexOf(e.charAt(i++))),
                (n = this.base64.indexOf(e.charAt(i++))),
                (a = this.base64.indexOf(e.charAt(i++))),
                (s += String.fromCharCode((t << 2) | (r >> 4))),
                64 != n &&
                  (s += String.fromCharCode(((15 & r) << 4) | (n >> 2))),
                64 != a && (s += String.fromCharCode(((3 & n) << 6) | a));
            } while (i < e.length);
            return s;
          },
        },
        A = {
          hex: "0123456789abcdef",
          encode: function (e) {
            if (!e) return !1;
            var t,
              r = "",
              n = 0;
            do {
              (t = e.charCodeAt(n++)),
                (r += this.hex.charAt((t >> 4) & 15) + this.hex.charAt(15 & t));
            } while (n < e.length);
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
        },
        N = {
          getPublicKey: function (e, t) {
            return new O(e, t);
          },
          encrypt: function (e, t) {
            return (
              !!t &&
              !!(e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)) &&
              !!(e = e.modPowInt(t.encryptionExponent, t.modulus)) &&
              (1 == (1 & (e = e.toString(16)).length) && (e = "0" + e),
              w.encode(A.decode(e)))
            );
          },
          pkcs1pad2: function (e, t) {
            if (t < e.length + 11) return null;
            for (var r = [], n = e.length - 1; n >= 0 && t > 0; )
              r[--t] = e.charCodeAt(n--);
            for (r[--t] = 0; t > 2; )
              r[--t] = Math.floor(254 * Math.random()) + 1;
            return (r[--t] = 2), (r[--t] = 0), new j(r);
          },
        };
      t.default = N;
    },
  },
]);
