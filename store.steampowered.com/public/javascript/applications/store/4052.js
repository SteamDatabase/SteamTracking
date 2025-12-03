/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4052],
  {
    21565: (e, t, r) => {
      r.d(t, {
        Ev: () => U,
        O6: () => a,
        Qc: () => K,
        R9: () => v,
        SS: () => o,
        TY: () => s,
        iP: () => O,
        kX: () => w,
        qu: () => F,
        tS: () => W,
        wv: () => l,
      });
      var i,
        n,
        a,
        s,
        o,
        c,
        u,
        m,
        l,
        d,
        g,
        _,
        B,
        b,
        y,
        M,
        w,
        p,
        f,
        z = r(80613),
        S = r.n(z),
        h = r(89068),
        R = r(56545),
        T = r(95679),
        k = r(36003);
      !(function (e) {
        (e[(e.k_ECaptchaAnnotationNone = 0)] = "k_ECaptchaAnnotationNone"),
          (e[(e.k_ECaptchaAnnotationLegitimate = 1)] =
            "k_ECaptchaAnnotationLegitimate"),
          (e[(e.k_ECaptchaAnnotationFraudulent = 2)] =
            "k_ECaptchaAnnotationFraudulent"),
          (e[(e.k_ECaptchaAnnotationUnspecified = 3)] =
            "k_ECaptchaAnnotationUnspecified");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_EAuthSessionSecurityHistory_Invalid = 0)] =
            "k_EAuthSessionSecurityHistory_Invalid"),
            (e[(e.k_EAuthSessionSecurityHistory_UsedPreviously = 1)] =
              "k_EAuthSessionSecurityHistory_UsedPreviously"),
            (e[(e.k_EAuthSessionSecurityHistory_NoPriorHistory = 2)] =
              "k_EAuthSessionSecurityHistory_NoPriorHistory");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_EAuthenticationType_Unknown = 0)] =
            "k_EAuthenticationType_Unknown"),
            (e[(e.k_EAuthenticationType_Password = 1)] =
              "k_EAuthenticationType_Password"),
            (e[(e.k_EAuthenticationType_QR = 2)] = "k_EAuthenticationType_QR"),
            (e[(e.k_EAuthenticationType_AccountCreation = 3)] =
              "k_EAuthenticationType_AccountCreation"),
            (e[(e.k_EAuthenticationType_GuestAccount = 4)] =
              "k_EAuthenticationType_GuestAccount");
        })(a || (a = {})),
        (function (e) {
          (e[(e.k_EAuthSessionGuardType_Unknown = 0)] =
            "k_EAuthSessionGuardType_Unknown"),
            (e[(e.k_EAuthSessionGuardType_None = 1)] =
              "k_EAuthSessionGuardType_None"),
            (e[(e.k_EAuthSessionGuardType_EmailCode = 2)] =
              "k_EAuthSessionGuardType_EmailCode"),
            (e[(e.k_EAuthSessionGuardType_DeviceCode = 3)] =
              "k_EAuthSessionGuardType_DeviceCode"),
            (e[(e.k_EAuthSessionGuardType_DeviceConfirmation = 4)] =
              "k_EAuthSessionGuardType_DeviceConfirmation"),
            (e[(e.k_EAuthSessionGuardType_EmailConfirmation = 5)] =
              "k_EAuthSessionGuardType_EmailConfirmation"),
            (e[(e.k_EAuthSessionGuardType_MachineToken = 6)] =
              "k_EAuthSessionGuardType_MachineToken"),
            (e[(e.k_EAuthSessionGuardType_LegacyMachineAuth = 7)] =
              "k_EAuthSessionGuardType_LegacyMachineAuth");
        })(s || (s = {})),
        (function (e) {
          (e[(e.k_EAuthTokenPlatformType_Unknown = 0)] =
            "k_EAuthTokenPlatformType_Unknown"),
            (e[(e.k_EAuthTokenPlatformType_SteamClient = 1)] =
              "k_EAuthTokenPlatformType_SteamClient"),
            (e[(e.k_EAuthTokenPlatformType_WebBrowser = 2)] =
              "k_EAuthTokenPlatformType_WebBrowser"),
            (e[(e.k_EAuthTokenPlatformType_MobileApp = 3)] =
              "k_EAuthTokenPlatformType_MobileApp");
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_EAuthTokenAppType_Unknown = 0)] =
            "k_EAuthTokenAppType_Unknown"),
            (e[(e.k_EAuthTokenAppType_Mobile_SteamApp = 1)] =
              "k_EAuthTokenAppType_Mobile_SteamApp"),
            (e[(e.k_EAuthTokenAppType_Mobile_ChatApp = 2)] =
              "k_EAuthTokenAppType_Mobile_ChatApp");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ETokenRenewalType_None = 0)] = "k_ETokenRenewalType_None"),
            (e[(e.k_ETokenRenewalType_Allow = 1)] =
              "k_ETokenRenewalType_Allow");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EAuthTokenRevokeLogout = 0)] = "k_EAuthTokenRevokeLogout"),
            (e[(e.k_EAuthTokenRevokePermanent = 1)] =
              "k_EAuthTokenRevokePermanent"),
            (e[(e.k_EAuthTokenRevokeReplaced = 2)] =
              "k_EAuthTokenRevokeReplaced"),
            (e[(e.k_EAuthTokenRevokeSupport = 3)] =
              "k_EAuthTokenRevokeSupport"),
            (e[(e.k_EAuthTokenRevokeConsume = 4)] =
              "k_EAuthTokenRevokeConsume"),
            (e[(e.k_EAuthTokenRevokeNonRememberedLogout = 5)] =
              "k_EAuthTokenRevokeNonRememberedLogout"),
            (e[(e.k_EAuthTokenRevokeNonRememberedPermanent = 6)] =
              "k_EAuthTokenRevokeNonRememberedPermanent"),
            (e[(e.k_EAuthTokenRevokeAutomatic = 7)] =
              "k_EAuthTokenRevokeAutomatic");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EAuthTokenState_Invalid = 0)] = "k_EAuthTokenState_Invalid"),
            (e[(e.k_EAuthTokenState_New = 1)] = "k_EAuthTokenState_New"),
            (e[(e.k_EAuthTokenState_Confirmed = 2)] =
              "k_EAuthTokenState_Confirmed"),
            (e[(e.k_EAuthTokenState_Issued = 3)] = "k_EAuthTokenState_Issued"),
            (e[(e.k_EAuthTokenState_Denied = 4)] = "k_EAuthTokenState_Denied"),
            (e[(e.k_EAuthTokenState_LoggedOut = 5)] =
              "k_EAuthTokenState_LoggedOut"),
            (e[(e.k_EAuthTokenState_Consumed = 6)] =
              "k_EAuthTokenState_Consumed"),
            (e[(e.k_EAuthTokenState_Revoked = 99)] =
              "k_EAuthTokenState_Revoked");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_ECaptchaUsageNone = 0)] = "k_ECaptchaUsageNone"),
            (e[(e.k_ECaptchaUsageGeneric = 1)] = "k_ECaptchaUsageGeneric"),
            (e[(e.k_ECaptchaUsageAccountCreation = 2)] =
              "k_ECaptchaUsageAccountCreation"),
            (e[(e.k_ECaptchaUsageHelpRequest = 3)] =
              "k_ECaptchaUsageHelpRequest"),
            (e[(e.k_ECaptchaUsageLogon = 4)] = "k_ECaptchaUsageLogon"),
            (e[(e.k_ECaptchaUsageChina = 5)] = "k_ECaptchaUsageChina"),
            (e[(e.k_ECaptchaUsageContactForm = 6)] =
              "k_ECaptchaUsageContactForm"),
            (e[(e.k_ECaptchaUsageRedeemGiftCard = 7)] =
              "k_ECaptchaUsageRedeemGiftCard"),
            (e[(e.k_ECaptchaUsageMax = 8)] = "k_ECaptchaUsageMax");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_ECaptchaTypeNone = 0)] = "k_ECaptchaTypeNone"),
            (e[(e.k_ECaptchaTypeLegacy = 1)] = "k_ECaptchaTypeLegacy"),
            (e[(e.k_ECaptchaTypeReCaptcha = 2)] = "k_ECaptchaTypeReCaptcha"),
            (e[(e.k_ECaptchaTypeHCaptcha = 3)] = "k_ECaptchaTypeHCaptcha"),
            (e[(e.k_ECaptchaTypeMax = 4)] = "k_ECaptchaTypeMax");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_ECaptchaDifficultyDefault = 0)] =
            "k_ECaptchaDifficultyDefault"),
            (e[(e.k_ECaptchaDifficultyLow = 1)] = "k_ECaptchaDifficultyLow"),
            (e[(e.k_ECaptchaDifficultyMedium = 2)] =
              "k_ECaptchaDifficultyMedium"),
            (e[(e.k_ECaptchaDifficultyHigh = 3)] = "k_ECaptchaDifficultyHigh");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ERiskUnknown = 1)] = "k_ERiskUnknown"),
            (e[(e.k_ERiskMedium = 2)] = "k_ERiskMedium"),
            (e[(e.k_ERiskHigh = 3)] = "k_ERiskHigh");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_ETokenRisk_ConfirmDistance = 1)] =
            "k_ETokenRisk_ConfirmDistance"),
            (e[(e.k_ETokenRisk_TokenLocation = 2)] =
              "k_ETokenRisk_TokenLocation"),
            (e[(e.k_ETokenRisk_FlaggedIP = 4)] = "k_ETokenRisk_FlaggedIP"),
            (e[(e.k_ETokenRisk_APICalls = 8)] = "k_ETokenRisk_APICalls");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EConfirmation_Unknown = 0)] = "k_EConfirmation_Unknown"),
            (e[(e.k_EConfirmation_Pending = 1)] = "k_EConfirmation_Pending"),
            (e[(e.k_EConfirmation_Approved = 2)] = "k_EConfirmation_Approved"),
            (e[(e.k_EConfirmation_Denied = 3)] = "k_EConfirmation_Denied"),
            (e[(e.k_EConfirmation_Expired = 4)] = "k_EConfirmation_Expired"),
            (e[(e.k_EConfirmation_Error = 5)] = "k_EConfirmation_Error");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_EConfirmationRequest_None = 0)] =
            "k_EConfirmationRequest_None"),
            (e[(e.k_EConfirmationRequest_Email = 1)] =
              "k_EConfirmationRequest_Email"),
            (e[(e.k_EConfirmationRequest_Mobile = 2)] =
              "k_EConfirmationRequest_Mobile");
        })(M || (M = {}));
      class F extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.account_name || h.Sg(F.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  account_name: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = h.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Request";
        }
      }
      class q extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.publickey_mod || h.Sg(q.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  publickey_mod: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  publickey_exp: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  timestamp: {
                    n: 3,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = h.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Response";
        }
      }
      class W extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.device_friendly_name || h.Sg(W.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  platform_type: {
                    n: 2,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  os_type: { n: 3, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                  gaming_device_type: {
                    n: 4,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  client_count: {
                    n: 5,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  machine_id: { n: 6, br: h.qM.readBytes, bw: h.gp.writeBytes },
                  app_type: { n: 7, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = h.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_DeviceDetails";
        }
      }
      class j extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.confirmation_type || h.Sg(j.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  confirmation_type: {
                    n: 1,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  associated_message: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = h.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AllowedConfirmation";
        }
      }
      class v extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.device_friendly_name || h.Sg(v.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  platform_type: {
                    n: 2,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  device_details: { n: 3, c: W },
                  website_id: {
                    n: 4,
                    d: "Unknown",
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = h.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Request";
        }
      }
      class C extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.client_id || h.Sg(C.M()),
            z.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  challenge_url: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  request_id: { n: 3, br: h.qM.readBytes, bw: h.gp.writeBytes },
                  interval: { n: 4, br: h.qM.readFloat, bw: h.gp.writeFloat },
                  allowed_confirmations: { n: 5, c: j, r: !0, q: !0 },
                  version: { n: 6, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Response";
        }
      }
      class O extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.device_friendly_name || h.Sg(O.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  account_name: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  encrypted_password: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  encryption_timestamp: {
                    n: 4,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  remember_login: {
                    n: 5,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  platform_type: {
                    n: 6,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  persistence: {
                    n: 7,
                    d: T.LA.k_ESessionPersistence_Persistent,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  website_id: {
                    n: 8,
                    d: "Unknown",
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  device_details: { n: 9, c: W },
                  guard_data: {
                    n: 10,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  language: {
                    n: 11,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  qos_level: {
                    n: 12,
                    d: 2,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = h.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Request";
        }
      }
      class A extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.client_id || h.Sg(A.M()),
            z.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  request_id: { n: 2, br: h.qM.readBytes, bw: h.gp.writeBytes },
                  interval: { n: 3, br: h.qM.readFloat, bw: h.gp.writeFloat },
                  allowed_confirmations: { n: 4, c: j, r: !0, q: !0 },
                  steamid: {
                    n: 5,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  weak_token: {
                    n: 6,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  agreement_session_url: {
                    n: 7,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  extended_error_message: {
                    n: 8,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = h.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Response";
        }
      }
      class U extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.client_id || h.Sg(U.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  request_id: { n: 2, br: h.qM.readBytes, bw: h.gp.writeBytes },
                  token_to_revoke: {
                    n: 3,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = h.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Request";
        }
      }
      class I extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.new_client_id || h.Sg(I.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  new_client_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  new_challenge_url: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  refresh_token: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  access_token: {
                    n: 4,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  had_remote_interaction: {
                    n: 5,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  account_name: {
                    n: 6,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  new_guard_data: {
                    n: 7,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  agreement_session_url: {
                    n: 8,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = h.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Response";
        }
      }
      class E extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.client_id || h.Sg(E.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = h.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Request";
        }
      }
      class x extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.ip || h.Sg(x.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  ip: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                  geoloc: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  city: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                  state: { n: 4, br: h.qM.readString, bw: h.gp.writeString },
                  country: { n: 5, br: h.qM.readString, bw: h.gp.writeString },
                  platform_type: {
                    n: 6,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  device_friendly_name: {
                    n: 7,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  version: { n: 8, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                  login_history: {
                    n: 9,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  requestor_location_mismatch: {
                    n: 10,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  high_usage_login: {
                    n: 11,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  requested_persistence: {
                    n: 12,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  device_trust: {
                    n: 13,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  app_type: { n: 14, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = h.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Response";
        }
      }
      class N extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.client_id || h.Sg(N.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  language: { n: 2, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = h.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionRiskInfo_Request";
        }
      }
      class P extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.location_confirmer || h.Sg(P.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  location_confirmer: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  location_requestor: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  location_other: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  platform_type: {
                    n: 4,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = h.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionRiskInfo_Response";
        }
      }
      class G extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.client_id || h.Sg(G.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  results: { n: 2, c: D },
                  selected_action: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  did_confirm_login: {
                    n: 4,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = h.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_NotifyRiskQuizResults_Notification";
        }
      }
      class D extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.platform || h.Sg(D.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  platform: { n: 1, br: h.qM.readBool, bw: h.gp.writeBool },
                  location: { n: 2, br: h.qM.readBool, bw: h.gp.writeBool },
                  action: { n: 3, br: h.qM.readBool, bw: h.gp.writeBool },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = h.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
        }
      }
      class L extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Request";
        }
      }
      class Q extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.client_ids || h.Sg(Q.M()),
            z.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  client_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint64String,
                    pbr: h.qM.readPackedUint64String,
                    bw: h.gp.writeRepeatedUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = h.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Response";
        }
      }
      class V extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.version || h.Sg(V.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  version: { n: 1, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                  client_id: {
                    n: 2,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  steamid: {
                    n: 3,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  signature: { n: 4, br: h.qM.readBytes, bw: h.gp.writeBytes },
                  confirm: {
                    n: 5,
                    d: !1,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  persistence: {
                    n: 6,
                    d: T.LA.k_ESessionPersistence_Persistent,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = h.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
        }
      }
      class H extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
        }
      }
      class K extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.client_id || h.Sg(K.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  client_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  code: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                  code_type: { n: 4, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = h.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
        }
      }
      class $ extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.agreement_session_url || h.Sg($.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  agreement_session_url: {
                    n: 7,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = h.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT($.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
        }
      }
      class X extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.refresh_token || h.Sg(X.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  refresh_token: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  renewal_type: { n: 3, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = h.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Request";
        }
      }
      class Y extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.access_token || h.Sg(Y.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  access_token: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  refresh_token: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = h.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Response";
        }
      }
      class J extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.include_revoked || h.Sg(J.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  include_revoked: {
                    n: 1,
                    d: !1,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = h.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Request";
        }
      }
      class Z extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.refresh_tokens || h.Sg(Z.M()),
            z.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  refresh_tokens: { n: 1, c: te, r: !0, q: !0 },
                  requesting_token: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = h.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response";
        }
      }
      class ee extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.time || h.Sg(ee.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  time: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  ip: { n: 2, c: k.kK },
                  locale: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                  country: { n: 4, br: h.qM.readString, bw: h.gp.writeString },
                  state: { n: 5, br: h.qM.readString, bw: h.gp.writeString },
                  city: { n: 6, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = h.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
        }
      }
      class te extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.token_id || h.Sg(te.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  token_id: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  token_description: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  time_updated: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  platform_type: {
                    n: 4,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  logged_in: { n: 5, br: h.qM.readBool, bw: h.gp.writeBool },
                  os_platform: {
                    n: 6,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  auth_type: {
                    n: 7,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  gaming_device_type: {
                    n: 8,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  first_seen: { n: 9, c: ee },
                  last_seen: { n: 10, c: ee },
                  os_type: { n: 11, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                  authentication_type: {
                    n: 12,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  effective_token_state: {
                    n: 13,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = h.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
        }
      }
      class re extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.token || h.Sg(re.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  token: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                  revoke_action: {
                    n: 2,
                    d: m.k_EAuthTokenRevokePermanent,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = h.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_Token_Revoke_Request";
        }
      }
      class ie extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_Token_Revoke_Response";
        }
      }
      class ne extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.token_id || h.Sg(ne.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  token_id: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  revoke_action: {
                    n: 3,
                    d: m.k_EAuthTokenRevokePermanent,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  signature: { n: 4, br: h.qM.readBytes, bw: h.gp.writeBytes },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = h.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Revoke_Request";
        }
      }
      class ae extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_RefreshToken_Revoke_Response";
        }
      }
      class se extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.steamid || h.Sg(se.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  token: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  signature: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = h.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Request";
        }
      }
      class oe extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.refresh_token || h.Sg(oe.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  refresh_token: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  access_token: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = h.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Response";
        }
      }
      class ce extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.token_id || h.Sg(ce.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  token_id: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  token_description: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  time_updated: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  platform_type: {
                    n: 4,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  token_state: { n: 5, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  owner_steamid: {
                    n: 6,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  os_platform: {
                    n: 7,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  os_type: { n: 8, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                  auth_type: {
                    n: 9,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  gaming_device_type: {
                    n: 10,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  first_seen: { n: 11, c: ue },
                  last_seen: { n: 12, c: ue },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = h.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenDescription";
        }
      }
      class ue extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.time || h.Sg(ue.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  time: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  ip: { n: 2, c: k.kK },
                  country: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                  state: { n: 4, br: h.qM.readString, bw: h.gp.writeString },
                  city: { n: 5, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = h.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenDescription_TokenUsageEvent";
        }
      }
      class me extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.action || h.Sg(me.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  action: { n: 1, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                  time: { n: 2, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  ip: { n: 3, c: k.kK },
                  actor: {
                    n: 4,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = h.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportRefreshTokenAudit";
        }
      }
      class le extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.steamid || h.Sg(le.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  include_revoked_tokens: {
                    n: 2,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = h.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
        }
      }
      class de extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.refresh_tokens || h.Sg(de.M()),
            z.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  refresh_tokens: { n: 1, c: ce, r: !0, q: !0 },
                  last_token_reset: {
                    n: 2,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = h.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
        }
      }
      class ge extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.token_id || h.Sg(ge.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  token_id: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = h.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
        }
      }
      class _e extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.refresh_tokens || h.Sg(_e.M()),
            z.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: { refresh_tokens: { n: 1, c: ce, r: !0, q: !0 } },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = h.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
        }
      }
      class Be extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.token_id || h.Sg(Be.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  token_id: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = h.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_RevokeToken_Request";
        }
      }
      class be extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new be();
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_RevokeToken_Response";
        }
      }
      class ye extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.token_id || h.Sg(ye.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  token_id: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = h.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_GetTokenHistory_Request";
        }
      }
      class Me extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.history || h.Sg(Me.M()),
            z.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: { history: { n: 1, c: me, r: !0, q: !0 } },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = h.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_GetTokenHistory_Response";
        }
      }
      class we extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.steamid || h.Sg(we.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  token_id: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = h.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_MarkTokenCompromised_Request";
        }
      }
      class pe extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthenticationSupport_MarkTokenCompromised_Response";
        }
      }
      class fe extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.platform || h.Sg(fe.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  platform: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                  appid: { n: 2, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = h.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Request";
        }
      }
      class ze extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.nonce || h.Sg(ze.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  nonce: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                  expiry: { n: 2, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = h.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Response";
        }
      }
      class Se extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.appid || h.Sg(Se.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  minutes_remaining: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = h.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_TimeRemaining";
        }
      }
      class he extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.platform || h.Sg(he.M()),
            z.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  platform: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = h.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Request";
        }
      }
      class Re extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.entries || h.Sg(Re.M()),
            z.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { entries: { n: 2, c: Se, r: !0, q: !0 } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = h.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Response";
        }
      }
      !(function (e) {
        (e.GetPasswordRSAPublicKey = function (e, t) {
          return e.SendMsg(
            "Authentication.GetPasswordRSAPublicKey#1",
            (0, R.I8)(F, t),
            q,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.BeginAuthSessionViaQR = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, R.I8)(v, t),
              C,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BeginAuthSessionViaCredentials = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, R.I8)(O, t),
              A,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.PollAuthSessionStatus = function (e, t) {
            return e.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, R.I8)(U, t),
              I,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetAuthSessionInfo = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, R.I8)(E, t),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAuthSessionRiskInfo = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, R.I8)(N, t),
              P,
              { ePrivilege: 1 },
            );
          }),
          (e.NotifyRiskQuizResults = function (e, t) {
            return e.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, R.I8)(G, t),
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, R.I8)(V, t),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, R.I8)(K, t),
              $,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GenerateAccessTokenForApp = function (e, t) {
            return e.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, R.I8)(X, t),
              Y,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.EnumerateTokens = function (e, t) {
            return e.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, R.I8)(J, t),
              Z,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAuthSessionsForAccount = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, R.I8)(L, t),
              Q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigrateMobileSession = function (e, t) {
            return e.SendMsg(
              "Authentication.MigrateMobileSession#1",
              (0, R.I8)(se, t),
              oe,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RevokeToken = function (e, t) {
            return e.SendMsg(
              "Authentication.RevokeToken#1",
              (0, R.I8)(re, t),
              ie,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RevokeRefreshToken = function (e, t) {
            return e.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, R.I8)(ne, t),
              ae,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(w || (w = {})),
        (function (e) {
          (e.QueryRefreshTokensByAccount = function (e, t) {
            return e.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, R.I8)(le, t),
              de,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
            (e.QueryRefreshTokenByID = function (e, t) {
              return e.SendMsg(
                "AuthenticationSupport.QueryRefreshTokenByID#1",
                (0, R.I8)(ge, t),
                _e,
                { bConstMethod: !0, ePrivilege: 5 },
              );
            }),
            (e.RevokeToken = function (e, t) {
              return e.SendMsg(
                "AuthenticationSupport.RevokeToken#1",
                (0, R.I8)(Be, t),
                be,
                { ePrivilege: 5 },
              );
            }),
            (e.GetTokenHistory = function (e, t) {
              return e.SendMsg(
                "AuthenticationSupport.GetTokenHistory#1",
                (0, R.I8)(ye, t),
                Me,
                { bConstMethod: !0, ePrivilege: 5 },
              );
            }),
            (e.MarkTokenCompromised = function (e, t) {
              return e.SendMsg(
                "AuthenticationSupport.MarkTokenCompromised#1",
                (0, R.I8)(we, t),
                pe,
                { ePrivilege: 5 },
              );
            });
        })(p || (p = {})),
        (function (e) {
          (e.CreateNonce = function (e, t) {
            return e.SendMsg(
              "CloudGaming.CreateNonce#1",
              (0, R.I8)(fe, t),
              ze,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetTimeRemaining = function (e, t) {
              return e.SendMsg(
                "CloudGaming.GetTimeRemaining#1",
                (0, R.I8)(he, t),
                Re,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            });
        })(f || (f = {}));
    },
    70695: (e, t, r) => {
      r.d(t, { bv: () => S, fz: () => a, oN: () => i, ot: () => f });
      var i,
        n,
        a,
        s = r(80613),
        o = r.n(s),
        c = r(89068),
        u = r(56545);
      !(function (e) {
        (e[(e.k_ETwoFactorUsageType_Unknown = 0)] =
          "k_ETwoFactorUsageType_Unknown"),
          (e[(e.k_ETwoFactorUsageType_None = 1)] =
            "k_ETwoFactorUsageType_None"),
          (e[(e.k_ETwoFactorUsageType_MobileConfirmation = 2)] =
            "k_ETwoFactorUsageType_MobileConfirmation"),
          (e[(e.k_ETwoFactorUsageType_Login = 3)] =
            "k_ETwoFactorUsageType_Login");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_ETwoFactorStatusFieldFlag_None = 0)] =
            "k_ETwoFactorStatusFieldFlag_None"),
            (e[(e.k_ETwoFactorStatusFieldFlag_LastUsage = 1)] =
              "k_ETwoFactorStatusFieldFlag_LastUsage");
        })(n || (n = {}));
      class m extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.time || c.Sg(m.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = c.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UsageEvent";
        }
      }
      class l extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.sender_time || c.Sg(l.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  sender_time: {
                    n: 1,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = c.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Time_Request";
        }
      }
      class d extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.server_time || c.Sg(d.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
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
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = c.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Time_Response";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || c.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  include: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Status_Request";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.state || c.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, [16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
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
                  version: { n: 14, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  last_seen_auth_token_id: {
                    n: 15,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  usages: { n: 16, c: m, r: !0, q: !0 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = c.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Status_Response";
        }
      }
      class B extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.steamid || c.Sg(B.M()),
            s.Message.initialize(this, e, 0, -1, [7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
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
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = c.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_AddAuthenticator_Request";
        }
      }
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.shared_secret || c.Sg(b.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
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
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_AddAuthenticator_Response";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || c.Sg(y.M()),
            s.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
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
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_FinalizeAddAuthenticator_Request";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.success || c.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = c.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_FinalizeAddAuthenticator_Response";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.revocation_code || c.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = c.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticator_Request";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.success || c.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
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
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = c.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticator_Response";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.success || c.Sg(z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = c.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.sms_code || c.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  sms_code: { n: 1, br: c.qM.readString, bw: c.gp.writeString },
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
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = c.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.shared_secret || c.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.success || c.Sg(R.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                  replacement_token: { n: 2, c: h },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = c.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || c.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  version: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  signature: { n: 3, br: c.qM.readBytes, bw: c.gp.writeBytes },
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
        static toObject(e, t) {
          return c.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Request";
        }
      }
      class k extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Response";
        }
      }
      !(function (e) {
        (e.QueryTime = function (e, t) {
          return e.SendMsg("TwoFactor.QueryTime#1", (0, u.I8)(l, t), d, {
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.QueryStatus = function (e, t) {
            return e.SendMsg("TwoFactor.QueryStatus#1", (0, u.I8)(g, t), _, {
              ePrivilege: 1,
            });
          }),
          (e.AddAuthenticator = function (e, t) {
            return e.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, u.I8)(B, t),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.FinalizeAddAuthenticator = function (e, t) {
            return e.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, u.I8)(y, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateTokenVersion = function (e, t) {
            return e.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, u.I8)(T, t),
              k,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.RemoveAuthenticator = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, u.I8)(w, t),
              p,
              { ePrivilege: 9 },
            );
          }),
          (e.RemoveAuthenticatorViaChallengeStart = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, u.I8)(f, t),
              z,
              { ePrivilege: 9 },
            );
          }),
          (e.RemoveAuthenticatorViaChallengeContinue = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, u.I8)(S, t),
              R,
              { ePrivilege: 9 },
            );
          });
      })(a || (a = {}));
    },
  },
]);
