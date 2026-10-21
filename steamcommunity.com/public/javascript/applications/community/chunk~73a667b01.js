/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [40253],
    {
      87242: (ue, Ue, h) => {
        "use strict";
        h.d(Ue, {
          FU: () => ve,
          eF: () => Ke,
          gf: () => oe,
          wI: () => le,
          yp: () => Ae,
        });
        var d = h(14947),
          _r = h(41735),
          y = h.n(_r),
          g = h(35038),
          e = h(71742),
          L = h(27066),
          P = h(72604),
          he = h(99412),
          Je = h(94354),
          Ie = h(3166),
          Oe = h(94276),
          je = h(71944),
          Cr = h(30178),
          re = Object.defineProperty,
          Ve = Object.getOwnPropertyDescriptor,
          Sr = (D, x, _, I) => {
            for (
              var W = I > 1 ? void 0 : I ? Ve(x, _) : x, Jr = D.length - 1, Tr;
              Jr >= 0;
              Jr--
            )
              (Tr = D[Jr]) && (W = (I ? Tr(x, _, W) : Tr(W)) || W);
            return I && W && re(x, _, W), W;
          },
          Ke = ((D) => (
            (D[(D.None = 0)] = "None"),
            (D[(D.Generic = 1)] = "Generic"),
            (D[(D.Expired = 2)] = "Expired"),
            (D[(D.Network = 3)] = "Network"),
            (D[(D.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (D[(D.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (D[(D.AnonymousLogin = 6)] = "AnonymousLogin"),
            D
          ))(Ke || {});
        function ve(D) {
          const {
            shared_secret: x,
            identity_secret: _,
            secret_1: I,
            status: W,
            uri: Jr,
            server_time: Tr,
            ...Kr
          } = D;
          return {
            shared_secret: je.fromByteArray(x),
            identity_secret: je.fromByteArray(_),
            secret_1: je.fromByteArray(I),
            ...Kr,
          };
        }
        var le = ((D) => (
          (D[(D.k_Success = 0)] = "k_Success"),
          (D[(D.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (D[(D.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          D
        ))(le || {});
        class oe {
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
          constructor(x, _, I, W) {
            (0, d.Gn)(this),
              (this.m_transport = x),
              (this.m_onCompleteCallback = _),
              (this.m_onDeviceDetailsCallback = I),
              (this.m_onShowAgreement = W);
          }
          StartPolling(x = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              x
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
              const x = g.w.Init(Oe.Ev);
              x.SetEMsg(Je.Kec),
                x.Body().set_client_id(this.m_strClientID),
                x.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  x.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const _ = await Oe.kX.PollAuthSessionStatus(this.m_transport, x),
                I = _.GetEResult();
              if (I !== P.R) {
                if (I === P.zi) {
                  const me = _.Hdr().transport_error();
                  if (
                    ((0, Cr.ZI)(
                      `Failed to poll auth session. Result ${I}. Transport Error: ${me}`,
                    ),
                    me === he.MhR || me === he.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), P.R
                    );
                }
                if (I === P.Qo || I === P.ob) this.m_eFailureState = 2;
                else if (I === P.h_) this.m_eFailureState = 5;
                else if (I == P.oH) {
                  const me = _.Body().agreement_session_url();
                  if (
                    ((0, e.wT)(
                      !!me,
                      "Missing agreement session URL for result",
                      I,
                    ),
                    this.m_onShowAgreement)
                  )
                    this.m_onShowAgreement(me);
                  else {
                    const qe = document.location.href;
                    window.location.href = `${me}&redir=${encodeURIComponent(qe)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), I;
                } else
                  (0, Cr.ZI)(`Failed to poll auth session. Result: ${I}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), I;
              }
              const {
                new_challenge_url: W,
                new_client_id: Jr,
                refresh_token: Tr,
                access_token: Kr,
                account_name: Le,
                had_remote_interaction: wr,
                new_guard_data: cr,
              } = _.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!wr),
                Tr
                  ? ((0, e.wT)(
                      !!Kr && !!Le,
                      "Missing access token or account name with refresh token",
                    ),
                    this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: Tr,
                      strAccessToken: Kr,
                      strAccountName: Le,
                      strNewGuardData: cr,
                    }),
                    I)
                  : (W && (this.m_strChallengeURL = W),
                    Jr && (this.m_strClientID = Jr),
                    this.StartPolling(!1),
                    I)
              );
            } catch (x) {
              return (
                (0, Cr.ZI)(`Failed to poll auth session. ${x}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                P.zi
              );
            }
          }
          SetTokenToRevoke(x) {
            this.m_strTokenToRevoke = x;
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
            const x = await this.m_onDeviceDetailsCallback();
            return Oe.tS.fromObject(x);
          }
        }
        Sr([d.sH], oe.prototype, "m_strChallengeURL", 2),
          Sr([d.sH], oe.prototype, "m_bRemoteInteraction", 2),
          Sr([d.sH], oe.prototype, "m_eFailureState", 2),
          Sr([d.sH], oe.prototype, "m_strExtendedErrorMessage", 2),
          Sr([L.o], oe.prototype, "PollForUpdate", 1),
          Sr([L.o], oe.prototype, "SetTokenToRevoke", 1);
        function Ae(D) {
          const x = new FormData();
          x.append("nonce", D), x.append("sessionid", (0, Ie.KC)());
          let _ = new URL(document.location.href);
          const I = new URLSearchParams(_.search);
          I.has("need_password") &&
            (I.delete("need_password"), (_.search = I.toString())),
            x.append("redir", _.toString());
          const W = `${Ie.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return y()
            .post(W, x, { withCredentials: !0 })
            .then(
              (Jr) => {
                const { data: Tr } = Jr;
                if (
                  !Tr ||
                  !Tr.transfer_info ||
                  !Tr.steamID ||
                  !Array.isArray(Tr.transfer_info)
                )
                  return (
                    (0, Cr.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const {
                  transfer_info: Kr,
                  steamID: Le,
                  primary_domain: wr,
                } = Tr;
                return Promise.all(
                  Kr.map(({ url: cr, params: me }) =>
                    Qe(cr, { ...me, steamID: Le }),
                  ),
                ).then(
                  (cr) => He(cr, wr),
                  () => 2,
                );
              },
              () => (
                (0, Cr.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function He(D, x) {
          let _ = 0;
          return (
            D.forEach((I) => {
              I.bSuccess ||
                (x && I.domain.toLowerCase() === x.toLowerCase()
                  ? (_ = 1)
                  : _ == 0 && (_ = 2));
            }),
            _
          );
        }
        async function Qe(D, x) {
          const _ = new URL(D);
          let I = !0;
          try {
            const W = new FormData();
            Object.keys(x).forEach((Tr) => W.append(Tr, x[Tr]));
            const Jr = await y().post(D, W, {
              withCredentials: !0,
              timeout: 1e4,
            });
            Jr.status !== 200
              ? ((0, Cr.ZI)(
                  `Transfer login to ${_.host} failed with status code: ${Jr.status}`,
                ),
                (I = !1))
              : Jr.data.result !== P.R &&
                ((0, Cr.ZI)(
                  `Transfer login to ${_.host} failed with result: ${Jr.data.result}`,
                ),
                (I = !1));
          } catch (W) {
            (0, Cr.ZI)(`Transfer login to ${_.host} failed: "${W}"`), (I = !1);
          }
          return { bSuccess: I, domain: _.host };
        }
      },
      30178: (ue, Ue, h) => {
        "use strict";
        h.d(Ue, { tG: () => jt, ZI: () => zt, tH: () => vt, P8: () => mt });
        var d = h(41735),
          _r,
          y = 0xdeadbeefcafe,
          g = (y & 16777215) == 15715070;
        function e(i, s, n) {
          i != null &&
            (typeof i == "number"
              ? this.fromNumber(i, s, n)
              : s == null && typeof i != "string"
                ? this.fromString(i, 256)
                : this.fromString(i, s));
        }
        function L() {
          return new e(null);
        }
        function P(i, s, n, f, B, M) {
          for (; --M >= 0; ) {
            var S = s * this[i++] + n[f] + B;
            (B = Math.floor(S / 67108864)), (n[f++] = S & 67108863);
          }
          return B;
        }
        function he(i, s, n, f, B, M) {
          for (var S = s & 32767, p = s >> 15; --M >= 0; ) {
            var dr = this[i] & 32767,
              Ir = this[i++] >> 15,
              Gr = p * dr + Ir * S;
            (dr = S * dr + ((Gr & 32767) << 15) + n[f] + (B & 1073741823)),
              (B = (dr >>> 30) + (Gr >>> 15) + p * Ir + (B >>> 30)),
              (n[f++] = dr & 1073741823);
          }
          return B;
        }
        function Je(i, s, n, f, B, M) {
          for (var S = s & 16383, p = s >> 14; --M >= 0; ) {
            var dr = this[i] & 16383,
              Ir = this[i++] >> 14,
              Gr = p * dr + Ir * S;
            (dr = S * dr + ((Gr & 16383) << 14) + n[f] + B),
              (B = (dr >> 28) + (Gr >> 14) + p * Ir),
              (n[f++] = dr & 268435455);
          }
          return B;
        }
        g && navigator.appName == "Microsoft Internet Explorer"
          ? ((e.prototype.am = he), (_r = 30))
          : g && navigator.appName != "Netscape"
            ? ((e.prototype.am = P), (_r = 26))
            : ((e.prototype.am = Je), (_r = 28)),
          (e.prototype.DB = _r),
          (e.prototype.DM = (1 << _r) - 1),
          (e.prototype.DV = 1 << _r);
        var Ie = 52;
        (e.prototype.FV = Math.pow(2, Ie)),
          (e.prototype.F1 = Ie - _r),
          (e.prototype.F2 = 2 * _r - Ie);
        var Oe = "0123456789abcdefghijklmnopqrstuvwxyz",
          je = new Array(),
          Cr,
          re;
        for (Cr = 48, re = 0; re <= 9; ++re) je[Cr++] = re;
        for (Cr = 97, re = 10; re < 36; ++re) je[Cr++] = re;
        for (Cr = 65, re = 10; re < 36; ++re) je[Cr++] = re;
        function Ve(i) {
          return Oe.charAt(i);
        }
        function Sr(i, s) {
          var n = je[i.charCodeAt(s)];
          return n ?? -1;
        }
        function Ke(i) {
          for (var s = this.t - 1; s >= 0; --s) i[s] = this[s];
          (i.t = this.t), (i.s = this.s);
        }
        function ve(i) {
          (this.t = 1),
            (this.s = i < 0 ? -1 : 0),
            i > 0 ? (this[0] = i) : i < -1 ? (this[0] = i + DV) : (this.t = 0);
        }
        function le(i) {
          var s = L();
          return s.fromInt(i), s;
        }
        function oe(i, s) {
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
          for (var f = i.length, B = !1, M = 0; --f >= 0; ) {
            var S = n == 8 ? i[f] & 255 : Sr(i, f);
            if (S < 0) {
              i.charAt(f) == "-" && (B = !0);
              continue;
            }
            (B = !1),
              M == 0
                ? (this[this.t++] = S)
                : M + n > this.DB
                  ? ((this[this.t - 1] |=
                      (S & ((1 << (this.DB - M)) - 1)) << M),
                    (this[this.t++] = S >> (this.DB - M)))
                  : (this[this.t - 1] |= S << M),
              (M += n),
              M >= this.DB && (M -= this.DB);
          }
          n == 8 &&
            (i[0] & 128) != 0 &&
            ((this.s = -1),
            M > 0 && (this[this.t - 1] |= ((1 << (this.DB - M)) - 1) << M)),
            this.clamp(),
            B && e.ZERO.subTo(this, this);
        }
        function Ae() {
          for (var i = this.s & this.DM; this.t > 0 && this[this.t - 1] == i; )
            --this.t;
        }
        function He(i) {
          if (this.s < 0) return "-" + this.negate().toString(i);
          var s;
          if (i == 16) s = 4;
          else if (i == 8) s = 3;
          else if (i == 2) s = 1;
          else if (i == 32) s = 5;
          else if (i == 4) s = 2;
          else return this.toRadix(i);
          var n = (1 << s) - 1,
            f,
            B = !1,
            M = "",
            S = this.t,
            p = this.DB - ((S * this.DB) % s);
          if (S-- > 0)
            for (
              p < this.DB && (f = this[S] >> p) > 0 && ((B = !0), (M = Ve(f)));
              S >= 0;
            )
              p < s
                ? ((f = (this[S] & ((1 << p) - 1)) << (s - p)),
                  (f |= this[--S] >> (p += this.DB - s)))
                : ((f = (this[S] >> (p -= s)) & n),
                  p <= 0 && ((p += this.DB), --S)),
                f > 0 && (B = !0),
                B && (M += Ve(f));
          return B ? M : "0";
        }
        function Qe() {
          var i = L();
          return e.ZERO.subTo(this, i), i;
        }
        function D() {
          return this.s < 0 ? this.negate() : this;
        }
        function x(i) {
          var s = this.s - i.s;
          if (s != 0) return s;
          var n = this.t;
          if (((s = n - i.t), s != 0)) return s;
          for (; --n >= 0; ) if ((s = this[n] - i[n]) != 0) return s;
          return 0;
        }
        function _(i) {
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
        function I() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + _(this[this.t - 1] ^ (this.s & this.DM));
        }
        function W(i, s) {
          var n;
          for (n = this.t - 1; n >= 0; --n) s[n + i] = this[n];
          for (n = i - 1; n >= 0; --n) s[n] = 0;
          (s.t = this.t + i), (s.s = this.s);
        }
        function Jr(i, s) {
          for (var n = i; n < this.t; ++n) s[n - i] = this[n];
          (s.t = Math.max(this.t - i, 0)), (s.s = this.s);
        }
        function Tr(i, s) {
          var n = i % this.DB,
            f = this.DB - n,
            B = (1 << f) - 1,
            M = Math.floor(i / this.DB),
            S = (this.s << n) & this.DM,
            p;
          for (p = this.t - 1; p >= 0; --p)
            (s[p + M + 1] = (this[p] >> f) | S), (S = (this[p] & B) << n);
          for (p = M - 1; p >= 0; --p) s[p] = 0;
          (s[M] = S), (s.t = this.t + M + 1), (s.s = this.s), s.clamp();
        }
        function Kr(i, s) {
          s.s = this.s;
          var n = Math.floor(i / this.DB);
          if (n >= this.t) {
            s.t = 0;
            return;
          }
          var f = i % this.DB,
            B = this.DB - f,
            M = (1 << f) - 1;
          s[0] = this[n] >> f;
          for (var S = n + 1; S < this.t; ++S)
            (s[S - n - 1] |= (this[S] & M) << B), (s[S - n] = this[S] >> f);
          f > 0 && (s[this.t - n - 1] |= (this.s & M) << B),
            (s.t = this.t - n),
            s.clamp();
        }
        function Le(i, s) {
          for (var n = 0, f = 0, B = Math.min(i.t, this.t); n < B; )
            (f += this[n] - i[n]), (s[n++] = f & this.DM), (f >>= this.DB);
          if (i.t < this.t) {
            for (f -= i.s; n < this.t; )
              (f += this[n]), (s[n++] = f & this.DM), (f >>= this.DB);
            f += this.s;
          } else {
            for (f += this.s; n < i.t; )
              (f -= i[n]), (s[n++] = f & this.DM), (f >>= this.DB);
            f -= i.s;
          }
          (s.s = f < 0 ? -1 : 0),
            f < -1 ? (s[n++] = this.DV + f) : f > 0 && (s[n++] = f),
            (s.t = n),
            s.clamp();
        }
        function wr(i, s) {
          var n = this.abs(),
            f = i.abs(),
            B = n.t;
          for (s.t = B + f.t; --B >= 0; ) s[B] = 0;
          for (B = 0; B < f.t; ++B) s[B + n.t] = n.am(0, f[B], s, B, 0, n.t);
          (s.s = 0), s.clamp(), this.s != i.s && e.ZERO.subTo(s, s);
        }
        function cr(i) {
          for (var s = this.abs(), n = (i.t = 2 * s.t); --n >= 0; ) i[n] = 0;
          for (n = 0; n < s.t - 1; ++n) {
            var f = s.am(n, s[n], i, 2 * n, 0, 1);
            (i[n + s.t] += s.am(
              n + 1,
              2 * s[n],
              i,
              2 * n + 1,
              f,
              s.t - n - 1,
            )) >= s.DV && ((i[n + s.t] -= s.DV), (i[n + s.t + 1] = 1));
          }
          i.t > 0 && (i[i.t - 1] += s.am(n, s[n], i, 2 * n, 0, 1)),
            (i.s = 0),
            i.clamp();
        }
        function me(i, s, n) {
          var f = i.abs();
          if (!(f.t <= 0)) {
            var B = this.abs();
            if (B.t < f.t) {
              s?.fromInt(0), n != null && this.copyTo(n);
              return;
            }
            n == null && (n = L());
            var M = L(),
              S = this.s,
              p = i.s,
              dr = this.DB - _(f[f.t - 1]);
            dr > 0
              ? (f.lShiftTo(dr, M), B.lShiftTo(dr, n))
              : (f.copyTo(M), B.copyTo(n));
            var Ir = M.t,
              Gr = M[Ir - 1];
            if (Gr != 0) {
              var se =
                  Gr * (1 << this.F1) + (Ir > 1 ? M[Ir - 2] >> this.F2 : 0),
                We = this.FV / se,
                Xe = (1 << this.F1) / se,
                ae = 1 << this.F2,
                ye = n.t,
                Re = ye - Ir,
                Ee = s ?? L();
              for (
                M.dlShiftTo(Re, Ee),
                  n.compareTo(Ee) >= 0 && ((n[n.t++] = 1), n.subTo(Ee, n)),
                  e.ONE.dlShiftTo(Ir, Ee),
                  Ee.subTo(M, M);
                M.t < Ir;
              )
                M[M.t++] = 0;
              for (; --Re >= 0; ) {
                var st =
                  n[--ye] == Gr
                    ? this.DM
                    : Math.floor(n[ye] * We + (n[ye - 1] + ae) * Xe);
                if ((n[ye] += M.am(0, st, n, Re, 0, Ir)) < st)
                  for (M.dlShiftTo(Re, Ee), n.subTo(Ee, n); n[ye] < --st; )
                    n.subTo(Ee, n);
              }
              s != null && (n.drShiftTo(Ir, s), S != p && e.ZERO.subTo(s, s)),
                (n.t = Ir),
                n.clamp(),
                dr > 0 && n.rShiftTo(dr, n),
                S < 0 && e.ZERO.subTo(n, n);
            }
          }
        }
        function qe(i) {
          var s = L();
          return (
            this.abs().divRemTo(i, null, s),
            this.s < 0 && s.compareTo(e.ZERO) > 0 && i.subTo(s, s),
            s
          );
        }
        function A(i) {
          this.m = i;
        }
        function N(i) {
          return i.s < 0 || i.compareTo(this.m) >= 0 ? i.mod(this.m) : i;
        }
        function m(i) {
          return i;
        }
        function gt(i) {
          i.divRemTo(this.m, null, i);
        }
        function bt(i, s, n) {
          i.multiplyTo(s, n), this.reduce(n);
        }
        function $r(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        (A.prototype.convert = N),
          (A.prototype.revert = m),
          (A.prototype.reduce = gt),
          (A.prototype.mulTo = bt),
          (A.prototype.sqrTo = $r);
        function Yr() {
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
        function yr(i) {
          (this.m = i),
            (this.mp = i.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (i.DB - 15)) - 1),
            (this.mt2 = 2 * i.t);
        }
        function V(i) {
          var s = L();
          return (
            i.abs().dlShiftTo(this.m.t, s),
            s.divRemTo(this.m, null, s),
            i.s < 0 && s.compareTo(e.ZERO) > 0 && this.m.subTo(s, s),
            s
          );
        }
        function X(i) {
          var s = L();
          return i.copyTo(s), this.reduce(s), s;
        }
        function Z(i) {
          for (; i.t <= this.mt2; ) i[i.t++] = 0;
          for (var s = 0; s < this.m.t; ++s) {
            var n = i[s] & 32767,
              f =
                (n * this.mpl +
                  (((n * this.mph + (i[s] >> 15) * this.mpl) & this.um) <<
                    15)) &
                i.DM;
            for (
              n = s + this.m.t, i[n] += this.m.am(0, f, i, s, 0, this.m.t);
              i[n] >= i.DV;
            )
              (i[n] -= i.DV), i[++n]++;
          }
          i.clamp(),
            i.drShiftTo(this.m.t, i),
            i.compareTo(this.m) >= 0 && i.subTo(this.m, i);
        }
        function J(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        function K(i, s, n) {
          i.multiplyTo(s, n), this.reduce(n);
        }
        (yr.prototype.convert = V),
          (yr.prototype.revert = X),
          (yr.prototype.reduce = Z),
          (yr.prototype.mulTo = K),
          (yr.prototype.sqrTo = J);
        function T() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function $(i, s) {
          if (i > 4294967295 || i < 1) return e.ONE;
          var n = L(),
            f = L(),
            B = s.convert(this),
            M = _(i) - 1;
          for (B.copyTo(n); --M >= 0; )
            if ((s.sqrTo(n, f), (i & (1 << M)) > 0)) s.mulTo(f, B, n);
            else {
              var S = n;
              (n = f), (f = S);
            }
          return s.revert(n);
        }
        function Q(i, s) {
          var n;
          return (
            i < 256 || s.isEven() ? (n = new A(s)) : (n = new yr(s)),
            this.exp(i, n)
          );
        }
        (e.prototype.copyTo = Ke),
          (e.prototype.fromInt = ve),
          (e.prototype.fromString = oe),
          (e.prototype.clamp = Ae),
          (e.prototype.dlShiftTo = W),
          (e.prototype.drShiftTo = Jr),
          (e.prototype.lShiftTo = Tr),
          (e.prototype.rShiftTo = Kr),
          (e.prototype.subTo = Le),
          (e.prototype.multiplyTo = wr),
          (e.prototype.squareTo = cr),
          (e.prototype.divRemTo = me),
          (e.prototype.invDigit = Yr),
          (e.prototype.isEven = T),
          (e.prototype.exp = $),
          (e.prototype.toString = He),
          (e.prototype.negate = Qe),
          (e.prototype.abs = D),
          (e.prototype.compareTo = x),
          (e.prototype.bitLength = I),
          (e.prototype.mod = qe),
          (e.prototype.modPowInt = Q),
          (e.ZERO = le(0)),
          (e.ONE = le(1));
        function nr() {
          var i = L();
          return this.copyTo(i), i;
        }
        function q() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function Y() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function G() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function k(i) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(i));
        }
        function C() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function fr(i) {
          if ((i == null && (i = 10), this.signum() == 0 || i < 2 || i > 36))
            return "0";
          var s = this.chunkSize(i),
            n = Math.pow(i, s),
            f = le(n),
            B = L(),
            M = L(),
            S = "";
          for (this.divRemTo(f, B, M); B.signum() > 0; )
            (S = (n + M.intValue()).toString(i).substr(1) + S),
              B.divRemTo(f, B, M);
          return M.intValue().toString(i) + S;
        }
        function vr(i, s) {
          this.fromInt(0), s == null && (s = 10);
          for (
            var n = this.chunkSize(s),
              f = Math.pow(s, n),
              B = !1,
              M = 0,
              S = 0,
              p = 0;
            p < i.length;
            ++p
          ) {
            var dr = Sr(i, p);
            if (dr < 0) {
              i.charAt(p) == "-" && this.signum() == 0 && (B = !0);
              continue;
            }
            (S = s * S + dr),
              ++M >= n &&
                (this.dMultiply(f), this.dAddOffset(S, 0), (M = 0), (S = 0));
          }
          M > 0 && (this.dMultiply(Math.pow(s, M)), this.dAddOffset(S, 0)),
            B && e.ZERO.subTo(this, this);
        }
        function Be(i, s, n) {
          if (typeof s == "number")
            if (i < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(i, n),
                  this.testBit(i - 1) ||
                    this.bitwiseTo(e.ONE.shiftLeft(i - 1), br, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(s);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > i &&
                    this.subTo(e.ONE.shiftLeft(i - 1), this);
          else {
            var f = new Array(),
              B = i & 7;
            (f.length = (i >> 3) + 1),
              s.nextBytes(f),
              B > 0 ? (f[0] &= (1 << B) - 1) : (f[0] = 0),
              this.fromString(f, 256);
          }
        }
        function Fr() {
          var i = this.t,
            s = new Array();
          s[0] = this.s;
          var n = this.DB - ((i * this.DB) % 8),
            f,
            B = 0;
          if (i-- > 0)
            for (
              n < this.DB &&
              (f = this[i] >> n) != (this.s & this.DM) >> n &&
              (s[B++] = f | (this.s << (this.DB - n)));
              i >= 0;
            )
              n < 8
                ? ((f = (this[i] & ((1 << n) - 1)) << (8 - n)),
                  (f |= this[--i] >> (n += this.DB - 8)))
                : ((f = (this[i] >> (n -= 8)) & 255),
                  n <= 0 && ((n += this.DB), --i)),
                (f & 128) != 0 && (f |= -256),
                B == 0 && (this.s & 128) != (f & 128) && ++B,
                (B > 0 || f != this.s) && (s[B++] = f);
          return s;
        }
        function ar(i) {
          return this.compareTo(i) == 0;
        }
        function Me(i) {
          return this.compareTo(i) < 0 ? this : i;
        }
        function gr(i) {
          return this.compareTo(i) > 0 ? this : i;
        }
        function Or(i, s, n) {
          var f,
            B,
            M = Math.min(i.t, this.t);
          for (f = 0; f < M; ++f) n[f] = s(this[f], i[f]);
          if (i.t < this.t) {
            for (B = i.s & this.DM, f = M; f < this.t; ++f)
              n[f] = s(this[f], B);
            n.t = this.t;
          } else {
            for (B = this.s & this.DM, f = M; f < i.t; ++f) n[f] = s(B, i[f]);
            n.t = i.t;
          }
          (n.s = s(this.s, i.s)), n.clamp();
        }
        function pr(i, s) {
          return i & s;
        }
        function Br(i) {
          var s = L();
          return this.bitwiseTo(i, pr, s), s;
        }
        function br(i, s) {
          return i | s;
        }
        function mr(i) {
          var s = L();
          return this.bitwiseTo(i, br, s), s;
        }
        function or(i, s) {
          return i ^ s;
        }
        function Lr(i) {
          var s = L();
          return this.bitwiseTo(i, or, s), s;
        }
        function zr(i, s) {
          return i & ~s;
        }
        function we(i) {
          var s = L();
          return this.bitwiseTo(i, zr, s), s;
        }
        function Mr() {
          for (var i = L(), s = 0; s < this.t; ++s) i[s] = this.DM & ~this[s];
          return (i.t = this.t), (i.s = ~this.s), i;
        }
        function Rr(i) {
          var s = L();
          return i < 0 ? this.rShiftTo(-i, s) : this.lShiftTo(i, s), s;
        }
        function hr(i) {
          var s = L();
          return i < 0 ? this.lShiftTo(-i, s) : this.rShiftTo(i, s), s;
        }
        function xr(i) {
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
        function Nr() {
          for (var i = 0; i < this.t; ++i)
            if (this[i] != 0) return i * this.DB + xr(this[i]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function Wr(i) {
          for (var s = 0; i != 0; ) (i &= i - 1), ++s;
          return s;
        }
        function Ur() {
          for (var i = 0, s = this.s & this.DM, n = 0; n < this.t; ++n)
            i += Wr(this[n] ^ s);
          return i;
        }
        function sr(i) {
          var s = Math.floor(i / this.DB);
          return s >= this.t
            ? this.s != 0
            : (this[s] & (1 << (i % this.DB))) != 0;
        }
        function Pr(i, s) {
          var n = e.ONE.shiftLeft(i);
          return this.bitwiseTo(n, s, n), n;
        }
        function Xr(i) {
          return this.changeBit(i, br);
        }
        function ge(i) {
          return this.changeBit(i, zr);
        }
        function Dr(i) {
          return this.changeBit(i, or);
        }
        function Zr(i, s) {
          for (var n = 0, f = 0, B = Math.min(i.t, this.t); n < B; )
            (f += this[n] + i[n]), (s[n++] = f & this.DM), (f >>= this.DB);
          if (i.t < this.t) {
            for (f += i.s; n < this.t; )
              (f += this[n]), (s[n++] = f & this.DM), (f >>= this.DB);
            f += this.s;
          } else {
            for (f += this.s; n < i.t; )
              (f += i[n]), (s[n++] = f & this.DM), (f >>= this.DB);
            f += i.s;
          }
          (s.s = f < 0 ? -1 : 0),
            f > 0 ? (s[n++] = f) : f < -1 && (s[n++] = this.DV + f),
            (s.t = n),
            s.clamp();
        }
        function Er(i) {
          var s = L();
          return this.addTo(i, s), s;
        }
        function be(i) {
          var s = L();
          return this.subTo(i, s), s;
        }
        function Hr(i) {
          var s = L();
          return this.multiplyTo(i, s), s;
        }
        function ir(i) {
          var s = L();
          return this.divRemTo(i, s, null), s;
        }
        function Vr(i) {
          var s = L();
          return this.divRemTo(i, null, s), s;
        }
        function $e(i) {
          var s = L(),
            n = L();
          return this.divRemTo(i, s, n), new Array(s, n);
        }
        function Ge(i) {
          (this[this.t] = this.am(0, i - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function Fe(i, s) {
          for (; this.t <= s; ) this[this.t++] = 0;
          for (this[s] += i; this[s] >= this.DV; )
            (this[s] -= this.DV),
              ++s >= this.t && (this[this.t++] = 0),
              ++this[s];
        }
        function O() {}
        function r(i) {
          return i;
        }
        function a(i, s, n) {
          i.multiplyTo(s, n);
        }
        function z(i, s) {
          i.squareTo(s);
        }
        (O.prototype.convert = r),
          (O.prototype.revert = r),
          (O.prototype.mulTo = a),
          (O.prototype.sqrTo = z);
        function Pe(i) {
          return this.exp(i, new O());
        }
        function De(i, s, n) {
          var f = Math.min(this.t + i.t, s);
          for (n.s = 0, n.t = f; f > 0; ) n[--f] = 0;
          var B;
          for (B = n.t - this.t; f < B; ++f)
            n[f + this.t] = this.am(0, i[f], n, f, 0, this.t);
          for (B = Math.min(i.t, s); f < B; ++f)
            this.am(0, i[f], n, f, 0, s - f);
          n.clamp();
        }
        function de(i, s, n) {
          --s;
          var f = (n.t = this.t + i.t - s);
          for (n.s = 0; --f >= 0; ) n[f] = 0;
          for (f = Math.max(s - this.t, 0); f < i.t; ++f)
            n[this.t + f - s] = this.am(s - f, i[f], n, 0, 0, this.t + f - s);
          n.clamp(), n.drShiftTo(1, n);
        }
        function Ar(i) {
          (this.r2 = L()),
            (this.q3 = L()),
            e.ONE.dlShiftTo(2 * i.t, this.r2),
            (this.mu = this.r2.divide(i)),
            (this.m = i);
        }
        function ie(i) {
          if (i.s < 0 || i.t > 2 * this.m.t) return i.mod(this.m);
          if (i.compareTo(this.m) < 0) return i;
          var s = L();
          return i.copyTo(s), this.reduce(s), s;
        }
        function ke(i) {
          return i;
        }
        function _e(i) {
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
        function rt(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        function et(i, s, n) {
          i.multiplyTo(s, n), this.reduce(n);
        }
        (Ar.prototype.convert = ie),
          (Ar.prototype.revert = ke),
          (Ar.prototype.reduce = _e),
          (Ar.prototype.mulTo = et),
          (Ar.prototype.sqrTo = rt);
        function j(i, s) {
          var n = i.bitLength(),
            f,
            B = le(1),
            M;
          if (n <= 0) return B;
          n < 18
            ? (f = 1)
            : n < 48
              ? (f = 3)
              : n < 144
                ? (f = 4)
                : n < 768
                  ? (f = 5)
                  : (f = 6),
            n < 8
              ? (M = new A(s))
              : s.isEven()
                ? (M = new Ar(s))
                : (M = new yr(s));
          var S = new Array(),
            p = 3,
            dr = f - 1,
            Ir = (1 << f) - 1;
          if (((S[1] = M.convert(this)), f > 1)) {
            var Gr = L();
            for (M.sqrTo(S[1], Gr); p <= Ir; )
              (S[p] = L()), M.mulTo(Gr, S[p - 2], S[p]), (p += 2);
          }
          var se = i.t - 1,
            We,
            Xe = !0,
            ae = L(),
            ye;
          for (n = _(i[se]) - 1; se >= 0; ) {
            for (
              n >= dr
                ? (We = (i[se] >> (n - dr)) & Ir)
                : ((We = (i[se] & ((1 << (n + 1)) - 1)) << (dr - n)),
                  se > 0 && (We |= i[se - 1] >> (this.DB + n - dr))),
                p = f;
              (We & 1) == 0;
            )
              (We >>= 1), --p;
            if (((n -= p) < 0 && ((n += this.DB), --se), Xe))
              S[We].copyTo(B), (Xe = !1);
            else {
              for (; p > 1; ) M.sqrTo(B, ae), M.sqrTo(ae, B), (p -= 2);
              p > 0 ? M.sqrTo(B, ae) : ((ye = B), (B = ae), (ae = ye)),
                M.mulTo(ae, S[We], B);
            }
            for (; se >= 0 && (i[se] & (1 << n)) == 0; )
              M.sqrTo(B, ae),
                (ye = B),
                (B = ae),
                (ae = ye),
                --n < 0 && ((n = this.DB - 1), --se);
          }
          return M.revert(B);
        }
        function tt(i) {
          var s = this.s < 0 ? this.negate() : this.clone(),
            n = i.s < 0 ? i.negate() : i.clone();
          if (s.compareTo(n) < 0) {
            var f = s;
            (s = n), (n = f);
          }
          var B = s.getLowestSetBit(),
            M = n.getLowestSetBit();
          if (M < 0) return s;
          for (
            B < M && (M = B), M > 0 && (s.rShiftTo(M, s), n.rShiftTo(M, n));
            s.signum() > 0;
          )
            (B = s.getLowestSetBit()) > 0 && s.rShiftTo(B, s),
              (B = n.getLowestSetBit()) > 0 && n.rShiftTo(B, n),
              s.compareTo(n) >= 0
                ? (s.subTo(n, s), s.rShiftTo(1, s))
                : (n.subTo(s, n), n.rShiftTo(1, n));
          return M > 0 && n.lShiftTo(M, n), n;
        }
        function ur(i) {
          if (i <= 0) return 0;
          var s = this.DV % i,
            n = this.s < 0 ? i - 1 : 0;
          if (this.t > 0)
            if (s == 0) n = this[0] % i;
            else
              for (var f = this.t - 1; f >= 0; --f) n = (s * n + this[f]) % i;
          return n;
        }
        function jr(i) {
          var s = i.isEven();
          if ((this.isEven() && s) || i.signum() == 0) return e.ZERO;
          for (
            var n = i.clone(),
              f = this.clone(),
              B = le(1),
              M = le(0),
              S = le(0),
              p = le(1);
            n.signum() != 0;
          ) {
            for (; n.isEven(); )
              n.rShiftTo(1, n),
                s
                  ? ((!B.isEven() || !M.isEven()) &&
                      (B.addTo(this, B), M.subTo(i, M)),
                    B.rShiftTo(1, B))
                  : M.isEven() || M.subTo(i, M),
                M.rShiftTo(1, M);
            for (; f.isEven(); )
              f.rShiftTo(1, f),
                s
                  ? ((!S.isEven() || !p.isEven()) &&
                      (S.addTo(this, S), p.subTo(i, p)),
                    S.rShiftTo(1, S))
                  : p.isEven() || p.subTo(i, p),
                p.rShiftTo(1, p);
            n.compareTo(f) >= 0
              ? (n.subTo(f, n), s && B.subTo(S, B), M.subTo(p, M))
              : (f.subTo(n, f), s && S.subTo(B, S), p.subTo(M, p));
          }
          if (f.compareTo(e.ONE) != 0) return e.ZERO;
          if (p.compareTo(i) >= 0) return p.subtract(i);
          if (p.signum() < 0) p.addTo(i, p);
          else return p;
          return p.signum() < 0 ? p.add(i) : p;
        }
        var er = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          nt = (1 << 26) / er[er.length - 1];
        function ot(i) {
          var s,
            n = this.abs();
          if (n.t == 1 && n[0] <= er[er.length - 1]) {
            for (s = 0; s < er.length; ++s) if (n[0] == er[s]) return !0;
            return !1;
          }
          if (n.isEven()) return !1;
          for (s = 1; s < er.length; ) {
            for (var f = er[s], B = s + 1; B < er.length && f < nt; )
              f *= er[B++];
            for (f = n.modInt(f); s < B; ) if (f % er[s++] == 0) return !1;
          }
          return n.millerRabin(i);
        }
        function Bt(i) {
          var s = this.subtract(e.ONE),
            n = s.getLowestSetBit();
          if (n <= 0) return !1;
          var f = s.shiftRight(n);
          (i = (i + 1) >> 1), i > er.length && (i = er.length);
          for (var B = L(), M = 0; M < i; ++M) {
            B.fromInt(er[M]);
            var S = B.modPow(f, this);
            if (S.compareTo(e.ONE) != 0 && S.compareTo(s) != 0) {
              for (var p = 1; p++ < n && S.compareTo(s) != 0; )
                if (((S = S.modPowInt(2, this)), S.compareTo(e.ONE) == 0))
                  return !1;
              if (S.compareTo(s) != 0) return !1;
            }
          }
          return !0;
        }
        (e.prototype.chunkSize = k),
          (e.prototype.toRadix = fr),
          (e.prototype.fromRadix = vr),
          (e.prototype.fromNumber = Be),
          (e.prototype.bitwiseTo = Or),
          (e.prototype.changeBit = Pr),
          (e.prototype.addTo = Zr),
          (e.prototype.dMultiply = Ge),
          (e.prototype.dAddOffset = Fe),
          (e.prototype.multiplyLowerTo = De),
          (e.prototype.multiplyUpperTo = de),
          (e.prototype.modInt = ur),
          (e.prototype.millerRabin = Bt),
          (e.prototype.clone = nr),
          (e.prototype.intValue = q),
          (e.prototype.byteValue = Y),
          (e.prototype.shortValue = G),
          (e.prototype.signum = C),
          (e.prototype.toByteArray = Fr),
          (e.prototype.equals = ar),
          (e.prototype.min = Me),
          (e.prototype.max = gr),
          (e.prototype.and = Br),
          (e.prototype.or = mr),
          (e.prototype.xor = Lr),
          (e.prototype.andNot = we),
          (e.prototype.not = Mr),
          (e.prototype.shiftLeft = Rr),
          (e.prototype.shiftRight = hr),
          (e.prototype.getLowestSetBit = Nr),
          (e.prototype.bitCount = Ur),
          (e.prototype.testBit = sr),
          (e.prototype.setBit = Xr),
          (e.prototype.clearBit = ge),
          (e.prototype.flipBit = Dr),
          (e.prototype.add = Er),
          (e.prototype.subtract = be),
          (e.prototype.multiply = Hr),
          (e.prototype.divide = ir),
          (e.prototype.remainder = Vr),
          (e.prototype.divideAndRemainder = $e),
          (e.prototype.modPow = j),
          (e.prototype.modInverse = jr),
          (e.prototype.pow = Pe),
          (e.prototype.gcd = tt),
          (e.prototype.isProbablePrime = ot);
        const it = e;
        var Mt = function (i, s) {
            (this.modulus = new it(i, 16)),
              (this.encryptionExponent = new it(s, 16));
          },
          wt = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (i) {
              if (!i) return !1;
              var s = "",
                n,
                f,
                B,
                M,
                S,
                p,
                dr,
                Ir = 0;
              do
                (n = i.charCodeAt(Ir++)),
                  (f = i.charCodeAt(Ir++)),
                  (B = i.charCodeAt(Ir++)),
                  (M = n >> 2),
                  (S = ((n & 3) << 4) | (f >> 4)),
                  (p = ((f & 15) << 2) | (B >> 6)),
                  (dr = B & 63),
                  isNaN(f) ? (p = dr = 64) : isNaN(B) && (dr = 64),
                  (s +=
                    this.base64.charAt(M) +
                    this.base64.charAt(S) +
                    this.base64.charAt(p) +
                    this.base64.charAt(dr));
              while (Ir < i.length);
              return s;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var s = "",
                n,
                f,
                B,
                M,
                S = 0;
              do
                (n = this.base64.indexOf(i.charAt(S++))),
                  (f = this.base64.indexOf(i.charAt(S++))),
                  (B = this.base64.indexOf(i.charAt(S++))),
                  (M = this.base64.indexOf(i.charAt(S++))),
                  (s += String.fromCharCode((n << 2) | (f >> 4))),
                  B != 64 &&
                    (s += String.fromCharCode(((f & 15) << 4) | (B >> 2))),
                  M != 64 && (s += String.fromCharCode(((B & 3) << 6) | M));
              while (S < i.length);
              return s;
            },
          },
          ce = {
            hex: "0123456789abcdef",
            encode: function (i) {
              if (!i) return !1;
              var s = "",
                n,
                f = 0;
              do
                (n = i.charCodeAt(f++)),
                  (s +=
                    this.hex.charAt((n >> 4) & 15) + this.hex.charAt(n & 15));
              while (f < i.length);
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
          yt = {
            getPublicKey: function (i, s) {
              return new Mt(i, s);
            },
            encrypt: function (i, s) {
              return !s ||
                ((i = this.pkcs1pad2(i, (s.modulus.bitLength() + 7) >> 3)),
                !i) ||
                ((i = i.modPowInt(s.encryptionExponent, s.modulus)), !i)
                ? !1
                : ((i = i.toString(16)),
                  (i.length & 1) == 1 && (i = "0" + i),
                  wt.encode(ce.decode(i)));
            },
            pkcs1pad2: function (i, s) {
              if (s < i.length + 11) return null;
              for (var n = [], f = i.length - 1; f >= 0 && s > 0; )
                n[--s] = i.charCodeAt(f--);
              for (n[--s] = 0; s > 2; )
                n[--s] = Math.floor(Math.random() * 254) + 1;
              return (n[--s] = 2), (n[--s] = 0), new it(n);
            },
          };
        const lt = yt;
        var ut = h(57589);
        const Ce = new ut.wd("Login"),
          jt = Ce.Info,
          Ot = Ce.Debug,
          vt = Ce.Warning,
          zt = Ce.Error;
        function Ye(i, s) {
          return i.endsWith("/") || (i += "/"), `${i}login/${s}/`;
        }
        function Ze() {
          let i = new FormData();
          return i.append("donotcache", new Date().getTime().toString()), i;
        }
        async function Lt(i) {
          let s = Ze(),
            n = Ye(i, "refreshcaptcha"),
            f = "";
          try {
            let B = { "Content-Type": "multipart/form-data" },
              M = await axios.post(n, s, { headers: B });
            if (M.status != 200) return !1;
            f = M.data.gid;
          } catch {
            return !1;
          }
          return f;
        }
        function Wt(i, s) {
          return Ye(i, "rendercaptcha") + `?gid=${s}`;
        }
        async function xt(i, s) {
          let n = Ze();
          n.append("username", s);
          let f = Ye(i, "getrsakey"),
            B;
          try {
            let M = { "Content-Type": "multipart/form-data" },
              S = await axios.post(f, n, { headers: M });
            if (S.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(S.status), null
              );
            let p = S.data;
            if (
              !p ||
              !p.success ||
              !p.publickey_mod ||
              !p.publickey_exp ||
              !p.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(p), null;
            B = p;
          } catch (M) {
            return console.log("GetRSAKey exception: "), console.log(M), null;
          }
          return B;
        }
        function mt(i, s) {
          let n = lt.getPublicKey(s.publickey_mod, s.publickey_exp),
            f = lt.encrypt(i, n);
          return f === !1 ? null : f;
        }
        async function St(i, s, n, f) {
          const B = mt(n.strPassword, f);
          if (!B) return null;
          let M = Ze();
          M.append("password", B),
            M.append("username", n.strUserName),
            M.append("twofactorcode", n.strTwoFactorCode || ""),
            M.append("emailauth", n.strEmailAuthCode || ""),
            M.append("loginfriendlyname", ""),
            M.append("captchagid", n.gidCaptcha || ""),
            M.append("captcha_text", n.strCaptchaText || ""),
            M.append("emailsteamid", n.emailSteamID || ""),
            M.append("rsatimestamp", f.timestamp),
            M.append("remember_login", n.bRememberLogin ? "true" : "false");
          let S = {};
          s &&
            (M.append("oauth_client_id", s),
            M.append("mobile_chat_client", "true"));
          let p = Ye(i, "dologin"),
            dr;
          try {
            S.headers = { "Content-Type": "multipart/form-data" };
            let Ir = await axios.post(p, M, S);
            if (Ir.status != 200) return null;
            let Gr = Ir.data;
            if (!Gr) return null;
            Gr.oauth && (Gr.oauth = JSON.parse(Gr.oauth)), (dr = Gr);
          } catch {
            return null;
          }
          return dr;
        }
        async function Et(i, s, n) {
          if (
            ((n = Object.assign({}, n)),
            n.strUserName &&
              (n.strUserName = n.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !n.strPassword ||
              n.strPassword.match(/[^\x00-\x7F]/) ||
              !n.strUserName)
          )
            return null;
          let f = await xt(i, n.strUserName);
          return f
            ? await St(
                i,
                s,
                {
                  ...n,
                  strUserName: n.strUserName,
                  strPassword: n.strPassword,
                },
                f,
              )
            : (console.error(`Failed to get RSA key from ${i}`), null);
        }
      },
      42780: (ue, Ue, h) => {
        "use strict";
        h.d(Ue, { YN: () => Wt, Fn: () => Lt, Mk: () => p, kt: () => ht });
        var d = h(7850),
          _r = h(32093),
          y = h(99412),
          g = h(72604),
          e = h(41735),
          L = h.n(e),
          P = h(90626),
          he = h(92757);
        const Je =
          h.p +
          "images/applications/community/login_mobile_auth.png?v=valveisgoodatcaching";
        var Ie = h(71568),
          Oe = h(87883),
          je = h(25792),
          Cr = h(179),
          re = h(24660),
          Ve = h(19298),
          Sr = h(36707),
          Ke = h(9843),
          ve = h.n(Ke);
        function le(c) {
          const {
            length: t,
            value: l,
            onChange: b,
            onPaste: u,
            tone: v,
            autoFocus: o,
            disabled: w,
            loading: H,
            backupCode: F,
            allowCharacter: E,
          } = c;
          (0, P.useEffect)(() => {
            o && ee();
          }, []);
          const tr = (0, P.useRef)([]),
            kr = () => b(tr.current.map((U) => U.value)),
            qr = (U) => {
              const R = U.target.value;
              if (R && E && !E(R)) return;
              const lr = U.target.nextElementSibling;
              U.target.value && lr && lr.focus(), kr();
            },
            fe = (U) => {
              tr.current.findIndex((R) => !!R.value) === -1
                ? tr.current[0]?.select()
                : U.target.select();
            },
            ee = () => {
              const U = tr.current.find((R) => !R.value);
              U ? U.focus() : tr.current[tr.current.length - 1].focus();
            },
            ne = (U) => {
              const R = U.target;
              if (U.key === "Backspace" || U.key === "Delete") {
                const lr =
                  U.key === "Backspace"
                    ? R.previousElementSibling
                    : R.nextElementSibling;
                R.value === "" &&
                  lr &&
                  ((lr.value = ""), lr.focus(), U.preventDefault(), kr());
              } else if (
                U.key === "ArrowLeft" ||
                U.key === "ArrowRight" ||
                U.key === "ArrowUp" ||
                U.key === "ArrowDown"
              ) {
                const lr =
                  U.key === "ArrowLeft" || U.key === "ArrowUp"
                    ? R.previousElementSibling
                    : R.nextElementSibling;
                lr && (lr.focus(), U.preventDefault());
              }
            },
            rr = (U) => {
              const R = U.clipboardData.getData("Text");
              let lr = U.target,
                Qr = 0;
              for (; lr && Qr < R.length; )
                lr.focus(),
                  (lr.value = R.charAt(Qr)),
                  (lr = lr.nextElementSibling),
                  Qr++;
              kr(), U.preventDefault(), u && u();
            },
            te = [];
          for (let U = 0; U < t; U++)
            te.push(
              (0, d.jsx)(
                re.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (R) => {
                    R && (tr.current[U] = R);
                  },
                  onChange: qr,
                  onFocus: fe,
                  onClick: (R) => R.stopPropagation(),
                  onKeyDown: ne,
                  onPaste: rr,
                  value: l[U] ? l[U][0] : "",
                  autoComplete: "none",
                  autoFocus: U === 0 && o,
                  disabled: w || H,
                  className: ve().Input,
                },
                U,
              ),
            );
          return (0, d.jsxs)(Ve.Z, {
            className: (0, Sr.A)(
              ve().SegmentedCharacterInput,
              v === "danger" && ve().Danger,
              w && ve().Disabled,
              F && ve().BackupCode,
            ),
            onClick: ee,
            children: [
              H &&
                (0, d.jsx)("div", {
                  className: ve().Loading,
                  children: (0, d.jsx)(ht, { size: "small" }),
                }),
              te,
            ],
          });
        }
        var oe = h(36118),
          Ae = h(54212),
          He = h(85599),
          Qe = h(71421),
          D = h(71742),
          x = h(18210),
          _ = h(54963),
          I = h(3166),
          W = h(87242),
          Jr = h(14947),
          Tr = h(94354),
          Kr = h(35038),
          Le = h(65946),
          wr = h(30178),
          cr = h(94276),
          me = h(95039),
          qe = h(77008),
          A = h(80613),
          N = h.n(A),
          m = h(75245);
        function gt(c) {
          return "unknown ETwoFactorUsageType ( " + c + " )";
        }
        function bt(c) {
          return "unknown ETwoFactorStatusFieldFlag ( " + c + " )";
        }
        class $r extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $r.prototype.time || m.Sg($r.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    time: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    usage_type: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                    confirmation_type: {
                      n: 3,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    confirmation_action: {
                      n: 4,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = m.w0($r.M())), $r.sm_mbf;
          }
          toObject(t = !1) {
            return $r.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT($r.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq($r.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new $r();
            return $r.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj($r.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0($r.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UsageEvent";
          }
        }
        class Yr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yr.prototype.sender_time || m.Sg(Yr.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    sender_time: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = m.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(t = !1) {
            return Yr.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(Yr.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(Yr.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new Yr();
            return Yr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(Yr.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(Yr.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Request";
          }
        }
        class yr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yr.prototype.server_time || m.Sg(yr.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    server_time: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    skew_tolerance_seconds: {
                      n: 2,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    large_time_jink: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    probe_frequency_seconds: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    adjusted_time_probe_frequency_seconds: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    hint_probe_frequency_seconds: {
                      n: 6,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    sync_timeout: {
                      n: 7,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    try_again_seconds: {
                      n: 8,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    max_attempts: {
                      n: 9,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = m.w0(yr.M())), yr.sm_mbf;
          }
          toObject(t = !1) {
            return yr.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(yr.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(yr.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new yr();
            return yr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(yr.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(yr.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Response";
          }
        }
        class V extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.steamid || m.Sg(V.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    steamid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    include: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = m.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(V.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new V();
            return V.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(V.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(V.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Request";
          }
        }
        class X extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.state || m.Sg(X.M()),
              A.Message.initialize(this, t, 0, -1, [16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    state: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    inactivation_reason: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    authenticator_type: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    authenticator_allowed: {
                      n: 4,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    steamguard_scheme: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    token_gid: {
                      n: 6,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    email_validated: {
                      n: 7,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    device_identifier: {
                      n: 8,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    time_created: {
                      n: 9,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    revocation_attempts_remaining: {
                      n: 10,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    classified_agent: {
                      n: 11,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    allow_external_authenticator: {
                      n: 12,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    time_transferred: {
                      n: 13,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    version: {
                      n: 14,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    last_seen_auth_token_id: {
                      n: 15,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    usages: { n: 16, c: $r, r: !0, q: !0 },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = m.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(X.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new X();
            return X.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(X.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(X.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Response";
          }
        }
        class Z extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.steamid || m.Sg(Z.M()),
              A.Message.initialize(this, t, 0, -1, [7], null);
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
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    authenticator_time: {
                      n: 2,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    serial_number: {
                      n: 3,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    authenticator_type: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    device_identifier: {
                      n: 5,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    http_headers: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: m.qM.readString,
                      bw: m.gp.writeRepeatedString,
                    },
                    version: {
                      n: 8,
                      d: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = m.w0(Z.M())), Z.sm_mbf;
          }
          toObject(t = !1) {
            return Z.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(Z.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new Z();
            return Z.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(Z.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(Z.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Request";
          }
        }
        class J extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.shared_secret || m.Sg(J.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    uri: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                    server_time: {
                      n: 5,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: m.qM.readBytes, bw: m.gp.writeBytes },
                    status: { n: 10, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                    phone_number_hint: {
                      n: 11,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    confirm_type: {
                      n: 12,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = m.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(J.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new J();
            return J.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(J.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(J.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Response";
          }
        }
        class K extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              K.prototype.steamid || m.Sg(K.M()),
              A.Message.initialize(this, t, 0, -1, [5], null);
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
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    authenticator_code: {
                      n: 2,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    authenticator_time: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    activation_code: {
                      n: 4,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    http_headers: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: m.qM.readString,
                      bw: m.gp.writeRepeatedString,
                    },
                    validate_sms_code: {
                      n: 6,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = m.w0(K.M())), K.sm_mbf;
          }
          toObject(t = !1) {
            return K.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(K.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(K.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new K();
            return K.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(K.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return K.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(K.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Request";
          }
        }
        class T extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.success || m.Sg(T.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    success: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    status: { n: 4, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = m.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(T.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new T();
            return T.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(T.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(T.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Response";
          }
        }
        class $ extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.revocation_code || m.Sg($.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    revocation_code: {
                      n: 2,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    revocation_reason: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    steamguard_scheme: {
                      n: 6,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    remove_all_steamguard_cookies: {
                      n: 7,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = m.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT($.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new $();
            return $.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj($.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0($.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Request";
          }
        }
        class Q extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.success || m.Sg(Q.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    success: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    revocation_attempts_remaining: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = m.w0(Q.M())), Q.sm_mbf;
          }
          toObject(t = !1) {
            return Q.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(Q.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(Q.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new Q();
            return Q.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(Q.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(Q.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Response";
          }
        }
        class nr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return nr.toObject(t, this);
          }
          static toObject(t, l) {
            return t ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(t) {
            return new nr();
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new nr();
            return nr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return t;
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {}
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
          }
        }
        class q extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              q.prototype.success || m.Sg(q.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    success: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = m.w0(q.M())), q.sm_mbf;
          }
          toObject(t = !1) {
            return q.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(q.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(q.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new q();
            return q.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(q.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(q.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
          }
        }
        class Y extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.sms_code || m.Sg(Y.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    sms_code: {
                      n: 1,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    generate_new_token: {
                      n: 2,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    version: {
                      n: 3,
                      d: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = m.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(Y.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new Y();
            return Y.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(Y.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(Y.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
          }
        }
        class G extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.shared_secret || m.Sg(G.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    uri: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                    server_time: {
                      n: 5,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: m.qM.readBytes, bw: m.gp.writeBytes },
                    status: { n: 10, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                    steamguard_scheme: {
                      n: 11,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    steamid: {
                      n: 12,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = m.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(G.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new G();
            return G.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(G.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(G.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
          }
        }
        class k extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.success || m.Sg(k.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    success: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                    replacement_token: { n: 2, c: G },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = m.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(k.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new k();
            return k.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(k.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(k.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
          }
        }
        class C extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.steamid || m.Sg(C.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    steamid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    version: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    signature: {
                      n: 3,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = m.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, l) {
            return m.BT(C.M(), t, l);
          }
          static fromObject(t) {
            return m.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new C();
            return C.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return m.zj(C.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            m.i0(C.M(), t, l);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Request";
          }
        }
        class fr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return fr.toObject(t, this);
          }
          static toObject(t, l) {
            return t ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(t) {
            return new fr();
          }
          static deserializeBinary(t) {
            let l = new (N().BinaryReader)(t),
              b = new fr();
            return fr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return t;
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {}
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Response";
          }
        }
        var vr;
        ((c) => {
          function t(F, E, tr) {
            return F.SendMsg(
              "TwoFactor.QueryTime#1",
              (0, Kr.I8)(Yr, E, tr),
              yr,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["help"],
              },
            );
          }
          c.QueryTime = t;
          function l(F, E, tr) {
            return F.SendMsg(
              "TwoFactor.QueryStatus#1",
              (0, Kr.I8)(V, E, tr),
              X,
              { ePrivilege: 1 },
            );
          }
          c.QueryStatus = l;
          function b(F, E, tr) {
            return F.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, Kr.I8)(Z, E, tr),
              J,
              { ePrivilege: 1 },
            );
          }
          c.AddAuthenticator = b;
          function u(F, E, tr) {
            return F.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, Kr.I8)(K, E, tr),
              T,
              { ePrivilege: 1 },
            );
          }
          c.FinalizeAddAuthenticator = u;
          function v(F, E, tr) {
            return F.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, Kr.I8)(C, E, tr),
              fr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          c.UpdateTokenVersion = v;
          function o(F, E, tr) {
            return F.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, Kr.I8)($, E, tr),
              Q,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticator = o;
          function w(F, E, tr) {
            return F.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, Kr.I8)(nr, E, tr),
              q,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticatorViaChallengeStart = w;
          function H(F, E, tr) {
            return F.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, Kr.I8)(Y, E, tr),
              k,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticatorViaChallengeContinue = H;
        })(vr || (vr = {}));
        var Be = Object.defineProperty,
          Fr = Object.getOwnPropertyDescriptor,
          ar = (c, t, l, b) => {
            for (
              var u = b > 1 ? void 0 : b ? Fr(t, l) : t, v = c.length - 1, o;
              v >= 0;
              v--
            )
              (o = c[v]) && (u = (b ? o(t, l, u) : o(u)) || u);
            return b && u && Be(t, l, u), u;
          };
        const Me = 2,
          gr = 0,
          Or = 1,
          pr = 2,
          Br = 3,
          br = 4,
          mr = 5,
          or = 6,
          Lr = 7,
          zr = 8,
          we = 9,
          Mr = 10,
          Rr = 11,
          hr = 12,
          xr = 13,
          Nr = 14,
          Wr = 15,
          Ur = 16;
        class sr extends W.gf {
          m_eStatus = gr;
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
          constructor(t) {
            super(
              t.transport,
              (l) => this.onAuthComplete(l),
              t.onDeviceDetails,
              t.onShowAgreement,
            ),
              (0, Jr.Gn)(this),
              (this.m_onLoginComplete = t.onComplete),
              (this.m_onGetMachineAuth = t.onGetMachineAuth);
          }
          async Start(t, l, b) {
            if (this.m_eStatus !== gr && this.m_eStatus !== pr)
              return (
                (0, wr.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                g.Ze
              );
            const u = t.replace(/[^\x00-\x7F]/g, ""),
              v = l.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!u.length || !v.length) return g.nO;
            if (
              ((this.m_eStatus = Or),
              (this.m_bUsingCodeOverride = !1),
              t == "anonymous")
            )
              return (
                this.SetFailureState(W.eF.AnonymousLogin, ir.EResult(g.FK)),
                g.FK
              );
            try {
              const o = await Pr(this.m_transport, u);
              if (!o)
                return (
                  (0, wr.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(W.eF.Network, ir.EResult(g.Sq)),
                  g.Sq
                );
              const w = (0, wr.P8)(v, o),
                H = Kr.w.Init(cr.iP);
              H.SetEMsg(Tr.Kec),
                H.Body().set_account_name(u),
                H.Body().set_encrypted_password(w ?? void 0),
                H.Body().set_encryption_timestamp(o.timestamp),
                H.Body().set_remember_login(!!b),
                H.Body().set_persistence(b ? me.nW : me.fH),
                H.Body().set_website_id(I.TS.WEBSITE_ID);
              try {
                H.Body().set_device_details(await this.GetDeviceDetails());
              } catch (E) {
                (0, wr.ZI)("Failed to GetDeviceDetails"), (0, wr.ZI)(E);
              }
              if (
                (H.Body().set_language((0, y.sfN)(I.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const E = await this.m_onGetMachineAuth(u);
                E.eresult == g.R && H.Body().set_guard_data(E.data);
              }
              await this.m_transport.MakeReady();
              const F = await cr.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                H,
              );
              return (
                F.DEBUG_LogToConsole(),
                (0, Jr.h5)(async () => {
                  const E = F.GetEResult(),
                    tr = F.Hdr().transport_error();
                  if (E !== g.R)
                    switch (E) {
                      case g.Um:
                        return (this.m_eStatus = pr), E;
                      case g.Sq:
                      case g.a_:
                        return (
                          this.SetFailureState(W.eF.Network, ir.EResult(g.Sq)),
                          E
                        );
                      case g.h_:
                        return (
                          this.SetFailureState(
                            W.eF.RateLimitExceeded,
                            ir.EResult(E),
                          ),
                          E
                        );
                      case g.oH: {
                        const R = F.Body().agreement_session_url();
                        if (
                          ((0, D.wT)(
                            !!R,
                            "Missing agreement session URL for result",
                            E,
                          ),
                          this.m_onShowAgreement)
                        )
                          this.m_onShowAgreement(R);
                        else {
                          const lr = document.location.href;
                          window.location.href = `${R}&redir=${encodeURIComponent(lr)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = gr),
                          E
                        );
                      }
                      case g.uN:
                      default:
                        return (
                          (0, wr.ZI)(
                            `Failed to start auth session. Result: ${E} Transport: ${tr}`,
                          ),
                          this.SetFailureState(
                            W.eF.Generic,
                            ir.EResult(E),
                            F.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          E
                        );
                    }
                  this.m_strAccountName = t;
                  const {
                    client_id: kr,
                    request_id: qr,
                    interval: fe,
                    allowed_confirmations: ee = [],
                    steamid: ne,
                    weak_token: rr,
                  } = F.Body().toObject();
                  if (
                    ((0, D.wT)(
                      fe !== void 0 && !!kr && !!ne,
                      "Missing poll interval, client ID, or steamid for result",
                      E,
                    ),
                    (this.m_msPollInterval = fe * 1e3),
                    (this.m_strClientID = kr),
                    (this.m_rgRequestID = qr),
                    (this.m_steamid = ne),
                    (this.m_strWeakAuthToken = rr ?? ""),
                    ee.find(({ confirmation_type: R }) => R === cr.TY.ig))
                  ) {
                    const R = new FormData();
                    R.append("clientid", kr), R.append("steamid", ne);
                    const lr = `${I.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await L().post(lr, R, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == g.R
                      )
                        return (
                          (this.m_eStatus = br), this.StartPolling(!0), g.R
                        );
                    } catch (Qr) {
                      if (
                        ((0, wr.tG)(
                          `checkdevice ajax to ${lr} failed: ${Qr.message}`,
                        ),
                        Qr instanceof e.AxiosError)
                      ) {
                        const Se = Qr;
                        return Se.response
                          ? (this.SetFailureState(
                              W.eF.Network,
                              ir.AjaxFailureWithCode(Se.response.status),
                            ),
                            g.Sq)
                          : (this.SetFailureState(
                              W.eF.Network,
                              ir.AjaxFailureNoCode(),
                            ),
                            g.Sq);
                      }
                      return (
                        this.SetFailureState(W.eF.Network, ir.EResult(g.eH)),
                        g.eH
                      );
                    }
                  }
                  const te = Dr(
                      ee.map(
                        ({ confirmation_type: R }) => (
                          (0, D.wT)(
                            R !== void 0,
                            "Missing confirmation type in allowed confirmations",
                          ),
                          R
                        ),
                      ),
                    ),
                    U = ee.find(({ confirmation_type: R }) => R === te);
                  switch (
                    (U &&
                      U.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        U.associated_message),
                    te)
                  ) {
                    case cr.TY.WM:
                      return (this.m_eStatus = xr), this.StartPolling(), E;
                    case cr.TY.Xs:
                      this.m_eStatus = Br;
                      break;
                    case cr.TY.$Y:
                      (this.m_eStatus = br), this.StartPolling(!1);
                      break;
                    case cr.TY.bH:
                      (this.m_eStatus = mr), this.StartPolling(!1);
                      break;
                    case cr.TY.x0:
                      (this.m_eStatus = or), this.StartPolling(!1);
                      break;
                  }
                  return E;
                })
              );
            } catch (o) {
              return (
                (0, wr.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(o)}`,
                ),
                (0, wr.tG)(o),
                this.SetFailureState(W.eF.Generic, ir.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                g.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = Ur);
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
          async SendSteamGuardCode(t, l = !0) {
            if (t.length == 0) {
              switch (this.m_eStatus) {
                case Mr:
                  this.m_eStatus = Br;
                  break;
                case Rr:
                  this.m_eStatus = mr;
                  break;
                case mr:
                case Br:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(g.R);
            }
            try {
              await this.m_transport.MakeReady();
              const b = this.m_eStatus === Br || this.m_eStatus === Mr,
                u = Kr.w.Init(cr.Qc);
              u.SetEMsg(Tr.Kec),
                u.Body().set_client_id(this.m_strClientID),
                u.Body().set_steamid(this.m_steamid),
                u.Body().set_code(t),
                u.Body().set_code_type(b ? cr.TY.Xs : cr.TY.bH);
              const v = await cr.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  u,
                ),
                o = v.GetEResult();
              if (o !== g.R) {
                if (!l)
                  return (
                    (0, wr.ZI)(
                      `Failed to automatically update session with local SG info. Result ${o}. Transport ${v.Hdr().transport_error()}`,
                    ),
                    o
                  );
                switch (o) {
                  case g.QR:
                  case g.b7:
                    return (this.m_eStatus = b ? Mr : Rr), o;
                  case g.ob:
                    return (
                      this.SetFailureState(W.eF.Expired, ir.EResult(o)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      o
                    );
                  case g.h_:
                    return (
                      this.SetFailureState(
                        W.eF.RateLimitExceeded,
                        ir.EResult(o),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      o
                    );
                  case g.oH: {
                    const w = v.Body().agreement_session_url();
                    if (
                      ((0, D.wT)(
                        !!w,
                        "Missing agreement session URL for result",
                        o,
                      ),
                      this.m_onShowAgreement)
                    )
                      this.m_onShowAgreement(w);
                    else {
                      const H = document.location.href;
                      window.location.href = `${w}&redir=${encodeURIComponent(H)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = gr),
                      o
                    );
                  }
                  default:
                    return (
                      (0, wr.ZI)(
                        `Failed to update auth session with SG code. Result: ${o}`,
                      ),
                      this.SetFailureState(W.eF.Generic, ir.EResult(o)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      o
                    );
                }
              }
              return (this.m_eStatus = xr), this.StartPolling(), o;
            } catch (b) {
              return (
                (0, wr.ZI)(`Failed to update auth session with SG code. ${b}`),
                this.SetFailureState(W.eF.Generic, ir.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                g.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case or:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = mr);
                return;
              case br:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = Br);
                return;
              default:
                (0, wr.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = Lr;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new qe.D(
              I.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const t = Kr.w.Init(nr),
                l = await vr.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  t,
                );
              g.R != l.GetEResult()
                ? (l.DEBUG_LogToConsole(),
                  (0, wr.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    l.GetEResult(),
                  ),
                  this.SetFailureState(
                    W.eF.MoveAuthenticator,
                    ir.EResult(l.GetEResult()),
                  ))
                : (this.m_eStatus = zr);
            } catch (t) {
              (0, wr.ZI)(
                "An unexpected error occured while moving an authenticator",
                t,
              ),
                this.SetFailureState(W.eF.MoveAuthenticator, ir.EResult(g.zi));
            }
          }
          async ResendMoveCode() {
            (0, D.wT)(
              !!this.m_weakAuthWebInterface,
              "Resending move code before StartMoveAuthenticator",
            );
            const t = Kr.w.Init(nr),
              l = await vr.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                t,
              );
            g.R != l.GetEResult() &&
              (l.DEBUG_LogToConsole(),
              (0, wr.ZI)(
                "An unexpected error occured while adding an authenticator",
                l.GetEResult(),
              )),
              (this.m_eStatus = zr);
          }
          async FinishMoveAuthenticator(t) {
            (0, D.wT)(
              !!this.m_weakAuthWebInterface,
              "Finishing authenticator move before StartMoveAuthenticator",
            );
            const l = Kr.w.Init(Y);
            l.Body().set_sms_code(t),
              l.Body().set_generate_new_token(!0),
              l.Body().set_version(Me);
            const b = await vr.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              l,
            );
            if (g.c3 == b.GetEResult()) this.m_eStatus = hr;
            else if (!b.Body().success())
              b.DEBUG_LogToConsole(),
                (0, wr.ZI)(
                  "Error when calling RemoveAuthenticatorViaChallengeContinue",
                  b.GetEResult(),
                ),
                this.SetFailureState(
                  W.eF.MoveAuthenticator,
                  ir.EResult(b.GetEResult()),
                );
            else {
              b.DEBUG_LogToConsole();
              const u = b.Body().replacement_token();
              (0, D.wT)(
                !!u,
                "Missing replacement token on successful authenticator move",
              ),
                (this.m_replacementAuthenticator = (0, W.FU)(u.toObject())),
                (this.m_eStatus = we),
                (this.m_bUsingCodeOverride = !1);
            }
          }
          FinishMoveRecovery() {
            this.m_eStatus = mr;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case mr:
              case Rr:
              case Br:
              case Mr:
              case or:
              case br:
              case Lr:
              case zr:
              case hr:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case or:
              case br:
                this.m_eStatus = gr;
                break;
              case mr:
              case Rr:
                this.m_eStatus = this.m_bUsingCodeOverride ? or : gr;
                break;
              case Lr:
              case zr:
              case hr:
                this.m_eStatus = (this.m_bUsingCodeOverride, mr);
                break;
              case Br:
              case Mr:
                this.m_eStatus = this.m_bUsingCodeOverride ? br : gr;
                break;
              default:
                (0, wr.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(t, l, b = "") {
            (this.m_eStatus = Wr),
              (this.m_eFailureState = t),
              (this.m_strErrorReference = l),
              (this.m_strExtendedErrorMessage = b);
          }
          onAuthComplete = (t) => {
            this.m_eStatus = t.bSuccess ? Nr : Wr;
            let l;
            t.bSuccess
              ? ((0, D.wT)(
                  !!this.m_strAccountName && !!this.m_steamid,
                  "Missing account name or steamid on auth success",
                ),
                (l = {
                  ...t,
                  strAccountName: this.m_strAccountName,
                  steamid: this.m_steamid,
                }))
              : (l = { bSuccess: !1 }),
              this.m_onLoginComplete && this.m_onLoginComplete(l);
          };
          SetOnLoginComplete(t) {
            this.m_onLoginComplete = t;
          }
        }
        ar([Jr.sH], sr.prototype, "m_eStatus", 2),
          ar([Jr.sH], sr.prototype, "m_strErrorReference", 2),
          ar([_.oI], sr.prototype, "Start", 1),
          ar([_.oI], sr.prototype, "SendSteamGuardCode", 1),
          ar([_.oI], sr.prototype, "UseCodeOverride", 1),
          ar([_.oI], sr.prototype, "CantAccessCode", 1),
          ar([_.oI], sr.prototype, "StartMoveAuthenticator", 1),
          ar([_.oI], sr.prototype, "ResendMoveCode", 1),
          ar([_.oI], sr.prototype, "FinishMoveAuthenticator", 1),
          ar([_.oI], sr.prototype, "FinishMoveRecovery", 1),
          ar([_.oI], sr.prototype, "GoBack", 1),
          ar([Jr.XI], sr.prototype, "SetFailureState", 1),
          ar([_.oI], sr.prototype, "SetOnLoginComplete", 1);
        async function Pr(c, t) {
          const l = Kr.w.Init(cr.qu);
          l.Body().set_account_name(t), l.SetEMsg(Tr.Kec);
          try {
            await c.MakeReady();
            const b = await cr.kX.GetPasswordRSAPublicKey(c, l);
            if ((b.DEBUG_LogToConsole(), b.GetEResult() !== g.R))
              return (
                (0, wr.ZI)(
                  `Failed to get RSA key with EResult: ${b.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: u,
              publickey_mod: v,
              timestamp: o,
            } = b.Body().toObject();
            return !u || !v || !o
              ? ((0, wr.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: u, publickey_mod: v, timestamp: o })}`,
                ),
                null)
              : { publickey_exp: u, publickey_mod: v, timestamp: o };
          } catch (b) {
            return (
              (0, wr.ZI)(`Failed to get RSA key: ${JSON.stringify(b)}`), null
            );
          }
        }
        const ge = [
          cr.TY.x0,
          cr.TY.bH,
          cr.TY.Xs,
          cr.TY.WM,
          cr.TY.oP,
          cr.TY.$Y,
        ].reduce((c, t, l) => ((c[t] = l), c), {});
        function Dr(c) {
          let t = c[0] || cr.TY.oP;
          return c.length > 1 && (t = c.sort((l, b) => ge[l] - ge[b])[0]), t;
        }
        function Zr(c) {
          const [t, l] = (0, P.useState)(new sr(c));
          return (
            (0, P.useEffect)(() => {
              t?.SetOnLoginComplete(c.onComplete);
            }, [t, c.onComplete]),
            (0, Le.q3)(() => ({
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
              reset: () => l(new sr(c)),
              goBack: t.GoBack,
              setTokenToRevoke: t.SetTokenToRevoke,
            }))
          );
        }
        function Er(c) {
          return c ? 7 : 5;
        }
        function be(c, t) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(c) && c.length <= Er(t);
        }
        function Hr(c, t) {
          return be(c, t) && c.length === Er(t);
        }
        const ir = {
          EResult: (c) => `e${c}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (c) => `af-${c}`,
        };
        var Vr = Object.defineProperty,
          $e = Object.getOwnPropertyDescriptor,
          Ge = (c, t, l, b) => {
            for (
              var u = b > 1 ? void 0 : b ? $e(t, l) : t, v = c.length - 1, o;
              v >= 0;
              v--
            )
              (o = c[v]) && (u = (b ? o(t, l, u) : o(u)) || u);
            return b && u && Vr(t, l, u), u;
          };
        const Fe = 0,
          O = 1,
          r = 2,
          a = 3,
          z = 4,
          Pe = 5;
        class De extends W.gf {
          m_eStatus = Fe;
          constructor(t) {
            super(
              t.transport,
              (l) => {
                (this.m_eStatus = l.bSuccess ? a : z), t.onComplete(l);
              },
              t.onDeviceDetails,
            ),
              (0, Jr.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== Fe)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                g.zi
              );
            this.m_eStatus = O;
            try {
              await this.m_transport.MakeReady();
              const t = Kr.w.Init(cr.R9);
              t.SetEMsg(Tr.Kec);
              try {
                t.Body().set_device_details(await this.GetDeviceDetails());
              } catch (F) {
                console.error("Failed to GetDeviceDetails"), console.log(F);
              }
              t.Body().set_website_id(I.TS.WEBSITE_ID);
              const l = await cr.kX.BeginAuthSessionViaQR(this.m_transport, t),
                b = l.GetEResult(),
                u = l.Hdr().transport_error();
              if (b !== g.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${b} Transport: ${u}`,
                  ),
                  (this.m_eFailureState = W.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  b
                );
              const {
                client_id: v,
                challenge_url: o,
                interval: w,
                request_id: H,
              } = l.Body().toObject();
              return (
                (0, D.wT)(
                  w !== void 0,
                  "Missing poll interval for QR auth session",
                ),
                (this.m_strClientID = v),
                (this.m_strChallengeURL = o),
                (this.m_msPollInterval = w * 1e3),
                (this.m_rgRequestID = H),
                (this.m_eStatus = r),
                this.StartPolling(!1),
                b
              );
            } catch (t) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(t)}`,
                ),
                (this.m_eFailureState = W.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                g.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = Pe);
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
        Ge([Jr.sH], De.prototype, "m_eStatus", 2);
        function de(c) {
          const [t, l] = (0, P.useState)(new De(c));
          return (
            (0, P.useEffect)(
              () => (
                t.Start(),
                () => {
                  t.Stop();
                }
              ),
              [t],
            ),
            (0, Le.q3)(() => ({
              strChallengeURL: t.GetChallengeURL(),
              strClientID: t.GetClientID(),
              eFailureState: t.GetFailureState(),
              eStatus: t.GetStatus(),
              bHadRemoteInteraction: t.BHadRemoteInteraction(),
              reset: () => l(new De(c)),
              setTokenToRevoke: t.SetTokenToRevoke,
            }))
          );
        }
        function Ar(c) {
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
        async function ie() {
          const [c, t, l, b] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            SteamClient?.Auth?.GetLocalHostname?.() ?? "",
            SteamClient?.Auth?.GetMachineID?.() ?? void 0,
          ]);
          return {
            os_type: c,
            device_friendly_name: l,
            machine_id: b,
            platform_type: cr.SS.w0,
            gaming_device_type: t.eGamingDeviceType,
          };
        }
        async function ke() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: cr.SS.tS,
          };
        }
        function _e(c) {
          const {
              onSuccess: t,
              secureComputer: l = !0,
              isProbablySharedPC: b = !1,
            } = c,
            u = (0, P.useCallback)(
              (U) => {
                if (U.bSuccess) {
                  const {
                    strRefreshToken: R,
                    strAccessToken: lr,
                    strAccountName: Qr,
                    strNewGuardData: Se,
                  } = U;
                  t({
                    strRefreshToken: R,
                    strAccessToken: lr,
                    strAccountName: Qr,
                    strNewGuardData: Se,
                  });
                }
              },
              [t],
            ),
            v = Zr({
              transport: c.transport,
              onComplete: u,
              onDeviceDetails: c.onDeviceDetails,
              onGetMachineAuth: c.onGetMachineAuth,
              onShowAgreement: c.onShowAgreement,
            }),
            [o, w] = (0, P.useState)(Fe),
            H = "Login_RememberMeSetting",
            [F, E] = (0, P.useState)(
              c.refreshInfo?.account_name ?? c.defaultAccountName ?? "",
            ),
            [tr, kr] = (0, P.useState)(""),
            [qr, fe] = (0, P.useState)(
              l && !b && localStorage?.getItem(H) != "0",
            ),
            ee = !(v.eStatus === gr || v.eStatus === Or || v.eStatus === pr),
            ne = () => (!F || !tr ? Promise.resolve(g.nO) : v.start(F, tr, qr)),
            rr = () => {
              (0, wr.tG)(`Logging in offline with username ${F}`),
                SteamClient.User.SetLoginCredentials(F, tr, qr),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, P.useEffect)(() => {
              c.refreshInfo?.login_token_id &&
                v.setTokenToRevoke(c.refreshInfo.login_token_id);
            }, [c.refreshInfo, v]),
            {
              password: v,
              onComplete: u,
              eQRStatus: o,
              onQRStatusChange: w,
              strAccountName: F,
              onAccountNameChange: E,
              strPassword: tr,
              onPasswordChange: kr,
              bRememberMe: qr,
              onRememberMeChange: (U) => {
                fe(U), localStorage?.setItem(H, U ? "1" : "0");
              },
              onPasswordSubmit: ne,
              bInPasswordFlow: ee,
              onTryOffline: rr,
            }
          );
        }
        function rt(c, t = "") {
          let l = { title: "", description: "" };
          switch (c) {
            case W.eF.None:
              return { title: "", description: "" };
            case W.eF.Expired:
              l = {
                title: (0, x.we)("#Login_Error_Expired_Title"),
                description: (0, x.we)("#Login_Error_Expired_Description"),
              };
              break;
            case W.eF.Network:
              l = {
                title: (0, x.we)("#Login_Error_Network_Title"),
                description: (0, x.we)("#Login_Error_Network_Description"),
              };
              break;
            case W.eF.MoveAuthenticator:
              l = {
                title: (0, x.we)("#Error_Generic"),
                description: (0, x.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case W.eF.RateLimitExceeded:
              l = {
                title: (0, x.we)("#Login_Error_RateLimit_Title"),
                description: (0, x.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case W.eF.AnonymousLogin:
              l = {
                title: (0, x.we)("#Login_Error_Anonymous_Title"),
                description: (0, x.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case W.eF.Generic:
            default:
              l = {
                title: (0, x.we)("#Error_Generic"),
                description: (0, x.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return t && (l.description = t), l;
        }
        var et = h(78412),
          j = h.n(et),
          tt = h(56589),
          ur = h.n(tt),
          jr = h(5804),
          er = h.n(jr),
          nt = ((c) => (
            (c[(c.L = 1)] = "L"),
            (c[(c.M = 0)] = "M"),
            (c[(c.Q = 3)] = "Q"),
            (c[(c.H = 2)] = "H"),
            c
          ))(nt || {});
        function ot(c, t, l) {
          const b = c.length,
            u = c[0].length,
            v = (b + 2) * u,
            o = new Uint8Array(40 + v);
          let w = 0;
          (o[w++] = 71),
            (o[w++] = 73),
            (o[w++] = 70),
            (o[w++] = 56),
            (o[w++] = 57),
            (o[w++] = 97),
            (o[w++] = b),
            (o[w++] = 0),
            (o[w++] = u),
            (o[w++] = 0),
            (0, D.wT)(
              t != "transparent" || l != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (o[w++] = 161),
            (o[w++] = 0),
            (o[w++] = 0),
            t == "transparent"
              ? ((o[w++] = 0), (o[w++] = 0), (o[w++] = 0))
              : ((o[w++] = t[0]), (o[w++] = t[1]), (o[w++] = t[2])),
            l == "transparent"
              ? ((o[w++] = 0), (o[w++] = 0), (o[w++] = 0))
              : ((o[w++] = l[0]), (o[w++] = l[1]), (o[w++] = l[2])),
            (o[w++] = 255),
            (o[w++] = 255),
            (o[w++] = 255),
            (o[w++] = 255),
            (o[w++] = 255),
            (o[w++] = 255),
            (t == "transparent" || l == "transparent") &&
              ((o[w++] = 33),
              (o[w++] = 249),
              (o[w++] = 4),
              (o[w++] = 1),
              (o[w++] = 0),
              (o[w++] = 0),
              (o[w++] = t == "transparent" ? 0 : 1),
              (o[w++] = 0)),
            (o[w++] = 44),
            (o[w++] = 0),
            (o[w++] = 0),
            (o[w++] = 0),
            (o[w++] = 0),
            (o[w++] = b),
            (o[w++] = 0),
            (o[w++] = u),
            (o[w++] = 0),
            (o[w++] = 0);
          const H = 7;
          o[w++] = H;
          for (let F = 0; F < c.length; F++) {
            (o[w++] = b + 1), (o[w++] = 2 ** H);
            for (let E = 0; E < c.length; E++) o[w++] = c[F][E] ? 0 : 1;
          }
          return (
            (o[w++] = 1), (o[w++] = 2 ** H + 1), (o[w++] = 0), (o[w++] = 59), o
          );
        }
        function Bt(
          c,
          {
            activeBitColor: t = [33, 35, 40],
            inactiveBitColor: l = [255, 255, 255],
            borderWidth: b = 3,
          } = {},
          u = {},
        ) {
          const v = ur()(c, u).modules;
          if (!v) return null;
          let o = [];
          for (let w = 0; w < b; w++) o.push(Array(v.length + b * 2).fill(!1));
          for (let w = 0; w < v.length; w++)
            o.push([
              ...Array.from({ length: b }, () => !1),
              ...v[w],
              ...Array.from({ length: b }, () => !1),
            ]);
          for (let w = 0; w < b; w++) o.push(Array(v.length + b * 2).fill(!1));
          return ot(o, t, l);
        }
        function it(c) {
          let {
            quality: t = 0,
            children: l,
            className: b,
            activeBitColor: u = [33, 35, 40],
            inactiveBitColor: v = [255, 255, 255],
            borderWidth: o = 3,
            typeNumber: w = 6,
          } = c;
          const H = Mt(l, {
            typeNumber: w,
            errorCorrectLevel: t,
            activeBitColor: u,
            inactiveBitColor: v,
            borderWidth: o,
          });
          if (!H) return null;
          const F = new Blob([H], { type: "image/gif" }),
            E = URL.createObjectURL(F),
            tr = `rgb(${v[0]}, ${v[1]}, ${v[2]})`;
          return (0, d.jsx)("div", {
            className: (0, Sr.A)(er().QRBits, b),
            style: { "--qr-bright-color": tr },
            children: (0, d.jsx)("img", {
              className: er().QRImg,
              src: E,
              alt: "",
            }),
          });
        }
        function Mt(c, t) {
          const {
            typeNumber: l,
            errorCorrectLevel: b,
            activeBitColor: u,
            inactiveBitColor: v,
            borderWidth: o,
          } = t;
          return (0, P.useMemo)(
            () =>
              Bt(
                c,
                { activeBitColor: u, inactiveBitColor: v, borderWidth: o },
                { typeNumber: l, errorCorrectLevel: b },
              ),
            [c, l, b, u, v, o],
          );
        }
        var wt = h(15557),
          ce = h.n(wt),
          yt = h(19316);
        function lt(c) {
          const {
              transport: t,
              onComplete: l,
              onStatusChange: b,
              platform: u,
              styling: v = "default",
              activeBitValue: o = 255,
            } = c,
            w = I.TS.IN_STEAMUI ? ie : ke,
            {
              eStatus: H,
              strChallengeURL: F,
              strClientID: E,
              bHadRemoteInteraction: tr,
              reset: kr,
              setTokenToRevoke: qr,
            } = de({ transport: t, onComplete: l, onDeviceDetails: w });
          (0, P.useEffect)(() => b && b(H), [b, H]);
          const fe = H === r && F ? F : I.TS.STORE_BASE_URL,
            ee = H === Fe || H === O || tr,
            ne = H === z,
            rr = H === a,
            te = rr
              ? (0, d.jsx)(vt, {})
              : ne
                ? (0, d.jsx)(jt, { reset: kr })
                : ee
                  ? (0, d.jsx)(Ce, { size: "small" })
                  : null,
            U = ee || ne || rr;
          (0, P.useEffect)(() => {
            c.refreshInfo?.login_token_id && qr(c.refreshInfo.login_token_id);
          }, [c.refreshInfo, qr]);
          const R = I.TS.EUNIVERSE !== y.wLO,
            lr = `rgb(${o}, ${o}, ${o})`;
          return (0, d.jsx)("div", {
            className: ce().Column,
            children: (0, d.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, d.jsx)(it, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: R ? [o, 0, o] : [o, o, o],
                  quality: ut(fe),
                  className: (0, Sr.A)(
                    ce().LoginQR,
                    v == "deck" && ce().QRLoginDeck,
                    v == "vr" && ce().QRLoginVR,
                    U && ce().Blur,
                    R && ce().NonPublic,
                  ),
                  children: fe,
                }),
                U &&
                  (0, d.jsx)("div", {
                    className: ce().Overlay,
                    children: (0, d.jsx)("div", {
                      className: ce().Box,
                      style: { "--qr-bright-color": lr },
                      children: te,
                    }),
                  }),
              ],
            }),
          });
        }
        function ut(c) {
          return c.length <= 90 ? nt.Q : void 0;
        }
        function Ce(c) {
          const { size: t } = c;
          return (0, d.jsx)("div", {
            className: (0, Sr.A)(
              ce().Loading,
              t == "small" && ce().Small,
              (t == "medium" || !t) && ce().Medium,
              t == "large" && ce().Large,
            ),
          });
        }
        function jt(c) {
          return (0, d.jsx)(yt.$n, {
            onClick: c.reset,
            className: ce().QRFailure,
            children: (0, d.jsx)(Ot, {}),
          });
        }
        function Ot(c) {
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
        function vt() {
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
        var zt = h(72609);
        const Ye = (0, P.createContext)(!1),
          Ze = () => (0, P.useContext)(Ye);
        function Lt() {
          return (0, d.jsx)("div", {
            className: j().Login,
            children: (0, d.jsx)(at, {
              reset: () => window.location.reload(),
              failure: W.eF.Generic,
            }),
          });
        }
        function Wt(c) {
          const t = si(c.redirectUrl),
            l = (b) => {
              const { strRefreshToken: u } = b;
              (0, W.yp)(u).then(
                (v) => c.onComplete(v),
                () => c.onComplete(W.wI.k_PrimaryDomainFail),
              );
            };
          return t
            ? null
            : (0, d.jsx)(xt, {
                ...c,
                creationRedirectUrl: c.redirectUrl,
                onSuccess: l,
                embedded: c.theme === "modal",
              });
        }
        function xt(c) {
          const { embedded: t, children: l, ...b } = c;
          return (0, d.jsx)(je.tH, {
            children: (0, d.jsx)(Ye.Provider, {
              value: t ?? !1,
              children: (0, d.jsxs)("div", {
                className: j().Login,
                children: [(0, d.jsx)(s, { ...b }), l],
              }),
            }),
          });
        }
        function mt(c) {
          if ((0, Oe.q)()) return null;
          const { variant: t } = c;
          return typeof t == "function"
            ? (0, d.jsx)(ze, {
                onClick: t,
                children: (0, x.we)("#Login_Help_SignIn"),
              })
            : (0, d.jsx)(ze, {
                href: `${I.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, x.we)("#Login_Help_SignIn"),
              });
        }
        function St(c) {
          const { variant: t, redirectUrl: l } = c;
          if (typeof t == "function")
            return (0, d.jsx)(ze, {
              inline: !0,
              onClick: t,
              children: (0, x.we)("#Login_CreateAccount"),
            });
          {
            const b = l ? `?redir=${encodeURIComponent(l)}` : "";
            switch (t ?? "normal") {
              default:
              case "normal":
                return (0, d.jsx)(ze, {
                  inline: !0,
                  href: `${I.TS.STORE_BASE_URL}join/${b}`,
                  children: (0, x.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, d.jsx)(ze, {
                  inline: !0,
                  href: `${I.TS.PARTNER_BASE_URL}${b}`,
                  children: (0, x.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function Et(c) {
          const { launcherType: t, variant: l, redirectUrl: b } = c;
          if (t === y.A2g || l == "none") return null;
          const u = t !== void 0;
          let v;
          switch (l ?? "normal") {
            default:
            case "normal":
              v = "#Login_NoSteamAccount";
              break;
            case "partner":
              v = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, d.jsxs)("div", {
            className: (0, Sr.A)(j().AccountCreation, u && j().InClient),
            children: [
              (0, d.jsx)("span", {
                className: j().AccountCreationPrompt,
                children: (0, x.we)(v),
              }),
              (0, d.jsx)(St, { variant: l, redirectUrl: b }),
            ],
          });
        }
        function i() {
          const c =
            window?.location && (0, Cr.f3)(window.location, "need_password");
          return c !== void 0 && c !== "false" && c !== "0";
        }
        function s(c) {
          const {
              transport: t,
              onSuccess: l,
              platform: b,
              autoFocus: u,
              refreshInfo: v,
              renderSuccess: o = () => (0, d.jsx)(ii, {}),
              lastResult: w,
              joinLinkVariant: H,
              defaultAccountName: F,
              secureComputer: E = !0,
              isProbablySharedPC: tr = !1,
              onShowAgreement: kr,
              creationRedirectUrl: qr,
            } = c,
            fe = I.TS.IN_STEAMUI ? ie : ke,
            ee = I.TS.IN_STEAMUI
              ? (Qr) => SteamClient.Auth.GetSteamGuardData(Qr)
              : null,
            ne = i(),
            rr = _e({
              transport: t,
              platform: b,
              onSuccess: l,
              refreshInfo: v,
              onDeviceDetails: fe,
              onGetMachineAuth: ee,
              defaultAccountName: F,
              secureComputer: E,
              isProbablySharedPC: tr,
              onShowAgreement: kr,
            }),
            te = Ze(),
            U = (0, P.useId)();
          if (w != null && w != g.R)
            return (0, d.jsx)("div", {
              className: j().Login,
              children: (0, d.jsx)(at, {
                reset: () => window.location.reload(),
                failure: W.eF.Generic,
                errorReference: w.toString(),
                extendedErrorMessage: rr.password.strExtendedErrorMessage,
              }),
            });
          const R = !(0, I.Y2)();
          if (!rr.bInPasswordFlow) {
            const Qr = (0, d.jsxs)("div", {
              className: (0, Sr.A)(j().SideBySide, te && j().Embedded),
              children: [
                (0, d.jsx)(B, {
                  strAccountName: rr.strAccountName,
                  onAccountNameChange: rr.onAccountNameChange,
                  strPassword: rr.strPassword,
                  onPasswordChange: rr.onPasswordChange,
                  bRememberMe: rr.bRememberMe,
                  onRememberMeChange: rr.onRememberMeChange,
                  onSubmit: rr.onPasswordSubmit,
                  status: rr.password.eStatus,
                  autoFocus: u,
                  secureComputer: E,
                  refreshInfo: c.refreshInfo,
                }),
                R &&
                  (0, d.jsx)(S, {
                    transport: t,
                    onQRStatusChange: rr.onQRStatusChange,
                    onComplete: rr.onComplete,
                    platform: b,
                    refreshInfo: v,
                  }),
              ],
            });
            if (te) {
              const Ne = I.TS.IN_STEAMUI,
                pe = Ne ? I.TS.LAUNCHER_TYPE : void 0;
              return (0, d.jsxs)(xe, {
                className: (0, Sr.A)(j().EmbeddedRoot, Ne && j().InClient),
                children: [
                  !Ne && !1,
                  !c.refreshInfo &&
                    (0, d.jsx)(It, {
                      realm: I.TS.EREALM,
                      launcherType: pe,
                      className: j().HeaderLogo,
                      onBack: c.onBack,
                    }),
                  (0, d.jsx)(n, { refreshInfo: v }),
                  Qr,
                  (0, d.jsxs)("div", {
                    className: (0, Sr.A)(
                      j().EmbeddedRootFooter,
                      Ne && j().InClient,
                    ),
                    children: [
                      (0, d.jsx)(mt, { variant: c.helpLinkVariant }),
                      (0, d.jsx)(Et, {
                        launcherType: pe,
                        variant: H,
                        redirectUrl: qr,
                      }),
                    ],
                  }),
                ],
              });
            }
            const Se = (0, d.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, d.jsx)("h2", {
                  className: j().PrimaryHeader,
                  id: U,
                  children: c.refreshInfo
                    ? (0, x.we)("#Login_RefreshSignIn")
                    : (0, x.we)("#Login_SignInTitle"),
                }),
                (0, d.jsx)(n, { refreshInfo: c.refreshInfo }),
              ],
            });
            return (0, d.jsxs)(Te, {
              title: Se,
              titleId: U,
              children: [ne && (0, d.jsx)(f, {}), Qr],
            });
          }
          const lr = rr.password.eStatus;
          switch (lr) {
            case xr:
              return c.renderLoading
                ? (0, d.jsx)(d.Fragment, { children: c.renderLoading() })
                : (0, d.jsx)($t, {});
            case mr:
            case Rr:
            case Br:
            case Mr: {
              (0, D.wT)(
                !!rr.password.strAccountName,
                "Missing account name in login session for status",
                lr,
              );
              const Qr = lr === mr || lr === Rr;
              return (0, d.jsx)(Tt, {
                type: Qr ? "mobile" : "email",
                onSubmitCode: rr.password.addCode,
                status: lr,
                associatedLabel: rr.password.strConfirmationAssociatedMessage,
                accountName: rr.password.strAccountName,
                onBack: rr.password.goBack,
                onCodeHelp: c.onCodeHelp,
              });
            }
            case or:
            case br: {
              (0, D.wT)(
                !!rr.password.strAccountName,
                "Missing account name in login session for status",
                lr,
              );
              const Qr = lr === or;
              return (0, d.jsx)(Rt, {
                type: Qr ? "mobile" : "email",
                accountName: rr.password.strAccountName,
                onUseCodeOverride: rr.password.useCodeOverride,
                onCodeHelp: c.onCodeHelp,
              });
            }
            case Ur:
              return (0, d.jsx)(Xt, { reset: rr.password.reset });
            case Wr:
              return (0, d.jsx)(at, {
                reset: rr.password.reset,
                failure: rr.password.eFailureState,
                onRequestOffline: rr.onTryOffline,
                errorReference: rr.password.strErrorReference,
                extendedErrorMessage: rr.password.strExtendedErrorMessage,
              });
            case Nr:
              return (0, d.jsx)(Te, { compact: !0, children: o() });
            default:
              return (
                (0, wr.ZI)(`Unknown Phase: ${lr}`),
                (0, d.jsx)(at, {
                  reset: rr.password.reset,
                  failure: W.eF.Generic,
                  onRequestOffline: rr.onTryOffline,
                  errorReference: rr.password.strErrorReference,
                  extendedErrorMessage: rr.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function n(c) {
          if (!c.refreshInfo) return null;
          let t;
          switch (c.refreshInfo?.reason ?? g.zi) {
            case g.zi:
            case g.Vr:
            default:
              t = "#Login_RefreshReason_Generic";
              break;
            case g.KH:
              t = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case g.CF:
              t = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case g.Um:
              t = "#Login_RefreshReason_InvalidPassword";
              break;
            case g.fY:
              t = "#Login_RefreshReason_Revoked";
              break;
            case g.ob:
              t = "#Login_RefreshReason_Expired";
              break;
            case g.cr:
              t = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case g.uN:
              t = "#Login_RefreshReason_AccountDisabled";
              break;
            case g.sG:
              t = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case g.h_:
              t = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, d.jsxs)("div", {
            className: j().RefreshReasonContainer,
            children: [
              (0, d.jsx)("div", {
                className: j().RefreshTitle,
                children: (0, x.we)("#Login_RefreshSignIn"),
              }),
              (0, d.jsx)("div", {
                className: j().RefreshReason,
                children: (0, x.we)(t),
              }),
            ],
          });
        }
        function f() {
          return (0, d.jsx)("div", {
            className: j().ConfirmCredntialsNag,
            children: (0, x.we)("#Login_ConfirmCredentials"),
          });
        }
        function B(c) {
          const {
              onSubmit: t,
              status: l,
              autoFocus: b,
              refreshInfo: u,
              strAccountName: v,
              onAccountNameChange: o,
              strPassword: w,
              onPasswordChange: H,
              bRememberMe: F,
              onRememberMeChange: E,
              secureComputer: tr = !0,
            } = c,
            [kr, qr] = (0, P.useState)(!1),
            fe = Ze(),
            ee = ni(),
            ne = () => {
              t().then(() => {
                ee() && qr(!1);
              });
            },
            rr = l === Or || l === xr,
            te = l === pr && !kr,
            U = te
              ? (0, d.jsx)(pt, {
                  children: (0, x.we)("#Login_CheckCredentials"),
                })
              : (0, d.jsx)(pt, { children: "\xA0" }),
            R = b && !v,
            lr = b && !!v,
            Qr = !!c.refreshInfo,
            Se = (0, P.useId)(),
            Ne = (0, P.useId)();
          return (0, d.jsxs)(Pt, {
            onSubmit: ne,
            className: j().LoginForm,
            children: [
              (0, d.jsx)(Xe, {
                tone: te ? "danger" : void 0,
                label: (0, d.jsx)(ae, {
                  highlight: !0,
                  inputId: Se,
                  children: (0, x.we)("#Login_SignIn_WithAccountName"),
                }),
                value: v,
                onChange: (pe) => {
                  qr(!0), o(pe);
                },
                autoFocus: R,
                disabled: Qr,
                id: Se,
              }),
              (0, d.jsx)(Xe, {
                tone: te ? "danger" : void 0,
                label: (0, d.jsx)(ae, {
                  inputId: Ne,
                  children: (0, x.we)("#Login_Password"),
                }),
                value: w,
                onChange: (pe) => {
                  qr(!0), H(pe);
                },
                type: "password",
                autoFocus: lr,
                id: Ne,
              }),
              tr
                ? (0, d.jsx)(Qe.he, {
                    toolTipContent: (0, x.we)("#Login_RememberMe_Tooltip"),
                    direction: "bottom",
                    children: (0, d.jsx)(Ee, {
                      label: (0, x.we)("#Login_RememberMe_Short"),
                      value: F,
                      onChange: E,
                    }),
                  })
                : (0, d.jsx)("div", {
                    className: j().InsecureComputer,
                    children: (0, x.we)("#Login_InsecureComputer"),
                  }),
              (0, d.jsx)(Zt, { loading: rr, refreshLogin: Qr }),
              U,
              !fe &&
                (0, d.jsx)(ze, {
                  href: `${I.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, x.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const M = 700;
        function S(c) {
          const t = (0, Ie.R7)(),
            l = () => t.ownerWindow.screen.width < M,
            [b, u] = (0, P.useState)(l());
          return (
            (0, _.l6)(t.ownerWindow, "resize", () => {
              u(l());
            }),
            (0, d.jsx)("div", {
              className: j().QRSection,
              children: b ? (0, d.jsx)(Ir, { ...c }) : (0, d.jsx)(dr, { ...c }),
            })
          );
        }
        function p(c) {
          const t =
            I.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(c.redirectURL);
          return (0, d.jsx)("div", {
            className: j().GuestLayout,
            children: (0, d.jsx)(Te, {
              compact: !0,
              children: (0, d.jsxs)("div", {
                className: j().GuestContainer,
                children: [
                  (0, d.jsx)("div", {
                    className: j().GuestText,
                    children: (0, x.oW)(
                      "#Login_Guest",
                      (0, d.jsx)("a", {
                        href: `${t}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, d.jsx)("a", {
                    className: j().GuestLink,
                    href: `${t}`,
                    children: (0, d.jsx)("button", {
                      className: j().GuestButton,
                      children: (0, x.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function dr(c) {
          return (0, d.jsx)(se, { ...c });
        }
        function Ir(c) {
          const [t, l] = (0, P.useState)(!1);
          return t
            ? (0, d.jsx)(se, { ...c, bShowHideButton: !0, setShowQR: l })
            : (0, d.jsx)(Gr, { setShowQR: l });
        }
        function Gr(c) {
          return (0, d.jsxs)("div", {
            className: j().MessagingContainer,
            children: [
              (0, d.jsx)("div", {
                className: j().MessagingTag,
                children: (0, x.we)("#Login_MobileFlow_New"),
              }),
              (0, d.jsx)("div", {
                className: j().MessagingSubtitle,
                children: (0, d.jsx)("div", {
                  className: j().MessagingSubtitle,
                  children: (0, x.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, d.jsx)("button", {
                type: "button",
                className: j().MessagingButton,
                onClick: () => c.setShowQR(!0),
                children: (0, x.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, d.jsx)("a", {
                href: `${I.TS.STORE_BASE_URL}mobile`,
                className: j().MessagingLink,
                children: (0, x.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function se(c) {
          const {
            onQRStatusChange: t,
            transport: l,
            onComplete: b,
            platform: u,
            refreshInfo: v,
            bShowHideButton: o = !1,
            setShowQR: w,
          } = c;
          return (0, d.jsxs)("div", {
            className: j().QRCodeContainer,
            children: [
              (0, d.jsx)(ae, {
                highlight: !0,
                children: (0, x.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, d.jsx)("div", {
                className: j().QR,
                children: (0, d.jsx)(lt, {
                  onStatusChange: t,
                  transport: l,
                  onComplete: b,
                  platform: u,
                  refreshInfo: v,
                }),
              }),
              o &&
                w &&
                (0, d.jsx)("button", {
                  type: "button",
                  className: j().QRHideLink,
                  onClick: () => w(!1),
                  children: (0, x.we)("#Button_Hide"),
                }),
              (0, d.jsx)("div", {
                className: j().UseMobileAppForQR,
                children: (0, x.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, d.jsx)(ze, {
                    href: `${I.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function We() {
          const c = "bShowLoginQR",
            [t, l] = useState(localStorage?.getItem(c) === "1"),
            b = useCallback((u) => {
              l(u),
                u ? localStorage?.setItem(c, "1") : localStorage?.removeItem(c);
            }, []);
          return [t, b];
        }
        function Xe(c) {
          const { label: t, error: l, tone: b, autoFocus: u, id: v, ...o } = c,
            w = b ?? (l ? "danger" : void 0);
          return (0, d.jsxs)("div", {
            className: j().TextField,
            children: [
              typeof t == "string"
                ? (0, d.jsx)(ae, { inputId: v, children: t })
                : t,
              l && (0, d.jsx)(Re, { type: "error", children: l }),
              (0, d.jsx)(ye, { autoFocus: u, tone: w, id: v, ...o }),
            ],
          });
        }
        function ae(c) {
          const { children: t, inputId: l, highlight: b } = c;
          return (0, d.jsx)("label", {
            className: (0, Sr.A)(j().FieldLabel, b && j().Highlight),
            htmlFor: l,
            children: t,
          });
        }
        function ye(c) {
          const {
            value: t,
            onChange: l,
            type: b = "text",
            tone: u,
            className: v,
            autoFocus: o,
            disabled: w,
            id: H,
          } = c;
          return (0, d.jsx)("input", {
            value: t,
            type: b,
            autoFocus: o,
            onChange: (F) => l(F.target.value),
            className: (0, Sr.A)(
              j().TextInput,
              u === "danger" && j().Danger,
              v,
            ),
            disabled: w,
            id: H,
          });
        }
        function Re(c) {
          const { children: t, type: l } = c;
          return (0, d.jsx)("div", {
            className: (0, Sr.A)(j().FieldHint, l === "error" && j().Error),
            children: t,
          });
        }
        function Ee(c) {
          const { label: t, onChange: l, value: b } = c;
          let u = () => {
            l && l(!b);
          };
          const v = (0, P.useId)();
          return (0, d.jsxs)("div", {
            role: "presentation",
            className: j().CheckboxField,
            onClick: u,
            onKeyPress: (o) => {
              o.key == " " && (u(), o.preventDefault());
            },
            children: [
              (0, d.jsx)(st, { labelledBy: v, value: b }),
              (0, d.jsx)("label", {
                id: v,
                className: j().CheckboxFieldLabel,
                children: t,
              }),
            ],
          });
        }
        function st(c) {
          const { value: t, labelledBy: l } = c;
          return (0, d.jsx)("div", {
            tabIndex: 0,
            className: j().Checkbox,
            "aria-labelledby": l,
            role: "checkbox",
            "aria-checked": t,
            children:
              t &&
              (0, d.jsx)("div", {
                className: j().Check,
                children: (0, d.jsx)(oe.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function Zt(c) {
          const { refreshLogin: t, ...l } = c;
          return t &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, d.jsx)(Jt, {})
            : (0, d.jsx)(Vt, { ...l });
        }
        function Vt(c) {
          return (0, d.jsx)("div", {
            className: j().SignInButtonContainer,
            children: (0, d.jsx)(Kt, {
              ...c,
              children: (0, x.we)("#Login_SignIn"),
            }),
          });
        }
        function Jt() {
          const c = () => SteamClient.User.StartShutdown(!0);
          return (0, d.jsxs)("div", {
            className: j().RefreshButtonContainer,
            children: [
              (0, d.jsx)("button", {
                className: j().SubmitButton,
                type: "submit",
                children: (0, x.we)("#Login_SignIn"),
              }),
              (0, d.jsx)("button", {
                className: j().RefreshQuitButton,
                onClick: c,
                children: (0, x.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function Kt(c) {
          return (0, d.jsx)(Nt, { type: "submit", ...c });
        }
        function Nt(c) {
          const {
              className: t,
              loading: l,
              disabled: b,
              children: u,
              ...v
            } = c,
            o = b || l;
          return (0, d.jsxs)("button", {
            className: (0, Sr.A)(j().SubmitButton, l && j().Loading, t),
            disabled: o,
            ...v,
            children: [
              u,
              l &&
                (0, d.jsx)("div", {
                  className: j().LoadingContainer,
                  children: (0, d.jsx)(ht, { size: "small" }),
                }),
            ],
          });
        }
        function pt(c) {
          const t = c.children || "\xA0";
          return (0, d.jsx)("div", { className: j().FormError, children: t });
        }
        function $t() {
          return (0, d.jsx)(Te, {
            compact: !0,
            children: (0, d.jsxs)(xe, {
              alignItems: "center",
              className: (0, Sr.A)(
                j().WaitingForTokenContainer,
                I.TS.IN_STEAMUI && j().Client,
              ),
              children: [
                (0, d.jsx)(He.t, { size: "xlarge" }),
                (0, d.jsx)("div", {
                  className: (0, Sr.A)(j().Description),
                  children: (0, x.we)(
                    I.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function ht(c) {
          const { size: t } = c;
          return (0, d.jsx)("div", {
            className: (0, Sr.A)(
              j().LoadingSpinner,
              t == "small" && j().Small,
              (t == "medium" || !t) && j().Medium,
              t == "large" && j().Large,
            ),
          });
        }
        function Yt(c) {
          return (0, d.jsx)("div", {
            className: j().OfferOffline,
            children: (0, d.jsx)("button", {
              className: j().OfferOfflineButton,
              onClick: c.onRequestOffline,
              children: (0, x.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function at(c) {
          const {
              reset: t,
              failure: l,
              onRequestOffline: b,
              errorReference: u,
              extendedErrorMessage: v,
            } = c,
            { title: o, description: w } = rt(l, v),
            H = I.TS.IN_STEAMUI && l == W.eF.Network;
          return (0, d.jsxs)(Te, {
            compact: !0,
            children: [
              (0, d.jsxs)(xe, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, d.jsx)("div", {
                    className: j().FailureTitle,
                    children: o,
                  }),
                  (0, d.jsx)("div", {
                    className: j().FailureDescription,
                    children: w,
                  }),
                  H &&
                    (0, d.jsx)("div", {
                      className: j().FailureDescription,
                      children: (0, x.we)("#Login_GoOffline_Description"),
                    }),
                  (0, d.jsxs)(dt, {
                    className: j().FailureButtons,
                    children: [
                      (0, d.jsx)(Nt, {
                        className: j().TryAgainButton,
                        onClick: t,
                        children: (0, x.we)("#Button_Retry"),
                      }),
                      H && b && (0, d.jsx)(Yt, { onRequestOffline: b }),
                    ],
                  }),
                ],
              }),
              u &&
                (0, d.jsx)("div", {
                  className: j().MutedErrorReference,
                  children: (0, x.we)("#Login_Error_Reference", u),
                }),
            ],
          });
        }
        function Xt(c) {
          const { reset: t } = c;
          return (0, d.jsx)(at, { reset: t, failure: W.eF.Generic });
        }
        function Tt(c) {
          const {
              type: t,
              onSubmitCode: l,
              status: b,
              accountName: u,
              associatedLabel: v,
              onBack: o,
            } = c,
            [w, H] = (0, P.useState)([]),
            [F, E] = (0, P.useState)(!1),
            [tr, kr] = (0, P.useState)(!1),
            [qr, fe] = (0, P.useState)(!1),
            [ee, ne] = (0, P.useState)(0),
            rr = t === "mobile",
            te = w.join(""),
            U = Hr(te, qr),
            R = (ft) => {
              kr(!0),
                l(ft).then(() => {
                  E(!1), kr(!1);
                });
            },
            lr = (ft) => {
              F || E(!0), H(ft);
              const Dt = ft.join("");
              Hr(Dt, qr) && R(Dt);
            },
            Qr = () => {
              U && R(te);
            },
            Se = () => {
              fe(!qr), H([]), l(""), ne(ee + 1);
            },
            Ne = !F && (b === Rr || b === Mr);
          let pe, ct;
          return (
            qr
              ? t === "mobile"
                ? ((ct = (0, d.jsx)(Ht, {})), (pe = "#Login_UseMobileCode"))
                : ((ct = (0, d.jsx)(Ht, {})), (pe = "#Login_UseEmailCode"))
              : ((ct =
                  t === "mobile"
                    ? (0, d.jsx)(Qt, {})
                    : (0, d.jsx)(qt, { emailAddress: v })),
                (pe = "#Login_UseBackupCode")),
            (0, d.jsx)(Te, {
              title: (0, d.jsx)(It, {}),
              compact: !0,
              children: (0, d.jsx)(Pt, {
                onSubmit: Qr,
                children: (0, d.jsxs)(xe, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, d.jsx)(Ft, { type: t, accountName: u }),
                    (0, d.jsxs)("div", {
                      className: j().ConfirmationEntryContainer,
                      children: [
                        (0, d.jsxs)(xe, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            Ne &&
                              (0, d.jsx)(pt, {
                                children: (0, x.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, d.jsx)(
                              At,
                              {
                                value: w,
                                onChange: lr,
                                tone: Ne ? "danger" : void 0,
                                loading: tr,
                                backupCode: qr,
                              },
                              ee,
                            ),
                          ],
                        }),
                        ct,
                      ],
                    }),
                    rr &&
                      (0, d.jsx)(ze, {
                        onClick: Se,
                        align: "center",
                        children: (0, x.we)(pe),
                      }),
                    (0, d.jsx)(Ut, { type: t, onCodeHelp: c.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function Ut(c) {
          if ((0, Oe.q)()) return null;
          let t, l;
          return (
            c.type === "mobile"
              ? ((t = `${I.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (l = (0, x.we)("#Login_Help_AccessMobileApp")))
              : ((t = `${I.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (l = (0, x.we)("#Login_Help_AccessEmail"))),
            c.onCodeHelp
              ? (0, d.jsx)(ze, {
                  onClick: () => c.onCodeHelp(t),
                  align: "center",
                  children: l,
                })
              : (0, d.jsx)(ze, { href: t, align: "center", children: l })
          );
        }
        function Ht() {
          return (0, d.jsx)(dt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: j().EnterBackupCodeContainer,
            children: (0, d.jsxs)(xe, {
              children: [
                (0, d.jsx)("div", {
                  className: j().EnterCodeFromMobile,
                  children: (0, x.we)("#Login_EnterBackupCode"),
                }),
                (0, d.jsx)("div", {
                  className: j().Label,
                  children: (0, x.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function Qt() {
          return (0, d.jsxs)(dt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: j().EnterCodeFromMobileContainer,
            children: [
              (0, d.jsx)("div", {
                className: j().EnterCodeFromMobile,
                children: (0, x.we)("#Login_EnterMobileCode"),
              }),
              (0, d.jsx)(kt, { className: j().AwaitingMobileConfIcon }),
            ],
          });
        }
        function qt(c) {
          return (0, d.jsxs)(dt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: j().EnterCodeFromEmailContainer,
            children: [
              (0, d.jsx)(_t, {
                align: "center",
                spacing: 6,
                children: (0, d.jsx)("div", {
                  className: j().EnterCodeFromEmail,
                  children: (0, x.PP)(
                    "#Login_EnterEmailCode",
                    (0, d.jsx)("span", {
                      className: j().EnterCodeEmailAddress,
                      children: c.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, d.jsx)(Ct, { className: j().AwaitingEmailConfIcon }),
            ],
          });
        }
        function Ft(c) {
          const { accountName: t, type: l } = c,
            b =
              l === "mobile"
                ? (0, x.we)("#Login_MobileProtectingAccount")
                : (0, x.we)("#Login_EmailProtectingAccount"),
            u = Ze();
          return (0, d.jsxs)("div", {
            className: j().ProtectingAccount,
            children: [
              (0, d.jsx)("div", {
                className: j().Label,
                children: (0, x.PP)(
                  "#Login_ActiveAccountName",
                  (0, d.jsx)("span", {
                    className: j().AccountName,
                    children: t,
                  }),
                ),
              }),
              !u &&
                (0, d.jsx)("div", { className: j().Description, children: b }),
            ],
          });
        }
        function Gt() {
          return (0, d.jsx)(xe, {
            alignItems: "center",
            children: (0, d.jsxs)("div", {
              className: j().ConfirmationContainer,
              children: [
                (0, d.jsx)("img", { src: (0, zt.YJ)(Je), alt: "" }),
                (0, d.jsx)("div", {
                  className: j().AwaitingMobileConfText,
                  children: (0, x.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function kt(c) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 33 49",
            fill: "currentColor",
            className: c.className,
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
        function Ct(c) {
          return (0, d.jsx)("svg", {
            viewBox: "0 0 58 56",
            fill: "none",
            className: c.className,
            children: (0, d.jsx)("path", {
              d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
              fill: "#1A99FF",
            }),
          });
        }
        function li(c) {
          const [t, l] = useSvgId();
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
                fill: c.phoneOutlineColor ?? "currentColor",
              }),
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z",
                fill: c.backgroundColor ?? "currentColor",
              }),
              jsx("g", {
                clipPath: l,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: c.qrCodeColor ?? "currentColor",
                }),
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: t,
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
        function mi(c) {
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
        function Rt(c) {
          const { type: t, accountName: l, onUseCodeOverride: b } = c,
            u = Ze(),
            v = (0, d.jsx)(Ut, { type: "mobile", onCodeHelp: c.onCodeHelp }),
            o = u
              ? (0, d.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, d.jsx)(ze, {
                    align: "center",
                    onClick: b,
                    children: (0, x.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, d.jsx)("div", {
                  className: j().EnterCodeInsteadLink,
                  children: (0, d.jsx)(ze, {
                    align: "center",
                    onClick: b,
                    children: (0, x.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, d.jsx)(Te, {
            title: (0, d.jsx)(It, {}),
            compact: !0,
            children: (0, d.jsxs)(xe, {
              gap: I.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, d.jsx)(Ft, { type: t, accountName: l }),
                (0, d.jsx)(Gt, {}),
                (0, d.jsxs)("div", {
                  className: j().LinkContainer,
                  children: [o, v],
                }),
              ],
            }),
          });
        }
        function ze(c) {
          const { children: t, align: l, inline: b } = c,
            u = (0, Sr.A)(j().TextLink, l === "center" && j().TextAlignCenter);
          if ("href" in c) {
            const v = I.TS.IN_STEAMUI
              ? `steam://openurl_external/${c.href}`
              : c.href;
            return (0, d.jsx)("a", { className: u, href: v, children: t });
          } else {
            const v = b ? "span" : "div";
            return (0, d.jsx)(v, {
              className: u,
              onClick: c.onClick,
              children: t,
            });
          }
        }
        function Pt(c) {
          const { onSubmit: t, children: l, className: b } = c,
            u = (v) => (v.preventDefault(), t(), !1);
          return (0, d.jsx)("form", { onSubmit: u, className: b, children: l });
        }
        function di(c) {
          const { align: t, ...l } = c;
          return jsx("div", {
            className: classnames(styles.Text, t === "center" && styles.Center),
            ...l,
          });
        }
        function xe(c) {
          const {
              alignItems: t,
              justifyContent: l,
              gap: b,
              className: u,
              ariaLabelledBy: v,
              children: o,
            } = c,
            w = (0, Sr.A)(
              j().FlexCol,
              t === "center" && j().AlignItemsCenter,
              l === "center" && j().JustifyContentCenter,
              u,
            ),
            H = b ? { gap: typeof b == "number" ? `${b}px` : b } : void 0;
          return (0, d.jsx)("section", {
            className: w,
            style: H,
            "aria-labelledby": v,
            children: o,
          });
        }
        function dt(c) {
          const {
              children: t,
              justifyContent: l,
              alignItems: b,
              className: u,
            } = c,
            v = {
              display: "flex",
              flexDirection: "row",
              justifyContent: l,
              alignItems: b,
            };
          return (0, d.jsx)("div", { style: v, className: u, children: t });
        }
        function At(c) {
          const { onChange: t, backupCode: l = !1, ...b } = c,
            u = (v) => {
              v = v.map((w) => w.toUpperCase());
              const o = v.join("").trim();
              be(o, l) && t(v);
            };
          return (0, d.jsx)(le, {
            length: Er(l),
            backupCode: l,
            onChange: u,
            autoFocus: !0,
            ...b,
            allowCharacter: (v) => /\w/g.test(v),
          });
        }
        function _t(c) {
          const { children: t, spacing: l = 0, align: b } = c;
          return (0, d.jsx)(xe, {
            alignItems: b,
            children: P.Children.map(t, (u, v) =>
              u
                ? (0, d.jsx)("div", {
                    style: v > 0 ? { paddingTop: `${l}px` } : void 0,
                    children: u,
                  })
                : null,
            )?.filter(Boolean),
          });
        }
        function Te(c) {
          const { title: t, titleId: l, children: b, compact: u } = c,
            v = Ze(),
            o = (0, P.useId)();
          return (0, d.jsxs)(xe, {
            gap: I.TS.IN_STEAMUI ? 0 : 32,
            className: (0, Sr.A)(
              j().StandardLayout,
              v && j().Embedded,
              u && j().Compact,
              I.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: l ?? o,
            children: [
              typeof t == "string"
                ? (0, d.jsx)("div", {
                    className: j().PrimaryHeader,
                    id: l ?? o,
                    children: t,
                  })
                : t,
              (0, d.jsx)("div", { className: j().FormContainer, children: b }),
            ],
          });
        }
        function It(c) {
          const {
            realm: t = I.TS.EREALM,
            launcherType: l = I.TS.IN_STEAMUI ? I.TS.LAUNCHER_TYPE : void 0,
            className: b = j().HeaderLogo,
          } = c;
          return l === y.A2g
            ? (0, d.jsx)("div", { className: b })
            : (0, d.jsxs)("div", {
                className: j().LogoContainer,
                children: [
                  (0, d.jsx)(ri, { onBack: c.onBack }),
                  t !== _r.TU.k_ESteamRealmChina
                    ? (0, d.jsx)(ei, { className: b })
                    : (0, d.jsx)(ti, { className: b }),
                  " ",
                ],
              });
        }
        function ri(c) {
          return c.onBack
            ? (0, d.jsx)("button", {
                type: "button",
                className: j().BackArrowContainer,
                onClick: c.onBack,
                "aria-label": (0, x.we)("#Button_Back"),
                children: (0, d.jsx)(oe.Q38, { className: j().BackArrow }),
              })
            : null;
        }
        function ei(c) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: c.className,
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
        function ti(c) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 232.73 46.07",
            xmlns: "http://www.w3.org/2000/svg",
            className: c.className,
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
        function ii() {
          return (0, d.jsx)(xe, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, d.jsx)(He.t, {}),
          });
        }
        function si(c) {
          const t = (0, P.useRef)(c);
          t.current = c;
          const [l, b] = (0, P.useState)(!0),
            u = (0, he.zy)();
          return (
            (0, P.useEffect)(() => {
              if (new URLSearchParams(u.search).get("need_password")) {
                b(!1);
                return;
              }
              if (!t.current) {
                b(!1);
                return;
              }
              ai(t.current)
                .then((o) => {
                  b(o);
                })
                .catch((o) => {
                  (0, wr.tH)("PerformRefresh exception", o), b(!1);
                });
            }, [t, u.search]),
            l
          );
        }
        async function ai(c) {
          const t = new FormData();
          t.append("redir", c);
          const l = `${I.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            b = await L().post(l, t, { timeout: 1e4, withCredentials: !0 });
          if (b.status !== 200 || !b?.data?.success) return !1;
          const { success: u, login_url: v, error: o, ...w } = b.data,
            H = new FormData();
          Object.entries(w).forEach(([tr, kr]) => H.append(tr, kr));
          const F = await L().post(v, H),
            E = F.status === 200 && F.data.result === g.R;
          return E && window.location.assign(c), E;
        }
        function ni() {
          const c = (0, P.useRef)(!0);
          return (
            (0, P.useEffect)(
              () => () => {
                c.current = !1;
              },
              [c],
            ),
            (0, P.useCallback)(() => c.current, [c])
          );
        }
      },
      95039: (ue, Ue, h) => {
        "use strict";
        h.d(Ue, { fH: () => _r, nW: () => y });
        const d = null,
          _r = 0,
          y = 1;
      },
      94276: (ue, Ue, h) => {
        "use strict";
        h.d(Ue, {
          kX: () => $e,
          iP: () => $,
          R9: () => K,
          tS: () => Z,
          qu: () => V,
          Ev: () => nr,
          Qc: () => gr,
          TY: () => d,
          SS: () => _r,
        });
        var d = {};
        h.r(d),
          h.d(d, {
            bH: () => je,
            x0: () => Cr,
            Xs: () => Oe,
            $Y: () => re,
            ig: () => Ve,
            WM: () => Ie,
            oP: () => Je,
          });
        var _r = {};
        h.r(_r), h.d(_r, { w0: () => ve, tS: () => le });
        var y = h(80613),
          g = h.n(y),
          e = h(75245),
          L = h(35038),
          P = h(95039),
          he = h(40164);
        const Je = 0,
          Ie = 1,
          Oe = 2,
          je = 3,
          Cr = 4,
          re = 5,
          Ve = 6,
          Sr = 7,
          Ke = 0,
          ve = 1,
          le = 2,
          oe = 3,
          Ae = 0,
          He = 1,
          Qe = 2,
          D = 3,
          x = 4,
          _ = 5,
          I = 6,
          W = 7;
        function Jr(O) {
          return "unknown ECaptchaAnnotation ( " + O + " )";
        }
        function Tr(O) {
          return "unknown EAuthSessionSecurityHistory ( " + O + " )";
        }
        function Kr(O) {
          return "unknown EAuthenticationType ( " + O + " )";
        }
        function Le(O) {
          return "unknown EAuthSessionGuardType ( " + O + " )";
        }
        function wr(O) {
          return "unknown EAuthTokenPlatformType ( " + O + " )";
        }
        function cr(O) {
          return "unknown EAuthTokenAppType ( " + O + " )";
        }
        function me(O) {
          return "unknown ETokenRenewalType ( " + O + " )";
        }
        function qe(O) {
          return "unknown EAuthTokenRevokeAction ( " + O + " )";
        }
        function A(O) {
          return "unknown EAuthTokenState ( " + O + " )";
        }
        function N(O) {
          return "unknown ECaptchaUsage ( " + O + " )";
        }
        function m(O) {
          return "unknown ECaptchaType ( " + O + " )";
        }
        function gt(O) {
          return "unknown ECaptchaDifficulty ( " + O + " )";
        }
        function bt(O) {
          return "unknown ERiskLevel ( " + O + " )";
        }
        function $r(O) {
          return "unknown ETokenRiskFactor ( " + O + " )";
        }
        function Yr(O) {
          return "unknown EConfirmationState ( " + O + " )";
        }
        function yr(O) {
          return "unknown EConfirmationRequestType ( " + O + " )";
        }
        class V extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.account_name || e.Sg(V.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    account_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = e.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(V.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new V();
            return V.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(V.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(V.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request";
          }
        }
        class X extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.publickey_mod || e.Sg(X.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    publickey_mod: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    publickey_exp: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    timestamp: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = e.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(X.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new X();
            return X.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(X.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(X.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response";
          }
        }
        class Z extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.device_friendly_name || e.Sg(Z.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    os_type: { n: 3, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    gaming_device_type: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    client_count: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    machine_id: {
                      n: 6,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    app_type: { n: 7, br: e.qM.readEnum, bw: e.gp.writeEnum },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = e.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Z.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Z();
            return Z.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_DeviceDetails";
          }
        }
        class J extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.confirmation_type || e.Sg(J.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    confirmation_type: {
                      n: 1,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    associated_message: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = e.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(J.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new J();
            return J.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(J.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(J.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AllowedConfirmation";
          }
        }
        class K extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.device_friendly_name || e.Sg(K.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    device_details: { n: 3, c: Z },
                    website_id: {
                      n: 4,
                      d: "Unknown",
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = e.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(K.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new K();
            return K.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(K.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(K.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request";
          }
        }
        class T extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.client_id || e.Sg(T.M()),
              y.Message.initialize(this, r, 0, -1, [5], null);
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
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    challenge_url: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    request_id: {
                      n: 3,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    interval: { n: 4, br: e.qM.readFloat, bw: e.gp.writeFloat },
                    allowed_confirmations: { n: 5, c: J, r: !0, q: !0 },
                    version: { n: 6, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = e.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(T.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new T();
            return T.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(T.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(T.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Response";
          }
        }
        class $ extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.device_friendly_name || e.Sg($.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    account_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    encrypted_password: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    encryption_timestamp: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    remember_login: {
                      n: 5,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    platform_type: {
                      n: 6,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    persistence: {
                      n: 7,
                      d: P.nW,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    website_id: {
                      n: 8,
                      d: "Unknown",
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    device_details: { n: 9, c: Z },
                    guard_data: {
                      n: 10,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    language: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    qos_level: {
                      n: 12,
                      d: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT($.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new $();
            return $.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj($.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0($.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request";
          }
        }
        class Q extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.client_id || e.Sg(Q.M()),
              y.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    interval: { n: 3, br: e.qM.readFloat, bw: e.gp.writeFloat },
                    allowed_confirmations: { n: 4, c: J, r: !0, q: !0 },
                    steamid: {
                      n: 5,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    weak_token: {
                      n: 6,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    extended_error_message: {
                      n: 8,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = e.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Q.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Q();
            return Q.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response";
          }
        }
        class nr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.client_id || e.Sg(nr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    token_to_revoke: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = e.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(nr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new nr();
            return nr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request";
          }
        }
        class q extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.new_client_id || e.Sg(q.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    new_client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    new_challenge_url: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    refresh_token: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    access_token: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    had_remote_interaction: {
                      n: 5,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    account_name: {
                      n: 6,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    new_guard_data: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 8,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = e.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(q.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new q();
            return q.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response";
          }
        }
        class Y extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.client_id || e.Sg(Y.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = e.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Y.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Y();
            return Y.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Request";
          }
        }
        class G extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.ip || e.Sg(G.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    ip: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    geoloc: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
                    city: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    state: { n: 4, br: e.qM.readString, bw: e.gp.writeString },
                    country: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    platform_type: {
                      n: 6,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    device_friendly_name: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    version: { n: 8, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    login_history: {
                      n: 9,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    requestor_location_mismatch: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    high_usage_login: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    requested_persistence: {
                      n: 12,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    device_trust: {
                      n: 13,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    app_type: { n: 14, br: e.qM.readEnum, bw: e.gp.writeEnum },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = e.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(G.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new G();
            return G.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(G.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(G.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response";
          }
        }
        class k extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.client_id || e.Sg(k.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = e.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(k.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new k();
            return k.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(k.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(k.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Request";
          }
        }
        class C extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.location_confirmer || e.Sg(C.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    location_confirmer: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    location_requestor: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    location_other: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    platform_type: {
                      n: 4,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = e.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(C.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new C();
            return C.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(C.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(C.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Response";
          }
        }
        class fr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.client_id || e.Sg(fr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    results: { n: 2, c: vr },
                    selected_action: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    did_confirm_login: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = e.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(fr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new fr();
            return fr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification";
          }
        }
        class vr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.platform || e.Sg(vr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    platform: { n: 1, br: e.qM.readBool, bw: e.gp.writeBool },
                    location: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    action: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = e.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(vr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new vr();
            return vr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(vr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(vr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
          }
        }
        class Be extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Be.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Be();
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Be();
            return Be.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Request";
          }
        }
        class Fr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.client_ids || e.Sg(Fr.M()),
              y.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    client_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = e.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Fr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Fr();
            return Fr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response";
          }
        }
        class ar extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.version || e.Sg(ar.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    version: { n: 1, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    client_id: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    steamid: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    signature: {
                      n: 4,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    confirm: {
                      n: 5,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    persistence: {
                      n: 6,
                      d: P.nW,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = e.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(ar.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new ar();
            return ar.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
          }
        }
        class Me extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Me.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Me();
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Me();
            return Me.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
          }
        }
        class gr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.client_id || e.Sg(gr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    code: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    code_type: { n: 4, br: e.qM.readEnum, bw: e.gp.writeEnum },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = e.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(gr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new gr();
            return gr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
          }
        }
        class Or extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.agreement_session_url || e.Sg(Or.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    agreement_session_url: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = e.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Or.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Or();
            return Or.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
          }
        }
        class pr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.refresh_token || e.Sg(pr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    refresh_token: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    renewal_type: {
                      n: 3,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = e.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(pr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new pr();
            return pr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(pr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(pr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Request";
          }
        }
        class Br extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.access_token || e.Sg(Br.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    access_token: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    refresh_token: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = e.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Br.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Br();
            return Br.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response";
          }
        }
        class br extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.include_revoked || e.Sg(br.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    include_revoked: {
                      n: 1,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = e.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(br.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new br();
            return br.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Request";
          }
        }
        class mr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.refresh_tokens || e.Sg(mr.M()),
              y.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    refresh_tokens: { n: 1, c: Lr, r: !0, q: !0 },
                    requesting_token: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = e.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(mr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new mr();
            return mr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response";
          }
        }
        class or extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.time || e.Sg(or.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 2, c: he.kK },
                    locale: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    country: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    state: { n: 5, br: e.qM.readString, bw: e.gp.writeString },
                    city: { n: 6, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = e.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(or.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new or();
            return or.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
          }
        }
        class Lr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.token_id || e.Sg(Lr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    logged_in: { n: 5, br: e.qM.readBool, bw: e.gp.writeBool },
                    os_platform: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    auth_type: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    first_seen: { n: 9, c: or },
                    last_seen: { n: 10, c: or },
                    os_type: { n: 11, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    authentication_type: {
                      n: 12,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    effective_token_state: {
                      n: 13,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = e.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Lr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Lr();
            return Lr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
          }
        }
        class zr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.token || e.Sg(zr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    token: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    revoke_action: {
                      n: 2,
                      d: He,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = e.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(zr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new zr();
            return zr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Request";
          }
        }
        class we extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return we.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new we();
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new we();
            return we.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return we.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Response";
          }
        }
        class Mr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.token_id || e.Sg(Mr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    revoke_action: {
                      n: 3,
                      d: He,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    signature: {
                      n: 4,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = e.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Mr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Mr();
            return Mr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Request";
          }
        }
        class Rr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Rr();
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Rr();
            return Rr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response";
          }
        }
        class hr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.token_id || e.Sg(hr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    token_state: {
                      n: 5,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    owner_steamid: {
                      n: 6,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    os_platform: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    os_type: { n: 8, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    auth_type: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    first_seen: { n: 11, c: xr },
                    last_seen: { n: 12, c: xr },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = e.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(hr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new hr();
            return hr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription";
          }
        }
        class xr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.time || e.Sg(xr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 2, c: he.kK },
                    country: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    state: { n: 4, br: e.qM.readString, bw: e.gp.writeString },
                    city: { n: 5, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = e.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(xr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new xr();
            return xr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent";
          }
        }
        class Nr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.action || e.Sg(Nr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    action: { n: 1, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    time: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 3, c: he.kK },
                    actor: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = e.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Nr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Nr();
            return Nr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenAudit";
          }
        }
        class Wr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.steamid || e.Sg(Wr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    include_revoked_tokens: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = e.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Wr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Wr();
            return Wr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
          }
        }
        class Ur extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.refresh_tokens || e.Sg(Ur.M()),
              y.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    refresh_tokens: { n: 1, c: hr, r: !0, q: !0 },
                    last_token_reset: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = e.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Ur.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Ur();
            return Ur.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
          }
        }
        class sr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.token_id || e.Sg(sr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = e.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(sr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new sr();
            return sr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
          }
        }
        class Pr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.refresh_tokens || e.Sg(Pr.M()),
              y.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: { refresh_tokens: { n: 1, c: hr, r: !0, q: !0 } },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = e.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Pr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Pr();
            return Pr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Pr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Pr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
          }
        }
        class Xr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.token_id || e.Sg(Xr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = e.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Xr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Xr();
            return Xr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Request";
          }
        }
        class ge extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ge.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ge();
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new ge();
            return ge.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Response";
          }
        }
        class Dr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.token_id || e.Sg(Dr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = e.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Dr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Dr();
            return Dr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Request";
          }
        }
        class Zr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.history || e.Sg(Zr.M()),
              y.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: { history: { n: 1, c: Nr, r: !0, q: !0 } },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = e.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Zr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Zr();
            return Zr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response";
          }
        }
        class Er extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.steamid || e.Sg(Er.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    token_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = e.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Er.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Er();
            return Er.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Request";
          }
        }
        class be extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return be.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new be();
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new be();
            return be.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return be.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Response";
          }
        }
        class Hr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.appid || e.Sg(Hr.M()),
              y.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    minutes_remaining: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = e.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Hr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Hr();
            return Hr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_TimeRemaining";
          }
        }
        class ir extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.platform || e.Sg(ir.M()),
              y.Message.initialize(this, r, 0, -1, [2], null);
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
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = e.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new ir();
            return ir.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Request";
          }
        }
        class Vr extends y.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.entries || e.Sg(Vr.M()),
              y.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: { entries: { n: 2, c: Hr, r: !0, q: !0 } },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = e.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Vr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (g().BinaryReader)(r),
              z = new Vr();
            return Vr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Vr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (g().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Vr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (g().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response";
          }
        }
        var $e;
        ((O) => {
          function r(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.GetPasswordRSAPublicKey#1",
              (0, L.I8)(V, jr, er),
              X,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          O.GetPasswordRSAPublicKey = r;
          function a(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, L.I8)(K, jr, er),
              T,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          O.BeginAuthSessionViaQR = a;
          function z(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, L.I8)($, jr, er),
              Q,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          O.BeginAuthSessionViaCredentials = z;
          function Pe(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, L.I8)(nr, jr, er),
              q,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          O.PollAuthSessionStatus = Pe;
          function De(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, L.I8)(Y, jr, er),
              G,
              { ePrivilege: 1 },
            );
          }
          O.GetAuthSessionInfo = De;
          function de(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, L.I8)(k, jr, er),
              C,
              { ePrivilege: 1 },
            );
          }
          O.GetAuthSessionRiskInfo = de;
          function Ar(ur, jr) {
            return ur.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, L.I8)(fr, jr),
              { ePrivilege: 1 },
            );
          }
          O.NotifyRiskQuizResults = Ar;
          function ie(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, L.I8)(ar, jr, er),
              Me,
              { ePrivilege: 1 },
            );
          }
          O.UpdateAuthSessionWithMobileConfirmation = ie;
          function ke(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, L.I8)(gr, jr, er),
              Or,
              {
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          O.UpdateAuthSessionWithSteamGuardCode = ke;
          function _e(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, L.I8)(pr, jr, er),
              Br,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          O.GenerateAccessTokenForApp = _e;
          function rt(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, L.I8)(br, jr, er),
              mr,
              { ePrivilege: 1 },
            );
          }
          O.EnumerateTokens = rt;
          function et(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, L.I8)(Be, jr, er),
              Fr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          O.GetAuthSessionsForAccount = et;
          function j(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.RevokeToken#1",
              (0, L.I8)(zr, jr, er),
              we,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          O.RevokeToken = j;
          function tt(ur, jr, er) {
            return ur.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, L.I8)(Mr, jr, er),
              Rr,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          O.RevokeRefreshToken = tt;
        })($e || ($e = {}));
        var Ge;
        ((O) => {
          function r(de, Ar, ie) {
            return de.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, L.I8)(Wr, Ar, ie),
              Ur,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          O.QueryRefreshTokensByAccount = r;
          function a(de, Ar, ie) {
            return de.SendMsg(
              "AuthenticationSupport.QueryRefreshTokenByID#1",
              (0, L.I8)(sr, Ar, ie),
              Pr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          O.QueryRefreshTokenByID = a;
          function z(de, Ar, ie) {
            return de.SendMsg(
              "AuthenticationSupport.RevokeToken#1",
              (0, L.I8)(Xr, Ar, ie),
              ge,
              { ePrivilege: 5 },
            );
          }
          O.RevokeToken = z;
          function Pe(de, Ar, ie) {
            return de.SendMsg(
              "AuthenticationSupport.GetTokenHistory#1",
              (0, L.I8)(Dr, Ar, ie),
              Zr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          O.GetTokenHistory = Pe;
          function De(de, Ar, ie) {
            return de.SendMsg(
              "AuthenticationSupport.MarkTokenCompromised#1",
              (0, L.I8)(Er, Ar, ie),
              be,
              { ePrivilege: 5 },
            );
          }
          O.MarkTokenCompromised = De;
        })(Ge || (Ge = {}));
        var Fe;
        ((O) => {
          function r(a, z, Pe) {
            return a.SendMsg(
              "CloudGaming.GetTimeRemaining#1",
              (0, L.I8)(ir, z, Pe),
              Vr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          O.GetTimeRemaining = r;
        })(Fe || (Fe = {}));
      },
      78412: (ue) => {
        ue.exports = {
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
      15557: (ue) => {
        ue.exports = {
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
      5804: (ue) => {
        ue.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      9843: (ue) => {
        ue.exports = {
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
