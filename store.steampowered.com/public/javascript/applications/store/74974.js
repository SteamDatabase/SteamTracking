/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [74974],
    {
      87242: (ve, We, w) => {
        "use strict";
        w.d(We, {
          FU: () => D,
          eF: () => Ge,
          gf: () => I,
          wI: () => Q,
          yp: () => $,
        });
        var n = w(14947),
          je = w(41735),
          Ce = w.n(je),
          l = w(35038),
          E = w(71742),
          Te = w(27066),
          T = w(72604),
          Fe = w(99412),
          Ie = w(94354),
          _e = w(3166),
          re = w(6740),
          ue = w(71944),
          O = w(73011),
          Pe = Object.defineProperty,
          De = Object.getOwnPropertyDescriptor,
          F = (x, d, A, v) => {
            for (
              var b = v > 1 ? void 0 : v ? De(d, A) : d, Z = x.length - 1, W;
              Z >= 0;
              Z--
            )
              (W = x[Z]) && (b = (v ? W(d, A, b) : W(b)) || b);
            return v && b && Pe(d, A, b), b;
          },
          Ge = ((x) => (
            (x[(x.None = 0)] = "None"),
            (x[(x.Generic = 1)] = "Generic"),
            (x[(x.Expired = 2)] = "Expired"),
            (x[(x.Network = 3)] = "Network"),
            (x[(x.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (x[(x.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (x[(x.AnonymousLogin = 6)] = "AnonymousLogin"),
            x
          ))(Ge || {});
        function D(x) {
          const {
            shared_secret: d,
            identity_secret: A,
            secret_1: v,
            status: b,
            uri: Z,
            server_time: W,
            ...se
          } = x;
          return {
            shared_secret: ue.iI(d),
            identity_secret: ue.iI(A),
            secret_1: ue.iI(v),
            ...se,
          };
        }
        var Q = ((x) => (
          (x[(x.k_Success = 0)] = "k_Success"),
          (x[(x.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (x[(x.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          x
        ))(Q || {});
        class I {
          m_transport;
          m_strClientID;
          m_msPollInterval;
          m_activeTimerID;
          m_rgRequestID;
          m_strTokenToRevoke;
          m_strChallengeURL = void 0;
          m_onShowAgreement;
          m_bRemoteInteraction = !1;
          m_onCompleteCallback;
          m_eFailureState = 0;
          m_strExtendedErrorMessage = "";
          m_onDeviceDetailsCallback;
          constructor(d, A, v, b) {
            (0, n.Gn)(this),
              (this.m_transport = d),
              (this.m_onCompleteCallback = A),
              (this.m_onDeviceDetailsCallback = v),
              (this.m_onShowAgreement = b);
          }
          StartPolling(d = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              d
                ? this.PollForUpdate()
                : (this.m_activeTimerID = window.setTimeout(
                    this.PollForUpdate,
                    this.m_msPollInterval,
                  ));
          }
          StopPolling() {
            window.clearTimeout(this.m_activeTimerID),
              (this.m_activeTimerID = void 0);
          }
          async PollForUpdate() {
            try {
              const d = l.w.Init(re.Ev);
              d.SetEMsg(Ie.Kec),
                d.Body().set_client_id(this.m_strClientID),
                d.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  d.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const A = await re.kX.PollAuthSessionStatus(this.m_transport, d),
                v = A.GetEResult();
              if (v !== T.R) {
                if (v === T.zi) {
                  const he = A.Hdr().transport_error();
                  if (
                    ((0, O.ZI)(
                      `Failed to poll auth session. Result ${v}. Transport Error: ${he}`,
                    ),
                    he === Fe.MhR || he === Fe.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), T.R
                    );
                }
                if (v === T.Qo || v === T.ob) this.m_eFailureState = 2;
                else if (v === T.h_) this.m_eFailureState = 5;
                else if (v == T.oH) {
                  const he = A.Body().agreement_session_url();
                  if (
                    ((0, E.wT)(
                      !!he,
                      "Missing agreement session URL for result",
                      v,
                    ),
                    this.m_onShowAgreement)
                  )
                    this.m_onShowAgreement(he);
                  else {
                    const we = document.location.href;
                    window.location.href = `${he}&redir=${encodeURIComponent(we)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), v;
                } else
                  (0, O.ZI)(`Failed to poll auth session. Result: ${v}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), v;
              }
              const {
                new_challenge_url: b,
                new_client_id: Z,
                refresh_token: W,
                access_token: se,
                account_name: ke,
                had_remote_interaction: V,
                new_guard_data: B,
              } = A.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!V),
                W
                  ? ((0, E.wT)(
                      !!se && !!ke,
                      "Missing access token or account name with refresh token",
                    ),
                    this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: W,
                      strAccessToken: se,
                      strAccountName: ke,
                      strNewGuardData: B,
                    }),
                    v)
                  : (b && (this.m_strChallengeURL = b),
                    Z && (this.m_strClientID = Z),
                    this.StartPolling(!1),
                    v)
              );
            } catch (d) {
              return (
                (0, O.ZI)(`Failed to poll auth session. ${d}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                T.zi
              );
            }
          }
          SetTokenToRevoke(d) {
            this.m_strTokenToRevoke = d;
          }
          GetFailureState() {
            return this.m_eFailureState;
          }
          GetExtendedErrorMessage() {
            return this.m_strExtendedErrorMessage;
          }
          BHadRemoteInteraction() {
            return this.m_bRemoteInteraction;
          }
          async GetDeviceDetails() {
            const d = await this.m_onDeviceDetailsCallback();
            return re.tS.fromObject(d);
          }
        }
        F([n.sH], I.prototype, "m_strChallengeURL", 2),
          F([n.sH], I.prototype, "m_bRemoteInteraction", 2),
          F([n.sH], I.prototype, "m_eFailureState", 2),
          F([n.sH], I.prototype, "m_strExtendedErrorMessage", 2),
          F([Te.o], I.prototype, "PollForUpdate", 1),
          F([Te.o], I.prototype, "SetTokenToRevoke", 1);
        function $(x) {
          const d = new FormData();
          d.append("nonce", x), d.append("sessionid", (0, _e.KC)());
          let A = new URL(document.location.href);
          const v = new URLSearchParams(A.search);
          v.has("need_password") &&
            (v.delete("need_password"), (A.search = v.toString())),
            d.append("redir", A.toString());
          const b = `${_e.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return Ce()
            .post(b, d, { withCredentials: !0 })
            .then(
              (Z) => {
                const { data: W } = Z;
                if (
                  !W ||
                  !W.transfer_info ||
                  !W.steamID ||
                  !Array.isArray(W.transfer_info)
                )
                  return (
                    (0, O.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const { transfer_info: se, steamID: ke, primary_domain: V } = W;
                return Promise.all(
                  se.map(({ url: B, params: he }) =>
                    P(B, { ...he, steamID: ke }),
                  ),
                ).then(
                  (B) => te(B, V),
                  () => 2,
                );
              },
              () => (
                (0, O.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function te(x, d) {
          let A = 0;
          return (
            x.forEach((v) => {
              v.bSuccess ||
                (d && v.domain.toLowerCase() === d.toLowerCase()
                  ? (A = 1)
                  : A == 0 && (A = 2));
            }),
            A
          );
        }
        async function P(x, d) {
          const A = new URL(x);
          let v = !0;
          try {
            const b = new FormData();
            Object.keys(d).forEach((W) => b.append(W, d[W]));
            const Z = await Ce().post(x, b, {
              withCredentials: !0,
              timeout: 1e4,
            });
            Z.status !== 200
              ? ((0, O.ZI)(
                  `Transfer login to ${A.host} failed with status code: ${Z.status}`,
                ),
                (v = !1))
              : Z.data.result !== T.R &&
                ((0, O.ZI)(
                  `Transfer login to ${A.host} failed with result: ${Z.data.result}`,
                ),
                (v = !1));
          } catch (b) {
            (0, O.ZI)(`Transfer login to ${A.host} failed: "${b}"`), (v = !1);
          }
          return { bSuccess: v, domain: A.host };
        }
      },
      73011: (ve, We, w) => {
        "use strict";
        w.d(We, {
          Cr: () => ue,
          Ok: () => O,
          P8: () => De,
          ZC: () => Ge,
          ZI: () => Ie,
          tG: () => Te,
          tH: () => Fe,
        });
        var n = w(41735),
          je = w.n(n),
          Ce = w(57589);
        const l = w(80407).A,
          E = new Ce.wd("Login"),
          Te = E.Info,
          T = E.Debug,
          Fe = E.Warning,
          Ie = E.Error;
        function _e(D, Q) {
          return D.endsWith("/") || (D += "/"), `${D}login/${Q}/`;
        }
        function re() {
          let D = new FormData();
          return D.append("donotcache", new Date().getTime().toString()), D;
        }
        async function ue(D) {
          let Q = re(),
            I = _e(D, "refreshcaptcha"),
            $ = "";
          try {
            let te = { "Content-Type": "multipart/form-data" },
              P = await je().post(I, Q, { headers: te });
            if (P.status != 200) return !1;
            $ = P.data.gid;
          } catch {
            return !1;
          }
          return $;
        }
        function O(D, Q) {
          return _e(D, "rendercaptcha") + `?gid=${Q}`;
        }
        async function Pe(D, Q) {
          let I = re();
          I.append("username", Q);
          let $ = _e(D, "getrsakey"),
            te;
          try {
            let P = { "Content-Type": "multipart/form-data" },
              x = await je().post($, I, { headers: P });
            if (x.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(x.status), null
              );
            let d = x.data;
            if (
              !d ||
              !d.success ||
              !d.publickey_mod ||
              !d.publickey_exp ||
              !d.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(d), null;
            te = d;
          } catch (P) {
            return console.log("GetRSAKey exception: "), console.log(P), null;
          }
          return te;
        }
        function De(D, Q) {
          let I = l.getPublicKey(Q.publickey_mod, Q.publickey_exp),
            $ = l.encrypt(D, I);
          return $ === !1 ? null : $;
        }
        async function F(D, Q, I, $) {
          const te = De(I.strPassword, $);
          if (!te) return null;
          let P = re();
          P.append("password", te),
            P.append("username", I.strUserName),
            P.append("twofactorcode", I.strTwoFactorCode || ""),
            P.append("emailauth", I.strEmailAuthCode || ""),
            P.append("loginfriendlyname", ""),
            P.append("captchagid", I.gidCaptcha || ""),
            P.append("captcha_text", I.strCaptchaText || ""),
            P.append("emailsteamid", I.emailSteamID || ""),
            P.append("rsatimestamp", $.timestamp),
            P.append("remember_login", I.bRememberLogin ? "true" : "false");
          let x = {};
          Q &&
            (P.append("oauth_client_id", Q),
            P.append("mobile_chat_client", "true"));
          let d = _e(D, "dologin"),
            A;
          try {
            x.headers = { "Content-Type": "multipart/form-data" };
            let v = await je().post(d, P, x);
            if (v.status != 200) return null;
            let b = v.data;
            if (!b) return null;
            b.oauth && (b.oauth = JSON.parse(b.oauth)), (A = b);
          } catch {
            return null;
          }
          return A;
        }
        async function Ge(D, Q, I) {
          if (
            ((I = Object.assign({}, I)),
            I.strUserName &&
              (I.strUserName = I.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !I.strPassword ||
              I.strPassword.match(/[^\x00-\x7F]/) ||
              !I.strUserName)
          )
            return null;
          let $ = await Pe(D, I.strUserName);
          return $
            ? await F(
                D,
                Q,
                {
                  ...I,
                  strUserName: I.strUserName,
                  strPassword: I.strPassword,
                },
                $,
              )
            : (console.error(`Failed to get RSA key from ${D}`), null);
        }
      },
      74974: (ve, We, w) => {
        "use strict";
        w.d(We, { YN: () => ts, Fn: () => es, Mk: () => hs, kt: () => Je });
        var n = w(7850),
          je = w(32093),
          Ce = w(99412),
          l = w(72604),
          E = w(41735),
          Te = w.n(E),
          T = w(90626),
          Fe = w(92757);
        const Ie =
          w.p +
          "images/applications/store/login_mobile_auth.png?v=valveisgoodatcaching";
        var _e = w(71568),
          re = w(87883),
          ue = w(25792),
          O = w(179),
          Pe = w(24660),
          De = w(19298),
          F = w(36707),
          Ge = w(32224),
          D = w.n(Ge);
        function Q(r) {
          const {
            length: o,
            value: a,
            onChange: u,
            onPaste: p,
            tone: C,
            autoFocus: c,
            disabled: f,
            loading: R,
            backupCode: k,
            allowCharacter: j,
          } = r;
          (0, T.useEffect)(() => {
            c && q();
          }, []);
          const G = (0, T.useRef)([]),
            Y = () => u(G.current.map((y) => y.value)),
            z = (y) => {
              const L = y.target.value;
              if (L && j && !j(L)) return;
              const N = y.target.nextElementSibling;
              y.target.value && N && N.focus(), Y();
            },
            ce = (y) => {
              G.current.findIndex((L) => !!L.value) === -1
                ? G.current[0]?.select()
                : y.target.select();
            },
            q = () => {
              const y = G.current.find((L) => !L.value);
              y ? y.focus() : G.current[G.current.length - 1].focus();
            },
            oe = (y) => {
              const L = y.target;
              if (y.key === "Backspace" || y.key === "Delete") {
                const N =
                  y.key === "Backspace"
                    ? L.previousElementSibling
                    : L.nextElementSibling;
                L.value === "" &&
                  N &&
                  ((N.value = ""), N.focus(), y.preventDefault(), Y());
              } else if (
                y.key === "ArrowLeft" ||
                y.key === "ArrowRight" ||
                y.key === "ArrowUp" ||
                y.key === "ArrowDown"
              ) {
                const N =
                  y.key === "ArrowLeft" || y.key === "ArrowUp"
                    ? L.previousElementSibling
                    : L.nextElementSibling;
                N && (N.focus(), y.preventDefault());
              }
            },
            M = (y) => {
              const L = y.clipboardData.getData("Text");
              let N = y.target,
                K = 0;
              for (; N && K < L.length; )
                N.focus(),
                  (N.value = L.charAt(K)),
                  (N = N.nextElementSibling),
                  K++;
              Y(), y.preventDefault(), p && p();
            },
            X = [];
          for (let y = 0; y < o; y++)
            X.push(
              (0, n.jsx)(
                Pe.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (L) => {
                    G.current[y] = L;
                  },
                  onChange: z,
                  onFocus: ce,
                  onClick: (L) => L.stopPropagation(),
                  onKeyDown: oe,
                  onPaste: M,
                  value: a[y] ? a[y][0] : "",
                  autoComplete: "none",
                  autoFocus: y === 0 && c,
                  disabled: f || R,
                  className: D().Input,
                },
                y,
              ),
            );
          return (0, n.jsxs)(De.Z, {
            className: (0, F.A)(
              D().SegmentedCharacterInput,
              C === "danger" && D().Danger,
              f && D().Disabled,
              k && D().BackupCode,
            ),
            onClick: q,
            children: [
              R &&
                (0, n.jsx)("div", {
                  className: D().Loading,
                  children: (0, n.jsx)(Je, { size: "small" }),
                }),
              X,
            ],
          });
        }
        var I = w(36118),
          $ = w(54212),
          te = w(85599),
          P = w(71421),
          x = w(71742),
          d = w(18210),
          A = w(30096),
          v = w(3166),
          b = w(87242),
          Z = w(14947),
          W = w(94354),
          se = w(35038),
          ke = w(65946),
          V = w(73011),
          B = w(6740),
          he = w(95039),
          we = w(3685),
          Oe = w(44787),
          Lt = Object.defineProperty,
          Et = Object.getOwnPropertyDescriptor,
          ie = (r, o, a, u) => {
            for (
              var p = u > 1 ? void 0 : u ? Et(o, a) : o, C = r.length - 1, c;
              C >= 0;
              C--
            )
              (c = r[C]) && (p = (u ? c(o, a, p) : c(p)) || p);
            return u && p && Lt(o, a, p), p;
          };
        const Mt = 2,
          Le = 0,
          be = 1,
          $e = 2,
          Ee = 3,
          Ne = 4,
          me = 5,
          Be = 6,
          st = 7,
          qe = 8,
          At = 9,
          He = 10,
          Ve = 11,
          nt = 12,
          Xe = 13,
          lt = 14,
          ot = 15,
          ct = 16;
        class ee extends b.gf {
          m_eStatus = Le;
          m_steamid;
          m_strAccountName;
          m_strConfirmationAssociatedMessage = "";
          m_bUsingCodeOverride = !1;
          m_strWeakAuthToken = "";
          m_weakAuthWebInterface;
          m_onGetMachineAuth;
          m_replacementAuthenticator;
          m_strErrorReference = "";
          m_onLoginComplete;
          constructor(o) {
            super(
              o.transport,
              (a) => this.onAuthComplete(a),
              o.onDeviceDetails,
              o.onShowAgreement,
            ),
              (0, Z.Gn)(this),
              (this.m_onLoginComplete = o.onComplete),
              (this.m_onGetMachineAuth = o.onGetMachineAuth);
          }
          async Start(o, a, u) {
            if (this.m_eStatus !== Le && this.m_eStatus !== $e)
              return (
                (0, V.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.Ze
              );
            const p = o.replace(/[^\x00-\x7F]/g, ""),
              C = a.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!p.length || !C.length) return l.nO;
            if (
              ((this.m_eStatus = be),
              (this.m_bUsingCodeOverride = !1),
              o == "anonymous")
            )
              return (
                this.SetFailureState(b.eF.AnonymousLogin, J.EResult(l.FK)), l.FK
              );
            try {
              const c = await jt(this.m_transport, p);
              if (!c)
                return (
                  (0, V.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(b.eF.Network, J.EResult(l.Sq)),
                  l.Sq
                );
              const f = (0, V.P8)(C, c),
                R = se.w.Init(B.iP);
              R.SetEMsg(W.Kec),
                R.Body().set_account_name(p),
                R.Body().set_encrypted_password(f ?? void 0),
                R.Body().set_encryption_timestamp(c.timestamp),
                R.Body().set_remember_login(!!u),
                R.Body().set_persistence(u ? he.nW : he.fH),
                R.Body().set_website_id(v.TS.WEBSITE_ID);
              try {
                R.Body().set_device_details(await this.GetDeviceDetails());
              } catch (j) {
                (0, V.ZI)("Failed to GetDeviceDetails"), (0, V.ZI)(j);
              }
              if (
                (R.Body().set_language((0, Ce.sfN)(v.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const j = await this.m_onGetMachineAuth(p);
                j.eresult == l.R && R.Body().set_guard_data(j.data);
              }
              await this.m_transport.MakeReady();
              const k = await B.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                R,
              );
              return (
                k.DEBUG_LogToConsole(),
                (0, Z.h5)(async () => {
                  const j = k.GetEResult(),
                    G = k.Hdr().transport_error();
                  if (j !== l.R)
                    switch (j) {
                      case l.Um:
                        return (this.m_eStatus = $e), j;
                      case l.Sq:
                      case l.a_:
                        return (
                          this.SetFailureState(b.eF.Network, J.EResult(l.Sq)), j
                        );
                      case l.h_:
                        return (
                          this.SetFailureState(
                            b.eF.RateLimitExceeded,
                            J.EResult(j),
                          ),
                          j
                        );
                      case l.oH:
                        const L = k.Body().agreement_session_url();
                        if (
                          ((0, x.wT)(
                            !!L,
                            "Missing agreement session URL for result",
                            j,
                          ),
                          this.m_onShowAgreement)
                        )
                          this.m_onShowAgreement(L);
                        else {
                          const N = document.location.href;
                          window.location.href = `${L}&redir=${encodeURIComponent(N)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = Le),
                          j
                        );
                      case l.uN:
                      default:
                        return (
                          (0, V.ZI)(
                            `Failed to start auth session. Result: ${j} Transport: ${G}`,
                          ),
                          this.SetFailureState(
                            b.eF.Generic,
                            J.EResult(j),
                            k.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          j
                        );
                    }
                  this.m_strAccountName = o;
                  const {
                    client_id: Y,
                    request_id: z,
                    interval: ce,
                    allowed_confirmations: q = [],
                    steamid: oe,
                    weak_token: M,
                  } = k.Body().toObject();
                  if (
                    ((0, x.wT)(
                      ce !== void 0 && !!Y && !!oe,
                      "Missing poll interval, client ID, or steamid for result",
                      j,
                    ),
                    (this.m_msPollInterval = ce * 1e3),
                    (this.m_strClientID = Y),
                    (this.m_rgRequestID = z),
                    (this.m_steamid = oe),
                    (this.m_strWeakAuthToken = M ?? ""),
                    q.find(({ confirmation_type: L }) => L === B.TY.ig))
                  ) {
                    const L = new FormData();
                    L.append("clientid", Y), L.append("steamid", oe);
                    const N = `${v.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await Te().post(N, L, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == l.R
                      )
                        return (
                          (this.m_eStatus = Ne), this.StartPolling(!0), l.R
                        );
                    } catch (K) {
                      if (
                        ((0, V.tG)(
                          `checkdevice ajax to ${N} failed: ${K.message}`,
                        ),
                        K instanceof E.AxiosError)
                      ) {
                        const ge = K;
                        return ge.response
                          ? (this.SetFailureState(
                              b.eF.Network,
                              J.AjaxFailureWithCode(ge.response.status),
                            ),
                            l.Sq)
                          : (this.SetFailureState(
                              b.eF.Network,
                              J.AjaxFailureNoCode(),
                            ),
                            l.Sq);
                      }
                      return (
                        this.SetFailureState(b.eF.Network, J.EResult(l.eH)),
                        l.eH
                      );
                    }
                  }
                  const X = It(
                      q.map(
                        ({ confirmation_type: L }) => (
                          (0, x.wT)(
                            L !== void 0,
                            "Missing confirmation type in allowed confirmations",
                          ),
                          L
                        ),
                      ),
                    ),
                    y = q.find(({ confirmation_type: L }) => L === X);
                  switch (
                    (y &&
                      y.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        y.associated_message),
                    X)
                  ) {
                    case B.TY.WM:
                      return (this.m_eStatus = Xe), this.StartPolling(), j;
                    case B.TY.Xs:
                      this.m_eStatus = Ee;
                      break;
                    case B.TY.$Y:
                      (this.m_eStatus = Ne), this.StartPolling(!1);
                      break;
                    case B.TY.bH:
                      (this.m_eStatus = me), this.StartPolling(!1);
                      break;
                    case B.TY.x0:
                      (this.m_eStatus = Be), this.StartPolling(!1);
                      break;
                  }
                  return j;
                })
              );
            } catch (c) {
              return (
                (0, V.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(c)}`,
                ),
                (0, V.tG)(c),
                this.SetFailureState(b.eF.Generic, J.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = ct);
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
          GetErrorReference() {
            return this.m_strErrorReference;
          }
          async SendSteamGuardCode(o, a = !0) {
            if (o.length == 0) {
              switch (this.m_eStatus) {
                case He:
                  this.m_eStatus = Ee;
                  break;
                case Ve:
                  this.m_eStatus = me;
                  break;
                case me:
                case Ee:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(l.R);
            }
            try {
              await this.m_transport.MakeReady();
              const u = this.m_eStatus === Ee || this.m_eStatus === He,
                p = se.w.Init(B.Qc);
              p.SetEMsg(W.Kec),
                p.Body().set_client_id(this.m_strClientID),
                p.Body().set_steamid(this.m_steamid),
                p.Body().set_code(o),
                p.Body().set_code_type(u ? B.TY.Xs : B.TY.bH);
              const C = await B.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  p,
                ),
                c = C.GetEResult();
              if (c !== l.R) {
                if (!a)
                  return (
                    (0, V.ZI)(
                      `Failed to automatically update session with local SG info. Result ${c}. Transport ${C.Hdr().transport_error()}`,
                    ),
                    c
                  );
                switch (c) {
                  case l.QR:
                  case l.b7:
                    return (this.m_eStatus = u ? He : Ve), c;
                  case l.ob:
                    return (
                      this.SetFailureState(b.eF.Expired, J.EResult(c)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      c
                    );
                  case l.h_:
                    return (
                      this.SetFailureState(
                        b.eF.RateLimitExceeded,
                        J.EResult(c),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      c
                    );
                  case l.oH:
                    const f = C.Body().agreement_session_url();
                    if (
                      ((0, x.wT)(
                        !!f,
                        "Missing agreement session URL for result",
                        c,
                      ),
                      this.m_onShowAgreement)
                    )
                      this.m_onShowAgreement(f);
                    else {
                      const R = document.location.href;
                      window.location.href = `${f}&redir=${encodeURIComponent(R)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = Le),
                      c
                    );
                  default:
                    return (
                      (0, V.ZI)(
                        `Failed to update auth session with SG code. Result: ${c}`,
                      ),
                      this.SetFailureState(b.eF.Generic, J.EResult(c)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      c
                    );
                }
              }
              return (this.m_eStatus = Xe), this.StartPolling(), c;
            } catch (u) {
              return (
                (0, V.ZI)(`Failed to update auth session with SG code. ${u}`),
                this.SetFailureState(b.eF.Generic, J.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case Be:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = me);
                return;
              case Ne:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = Ee);
                return;
              default:
                (0, V.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = st;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new we.D(
              v.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const o = se.w.Init(Oe.ot),
                a = await Oe.fz.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  o,
                );
              l.R != a.GetEResult()
                ? (a.DEBUG_LogToConsole(),
                  (0, V.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    a.GetEResult(),
                  ),
                  this.SetFailureState(
                    b.eF.MoveAuthenticator,
                    J.EResult(a.GetEResult()),
                  ))
                : (this.m_eStatus = qe);
            } catch (o) {
              (0, V.ZI)(
                "An unexpected error occured while moving an authenticator",
                o,
              ),
                this.SetFailureState(b.eF.MoveAuthenticator, J.EResult(l.zi));
            }
          }
          async ResendMoveCode() {
            (0, x.wT)(
              !!this.m_weakAuthWebInterface,
              "Resending move code before StartMoveAuthenticator",
            );
            const o = se.w.Init(Oe.ot),
              a = await Oe.fz.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                o,
              );
            l.R != a.GetEResult() &&
              (a.DEBUG_LogToConsole(),
              (0, V.ZI)(
                "An unexpected error occured while adding an authenticator",
                a.GetEResult(),
              )),
              (this.m_eStatus = qe);
          }
          async FinishMoveAuthenticator(o) {
            (0, x.wT)(
              !!this.m_weakAuthWebInterface,
              "Finishing authenticator move before StartMoveAuthenticator",
            );
            const a = se.w.Init(Oe.bv);
            a.Body().set_sms_code(o),
              a.Body().set_generate_new_token(!0),
              a.Body().set_version(Mt);
            const u = await Oe.fz.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              a,
            );
            if (l.c3 == u.GetEResult()) this.m_eStatus = nt;
            else if (!u.Body().success())
              u.DEBUG_LogToConsole(),
                (0, V.ZI)(
                  "Error when calling RemoveAuthenticatorViaChallengeContinue",
                  u.GetEResult(),
                ),
                this.SetFailureState(
                  b.eF.MoveAuthenticator,
                  J.EResult(u.GetEResult()),
                );
            else {
              u.DEBUG_LogToConsole();
              const p = u.Body().replacement_token();
              (0, x.wT)(
                !!p,
                "Missing replacement token on successful authenticator move",
              ),
                (this.m_replacementAuthenticator = (0, b.FU)(p.toObject())),
                (this.m_eStatus = At),
                (this.m_bUsingCodeOverride = !1);
            }
          }
          FinishMoveRecovery() {
            this.m_eStatus = me;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case me:
              case Ve:
              case Ee:
              case He:
              case Be:
              case Ne:
              case st:
              case qe:
              case nt:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case Be:
              case Ne:
                this.m_eStatus = Le;
                break;
              case me:
              case Ve:
                this.m_eStatus = this.m_bUsingCodeOverride ? Be : Le;
                break;
              case st:
              case qe:
              case nt:
                this.m_eStatus = (this.m_bUsingCodeOverride, me);
                break;
              case Ee:
              case He:
                this.m_eStatus = this.m_bUsingCodeOverride ? Ne : Le;
                break;
              default:
                (0, V.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(o, a, u = "") {
            (this.m_eStatus = ot),
              (this.m_eFailureState = o),
              (this.m_strErrorReference = a),
              (this.m_strExtendedErrorMessage = u);
          }
          onAuthComplete = (o) => {
            this.m_eStatus = o.bSuccess ? lt : ot;
            let a;
            o.bSuccess
              ? ((0, x.wT)(
                  !!this.m_strAccountName && !!this.m_steamid,
                  "Missing account name or steamid on auth success",
                ),
                (a = {
                  ...o,
                  strAccountName: this.m_strAccountName,
                  steamid: this.m_steamid,
                }))
              : (a = { bSuccess: !1 }),
              this.m_onLoginComplete && this.m_onLoginComplete(a);
          };
          SetOnLoginComplete(o) {
            this.m_onLoginComplete = o;
          }
        }
        ie([Z.sH], ee.prototype, "m_eStatus", 2),
          ie([Z.sH], ee.prototype, "m_strErrorReference", 2),
          ie([A.oI], ee.prototype, "Start", 1),
          ie([A.oI], ee.prototype, "SendSteamGuardCode", 1),
          ie([A.oI], ee.prototype, "UseCodeOverride", 1),
          ie([A.oI], ee.prototype, "CantAccessCode", 1),
          ie([A.oI], ee.prototype, "StartMoveAuthenticator", 1),
          ie([A.oI], ee.prototype, "ResendMoveCode", 1),
          ie([A.oI], ee.prototype, "FinishMoveAuthenticator", 1),
          ie([A.oI], ee.prototype, "FinishMoveRecovery", 1),
          ie([A.oI], ee.prototype, "GoBack", 1),
          ie([Z.XI], ee.prototype, "SetFailureState", 1),
          ie([A.oI], ee.prototype, "SetOnLoginComplete", 1);
        async function jt(r, o) {
          const a = se.w.Init(B.qu);
          a.Body().set_account_name(o), a.SetEMsg(W.Kec);
          try {
            await r.MakeReady();
            const u = await B.kX.GetPasswordRSAPublicKey(r, a);
            if ((u.DEBUG_LogToConsole(), u.GetEResult() !== l.R))
              return (
                (0, V.ZI)(
                  `Failed to get RSA key with EResult: ${u.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: p,
              publickey_mod: C,
              timestamp: c,
            } = u.Body().toObject();
            return !p || !C || !c
              ? ((0, V.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: p, publickey_mod: C, timestamp: c })}`,
                ),
                null)
              : { publickey_exp: p, publickey_mod: C, timestamp: c };
          } catch (u) {
            return (
              (0, V.ZI)(`Failed to get RSA key: ${JSON.stringify(u)}`), null
            );
          }
        }
        const ut = [
          B.TY.x0,
          B.TY.bH,
          B.TY.Xs,
          B.TY.WM,
          B.TY.oP,
          B.TY.$Y,
        ].reduce((r, o, a) => ((r[o] = a), r), {});
        function It(r) {
          let o = r[0] || B.TY.oP;
          return r.length > 1 && (o = r.sort((a, u) => ut[a] - ut[u])[0]), o;
        }
        function Dt(r) {
          const [o, a] = (0, T.useState)(new ee(r));
          return (
            (0, T.useEffect)(() => {
              o?.SetOnLoginComplete(r.onComplete);
            }, [o, r.onComplete]),
            (0, ke.q3)(() => ({
              strAccountName: o.GetAccountName(),
              steamid: o.GetSteamID(),
              eFailureState: o.GetFailureState(),
              strExtendedErrorMessage: o.GetExtendedErrorMessage(),
              strErrorReference: o.GetErrorReference(),
              strConfirmationAssociatedMessage:
                o.GetConfirmationAssociatedMessage(),
              eStatus: o.GetStatus(),
              bCanGoBack: o.BCanGoBack(),
              start: o.Start,
              addCode: o.SendSteamGuardCode,
              useCodeOverride: o.UseCodeOverride,
              cantAccessCode: o.CantAccessCode,
              startMoveAuthenticator: o.StartMoveAuthenticator,
              resendMoveCode: o.ResendMoveCode,
              finishMoveAuthenticator: o.FinishMoveAuthenticator,
              finishMoveRecovery: o.FinishMoveRecovery,
              replacementAuthenticator: o.GetReplacementAuthenticator(),
              reset: () => a(new ee(r)),
              goBack: o.GoBack,
              setTokenToRevoke: o.SetTokenToRevoke,
            }))
          );
        }
        function rt(r) {
          return r ? 7 : 5;
        }
        function ht(r, o) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(r) && r.length <= rt(o);
        }
        function dt(r, o) {
          return ht(r, o) && r.length === rt(o);
        }
        const J = {
          EResult: (r) => `e${r}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (r) => `af-${r}`,
        };
        var kt = Object.defineProperty,
          ft = Object.getOwnPropertyDescriptor,
          Nt = (r, o, a, u) => {
            for (
              var p = u > 1 ? void 0 : u ? ft(o, a) : o, C = r.length - 1, c;
              C >= 0;
              C--
            )
              (c = r[C]) && (p = (u ? c(o, a, p) : c(p)) || p);
            return u && p && kt(o, a, p), p;
          };
        const Qe = 0,
          mt = 1,
          pt = 2,
          gt = 3,
          Ct = 4,
          Bt = 5;
        class it extends b.gf {
          m_eStatus = Qe;
          constructor(o) {
            super(
              o.transport,
              (a) => {
                (this.m_eStatus = a.bSuccess ? gt : Ct), o.onComplete(a);
              },
              o.onDeviceDetails,
            ),
              (0, Z.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== Qe)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.zi
              );
            this.m_eStatus = mt;
            try {
              await this.m_transport.MakeReady();
              const o = se.w.Init(B.R9);
              o.SetEMsg(W.Kec);
              try {
                o.Body().set_device_details(await this.GetDeviceDetails());
              } catch (k) {
                console.error("Failed to GetDeviceDetails"), console.log(k);
              }
              o.Body().set_website_id(v.TS.WEBSITE_ID);
              const a = await B.kX.BeginAuthSessionViaQR(this.m_transport, o),
                u = a.GetEResult(),
                p = a.Hdr().transport_error();
              if (u !== l.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${u} Transport: ${p}`,
                  ),
                  (this.m_eFailureState = b.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  u
                );
              const {
                client_id: C,
                challenge_url: c,
                interval: f,
                request_id: R,
              } = a.Body().toObject();
              return (
                (0, x.wT)(
                  f !== void 0,
                  "Missing poll interval for QR auth session",
                ),
                (this.m_strClientID = C),
                (this.m_strChallengeURL = c),
                (this.m_msPollInterval = f * 1e3),
                (this.m_rgRequestID = R),
                (this.m_eStatus = pt),
                this.StartPolling(!1),
                u
              );
            } catch (o) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(o)}`,
                ),
                (this.m_eFailureState = b.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = Bt);
          }
          GetChallengeURL() {
            return this.m_strChallengeURL;
          }
          GetClientID() {
            return this.m_strClientID;
          }
          GetStatus() {
            return this.m_eStatus;
          }
        }
        Nt([Z.sH], it.prototype, "m_eStatus", 2);
        function Ht(r) {
          const [o, a] = (0, T.useState)(new it(r));
          return (
            (0, T.useEffect)(
              () => (
                o.Start(),
                () => {
                  o.Stop();
                }
              ),
              [o],
            ),
            (0, ke.q3)(() => ({
              strChallengeURL: o.GetChallengeURL(),
              strClientID: o.GetClientID(),
              eFailureState: o.GetFailureState(),
              eStatus: o.GetStatus(),
              bHadRemoteInteraction: o.BHadRemoteInteraction(),
              reset: () => a(new it(r)),
              setTokenToRevoke: o.SetTokenToRevoke,
            }))
          );
        }
        function ms(r) {
          switch (r) {
            case k_EUniverseDev:
              return "dev";
            case k_EUniverseBeta:
              return "beta";
            case k_EUniversePublic:
              return "public";
            default:
              return "unknown";
          }
        }
        async function St() {
          const [r, o, a, u] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            SteamClient?.Auth?.GetLocalHostname?.() ?? "",
            SteamClient?.Auth?.GetMachineID?.() ?? void 0,
          ]);
          return {
            os_type: r,
            device_friendly_name: a,
            machine_id: u,
            platform_type: B.SS.w0,
            gaming_device_type: o.eGamingDeviceType,
          };
        }
        async function vt() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: B.SS.tS,
          };
        }
        function Vt(r) {
          const {
              onSuccess: o,
              secureComputer: a = !0,
              isProbablySharedPC: u = !1,
            } = r,
            p = (0, T.useCallback)(
              (y) => {
                if (y.bSuccess) {
                  const {
                    strRefreshToken: L,
                    strAccessToken: N,
                    strAccountName: K,
                    strNewGuardData: ge,
                  } = y;
                  o({
                    strRefreshToken: L,
                    strAccessToken: N,
                    strAccountName: K,
                    strNewGuardData: ge,
                  });
                }
              },
              [o],
            ),
            C = Dt({
              transport: r.transport,
              onComplete: p,
              onDeviceDetails: r.onDeviceDetails,
              onGetMachineAuth: r.onGetMachineAuth,
              onShowAgreement: r.onShowAgreement,
            }),
            [c, f] = (0, T.useState)(Qe),
            R = "Login_RememberMeSetting",
            [k, j] = (0, T.useState)(
              r.refreshInfo?.account_name ?? r.defaultAccountName ?? "",
            ),
            [G, Y] = (0, T.useState)(""),
            [z, ce] = (0, T.useState)(
              a && !u && localStorage?.getItem(R) != "0",
            ),
            q = !(C.eStatus === Le || C.eStatus === be || C.eStatus === $e),
            oe = () => (!k || !G ? Promise.resolve(l.nO) : C.start(k, G, z)),
            M = () => {
              (0, V.tG)(`Logging in offline with username ${k}`),
                SteamClient.User.SetLoginCredentials(k, G, z),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, T.useEffect)(() => {
              r.refreshInfo?.login_token_id &&
                C.setTokenToRevoke(r.refreshInfo.login_token_id);
            }, [r.refreshInfo, C]),
            {
              password: C,
              onComplete: p,
              eQRStatus: c,
              onQRStatusChange: f,
              strAccountName: k,
              onAccountNameChange: j,
              strPassword: G,
              onPasswordChange: Y,
              bRememberMe: z,
              onRememberMeChange: (y) => {
                ce(y), localStorage?.setItem(R, y ? "1" : "0");
              },
              onPasswordSubmit: oe,
              bInPasswordFlow: q,
              onTryOffline: M,
            }
          );
        }
        function Ft(r, o = "") {
          let a = { title: "", description: "" };
          switch (r) {
            case b.eF.None:
              return { title: "", description: "" };
            case b.eF.Expired:
              a = {
                title: (0, d.we)("#Login_Error_Expired_Title"),
                description: (0, d.we)("#Login_Error_Expired_Description"),
              };
              break;
            case b.eF.Network:
              a = {
                title: (0, d.we)("#Login_Error_Network_Title"),
                description: (0, d.we)("#Login_Error_Network_Description"),
              };
              break;
            case b.eF.MoveAuthenticator:
              a = {
                title: (0, d.we)("#Error_Generic"),
                description: (0, d.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case b.eF.RateLimitExceeded:
              a = {
                title: (0, d.we)("#Login_Error_RateLimit_Title"),
                description: (0, d.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case b.eF.AnonymousLogin:
              a = {
                title: (0, d.we)("#Login_Error_Anonymous_Title"),
                description: (0, d.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case b.eF.Generic:
            default:
              a = {
                title: (0, d.we)("#Error_Generic"),
                description: (0, d.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return o && (a.description = o), a;
        }
        var Pt = w(78412),
          g = w.n(Pt),
          Gt = w(56589),
          Ot = w.n(Gt),
          Ut = w(5804),
          _t = w.n(Ut),
          wt = ((r) => (
            (r[(r.L = 1)] = "L"),
            (r[(r.M = 0)] = "M"),
            (r[(r.Q = 3)] = "Q"),
            (r[(r.H = 2)] = "H"),
            r
          ))(wt || {});
        function Zt(r, o, a) {
          const u = r.length,
            p = r[0].length,
            C = (u + 2) * p,
            c = new Uint8Array(40 + C);
          let f = 0;
          (c[f++] = 71),
            (c[f++] = 73),
            (c[f++] = 70),
            (c[f++] = 56),
            (c[f++] = 57),
            (c[f++] = 97),
            (c[f++] = u),
            (c[f++] = 0),
            (c[f++] = p),
            (c[f++] = 0),
            (0, x.wT)(
              o != "transparent" || a != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (c[f++] = 161),
            (c[f++] = 0),
            (c[f++] = 0),
            o == "transparent"
              ? ((c[f++] = 0), (c[f++] = 0), (c[f++] = 0))
              : ((c[f++] = o[0]), (c[f++] = o[1]), (c[f++] = o[2])),
            a == "transparent"
              ? ((c[f++] = 0), (c[f++] = 0), (c[f++] = 0))
              : ((c[f++] = a[0]), (c[f++] = a[1]), (c[f++] = a[2])),
            (c[f++] = 255),
            (c[f++] = 255),
            (c[f++] = 255),
            (c[f++] = 255),
            (c[f++] = 255),
            (c[f++] = 255),
            (o == "transparent" || a == "transparent") &&
              ((c[f++] = 33),
              (c[f++] = 249),
              (c[f++] = 4),
              (c[f++] = 1),
              (c[f++] = 0),
              (c[f++] = 0),
              (c[f++] = o == "transparent" ? 0 : 1),
              (c[f++] = 0)),
            (c[f++] = 44),
            (c[f++] = 0),
            (c[f++] = 0),
            (c[f++] = 0),
            (c[f++] = 0),
            (c[f++] = u),
            (c[f++] = 0),
            (c[f++] = p),
            (c[f++] = 0),
            (c[f++] = 0);
          const R = 7;
          c[f++] = R;
          for (let k = 0; k < r.length; k++) {
            (c[f++] = u + 1), (c[f++] = 2 ** R);
            for (let j = 0; j < r.length; j++) c[f++] = r[k][j] ? 0 : 1;
          }
          return (
            (c[f++] = 1), (c[f++] = 2 ** R + 1), (c[f++] = 0), (c[f++] = 59), c
          );
        }
        function Wt(
          r,
          {
            activeBitColor: o = [33, 35, 40],
            inactiveBitColor: a = [255, 255, 255],
            borderWidth: u = 3,
          } = {},
          p = {},
        ) {
          const C = Ot()(r, p).modules;
          if (!C) return null;
          let c = [];
          for (let f = 0; f < u; f++) c.push(Array(C.length + u * 2).fill(!1));
          for (let f = 0; f < C.length; f++)
            c.push([
              ...Array.from({ length: u }, () => !1),
              ...C[f],
              ...Array.from({ length: u }, () => !1),
            ]);
          for (let f = 0; f < u; f++) c.push(Array(C.length + u * 2).fill(!1));
          return Zt(c, o, a);
        }
        function Qt(r) {
          let {
            quality: o = 0,
            children: a,
            className: u,
            activeBitColor: p = [33, 35, 40],
            inactiveBitColor: C = [255, 255, 255],
            borderWidth: c = 3,
            typeNumber: f = 6,
          } = r;
          const R = ze(a, {
            typeNumber: f,
            errorCorrectLevel: o,
            activeBitColor: p,
            inactiveBitColor: C,
            borderWidth: c,
          });
          if (!R) return null;
          const k = new Blob([R], { type: "image/gif" }),
            j = URL.createObjectURL(k),
            G = `rgb(${C[0]}, ${C[1]}, ${C[2]})`;
          return (0, n.jsx)("div", {
            className: (0, F.A)(_t().QRBits, u),
            style: { "--qr-bright-color": G },
            children: (0, n.jsx)("img", {
              className: _t().QRImg,
              src: j,
              alt: "",
            }),
          });
        }
        function ze(r, o) {
          const {
            typeNumber: a,
            errorCorrectLevel: u,
            activeBitColor: p,
            inactiveBitColor: C,
            borderWidth: c,
          } = o;
          return (0, T.useMemo)(
            () =>
              Wt(
                r,
                { activeBitColor: p, inactiveBitColor: C, borderWidth: c },
                { typeNumber: a, errorCorrectLevel: u },
              ),
            [r, a, u, p, C, c],
          );
        }
        var bt = w(15557),
          ae = w.n(bt),
          zt = w(16412);
        function Kt(r) {
          const {
              transport: o,
              onComplete: a,
              onStatusChange: u,
              platform: p,
              styling: C = "default",
              activeBitValue: c = 255,
            } = r,
            f = v.TS.IN_STEAMUI ? St : vt,
            {
              eStatus: R,
              strChallengeURL: k,
              strClientID: j,
              bHadRemoteInteraction: G,
              reset: Y,
              setTokenToRevoke: z,
            } = Ht({ transport: o, onComplete: a, onDeviceDetails: f });
          (0, T.useEffect)(() => u && u(R), [u, R]);
          const ce = R === pt && k ? k : v.TS.STORE_BASE_URL,
            q = R === Qe || R === mt || G,
            oe = R === Ct,
            M = R === gt,
            X = M
              ? (0, n.jsx)(qt, {})
              : oe
                ? (0, n.jsx)(Ue, { reset: Y })
                : q
                  ? (0, n.jsx)(Yt, { size: "small" })
                  : null,
            y = q || oe || M;
          (0, T.useEffect)(() => {
            r.refreshInfo?.login_token_id && z(r.refreshInfo.login_token_id);
          }, [r.refreshInfo, z]);
          const L = v.TS.EUNIVERSE !== Ce.wLO,
            N = `rgb(${c}, ${c}, ${c})`;
          return (0, n.jsx)("div", {
            className: ae().Column,
            children: (0, n.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, n.jsx)(Qt, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: L ? [c, 0, c] : [c, c, c],
                  quality: Jt(ce),
                  className: (0, F.A)(
                    ae().LoginQR,
                    C == "deck" && ae().QRLoginDeck,
                    C == "vr" && ae().QRLoginVR,
                    y && ae().Blur,
                    L && ae().NonPublic,
                  ),
                  children: ce,
                }),
                y &&
                  (0, n.jsx)("div", {
                    className: ae().Overlay,
                    children: (0, n.jsx)("div", {
                      className: ae().Box,
                      style: { "--qr-bright-color": N },
                      children: X,
                    }),
                  }),
              ],
            }),
          });
        }
        function Jt(r) {
          return r.length <= 90 ? wt.Q : void 0;
        }
        function Yt(r) {
          const { size: o } = r;
          return (0, n.jsx)("div", {
            className: (0, F.A)(
              ae().Loading,
              o == "small" && ae().Small,
              (o == "medium" || !o) && ae().Medium,
              o == "large" && ae().Large,
            ),
          });
        }
        function Ue(r) {
          return (0, n.jsx)(zt.$n, {
            onClick: r.reset,
            className: ae().QRFailure,
            children: (0, n.jsx)($t, {}),
          });
        }
        function $t(r) {
          return (0, n.jsxs)("svg", {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "40px", height: "40px", cursor: "pointer" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, n.jsx)("path", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: "30",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
              }),
              (0, n.jsx)("polygon", {
                points: "147.639,108.361 245.755,10.166 245.834,108.361",
                fill: "#fff",
              }),
            ],
          });
        }
        function qt() {
          return (0, n.jsx)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "45px", height: "45px" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: (0, n.jsx)("polyline", {
              fill: "none",
              stroke: "#fff",
              strokeWidth: "24",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "49.5,147.75 95,210.75 206.5,45.25 ",
            }),
          });
        }
        var Xt = w(72609);
        const xt = (0, T.createContext)(!1),
          Ke = () => (0, T.useContext)(xt);
        function es() {
          return (0, n.jsx)("div", {
            className: g().Login,
            children: (0, n.jsx)(at, {
              reset: () => window.location.reload(),
              failure: b.eF.Generic,
            }),
          });
        }
        function ts(r) {
          const o = Ns(r.redirectUrl),
            a = (u) => {
              const { strRefreshToken: p } = u;
              (0, b.yp)(p).then(
                (C) => r.onComplete(C),
                () => r.onComplete(b.wI.k_PrimaryDomainFail),
              );
            };
          return o
            ? null
            : (0, n.jsx)(ss, {
                ...r,
                creationRedirectUrl: r.redirectUrl,
                onSuccess: a,
                embedded: r.theme === "modal",
              });
        }
        function ss(r) {
          const { embedded: o, children: a, ...u } = r;
          return (0, n.jsx)(ue.tH, {
            children: (0, n.jsx)(xt.Provider, {
              value: o ?? !1,
              children: (0, n.jsxs)("div", {
                className: g().Login,
                children: [(0, n.jsx)(is, { ...u }), a],
              }),
            }),
          });
        }
        function ns(r) {
          if ((0, re.q)()) return null;
          const { variant: o } = r;
          return typeof o == "function"
            ? (0, n.jsx)(Se, {
                onClick: o,
                children: (0, d.we)("#Login_Help_SignIn"),
              })
            : (0, n.jsx)(Se, {
                href: `${v.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, d.we)("#Login_Help_SignIn"),
              });
        }
        function ne(r) {
          const { variant: o, redirectUrl: a } = r;
          if (typeof o == "function")
            return (0, n.jsx)(Se, {
              inline: !0,
              onClick: o,
              children: (0, d.we)("#Login_CreateAccount"),
            });
          {
            const u = a ? `?redir=${encodeURIComponent(a)}` : "";
            switch (o ?? "normal") {
              default:
              case "normal":
                return (0, n.jsx)(Se, {
                  inline: !0,
                  href: `${v.TS.STORE_BASE_URL}join/${u}`,
                  children: (0, d.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, n.jsx)(Se, {
                  inline: !0,
                  href: `${v.TS.PARTNER_BASE_URL}${u}`,
                  children: (0, d.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function os(r) {
          const { launcherType: o, variant: a, redirectUrl: u } = r;
          if (o === Ce.A2g || a == "none") return null;
          const p = o !== void 0;
          let C;
          switch (a ?? "normal") {
            default:
            case "normal":
              C = "#Login_NoSteamAccount";
              break;
            case "partner":
              C = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, n.jsxs)("div", {
            className: (0, F.A)(g().AccountCreation, p && g().InClient),
            children: [
              (0, n.jsx)("span", {
                className: g().AccountCreationPrompt,
                children: (0, d.we)(C),
              }),
              (0, n.jsx)(ne, { variant: a, redirectUrl: u }),
            ],
          });
        }
        function rs() {
          const r =
            window?.location && (0, O.f3)(window.location, "need_password");
          return r !== void 0 && r !== "false" && r !== "0";
        }
        function is(r) {
          const {
              transport: o,
              onSuccess: a,
              platform: u,
              autoFocus: p,
              refreshInfo: C,
              renderSuccess: c = () => (0, n.jsx)(ks, {}),
              lastResult: f,
              joinLinkVariant: R,
              defaultAccountName: k,
              secureComputer: j = !0,
              isProbablySharedPC: G = !1,
              onShowAgreement: Y,
              creationRedirectUrl: z,
            } = r,
            ce = v.TS.IN_STEAMUI ? St : vt,
            q = v.TS.IN_STEAMUI
              ? (K) => SteamClient.Auth.GetSteamGuardData(K)
              : null,
            oe = rs(),
            M = Vt({
              transport: o,
              platform: u,
              onSuccess: a,
              refreshInfo: C,
              onDeviceDetails: ce,
              onGetMachineAuth: q,
              defaultAccountName: k,
              secureComputer: j,
              isProbablySharedPC: G,
              onShowAgreement: Y,
            }),
            X = Ke(),
            y = (0, T.useId)();
          if (f != null && f != l.R)
            return (0, n.jsx)("div", {
              className: g().Login,
              children: (0, n.jsx)(at, {
                reset: () => window.location.reload(),
                failure: b.eF.Generic,
                errorReference: f.toString(),
                extendedErrorMessage: M.password.strExtendedErrorMessage,
              }),
            });
          const L = !(0, v.Y2)();
          if (!M.bInPasswordFlow) {
            const K = (0, n.jsxs)("div", {
              className: (0, F.A)(g().SideBySide, X && g().Embedded),
              children: [
                (0, n.jsx)(ls, {
                  strAccountName: M.strAccountName,
                  onAccountNameChange: M.onAccountNameChange,
                  strPassword: M.strPassword,
                  onPasswordChange: M.onPasswordChange,
                  bRememberMe: M.bRememberMe,
                  onRememberMeChange: M.onRememberMeChange,
                  onSubmit: M.onPasswordSubmit,
                  status: M.password.eStatus,
                  autoFocus: p,
                  secureComputer: j,
                  refreshInfo: r.refreshInfo,
                }),
                L &&
                  (0, n.jsx)(us, {
                    transport: o,
                    onQRStatusChange: M.onQRStatusChange,
                    onComplete: M.onComplete,
                    platform: u,
                    refreshInfo: C,
                  }),
              ],
            });
            if (X) {
              const Ae = v.TS.IN_STEAMUI,
                Re = Ae ? v.TS.LAUNCHER_TYPE : void 0;
              return (0, n.jsxs)(ye, {
                className: (0, F.A)(g().EmbeddedRoot, Ae && g().InClient),
                children: [
                  !Ae && !1,
                  !r.refreshInfo &&
                    (0, n.jsx)(ds, {
                      realm: v.TS.EREALM,
                      launcherType: Re,
                      className: g().HeaderLogo,
                      onBack: r.onBack,
                    }),
                  (0, n.jsx)(et, { refreshInfo: C }),
                  K,
                  (0, n.jsxs)("div", {
                    className: (0, F.A)(
                      g().EmbeddedRootFooter,
                      Ae && g().InClient,
                    ),
                    children: [
                      (0, n.jsx)(ns, { variant: r.helpLinkVariant }),
                      (0, n.jsx)(os, {
                        launcherType: Re,
                        variant: R,
                        redirectUrl: z,
                      }),
                    ],
                  }),
                ],
              });
            }
            const ge = (0, n.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, n.jsx)("h2", {
                  className: g().PrimaryHeader,
                  id: y,
                  children: r.refreshInfo
                    ? (0, d.we)("#Login_RefreshSignIn")
                    : (0, d.we)("#Login_SignInTitle"),
                }),
                (0, n.jsx)(et, { refreshInfo: r.refreshInfo }),
              ],
            });
            return (0, n.jsxs)(Ye, {
              title: ge,
              titleId: y,
              children: [oe && (0, n.jsx)(as, {}), K],
            });
          }
          const N = M.password.eStatus;
          switch (N) {
            case Xe:
              return r.renderLoading
                ? (0, n.jsx)(n.Fragment, { children: r.renderLoading() })
                : (0, n.jsx)(Me, {});
            case me:
            case Ve:
            case Ee:
            case He:
              (0, x.wT)(
                !!M.password.strAccountName,
                "Missing account name in login session for status",
                N,
              );
              const K = N === me || N === Ve;
              return (0, n.jsx)(bs, {
                type: K ? "mobile" : "email",
                onSubmitCode: M.password.addCode,
                status: N,
                associatedLabel: M.password.strConfirmationAssociatedMessage,
                accountName: M.password.strAccountName,
                onBack: M.password.goBack,
                onCodeHelp: r.onCodeHelp,
              });
            case Be:
            case Ne:
              (0, x.wT)(
                !!M.password.strAccountName,
                "Missing account name in login session for status",
                N,
              );
              const ge = N === Be;
              return (0, n.jsx)(Es, {
                type: ge ? "mobile" : "email",
                accountName: M.password.strAccountName,
                onUseCodeOverride: M.password.useCodeOverride,
                onCodeHelp: r.onCodeHelp,
              });
            case ct:
              return (0, n.jsx)(ws, { reset: M.password.reset });
            case ot:
              return (0, n.jsx)(at, {
                reset: M.password.reset,
                failure: M.password.eFailureState,
                onRequestOffline: M.onTryOffline,
                errorReference: M.password.strErrorReference,
                extendedErrorMessage: M.password.strExtendedErrorMessage,
              });
            case lt:
              return (0, n.jsx)(Ye, { compact: !0, children: c() });
            default:
              return (
                (0, V.ZI)(`Unknown Phase: ${N}`),
                (0, n.jsx)(at, {
                  reset: M.password.reset,
                  failure: b.eF.Generic,
                  onRequestOffline: M.onTryOffline,
                  errorReference: M.password.strErrorReference,
                  extendedErrorMessage: M.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function et(r) {
          if (!r.refreshInfo) return null;
          let o;
          switch (r.refreshInfo?.reason ?? l.zi) {
            case l.zi:
            case l.Vr:
            default:
              o = "#Login_RefreshReason_Generic";
              break;
            case l.KH:
              o = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case l.CF:
              o = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case l.Um:
              o = "#Login_RefreshReason_InvalidPassword";
              break;
            case l.fY:
              o = "#Login_RefreshReason_Revoked";
              break;
            case l.ob:
              o = "#Login_RefreshReason_Expired";
              break;
            case l.cr:
              o = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case l.uN:
              o = "#Login_RefreshReason_AccountDisabled";
              break;
            case l.sG:
              o = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case l.h_:
              o = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, n.jsxs)("div", {
            className: g().RefreshReasonContainer,
            children: [
              (0, n.jsx)("div", {
                className: g().RefreshTitle,
                children: (0, d.we)("#Login_RefreshSignIn"),
              }),
              (0, n.jsx)("div", {
                className: g().RefreshReason,
                children: (0, d.we)(o),
              }),
            ],
          });
        }
        function as() {
          return (0, n.jsx)("div", {
            className: g().ConfirmCredntialsNag,
            children: (0, d.we)("#Login_ConfirmCredentials"),
          });
        }
        function ls(r) {
          const {
              onSubmit: o,
              status: a,
              autoFocus: u,
              refreshInfo: p,
              strAccountName: C,
              onAccountNameChange: c,
              strPassword: f,
              onPasswordChange: R,
              bRememberMe: k,
              onRememberMeChange: j,
              secureComputer: G = !0,
            } = r,
            [Y, z] = (0, T.useState)(!1),
            ce = Ke(),
            q = Hs(),
            oe = () => {
              o().then(() => {
                q() && z(!1);
              });
            },
            M = a === be || a === Xe,
            X = a === $e && !Y,
            y = X
              ? (0, n.jsx)(Ze, {
                  children: (0, d.we)("#Login_CheckCredentials"),
                })
              : (0, n.jsx)(Ze, { children: "\xA0" }),
            L = u && !C,
            N = u && !!C,
            K = !!r.refreshInfo,
            ge = (0, T.useId)(),
            Ae = (0, T.useId)();
          return (0, n.jsxs)(Ss, {
            onSubmit: oe,
            className: g().LoginForm,
            children: [
              (0, n.jsx)(m, {
                tone: X ? "danger" : void 0,
                label: (0, n.jsx)(S, {
                  highlight: !0,
                  inputId: ge,
                  children: (0, d.we)("#Login_SignIn_WithAccountName"),
                }),
                value: C,
                onChange: (Re) => {
                  z(!0), c(Re);
                },
                autoFocus: L,
                disabled: K,
                id: ge,
              }),
              (0, n.jsx)(m, {
                tone: X ? "danger" : void 0,
                label: (0, n.jsx)(S, {
                  inputId: Ae,
                  children: (0, d.we)("#Login_Password"),
                }),
                value: f,
                onChange: (Re) => {
                  z(!0), R(Re);
                },
                type: "password",
                autoFocus: N,
                id: Ae,
              }),
              G
                ? (0, n.jsx)(P.he, {
                    toolTipContent: (0, d.we)("#Login_RememberMe_Tooltip"),
                    direction: "bottom",
                    children: (0, n.jsx)(U, {
                      label: (0, d.we)("#Login_RememberMe_Short"),
                      value: k,
                      onChange: j,
                    }),
                  })
                : (0, n.jsx)("div", {
                    className: g().InsecureComputer,
                    children: (0, d.we)("#Login_InsecureComputer"),
                  }),
              (0, n.jsx)(le, { loading: M, refreshLogin: K }),
              y,
              !ce &&
                (0, n.jsx)(Se, {
                  href: `${v.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, d.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const cs = 700;
        function us(r) {
          const o = (0, _e.R7)(),
            a = () => o.ownerWindow.screen.width < cs,
            [u, p] = (0, T.useState)(a());
          return (
            (0, A.l6)(o.ownerWindow, "resize", () => {
              p(a());
            }),
            (0, n.jsx)("div", {
              className: g().QRSection,
              children: u ? (0, n.jsx)(t, { ...r }) : (0, n.jsx)(e, { ...r }),
            })
          );
        }
        function hs(r) {
          const o =
            v.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(r.redirectURL);
          return (0, n.jsx)("div", {
            className: g().GuestLayout,
            children: (0, n.jsx)(Ye, {
              compact: !0,
              children: (0, n.jsxs)("div", {
                className: g().GuestContainer,
                children: [
                  (0, n.jsx)("div", {
                    className: g().GuestText,
                    children: (0, d.oW)(
                      "#Login_Guest",
                      (0, n.jsx)("a", {
                        href: `${o}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, n.jsx)("a", {
                    className: g().GuestLink,
                    href: `${o}`,
                    children: (0, n.jsx)("button", {
                      className: g().GuestButton,
                      children: (0, d.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function e(r) {
          return (0, n.jsx)(i, { ...r });
        }
        function t(r) {
          const [o, a] = (0, T.useState)(!1);
          return o
            ? (0, n.jsx)(i, { ...r, bShowHideButton: !0, setShowQR: a })
            : (0, n.jsx)(s, { setShowQR: a });
        }
        function s(r) {
          return (0, n.jsxs)("div", {
            className: g().MessagingContainer,
            children: [
              (0, n.jsx)("div", {
                className: g().MessagingTag,
                children: (0, d.we)("#Login_MobileFlow_New"),
              }),
              (0, n.jsx)("div", {
                className: g().MessagingSubtitle,
                children: (0, n.jsx)("div", {
                  className: g().MessagingSubtitle,
                  children: (0, d.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, n.jsx)("div", {
                className: g().MessagingButton,
                onClick: () => r.setShowQR(!0),
                children: (0, d.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, n.jsx)("a", {
                href: `${v.TS.STORE_BASE_URL}mobile`,
                className: g().MessagingLink,
                children: (0, d.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function i(r) {
          const {
            onQRStatusChange: o,
            transport: a,
            onComplete: u,
            platform: p,
            refreshInfo: C,
            bShowHideButton: c = !1,
            setShowQR: f,
          } = r;
          return (0, n.jsxs)("div", {
            className: g().QRCodeContainer,
            children: [
              (0, n.jsx)(S, {
                highlight: !0,
                children: (0, d.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, n.jsx)("div", {
                className: g().QR,
                children: (0, n.jsx)(Kt, {
                  onStatusChange: o,
                  transport: a,
                  onComplete: u,
                  platform: p,
                  refreshInfo: C,
                }),
              }),
              c &&
                f &&
                (0, n.jsx)("div", {
                  className: g().QRHideLink,
                  onClick: () => f(!1),
                  children: (0, d.we)("#Button_Hide"),
                }),
              (0, n.jsx)("div", {
                className: g().UseMobileAppForQR,
                children: (0, d.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, n.jsx)(Se, {
                    href: `${v.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function h() {
          const r = "bShowLoginQR",
            [o, a] = useState(localStorage?.getItem(r) === "1"),
            u = useCallback((p) => {
              a(p),
                p ? localStorage?.setItem(r, "1") : localStorage?.removeItem(r);
            }, []);
          return [o, u];
        }
        function m(r) {
          const { label: o, error: a, tone: u, autoFocus: p, id: C, ...c } = r,
            f = u ?? (a ? "danger" : void 0);
          return (0, n.jsxs)("div", {
            className: g().TextField,
            children: [
              typeof o == "string"
                ? (0, n.jsx)(S, { inputId: C, children: o })
                : o,
              a && (0, n.jsx)(H, { type: "error", children: a }),
              (0, n.jsx)(_, { autoFocus: p, tone: f, id: C, ...c }),
            ],
          });
        }
        function S(r) {
          const { children: o, inputId: a, highlight: u } = r;
          return (0, n.jsx)("label", {
            className: (0, F.A)(g().FieldLabel, u && g().Highlight),
            htmlFor: a,
            children: o,
          });
        }
        function _(r) {
          const {
            value: o,
            onChange: a,
            type: u = "text",
            tone: p,
            className: C,
            autoFocus: c,
            disabled: f,
            id: R,
          } = r;
          return (0, n.jsx)("input", {
            value: o,
            type: u,
            autoFocus: c,
            onChange: (k) => a(k.target.value),
            className: (0, F.A)(g().TextInput, p === "danger" && g().Danger, C),
            disabled: f,
            id: R,
          });
        }
        function H(r) {
          const { children: o, type: a } = r;
          return (0, n.jsx)("div", {
            className: (0, F.A)(g().FieldHint, a === "error" && g().Error),
            children: o,
          });
        }
        function U(r) {
          const { label: o, onChange: a, value: u } = r;
          let p = () => {
            a && a(!u);
          };
          const C = (0, T.useId)();
          return (0, n.jsxs)("div", {
            className: g().CheckboxField,
            onClick: p,
            onKeyPress: (c) => {
              c.key == " " && (p(), c.preventDefault());
            },
            children: [
              (0, n.jsx)(de, { labelledBy: C, value: u }),
              (0, n.jsx)("label", {
                id: C,
                className: g().CheckboxFieldLabel,
                children: o,
              }),
            ],
          });
        }
        function de(r) {
          const { value: o, labelledBy: a } = r;
          return (0, n.jsx)("div", {
            tabIndex: 0,
            className: g().Checkbox,
            "aria-labelledby": a,
            role: "checkbox",
            "aria-checked": o,
            children:
              o &&
              (0, n.jsx)("div", {
                className: g().Check,
                children: (0, n.jsx)(I.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function le(r) {
          const { refreshLogin: o, ...a } = r;
          return o &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, n.jsx)(tt, {})
            : (0, n.jsx)(xe, { ...a });
        }
        function xe(r) {
          return (0, n.jsx)("div", {
            className: g().SignInButtonContainer,
            children: (0, n.jsx)(pe, {
              ...r,
              children: (0, d.we)("#Login_SignIn"),
            }),
          });
        }
        function tt() {
          const r = () => SteamClient.User.StartShutdown(!0);
          return (0, n.jsxs)("div", {
            className: g().RefreshButtonContainer,
            children: [
              (0, n.jsx)("button", {
                className: g().SubmitButton,
                type: "submit",
                children: (0, d.we)("#Login_SignIn"),
              }),
              (0, n.jsx)("button", {
                className: g().RefreshQuitButton,
                onClick: r,
                children: (0, d.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function pe(r) {
          return (0, n.jsx)(fe, { type: "submit", ...r });
        }
        function fe(r) {
          const {
              className: o,
              loading: a,
              disabled: u,
              children: p,
              ...C
            } = r,
            c = u || a;
          return (0, n.jsxs)("button", {
            className: (0, F.A)(g().SubmitButton, a && g().Loading, o),
            disabled: c,
            ...C,
            children: [
              p,
              a &&
                (0, n.jsx)("div", {
                  className: g().LoadingContainer,
                  children: (0, n.jsx)(Je, { size: "small" }),
                }),
            ],
          });
        }
        function Ze(r) {
          const o = r.children || "\xA0";
          return (0, n.jsx)("div", { className: g().FormError, children: o });
        }
        function Me() {
          return (0, n.jsx)(Ye, {
            compact: !0,
            children: (0, n.jsxs)(ye, {
              alignItems: "center",
              className: (0, F.A)(
                g().WaitingForTokenContainer,
                v.TS.IN_STEAMUI && g().Client,
              ),
              children: [
                (0, n.jsx)(te.t, { size: "xlarge" }),
                (0, n.jsx)("div", {
                  className: (0, F.A)(g().Description),
                  children: (0, d.we)(
                    v.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function Je(r) {
          const { size: o } = r;
          return (0, n.jsx)("div", {
            className: (0, F.A)(
              g().LoadingSpinner,
              o == "small" && g().Small,
              (o == "medium" || !o) && g().Medium,
              o == "large" && g().Large,
            ),
          });
        }
        function _s(r) {
          return (0, n.jsx)("div", {
            className: g().OfferOffline,
            children: (0, n.jsx)("button", {
              className: g().OfferOfflineButton,
              onClick: r.onRequestOffline,
              children: (0, d.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function at(r) {
          const {
              reset: o,
              failure: a,
              onRequestOffline: u,
              errorReference: p,
              extendedErrorMessage: C,
            } = r,
            { title: c, description: f } = Ft(a, C),
            R = v.TS.IN_STEAMUI && a == b.eF.Network;
          return (0, n.jsxs)(Ye, {
            compact: !0,
            children: [
              (0, n.jsxs)(ye, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, n.jsx)("div", {
                    className: g().FailureTitle,
                    children: c,
                  }),
                  (0, n.jsx)("div", {
                    className: g().FailureDescription,
                    children: f,
                  }),
                  R &&
                    (0, n.jsx)("div", {
                      className: g().FailureDescription,
                      children: (0, d.we)("#Login_GoOffline_Description"),
                    }),
                  (0, n.jsxs)(yt, {
                    className: g().FailureButtons,
                    children: [
                      (0, n.jsx)(fe, {
                        className: g().TryAgainButton,
                        onClick: o,
                        children: (0, d.we)("#Button_Retry"),
                      }),
                      R && u && (0, n.jsx)(_s, { onRequestOffline: u }),
                    ],
                  }),
                ],
              }),
              p &&
                (0, n.jsx)("div", {
                  className: g().MutedErrorReference,
                  children: (0, d.we)("#Login_Error_Reference", p),
                }),
            ],
          });
        }
        function ws(r) {
          const { reset: o } = r;
          return (0, n.jsx)(at, { reset: o, failure: b.eF.Generic });
        }
        function bs(r) {
          const {
              type: o,
              onSubmitCode: a,
              status: u,
              accountName: p,
              associatedLabel: C,
              onBack: c,
            } = r,
            [f, R] = (0, T.useState)([]),
            [k, j] = (0, T.useState)(!1),
            [G, Y] = (0, T.useState)(!1),
            [z, ce] = (0, T.useState)(!1),
            [q, oe] = (0, T.useState)(0),
            M = o === "mobile",
            X = f.join(""),
            y = dt(X, z),
            L = (Tt) => {
              Y(!0),
                a(Tt).then(() => {
                  j(!1), Y(!1);
                });
            },
            N = (Tt) => {
              k || j(!0), R(Tt);
              const vs = Tt.join("");
              dt(vs, z) && L(vs);
            },
            K = () => {
              y && L(X);
            },
            ge = () => {
              ce(!z), R([]), a(""), oe(q + 1);
            },
            Ae = !k && (u === Ve || u === He);
          let Re, Rt;
          return (
            z
              ? o === "mobile"
                ? ((Rt = (0, n.jsx)(gs, {})), (Re = "#Login_UseMobileCode"))
                : ((Rt = (0, n.jsx)(gs, {})), (Re = "#Login_UseEmailCode"))
              : ((Rt =
                  o === "mobile"
                    ? (0, n.jsx)(xs, {})
                    : (0, n.jsx)(ys, { emailAddress: C })),
                (Re = "#Login_UseBackupCode")),
            (0, n.jsx)(Ye, {
              title: (0, n.jsx)(ds, {}),
              compact: !0,
              children: (0, n.jsx)(Ss, {
                onSubmit: K,
                children: (0, n.jsxs)(ye, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, n.jsx)(Cs, { type: o, accountName: p }),
                    (0, n.jsxs)("div", {
                      className: g().ConfirmationEntryContainer,
                      children: [
                        (0, n.jsxs)(ye, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            Ae &&
                              (0, n.jsx)(Ze, {
                                children: (0, d.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, n.jsx)(
                              Ms,
                              {
                                value: f,
                                onChange: N,
                                tone: Ae ? "danger" : void 0,
                                loading: G,
                                backupCode: z,
                              },
                              q,
                            ),
                          ],
                        }),
                        Rt,
                      ],
                    }),
                    M &&
                      (0, n.jsx)(Se, {
                        onClick: ge,
                        align: "center",
                        children: (0, d.we)(Re),
                      }),
                    (0, n.jsx)(ps, { type: o, onCodeHelp: r.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function ps(r) {
          if ((0, re.q)()) return null;
          let o, a;
          return (
            r.type === "mobile"
              ? ((o = `${v.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (a = (0, d.we)("#Login_Help_AccessMobileApp")))
              : ((o = `${v.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (a = (0, d.we)("#Login_Help_AccessEmail"))),
            r.onCodeHelp
              ? (0, n.jsx)(Se, {
                  onClick: () => r.onCodeHelp(o),
                  align: "center",
                  children: a,
                })
              : (0, n.jsx)(Se, { href: o, align: "center", children: a })
          );
        }
        function gs() {
          return (0, n.jsx)(yt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: g().EnterBackupCodeContainer,
            children: (0, n.jsxs)(ye, {
              children: [
                (0, n.jsx)("div", {
                  className: g().EnterCodeFromMobile,
                  children: (0, d.we)("#Login_EnterBackupCode"),
                }),
                (0, n.jsx)("div", {
                  className: g().Label,
                  children: (0, d.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function xs() {
          return (0, n.jsxs)(yt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: g().EnterCodeFromMobileContainer,
            children: [
              (0, n.jsx)("div", {
                className: g().EnterCodeFromMobile,
                children: (0, d.we)("#Login_EnterMobileCode"),
              }),
              (0, n.jsx)(Ts, { className: g().AwaitingMobileConfIcon }),
            ],
          });
        }
        function ys(r) {
          return (0, n.jsxs)(yt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: g().EnterCodeFromEmailContainer,
            children: [
              (0, n.jsx)(As, {
                align: "center",
                spacing: 6,
                children: (0, n.jsx)("div", {
                  className: g().EnterCodeFromEmail,
                  children: (0, d.PP)(
                    "#Login_EnterEmailCode",
                    (0, n.jsx)("span", {
                      className: g().EnterCodeEmailAddress,
                      children: r.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, n.jsx)(Ls, { className: g().AwaitingEmailConfIcon }),
            ],
          });
        }
        function Cs(r) {
          const { accountName: o, type: a } = r,
            u =
              a === "mobile"
                ? (0, d.we)("#Login_MobileProtectingAccount")
                : (0, d.we)("#Login_EmailProtectingAccount"),
            p = Ke();
          return (0, n.jsxs)("div", {
            className: g().ProtectingAccount,
            children: [
              (0, n.jsx)("div", {
                className: g().Label,
                children: (0, d.PP)(
                  "#Login_ActiveAccountName",
                  (0, n.jsx)("span", {
                    className: g().AccountName,
                    children: o,
                  }),
                ),
              }),
              !p &&
                (0, n.jsx)("div", { className: g().Description, children: u }),
            ],
          });
        }
        function Rs() {
          return (0, n.jsx)(ye, {
            alignItems: "center",
            children: (0, n.jsxs)("div", {
              className: g().ConfirmationContainer,
              children: [
                (0, n.jsx)("img", { src: (0, Xt.YJ)(Ie) }),
                (0, n.jsx)("div", {
                  className: g().AwaitingMobileConfText,
                  children: (0, d.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function Ts(r) {
          return (0, n.jsxs)("svg", {
            viewBox: "0 0 33 49",
            fill: "currentColor",
            className: r.className,
            children: [
              (0, n.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z",
              }),
            ],
          });
        }
        function Ls(r) {
          return (0, n.jsx)("svg", {
            viewBox: "0 0 58 56",
            fill: "none",
            className: r.className,
            children: (0, n.jsx)("path", {
              d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
              fill: "#1A99FF",
            }),
          });
        }
        function Vs(r) {
          const [o, a] = useSvgId();
          return jsxs("svg", {
            className: r.className,
            width: "34",
            height: "52",
            viewBox: "0 0 34 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.993001 3.2C0.993001 2.0799 0.993001 1.51984 1.21099 1.09202C1.40273 0.715695 1.7087 0.409734 2.08502 0.217987C2.51284 0 3.0729 0 4.193 0H29.793C30.9131 0 31.4732 0 31.901 0.217987C32.2773 0.409734 32.5833 0.715695 32.775 1.09202C32.993 1.51984 32.993 2.0799 32.993 3.2V48.8C32.993 49.9201 32.993 50.4802 32.775 50.908C32.5833 51.2843 32.2773 51.5903 31.901 51.782C31.4732 52 30.9131 52 29.793 52H4.193C3.0729 52 2.51284 52 2.08502 51.782C1.7087 51.5903 1.40273 51.2843 1.21099 50.908C0.993001 50.4802 0.993001 49.9201 0.993001 48.8V3.2ZM33 19.2967C33 19.1328 33.1328 19 33.2967 19C33.4606 19 33.5934 19.1328 33.5934 19.2967V25.8924C33.5934 26.0563 33.4606 26.1891 33.2967 26.1891C33.1328 26.1891 33 26.0563 33 25.8924V19.2967ZM0.690255 12.8531C0.854118 12.8531 0.986956 12.986 0.986956 13.1498V14.735C0.986956 14.8988 0.854118 15.0317 0.690255 15.0317C0.526392 15.0317 0.393555 14.8988 0.393555 14.735V13.1498C0.393555 12.986 0.526392 12.8531 0.690255 12.8531ZM0.986956 23.8975C0.986956 23.7337 0.854118 23.6008 0.690255 23.6008C0.526392 23.6008 0.393555 23.7337 0.393555 23.8975V27.8064C0.393555 27.9703 0.526392 28.1031 0.690255 28.1031C0.854118 28.1031 0.986956 27.9703 0.986956 27.8064V23.8975ZM0.690255 17.3557C0.854118 17.3557 0.986956 17.4886 0.986956 17.6524V21.5613C0.986956 21.7252 0.854118 21.858 0.690255 21.858C0.526392 21.858 0.393555 21.7252 0.393555 21.5613V17.6524C0.393555 17.4886 0.526392 17.3557 0.690255 17.3557Z",
                fill: r.phoneOutlineColor ?? "currentColor",
              }),
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z",
                fill: r.backgroundColor ?? "currentColor",
              }),
              jsx("g", {
                clipPath: a,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: r.qrCodeColor ?? "currentColor",
                }),
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: o,
                  children: jsx("rect", {
                    width: "22",
                    height: "22",
                    fill: "currentColor",
                    transform: "translate(6 14)",
                  }),
                }),
              }),
            ],
          });
        }
        function Fs(r) {
          return jsxs("svg", {
            className: r.className,
            viewBox: "0 0 25 25",
            fill: "none",
            children: [
              jsx("path", {
                d: "M5.77051 0H0V5.76795H5.77051V0ZM4.83807 4.83871H0.929121V0.929245H4.83807V4.83871Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M4.02169 1.69238H1.63916V4.07523H4.02169V1.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M9.6127 0H7.69141V1.92155H9.6127V0Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M1.92129 9.61475H0V11.5396V13.4612H1.92129V11.5396V9.61475Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M5.77031 9.61475H3.8457V11.5363H5.77031V9.61475Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M3.84268 7.69238H1.92139V9.61393H3.84268V7.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M21.1535 9.61436V7.69282H19.2289H17.3076V9.61436H19.2289V11.5392H21.1535V13.4608H19.2289H17.3076V11.5392V9.61436H15.383V7.69282H17.3076V5.76795V3.84641H15.383V1.92155H17.3076V0H15.383H13.4617H11.5371V1.92155H13.4617V3.84641V5.76795H11.5371V7.69282H13.4617V9.61436V11.5392H11.5371V13.4608H13.4617V15.3856V17.3072H11.5371V19.232H13.4617V21.1536V23.0785H11.5371V25H13.4617H15.383H17.3076V23.0785H15.383V21.1536H17.3076V19.232V17.3072H15.383V15.3856H17.3076H19.2289V17.3072H21.1535V15.3856H23.0748V17.3072H24.9994V15.3856V13.4608H23.0748V11.5392H24.9994V9.61436H23.0748H21.1535Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M19.23 0V5.76795H25.0005V0H19.23ZM24.068 4.83871H20.1591V0.929245H24.068V4.83871Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M23.2541 1.69238H20.8716V4.07523H23.2541V1.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M0 24.9999H5.77051V19.2319H0V24.9999ZM0.929121 20.1612H4.83807V24.0706H0.929121V20.1612Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M4.02169 20.9248H1.63916V23.3076H4.02169V20.9248Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M11.5378 19.2319H9.61319V17.307H11.5378V15.3855V13.4606H9.61319V11.5391H11.5378V9.6142H9.61319V7.69266V5.7678H11.5378V3.84625V1.92139H9.61319V3.84625H7.6919V5.7678V7.69266H5.7706V9.6142H7.6919V11.5391H5.7706V13.4606H7.6919V15.3855H5.7706V13.4606H3.846H1.92139V15.3855H3.846V17.307H5.7706H7.6919V19.2319V21.1534H9.61319V23.0783H11.5378V21.1534V19.2319Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M9.6127 23.0786H7.69141V25.0002H9.6127V23.0786Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M1.92129 15.3853H0V17.3068H1.92129V15.3853Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M19.23 24.9999H25.0005V19.2319H19.23V24.9999ZM20.1591 20.1612H24.068V24.0706H20.1591V20.1612Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M23.2541 20.9248H20.8716V23.3076H23.2541V20.9248Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function Es(r) {
          const { type: o, accountName: a, onUseCodeOverride: u } = r,
            p = Ke(),
            C = (0, n.jsx)(ps, { type: "mobile", onCodeHelp: r.onCodeHelp }),
            c = p
              ? (0, n.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, n.jsx)(Se, {
                    align: "center",
                    onClick: u,
                    children: (0, d.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, n.jsx)("div", {
                  className: g().EnterCodeInsteadLink,
                  children: (0, n.jsx)(Se, {
                    align: "center",
                    onClick: u,
                    children: (0, d.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, n.jsx)(Ye, {
            title: (0, n.jsx)(ds, {}),
            compact: !0,
            children: (0, n.jsxs)(ye, {
              gap: v.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, n.jsx)(Cs, { type: o, accountName: a }),
                (0, n.jsx)(Rs, {}),
                (0, n.jsxs)("div", {
                  className: g().LinkContainer,
                  children: [c, C],
                }),
              ],
            }),
          });
        }
        function Se(r) {
          const { children: o, align: a, inline: u } = r,
            p = (0, F.A)(g().TextLink, a === "center" && g().TextAlignCenter);
          if ("href" in r) {
            const C = v.TS.IN_STEAMUI
              ? `steam://openurl_external/${r.href}`
              : r.href;
            return (0, n.jsx)("a", { className: p, href: C, children: o });
          } else {
            const C = u ? "span" : "div";
            return (0, n.jsx)(C, {
              className: p,
              onClick: r.onClick,
              children: o,
            });
          }
        }
        function Ss(r) {
          const { onSubmit: o, children: a, className: u } = r,
            p = (C) => (C.preventDefault(), o(), !1);
          return (0, n.jsx)("form", { onSubmit: p, className: u, children: a });
        }
        function Ps(r) {
          const { align: o, ...a } = r;
          return jsx("div", {
            className: classnames(styles.Text, o === "center" && styles.Center),
            ...a,
          });
        }
        function ye(r) {
          const {
              alignItems: o,
              justifyContent: a,
              gap: u,
              className: p,
              ariaLabelledBy: C,
              children: c,
            } = r,
            f = (0, F.A)(
              g().FlexCol,
              o === "center" && g().AlignItemsCenter,
              a === "center" && g().JustifyContentCenter,
              p,
            ),
            R = u ? { gap: typeof u == "number" ? `${u}px` : u } : void 0;
          return (0, n.jsx)("section", {
            className: f,
            style: R,
            "aria-labelledby": C,
            children: c,
          });
        }
        function yt(r) {
          const {
              children: o,
              justifyContent: a,
              alignItems: u,
              className: p,
            } = r,
            C = {
              display: "flex",
              flexDirection: "row",
              justifyContent: a,
              alignItems: u,
            };
          return (0, n.jsx)("div", { style: C, className: p, children: o });
        }
        function Ms(r) {
          const { onChange: o, backupCode: a = !1, ...u } = r,
            p = (C) => {
              C = C.map((f) => f.toUpperCase());
              const c = C.join("").trim();
              ht(c, a) && o(C);
            };
          return (0, n.jsx)(Q, {
            length: rt(a),
            backupCode: a,
            onChange: p,
            autoFocus: !0,
            ...u,
            allowCharacter: (C) => /\w/g.test(C),
          });
        }
        function As(r) {
          const { children: o, spacing: a = 0, align: u } = r;
          return (0, n.jsx)(ye, {
            alignItems: u,
            children: T.Children.map(o, (p, C) =>
              p
                ? (0, n.jsx)("div", {
                    style: C > 0 ? { paddingTop: `${a}px` } : void 0,
                    children: p,
                  })
                : null,
            )?.filter(Boolean),
          });
        }
        function Ye(r) {
          const { title: o, titleId: a, children: u, compact: p } = r,
            C = Ke(),
            c = (0, T.useId)();
          return (0, n.jsxs)(ye, {
            gap: v.TS.IN_STEAMUI ? 0 : 32,
            className: (0, F.A)(
              g().StandardLayout,
              C && g().Embedded,
              p && g().Compact,
              v.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: a ?? c,
            children: [
              typeof o == "string"
                ? (0, n.jsx)("div", {
                    className: g().PrimaryHeader,
                    id: a ?? c,
                    children: o,
                  })
                : o,
              (0, n.jsx)("div", { className: g().FormContainer, children: u }),
            ],
          });
        }
        function ds(r) {
          const {
            realm: o = v.TS.EREALM,
            launcherType: a = v.TS.IN_STEAMUI ? v.TS.LAUNCHER_TYPE : void 0,
            className: u = g().HeaderLogo,
          } = r;
          return a === Ce.A2g
            ? (0, n.jsx)("div", { className: u })
            : (0, n.jsxs)("div", {
                className: g().LogoContainer,
                children: [
                  (0, n.jsx)(js, { onBack: r.onBack }),
                  o !== je.TU.k_ESteamRealmChina
                    ? (0, n.jsx)(Is, { className: u })
                    : (0, n.jsx)(Ds, { className: u }),
                  " ",
                ],
              });
        }
        function js(r) {
          return r.onBack
            ? (0, n.jsx)("div", {
                className: g().BackArrowContainer,
                onClick: r.onBack,
                children: (0, n.jsx)(I.Q38, { className: g().BackArrow }),
              })
            : null;
        }
        function Is(r) {
          return (0, n.jsxs)("svg", {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: r.className,
            children: [
              (0, n.jsx)("path", {
                d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
                fill: "#E0E1E6",
              }),
            ],
          });
        }
        function Ds(r) {
          return (0, n.jsxs)("svg", {
            viewBox: "0 0 232.73 46.07",
            xmlns: "http://www.w3.org/2000/svg",
            className: r.className,
            fill: "#E0E1E6",
            children: [
              (0, n.jsxs)("g", {
                stroke: "null",
                id: "svg_2",
                children: [
                  (0, n.jsx)("path", {
                    stroke: "null",
                    id: "svg_3",
                    d: "m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037",
                  }),
                  (0, n.jsx)("path", {
                    stroke: "null",
                    id: "svg_4",
                    d: "m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836",
                  }),
                  (0, n.jsx)("path", {
                    stroke: "null",
                    id: "svg_5",
                    d: "m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287",
                  }),
                ],
              }),
              (0, n.jsx)("path", {
                stroke: "null",
                id: "svg_6",
                d: "m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z",
              }),
              (0, n.jsxs)("g", {
                id: "svg_7",
                children: [
                  (0, n.jsx)("path", {
                    id: "svg_8",
                    d: "m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z",
                  }),
                  (0, n.jsx)("path", {
                    id: "svg_9",
                    d: "m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z",
                  }),
                  (0, n.jsx)("path", {
                    id: "svg_10",
                    d: "m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z",
                  }),
                  (0, n.jsx)("path", {
                    id: "svg_11",
                    d: "m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z",
                  }),
                ],
              }),
              (0, n.jsxs)("g", {
                id: "svg_12",
                children: [
                  (0, n.jsx)("path", {
                    id: "svg_13",
                    d: "m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z",
                  }),
                  (0, n.jsx)("path", {
                    id: "svg_14",
                    d: "m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z",
                  }),
                ],
              }),
            ],
          });
        }
        function ks() {
          return (0, n.jsx)(ye, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, n.jsx)(te.t, {}),
          });
        }
        function Ns(r) {
          const o = (0, T.useRef)(r);
          o.current = r;
          const [a, u] = (0, T.useState)(!0),
            p = (0, Fe.zy)();
          return (
            (0, T.useEffect)(() => {
              if (new URLSearchParams(p.search).get("need_password")) {
                u(!1);
                return;
              }
              if (!o.current) {
                u(!1);
                return;
              }
              Bs(o.current)
                .then((c) => {
                  u(c);
                })
                .catch((c) => {
                  (0, V.tH)("PerformRefresh exception", c), u(!1);
                });
            }, [o, p.search]),
            a
          );
        }
        async function Bs(r) {
          const o = new FormData();
          o.append("redir", r);
          const a = `${v.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            u = await Te().post(a, o, { timeout: 1e4, withCredentials: !0 });
          if (u.status !== 200 || !u?.data?.success) return !1;
          const { success: p, login_url: C, error: c, ...f } = u.data,
            R = new FormData();
          Object.entries(f).forEach(([G, Y]) => R.append(G, Y));
          const k = await Te().post(C, R),
            j = k.status === 200 && k.data.result === l.R;
          return j && window.location.assign(r), j;
        }
        function Hs() {
          const r = (0, T.useRef)(!0);
          return (
            (0, T.useEffect)(
              () => () => {
                r.current = !1;
              },
              [r],
            ),
            (0, T.useCallback)(() => r.current, [r])
          );
        }
      },
      78412: (ve) => {
        ve.exports = {
          Login: "_3EoMsOmqpdSZOFkxEPOqTw",
          SideBySide: "_26GwL4e6kWGCQPYX9_ZAC8",
          GuestContainer: "rLcB9iUxp0k1vOk6m_BRU",
          GuestLayout: "_2ZIDqonljXZgZzHHNugIga",
          StandardLayout: "yJskfS6UJMuhCvWheUjae",
          Embedded: "_3-xcRK-V8CusIG_CXsn33I",
          GuestText: "_2kO4i4mULRag64E_KDrUg5",
          GuestLink: "_1LmG2fq96wo5gmzAdRB6-x",
          ConfirmCredntialsNag: "_1dKpPdS8HqvzBJKNpLpkFv",
          QRSection: "K_2Ai5_jvZtY4oUCBDwQR",
          MessagingContainer: "_15rdspGNdt2FyA-96GiHsb",
          MessagingTag: "_2EGclwCQC0ib8xDSUC_hHh",
          MessagingSubtitleCtn: "_14TXq09d3A7XdoFnAeqlMM",
          MessagingIcon: "_3WENV13rx_2nOtqfCPIdjt",
          MessagingSubtitle: "_1awiHLJOivIyO1a6tHqeYu",
          MessagingButton: "_2FA-wGswb4_gH8XHPj6qhY",
          MessagingLink: "_2H3VBR2Zb9wMgwal5VvNS6",
          ScanQRButton: "_32aFqErf7QAi0DQrXEFJxf",
          QRIcon: "_2keix-vBIE1EfoFz0Kf2dY",
          QRCodeContainer: "TpNVwh59sdZg5-Vj6Q3gI",
          QR: "_3WFPt5JLLCLCDfnfg7tq8U",
          QRHideLink: "ufgzMhvhzcaI96Vtm8RCW",
          HideButton: "_138BG1s11dywuR39pfJ_mE",
          UseMobileAppForQR: "_2aPWIUqiibGsbbAQ2L9Tvb",
          InClient: "_1DbZPvmB-maGw3IrbnJBAX",
          TextField: "_2WcVVbFBG83UELy8L47mhx",
          TextInput: "_12BVjL3eO97hYIP0GX9FM4",
          Danger: "_3fknRtD-7H3DjZylCHp5Vk",
          LoginForm: "_330DKKE9L_jmFrf0afoxNl",
          FieldLabel: "_3b5iWfynCg_r6hD9d08oXV",
          Highlight: "_1zuuucB7YqhY_RMCWAJp6G",
          CheckboxField: "_2cCWZqqqazcW4NU2qo0MR9",
          CheckboxFieldLabel: "_2cqJp3NfMyZCwf9WMjNGp8",
          Checkbox: "_2yqO16VrJmXTQtsz8EQTY9",
          Check: "_2golWWWeCDL9Veo3SWc54h",
          RefreshButtonContainer: "_38tDZT91546Hjtcr3yLOAw",
          SignInButtonContainer: "_4f0Ay_i8qJK_OGchfnznu",
          RefreshQuitButton: "_3a20KLIkla_4hh7nOwjF0s",
          OfferOfflineButton: "LlCy5xHhJOBsK0dwvwFiZ",
          TryAgainButton: "_3_ywpZx7p0NUA6i6aDRhG0",
          GuestButton: "JZ8d4WZvtm8Q8DiIiyNnN",
          SubmitButton: "_3r0A-NOc7ara3PHSF3Irh",
          Loading: "_3MgO_F_9ZP02EzKnnt1nv6",
          LoadingContainer: "_2ro7jfiitcAZEWggZev2Y-",
          Text: "_2ZSz3czzvBWnU9UFq5-qVl",
          Center: "_2GCrPwjFVnKNi-62x-9ueB",
          TextLink: "_2GmYiBCtWUCWZ0JLymkz-n",
          FormError: "_3QfTGN2Nik8ZpRND4qHypV",
          TextAlignCenter: "_3ZszhV1rxNT-oGlegK-il9",
          FlexCol: "_1xA3zY8qsXnoz5X0yTpzVp",
          AlignItemsCenter: "_1-62c0brLy57pUJp9yCzMs",
          JustifyContentCenter: "_3iBLSTTCztO8KnqJqUSQjL",
          ProtectingAccount: "_3YghC3pSEVXvRvcefF9imL",
          Label: "_1maTE41FBhseFUGoRndEZN",
          AccountName: "_2vGa9R21vKtCftqXaF-zlx",
          Description: "_2B5YFPWgcdxOGNlMyi6lGQ",
          ConfirmationContainer: "_1wyzmoizDxt1_jtJkEWuXa",
          AwaitingMobileConfText: "D2wDvK5PPSMMovLI504J1",
          ConfirmationEntryContainer: "_150fBMw5kqH2Cz_p4RTp5Z",
          AwaitingMobileConfIcon: "_1LQLTpv1Wc9Og_CjEDhwUz",
          AwaitingEmailConfIcon: "_1tKOM6kFMJ5bX02eJaVJuS",
          LinkContainer: "_1VGvKq8aejCLYIXuvsQUN4",
          EnterCodeInsteadLink: "_1Km5Oqhbeuf4xo2BPIkQ2v",
          EnterBackupCodeContainer: "oiJ1RKOjn4pU_HwQ7K_9J",
          EnterCodeFromMobileContainer: "_33U5MpTzkUI1G-YrMwHjOa",
          EnterCodeFromEmailContainer: "_2FF7DFRbKtCkOJb2cLhqbk",
          EnterCodeFromMobile: "_16xa6JKOM6UxBn0KiTQ6qc",
          EnterCodeFromEmail: "_1rTwS3qPZ8aLPyP90OZSgY",
          EnterCodeEmailAddress: "_1x7e7uBi8V0DRQr18bLhgL",
          CodeInputFieldContainer: "_353PGaprlCZrKXtPv3eWgd",
          CodeInputField: "_2CquAyPMwC5fXKV89pBW9n",
          SegmentContainer: "_3No2U7WBgXNv3trBe35u2p",
          Segment: "_6dEEAOmICYjdPXfyJVs42",
          RefreshTitle: "_3hZJzWdHW0dKM71CLaLgYH",
          RefreshReason: "_1-59VgMCyMukDhl3Qyl6w3",
          InsecureComputer: "dah0Jp3JNsKqpoTyaKyTn",
          PrimaryHeader: "_47Dg51SMNXg14ErliHkeA",
          FormContainer: "_3dtTo2VZCmIdsqb6yzVcS6",
          Compact: "_2J1pVr5IFH3Iz9BxiKXCmW",
          HeaderLogo: "_63TCBNFd_pkhljzxYXa6y",
          LogoContainer: "oAWNw68bqhTRPJd84QL1Z",
          BackArrowContainer: "_1je67rRPux5QzJww9Osj_u",
          BackArrow: "_17kS9-opjUu0_sWVRWR1g-",
          EmbeddedRoot: "TvElg4VsyN1GxOEpTVQc1",
          RefreshReasonContainer: "_2iYNr-6LBFhneDZqzWalaD",
          Universe: "_1wbhEJYSb4ZySFddXusGtW",
          EmbeddedRootFooter: "_1xB7QcGIOGoU6PMrLiHHXk",
          AccountCreation: "_3zv7g_AOkPxg_73GUDdzjR",
          AccountCreationPrompt: "_35spav7NxktKwLc-_KJjrT",
          FailureTitle: "ckyl8s69ac87iY9v9cBL",
          FailureDescription: "_3x7ANq5knLAC5UtPzq1u5k",
          FailureButtons: "_3Hv75NSt0fVMwiHkA0ygfL",
          OfferOffline: "_3I_9j9dHmJkUk6hkskNGbA",
          LoadingSpinner: "ghNum25mh1bMvcSYG7lMt",
          LoadAmin: "_2baF4Zw0goGMRnJLUGxt_x",
          Small: "_3KkzHVd-N0HZ5MMtCrgIqt",
          Medium: "_2ZF4H4J_PDHHvkELDVdLhN",
          Large: "AnwcqNyK7DSyV7N3OJUrl",
          MutedErrorReference: "_36ocUpHPapyxxRIWSdS1NO",
          WaitingForTokenContainer: "_351-GDJL2cMGtsTx06k8N2",
          Client: "xkGF13f3kmhCqC-UPI3Lw",
        };
      },
      15557: (ve) => {
        ve.exports = {
          LoginQR: "_1RBdpuXQ8gNILSNU1JGlsC",
          NonPublic: "_2pgLZjuLvDu9oZpL9uDUTj",
          QRLoginDeck: "_2Xu3kVHfz2ij-c4aUzmT98",
          QRLoginVR: "_1CXb1S0A9_RnDcZu9fl3Vk",
          Blur: "_8PtnI20JWoadhNwmw5GFX",
          Overlay: "_37oKNCfndx3PjHweL0klBq",
          Box: "_2W9WUOLLUMsTLfneVVGHg5",
          Column: "_1JretoIyL3tP4LUDBI5wXS",
          Loading: "_2_A93rHbCQOrfsN-6FLD4o",
          LoadAmin: "m0wuVVIpnB6yHn09bp33D",
          Small: "_1B7PaZjS5Ta9rSSPo9VKbt",
          Medium: "_2gRqqqBHOAlZNfKgjf40A0",
          Large: "_174GHCvLhZKr1nVbcJBwcc",
        };
      },
      5804: (ve) => {
        ve.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      32224: (ve) => {
        ve.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
      80407: (ve, We, w) => {
        "use strict";
        w.d(We, { A: () => hs });
        var n,
          je = 0xdeadbeefcafe,
          Ce = (je & 16777215) == 15715070;
        function l(e, t, s) {
          e != null &&
            (typeof e == "number"
              ? this.fromNumber(e, t, s)
              : t == null && typeof e != "string"
                ? this.fromString(e, 256)
                : this.fromString(e, t));
        }
        function E() {
          return new l(null);
        }
        function Te(e, t, s, i, h, m) {
          for (; --m >= 0; ) {
            var S = t * this[e++] + s[i] + h;
            (h = Math.floor(S / 67108864)), (s[i++] = S & 67108863);
          }
          return h;
        }
        function T(e, t, s, i, h, m) {
          for (var S = t & 32767, _ = t >> 15; --m >= 0; ) {
            var H = this[e] & 32767,
              U = this[e++] >> 15,
              de = _ * H + U * S;
            (H = S * H + ((de & 32767) << 15) + s[i] + (h & 1073741823)),
              (h = (H >>> 30) + (de >>> 15) + _ * U + (h >>> 30)),
              (s[i++] = H & 1073741823);
          }
          return h;
        }
        function Fe(e, t, s, i, h, m) {
          for (var S = t & 16383, _ = t >> 14; --m >= 0; ) {
            var H = this[e] & 16383,
              U = this[e++] >> 14,
              de = _ * H + U * S;
            (H = S * H + ((de & 16383) << 14) + s[i] + h),
              (h = (H >> 28) + (de >> 14) + _ * U),
              (s[i++] = H & 268435455);
          }
          return h;
        }
        Ce && navigator.appName == "Microsoft Internet Explorer"
          ? ((l.prototype.am = T), (n = 30))
          : Ce && navigator.appName != "Netscape"
            ? ((l.prototype.am = Te), (n = 26))
            : ((l.prototype.am = Fe), (n = 28)),
          (l.prototype.DB = n),
          (l.prototype.DM = (1 << n) - 1),
          (l.prototype.DV = 1 << n);
        var Ie = 52;
        (l.prototype.FV = Math.pow(2, Ie)),
          (l.prototype.F1 = Ie - n),
          (l.prototype.F2 = 2 * n - Ie);
        var _e = "0123456789abcdefghijklmnopqrstuvwxyz",
          re = new Array(),
          ue,
          O;
        for (ue = 48, O = 0; O <= 9; ++O) re[ue++] = O;
        for (ue = 97, O = 10; O < 36; ++O) re[ue++] = O;
        for (ue = 65, O = 10; O < 36; ++O) re[ue++] = O;
        function Pe(e) {
          return _e.charAt(e);
        }
        function De(e, t) {
          var s = re[e.charCodeAt(t)];
          return s ?? -1;
        }
        function F(e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }
        function Ge(e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0);
        }
        function D(e) {
          var t = E();
          return t.fromInt(e), t;
        }
        function Q(e, t) {
          var s;
          if (t == 16) s = 4;
          else if (t == 8) s = 3;
          else if (t == 256) s = 8;
          else if (t == 2) s = 1;
          else if (t == 32) s = 5;
          else if (t == 4) s = 2;
          else {
            this.fromRadix(e, t);
            return;
          }
          (this.t = 0), (this.s = 0);
          for (var i = e.length, h = !1, m = 0; --i >= 0; ) {
            var S = s == 8 ? e[i] & 255 : De(e, i);
            if (S < 0) {
              e.charAt(i) == "-" && (h = !0);
              continue;
            }
            (h = !1),
              m == 0
                ? (this[this.t++] = S)
                : m + s > this.DB
                  ? ((this[this.t - 1] |=
                      (S & ((1 << (this.DB - m)) - 1)) << m),
                    (this[this.t++] = S >> (this.DB - m)))
                  : (this[this.t - 1] |= S << m),
              (m += s),
              m >= this.DB && (m -= this.DB);
          }
          s == 8 &&
            (e[0] & 128) != 0 &&
            ((this.s = -1),
            m > 0 && (this[this.t - 1] |= ((1 << (this.DB - m)) - 1) << m)),
            this.clamp(),
            h && l.ZERO.subTo(this, this);
        }
        function I() {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }
        function $(e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var t;
          if (e == 16) t = 4;
          else if (e == 8) t = 3;
          else if (e == 2) t = 1;
          else if (e == 32) t = 5;
          else if (e == 4) t = 2;
          else return this.toRadix(e);
          var s = (1 << t) - 1,
            i,
            h = !1,
            m = "",
            S = this.t,
            _ = this.DB - ((S * this.DB) % t);
          if (S-- > 0)
            for (
              _ < this.DB && (i = this[S] >> _) > 0 && ((h = !0), (m = Pe(i)));
              S >= 0;
            )
              _ < t
                ? ((i = (this[S] & ((1 << _) - 1)) << (t - _)),
                  (i |= this[--S] >> (_ += this.DB - t)))
                : ((i = (this[S] >> (_ -= t)) & s),
                  _ <= 0 && ((_ += this.DB), --S)),
                i > 0 && (h = !0),
                h && (m += Pe(i));
          return h ? m : "0";
        }
        function te() {
          var e = E();
          return l.ZERO.subTo(this, e), e;
        }
        function P() {
          return this.s < 0 ? this.negate() : this;
        }
        function x(e) {
          var t = this.s - e.s;
          if (t != 0) return t;
          var s = this.t;
          if (((t = s - e.t), t != 0)) return t;
          for (; --s >= 0; ) if ((t = this[s] - e[s]) != 0) return t;
          return 0;
        }
        function d(e) {
          var t = 1,
            s;
          return (
            (s = e >>> 16) != 0 && ((e = s), (t += 16)),
            (s = e >> 8) != 0 && ((e = s), (t += 8)),
            (s = e >> 4) != 0 && ((e = s), (t += 4)),
            (s = e >> 2) != 0 && ((e = s), (t += 2)),
            (s = e >> 1) != 0 && ((e = s), (t += 1)),
            t
          );
        }
        function A() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + d(this[this.t - 1] ^ (this.s & this.DM));
        }
        function v(e, t) {
          var s;
          for (s = this.t - 1; s >= 0; --s) t[s + e] = this[s];
          for (s = e - 1; s >= 0; --s) t[s] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }
        function b(e, t) {
          for (var s = e; s < this.t; ++s) t[s - e] = this[s];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }
        function Z(e, t) {
          var s = e % this.DB,
            i = this.DB - s,
            h = (1 << i) - 1,
            m = Math.floor(e / this.DB),
            S = (this.s << s) & this.DM,
            _;
          for (_ = this.t - 1; _ >= 0; --_)
            (t[_ + m + 1] = (this[_] >> i) | S), (S = (this[_] & h) << s);
          for (_ = m - 1; _ >= 0; --_) t[_] = 0;
          (t[m] = S), (t.t = this.t + m + 1), (t.s = this.s), t.clamp();
        }
        function W(e, t) {
          t.s = this.s;
          var s = Math.floor(e / this.DB);
          if (s >= this.t) {
            t.t = 0;
            return;
          }
          var i = e % this.DB,
            h = this.DB - i,
            m = (1 << i) - 1;
          t[0] = this[s] >> i;
          for (var S = s + 1; S < this.t; ++S)
            (t[S - s - 1] |= (this[S] & m) << h), (t[S - s] = this[S] >> i);
          i > 0 && (t[this.t - s - 1] |= (this.s & m) << h),
            (t.t = this.t - s),
            t.clamp();
        }
        function se(e, t) {
          for (var s = 0, i = 0, h = Math.min(e.t, this.t); s < h; )
            (i += this[s] - e[s]), (t[s++] = i & this.DM), (i >>= this.DB);
          if (e.t < this.t) {
            for (i -= e.s; s < this.t; )
              (i += this[s]), (t[s++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; s < e.t; )
              (i -= e[s]), (t[s++] = i & this.DM), (i >>= this.DB);
            i -= e.s;
          }
          (t.s = i < 0 ? -1 : 0),
            i < -1 ? (t[s++] = this.DV + i) : i > 0 && (t[s++] = i),
            (t.t = s),
            t.clamp();
        }
        function ke(e, t) {
          var s = this.abs(),
            i = e.abs(),
            h = s.t;
          for (t.t = h + i.t; --h >= 0; ) t[h] = 0;
          for (h = 0; h < i.t; ++h) t[h + s.t] = s.am(0, i[h], t, h, 0, s.t);
          (t.s = 0), t.clamp(), this.s != e.s && l.ZERO.subTo(t, t);
        }
        function V(e) {
          for (var t = this.abs(), s = (e.t = 2 * t.t); --s >= 0; ) e[s] = 0;
          for (s = 0; s < t.t - 1; ++s) {
            var i = t.am(s, t[s], e, 2 * s, 0, 1);
            (e[s + t.t] += t.am(
              s + 1,
              2 * t[s],
              e,
              2 * s + 1,
              i,
              t.t - s - 1,
            )) >= t.DV && ((e[s + t.t] -= t.DV), (e[s + t.t + 1] = 1));
          }
          e.t > 0 && (e[e.t - 1] += t.am(s, t[s], e, 2 * s, 0, 1)),
            (e.s = 0),
            e.clamp();
        }
        function B(e, t, s) {
          var i = e.abs();
          if (!(i.t <= 0)) {
            var h = this.abs();
            if (h.t < i.t) {
              t?.fromInt(0), s != null && this.copyTo(s);
              return;
            }
            s == null && (s = E());
            var m = E(),
              S = this.s,
              _ = e.s,
              H = this.DB - d(i[i.t - 1]);
            H > 0
              ? (i.lShiftTo(H, m), h.lShiftTo(H, s))
              : (i.copyTo(m), h.copyTo(s));
            var U = m.t,
              de = m[U - 1];
            if (de != 0) {
              var le = de * (1 << this.F1) + (U > 1 ? m[U - 2] >> this.F2 : 0),
                xe = this.FV / le,
                tt = (1 << this.F1) / le,
                pe = 1 << this.F2,
                fe = s.t,
                Ze = fe - U,
                Me = t ?? E();
              for (
                m.dlShiftTo(Ze, Me),
                  s.compareTo(Me) >= 0 && ((s[s.t++] = 1), s.subTo(Me, s)),
                  l.ONE.dlShiftTo(U, Me),
                  Me.subTo(m, m);
                m.t < U;
              )
                m[m.t++] = 0;
              for (; --Ze >= 0; ) {
                var Je =
                  s[--fe] == de
                    ? this.DM
                    : Math.floor(s[fe] * xe + (s[fe - 1] + pe) * tt);
                if ((s[fe] += m.am(0, Je, s, Ze, 0, U)) < Je)
                  for (m.dlShiftTo(Ze, Me), s.subTo(Me, s); s[fe] < --Je; )
                    s.subTo(Me, s);
              }
              t != null && (s.drShiftTo(U, t), S != _ && l.ZERO.subTo(t, t)),
                (s.t = U),
                s.clamp(),
                H > 0 && s.rShiftTo(H, s),
                S < 0 && l.ZERO.subTo(s, s);
            }
          }
        }
        function he(e) {
          var t = E();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(l.ZERO) > 0 && e.subTo(t, t),
            t
          );
        }
        function we(e) {
          this.m = e;
        }
        function Oe(e) {
          return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
        }
        function Lt(e) {
          return e;
        }
        function Et(e) {
          e.divRemTo(this.m, null, e);
        }
        function ie(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        function Mt(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        (we.prototype.convert = Oe),
          (we.prototype.revert = Lt),
          (we.prototype.reduce = Et),
          (we.prototype.mulTo = ie),
          (we.prototype.sqrTo = Mt);
        function Le() {
          if (this.t < 1) return 0;
          var e = this[0];
          if ((e & 1) == 0) return 0;
          var t = e & 3;
          return (
            (t = (t * (2 - (e & 15) * t)) & 15),
            (t = (t * (2 - (e & 255) * t)) & 255),
            (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
            (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
            t > 0 ? this.DV - t : -t
          );
        }
        function be(e) {
          (this.m = e),
            (this.mp = e.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (e.DB - 15)) - 1),
            (this.mt2 = 2 * e.t);
        }
        function $e(e) {
          var t = E();
          return (
            e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(l.ZERO) > 0 && this.m.subTo(t, t),
            t
          );
        }
        function Ee(e) {
          var t = E();
          return e.copyTo(t), this.reduce(t), t;
        }
        function Ne(e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var s = e[t] & 32767,
              i =
                (s * this.mpl +
                  (((s * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              s = t + this.m.t, e[s] += this.m.am(0, i, e, t, 0, this.m.t);
              e[s] >= e.DV;
            )
              (e[s] -= e.DV), e[++s]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }
        function me(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        function Be(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        (be.prototype.convert = $e),
          (be.prototype.revert = Ee),
          (be.prototype.reduce = Ne),
          (be.prototype.mulTo = Be),
          (be.prototype.sqrTo = me);
        function st() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function qe(e, t) {
          if (e > 4294967295 || e < 1) return l.ONE;
          var s = E(),
            i = E(),
            h = t.convert(this),
            m = d(e) - 1;
          for (h.copyTo(s); --m >= 0; )
            if ((t.sqrTo(s, i), (e & (1 << m)) > 0)) t.mulTo(i, h, s);
            else {
              var S = s;
              (s = i), (i = S);
            }
          return t.revert(s);
        }
        function At(e, t) {
          var s;
          return (
            e < 256 || t.isEven() ? (s = new we(t)) : (s = new be(t)),
            this.exp(e, s)
          );
        }
        (l.prototype.copyTo = F),
          (l.prototype.fromInt = Ge),
          (l.prototype.fromString = Q),
          (l.prototype.clamp = I),
          (l.prototype.dlShiftTo = v),
          (l.prototype.drShiftTo = b),
          (l.prototype.lShiftTo = Z),
          (l.prototype.rShiftTo = W),
          (l.prototype.subTo = se),
          (l.prototype.multiplyTo = ke),
          (l.prototype.squareTo = V),
          (l.prototype.divRemTo = B),
          (l.prototype.invDigit = Le),
          (l.prototype.isEven = st),
          (l.prototype.exp = qe),
          (l.prototype.toString = $),
          (l.prototype.negate = te),
          (l.prototype.abs = P),
          (l.prototype.compareTo = x),
          (l.prototype.bitLength = A),
          (l.prototype.mod = he),
          (l.prototype.modPowInt = At),
          (l.ZERO = D(0)),
          (l.ONE = D(1));
        function He() {
          var e = E();
          return this.copyTo(e), e;
        }
        function Ve() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function nt() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function Xe() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function lt(e) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(e));
        }
        function ot() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function ct(e) {
          if ((e == null && (e = 10), this.signum() == 0 || e < 2 || e > 36))
            return "0";
          var t = this.chunkSize(e),
            s = Math.pow(e, t),
            i = D(s),
            h = E(),
            m = E(),
            S = "";
          for (this.divRemTo(i, h, m); h.signum() > 0; )
            (S = (s + m.intValue()).toString(e).substr(1) + S),
              h.divRemTo(i, h, m);
          return m.intValue().toString(e) + S;
        }
        function ee(e, t) {
          this.fromInt(0), t == null && (t = 10);
          for (
            var s = this.chunkSize(t),
              i = Math.pow(t, s),
              h = !1,
              m = 0,
              S = 0,
              _ = 0;
            _ < e.length;
            ++_
          ) {
            var H = De(e, _);
            if (H < 0) {
              e.charAt(_) == "-" && this.signum() == 0 && (h = !0);
              continue;
            }
            (S = t * S + H),
              ++m >= s &&
                (this.dMultiply(i), this.dAddOffset(S, 0), (m = 0), (S = 0));
          }
          m > 0 && (this.dMultiply(Math.pow(t, m)), this.dAddOffset(S, 0)),
            h && l.ZERO.subTo(this, this);
        }
        function jt(e, t, s) {
          if (typeof t == "number")
            if (e < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(e, s),
                  this.testBit(e - 1) ||
                    this.bitwiseTo(l.ONE.shiftLeft(e - 1), J, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(t);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > e &&
                    this.subTo(l.ONE.shiftLeft(e - 1), this);
          else {
            var i = new Array(),
              h = e & 7;
            (i.length = (e >> 3) + 1),
              t.nextBytes(i),
              h > 0 ? (i[0] &= (1 << h) - 1) : (i[0] = 0),
              this.fromString(i, 256);
          }
        }
        function fs() {
          var e = this.t,
            t = new Array();
          t[0] = this.s;
          var s = this.DB - ((e * this.DB) % 8),
            i,
            h = 0;
          if (e-- > 0)
            for (
              s < this.DB &&
              (i = this[e] >> s) != (this.s & this.DM) >> s &&
              (t[h++] = i | (this.s << (this.DB - s)));
              e >= 0;
            )
              s < 8
                ? ((i = (this[e] & ((1 << s) - 1)) << (8 - s)),
                  (i |= this[--e] >> (s += this.DB - 8)))
                : ((i = (this[e] >> (s -= 8)) & 255),
                  s <= 0 && ((s += this.DB), --e)),
                (i & 128) != 0 && (i |= -256),
                h == 0 && (this.s & 128) != (i & 128) && ++h,
                (h > 0 || i != this.s) && (t[h++] = i);
          return t;
        }
        function ut(e) {
          return this.compareTo(e) == 0;
        }
        function It(e) {
          return this.compareTo(e) < 0 ? this : e;
        }
        function Dt(e) {
          return this.compareTo(e) > 0 ? this : e;
        }
        function rt(e, t, s) {
          var i,
            h,
            m = Math.min(e.t, this.t);
          for (i = 0; i < m; ++i) s[i] = t(this[i], e[i]);
          if (e.t < this.t) {
            for (h = e.s & this.DM, i = m; i < this.t; ++i)
              s[i] = t(this[i], h);
            s.t = this.t;
          } else {
            for (h = this.s & this.DM, i = m; i < e.t; ++i) s[i] = t(h, e[i]);
            s.t = e.t;
          }
          (s.s = t(this.s, e.s)), s.clamp();
        }
        function ht(e, t) {
          return e & t;
        }
        function dt(e) {
          var t = E();
          return this.bitwiseTo(e, ht, t), t;
        }
        function J(e, t) {
          return e | t;
        }
        function kt(e) {
          var t = E();
          return this.bitwiseTo(e, J, t), t;
        }
        function ft(e, t) {
          return e ^ t;
        }
        function Nt(e) {
          var t = E();
          return this.bitwiseTo(e, ft, t), t;
        }
        function Qe(e, t) {
          return e & ~t;
        }
        function mt(e) {
          var t = E();
          return this.bitwiseTo(e, Qe, t), t;
        }
        function pt() {
          for (var e = E(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }
        function gt(e) {
          var t = E();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }
        function Ct(e) {
          var t = E();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }
        function Bt(e) {
          if (e == 0) return -1;
          var t = 0;
          return (
            (e & 65535) == 0 && ((e >>= 16), (t += 16)),
            (e & 255) == 0 && ((e >>= 8), (t += 8)),
            (e & 15) == 0 && ((e >>= 4), (t += 4)),
            (e & 3) == 0 && ((e >>= 2), (t += 2)),
            (e & 1) == 0 && ++t,
            t
          );
        }
        function it() {
          for (var e = 0; e < this.t; ++e)
            if (this[e] != 0) return e * this.DB + Bt(this[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function Ht(e) {
          for (var t = 0; e != 0; ) (e &= e - 1), ++t;
          return t;
        }
        function ms() {
          for (var e = 0, t = this.s & this.DM, s = 0; s < this.t; ++s)
            e += Ht(this[s] ^ t);
          return e;
        }
        function St(e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t
            ? this.s != 0
            : (this[t] & (1 << (e % this.DB))) != 0;
        }
        function vt(e, t) {
          var s = l.ONE.shiftLeft(e);
          return this.bitwiseTo(s, t, s), s;
        }
        function Vt(e) {
          return this.changeBit(e, J);
        }
        function Ft(e) {
          return this.changeBit(e, Qe);
        }
        function Pt(e) {
          return this.changeBit(e, ft);
        }
        function g(e, t) {
          for (var s = 0, i = 0, h = Math.min(e.t, this.t); s < h; )
            (i += this[s] + e[s]), (t[s++] = i & this.DM), (i >>= this.DB);
          if (e.t < this.t) {
            for (i += e.s; s < this.t; )
              (i += this[s]), (t[s++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; s < e.t; )
              (i += e[s]), (t[s++] = i & this.DM), (i >>= this.DB);
            i += e.s;
          }
          (t.s = i < 0 ? -1 : 0),
            i > 0 ? (t[s++] = i) : i < -1 && (t[s++] = this.DV + i),
            (t.t = s),
            t.clamp();
        }
        function Gt(e) {
          var t = E();
          return this.addTo(e, t), t;
        }
        function Ot(e) {
          var t = E();
          return this.subTo(e, t), t;
        }
        function Ut(e) {
          var t = E();
          return this.multiplyTo(e, t), t;
        }
        function _t(e) {
          var t = E();
          return this.divRemTo(e, t, null), t;
        }
        function wt(e) {
          var t = E();
          return this.divRemTo(e, null, t), t;
        }
        function Zt(e) {
          var t = E(),
            s = E();
          return this.divRemTo(e, t, s), new Array(t, s);
        }
        function Wt(e) {
          (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function Qt(e, t) {
          for (; this.t <= t; ) this[this.t++] = 0;
          for (this[t] += e; this[t] >= this.DV; )
            (this[t] -= this.DV),
              ++t >= this.t && (this[this.t++] = 0),
              ++this[t];
        }
        function ze() {}
        function bt(e) {
          return e;
        }
        function ae(e, t, s) {
          e.multiplyTo(t, s);
        }
        function zt(e, t) {
          e.squareTo(t);
        }
        (ze.prototype.convert = bt),
          (ze.prototype.revert = bt),
          (ze.prototype.mulTo = ae),
          (ze.prototype.sqrTo = zt);
        function Kt(e) {
          return this.exp(e, new ze());
        }
        function Jt(e, t, s) {
          var i = Math.min(this.t + e.t, t);
          for (s.s = 0, s.t = i; i > 0; ) s[--i] = 0;
          var h;
          for (h = s.t - this.t; i < h; ++i)
            s[i + this.t] = this.am(0, e[i], s, i, 0, this.t);
          for (h = Math.min(e.t, t); i < h; ++i)
            this.am(0, e[i], s, i, 0, t - i);
          s.clamp();
        }
        function Yt(e, t, s) {
          --t;
          var i = (s.t = this.t + e.t - t);
          for (s.s = 0; --i >= 0; ) s[i] = 0;
          for (i = Math.max(t - this.t, 0); i < e.t; ++i)
            s[this.t + i - t] = this.am(t - i, e[i], s, 0, 0, this.t + i - t);
          s.clamp(), s.drShiftTo(1, s);
        }
        function Ue(e) {
          (this.r2 = E()),
            (this.q3 = E()),
            l.ONE.dlShiftTo(2 * e.t, this.r2),
            (this.mu = this.r2.divide(e)),
            (this.m = e);
        }
        function $t(e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = E();
          return e.copyTo(t), this.reduce(t), t;
        }
        function qt(e) {
          return e;
        }
        function Xt(e) {
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
        }
        function xt(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        function Ke(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        (Ue.prototype.convert = $t),
          (Ue.prototype.revert = qt),
          (Ue.prototype.reduce = Xt),
          (Ue.prototype.mulTo = Ke),
          (Ue.prototype.sqrTo = xt);
        function es(e, t) {
          var s = e.bitLength(),
            i,
            h = D(1),
            m;
          if (s <= 0) return h;
          s < 18
            ? (i = 1)
            : s < 48
              ? (i = 3)
              : s < 144
                ? (i = 4)
                : s < 768
                  ? (i = 5)
                  : (i = 6),
            s < 8
              ? (m = new we(t))
              : t.isEven()
                ? (m = new Ue(t))
                : (m = new be(t));
          var S = new Array(),
            _ = 3,
            H = i - 1,
            U = (1 << i) - 1;
          if (((S[1] = m.convert(this)), i > 1)) {
            var de = E();
            for (m.sqrTo(S[1], de); _ <= U; )
              (S[_] = E()), m.mulTo(de, S[_ - 2], S[_]), (_ += 2);
          }
          var le = e.t - 1,
            xe,
            tt = !0,
            pe = E(),
            fe;
          for (s = d(e[le]) - 1; le >= 0; ) {
            for (
              s >= H
                ? (xe = (e[le] >> (s - H)) & U)
                : ((xe = (e[le] & ((1 << (s + 1)) - 1)) << (H - s)),
                  le > 0 && (xe |= e[le - 1] >> (this.DB + s - H))),
                _ = i;
              (xe & 1) == 0;
            )
              (xe >>= 1), --_;
            if (((s -= _) < 0 && ((s += this.DB), --le), tt))
              S[xe].copyTo(h), (tt = !1);
            else {
              for (; _ > 1; ) m.sqrTo(h, pe), m.sqrTo(pe, h), (_ -= 2);
              _ > 0 ? m.sqrTo(h, pe) : ((fe = h), (h = pe), (pe = fe)),
                m.mulTo(pe, S[xe], h);
            }
            for (; le >= 0 && (e[le] & (1 << s)) == 0; )
              m.sqrTo(h, pe),
                (fe = h),
                (h = pe),
                (pe = fe),
                --s < 0 && ((s = this.DB - 1), --le);
          }
          return m.revert(h);
        }
        function ts(e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            s = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(s) < 0) {
            var i = t;
            (t = s), (s = i);
          }
          var h = t.getLowestSetBit(),
            m = s.getLowestSetBit();
          if (m < 0) return t;
          for (
            h < m && (m = h), m > 0 && (t.rShiftTo(m, t), s.rShiftTo(m, s));
            t.signum() > 0;
          )
            (h = t.getLowestSetBit()) > 0 && t.rShiftTo(h, t),
              (h = s.getLowestSetBit()) > 0 && s.rShiftTo(h, s),
              t.compareTo(s) >= 0
                ? (t.subTo(s, t), t.rShiftTo(1, t))
                : (s.subTo(t, s), s.rShiftTo(1, s));
          return m > 0 && s.lShiftTo(m, s), s;
        }
        function ss(e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            s = this.s < 0 ? e - 1 : 0;
          if (this.t > 0)
            if (t == 0) s = this[0] % e;
            else
              for (var i = this.t - 1; i >= 0; --i) s = (t * s + this[i]) % e;
          return s;
        }
        function ns(e) {
          var t = e.isEven();
          if ((this.isEven() && t) || e.signum() == 0) return l.ZERO;
          for (
            var s = e.clone(),
              i = this.clone(),
              h = D(1),
              m = D(0),
              S = D(0),
              _ = D(1);
            s.signum() != 0;
          ) {
            for (; s.isEven(); )
              s.rShiftTo(1, s),
                t
                  ? ((!h.isEven() || !m.isEven()) &&
                      (h.addTo(this, h), m.subTo(e, m)),
                    h.rShiftTo(1, h))
                  : m.isEven() || m.subTo(e, m),
                m.rShiftTo(1, m);
            for (; i.isEven(); )
              i.rShiftTo(1, i),
                t
                  ? ((!S.isEven() || !_.isEven()) &&
                      (S.addTo(this, S), _.subTo(e, _)),
                    S.rShiftTo(1, S))
                  : _.isEven() || _.subTo(e, _),
                _.rShiftTo(1, _);
            s.compareTo(i) >= 0
              ? (s.subTo(i, s), t && h.subTo(S, h), m.subTo(_, m))
              : (i.subTo(s, i), t && S.subTo(h, S), _.subTo(m, _));
          }
          if (i.compareTo(l.ONE) != 0) return l.ZERO;
          if (_.compareTo(e) >= 0) return _.subtract(e);
          if (_.signum() < 0) _.addTo(e, _);
          else return _;
          return _.signum() < 0 ? _.add(e) : _;
        }
        var ne = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          os = (1 << 26) / ne[ne.length - 1];
        function rs(e) {
          var t,
            s = this.abs();
          if (s.t == 1 && s[0] <= ne[ne.length - 1]) {
            for (t = 0; t < ne.length; ++t) if (s[0] == ne[t]) return !0;
            return !1;
          }
          if (s.isEven()) return !1;
          for (t = 1; t < ne.length; ) {
            for (var i = ne[t], h = t + 1; h < ne.length && i < os; )
              i *= ne[h++];
            for (i = s.modInt(i); t < h; ) if (i % ne[t++] == 0) return !1;
          }
          return s.millerRabin(e);
        }
        function is(e) {
          var t = this.subtract(l.ONE),
            s = t.getLowestSetBit();
          if (s <= 0) return !1;
          var i = t.shiftRight(s);
          (e = (e + 1) >> 1), e > ne.length && (e = ne.length);
          for (var h = E(), m = 0; m < e; ++m) {
            h.fromInt(ne[m]);
            var S = h.modPow(i, this);
            if (S.compareTo(l.ONE) != 0 && S.compareTo(t) != 0) {
              for (var _ = 1; _++ < s && S.compareTo(t) != 0; )
                if (((S = S.modPowInt(2, this)), S.compareTo(l.ONE) == 0))
                  return !1;
              if (S.compareTo(t) != 0) return !1;
            }
          }
          return !0;
        }
        (l.prototype.chunkSize = lt),
          (l.prototype.toRadix = ct),
          (l.prototype.fromRadix = ee),
          (l.prototype.fromNumber = jt),
          (l.prototype.bitwiseTo = rt),
          (l.prototype.changeBit = vt),
          (l.prototype.addTo = g),
          (l.prototype.dMultiply = Wt),
          (l.prototype.dAddOffset = Qt),
          (l.prototype.multiplyLowerTo = Jt),
          (l.prototype.multiplyUpperTo = Yt),
          (l.prototype.modInt = ss),
          (l.prototype.millerRabin = is),
          (l.prototype.clone = He),
          (l.prototype.intValue = Ve),
          (l.prototype.byteValue = nt),
          (l.prototype.shortValue = Xe),
          (l.prototype.signum = ot),
          (l.prototype.toByteArray = fs),
          (l.prototype.equals = ut),
          (l.prototype.min = It),
          (l.prototype.max = Dt),
          (l.prototype.and = dt),
          (l.prototype.or = kt),
          (l.prototype.xor = Nt),
          (l.prototype.andNot = mt),
          (l.prototype.not = pt),
          (l.prototype.shiftLeft = gt),
          (l.prototype.shiftRight = Ct),
          (l.prototype.getLowestSetBit = it),
          (l.prototype.bitCount = ms),
          (l.prototype.testBit = St),
          (l.prototype.setBit = Vt),
          (l.prototype.clearBit = Ft),
          (l.prototype.flipBit = Pt),
          (l.prototype.add = Gt),
          (l.prototype.subtract = Ot),
          (l.prototype.multiply = Ut),
          (l.prototype.divide = _t),
          (l.prototype.remainder = wt),
          (l.prototype.divideAndRemainder = Zt),
          (l.prototype.modPow = es),
          (l.prototype.modInverse = ns),
          (l.prototype.pow = Kt),
          (l.prototype.gcd = ts),
          (l.prototype.isProbablePrime = rs);
        const et = l;
        var as = function (e, t) {
            (this.modulus = new et(e, 16)),
              (this.encryptionExponent = new et(t, 16));
          },
          ls = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (e) {
              if (!e) return !1;
              var t = "",
                s,
                i,
                h,
                m,
                S,
                _,
                H,
                U = 0;
              do
                (s = e.charCodeAt(U++)),
                  (i = e.charCodeAt(U++)),
                  (h = e.charCodeAt(U++)),
                  (m = s >> 2),
                  (S = ((s & 3) << 4) | (i >> 4)),
                  (_ = ((i & 15) << 2) | (h >> 6)),
                  (H = h & 63),
                  isNaN(i) ? (_ = H = 64) : isNaN(h) && (H = 64),
                  (t +=
                    this.base64.charAt(m) +
                    this.base64.charAt(S) +
                    this.base64.charAt(_) +
                    this.base64.charAt(H));
              while (U < e.length);
              return t;
            },
            decode: function (e) {
              if (!e) return !1;
              e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var t = "",
                s,
                i,
                h,
                m,
                S = 0;
              do
                (s = this.base64.indexOf(e.charAt(S++))),
                  (i = this.base64.indexOf(e.charAt(S++))),
                  (h = this.base64.indexOf(e.charAt(S++))),
                  (m = this.base64.indexOf(e.charAt(S++))),
                  (t += String.fromCharCode((s << 2) | (i >> 4))),
                  h != 64 &&
                    (t += String.fromCharCode(((i & 15) << 4) | (h >> 2))),
                  m != 64 && (t += String.fromCharCode(((h & 3) << 6) | m));
              while (S < e.length);
              return t;
            },
          },
          cs = {
            hex: "0123456789abcdef",
            encode: function (e) {
              if (!e) return !1;
              var t = "",
                s,
                i = 0;
              do
                (s = e.charCodeAt(i++)),
                  (t +=
                    this.hex.charAt((s >> 4) & 15) + this.hex.charAt(s & 15));
              while (i < e.length);
              return t;
            },
            decode: function (e) {
              if (!e) return !1;
              e = e.replace(/[^0-9abcdef]/g, "");
              var t = "",
                s = 0;
              do
                t += String.fromCharCode(
                  ((this.hex.indexOf(e.charAt(s++)) << 4) & 240) |
                    (this.hex.indexOf(e.charAt(s++)) & 15),
                );
              while (s < e.length);
              return t;
            },
          },
          us = {
            getPublicKey: function (e, t) {
              return new as(e, t);
            },
            encrypt: function (e, t) {
              return !t ||
                ((e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)),
                !e) ||
                ((e = e.modPowInt(t.encryptionExponent, t.modulus)), !e)
                ? !1
                : ((e = e.toString(16)),
                  (e.length & 1) == 1 && (e = "0" + e),
                  ls.encode(cs.decode(e)));
            },
            pkcs1pad2: function (e, t) {
              if (t < e.length + 11) return null;
              for (var s = [], i = e.length - 1; i >= 0 && t > 0; )
                s[--t] = e.charCodeAt(i--);
              for (s[--t] = 0; t > 2; )
                s[--t] = Math.floor(Math.random() * 254) + 1;
              return (s[--t] = 2), (s[--t] = 0), new et(s);
            },
          };
        const hs = us;
      },
    },
  ]);
})();
