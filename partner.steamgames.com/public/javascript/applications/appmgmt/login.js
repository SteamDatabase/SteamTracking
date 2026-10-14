/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [96966],
    {
      37812: (Me, we, S) => {
        "use strict";
        S.r(we), S.d(we, { default: () => ee });
        var d = S(7850),
          me = S(90626),
          M = S(88003),
          m = S(2801),
          t = S(87242),
          gr = S(42780),
          H = S(94276),
          ye = S(77008),
          xe = S(60298),
          de = S(3166);
        function ee() {
          return (
            (0, me.useEffect)(
              () => (
                (window.g_ShowLoginDialog = (xr) =>
                  (0, M.pg)((0, d.jsx)(le, { redirectUrl: xr }), window, {
                    popupWidth: 700,
                    popupHeight: 440,
                  })),
                () => {
                  delete window.g_ShowLoginDialog;
                }
              ),
              [],
            ),
            null
          );
        }
        function le(xr) {
          const { redirectUrl: Se = de.TS.PARTNER_BASE_URL, closeModal: pe } =
              xr,
            wr = (0, me.useRef)(
              (0, xe.p)(new ye.D(de.TS.WEBAPI_BASE_URL)).GetServiceTransport(),
            ).current,
            [Ve, er] = (0, me.useState)(!1),
            Zr = (R) => {
              R == t.wI.k_PrimaryDomainFail
                ? er(!0)
                : window.location.assign(Se);
            };
          return (0, d.jsx)(m.x_, {
            onEscKeypress: pe,
            hideTopBar: !0,
            bDisableBackgroundDismiss: !0,
            children: Ve
              ? (0, d.jsx)(gr.Fn, {})
              : (0, d.jsx)(gr.YN, {
                  platform: H.SS.tS,
                  transport: wr,
                  onComplete: Zr,
                  autoFocus: !0,
                  theme: "modal",
                  redirectUrl: Se,
                }),
          });
        }
      },
      87242: (Me, we, S) => {
        "use strict";
        S.d(we, {
          FU: () => er,
          eF: () => Ve,
          gf: () => R,
          wI: () => Zr,
          yp: () => te,
        });
        var d = S(14947),
          me = S(41735),
          M = S.n(me),
          m = S(35038),
          t = S(71742),
          gr = S(27066),
          H = S(72604),
          ye = S(99412),
          xe = S(94354),
          de = S(3166),
          ee = S(94276),
          le = S(71944),
          xr = S(73011),
          Se = Object.defineProperty,
          pe = Object.getOwnPropertyDescriptor,
          wr = (E, y, A, O) => {
            for (
              var I = O > 1 ? void 0 : O ? pe(y, A) : y, Xr = E.length - 1, Cr;
              Xr >= 0;
              Xr--
            )
              (Cr = E[Xr]) && (I = (O ? Cr(y, A, I) : Cr(I)) || I);
            return O && I && Se(y, A, I), I;
          },
          Ve = ((E) => (
            (E[(E.None = 0)] = "None"),
            (E[(E.Generic = 1)] = "Generic"),
            (E[(E.Expired = 2)] = "Expired"),
            (E[(E.Network = 3)] = "Network"),
            (E[(E.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (E[(E.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (E[(E.AnonymousLogin = 6)] = "AnonymousLogin"),
            E
          ))(Ve || {});
        function er(E) {
          const {
            shared_secret: y,
            identity_secret: A,
            secret_1: O,
            status: I,
            uri: Xr,
            server_time: Cr,
            ...Tr
          } = E;
          return {
            shared_secret: le.fromByteArray(y),
            identity_secret: le.fromByteArray(A),
            secret_1: le.fromByteArray(O),
            ...Tr,
          };
        }
        var Zr = ((E) => (
          (E[(E.k_Success = 0)] = "k_Success"),
          (E[(E.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (E[(E.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          E
        ))(Zr || {});
        class R {
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
          constructor(y, A, O, I) {
            (0, d.Gn)(this),
              (this.m_transport = y),
              (this.m_onCompleteCallback = A),
              (this.m_onDeviceDetailsCallback = O),
              (this.m_onShowAgreement = I);
          }
          StartPolling(y = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              y
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
              const y = m.w.Init(ee.Ev);
              y.SetEMsg(xe.Kec),
                y.Body().set_client_id(this.m_strClientID),
                y.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  y.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const A = await ee.kX.PollAuthSessionStatus(this.m_transport, y),
                O = A.GetEResult();
              if (O !== H.R) {
                if (O === H.zi) {
                  const ge = A.Hdr().transport_error();
                  if (
                    ((0, xr.ZI)(
                      `Failed to poll auth session. Result ${O}. Transport Error: ${ge}`,
                    ),
                    ge === ye.MhR || ge === ye.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), H.R
                    );
                }
                if (O === H.Qo || O === H.ob) this.m_eFailureState = 2;
                else if (O === H.h_) this.m_eFailureState = 5;
                else if (O == H.oH) {
                  const ge = A.Body().agreement_session_url();
                  if (
                    ((0, t.wT)(
                      !!ge,
                      "Missing agreement session URL for result",
                      O,
                    ),
                    this.m_onShowAgreement)
                  )
                    this.m_onShowAgreement(ge);
                  else {
                    const Ue = document.location.href;
                    window.location.href = `${ge}&redir=${encodeURIComponent(Ue)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), O;
                } else
                  (0, xr.ZI)(`Failed to poll auth session. Result: ${O}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), O;
              }
              const {
                new_challenge_url: I,
                new_client_id: Xr,
                refresh_token: Cr,
                access_token: Tr,
                account_name: Ke,
                had_remote_interaction: jr,
                new_guard_data: br,
              } = A.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!jr),
                Cr
                  ? ((0, t.wT)(
                      !!Tr && !!Ke,
                      "Missing access token or account name with refresh token",
                    ),
                    this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: Cr,
                      strAccessToken: Tr,
                      strAccountName: Ke,
                      strNewGuardData: br,
                    }),
                    O)
                  : (I && (this.m_strChallengeURL = I),
                    Xr && (this.m_strClientID = Xr),
                    this.StartPolling(!1),
                    O)
              );
            } catch (y) {
              return (
                (0, xr.ZI)(`Failed to poll auth session. ${y}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                H.zi
              );
            }
          }
          SetTokenToRevoke(y) {
            this.m_strTokenToRevoke = y;
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
            const y = await this.m_onDeviceDetailsCallback();
            return ee.tS.fromObject(y);
          }
        }
        wr([d.sH], R.prototype, "m_strChallengeURL", 2),
          wr([d.sH], R.prototype, "m_bRemoteInteraction", 2),
          wr([d.sH], R.prototype, "m_eFailureState", 2),
          wr([d.sH], R.prototype, "m_strExtendedErrorMessage", 2),
          wr([gr.o], R.prototype, "PollForUpdate", 1),
          wr([gr.o], R.prototype, "SetTokenToRevoke", 1);
        function te(E) {
          const y = new FormData();
          y.append("nonce", E), y.append("sessionid", (0, de.KC)());
          let A = new URL(document.location.href);
          const O = new URLSearchParams(A.search);
          O.has("need_password") &&
            (O.delete("need_password"), (A.search = O.toString())),
            y.append("redir", A.toString());
          const I = `${de.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return M()
            .post(I, y, { withCredentials: !0 })
            .then(
              (Xr) => {
                const { data: Cr } = Xr;
                if (
                  !Cr ||
                  !Cr.transfer_info ||
                  !Cr.steamID ||
                  !Array.isArray(Cr.transfer_info)
                )
                  return (
                    (0, xr.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const {
                  transfer_info: Tr,
                  steamID: Ke,
                  primary_domain: jr,
                } = Cr;
                return Promise.all(
                  Tr.map(({ url: br, params: ge }) =>
                    Hr(br, { ...ge, steamID: Ke }),
                  ),
                ).then(
                  (br) => ie(br, jr),
                  () => 2,
                );
              },
              () => (
                (0, xr.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function ie(E, y) {
          let A = 0;
          return (
            E.forEach((O) => {
              O.bSuccess ||
                (y && O.domain.toLowerCase() === y.toLowerCase()
                  ? (A = 1)
                  : A == 0 && (A = 2));
            }),
            A
          );
        }
        async function Hr(E, y) {
          const A = new URL(E);
          let O = !0;
          try {
            const I = new FormData();
            Object.keys(y).forEach((Cr) => I.append(Cr, y[Cr]));
            const Xr = await M().post(E, I, {
              withCredentials: !0,
              timeout: 1e4,
            });
            Xr.status !== 200
              ? ((0, xr.ZI)(
                  `Transfer login to ${A.host} failed with status code: ${Xr.status}`,
                ),
                (O = !1))
              : Xr.data.result !== H.R &&
                ((0, xr.ZI)(
                  `Transfer login to ${A.host} failed with result: ${Xr.data.result}`,
                ),
                (O = !1));
          } catch (I) {
            (0, xr.ZI)(`Transfer login to ${A.host} failed: "${I}"`), (O = !1);
          }
          return { bSuccess: O, domain: A.host };
        }
      },
      73011: (Me, we, S) => {
        "use strict";
        S.d(we, { P8: () => pe, ZI: () => xe, tG: () => gr, tH: () => ye });
        var d = S(41735),
          me = S.n(d),
          M = S(57589);
        const m = S(80407).A,
          t = new M.wd("Login"),
          gr = t.Info,
          H = t.Debug,
          ye = t.Warning,
          xe = t.Error;
        function de(er, Zr) {
          return er.endsWith("/") || (er += "/"), `${er}login/${Zr}/`;
        }
        function ee() {
          let er = new FormData();
          return er.append("donotcache", new Date().getTime().toString()), er;
        }
        async function le(er) {
          let Zr = ee(),
            R = de(er, "refreshcaptcha"),
            te = "";
          try {
            let ie = { "Content-Type": "multipart/form-data" },
              Hr = await axios.post(R, Zr, { headers: ie });
            if (Hr.status != 200) return !1;
            te = Hr.data.gid;
          } catch {
            return !1;
          }
          return te;
        }
        function xr(er, Zr) {
          return de(er, "rendercaptcha") + `?gid=${Zr}`;
        }
        async function Se(er, Zr) {
          let R = ee();
          R.append("username", Zr);
          let te = de(er, "getrsakey"),
            ie;
          try {
            let Hr = { "Content-Type": "multipart/form-data" },
              E = await axios.post(te, R, { headers: Hr });
            if (E.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(E.status), null
              );
            let y = E.data;
            if (
              !y ||
              !y.success ||
              !y.publickey_mod ||
              !y.publickey_exp ||
              !y.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(y), null;
            ie = y;
          } catch (Hr) {
            return console.log("GetRSAKey exception: "), console.log(Hr), null;
          }
          return ie;
        }
        function pe(er, Zr) {
          let R = m.getPublicKey(Zr.publickey_mod, Zr.publickey_exp),
            te = m.encrypt(er, R);
          return te === !1 ? null : te;
        }
        async function wr(er, Zr, R, te) {
          const ie = pe(R.strPassword, te);
          if (!ie) return null;
          let Hr = ee();
          Hr.append("password", ie),
            Hr.append("username", R.strUserName),
            Hr.append("twofactorcode", R.strTwoFactorCode || ""),
            Hr.append("emailauth", R.strEmailAuthCode || ""),
            Hr.append("loginfriendlyname", ""),
            Hr.append("captchagid", R.gidCaptcha || ""),
            Hr.append("captcha_text", R.strCaptchaText || ""),
            Hr.append("emailsteamid", R.emailSteamID || ""),
            Hr.append("rsatimestamp", te.timestamp),
            Hr.append("remember_login", R.bRememberLogin ? "true" : "false");
          let E = {};
          Zr &&
            (Hr.append("oauth_client_id", Zr),
            Hr.append("mobile_chat_client", "true"));
          let y = de(er, "dologin"),
            A;
          try {
            E.headers = { "Content-Type": "multipart/form-data" };
            let O = await axios.post(y, Hr, E);
            if (O.status != 200) return null;
            let I = O.data;
            if (!I) return null;
            I.oauth && (I.oauth = JSON.parse(I.oauth)), (A = I);
          } catch {
            return null;
          }
          return A;
        }
        async function Ve(er, Zr, R) {
          if (
            ((R = Object.assign({}, R)),
            R.strUserName &&
              (R.strUserName = R.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !R.strPassword ||
              R.strPassword.match(/[^\x00-\x7F]/) ||
              !R.strUserName)
          )
            return null;
          let te = await Se(er, R.strUserName);
          return te
            ? await wr(
                er,
                Zr,
                {
                  ...R,
                  strUserName: R.strUserName,
                  strPassword: R.strPassword,
                },
                te,
              )
            : (console.error(`Failed to get RSA key from ${er}`), null);
        }
      },
      42780: (Me, we, S) => {
        "use strict";
        S.d(we, { YN: () => ze, Fn: () => kr, Mk: () => Lt, kt: () => Mt });
        var d = S(7850),
          me = S(32093),
          M = S(99412),
          m = S(72604),
          t = S(41735),
          gr = S.n(t),
          H = S(90626),
          ye = S(92757);
        const xe =
          S.p +
          "images/applications/appmgmt/login_mobile_auth.png?v=valveisgoodatcaching";
        var de = S(71568),
          ee = S(87883),
          le = S(25792),
          xr = S(179),
          Se = S(24660),
          pe = S(19298),
          wr = S(36707),
          Ve = S(9843),
          er = S.n(Ve);
        function Zr(f) {
          const {
            length: e,
            value: l,
            onChange: b,
            onPaste: j,
            tone: z,
            autoFocus: o,
            disabled: w,
            loading: P,
            backupCode: D,
            allowCharacter: W,
          } = f;
          (0, H.useEffect)(() => {
            o && ae();
          }, []);
          const tr = (0, H.useRef)([]),
            re = () => b(tr.current.map((U) => U.value)),
            Rr = (U) => {
              const C = U.target.value;
              if (C && W && !W(C)) return;
              const dr = U.target.nextElementSibling;
              U.target.value && dr && dr.focus(), re();
            },
            Be = (U) => {
              tr.current.findIndex((C) => !!C.value) === -1
                ? tr.current[0]?.select()
                : U.target.select();
            },
            ae = () => {
              const U = tr.current.find((C) => !C.value);
              U ? U.focus() : tr.current[tr.current.length - 1].focus();
            },
            fe = (U) => {
              const C = U.target;
              if (U.key === "Backspace" || U.key === "Delete") {
                const dr =
                  U.key === "Backspace"
                    ? C.previousElementSibling
                    : C.nextElementSibling;
                C.value === "" &&
                  dr &&
                  ((dr.value = ""), dr.focus(), U.preventDefault(), re());
              } else if (
                U.key === "ArrowLeft" ||
                U.key === "ArrowRight" ||
                U.key === "ArrowUp" ||
                U.key === "ArrowDown"
              ) {
                const dr =
                  U.key === "ArrowLeft" || U.key === "ArrowUp"
                    ? C.previousElementSibling
                    : C.nextElementSibling;
                dr && (dr.focus(), U.preventDefault());
              }
            },
            rr = (U) => {
              const C = U.clipboardData.getData("Text");
              let dr = U.target,
                Ar = 0;
              for (; dr && Ar < C.length; )
                dr.focus(),
                  (dr.value = C.charAt(Ar)),
                  (dr = dr.nextElementSibling),
                  Ar++;
              re(), U.preventDefault(), j && j();
            },
            ne = [];
          for (let U = 0; U < e; U++)
            ne.push(
              (0, d.jsx)(
                Se.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (C) => {
                    tr.current[U] = C;
                  },
                  onChange: Rr,
                  onFocus: Be,
                  onClick: (C) => C.stopPropagation(),
                  onKeyDown: fe,
                  onPaste: rr,
                  value: l[U] ? l[U][0] : "",
                  autoComplete: "none",
                  autoFocus: U === 0 && o,
                  disabled: w || P,
                  className: er().Input,
                },
                U,
              ),
            );
          return (0, d.jsxs)(pe.Z, {
            className: (0, wr.A)(
              er().SegmentedCharacterInput,
              z === "danger" && er().Danger,
              w && er().Disabled,
              D && er().BackupCode,
            ),
            onClick: ae,
            children: [
              P &&
                (0, d.jsx)("div", {
                  className: er().Loading,
                  children: (0, d.jsx)(Mt, { size: "small" }),
                }),
              ne,
            ],
          });
        }
        var R = S(36118),
          te = S(54212),
          ie = S(85599),
          Hr = S(71421),
          E = S(71742),
          y = S(18210),
          A = S(54963),
          O = S(3166),
          I = S(87242),
          Xr = S(14947),
          Cr = S(94354),
          Tr = S(35038),
          Ke = S(65946),
          jr = S(73011),
          br = S(94276),
          ge = S(95039),
          Ue = S(77008),
          sr = S(80613),
          N = S.n(sr),
          c = S(75245);
        function mt(f) {
          return "unknown ETwoFactorUsageType ( " + f + " )";
        }
        function dt(f) {
          return "unknown ETwoFactorStatusFieldFlag ( " + f + " )";
        }
        class Qr extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qr.prototype.time || c.Sg(Qr.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    time: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                    usage_type: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                    confirmation_type: {
                      n: 3,
                      br: c.qM.readInt32,
                      bw: c.gp.writeInt32,
                    },
                    confirmation_action: {
                      n: 4,
                      br: c.qM.readInt32,
                      bw: c.gp.writeInt32,
                    },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = c.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(e = !1) {
            return Qr.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(Qr.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(Qr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new Qr();
            return Qr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(Qr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(Qr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UsageEvent";
          }
        }
        class vr extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vr.prototype.sender_time || c.Sg(vr.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    sender_time: {
                      n: 1,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = c.w0(vr.M())), vr.sm_mbf;
          }
          toObject(e = !1) {
            return vr.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(vr.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(vr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new vr();
            return vr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(vr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(vr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Request";
          }
        }
        class Gr extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Gr.prototype.server_time || c.Sg(Gr.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    server_time: {
                      n: 1,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    skew_tolerance_seconds: {
                      n: 2,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    large_time_jink: {
                      n: 3,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    probe_frequency_seconds: {
                      n: 4,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    adjusted_time_probe_frequency_seconds: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    hint_probe_frequency_seconds: {
                      n: 6,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    sync_timeout: {
                      n: 7,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    try_again_seconds: {
                      n: 8,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    max_attempts: {
                      n: 9,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = c.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(e = !1) {
            return Gr.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(Gr.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(Gr.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new Gr();
            return Gr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(Gr.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(Gr.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Response";
          }
        }
        class Z extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.steamid || c.Sg(Z.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    steamid: {
                      n: 1,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    include: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = c.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(Z.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new Z();
            return Z.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(Z.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(Z.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Request";
          }
        }
        class Y extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.state || c.Sg(Y.M()),
              sr.Message.initialize(this, e, 0, -1, [16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    state: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                    inactivation_reason: {
                      n: 2,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    authenticator_type: {
                      n: 3,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    authenticator_allowed: {
                      n: 4,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                    steamguard_scheme: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    token_gid: {
                      n: 6,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    email_validated: {
                      n: 7,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                    device_identifier: {
                      n: 8,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    time_created: {
                      n: 9,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    revocation_attempts_remaining: {
                      n: 10,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    classified_agent: {
                      n: 11,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    allow_external_authenticator: {
                      n: 12,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                    time_transferred: {
                      n: 13,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    version: {
                      n: 14,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    last_seen_auth_token_id: {
                      n: 15,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    usages: { n: 16, c: Qr, r: !0, q: !0 },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = c.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(Y.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new Y();
            return Y.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(Y.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(Y.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Response";
          }
        }
        class F extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.steamid || c.Sg(F.M()),
              sr.Message.initialize(this, e, 0, -1, [7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    steamid: {
                      n: 1,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    authenticator_time: {
                      n: 2,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    serial_number: {
                      n: 3,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    authenticator_type: {
                      n: 4,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    device_identifier: {
                      n: 5,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    http_headers: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: c.qM.readString,
                      bw: c.gp.writeRepeatedString,
                    },
                    version: {
                      n: 8,
                      d: 1,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = c.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(F.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new F();
            return F.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(F.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(F.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Request";
          }
        }
        class V extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.shared_secret || c.Sg(V.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    uri: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                    server_time: {
                      n: 5,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: c.qM.readBytes, bw: c.gp.writeBytes },
                    status: { n: 10, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                    phone_number_hint: {
                      n: 11,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    confirm_type: {
                      n: 12,
                      br: c.qM.readInt32,
                      bw: c.gp.writeInt32,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = c.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(V.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new V();
            return V.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(V.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(V.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Response";
          }
        }
        class K extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.steamid || c.Sg(K.M()),
              sr.Message.initialize(this, e, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    steamid: {
                      n: 1,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    authenticator_code: {
                      n: 2,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    authenticator_time: {
                      n: 3,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    activation_code: {
                      n: 4,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    http_headers: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: c.qM.readString,
                      bw: c.gp.writeRepeatedString,
                    },
                    validate_sms_code: {
                      n: 6,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = c.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(K.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new K();
            return K.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(K.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(K.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Request";
          }
        }
        class X extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.success || c.Sg(X.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    status: { n: 4, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = c.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(X.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new X();
            return X.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(X.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(X.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Response";
          }
        }
        class J extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.revocation_code || c.Sg(J.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    revocation_code: {
                      n: 2,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    revocation_reason: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    steamguard_scheme: {
                      n: 6,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    remove_all_steamguard_cookies: {
                      n: 7,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = c.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(J.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new J();
            return J.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(J.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(J.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Request";
          }
        }
        class T extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.success || c.Sg(T.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    revocation_attempts_remaining: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = c.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(T.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new T();
            return T.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(T.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(T.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Response";
          }
        }
        class lr extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return lr.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new lr();
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new lr();
            return lr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
          }
        }
        class Q extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.success || c.Sg(Q.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = c.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(Q.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new Q();
            return Q.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(Q.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(Q.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
          }
        }
        class $ extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.sms_code || c.Sg($.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    sms_code: {
                      n: 1,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    generate_new_token: {
                      n: 2,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                    version: {
                      n: 3,
                      d: 1,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = c.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT($.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new $();
            return $.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj($.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0($.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
          }
        }
        class G extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.shared_secret || c.Sg(G.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    uri: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                    server_time: {
                      n: 5,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: c.qM.readBytes, bw: c.gp.writeBytes },
                    status: { n: 10, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                    steamguard_scheme: {
                      n: 11,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    steamid: {
                      n: 12,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = c.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(G.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new G();
            return G.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(G.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(G.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
          }
        }
        class q extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.success || c.Sg(q.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                    replacement_token: { n: 2, c: G },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = c.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(q.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new q();
            return q.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(q.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(q.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
          }
        }
        class k extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.steamid || c.Sg(k.M()),
              sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    steamid: {
                      n: 1,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    version: {
                      n: 2,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    signature: {
                      n: 3,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = c.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, l) {
            return c.BT(k.M(), e, l);
          }
          static fromObject(e) {
            return c.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new k();
            return k.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return c.zj(k.MBF(), e, l);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {
            c.i0(k.M(), e, l);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Request";
          }
        }
        class or extends sr.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), sr.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return or.toObject(e, this);
          }
          static toObject(e, l) {
            return e ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(e) {
            return new or();
          }
          static deserializeBinary(e) {
            let l = new (N().BinaryReader)(e),
              b = new or();
            return or.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(e, l) {
            return e;
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, l) {}
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Response";
          }
        }
        var Sr;
        ((f) => {
          function e(D, W, tr) {
            return D.SendMsg(
              "TwoFactor.QueryTime#1",
              (0, Tr.I8)(vr, W, tr),
              Gr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          f.QueryTime = e;
          function l(D, W, tr) {
            return D.SendMsg(
              "TwoFactor.QueryStatus#1",
              (0, Tr.I8)(Z, W, tr),
              Y,
              { ePrivilege: 1 },
            );
          }
          f.QueryStatus = l;
          function b(D, W, tr) {
            return D.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, Tr.I8)(F, W, tr),
              V,
              { ePrivilege: 1 },
            );
          }
          f.AddAuthenticator = b;
          function j(D, W, tr) {
            return D.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, Tr.I8)(K, W, tr),
              X,
              { ePrivilege: 1 },
            );
          }
          f.FinalizeAddAuthenticator = j;
          function z(D, W, tr) {
            return D.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, Tr.I8)(k, W, tr),
              or,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          f.UpdateTokenVersion = z;
          function o(D, W, tr) {
            return D.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, Tr.I8)(J, W, tr),
              T,
              { ePrivilege: 9 },
            );
          }
          f.RemoveAuthenticator = o;
          function w(D, W, tr) {
            return D.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, Tr.I8)(lr, W, tr),
              Q,
              { ePrivilege: 9 },
            );
          }
          f.RemoveAuthenticatorViaChallengeStart = w;
          function P(D, W, tr) {
            return D.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, Tr.I8)($, W, tr),
              q,
              { ePrivilege: 9 },
            );
          }
          f.RemoveAuthenticatorViaChallengeContinue = P;
        })(Sr || (Sr = {}));
        var Oe = Object.defineProperty,
          Vr = Object.getOwnPropertyDescriptor,
          nr = (f, e, l, b) => {
            for (
              var j = b > 1 ? void 0 : b ? Vr(e, l) : e, z = f.length - 1, o;
              z >= 0;
              z--
            )
              (o = f[z]) && (j = (b ? o(e, l, j) : o(j)) || j);
            return b && j && Oe(e, l, j), j;
          };
        const he = 2,
          Br = 0,
          Wr = 1,
          hr = 2,
          fr = 3,
          yr = 4,
          mr = 5,
          Mr = 6,
          Ir = 7,
          Lr = 8,
          Ie = 9,
          ur = 10,
          se = 11,
          Er = 12,
          pr = 13,
          Pr = 14,
          Nr = 15,
          Dr = 16;
        class ar extends I.gf {
          m_eStatus = Br;
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
          constructor(e) {
            super(
              e.transport,
              (l) => this.onAuthComplete(l),
              e.onDeviceDetails,
              e.onShowAgreement,
            ),
              (0, Xr.Gn)(this),
              (this.m_onLoginComplete = e.onComplete),
              (this.m_onGetMachineAuth = e.onGetMachineAuth);
          }
          async Start(e, l, b) {
            if (this.m_eStatus !== Br && this.m_eStatus !== hr)
              return (
                (0, jr.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                m.Ze
              );
            const j = e.replace(/[^\x00-\x7F]/g, ""),
              z = l.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!j.length || !z.length) return m.nO;
            if (
              ((this.m_eStatus = Wr),
              (this.m_bUsingCodeOverride = !1),
              e == "anonymous")
            )
              return (
                this.SetFailureState(I.eF.AnonymousLogin, ir.EResult(m.FK)),
                m.FK
              );
            try {
              const o = await Kr(this.m_transport, j);
              if (!o)
                return (
                  (0, jr.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(I.eF.Network, ir.EResult(m.Sq)),
                  m.Sq
                );
              const w = (0, jr.P8)(z, o),
                P = Tr.w.Init(br.iP);
              P.SetEMsg(Cr.Kec),
                P.Body().set_account_name(j),
                P.Body().set_encrypted_password(w ?? void 0),
                P.Body().set_encryption_timestamp(o.timestamp),
                P.Body().set_remember_login(!!b),
                P.Body().set_persistence(b ? ge.nW : ge.fH),
                P.Body().set_website_id(O.TS.WEBSITE_ID);
              try {
                P.Body().set_device_details(await this.GetDeviceDetails());
              } catch (W) {
                (0, jr.ZI)("Failed to GetDeviceDetails"), (0, jr.ZI)(W);
              }
              if (
                (P.Body().set_language((0, M.sfN)(O.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const W = await this.m_onGetMachineAuth(j);
                W.eresult == m.R && P.Body().set_guard_data(W.data);
              }
              await this.m_transport.MakeReady();
              const D = await br.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                P,
              );
              return (
                D.DEBUG_LogToConsole(),
                (0, Xr.h5)(async () => {
                  const W = D.GetEResult(),
                    tr = D.Hdr().transport_error();
                  if (W !== m.R)
                    switch (W) {
                      case m.Um:
                        return (this.m_eStatus = hr), W;
                      case m.Sq:
                      case m.a_:
                        return (
                          this.SetFailureState(I.eF.Network, ir.EResult(m.Sq)),
                          W
                        );
                      case m.h_:
                        return (
                          this.SetFailureState(
                            I.eF.RateLimitExceeded,
                            ir.EResult(W),
                          ),
                          W
                        );
                      case m.oH:
                        const C = D.Body().agreement_session_url();
                        if (
                          ((0, E.wT)(
                            !!C,
                            "Missing agreement session URL for result",
                            W,
                          ),
                          this.m_onShowAgreement)
                        )
                          this.m_onShowAgreement(C);
                        else {
                          const dr = document.location.href;
                          window.location.href = `${C}&redir=${encodeURIComponent(dr)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = Br),
                          W
                        );
                      case m.uN:
                      default:
                        return (
                          (0, jr.ZI)(
                            `Failed to start auth session. Result: ${W} Transport: ${tr}`,
                          ),
                          this.SetFailureState(
                            I.eF.Generic,
                            ir.EResult(W),
                            D.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          W
                        );
                    }
                  this.m_strAccountName = e;
                  const {
                    client_id: re,
                    request_id: Rr,
                    interval: Be,
                    allowed_confirmations: ae = [],
                    steamid: fe,
                    weak_token: rr,
                  } = D.Body().toObject();
                  if (
                    ((0, E.wT)(
                      Be !== void 0 && !!re && !!fe,
                      "Missing poll interval, client ID, or steamid for result",
                      W,
                    ),
                    (this.m_msPollInterval = Be * 1e3),
                    (this.m_strClientID = re),
                    (this.m_rgRequestID = Rr),
                    (this.m_steamid = fe),
                    (this.m_strWeakAuthToken = rr ?? ""),
                    ae.find(({ confirmation_type: C }) => C === br.TY.ig))
                  ) {
                    const C = new FormData();
                    C.append("clientid", re), C.append("steamid", fe);
                    const dr = `${O.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await gr().post(dr, C, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == m.R
                      )
                        return (
                          (this.m_eStatus = yr), this.StartPolling(!0), m.R
                        );
                    } catch (Ar) {
                      if (
                        ((0, jr.tG)(
                          `checkdevice ajax to ${dr} failed: ${Ar.message}`,
                        ),
                        Ar instanceof t.AxiosError)
                      ) {
                        const Ne = Ar;
                        return Ne.response
                          ? (this.SetFailureState(
                              I.eF.Network,
                              ir.AjaxFailureWithCode(Ne.response.status),
                            ),
                            m.Sq)
                          : (this.SetFailureState(
                              I.eF.Network,
                              ir.AjaxFailureNoCode(),
                            ),
                            m.Sq);
                      }
                      return (
                        this.SetFailureState(I.eF.Network, ir.EResult(m.eH)),
                        m.eH
                      );
                    }
                  }
                  const ne = Jr(
                      ae.map(
                        ({ confirmation_type: C }) => (
                          (0, E.wT)(
                            C !== void 0,
                            "Missing confirmation type in allowed confirmations",
                          ),
                          C
                        ),
                      ),
                    ),
                    U = ae.find(({ confirmation_type: C }) => C === ne);
                  switch (
                    (U &&
                      U.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        U.associated_message),
                    ne)
                  ) {
                    case br.TY.WM:
                      return (this.m_eStatus = pr), this.StartPolling(), W;
                    case br.TY.Xs:
                      this.m_eStatus = fr;
                      break;
                    case br.TY.$Y:
                      (this.m_eStatus = yr), this.StartPolling(!1);
                      break;
                    case br.TY.bH:
                      (this.m_eStatus = mr), this.StartPolling(!1);
                      break;
                    case br.TY.x0:
                      (this.m_eStatus = Mr), this.StartPolling(!1);
                      break;
                  }
                  return W;
                })
              );
            } catch (o) {
              return (
                (0, jr.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(o)}`,
                ),
                (0, jr.tG)(o),
                this.SetFailureState(I.eF.Generic, ir.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                m.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = Dr);
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
          async SendSteamGuardCode(e, l = !0) {
            if (e.length == 0) {
              switch (this.m_eStatus) {
                case ur:
                  this.m_eStatus = fr;
                  break;
                case se:
                  this.m_eStatus = mr;
                  break;
                case mr:
                case fr:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(m.R);
            }
            try {
              await this.m_transport.MakeReady();
              const b = this.m_eStatus === fr || this.m_eStatus === ur,
                j = Tr.w.Init(br.Qc);
              j.SetEMsg(Cr.Kec),
                j.Body().set_client_id(this.m_strClientID),
                j.Body().set_steamid(this.m_steamid),
                j.Body().set_code(e),
                j.Body().set_code_type(b ? br.TY.Xs : br.TY.bH);
              const z = await br.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  j,
                ),
                o = z.GetEResult();
              if (o !== m.R) {
                if (!l)
                  return (
                    (0, jr.ZI)(
                      `Failed to automatically update session with local SG info. Result ${o}. Transport ${z.Hdr().transport_error()}`,
                    ),
                    o
                  );
                switch (o) {
                  case m.QR:
                  case m.b7:
                    return (this.m_eStatus = b ? ur : se), o;
                  case m.ob:
                    return (
                      this.SetFailureState(I.eF.Expired, ir.EResult(o)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      o
                    );
                  case m.h_:
                    return (
                      this.SetFailureState(
                        I.eF.RateLimitExceeded,
                        ir.EResult(o),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      o
                    );
                  case m.oH:
                    const w = z.Body().agreement_session_url();
                    if (
                      ((0, E.wT)(
                        !!w,
                        "Missing agreement session URL for result",
                        o,
                      ),
                      this.m_onShowAgreement)
                    )
                      this.m_onShowAgreement(w);
                    else {
                      const P = document.location.href;
                      window.location.href = `${w}&redir=${encodeURIComponent(P)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = Br),
                      o
                    );
                  default:
                    return (
                      (0, jr.ZI)(
                        `Failed to update auth session with SG code. Result: ${o}`,
                      ),
                      this.SetFailureState(I.eF.Generic, ir.EResult(o)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      o
                    );
                }
              }
              return (this.m_eStatus = pr), this.StartPolling(), o;
            } catch (b) {
              return (
                (0, jr.ZI)(`Failed to update auth session with SG code. ${b}`),
                this.SetFailureState(I.eF.Generic, ir.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                m.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case Mr:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = mr);
                return;
              case yr:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = fr);
                return;
              default:
                (0, jr.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = Ir;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new Ue.D(
              O.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const e = Tr.w.Init(lr),
                l = await Sr.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  e,
                );
              m.R != l.GetEResult()
                ? (l.DEBUG_LogToConsole(),
                  (0, jr.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    l.GetEResult(),
                  ),
                  this.SetFailureState(
                    I.eF.MoveAuthenticator,
                    ir.EResult(l.GetEResult()),
                  ))
                : (this.m_eStatus = Lr);
            } catch (e) {
              (0, jr.ZI)(
                "An unexpected error occured while moving an authenticator",
                e,
              ),
                this.SetFailureState(I.eF.MoveAuthenticator, ir.EResult(m.zi));
            }
          }
          async ResendMoveCode() {
            (0, E.wT)(
              !!this.m_weakAuthWebInterface,
              "Resending move code before StartMoveAuthenticator",
            );
            const e = Tr.w.Init(lr),
              l = await Sr.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                e,
              );
            m.R != l.GetEResult() &&
              (l.DEBUG_LogToConsole(),
              (0, jr.ZI)(
                "An unexpected error occured while adding an authenticator",
                l.GetEResult(),
              )),
              (this.m_eStatus = Lr);
          }
          async FinishMoveAuthenticator(e) {
            (0, E.wT)(
              !!this.m_weakAuthWebInterface,
              "Finishing authenticator move before StartMoveAuthenticator",
            );
            const l = Tr.w.Init($);
            l.Body().set_sms_code(e),
              l.Body().set_generate_new_token(!0),
              l.Body().set_version(he);
            const b = await Sr.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              l,
            );
            if (m.c3 == b.GetEResult()) this.m_eStatus = Er;
            else if (!b.Body().success())
              b.DEBUG_LogToConsole(),
                (0, jr.ZI)(
                  "Error when calling RemoveAuthenticatorViaChallengeContinue",
                  b.GetEResult(),
                ),
                this.SetFailureState(
                  I.eF.MoveAuthenticator,
                  ir.EResult(b.GetEResult()),
                );
            else {
              b.DEBUG_LogToConsole();
              const j = b.Body().replacement_token();
              (0, E.wT)(
                !!j,
                "Missing replacement token on successful authenticator move",
              ),
                (this.m_replacementAuthenticator = (0, I.FU)(j.toObject())),
                (this.m_eStatus = Ie),
                (this.m_bUsingCodeOverride = !1);
            }
          }
          FinishMoveRecovery() {
            this.m_eStatus = mr;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case mr:
              case se:
              case fr:
              case ur:
              case Mr:
              case yr:
              case Ir:
              case Lr:
              case Er:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case Mr:
              case yr:
                this.m_eStatus = Br;
                break;
              case mr:
              case se:
                this.m_eStatus = this.m_bUsingCodeOverride ? Mr : Br;
                break;
              case Ir:
              case Lr:
              case Er:
                this.m_eStatus = (this.m_bUsingCodeOverride, mr);
                break;
              case fr:
              case ur:
                this.m_eStatus = this.m_bUsingCodeOverride ? yr : Br;
                break;
              default:
                (0, jr.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(e, l, b = "") {
            (this.m_eStatus = Nr),
              (this.m_eFailureState = e),
              (this.m_strErrorReference = l),
              (this.m_strExtendedErrorMessage = b);
          }
          onAuthComplete = (e) => {
            this.m_eStatus = e.bSuccess ? Pr : Nr;
            let l;
            e.bSuccess
              ? ((0, E.wT)(
                  !!this.m_strAccountName && !!this.m_steamid,
                  "Missing account name or steamid on auth success",
                ),
                (l = {
                  ...e,
                  strAccountName: this.m_strAccountName,
                  steamid: this.m_steamid,
                }))
              : (l = { bSuccess: !1 }),
              this.m_onLoginComplete && this.m_onLoginComplete(l);
          };
          SetOnLoginComplete(e) {
            this.m_onLoginComplete = e;
          }
        }
        nr([Xr.sH], ar.prototype, "m_eStatus", 2),
          nr([Xr.sH], ar.prototype, "m_strErrorReference", 2),
          nr([A.oI], ar.prototype, "Start", 1),
          nr([A.oI], ar.prototype, "SendSteamGuardCode", 1),
          nr([A.oI], ar.prototype, "UseCodeOverride", 1),
          nr([A.oI], ar.prototype, "CantAccessCode", 1),
          nr([A.oI], ar.prototype, "StartMoveAuthenticator", 1),
          nr([A.oI], ar.prototype, "ResendMoveCode", 1),
          nr([A.oI], ar.prototype, "FinishMoveAuthenticator", 1),
          nr([A.oI], ar.prototype, "FinishMoveRecovery", 1),
          nr([A.oI], ar.prototype, "GoBack", 1),
          nr([Xr.XI], ar.prototype, "SetFailureState", 1),
          nr([A.oI], ar.prototype, "SetOnLoginComplete", 1);
        async function Kr(f, e) {
          const l = Tr.w.Init(br.qu);
          l.Body().set_account_name(e), l.SetEMsg(Cr.Kec);
          try {
            await f.MakeReady();
            const b = await br.kX.GetPasswordRSAPublicKey(f, l);
            if ((b.DEBUG_LogToConsole(), b.GetEResult() !== m.R))
              return (
                (0, jr.ZI)(
                  `Failed to get RSA key with EResult: ${b.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: j,
              publickey_mod: z,
              timestamp: o,
            } = b.Body().toObject();
            return !j || !z || !o
              ? ((0, jr.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: j, publickey_mod: z, timestamp: o })}`,
                ),
                null)
              : { publickey_exp: j, publickey_mod: z, timestamp: o };
          } catch (b) {
            return (
              (0, jr.ZI)(`Failed to get RSA key: ${JSON.stringify(b)}`), null
            );
          }
        }
        const ue = [
          br.TY.x0,
          br.TY.bH,
          br.TY.Xs,
          br.TY.WM,
          br.TY.oP,
          br.TY.$Y,
        ].reduce((f, e, l) => ((f[e] = l), f), {});
        function Jr(f) {
          let e = f[0] || br.TY.oP;
          return f.length > 1 && (e = f.sort((l, b) => ue[l] - ue[b])[0]), e;
        }
        function $r(f) {
          const [e, l] = (0, H.useState)(new ar(f));
          return (
            (0, H.useEffect)(() => {
              e?.SetOnLoginComplete(f.onComplete);
            }, [e, f.onComplete]),
            (0, Ke.q3)(() => ({
              strAccountName: e.GetAccountName(),
              steamid: e.GetSteamID(),
              eFailureState: e.GetFailureState(),
              strExtendedErrorMessage: e.GetExtendedErrorMessage(),
              strErrorReference: e.GetErrorReference(),
              strConfirmationAssociatedMessage:
                e.GetConfirmationAssociatedMessage(),
              eStatus: e.GetStatus(),
              bCanGoBack: e.BCanGoBack(),
              start: e.Start,
              addCode: e.SendSteamGuardCode,
              useCodeOverride: e.UseCodeOverride,
              cantAccessCode: e.CantAccessCode,
              startMoveAuthenticator: e.StartMoveAuthenticator,
              resendMoveCode: e.ResendMoveCode,
              finishMoveAuthenticator: e.FinishMoveAuthenticator,
              finishMoveRecovery: e.FinishMoveRecovery,
              replacementAuthenticator: e.GetReplacementAuthenticator(),
              reset: () => l(new ar(f)),
              goBack: e.GoBack,
              setTokenToRevoke: e.SetTokenToRevoke,
            }))
          );
        }
        function Ur(f) {
          return f ? 7 : 5;
        }
        function je(f, e) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(f) && f.length <= Ur(e);
        }
        function Fr(f, e) {
          return je(f, e) && f.length === Ur(e);
        }
        const ir = {
          EResult: (f) => `e${f}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (f) => `af-${f}`,
        };
        var Yr = Object.defineProperty,
          Xe = Object.getOwnPropertyDescriptor,
          Qe = (f, e, l, b) => {
            for (
              var j = b > 1 ? void 0 : b ? Xe(e, l) : e, z = f.length - 1, o;
              z >= 0;
              z--
            )
              (o = f[z]) && (j = (b ? o(e, l, j) : o(j)) || j);
            return b && j && Yr(e, l, j), j;
          };
        const Le = 0,
          L = 1,
          r = 2,
          a = 3,
          x = 4,
          $e = 5;
        class Ye extends I.gf {
          m_eStatus = Le;
          constructor(e) {
            super(
              e.transport,
              (l) => {
                (this.m_eStatus = l.bSuccess ? a : x), e.onComplete(l);
              },
              e.onDeviceDetails,
            ),
              (0, Xr.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== Le)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                m.zi
              );
            this.m_eStatus = L;
            try {
              await this.m_transport.MakeReady();
              const e = Tr.w.Init(br.R9);
              e.SetEMsg(Cr.Kec);
              try {
                e.Body().set_device_details(await this.GetDeviceDetails());
              } catch (D) {
                console.error("Failed to GetDeviceDetails"), console.log(D);
              }
              e.Body().set_website_id(O.TS.WEBSITE_ID);
              const l = await br.kX.BeginAuthSessionViaQR(this.m_transport, e),
                b = l.GetEResult(),
                j = l.Hdr().transport_error();
              if (b !== m.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${b} Transport: ${j}`,
                  ),
                  (this.m_eFailureState = I.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  b
                );
              const {
                client_id: z,
                challenge_url: o,
                interval: w,
                request_id: P,
              } = l.Body().toObject();
              return (
                (0, E.wT)(
                  w !== void 0,
                  "Missing poll interval for QR auth session",
                ),
                (this.m_strClientID = z),
                (this.m_strChallengeURL = o),
                (this.m_msPollInterval = w * 1e3),
                (this.m_rgRequestID = P),
                (this.m_eStatus = r),
                this.StartPolling(!1),
                b
              );
            } catch (e) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(e)}`,
                ),
                (this.m_eFailureState = I.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                m.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = $e);
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
        Qe([Xr.sH], Ye.prototype, "m_eStatus", 2);
        function _r(f) {
          const [e, l] = (0, H.useState)(new Ye(f));
          return (
            (0, H.useEffect)(
              () => (
                e.Start(),
                () => {
                  e.Stop();
                }
              ),
              [e],
            ),
            (0, Ke.q3)(() => ({
              strChallengeURL: e.GetChallengeURL(),
              strClientID: e.GetClientID(),
              eFailureState: e.GetFailureState(),
              eStatus: e.GetStatus(),
              bHadRemoteInteraction: e.BHadRemoteInteraction(),
              reset: () => l(new Ye(f)),
              setTokenToRevoke: e.SetTokenToRevoke,
            }))
          );
        }
        function ve(f) {
          switch (f) {
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
        async function ce() {
          const [f, e, l, b] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            SteamClient?.Auth?.GetLocalHostname?.() ?? "",
            SteamClient?.Auth?.GetMachineID?.() ?? void 0,
          ]);
          return {
            os_type: f,
            device_friendly_name: l,
            machine_id: b,
            platform_type: br.SS.w0,
            gaming_device_type: e.eGamingDeviceType,
          };
        }
        async function Ge() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: br.SS.tS,
          };
        }
        function Ce(f) {
          const {
              onSuccess: e,
              secureComputer: l = !0,
              isProbablySharedPC: b = !1,
            } = f,
            j = (0, H.useCallback)(
              (U) => {
                if (U.bSuccess) {
                  const {
                    strRefreshToken: C,
                    strAccessToken: dr,
                    strAccountName: Ar,
                    strNewGuardData: Ne,
                  } = U;
                  e({
                    strRefreshToken: C,
                    strAccessToken: dr,
                    strAccountName: Ar,
                    strNewGuardData: Ne,
                  });
                }
              },
              [e],
            ),
            z = $r({
              transport: f.transport,
              onComplete: j,
              onDeviceDetails: f.onDeviceDetails,
              onGetMachineAuth: f.onGetMachineAuth,
              onShowAgreement: f.onShowAgreement,
            }),
            [o, w] = (0, H.useState)(Le),
            P = "Login_RememberMeSetting",
            [D, W] = (0, H.useState)(
              f.refreshInfo?.account_name ?? f.defaultAccountName ?? "",
            ),
            [tr, re] = (0, H.useState)(""),
            [Rr, Be] = (0, H.useState)(
              l && !b && localStorage?.getItem(P) != "0",
            ),
            ae = !(z.eStatus === Br || z.eStatus === Wr || z.eStatus === hr),
            fe = () => (!D || !tr ? Promise.resolve(m.nO) : z.start(D, tr, Rr)),
            rr = () => {
              (0, jr.tG)(`Logging in offline with username ${D}`),
                SteamClient.User.SetLoginCredentials(D, tr, Rr),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, H.useEffect)(() => {
              f.refreshInfo?.login_token_id &&
                z.setTokenToRevoke(f.refreshInfo.login_token_id);
            }, [f.refreshInfo, z]),
            {
              password: z,
              onComplete: j,
              eQRStatus: o,
              onQRStatusChange: w,
              strAccountName: D,
              onAccountNameChange: W,
              strPassword: tr,
              onPasswordChange: re,
              bRememberMe: Rr,
              onRememberMeChange: (U) => {
                Be(U), localStorage?.setItem(P, U ? "1" : "0");
              },
              onPasswordSubmit: fe,
              bInPasswordFlow: ae,
              onTryOffline: rr,
            }
          );
        }
        function Re(f, e = "") {
          let l = { title: "", description: "" };
          switch (f) {
            case I.eF.None:
              return { title: "", description: "" };
            case I.eF.Expired:
              l = {
                title: (0, y.we)("#Login_Error_Expired_Title"),
                description: (0, y.we)("#Login_Error_Expired_Description"),
              };
              break;
            case I.eF.Network:
              l = {
                title: (0, y.we)("#Login_Error_Network_Title"),
                description: (0, y.we)("#Login_Error_Network_Description"),
              };
              break;
            case I.eF.MoveAuthenticator:
              l = {
                title: (0, y.we)("#Error_Generic"),
                description: (0, y.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case I.eF.RateLimitExceeded:
              l = {
                title: (0, y.we)("#Login_Error_RateLimit_Title"),
                description: (0, y.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case I.eF.AnonymousLogin:
              l = {
                title: (0, y.we)("#Login_Error_Anonymous_Title"),
                description: (0, y.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case I.eF.Generic:
            default:
              l = {
                title: (0, y.we)("#Error_Generic"),
                description: (0, y.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return e && (l.description = e), l;
        }
        var Ae = S(78412),
          v = S.n(Ae),
          _e = S(56589),
          zr = S.n(_e),
          _ = S(5804),
          Or = S.n(_),
          it = ((f) => (
            (f[(f.L = 1)] = "L"),
            (f[(f.M = 0)] = "M"),
            (f[(f.Q = 3)] = "Q"),
            (f[(f.H = 2)] = "H"),
            f
          ))(it || {});
        function ct(f, e, l) {
          const b = f.length,
            j = f[0].length,
            z = (b + 2) * j,
            o = new Uint8Array(40 + z);
          let w = 0;
          (o[w++] = 71),
            (o[w++] = 73),
            (o[w++] = 70),
            (o[w++] = 56),
            (o[w++] = 57),
            (o[w++] = 97),
            (o[w++] = b),
            (o[w++] = 0),
            (o[w++] = j),
            (o[w++] = 0),
            (0, E.wT)(
              e != "transparent" || l != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (o[w++] = 161),
            (o[w++] = 0),
            (o[w++] = 0),
            e == "transparent"
              ? ((o[w++] = 0), (o[w++] = 0), (o[w++] = 0))
              : ((o[w++] = e[0]), (o[w++] = e[1]), (o[w++] = e[2])),
            l == "transparent"
              ? ((o[w++] = 0), (o[w++] = 0), (o[w++] = 0))
              : ((o[w++] = l[0]), (o[w++] = l[1]), (o[w++] = l[2])),
            (o[w++] = 255),
            (o[w++] = 255),
            (o[w++] = 255),
            (o[w++] = 255),
            (o[w++] = 255),
            (o[w++] = 255),
            (e == "transparent" || l == "transparent") &&
              ((o[w++] = 33),
              (o[w++] = 249),
              (o[w++] = 4),
              (o[w++] = 1),
              (o[w++] = 0),
              (o[w++] = 0),
              (o[w++] = e == "transparent" ? 0 : 1),
              (o[w++] = 0)),
            (o[w++] = 44),
            (o[w++] = 0),
            (o[w++] = 0),
            (o[w++] = 0),
            (o[w++] = 0),
            (o[w++] = b),
            (o[w++] = 0),
            (o[w++] = j),
            (o[w++] = 0),
            (o[w++] = 0);
          const P = 7;
          o[w++] = P;
          for (let D = 0; D < f.length; D++) {
            (o[w++] = b + 1), (o[w++] = 2 ** P);
            for (let W = 0; W < f.length; W++) o[w++] = f[D][W] ? 0 : 1;
          }
          return (
            (o[w++] = 1), (o[w++] = 2 ** P + 1), (o[w++] = 0), (o[w++] = 59), o
          );
        }
        function rt(
          f,
          {
            activeBitColor: e = [33, 35, 40],
            inactiveBitColor: l = [255, 255, 255],
            borderWidth: b = 3,
          } = {},
          j = {},
        ) {
          const z = zr()(f, j).modules;
          if (!z) return null;
          let o = [];
          for (let w = 0; w < b; w++) o.push(Array(z.length + b * 2).fill(!1));
          for (let w = 0; w < z.length; w++)
            o.push([
              ...Array.from({ length: b }, () => !1),
              ...z[w],
              ...Array.from({ length: b }, () => !1),
            ]);
          for (let w = 0; w < b; w++) o.push(Array(z.length + b * 2).fill(!1));
          return ct(o, e, l);
        }
        function ft(f) {
          let {
            quality: e = 0,
            children: l,
            className: b,
            activeBitColor: j = [33, 35, 40],
            inactiveBitColor: z = [255, 255, 255],
            borderWidth: o = 3,
            typeNumber: w = 6,
          } = f;
          const P = gt(l, {
            typeNumber: w,
            errorCorrectLevel: e,
            activeBitColor: j,
            inactiveBitColor: z,
            borderWidth: o,
          });
          if (!P) return null;
          const D = new Blob([P], { type: "image/gif" }),
            W = URL.createObjectURL(D),
            tr = `rgb(${z[0]}, ${z[1]}, ${z[2]})`;
          return (0, d.jsx)("div", {
            className: (0, wr.A)(Or().QRBits, b),
            style: { "--qr-bright-color": tr },
            children: (0, d.jsx)("img", {
              className: Or().QRImg,
              src: W,
              alt: "",
            }),
          });
        }
        function gt(f, e) {
          const {
            typeNumber: l,
            errorCorrectLevel: b,
            activeBitColor: j,
            inactiveBitColor: z,
            borderWidth: o,
          } = e;
          return (0, H.useMemo)(
            () =>
              rt(
                f,
                { activeBitColor: j, inactiveBitColor: z, borderWidth: o },
                { typeNumber: l, errorCorrectLevel: b },
              ),
            [f, l, b, j, z, o],
          );
        }
        var bt = S(15557),
          be = S.n(bt),
          ot = S(58534);
        function i(f) {
          const {
              transport: e,
              onComplete: l,
              onStatusChange: b,
              platform: j,
              styling: z = "default",
              activeBitValue: o = 255,
            } = f,
            w = O.TS.IN_STEAMUI ? ce : Ge,
            {
              eStatus: P,
              strChallengeURL: D,
              strClientID: W,
              bHadRemoteInteraction: tr,
              reset: re,
              setTokenToRevoke: Rr,
            } = _r({ transport: e, onComplete: l, onDeviceDetails: w });
          (0, H.useEffect)(() => b && b(P), [b, P]);
          const Be = P === r && D ? D : O.TS.STORE_BASE_URL,
            ae = P === Le || P === L || tr,
            fe = P === x,
            rr = P === a,
            ne = rr
              ? (0, d.jsx)(u, {})
              : fe
                ? (0, d.jsx)(g, { reset: re })
                : ae
                  ? (0, d.jsx)(n, { size: "small" })
                  : null,
            U = ae || fe || rr;
          (0, H.useEffect)(() => {
            f.refreshInfo?.login_token_id && Rr(f.refreshInfo.login_token_id);
          }, [f.refreshInfo, Rr]);
          const C = O.TS.EUNIVERSE !== M.wLO,
            dr = `rgb(${o}, ${o}, ${o})`;
          return (0, d.jsx)("div", {
            className: be().Column,
            children: (0, d.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, d.jsx)(ft, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: C ? [o, 0, o] : [o, o, o],
                  quality: s(Be),
                  className: (0, wr.A)(
                    be().LoginQR,
                    z == "deck" && be().QRLoginDeck,
                    z == "vr" && be().QRLoginVR,
                    U && be().Blur,
                    C && be().NonPublic,
                  ),
                  children: Be,
                }),
                U &&
                  (0, d.jsx)("div", {
                    className: be().Overlay,
                    children: (0, d.jsx)("div", {
                      className: be().Box,
                      style: { "--qr-bright-color": dr },
                      children: ne,
                    }),
                  }),
              ],
            }),
          });
        }
        function s(f) {
          return f.length <= 90 ? it.Q : void 0;
        }
        function n(f) {
          const { size: e } = f;
          return (0, d.jsx)("div", {
            className: (0, wr.A)(
              be().Loading,
              e == "small" && be().Small,
              (e == "medium" || !e) && be().Medium,
              e == "large" && be().Large,
            ),
          });
        }
        function g(f) {
          return (0, d.jsx)(ot.$n, {
            onClick: f.reset,
            className: be().QRFailure,
            children: (0, d.jsx)(B, {}),
          });
        }
        function B(f) {
          return (0, d.jsxs)("svg", {
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
              (0, d.jsx)("path", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: "30",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
              }),
              (0, d.jsx)("polygon", {
                points: "147.639,108.361 245.755,10.166 245.834,108.361",
                fill: "#fff",
              }),
            ],
          });
        }
        function u() {
          return (0, d.jsx)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "45px", height: "45px" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: (0, d.jsx)("polyline", {
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
        var p = S(72609);
        const h = (0, H.createContext)(!1),
          cr = () => (0, H.useContext)(h);
        function kr() {
          return (0, d.jsx)("div", {
            className: v().Login,
            children: (0, d.jsx)(tt, {
              reset: () => window.location.reload(),
              failure: I.eF.Generic,
            }),
          });
        }
        function ze(f) {
          const e = ii(f.redirectUrl),
            l = (b) => {
              const { strRefreshToken: j } = b;
              (0, I.yp)(j).then(
                (z) => f.onComplete(z),
                () => f.onComplete(I.wI.k_PrimaryDomainFail),
              );
            };
          return e
            ? null
            : (0, d.jsx)(oe, {
                ...f,
                creationRedirectUrl: f.redirectUrl,
                onSuccess: l,
                embedded: f.theme === "modal",
              });
        }
        function oe(f) {
          const { embedded: e, children: l, ...b } = f;
          return (0, d.jsx)(le.tH, {
            children: (0, d.jsx)(h.Provider, {
              value: e ?? !1,
              children: (0, d.jsxs)("div", {
                className: v().Login,
                children: [(0, d.jsx)(ke, { ...b }), l],
              }),
            }),
          });
        }
        function Pe(f) {
          if ((0, ee.q)()) return null;
          const { variant: e } = f;
          return typeof e == "function"
            ? (0, d.jsx)(He, {
                onClick: e,
                children: (0, y.we)("#Login_Help_SignIn"),
              })
            : (0, d.jsx)(He, {
                href: `${O.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, y.we)("#Login_Help_SignIn"),
              });
        }
        function qe(f) {
          const { variant: e, redirectUrl: l } = f;
          if (typeof e == "function")
            return (0, d.jsx)(He, {
              inline: !0,
              onClick: e,
              children: (0, y.we)("#Login_CreateAccount"),
            });
          {
            const b = l ? `?redir=${encodeURIComponent(l)}` : "";
            switch (e ?? "normal") {
              default:
              case "normal":
                return (0, d.jsx)(He, {
                  inline: !0,
                  href: `${O.TS.STORE_BASE_URL}join/${b}`,
                  children: (0, y.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, d.jsx)(He, {
                  inline: !0,
                  href: `${O.TS.PARTNER_BASE_URL}${b}`,
                  children: (0, y.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function Ee(f) {
          const { launcherType: e, variant: l, redirectUrl: b } = f;
          if (e === M.A2g || l == "none") return null;
          const j = e !== void 0;
          let z;
          switch (l ?? "normal") {
            default:
            case "normal":
              z = "#Login_NoSteamAccount";
              break;
            case "partner":
              z = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, d.jsxs)("div", {
            className: (0, wr.A)(v().AccountCreation, j && v().InClient),
            children: [
              (0, d.jsx)("span", {
                className: v().AccountCreationPrompt,
                children: (0, y.we)(z),
              }),
              (0, d.jsx)(qe, { variant: l, redirectUrl: b }),
            ],
          });
        }
        function We() {
          const f =
            window?.location && (0, xr.f3)(window.location, "need_password");
          return f !== void 0 && f !== "false" && f !== "0";
        }
        function ke(f) {
          const {
              transport: e,
              onSuccess: l,
              platform: b,
              autoFocus: j,
              refreshInfo: z,
              renderSuccess: o = () => (0, d.jsx)(ti, {}),
              lastResult: w,
              joinLinkVariant: P,
              defaultAccountName: D,
              secureComputer: W = !0,
              isProbablySharedPC: tr = !1,
              onShowAgreement: re,
              creationRedirectUrl: Rr,
            } = f,
            Be = O.TS.IN_STEAMUI ? ce : Ge,
            ae = O.TS.IN_STEAMUI
              ? (Ar) => SteamClient.Auth.GetSteamGuardData(Ar)
              : null,
            fe = We(),
            rr = Ce({
              transport: e,
              platform: b,
              onSuccess: l,
              refreshInfo: z,
              onDeviceDetails: Be,
              onGetMachineAuth: ae,
              defaultAccountName: D,
              secureComputer: W,
              isProbablySharedPC: tr,
              onShowAgreement: re,
            }),
            ne = cr(),
            U = (0, H.useId)();
          if (w != null && w != m.R)
            return (0, d.jsx)("div", {
              className: v().Login,
              children: (0, d.jsx)(tt, {
                reset: () => window.location.reload(),
                failure: I.eF.Generic,
                errorReference: w.toString(),
                extendedErrorMessage: rr.password.strExtendedErrorMessage,
              }),
            });
          const C = !(0, O.Y2)();
          if (!rr.bInPasswordFlow) {
            const Ar = (0, d.jsxs)("div", {
              className: (0, wr.A)(v().SideBySide, ne && v().Embedded),
              children: [
                (0, d.jsx)(Ot, {
                  strAccountName: rr.strAccountName,
                  onAccountNameChange: rr.onAccountNameChange,
                  strPassword: rr.strPassword,
                  onPasswordChange: rr.onPasswordChange,
                  bRememberMe: rr.bRememberMe,
                  onRememberMeChange: rr.onRememberMeChange,
                  onSubmit: rr.onPasswordSubmit,
                  status: rr.password.eStatus,
                  autoFocus: j,
                  secureComputer: W,
                  refreshInfo: f.refreshInfo,
                }),
                C &&
                  (0, d.jsx)(It, {
                    transport: e,
                    onQRStatusChange: rr.onQRStatusChange,
                    onComplete: rr.onComplete,
                    platform: b,
                    refreshInfo: z,
                  }),
              ],
            });
            if (ne) {
              const Je = O.TS.IN_STEAMUI,
                Ze = Je ? O.TS.LAUNCHER_TYPE : void 0;
              return (0, d.jsxs)(Fe, {
                className: (0, wr.A)(v().EmbeddedRoot, Je && v().InClient),
                children: [
                  !Je && !1,
                  !f.refreshInfo &&
                    (0, d.jsx)(wt, {
                      realm: O.TS.EREALM,
                      launcherType: Ze,
                      className: v().HeaderLogo,
                      onBack: f.onBack,
                    }),
                  (0, d.jsx)(De, { refreshInfo: z }),
                  Ar,
                  (0, d.jsxs)("div", {
                    className: (0, wr.A)(
                      v().EmbeddedRootFooter,
                      Je && v().InClient,
                    ),
                    children: [
                      (0, d.jsx)(Pe, { variant: f.helpLinkVariant }),
                      (0, d.jsx)(Ee, {
                        launcherType: Ze,
                        variant: P,
                        redirectUrl: Rr,
                      }),
                    ],
                  }),
                ],
              });
            }
            const Ne = (0, d.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, d.jsx)("h2", {
                  className: v().PrimaryHeader,
                  id: U,
                  children: f.refreshInfo
                    ? (0, y.we)("#Login_RefreshSignIn")
                    : (0, y.we)("#Login_SignInTitle"),
                }),
                (0, d.jsx)(De, { refreshInfo: f.refreshInfo }),
              ],
            });
            return (0, d.jsxs)(Te, {
              title: Ne,
              titleId: U,
              children: [fe && (0, d.jsx)(et, {}), Ar],
            });
          }
          const dr = rr.password.eStatus;
          switch (dr) {
            case pr:
              return f.renderLoading
                ? (0, d.jsx)(d.Fragment, { children: f.renderLoading() })
                : (0, d.jsx)(Jt, {});
            case mr:
            case se:
            case fr:
            case ur:
              (0, E.wT)(
                !!rr.password.strAccountName,
                "Missing account name in login session for status",
                dr,
              );
              const Ar = dr === mr || dr === se;
              return (0, d.jsx)(Xt, {
                type: Ar ? "mobile" : "email",
                onSubmitCode: rr.password.addCode,
                status: dr,
                associatedLabel: rr.password.strConfirmationAssociatedMessage,
                accountName: rr.password.strAccountName,
                onBack: rr.password.goBack,
                onCodeHelp: f.onCodeHelp,
              });
            case Mr:
            case yr:
              (0, E.wT)(
                !!rr.password.strAccountName,
                "Missing account name in login session for status",
                dr,
              );
              const Ne = dr === Mr;
              return (0, d.jsx)(Ct, {
                type: Ne ? "mobile" : "email",
                accountName: rr.password.strAccountName,
                onUseCodeOverride: rr.password.useCodeOverride,
                onCodeHelp: f.onCodeHelp,
              });
            case Dr:
              return (0, d.jsx)(Yt, { reset: rr.password.reset });
            case Nr:
              return (0, d.jsx)(tt, {
                reset: rr.password.reset,
                failure: rr.password.eFailureState,
                onRequestOffline: rr.onTryOffline,
                errorReference: rr.password.strErrorReference,
                extendedErrorMessage: rr.password.strExtendedErrorMessage,
              });
            case Pr:
              return (0, d.jsx)(Te, { compact: !0, children: o() });
            default:
              return (
                (0, jr.ZI)(`Unknown Phase: ${dr}`),
                (0, d.jsx)(tt, {
                  reset: rr.password.reset,
                  failure: I.eF.Generic,
                  onRequestOffline: rr.onTryOffline,
                  errorReference: rr.password.strErrorReference,
                  extendedErrorMessage: rr.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function De(f) {
          if (!f.refreshInfo) return null;
          let e;
          switch (f.refreshInfo?.reason ?? m.zi) {
            case m.zi:
            case m.Vr:
            default:
              e = "#Login_RefreshReason_Generic";
              break;
            case m.KH:
              e = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case m.CF:
              e = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case m.Um:
              e = "#Login_RefreshReason_InvalidPassword";
              break;
            case m.fY:
              e = "#Login_RefreshReason_Revoked";
              break;
            case m.ob:
              e = "#Login_RefreshReason_Expired";
              break;
            case m.cr:
              e = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case m.uN:
              e = "#Login_RefreshReason_AccountDisabled";
              break;
            case m.sG:
              e = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case m.h_:
              e = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, d.jsxs)("div", {
            className: v().RefreshReasonContainer,
            children: [
              (0, d.jsx)("div", {
                className: v().RefreshTitle,
                children: (0, y.we)("#Login_RefreshSignIn"),
              }),
              (0, d.jsx)("div", {
                className: v().RefreshReason,
                children: (0, y.we)(e),
              }),
            ],
          });
        }
        function et() {
          return (0, d.jsx)("div", {
            className: v().ConfirmCredntialsNag,
            children: (0, y.we)("#Login_ConfirmCredentials"),
          });
        }
        function Ot(f) {
          const {
              onSubmit: e,
              status: l,
              autoFocus: b,
              refreshInfo: j,
              strAccountName: z,
              onAccountNameChange: o,
              strPassword: w,
              onPasswordChange: P,
              bRememberMe: D,
              onRememberMeChange: W,
              secureComputer: tr = !0,
            } = f,
            [re, Rr] = (0, H.useState)(!1),
            Be = cr(),
            ae = ai(),
            fe = () => {
              e().then(() => {
                ae() && Rr(!1);
              });
            },
            rr = l === Wr || l === pr,
            ne = l === hr && !re,
            U = ne
              ? (0, d.jsx)(Bt, {
                  children: (0, y.we)("#Login_CheckCredentials"),
                })
              : (0, d.jsx)(Bt, { children: "\xA0" }),
            C = b && !z,
            dr = b && !!z,
            Ar = !!f.refreshInfo,
            Ne = (0, H.useId)(),
            Je = (0, H.useId)();
          return (0, d.jsxs)(St, {
            onSubmit: fe,
            className: v().LoginForm,
            children: [
              (0, d.jsx)(ut, {
                tone: ne ? "danger" : void 0,
                label: (0, d.jsx)(st, {
                  highlight: !0,
                  inputId: Ne,
                  children: (0, y.we)("#Login_SignIn_WithAccountName"),
                }),
                value: z,
                onChange: (Ze) => {
                  Rr(!0), o(Ze);
                },
                autoFocus: C,
                disabled: Ar,
                id: Ne,
              }),
              (0, d.jsx)(ut, {
                tone: ne ? "danger" : void 0,
                label: (0, d.jsx)(st, {
                  inputId: Je,
                  children: (0, y.we)("#Login_Password"),
                }),
                value: w,
                onChange: (Ze) => {
                  Rr(!0), P(Ze);
                },
                type: "password",
                autoFocus: dr,
                id: Je,
              }),
              tr
                ? (0, d.jsx)(Hr.he, {
                    toolTipContent: (0, y.we)("#Login_RememberMe_Tooltip"),
                    direction: "bottom",
                    children: (0, d.jsx)(Pt, {
                      label: (0, y.we)("#Login_RememberMe_Short"),
                      value: D,
                      onChange: W,
                    }),
                  })
                : (0, d.jsx)("div", {
                    className: v().InsecureComputer,
                    children: (0, y.we)("#Login_InsecureComputer"),
                  }),
              (0, d.jsx)(Ft, { loading: rr, refreshLogin: Ar }),
              U,
              !Be &&
                (0, d.jsx)(He, {
                  href: `${O.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, y.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const ht = 700;
        function It(f) {
          const e = (0, de.R7)(),
            l = () => e.ownerWindow.screen.width < ht,
            [b, j] = (0, H.useState)(l());
          return (
            (0, A.l6)(e.ownerWindow, "resize", () => {
              j(l());
            }),
            (0, d.jsx)("div", {
              className: v().QRSection,
              children: b ? (0, d.jsx)(Wt, { ...f }) : (0, d.jsx)(Et, { ...f }),
            })
          );
        }
        function Lt(f) {
          const e =
            O.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(f.redirectURL);
          return (0, d.jsx)("div", {
            className: v().GuestLayout,
            children: (0, d.jsx)(Te, {
              compact: !0,
              children: (0, d.jsxs)("div", {
                className: v().GuestContainer,
                children: [
                  (0, d.jsx)("div", {
                    className: v().GuestText,
                    children: (0, y.oW)(
                      "#Login_Guest",
                      (0, d.jsx)("a", {
                        href: `${e}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, d.jsx)("a", {
                    className: v().GuestLink,
                    href: `${e}`,
                    children: (0, d.jsx)("button", {
                      className: v().GuestButton,
                      children: (0, y.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function Et(f) {
          return (0, d.jsx)(yt, { ...f });
        }
        function Wt(f) {
          const [e, l] = (0, H.useState)(!1);
          return e
            ? (0, d.jsx)(yt, { ...f, bShowHideButton: !0, setShowQR: l })
            : (0, d.jsx)(Nt, { setShowQR: l });
        }
        function Nt(f) {
          return (0, d.jsxs)("div", {
            className: v().MessagingContainer,
            children: [
              (0, d.jsx)("div", {
                className: v().MessagingTag,
                children: (0, y.we)("#Login_MobileFlow_New"),
              }),
              (0, d.jsx)("div", {
                className: v().MessagingSubtitle,
                children: (0, d.jsx)("div", {
                  className: v().MessagingSubtitle,
                  children: (0, y.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, d.jsx)("div", {
                className: v().MessagingButton,
                onClick: () => f.setShowQR(!0),
                children: (0, y.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, d.jsx)("a", {
                href: `${O.TS.STORE_BASE_URL}mobile`,
                className: v().MessagingLink,
                children: (0, y.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function yt(f) {
          const {
            onQRStatusChange: e,
            transport: l,
            onComplete: b,
            platform: j,
            refreshInfo: z,
            bShowHideButton: o = !1,
            setShowQR: w,
          } = f;
          return (0, d.jsxs)("div", {
            className: v().QRCodeContainer,
            children: [
              (0, d.jsx)(st, {
                highlight: !0,
                children: (0, y.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, d.jsx)("div", {
                className: v().QR,
                children: (0, d.jsx)(i, {
                  onStatusChange: e,
                  transport: l,
                  onComplete: b,
                  platform: j,
                  refreshInfo: z,
                }),
              }),
              o &&
                w &&
                (0, d.jsx)("div", {
                  className: v().QRHideLink,
                  onClick: () => w(!1),
                  children: (0, y.we)("#Button_Hide"),
                }),
              (0, d.jsx)("div", {
                className: v().UseMobileAppForQR,
                children: (0, y.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, d.jsx)(He, {
                    href: `${O.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function ni() {
          const f = "bShowLoginQR",
            [e, l] = useState(localStorage?.getItem(f) === "1"),
            b = useCallback((j) => {
              l(j),
                j ? localStorage?.setItem(f, "1") : localStorage?.removeItem(f);
            }, []);
          return [e, b];
        }
        function ut(f) {
          const { label: e, error: l, tone: b, autoFocus: j, id: z, ...o } = f,
            w = b ?? (l ? "danger" : void 0);
          return (0, d.jsxs)("div", {
            className: v().TextField,
            children: [
              typeof e == "string"
                ? (0, d.jsx)(st, { inputId: z, children: e })
                : e,
              l && (0, d.jsx)(Ht, { type: "error", children: l }),
              (0, d.jsx)(Ut, { autoFocus: j, tone: w, id: z, ...o }),
            ],
          });
        }
        function st(f) {
          const { children: e, inputId: l, highlight: b } = f;
          return (0, d.jsx)("label", {
            className: (0, wr.A)(v().FieldLabel, b && v().Highlight),
            htmlFor: l,
            children: e,
          });
        }
        function Ut(f) {
          const {
            value: e,
            onChange: l,
            type: b = "text",
            tone: j,
            className: z,
            autoFocus: o,
            disabled: w,
            id: P,
          } = f;
          return (0, d.jsx)("input", {
            value: e,
            type: b,
            autoFocus: o,
            onChange: (D) => l(D.target.value),
            className: (0, wr.A)(
              v().TextInput,
              j === "danger" && v().Danger,
              z,
            ),
            disabled: w,
            id: P,
          });
        }
        function Ht(f) {
          const { children: e, type: l } = f;
          return (0, d.jsx)("div", {
            className: (0, wr.A)(v().FieldHint, l === "error" && v().Error),
            children: e,
          });
        }
        function Pt(f) {
          const { label: e, onChange: l, value: b } = f;
          let j = () => {
            l && l(!b);
          };
          const z = (0, H.useId)();
          return (0, d.jsxs)("div", {
            className: v().CheckboxField,
            onClick: j,
            onKeyPress: (o) => {
              o.key == " " && (j(), o.preventDefault());
            },
            children: [
              (0, d.jsx)(Dt, { labelledBy: z, value: b }),
              (0, d.jsx)("label", {
                id: z,
                className: v().CheckboxFieldLabel,
                children: e,
              }),
            ],
          });
        }
        function Dt(f) {
          const { value: e, labelledBy: l } = f;
          return (0, d.jsx)("div", {
            tabIndex: 0,
            className: v().Checkbox,
            "aria-labelledby": l,
            role: "checkbox",
            "aria-checked": e,
            children:
              e &&
              (0, d.jsx)("div", {
                className: v().Check,
                children: (0, d.jsx)(R.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function Ft(f) {
          const { refreshLogin: e, ...l } = f;
          return e &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, d.jsx)(Vt, {})
            : (0, d.jsx)(Zt, { ...l });
        }
        function Zt(f) {
          return (0, d.jsx)("div", {
            className: v().SignInButtonContainer,
            children: (0, d.jsx)(Kt, {
              ...f,
              children: (0, y.we)("#Login_SignIn"),
            }),
          });
        }
        function Vt() {
          const f = () => SteamClient.User.StartShutdown(!0);
          return (0, d.jsxs)("div", {
            className: v().RefreshButtonContainer,
            children: [
              (0, d.jsx)("button", {
                className: v().SubmitButton,
                type: "submit",
                children: (0, y.we)("#Login_SignIn"),
              }),
              (0, d.jsx)("button", {
                className: v().RefreshQuitButton,
                onClick: f,
                children: (0, y.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function Kt(f) {
          return (0, d.jsx)(jt, { type: "submit", ...f });
        }
        function jt(f) {
          const {
              className: e,
              loading: l,
              disabled: b,
              children: j,
              ...z
            } = f,
            o = b || l;
          return (0, d.jsxs)("button", {
            className: (0, wr.A)(v().SubmitButton, l && v().Loading, e),
            disabled: o,
            ...z,
            children: [
              j,
              l &&
                (0, d.jsx)("div", {
                  className: v().LoadingContainer,
                  children: (0, d.jsx)(Mt, { size: "small" }),
                }),
            ],
          });
        }
        function Bt(f) {
          const e = f.children || "\xA0";
          return (0, d.jsx)("div", { className: v().FormError, children: e });
        }
        function Jt() {
          return (0, d.jsx)(Te, {
            compact: !0,
            children: (0, d.jsxs)(Fe, {
              alignItems: "center",
              className: (0, wr.A)(
                v().WaitingForTokenContainer,
                O.TS.IN_STEAMUI && v().Client,
              ),
              children: [
                (0, d.jsx)(ie.t, { size: "xlarge" }),
                (0, d.jsx)("div", {
                  className: (0, wr.A)(v().Description),
                  children: (0, y.we)(
                    O.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function Mt(f) {
          const { size: e } = f;
          return (0, d.jsx)("div", {
            className: (0, wr.A)(
              v().LoadingSpinner,
              e == "small" && v().Small,
              (e == "medium" || !e) && v().Medium,
              e == "large" && v().Large,
            ),
          });
        }
        function $t(f) {
          return (0, d.jsx)("div", {
            className: v().OfferOffline,
            children: (0, d.jsx)("button", {
              className: v().OfferOfflineButton,
              onClick: f.onRequestOffline,
              children: (0, y.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function tt(f) {
          const {
              reset: e,
              failure: l,
              onRequestOffline: b,
              errorReference: j,
              extendedErrorMessage: z,
            } = f,
            { title: o, description: w } = Re(l, z),
            P = O.TS.IN_STEAMUI && l == I.eF.Network;
          return (0, d.jsxs)(Te, {
            compact: !0,
            children: [
              (0, d.jsxs)(Fe, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, d.jsx)("div", {
                    className: v().FailureTitle,
                    children: o,
                  }),
                  (0, d.jsx)("div", {
                    className: v().FailureDescription,
                    children: w,
                  }),
                  P &&
                    (0, d.jsx)("div", {
                      className: v().FailureDescription,
                      children: (0, y.we)("#Login_GoOffline_Description"),
                    }),
                  (0, d.jsxs)(at, {
                    className: v().FailureButtons,
                    children: [
                      (0, d.jsx)(jt, {
                        className: v().TryAgainButton,
                        onClick: e,
                        children: (0, y.we)("#Button_Retry"),
                      }),
                      P && b && (0, d.jsx)($t, { onRequestOffline: b }),
                    ],
                  }),
                ],
              }),
              j &&
                (0, d.jsx)("div", {
                  className: v().MutedErrorReference,
                  children: (0, y.we)("#Login_Error_Reference", j),
                }),
            ],
          });
        }
        function Yt(f) {
          const { reset: e } = f;
          return (0, d.jsx)(tt, { reset: e, failure: I.eF.Generic });
        }
        function Xt(f) {
          const {
              type: e,
              onSubmitCode: l,
              status: b,
              accountName: j,
              associatedLabel: z,
              onBack: o,
            } = f,
            [w, P] = (0, H.useState)([]),
            [D, W] = (0, H.useState)(!1),
            [tr, re] = (0, H.useState)(!1),
            [Rr, Be] = (0, H.useState)(!1),
            [ae, fe] = (0, H.useState)(0),
            rr = e === "mobile",
            ne = w.join(""),
            U = Fr(ne, Rr),
            C = (lt) => {
              re(!0),
                l(lt).then(() => {
                  W(!1), re(!1);
                });
            },
            dr = (lt) => {
              D || W(!0), P(lt);
              const pt = lt.join("");
              Fr(pt, Rr) && C(pt);
            },
            Ar = () => {
              U && C(ne);
            },
            Ne = () => {
              Be(!Rr), P([]), l(""), fe(ae + 1);
            },
            Je = !D && (b === se || b === ur);
          let Ze, nt;
          return (
            Rr
              ? e === "mobile"
                ? ((nt = (0, d.jsx)(zt, {})), (Ze = "#Login_UseMobileCode"))
                : ((nt = (0, d.jsx)(zt, {})), (Ze = "#Login_UseEmailCode"))
              : ((nt =
                  e === "mobile"
                    ? (0, d.jsx)(Tt, {})
                    : (0, d.jsx)(Qt, { emailAddress: z })),
                (Ze = "#Login_UseBackupCode")),
            (0, d.jsx)(Te, {
              title: (0, d.jsx)(wt, {}),
              compact: !0,
              children: (0, d.jsx)(St, {
                onSubmit: Ar,
                children: (0, d.jsxs)(Fe, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, d.jsx)(xt, { type: e, accountName: j }),
                    (0, d.jsxs)("div", {
                      className: v().ConfirmationEntryContainer,
                      children: [
                        (0, d.jsxs)(Fe, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            Je &&
                              (0, d.jsx)(Bt, {
                                children: (0, y.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, d.jsx)(
                              Rt,
                              {
                                value: w,
                                onChange: dr,
                                tone: Je ? "danger" : void 0,
                                loading: tr,
                                backupCode: Rr,
                              },
                              ae,
                            ),
                          ],
                        }),
                        nt,
                      ],
                    }),
                    rr &&
                      (0, d.jsx)(He, {
                        onClick: Ne,
                        align: "center",
                        children: (0, y.we)(Ze),
                      }),
                    (0, d.jsx)(vt, { type: e, onCodeHelp: f.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function vt(f) {
          if ((0, ee.q)()) return null;
          let e, l;
          return (
            f.type === "mobile"
              ? ((e = `${O.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (l = (0, y.we)("#Login_Help_AccessMobileApp")))
              : ((e = `${O.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (l = (0, y.we)("#Login_Help_AccessEmail"))),
            f.onCodeHelp
              ? (0, d.jsx)(He, {
                  onClick: () => f.onCodeHelp(e),
                  align: "center",
                  children: l,
                })
              : (0, d.jsx)(He, { href: e, align: "center", children: l })
          );
        }
        function zt() {
          return (0, d.jsx)(at, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: v().EnterBackupCodeContainer,
            children: (0, d.jsxs)(Fe, {
              children: [
                (0, d.jsx)("div", {
                  className: v().EnterCodeFromMobile,
                  children: (0, y.we)("#Login_EnterBackupCode"),
                }),
                (0, d.jsx)("div", {
                  className: v().Label,
                  children: (0, y.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function Tt() {
          return (0, d.jsxs)(at, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: v().EnterCodeFromMobileContainer,
            children: [
              (0, d.jsx)("div", {
                className: v().EnterCodeFromMobile,
                children: (0, y.we)("#Login_EnterMobileCode"),
              }),
              (0, d.jsx)(qt, { className: v().AwaitingMobileConfIcon }),
            ],
          });
        }
        function Qt(f) {
          return (0, d.jsxs)(at, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: v().EnterCodeFromEmailContainer,
            children: [
              (0, d.jsx)(At, {
                align: "center",
                spacing: 6,
                children: (0, d.jsx)("div", {
                  className: v().EnterCodeFromEmail,
                  children: (0, y.PP)(
                    "#Login_EnterEmailCode",
                    (0, d.jsx)("span", {
                      className: v().EnterCodeEmailAddress,
                      children: f.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, d.jsx)(kt, { className: v().AwaitingEmailConfIcon }),
            ],
          });
        }
        function xt(f) {
          const { accountName: e, type: l } = f,
            b =
              l === "mobile"
                ? (0, y.we)("#Login_MobileProtectingAccount")
                : (0, y.we)("#Login_EmailProtectingAccount"),
            j = cr();
          return (0, d.jsxs)("div", {
            className: v().ProtectingAccount,
            children: [
              (0, d.jsx)("div", {
                className: v().Label,
                children: (0, y.PP)(
                  "#Login_ActiveAccountName",
                  (0, d.jsx)("span", {
                    className: v().AccountName,
                    children: e,
                  }),
                ),
              }),
              !j &&
                (0, d.jsx)("div", { className: v().Description, children: b }),
            ],
          });
        }
        function Gt() {
          return (0, d.jsx)(Fe, {
            alignItems: "center",
            children: (0, d.jsxs)("div", {
              className: v().ConfirmationContainer,
              children: [
                (0, d.jsx)("img", { src: (0, p.YJ)(xe) }),
                (0, d.jsx)("div", {
                  className: v().AwaitingMobileConfText,
                  children: (0, y.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function qt(f) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 33 49",
            fill: "currentColor",
            className: f.className,
            children: [
              (0, d.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z",
              }),
            ],
          });
        }
        function kt(f) {
          return (0, d.jsx)("svg", {
            viewBox: "0 0 58 56",
            fill: "none",
            className: f.className,
            children: (0, d.jsx)("path", {
              d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
              fill: "#1A99FF",
            }),
          });
        }
        function li(f) {
          const [e, l] = useSvgId();
          return jsxs("svg", {
            className: f.className,
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
                fill: f.phoneOutlineColor ?? "currentColor",
              }),
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z",
                fill: f.backgroundColor ?? "currentColor",
              }),
              jsx("g", {
                clipPath: l,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: f.qrCodeColor ?? "currentColor",
                }),
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: e,
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
        function mi(f) {
          return jsxs("svg", {
            className: f.className,
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
        function Ct(f) {
          const { type: e, accountName: l, onUseCodeOverride: b } = f,
            j = cr(),
            z = (0, d.jsx)(vt, { type: "mobile", onCodeHelp: f.onCodeHelp }),
            o = j
              ? (0, d.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, d.jsx)(He, {
                    align: "center",
                    onClick: b,
                    children: (0, y.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, d.jsx)("div", {
                  className: v().EnterCodeInsteadLink,
                  children: (0, d.jsx)(He, {
                    align: "center",
                    onClick: b,
                    children: (0, y.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, d.jsx)(Te, {
            title: (0, d.jsx)(wt, {}),
            compact: !0,
            children: (0, d.jsxs)(Fe, {
              gap: O.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, d.jsx)(xt, { type: e, accountName: l }),
                (0, d.jsx)(Gt, {}),
                (0, d.jsxs)("div", {
                  className: v().LinkContainer,
                  children: [o, z],
                }),
              ],
            }),
          });
        }
        function He(f) {
          const { children: e, align: l, inline: b } = f,
            j = (0, wr.A)(v().TextLink, l === "center" && v().TextAlignCenter);
          if ("href" in f) {
            const z = O.TS.IN_STEAMUI
              ? `steam://openurl_external/${f.href}`
              : f.href;
            return (0, d.jsx)("a", { className: j, href: z, children: e });
          } else {
            const z = b ? "span" : "div";
            return (0, d.jsx)(z, {
              className: j,
              onClick: f.onClick,
              children: e,
            });
          }
        }
        function St(f) {
          const { onSubmit: e, children: l, className: b } = f,
            j = (z) => (z.preventDefault(), e(), !1);
          return (0, d.jsx)("form", { onSubmit: j, className: b, children: l });
        }
        function di(f) {
          const { align: e, ...l } = f;
          return jsx("div", {
            className: classnames(styles.Text, e === "center" && styles.Center),
            ...l,
          });
        }
        function Fe(f) {
          const {
              alignItems: e,
              justifyContent: l,
              gap: b,
              className: j,
              ariaLabelledBy: z,
              children: o,
            } = f,
            w = (0, wr.A)(
              v().FlexCol,
              e === "center" && v().AlignItemsCenter,
              l === "center" && v().JustifyContentCenter,
              j,
            ),
            P = b ? { gap: typeof b == "number" ? `${b}px` : b } : void 0;
          return (0, d.jsx)("section", {
            className: w,
            style: P,
            "aria-labelledby": z,
            children: o,
          });
        }
        function at(f) {
          const {
              children: e,
              justifyContent: l,
              alignItems: b,
              className: j,
            } = f,
            z = {
              display: "flex",
              flexDirection: "row",
              justifyContent: l,
              alignItems: b,
            };
          return (0, d.jsx)("div", { style: z, className: j, children: e });
        }
        function Rt(f) {
          const { onChange: e, backupCode: l = !1, ...b } = f,
            j = (z) => {
              z = z.map((w) => w.toUpperCase());
              const o = z.join("").trim();
              je(o, l) && e(z);
            };
          return (0, d.jsx)(Zr, {
            length: Ur(l),
            backupCode: l,
            onChange: j,
            autoFocus: !0,
            ...b,
            allowCharacter: (z) => /\w/g.test(z),
          });
        }
        function At(f) {
          const { children: e, spacing: l = 0, align: b } = f;
          return (0, d.jsx)(Fe, {
            alignItems: b,
            children: H.Children.map(e, (j, z) =>
              j
                ? (0, d.jsx)("div", {
                    style: z > 0 ? { paddingTop: `${l}px` } : void 0,
                    children: j,
                  })
                : null,
            )?.filter(Boolean),
          });
        }
        function Te(f) {
          const { title: e, titleId: l, children: b, compact: j } = f,
            z = cr(),
            o = (0, H.useId)();
          return (0, d.jsxs)(Fe, {
            gap: O.TS.IN_STEAMUI ? 0 : 32,
            className: (0, wr.A)(
              v().StandardLayout,
              z && v().Embedded,
              j && v().Compact,
              O.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: l ?? o,
            children: [
              typeof e == "string"
                ? (0, d.jsx)("div", {
                    className: v().PrimaryHeader,
                    id: l ?? o,
                    children: e,
                  })
                : e,
              (0, d.jsx)("div", { className: v().FormContainer, children: b }),
            ],
          });
        }
        function wt(f) {
          const {
            realm: e = O.TS.EREALM,
            launcherType: l = O.TS.IN_STEAMUI ? O.TS.LAUNCHER_TYPE : void 0,
            className: b = v().HeaderLogo,
          } = f;
          return l === M.A2g
            ? (0, d.jsx)("div", { className: b })
            : (0, d.jsxs)("div", {
                className: v().LogoContainer,
                children: [
                  (0, d.jsx)(_t, { onBack: f.onBack }),
                  e !== me.TU.k_ESteamRealmChina
                    ? (0, d.jsx)(ri, { className: b })
                    : (0, d.jsx)(ei, { className: b }),
                  " ",
                ],
              });
        }
        function _t(f) {
          return f.onBack
            ? (0, d.jsx)("div", {
                className: v().BackArrowContainer,
                onClick: f.onBack,
                children: (0, d.jsx)(R.Q38, { className: v().BackArrow }),
              })
            : null;
        }
        function ri(f) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: f.className,
            children: [
              (0, d.jsx)("path", {
                d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
                fill: "#E0E1E6",
              }),
            ],
          });
        }
        function ei(f) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 232.73 46.07",
            xmlns: "http://www.w3.org/2000/svg",
            className: f.className,
            fill: "#E0E1E6",
            children: [
              (0, d.jsxs)("g", {
                stroke: "null",
                id: "svg_2",
                children: [
                  (0, d.jsx)("path", {
                    stroke: "null",
                    id: "svg_3",
                    d: "m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037",
                  }),
                  (0, d.jsx)("path", {
                    stroke: "null",
                    id: "svg_4",
                    d: "m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836",
                  }),
                  (0, d.jsx)("path", {
                    stroke: "null",
                    id: "svg_5",
                    d: "m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287",
                  }),
                ],
              }),
              (0, d.jsx)("path", {
                stroke: "null",
                id: "svg_6",
                d: "m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z",
              }),
              (0, d.jsxs)("g", {
                id: "svg_7",
                children: [
                  (0, d.jsx)("path", {
                    id: "svg_8",
                    d: "m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z",
                  }),
                  (0, d.jsx)("path", {
                    id: "svg_9",
                    d: "m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z",
                  }),
                  (0, d.jsx)("path", {
                    id: "svg_10",
                    d: "m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z",
                  }),
                  (0, d.jsx)("path", {
                    id: "svg_11",
                    d: "m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z",
                  }),
                ],
              }),
              (0, d.jsxs)("g", {
                id: "svg_12",
                children: [
                  (0, d.jsx)("path", {
                    id: "svg_13",
                    d: "m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z",
                  }),
                  (0, d.jsx)("path", {
                    id: "svg_14",
                    d: "m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z",
                  }),
                ],
              }),
            ],
          });
        }
        function ti() {
          return (0, d.jsx)(Fe, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, d.jsx)(ie.t, {}),
          });
        }
        function ii(f) {
          const e = (0, H.useRef)(f);
          e.current = f;
          const [l, b] = (0, H.useState)(!0),
            j = (0, ye.zy)();
          return (
            (0, H.useEffect)(() => {
              if (new URLSearchParams(j.search).get("need_password")) {
                b(!1);
                return;
              }
              if (!e.current) {
                b(!1);
                return;
              }
              si(e.current)
                .then((o) => {
                  b(o);
                })
                .catch((o) => {
                  (0, jr.tH)("PerformRefresh exception", o), b(!1);
                });
            }, [e, j.search]),
            l
          );
        }
        async function si(f) {
          const e = new FormData();
          e.append("redir", f);
          const l = `${O.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            b = await gr().post(l, e, { timeout: 1e4, withCredentials: !0 });
          if (b.status !== 200 || !b?.data?.success) return !1;
          const { success: j, login_url: z, error: o, ...w } = b.data,
            P = new FormData();
          Object.entries(w).forEach(([tr, re]) => P.append(tr, re));
          const D = await gr().post(z, P),
            W = D.status === 200 && D.data.result === m.R;
          return W && window.location.assign(f), W;
        }
        function ai() {
          const f = (0, H.useRef)(!0);
          return (
            (0, H.useEffect)(
              () => () => {
                f.current = !1;
              },
              [f],
            ),
            (0, H.useCallback)(() => f.current, [f])
          );
        }
      },
      95039: (Me, we, S) => {
        "use strict";
        S.d(we, { fH: () => me, nW: () => M });
        const d = null,
          me = 0,
          M = 1;
      },
      94276: (Me, we, S) => {
        "use strict";
        S.d(we, {
          kX: () => Xe,
          iP: () => J,
          R9: () => K,
          tS: () => F,
          qu: () => Z,
          Ev: () => lr,
          Qc: () => Br,
          TY: () => d,
          SS: () => me,
        });
        var d = {};
        S.r(d),
          S.d(d, {
            bH: () => le,
            x0: () => xr,
            Xs: () => ee,
            $Y: () => Se,
            ig: () => pe,
            WM: () => de,
            oP: () => xe,
          });
        var me = {};
        S.r(me), S.d(me, { w0: () => er, tS: () => Zr });
        var M = S(80613),
          m = S.n(M),
          t = S(75245),
          gr = S(35038),
          H = S(95039),
          ye = S(47997);
        const xe = 0,
          de = 1,
          ee = 2,
          le = 3,
          xr = 4,
          Se = 5,
          pe = 6,
          wr = 7,
          Ve = 0,
          er = 1,
          Zr = 2,
          R = 3,
          te = 0,
          ie = 1,
          Hr = 2,
          E = 3,
          y = 4,
          A = 5,
          O = 6,
          I = 7;
        function Xr(L) {
          return "unknown ECaptchaAnnotation ( " + L + " )";
        }
        function Cr(L) {
          return "unknown EAuthSessionSecurityHistory ( " + L + " )";
        }
        function Tr(L) {
          return "unknown EAuthenticationType ( " + L + " )";
        }
        function Ke(L) {
          return "unknown EAuthSessionGuardType ( " + L + " )";
        }
        function jr(L) {
          return "unknown EAuthTokenPlatformType ( " + L + " )";
        }
        function br(L) {
          return "unknown EAuthTokenAppType ( " + L + " )";
        }
        function ge(L) {
          return "unknown ETokenRenewalType ( " + L + " )";
        }
        function Ue(L) {
          return "unknown EAuthTokenRevokeAction ( " + L + " )";
        }
        function sr(L) {
          return "unknown EAuthTokenState ( " + L + " )";
        }
        function N(L) {
          return "unknown ECaptchaUsage ( " + L + " )";
        }
        function c(L) {
          return "unknown ECaptchaType ( " + L + " )";
        }
        function mt(L) {
          return "unknown ECaptchaDifficulty ( " + L + " )";
        }
        function dt(L) {
          return "unknown ERiskLevel ( " + L + " )";
        }
        function Qr(L) {
          return "unknown ETokenRiskFactor ( " + L + " )";
        }
        function vr(L) {
          return "unknown EConfirmationState ( " + L + " )";
        }
        function Gr(L) {
          return "unknown EConfirmationRequestType ( " + L + " )";
        }
        class Z extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.account_name || t.Sg(Z.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    account_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Z.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Z();
            return Z.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request";
          }
        }
        class Y extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.publickey_mod || t.Sg(Y.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    publickey_mod: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    publickey_exp: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    timestamp: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Y.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Y();
            return Y.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response";
          }
        }
        class F extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.device_friendly_name || t.Sg(F.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    os_type: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    gaming_device_type: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_count: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    machine_id: {
                      n: 6,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    app_type: { n: 7, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = t.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(F.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new F();
            return F.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(F.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(F.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_DeviceDetails";
          }
        }
        class V extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.confirmation_type || t.Sg(V.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    confirmation_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    associated_message: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(V.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new V();
            return V.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(V.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(V.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AllowedConfirmation";
          }
        }
        class K extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.device_friendly_name || t.Sg(K.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    device_details: { n: 3, c: F },
                    website_id: {
                      n: 4,
                      d: "Unknown",
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(K.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new K();
            return K.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(K.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(K.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request";
          }
        }
        class X extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.client_id || t.Sg(X.M()),
              M.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    challenge_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    request_id: {
                      n: 3,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    interval: { n: 4, br: t.qM.readFloat, bw: t.gp.writeFloat },
                    allowed_confirmations: { n: 5, c: V, r: !0, q: !0 },
                    version: { n: 6, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(X.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new X();
            return X.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(X.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(X.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Response";
          }
        }
        class J extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.device_friendly_name || t.Sg(J.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    account_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    encrypted_password: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    encryption_timestamp: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    remember_login: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    platform_type: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    persistence: {
                      n: 7,
                      d: H.nW,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    website_id: {
                      n: 8,
                      d: "Unknown",
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    device_details: { n: 9, c: F },
                    guard_data: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    language: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    qos_level: {
                      n: 12,
                      d: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(J.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new J();
            return J.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(J.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(J.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request";
          }
        }
        class T extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.client_id || t.Sg(T.M()),
              M.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    interval: { n: 3, br: t.qM.readFloat, bw: t.gp.writeFloat },
                    allowed_confirmations: { n: 4, c: V, r: !0, q: !0 },
                    steamid: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    weak_token: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    extended_error_message: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(T.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new T();
            return T.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(T.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(T.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response";
          }
        }
        class lr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.client_id || t.Sg(lr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    token_to_revoke: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = t.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(lr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new lr();
            return lr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request";
          }
        }
        class Q extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.new_client_id || t.Sg(Q.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    new_client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    new_challenge_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    refresh_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    access_token: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    had_remote_interaction: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    account_name: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    new_guard_data: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Q.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Q();
            return Q.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response";
          }
        }
        class $ extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.client_id || t.Sg($.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT($.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new $();
            return $.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj($.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0($.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Request";
          }
        }
        class G extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.ip || t.Sg(G.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    ip: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    geoloc: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    city: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    state: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    country: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platform_type: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    device_friendly_name: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    version: { n: 8, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    login_history: {
                      n: 9,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    requestor_location_mismatch: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    high_usage_login: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    requested_persistence: {
                      n: 12,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    device_trust: {
                      n: 13,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_type: { n: 14, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(G.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new G();
            return G.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(G.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(G.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response";
          }
        }
        class q extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.client_id || t.Sg(q.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(q.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new q();
            return q.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Request";
          }
        }
        class k extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.location_confirmer || t.Sg(k.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    location_confirmer: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    location_requestor: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    location_other: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platform_type: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(k.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new k();
            return k.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(k.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(k.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Response";
          }
        }
        class or extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.client_id || t.Sg(or.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    results: { n: 2, c: Sr },
                    selected_action: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    did_confirm_login: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = t.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(or.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new or();
            return or.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification";
          }
        }
        class Sr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.platform || t.Sg(Sr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    platform: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    location: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    action: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = t.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Sr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Sr();
            return Sr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
          }
        }
        class Oe extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Oe.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Oe();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Oe();
            return Oe.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Request";
          }
        }
        class Vr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.client_ids || t.Sg(Vr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    client_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = t.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Vr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Vr();
            return Vr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Vr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Vr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response";
          }
        }
        class nr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.version || t.Sg(nr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    version: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    client_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    signature: {
                      n: 4,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    confirm: {
                      n: 5,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    persistence: {
                      n: 6,
                      d: H.nW,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = t.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(nr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new nr();
            return nr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
          }
        }
        class he extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return he.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new he();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new he();
            return he.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return he.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
          }
        }
        class Br extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.client_id || t.Sg(Br.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    code: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    code_type: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = t.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Br.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Br();
            return Br.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
          }
        }
        class Wr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.agreement_session_url || t.Sg(Wr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    agreement_session_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = t.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Wr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Wr();
            return Wr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
          }
        }
        class hr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.refresh_token || t.Sg(hr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    refresh_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    renewal_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = t.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(hr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new hr();
            return hr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Request";
          }
        }
        class fr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.access_token || t.Sg(fr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    access_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    refresh_token: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = t.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(fr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new fr();
            return fr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response";
          }
        }
        class yr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.include_revoked || t.Sg(yr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    include_revoked: {
                      n: 1,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = t.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(yr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new yr();
            return yr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Request";
          }
        }
        class mr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.refresh_tokens || t.Sg(mr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    refresh_tokens: { n: 1, c: Ir, r: !0, q: !0 },
                    requesting_token: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = t.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(mr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new mr();
            return mr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response";
          }
        }
        class Mr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.time || t.Sg(Mr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    ip: { n: 2, c: ye.kK },
                    locale: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    country: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    state: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    city: { n: 6, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = t.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Mr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Mr();
            return Mr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
          }
        }
        class Ir extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.token_id || t.Sg(Ir.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    logged_in: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    os_platform: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    auth_type: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    first_seen: { n: 9, c: Mr },
                    last_seen: { n: 10, c: Mr },
                    os_type: { n: 11, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    authentication_type: {
                      n: 12,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    effective_token_state: {
                      n: 13,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = t.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Ir.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Ir();
            return Ir.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
          }
        }
        class Lr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.token || t.Sg(Lr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    token: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    revoke_action: {
                      n: 2,
                      d: ie,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = t.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Lr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Lr();
            return Lr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Request";
          }
        }
        class Ie extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ie.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ie();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Ie();
            return Ie.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Response";
          }
        }
        class ur extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.token_id || t.Sg(ur.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    revoke_action: {
                      n: 3,
                      d: ie,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    signature: {
                      n: 4,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = t.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(ur.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new ur();
            return ur.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Request";
          }
        }
        class se extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return se.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new se();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new se();
            return se.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response";
          }
        }
        class Er extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.token_id || t.Sg(Er.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    token_state: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    owner_steamid: {
                      n: 6,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    os_platform: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    os_type: { n: 8, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    auth_type: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    first_seen: { n: 11, c: pr },
                    last_seen: { n: 12, c: pr },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = t.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Er.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Er();
            return Er.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription";
          }
        }
        class pr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.time || t.Sg(pr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    ip: { n: 2, c: ye.kK },
                    country: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    state: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    city: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = t.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(pr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new pr();
            return pr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(pr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(pr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent";
          }
        }
        class Pr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.action || t.Sg(Pr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    action: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    time: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    ip: { n: 3, c: ye.kK },
                    actor: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = t.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Pr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Pr();
            return Pr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Pr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Pr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenAudit";
          }
        }
        class Nr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.steamid || t.Sg(Nr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    include_revoked_tokens: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = t.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Nr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Nr();
            return Nr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
          }
        }
        class Dr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.refresh_tokens || t.Sg(Dr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    refresh_tokens: { n: 1, c: Er, r: !0, q: !0 },
                    last_token_reset: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = t.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Dr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Dr();
            return Dr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
          }
        }
        class ar extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.token_id || t.Sg(ar.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = t.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(ar.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new ar();
            return ar.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
          }
        }
        class Kr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.refresh_tokens || t.Sg(Kr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: { refresh_tokens: { n: 1, c: Er, r: !0, q: !0 } },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = t.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Kr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Kr();
            return Kr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Kr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Kr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
          }
        }
        class qr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.token_id || t.Sg(qr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = t.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(qr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new qr();
            return qr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(qr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(qr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Request";
          }
        }
        class ue extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ue.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ue();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new ue();
            return ue.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Response";
          }
        }
        class Jr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.token_id || t.Sg(Jr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = t.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Jr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Jr();
            return Jr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Request";
          }
        }
        class $r extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.history || t.Sg($r.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: { history: { n: 1, c: Pr, r: !0, q: !0 } },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = t.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT($r.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new $r();
            return $r.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj($r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0($r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response";
          }
        }
        class Ur extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.steamid || t.Sg(Ur.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    token_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = t.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Ur.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Ur();
            return Ur.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Request";
          }
        }
        class je extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return je.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new je();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new je();
            return je.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return je.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Response";
          }
        }
        class Fr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.appid || t.Sg(Fr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    minutes_remaining: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = t.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Fr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Fr();
            return Fr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_TimeRemaining";
          }
        }
        class ir extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.platform || t.Sg(ir.M()),
              M.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    platform: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = t.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new ir();
            return ir.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Request";
          }
        }
        class Yr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.entries || t.Sg(Yr.M()),
              M.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: { entries: { n: 2, c: Fr, r: !0, q: !0 } },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = t.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, a) {
            return t.BT(Yr.M(), r, a);
          }
          static fromObject(r) {
            return t.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              x = new Yr();
            return Yr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return t.zj(Yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            t.i0(Yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response";
          }
        }
        var Xe;
        ((L) => {
          function r(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.GetPasswordRSAPublicKey#1",
              (0, gr.I8)(Z, _, Or),
              Y,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          L.GetPasswordRSAPublicKey = r;
          function a(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, gr.I8)(K, _, Or),
              X,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          L.BeginAuthSessionViaQR = a;
          function x(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, gr.I8)(J, _, Or),
              T,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          L.BeginAuthSessionViaCredentials = x;
          function $e(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, gr.I8)(lr, _, Or),
              Q,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          L.PollAuthSessionStatus = $e;
          function Ye(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, gr.I8)($, _, Or),
              G,
              { ePrivilege: 1 },
            );
          }
          L.GetAuthSessionInfo = Ye;
          function _r(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, gr.I8)(q, _, Or),
              k,
              { ePrivilege: 1 },
            );
          }
          L.GetAuthSessionRiskInfo = _r;
          function ve(zr, _) {
            return zr.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, gr.I8)(or, _),
              { ePrivilege: 1 },
            );
          }
          L.NotifyRiskQuizResults = ve;
          function ce(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, gr.I8)(nr, _, Or),
              he,
              { ePrivilege: 1 },
            );
          }
          L.UpdateAuthSessionWithMobileConfirmation = ce;
          function Ge(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, gr.I8)(Br, _, Or),
              Wr,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          L.UpdateAuthSessionWithSteamGuardCode = Ge;
          function Ce(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, gr.I8)(hr, _, Or),
              fr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          L.GenerateAccessTokenForApp = Ce;
          function Re(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, gr.I8)(yr, _, Or),
              mr,
              { ePrivilege: 1 },
            );
          }
          L.EnumerateTokens = Re;
          function Ae(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, gr.I8)(Oe, _, Or),
              Vr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          L.GetAuthSessionsForAccount = Ae;
          function v(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.RevokeToken#1",
              (0, gr.I8)(Lr, _, Or),
              Ie,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          L.RevokeToken = v;
          function _e(zr, _, Or) {
            return zr.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, gr.I8)(ur, _, Or),
              se,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          L.RevokeRefreshToken = _e;
        })(Xe || (Xe = {}));
        var Qe;
        ((L) => {
          function r(_r, ve, ce) {
            return _r.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, gr.I8)(Nr, ve, ce),
              Dr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          L.QueryRefreshTokensByAccount = r;
          function a(_r, ve, ce) {
            return _r.SendMsg(
              "AuthenticationSupport.QueryRefreshTokenByID#1",
              (0, gr.I8)(ar, ve, ce),
              Kr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          L.QueryRefreshTokenByID = a;
          function x(_r, ve, ce) {
            return _r.SendMsg(
              "AuthenticationSupport.RevokeToken#1",
              (0, gr.I8)(qr, ve, ce),
              ue,
              { ePrivilege: 5 },
            );
          }
          L.RevokeToken = x;
          function $e(_r, ve, ce) {
            return _r.SendMsg(
              "AuthenticationSupport.GetTokenHistory#1",
              (0, gr.I8)(Jr, ve, ce),
              $r,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          L.GetTokenHistory = $e;
          function Ye(_r, ve, ce) {
            return _r.SendMsg(
              "AuthenticationSupport.MarkTokenCompromised#1",
              (0, gr.I8)(Ur, ve, ce),
              je,
              { ePrivilege: 5 },
            );
          }
          L.MarkTokenCompromised = Ye;
        })(Qe || (Qe = {}));
        var Le;
        ((L) => {
          function r(a, x, $e) {
            return a.SendMsg(
              "CloudGaming.GetTimeRemaining#1",
              (0, gr.I8)(ir, x, $e),
              Yr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          L.GetTimeRemaining = r;
        })(Le || (Le = {}));
      },
      78412: (Me) => {
        Me.exports = {
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
      15557: (Me) => {
        Me.exports = {
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
      5804: (Me) => {
        Me.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      9843: (Me) => {
        Me.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
      80407: (Me, we, S) => {
        "use strict";
        S.d(we, { A: () => ot });
        var d,
          me = 0xdeadbeefcafe,
          M = (me & 16777215) == 15715070;
        function m(i, s, n) {
          i != null &&
            (typeof i == "number"
              ? this.fromNumber(i, s, n)
              : s == null && typeof i != "string"
                ? this.fromString(i, 256)
                : this.fromString(i, s));
        }
        function t() {
          return new m(null);
        }
        function gr(i, s, n, g, B, u) {
          for (; --u >= 0; ) {
            var p = s * this[i++] + n[g] + B;
            (B = Math.floor(p / 67108864)), (n[g++] = p & 67108863);
          }
          return B;
        }
        function H(i, s, n, g, B, u) {
          for (var p = s & 32767, h = s >> 15; --u >= 0; ) {
            var cr = this[i] & 32767,
              kr = this[i++] >> 15,
              ze = h * cr + kr * p;
            (cr = p * cr + ((ze & 32767) << 15) + n[g] + (B & 1073741823)),
              (B = (cr >>> 30) + (ze >>> 15) + h * kr + (B >>> 30)),
              (n[g++] = cr & 1073741823);
          }
          return B;
        }
        function ye(i, s, n, g, B, u) {
          for (var p = s & 16383, h = s >> 14; --u >= 0; ) {
            var cr = this[i] & 16383,
              kr = this[i++] >> 14,
              ze = h * cr + kr * p;
            (cr = p * cr + ((ze & 16383) << 14) + n[g] + B),
              (B = (cr >> 28) + (ze >> 14) + h * kr),
              (n[g++] = cr & 268435455);
          }
          return B;
        }
        M && navigator.appName == "Microsoft Internet Explorer"
          ? ((m.prototype.am = H), (d = 30))
          : M && navigator.appName != "Netscape"
            ? ((m.prototype.am = gr), (d = 26))
            : ((m.prototype.am = ye), (d = 28)),
          (m.prototype.DB = d),
          (m.prototype.DM = (1 << d) - 1),
          (m.prototype.DV = 1 << d);
        var xe = 52;
        (m.prototype.FV = Math.pow(2, xe)),
          (m.prototype.F1 = xe - d),
          (m.prototype.F2 = 2 * d - xe);
        var de = "0123456789abcdefghijklmnopqrstuvwxyz",
          ee = new Array(),
          le,
          xr;
        for (le = 48, xr = 0; xr <= 9; ++xr) ee[le++] = xr;
        for (le = 97, xr = 10; xr < 36; ++xr) ee[le++] = xr;
        for (le = 65, xr = 10; xr < 36; ++xr) ee[le++] = xr;
        function Se(i) {
          return de.charAt(i);
        }
        function pe(i, s) {
          var n = ee[i.charCodeAt(s)];
          return n ?? -1;
        }
        function wr(i) {
          for (var s = this.t - 1; s >= 0; --s) i[s] = this[s];
          (i.t = this.t), (i.s = this.s);
        }
        function Ve(i) {
          (this.t = 1),
            (this.s = i < 0 ? -1 : 0),
            i > 0 ? (this[0] = i) : i < -1 ? (this[0] = i + DV) : (this.t = 0);
        }
        function er(i) {
          var s = t();
          return s.fromInt(i), s;
        }
        function Zr(i, s) {
          var n;
          if (s == 16) n = 4;
          else if (s == 8) n = 3;
          else if (s == 256) n = 8;
          else if (s == 2) n = 1;
          else if (s == 32) n = 5;
          else if (s == 4) n = 2;
          else {
            this.fromRadix(i, s);
            return;
          }
          (this.t = 0), (this.s = 0);
          for (var g = i.length, B = !1, u = 0; --g >= 0; ) {
            var p = n == 8 ? i[g] & 255 : pe(i, g);
            if (p < 0) {
              i.charAt(g) == "-" && (B = !0);
              continue;
            }
            (B = !1),
              u == 0
                ? (this[this.t++] = p)
                : u + n > this.DB
                  ? ((this[this.t - 1] |=
                      (p & ((1 << (this.DB - u)) - 1)) << u),
                    (this[this.t++] = p >> (this.DB - u)))
                  : (this[this.t - 1] |= p << u),
              (u += n),
              u >= this.DB && (u -= this.DB);
          }
          n == 8 &&
            (i[0] & 128) != 0 &&
            ((this.s = -1),
            u > 0 && (this[this.t - 1] |= ((1 << (this.DB - u)) - 1) << u)),
            this.clamp(),
            B && m.ZERO.subTo(this, this);
        }
        function R() {
          for (var i = this.s & this.DM; this.t > 0 && this[this.t - 1] == i; )
            --this.t;
        }
        function te(i) {
          if (this.s < 0) return "-" + this.negate().toString(i);
          var s;
          if (i == 16) s = 4;
          else if (i == 8) s = 3;
          else if (i == 2) s = 1;
          else if (i == 32) s = 5;
          else if (i == 4) s = 2;
          else return this.toRadix(i);
          var n = (1 << s) - 1,
            g,
            B = !1,
            u = "",
            p = this.t,
            h = this.DB - ((p * this.DB) % s);
          if (p-- > 0)
            for (
              h < this.DB && (g = this[p] >> h) > 0 && ((B = !0), (u = Se(g)));
              p >= 0;
            )
              h < s
                ? ((g = (this[p] & ((1 << h) - 1)) << (s - h)),
                  (g |= this[--p] >> (h += this.DB - s)))
                : ((g = (this[p] >> (h -= s)) & n),
                  h <= 0 && ((h += this.DB), --p)),
                g > 0 && (B = !0),
                B && (u += Se(g));
          return B ? u : "0";
        }
        function ie() {
          var i = t();
          return m.ZERO.subTo(this, i), i;
        }
        function Hr() {
          return this.s < 0 ? this.negate() : this;
        }
        function E(i) {
          var s = this.s - i.s;
          if (s != 0) return s;
          var n = this.t;
          if (((s = n - i.t), s != 0)) return s;
          for (; --n >= 0; ) if ((s = this[n] - i[n]) != 0) return s;
          return 0;
        }
        function y(i) {
          var s = 1,
            n;
          return (
            (n = i >>> 16) != 0 && ((i = n), (s += 16)),
            (n = i >> 8) != 0 && ((i = n), (s += 8)),
            (n = i >> 4) != 0 && ((i = n), (s += 4)),
            (n = i >> 2) != 0 && ((i = n), (s += 2)),
            (n = i >> 1) != 0 && ((i = n), (s += 1)),
            s
          );
        }
        function A() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + y(this[this.t - 1] ^ (this.s & this.DM));
        }
        function O(i, s) {
          var n;
          for (n = this.t - 1; n >= 0; --n) s[n + i] = this[n];
          for (n = i - 1; n >= 0; --n) s[n] = 0;
          (s.t = this.t + i), (s.s = this.s);
        }
        function I(i, s) {
          for (var n = i; n < this.t; ++n) s[n - i] = this[n];
          (s.t = Math.max(this.t - i, 0)), (s.s = this.s);
        }
        function Xr(i, s) {
          var n = i % this.DB,
            g = this.DB - n,
            B = (1 << g) - 1,
            u = Math.floor(i / this.DB),
            p = (this.s << n) & this.DM,
            h;
          for (h = this.t - 1; h >= 0; --h)
            (s[h + u + 1] = (this[h] >> g) | p), (p = (this[h] & B) << n);
          for (h = u - 1; h >= 0; --h) s[h] = 0;
          (s[u] = p), (s.t = this.t + u + 1), (s.s = this.s), s.clamp();
        }
        function Cr(i, s) {
          s.s = this.s;
          var n = Math.floor(i / this.DB);
          if (n >= this.t) {
            s.t = 0;
            return;
          }
          var g = i % this.DB,
            B = this.DB - g,
            u = (1 << g) - 1;
          s[0] = this[n] >> g;
          for (var p = n + 1; p < this.t; ++p)
            (s[p - n - 1] |= (this[p] & u) << B), (s[p - n] = this[p] >> g);
          g > 0 && (s[this.t - n - 1] |= (this.s & u) << B),
            (s.t = this.t - n),
            s.clamp();
        }
        function Tr(i, s) {
          for (var n = 0, g = 0, B = Math.min(i.t, this.t); n < B; )
            (g += this[n] - i[n]), (s[n++] = g & this.DM), (g >>= this.DB);
          if (i.t < this.t) {
            for (g -= i.s; n < this.t; )
              (g += this[n]), (s[n++] = g & this.DM), (g >>= this.DB);
            g += this.s;
          } else {
            for (g += this.s; n < i.t; )
              (g -= i[n]), (s[n++] = g & this.DM), (g >>= this.DB);
            g -= i.s;
          }
          (s.s = g < 0 ? -1 : 0),
            g < -1 ? (s[n++] = this.DV + g) : g > 0 && (s[n++] = g),
            (s.t = n),
            s.clamp();
        }
        function Ke(i, s) {
          var n = this.abs(),
            g = i.abs(),
            B = n.t;
          for (s.t = B + g.t; --B >= 0; ) s[B] = 0;
          for (B = 0; B < g.t; ++B) s[B + n.t] = n.am(0, g[B], s, B, 0, n.t);
          (s.s = 0), s.clamp(), this.s != i.s && m.ZERO.subTo(s, s);
        }
        function jr(i) {
          for (var s = this.abs(), n = (i.t = 2 * s.t); --n >= 0; ) i[n] = 0;
          for (n = 0; n < s.t - 1; ++n) {
            var g = s.am(n, s[n], i, 2 * n, 0, 1);
            (i[n + s.t] += s.am(
              n + 1,
              2 * s[n],
              i,
              2 * n + 1,
              g,
              s.t - n - 1,
            )) >= s.DV && ((i[n + s.t] -= s.DV), (i[n + s.t + 1] = 1));
          }
          i.t > 0 && (i[i.t - 1] += s.am(n, s[n], i, 2 * n, 0, 1)),
            (i.s = 0),
            i.clamp();
        }
        function br(i, s, n) {
          var g = i.abs();
          if (!(g.t <= 0)) {
            var B = this.abs();
            if (B.t < g.t) {
              s?.fromInt(0), n != null && this.copyTo(n);
              return;
            }
            n == null && (n = t());
            var u = t(),
              p = this.s,
              h = i.s,
              cr = this.DB - y(g[g.t - 1]);
            cr > 0
              ? (g.lShiftTo(cr, u), B.lShiftTo(cr, n))
              : (g.copyTo(u), B.copyTo(n));
            var kr = u.t,
              ze = u[kr - 1];
            if (ze != 0) {
              var oe =
                  ze * (1 << this.F1) + (kr > 1 ? u[kr - 2] >> this.F2 : 0),
                Pe = this.FV / oe,
                qe = (1 << this.F1) / oe,
                Ee = 1 << this.F2,
                We = n.t,
                ke = We - kr,
                De = s ?? t();
              for (
                u.dlShiftTo(ke, De),
                  n.compareTo(De) >= 0 && ((n[n.t++] = 1), n.subTo(De, n)),
                  m.ONE.dlShiftTo(kr, De),
                  De.subTo(u, u);
                u.t < kr;
              )
                u[u.t++] = 0;
              for (; --ke >= 0; ) {
                var et =
                  n[--We] == ze
                    ? this.DM
                    : Math.floor(n[We] * Pe + (n[We - 1] + Ee) * qe);
                if ((n[We] += u.am(0, et, n, ke, 0, kr)) < et)
                  for (u.dlShiftTo(ke, De), n.subTo(De, n); n[We] < --et; )
                    n.subTo(De, n);
              }
              s != null && (n.drShiftTo(kr, s), p != h && m.ZERO.subTo(s, s)),
                (n.t = kr),
                n.clamp(),
                cr > 0 && n.rShiftTo(cr, n),
                p < 0 && m.ZERO.subTo(n, n);
            }
          }
        }
        function ge(i) {
          var s = t();
          return (
            this.abs().divRemTo(i, null, s),
            this.s < 0 && s.compareTo(m.ZERO) > 0 && i.subTo(s, s),
            s
          );
        }
        function Ue(i) {
          this.m = i;
        }
        function sr(i) {
          return i.s < 0 || i.compareTo(this.m) >= 0 ? i.mod(this.m) : i;
        }
        function N(i) {
          return i;
        }
        function c(i) {
          i.divRemTo(this.m, null, i);
        }
        function mt(i, s, n) {
          i.multiplyTo(s, n), this.reduce(n);
        }
        function dt(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        (Ue.prototype.convert = sr),
          (Ue.prototype.revert = N),
          (Ue.prototype.reduce = c),
          (Ue.prototype.mulTo = mt),
          (Ue.prototype.sqrTo = dt);
        function Qr() {
          if (this.t < 1) return 0;
          var i = this[0];
          if ((i & 1) == 0) return 0;
          var s = i & 3;
          return (
            (s = (s * (2 - (i & 15) * s)) & 15),
            (s = (s * (2 - (i & 255) * s)) & 255),
            (s = (s * (2 - (((i & 65535) * s) & 65535))) & 65535),
            (s = (s * (2 - ((i * s) % this.DV))) % this.DV),
            s > 0 ? this.DV - s : -s
          );
        }
        function vr(i) {
          (this.m = i),
            (this.mp = i.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (i.DB - 15)) - 1),
            (this.mt2 = 2 * i.t);
        }
        function Gr(i) {
          var s = t();
          return (
            i.abs().dlShiftTo(this.m.t, s),
            s.divRemTo(this.m, null, s),
            i.s < 0 && s.compareTo(m.ZERO) > 0 && this.m.subTo(s, s),
            s
          );
        }
        function Z(i) {
          var s = t();
          return i.copyTo(s), this.reduce(s), s;
        }
        function Y(i) {
          for (; i.t <= this.mt2; ) i[i.t++] = 0;
          for (var s = 0; s < this.m.t; ++s) {
            var n = i[s] & 32767,
              g =
                (n * this.mpl +
                  (((n * this.mph + (i[s] >> 15) * this.mpl) & this.um) <<
                    15)) &
                i.DM;
            for (
              n = s + this.m.t, i[n] += this.m.am(0, g, i, s, 0, this.m.t);
              i[n] >= i.DV;
            )
              (i[n] -= i.DV), i[++n]++;
          }
          i.clamp(),
            i.drShiftTo(this.m.t, i),
            i.compareTo(this.m) >= 0 && i.subTo(this.m, i);
        }
        function F(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        function V(i, s, n) {
          i.multiplyTo(s, n), this.reduce(n);
        }
        (vr.prototype.convert = Gr),
          (vr.prototype.revert = Z),
          (vr.prototype.reduce = Y),
          (vr.prototype.mulTo = V),
          (vr.prototype.sqrTo = F);
        function K() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function X(i, s) {
          if (i > 4294967295 || i < 1) return m.ONE;
          var n = t(),
            g = t(),
            B = s.convert(this),
            u = y(i) - 1;
          for (B.copyTo(n); --u >= 0; )
            if ((s.sqrTo(n, g), (i & (1 << u)) > 0)) s.mulTo(g, B, n);
            else {
              var p = n;
              (n = g), (g = p);
            }
          return s.revert(n);
        }
        function J(i, s) {
          var n;
          return (
            i < 256 || s.isEven() ? (n = new Ue(s)) : (n = new vr(s)),
            this.exp(i, n)
          );
        }
        (m.prototype.copyTo = wr),
          (m.prototype.fromInt = Ve),
          (m.prototype.fromString = Zr),
          (m.prototype.clamp = R),
          (m.prototype.dlShiftTo = O),
          (m.prototype.drShiftTo = I),
          (m.prototype.lShiftTo = Xr),
          (m.prototype.rShiftTo = Cr),
          (m.prototype.subTo = Tr),
          (m.prototype.multiplyTo = Ke),
          (m.prototype.squareTo = jr),
          (m.prototype.divRemTo = br),
          (m.prototype.invDigit = Qr),
          (m.prototype.isEven = K),
          (m.prototype.exp = X),
          (m.prototype.toString = te),
          (m.prototype.negate = ie),
          (m.prototype.abs = Hr),
          (m.prototype.compareTo = E),
          (m.prototype.bitLength = A),
          (m.prototype.mod = ge),
          (m.prototype.modPowInt = J),
          (m.ZERO = er(0)),
          (m.ONE = er(1));
        function T() {
          var i = t();
          return this.copyTo(i), i;
        }
        function lr() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function Q() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function $() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function G(i) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(i));
        }
        function q() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function k(i) {
          if ((i == null && (i = 10), this.signum() == 0 || i < 2 || i > 36))
            return "0";
          var s = this.chunkSize(i),
            n = Math.pow(i, s),
            g = er(n),
            B = t(),
            u = t(),
            p = "";
          for (this.divRemTo(g, B, u); B.signum() > 0; )
            (p = (n + u.intValue()).toString(i).substr(1) + p),
              B.divRemTo(g, B, u);
          return u.intValue().toString(i) + p;
        }
        function or(i, s) {
          this.fromInt(0), s == null && (s = 10);
          for (
            var n = this.chunkSize(s),
              g = Math.pow(s, n),
              B = !1,
              u = 0,
              p = 0,
              h = 0;
            h < i.length;
            ++h
          ) {
            var cr = pe(i, h);
            if (cr < 0) {
              i.charAt(h) == "-" && this.signum() == 0 && (B = !0);
              continue;
            }
            (p = s * p + cr),
              ++u >= n &&
                (this.dMultiply(g), this.dAddOffset(p, 0), (u = 0), (p = 0));
          }
          u > 0 && (this.dMultiply(Math.pow(s, u)), this.dAddOffset(p, 0)),
            B && m.ZERO.subTo(this, this);
        }
        function Sr(i, s, n) {
          if (typeof s == "number")
            if (i < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(i, n),
                  this.testBit(i - 1) ||
                    this.bitwiseTo(m.ONE.shiftLeft(i - 1), fr, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(s);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > i &&
                    this.subTo(m.ONE.shiftLeft(i - 1), this);
          else {
            var g = new Array(),
              B = i & 7;
            (g.length = (i >> 3) + 1),
              s.nextBytes(g),
              B > 0 ? (g[0] &= (1 << B) - 1) : (g[0] = 0),
              this.fromString(g, 256);
          }
        }
        function Oe() {
          var i = this.t,
            s = new Array();
          s[0] = this.s;
          var n = this.DB - ((i * this.DB) % 8),
            g,
            B = 0;
          if (i-- > 0)
            for (
              n < this.DB &&
              (g = this[i] >> n) != (this.s & this.DM) >> n &&
              (s[B++] = g | (this.s << (this.DB - n)));
              i >= 0;
            )
              n < 8
                ? ((g = (this[i] & ((1 << n) - 1)) << (8 - n)),
                  (g |= this[--i] >> (n += this.DB - 8)))
                : ((g = (this[i] >> (n -= 8)) & 255),
                  n <= 0 && ((n += this.DB), --i)),
                (g & 128) != 0 && (g |= -256),
                B == 0 && (this.s & 128) != (g & 128) && ++B,
                (B > 0 || g != this.s) && (s[B++] = g);
          return s;
        }
        function Vr(i) {
          return this.compareTo(i) == 0;
        }
        function nr(i) {
          return this.compareTo(i) < 0 ? this : i;
        }
        function he(i) {
          return this.compareTo(i) > 0 ? this : i;
        }
        function Br(i, s, n) {
          var g,
            B,
            u = Math.min(i.t, this.t);
          for (g = 0; g < u; ++g) n[g] = s(this[g], i[g]);
          if (i.t < this.t) {
            for (B = i.s & this.DM, g = u; g < this.t; ++g)
              n[g] = s(this[g], B);
            n.t = this.t;
          } else {
            for (B = this.s & this.DM, g = u; g < i.t; ++g) n[g] = s(B, i[g]);
            n.t = i.t;
          }
          (n.s = s(this.s, i.s)), n.clamp();
        }
        function Wr(i, s) {
          return i & s;
        }
        function hr(i) {
          var s = t();
          return this.bitwiseTo(i, Wr, s), s;
        }
        function fr(i, s) {
          return i | s;
        }
        function yr(i) {
          var s = t();
          return this.bitwiseTo(i, fr, s), s;
        }
        function mr(i, s) {
          return i ^ s;
        }
        function Mr(i) {
          var s = t();
          return this.bitwiseTo(i, mr, s), s;
        }
        function Ir(i, s) {
          return i & ~s;
        }
        function Lr(i) {
          var s = t();
          return this.bitwiseTo(i, Ir, s), s;
        }
        function Ie() {
          for (var i = t(), s = 0; s < this.t; ++s) i[s] = this.DM & ~this[s];
          return (i.t = this.t), (i.s = ~this.s), i;
        }
        function ur(i) {
          var s = t();
          return i < 0 ? this.rShiftTo(-i, s) : this.lShiftTo(i, s), s;
        }
        function se(i) {
          var s = t();
          return i < 0 ? this.lShiftTo(-i, s) : this.rShiftTo(i, s), s;
        }
        function Er(i) {
          if (i == 0) return -1;
          var s = 0;
          return (
            (i & 65535) == 0 && ((i >>= 16), (s += 16)),
            (i & 255) == 0 && ((i >>= 8), (s += 8)),
            (i & 15) == 0 && ((i >>= 4), (s += 4)),
            (i & 3) == 0 && ((i >>= 2), (s += 2)),
            (i & 1) == 0 && ++s,
            s
          );
        }
        function pr() {
          for (var i = 0; i < this.t; ++i)
            if (this[i] != 0) return i * this.DB + Er(this[i]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function Pr(i) {
          for (var s = 0; i != 0; ) (i &= i - 1), ++s;
          return s;
        }
        function Nr() {
          for (var i = 0, s = this.s & this.DM, n = 0; n < this.t; ++n)
            i += Pr(this[n] ^ s);
          return i;
        }
        function Dr(i) {
          var s = Math.floor(i / this.DB);
          return s >= this.t
            ? this.s != 0
            : (this[s] & (1 << (i % this.DB))) != 0;
        }
        function ar(i, s) {
          var n = m.ONE.shiftLeft(i);
          return this.bitwiseTo(n, s, n), n;
        }
        function Kr(i) {
          return this.changeBit(i, fr);
        }
        function qr(i) {
          return this.changeBit(i, Ir);
        }
        function ue(i) {
          return this.changeBit(i, mr);
        }
        function Jr(i, s) {
          for (var n = 0, g = 0, B = Math.min(i.t, this.t); n < B; )
            (g += this[n] + i[n]), (s[n++] = g & this.DM), (g >>= this.DB);
          if (i.t < this.t) {
            for (g += i.s; n < this.t; )
              (g += this[n]), (s[n++] = g & this.DM), (g >>= this.DB);
            g += this.s;
          } else {
            for (g += this.s; n < i.t; )
              (g += i[n]), (s[n++] = g & this.DM), (g >>= this.DB);
            g += i.s;
          }
          (s.s = g < 0 ? -1 : 0),
            g > 0 ? (s[n++] = g) : g < -1 && (s[n++] = this.DV + g),
            (s.t = n),
            s.clamp();
        }
        function $r(i) {
          var s = t();
          return this.addTo(i, s), s;
        }
        function Ur(i) {
          var s = t();
          return this.subTo(i, s), s;
        }
        function je(i) {
          var s = t();
          return this.multiplyTo(i, s), s;
        }
        function Fr(i) {
          var s = t();
          return this.divRemTo(i, s, null), s;
        }
        function ir(i) {
          var s = t();
          return this.divRemTo(i, null, s), s;
        }
        function Yr(i) {
          var s = t(),
            n = t();
          return this.divRemTo(i, s, n), new Array(s, n);
        }
        function Xe(i) {
          (this[this.t] = this.am(0, i - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function Qe(i, s) {
          for (; this.t <= s; ) this[this.t++] = 0;
          for (this[s] += i; this[s] >= this.DV; )
            (this[s] -= this.DV),
              ++s >= this.t && (this[this.t++] = 0),
              ++this[s];
        }
        function Le() {}
        function L(i) {
          return i;
        }
        function r(i, s, n) {
          i.multiplyTo(s, n);
        }
        function a(i, s) {
          i.squareTo(s);
        }
        (Le.prototype.convert = L),
          (Le.prototype.revert = L),
          (Le.prototype.mulTo = r),
          (Le.prototype.sqrTo = a);
        function x(i) {
          return this.exp(i, new Le());
        }
        function $e(i, s, n) {
          var g = Math.min(this.t + i.t, s);
          for (n.s = 0, n.t = g; g > 0; ) n[--g] = 0;
          var B;
          for (B = n.t - this.t; g < B; ++g)
            n[g + this.t] = this.am(0, i[g], n, g, 0, this.t);
          for (B = Math.min(i.t, s); g < B; ++g)
            this.am(0, i[g], n, g, 0, s - g);
          n.clamp();
        }
        function Ye(i, s, n) {
          --s;
          var g = (n.t = this.t + i.t - s);
          for (n.s = 0; --g >= 0; ) n[g] = 0;
          for (g = Math.max(s - this.t, 0); g < i.t; ++g)
            n[this.t + g - s] = this.am(s - g, i[g], n, 0, 0, this.t + g - s);
          n.clamp(), n.drShiftTo(1, n);
        }
        function _r(i) {
          (this.r2 = t()),
            (this.q3 = t()),
            m.ONE.dlShiftTo(2 * i.t, this.r2),
            (this.mu = this.r2.divide(i)),
            (this.m = i);
        }
        function ve(i) {
          if (i.s < 0 || i.t > 2 * this.m.t) return i.mod(this.m);
          if (i.compareTo(this.m) < 0) return i;
          var s = t();
          return i.copyTo(s), this.reduce(s), s;
        }
        function ce(i) {
          return i;
        }
        function Ge(i) {
          for (
            i.drShiftTo(this.m.t - 1, this.r2),
              i.t > this.m.t + 1 && ((i.t = this.m.t + 1), i.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            i.compareTo(this.r2) < 0;
          )
            i.dAddOffset(1, this.m.t + 1);
          for (i.subTo(this.r2, i); i.compareTo(this.m) >= 0; )
            i.subTo(this.m, i);
        }
        function Ce(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        function Re(i, s, n) {
          i.multiplyTo(s, n), this.reduce(n);
        }
        (_r.prototype.convert = ve),
          (_r.prototype.revert = ce),
          (_r.prototype.reduce = Ge),
          (_r.prototype.mulTo = Re),
          (_r.prototype.sqrTo = Ce);
        function Ae(i, s) {
          var n = i.bitLength(),
            g,
            B = er(1),
            u;
          if (n <= 0) return B;
          n < 18
            ? (g = 1)
            : n < 48
              ? (g = 3)
              : n < 144
                ? (g = 4)
                : n < 768
                  ? (g = 5)
                  : (g = 6),
            n < 8
              ? (u = new Ue(s))
              : s.isEven()
                ? (u = new _r(s))
                : (u = new vr(s));
          var p = new Array(),
            h = 3,
            cr = g - 1,
            kr = (1 << g) - 1;
          if (((p[1] = u.convert(this)), g > 1)) {
            var ze = t();
            for (u.sqrTo(p[1], ze); h <= kr; )
              (p[h] = t()), u.mulTo(ze, p[h - 2], p[h]), (h += 2);
          }
          var oe = i.t - 1,
            Pe,
            qe = !0,
            Ee = t(),
            We;
          for (n = y(i[oe]) - 1; oe >= 0; ) {
            for (
              n >= cr
                ? (Pe = (i[oe] >> (n - cr)) & kr)
                : ((Pe = (i[oe] & ((1 << (n + 1)) - 1)) << (cr - n)),
                  oe > 0 && (Pe |= i[oe - 1] >> (this.DB + n - cr))),
                h = g;
              (Pe & 1) == 0;
            )
              (Pe >>= 1), --h;
            if (((n -= h) < 0 && ((n += this.DB), --oe), qe))
              p[Pe].copyTo(B), (qe = !1);
            else {
              for (; h > 1; ) u.sqrTo(B, Ee), u.sqrTo(Ee, B), (h -= 2);
              h > 0 ? u.sqrTo(B, Ee) : ((We = B), (B = Ee), (Ee = We)),
                u.mulTo(Ee, p[Pe], B);
            }
            for (; oe >= 0 && (i[oe] & (1 << n)) == 0; )
              u.sqrTo(B, Ee),
                (We = B),
                (B = Ee),
                (Ee = We),
                --n < 0 && ((n = this.DB - 1), --oe);
          }
          return u.revert(B);
        }
        function v(i) {
          var s = this.s < 0 ? this.negate() : this.clone(),
            n = i.s < 0 ? i.negate() : i.clone();
          if (s.compareTo(n) < 0) {
            var g = s;
            (s = n), (n = g);
          }
          var B = s.getLowestSetBit(),
            u = n.getLowestSetBit();
          if (u < 0) return s;
          for (
            B < u && (u = B), u > 0 && (s.rShiftTo(u, s), n.rShiftTo(u, n));
            s.signum() > 0;
          )
            (B = s.getLowestSetBit()) > 0 && s.rShiftTo(B, s),
              (B = n.getLowestSetBit()) > 0 && n.rShiftTo(B, n),
              s.compareTo(n) >= 0
                ? (s.subTo(n, s), s.rShiftTo(1, s))
                : (n.subTo(s, n), n.rShiftTo(1, n));
          return u > 0 && n.lShiftTo(u, n), n;
        }
        function _e(i) {
          if (i <= 0) return 0;
          var s = this.DV % i,
            n = this.s < 0 ? i - 1 : 0;
          if (this.t > 0)
            if (s == 0) n = this[0] % i;
            else
              for (var g = this.t - 1; g >= 0; --g) n = (s * n + this[g]) % i;
          return n;
        }
        function zr(i) {
          var s = i.isEven();
          if ((this.isEven() && s) || i.signum() == 0) return m.ZERO;
          for (
            var n = i.clone(),
              g = this.clone(),
              B = er(1),
              u = er(0),
              p = er(0),
              h = er(1);
            n.signum() != 0;
          ) {
            for (; n.isEven(); )
              n.rShiftTo(1, n),
                s
                  ? ((!B.isEven() || !u.isEven()) &&
                      (B.addTo(this, B), u.subTo(i, u)),
                    B.rShiftTo(1, B))
                  : u.isEven() || u.subTo(i, u),
                u.rShiftTo(1, u);
            for (; g.isEven(); )
              g.rShiftTo(1, g),
                s
                  ? ((!p.isEven() || !h.isEven()) &&
                      (p.addTo(this, p), h.subTo(i, h)),
                    p.rShiftTo(1, p))
                  : h.isEven() || h.subTo(i, h),
                h.rShiftTo(1, h);
            n.compareTo(g) >= 0
              ? (n.subTo(g, n), s && B.subTo(p, B), u.subTo(h, u))
              : (g.subTo(n, g), s && p.subTo(B, p), h.subTo(u, h));
          }
          if (g.compareTo(m.ONE) != 0) return m.ZERO;
          if (h.compareTo(i) >= 0) return h.subtract(i);
          if (h.signum() < 0) h.addTo(i, h);
          else return h;
          return h.signum() < 0 ? h.add(i) : h;
        }
        var _ = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          Or = (1 << 26) / _[_.length - 1];
        function it(i) {
          var s,
            n = this.abs();
          if (n.t == 1 && n[0] <= _[_.length - 1]) {
            for (s = 0; s < _.length; ++s) if (n[0] == _[s]) return !0;
            return !1;
          }
          if (n.isEven()) return !1;
          for (s = 1; s < _.length; ) {
            for (var g = _[s], B = s + 1; B < _.length && g < Or; ) g *= _[B++];
            for (g = n.modInt(g); s < B; ) if (g % _[s++] == 0) return !1;
          }
          return n.millerRabin(i);
        }
        function ct(i) {
          var s = this.subtract(m.ONE),
            n = s.getLowestSetBit();
          if (n <= 0) return !1;
          var g = s.shiftRight(n);
          (i = (i + 1) >> 1), i > _.length && (i = _.length);
          for (var B = t(), u = 0; u < i; ++u) {
            B.fromInt(_[u]);
            var p = B.modPow(g, this);
            if (p.compareTo(m.ONE) != 0 && p.compareTo(s) != 0) {
              for (var h = 1; h++ < n && p.compareTo(s) != 0; )
                if (((p = p.modPowInt(2, this)), p.compareTo(m.ONE) == 0))
                  return !1;
              if (p.compareTo(s) != 0) return !1;
            }
          }
          return !0;
        }
        (m.prototype.chunkSize = G),
          (m.prototype.toRadix = k),
          (m.prototype.fromRadix = or),
          (m.prototype.fromNumber = Sr),
          (m.prototype.bitwiseTo = Br),
          (m.prototype.changeBit = ar),
          (m.prototype.addTo = Jr),
          (m.prototype.dMultiply = Xe),
          (m.prototype.dAddOffset = Qe),
          (m.prototype.multiplyLowerTo = $e),
          (m.prototype.multiplyUpperTo = Ye),
          (m.prototype.modInt = _e),
          (m.prototype.millerRabin = ct),
          (m.prototype.clone = T),
          (m.prototype.intValue = lr),
          (m.prototype.byteValue = Q),
          (m.prototype.shortValue = $),
          (m.prototype.signum = q),
          (m.prototype.toByteArray = Oe),
          (m.prototype.equals = Vr),
          (m.prototype.min = nr),
          (m.prototype.max = he),
          (m.prototype.and = hr),
          (m.prototype.or = yr),
          (m.prototype.xor = Mr),
          (m.prototype.andNot = Lr),
          (m.prototype.not = Ie),
          (m.prototype.shiftLeft = ur),
          (m.prototype.shiftRight = se),
          (m.prototype.getLowestSetBit = pr),
          (m.prototype.bitCount = Nr),
          (m.prototype.testBit = Dr),
          (m.prototype.setBit = Kr),
          (m.prototype.clearBit = qr),
          (m.prototype.flipBit = ue),
          (m.prototype.add = $r),
          (m.prototype.subtract = Ur),
          (m.prototype.multiply = je),
          (m.prototype.divide = Fr),
          (m.prototype.remainder = ir),
          (m.prototype.divideAndRemainder = Yr),
          (m.prototype.modPow = Ae),
          (m.prototype.modInverse = zr),
          (m.prototype.pow = x),
          (m.prototype.gcd = v),
          (m.prototype.isProbablePrime = it);
        const rt = m;
        var ft = function (i, s) {
            (this.modulus = new rt(i, 16)),
              (this.encryptionExponent = new rt(s, 16));
          },
          gt = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (i) {
              if (!i) return !1;
              var s = "",
                n,
                g,
                B,
                u,
                p,
                h,
                cr,
                kr = 0;
              do
                (n = i.charCodeAt(kr++)),
                  (g = i.charCodeAt(kr++)),
                  (B = i.charCodeAt(kr++)),
                  (u = n >> 2),
                  (p = ((n & 3) << 4) | (g >> 4)),
                  (h = ((g & 15) << 2) | (B >> 6)),
                  (cr = B & 63),
                  isNaN(g) ? (h = cr = 64) : isNaN(B) && (cr = 64),
                  (s +=
                    this.base64.charAt(u) +
                    this.base64.charAt(p) +
                    this.base64.charAt(h) +
                    this.base64.charAt(cr));
              while (kr < i.length);
              return s;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var s = "",
                n,
                g,
                B,
                u,
                p = 0;
              do
                (n = this.base64.indexOf(i.charAt(p++))),
                  (g = this.base64.indexOf(i.charAt(p++))),
                  (B = this.base64.indexOf(i.charAt(p++))),
                  (u = this.base64.indexOf(i.charAt(p++))),
                  (s += String.fromCharCode((n << 2) | (g >> 4))),
                  B != 64 &&
                    (s += String.fromCharCode(((g & 15) << 4) | (B >> 2))),
                  u != 64 && (s += String.fromCharCode(((B & 3) << 6) | u));
              while (p < i.length);
              return s;
            },
          },
          bt = {
            hex: "0123456789abcdef",
            encode: function (i) {
              if (!i) return !1;
              var s = "",
                n,
                g = 0;
              do
                (n = i.charCodeAt(g++)),
                  (s +=
                    this.hex.charAt((n >> 4) & 15) + this.hex.charAt(n & 15));
              while (g < i.length);
              return s;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^0-9abcdef]/g, "");
              var s = "",
                n = 0;
              do
                s += String.fromCharCode(
                  ((this.hex.indexOf(i.charAt(n++)) << 4) & 240) |
                    (this.hex.indexOf(i.charAt(n++)) & 15),
                );
              while (n < i.length);
              return s;
            },
          },
          be = {
            getPublicKey: function (i, s) {
              return new ft(i, s);
            },
            encrypt: function (i, s) {
              return !s ||
                ((i = this.pkcs1pad2(i, (s.modulus.bitLength() + 7) >> 3)),
                !i) ||
                ((i = i.modPowInt(s.encryptionExponent, s.modulus)), !i)
                ? !1
                : ((i = i.toString(16)),
                  (i.length & 1) == 1 && (i = "0" + i),
                  gt.encode(bt.decode(i)));
            },
            pkcs1pad2: function (i, s) {
              if (s < i.length + 11) return null;
              for (var n = [], g = i.length - 1; g >= 0 && s > 0; )
                n[--s] = i.charCodeAt(g--);
              for (n[--s] = 0; s > 2; )
                n[--s] = Math.floor(Math.random() * 254) + 1;
              return (n[--s] = 2), (n[--s] = 0), new rt(n);
            },
          };
        const ot = be;
      },
    },
  ]);
})();
