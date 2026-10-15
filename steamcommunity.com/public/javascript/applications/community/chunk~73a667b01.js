/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [40253],
    {
      87242: (qt, nr, v) => {
        "use strict";
        v.d(nr, {
          FU: () => G,
          eF: () => le,
          gf: () => oe,
          wI: () => wt,
          yp: () => ie,
        });
        var m = v(14947),
          Yt = v(41735),
          S = v.n(Yt),
          l = v(35038),
          r = v(71742),
          X = v(27066),
          E = v(72604),
          Xt = v(99412),
          sr = v(94354),
          Lt = v(3166),
          vt = v(94276),
          Ft = v(71944),
          se = v(73011),
          ar = Object.defineProperty,
          or = Object.getOwnPropertyDescriptor,
          ae = (x, T, j) =>
            T in x
              ? ar(x, T, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: j,
                })
              : (x[T] = j),
          er = (x, T, j, N) => {
            for (
              var ee = N > 1 ? void 0 : N ? or(T, j) : T, w = x.length - 1, me;
              w >= 0;
              w--
            )
              (me = x[w]) && (ee = (N ? me(T, j, ee) : me(ee)) || ee);
            return N && ee && ar(T, j, ee), ee;
          },
          W = (x, T, j) => ae(x, typeof T != "symbol" ? T + "" : T, j),
          le = ((x) => (
            (x[(x.None = 0)] = "None"),
            (x[(x.Generic = 1)] = "Generic"),
            (x[(x.Expired = 2)] = "Expired"),
            (x[(x.Network = 3)] = "Network"),
            (x[(x.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (x[(x.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (x[(x.AnonymousLogin = 6)] = "AnonymousLogin"),
            x
          ))(le || {});
        function G(x) {
          const {
            shared_secret: T,
            identity_secret: j,
            secret_1: N,
            status: ee,
            uri: w,
            server_time: me,
            ...K
          } = x;
          return {
            shared_secret: Ft.fromByteArray(T),
            identity_secret: Ft.fromByteArray(j),
            secret_1: Ft.fromByteArray(N),
            ...K,
          };
        }
        var wt = ((x) => (
          (x[(x.k_Success = 0)] = "k_Success"),
          (x[(x.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (x[(x.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          x
        ))(wt || {});
        class oe {
          constructor(T, j, N, ee) {
            W(this, "m_transport"),
              W(this, "m_strClientID"),
              W(this, "m_msPollInterval"),
              W(this, "m_activeTimerID"),
              W(this, "m_rgRequestID"),
              W(this, "m_strTokenToRevoke"),
              W(this, "m_strChallengeURL"),
              W(this, "m_onShowAgreement"),
              W(this, "m_bRemoteInteraction", !1),
              W(this, "m_onCompleteCallback"),
              W(this, "m_eFailureState", 0),
              W(this, "m_strExtendedErrorMessage", ""),
              W(this, "m_onDeviceDetailsCallback"),
              (0, m.Gn)(this),
              (this.m_transport = T),
              (this.m_onCompleteCallback = j),
              (this.m_onDeviceDetailsCallback = N),
              (this.m_onShowAgreement = ee);
          }
          StartPolling(T = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              T
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
              const T = l.w.Init(vt.Ev);
              T.SetEMsg(sr.Kec),
                T.Body().set_client_id(this.m_strClientID),
                T.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  T.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const j = await vt.kX.PollAuthSessionStatus(this.m_transport, T),
                N = j.GetEResult();
              if (N !== E.R) {
                if (N === E.zi) {
                  const L = j.Hdr().transport_error();
                  if (
                    ((0, se.ZI)(
                      `Failed to poll auth session. Result ${N}. Transport Error: ${L}`,
                    ),
                    L === Xt.MhR || L === Xt.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), E.R
                    );
                }
                if (N === E.Qo || N === E.ob) this.m_eFailureState = 2;
                else if (N === E.h_) this.m_eFailureState = 5;
                else if (N == E.oH) {
                  const L = j.Body().agreement_session_url();
                  if (
                    ((0, r.wT)(
                      !!L,
                      "Missing agreement session URL for result",
                      N,
                    ),
                    this.m_onShowAgreement)
                  )
                    this.m_onShowAgreement(L);
                  else {
                    const I = document.location.href;
                    window.location.href = `${L}&redir=${encodeURIComponent(I)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), N;
                } else
                  (0, se.ZI)(`Failed to poll auth session. Result: ${N}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), N;
              }
              const {
                new_challenge_url: ee,
                new_client_id: w,
                refresh_token: me,
                access_token: K,
                account_name: $,
                had_remote_interaction: wr,
                new_guard_data: zt,
              } = j.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!wr),
                me
                  ? ((0, r.wT)(
                      !!K && !!$,
                      "Missing access token or account name with refresh token",
                    ),
                    this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: me,
                      strAccessToken: K,
                      strAccountName: $,
                      strNewGuardData: zt,
                    }),
                    N)
                  : (ee && (this.m_strChallengeURL = ee),
                    w && (this.m_strClientID = w),
                    this.StartPolling(!1),
                    N)
              );
            } catch (T) {
              return (
                (0, se.ZI)(`Failed to poll auth session. ${T}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                E.zi
              );
            }
          }
          SetTokenToRevoke(T) {
            this.m_strTokenToRevoke = T;
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
            const T = await this.m_onDeviceDetailsCallback();
            return vt.tS.fromObject(T);
          }
        }
        er([m.sH], oe.prototype, "m_strChallengeURL", 2),
          er([m.sH], oe.prototype, "m_bRemoteInteraction", 2),
          er([m.sH], oe.prototype, "m_eFailureState", 2),
          er([m.sH], oe.prototype, "m_strExtendedErrorMessage", 2),
          er([X.o], oe.prototype, "PollForUpdate", 1),
          er([X.o], oe.prototype, "SetTokenToRevoke", 1);
        function ie(x) {
          const T = new FormData();
          T.append("nonce", x), T.append("sessionid", (0, Lt.KC)());
          let j = new URL(document.location.href);
          const N = new URLSearchParams(j.search);
          N.has("need_password") &&
            (N.delete("need_password"), (j.search = N.toString())),
            T.append("redir", j.toString());
          const ee = `${Lt.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return S()
            .post(ee, T, { withCredentials: !0 })
            .then(
              (w) => {
                const { data: me } = w;
                if (
                  !me ||
                  !me.transfer_info ||
                  !me.steamID ||
                  !Array.isArray(me.transfer_info)
                )
                  return (
                    (0, se.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const { transfer_info: K, steamID: $, primary_domain: wr } = me;
                return Promise.all(
                  K.map(({ url: zt, params: L }) =>
                    z(zt, { ...L, steamID: $ }),
                  ),
                ).then(
                  (zt) => ce(zt, wr),
                  () => 2,
                );
              },
              () => (
                (0, se.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function ce(x, T) {
          let j = 0;
          return (
            x.forEach((N) => {
              N.bSuccess ||
                (T && N.domain.toLowerCase() === T.toLowerCase()
                  ? (j = 1)
                  : j == 0 && (j = 2));
            }),
            j
          );
        }
        async function z(x, T) {
          const j = new URL(x);
          let N = !0;
          try {
            const ee = new FormData();
            Object.keys(T).forEach((me) => ee.append(me, T[me]));
            const w = await S().post(x, ee, {
              withCredentials: !0,
              timeout: 1e4,
            });
            w.status !== 200
              ? ((0, se.ZI)(
                  `Transfer login to ${j.host} failed with status code: ${w.status}`,
                ),
                (N = !1))
              : w.data.result !== E.R &&
                ((0, se.ZI)(
                  `Transfer login to ${j.host} failed with result: ${w.data.result}`,
                ),
                (N = !1));
          } catch (ee) {
            (0, se.ZI)(`Transfer login to ${j.host} failed: "${ee}"`), (N = !1);
          }
          return { bSuccess: N, domain: j.host };
        }
      },
      73011: (qt, nr, v) => {
        "use strict";
        v.d(nr, { P8: () => or, ZI: () => sr, tG: () => X, tH: () => Xt });
        var m = v(41735),
          Yt = v.n(m),
          S = v(57589);
        const l = v(80407).A,
          r = new S.wd("Login"),
          X = r.Info,
          E = r.Debug,
          Xt = r.Warning,
          sr = r.Error;
        function Lt(W, le) {
          return W.endsWith("/") || (W += "/"), `${W}login/${le}/`;
        }
        function vt() {
          let W = new FormData();
          return W.append("donotcache", new Date().getTime().toString()), W;
        }
        async function Ft(W) {
          let le = vt(),
            G = Lt(W, "refreshcaptcha"),
            wt = "";
          try {
            let oe = { "Content-Type": "multipart/form-data" },
              ie = await axios.post(G, le, { headers: oe });
            if (ie.status != 200) return !1;
            wt = ie.data.gid;
          } catch {
            return !1;
          }
          return wt;
        }
        function se(W, le) {
          return Lt(W, "rendercaptcha") + `?gid=${le}`;
        }
        async function ar(W, le) {
          let G = vt();
          G.append("username", le);
          let wt = Lt(W, "getrsakey"),
            oe;
          try {
            let ie = { "Content-Type": "multipart/form-data" },
              ce = await axios.post(wt, G, { headers: ie });
            if (ce.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(ce.status), null
              );
            let z = ce.data;
            if (
              !z ||
              !z.success ||
              !z.publickey_mod ||
              !z.publickey_exp ||
              !z.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(z), null;
            oe = z;
          } catch (ie) {
            return console.log("GetRSAKey exception: "), console.log(ie), null;
          }
          return oe;
        }
        function or(W, le) {
          let G = l.getPublicKey(le.publickey_mod, le.publickey_exp),
            wt = l.encrypt(W, G);
          return wt === !1 ? null : wt;
        }
        async function ae(W, le, G, wt) {
          const oe = or(G.strPassword, wt);
          if (!oe) return null;
          let ie = vt();
          ie.append("password", oe),
            ie.append("username", G.strUserName),
            ie.append("twofactorcode", G.strTwoFactorCode || ""),
            ie.append("emailauth", G.strEmailAuthCode || ""),
            ie.append("loginfriendlyname", ""),
            ie.append("captchagid", G.gidCaptcha || ""),
            ie.append("captcha_text", G.strCaptchaText || ""),
            ie.append("emailsteamid", G.emailSteamID || ""),
            ie.append("rsatimestamp", wt.timestamp),
            ie.append("remember_login", G.bRememberLogin ? "true" : "false");
          let ce = {};
          le &&
            (ie.append("oauth_client_id", le),
            ie.append("mobile_chat_client", "true"));
          let z = Lt(W, "dologin"),
            x;
          try {
            ce.headers = { "Content-Type": "multipart/form-data" };
            let T = await axios.post(z, ie, ce);
            if (T.status != 200) return null;
            let j = T.data;
            if (!j) return null;
            j.oauth && (j.oauth = JSON.parse(j.oauth)), (x = j);
          } catch {
            return null;
          }
          return x;
        }
        async function er(W, le, G) {
          if (
            ((G = Object.assign({}, G)),
            G.strUserName &&
              (G.strUserName = G.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !G.strPassword ||
              G.strPassword.match(/[^\x00-\x7F]/) ||
              !G.strUserName)
          )
            return null;
          let wt = await ar(W, G.strUserName);
          return wt
            ? await ae(
                W,
                le,
                {
                  ...G,
                  strUserName: G.strUserName,
                  strPassword: G.strPassword,
                },
                wt,
              )
            : (console.error(`Failed to get RSA key from ${W}`), null);
        }
      },
      42780: (qt, nr, v) => {
        "use strict";
        v.d(nr, { YN: () => Wi, Fn: () => Ei, Mk: () => rn, kt: () => qi });
        var m = v(7850),
          Yt = v(32093),
          S = v(99412),
          l = v(72604),
          r = v(41735),
          X = v.n(r),
          E = v(90626),
          Xt = v(92757);
        const sr =
          v.p +
          "images/applications/community/login_mobile_auth.png?v=valveisgoodatcaching";
        var Lt = v(71568),
          vt = v(87883),
          Ft = v(25792),
          se = v(179),
          ar = v(24660),
          or = v(19298),
          ae = v(36707),
          er = v(9843),
          W = v.n(er);
        function le(c) {
          const {
            length: t,
            value: a,
            onChange: f,
            onPaste: b,
            tone: M,
            autoFocus: h,
            disabled: B,
            loading: _,
            backupCode: O,
            allowCharacter: k,
          } = c;
          (0, E.useEffect)(() => {
            h && Ct();
          }, []);
          const P = (0, E.useRef)([]),
            ue = () => f(P.current.map((q) => q.value)),
            de = (q) => {
              const U = q.target.value;
              if (U && k && !k(U)) return;
              const V = q.target.nextElementSibling;
              q.target.value && V && V.focus(), ue();
            },
            Mt = (q) => {
              var U;
              P.current.findIndex((V) => !!V.value) === -1
                ? (U = P.current[0]) == null || U.select()
                : q.target.select();
            },
            Ct = () => {
              const q = P.current.find((U) => !U.value);
              q ? q.focus() : P.current[P.current.length - 1].focus();
            },
            Rt = (q) => {
              const U = q.target;
              if (q.key === "Backspace" || q.key === "Delete") {
                const V =
                  q.key === "Backspace"
                    ? U.previousElementSibling
                    : U.nextElementSibling;
                U.value === "" &&
                  V &&
                  ((V.value = ""), V.focus(), q.preventDefault(), ue());
              } else if (
                q.key === "ArrowLeft" ||
                q.key === "ArrowRight" ||
                q.key === "ArrowUp" ||
                q.key === "ArrowDown"
              ) {
                const V =
                  q.key === "ArrowLeft" || q.key === "ArrowUp"
                    ? U.previousElementSibling
                    : U.nextElementSibling;
                V && (V.focus(), q.preventDefault());
              }
            },
            D = (q) => {
              const U = q.clipboardData.getData("Text");
              let V = q.target,
                Y = 0;
              for (; V && Y < U.length; )
                V.focus(),
                  (V.value = U.charAt(Y)),
                  (V = V.nextElementSibling),
                  Y++;
              ue(), q.preventDefault(), b && b();
            },
            yt = [];
          for (let q = 0; q < t; q++)
            yt.push(
              (0, m.jsx)(
                ar.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (U) => {
                    P.current[q] = U;
                  },
                  onChange: de,
                  onFocus: Mt,
                  onClick: (U) => U.stopPropagation(),
                  onKeyDown: Rt,
                  onPaste: D,
                  value: a[q] ? a[q][0] : "",
                  autoComplete: "none",
                  autoFocus: q === 0 && h,
                  disabled: B || _,
                  className: W().Input,
                },
                q,
              ),
            );
          return (0, m.jsxs)(or.Z, {
            className: (0, ae.A)(
              W().SegmentedCharacterInput,
              M === "danger" && W().Danger,
              B && W().Disabled,
              O && W().BackupCode,
            ),
            onClick: Ct,
            children: [
              _ &&
                (0, m.jsx)("div", {
                  className: W().Loading,
                  children: (0, m.jsx)(qi, { size: "small" }),
                }),
              yt,
            ],
          });
        }
        var G = v(36118),
          wt = v(54212),
          oe = v(85599),
          ie = v(71421),
          ce = v(71742),
          z = v(18210),
          x = v(54963),
          T = v(3166),
          j = v(87242),
          N = v(14947),
          ee = v(94354),
          w = v(35038),
          me = v(65946),
          K = v(73011),
          $ = v(94276),
          wr = v(95039),
          zt = v(77008),
          L = v(80613),
          I = v.n(L),
          u = v(75245),
          vi = Object.defineProperty,
          Ti = (c, t, a) =>
            t in c
              ? vi(c, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[t] = a),
          H = (c, t, a) => Ti(c, typeof t != "symbol" ? t + "" : t, a);
        function br(c) {
          return "unknown ETwoFactorUsageType ( " + c + " )";
        }
        function xi(c) {
          return "unknown ETwoFactorStatusFieldFlag ( " + c + " )";
        }
        const oi = class fe extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              fe.prototype.time || u.Sg(fe.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    time: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    usage_type: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                    confirmation_type: {
                      n: 3,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    confirmation_action: {
                      n: 4,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = u.w0(fe.M())), fe.sm_mbf;
          }
          toObject(t = !1) {
            return fe.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(fe.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(fe.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new fe();
            return fe.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(fe.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(fe.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UsageEvent";
          }
        };
        H(oi, "sm_m"), H(oi, "sm_mbf");
        let zi = oi;
        const li = class he extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.sender_time || u.Sg(he.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    sender_time: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = u.w0(he.M())), he.sm_mbf;
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(he.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(he.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new he();
            return he.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(he.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(he.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Request";
          }
        };
        H(li, "sm_m"), H(li, "sm_mbf");
        let Lr = li;
        const zr = class ge extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ge.prototype.server_time || u.Sg(ge.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    server_time: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    skew_tolerance_seconds: {
                      n: 2,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    large_time_jink: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    probe_frequency_seconds: {
                      n: 4,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    adjusted_time_probe_frequency_seconds: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    hint_probe_frequency_seconds: {
                      n: 6,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    sync_timeout: {
                      n: 7,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    try_again_seconds: {
                      n: 8,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    max_attempts: {
                      n: 9,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = u.w0(ge.M())), ge.sm_mbf;
          }
          toObject(t = !1) {
            return ge.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(ge.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(ge.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new ge();
            return ge.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(ge.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(ge.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Response";
          }
        };
        H(zr, "sm_m"), H(zr, "sm_mbf");
        let Ur = zr;
        const Nr = class pe extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pe.prototype.steamid || u.Sg(pe.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    include: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = u.w0(pe.M())), pe.sm_mbf;
          }
          toObject(t = !1) {
            return pe.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(pe.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(pe.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new pe();
            return pe.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(pe.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(pe.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Request";
          }
        };
        H(Nr, "sm_m"), H(Nr, "sm_mbf");
        let Dr = Nr;
        const Br = class we extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              we.prototype.state || u.Sg(we.M()),
              L.Message.initialize(this, t, 0, -1, [16], null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    state: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    inactivation_reason: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    authenticator_type: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    authenticator_allowed: {
                      n: 4,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    steamguard_scheme: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    token_gid: {
                      n: 6,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    email_validated: {
                      n: 7,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    device_identifier: {
                      n: 8,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    time_created: {
                      n: 9,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    revocation_attempts_remaining: {
                      n: 10,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    classified_agent: {
                      n: 11,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    allow_external_authenticator: {
                      n: 12,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    time_transferred: {
                      n: 13,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    version: {
                      n: 14,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    last_seen_auth_token_id: {
                      n: 15,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    usages: { n: 16, c: zi, r: !0, q: !0 },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = u.w0(we.M())), we.sm_mbf;
          }
          toObject(t = !1) {
            return we.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(we.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(we.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new we();
            return we.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(we.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return we.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(we.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Response";
          }
        };
        H(Br, "sm_m"), H(Br, "sm_mbf");
        let Pr = Br;
        const Ar = class be extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              be.prototype.steamid || u.Sg(be.M()),
              L.Message.initialize(this, t, 0, -1, [7], null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    authenticator_time: {
                      n: 2,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    serial_number: {
                      n: 3,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    authenticator_type: {
                      n: 4,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    device_identifier: {
                      n: 5,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    http_headers: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: u.qM.readString,
                      bw: u.gp.writeRepeatedString,
                    },
                    version: {
                      n: 8,
                      d: 1,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = u.w0(be.M())), be.sm_mbf;
          }
          toObject(t = !1) {
            return be.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(be.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(be.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new be();
            return be.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(be.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(be.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Request";
          }
        };
        H(Ar, "sm_m"), H(Ar, "sm_mbf");
        let Vr = Ar;
        const jr = class Be extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Be.prototype.shared_secret || u.Sg(Be.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    uri: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                    server_time: {
                      n: 5,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: u.qM.readBytes, bw: u.gp.writeBytes },
                    status: { n: 10, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                    phone_number_hint: {
                      n: 11,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    confirm_type: {
                      n: 12,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = u.w0(Be.M())), Be.sm_mbf;
          }
          toObject(t = !1) {
            return Be.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(Be.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(Be.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new Be();
            return Be.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(Be.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(Be.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Response";
          }
        };
        H(jr, "sm_m"), H(jr, "sm_mbf");
        let Gr = jr;
        const Hr = class ye extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.steamid || u.Sg(ye.M()),
              L.Message.initialize(this, t, 0, -1, [5], null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    authenticator_code: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    authenticator_time: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    activation_code: {
                      n: 4,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    http_headers: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: u.qM.readString,
                      bw: u.gp.writeRepeatedString,
                    },
                    validate_sms_code: {
                      n: 6,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = u.w0(ye.M())), ye.sm_mbf;
          }
          toObject(t = !1) {
            return ye.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(ye.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(ye.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new ye();
            return ye.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(ye.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(ye.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Request";
          }
        };
        H(Hr, "sm_m"), H(Hr, "sm_mbf");
        let Zr = Hr;
        const Fr = class Se extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Se.prototype.success || u.Sg(Se.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    status: { n: 4, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = u.w0(Se.M())), Se.sm_mbf;
          }
          toObject(t = !1) {
            return Se.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(Se.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(Se.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new Se();
            return Se.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(Se.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(Se.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Response";
          }
        };
        H(Fr, "sm_m"), H(Fr, "sm_mbf");
        let Qr = Fr;
        const Kr = class Me extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Me.prototype.revocation_code || u.Sg(Me.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    revocation_code: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    revocation_reason: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    steamguard_scheme: {
                      n: 6,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    remove_all_steamguard_cookies: {
                      n: 7,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = u.w0(Me.M())), Me.sm_mbf;
          }
          toObject(t = !1) {
            return Me.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(Me.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(Me.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new Me();
            return Me.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(Me.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(Me.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Request";
          }
        };
        H(Kr, "sm_m"), H(Kr, "sm_mbf");
        let Jr = Kr;
        const _r = class Ce extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ce.prototype.success || u.Sg(Ce.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    revocation_attempts_remaining: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = u.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(t = !1) {
            return Ce.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(Ce.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(Ce.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new Ce();
            return Ce.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(Ce.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(Ce.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Response";
          }
        };
        H(_r, "sm_m"), H(_r, "sm_mbf");
        let $r = _r;
        class _t extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return _t.toObject(t, this);
          }
          static toObject(t, a) {
            return t ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(t) {
            return new _t();
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new _t();
            return _t.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return t;
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {}
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
          }
        }
        const lr = class Re extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Re.prototype.success || u.Sg(Re.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = u.w0(Re.M())), Re.sm_mbf;
          }
          toObject(t = !1) {
            return Re.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(Re.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(Re.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new Re();
            return Re.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(Re.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(Re.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
          }
        };
        H(lr, "sm_m"), H(lr, "sm_mbf");
        let pi = lr;
        const mr = class ve extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ve.prototype.sms_code || u.Sg(ve.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    sms_code: {
                      n: 1,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    generate_new_token: {
                      n: 2,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    version: {
                      n: 3,
                      d: 1,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = u.w0(ve.M())), ve.sm_mbf;
          }
          toObject(t = !1) {
            return ve.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(ve.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(ve.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new ve();
            return ve.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(ve.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(ve.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
          }
        };
        H(mr, "sm_m"), H(mr, "sm_mbf");
        let ci = mr;
        const dr = class Te extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Te.prototype.shared_secret || u.Sg(Te.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    uri: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                    server_time: {
                      n: 5,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: u.qM.readBytes, bw: u.gp.writeBytes },
                    status: { n: 10, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                    steamguard_scheme: {
                      n: 11,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    steamid: {
                      n: 12,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = u.w0(Te.M())), Te.sm_mbf;
          }
          toObject(t = !1) {
            return Te.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(Te.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(Te.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new Te();
            return Te.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(Te.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(Te.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
          }
        };
        H(dr, "sm_m"), H(dr, "sm_mbf");
        let wi = dr;
        const yr = class ze extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ze.prototype.success || u.Sg(ze.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                    replacement_token: { n: 2, c: wi },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = u.w0(ze.M())), ze.sm_mbf;
          }
          toObject(t = !1) {
            return ze.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(ze.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(ze.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new ze();
            return ze.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(ze.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(ze.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
          }
        };
        H(yr, "sm_m"), H(yr, "sm_mbf");
        let bi = yr;
        const Sr = class Ae extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ae.prototype.steamid || u.Sg(Ae.M()),
              L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    version: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    signature: {
                      n: 3,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = u.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(t = !1) {
            return Ae.toObject(t, this);
          }
          static toObject(t, a) {
            return u.BT(Ae.M(), t, a);
          }
          static fromObject(t) {
            return u.Uq(Ae.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new Ae();
            return Ae.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return u.zj(Ae.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            u.i0(Ae.M(), t, a);
          }
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Request";
          }
        };
        H(Sr, "sm_m"), H(Sr, "sm_mbf");
        let Bi = Sr;
        class xt extends L.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), L.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return xt.toObject(t, this);
          }
          static toObject(t, a) {
            return t ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(t) {
            return new xt();
          }
          static deserializeBinary(t) {
            let a = new (I().BinaryReader)(t),
              f = new xt();
            return xt.deserializeBinaryFromReader(f, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return t;
          }
          serializeBinary() {
            var t = new (I().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {}
          serializeBase64String() {
            var t = new (I().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Response";
          }
        }
        var Mr;
        ((c) => {
          function t(O, k, P) {
            return O.SendMsg("TwoFactor.QueryTime#1", (0, w.I8)(Lr, k, P), Ur, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          c.QueryTime = t;
          function a(O, k, P) {
            return O.SendMsg(
              "TwoFactor.QueryStatus#1",
              (0, w.I8)(Dr, k, P),
              Pr,
              { ePrivilege: 1 },
            );
          }
          c.QueryStatus = a;
          function f(O, k, P) {
            return O.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, w.I8)(Vr, k, P),
              Gr,
              { ePrivilege: 1 },
            );
          }
          c.AddAuthenticator = f;
          function b(O, k, P) {
            return O.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, w.I8)(Zr, k, P),
              Qr,
              { ePrivilege: 1 },
            );
          }
          c.FinalizeAddAuthenticator = b;
          function M(O, k, P) {
            return O.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, w.I8)(Bi, k, P),
              xt,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          c.UpdateTokenVersion = M;
          function h(O, k, P) {
            return O.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, w.I8)(Jr, k, P),
              $r,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticator = h;
          function B(O, k, P) {
            return O.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, w.I8)(_t, k, P),
              pi,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticatorViaChallengeStart = B;
          function _(O, k, P) {
            return O.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, w.I8)(ci, k, P),
              bi,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticatorViaChallengeContinue = _;
        })(Mr || (Mr = {}));
        var Et = Object.defineProperty,
          Yr = Object.getOwnPropertyDescriptor,
          yi = (c, t, a) =>
            t in c
              ? Et(c, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[t] = a),
          bt = (c, t, a, f) => {
            for (
              var b = f > 1 ? void 0 : f ? Yr(t, a) : t, M = c.length - 1, h;
              M >= 0;
              M--
            )
              (h = c[M]) && (b = (f ? h(t, a, b) : h(b)) || b);
            return f && b && Et(t, a, b), b;
          },
          At = (c, t, a) => yi(c, typeof t != "symbol" ? t + "" : t, a);
        const Ut = 2,
          Wt = 0,
          xr = 1,
          fr = 2,
          tr = 3,
          Nt = 4,
          It = 5,
          Dt = 6,
          Xr = 7,
          hr = 8,
          Cr = 9,
          Ot = 10,
          cr = 11,
          Rr = 12,
          vr = 13,
          Ir = 14,
          ei = 15,
          Pt = 16;
        class Bt extends j.gf {
          constructor(t) {
            super(
              t.transport,
              (a) => this.onAuthComplete(a),
              t.onDeviceDetails,
              t.onShowAgreement,
            ),
              At(this, "m_eStatus", Wt),
              At(this, "m_steamid"),
              At(this, "m_strAccountName"),
              At(this, "m_strConfirmationAssociatedMessage", ""),
              At(this, "m_bUsingCodeOverride", !1),
              At(this, "m_strWeakAuthToken", ""),
              At(this, "m_weakAuthWebInterface"),
              At(this, "m_onGetMachineAuth"),
              At(this, "m_replacementAuthenticator"),
              At(this, "m_strErrorReference", ""),
              At(this, "m_onLoginComplete"),
              At(this, "onAuthComplete", (a) => {
                this.m_eStatus = a.bSuccess ? Ir : ei;
                let f;
                a.bSuccess
                  ? ((0, ce.wT)(
                      !!this.m_strAccountName && !!this.m_steamid,
                      "Missing account name or steamid on auth success",
                    ),
                    (f = {
                      ...a,
                      strAccountName: this.m_strAccountName,
                      steamid: this.m_steamid,
                    }))
                  : (f = { bSuccess: !1 }),
                  this.m_onLoginComplete && this.m_onLoginComplete(f);
              }),
              (0, N.Gn)(this),
              (this.m_onLoginComplete = t.onComplete),
              (this.m_onGetMachineAuth = t.onGetMachineAuth);
          }
          async Start(t, a, f) {
            if (this.m_eStatus !== Wt && this.m_eStatus !== fr)
              return (
                (0, K.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.Ze
              );
            const b = t.replace(/[^\x00-\x7F]/g, ""),
              M = a.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!b.length || !M.length) return l.nO;
            if (
              ((this.m_eStatus = xr),
              (this.m_bUsingCodeOverride = !1),
              t == "anonymous")
            )
              return (
                this.SetFailureState(j.eF.AnonymousLogin, Z.EResult(l.FK)), l.FK
              );
            try {
              const h = await Vt(this.m_transport, b);
              if (!h)
                return (
                  (0, K.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(j.eF.Network, Z.EResult(l.Sq)),
                  l.Sq
                );
              const B = (0, K.P8)(M, h),
                _ = w.w.Init($.iP);
              _.SetEMsg(ee.Kec),
                _.Body().set_account_name(b),
                _.Body().set_encrypted_password(B != null ? B : void 0),
                _.Body().set_encryption_timestamp(h.timestamp),
                _.Body().set_remember_login(!!f),
                _.Body().set_persistence(f ? wr.nW : wr.fH),
                _.Body().set_website_id(T.TS.WEBSITE_ID);
              try {
                _.Body().set_device_details(await this.GetDeviceDetails());
              } catch (k) {
                (0, K.ZI)("Failed to GetDeviceDetails"), (0, K.ZI)(k);
              }
              if (
                (_.Body().set_language((0, S.sfN)(T.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const k = await this.m_onGetMachineAuth(b);
                k.eresult == l.R && _.Body().set_guard_data(k.data);
              }
              await this.m_transport.MakeReady();
              const O = await $.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                _,
              );
              return (
                O.DEBUG_LogToConsole(),
                (0, N.h5)(async () => {
                  const k = O.GetEResult(),
                    P = O.Hdr().transport_error();
                  if (k !== l.R)
                    switch (k) {
                      case l.Um:
                        return (this.m_eStatus = fr), k;
                      case l.Sq:
                      case l.a_:
                        return (
                          this.SetFailureState(j.eF.Network, Z.EResult(l.Sq)), k
                        );
                      case l.h_:
                        return (
                          this.SetFailureState(
                            j.eF.RateLimitExceeded,
                            Z.EResult(k),
                          ),
                          k
                        );
                      case l.oH:
                        const U = O.Body().agreement_session_url();
                        if (
                          ((0, ce.wT)(
                            !!U,
                            "Missing agreement session URL for result",
                            k,
                          ),
                          this.m_onShowAgreement)
                        )
                          this.m_onShowAgreement(U);
                        else {
                          const V = document.location.href;
                          window.location.href = `${U}&redir=${encodeURIComponent(V)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = Wt),
                          k
                        );
                      case l.uN:
                      default:
                        return (
                          (0, K.ZI)(
                            `Failed to start auth session. Result: ${k} Transport: ${P}`,
                          ),
                          this.SetFailureState(
                            j.eF.Generic,
                            Z.EResult(k),
                            O.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          k
                        );
                    }
                  this.m_strAccountName = t;
                  const {
                    client_id: ue,
                    request_id: de,
                    interval: Mt,
                    allowed_confirmations: Ct = [],
                    steamid: Rt,
                    weak_token: D,
                  } = O.Body().toObject();
                  if (
                    ((0, ce.wT)(
                      Mt !== void 0 && !!ue && !!Rt,
                      "Missing poll interval, client ID, or steamid for result",
                      k,
                    ),
                    (this.m_msPollInterval = Mt * 1e3),
                    (this.m_strClientID = ue),
                    (this.m_rgRequestID = de),
                    (this.m_steamid = Rt),
                    (this.m_strWeakAuthToken = D != null ? D : ""),
                    Ct.find(({ confirmation_type: U }) => U === $.TY.ig))
                  ) {
                    const U = new FormData();
                    U.append("clientid", ue), U.append("steamid", Rt);
                    const V = `${T.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await X().post(V, U, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == l.R
                      )
                        return (
                          (this.m_eStatus = Nt), this.StartPolling(!0), l.R
                        );
                    } catch (Y) {
                      if (
                        ((0, K.tG)(
                          `checkdevice ajax to ${V} failed: ${Y.message}`,
                        ),
                        Y instanceof r.AxiosError)
                      ) {
                        const Jt = Y;
                        return Jt.response
                          ? (this.SetFailureState(
                              j.eF.Network,
                              Z.AjaxFailureWithCode(Jt.response.status),
                            ),
                            l.Sq)
                          : (this.SetFailureState(
                              j.eF.Network,
                              Z.AjaxFailureNoCode(),
                            ),
                            l.Sq);
                      }
                      return (
                        this.SetFailureState(j.eF.Network, Z.EResult(l.eH)),
                        l.eH
                      );
                    }
                  }
                  const yt = Gt(
                      Ct.map(
                        ({ confirmation_type: U }) => (
                          (0, ce.wT)(
                            U !== void 0,
                            "Missing confirmation type in allowed confirmations",
                          ),
                          U
                        ),
                      ),
                    ),
                    q = Ct.find(({ confirmation_type: U }) => U === yt);
                  switch (
                    (q &&
                      q.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        q.associated_message),
                    yt)
                  ) {
                    case $.TY.WM:
                      return (this.m_eStatus = vr), this.StartPolling(), k;
                    case $.TY.Xs:
                      this.m_eStatus = tr;
                      break;
                    case $.TY.$Y:
                      (this.m_eStatus = Nt), this.StartPolling(!1);
                      break;
                    case $.TY.bH:
                      (this.m_eStatus = It), this.StartPolling(!1);
                      break;
                    case $.TY.x0:
                      (this.m_eStatus = Dt), this.StartPolling(!1);
                      break;
                  }
                  return k;
                })
              );
            } catch (h) {
              return (
                (0, K.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(h)}`,
                ),
                (0, K.tG)(h),
                this.SetFailureState(j.eF.Generic, Z.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = Pt);
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
          async SendSteamGuardCode(t, a = !0) {
            if (t.length == 0) {
              switch (this.m_eStatus) {
                case Ot:
                  this.m_eStatus = tr;
                  break;
                case cr:
                  this.m_eStatus = It;
                  break;
                case It:
                case tr:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(l.R);
            }
            try {
              await this.m_transport.MakeReady();
              const f = this.m_eStatus === tr || this.m_eStatus === Ot,
                b = w.w.Init($.Qc);
              b.SetEMsg(ee.Kec),
                b.Body().set_client_id(this.m_strClientID),
                b.Body().set_steamid(this.m_steamid),
                b.Body().set_code(t),
                b.Body().set_code_type(f ? $.TY.Xs : $.TY.bH);
              const M = await $.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  b,
                ),
                h = M.GetEResult();
              if (h !== l.R) {
                if (!a)
                  return (
                    (0, K.ZI)(
                      `Failed to automatically update session with local SG info. Result ${h}. Transport ${M.Hdr().transport_error()}`,
                    ),
                    h
                  );
                switch (h) {
                  case l.QR:
                  case l.b7:
                    return (this.m_eStatus = f ? Ot : cr), h;
                  case l.ob:
                    return (
                      this.SetFailureState(j.eF.Expired, Z.EResult(h)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      h
                    );
                  case l.h_:
                    return (
                      this.SetFailureState(
                        j.eF.RateLimitExceeded,
                        Z.EResult(h),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      h
                    );
                  case l.oH:
                    const B = M.Body().agreement_session_url();
                    if (
                      ((0, ce.wT)(
                        !!B,
                        "Missing agreement session URL for result",
                        h,
                      ),
                      this.m_onShowAgreement)
                    )
                      this.m_onShowAgreement(B);
                    else {
                      const _ = document.location.href;
                      window.location.href = `${B}&redir=${encodeURIComponent(_)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = Wt),
                      h
                    );
                  default:
                    return (
                      (0, K.ZI)(
                        `Failed to update auth session with SG code. Result: ${h}`,
                      ),
                      this.SetFailureState(j.eF.Generic, Z.EResult(h)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      h
                    );
                }
              }
              return (this.m_eStatus = vr), this.StartPolling(), h;
            } catch (f) {
              return (
                (0, K.ZI)(`Failed to update auth session with SG code. ${f}`),
                this.SetFailureState(j.eF.Generic, Z.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case Dt:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = It);
                return;
              case Nt:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = tr);
                return;
              default:
                (0, K.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = Xr;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new zt.D(
              T.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const t = w.w.Init(_t),
                a = await Mr.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  t,
                );
              l.R != a.GetEResult()
                ? (a.DEBUG_LogToConsole(),
                  (0, K.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    a.GetEResult(),
                  ),
                  this.SetFailureState(
                    j.eF.MoveAuthenticator,
                    Z.EResult(a.GetEResult()),
                  ))
                : (this.m_eStatus = hr);
            } catch (t) {
              (0, K.ZI)(
                "An unexpected error occured while moving an authenticator",
                t,
              ),
                this.SetFailureState(j.eF.MoveAuthenticator, Z.EResult(l.zi));
            }
          }
          async ResendMoveCode() {
            (0, ce.wT)(
              !!this.m_weakAuthWebInterface,
              "Resending move code before StartMoveAuthenticator",
            );
            const t = w.w.Init(_t),
              a = await Mr.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                t,
              );
            l.R != a.GetEResult() &&
              (a.DEBUG_LogToConsole(),
              (0, K.ZI)(
                "An unexpected error occured while adding an authenticator",
                a.GetEResult(),
              )),
              (this.m_eStatus = hr);
          }
          async FinishMoveAuthenticator(t) {
            (0, ce.wT)(
              !!this.m_weakAuthWebInterface,
              "Finishing authenticator move before StartMoveAuthenticator",
            );
            const a = w.w.Init(ci);
            a.Body().set_sms_code(t),
              a.Body().set_generate_new_token(!0),
              a.Body().set_version(Ut);
            const f = await Mr.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              a,
            );
            if (l.c3 == f.GetEResult()) this.m_eStatus = Rr;
            else if (!f.Body().success())
              f.DEBUG_LogToConsole(),
                (0, K.ZI)(
                  "Error when calling RemoveAuthenticatorViaChallengeContinue",
                  f.GetEResult(),
                ),
                this.SetFailureState(
                  j.eF.MoveAuthenticator,
                  Z.EResult(f.GetEResult()),
                );
            else {
              f.DEBUG_LogToConsole();
              const b = f.Body().replacement_token();
              (0, ce.wT)(
                !!b,
                "Missing replacement token on successful authenticator move",
              ),
                (this.m_replacementAuthenticator = (0, j.FU)(b.toObject())),
                (this.m_eStatus = Cr),
                (this.m_bUsingCodeOverride = !1);
            }
          }
          FinishMoveRecovery() {
            this.m_eStatus = It;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case It:
              case cr:
              case tr:
              case Ot:
              case Dt:
              case Nt:
              case Xr:
              case hr:
              case Rr:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case Dt:
              case Nt:
                this.m_eStatus = Wt;
                break;
              case It:
              case cr:
                this.m_eStatus = this.m_bUsingCodeOverride ? Dt : Wt;
                break;
              case Xr:
              case hr:
              case Rr:
                this.m_eStatus = (this.m_bUsingCodeOverride, It);
                break;
              case tr:
              case Ot:
                this.m_eStatus = this.m_bUsingCodeOverride ? Nt : Wt;
                break;
              default:
                (0, K.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(t, a, f = "") {
            (this.m_eStatus = ei),
              (this.m_eFailureState = t),
              (this.m_strErrorReference = a),
              (this.m_strExtendedErrorMessage = f);
          }
          SetOnLoginComplete(t) {
            this.m_onLoginComplete = t;
          }
        }
        bt([N.sH], Bt.prototype, "m_eStatus", 2),
          bt([N.sH], Bt.prototype, "m_strErrorReference", 2),
          bt([x.oI], Bt.prototype, "Start", 1),
          bt([x.oI], Bt.prototype, "SendSteamGuardCode", 1),
          bt([x.oI], Bt.prototype, "UseCodeOverride", 1),
          bt([x.oI], Bt.prototype, "CantAccessCode", 1),
          bt([x.oI], Bt.prototype, "StartMoveAuthenticator", 1),
          bt([x.oI], Bt.prototype, "ResendMoveCode", 1),
          bt([x.oI], Bt.prototype, "FinishMoveAuthenticator", 1),
          bt([x.oI], Bt.prototype, "FinishMoveRecovery", 1),
          bt([x.oI], Bt.prototype, "GoBack", 1),
          bt([N.XI], Bt.prototype, "SetFailureState", 1),
          bt([x.oI], Bt.prototype, "SetOnLoginComplete", 1);
        async function Vt(c, t) {
          const a = w.w.Init($.qu);
          a.Body().set_account_name(t), a.SetEMsg(ee.Kec);
          try {
            await c.MakeReady();
            const f = await $.kX.GetPasswordRSAPublicKey(c, a);
            if ((f.DEBUG_LogToConsole(), f.GetEResult() !== l.R))
              return (
                (0, K.ZI)(
                  `Failed to get RSA key with EResult: ${f.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: b,
              publickey_mod: M,
              timestamp: h,
            } = f.Body().toObject();
            return !b || !M || !h
              ? ((0, K.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: b, publickey_mod: M, timestamp: h })}`,
                ),
                null)
              : { publickey_exp: b, publickey_mod: M, timestamp: h };
          } catch (f) {
            return (
              (0, K.ZI)(`Failed to get RSA key: ${JSON.stringify(f)}`), null
            );
          }
        }
        const mi = [
          $.TY.x0,
          $.TY.bH,
          $.TY.Xs,
          $.TY.WM,
          $.TY.oP,
          $.TY.$Y,
        ].reduce((c, t, a) => ((c[t] = a), c), {});
        function Gt(c) {
          let t = c[0] || $.TY.oP;
          return c.length > 1 && (t = c.sort((a, f) => mi[a] - mi[f])[0]), t;
        }
        function ti(c) {
          const [t, a] = (0, E.useState)(new Bt(c));
          return (
            (0, E.useEffect)(() => {
              t == null || t.SetOnLoginComplete(c.onComplete);
            }, [t, c.onComplete]),
            (0, me.q3)(() => ({
              strAccountName: t.GetAccountName(),
              steamid: t.GetSteamID(),
              eFailureState: t.GetFailureState(),
              strExtendedErrorMessage: t.GetExtendedErrorMessage(),
              strErrorReference: t.GetErrorReference(),
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
              reset: () => a(new Bt(c)),
              goBack: t.GoBack,
              setTokenToRevoke: t.SetTokenToRevoke,
            }))
          );
        }
        function kr(c) {
          return c ? 7 : 5;
        }
        function Er(c, t) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(c) && c.length <= kr(t);
        }
        function ri(c, t) {
          return Er(c, t) && c.length === kr(t);
        }
        const Z = {
          EResult: (c) => `e${c}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (c) => `af-${c}`,
        };
        var di = Object.defineProperty,
          ii = Object.getOwnPropertyDescriptor,
          Si = (c, t, a) =>
            t in c
              ? di(c, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[t] = a),
          Tr = (c, t, a, f) => {
            for (
              var b = f > 1 ? void 0 : f ? ii(t, a) : t, M = c.length - 1, h;
              M >= 0;
              M--
            )
              (h = c[M]) && (b = (f ? h(t, a, b) : h(b)) || b);
            return f && b && di(t, a, b), b;
          },
          Mi = (c, t, a) => Si(c, typeof t != "symbol" ? t + "" : t, a);
        const gr = 0,
          fi = 1,
          Wr = 2,
          hi = 3,
          i = 4,
          n = 5;
        class o extends j.gf {
          constructor(t) {
            super(
              t.transport,
              (a) => {
                (this.m_eStatus = a.bSuccess ? hi : i), t.onComplete(a);
              },
              t.onDeviceDetails,
            ),
              Mi(this, "m_eStatus", gr),
              (0, N.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== gr)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.zi
              );
            this.m_eStatus = fi;
            try {
              await this.m_transport.MakeReady();
              const t = w.w.Init($.R9);
              t.SetEMsg(ee.Kec);
              try {
                t.Body().set_device_details(await this.GetDeviceDetails());
              } catch (O) {
                console.error("Failed to GetDeviceDetails"), console.log(O);
              }
              t.Body().set_website_id(T.TS.WEBSITE_ID);
              const a = await $.kX.BeginAuthSessionViaQR(this.m_transport, t),
                f = a.GetEResult(),
                b = a.Hdr().transport_error();
              if (f !== l.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${f} Transport: ${b}`,
                  ),
                  (this.m_eFailureState = j.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  f
                );
              const {
                client_id: M,
                challenge_url: h,
                interval: B,
                request_id: _,
              } = a.Body().toObject();
              return (
                (0, ce.wT)(
                  B !== void 0,
                  "Missing poll interval for QR auth session",
                ),
                (this.m_strClientID = M),
                (this.m_strChallengeURL = h),
                (this.m_msPollInterval = B * 1e3),
                (this.m_rgRequestID = _),
                (this.m_eStatus = Wr),
                this.StartPolling(!1),
                f
              );
            } catch (t) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(t)}`,
                ),
                (this.m_eFailureState = j.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = n);
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
        Tr([N.sH], o.prototype, "m_eStatus", 2);
        function d(c) {
          const [t, a] = (0, E.useState)(new o(c));
          return (
            (0, E.useEffect)(
              () => (
                t.Start(),
                () => {
                  t.Stop();
                }
              ),
              [t],
            ),
            (0, me.q3)(() => ({
              strChallengeURL: t.GetChallengeURL(),
              strClientID: t.GetClientID(),
              eFailureState: t.GetFailureState(),
              eStatus: t.GetStatus(),
              bHadRemoteInteraction: t.BHadRemoteInteraction(),
              reset: () => a(new o(c)),
              setTokenToRevoke: t.SetTokenToRevoke,
            }))
          );
        }
        function g(c) {
          switch (c) {
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
        async function y() {
          var c, t, a, f, b, M;
          const [h, B, _, O] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            (a =
              (t =
                (c = SteamClient == null ? void 0 : SteamClient.Auth) == null
                  ? void 0
                  : c.GetLocalHostname) == null
                ? void 0
                : t.call(c)) != null
              ? a
              : "",
            (M =
              (b =
                (f = SteamClient == null ? void 0 : SteamClient.Auth) == null
                  ? void 0
                  : f.GetMachineID) == null
                ? void 0
                : b.call(f)) != null
              ? M
              : void 0,
          ]);
          return {
            os_type: h,
            device_friendly_name: _,
            machine_id: O,
            platform_type: $.SS.w0,
            gaming_device_type: B.eGamingDeviceType,
          };
        }
        async function R() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: $.SS.tS,
          };
        }
        function A(c) {
          var t, a, f;
          const {
              onSuccess: b,
              secureComputer: M = !0,
              isProbablySharedPC: h = !1,
            } = c,
            B = (0, E.useCallback)(
              (Y) => {
                if (Y.bSuccess) {
                  const {
                    strRefreshToken: Jt,
                    strAccessToken: ir,
                    strAccountName: $t,
                    strNewGuardData: gi,
                  } = Y;
                  b({
                    strRefreshToken: Jt,
                    strAccessToken: ir,
                    strAccountName: $t,
                    strNewGuardData: gi,
                  });
                }
              },
              [b],
            ),
            _ = ti({
              transport: c.transport,
              onComplete: B,
              onDeviceDetails: c.onDeviceDetails,
              onGetMachineAuth: c.onGetMachineAuth,
              onShowAgreement: c.onShowAgreement,
            }),
            [O, k] = (0, E.useState)(gr),
            P = "Login_RememberMeSetting",
            [ue, de] = (0, E.useState)(
              (f =
                (a = (t = c.refreshInfo) == null ? void 0 : t.account_name) !=
                null
                  ? a
                  : c.defaultAccountName) != null
                ? f
                : "",
            ),
            [Mt, Ct] = (0, E.useState)(""),
            [Rt, D] = (0, E.useState)(
              M &&
                !h &&
                (localStorage == null ? void 0 : localStorage.getItem(P)) !=
                  "0",
            ),
            yt = !(_.eStatus === Wt || _.eStatus === xr || _.eStatus === fr),
            q = () =>
              !ue || !Mt ? Promise.resolve(l.nO) : _.start(ue, Mt, Rt),
            U = () => {
              (0, K.tG)(`Logging in offline with username ${ue}`),
                SteamClient.User.SetLoginCredentials(ue, Mt, Rt),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, E.useEffect)(() => {
              var Y;
              (Y = c.refreshInfo) != null &&
                Y.login_token_id &&
                _.setTokenToRevoke(c.refreshInfo.login_token_id);
            }, [c.refreshInfo, _]),
            {
              password: _,
              onComplete: B,
              eQRStatus: O,
              onQRStatusChange: k,
              strAccountName: ue,
              onAccountNameChange: de,
              strPassword: Mt,
              onPasswordChange: Ct,
              bRememberMe: Rt,
              onRememberMeChange: (Y) => {
                D(Y),
                  localStorage == null ||
                    localStorage.setItem(P, Y ? "1" : "0");
              },
              onPasswordSubmit: q,
              bInPasswordFlow: yt,
              onTryOffline: U,
            }
          );
        }
        function J(c, t = "") {
          let a = { title: "", description: "" };
          switch (c) {
            case j.eF.None:
              return { title: "", description: "" };
            case j.eF.Expired:
              a = {
                title: (0, z.we)("#Login_Error_Expired_Title"),
                description: (0, z.we)("#Login_Error_Expired_Description"),
              };
              break;
            case j.eF.Network:
              a = {
                title: (0, z.we)("#Login_Error_Network_Title"),
                description: (0, z.we)("#Login_Error_Network_Description"),
              };
              break;
            case j.eF.MoveAuthenticator:
              a = {
                title: (0, z.we)("#Error_Generic"),
                description: (0, z.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case j.eF.RateLimitExceeded:
              a = {
                title: (0, z.we)("#Login_Error_RateLimit_Title"),
                description: (0, z.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case j.eF.AnonymousLogin:
              a = {
                title: (0, z.we)("#Login_Error_Anonymous_Title"),
                description: (0, z.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case j.eF.Generic:
            default:
              a = {
                title: (0, z.we)("#Error_Generic"),
                description: (0, z.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return t && (a.description = t), a;
        }
        var Q = v(78412),
          p = v.n(Q),
          Tt = v(56589),
          kt = v.n(Tt),
          Or = v(5804),
          St = v.n(Or),
          jt = ((c) => (
            (c[(c.L = 1)] = "L"),
            (c[(c.M = 0)] = "M"),
            (c[(c.Q = 3)] = "Q"),
            (c[(c.H = 2)] = "H"),
            c
          ))(jt || {});
        function pr(c, t, a) {
          const f = c.length,
            b = c[0].length,
            M = (f + 2) * b,
            h = new Uint8Array(40 + M);
          let B = 0;
          (h[B++] = 71),
            (h[B++] = 73),
            (h[B++] = 70),
            (h[B++] = 56),
            (h[B++] = 57),
            (h[B++] = 97),
            (h[B++] = f),
            (h[B++] = 0),
            (h[B++] = b),
            (h[B++] = 0),
            (0, ce.wT)(
              t != "transparent" || a != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (h[B++] = 161),
            (h[B++] = 0),
            (h[B++] = 0),
            t == "transparent"
              ? ((h[B++] = 0), (h[B++] = 0), (h[B++] = 0))
              : ((h[B++] = t[0]), (h[B++] = t[1]), (h[B++] = t[2])),
            a == "transparent"
              ? ((h[B++] = 0), (h[B++] = 0), (h[B++] = 0))
              : ((h[B++] = a[0]), (h[B++] = a[1]), (h[B++] = a[2])),
            (h[B++] = 255),
            (h[B++] = 255),
            (h[B++] = 255),
            (h[B++] = 255),
            (h[B++] = 255),
            (h[B++] = 255),
            (t == "transparent" || a == "transparent") &&
              ((h[B++] = 33),
              (h[B++] = 249),
              (h[B++] = 4),
              (h[B++] = 1),
              (h[B++] = 0),
              (h[B++] = 0),
              (h[B++] = t == "transparent" ? 0 : 1),
              (h[B++] = 0)),
            (h[B++] = 44),
            (h[B++] = 0),
            (h[B++] = 0),
            (h[B++] = 0),
            (h[B++] = 0),
            (h[B++] = f),
            (h[B++] = 0),
            (h[B++] = b),
            (h[B++] = 0),
            (h[B++] = 0);
          const _ = 7;
          h[B++] = _;
          for (let O = 0; O < c.length; O++) {
            (h[B++] = f + 1), (h[B++] = 2 ** _);
            for (let k = 0; k < c.length; k++) h[B++] = c[O][k] ? 0 : 1;
          }
          return (
            (h[B++] = 1), (h[B++] = 2 ** _ + 1), (h[B++] = 0), (h[B++] = 59), h
          );
        }
        function Ht(
          c,
          {
            activeBitColor: t = [33, 35, 40],
            inactiveBitColor: a = [255, 255, 255],
            borderWidth: f = 3,
          } = {},
          b = {},
        ) {
          const M = kt()(c, b).modules;
          if (!M) return null;
          let h = [];
          for (let B = 0; B < f; B++) h.push(Array(M.length + f * 2).fill(!1));
          for (let B = 0; B < M.length; B++)
            h.push([
              ...Array.from({ length: f }, () => !1),
              ...M[B],
              ...Array.from({ length: f }, () => !1),
            ]);
          for (let B = 0; B < f; B++) h.push(Array(M.length + f * 2).fill(!1));
          return pr(h, t, a);
        }
        function qr(c) {
          let {
            quality: t = 0,
            children: a,
            className: f,
            activeBitColor: b = [33, 35, 40],
            inactiveBitColor: M = [255, 255, 255],
            borderWidth: h = 3,
            typeNumber: B = 6,
          } = c;
          const _ = F(a, {
            typeNumber: B,
            errorCorrectLevel: t,
            activeBitColor: b,
            inactiveBitColor: M,
            borderWidth: h,
          });
          if (!_) return null;
          const O = new Blob([_], { type: "image/gif" }),
            k = URL.createObjectURL(O),
            P = `rgb(${M[0]}, ${M[1]}, ${M[2]})`;
          return (0, m.jsx)("div", {
            className: (0, ae.A)(St().QRBits, f),
            style: { "--qr-bright-color": P },
            children: (0, m.jsx)("img", {
              className: St().QRImg,
              src: k,
              alt: "",
            }),
          });
        }
        function F(c, t) {
          const {
            typeNumber: a,
            errorCorrectLevel: f,
            activeBitColor: b,
            inactiveBitColor: M,
            borderWidth: h,
          } = t;
          return (0, E.useMemo)(
            () =>
              Ht(
                c,
                { activeBitColor: b, inactiveBitColor: M, borderWidth: h },
                { typeNumber: a, errorCorrectLevel: f },
              ),
            [c, a, f, b, M, h],
          );
        }
        var e = v(15557),
          s = v.n(e),
          C = v(19316);
        function ni(c) {
          const {
              transport: t,
              onComplete: a,
              onStatusChange: f,
              platform: b,
              styling: M = "default",
              activeBitValue: h = 255,
            } = c,
            B = T.TS.IN_STEAMUI ? y : R,
            {
              eStatus: _,
              strChallengeURL: O,
              strClientID: k,
              bHadRemoteInteraction: P,
              reset: ue,
              setTokenToRevoke: de,
            } = d({ transport: t, onComplete: a, onDeviceDetails: B });
          (0, E.useEffect)(() => f && f(_), [f, _]);
          const Mt = _ === Wr && O ? O : T.TS.STORE_BASE_URL,
            Ct = _ === gr || _ === fi || P,
            Rt = _ === i,
            D = _ === hi,
            yt = D
              ? (0, m.jsx)(Ii, {})
              : Rt
                ? (0, m.jsx)(Qt, { reset: ue })
                : Ct
                  ? (0, m.jsx)(Zt, { size: "small" })
                  : null,
            q = Ct || Rt || D;
          (0, E.useEffect)(() => {
            var Y;
            (Y = c.refreshInfo) != null &&
              Y.login_token_id &&
              de(c.refreshInfo.login_token_id);
          }, [c.refreshInfo, de]);
          const U = T.TS.EUNIVERSE !== S.wLO,
            V = `rgb(${h}, ${h}, ${h})`;
          return (0, m.jsx)("div", {
            className: s().Column,
            children: (0, m.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, m.jsx)(qr, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: U ? [h, 0, h] : [h, h, h],
                  quality: Ci(Mt),
                  className: (0, ae.A)(
                    s().LoginQR,
                    M == "deck" && s().QRLoginDeck,
                    M == "vr" && s().QRLoginVR,
                    q && s().Blur,
                    U && s().NonPublic,
                  ),
                  children: Mt,
                }),
                q &&
                  (0, m.jsx)("div", {
                    className: s().Overlay,
                    children: (0, m.jsx)("div", {
                      className: s().Box,
                      style: { "--qr-bright-color": V },
                      children: yt,
                    }),
                  }),
              ],
            }),
          });
        }
        function Ci(c) {
          return c.length <= 90 ? jt.Q : void 0;
        }
        function Zt(c) {
          const { size: t } = c;
          return (0, m.jsx)("div", {
            className: (0, ae.A)(
              s().Loading,
              t == "small" && s().Small,
              (t == "medium" || !t) && s().Medium,
              t == "large" && s().Large,
            ),
          });
        }
        function Qt(c) {
          return (0, m.jsx)(C.$n, {
            onClick: c.reset,
            className: s().QRFailure,
            children: (0, m.jsx)(Kt, {}),
          });
        }
        function Kt(c) {
          return (0, m.jsxs)("svg", {
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
              (0, m.jsx)("path", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: "30",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
              }),
              (0, m.jsx)("polygon", {
                points: "147.639,108.361 245.755,10.166 245.834,108.361",
                fill: "#fff",
              }),
            ],
          });
        }
        function Ii() {
          return (0, m.jsx)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "45px", height: "45px" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: (0, m.jsx)("polyline", {
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
        var ki = v(72609);
        const Ai = (0, E.createContext)(!1),
          si = () => (0, E.useContext)(Ai);
        function Ei() {
          return (0, m.jsx)("div", {
            className: p().Login,
            children: (0, m.jsx)(Ri, {
              reset: () => window.location.reload(),
              failure: j.eF.Generic,
            }),
          });
        }
        function Wi(c) {
          const t = _n(c.redirectUrl),
            a = (f) => {
              const { strRefreshToken: b } = f;
              (0, j.yp)(b).then(
                (M) => c.onComplete(M),
                () => c.onComplete(j.wI.k_PrimaryDomainFail),
              );
            };
          return t
            ? null
            : (0, m.jsx)(te, {
                ...c,
                creationRedirectUrl: c.redirectUrl,
                onSuccess: a,
                embedded: c.theme === "modal",
              });
        }
        function te(c) {
          const { embedded: t, children: a, ...f } = c;
          return (0, m.jsx)(Ft.tH, {
            children: (0, m.jsx)(Ai.Provider, {
              value: t != null ? t : !1,
              children: (0, m.jsxs)("div", {
                className: p().Login,
                children: [(0, m.jsx)($i, { ...f }), a],
              }),
            }),
          });
        }
        function re(c) {
          if ((0, vt.q)()) return null;
          const { variant: t } = c;
          return typeof t == "function"
            ? (0, m.jsx)(rr, {
                onClick: t,
                children: (0, z.we)("#Login_Help_SignIn"),
              })
            : (0, m.jsx)(rr, {
                href: `${T.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, z.we)("#Login_Help_SignIn"),
              });
        }
        function ne(c) {
          const { variant: t, redirectUrl: a } = c;
          if (typeof t == "function")
            return (0, m.jsx)(rr, {
              inline: !0,
              onClick: t,
              children: (0, z.we)("#Login_CreateAccount"),
            });
          {
            const f = a ? `?redir=${encodeURIComponent(a)}` : "";
            switch (t != null ? t : "normal") {
              default:
              case "normal":
                return (0, m.jsx)(rr, {
                  inline: !0,
                  href: `${T.TS.STORE_BASE_URL}join/${f}`,
                  children: (0, z.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, m.jsx)(rr, {
                  inline: !0,
                  href: `${T.TS.PARTNER_BASE_URL}${f}`,
                  children: (0, z.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function Ki(c) {
          const { launcherType: t, variant: a, redirectUrl: f } = c;
          if (t === S.A2g || a == "none") return null;
          const b = t !== void 0;
          let M;
          switch (a != null ? a : "normal") {
            default:
            case "normal":
              M = "#Login_NoSteamAccount";
              break;
            case "partner":
              M = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, m.jsxs)("div", {
            className: (0, ae.A)(p().AccountCreation, b && p().InClient),
            children: [
              (0, m.jsx)("span", {
                className: p().AccountCreationPrompt,
                children: (0, z.we)(M),
              }),
              (0, m.jsx)(ne, { variant: a, redirectUrl: f }),
            ],
          });
        }
        function Ji() {
          const c =
            (window == null ? void 0 : window.location) &&
            (0, se.f3)(window.location, "need_password");
          return c !== void 0 && c !== "false" && c !== "0";
        }
        function $i(c) {
          const {
              transport: t,
              onSuccess: a,
              platform: f,
              autoFocus: b,
              refreshInfo: M,
              renderSuccess: h = () => (0, m.jsx)(Fn, {}),
              lastResult: B,
              joinLinkVariant: _,
              defaultAccountName: O,
              secureComputer: k = !0,
              isProbablySharedPC: P = !1,
              onShowAgreement: ue,
              creationRedirectUrl: de,
            } = c,
            Mt = T.TS.IN_STEAMUI ? y : R,
            Ct = T.TS.IN_STEAMUI
              ? (Y) => SteamClient.Auth.GetSteamGuardData(Y)
              : null,
            Rt = Ji(),
            D = A({
              transport: t,
              platform: f,
              onSuccess: a,
              refreshInfo: M,
              onDeviceDetails: Mt,
              onGetMachineAuth: Ct,
              defaultAccountName: O,
              secureComputer: k,
              isProbablySharedPC: P,
              onShowAgreement: ue,
            }),
            yt = si(),
            q = (0, E.useId)();
          if (B != null && B != l.R)
            return (0, m.jsx)("div", {
              className: p().Login,
              children: (0, m.jsx)(Ri, {
                reset: () => window.location.reload(),
                failure: j.eF.Generic,
                errorReference: B.toString(),
                extendedErrorMessage: D.password.strExtendedErrorMessage,
              }),
            });
          const U = !(0, T.Y2)();
          if (!D.bInPasswordFlow) {
            const Y = (0, m.jsxs)("div", {
              className: (0, ae.A)(p().SideBySide, yt && p().Embedded),
              children: [
                (0, m.jsx)(Xi, {
                  strAccountName: D.strAccountName,
                  onAccountNameChange: D.onAccountNameChange,
                  strPassword: D.strPassword,
                  onPasswordChange: D.onPasswordChange,
                  bRememberMe: D.bRememberMe,
                  onRememberMeChange: D.onRememberMeChange,
                  onSubmit: D.onPasswordSubmit,
                  status: D.password.eStatus,
                  autoFocus: b,
                  secureComputer: k,
                  refreshInfo: c.refreshInfo,
                }),
                U &&
                  (0, m.jsx)(tn, {
                    transport: t,
                    onQRStatusChange: D.onQRStatusChange,
                    onComplete: D.onComplete,
                    platform: f,
                    refreshInfo: M,
                  }),
              ],
            });
            if (yt) {
              const ir = T.TS.IN_STEAMUI,
                $t = ir ? T.TS.LAUNCHER_TYPE : void 0;
              return (0, m.jsxs)(ur, {
                className: (0, ae.A)(p().EmbeddedRoot, ir && p().InClient),
                children: [
                  !ir && !1,
                  !c.refreshInfo &&
                    (0, m.jsx)(Li, {
                      realm: T.TS.EREALM,
                      launcherType: $t,
                      className: p().HeaderLogo,
                      onBack: c.onBack,
                    }),
                  (0, m.jsx)(Ui, { refreshInfo: M }),
                  Y,
                  (0, m.jsxs)("div", {
                    className: (0, ae.A)(
                      p().EmbeddedRootFooter,
                      ir && p().InClient,
                    ),
                    children: [
                      (0, m.jsx)(re, { variant: c.helpLinkVariant }),
                      (0, m.jsx)(Ki, {
                        launcherType: $t,
                        variant: _,
                        redirectUrl: de,
                      }),
                    ],
                  }),
                ],
              });
            }
            const Jt = (0, m.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, m.jsx)("h2", {
                  className: p().PrimaryHeader,
                  id: q,
                  children: c.refreshInfo
                    ? (0, z.we)("#Login_RefreshSignIn")
                    : (0, z.we)("#Login_SignInTitle"),
                }),
                (0, m.jsx)(Ui, { refreshInfo: c.refreshInfo }),
              ],
            });
            return (0, m.jsxs)(ai, {
              title: Jt,
              titleId: q,
              children: [Rt && (0, m.jsx)(Yi, {}), Y],
            });
          }
          const V = D.password.eStatus;
          switch (V) {
            case vr:
              return c.renderLoading
                ? (0, m.jsx)(m.Fragment, { children: c.renderLoading() })
                : (0, m.jsx)(gn, {});
            case It:
            case cr:
            case tr:
            case Ot:
              (0, ce.wT)(
                !!D.password.strAccountName,
                "Missing account name in login session for status",
                V,
              );
              const Y = V === It || V === cr;
              return (0, m.jsx)(bn, {
                type: Y ? "mobile" : "email",
                onSubmitCode: D.password.addCode,
                status: V,
                associatedLabel: D.password.strConfirmationAssociatedMessage,
                accountName: D.password.strAccountName,
                onBack: D.password.goBack,
                onCodeHelp: c.onCodeHelp,
              });
            case Dt:
            case Nt:
              (0, ce.wT)(
                !!D.password.strAccountName,
                "Missing account name in login session for status",
                V,
              );
              const Jt = V === Dt;
              return (0, m.jsx)(Rn, {
                type: Jt ? "mobile" : "email",
                accountName: D.password.strAccountName,
                onUseCodeOverride: D.password.useCodeOverride,
                onCodeHelp: c.onCodeHelp,
              });
            case Pt:
              return (0, m.jsx)(wn, { reset: D.password.reset });
            case ei:
              return (0, m.jsx)(Ri, {
                reset: D.password.reset,
                failure: D.password.eFailureState,
                onRequestOffline: D.onTryOffline,
                errorReference: D.password.strErrorReference,
                extendedErrorMessage: D.password.strExtendedErrorMessage,
              });
            case Ir:
              return (0, m.jsx)(ai, { compact: !0, children: h() });
            default:
              return (
                (0, K.ZI)(`Unknown Phase: ${V}`),
                (0, m.jsx)(Ri, {
                  reset: D.password.reset,
                  failure: j.eF.Generic,
                  onRequestOffline: D.onTryOffline,
                  errorReference: D.password.strErrorReference,
                  extendedErrorMessage: D.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function Ui(c) {
          var t, a;
          if (!c.refreshInfo) return null;
          let f;
          switch (
            (a = (t = c.refreshInfo) == null ? void 0 : t.reason) != null
              ? a
              : l.zi
          ) {
            case l.zi:
            case l.Vr:
            default:
              f = "#Login_RefreshReason_Generic";
              break;
            case l.KH:
              f = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case l.CF:
              f = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case l.Um:
              f = "#Login_RefreshReason_InvalidPassword";
              break;
            case l.fY:
              f = "#Login_RefreshReason_Revoked";
              break;
            case l.ob:
              f = "#Login_RefreshReason_Expired";
              break;
            case l.cr:
              f = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case l.uN:
              f = "#Login_RefreshReason_AccountDisabled";
              break;
            case l.sG:
              f = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case l.h_:
              f = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, m.jsxs)("div", {
            className: p().RefreshReasonContainer,
            children: [
              (0, m.jsx)("div", {
                className: p().RefreshTitle,
                children: (0, z.we)("#Login_RefreshSignIn"),
              }),
              (0, m.jsx)("div", {
                className: p().RefreshReason,
                children: (0, z.we)(f),
              }),
            ],
          });
        }
        function Yi() {
          return (0, m.jsx)("div", {
            className: p().ConfirmCredntialsNag,
            children: (0, z.we)("#Login_ConfirmCredentials"),
          });
        }
        function Xi(c) {
          const {
              onSubmit: t,
              status: a,
              autoFocus: f,
              refreshInfo: b,
              strAccountName: M,
              onAccountNameChange: h,
              strPassword: B,
              onPasswordChange: _,
              bRememberMe: O,
              onRememberMeChange: k,
              secureComputer: P = !0,
            } = c,
            [ue, de] = (0, E.useState)(!1),
            Mt = si(),
            Ct = In(),
            Rt = () => {
              t().then(() => {
                Ct() && de(!1);
              });
            },
            D = a === xr || a === vr,
            yt = a === fr && !ue,
            q = yt
              ? (0, m.jsx)(Oi, {
                  children: (0, z.we)("#Login_CheckCredentials"),
                })
              : (0, m.jsx)(Oi, { children: "\xA0" }),
            U = f && !M,
            V = f && !!M,
            Y = !!c.refreshInfo,
            Jt = (0, E.useId)(),
            ir = (0, E.useId)();
          return (0, m.jsxs)(Zi, {
            onSubmit: Rt,
            className: p().LoginForm,
            children: [
              (0, m.jsx)(Di, {
                tone: yt ? "danger" : void 0,
                label: (0, m.jsx)(ji, {
                  highlight: !0,
                  inputId: Jt,
                  children: (0, z.we)("#Login_SignIn_WithAccountName"),
                }),
                value: M,
                onChange: ($t) => {
                  de(!0), h($t);
                },
                autoFocus: U,
                disabled: Y,
                id: Jt,
              }),
              (0, m.jsx)(Di, {
                tone: yt ? "danger" : void 0,
                label: (0, m.jsx)(ji, {
                  inputId: ir,
                  children: (0, z.we)("#Login_Password"),
                }),
                value: B,
                onChange: ($t) => {
                  de(!0), _($t);
                },
                type: "password",
                autoFocus: V,
                id: ir,
              }),
              P
                ? (0, m.jsx)(ie.he, {
                    toolTipContent: (0, z.we)("#Login_RememberMe_Tooltip"),
                    direction: "bottom",
                    children: (0, m.jsx)(cn, {
                      label: (0, z.we)("#Login_RememberMe_Short"),
                      value: O,
                      onChange: k,
                    }),
                  })
                : (0, m.jsx)("div", {
                    className: p().InsecureComputer,
                    children: (0, z.we)("#Login_InsecureComputer"),
                  }),
              (0, m.jsx)(mn, { loading: D, refreshLogin: Y }),
              q,
              !Mt &&
                (0, m.jsx)(rr, {
                  href: `${T.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, z.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const en = 700;
        function tn(c) {
          const t = (0, Lt.R7)(),
            a = () => t.ownerWindow.screen.width < en,
            [f, b] = (0, E.useState)(a());
          return (
            (0, x.l6)(t.ownerWindow, "resize", () => {
              b(a());
            }),
            (0, m.jsx)("div", {
              className: p().QRSection,
              children: f ? (0, m.jsx)(sn, { ...c }) : (0, m.jsx)(nn, { ...c }),
            })
          );
        }
        function rn(c) {
          const t =
            T.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(c.redirectURL);
          return (0, m.jsx)("div", {
            className: p().GuestLayout,
            children: (0, m.jsx)(ai, {
              compact: !0,
              children: (0, m.jsxs)("div", {
                className: p().GuestContainer,
                children: [
                  (0, m.jsx)("div", {
                    className: p().GuestText,
                    children: (0, z.oW)(
                      "#Login_Guest",
                      (0, m.jsx)("a", {
                        href: `${t}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, m.jsx)("a", {
                    className: p().GuestLink,
                    href: `${t}`,
                    children: (0, m.jsx)("button", {
                      className: p().GuestButton,
                      children: (0, z.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function nn(c) {
          return (0, m.jsx)(Ni, { ...c });
        }
        function sn(c) {
          const [t, a] = (0, E.useState)(!1);
          return t
            ? (0, m.jsx)(Ni, { ...c, bShowHideButton: !0, setShowQR: a })
            : (0, m.jsx)(an, { setShowQR: a });
        }
        function an(c) {
          return (0, m.jsxs)("div", {
            className: p().MessagingContainer,
            children: [
              (0, m.jsx)("div", {
                className: p().MessagingTag,
                children: (0, z.we)("#Login_MobileFlow_New"),
              }),
              (0, m.jsx)("div", {
                className: p().MessagingSubtitle,
                children: (0, m.jsx)("div", {
                  className: p().MessagingSubtitle,
                  children: (0, z.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, m.jsx)("div", {
                className: p().MessagingButton,
                onClick: () => c.setShowQR(!0),
                children: (0, z.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, m.jsx)("a", {
                href: `${T.TS.STORE_BASE_URL}mobile`,
                className: p().MessagingLink,
                children: (0, z.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function Ni(c) {
          const {
            onQRStatusChange: t,
            transport: a,
            onComplete: f,
            platform: b,
            refreshInfo: M,
            bShowHideButton: h = !1,
            setShowQR: B,
          } = c;
          return (0, m.jsxs)("div", {
            className: p().QRCodeContainer,
            children: [
              (0, m.jsx)(ji, {
                highlight: !0,
                children: (0, z.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, m.jsx)("div", {
                className: p().QR,
                children: (0, m.jsx)(ni, {
                  onStatusChange: t,
                  transport: a,
                  onComplete: f,
                  platform: b,
                  refreshInfo: M,
                }),
              }),
              h &&
                B &&
                (0, m.jsx)("div", {
                  className: p().QRHideLink,
                  onClick: () => B(!1),
                  children: (0, z.we)("#Button_Hide"),
                }),
              (0, m.jsx)("div", {
                className: p().UseMobileAppForQR,
                children: (0, z.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, m.jsx)(rr, {
                    href: `${T.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function kn() {
          const c = "bShowLoginQR",
            [t, a] = useState(
              (localStorage == null ? void 0 : localStorage.getItem(c)) === "1",
            ),
            f = useCallback((b) => {
              a(b),
                b
                  ? localStorage == null || localStorage.setItem(c, "1")
                  : localStorage == null || localStorage.removeItem(c);
            }, []);
          return [t, f];
        }
        function Di(c) {
          const { label: t, error: a, tone: f, autoFocus: b, id: M, ...h } = c,
            B = f != null ? f : a ? "danger" : void 0;
          return (0, m.jsxs)("div", {
            className: p().TextField,
            children: [
              typeof t == "string"
                ? (0, m.jsx)(ji, { inputId: M, children: t })
                : t,
              a && (0, m.jsx)(ln, { type: "error", children: a }),
              (0, m.jsx)(on, { autoFocus: b, tone: B, id: M, ...h }),
            ],
          });
        }
        function ji(c) {
          const { children: t, inputId: a, highlight: f } = c;
          return (0, m.jsx)("label", {
            className: (0, ae.A)(p().FieldLabel, f && p().Highlight),
            htmlFor: a,
            children: t,
          });
        }
        function on(c) {
          const {
            value: t,
            onChange: a,
            type: f = "text",
            tone: b,
            className: M,
            autoFocus: h,
            disabled: B,
            id: _,
          } = c;
          return (0, m.jsx)("input", {
            value: t,
            type: f,
            autoFocus: h,
            onChange: (O) => a(O.target.value),
            className: (0, ae.A)(
              p().TextInput,
              b === "danger" && p().Danger,
              M,
            ),
            disabled: B,
            id: _,
          });
        }
        function ln(c) {
          const { children: t, type: a } = c;
          return (0, m.jsx)("div", {
            className: (0, ae.A)(p().FieldHint, a === "error" && p().Error),
            children: t,
          });
        }
        function cn(c) {
          const { label: t, onChange: a, value: f } = c;
          let b = () => {
            a && a(!f);
          };
          const M = (0, E.useId)();
          return (0, m.jsxs)("div", {
            className: p().CheckboxField,
            onClick: b,
            onKeyPress: (h) => {
              h.key == " " && (b(), h.preventDefault());
            },
            children: [
              (0, m.jsx)(un, { labelledBy: M, value: f }),
              (0, m.jsx)("label", {
                id: M,
                className: p().CheckboxFieldLabel,
                children: t,
              }),
            ],
          });
        }
        function un(c) {
          const { value: t, labelledBy: a } = c;
          return (0, m.jsx)("div", {
            tabIndex: 0,
            className: p().Checkbox,
            "aria-labelledby": a,
            role: "checkbox",
            "aria-checked": t,
            children:
              t &&
              (0, m.jsx)("div", {
                className: p().Check,
                children: (0, m.jsx)(G.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function mn(c) {
          const { refreshLogin: t, ...a } = c;
          return t &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, m.jsx)(fn, {})
            : (0, m.jsx)(dn, { ...a });
        }
        function dn(c) {
          return (0, m.jsx)("div", {
            className: p().SignInButtonContainer,
            children: (0, m.jsx)(hn, {
              ...c,
              children: (0, z.we)("#Login_SignIn"),
            }),
          });
        }
        function fn() {
          const c = () => SteamClient.User.StartShutdown(!0);
          return (0, m.jsxs)("div", {
            className: p().RefreshButtonContainer,
            children: [
              (0, m.jsx)("button", {
                className: p().SubmitButton,
                type: "submit",
                children: (0, z.we)("#Login_SignIn"),
              }),
              (0, m.jsx)("button", {
                className: p().RefreshQuitButton,
                onClick: c,
                children: (0, z.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function hn(c) {
          return (0, m.jsx)(Pi, { type: "submit", ...c });
        }
        function Pi(c) {
          const {
              className: t,
              loading: a,
              disabled: f,
              children: b,
              ...M
            } = c,
            h = f || a;
          return (0, m.jsxs)("button", {
            className: (0, ae.A)(p().SubmitButton, a && p().Loading, t),
            disabled: h,
            ...M,
            children: [
              b,
              a &&
                (0, m.jsx)("div", {
                  className: p().LoadingContainer,
                  children: (0, m.jsx)(qi, { size: "small" }),
                }),
            ],
          });
        }
        function Oi(c) {
          const t = c.children || "\xA0";
          return (0, m.jsx)("div", { className: p().FormError, children: t });
        }
        function gn() {
          return (0, m.jsx)(ai, {
            compact: !0,
            children: (0, m.jsxs)(ur, {
              alignItems: "center",
              className: (0, ae.A)(
                p().WaitingForTokenContainer,
                T.TS.IN_STEAMUI && p().Client,
              ),
              children: [
                (0, m.jsx)(oe.t, { size: "xlarge" }),
                (0, m.jsx)("div", {
                  className: (0, ae.A)(p().Description),
                  children: (0, z.we)(
                    T.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function qi(c) {
          const { size: t } = c;
          return (0, m.jsx)("div", {
            className: (0, ae.A)(
              p().LoadingSpinner,
              t == "small" && p().Small,
              (t == "medium" || !t) && p().Medium,
              t == "large" && p().Large,
            ),
          });
        }
        function pn(c) {
          return (0, m.jsx)("div", {
            className: p().OfferOffline,
            children: (0, m.jsx)("button", {
              className: p().OfferOfflineButton,
              onClick: c.onRequestOffline,
              children: (0, z.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function Ri(c) {
          const {
              reset: t,
              failure: a,
              onRequestOffline: f,
              errorReference: b,
              extendedErrorMessage: M,
            } = c,
            { title: h, description: B } = J(a, M),
            _ = T.TS.IN_STEAMUI && a == j.eF.Network;
          return (0, m.jsxs)(ai, {
            compact: !0,
            children: [
              (0, m.jsxs)(ur, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, m.jsx)("div", {
                    className: p().FailureTitle,
                    children: h,
                  }),
                  (0, m.jsx)("div", {
                    className: p().FailureDescription,
                    children: B,
                  }),
                  _ &&
                    (0, m.jsx)("div", {
                      className: p().FailureDescription,
                      children: (0, z.we)("#Login_GoOffline_Description"),
                    }),
                  (0, m.jsxs)(Fi, {
                    className: p().FailureButtons,
                    children: [
                      (0, m.jsx)(Pi, {
                        className: p().TryAgainButton,
                        onClick: t,
                        children: (0, z.we)("#Button_Retry"),
                      }),
                      _ && f && (0, m.jsx)(pn, { onRequestOffline: f }),
                    ],
                  }),
                ],
              }),
              b &&
                (0, m.jsx)("div", {
                  className: p().MutedErrorReference,
                  children: (0, z.we)("#Login_Error_Reference", b),
                }),
            ],
          });
        }
        function wn(c) {
          const { reset: t } = c;
          return (0, m.jsx)(Ri, { reset: t, failure: j.eF.Generic });
        }
        function bn(c) {
          const {
              type: t,
              onSubmitCode: a,
              status: f,
              accountName: b,
              associatedLabel: M,
              onBack: h,
            } = c,
            [B, _] = (0, E.useState)([]),
            [O, k] = (0, E.useState)(!1),
            [P, ue] = (0, E.useState)(!1),
            [de, Mt] = (0, E.useState)(!1),
            [Ct, Rt] = (0, E.useState)(0),
            D = t === "mobile",
            yt = B.join(""),
            q = ri(yt, de),
            U = (_i) => {
              ue(!0),
                a(_i).then(() => {
                  k(!1), ue(!1);
                });
            },
            V = (_i) => {
              O || k(!0), _(_i);
              const Qi = _i.join("");
              ri(Qi, de) && U(Qi);
            },
            Y = () => {
              q && U(yt);
            },
            Jt = () => {
              Mt(!de), _([]), a(""), Rt(Ct + 1);
            },
            ir = !O && (f === cr || f === Ot);
          let $t, gi;
          return (
            de
              ? t === "mobile"
                ? ((gi = (0, m.jsx)(Gi, {})), ($t = "#Login_UseMobileCode"))
                : ((gi = (0, m.jsx)(Gi, {})), ($t = "#Login_UseEmailCode"))
              : ((gi =
                  t === "mobile"
                    ? (0, m.jsx)(Bn, {})
                    : (0, m.jsx)(yn, { emailAddress: M })),
                ($t = "#Login_UseBackupCode")),
            (0, m.jsx)(ai, {
              title: (0, m.jsx)(Li, {}),
              compact: !0,
              children: (0, m.jsx)(Zi, {
                onSubmit: Y,
                children: (0, m.jsxs)(ur, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, m.jsx)(Hi, { type: t, accountName: b }),
                    (0, m.jsxs)("div", {
                      className: p().ConfirmationEntryContainer,
                      children: [
                        (0, m.jsxs)(ur, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            ir &&
                              (0, m.jsx)(Oi, {
                                children: (0, z.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, m.jsx)(
                              vn,
                              {
                                value: B,
                                onChange: V,
                                tone: ir ? "danger" : void 0,
                                loading: P,
                                backupCode: de,
                              },
                              Ct,
                            ),
                          ],
                        }),
                        gi,
                      ],
                    }),
                    D &&
                      (0, m.jsx)(rr, {
                        onClick: Jt,
                        align: "center",
                        children: (0, z.we)($t),
                      }),
                    (0, m.jsx)(Vi, { type: t, onCodeHelp: c.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function Vi(c) {
          if ((0, vt.q)()) return null;
          let t, a;
          return (
            c.type === "mobile"
              ? ((t = `${T.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (a = (0, z.we)("#Login_Help_AccessMobileApp")))
              : ((t = `${T.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (a = (0, z.we)("#Login_Help_AccessEmail"))),
            c.onCodeHelp
              ? (0, m.jsx)(rr, {
                  onClick: () => c.onCodeHelp(t),
                  align: "center",
                  children: a,
                })
              : (0, m.jsx)(rr, { href: t, align: "center", children: a })
          );
        }
        function Gi() {
          return (0, m.jsx)(Fi, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterBackupCodeContainer,
            children: (0, m.jsxs)(ur, {
              children: [
                (0, m.jsx)("div", {
                  className: p().EnterCodeFromMobile,
                  children: (0, z.we)("#Login_EnterBackupCode"),
                }),
                (0, m.jsx)("div", {
                  className: p().Label,
                  children: (0, z.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function Bn() {
          return (0, m.jsxs)(Fi, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterCodeFromMobileContainer,
            children: [
              (0, m.jsx)("div", {
                className: p().EnterCodeFromMobile,
                children: (0, z.we)("#Login_EnterMobileCode"),
              }),
              (0, m.jsx)(Mn, { className: p().AwaitingMobileConfIcon }),
            ],
          });
        }
        function yn(c) {
          return (0, m.jsxs)(Fi, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterCodeFromEmailContainer,
            children: [
              (0, m.jsx)(Tn, {
                align: "center",
                spacing: 6,
                children: (0, m.jsx)("div", {
                  className: p().EnterCodeFromEmail,
                  children: (0, z.PP)(
                    "#Login_EnterEmailCode",
                    (0, m.jsx)("span", {
                      className: p().EnterCodeEmailAddress,
                      children: c.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, m.jsx)(Cn, { className: p().AwaitingEmailConfIcon }),
            ],
          });
        }
        function Hi(c) {
          const { accountName: t, type: a } = c,
            f =
              a === "mobile"
                ? (0, z.we)("#Login_MobileProtectingAccount")
                : (0, z.we)("#Login_EmailProtectingAccount"),
            b = si();
          return (0, m.jsxs)("div", {
            className: p().ProtectingAccount,
            children: [
              (0, m.jsx)("div", {
                className: p().Label,
                children: (0, z.PP)(
                  "#Login_ActiveAccountName",
                  (0, m.jsx)("span", {
                    className: p().AccountName,
                    children: t,
                  }),
                ),
              }),
              !b &&
                (0, m.jsx)("div", { className: p().Description, children: f }),
            ],
          });
        }
        function Sn() {
          return (0, m.jsx)(ur, {
            alignItems: "center",
            children: (0, m.jsxs)("div", {
              className: p().ConfirmationContainer,
              children: [
                (0, m.jsx)("img", { src: (0, ki.YJ)(sr) }),
                (0, m.jsx)("div", {
                  className: p().AwaitingMobileConfText,
                  children: (0, z.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function Mn(c) {
          return (0, m.jsxs)("svg", {
            viewBox: "0 0 33 49",
            fill: "currentColor",
            className: c.className,
            children: [
              (0, m.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z",
              }),
            ],
          });
        }
        function Cn(c) {
          return (0, m.jsx)("svg", {
            viewBox: "0 0 58 56",
            fill: "none",
            className: c.className,
            children: (0, m.jsx)("path", {
              d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
              fill: "#1A99FF",
            }),
          });
        }
        function En(c) {
          var t, a, f;
          const [b, M] = useSvgId();
          return jsxs("svg", {
            className: c.className,
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
                fill: (t = c.phoneOutlineColor) != null ? t : "currentColor",
              }),
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z",
                fill: (a = c.backgroundColor) != null ? a : "currentColor",
              }),
              jsx("g", {
                clipPath: M,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: (f = c.qrCodeColor) != null ? f : "currentColor",
                }),
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: b,
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
        function Wn(c) {
          return jsxs("svg", {
            className: c.className,
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
        function Rn(c) {
          const { type: t, accountName: a, onUseCodeOverride: f } = c,
            b = si(),
            M = (0, m.jsx)(Vi, { type: "mobile", onCodeHelp: c.onCodeHelp }),
            h = b
              ? (0, m.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, m.jsx)(rr, {
                    align: "center",
                    onClick: f,
                    children: (0, z.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, m.jsx)("div", {
                  className: p().EnterCodeInsteadLink,
                  children: (0, m.jsx)(rr, {
                    align: "center",
                    onClick: f,
                    children: (0, z.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, m.jsx)(ai, {
            title: (0, m.jsx)(Li, {}),
            compact: !0,
            children: (0, m.jsxs)(ur, {
              gap: T.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, m.jsx)(Hi, { type: t, accountName: a }),
                (0, m.jsx)(Sn, {}),
                (0, m.jsxs)("div", {
                  className: p().LinkContainer,
                  children: [h, M],
                }),
              ],
            }),
          });
        }
        function rr(c) {
          const { children: t, align: a, inline: f } = c,
            b = (0, ae.A)(p().TextLink, a === "center" && p().TextAlignCenter);
          if ("href" in c) {
            const M = T.TS.IN_STEAMUI
              ? `steam://openurl_external/${c.href}`
              : c.href;
            return (0, m.jsx)("a", { className: b, href: M, children: t });
          } else {
            const M = f ? "span" : "div";
            return (0, m.jsx)(M, {
              className: b,
              onClick: c.onClick,
              children: t,
            });
          }
        }
        function Zi(c) {
          const { onSubmit: t, children: a, className: f } = c,
            b = (M) => (M.preventDefault(), t(), !1);
          return (0, m.jsx)("form", { onSubmit: b, className: f, children: a });
        }
        function On(c) {
          const { align: t, ...a } = c;
          return jsx("div", {
            className: classnames(styles.Text, t === "center" && styles.Center),
            ...a,
          });
        }
        function ur(c) {
          const {
              alignItems: t,
              justifyContent: a,
              gap: f,
              className: b,
              ariaLabelledBy: M,
              children: h,
            } = c,
            B = (0, ae.A)(
              p().FlexCol,
              t === "center" && p().AlignItemsCenter,
              a === "center" && p().JustifyContentCenter,
              b,
            ),
            _ = f ? { gap: typeof f == "number" ? `${f}px` : f } : void 0;
          return (0, m.jsx)("section", {
            className: B,
            style: _,
            "aria-labelledby": M,
            children: h,
          });
        }
        function Fi(c) {
          const {
              children: t,
              justifyContent: a,
              alignItems: f,
              className: b,
            } = c,
            M = {
              display: "flex",
              flexDirection: "row",
              justifyContent: a,
              alignItems: f,
            };
          return (0, m.jsx)("div", { style: M, className: b, children: t });
        }
        function vn(c) {
          const { onChange: t, backupCode: a = !1, ...f } = c,
            b = (M) => {
              M = M.map((B) => B.toUpperCase());
              const h = M.join("").trim();
              Er(h, a) && t(M);
            };
          return (0, m.jsx)(le, {
            length: kr(a),
            backupCode: a,
            onChange: b,
            autoFocus: !0,
            ...f,
            allowCharacter: (M) => /\w/g.test(M),
          });
        }
        function Tn(c) {
          var t;
          const { children: a, spacing: f = 0, align: b } = c;
          return (0, m.jsx)(ur, {
            alignItems: b,
            children:
              (t = E.Children.map(a, (M, h) =>
                M
                  ? (0, m.jsx)("div", {
                      style: h > 0 ? { paddingTop: `${f}px` } : void 0,
                      children: M,
                    })
                  : null,
              )) == null
                ? void 0
                : t.filter(Boolean),
          });
        }
        function ai(c) {
          const { title: t, titleId: a, children: f, compact: b } = c,
            M = si(),
            h = (0, E.useId)();
          return (0, m.jsxs)(ur, {
            gap: T.TS.IN_STEAMUI ? 0 : 32,
            className: (0, ae.A)(
              p().StandardLayout,
              M && p().Embedded,
              b && p().Compact,
              T.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: a != null ? a : h,
            children: [
              typeof t == "string"
                ? (0, m.jsx)("div", {
                    className: p().PrimaryHeader,
                    id: a != null ? a : h,
                    children: t,
                  })
                : t,
              (0, m.jsx)("div", { className: p().FormContainer, children: f }),
            ],
          });
        }
        function Li(c) {
          const {
            realm: t = T.TS.EREALM,
            launcherType: a = T.TS.IN_STEAMUI ? T.TS.LAUNCHER_TYPE : void 0,
            className: f = p().HeaderLogo,
          } = c;
          return a === S.A2g
            ? (0, m.jsx)("div", { className: f })
            : (0, m.jsxs)("div", {
                className: p().LogoContainer,
                children: [
                  (0, m.jsx)(zn, { onBack: c.onBack }),
                  t !== Yt.TU.k_ESteamRealmChina
                    ? (0, m.jsx)(An, { className: f })
                    : (0, m.jsx)(jn, { className: f }),
                  " ",
                ],
              });
        }
        function zn(c) {
          return c.onBack
            ? (0, m.jsx)("div", {
                className: p().BackArrowContainer,
                onClick: c.onBack,
                children: (0, m.jsx)(G.Q38, { className: p().BackArrow }),
              })
            : null;
        }
        function An(c) {
          return (0, m.jsxs)("svg", {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: c.className,
            children: [
              (0, m.jsx)("path", {
                d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
                fill: "#E0E1E6",
              }),
            ],
          });
        }
        function jn(c) {
          return (0, m.jsxs)("svg", {
            viewBox: "0 0 232.73 46.07",
            xmlns: "http://www.w3.org/2000/svg",
            className: c.className,
            fill: "#E0E1E6",
            children: [
              (0, m.jsxs)("g", {
                stroke: "null",
                id: "svg_2",
                children: [
                  (0, m.jsx)("path", {
                    stroke: "null",
                    id: "svg_3",
                    d: "m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037",
                  }),
                  (0, m.jsx)("path", {
                    stroke: "null",
                    id: "svg_4",
                    d: "m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836",
                  }),
                  (0, m.jsx)("path", {
                    stroke: "null",
                    id: "svg_5",
                    d: "m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287",
                  }),
                ],
              }),
              (0, m.jsx)("path", {
                stroke: "null",
                id: "svg_6",
                d: "m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z",
              }),
              (0, m.jsxs)("g", {
                id: "svg_7",
                children: [
                  (0, m.jsx)("path", {
                    id: "svg_8",
                    d: "m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z",
                  }),
                  (0, m.jsx)("path", {
                    id: "svg_9",
                    d: "m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z",
                  }),
                  (0, m.jsx)("path", {
                    id: "svg_10",
                    d: "m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z",
                  }),
                  (0, m.jsx)("path", {
                    id: "svg_11",
                    d: "m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z",
                  }),
                ],
              }),
              (0, m.jsxs)("g", {
                id: "svg_12",
                children: [
                  (0, m.jsx)("path", {
                    id: "svg_13",
                    d: "m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z",
                  }),
                  (0, m.jsx)("path", {
                    id: "svg_14",
                    d: "m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z",
                  }),
                ],
              }),
            ],
          });
        }
        function Fn() {
          return (0, m.jsx)(ur, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, m.jsx)(oe.t, {}),
          });
        }
        function _n(c) {
          const t = (0, E.useRef)(c);
          t.current = c;
          const [a, f] = (0, E.useState)(!0),
            b = (0, Xt.zy)();
          return (
            (0, E.useEffect)(() => {
              if (new URLSearchParams(b.search).get("need_password")) {
                f(!1);
                return;
              }
              if (!t.current) {
                f(!1);
                return;
              }
              xn(t.current)
                .then((h) => {
                  f(h);
                })
                .catch((h) => {
                  (0, K.tH)("PerformRefresh exception", h), f(!1);
                });
            }, [t, b.search]),
            a
          );
        }
        async function xn(c) {
          var t;
          const a = new FormData();
          a.append("redir", c);
          const f = `${T.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            b = await X().post(f, a, { timeout: 1e4, withCredentials: !0 });
          if (
            b.status !== 200 ||
            !((t = b == null ? void 0 : b.data) != null && t.success)
          )
            return !1;
          const { success: M, login_url: h, error: B, ..._ } = b.data,
            O = new FormData();
          Object.entries(_).forEach(([ue, de]) => O.append(ue, de));
          const k = await X().post(h, O),
            P = k.status === 200 && k.data.result === l.R;
          return P && window.location.assign(c), P;
        }
        function In() {
          const c = (0, E.useRef)(!0);
          return (
            (0, E.useEffect)(
              () => () => {
                c.current = !1;
              },
              [c],
            ),
            (0, E.useCallback)(() => c.current, [c])
          );
        }
      },
      95039: (qt, nr, v) => {
        "use strict";
        v.d(nr, { fH: () => Yt, nW: () => S });
        const m = null,
          Yt = 0,
          S = 1;
      },
      94276: (qt, nr, v) => {
        "use strict";
        v.d(nr, {
          kX: () => pr,
          iP: () => Fr,
          R9: () => jr,
          tS: () => Br,
          qu: () => zr,
          Ev: () => _r,
          Qc: () => xr,
          TY: () => m,
          SS: () => Yt,
        });
        var m = {};
        v.r(m),
          v.d(m, {
            bH: () => Ft,
            x0: () => se,
            Xs: () => vt,
            $Y: () => ar,
            ig: () => or,
            WM: () => Lt,
            oP: () => sr,
          });
        var Yt = {};
        v.r(Yt), v.d(Yt, { w0: () => W, tS: () => le });
        var S = v(80613),
          l = v.n(S),
          r = v(75245),
          X = v(35038),
          E = v(95039),
          Xt = v(40164);
        const sr = 0,
          Lt = 1,
          vt = 2,
          Ft = 3,
          se = 4,
          ar = 5,
          or = 6,
          ae = 7,
          er = 0,
          W = 1,
          le = 2,
          G = 3,
          wt = 0,
          oe = 1,
          ie = 2,
          ce = 3,
          z = 4,
          x = 5,
          T = 6,
          j = 7;
        var N = Object.defineProperty,
          ee = (F, e, s) =>
            e in F
              ? N(F, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (F[e] = s),
          w = (F, e, s) => ee(F, typeof e != "symbol" ? e + "" : e, s);
        function me(F) {
          return "unknown ECaptchaAnnotation ( " + F + " )";
        }
        function K(F) {
          return "unknown EAuthSessionSecurityHistory ( " + F + " )";
        }
        function $(F) {
          return "unknown EAuthenticationType ( " + F + " )";
        }
        function wr(F) {
          return "unknown EAuthSessionGuardType ( " + F + " )";
        }
        function zt(F) {
          return "unknown EAuthTokenPlatformType ( " + F + " )";
        }
        function L(F) {
          return "unknown EAuthTokenAppType ( " + F + " )";
        }
        function I(F) {
          return "unknown ETokenRenewalType ( " + F + " )";
        }
        function u(F) {
          return "unknown EAuthTokenRevokeAction ( " + F + " )";
        }
        function vi(F) {
          return "unknown EAuthTokenState ( " + F + " )";
        }
        function Ti(F) {
          return "unknown ECaptchaUsage ( " + F + " )";
        }
        function H(F) {
          return "unknown ECaptchaType ( " + F + " )";
        }
        function br(F) {
          return "unknown ECaptchaDifficulty ( " + F + " )";
        }
        function xi(F) {
          return "unknown ERiskLevel ( " + F + " )";
        }
        function oi(F) {
          return "unknown ETokenRiskFactor ( " + F + " )";
        }
        function zi(F) {
          return "unknown EConfirmationState ( " + F + " )";
        }
        function li(F) {
          return "unknown EConfirmationRequestType ( " + F + " )";
        }
        const Lr = class je extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.account_name || r.Sg(je.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    account_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = r.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(je.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new je();
            return je.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(je.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(je.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request";
          }
        };
        w(Lr, "sm_m"), w(Lr, "sm_mbf");
        let zr = Lr;
        const Ur = class Fe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.publickey_mod || r.Sg(Fe.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    publickey_mod: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    publickey_exp: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    timestamp: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = r.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Fe.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Fe();
            return Fe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Fe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Fe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response";
          }
        };
        w(Ur, "sm_m"), w(Ur, "sm_mbf");
        let Nr = Ur;
        const Dr = class _e extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.device_friendly_name || r.Sg(_e.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    os_type: { n: 3, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    gaming_device_type: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    client_count: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    machine_id: {
                      n: 6,
                      br: r.qM.readBytes,
                      bw: r.gp.writeBytes,
                    },
                    app_type: { n: 7, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = r.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(_e.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new _e();
            return _e.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(_e.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(_e.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_DeviceDetails";
          }
        };
        w(Dr, "sm_m"), w(Dr, "sm_mbf");
        let Br = Dr;
        const Pr = class xe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.confirmation_type || r.Sg(xe.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    confirmation_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    associated_message: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = r.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(xe.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new xe();
            return xe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(xe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(xe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AllowedConfirmation";
          }
        };
        w(Pr, "sm_m"), w(Pr, "sm_mbf");
        let Ar = Pr;
        const Vr = class Ie extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.device_friendly_name || r.Sg(Ie.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    device_details: { n: 3, c: Br },
                    website_id: {
                      n: 4,
                      d: "Unknown",
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = r.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ie.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ie();
            return Ie.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ie.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ie.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request";
          }
        };
        w(Vr, "sm_m"), w(Vr, "sm_mbf");
        let jr = Vr;
        const Gr = class ke extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.client_id || r.Sg(ke.M()),
              S.Message.initialize(this, e, 0, -1, [5], null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    client_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    challenge_url: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    request_id: {
                      n: 3,
                      br: r.qM.readBytes,
                      bw: r.gp.writeBytes,
                    },
                    interval: { n: 4, br: r.qM.readFloat, bw: r.gp.writeFloat },
                    allowed_confirmations: { n: 5, c: Ar, r: !0, q: !0 },
                    version: { n: 6, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = r.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(ke.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ke();
            return ke.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(ke.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(ke.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Response";
          }
        };
        w(Gr, "sm_m"), w(Gr, "sm_mbf");
        let Hr = Gr;
        const Zr = class Ee extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.device_friendly_name || r.Sg(Ee.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    account_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    encrypted_password: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    encryption_timestamp: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    remember_login: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    platform_type: {
                      n: 6,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    persistence: {
                      n: 7,
                      d: E.nW,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    website_id: {
                      n: 8,
                      d: "Unknown",
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    device_details: { n: 9, c: Br },
                    guard_data: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    language: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    qos_level: {
                      n: 12,
                      d: 2,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = r.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ee.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ee();
            return Ee.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ee.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ee.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request";
          }
        };
        w(Zr, "sm_m"), w(Zr, "sm_mbf");
        let Fr = Zr;
        const Qr = class We extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.client_id || r.Sg(We.M()),
              S.Message.initialize(this, e, 0, -1, [4], null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    client_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: r.qM.readBytes,
                      bw: r.gp.writeBytes,
                    },
                    interval: { n: 3, br: r.qM.readFloat, bw: r.gp.writeFloat },
                    allowed_confirmations: { n: 4, c: Ar, r: !0, q: !0 },
                    steamid: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    weak_token: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    extended_error_message: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = r.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(We.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new We();
            return We.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(We.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(We.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response";
          }
        };
        w(Qr, "sm_m"), w(Qr, "sm_mbf");
        let Kr = Qr;
        const Jr = class Oe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.client_id || r.Sg(Oe.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    client_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: r.qM.readBytes,
                      bw: r.gp.writeBytes,
                    },
                    token_to_revoke: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = r.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Oe.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Oe();
            return Oe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Oe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Oe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request";
          }
        };
        w(Jr, "sm_m"), w(Jr, "sm_mbf");
        let _r = Jr;
        const $r = class qe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.new_client_id || r.Sg(qe.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    new_client_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    new_challenge_url: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    refresh_token: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    access_token: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    had_remote_interaction: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    account_name: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    new_guard_data: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = r.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(qe.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new qe();
            return qe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(qe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(qe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response";
          }
        };
        w($r, "sm_m"), w($r, "sm_mbf");
        let _t = $r;
        const lr = class Le extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.client_id || r.Sg(Le.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    client_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = r.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Le.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Le();
            return Le.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Le.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Le.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Request";
          }
        };
        w(lr, "sm_m"), w(lr, "sm_mbf");
        let pi = lr;
        const mr = class Ue extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.ip || r.Sg(Ue.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    ip: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    geoloc: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    city: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    state: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                    country: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    platform_type: {
                      n: 6,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    device_friendly_name: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    version: { n: 8, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    login_history: {
                      n: 9,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    requestor_location_mismatch: {
                      n: 10,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    high_usage_login: {
                      n: 11,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    requested_persistence: {
                      n: 12,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    device_trust: {
                      n: 13,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    app_type: { n: 14, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = r.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ue.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ue();
            return Ue.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ue.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ue.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response";
          }
        };
        w(mr, "sm_m"), w(mr, "sm_mbf");
        let ci = mr;
        const dr = class Ne extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.client_id || r.Sg(Ne.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    client_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = r.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ne.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ne();
            return Ne.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ne.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ne.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Request";
          }
        };
        w(dr, "sm_m"), w(dr, "sm_mbf");
        let wi = dr;
        const yr = class De extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.location_confirmer || r.Sg(De.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    location_confirmer: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    location_requestor: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    location_other: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    platform_type: {
                      n: 4,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = r.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(De.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new De();
            return De.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(De.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(De.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Response";
          }
        };
        w(yr, "sm_m"), w(yr, "sm_mbf");
        let bi = yr;
        const Sr = class Pe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.client_id || r.Sg(Pe.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    client_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    results: { n: 2, c: Mr },
                    selected_action: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    did_confirm_login: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = r.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Pe.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Pe();
            return Pe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Pe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Pe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification";
          }
        };
        w(Sr, "sm_m"), w(Sr, "sm_mbf");
        let Bi = Sr;
        const xt = class Ve extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.platform || r.Sg(Ve.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    platform: { n: 1, br: r.qM.readBool, bw: r.gp.writeBool },
                    location: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                    action: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = r.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ve.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ve();
            return Ve.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ve.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ve.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
          }
        };
        w(xt, "sm_m"), w(xt, "sm_mbf");
        let Mr = xt;
        class Et extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new Et();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Et();
            return Et.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Request";
          }
        }
        const Yr = class Ge extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.client_ids || r.Sg(Ge.M()),
              S.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    client_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint64String,
                      pbr: r.qM.readPackedUint64String,
                      bw: r.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = r.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ge.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ge();
            return Ge.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ge.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ge.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response";
          }
        };
        w(Yr, "sm_m"), w(Yr, "sm_mbf");
        let yi = Yr;
        const bt = class He extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.version || r.Sg(He.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    version: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    client_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    signature: {
                      n: 4,
                      br: r.qM.readBytes,
                      bw: r.gp.writeBytes,
                    },
                    confirm: {
                      n: 5,
                      d: !1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    persistence: {
                      n: 6,
                      d: E.nW,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = r.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(He.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new He();
            return He.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(He.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(He.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
          }
        };
        w(bt, "sm_m"), w(bt, "sm_mbf");
        let At = bt;
        class Ut extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ut.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new Ut();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ut();
            return Ut.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
          }
        }
        const Wt = class Ze extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.client_id || r.Sg(Ze.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    client_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    code: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    code_type: { n: 4, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = r.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ze.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ze();
            return Ze.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ze.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ze.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
          }
        };
        w(Wt, "sm_m"), w(Wt, "sm_mbf");
        let xr = Wt;
        const fr = class Qe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.agreement_session_url || r.Sg(Qe.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    agreement_session_url: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = r.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Qe.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Qe();
            return Qe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Qe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Qe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
          }
        };
        w(fr, "sm_m"), w(fr, "sm_mbf");
        let tr = fr;
        const Nt = class Ke extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.refresh_token || r.Sg(Ke.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    refresh_token: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    renewal_type: {
                      n: 3,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = r.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ke.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ke();
            return Ke.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ke.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ke.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Request";
          }
        };
        w(Nt, "sm_m"), w(Nt, "sm_mbf");
        let It = Nt;
        const Dt = class Je extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.access_token || r.Sg(Je.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    access_token: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    refresh_token: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = r.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Je.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Je();
            return Je.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Je.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Je.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response";
          }
        };
        w(Dt, "sm_m"), w(Dt, "sm_mbf");
        let Xr = Dt;
        const hr = class $e extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.include_revoked || r.Sg($e.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    include_revoked: {
                      n: 1,
                      d: !1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = r.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT($e.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new $e();
            return $e.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj($e.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0($e.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Request";
          }
        };
        w(hr, "sm_m"), w(hr, "sm_mbf");
        let Cr = hr;
        const Ot = class Ye extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.refresh_tokens || r.Sg(Ye.M()),
              S.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    refresh_tokens: { n: 1, c: ei, r: !0, q: !0 },
                    requesting_token: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = r.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Ye.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ye();
            return Ye.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Ye.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Ye.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response";
          }
        };
        w(Ot, "sm_m"), w(Ot, "sm_mbf");
        let cr = Ot;
        const Rr = class Xe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.time || r.Sg(Xe.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    time: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    ip: { n: 2, c: Xt.kK },
                    locale: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    country: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    state: { n: 5, br: r.qM.readString, bw: r.gp.writeString },
                    city: { n: 6, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = r.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Xe.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Xe();
            return Xe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Xe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Xe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
          }
        };
        w(Rr, "sm_m"), w(Rr, "sm_mbf");
        let vr = Rr;
        const Ir = class et extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.token_id || r.Sg(et.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    token_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    logged_in: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                    os_platform: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    auth_type: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    first_seen: { n: 9, c: vr },
                    last_seen: { n: 10, c: vr },
                    os_type: { n: 11, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    authentication_type: {
                      n: 12,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    effective_token_state: {
                      n: 13,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = r.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(et.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new et();
            return et.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(et.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(et.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
          }
        };
        w(Ir, "sm_m"), w(Ir, "sm_mbf");
        let ei = Ir;
        const Pt = class tt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.token || r.Sg(tt.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    token: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    revoke_action: {
                      n: 2,
                      d: oe,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = r.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(tt.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new tt();
            return tt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(tt.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(tt.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Request";
          }
        };
        w(Pt, "sm_m"), w(Pt, "sm_mbf");
        let Bt = Pt;
        class Vt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Vt.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new Vt();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Vt();
            return Vt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Response";
          }
        }
        const ui = class rt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.token_id || r.Sg(rt.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    token_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    revoke_action: {
                      n: 3,
                      d: oe,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    signature: {
                      n: 4,
                      br: r.qM.readBytes,
                      bw: r.gp.writeBytes,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = r.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(rt.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new rt();
            return rt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(rt.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(rt.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Request";
          }
        };
        w(ui, "sm_m"), w(ui, "sm_mbf");
        let mi = ui;
        class Gt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Gt.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new Gt();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Gt();
            return Gt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response";
          }
        }
        const ti = class it extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.token_id || r.Sg(it.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    token_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    token_state: {
                      n: 5,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    owner_steamid: {
                      n: 6,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    os_platform: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    os_type: { n: 8, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    auth_type: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    first_seen: { n: 11, c: ri },
                    last_seen: { n: 12, c: ri },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = r.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(it.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new it();
            return it.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(it.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(it.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription";
          }
        };
        w(ti, "sm_m"), w(ti, "sm_mbf");
        let kr = ti;
        const Er = class nt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.time || r.Sg(nt.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    time: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    ip: { n: 2, c: Xt.kK },
                    country: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    state: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                    city: { n: 5, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = r.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(nt.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new nt();
            return nt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(nt.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(nt.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent";
          }
        };
        w(Er, "sm_m"), w(Er, "sm_mbf");
        let ri = Er;
        const Z = class st extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.action || r.Sg(st.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    action: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    time: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    ip: { n: 3, c: Xt.kK },
                    actor: {
                      n: 4,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = r.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(st.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new st();
            return st.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(st.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(st.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenAudit";
          }
        };
        w(Z, "sm_m"), w(Z, "sm_mbf");
        let di = Z;
        const ii = class at extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.steamid || r.Sg(at.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    include_revoked_tokens: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = r.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(at.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new at();
            return at.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(at.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(at.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
          }
        };
        w(ii, "sm_m"), w(ii, "sm_mbf");
        let Si = ii;
        const Tr = class ot extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.refresh_tokens || r.Sg(ot.M()),
              S.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    refresh_tokens: { n: 1, c: kr, r: !0, q: !0 },
                    last_token_reset: {
                      n: 2,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = r.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(ot.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ot();
            return ot.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(ot.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(ot.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
          }
        };
        w(Tr, "sm_m"), w(Tr, "sm_mbf");
        let Mi = Tr;
        const gr = class lt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.token_id || r.Sg(lt.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    token_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = r.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(lt.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new lt();
            return lt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(lt.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(lt.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
          }
        };
        w(gr, "sm_m"), w(gr, "sm_mbf");
        let fi = gr;
        const Wr = class ct extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.refresh_tokens || r.Sg(ct.M()),
              S.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: { refresh_tokens: { n: 1, c: kr, r: !0, q: !0 } },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = r.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(ct.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ct();
            return ct.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(ct.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(ct.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
          }
        };
        w(Wr, "sm_m"), w(Wr, "sm_mbf");
        let hi = Wr;
        const i = class ut extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.token_id || r.Sg(ut.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    token_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = r.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(ut.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ut();
            return ut.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(ut.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(ut.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Request";
          }
        };
        w(i, "sm_m"), w(i, "sm_mbf");
        let n = i;
        class o extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new o();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new o();
            return o.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Response";
          }
        }
        const d = class mt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.token_id || r.Sg(mt.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    token_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = r.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(mt.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new mt();
            return mt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(mt.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(mt.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Request";
          }
        };
        w(d, "sm_m"), w(d, "sm_mbf");
        let g = d;
        const y = class dt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.history || r.Sg(dt.M()),
              S.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: { history: { n: 1, c: di, r: !0, q: !0 } },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = r.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(dt.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new dt();
            return dt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(dt.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(dt.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response";
          }
        };
        w(y, "sm_m"), w(y, "sm_mbf");
        let R = y;
        const A = class ft extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.steamid || r.Sg(ft.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    token_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = r.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(ft.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ft();
            return ft.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(ft.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(ft.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Request";
          }
        };
        w(A, "sm_m"), w(A, "sm_mbf");
        let J = A;
        class Q extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new Q();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Q();
            return Q.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Response";
          }
        }
        const p = class ht extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.appid || r.Sg(ht.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    minutes_remaining: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = r.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(ht.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ht();
            return ht.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(ht.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(ht.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_TimeRemaining";
          }
        };
        w(p, "sm_m"), w(p, "sm_mbf");
        let Tt = p;
        const kt = class gt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.platform || r.Sg(gt.M()),
              S.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    platform: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = r.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(gt.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new gt();
            return gt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(gt.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(gt.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Request";
          }
        };
        w(kt, "sm_m"), w(kt, "sm_mbf");
        let Or = kt;
        const St = class pt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.entries || r.Sg(pt.M()),
              S.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: { entries: { n: 2, c: Tt, r: !0, q: !0 } },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = r.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(pt.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new pt();
            return pt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(pt.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(pt.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response";
          }
        };
        w(St, "sm_m"), w(St, "sm_mbf");
        let jt = St;
        var pr;
        ((F) => {
          function e(te, re, ne) {
            return te.SendMsg(
              "Authentication.GetPasswordRSAPublicKey#1",
              (0, X.I8)(zr, re, ne),
              Nr,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          F.GetPasswordRSAPublicKey = e;
          function s(te, re, ne) {
            return te.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, X.I8)(jr, re, ne),
              Hr,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          F.BeginAuthSessionViaQR = s;
          function C(te, re, ne) {
            return te.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, X.I8)(Fr, re, ne),
              Kr,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          F.BeginAuthSessionViaCredentials = C;
          function ni(te, re, ne) {
            return te.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, X.I8)(_r, re, ne),
              _t,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          F.PollAuthSessionStatus = ni;
          function Ci(te, re, ne) {
            return te.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, X.I8)(pi, re, ne),
              ci,
              { ePrivilege: 1 },
            );
          }
          F.GetAuthSessionInfo = Ci;
          function Zt(te, re, ne) {
            return te.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, X.I8)(wi, re, ne),
              bi,
              { ePrivilege: 1 },
            );
          }
          F.GetAuthSessionRiskInfo = Zt;
          function Qt(te, re) {
            return te.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, X.I8)(Bi, re),
              { ePrivilege: 1 },
            );
          }
          F.NotifyRiskQuizResults = Qt;
          function Kt(te, re, ne) {
            return te.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, X.I8)(At, re, ne),
              Ut,
              { ePrivilege: 1 },
            );
          }
          F.UpdateAuthSessionWithMobileConfirmation = Kt;
          function Ii(te, re, ne) {
            return te.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, X.I8)(xr, re, ne),
              tr,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          F.UpdateAuthSessionWithSteamGuardCode = Ii;
          function ki(te, re, ne) {
            return te.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, X.I8)(It, re, ne),
              Xr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          F.GenerateAccessTokenForApp = ki;
          function Ai(te, re, ne) {
            return te.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, X.I8)(Cr, re, ne),
              cr,
              { ePrivilege: 1 },
            );
          }
          F.EnumerateTokens = Ai;
          function si(te, re, ne) {
            return te.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, X.I8)(Et, re, ne),
              yi,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          F.GetAuthSessionsForAccount = si;
          function Ei(te, re, ne) {
            return te.SendMsg(
              "Authentication.RevokeToken#1",
              (0, X.I8)(Bt, re, ne),
              Vt,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          F.RevokeToken = Ei;
          function Wi(te, re, ne) {
            return te.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, X.I8)(mi, re, ne),
              Gt,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          F.RevokeRefreshToken = Wi;
        })(pr || (pr = {}));
        var Ht;
        ((F) => {
          function e(Zt, Qt, Kt) {
            return Zt.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, X.I8)(Si, Qt, Kt),
              Mi,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          F.QueryRefreshTokensByAccount = e;
          function s(Zt, Qt, Kt) {
            return Zt.SendMsg(
              "AuthenticationSupport.QueryRefreshTokenByID#1",
              (0, X.I8)(fi, Qt, Kt),
              hi,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          F.QueryRefreshTokenByID = s;
          function C(Zt, Qt, Kt) {
            return Zt.SendMsg(
              "AuthenticationSupport.RevokeToken#1",
              (0, X.I8)(n, Qt, Kt),
              o,
              { ePrivilege: 5 },
            );
          }
          F.RevokeToken = C;
          function ni(Zt, Qt, Kt) {
            return Zt.SendMsg(
              "AuthenticationSupport.GetTokenHistory#1",
              (0, X.I8)(g, Qt, Kt),
              R,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          F.GetTokenHistory = ni;
          function Ci(Zt, Qt, Kt) {
            return Zt.SendMsg(
              "AuthenticationSupport.MarkTokenCompromised#1",
              (0, X.I8)(J, Qt, Kt),
              Q,
              { ePrivilege: 5 },
            );
          }
          F.MarkTokenCompromised = Ci;
        })(Ht || (Ht = {}));
        var qr;
        ((F) => {
          function e(s, C, ni) {
            return s.SendMsg(
              "CloudGaming.GetTimeRemaining#1",
              (0, X.I8)(Or, C, ni),
              jt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          F.GetTimeRemaining = e;
        })(qr || (qr = {}));
      },
      78412: (qt) => {
        qt.exports = {
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
      15557: (qt) => {
        qt.exports = {
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
      5804: (qt) => {
        qt.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      9843: (qt) => {
        qt.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
      80407: (qt, nr, v) => {
        "use strict";
        v.d(nr, { A: () => hi });
        var m,
          Yt = 0xdeadbeefcafe,
          S = (Yt & 16777215) == 15715070;
        function l(i, n, o) {
          i != null &&
            (typeof i == "number"
              ? this.fromNumber(i, n, o)
              : n == null && typeof i != "string"
                ? this.fromString(i, 256)
                : this.fromString(i, n));
        }
        function r() {
          return new l(null);
        }
        function X(i, n, o, d, g, y) {
          for (; --y >= 0; ) {
            var R = n * this[i++] + o[d] + g;
            (g = Math.floor(R / 67108864)), (o[d++] = R & 67108863);
          }
          return g;
        }
        function E(i, n, o, d, g, y) {
          for (var R = n & 32767, A = n >> 15; --y >= 0; ) {
            var J = this[i] & 32767,
              Q = this[i++] >> 15,
              p = A * J + Q * R;
            (J = R * J + ((p & 32767) << 15) + o[d] + (g & 1073741823)),
              (g = (J >>> 30) + (p >>> 15) + A * Q + (g >>> 30)),
              (o[d++] = J & 1073741823);
          }
          return g;
        }
        function Xt(i, n, o, d, g, y) {
          for (var R = n & 16383, A = n >> 14; --y >= 0; ) {
            var J = this[i] & 16383,
              Q = this[i++] >> 14,
              p = A * J + Q * R;
            (J = R * J + ((p & 16383) << 14) + o[d] + g),
              (g = (J >> 28) + (p >> 14) + A * Q),
              (o[d++] = J & 268435455);
          }
          return g;
        }
        S && navigator.appName == "Microsoft Internet Explorer"
          ? ((l.prototype.am = E), (m = 30))
          : S && navigator.appName != "Netscape"
            ? ((l.prototype.am = X), (m = 26))
            : ((l.prototype.am = Xt), (m = 28)),
          (l.prototype.DB = m),
          (l.prototype.DM = (1 << m) - 1),
          (l.prototype.DV = 1 << m);
        var sr = 52;
        (l.prototype.FV = Math.pow(2, sr)),
          (l.prototype.F1 = sr - m),
          (l.prototype.F2 = 2 * m - sr);
        var Lt = "0123456789abcdefghijklmnopqrstuvwxyz",
          vt = new Array(),
          Ft,
          se;
        for (Ft = 48, se = 0; se <= 9; ++se) vt[Ft++] = se;
        for (Ft = 97, se = 10; se < 36; ++se) vt[Ft++] = se;
        for (Ft = 65, se = 10; se < 36; ++se) vt[Ft++] = se;
        function ar(i) {
          return Lt.charAt(i);
        }
        function or(i, n) {
          var o = vt[i.charCodeAt(n)];
          return o == null ? -1 : o;
        }
        function ae(i) {
          for (var n = this.t - 1; n >= 0; --n) i[n] = this[n];
          (i.t = this.t), (i.s = this.s);
        }
        function er(i) {
          (this.t = 1),
            (this.s = i < 0 ? -1 : 0),
            i > 0 ? (this[0] = i) : i < -1 ? (this[0] = i + DV) : (this.t = 0);
        }
        function W(i) {
          var n = r();
          return n.fromInt(i), n;
        }
        function le(i, n) {
          var o;
          if (n == 16) o = 4;
          else if (n == 8) o = 3;
          else if (n == 256) o = 8;
          else if (n == 2) o = 1;
          else if (n == 32) o = 5;
          else if (n == 4) o = 2;
          else {
            this.fromRadix(i, n);
            return;
          }
          (this.t = 0), (this.s = 0);
          for (var d = i.length, g = !1, y = 0; --d >= 0; ) {
            var R = o == 8 ? i[d] & 255 : or(i, d);
            if (R < 0) {
              i.charAt(d) == "-" && (g = !0);
              continue;
            }
            (g = !1),
              y == 0
                ? (this[this.t++] = R)
                : y + o > this.DB
                  ? ((this[this.t - 1] |=
                      (R & ((1 << (this.DB - y)) - 1)) << y),
                    (this[this.t++] = R >> (this.DB - y)))
                  : (this[this.t - 1] |= R << y),
              (y += o),
              y >= this.DB && (y -= this.DB);
          }
          o == 8 &&
            (i[0] & 128) != 0 &&
            ((this.s = -1),
            y > 0 && (this[this.t - 1] |= ((1 << (this.DB - y)) - 1) << y)),
            this.clamp(),
            g && l.ZERO.subTo(this, this);
        }
        function G() {
          for (var i = this.s & this.DM; this.t > 0 && this[this.t - 1] == i; )
            --this.t;
        }
        function wt(i) {
          if (this.s < 0) return "-" + this.negate().toString(i);
          var n;
          if (i == 16) n = 4;
          else if (i == 8) n = 3;
          else if (i == 2) n = 1;
          else if (i == 32) n = 5;
          else if (i == 4) n = 2;
          else return this.toRadix(i);
          var o = (1 << n) - 1,
            d,
            g = !1,
            y = "",
            R = this.t,
            A = this.DB - ((R * this.DB) % n);
          if (R-- > 0)
            for (
              A < this.DB && (d = this[R] >> A) > 0 && ((g = !0), (y = ar(d)));
              R >= 0;
            )
              A < n
                ? ((d = (this[R] & ((1 << A) - 1)) << (n - A)),
                  (d |= this[--R] >> (A += this.DB - n)))
                : ((d = (this[R] >> (A -= n)) & o),
                  A <= 0 && ((A += this.DB), --R)),
                d > 0 && (g = !0),
                g && (y += ar(d));
          return g ? y : "0";
        }
        function oe() {
          var i = r();
          return l.ZERO.subTo(this, i), i;
        }
        function ie() {
          return this.s < 0 ? this.negate() : this;
        }
        function ce(i) {
          var n = this.s - i.s;
          if (n != 0) return n;
          var o = this.t;
          if (((n = o - i.t), n != 0)) return n;
          for (; --o >= 0; ) if ((n = this[o] - i[o]) != 0) return n;
          return 0;
        }
        function z(i) {
          var n = 1,
            o;
          return (
            (o = i >>> 16) != 0 && ((i = o), (n += 16)),
            (o = i >> 8) != 0 && ((i = o), (n += 8)),
            (o = i >> 4) != 0 && ((i = o), (n += 4)),
            (o = i >> 2) != 0 && ((i = o), (n += 2)),
            (o = i >> 1) != 0 && ((i = o), (n += 1)),
            n
          );
        }
        function x() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + z(this[this.t - 1] ^ (this.s & this.DM));
        }
        function T(i, n) {
          var o;
          for (o = this.t - 1; o >= 0; --o) n[o + i] = this[o];
          for (o = i - 1; o >= 0; --o) n[o] = 0;
          (n.t = this.t + i), (n.s = this.s);
        }
        function j(i, n) {
          for (var o = i; o < this.t; ++o) n[o - i] = this[o];
          (n.t = Math.max(this.t - i, 0)), (n.s = this.s);
        }
        function N(i, n) {
          var o = i % this.DB,
            d = this.DB - o,
            g = (1 << d) - 1,
            y = Math.floor(i / this.DB),
            R = (this.s << o) & this.DM,
            A;
          for (A = this.t - 1; A >= 0; --A)
            (n[A + y + 1] = (this[A] >> d) | R), (R = (this[A] & g) << o);
          for (A = y - 1; A >= 0; --A) n[A] = 0;
          (n[y] = R), (n.t = this.t + y + 1), (n.s = this.s), n.clamp();
        }
        function ee(i, n) {
          n.s = this.s;
          var o = Math.floor(i / this.DB);
          if (o >= this.t) {
            n.t = 0;
            return;
          }
          var d = i % this.DB,
            g = this.DB - d,
            y = (1 << d) - 1;
          n[0] = this[o] >> d;
          for (var R = o + 1; R < this.t; ++R)
            (n[R - o - 1] |= (this[R] & y) << g), (n[R - o] = this[R] >> d);
          d > 0 && (n[this.t - o - 1] |= (this.s & y) << g),
            (n.t = this.t - o),
            n.clamp();
        }
        function w(i, n) {
          for (var o = 0, d = 0, g = Math.min(i.t, this.t); o < g; )
            (d += this[o] - i[o]), (n[o++] = d & this.DM), (d >>= this.DB);
          if (i.t < this.t) {
            for (d -= i.s; o < this.t; )
              (d += this[o]), (n[o++] = d & this.DM), (d >>= this.DB);
            d += this.s;
          } else {
            for (d += this.s; o < i.t; )
              (d -= i[o]), (n[o++] = d & this.DM), (d >>= this.DB);
            d -= i.s;
          }
          (n.s = d < 0 ? -1 : 0),
            d < -1 ? (n[o++] = this.DV + d) : d > 0 && (n[o++] = d),
            (n.t = o),
            n.clamp();
        }
        function me(i, n) {
          var o = this.abs(),
            d = i.abs(),
            g = o.t;
          for (n.t = g + d.t; --g >= 0; ) n[g] = 0;
          for (g = 0; g < d.t; ++g) n[g + o.t] = o.am(0, d[g], n, g, 0, o.t);
          (n.s = 0), n.clamp(), this.s != i.s && l.ZERO.subTo(n, n);
        }
        function K(i) {
          for (var n = this.abs(), o = (i.t = 2 * n.t); --o >= 0; ) i[o] = 0;
          for (o = 0; o < n.t - 1; ++o) {
            var d = n.am(o, n[o], i, 2 * o, 0, 1);
            (i[o + n.t] += n.am(
              o + 1,
              2 * n[o],
              i,
              2 * o + 1,
              d,
              n.t - o - 1,
            )) >= n.DV && ((i[o + n.t] -= n.DV), (i[o + n.t + 1] = 1));
          }
          i.t > 0 && (i[i.t - 1] += n.am(o, n[o], i, 2 * o, 0, 1)),
            (i.s = 0),
            i.clamp();
        }
        function $(i, n, o) {
          var d = i.abs();
          if (!(d.t <= 0)) {
            var g = this.abs();
            if (g.t < d.t) {
              n != null && n.fromInt(0), o != null && this.copyTo(o);
              return;
            }
            o == null && (o = r());
            var y = r(),
              R = this.s,
              A = i.s,
              J = this.DB - z(d[d.t - 1]);
            J > 0
              ? (d.lShiftTo(J, y), g.lShiftTo(J, o))
              : (d.copyTo(y), g.copyTo(o));
            var Q = y.t,
              p = y[Q - 1];
            if (p != 0) {
              var Tt = p * (1 << this.F1) + (Q > 1 ? y[Q - 2] >> this.F2 : 0),
                kt = this.FV / Tt,
                Or = (1 << this.F1) / Tt,
                St = 1 << this.F2,
                jt = o.t,
                pr = jt - Q,
                Ht = n == null ? r() : n;
              for (
                y.dlShiftTo(pr, Ht),
                  o.compareTo(Ht) >= 0 && ((o[o.t++] = 1), o.subTo(Ht, o)),
                  l.ONE.dlShiftTo(Q, Ht),
                  Ht.subTo(y, y);
                y.t < Q;
              )
                y[y.t++] = 0;
              for (; --pr >= 0; ) {
                var qr =
                  o[--jt] == p
                    ? this.DM
                    : Math.floor(o[jt] * kt + (o[jt - 1] + St) * Or);
                if ((o[jt] += y.am(0, qr, o, pr, 0, Q)) < qr)
                  for (y.dlShiftTo(pr, Ht), o.subTo(Ht, o); o[jt] < --qr; )
                    o.subTo(Ht, o);
              }
              n != null && (o.drShiftTo(Q, n), R != A && l.ZERO.subTo(n, n)),
                (o.t = Q),
                o.clamp(),
                J > 0 && o.rShiftTo(J, o),
                R < 0 && l.ZERO.subTo(o, o);
            }
          }
        }
        function wr(i) {
          var n = r();
          return (
            this.abs().divRemTo(i, null, n),
            this.s < 0 && n.compareTo(l.ZERO) > 0 && i.subTo(n, n),
            n
          );
        }
        function zt(i) {
          this.m = i;
        }
        function L(i) {
          return i.s < 0 || i.compareTo(this.m) >= 0 ? i.mod(this.m) : i;
        }
        function I(i) {
          return i;
        }
        function u(i) {
          i.divRemTo(this.m, null, i);
        }
        function vi(i, n, o) {
          i.multiplyTo(n, o), this.reduce(o);
        }
        function Ti(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        (zt.prototype.convert = L),
          (zt.prototype.revert = I),
          (zt.prototype.reduce = u),
          (zt.prototype.mulTo = vi),
          (zt.prototype.sqrTo = Ti);
        function H() {
          if (this.t < 1) return 0;
          var i = this[0];
          if ((i & 1) == 0) return 0;
          var n = i & 3;
          return (
            (n = (n * (2 - (i & 15) * n)) & 15),
            (n = (n * (2 - (i & 255) * n)) & 255),
            (n = (n * (2 - (((i & 65535) * n) & 65535))) & 65535),
            (n = (n * (2 - ((i * n) % this.DV))) % this.DV),
            n > 0 ? this.DV - n : -n
          );
        }
        function br(i) {
          (this.m = i),
            (this.mp = i.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (i.DB - 15)) - 1),
            (this.mt2 = 2 * i.t);
        }
        function xi(i) {
          var n = r();
          return (
            i.abs().dlShiftTo(this.m.t, n),
            n.divRemTo(this.m, null, n),
            i.s < 0 && n.compareTo(l.ZERO) > 0 && this.m.subTo(n, n),
            n
          );
        }
        function oi(i) {
          var n = r();
          return i.copyTo(n), this.reduce(n), n;
        }
        function zi(i) {
          for (; i.t <= this.mt2; ) i[i.t++] = 0;
          for (var n = 0; n < this.m.t; ++n) {
            var o = i[n] & 32767,
              d =
                (o * this.mpl +
                  (((o * this.mph + (i[n] >> 15) * this.mpl) & this.um) <<
                    15)) &
                i.DM;
            for (
              o = n + this.m.t, i[o] += this.m.am(0, d, i, n, 0, this.m.t);
              i[o] >= i.DV;
            )
              (i[o] -= i.DV), i[++o]++;
          }
          i.clamp(),
            i.drShiftTo(this.m.t, i),
            i.compareTo(this.m) >= 0 && i.subTo(this.m, i);
        }
        function li(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        function Lr(i, n, o) {
          i.multiplyTo(n, o), this.reduce(o);
        }
        (br.prototype.convert = xi),
          (br.prototype.revert = oi),
          (br.prototype.reduce = zi),
          (br.prototype.mulTo = Lr),
          (br.prototype.sqrTo = li);
        function zr() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function Ur(i, n) {
          if (i > 4294967295 || i < 1) return l.ONE;
          var o = r(),
            d = r(),
            g = n.convert(this),
            y = z(i) - 1;
          for (g.copyTo(o); --y >= 0; )
            if ((n.sqrTo(o, d), (i & (1 << y)) > 0)) n.mulTo(d, g, o);
            else {
              var R = o;
              (o = d), (d = R);
            }
          return n.revert(o);
        }
        function Nr(i, n) {
          var o;
          return (
            i < 256 || n.isEven() ? (o = new zt(n)) : (o = new br(n)),
            this.exp(i, o)
          );
        }
        (l.prototype.copyTo = ae),
          (l.prototype.fromInt = er),
          (l.prototype.fromString = le),
          (l.prototype.clamp = G),
          (l.prototype.dlShiftTo = T),
          (l.prototype.drShiftTo = j),
          (l.prototype.lShiftTo = N),
          (l.prototype.rShiftTo = ee),
          (l.prototype.subTo = w),
          (l.prototype.multiplyTo = me),
          (l.prototype.squareTo = K),
          (l.prototype.divRemTo = $),
          (l.prototype.invDigit = H),
          (l.prototype.isEven = zr),
          (l.prototype.exp = Ur),
          (l.prototype.toString = wt),
          (l.prototype.negate = oe),
          (l.prototype.abs = ie),
          (l.prototype.compareTo = ce),
          (l.prototype.bitLength = x),
          (l.prototype.mod = wr),
          (l.prototype.modPowInt = Nr),
          (l.ZERO = W(0)),
          (l.ONE = W(1));
        function Dr() {
          var i = r();
          return this.copyTo(i), i;
        }
        function Br() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function Pr() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function Ar() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function Vr(i) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(i));
        }
        function jr() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function Gr(i) {
          if ((i == null && (i = 10), this.signum() == 0 || i < 2 || i > 36))
            return "0";
          var n = this.chunkSize(i),
            o = Math.pow(i, n),
            d = W(o),
            g = r(),
            y = r(),
            R = "";
          for (this.divRemTo(d, g, y); g.signum() > 0; )
            (R = (o + y.intValue()).toString(i).substr(1) + R),
              g.divRemTo(d, g, y);
          return y.intValue().toString(i) + R;
        }
        function Hr(i, n) {
          this.fromInt(0), n == null && (n = 10);
          for (
            var o = this.chunkSize(n),
              d = Math.pow(n, o),
              g = !1,
              y = 0,
              R = 0,
              A = 0;
            A < i.length;
            ++A
          ) {
            var J = or(i, A);
            if (J < 0) {
              i.charAt(A) == "-" && this.signum() == 0 && (g = !0);
              continue;
            }
            (R = n * R + J),
              ++y >= o &&
                (this.dMultiply(d), this.dAddOffset(R, 0), (y = 0), (R = 0));
          }
          y > 0 && (this.dMultiply(Math.pow(n, y)), this.dAddOffset(R, 0)),
            g && l.ZERO.subTo(this, this);
        }
        function Zr(i, n, o) {
          if (typeof n == "number")
            if (i < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(i, o),
                  this.testBit(i - 1) ||
                    this.bitwiseTo(l.ONE.shiftLeft(i - 1), lr, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(n);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > i &&
                    this.subTo(l.ONE.shiftLeft(i - 1), this);
          else {
            var d = new Array(),
              g = i & 7;
            (d.length = (i >> 3) + 1),
              n.nextBytes(d),
              g > 0 ? (d[0] &= (1 << g) - 1) : (d[0] = 0),
              this.fromString(d, 256);
          }
        }
        function Fr() {
          var i = this.t,
            n = new Array();
          n[0] = this.s;
          var o = this.DB - ((i * this.DB) % 8),
            d,
            g = 0;
          if (i-- > 0)
            for (
              o < this.DB &&
              (d = this[i] >> o) != (this.s & this.DM) >> o &&
              (n[g++] = d | (this.s << (this.DB - o)));
              i >= 0;
            )
              o < 8
                ? ((d = (this[i] & ((1 << o) - 1)) << (8 - o)),
                  (d |= this[--i] >> (o += this.DB - 8)))
                : ((d = (this[i] >> (o -= 8)) & 255),
                  o <= 0 && ((o += this.DB), --i)),
                (d & 128) != 0 && (d |= -256),
                g == 0 && (this.s & 128) != (d & 128) && ++g,
                (g > 0 || d != this.s) && (n[g++] = d);
          return n;
        }
        function Qr(i) {
          return this.compareTo(i) == 0;
        }
        function Kr(i) {
          return this.compareTo(i) < 0 ? this : i;
        }
        function Jr(i) {
          return this.compareTo(i) > 0 ? this : i;
        }
        function _r(i, n, o) {
          var d,
            g,
            y = Math.min(i.t, this.t);
          for (d = 0; d < y; ++d) o[d] = n(this[d], i[d]);
          if (i.t < this.t) {
            for (g = i.s & this.DM, d = y; d < this.t; ++d)
              o[d] = n(this[d], g);
            o.t = this.t;
          } else {
            for (g = this.s & this.DM, d = y; d < i.t; ++d) o[d] = n(g, i[d]);
            o.t = i.t;
          }
          (o.s = n(this.s, i.s)), o.clamp();
        }
        function $r(i, n) {
          return i & n;
        }
        function _t(i) {
          var n = r();
          return this.bitwiseTo(i, $r, n), n;
        }
        function lr(i, n) {
          return i | n;
        }
        function pi(i) {
          var n = r();
          return this.bitwiseTo(i, lr, n), n;
        }
        function mr(i, n) {
          return i ^ n;
        }
        function ci(i) {
          var n = r();
          return this.bitwiseTo(i, mr, n), n;
        }
        function dr(i, n) {
          return i & ~n;
        }
        function wi(i) {
          var n = r();
          return this.bitwiseTo(i, dr, n), n;
        }
        function yr() {
          for (var i = r(), n = 0; n < this.t; ++n) i[n] = this.DM & ~this[n];
          return (i.t = this.t), (i.s = ~this.s), i;
        }
        function bi(i) {
          var n = r();
          return i < 0 ? this.rShiftTo(-i, n) : this.lShiftTo(i, n), n;
        }
        function Sr(i) {
          var n = r();
          return i < 0 ? this.lShiftTo(-i, n) : this.rShiftTo(i, n), n;
        }
        function Bi(i) {
          if (i == 0) return -1;
          var n = 0;
          return (
            (i & 65535) == 0 && ((i >>= 16), (n += 16)),
            (i & 255) == 0 && ((i >>= 8), (n += 8)),
            (i & 15) == 0 && ((i >>= 4), (n += 4)),
            (i & 3) == 0 && ((i >>= 2), (n += 2)),
            (i & 1) == 0 && ++n,
            n
          );
        }
        function xt() {
          for (var i = 0; i < this.t; ++i)
            if (this[i] != 0) return i * this.DB + Bi(this[i]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function Mr(i) {
          for (var n = 0; i != 0; ) (i &= i - 1), ++n;
          return n;
        }
        function Et() {
          for (var i = 0, n = this.s & this.DM, o = 0; o < this.t; ++o)
            i += Mr(this[o] ^ n);
          return i;
        }
        function Yr(i) {
          var n = Math.floor(i / this.DB);
          return n >= this.t
            ? this.s != 0
            : (this[n] & (1 << (i % this.DB))) != 0;
        }
        function yi(i, n) {
          var o = l.ONE.shiftLeft(i);
          return this.bitwiseTo(o, n, o), o;
        }
        function bt(i) {
          return this.changeBit(i, lr);
        }
        function At(i) {
          return this.changeBit(i, dr);
        }
        function Ut(i) {
          return this.changeBit(i, mr);
        }
        function Wt(i, n) {
          for (var o = 0, d = 0, g = Math.min(i.t, this.t); o < g; )
            (d += this[o] + i[o]), (n[o++] = d & this.DM), (d >>= this.DB);
          if (i.t < this.t) {
            for (d += i.s; o < this.t; )
              (d += this[o]), (n[o++] = d & this.DM), (d >>= this.DB);
            d += this.s;
          } else {
            for (d += this.s; o < i.t; )
              (d += i[o]), (n[o++] = d & this.DM), (d >>= this.DB);
            d += i.s;
          }
          (n.s = d < 0 ? -1 : 0),
            d > 0 ? (n[o++] = d) : d < -1 && (n[o++] = this.DV + d),
            (n.t = o),
            n.clamp();
        }
        function xr(i) {
          var n = r();
          return this.addTo(i, n), n;
        }
        function fr(i) {
          var n = r();
          return this.subTo(i, n), n;
        }
        function tr(i) {
          var n = r();
          return this.multiplyTo(i, n), n;
        }
        function Nt(i) {
          var n = r();
          return this.divRemTo(i, n, null), n;
        }
        function It(i) {
          var n = r();
          return this.divRemTo(i, null, n), n;
        }
        function Dt(i) {
          var n = r(),
            o = r();
          return this.divRemTo(i, n, o), new Array(n, o);
        }
        function Xr(i) {
          (this[this.t] = this.am(0, i - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function hr(i, n) {
          for (; this.t <= n; ) this[this.t++] = 0;
          for (this[n] += i; this[n] >= this.DV; )
            (this[n] -= this.DV),
              ++n >= this.t && (this[this.t++] = 0),
              ++this[n];
        }
        function Cr() {}
        function Ot(i) {
          return i;
        }
        function cr(i, n, o) {
          i.multiplyTo(n, o);
        }
        function Rr(i, n) {
          i.squareTo(n);
        }
        (Cr.prototype.convert = Ot),
          (Cr.prototype.revert = Ot),
          (Cr.prototype.mulTo = cr),
          (Cr.prototype.sqrTo = Rr);
        function vr(i) {
          return this.exp(i, new Cr());
        }
        function Ir(i, n, o) {
          var d = Math.min(this.t + i.t, n);
          for (o.s = 0, o.t = d; d > 0; ) o[--d] = 0;
          var g;
          for (g = o.t - this.t; d < g; ++d)
            o[d + this.t] = this.am(0, i[d], o, d, 0, this.t);
          for (g = Math.min(i.t, n); d < g; ++d)
            this.am(0, i[d], o, d, 0, n - d);
          o.clamp();
        }
        function ei(i, n, o) {
          --n;
          var d = (o.t = this.t + i.t - n);
          for (o.s = 0; --d >= 0; ) o[d] = 0;
          for (d = Math.max(n - this.t, 0); d < i.t; ++d)
            o[this.t + d - n] = this.am(n - d, i[d], o, 0, 0, this.t + d - n);
          o.clamp(), o.drShiftTo(1, o);
        }
        function Pt(i) {
          (this.r2 = r()),
            (this.q3 = r()),
            l.ONE.dlShiftTo(2 * i.t, this.r2),
            (this.mu = this.r2.divide(i)),
            (this.m = i);
        }
        function Bt(i) {
          if (i.s < 0 || i.t > 2 * this.m.t) return i.mod(this.m);
          if (i.compareTo(this.m) < 0) return i;
          var n = r();
          return i.copyTo(n), this.reduce(n), n;
        }
        function Vt(i) {
          return i;
        }
        function ui(i) {
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
        function mi(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        function Gt(i, n, o) {
          i.multiplyTo(n, o), this.reduce(o);
        }
        (Pt.prototype.convert = Bt),
          (Pt.prototype.revert = Vt),
          (Pt.prototype.reduce = ui),
          (Pt.prototype.mulTo = Gt),
          (Pt.prototype.sqrTo = mi);
        function ti(i, n) {
          var o = i.bitLength(),
            d,
            g = W(1),
            y;
          if (o <= 0) return g;
          o < 18
            ? (d = 1)
            : o < 48
              ? (d = 3)
              : o < 144
                ? (d = 4)
                : o < 768
                  ? (d = 5)
                  : (d = 6),
            o < 8
              ? (y = new zt(n))
              : n.isEven()
                ? (y = new Pt(n))
                : (y = new br(n));
          var R = new Array(),
            A = 3,
            J = d - 1,
            Q = (1 << d) - 1;
          if (((R[1] = y.convert(this)), d > 1)) {
            var p = r();
            for (y.sqrTo(R[1], p); A <= Q; )
              (R[A] = r()), y.mulTo(p, R[A - 2], R[A]), (A += 2);
          }
          var Tt = i.t - 1,
            kt,
            Or = !0,
            St = r(),
            jt;
          for (o = z(i[Tt]) - 1; Tt >= 0; ) {
            for (
              o >= J
                ? (kt = (i[Tt] >> (o - J)) & Q)
                : ((kt = (i[Tt] & ((1 << (o + 1)) - 1)) << (J - o)),
                  Tt > 0 && (kt |= i[Tt - 1] >> (this.DB + o - J))),
                A = d;
              (kt & 1) == 0;
            )
              (kt >>= 1), --A;
            if (((o -= A) < 0 && ((o += this.DB), --Tt), Or))
              R[kt].copyTo(g), (Or = !1);
            else {
              for (; A > 1; ) y.sqrTo(g, St), y.sqrTo(St, g), (A -= 2);
              A > 0 ? y.sqrTo(g, St) : ((jt = g), (g = St), (St = jt)),
                y.mulTo(St, R[kt], g);
            }
            for (; Tt >= 0 && (i[Tt] & (1 << o)) == 0; )
              y.sqrTo(g, St),
                (jt = g),
                (g = St),
                (St = jt),
                --o < 0 && ((o = this.DB - 1), --Tt);
          }
          return y.revert(g);
        }
        function kr(i) {
          var n = this.s < 0 ? this.negate() : this.clone(),
            o = i.s < 0 ? i.negate() : i.clone();
          if (n.compareTo(o) < 0) {
            var d = n;
            (n = o), (o = d);
          }
          var g = n.getLowestSetBit(),
            y = o.getLowestSetBit();
          if (y < 0) return n;
          for (
            g < y && (y = g), y > 0 && (n.rShiftTo(y, n), o.rShiftTo(y, o));
            n.signum() > 0;
          )
            (g = n.getLowestSetBit()) > 0 && n.rShiftTo(g, n),
              (g = o.getLowestSetBit()) > 0 && o.rShiftTo(g, o),
              n.compareTo(o) >= 0
                ? (n.subTo(o, n), n.rShiftTo(1, n))
                : (o.subTo(n, o), o.rShiftTo(1, o));
          return y > 0 && o.lShiftTo(y, o), o;
        }
        function Er(i) {
          if (i <= 0) return 0;
          var n = this.DV % i,
            o = this.s < 0 ? i - 1 : 0;
          if (this.t > 0)
            if (n == 0) o = this[0] % i;
            else
              for (var d = this.t - 1; d >= 0; --d) o = (n * o + this[d]) % i;
          return o;
        }
        function ri(i) {
          var n = i.isEven();
          if ((this.isEven() && n) || i.signum() == 0) return l.ZERO;
          for (
            var o = i.clone(),
              d = this.clone(),
              g = W(1),
              y = W(0),
              R = W(0),
              A = W(1);
            o.signum() != 0;
          ) {
            for (; o.isEven(); )
              o.rShiftTo(1, o),
                n
                  ? ((!g.isEven() || !y.isEven()) &&
                      (g.addTo(this, g), y.subTo(i, y)),
                    g.rShiftTo(1, g))
                  : y.isEven() || y.subTo(i, y),
                y.rShiftTo(1, y);
            for (; d.isEven(); )
              d.rShiftTo(1, d),
                n
                  ? ((!R.isEven() || !A.isEven()) &&
                      (R.addTo(this, R), A.subTo(i, A)),
                    R.rShiftTo(1, R))
                  : A.isEven() || A.subTo(i, A),
                A.rShiftTo(1, A);
            o.compareTo(d) >= 0
              ? (o.subTo(d, o), n && g.subTo(R, g), y.subTo(A, y))
              : (d.subTo(o, d), n && R.subTo(g, R), A.subTo(y, A));
          }
          if (d.compareTo(l.ONE) != 0) return l.ZERO;
          if (A.compareTo(i) >= 0) return A.subtract(i);
          if (A.signum() < 0) A.addTo(i, A);
          else return A;
          return A.signum() < 0 ? A.add(i) : A;
        }
        var Z = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          di = (1 << 26) / Z[Z.length - 1];
        function ii(i) {
          var n,
            o = this.abs();
          if (o.t == 1 && o[0] <= Z[Z.length - 1]) {
            for (n = 0; n < Z.length; ++n) if (o[0] == Z[n]) return !0;
            return !1;
          }
          if (o.isEven()) return !1;
          for (n = 1; n < Z.length; ) {
            for (var d = Z[n], g = n + 1; g < Z.length && d < di; ) d *= Z[g++];
            for (d = o.modInt(d); n < g; ) if (d % Z[n++] == 0) return !1;
          }
          return o.millerRabin(i);
        }
        function Si(i) {
          var n = this.subtract(l.ONE),
            o = n.getLowestSetBit();
          if (o <= 0) return !1;
          var d = n.shiftRight(o);
          (i = (i + 1) >> 1), i > Z.length && (i = Z.length);
          for (var g = r(), y = 0; y < i; ++y) {
            g.fromInt(Z[y]);
            var R = g.modPow(d, this);
            if (R.compareTo(l.ONE) != 0 && R.compareTo(n) != 0) {
              for (var A = 1; A++ < o && R.compareTo(n) != 0; )
                if (((R = R.modPowInt(2, this)), R.compareTo(l.ONE) == 0))
                  return !1;
              if (R.compareTo(n) != 0) return !1;
            }
          }
          return !0;
        }
        (l.prototype.chunkSize = Vr),
          (l.prototype.toRadix = Gr),
          (l.prototype.fromRadix = Hr),
          (l.prototype.fromNumber = Zr),
          (l.prototype.bitwiseTo = _r),
          (l.prototype.changeBit = yi),
          (l.prototype.addTo = Wt),
          (l.prototype.dMultiply = Xr),
          (l.prototype.dAddOffset = hr),
          (l.prototype.multiplyLowerTo = Ir),
          (l.prototype.multiplyUpperTo = ei),
          (l.prototype.modInt = Er),
          (l.prototype.millerRabin = Si),
          (l.prototype.clone = Dr),
          (l.prototype.intValue = Br),
          (l.prototype.byteValue = Pr),
          (l.prototype.shortValue = Ar),
          (l.prototype.signum = jr),
          (l.prototype.toByteArray = Fr),
          (l.prototype.equals = Qr),
          (l.prototype.min = Kr),
          (l.prototype.max = Jr),
          (l.prototype.and = _t),
          (l.prototype.or = pi),
          (l.prototype.xor = ci),
          (l.prototype.andNot = wi),
          (l.prototype.not = yr),
          (l.prototype.shiftLeft = bi),
          (l.prototype.shiftRight = Sr),
          (l.prototype.getLowestSetBit = xt),
          (l.prototype.bitCount = Et),
          (l.prototype.testBit = Yr),
          (l.prototype.setBit = bt),
          (l.prototype.clearBit = At),
          (l.prototype.flipBit = Ut),
          (l.prototype.add = xr),
          (l.prototype.subtract = fr),
          (l.prototype.multiply = tr),
          (l.prototype.divide = Nt),
          (l.prototype.remainder = It),
          (l.prototype.divideAndRemainder = Dt),
          (l.prototype.modPow = ti),
          (l.prototype.modInverse = ri),
          (l.prototype.pow = vr),
          (l.prototype.gcd = kr),
          (l.prototype.isProbablePrime = ii);
        const Tr = l;
        var Mi = function (i, n) {
            (this.modulus = new Tr(i, 16)),
              (this.encryptionExponent = new Tr(n, 16));
          },
          gr = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (i) {
              if (!i) return !1;
              var n = "",
                o,
                d,
                g,
                y,
                R,
                A,
                J,
                Q = 0;
              do
                (o = i.charCodeAt(Q++)),
                  (d = i.charCodeAt(Q++)),
                  (g = i.charCodeAt(Q++)),
                  (y = o >> 2),
                  (R = ((o & 3) << 4) | (d >> 4)),
                  (A = ((d & 15) << 2) | (g >> 6)),
                  (J = g & 63),
                  isNaN(d) ? (A = J = 64) : isNaN(g) && (J = 64),
                  (n +=
                    this.base64.charAt(y) +
                    this.base64.charAt(R) +
                    this.base64.charAt(A) +
                    this.base64.charAt(J));
              while (Q < i.length);
              return n;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var n = "",
                o,
                d,
                g,
                y,
                R = 0;
              do
                (o = this.base64.indexOf(i.charAt(R++))),
                  (d = this.base64.indexOf(i.charAt(R++))),
                  (g = this.base64.indexOf(i.charAt(R++))),
                  (y = this.base64.indexOf(i.charAt(R++))),
                  (n += String.fromCharCode((o << 2) | (d >> 4))),
                  g != 64 &&
                    (n += String.fromCharCode(((d & 15) << 4) | (g >> 2))),
                  y != 64 && (n += String.fromCharCode(((g & 3) << 6) | y));
              while (R < i.length);
              return n;
            },
          },
          fi = {
            hex: "0123456789abcdef",
            encode: function (i) {
              if (!i) return !1;
              var n = "",
                o,
                d = 0;
              do
                (o = i.charCodeAt(d++)),
                  (n +=
                    this.hex.charAt((o >> 4) & 15) + this.hex.charAt(o & 15));
              while (d < i.length);
              return n;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^0-9abcdef]/g, "");
              var n = "",
                o = 0;
              do
                n += String.fromCharCode(
                  ((this.hex.indexOf(i.charAt(o++)) << 4) & 240) |
                    (this.hex.indexOf(i.charAt(o++)) & 15),
                );
              while (o < i.length);
              return n;
            },
          },
          Wr = {
            getPublicKey: function (i, n) {
              return new Mi(i, n);
            },
            encrypt: function (i, n) {
              return !n ||
                ((i = this.pkcs1pad2(i, (n.modulus.bitLength() + 7) >> 3)),
                !i) ||
                ((i = i.modPowInt(n.encryptionExponent, n.modulus)), !i)
                ? !1
                : ((i = i.toString(16)),
                  (i.length & 1) == 1 && (i = "0" + i),
                  gr.encode(fi.decode(i)));
            },
            pkcs1pad2: function (i, n) {
              if (n < i.length + 11) return null;
              for (var o = [], d = i.length - 1; d >= 0 && n > 0; )
                o[--n] = i.charCodeAt(d--);
              for (o[--n] = 0; n > 2; )
                o[--n] = Math.floor(Math.random() * 254) + 1;
              return (o[--n] = 2), (o[--n] = 0), new Tr(o);
            },
          };
        const hi = Wr;
      },
    },
  ]);
})();
