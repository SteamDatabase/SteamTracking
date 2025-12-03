/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [925],
  {
    64868: (e, r, t) => {
      t.d(r, {
        Ex: () => u,
        Fk: () => P,
        GC: () => s,
        GF: () => de,
        Gt: () => S,
        HP: () => x,
        IG: () => n,
        K5: () => A,
        NP: () => l,
        Oe: () => O,
        PQ: () => i,
        U6: () => me,
        V1: () => I,
        VT: () => _e,
        YD: () => v,
        _Y: () => j,
        cl: () => we,
        e$: () => K,
        fO: () => o,
        h: () => U,
        pr: () => Z,
        qb: () => b,
        sv: () => E,
        xy: () => le,
        y0: () => B,
        yj: () => h,
      });
      var i,
        a,
        s,
        n,
        l,
        o,
        u,
        m,
        c = t(80613),
        d = t.n(c),
        y = t(89068),
        _ = t(56545),
        g = t(95679);
      !(function (e) {
        (e[(e.k_EFamilyGroupRole_None = 0)] = "k_EFamilyGroupRole_None"),
          (e[(e.k_EFamilyGroupRole_Adult = 1)] = "k_EFamilyGroupRole_Adult"),
          (e[(e.k_EFamilyGroupRole_Child = 2)] = "k_EFamilyGroupRole_Child"),
          (e[(e.k_EFamilyGroupRole_MAX = 3)] = "k_EFamilyGroupRole_MAX");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_EFamilyGroupMembershipRemovalReason_Invalid = 0)] =
            "k_EFamilyGroupMembershipRemovalReason_Invalid"),
            (e[(e.k_EFamilyGroupMembershipRemovalReason_LeftFamily = 1)] =
              "k_EFamilyGroupMembershipRemovalReason_LeftFamily"),
            (e[(e.k_EFamilyGroupMembershipRemovalReason_KickedFromFamily = 2)] =
              "k_EFamilyGroupMembershipRemovalReason_KickedFromFamily"),
            (e[(e.k_EFamilyGroupMembershipRemovalReason_DeletedFamily = 3)] =
              "k_EFamilyGroupMembershipRemovalReason_DeletedFamily");
        })(a || (a = {})),
        (function (e) {
          (e[(e.k_EFamilyGroupsTwoFactorMethodNone = 0)] =
            "k_EFamilyGroupsTwoFactorMethodNone"),
            (e[(e.k_EFamilyGroupsTwoFactorMethodMobile = 1)] =
              "k_EFamilyGroupsTwoFactorMethodMobile"),
            (e[(e.k_EFamilyGroupsTwoFactorMethodEmail = 2)] =
              "k_EFamilyGroupsTwoFactorMethodEmail");
        })(s || (s = {})),
        (function (e) {
          (e[(e.k_EPurchaseRequestAction_None = 0)] =
            "k_EPurchaseRequestAction_None"),
            (e[(e.k_EPurchaseRequestAction_Decline = 1)] =
              "k_EPurchaseRequestAction_Decline"),
            (e[(e.k_EPurchaseRequestAction_Purchased = 2)] =
              "k_EPurchaseRequestAction_Purchased"),
            (e[(e.k_EPurchaseRequestAction_Abandoned = 3)] =
              "k_EPurchaseRequestAction_Abandoned"),
            (e[(e.k_EPurchaseRequestAction_Cancel = 4)] =
              "k_EPurchaseRequestAction_Cancel"),
            (e[(e.k_EPurchaseRequestAction_MAX = 5)] =
              "k_EPurchaseRequestAction_MAX");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_InvalidChangeType = 0)] = "k_InvalidChangeType"),
            (e[(e.k_FamilyGroupCreated = 1)] = "k_FamilyGroupCreated"),
            (e[(e.k_FamilyGroupModified = 2)] = "k_FamilyGroupModified"),
            (e[(e.k_FamilyGroupDeleted = 3)] = "k_FamilyGroupDeleted"),
            (e[(e.k_AccountInvited = 4)] = "k_AccountInvited"),
            (e[(e.k_InviteDeniedByGroupSize = 5)] =
              "k_InviteDeniedByGroupSize"),
            (e[(e.k_JoinedFamilyGroup = 6)] = "k_JoinedFamilyGroup"),
            (e[(e.k_JoinDeniedByRegionMismatch = 7)] =
              "k_JoinDeniedByRegionMismatch"),
            (e[(e.k_JoinDeniedByMissingIpAddress = 8)] =
              "k_JoinDeniedByMissingIpAddress"),
            (e[(e.k_JoinDeniedByFamilyCooldown = 9)] =
              "k_JoinDeniedByFamilyCooldown"),
            (e[(e.k_JoinDeniedByUserCooldown = 10)] =
              "k_JoinDeniedByUserCooldown"),
            (e[(e.k_JoinDeniedByOtherGroup = 11)] = "k_JoinDeniedByOtherGroup"),
            (e[(e.k_AccountRemoved = 12)] = "k_AccountRemoved"),
            (e[(e.k_InviteCanceled = 13)] = "k_InviteCanceled"),
            (e[(e.k_PurchaseRequested = 14)] = "k_PurchaseRequested"),
            (e[(e.k_ParentalSettingsEnabled = 15)] =
              "k_ParentalSettingsEnabled"),
            (e[(e.k_ParentalSettingsDisabled = 16)] =
              "k_ParentalSettingsDisabled"),
            (e[(e.k_ParentalSettingsChanged = 17)] =
              "k_ParentalSettingsChanged"),
            (e[(e.k_FamilyCooldownOverridesChanged = 18)] =
              "k_FamilyCooldownOverridesChanged"),
            (e[(e.k_PurchaseRequestCanceled = 19)] =
              "k_PurchaseRequestCanceled"),
            (e[(e.k_PurchaseRequestApproved = 20)] =
              "k_PurchaseRequestApproved"),
            (e[(e.k_PurchaseRequestDeclined = 21)] =
              "k_PurchaseRequestDeclined"),
            (e[(e.k_CooldownSkipConsumed = 22)] = "k_CooldownSkipConsumed"),
            (e[(e.k_FamilyGroupRestored = 23)] = "k_FamilyGroupRestored"),
            (e[(e.k_JoinDenied = 24)] = "k_JoinDenied"),
            (e[(e.k_SupportForceAcceptedInvite = 25)] =
              "k_SupportForceAcceptedInvite");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_ESharedLibrary_Included = 0)] = "k_ESharedLibrary_Included"),
            (e[(e.k_ESharedLibrary_AppExcluded_ByPartner = 1)] =
              "k_ESharedLibrary_AppExcluded_ByPartner"),
            (e[(e.k_ESharedLibrary_LicenseExcluded = 2)] =
              "k_ESharedLibrary_LicenseExcluded"),
            (e[(e.k_ESharedLibrary_FreeGame = 3)] =
              "k_ESharedLibrary_FreeGame"),
            (e[(e.k_ESharedLibrary_LicensePrivate = 4)] =
              "k_ESharedLibrary_LicensePrivate"),
            (e[(e.k_ESharedLibrary_AppExcluded_WrongAppType = 6)] =
              "k_ESharedLibrary_AppExcluded_WrongAppType"),
            (e[(e.k_ESharedLibrary_AppExcluded_NonrefundableDLC = 7)] =
              "k_ESharedLibrary_AppExcluded_NonrefundableDLC"),
            (e[(e.k_ESharedLibrary_AppExcluded_UnreleasedApp = 8)] =
              "k_ESharedLibrary_AppExcluded_UnreleasedApp"),
            (e[(e.k_ESharedLibrary_AppExcluded_ParentAppExcluded = 9)] =
              "k_ESharedLibrary_AppExcluded_ParentAppExcluded"),
            (e[(e.k_ESharedLibrary_PackageExcluded_ByPartner = 10)] =
              "k_ESharedLibrary_PackageExcluded_ByPartner"),
            (e[(e.k_ESharedLibrary_PackageExcluded_Special = 11)] =
              "k_ESharedLibrary_PackageExcluded_Special"),
            (e[(e.k_ESharedLibrary_PackageExcluded_Dev = 12)] =
              "k_ESharedLibrary_PackageExcluded_Dev"),
            (e[(e.k_ESharedLibrary_PackageExcluded_FreeWeekend = 13)] =
              "k_ESharedLibrary_PackageExcluded_FreeWeekend"),
            (e[(e.k_ESharedLibrary_PackageExcluded_Invalid = 15)] =
              "k_ESharedLibrary_PackageExcluded_Invalid"),
            (e[(e.k_ESharedLibrary_PackageExcluded_RecurringLicense = 16)] =
              "k_ESharedLibrary_PackageExcluded_RecurringLicense"),
            (e[(e.k_ESharedLibrary_PackageExcluded_WrongLicenseType = 17)] =
              "k_ESharedLibrary_PackageExcluded_WrongLicenseType"),
            (e[(e.k_ESharedLibrary_PackageExcluded_MasterSub = 18)] =
              "k_ESharedLibrary_PackageExcluded_MasterSub"),
            (e[(e.k_ESharedLibrary_PackageExcluded_NoShareableApps = 19)] =
              "k_ESharedLibrary_PackageExcluded_NoShareableApps"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_PaymentMasterSub = 20)] =
              "k_ESharedLibrary_LicenseExcluded_PaymentMasterSub"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_PaymentFamilyGroup = 21)] =
              "k_ESharedLibrary_LicenseExcluded_PaymentFamilyGroup"),
            (e[
              (e.k_ESharedLibrary_LicenseExcluded_PaymentAuthorizedDevice = 22)
            ] = "k_ESharedLibrary_LicenseExcluded_PaymentAuthorizedDevice"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_PaymentAutoGrant = 23)] =
              "k_ESharedLibrary_LicenseExcluded_PaymentAutoGrant"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_FlagPending = 24)] =
              "k_ESharedLibrary_LicenseExcluded_FlagPending"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_FlagPendingRefund = 25)] =
              "k_ESharedLibrary_LicenseExcluded_FlagPendingRefund"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_FlagBorrowed = 26)] =
              "k_ESharedLibrary_LicenseExcluded_FlagBorrowed"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_FlagAutoGrant = 27)] =
              "k_ESharedLibrary_LicenseExcluded_FlagAutoGrant"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_FlagTimedTrial = 28)] =
              "k_ESharedLibrary_LicenseExcluded_FlagTimedTrial"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_FreeSub = 29)] =
              "k_ESharedLibrary_LicenseExcluded_FreeSub"),
            (e[(e.k_ESharedLibrary_LicenseExcluded_Inactive = 30)] =
              "k_ESharedLibrary_LicenseExcluded_Inactive");
        })(o || (o = {}));
      class B extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.name || y.Sg(B.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  name: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = y.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Request";
        }
      }
      class p extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.family_groupid || y.Sg(p.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  cooldown_skip_granted: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = y.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Response";
        }
      }
      class b extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.family_groupid || y.Sg(b.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  send_running_apps: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = y.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Request";
        }
      }
      class M extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || y.Sg(M.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  role: { n: 2, br: y.qM.readEnum, bw: y.gp.writeEnum },
                  time_joined: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  cooldown_seconds_remaining: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = y.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMember";
        }
      }
      class f extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || y.Sg(f.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  role: { n: 2, br: y.qM.readEnum, bw: y.gp.writeEnum },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = y.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInvite";
        }
      }
      class w extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || y.Sg(w.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = y.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupFormerMember";
        }
      }
      class F extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.name || y.Sg(F.M()),
            c.Message.initialize(this, e, 0, -1, [2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  name: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  members: { n: 2, c: M, r: !0, q: !0 },
                  pending_invites: { n: 3, c: f, r: !0, q: !0 },
                  free_spots: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  country: { n: 5, br: y.qM.readString, bw: y.gp.writeString },
                  slot_cooldown_remaining_seconds: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  former_members: { n: 7, c: w, r: !0, q: !0 },
                  slot_cooldown_overrides: {
                    n: 8,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = y.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Response";
        }
      }
      class z extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.family_groupid || y.Sg(z.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  role: { n: 2, br: y.qM.readEnum, bw: y.gp.writeEnum },
                  inviter_steamid: {
                    n: 3,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  awaiting_2fa: { n: 4, br: y.qM.readBool, bw: y.gp.writeBool },
                  invite_id: {
                    n: 5,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = y.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInviteForUser";
        }
      }
      class S extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.steamid || y.Sg(S.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  include_family_group_response: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = y.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Request";
        }
      }
      class R extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.family_groupid || y.Sg(R.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  rtime_joined: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtime_left: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  role: { n: 4, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  participated: { n: 5, br: y.qM.readBool, bw: y.gp.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = y.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMembership";
        }
      }
      class h extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.family_groupid || y.Sg(h.M()),
            c.Message.initialize(this, e, 0, -1, [5, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  is_not_member_of_any_group: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  latest_time_joined: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  latest_joined_family_groupid: {
                    n: 4,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  pending_group_invites: { n: 5, c: z, r: !0, q: !0 },
                  role: { n: 6, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  cooldown_seconds_remaining: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  family_group: { n: 8, c: F },
                  can_undelete_last_joined_family: {
                    n: 9,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  membership_history: { n: 10, c: R, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = y.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Response";
        }
      }
      class v extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.family_groupid || y.Sg(v.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  name: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = y.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
        }
      }
      class q extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
        }
      }
      class j extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.family_groupid || y.Sg(j.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  receiver_steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  receiver_role: {
                    n: 3,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = y.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Request";
        }
      }
      class W extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.invite_id || y.Sg(W.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  invite_id: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  two_factor_method: {
                    n: 2,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = y.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Response";
        }
      }
      class E extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.family_groupid || y.Sg(E.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  nonce: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = y.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(E.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Request";
        }
      }
      class T extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.two_factor_method || y.Sg(T.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  two_factor_method: {
                    n: 2,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                  cooldown_skip_granted: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  invite_already_accepted: {
                    n: 4,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  cooldown_seconds_remaining: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = y.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Response";
        }
      }
      class O extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.family_groupid || y.Sg(O.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  steamid_to_remove: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = y.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Request";
        }
      }
      class G extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Response";
        }
      }
      class I extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.family_groupid || y.Sg(I.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  steamid_to_cancel: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = y.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Request";
        }
      }
      class k extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Response";
        }
      }
      class U extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.family_groupid || y.Sg(U.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = y.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Request";
        }
      }
      class C extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Response";
        }
      }
      class x extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.family_groupid || y.Sg(x.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  client_instance_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = y.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Request";
        }
      }
      class L extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.users || y.Sg(L.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  users: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: y.qM.readFixed64String,
                    pbr: y.qM.readPackedFixed64String,
                    bw: y.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = y.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Response";
        }
      }
      class P extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.family_groupid || y.Sg(P.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  store_country_code: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  use_account_cart: {
                    n: 4,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = y.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Request";
        }
      }
      class N extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.gidshoppingcart || y.Sg(N.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = y.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Response";
        }
      }
      class A extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.family_groupid || y.Sg(A.M()),
            c.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  request_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint64String,
                    pbr: y.qM.readPackedUint64String,
                    bw: y.gp.writeRepeatedUint64String,
                  },
                  rt_include_completed_since: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = y.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(A.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Request";
        }
      }
      class Q extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.requester_steamid || y.Sg(Q.M()),
            c.Message.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  requester_steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  time_requested: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  time_responded: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  responder_steamid: {
                    n: 5,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  response_action: {
                    n: 6,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                  is_completed: { n: 7, br: y.qM.readBool, bw: y.gp.writeBool },
                  request_id: {
                    n: 8,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  requested_packageids: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                  purchased_packageids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                  requested_bundleids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                  purchased_bundleids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = y.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(Q.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PurchaseRequest";
        }
      }
      class D extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.requests || y.Sg(D.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { requests: { n: 1, c: Q, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = y.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(D.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Response";
        }
      }
      class K extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.family_groupid || y.Sg(K.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  action: { n: 3, br: y.qM.readEnum, bw: y.gp.writeEnum },
                  request_id: {
                    n: 4,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = y.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Request";
        }
      }
      class J extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Response";
        }
      }
      class V extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.family_groupid || y.Sg(V.M()),
            c.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  running_apps: { n: 2, c: H, r: !0, q: !0 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = y.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification";
        }
      }
      class $ extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.member_steamid || y.Sg($.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  member_steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  owner_steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = y.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT($.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
        }
      }
      class H extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || y.Sg(H.M()),
            c.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  playing_members: { n: 3, c: $, r: !0, q: !0 },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = y.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
        }
      }
      class Y extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_InviteStatus_Notification";
        }
      }
      class X extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.family_groupid || y.Sg(X.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = y.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_GroupChanged_Notification";
        }
      }
      class Z extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.family_groupid || y.Sg(Z.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = y.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Request";
        }
      }
      class ee extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.changes || y.Sg(ee.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { changes: { n: 1, c: re, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = y.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response";
        }
      }
      class re extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.timestamp || y.Sg(re.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  timestamp: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  actor_steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  type: { n: 3, br: y.qM.readEnum, bw: y.gp.writeEnum },
                  body: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                  by_support: { n: 5, br: y.qM.readBool, bw: y.gp.writeBool },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = y.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response_Change";
        }
      }
      class te extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steamid || y.Sg(te.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  first_played: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  latest_played: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  seconds_played: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = y.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(te.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_PlaytimeEntry";
        }
      }
      class ie extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.family_groupid || y.Sg(ie.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = y.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Request";
        }
      }
      class ae extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.entries || y.Sg(ae.M()),
            c.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  entries: { n: 1, c: te, r: !0, q: !0 },
                  entries_by_owner: { n: 2, c: te, r: !0, q: !0 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = y.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Response";
        }
      }
      class se extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.family_groupid || y.Sg(se.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  cooldown_count: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = y.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(se.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
        }
      }
      class ne extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
        }
      }
      class le extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.family_groupid || y.Sg(le.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  include_own: { n: 2, br: y.qM.readBool, bw: y.gp.writeBool },
                  include_excluded: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  language: { n: 5, br: y.qM.readString, bw: y.gp.writeString },
                  max_apps: { n: 6, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  include_non_games: {
                    n: 7,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  steamid: {
                    n: 8,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = y.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(le.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Request";
        }
      }
      class oe extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.apps || y.Sg(oe.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  apps: { n: 1, c: ue, r: !0, q: !0 },
                  owner_steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = y.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(oe.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response";
        }
      }
      class ue extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appid || y.Sg(ue.M()),
            c.Message.initialize(this, e, 0, -1, [2, 15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  owner_steamids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: y.qM.readFixed64String,
                    pbr: y.qM.readPackedFixed64String,
                    bw: y.gp.writeRepeatedFixed64String,
                  },
                  name: { n: 6, br: y.qM.readString, bw: y.gp.writeString },
                  sort_as: { n: 7, br: y.qM.readString, bw: y.gp.writeString },
                  capsule_filename: {
                    n: 8,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  img_icon_hash: {
                    n: 9,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  exclude_reason: {
                    n: 10,
                    d: o.k_ESharedLibrary_Included,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                  rt_time_acquired: {
                    n: 11,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rt_last_played: {
                    n: 12,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rt_playtime: {
                    n: 13,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  app_type: {
                    n: 14,
                    d: g.Td.k_EAppTypeGame,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                  content_descriptors: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = y.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ue.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
        }
      }
      class me extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.family_groupid || y.Sg(me.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = y.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(me.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
        }
      }
      class ce extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ce();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
        }
      }
      class de extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.family_groupid || y.Sg(de.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = y.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(de.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
        }
      }
      class ye extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
        }
      }
      class _e extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.family_groupid || y.Sg(_e.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = y.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(_e.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
        }
      }
      class ge extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ge();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
        }
      }
      class Be extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.family_groupid || y.Sg(Be.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  lender_steamid: {
                    n: 3,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = y.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(Be.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Request";
        }
      }
      class pe extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Response";
        }
      }
      class be extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.family_groupid || y.Sg(be.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = y.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(be.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Request";
        }
      }
      class Me extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.members || y.Sg(Me.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: { members: { n: 1, c: fe, r: !0, q: !0 } },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = y.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(Me.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response";
        }
      }
      class fe extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.steamid || y.Sg(fe.M()),
            c.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  preferred_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = y.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(fe.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
        }
      }
      class we extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.family_groupid || y.Sg(we.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = y.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(we.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Request";
        }
      }
      class Fe extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Fe();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Response";
        }
      }
      class ze extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.family_groupid || y.Sg(ze.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = y.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ze.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Request";
        }
      }
      class Se extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Se();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Response";
        }
      }
      class Re extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.family_groupid || y.Sg(Re.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = y.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(Re.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Request";
        }
      }
      class he extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.wallet_country_matches || y.Sg(he.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  wallet_country_matches: {
                    n: 1,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  ip_match: { n: 2, br: y.qM.readBool, bw: y.gp.writeBool },
                  join_restriction: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = y.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Response";
        }
      }
      class ve extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.steamid || y.Sg(ve.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  invite_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = y.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ve.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Request";
        }
      }
      class qe extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new qe();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Response";
        }
      }
      class je extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.family_groupid || y.Sg(je.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  rtime32_target: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = y.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(je.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RollbackFamilyGroup_Request";
        }
      }
      class We extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RollbackFamilyGroup_Response";
        }
      }
      !(function (e) {
        (e.CreateFamilyGroup = function (e, r) {
          return e.SendMsg(
            "FamilyGroups.CreateFamilyGroup#1",
            (0, _.I8)(B, r),
            p,
            { ePrivilege: 1 },
          );
        }),
          (e.GetFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, _.I8)(b, r),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFamilyGroupForUser = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, _.I8)(S, r),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ModifyFamilyGroupDetails = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, _.I8)(v, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.InviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, _.I8)(j, r),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmInviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, _.I8)(me, r),
              ce,
              { ePrivilege: 1 },
            );
          }),
          (e.ResendInvitationToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, _.I8)(_e, r),
              ge,
              { ePrivilege: 1 },
            );
          }),
          (e.JoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, _.I8)(E, r),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmJoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, _.I8)(de, r),
              ye,
              { ePrivilege: 1 },
            );
          }),
          (e.RemoveFromFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, _.I8)(O, r),
              G,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelFamilyGroupInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, _.I8)(I, r),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUsersSharingDevice = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, _.I8)(x, r),
              L,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, _.I8)(U, r),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.UndeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, _.I8)(we, r),
              Fe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlaytimeSummary = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, _.I8)(ie, r),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.RequestPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, _.I8)(P, r),
              N,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPurchaseRequests = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, _.I8)(A, r),
              D,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RespondToRequestedPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, _.I8)(K, r),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.GetChangeLog = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, _.I8)(Z, r),
              ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetFamilyCooldownOverrides = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, _.I8)(se, r),
              ne,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSharedLibraryApps = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, _.I8)(le, r),
              oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPreferredLender = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, _.I8)(Be, r),
              pe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferredLenders = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, _.I8)(be, r),
              Me,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ForceAcceptInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, _.I8)(ze, r),
              Se,
              { ePrivilege: 5 },
            );
          }),
          (e.GetInviteCheckResults = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, _.I8)(Re, r),
              he,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ClearCooldownSkip = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, _.I8)(ve, r),
              qe,
              { ePrivilege: 5 },
            );
          }),
          (e.RollbackFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, _.I8)(je, r),
              We,
              { ePrivilege: 5 },
            );
          });
      })(u || (u = {})),
        (function (e) {
          (e.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: V,
          }),
            (e.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: Y,
            }),
            (e.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: X,
            });
        })(m || (m = {}));
    },
    30925: (e, r, t) => {
      t.d(r, {
        $N: () => oe,
        BO: () => N,
        Bc: () => k,
        DD: () => G,
        HM: () => I,
        Hs: () => E,
        IN: () => D,
        Ke: () => Q,
        N0: () => W,
        QU: () => x,
        Qn: () => A,
        RC: () => V,
        TI: () => T,
        Tv: () => q,
        Vo: () => Z,
        Ww: () => Y,
        Xq: () => te,
        Y0: () => O,
        YW: () => se,
        Yc: () => P,
        _K: () => C,
        eS: () => K,
        fO: () => ne,
        gv: () => $,
        lF: () => ue,
        ll: () => L,
        p8: () => H,
        tN: () => le,
        v2: () => U,
        vo: () => j,
        vu: () => me,
        w1: () => X,
        yM: () => re,
      });
      var i = t(90626),
        a = t(56545),
        s = t(20194),
        n = t(75233),
        l = t(51614),
        o = t(57168),
        u = t(68950),
        m = t(23809),
        c = t(37085),
        d = t(64868),
        y = t(37735),
        _ = t(61859),
        g = (t(71430), t(30470)),
        B = t(2627),
        p = t(15419),
        b = t(41338),
        M = t(29233);
      const f = (e, r) =>
          void 0 === r
            ? ["get_family_group_for_user ", e]
            : ["get_family_group_for_user ", e, r],
        w = (e) => ["get_family_group", e],
        F = (e) => ["get_family_history", e],
        z = (e) => ["get_users_sharing_device", e],
        S = (e) => ["recent_playtime_sessions", e];
      function R(e, r, t) {
        return t
          ? ["get_purchase_requests", e, r, t]
          : r
            ? ["get_purchase_requests", e, r]
            : ["get_purchase_requests", e];
      }
      function h(e, r) {
        if (e != c.d.k_EResultOK) throw e;
      }
      const v = i.createContext({ staleTimeMs: 1 / 0 });
      function q(e) {
        const { staleTimeMs: r, children: t } = e,
          a = i.useMemo(() => ({ staleTimeMs: r ?? 3e3 }), [r]);
        return i.createElement(v.Provider, { value: a }, t);
      }
      function j(e = !1) {
        return W((0, u.LH)(), e);
      }
      function W(e, r = !1) {
        const t = (0, m.KV)(),
          n = (0, i.useContext)(v).staleTimeMs;
        return (0, s.I)({
          queryKey: f(e, r),
          queryFn: async () => {
            const i = a.w.Init(d.Gt);
            i.Body().set_steamid(e),
              i.Body().set_include_family_group_response(r);
            const s = await d.Ex.GetFamilyGroupForUser(t, i);
            return h(s.GetEResult()), s.Body();
          },
          staleTime: n,
          enabled: !!e,
          placeholderData: e ? void 0 : new d.yj(),
        });
      }
      function E(e) {
        const r = (0, m.KV)(),
          t = (0, i.useContext)(v).staleTimeMs;
        return (0, s.I)({
          queryKey: w(e),
          queryFn: async () => {
            if (e) {
              const t = a.w.Init(d.qb);
              t.Body().set_family_groupid(e);
              const i = await d.Ex.GetFamilyGroup(r, t);
              return h(i.GetEResult()), i.Body();
            }
            throw c.d.k_EResultNoMatch;
          },
          staleTime: t,
        });
      }
      function T() {
        const e = (0, m.KV)(),
          r = (0, n.jE)(),
          t = (0, u.LH)();
        return (0, l.n)({
          mutationFn: async (r) => {
            const t = a.w.Init(d.y0);
            t.Body().set_name(r);
            const i = await d.Ex.CreateFamilyGroup(e, t);
            return h(i.GetEResult()), i.Body();
          },
          onSuccess: () => {
            r.invalidateQueries({ queryKey: f(t) });
          },
        });
      }
      function O(e) {
        const r = (0, m.KV)(),
          t = (0, n.jE)(),
          i = (0, u.LH)();
        return (0, l.n)({
          mutationFn: async () => {
            const t = a.w.Init(d.h);
            t.Body().set_family_groupid(e);
            const i = await d.Ex.DeleteFamilyGroup(r, t);
            return h(i.GetEResult()), i.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: f(i) }),
              t.invalidateQueries({ queryKey: w(e) }),
              t.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      function G(e) {
        const r = (0, m.KV)(),
          t = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async (t) => {
            const i = a.w.Init(d.YD);
            i.Body().set_family_groupid(e), i.Body().set_name(t);
            const s = await d.Ex.ModifyFamilyGroupDetails(r, i);
            return h(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: w(e) }),
              t.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      function I(e, r, t) {
        const i = (0, m.KV)(),
          s = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const s = a.w.Init(d._Y);
            s.Body().set_family_groupid(e),
              s.Body().set_receiver_steamid(r),
              s.Body().set_receiver_role(t);
            const n = await d.Ex.InviteToFamilyGroup(i, s);
            return h(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: f(r) }),
              s.invalidateQueries({ queryKey: w(e) }),
              s.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      function k(e) {
        const r = (0, m.KV)(),
          t = (0, u.LH)(),
          i = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const t = a.w.Init(d.sv);
            t.Body().set_family_groupid(e);
            const i = await d.Ex.JoinFamilyGroup(r, t);
            return h(i.GetEResult()), i.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(t) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      function U(e, r) {
        const t = (0, m.KV)(),
          i = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = a.w.Init(d.V1);
            i.Body().set_family_groupid(e), i.Body().set_steamid_to_cancel(r);
            const s = await d.Ex.CancelFamilyGroupInvite(t, i);
            return h(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(r) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      function C(e, r) {
        const t = (0, m.KV)(),
          i = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = a.w.Init(d.Oe);
            i.Body().set_family_groupid(e), i.Body().set_steamid_to_remove(r);
            const s = await d.Ex.RemoveFromFamilyGroup(t, i);
            return h(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(r) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      function x(e) {
        const r = (0, m.KV)();
        return (0, s.I)({
          queryKey: z(e),
          queryFn: async () => {
            const t = (0, B.VY)("clientsessionid"),
              i = t && BigInt("0x" + t).toString(),
              s = a.w.Init(d.HP);
            s.Body().set_family_groupid(e),
              s.Body().set_client_instance_id(i ?? void 0);
            const n = await d.Ex.GetUsersSharingDevice(r, s);
            return h(n.GetEResult()), n.Body();
          },
        });
      }
      function L(e) {
        const r = (0, u.LH)(),
          t = E(e);
        return t.data
          ?.members()
          .find((e) => e.steamid() == r)
          ?.role();
      }
      function P(e, r) {
        const t = (0, m.KV)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = a.w.Init(d.Fk);
            i.Body().set_family_groupid(e),
              i.Body().set_use_account_cart(!0),
              i.Body().set_store_country_code(r);
            const s = await d.Ex.RequestPurchase(t, i);
            return h(s.GetEResult()), s.Body();
          },
        });
      }
      function N(e, r) {
        const t = (0, m.KV)(),
          i = (0, u.LH)();
        return (0, s.I)({
          queryKey: R(e, i),
          queryFn: async () => {
            const i = a.w.Init(d.K5);
            i.Body().set_family_groupid(e),
              void 0 !== r && i.Body().set_rt_include_completed_since(r);
            const s = await d.Ex.GetPurchaseRequests(t, i);
            return h(s.GetEResult()), s.Body();
          },
        });
      }
      function A(e, r) {
        const t = (0, m.KV)(),
          i = (0, u.LH)();
        return (0, s.I)({
          queryKey: R(e, i, r),
          queryFn: async () => {
            const i = a.w.Init(d.K5);
            i.Body().set_family_groupid(e), i.Body().add_request_ids(r);
            const s = await d.Ex.GetPurchaseRequests(t, i);
            return h(s.GetEResult()), s.Body();
          },
          select: (e) =>
            e.toObject().requests?.find(({ request_id: e }) => e === r),
        });
      }
      function Q(e, r, t) {
        const i = (0, m.KV)(),
          s = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const s = a.w.Init(d.e$);
            s.Body().set_family_groupid(e),
              s.Body().set_request_id(r),
              s.Body().set_action(t);
            const n = await d.Ex.RespondToRequestedPurchase(i, s);
            return h(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: R(e) }),
              s.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      const D = (0, i.createContext)({
        errorMessage: null,
        setErrorMessage: (e) => {},
      });
      var K;
      !(function (e) {
        (e[(e.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (e[(e.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (e[(e.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (e[(e.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (e[(e.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (e[(e.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (e[(e.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (e[(e.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (e[(e.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (e[(e.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (e[(e.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (e[(e.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (e[(e.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (e[(e.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (e[(e.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (e[(e.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (e[(e.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite");
      })(K || (K = {}));
      const J = {
        [c.d.k_EResultInvalidParam]:
          "#FamilyManagement_ErrorInternalServerError",
        [c.d.k_EResultFail]: "#FamilyManagement_ErrorInternalServerError",
        [c.d.k_EResultBusy]: "#FamilyManagement_ErrorInternalServerError",
        [c.d.k_EResultIOFailure]: "#FamilyManagement_ErrorInternalServerError",
        [c.d.k_EResultAccessDenied]: "#FamilyManagement_AccessDenied",
        [c.d.k_EResultNoMatch]: "#FamilyManagement_ErrorNoMatch",
        [c.d.k_EResultAccountDisabled]:
          "#FamilyManagement_ErrorAccountDisabled",
        [c.d.k_EResultInvalidState]: "#FamilyManagement_ErrorNoActiveInvite",
        [c.d.k_EResultAccountNotFeatured]:
          "#FamilyManagement_PartnerAccountCannotJoinAsChild",
        [c.d.k_EResultFamilySizeLimitExceeded]:
          "#FamilyManagement_ErrorFamilySizeLimitExceeded",
        [c.d.k_EResultLimitExceeded]: "#FamilyManagement_ErrorLimitExceeded",
        [c.d.k_EResultAccountActivityLimitExceeded]:
          "#FamilyManagement_ErrorAccountActivityLimitExceeded",
        [c.d.k_EResultLimitedUserAccount]:
          "#FamilyManagement_LimitedAccount_CreateFamily",
        [c.d.k_EResultRateLimitExceeded]: {
          [K.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RateLimitExceeded_CreateFamily",
        },
        [c.d.k_EResultRegionLocked]: {
          [K.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RegionLocked_CreateFamily",
          [K.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_RegionLocked_JoinFamily",
        },
        [c.d.k_EResultIPNotFound]: {
          [K.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_Household_JoinFamily",
        },
        [c.d.k_EResultAccountLimitExceeded]: {
          [K.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
          [K.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
          [K.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
        },
        [c.d.k_EResultDuplicateRequest]: {
          [K.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
          [K.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
          [K.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
        },
        [c.d.k_EResultBlocked]: {
          [K.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
        },
      };
      function V() {
        const { setErrorMessage: e } = (0, i.useContext)(D);
        return { setErrorMessage: e };
      }
      function $(e, r, t) {
        const { setErrorMessage: a } = V(),
          { isError: s, error: n } = e,
          l = j();
        (0, i.useEffect)(() => {
          if (s) {
            const e = n,
              i = [];
            if (
              e === c.d.k_EResultLimitExceeded ||
              e === c.d.k_EResultAccountActivityLimitExceeded
            ) {
              let e;
              l.isSuccess &&
                l.data &&
                (e = l.data.cooldown_seconds_remaining()),
                i.push(
                  (function (e) {
                    if (!e)
                      return (0, _.we)("#FamilyManagement_LoadingPlaceholder");
                    const r = {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        weekday: void 0,
                      },
                      t = (0, _.TW)(Date.now() / 1e3 + e, r);
                    return t;
                  })(e),
                );
            }
            a(
              (function (e, r, t, i) {
                let a = "";
                if (e in J) {
                  const r = J[e];
                  if ("string" == typeof r) a = (0, _.we)(r, ...i);
                  else {
                    const e = r;
                    t in e && (a = (0, _.we)(e[t], ...i));
                  }
                }
                return (0, _.we)(r, a);
              })(e, r, t, i),
            );
          }
        }, [a, s, n, r, t, l.isSuccess, l.data]);
      }
      function H(e, r) {
        const { setErrorMessage: t } = V();
        (0, i.useEffect)(() => {
          e.isError && t((0, _.we)(r));
        }, [t, e.isError, r]);
      }
      function Y(e) {
        const r = (0, m.KV)();
        return (0, s.I)({
          queryKey: F(e),
          queryFn: async () => {
            const t = a.w.Init(d.pr);
            t.Body().set_family_groupid(e);
            const i = await d.Ex.GetChangeLog(r, t);
            return h(i.GetEResult()), i.Body().changes();
          },
          staleTime: 0,
        });
      }
      function X(e, r) {
        return `${g.TS.STORE_BASE_URL}cart/purchaserequest/${e}/${r}`;
      }
      function Z(e) {
        return `${g.TS.STORE_BASE_URL}cart/purchaserequested/${e}`;
      }
      function ee(e, r, t, i) {
        return [
          "get_shared_library_apps",
          e,
          r?.bIncludeOwn,
          r?.bIncludeExcluded,
          r?.bIncludeNonGames,
          r?.for_account_id,
          t,
          i,
        ];
      }
      function re(e, r) {
        const t = (0, u.LH)(),
          { settings: i, mapAppsAllowed: n } = (0, p.S0)(t).data,
          l = (0, p.BM)(),
          c = (0, m.KV)(),
          {
            bIncludeOwn: y,
            bIncludeExcluded: _,
            bIncludeNonGames: B,
            for_account_id: b,
          } = r ?? {},
          f = void 0 === r?.enabled || r.enabled,
          w = ee(e, r, i, l),
          F = (e) => !(0, p.or)(e.appid(), l, i, n);
        return (0, s.I)({
          queryKey: w,
          queryFn: async () => {
            const r = a.w.Init(d.xy);
            if (
              (r.Body().set_family_groupid(e),
              r.Body().set_include_own(y),
              r.Body().set_include_excluded(_),
              r.Body().set_language(g.TS.LANGUAGE),
              r.Body().set_include_non_games(B),
              b)
            ) {
              const e = M.b2.InitFromAccountID(b, g.TS.EUNIVERSE);
              r.Body().set_steamid(e.ConvertTo64BitString());
            }
            const t = await d.Ex.GetSharedLibraryApps(c, r);
            return (
              h(t.GetEResult()),
              t
                .Body()
                .apps()
                .filter(F)
                .map((e) => e.toObject())
            );
          },
          enabled: !!i && f,
          placeholderData: o.rX,
          select: r?.select,
        });
      }
      function te(e, r) {
        const t = (0, n.jE)(),
          a = (0, u.LH)(),
          { settings: s } = (0, p.S0)(a).data ?? {},
          l = ee(e, r, s, (0, p.BM)());
        return (0, i.useCallback)(() => {
          t.invalidateQueries({ queryKey: l });
        }, [t, l]);
      }
      function ie(e, r) {
        let t = e.sort_as || e.name,
          i = r.sort_as || r.name;
        return (0, b.lY)(t, i);
      }
      function ae(e, r) {
        return r.rt_time_acquired - e.rt_time_acquired || ie(e, r);
      }
      function se(e, r, t, a = []) {
        const s = (0, i.useMemo)(
            () =>
              e?.filter((e) =>
                (function (e, r, t) {
                  if (!e && 0 === r.length) return !0;
                  const i = t.name?.toLocaleLowerCase(),
                    a = e.toLocaleLowerCase(),
                    s = i?.includes(a) || t.appid?.toString() == a;
                  let n = !0;
                  if (t.content_descriptors)
                    for (const e of r)
                      if (!t.content_descriptors.includes(e)) {
                        n = !1;
                        break;
                      }
                  return s && n;
                })(t, a, e),
              ) || [],
            [e, t, a],
          ),
          n = (0, i.useCallback)(
            (e, t) => {
              let i = ie;
              switch (r) {
                case "alpha-asc":
                  i = ie;
                  break;
                case "alpha-desc":
                  i = (e, r) => ie(r, e);
                  break;
                case "date_acquired-asc":
                  i = (e, r) => ae(r, e);
                  break;
                case "date_acquired-desc":
                  i = ae;
              }
              return i(e, t);
            },
            [r],
          );
        return (0, i.useMemo)(() => s.slice().sort(n), [s, n]);
      }
      function ne(e, r) {
        const t = (0, m.KV)(),
          i = (0, n.jE)(),
          s = (0, u.LH)();
        return (0, l.n)({
          mutationFn: async (i) => {
            const s = a.w.Init(d.GF);
            s.Body().set_family_groupid(e),
              s.Body().set_invite_id(r),
              s.Body().set_nonce(i);
            const n = await d.Ex.ConfirmJoinFamilyGroup(t, s);
            return h(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(s) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      function le(e, r, t) {
        const i = (0, m.KV)(),
          s = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const s = a.w.Init(d.U6);
            s.Body().set_family_groupid(e),
              s.Body().set_invite_id(r),
              s.Body().set_nonce(t);
            const n = await d.Ex.ConfirmInviteToFamilyGroup(i, s);
            return h(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: w(e) }),
              s.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
      function oe(e, r) {
        const t = (0, m.KV)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = a.w.Init(d.VT);
            i.Body().set_family_groupid(e), i.Body().set_steamid(r);
            const s = await d.Ex.ResendInvitationToFamilyGroup(t, i);
            return h(s.GetEResult()), s;
          },
        });
      }
      function ue(e) {
        const r = (0, m.KV)();
        return (0, s.I)({
          queryKey: S(e),
          queryFn: async () => {
            const t = a.w.Init(y.m8);
            t.Body().set_steamid(e);
            const i = await y.xt.GetRecentPlaytimeSessionsForChild(r, t);
            h(i.GetEResult());
            const s = (function (e) {
              let r = [];
              e.sort((e, r) => e.time_start - r.time_start);
              let t = new Map();
              for (const i of e) {
                let e = t.get(i.appid);
                void 0 === e
                  ? t.set(i.appid, i)
                  : i.time_start <= e.time_end
                    ? (e.time_end = Math.max(e.time_end, i.time_end))
                    : (r.push(e), t.set(i.appid, i));
              }
              for (const e of t.values()) r.push(e);
              return r.sort((e, r) => e.time_start - r.time_start), r;
            })(i.Body().toObject().sessions || []);
            return s;
          },
        });
      }
      function me(e) {
        const r = (0, m.KV)(),
          t = (0, u.LH)(),
          i = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const t = a.w.Init(d.cl);
            t.Body().set_family_groupid(e);
            const i = await d.Ex.UndeleteFamilyGroup(r, t);
            return h(i.GetEResult()), i;
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(t) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: F(e) });
          },
        });
      }
    },
  },
]);
