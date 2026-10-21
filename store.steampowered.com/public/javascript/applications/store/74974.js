/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [74974],
    {
      87242: (Ce, Ye, w) => {
        "use strict";
        w.d(Ye, {
          FU: () => _e,
          eF: () => Ne,
          gf: () => Q,
          wI: () => Ue,
          yp: () => ht,
        });
        var n = w(14947),
          ke = w(41735),
          $ = w.n(ke),
          y = w(35038),
          Ae = w(71742),
          f = w(27066),
          _ = w(72604),
          Pe = w(99412),
          qe = w(94354),
          Ge = w(3166),
          Se = w(6740),
          De = w(71944),
          ie = w(30178),
          ve = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          V = (L, C, j, b) => {
            for (
              var x = b > 1 ? void 0 : b ? X(C, j) : C, P = L.length - 1, U;
              P >= 0;
              P--
            )
              (U = L[P]) && (x = (b ? U(C, j, x) : U(x)) || x);
            return b && x && ve(C, j, x), x;
          },
          Ne = ((L) => (
            (L[(L.None = 0)] = "None"),
            (L[(L.Generic = 1)] = "Generic"),
            (L[(L.Expired = 2)] = "Expired"),
            (L[(L.Network = 3)] = "Network"),
            (L[(L.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (L[(L.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (L[(L.AnonymousLogin = 6)] = "AnonymousLogin"),
            L
          ))(Ne || {});
        function _e(L) {
          const {
            shared_secret: C,
            identity_secret: j,
            secret_1: b,
            status: x,
            uri: P,
            server_time: U,
            ...ee
          } = L;
          return {
            shared_secret: De.iI(C),
            identity_secret: De.iI(j),
            secret_1: De.iI(b),
            ...ee,
          };
        }
        var Ue = ((L) => (
          (L[(L.k_Success = 0)] = "k_Success"),
          (L[(L.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (L[(L.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          L
        ))(Ue || {});
        class Q {
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
          constructor(C, j, b, x) {
            (0, n.Gn)(this),
              (this.m_transport = C),
              (this.m_onCompleteCallback = j),
              (this.m_onDeviceDetailsCallback = b),
              (this.m_onShowAgreement = x);
          }
          StartPolling(C = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              C
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
              const C = y.w.Init(Se.Ev);
              C.SetEMsg(qe.Kec),
                C.Body().set_client_id(this.m_strClientID),
                C.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  C.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const j = await Se.kX.PollAuthSessionStatus(this.m_transport, C),
                b = j.GetEResult();
              if (b !== _.R) {
                if (b === _.zi) {
                  const ce = j.Hdr().transport_error();
                  if (
                    ((0, ie.ZI)(
                      `Failed to poll auth session. Result ${b}. Transport Error: ${ce}`,
                    ),
                    ce === Pe.MhR || ce === Pe.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), _.R
                    );
                }
                if (b === _.Qo || b === _.ob) this.m_eFailureState = 2;
                else if (b === _.h_) this.m_eFailureState = 5;
                else if (b == _.oH) {
                  const ce = j.Body().agreement_session_url();
                  if (
                    ((0, Ae.wT)(
                      !!ce,
                      "Missing agreement session URL for result",
                      b,
                    ),
                    this.m_onShowAgreement)
                  )
                    this.m_onShowAgreement(ce);
                  else {
                    const Xe = document.location.href;
                    window.location.href = `${ce}&redir=${encodeURIComponent(Xe)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), b;
                } else
                  (0, ie.ZI)(`Failed to poll auth session. Result: ${b}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), b;
              }
              const {
                new_challenge_url: x,
                new_client_id: P,
                refresh_token: U,
                access_token: ee,
                account_name: ye,
                had_remote_interaction: B,
                new_guard_data: N,
              } = j.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!B),
                U
                  ? ((0, Ae.wT)(
                      !!ee && !!ye,
                      "Missing access token or account name with refresh token",
                    ),
                    this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: U,
                      strAccessToken: ee,
                      strAccountName: ye,
                      strNewGuardData: N,
                    }),
                    b)
                  : (x && (this.m_strChallengeURL = x),
                    P && (this.m_strClientID = P),
                    this.StartPolling(!1),
                    b)
              );
            } catch (C) {
              return (
                (0, ie.ZI)(`Failed to poll auth session. ${C}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                _.zi
              );
            }
          }
          SetTokenToRevoke(C) {
            this.m_strTokenToRevoke = C;
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
            const C = await this.m_onDeviceDetailsCallback();
            return Se.tS.fromObject(C);
          }
        }
        V([n.sH], Q.prototype, "m_strChallengeURL", 2),
          V([n.sH], Q.prototype, "m_bRemoteInteraction", 2),
          V([n.sH], Q.prototype, "m_eFailureState", 2),
          V([n.sH], Q.prototype, "m_strExtendedErrorMessage", 2),
          V([f.o], Q.prototype, "PollForUpdate", 1),
          V([f.o], Q.prototype, "SetTokenToRevoke", 1);
        function ht(L) {
          const C = new FormData();
          C.append("nonce", L), C.append("sessionid", (0, Ge.KC)());
          let j = new URL(document.location.href);
          const b = new URLSearchParams(j.search);
          b.has("need_password") &&
            (b.delete("need_password"), (j.search = b.toString())),
            C.append("redir", j.toString());
          const x = `${Ge.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return $()
            .post(x, C, { withCredentials: !0 })
            .then(
              (P) => {
                const { data: U } = P;
                if (
                  !U ||
                  !U.transfer_info ||
                  !U.steamID ||
                  !Array.isArray(U.transfer_info)
                )
                  return (
                    (0, ie.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const { transfer_info: ee, steamID: ye, primary_domain: B } = U;
                return Promise.all(
                  ee.map(({ url: N, params: ce }) =>
                    $e(N, { ...ce, steamID: ye }),
                  ),
                ).then(
                  (N) => Oe(N, B),
                  () => 2,
                );
              },
              () => (
                (0, ie.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function Oe(L, C) {
          let j = 0;
          return (
            L.forEach((b) => {
              b.bSuccess ||
                (C && b.domain.toLowerCase() === C.toLowerCase()
                  ? (j = 1)
                  : j == 0 && (j = 2));
            }),
            j
          );
        }
        async function $e(L, C) {
          const j = new URL(L);
          let b = !0;
          try {
            const x = new FormData();
            Object.keys(C).forEach((U) => x.append(U, C[U]));
            const P = await $().post(L, x, {
              withCredentials: !0,
              timeout: 1e4,
            });
            P.status !== 200
              ? ((0, ie.ZI)(
                  `Transfer login to ${j.host} failed with status code: ${P.status}`,
                ),
                (b = !1))
              : P.data.result !== _.R &&
                ((0, ie.ZI)(
                  `Transfer login to ${j.host} failed with result: ${P.data.result}`,
                ),
                (b = !1));
          } catch (x) {
            (0, ie.ZI)(`Transfer login to ${j.host} failed: "${x}"`), (b = !1);
          }
          return { bSuccess: b, domain: j.host };
        }
      },
      30178: (Ce, Ye, w) => {
        "use strict";
        w.d(Ye, {
          ZC: () => Mt,
          Ok: () => ws,
          tG: () => Es,
          ZI: () => _s,
          tH: () => ze,
          P8: () => Et,
          Cr: () => bs,
        });
        var n = w(41735),
          ke = w.n(n),
          $,
          y = 0xdeadbeefcafe,
          Ae = (y & 16777215) == 15715070;
        function f(e, t, s) {
          e != null &&
            (typeof e == "number"
              ? this.fromNumber(e, t, s)
              : t == null && typeof e != "string"
                ? this.fromString(e, 256)
                : this.fromString(e, t));
        }
        function _() {
          return new f(null);
        }
        function Pe(e, t, s, i, u, h) {
          for (; --h >= 0; ) {
            var S = t * this[e++] + s[i] + u;
            (u = Math.floor(S / 67108864)), (s[i++] = S & 67108863);
          }
          return u;
        }
        function qe(e, t, s, i, u, h) {
          for (var S = t & 32767, v = t >> 15; --h >= 0; ) {
            var D = this[e] & 32767,
              H = this[e++] >> 15,
              Z = v * D + H * S;
            (D = S * D + ((Z & 32767) << 15) + s[i] + (u & 1073741823)),
              (u = (D >>> 30) + (Z >>> 15) + v * H + (u >>> 30)),
              (s[i++] = D & 1073741823);
          }
          return u;
        }
        function Ge(e, t, s, i, u, h) {
          for (var S = t & 16383, v = t >> 14; --h >= 0; ) {
            var D = this[e] & 16383,
              H = this[e++] >> 14,
              Z = v * D + H * S;
            (D = S * D + ((Z & 16383) << 14) + s[i] + u),
              (u = (D >> 28) + (Z >> 14) + v * H),
              (s[i++] = D & 268435455);
          }
          return u;
        }
        Ae && navigator.appName == "Microsoft Internet Explorer"
          ? ((f.prototype.am = qe), ($ = 30))
          : Ae && navigator.appName != "Netscape"
            ? ((f.prototype.am = Pe), ($ = 26))
            : ((f.prototype.am = Ge), ($ = 28)),
          (f.prototype.DB = $),
          (f.prototype.DM = (1 << $) - 1),
          (f.prototype.DV = 1 << $);
        var Se = 52;
        (f.prototype.FV = Math.pow(2, Se)),
          (f.prototype.F1 = Se - $),
          (f.prototype.F2 = 2 * $ - Se);
        var De = "0123456789abcdefghijklmnopqrstuvwxyz",
          ie = new Array(),
          ve,
          X;
        for (ve = 48, X = 0; X <= 9; ++X) ie[ve++] = X;
        for (ve = 97, X = 10; X < 36; ++X) ie[ve++] = X;
        for (ve = 65, X = 10; X < 36; ++X) ie[ve++] = X;
        function V(e) {
          return De.charAt(e);
        }
        function Ne(e, t) {
          var s = ie[e.charCodeAt(t)];
          return s ?? -1;
        }
        function _e(e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }
        function Ue(e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0);
        }
        function Q(e) {
          var t = _();
          return t.fromInt(e), t;
        }
        function ht(e, t) {
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
          for (var i = e.length, u = !1, h = 0; --i >= 0; ) {
            var S = s == 8 ? e[i] & 255 : Ne(e, i);
            if (S < 0) {
              e.charAt(i) == "-" && (u = !0);
              continue;
            }
            (u = !1),
              h == 0
                ? (this[this.t++] = S)
                : h + s > this.DB
                  ? ((this[this.t - 1] |=
                      (S & ((1 << (this.DB - h)) - 1)) << h),
                    (this[this.t++] = S >> (this.DB - h)))
                  : (this[this.t - 1] |= S << h),
              (h += s),
              h >= this.DB && (h -= this.DB);
          }
          s == 8 &&
            (e[0] & 128) != 0 &&
            ((this.s = -1),
            h > 0 && (this[this.t - 1] |= ((1 << (this.DB - h)) - 1) << h)),
            this.clamp(),
            u && f.ZERO.subTo(this, this);
        }
        function Oe() {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }
        function $e(e) {
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
            u = !1,
            h = "",
            S = this.t,
            v = this.DB - ((S * this.DB) % t);
          if (S-- > 0)
            for (
              v < this.DB && (i = this[S] >> v) > 0 && ((u = !0), (h = V(i)));
              S >= 0;
            )
              v < t
                ? ((i = (this[S] & ((1 << v) - 1)) << (t - v)),
                  (i |= this[--S] >> (v += this.DB - t)))
                : ((i = (this[S] >> (v -= t)) & s),
                  v <= 0 && ((v += this.DB), --S)),
                i > 0 && (u = !0),
                u && (h += V(i));
          return u ? h : "0";
        }
        function L() {
          var e = _();
          return f.ZERO.subTo(this, e), e;
        }
        function C() {
          return this.s < 0 ? this.negate() : this;
        }
        function j(e) {
          var t = this.s - e.s;
          if (t != 0) return t;
          var s = this.t;
          if (((t = s - e.t), t != 0)) return t;
          for (; --s >= 0; ) if ((t = this[s] - e[s]) != 0) return t;
          return 0;
        }
        function b(e) {
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
        function x() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + b(this[this.t - 1] ^ (this.s & this.DM));
        }
        function P(e, t) {
          var s;
          for (s = this.t - 1; s >= 0; --s) t[s + e] = this[s];
          for (s = e - 1; s >= 0; --s) t[s] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }
        function U(e, t) {
          for (var s = e; s < this.t; ++s) t[s - e] = this[s];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }
        function ee(e, t) {
          var s = e % this.DB,
            i = this.DB - s,
            u = (1 << i) - 1,
            h = Math.floor(e / this.DB),
            S = (this.s << s) & this.DM,
            v;
          for (v = this.t - 1; v >= 0; --v)
            (t[v + h + 1] = (this[v] >> i) | S), (S = (this[v] & u) << s);
          for (v = h - 1; v >= 0; --v) t[v] = 0;
          (t[h] = S), (t.t = this.t + h + 1), (t.s = this.s), t.clamp();
        }
        function ye(e, t) {
          t.s = this.s;
          var s = Math.floor(e / this.DB);
          if (s >= this.t) {
            t.t = 0;
            return;
          }
          var i = e % this.DB,
            u = this.DB - i,
            h = (1 << i) - 1;
          t[0] = this[s] >> i;
          for (var S = s + 1; S < this.t; ++S)
            (t[S - s - 1] |= (this[S] & h) << u), (t[S - s] = this[S] >> i);
          i > 0 && (t[this.t - s - 1] |= (this.s & h) << u),
            (t.t = this.t - s),
            t.clamp();
        }
        function B(e, t) {
          for (var s = 0, i = 0, u = Math.min(e.t, this.t); s < u; )
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
        function N(e, t) {
          var s = this.abs(),
            i = e.abs(),
            u = s.t;
          for (t.t = u + i.t; --u >= 0; ) t[u] = 0;
          for (u = 0; u < i.t; ++u) t[u + s.t] = s.am(0, i[u], t, u, 0, s.t);
          (t.s = 0), t.clamp(), this.s != e.s && f.ZERO.subTo(t, t);
        }
        function ce(e) {
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
        function Xe(e, t, s) {
          var i = e.abs();
          if (!(i.t <= 0)) {
            var u = this.abs();
            if (u.t < i.t) {
              t?.fromInt(0), s != null && this.copyTo(s);
              return;
            }
            s == null && (s = _());
            var h = _(),
              S = this.s,
              v = e.s,
              D = this.DB - b(i[i.t - 1]);
            D > 0
              ? (i.lShiftTo(D, h), u.lShiftTo(D, s))
              : (i.copyTo(h), u.copyTo(s));
            var H = h.t,
              Z = h[H - 1];
            if (Z != 0) {
              var ne = Z * (1 << this.F1) + (H > 1 ? h[H - 2] >> this.F2 : 0),
                fe = this.FV / ne,
                Je = (1 << this.F1) / ne,
                he = 1 << this.F2,
                de = s.t,
                ut = de - H,
                we = t ?? _();
              for (
                h.dlShiftTo(ut, we),
                  s.compareTo(we) >= 0 && ((s[s.t++] = 1), s.subTo(we, s)),
                  f.ONE.dlShiftTo(H, we),
                  we.subTo(h, h);
                h.t < H;
              )
                h[h.t++] = 0;
              for (; --ut >= 0; ) {
                var oe =
                  s[--de] == Z
                    ? this.DM
                    : Math.floor(s[de] * fe + (s[de - 1] + he) * Je);
                if ((s[de] += h.am(0, oe, s, ut, 0, H)) < oe)
                  for (h.dlShiftTo(ut, we), s.subTo(we, s); s[de] < --oe; )
                    s.subTo(we, s);
              }
              t != null && (s.drShiftTo(H, t), S != v && f.ZERO.subTo(t, t)),
                (s.t = H),
                s.clamp(),
                D > 0 && s.rShiftTo(D, s),
                S < 0 && f.ZERO.subTo(s, s);
            }
          }
        }
        function je(e) {
          var t = _();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(f.ZERO) > 0 && e.subTo(t, t),
            t
          );
        }
        function Re(e) {
          this.m = e;
        }
        function kt(e) {
          return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
        }
        function ae(e) {
          return e;
        }
        function Dt(e) {
          e.divRemTo(this.m, null, e);
        }
        function be(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        function et(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        (Re.prototype.convert = kt),
          (Re.prototype.revert = ae),
          (Re.prototype.reduce = Dt),
          (Re.prototype.mulTo = be),
          (Re.prototype.sqrTo = et);
        function Ze() {
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
        function te(e) {
          (this.m = e),
            (this.mp = e.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (e.DB - 15)) - 1),
            (this.mt2 = 2 * e.t);
        }
        function Te(e) {
          var t = _();
          return (
            e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(f.ZERO) > 0 && this.m.subTo(t, t),
            t
          );
        }
        function ue(e) {
          var t = _();
          return e.copyTo(t), this.reduce(t), t;
        }
        function Le(e) {
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
        function tt(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        function We(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        (te.prototype.convert = Te),
          (te.prototype.revert = ue),
          (te.prototype.reduce = Le),
          (te.prototype.mulTo = We),
          (te.prototype.sqrTo = tt);
        function Nt() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function Ee(e, t) {
          if (e > 4294967295 || e < 1) return f.ONE;
          var s = _(),
            i = _(),
            u = t.convert(this),
            h = b(e) - 1;
          for (u.copyTo(s); --h >= 0; )
            if ((t.sqrTo(s, i), (e & (1 << h)) > 0)) t.mulTo(i, u, s);
            else {
              var S = s;
              (s = i), (i = S);
            }
          return t.revert(s);
        }
        function Me(e, t) {
          var s;
          return (
            e < 256 || t.isEven() ? (s = new Re(t)) : (s = new te(t)),
            this.exp(e, s)
          );
        }
        (f.prototype.copyTo = _e),
          (f.prototype.fromInt = Ue),
          (f.prototype.fromString = ht),
          (f.prototype.clamp = Oe),
          (f.prototype.dlShiftTo = P),
          (f.prototype.drShiftTo = U),
          (f.prototype.lShiftTo = ee),
          (f.prototype.rShiftTo = ye),
          (f.prototype.subTo = B),
          (f.prototype.multiplyTo = N),
          (f.prototype.squareTo = ce),
          (f.prototype.divRemTo = Xe),
          (f.prototype.invDigit = Ze),
          (f.prototype.isEven = Nt),
          (f.prototype.exp = Ee),
          (f.prototype.toString = $e),
          (f.prototype.negate = L),
          (f.prototype.abs = C),
          (f.prototype.compareTo = j),
          (f.prototype.bitLength = x),
          (f.prototype.mod = je),
          (f.prototype.modPowInt = Me),
          (f.ZERO = Q(0)),
          (f.ONE = Q(1));
        function st() {
          var e = _();
          return this.copyTo(e), e;
        }
        function Qe() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function dt() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function nt() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function ft(e) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(e));
        }
        function q() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function Bt(e) {
          if ((e == null && (e = 10), this.signum() == 0 || e < 2 || e > 36))
            return "0";
          var t = this.chunkSize(e),
            s = Math.pow(e, t),
            i = Q(s),
            u = _(),
            h = _(),
            S = "";
          for (this.divRemTo(i, u, h); u.signum() > 0; )
            (S = (s + h.intValue()).toString(e).substr(1) + S),
              u.divRemTo(i, u, h);
          return h.intValue().toString(e) + S;
        }
        function Ts(e, t) {
          this.fromInt(0), t == null && (t = 10);
          for (
            var s = this.chunkSize(t),
              i = Math.pow(t, s),
              u = !1,
              h = 0,
              S = 0,
              v = 0;
            v < e.length;
            ++v
          ) {
            var D = Ne(e, v);
            if (D < 0) {
              e.charAt(v) == "-" && this.signum() == 0 && (u = !0);
              continue;
            }
            (S = t * S + D),
              ++h >= s &&
                (this.dMultiply(i), this.dAddOffset(S, 0), (h = 0), (S = 0));
          }
          h > 0 && (this.dMultiply(Math.pow(t, h)), this.dAddOffset(S, 0)),
            u && f.ZERO.subTo(this, this);
        }
        function mt(e, t, s) {
          if (typeof t == "number")
            if (e < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(e, s),
                  this.testBit(e - 1) ||
                    this.bitwiseTo(f.ONE.shiftLeft(e - 1), rt, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(t);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > e &&
                    this.subTo(f.ONE.shiftLeft(e - 1), this);
          else {
            var i = new Array(),
              u = e & 7;
            (i.length = (e >> 3) + 1),
              t.nextBytes(i),
              u > 0 ? (i[0] &= (1 << u) - 1) : (i[0] = 0),
              this.fromString(i, 256);
          }
        }
        function Ht() {
          var e = this.t,
            t = new Array();
          t[0] = this.s;
          var s = this.DB - ((e * this.DB) % 8),
            i,
            u = 0;
          if (e-- > 0)
            for (
              s < this.DB &&
              (i = this[e] >> s) != (this.s & this.DM) >> s &&
              (t[u++] = i | (this.s << (this.DB - s)));
              e >= 0;
            )
              s < 8
                ? ((i = (this[e] & ((1 << s) - 1)) << (8 - s)),
                  (i |= this[--e] >> (s += this.DB - 8)))
                : ((i = (this[e] >> (s -= 8)) & 255),
                  s <= 0 && ((s += this.DB), --e)),
                (i & 128) != 0 && (i |= -256),
                u == 0 && (this.s & 128) != (i & 128) && ++u,
                (u > 0 || i != this.s) && (t[u++] = i);
          return t;
        }
        function Vt(e) {
          return this.compareTo(e) == 0;
        }
        function ot(e) {
          return this.compareTo(e) < 0 ? this : e;
        }
        function pt(e) {
          return this.compareTo(e) > 0 ? this : e;
        }
        function gt(e, t, s) {
          var i,
            u,
            h = Math.min(e.t, this.t);
          for (i = 0; i < h; ++i) s[i] = t(this[i], e[i]);
          if (e.t < this.t) {
            for (u = e.s & this.DM, i = h; i < this.t; ++i)
              s[i] = t(this[i], u);
            s.t = this.t;
          } else {
            for (u = this.s & this.DM, i = h; i < e.t; ++i) s[i] = t(u, e[i]);
            s.t = e.t;
          }
          (s.s = t(this.s, e.s)), s.clamp();
        }
        function K(e, t) {
          return e & t;
        }
        function Ft(e) {
          var t = _();
          return this.bitwiseTo(e, K, t), t;
        }
        function rt(e, t) {
          return e | t;
        }
        function Pt(e) {
          var t = _();
          return this.bitwiseTo(e, rt, t), t;
        }
        function Be(e, t) {
          return e ^ t;
        }
        function Ct(e) {
          var t = _();
          return this.bitwiseTo(e, Be, t), t;
        }
        function it(e, t) {
          return e & ~t;
        }
        function St(e) {
          var t = _();
          return this.bitwiseTo(e, it, t), t;
        }
        function vt() {
          for (var e = _(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }
        function Gt(e) {
          var t = _();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }
        function at(e) {
          var t = _();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }
        function Ut(e) {
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
        function Ls() {
          for (var e = 0; e < this.t; ++e)
            if (this[e] != 0) return e * this.DB + Ut(this[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function _t(e) {
          for (var t = 0; e != 0; ) (e &= e - 1), ++t;
          return t;
        }
        function bt() {
          for (var e = 0, t = this.s & this.DM, s = 0; s < this.t; ++s)
            e += _t(this[s] ^ t);
          return e;
        }
        function Ot(e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t
            ? this.s != 0
            : (this[t] & (1 << (e % this.DB))) != 0;
        }
        function Zt(e, t) {
          var s = f.ONE.shiftLeft(e);
          return this.bitwiseTo(s, t, s), s;
        }
        function Wt(e) {
          return this.changeBit(e, rt);
        }
        function p(e) {
          return this.changeBit(e, it);
        }
        function Qt(e) {
          return this.changeBit(e, Be);
        }
        function zt(e, t) {
          for (var s = 0, i = 0, u = Math.min(e.t, this.t); s < u; )
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
        function Kt(e) {
          var t = _();
          return this.addTo(e, t), t;
        }
        function wt(e) {
          var t = _();
          return this.subTo(e, t), t;
        }
        function xt(e) {
          var t = _();
          return this.multiplyTo(e, t), t;
        }
        function Jt(e) {
          var t = _();
          return this.divRemTo(e, t, null), t;
        }
        function Yt(e) {
          var t = _();
          return this.divRemTo(e, null, t), t;
        }
        function qt(e) {
          var t = _(),
            s = _();
          return this.divRemTo(e, t, s), new Array(t, s);
        }
        function $t(e) {
          (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function Xt(e, t) {
          for (; this.t <= t; ) this[this.t++] = 0;
          for (this[t] += e; this[t] >= this.DV; )
            (this[t] -= this.DV),
              ++t >= this.t && (this[this.t++] = 0),
              ++this[t];
        }
        function z() {}
        function yt(e) {
          return e;
        }
        function es(e, t, s) {
          e.multiplyTo(t, s);
        }
        function ts(e, t) {
          e.squareTo(t);
        }
        (z.prototype.convert = yt),
          (z.prototype.revert = yt),
          (z.prototype.mulTo = es),
          (z.prototype.sqrTo = ts);
        function ss(e) {
          return this.exp(e, new z());
        }
        function ns(e, t, s) {
          var i = Math.min(this.t + e.t, t);
          for (s.s = 0, s.t = i; i > 0; ) s[--i] = 0;
          var u;
          for (u = s.t - this.t; i < u; ++i)
            s[i + this.t] = this.am(0, e[i], s, i, 0, this.t);
          for (u = Math.min(e.t, t); i < u; ++i)
            this.am(0, e[i], s, i, 0, t - i);
          s.clamp();
        }
        function os(e, t, s) {
          --t;
          var i = (s.t = this.t + e.t - t);
          for (s.s = 0; --i >= 0; ) s[i] = 0;
          for (i = Math.max(t - this.t, 0); i < e.t; ++i)
            s[this.t + i - t] = this.am(t - i, e[i], s, 0, 0, this.t + i - t);
          s.clamp(), s.drShiftTo(1, s);
        }
        function Ie(e) {
          (this.r2 = _()),
            (this.q3 = _()),
            f.ONE.dlShiftTo(2 * e.t, this.r2),
            (this.mu = this.r2.divide(e)),
            (this.m = e);
        }
        function rs(e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = _();
          return e.copyTo(t), this.reduce(t), t;
        }
        function Rt(e) {
          return e;
        }
        function He(e) {
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
        function is(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        function as(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        (Ie.prototype.convert = rs),
          (Ie.prototype.revert = Rt),
          (Ie.prototype.reduce = He),
          (Ie.prototype.mulTo = as),
          (Ie.prototype.sqrTo = is);
        function ls(e, t) {
          var s = e.bitLength(),
            i,
            u = Q(1),
            h;
          if (s <= 0) return u;
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
              ? (h = new Re(t))
              : t.isEven()
                ? (h = new Ie(t))
                : (h = new te(t));
          var S = new Array(),
            v = 3,
            D = i - 1,
            H = (1 << i) - 1;
          if (((S[1] = h.convert(this)), i > 1)) {
            var Z = _();
            for (h.sqrTo(S[1], Z); v <= H; )
              (S[v] = _()), h.mulTo(Z, S[v - 2], S[v]), (v += 2);
          }
          var ne = e.t - 1,
            fe,
            Je = !0,
            he = _(),
            de;
          for (s = b(e[ne]) - 1; ne >= 0; ) {
            for (
              s >= D
                ? (fe = (e[ne] >> (s - D)) & H)
                : ((fe = (e[ne] & ((1 << (s + 1)) - 1)) << (D - s)),
                  ne > 0 && (fe |= e[ne - 1] >> (this.DB + s - D))),
                v = i;
              (fe & 1) == 0;
            )
              (fe >>= 1), --v;
            if (((s -= v) < 0 && ((s += this.DB), --ne), Je))
              S[fe].copyTo(u), (Je = !1);
            else {
              for (; v > 1; ) h.sqrTo(u, he), h.sqrTo(he, u), (v -= 2);
              v > 0 ? h.sqrTo(u, he) : ((de = u), (u = he), (he = de)),
                h.mulTo(he, S[fe], u);
            }
            for (; ne >= 0 && (e[ne] & (1 << s)) == 0; )
              h.sqrTo(u, he),
                (de = u),
                (u = he),
                (he = de),
                --s < 0 && ((s = this.DB - 1), --ne);
          }
          return h.revert(u);
        }
        function cs(e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            s = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(s) < 0) {
            var i = t;
            (t = s), (s = i);
          }
          var u = t.getLowestSetBit(),
            h = s.getLowestSetBit();
          if (h < 0) return t;
          for (
            u < h && (h = u), h > 0 && (t.rShiftTo(h, t), s.rShiftTo(h, s));
            t.signum() > 0;
          )
            (u = t.getLowestSetBit()) > 0 && t.rShiftTo(u, t),
              (u = s.getLowestSetBit()) > 0 && s.rShiftTo(u, s),
              t.compareTo(s) >= 0
                ? (t.subTo(s, t), t.rShiftTo(1, t))
                : (s.subTo(t, s), s.rShiftTo(1, s));
          return h > 0 && s.lShiftTo(h, s), s;
        }
        function us(e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            s = this.s < 0 ? e - 1 : 0;
          if (this.t > 0)
            if (t == 0) s = this[0] % e;
            else
              for (var i = this.t - 1; i >= 0; --i) s = (t * s + this[i]) % e;
          return s;
        }
        function hs(e) {
          var t = e.isEven();
          if ((this.isEven() && t) || e.signum() == 0) return f.ZERO;
          for (
            var s = e.clone(),
              i = this.clone(),
              u = Q(1),
              h = Q(0),
              S = Q(0),
              v = Q(1);
            s.signum() != 0;
          ) {
            for (; s.isEven(); )
              s.rShiftTo(1, s),
                t
                  ? ((!u.isEven() || !h.isEven()) &&
                      (u.addTo(this, u), h.subTo(e, h)),
                    u.rShiftTo(1, u))
                  : h.isEven() || h.subTo(e, h),
                h.rShiftTo(1, h);
            for (; i.isEven(); )
              i.rShiftTo(1, i),
                t
                  ? ((!S.isEven() || !v.isEven()) &&
                      (S.addTo(this, S), v.subTo(e, v)),
                    S.rShiftTo(1, S))
                  : v.isEven() || v.subTo(e, v),
                v.rShiftTo(1, v);
            s.compareTo(i) >= 0
              ? (s.subTo(i, s), t && u.subTo(S, u), h.subTo(v, h))
              : (i.subTo(s, i), t && S.subTo(u, S), v.subTo(h, v));
          }
          if (i.compareTo(f.ONE) != 0) return f.ZERO;
          if (v.compareTo(e) >= 0) return v.subtract(e);
          if (v.signum() < 0) v.addTo(e, v);
          else return v;
          return v.signum() < 0 ? v.add(e) : v;
        }
        var se = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          ds = (1 << 26) / se[se.length - 1];
        function Tt(e) {
          var t,
            s = this.abs();
          if (s.t == 1 && s[0] <= se[se.length - 1]) {
            for (t = 0; t < se.length; ++t) if (s[0] == se[t]) return !0;
            return !1;
          }
          if (s.isEven()) return !1;
          for (t = 1; t < se.length; ) {
            for (var i = se[t], u = t + 1; u < se.length && i < ds; )
              i *= se[u++];
            for (i = s.modInt(i); t < u; ) if (i % se[t++] == 0) return !1;
          }
          return s.millerRabin(e);
        }
        function fs(e) {
          var t = this.subtract(f.ONE),
            s = t.getLowestSetBit();
          if (s <= 0) return !1;
          var i = t.shiftRight(s);
          (e = (e + 1) >> 1), e > se.length && (e = se.length);
          for (var u = _(), h = 0; h < e; ++h) {
            u.fromInt(se[h]);
            var S = u.modPow(i, this);
            if (S.compareTo(f.ONE) != 0 && S.compareTo(t) != 0) {
              for (var v = 1; v++ < s && S.compareTo(t) != 0; )
                if (((S = S.modPowInt(2, this)), S.compareTo(f.ONE) == 0))
                  return !1;
              if (S.compareTo(t) != 0) return !1;
            }
          }
          return !0;
        }
        (f.prototype.chunkSize = ft),
          (f.prototype.toRadix = Bt),
          (f.prototype.fromRadix = Ts),
          (f.prototype.fromNumber = mt),
          (f.prototype.bitwiseTo = gt),
          (f.prototype.changeBit = Zt),
          (f.prototype.addTo = zt),
          (f.prototype.dMultiply = $t),
          (f.prototype.dAddOffset = Xt),
          (f.prototype.multiplyLowerTo = ns),
          (f.prototype.multiplyUpperTo = os),
          (f.prototype.modInt = us),
          (f.prototype.millerRabin = fs),
          (f.prototype.clone = st),
          (f.prototype.intValue = Qe),
          (f.prototype.byteValue = dt),
          (f.prototype.shortValue = nt),
          (f.prototype.signum = q),
          (f.prototype.toByteArray = Ht),
          (f.prototype.equals = Vt),
          (f.prototype.min = ot),
          (f.prototype.max = pt),
          (f.prototype.and = Ft),
          (f.prototype.or = Pt),
          (f.prototype.xor = Ct),
          (f.prototype.andNot = St),
          (f.prototype.not = vt),
          (f.prototype.shiftLeft = Gt),
          (f.prototype.shiftRight = at),
          (f.prototype.getLowestSetBit = Ls),
          (f.prototype.bitCount = bt),
          (f.prototype.testBit = Ot),
          (f.prototype.setBit = Wt),
          (f.prototype.clearBit = p),
          (f.prototype.flipBit = Qt),
          (f.prototype.add = Kt),
          (f.prototype.subtract = wt),
          (f.prototype.multiply = xt),
          (f.prototype.divide = Jt),
          (f.prototype.remainder = Yt),
          (f.prototype.divideAndRemainder = qt),
          (f.prototype.modPow = ls),
          (f.prototype.modInverse = hs),
          (f.prototype.pow = ss),
          (f.prototype.gcd = cs),
          (f.prototype.isProbablePrime = Tt);
        const lt = f;
        var ms = function (e, t) {
            (this.modulus = new lt(e, 16)),
              (this.encryptionExponent = new lt(t, 16));
          },
          ps = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (e) {
              if (!e) return !1;
              var t = "",
                s,
                i,
                u,
                h,
                S,
                v,
                D,
                H = 0;
              do
                (s = e.charCodeAt(H++)),
                  (i = e.charCodeAt(H++)),
                  (u = e.charCodeAt(H++)),
                  (h = s >> 2),
                  (S = ((s & 3) << 4) | (i >> 4)),
                  (v = ((i & 15) << 2) | (u >> 6)),
                  (D = u & 63),
                  isNaN(i) ? (v = D = 64) : isNaN(u) && (D = 64),
                  (t +=
                    this.base64.charAt(h) +
                    this.base64.charAt(S) +
                    this.base64.charAt(v) +
                    this.base64.charAt(D));
              while (H < e.length);
              return t;
            },
            decode: function (e) {
              if (!e) return !1;
              e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var t = "",
                s,
                i,
                u,
                h,
                S = 0;
              do
                (s = this.base64.indexOf(e.charAt(S++))),
                  (i = this.base64.indexOf(e.charAt(S++))),
                  (u = this.base64.indexOf(e.charAt(S++))),
                  (h = this.base64.indexOf(e.charAt(S++))),
                  (t += String.fromCharCode((s << 2) | (i >> 4))),
                  u != 64 &&
                    (t += String.fromCharCode(((i & 15) << 4) | (u >> 2))),
                  h != 64 && (t += String.fromCharCode(((u & 3) << 6) | h));
              while (S < e.length);
              return t;
            },
          },
          gs = {
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
          Cs = {
            getPublicKey: function (e, t) {
              return new ms(e, t);
            },
            encrypt: function (e, t) {
              return !t ||
                ((e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)),
                !e) ||
                ((e = e.modPowInt(t.encryptionExponent, t.modulus)), !e)
                ? !1
                : ((e = e.toString(16)),
                  (e.length & 1) == 1 && (e = "0" + e),
                  ps.encode(gs.decode(e)));
            },
            pkcs1pad2: function (e, t) {
              if (t < e.length + 11) return null;
              for (var s = [], i = e.length - 1; i >= 0 && t > 0; )
                s[--t] = e.charCodeAt(i--);
              for (s[--t] = 0; t > 2; )
                s[--t] = Math.floor(Math.random() * 254) + 1;
              return (s[--t] = 2), (s[--t] = 0), new lt(s);
            },
          };
        const Lt = Cs;
        var Ss = w(57589);
        const Ve = new Ss.wd("Login"),
          Es = Ve.Info,
          vs = Ve.Debug,
          ze = Ve.Warning,
          _s = Ve.Error;
        function Ke(e, t) {
          return e.endsWith("/") || (e += "/"), `${e}login/${t}/`;
        }
        function ct() {
          let e = new FormData();
          return e.append("donotcache", new Date().getTime().toString()), e;
        }
        async function bs(e) {
          let t = ct(),
            s = Ke(e, "refreshcaptcha"),
            i = "";
          try {
            let u = { "Content-Type": "multipart/form-data" },
              h = await ke().post(s, t, { headers: u });
            if (h.status != 200) return !1;
            i = h.data.gid;
          } catch {
            return !1;
          }
          return i;
        }
        function ws(e, t) {
          return Ke(e, "rendercaptcha") + `?gid=${t}`;
        }
        async function xs(e, t) {
          let s = ct();
          s.append("username", t);
          let i = Ke(e, "getrsakey"),
            u;
          try {
            let h = { "Content-Type": "multipart/form-data" },
              S = await ke().post(i, s, { headers: h });
            if (S.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(S.status), null
              );
            let v = S.data;
            if (
              !v ||
              !v.success ||
              !v.publickey_mod ||
              !v.publickey_exp ||
              !v.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(v), null;
            u = v;
          } catch (h) {
            return console.log("GetRSAKey exception: "), console.log(h), null;
          }
          return u;
        }
        function Et(e, t) {
          let s = Lt.getPublicKey(t.publickey_mod, t.publickey_exp),
            i = Lt.encrypt(e, s);
          return i === !1 ? null : i;
        }
        async function ys(e, t, s, i) {
          const u = Et(s.strPassword, i);
          if (!u) return null;
          let h = ct();
          h.append("password", u),
            h.append("username", s.strUserName),
            h.append("twofactorcode", s.strTwoFactorCode || ""),
            h.append("emailauth", s.strEmailAuthCode || ""),
            h.append("loginfriendlyname", ""),
            h.append("captchagid", s.gidCaptcha || ""),
            h.append("captcha_text", s.strCaptchaText || ""),
            h.append("emailsteamid", s.emailSteamID || ""),
            h.append("rsatimestamp", i.timestamp),
            h.append("remember_login", s.bRememberLogin ? "true" : "false");
          let S = {};
          t &&
            (h.append("oauth_client_id", t),
            h.append("mobile_chat_client", "true"));
          let v = Ke(e, "dologin"),
            D;
          try {
            S.headers = { "Content-Type": "multipart/form-data" };
            let H = await ke().post(v, h, S);
            if (H.status != 200) return null;
            let Z = H.data;
            if (!Z) return null;
            Z.oauth && (Z.oauth = JSON.parse(Z.oauth)), (D = Z);
          } catch {
            return null;
          }
          return D;
        }
        async function Mt(e, t, s) {
          if (
            ((s = Object.assign({}, s)),
            s.strUserName &&
              (s.strUserName = s.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !s.strPassword ||
              s.strPassword.match(/[^\x00-\x7F]/) ||
              !s.strUserName)
          )
            return null;
          let i = await xs(e, s.strUserName);
          return i
            ? await ys(
                e,
                t,
                {
                  ...s,
                  strUserName: s.strUserName,
                  strPassword: s.strPassword,
                },
                i,
              )
            : (console.error(`Failed to get RSA key from ${e}`), null);
        }
      },
      74974: (Ce, Ye, w) => {
        "use strict";
        w.d(Ye, { YN: () => as, Fn: () => is, Mk: () => gs, kt: () => s });
        var n = w(7850),
          ke = w(32093),
          $ = w(99412),
          y = w(72604),
          Ae = w(41735),
          f = w.n(Ae),
          _ = w(90626),
          Pe = w(92757);
        const qe =
          w.p +
          "images/applications/store/login_mobile_auth.png?v=valveisgoodatcaching";
        var Ge = w(71568),
          Se = w(87883),
          De = w(25792),
          ie = w(179),
          ve = w(24660),
          X = w(19298),
          V = w(36707),
          Ne = w(32224),
          _e = w.n(Ne);
        function Ue(r) {
          const {
            length: o,
            value: a,
            onChange: c,
            onPaste: m,
            tone: g,
            autoFocus: l,
            disabled: d,
            loading: T,
            backupCode: I,
            allowCharacter: A,
          } = r;
          (0, _.useEffect)(() => {
            l && J();
          }, []);
          const F = (0, _.useRef)([]),
            W = () => c(F.current.map((R) => R.value)),
            O = (R) => {
              const E = R.target.value;
              if (E && A && !A(E)) return;
              const k = R.target.nextElementSibling;
              R.target.value && k && k.focus(), W();
            },
            le = (R) => {
              F.current.findIndex((E) => !!E.value) === -1
                ? F.current[0]?.select()
                : R.target.select();
            },
            J = () => {
              const R = F.current.find((E) => !E.value);
              R ? R.focus() : F.current[F.current.length - 1].focus();
            },
            re = (R) => {
              const E = R.target;
              if (R.key === "Backspace" || R.key === "Delete") {
                const k =
                  R.key === "Backspace"
                    ? E.previousElementSibling
                    : E.nextElementSibling;
                E.value === "" &&
                  k &&
                  ((k.value = ""), k.focus(), R.preventDefault(), W());
              } else if (
                R.key === "ArrowLeft" ||
                R.key === "ArrowRight" ||
                R.key === "ArrowUp" ||
                R.key === "ArrowDown"
              ) {
                const k =
                  R.key === "ArrowLeft" || R.key === "ArrowUp"
                    ? E.previousElementSibling
                    : E.nextElementSibling;
                k && (k.focus(), R.preventDefault());
              }
            },
            M = (R) => {
              const E = R.clipboardData.getData("Text");
              let k = R.target,
                G = 0;
              for (; k && G < E.length; )
                k.focus(),
                  (k.value = E.charAt(G)),
                  (k = k.nextElementSibling),
                  G++;
              W(), R.preventDefault(), m && m();
            },
            Y = [];
          for (let R = 0; R < o; R++)
            Y.push(
              (0, n.jsx)(
                ve.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (E) => {
                    E && (F.current[R] = E);
                  },
                  onChange: O,
                  onFocus: le,
                  onClick: (E) => E.stopPropagation(),
                  onKeyDown: re,
                  onPaste: M,
                  value: a[R] ? a[R][0] : "",
                  autoComplete: "none",
                  autoFocus: R === 0 && l,
                  disabled: d || T,
                  className: _e().Input,
                },
                R,
              ),
            );
          return (0, n.jsxs)(X.Z, {
            className: (0, V.A)(
              _e().SegmentedCharacterInput,
              g === "danger" && _e().Danger,
              d && _e().Disabled,
              I && _e().BackupCode,
            ),
            onClick: J,
            children: [
              T &&
                (0, n.jsx)("div", {
                  className: _e().Loading,
                  children: (0, n.jsx)(s, { size: "small" }),
                }),
              Y,
            ],
          });
        }
        var Q = w(36118),
          ht = w(54212),
          Oe = w(85599),
          $e = w(71421),
          L = w(71742),
          C = w(18210),
          j = w(30096),
          b = w(3166),
          x = w(87242),
          P = w(14947),
          U = w(94354),
          ee = w(35038),
          ye = w(65946),
          B = w(30178),
          N = w(6740),
          ce = w(95039),
          Xe = w(3685),
          je = w(44787),
          Re = Object.defineProperty,
          kt = Object.getOwnPropertyDescriptor,
          ae = (r, o, a, c) => {
            for (
              var m = c > 1 ? void 0 : c ? kt(o, a) : o, g = r.length - 1, l;
              g >= 0;
              g--
            )
              (l = r[g]) && (m = (c ? l(o, a, m) : l(m)) || m);
            return c && m && Re(o, a, m), m;
          };
        const Dt = 2,
          be = 0,
          et = 1,
          Ze = 2,
          te = 3,
          Te = 4,
          ue = 5,
          Le = 6,
          tt = 7,
          We = 8,
          Nt = 9,
          Ee = 10,
          Me = 11,
          st = 12,
          Qe = 13,
          dt = 14,
          nt = 15,
          ft = 16;
        class q extends x.gf {
          m_eStatus = be;
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
              (0, P.Gn)(this),
              (this.m_onLoginComplete = o.onComplete),
              (this.m_onGetMachineAuth = o.onGetMachineAuth);
          }
          async Start(o, a, c) {
            if (this.m_eStatus !== be && this.m_eStatus !== Ze)
              return (
                (0, B.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                y.Ze
              );
            const m = o.replace(/[^\x00-\x7F]/g, ""),
              g = a.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!m.length || !g.length) return y.nO;
            if (
              ((this.m_eStatus = et),
              (this.m_bUsingCodeOverride = !1),
              o == "anonymous")
            )
              return (
                this.SetFailureState(x.eF.AnonymousLogin, K.EResult(y.FK)), y.FK
              );
            try {
              const l = await Bt(this.m_transport, m);
              if (!l)
                return (
                  (0, B.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(x.eF.Network, K.EResult(y.Sq)),
                  y.Sq
                );
              const d = (0, B.P8)(g, l),
                T = ee.w.Init(N.iP);
              T.SetEMsg(U.Kec),
                T.Body().set_account_name(m),
                T.Body().set_encrypted_password(d ?? void 0),
                T.Body().set_encryption_timestamp(l.timestamp),
                T.Body().set_remember_login(!!c),
                T.Body().set_persistence(c ? ce.nW : ce.fH),
                T.Body().set_website_id(b.TS.WEBSITE_ID);
              try {
                T.Body().set_device_details(await this.GetDeviceDetails());
              } catch (A) {
                (0, B.ZI)("Failed to GetDeviceDetails"), (0, B.ZI)(A);
              }
              if (
                (T.Body().set_language((0, $.sfN)(b.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const A = await this.m_onGetMachineAuth(m);
                A.eresult == y.R && T.Body().set_guard_data(A.data);
              }
              await this.m_transport.MakeReady();
              const I = await N.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                T,
              );
              return (
                I.DEBUG_LogToConsole(),
                (0, P.h5)(async () => {
                  const A = I.GetEResult(),
                    F = I.Hdr().transport_error();
                  if (A !== y.R)
                    switch (A) {
                      case y.Um:
                        return (this.m_eStatus = Ze), A;
                      case y.Sq:
                      case y.a_:
                        return (
                          this.SetFailureState(x.eF.Network, K.EResult(y.Sq)), A
                        );
                      case y.h_:
                        return (
                          this.SetFailureState(
                            x.eF.RateLimitExceeded,
                            K.EResult(A),
                          ),
                          A
                        );
                      case y.oH: {
                        const E = I.Body().agreement_session_url();
                        if (
                          ((0, L.wT)(
                            !!E,
                            "Missing agreement session URL for result",
                            A,
                          ),
                          this.m_onShowAgreement)
                        )
                          this.m_onShowAgreement(E);
                        else {
                          const k = document.location.href;
                          window.location.href = `${E}&redir=${encodeURIComponent(k)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = be),
                          A
                        );
                      }
                      case y.uN:
                      default:
                        return (
                          (0, B.ZI)(
                            `Failed to start auth session. Result: ${A} Transport: ${F}`,
                          ),
                          this.SetFailureState(
                            x.eF.Generic,
                            K.EResult(A),
                            I.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          A
                        );
                    }
                  this.m_strAccountName = o;
                  const {
                    client_id: W,
                    request_id: O,
                    interval: le,
                    allowed_confirmations: J = [],
                    steamid: re,
                    weak_token: M,
                  } = I.Body().toObject();
                  if (
                    ((0, L.wT)(
                      le !== void 0 && !!W && !!re,
                      "Missing poll interval, client ID, or steamid for result",
                      A,
                    ),
                    (this.m_msPollInterval = le * 1e3),
                    (this.m_strClientID = W),
                    (this.m_rgRequestID = O),
                    (this.m_steamid = re),
                    (this.m_strWeakAuthToken = M ?? ""),
                    J.find(({ confirmation_type: E }) => E === N.TY.ig))
                  ) {
                    const E = new FormData();
                    E.append("clientid", W), E.append("steamid", re);
                    const k = `${b.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await f().post(k, E, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == y.R
                      )
                        return (
                          (this.m_eStatus = Te), this.StartPolling(!0), y.R
                        );
                    } catch (G) {
                      if (
                        ((0, B.tG)(
                          `checkdevice ajax to ${k} failed: ${G.message}`,
                        ),
                        G instanceof Ae.AxiosError)
                      ) {
                        const pe = G;
                        return pe.response
                          ? (this.SetFailureState(
                              x.eF.Network,
                              K.AjaxFailureWithCode(pe.response.status),
                            ),
                            y.Sq)
                          : (this.SetFailureState(
                              x.eF.Network,
                              K.AjaxFailureNoCode(),
                            ),
                            y.Sq);
                      }
                      return (
                        this.SetFailureState(x.eF.Network, K.EResult(y.eH)),
                        y.eH
                      );
                    }
                  }
                  const Y = Ht(
                      J.map(
                        ({ confirmation_type: E }) => (
                          (0, L.wT)(
                            E !== void 0,
                            "Missing confirmation type in allowed confirmations",
                          ),
                          E
                        ),
                      ),
                    ),
                    R = J.find(({ confirmation_type: E }) => E === Y);
                  switch (
                    (R &&
                      R.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        R.associated_message),
                    Y)
                  ) {
                    case N.TY.WM:
                      return (this.m_eStatus = Qe), this.StartPolling(), A;
                    case N.TY.Xs:
                      this.m_eStatus = te;
                      break;
                    case N.TY.$Y:
                      (this.m_eStatus = Te), this.StartPolling(!1);
                      break;
                    case N.TY.bH:
                      (this.m_eStatus = ue), this.StartPolling(!1);
                      break;
                    case N.TY.x0:
                      (this.m_eStatus = Le), this.StartPolling(!1);
                      break;
                  }
                  return A;
                })
              );
            } catch (l) {
              return (
                (0, B.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(l)}`,
                ),
                (0, B.tG)(l),
                this.SetFailureState(x.eF.Generic, K.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                y.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = ft);
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
                case Ee:
                  this.m_eStatus = te;
                  break;
                case Me:
                  this.m_eStatus = ue;
                  break;
                case ue:
                case te:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(y.R);
            }
            try {
              await this.m_transport.MakeReady();
              const c = this.m_eStatus === te || this.m_eStatus === Ee,
                m = ee.w.Init(N.Qc);
              m.SetEMsg(U.Kec),
                m.Body().set_client_id(this.m_strClientID),
                m.Body().set_steamid(this.m_steamid),
                m.Body().set_code(o),
                m.Body().set_code_type(c ? N.TY.Xs : N.TY.bH);
              const g = await N.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  m,
                ),
                l = g.GetEResult();
              if (l !== y.R) {
                if (!a)
                  return (
                    (0, B.ZI)(
                      `Failed to automatically update session with local SG info. Result ${l}. Transport ${g.Hdr().transport_error()}`,
                    ),
                    l
                  );
                switch (l) {
                  case y.QR:
                  case y.b7:
                    return (this.m_eStatus = c ? Ee : Me), l;
                  case y.ob:
                    return (
                      this.SetFailureState(x.eF.Expired, K.EResult(l)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      l
                    );
                  case y.h_:
                    return (
                      this.SetFailureState(
                        x.eF.RateLimitExceeded,
                        K.EResult(l),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      l
                    );
                  case y.oH: {
                    const d = g.Body().agreement_session_url();
                    if (
                      ((0, L.wT)(
                        !!d,
                        "Missing agreement session URL for result",
                        l,
                      ),
                      this.m_onShowAgreement)
                    )
                      this.m_onShowAgreement(d);
                    else {
                      const T = document.location.href;
                      window.location.href = `${d}&redir=${encodeURIComponent(T)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = be),
                      l
                    );
                  }
                  default:
                    return (
                      (0, B.ZI)(
                        `Failed to update auth session with SG code. Result: ${l}`,
                      ),
                      this.SetFailureState(x.eF.Generic, K.EResult(l)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      l
                    );
                }
              }
              return (this.m_eStatus = Qe), this.StartPolling(), l;
            } catch (c) {
              return (
                (0, B.ZI)(`Failed to update auth session with SG code. ${c}`),
                this.SetFailureState(x.eF.Generic, K.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                y.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case Le:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = ue);
                return;
              case Te:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = te);
                return;
              default:
                (0, B.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = tt;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new Xe.D(
              b.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const o = ee.w.Init(je.ot),
                a = await je.fz.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  o,
                );
              y.R != a.GetEResult()
                ? (a.DEBUG_LogToConsole(),
                  (0, B.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    a.GetEResult(),
                  ),
                  this.SetFailureState(
                    x.eF.MoveAuthenticator,
                    K.EResult(a.GetEResult()),
                  ))
                : (this.m_eStatus = We);
            } catch (o) {
              (0, B.ZI)(
                "An unexpected error occured while moving an authenticator",
                o,
              ),
                this.SetFailureState(x.eF.MoveAuthenticator, K.EResult(y.zi));
            }
          }
          async ResendMoveCode() {
            (0, L.wT)(
              !!this.m_weakAuthWebInterface,
              "Resending move code before StartMoveAuthenticator",
            );
            const o = ee.w.Init(je.ot),
              a = await je.fz.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                o,
              );
            y.R != a.GetEResult() &&
              (a.DEBUG_LogToConsole(),
              (0, B.ZI)(
                "An unexpected error occured while adding an authenticator",
                a.GetEResult(),
              )),
              (this.m_eStatus = We);
          }
          async FinishMoveAuthenticator(o) {
            (0, L.wT)(
              !!this.m_weakAuthWebInterface,
              "Finishing authenticator move before StartMoveAuthenticator",
            );
            const a = ee.w.Init(je.bv);
            a.Body().set_sms_code(o),
              a.Body().set_generate_new_token(!0),
              a.Body().set_version(Dt);
            const c = await je.fz.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              a,
            );
            if (y.c3 == c.GetEResult()) this.m_eStatus = st;
            else if (!c.Body().success())
              c.DEBUG_LogToConsole(),
                (0, B.ZI)(
                  "Error when calling RemoveAuthenticatorViaChallengeContinue",
                  c.GetEResult(),
                ),
                this.SetFailureState(
                  x.eF.MoveAuthenticator,
                  K.EResult(c.GetEResult()),
                );
            else {
              c.DEBUG_LogToConsole();
              const m = c.Body().replacement_token();
              (0, L.wT)(
                !!m,
                "Missing replacement token on successful authenticator move",
              ),
                (this.m_replacementAuthenticator = (0, x.FU)(m.toObject())),
                (this.m_eStatus = Nt),
                (this.m_bUsingCodeOverride = !1);
            }
          }
          FinishMoveRecovery() {
            this.m_eStatus = ue;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case ue:
              case Me:
              case te:
              case Ee:
              case Le:
              case Te:
              case tt:
              case We:
              case st:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case Le:
              case Te:
                this.m_eStatus = be;
                break;
              case ue:
              case Me:
                this.m_eStatus = this.m_bUsingCodeOverride ? Le : be;
                break;
              case tt:
              case We:
              case st:
                this.m_eStatus = (this.m_bUsingCodeOverride, ue);
                break;
              case te:
              case Ee:
                this.m_eStatus = this.m_bUsingCodeOverride ? Te : be;
                break;
              default:
                (0, B.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(o, a, c = "") {
            (this.m_eStatus = nt),
              (this.m_eFailureState = o),
              (this.m_strErrorReference = a),
              (this.m_strExtendedErrorMessage = c);
          }
          onAuthComplete = (o) => {
            this.m_eStatus = o.bSuccess ? dt : nt;
            let a;
            o.bSuccess
              ? ((0, L.wT)(
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
        ae([P.sH], q.prototype, "m_eStatus", 2),
          ae([P.sH], q.prototype, "m_strErrorReference", 2),
          ae([j.oI], q.prototype, "Start", 1),
          ae([j.oI], q.prototype, "SendSteamGuardCode", 1),
          ae([j.oI], q.prototype, "UseCodeOverride", 1),
          ae([j.oI], q.prototype, "CantAccessCode", 1),
          ae([j.oI], q.prototype, "StartMoveAuthenticator", 1),
          ae([j.oI], q.prototype, "ResendMoveCode", 1),
          ae([j.oI], q.prototype, "FinishMoveAuthenticator", 1),
          ae([j.oI], q.prototype, "FinishMoveRecovery", 1),
          ae([j.oI], q.prototype, "GoBack", 1),
          ae([P.XI], q.prototype, "SetFailureState", 1),
          ae([j.oI], q.prototype, "SetOnLoginComplete", 1);
        async function Bt(r, o) {
          const a = ee.w.Init(N.qu);
          a.Body().set_account_name(o), a.SetEMsg(U.Kec);
          try {
            await r.MakeReady();
            const c = await N.kX.GetPasswordRSAPublicKey(r, a);
            if ((c.DEBUG_LogToConsole(), c.GetEResult() !== y.R))
              return (
                (0, B.ZI)(
                  `Failed to get RSA key with EResult: ${c.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: m,
              publickey_mod: g,
              timestamp: l,
            } = c.Body().toObject();
            return !m || !g || !l
              ? ((0, B.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: m, publickey_mod: g, timestamp: l })}`,
                ),
                null)
              : { publickey_exp: m, publickey_mod: g, timestamp: l };
          } catch (c) {
            return (
              (0, B.ZI)(`Failed to get RSA key: ${JSON.stringify(c)}`), null
            );
          }
        }
        const mt = [
          N.TY.x0,
          N.TY.bH,
          N.TY.Xs,
          N.TY.WM,
          N.TY.oP,
          N.TY.$Y,
        ].reduce((r, o, a) => ((r[o] = a), r), {});
        function Ht(r) {
          let o = r[0] || N.TY.oP;
          return r.length > 1 && (o = r.sort((a, c) => mt[a] - mt[c])[0]), o;
        }
        function Vt(r) {
          const [o, a] = (0, _.useState)(new q(r));
          return (
            (0, _.useEffect)(() => {
              o?.SetOnLoginComplete(r.onComplete);
            }, [o, r.onComplete]),
            (0, ye.q3)(() => ({
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
              reset: () => a(new q(r)),
              goBack: o.GoBack,
              setTokenToRevoke: o.SetTokenToRevoke,
            }))
          );
        }
        function ot(r) {
          return r ? 7 : 5;
        }
        function pt(r, o) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(r) && r.length <= ot(o);
        }
        function gt(r, o) {
          return pt(r, o) && r.length === ot(o);
        }
        const K = {
          EResult: (r) => `e${r}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (r) => `af-${r}`,
        };
        var Ft = Object.defineProperty,
          rt = Object.getOwnPropertyDescriptor,
          Pt = (r, o, a, c) => {
            for (
              var m = c > 1 ? void 0 : c ? rt(o, a) : o, g = r.length - 1, l;
              g >= 0;
              g--
            )
              (l = r[g]) && (m = (c ? l(o, a, m) : l(m)) || m);
            return c && m && Ft(o, a, m), m;
          };
        const Be = 0,
          Ct = 1,
          it = 2,
          St = 3,
          vt = 4,
          Gt = 5;
        class at extends x.gf {
          m_eStatus = Be;
          constructor(o) {
            super(
              o.transport,
              (a) => {
                (this.m_eStatus = a.bSuccess ? St : vt), o.onComplete(a);
              },
              o.onDeviceDetails,
            ),
              (0, P.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== Be)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                y.zi
              );
            this.m_eStatus = Ct;
            try {
              await this.m_transport.MakeReady();
              const o = ee.w.Init(N.R9);
              o.SetEMsg(U.Kec);
              try {
                o.Body().set_device_details(await this.GetDeviceDetails());
              } catch (I) {
                console.error("Failed to GetDeviceDetails"), console.log(I);
              }
              o.Body().set_website_id(b.TS.WEBSITE_ID);
              const a = await N.kX.BeginAuthSessionViaQR(this.m_transport, o),
                c = a.GetEResult(),
                m = a.Hdr().transport_error();
              if (c !== y.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${c} Transport: ${m}`,
                  ),
                  (this.m_eFailureState = x.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  c
                );
              const {
                client_id: g,
                challenge_url: l,
                interval: d,
                request_id: T,
              } = a.Body().toObject();
              return (
                (0, L.wT)(
                  d !== void 0,
                  "Missing poll interval for QR auth session",
                ),
                (this.m_strClientID = g),
                (this.m_strChallengeURL = l),
                (this.m_msPollInterval = d * 1e3),
                (this.m_rgRequestID = T),
                (this.m_eStatus = it),
                this.StartPolling(!1),
                c
              );
            } catch (o) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(o)}`,
                ),
                (this.m_eFailureState = x.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                y.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = Gt);
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
        Pt([P.sH], at.prototype, "m_eStatus", 2);
        function Ut(r) {
          const [o, a] = (0, _.useState)(new at(r));
          return (
            (0, _.useEffect)(
              () => (
                o.Start(),
                () => {
                  o.Stop();
                }
              ),
              [o],
            ),
            (0, ye.q3)(() => ({
              strChallengeURL: o.GetChallengeURL(),
              strClientID: o.GetClientID(),
              eFailureState: o.GetFailureState(),
              eStatus: o.GetStatus(),
              bHadRemoteInteraction: o.BHadRemoteInteraction(),
              reset: () => a(new at(r)),
              setTokenToRevoke: o.SetTokenToRevoke,
            }))
          );
        }
        function Ls(r) {
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
        async function _t() {
          const [r, o, a, c] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            SteamClient?.Auth?.GetLocalHostname?.() ?? "",
            SteamClient?.Auth?.GetMachineID?.() ?? void 0,
          ]);
          return {
            os_type: r,
            device_friendly_name: a,
            machine_id: c,
            platform_type: N.SS.w0,
            gaming_device_type: o.eGamingDeviceType,
          };
        }
        async function bt() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: N.SS.tS,
          };
        }
        function Ot(r) {
          const {
              onSuccess: o,
              secureComputer: a = !0,
              isProbablySharedPC: c = !1,
            } = r,
            m = (0, _.useCallback)(
              (R) => {
                if (R.bSuccess) {
                  const {
                    strRefreshToken: E,
                    strAccessToken: k,
                    strAccountName: G,
                    strNewGuardData: pe,
                  } = R;
                  o({
                    strRefreshToken: E,
                    strAccessToken: k,
                    strAccountName: G,
                    strNewGuardData: pe,
                  });
                }
              },
              [o],
            ),
            g = Vt({
              transport: r.transport,
              onComplete: m,
              onDeviceDetails: r.onDeviceDetails,
              onGetMachineAuth: r.onGetMachineAuth,
              onShowAgreement: r.onShowAgreement,
            }),
            [l, d] = (0, _.useState)(Be),
            T = "Login_RememberMeSetting",
            [I, A] = (0, _.useState)(
              r.refreshInfo?.account_name ?? r.defaultAccountName ?? "",
            ),
            [F, W] = (0, _.useState)(""),
            [O, le] = (0, _.useState)(
              a && !c && localStorage?.getItem(T) != "0",
            ),
            J = !(g.eStatus === be || g.eStatus === et || g.eStatus === Ze),
            re = () => (!I || !F ? Promise.resolve(y.nO) : g.start(I, F, O)),
            M = () => {
              (0, B.tG)(`Logging in offline with username ${I}`),
                SteamClient.User.SetLoginCredentials(I, F, O),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, _.useEffect)(() => {
              r.refreshInfo?.login_token_id &&
                g.setTokenToRevoke(r.refreshInfo.login_token_id);
            }, [r.refreshInfo, g]),
            {
              password: g,
              onComplete: m,
              eQRStatus: l,
              onQRStatusChange: d,
              strAccountName: I,
              onAccountNameChange: A,
              strPassword: F,
              onPasswordChange: W,
              bRememberMe: O,
              onRememberMeChange: (R) => {
                le(R), localStorage?.setItem(T, R ? "1" : "0");
              },
              onPasswordSubmit: re,
              bInPasswordFlow: J,
              onTryOffline: M,
            }
          );
        }
        function Zt(r, o = "") {
          let a = { title: "", description: "" };
          switch (r) {
            case x.eF.None:
              return { title: "", description: "" };
            case x.eF.Expired:
              a = {
                title: (0, C.we)("#Login_Error_Expired_Title"),
                description: (0, C.we)("#Login_Error_Expired_Description"),
              };
              break;
            case x.eF.Network:
              a = {
                title: (0, C.we)("#Login_Error_Network_Title"),
                description: (0, C.we)("#Login_Error_Network_Description"),
              };
              break;
            case x.eF.MoveAuthenticator:
              a = {
                title: (0, C.we)("#Error_Generic"),
                description: (0, C.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case x.eF.RateLimitExceeded:
              a = {
                title: (0, C.we)("#Login_Error_RateLimit_Title"),
                description: (0, C.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case x.eF.AnonymousLogin:
              a = {
                title: (0, C.we)("#Login_Error_Anonymous_Title"),
                description: (0, C.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case x.eF.Generic:
            default:
              a = {
                title: (0, C.we)("#Error_Generic"),
                description: (0, C.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return o && (a.description = o), a;
        }
        var Wt = w(78412),
          p = w.n(Wt),
          Qt = w(56589),
          zt = w.n(Qt),
          Kt = w(5804),
          wt = w.n(Kt),
          xt = ((r) => (
            (r[(r.L = 1)] = "L"),
            (r[(r.M = 0)] = "M"),
            (r[(r.Q = 3)] = "Q"),
            (r[(r.H = 2)] = "H"),
            r
          ))(xt || {});
        function Jt(r, o, a) {
          const c = r.length,
            m = r[0].length,
            g = (c + 2) * m,
            l = new Uint8Array(40 + g);
          let d = 0;
          (l[d++] = 71),
            (l[d++] = 73),
            (l[d++] = 70),
            (l[d++] = 56),
            (l[d++] = 57),
            (l[d++] = 97),
            (l[d++] = c),
            (l[d++] = 0),
            (l[d++] = m),
            (l[d++] = 0),
            (0, L.wT)(
              o != "transparent" || a != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (l[d++] = 161),
            (l[d++] = 0),
            (l[d++] = 0),
            o == "transparent"
              ? ((l[d++] = 0), (l[d++] = 0), (l[d++] = 0))
              : ((l[d++] = o[0]), (l[d++] = o[1]), (l[d++] = o[2])),
            a == "transparent"
              ? ((l[d++] = 0), (l[d++] = 0), (l[d++] = 0))
              : ((l[d++] = a[0]), (l[d++] = a[1]), (l[d++] = a[2])),
            (l[d++] = 255),
            (l[d++] = 255),
            (l[d++] = 255),
            (l[d++] = 255),
            (l[d++] = 255),
            (l[d++] = 255),
            (o == "transparent" || a == "transparent") &&
              ((l[d++] = 33),
              (l[d++] = 249),
              (l[d++] = 4),
              (l[d++] = 1),
              (l[d++] = 0),
              (l[d++] = 0),
              (l[d++] = o == "transparent" ? 0 : 1),
              (l[d++] = 0)),
            (l[d++] = 44),
            (l[d++] = 0),
            (l[d++] = 0),
            (l[d++] = 0),
            (l[d++] = 0),
            (l[d++] = c),
            (l[d++] = 0),
            (l[d++] = m),
            (l[d++] = 0),
            (l[d++] = 0);
          const T = 7;
          l[d++] = T;
          for (let I = 0; I < r.length; I++) {
            (l[d++] = c + 1), (l[d++] = 2 ** T);
            for (let A = 0; A < r.length; A++) l[d++] = r[I][A] ? 0 : 1;
          }
          return (
            (l[d++] = 1), (l[d++] = 2 ** T + 1), (l[d++] = 0), (l[d++] = 59), l
          );
        }
        function Yt(
          r,
          {
            activeBitColor: o = [33, 35, 40],
            inactiveBitColor: a = [255, 255, 255],
            borderWidth: c = 3,
          } = {},
          m = {},
        ) {
          const g = zt()(r, m).modules;
          if (!g) return null;
          let l = [];
          for (let d = 0; d < c; d++) l.push(Array(g.length + c * 2).fill(!1));
          for (let d = 0; d < g.length; d++)
            l.push([
              ...Array.from({ length: c }, () => !1),
              ...g[d],
              ...Array.from({ length: c }, () => !1),
            ]);
          for (let d = 0; d < c; d++) l.push(Array(g.length + c * 2).fill(!1));
          return Jt(l, o, a);
        }
        function qt(r) {
          let {
            quality: o = 0,
            children: a,
            className: c,
            activeBitColor: m = [33, 35, 40],
            inactiveBitColor: g = [255, 255, 255],
            borderWidth: l = 3,
            typeNumber: d = 6,
          } = r;
          const T = $t(a, {
            typeNumber: d,
            errorCorrectLevel: o,
            activeBitColor: m,
            inactiveBitColor: g,
            borderWidth: l,
          });
          if (!T) return null;
          const I = new Blob([T], { type: "image/gif" }),
            A = URL.createObjectURL(I),
            F = `rgb(${g[0]}, ${g[1]}, ${g[2]})`;
          return (0, n.jsx)("div", {
            className: (0, V.A)(wt().QRBits, c),
            style: { "--qr-bright-color": F },
            children: (0, n.jsx)("img", {
              className: wt().QRImg,
              src: A,
              alt: "",
            }),
          });
        }
        function $t(r, o) {
          const {
            typeNumber: a,
            errorCorrectLevel: c,
            activeBitColor: m,
            inactiveBitColor: g,
            borderWidth: l,
          } = o;
          return (0, _.useMemo)(
            () =>
              Yt(
                r,
                { activeBitColor: m, inactiveBitColor: g, borderWidth: l },
                { typeNumber: a, errorCorrectLevel: c },
              ),
            [r, a, c, m, g, l],
          );
        }
        var Xt = w(15557),
          z = w.n(Xt),
          yt = w(16412);
        function es(r) {
          const {
              transport: o,
              onComplete: a,
              onStatusChange: c,
              platform: m,
              styling: g = "default",
              activeBitValue: l = 255,
            } = r,
            d = b.TS.IN_STEAMUI ? _t : bt,
            {
              eStatus: T,
              strChallengeURL: I,
              strClientID: A,
              bHadRemoteInteraction: F,
              reset: W,
              setTokenToRevoke: O,
            } = Ut({ transport: o, onComplete: a, onDeviceDetails: d });
          (0, _.useEffect)(() => c && c(T), [c, T]);
          const le = T === it && I ? I : b.TS.STORE_BASE_URL,
            J = T === Be || T === Ct || F,
            re = T === vt,
            M = T === St,
            Y = M
              ? (0, n.jsx)(Ie, {})
              : re
                ? (0, n.jsx)(ns, { reset: W })
                : J
                  ? (0, n.jsx)(ss, { size: "small" })
                  : null,
            R = J || re || M;
          (0, _.useEffect)(() => {
            r.refreshInfo?.login_token_id && O(r.refreshInfo.login_token_id);
          }, [r.refreshInfo, O]);
          const E = b.TS.EUNIVERSE !== $.wLO,
            k = `rgb(${l}, ${l}, ${l})`;
          return (0, n.jsx)("div", {
            className: z().Column,
            children: (0, n.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, n.jsx)(qt, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: E ? [l, 0, l] : [l, l, l],
                  quality: ts(le),
                  className: (0, V.A)(
                    z().LoginQR,
                    g == "deck" && z().QRLoginDeck,
                    g == "vr" && z().QRLoginVR,
                    R && z().Blur,
                    E && z().NonPublic,
                  ),
                  children: le,
                }),
                R &&
                  (0, n.jsx)("div", {
                    className: z().Overlay,
                    children: (0, n.jsx)("div", {
                      className: z().Box,
                      style: { "--qr-bright-color": k },
                      children: Y,
                    }),
                  }),
              ],
            }),
          });
        }
        function ts(r) {
          return r.length <= 90 ? xt.Q : void 0;
        }
        function ss(r) {
          const { size: o } = r;
          return (0, n.jsx)("div", {
            className: (0, V.A)(
              z().Loading,
              o == "small" && z().Small,
              (o == "medium" || !o) && z().Medium,
              o == "large" && z().Large,
            ),
          });
        }
        function ns(r) {
          return (0, n.jsx)(yt.$n, {
            onClick: r.reset,
            className: z().QRFailure,
            children: (0, n.jsx)(os, {}),
          });
        }
        function os(r) {
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
        function Ie() {
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
        var rs = w(72609);
        const Rt = (0, _.createContext)(!1),
          He = () => (0, _.useContext)(Rt);
        function is() {
          return (0, n.jsx)("div", {
            className: p().Login,
            children: (0, n.jsx)(u, {
              reset: () => window.location.reload(),
              failure: x.eF.Generic,
            }),
          });
        }
        function as(r) {
          const o = Hs(r.redirectUrl),
            a = (c) => {
              const { strRefreshToken: m } = c;
              (0, x.yp)(m).then(
                (g) => r.onComplete(g),
                () => r.onComplete(x.wI.k_PrimaryDomainFail),
              );
            };
          return o
            ? null
            : (0, n.jsx)(ls, {
                ...r,
                creationRedirectUrl: r.redirectUrl,
                onSuccess: a,
                embedded: r.theme === "modal",
              });
        }
        function ls(r) {
          const { embedded: o, children: a, ...c } = r;
          return (0, n.jsx)(De.tH, {
            children: (0, n.jsx)(Rt.Provider, {
              value: o ?? !1,
              children: (0, n.jsxs)("div", {
                className: p().Login,
                children: [(0, n.jsx)(ds, { ...c }), a],
              }),
            }),
          });
        }
        function cs(r) {
          if ((0, Se.q)()) return null;
          const { variant: o } = r;
          return typeof o == "function"
            ? (0, n.jsx)(oe, {
                onClick: o,
                children: (0, C.we)("#Login_Help_SignIn"),
              })
            : (0, n.jsx)(oe, {
                href: `${b.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, C.we)("#Login_Help_SignIn"),
              });
        }
        function us(r) {
          const { variant: o, redirectUrl: a } = r;
          if (typeof o == "function")
            return (0, n.jsx)(oe, {
              inline: !0,
              onClick: o,
              children: (0, C.we)("#Login_CreateAccount"),
            });
          {
            const c = a ? `?redir=${encodeURIComponent(a)}` : "";
            switch (o ?? "normal") {
              default:
              case "normal":
                return (0, n.jsx)(oe, {
                  inline: !0,
                  href: `${b.TS.STORE_BASE_URL}join/${c}`,
                  children: (0, C.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, n.jsx)(oe, {
                  inline: !0,
                  href: `${b.TS.PARTNER_BASE_URL}${c}`,
                  children: (0, C.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function hs(r) {
          const { launcherType: o, variant: a, redirectUrl: c } = r;
          if (o === $.A2g || a == "none") return null;
          const m = o !== void 0;
          let g;
          switch (a ?? "normal") {
            default:
            case "normal":
              g = "#Login_NoSteamAccount";
              break;
            case "partner":
              g = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, n.jsxs)("div", {
            className: (0, V.A)(p().AccountCreation, m && p().InClient),
            children: [
              (0, n.jsx)("span", {
                className: p().AccountCreationPrompt,
                children: (0, C.we)(g),
              }),
              (0, n.jsx)(us, { variant: a, redirectUrl: c }),
            ],
          });
        }
        function se() {
          const r =
            window?.location && (0, ie.f3)(window.location, "need_password");
          return r !== void 0 && r !== "false" && r !== "0";
        }
        function ds(r) {
          const {
              transport: o,
              onSuccess: a,
              platform: c,
              autoFocus: m,
              refreshInfo: g,
              renderSuccess: l = () => (0, n.jsx)(Bs, {}),
              lastResult: d,
              joinLinkVariant: T,
              defaultAccountName: I,
              secureComputer: A = !0,
              isProbablySharedPC: F = !1,
              onShowAgreement: W,
              creationRedirectUrl: O,
            } = r,
            le = b.TS.IN_STEAMUI ? _t : bt,
            J = b.TS.IN_STEAMUI
              ? (G) => SteamClient.Auth.GetSteamGuardData(G)
              : null,
            re = se(),
            M = Ot({
              transport: o,
              platform: c,
              onSuccess: a,
              refreshInfo: g,
              onDeviceDetails: le,
              onGetMachineAuth: J,
              defaultAccountName: I,
              secureComputer: A,
              isProbablySharedPC: F,
              onShowAgreement: W,
            }),
            Y = He(),
            R = (0, _.useId)();
          if (d != null && d != y.R)
            return (0, n.jsx)("div", {
              className: p().Login,
              children: (0, n.jsx)(u, {
                reset: () => window.location.reload(),
                failure: x.eF.Generic,
                errorReference: d.toString(),
                extendedErrorMessage: M.password.strExtendedErrorMessage,
              }),
            });
          const E = !(0, b.Y2)();
          if (!M.bInPasswordFlow) {
            const G = (0, n.jsxs)("div", {
              className: (0, V.A)(p().SideBySide, Y && p().Embedded),
              children: [
                (0, n.jsx)(lt, {
                  strAccountName: M.strAccountName,
                  onAccountNameChange: M.onAccountNameChange,
                  strPassword: M.strPassword,
                  onPasswordChange: M.onPasswordChange,
                  bRememberMe: M.bRememberMe,
                  onRememberMeChange: M.onRememberMeChange,
                  onSubmit: M.onPasswordSubmit,
                  status: M.password.eStatus,
                  autoFocus: m,
                  secureComputer: A,
                  refreshInfo: r.refreshInfo,
                }),
                E &&
                  (0, n.jsx)(ps, {
                    transport: o,
                    onQRStatusChange: M.onQRStatusChange,
                    onComplete: M.onComplete,
                    platform: c,
                    refreshInfo: g,
                  }),
              ],
            });
            if (Y) {
              const xe = b.TS.IN_STEAMUI,
                ge = xe ? b.TS.LAUNCHER_TYPE : void 0;
              return (0, n.jsxs)(me, {
                className: (0, V.A)(p().EmbeddedRoot, xe && p().InClient),
                children: [
                  !xe && !1,
                  !r.refreshInfo &&
                    (0, n.jsx)(Rs, {
                      realm: b.TS.EREALM,
                      launcherType: ge,
                      className: p().HeaderLogo,
                      onBack: r.onBack,
                    }),
                  (0, n.jsx)(Tt, { refreshInfo: g }),
                  G,
                  (0, n.jsxs)("div", {
                    className: (0, V.A)(
                      p().EmbeddedRootFooter,
                      xe && p().InClient,
                    ),
                    children: [
                      (0, n.jsx)(cs, { variant: r.helpLinkVariant }),
                      (0, n.jsx)(hs, {
                        launcherType: ge,
                        variant: T,
                        redirectUrl: O,
                      }),
                    ],
                  }),
                ],
              });
            }
            const pe = (0, n.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, n.jsx)("h2", {
                  className: p().PrimaryHeader,
                  id: R,
                  children: r.refreshInfo
                    ? (0, C.we)("#Login_RefreshSignIn")
                    : (0, C.we)("#Login_SignInTitle"),
                }),
                (0, n.jsx)(Tt, { refreshInfo: r.refreshInfo }),
              ],
            });
            return (0, n.jsxs)(Fe, {
              title: pe,
              titleId: R,
              children: [re && (0, n.jsx)(fs, {}), G],
            });
          }
          const k = M.password.eStatus;
          switch (k) {
            case Qe:
              return r.renderLoading
                ? (0, n.jsx)(n.Fragment, { children: r.renderLoading() })
                : (0, n.jsx)(t, {});
            case ue:
            case Me:
            case te:
            case Ee: {
              (0, L.wT)(
                !!M.password.strAccountName,
                "Missing account name in login session for status",
                k,
              );
              const G = k === ue || k === Me;
              return (0, n.jsx)(S, {
                type: G ? "mobile" : "email",
                onSubmitCode: M.password.addCode,
                status: k,
                associatedLabel: M.password.strConfirmationAssociatedMessage,
                accountName: M.password.strAccountName,
                onBack: M.password.goBack,
                onCodeHelp: r.onCodeHelp,
              });
            }
            case Le:
            case Te: {
              (0, L.wT)(
                !!M.password.strAccountName,
                "Missing account name in login session for status",
                k,
              );
              const G = k === Le;
              return (0, n.jsx)(we, {
                type: G ? "mobile" : "email",
                accountName: M.password.strAccountName,
                onUseCodeOverride: M.password.useCodeOverride,
                onCodeHelp: r.onCodeHelp,
              });
            }
            case ft:
              return (0, n.jsx)(h, { reset: M.password.reset });
            case nt:
              return (0, n.jsx)(u, {
                reset: M.password.reset,
                failure: M.password.eFailureState,
                onRequestOffline: M.onTryOffline,
                errorReference: M.password.strErrorReference,
                extendedErrorMessage: M.password.strExtendedErrorMessage,
              });
            case dt:
              return (0, n.jsx)(Fe, { compact: !0, children: l() });
            default:
              return (
                (0, B.ZI)(`Unknown Phase: ${k}`),
                (0, n.jsx)(u, {
                  reset: M.password.reset,
                  failure: x.eF.Generic,
                  onRequestOffline: M.onTryOffline,
                  errorReference: M.password.strErrorReference,
                  extendedErrorMessage: M.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function Tt(r) {
          if (!r.refreshInfo) return null;
          let o;
          switch (r.refreshInfo?.reason ?? y.zi) {
            case y.zi:
            case y.Vr:
            default:
              o = "#Login_RefreshReason_Generic";
              break;
            case y.KH:
              o = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case y.CF:
              o = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case y.Um:
              o = "#Login_RefreshReason_InvalidPassword";
              break;
            case y.fY:
              o = "#Login_RefreshReason_Revoked";
              break;
            case y.ob:
              o = "#Login_RefreshReason_Expired";
              break;
            case y.cr:
              o = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case y.uN:
              o = "#Login_RefreshReason_AccountDisabled";
              break;
            case y.sG:
              o = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case y.h_:
              o = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, n.jsxs)("div", {
            className: p().RefreshReasonContainer,
            children: [
              (0, n.jsx)("div", {
                className: p().RefreshTitle,
                children: (0, C.we)("#Login_RefreshSignIn"),
              }),
              (0, n.jsx)("div", {
                className: p().RefreshReason,
                children: (0, C.we)(o),
              }),
            ],
          });
        }
        function fs() {
          return (0, n.jsx)("div", {
            className: p().ConfirmCredntialsNag,
            children: (0, C.we)("#Login_ConfirmCredentials"),
          });
        }
        function lt(r) {
          const {
              onSubmit: o,
              status: a,
              autoFocus: c,
              refreshInfo: m,
              strAccountName: g,
              onAccountNameChange: l,
              strPassword: d,
              onPasswordChange: T,
              bRememberMe: I,
              onRememberMeChange: A,
              secureComputer: F = !0,
            } = r,
            [W, O] = (0, _.useState)(!1),
            le = He(),
            J = Fs(),
            re = () => {
              o().then(() => {
                J() && O(!1);
              });
            },
            M = a === et || a === Qe,
            Y = a === Ze && !W,
            R = Y
              ? (0, n.jsx)(e, {
                  children: (0, C.we)("#Login_CheckCredentials"),
                })
              : (0, n.jsx)(e, { children: "\xA0" }),
            E = c && !g,
            k = c && !!g,
            G = !!r.refreshInfo,
            pe = (0, _.useId)(),
            xe = (0, _.useId)();
          return (0, n.jsxs)(Ms, {
            onSubmit: re,
            className: p().LoginForm,
            children: [
              (0, n.jsx)(vs, {
                tone: Y ? "danger" : void 0,
                label: (0, n.jsx)(ze, {
                  highlight: !0,
                  inputId: pe,
                  children: (0, C.we)("#Login_SignIn_WithAccountName"),
                }),
                value: g,
                onChange: (ge) => {
                  O(!0), l(ge);
                },
                autoFocus: E,
                disabled: G,
                id: pe,
              }),
              (0, n.jsx)(vs, {
                tone: Y ? "danger" : void 0,
                label: (0, n.jsx)(ze, {
                  inputId: xe,
                  children: (0, C.we)("#Login_Password"),
                }),
                value: d,
                onChange: (ge) => {
                  O(!0), T(ge);
                },
                type: "password",
                autoFocus: k,
                id: xe,
              }),
              F
                ? (0, n.jsx)($e.he, {
                    toolTipContent: (0, C.we)("#Login_RememberMe_Tooltip"),
                    direction: "bottom",
                    children: (0, n.jsx)(ct, {
                      label: (0, C.we)("#Login_RememberMe_Short"),
                      value: I,
                      onChange: A,
                    }),
                  })
                : (0, n.jsx)("div", {
                    className: p().InsecureComputer,
                    children: (0, C.we)("#Login_InsecureComputer"),
                  }),
              (0, n.jsx)(ws, { loading: M, refreshLogin: G }),
              R,
              !le &&
                (0, n.jsx)(oe, {
                  href: `${b.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, C.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const ms = 700;
        function ps(r) {
          const o = (0, Ge.R7)(),
            a = () => o.ownerWindow.screen.width < ms,
            [c, m] = (0, _.useState)(a());
          return (
            (0, j.l6)(o.ownerWindow, "resize", () => {
              m(a());
            }),
            (0, n.jsx)("div", {
              className: p().QRSection,
              children: c ? (0, n.jsx)(Lt, { ...r }) : (0, n.jsx)(Cs, { ...r }),
            })
          );
        }
        function gs(r) {
          const o =
            b.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(r.redirectURL);
          return (0, n.jsx)("div", {
            className: p().GuestLayout,
            children: (0, n.jsx)(Fe, {
              compact: !0,
              children: (0, n.jsxs)("div", {
                className: p().GuestContainer,
                children: [
                  (0, n.jsx)("div", {
                    className: p().GuestText,
                    children: (0, C.oW)(
                      "#Login_Guest",
                      (0, n.jsx)("a", {
                        href: `${o}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, n.jsx)("a", {
                    className: p().GuestLink,
                    href: `${o}`,
                    children: (0, n.jsx)("button", {
                      className: p().GuestButton,
                      children: (0, C.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function Cs(r) {
          return (0, n.jsx)(Ve, { ...r });
        }
        function Lt(r) {
          const [o, a] = (0, _.useState)(!1);
          return o
            ? (0, n.jsx)(Ve, { ...r, bShowHideButton: !0, setShowQR: a })
            : (0, n.jsx)(Ss, { setShowQR: a });
        }
        function Ss(r) {
          return (0, n.jsxs)("div", {
            className: p().MessagingContainer,
            children: [
              (0, n.jsx)("div", {
                className: p().MessagingTag,
                children: (0, C.we)("#Login_MobileFlow_New"),
              }),
              (0, n.jsx)("div", {
                className: p().MessagingSubtitle,
                children: (0, n.jsx)("div", {
                  className: p().MessagingSubtitle,
                  children: (0, C.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, n.jsx)("button", {
                type: "button",
                className: p().MessagingButton,
                onClick: () => r.setShowQR(!0),
                children: (0, C.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, n.jsx)("a", {
                href: `${b.TS.STORE_BASE_URL}mobile`,
                className: p().MessagingLink,
                children: (0, C.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function Ve(r) {
          const {
            onQRStatusChange: o,
            transport: a,
            onComplete: c,
            platform: m,
            refreshInfo: g,
            bShowHideButton: l = !1,
            setShowQR: d,
          } = r;
          return (0, n.jsxs)("div", {
            className: p().QRCodeContainer,
            children: [
              (0, n.jsx)(ze, {
                highlight: !0,
                children: (0, C.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, n.jsx)("div", {
                className: p().QR,
                children: (0, n.jsx)(es, {
                  onStatusChange: o,
                  transport: a,
                  onComplete: c,
                  platform: m,
                  refreshInfo: g,
                }),
              }),
              l &&
                d &&
                (0, n.jsx)("button", {
                  type: "button",
                  className: p().QRHideLink,
                  onClick: () => d(!1),
                  children: (0, C.we)("#Button_Hide"),
                }),
              (0, n.jsx)("div", {
                className: p().UseMobileAppForQR,
                children: (0, C.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, n.jsx)(oe, {
                    href: `${b.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function Es() {
          const r = "bShowLoginQR",
            [o, a] = useState(localStorage?.getItem(r) === "1"),
            c = useCallback((m) => {
              a(m),
                m ? localStorage?.setItem(r, "1") : localStorage?.removeItem(r);
            }, []);
          return [o, c];
        }
        function vs(r) {
          const { label: o, error: a, tone: c, autoFocus: m, id: g, ...l } = r,
            d = c ?? (a ? "danger" : void 0);
          return (0, n.jsxs)("div", {
            className: p().TextField,
            children: [
              typeof o == "string"
                ? (0, n.jsx)(ze, { inputId: g, children: o })
                : o,
              a && (0, n.jsx)(Ke, { type: "error", children: a }),
              (0, n.jsx)(_s, { autoFocus: m, tone: d, id: g, ...l }),
            ],
          });
        }
        function ze(r) {
          const { children: o, inputId: a, highlight: c } = r;
          return (0, n.jsx)("label", {
            className: (0, V.A)(p().FieldLabel, c && p().Highlight),
            htmlFor: a,
            children: o,
          });
        }
        function _s(r) {
          const {
            value: o,
            onChange: a,
            type: c = "text",
            tone: m,
            className: g,
            autoFocus: l,
            disabled: d,
            id: T,
          } = r;
          return (0, n.jsx)("input", {
            value: o,
            type: c,
            autoFocus: l,
            onChange: (I) => a(I.target.value),
            className: (0, V.A)(p().TextInput, m === "danger" && p().Danger, g),
            disabled: d,
            id: T,
          });
        }
        function Ke(r) {
          const { children: o, type: a } = r;
          return (0, n.jsx)("div", {
            className: (0, V.A)(p().FieldHint, a === "error" && p().Error),
            children: o,
          });
        }
        function ct(r) {
          const { label: o, onChange: a, value: c } = r;
          let m = () => {
            a && a(!c);
          };
          const g = (0, _.useId)();
          return (0, n.jsxs)("div", {
            role: "presentation",
            className: p().CheckboxField,
            onClick: m,
            onKeyPress: (l) => {
              l.key == " " && (m(), l.preventDefault());
            },
            children: [
              (0, n.jsx)(bs, { labelledBy: g, value: c }),
              (0, n.jsx)("label", {
                id: g,
                className: p().CheckboxFieldLabel,
                children: o,
              }),
            ],
          });
        }
        function bs(r) {
          const { value: o, labelledBy: a } = r;
          return (0, n.jsx)("div", {
            tabIndex: 0,
            className: p().Checkbox,
            "aria-labelledby": a,
            role: "checkbox",
            "aria-checked": o,
            children:
              o &&
              (0, n.jsx)("div", {
                className: p().Check,
                children: (0, n.jsx)(Q.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function ws(r) {
          const { refreshLogin: o, ...a } = r;
          return o &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, n.jsx)(Et, {})
            : (0, n.jsx)(xs, { ...a });
        }
        function xs(r) {
          return (0, n.jsx)("div", {
            className: p().SignInButtonContainer,
            children: (0, n.jsx)(ys, {
              ...r,
              children: (0, C.we)("#Login_SignIn"),
            }),
          });
        }
        function Et() {
          const r = () => SteamClient.User.StartShutdown(!0);
          return (0, n.jsxs)("div", {
            className: p().RefreshButtonContainer,
            children: [
              (0, n.jsx)("button", {
                className: p().SubmitButton,
                type: "submit",
                children: (0, C.we)("#Login_SignIn"),
              }),
              (0, n.jsx)("button", {
                className: p().RefreshQuitButton,
                onClick: r,
                children: (0, C.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function ys(r) {
          return (0, n.jsx)(Mt, { type: "submit", ...r });
        }
        function Mt(r) {
          const {
              className: o,
              loading: a,
              disabled: c,
              children: m,
              ...g
            } = r,
            l = c || a;
          return (0, n.jsxs)("button", {
            className: (0, V.A)(p().SubmitButton, a && p().Loading, o),
            disabled: l,
            ...g,
            children: [
              m,
              a &&
                (0, n.jsx)("div", {
                  className: p().LoadingContainer,
                  children: (0, n.jsx)(s, { size: "small" }),
                }),
            ],
          });
        }
        function e(r) {
          const o = r.children || "\xA0";
          return (0, n.jsx)("div", { className: p().FormError, children: o });
        }
        function t() {
          return (0, n.jsx)(Fe, {
            compact: !0,
            children: (0, n.jsxs)(me, {
              alignItems: "center",
              className: (0, V.A)(
                p().WaitingForTokenContainer,
                b.TS.IN_STEAMUI && p().Client,
              ),
              children: [
                (0, n.jsx)(Oe.t, { size: "xlarge" }),
                (0, n.jsx)("div", {
                  className: (0, V.A)(p().Description),
                  children: (0, C.we)(
                    b.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function s(r) {
          const { size: o } = r;
          return (0, n.jsx)("div", {
            className: (0, V.A)(
              p().LoadingSpinner,
              o == "small" && p().Small,
              (o == "medium" || !o) && p().Medium,
              o == "large" && p().Large,
            ),
          });
        }
        function i(r) {
          return (0, n.jsx)("div", {
            className: p().OfferOffline,
            children: (0, n.jsx)("button", {
              className: p().OfferOfflineButton,
              onClick: r.onRequestOffline,
              children: (0, C.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function u(r) {
          const {
              reset: o,
              failure: a,
              onRequestOffline: c,
              errorReference: m,
              extendedErrorMessage: g,
            } = r,
            { title: l, description: d } = Zt(a, g),
            T = b.TS.IN_STEAMUI && a == x.eF.Network;
          return (0, n.jsxs)(Fe, {
            compact: !0,
            children: [
              (0, n.jsxs)(me, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, n.jsx)("div", {
                    className: p().FailureTitle,
                    children: l,
                  }),
                  (0, n.jsx)("div", {
                    className: p().FailureDescription,
                    children: d,
                  }),
                  T &&
                    (0, n.jsx)("div", {
                      className: p().FailureDescription,
                      children: (0, C.we)("#Login_GoOffline_Description"),
                    }),
                  (0, n.jsxs)(At, {
                    className: p().FailureButtons,
                    children: [
                      (0, n.jsx)(Mt, {
                        className: p().TryAgainButton,
                        onClick: o,
                        children: (0, C.we)("#Button_Retry"),
                      }),
                      T && c && (0, n.jsx)(i, { onRequestOffline: c }),
                    ],
                  }),
                ],
              }),
              m &&
                (0, n.jsx)("div", {
                  className: p().MutedErrorReference,
                  children: (0, C.we)("#Login_Error_Reference", m),
                }),
            ],
          });
        }
        function h(r) {
          const { reset: o } = r;
          return (0, n.jsx)(u, { reset: o, failure: x.eF.Generic });
        }
        function S(r) {
          const {
              type: o,
              onSubmitCode: a,
              status: c,
              accountName: m,
              associatedLabel: g,
              onBack: l,
            } = r,
            [d, T] = (0, _.useState)([]),
            [I, A] = (0, _.useState)(!1),
            [F, W] = (0, _.useState)(!1),
            [O, le] = (0, _.useState)(!1),
            [J, re] = (0, _.useState)(0),
            M = o === "mobile",
            Y = d.join(""),
            R = gt(Y, O),
            E = (It) => {
              W(!0),
                a(It).then(() => {
                  A(!1), W(!1);
                });
            },
            k = (It) => {
              I || A(!0), T(It);
              const As = It.join("");
              gt(As, O) && E(As);
            },
            G = () => {
              R && E(Y);
            },
            pe = () => {
              le(!O), T([]), a(""), re(J + 1);
            },
            xe = !I && (c === Me || c === Ee);
          let ge, jt;
          return (
            O
              ? o === "mobile"
                ? ((jt = (0, n.jsx)(D, {})), (ge = "#Login_UseMobileCode"))
                : ((jt = (0, n.jsx)(D, {})), (ge = "#Login_UseEmailCode"))
              : ((jt =
                  o === "mobile"
                    ? (0, n.jsx)(H, {})
                    : (0, n.jsx)(Z, { emailAddress: g })),
                (ge = "#Login_UseBackupCode")),
            (0, n.jsx)(Fe, {
              title: (0, n.jsx)(Rs, {}),
              compact: !0,
              children: (0, n.jsx)(Ms, {
                onSubmit: G,
                children: (0, n.jsxs)(me, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, n.jsx)(ne, { type: o, accountName: m }),
                    (0, n.jsxs)("div", {
                      className: p().ConfirmationEntryContainer,
                      children: [
                        (0, n.jsxs)(me, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            xe &&
                              (0, n.jsx)(e, {
                                children: (0, C.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, n.jsx)(
                              js,
                              {
                                value: d,
                                onChange: k,
                                tone: xe ? "danger" : void 0,
                                loading: F,
                                backupCode: O,
                              },
                              J,
                            ),
                          ],
                        }),
                        jt,
                      ],
                    }),
                    M &&
                      (0, n.jsx)(oe, {
                        onClick: pe,
                        align: "center",
                        children: (0, C.we)(ge),
                      }),
                    (0, n.jsx)(v, { type: o, onCodeHelp: r.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function v(r) {
          if ((0, Se.q)()) return null;
          let o, a;
          return (
            r.type === "mobile"
              ? ((o = `${b.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (a = (0, C.we)("#Login_Help_AccessMobileApp")))
              : ((o = `${b.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (a = (0, C.we)("#Login_Help_AccessEmail"))),
            r.onCodeHelp
              ? (0, n.jsx)(oe, {
                  onClick: () => r.onCodeHelp(o),
                  align: "center",
                  children: a,
                })
              : (0, n.jsx)(oe, { href: o, align: "center", children: a })
          );
        }
        function D() {
          return (0, n.jsx)(At, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterBackupCodeContainer,
            children: (0, n.jsxs)(me, {
              children: [
                (0, n.jsx)("div", {
                  className: p().EnterCodeFromMobile,
                  children: (0, C.we)("#Login_EnterBackupCode"),
                }),
                (0, n.jsx)("div", {
                  className: p().Label,
                  children: (0, C.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function H() {
          return (0, n.jsxs)(At, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterCodeFromMobileContainer,
            children: [
              (0, n.jsx)("div", {
                className: p().EnterCodeFromMobile,
                children: (0, C.we)("#Login_EnterMobileCode"),
              }),
              (0, n.jsx)(Je, { className: p().AwaitingMobileConfIcon }),
            ],
          });
        }
        function Z(r) {
          return (0, n.jsxs)(At, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterCodeFromEmailContainer,
            children: [
              (0, n.jsx)(Is, {
                align: "center",
                spacing: 6,
                children: (0, n.jsx)("div", {
                  className: p().EnterCodeFromEmail,
                  children: (0, C.PP)(
                    "#Login_EnterEmailCode",
                    (0, n.jsx)("span", {
                      className: p().EnterCodeEmailAddress,
                      children: r.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, n.jsx)(he, { className: p().AwaitingEmailConfIcon }),
            ],
          });
        }
        function ne(r) {
          const { accountName: o, type: a } = r,
            c =
              a === "mobile"
                ? (0, C.we)("#Login_MobileProtectingAccount")
                : (0, C.we)("#Login_EmailProtectingAccount"),
            m = He();
          return (0, n.jsxs)("div", {
            className: p().ProtectingAccount,
            children: [
              (0, n.jsx)("div", {
                className: p().Label,
                children: (0, C.PP)(
                  "#Login_ActiveAccountName",
                  (0, n.jsx)("span", {
                    className: p().AccountName,
                    children: o,
                  }),
                ),
              }),
              !m &&
                (0, n.jsx)("div", { className: p().Description, children: c }),
            ],
          });
        }
        function fe() {
          return (0, n.jsx)(me, {
            alignItems: "center",
            children: (0, n.jsxs)("div", {
              className: p().ConfirmationContainer,
              children: [
                (0, n.jsx)("img", { src: (0, rs.YJ)(qe), alt: "" }),
                (0, n.jsx)("div", {
                  className: p().AwaitingMobileConfText,
                  children: (0, C.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function Je(r) {
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
        function he(r) {
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
        function de(r) {
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
        function ut(r) {
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
        function we(r) {
          const { type: o, accountName: a, onUseCodeOverride: c } = r,
            m = He(),
            g = (0, n.jsx)(v, { type: "mobile", onCodeHelp: r.onCodeHelp }),
            l = m
              ? (0, n.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, n.jsx)(oe, {
                    align: "center",
                    onClick: c,
                    children: (0, C.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, n.jsx)("div", {
                  className: p().EnterCodeInsteadLink,
                  children: (0, n.jsx)(oe, {
                    align: "center",
                    onClick: c,
                    children: (0, C.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, n.jsx)(Fe, {
            title: (0, n.jsx)(Rs, {}),
            compact: !0,
            children: (0, n.jsxs)(me, {
              gap: b.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, n.jsx)(ne, { type: o, accountName: a }),
                (0, n.jsx)(fe, {}),
                (0, n.jsxs)("div", {
                  className: p().LinkContainer,
                  children: [l, g],
                }),
              ],
            }),
          });
        }
        function oe(r) {
          const { children: o, align: a, inline: c } = r,
            m = (0, V.A)(p().TextLink, a === "center" && p().TextAlignCenter);
          if ("href" in r) {
            const g = b.TS.IN_STEAMUI
              ? `steam://openurl_external/${r.href}`
              : r.href;
            return (0, n.jsx)("a", { className: m, href: g, children: o });
          } else {
            const g = c ? "span" : "div";
            return (0, n.jsx)(g, {
              className: m,
              onClick: r.onClick,
              children: o,
            });
          }
        }
        function Ms(r) {
          const { onSubmit: o, children: a, className: c } = r,
            m = (g) => (g.preventDefault(), o(), !1);
          return (0, n.jsx)("form", { onSubmit: m, className: c, children: a });
        }
        function Ps(r) {
          const { align: o, ...a } = r;
          return jsx("div", {
            className: classnames(styles.Text, o === "center" && styles.Center),
            ...a,
          });
        }
        function me(r) {
          const {
              alignItems: o,
              justifyContent: a,
              gap: c,
              className: m,
              ariaLabelledBy: g,
              children: l,
            } = r,
            d = (0, V.A)(
              p().FlexCol,
              o === "center" && p().AlignItemsCenter,
              a === "center" && p().JustifyContentCenter,
              m,
            ),
            T = c ? { gap: typeof c == "number" ? `${c}px` : c } : void 0;
          return (0, n.jsx)("section", {
            className: d,
            style: T,
            "aria-labelledby": g,
            children: l,
          });
        }
        function At(r) {
          const {
              children: o,
              justifyContent: a,
              alignItems: c,
              className: m,
            } = r,
            g = {
              display: "flex",
              flexDirection: "row",
              justifyContent: a,
              alignItems: c,
            };
          return (0, n.jsx)("div", { style: g, className: m, children: o });
        }
        function js(r) {
          const { onChange: o, backupCode: a = !1, ...c } = r,
            m = (g) => {
              g = g.map((d) => d.toUpperCase());
              const l = g.join("").trim();
              pt(l, a) && o(g);
            };
          return (0, n.jsx)(Ue, {
            length: ot(a),
            backupCode: a,
            onChange: m,
            autoFocus: !0,
            ...c,
            allowCharacter: (g) => /\w/g.test(g),
          });
        }
        function Is(r) {
          const { children: o, spacing: a = 0, align: c } = r;
          return (0, n.jsx)(me, {
            alignItems: c,
            children: _.Children.map(o, (m, g) =>
              m
                ? (0, n.jsx)("div", {
                    style: g > 0 ? { paddingTop: `${a}px` } : void 0,
                    children: m,
                  })
                : null,
            )?.filter(Boolean),
          });
        }
        function Fe(r) {
          const { title: o, titleId: a, children: c, compact: m } = r,
            g = He(),
            l = (0, _.useId)();
          return (0, n.jsxs)(me, {
            gap: b.TS.IN_STEAMUI ? 0 : 32,
            className: (0, V.A)(
              p().StandardLayout,
              g && p().Embedded,
              m && p().Compact,
              b.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: a ?? l,
            children: [
              typeof o == "string"
                ? (0, n.jsx)("div", {
                    className: p().PrimaryHeader,
                    id: a ?? l,
                    children: o,
                  })
                : o,
              (0, n.jsx)("div", { className: p().FormContainer, children: c }),
            ],
          });
        }
        function Rs(r) {
          const {
            realm: o = b.TS.EREALM,
            launcherType: a = b.TS.IN_STEAMUI ? b.TS.LAUNCHER_TYPE : void 0,
            className: c = p().HeaderLogo,
          } = r;
          return a === $.A2g
            ? (0, n.jsx)("div", { className: c })
            : (0, n.jsxs)("div", {
                className: p().LogoContainer,
                children: [
                  (0, n.jsx)(ks, { onBack: r.onBack }),
                  o !== ke.TU.k_ESteamRealmChina
                    ? (0, n.jsx)(Ds, { className: c })
                    : (0, n.jsx)(Ns, { className: c }),
                  " ",
                ],
              });
        }
        function ks(r) {
          return r.onBack
            ? (0, n.jsx)("button", {
                type: "button",
                className: p().BackArrowContainer,
                onClick: r.onBack,
                "aria-label": (0, C.we)("#Button_Back"),
                children: (0, n.jsx)(Q.Q38, { className: p().BackArrow }),
              })
            : null;
        }
        function Ds(r) {
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
        function Ns(r) {
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
        function Bs() {
          return (0, n.jsx)(me, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, n.jsx)(Oe.t, {}),
          });
        }
        function Hs(r) {
          const o = (0, _.useRef)(r);
          o.current = r;
          const [a, c] = (0, _.useState)(!0),
            m = (0, Pe.zy)();
          return (
            (0, _.useEffect)(() => {
              if (new URLSearchParams(m.search).get("need_password")) {
                c(!1);
                return;
              }
              if (!o.current) {
                c(!1);
                return;
              }
              Vs(o.current)
                .then((l) => {
                  c(l);
                })
                .catch((l) => {
                  (0, B.tH)("PerformRefresh exception", l), c(!1);
                });
            }, [o, m.search]),
            a
          );
        }
        async function Vs(r) {
          const o = new FormData();
          o.append("redir", r);
          const a = `${b.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            c = await f().post(a, o, { timeout: 1e4, withCredentials: !0 });
          if (c.status !== 200 || !c?.data?.success) return !1;
          const { success: m, login_url: g, error: l, ...d } = c.data,
            T = new FormData();
          Object.entries(d).forEach(([F, W]) => T.append(F, W));
          const I = await f().post(g, T),
            A = I.status === 200 && I.data.result === y.R;
          return A && window.location.assign(r), A;
        }
        function Fs() {
          const r = (0, _.useRef)(!0);
          return (
            (0, _.useEffect)(
              () => () => {
                r.current = !1;
              },
              [r],
            ),
            (0, _.useCallback)(() => r.current, [r])
          );
        }
      },
      78412: (Ce) => {
        Ce.exports = {
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
      15557: (Ce) => {
        Ce.exports = {
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
      5804: (Ce) => {
        Ce.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      32224: (Ce) => {
        Ce.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
    },
  ]);
})();
