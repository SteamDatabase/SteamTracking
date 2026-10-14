/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [96032],
    {
      49288: (Lr, xr, a) => {
        a.d(xr, {
          RY: () => x,
          Dj: () => H,
          L: () => zr,
          IL: () => sr,
          zq: () => V,
          Sm: () => k,
          bA: () => N,
          pt: () => v,
          GB: () => O,
          mo: () => I,
          jK: () => E,
          P$: () => U,
          Cs: () => S,
          vT: () => T,
          Pw: () => br,
          Pk: () => nr,
          kT: () => Tr,
          _h: () => Br,
          l3: () => z,
          a9: () => or,
        });
        var Tr = {};
        a.r(Tr),
          a.d(Tr, {
            Wy: () => qr,
            X6: () => er,
            Mj: () => Qr,
            j1: () => vr,
            b2: () => W,
          });
        var nr = {};
        a.r(nr), a.d(nr, { au: () => Nr });
        var br = {};
        a.r(br),
          a.d(br, {
            Zp: () => ei,
            uz: () => ni,
            Ri: () => _r,
            BZ: () => ti,
            tN: () => ii,
            j3: () => ri,
          });
        var Br = {};
        a.r(Br), a.d(Br, { A: () => ci, h: () => Rr });
        var T = {};
        a.r(T),
          a.d(T, { FK: () => bi, Oc: () => ai, SO: () => Mi, qY: () => Bi });
        var e = a(80613),
          n = a.n(e),
          i = a(75245),
          b = a(35038);
        const f = 0,
          W = 1,
          er = 2,
          Or = 3,
          vr = 4,
          Qr = 5,
          qr = 6,
          Nr = 0,
          kr = 1,
          Mr = 2,
          wr = 3,
          Cr = 4,
          M = 5,
          l = 6,
          h = 7,
          tr = 8,
          lr = 9,
          cr = 10,
          mr = 11,
          ar = 12,
          Sr = 13,
          fr = 14,
          Ir = 15,
          gr = 16,
          Ur = 17,
          Kr = 18,
          Hr = 19,
          Vr = 20,
          Zr = 21,
          $r = 22,
          Fr = 23,
          Yr = 24,
          Jr = 25,
          Xr = 26,
          pr = 27,
          dr = 28,
          ur = 29,
          Ar = 30,
          Dr = 31,
          Pr = 32,
          Er = 33,
          Gr = 34,
          yr = 35,
          _r = 0,
          ri = 1,
          ii = 2,
          ti = 3,
          ni = 4,
          ei = 5,
          Rr = 1,
          ci = 2,
          bi = 1,
          Mi = 2,
          ai = 3,
          Bi = 4;
        function Ui(u) {
          return "unknown ELoyaltyRewardAuditType ( " + u + " )";
        }
        function Ei(u) {
          return "unknown ELoyaltyRewardDefinitionID ( " + u + " )";
        }
        function xi(u) {
          return "unknown ELoyaltyRewardType ( " + u + " )";
        }
        function Ni(u) {
          return "unknown ELoyaltyRewardPointTransferType ( " + u + " )";
        }
        function ki(u) {
          return "unknown ELoyaltyRewardReactionType ( " + u + " )";
        }
        function Ki(u) {
          return "unknown ELoyaltyRewardReactionTargetType ( " + u + " )";
        }
        function Hi(u) {
          return "unknown ELoyaltyRewardsQuerySort ( " + u + " )";
        }
        function Vi(u) {
          return "unknown ELoyaltyRewardQueryFilter ( " + u + " )";
        }
        class v extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.steamid || i.Sg(v.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(v.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new v();
            return v.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(v.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(v.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Request";
          }
        }
        class Z extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.summary || i.Sg(Z.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    summary: { n: 1, c: $ },
                    timestamp_updated: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    auditid_highwater: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = i.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Z.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new Z();
            return Z.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Response";
          }
        }
        class $ extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.points || i.Sg($.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    points: {
                      n: 1,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    points_earned: {
                      n: 2,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    points_spent: {
                      n: 3,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = i.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT($.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new $();
            return $.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Response_Summary";
          }
        }
        class F extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.amount || i.Sg(F.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    amount: {
                      n: 1,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    ecurrency: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = i.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(F.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new F();
            return F.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(F.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(F.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetPointsForSpend_Request";
          }
        }
        class Y extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.points || i.Sg(Y.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    points: {
                      n: 1,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = i.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Y.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new Y();
            return Y.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetPointsForSpend_Response";
          }
        }
        class S extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.defid || i.Sg(S.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    defid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    expected_points_cost: {
                      n: 2,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(S.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new S();
            return S.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(S.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(S.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPoints_Request";
          }
        }
        class I extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.defid || i.Sg(I.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    defid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    num_levels: {
                      n: 2,
                      d: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = i.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(I.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new I();
            return I.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(I.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(I.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
          }
        }
        class J extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.defid || i.Sg(J.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    defid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    communityitemid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = i.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(J.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new J();
            return J.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(J.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(J.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
          }
        }
        class j extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.communityitemid || i.Sg(j.M()),
              e.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    bundle_community_item_ids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = i.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(j.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new j();
            return j.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(j.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(j.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPoints_Response";
          }
        }
        class U extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.customization_type || i.Sg(U.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = i.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(U.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new U();
            return U.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(U.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(U.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
          }
        }
        class X extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.purchaseid || i.Sg(X.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    purchaseid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = i.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(X.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new X();
            return X.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(X.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(X.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
          }
        }
        class E extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.customization_type || i.Sg(E.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    new_level: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = i.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(E.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new E();
            return E.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(E.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(E.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
          }
        }
        class Wr extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Wr();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new Wr();
            return Wr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
          }
        }
        class p extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.serial_number || i.Sg(p.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(p.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new p();
            return p.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(p.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(p.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
          }
        }
        class A extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.granted_profile_modifier || i.Sg(A.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    granted_profile_modifier: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = i.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(A.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new A();
            return A.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(A.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(A.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
          }
        }
        class x extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.target_type || i.Sg(x.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    target_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    targetid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reactionid: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = i.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(x.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new x();
            return x.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(x.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(x.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_AddReaction_Request";
          }
        }
        class hr extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new hr();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new hr();
            return hr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_AddReaction_Response";
          }
        }
        class N extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.target_type || i.Sg(N.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    target_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    targetid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = i.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(N.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new N();
            return N.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(N.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(N.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactions_Request";
          }
        }
        class D extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.reactionids || i.Sg(D.M()),
              e.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    reactionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = i.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(D.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new D();
            return D.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(D.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(D.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactions_Response";
          }
        }
        class Q extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.steamid || i.Sg(Q.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = i.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Q.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new Q();
            return Q.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
          }
        }
        class q extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.total || i.Sg(q.M()),
              e.Message.initialize(this, r, 0, -1, [1, 2, 3, 4, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    total: { n: 1, c: s, r: !0, q: !0 },
                    user_reviews: { n: 2, c: s, r: !0, q: !0 },
                    ugc: { n: 3, c: s, r: !0, q: !0 },
                    profile: { n: 4, c: s, r: !0, q: !0 },
                    forum_topics: { n: 5, c: s, r: !0, q: !0 },
                    comments: { n: 6, c: s, r: !0, q: !0 },
                    total_given: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_received: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_points_given: {
                      n: 9,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    total_points_received: {
                      n: 10,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = i.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(q.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new q();
            return q.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
          }
        }
        class s extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.reactionid || i.Sg(s.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    reactionid: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    given: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    received: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    points_given: {
                      n: 4,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    points_received: {
                      n: 5,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    purchaseable: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = i.w0(s.M())), s.sm_mbf;
          }
          toObject(r = !1) {
            return s.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(s.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(s.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new s();
            return s.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(s.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(s.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
          }
        }
        class k extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.elanguage || i.Sg(k.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(k.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new k();
            return k.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(k.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(k.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Request";
          }
        }
        class w extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.reactions || i.Sg(w.M()),
              e.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { reactions: { n: 3, c: P, r: !0, q: !0 } },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(w.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new w();
            return w.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(w.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(w.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Response";
          }
        }
        class P extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.reactionid || i.Sg(P.M()),
              e.Message.initialize(this, r, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    reactionid: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    points_cost: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    points_transferred: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    valid_target_types: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    valid_ugc_types: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    purchaseable: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    localized_title: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_desc: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    available_until: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = i.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(P.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new P();
            return P.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(P.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(P.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
          }
        }
        class jr extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new jr();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new jr();
            return jr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
          }
        }
        class d extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.points_cost || i.Sg(d.M()),
              e.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    points_cost: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    upgrade_points_cost: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    purchasable_customization_types: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    upgradable_customization_types: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    max_slots_per_type: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    max_upgradable_level: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = i.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(d.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new d();
            return d.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(d.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(d.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
          }
        }
        class sr extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new sr();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new sr();
            return sr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Request";
          }
        }
        class G extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.apps || i.Sg(G.M()),
              e.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { apps: { n: 1, c: L, r: !0, q: !0 } },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = i.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(G.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new G();
            return G.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(G.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(G.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Response";
          }
        }
        class L extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.appid || i.Sg(L.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    has_items_anyone_can_purchase: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    event_app: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    hero_carousel_image: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    owned: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = i.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(L.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new L();
            return L.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(L.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(L.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
          }
        }
        class z extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.appid || i.Sg(z.M()),
              e.Message.initialize(this, r, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    defid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    community_item_class: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    community_item_type: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    point_cost: {
                      n: 6,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    timestamp_created: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_available: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_available_end: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    quantity: {
                      n: 10,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    internal_description: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    active: { n: 12, br: i.qM.readBool, bw: i.gp.writeBool },
                    community_item_data: { n: 13, c: o },
                    bundle_defids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    usable_duration: {
                      n: 16,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    bundle_discount: {
                      n: 17,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_free_until: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = i.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(z.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new z();
            return z.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition";
          }
        }
        class o extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.item_name || i.Sg(o.M()),
              e.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    item_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_title: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_description: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_image_small: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_image_large: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_webm: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_mp4: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_webm_small: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_mp4_small: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    animated: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                    badge_data: { n: 9, c: C, r: !0, q: !0 },
                    profile_theme_id: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    tiled: { n: 13, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(o.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new o();
            return o.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(o.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(o.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition_CommunityItemData";
          }
        }
        class C extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.level || i.Sg(C.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    level: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    image: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(C.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new C();
            return C.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(C.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(C.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition_BadgeData";
          }
        }
        class y extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.bonusid || i.Sg(y.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    bonusid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    active: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    points: { n: 4, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    timestamp_start: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_end: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    internal_description: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(y.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new y();
            return y.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardPurchaseBonus";
          }
        }
        class zr extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new zr();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new zr();
            return zr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
          }
        }
        class R extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.bonuses || i.Sg(R.M()),
              e.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: { bonuses: { n: 1, c: y, r: !0, q: !0 } },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(R.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new R();
            return R.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(R.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(R.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
          }
        }
        class O extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.appids || i.Sg(O.M()),
              e.Message.initialize(
                this,
                r,
                0,
                -1,
                [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
                null,
              );
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    time_available: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    community_item_classes: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readInt32,
                      pbr: i.qM.readPackedInt32,
                      bw: i.gp.writeRepeatedInt32,
                    },
                    language: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    count: { n: 5, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    cursor: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                    sort: {
                      n: 7,
                      d: Rr,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sort_descending: {
                      n: 8,
                      d: !0,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    reward_types: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    excluded_community_item_classes: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: i.qM.readInt32,
                      pbr: i.qM.readPackedInt32,
                      bw: i.gp.writeRepeatedInt32,
                    },
                    definitionids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    filters: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    filter_match_all_category_tags: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    filter_match_any_category_tags: {
                      n: 14,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    contains_definitionids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    include_direct_purchase_disabled: {
                      n: 16,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    excluded_content_descriptors: {
                      n: 17,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    excluded_appids: {
                      n: 18,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    excluded_store_tagids: {
                      n: 19,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    store_tagids: {
                      n: 20,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    search_term: {
                      n: 21,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(O.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new O();
            return O.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(O.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(O.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_QueryRewardItems_Request";
          }
        }
        class K extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.definitions || i.Sg(K.M()),
              e.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    definitions: { n: 1, c: z, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    count: { n: 3, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    next_cursor: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(K.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new K();
            return K.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(K.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(K.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_QueryRewardItems_Response";
          }
        }
        class H extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.requests || i.Sg(H.M()),
              e.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: { requests: { n: 1, c: O, r: !0, q: !0 } },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(H.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new H();
            return H.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(H.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(H.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
          }
        }
        class _ extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.responses || i.Sg(_.M()),
              e.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { responses: { n: 1, c: rr, r: !0, q: !0 } },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(_.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new _();
            return _.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
          }
        }
        class rr extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.eresult || i.Sg(rr.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    eresult: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    response: { n: 2, c: K },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = i.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(rr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new rr();
            return rr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
          }
        }
        class V extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.steamid || i.Sg(V.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(V.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new V();
            return V.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(V.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(V.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEquippedProfileItems_Request";
          }
        }
        class ir extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.active_definitions || i.Sg(ir.M()),
              e.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    active_definitions: { n: 1, c: z, r: !0, q: !0 },
                    inactive_definitions: { n: 2, c: z, r: !0, q: !0 },
                    bundle_definitions: { n: 3, c: z, r: !0, q: !0 },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = i.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ir.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              c = new ir();
            return ir.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEquippedProfileItems_Response";
          }
        }
        var or;
        ((u) => {
          function r(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetPointsForSpend#1",
              (0, b.I8)(F, m, g),
              Y,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          u.GetPointsForSpend = r;
          function t(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, b.I8)(v, m, g),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          u.GetSummary = t;
          function c(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, b.I8)(S, m, g),
              j,
              { ePrivilege: 1 },
            );
          }
          u.RedeemPoints = c;
          function mi(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, b.I8)(I, m, g),
              j,
              { ePrivilege: 1 },
            );
          }
          u.RedeemPointsForBadgeLevel = mi;
          function gi(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, b.I8)(J, m, g),
              j,
              { ePrivilege: 1 },
            );
          }
          u.RedeemPointsToUpgradeItem = gi;
          function ui(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, b.I8)(U, m, g),
              X,
              { ePrivilege: 1 },
            );
          }
          u.RedeemPointsForProfileCustomization = ui;
          function li(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, b.I8)(E, m, g),
              Wr,
              { ePrivilege: 1 },
            );
          }
          u.RedeemPointsForProfileCustomizationUpgrade = li;
          function fi(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, b.I8)(p, m, g),
              A,
              { ePrivilege: 1 },
            );
          }
          u.RegisterForSteamDeckRewards = fi;
          function si(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, b.I8)(x, m, g),
              hr,
              { ePrivilege: 1 },
            );
          }
          u.AddReaction = si;
          function zi(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, b.I8)(N, m, g),
              D,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          u.GetReactions = zi;
          function Ti(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, b.I8)(Q, m, g),
              q,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          u.GetReactionsSummaryForUser = Ti;
          function Wi(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, b.I8)(k, m, g),
              w,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          u.GetReactionConfig = Wi;
          function hi(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, b.I8)(jr, m, g),
              d,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          u.GetProfileCustomizationsConfig = hi;
          function ji(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, b.I8)(sr, m, g),
              G,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          u.GetEligibleApps = ji;
          function Oi(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, b.I8)(zr, m, g),
              R,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          u.GetActivePurchaseBonuses = Oi;
          function vi(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, b.I8)(O, m, g),
              K,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          u.QueryRewardItems = vi;
          function Si(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, b.I8)(H, m, g),
              _,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          u.BatchedQueryRewardItems = Si;
          function Ii(B, m, g) {
            return B.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, b.I8)(V, m, g),
              ir,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          u.GetEquippedProfileItems = Ii;
        })(or || (or = {}));
      },
      81944: (Lr, xr, a) => {
        a.d(xr, { J: () => n });
        var Tr = a(7850),
          nr = a(19298),
          br = a(90626),
          Br = a(79089),
          T = a(18938),
          e = a(2259);
        class n extends br.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = br.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(b) {
            this.UpdateObserver(b);
          }
          UpdateObserver(b) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              b &&
              (b.rootMargin != this.m_observer.rootMargin ||
                b.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let f = this.m_refElement.current;
            if (
              (this.m_observer &&
                f != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && f)
            ) {
              let er = { root: this.FindScrollableAncestor(f) };
              this.props.rootMargin && (er.rootMargin = this.props.rootMargin),
                this.props.thresholds && (er.threshold = this.props.thresholds),
                (this.m_observer = (0, e.md)(f, this.OnIntersection, er));
            }
            this.m_observer &&
              f &&
              f != this.m_elTracked &&
              (this.m_observer.observe(f), (this.m_elTracked = f));
          }
          FindScrollableAncestor(b) {
            return (0, Br.Kf)(b, (f) => {
              const W = this.props.horizontal
                ? window.getComputedStyle(f).overflowX
                : window.getComputedStyle(f).overflowY;
              return !!(
                W == "scroll" ||
                W == "auto" ||
                f.classList.contains(n.GetScrollableClassname())
              );
            });
          }
          HandleRef = (b) => {
            (0, T.cZ)(this.m_refElement, b),
              this.props.containerRef && (0, T.cZ)(this.props.containerRef, b);
          };
          OnIntersection = (b) => {
            let f = !1;
            for (const W of b)
              if (W.isIntersecting) {
                f = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != f &&
              ((this.m_bPreviouslyIntersecting = f),
              this.props.onVisibilityChange && this.props.onVisibilityChange(f),
              f && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: b,
              rootMargin: f,
              trigger: W,
              horizontal: er,
              containerRef: Or,
              ...vr
            } = this.props;
            return (0, Tr.jsx)(nr.Z, {
              ref: this.HandleRef,
              ...vr,
              children: this.props.children,
            });
          }
        }
      },
      84676: (Lr, xr, a) => {
        a.d(xr, {
          G6: () => er,
          Gg: () => Qr,
          Ow: () => vr,
          Sq: () => b,
          YM: () => Cr,
          eR: () => f,
          ik: () => W,
          mZ: () => qr,
          t7: () => Or,
          zX: () => kr,
        });
        var Tr = a(41735),
          nr = a.n(Tr),
          br = a(90626),
          Br = a(72604),
          T = a(48156),
          e = a(30096),
          n = a(10142);
        function i(M, l, h = !0) {
          const tr = h
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            lr = h || CStoreItemCache.Get().BHasStoreItem(M, l, tr) ? M : null,
            [cr, mr] = er(lr, l, tr),
            [ar, Sr] = useState(null),
            [fr, Ir] = er(ar, l, tr);
          useEffect(() => {
            cr?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              Sr(cr.GetParentAppID());
          }, [cr]);
          let gr = cr?.GetShortDescription()
            ? StripBBCodeTags(cr.GetShortDescription())
            : "";
          (!gr || gr.length === 0) &&
            fr &&
            (gr = fr?.GetShortDescription()
              ? StripBBCodeTags(fr.GetShortDescription())
              : "");
          const Ur = mr == W && (!ar || Ir == W);
          return [gr, Ur];
        }
        const b = 1,
          f = 2,
          W = 3;
        function er(M, l, h, tr) {
          const lr = (0, br.useRef)(void 0),
            cr = (0, br.useRef)(void 0),
            mr = (0, e.CH)();
          lr.current = M;
          const [ar, Sr] = (0, br.useState)(void 0),
            {
              include_assets: fr,
              include_release: Ir,
              include_platforms: gr,
              include_all_purchase_options: Ur,
              include_screenshots: Kr,
              include_trailers: Hr,
              include_ratings: Vr,
              include_tag_count: Zr,
              include_reviews: $r,
              include_basic_info: Fr,
              include_supported_languages: Yr,
              include_full_description: Jr,
              include_included_items: Xr,
              include_assets_without_overrides: pr,
              apply_user_filters: dr,
              include_links: ur,
              include_extra_details: Ar,
              include_optin_registration_tags: Dr,
            } = h;
          if (
            ((0, br.useEffect)(() => {
              const Er = {
                include_assets: fr,
                include_release: Ir,
                include_platforms: gr,
                include_all_purchase_options: Ur,
                include_screenshots: Kr,
                include_trailers: Hr,
                include_ratings: Vr,
                include_tag_count: Zr,
                include_reviews: $r,
                include_basic_info: Fr,
                include_supported_languages: Yr,
                include_full_description: Jr,
                include_included_items: Xr,
                include_assets_without_overrides: pr,
                apply_user_filters: dr,
                include_links: ur,
                include_extra_details: Ar,
                include_optin_registration_tags: Dr,
              };
              let Gr = null;
              return (
                !M ||
                  M < 0 ||
                  n.A.Get().BHasStoreItem(M, l, Er) ||
                  (ar !== void 0 && tr && tr == cr.current) ||
                  (tr !== cr.current && (Sr(void 0), (cr.current = tr)),
                  (Gr = nr().CancelToken.source()),
                  n.A.Get()
                    .QueueStoreItemRequest(M, l, Er)
                    .then((yr) => {
                      !Gr?.token.reason && lr.current === M && Sr(yr == Br.R),
                        mr();
                    })),
                () => Gr?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              M,
              l,
              tr,
              ar,
              fr,
              Ir,
              gr,
              Ur,
              Kr,
              Hr,
              Vr,
              Zr,
              $r,
              Fr,
              Yr,
              Jr,
              Xr,
              pr,
              dr,
              ur,
              Ar,
              Dr,
              mr,
            ]),
            !M)
          )
            return [null, f];
          if (ar === !1) return [void 0, f];
          if (n.A.Get().BIsStoreItemMissing(M, l)) return [void 0, f];
          if (!n.A.Get().BHasStoreItem(M, l, h)) return [void 0, b];
          const Pr = n.A.Get().GetStoreItemWithLegacyVisibilityCheck(M, l);
          return Pr ? [Pr, W] : [null, f];
        }
        function Or(M, l, h) {
          return er(M, T.c6.qI, l, h);
        }
        function vr(M, l, h) {
          return er(M, T.c6.xO, l, h);
        }
        function Qr(M, l, h) {
          return er(M, T.c6.RD, l, h);
        }
        function qr(M, l, h) {
          const [tr, lr] = er(M, l, h);
          let cr;
          tr?.GetStoreItemType() == T.c6.RD &&
            !tr.GetAssets()?.GetHeaderURL() &&
            tr?.GetIncludedAppIDs().length == 1 &&
            (cr = tr.GetIncludedAppIDs()[0]);
          const [mr, ar] = Or(cr, h);
          return cr && mr?.BIsVisible() ? [mr, ar] : [tr, lr];
        }
        function Nr(M, l, h, tr) {
          const lr = (0, e.CH)(),
            {
              include_assets: cr,
              include_release: mr,
              include_platforms: ar,
              include_all_purchase_options: Sr,
              include_screenshots: fr,
              include_trailers: Ir,
              include_ratings: gr,
              include_tag_count: Ur,
              include_reviews: Kr,
              include_basic_info: Hr,
              include_supported_languages: Vr,
              include_full_description: Zr,
              include_included_items: $r,
              include_assets_without_overrides: Fr,
              apply_user_filters: Yr,
              include_links: Jr,
              include_extra_details: Xr,
              include_optin_registration_tags: pr,
            } = h;
          return (
            (0, br.useEffect)(() => {
              if (!M || M.length == 0) return;
              const ur = {
                  include_assets: cr,
                  include_release: mr,
                  include_platforms: ar,
                  include_all_purchase_options: Sr,
                  include_screenshots: fr,
                  include_trailers: Ir,
                  include_ratings: gr,
                  include_tag_count: Ur,
                  include_reviews: Kr,
                  include_basic_info: Hr,
                  include_supported_languages: Vr,
                  include_full_description: Zr,
                  include_included_items: $r,
                  include_assets_without_overrides: Fr,
                  apply_user_filters: Yr,
                  include_links: Jr,
                  include_extra_details: Xr,
                  include_optin_registration_tags: pr,
                },
                Ar = M.filter(
                  (Er) =>
                    !(
                      n.A.Get().BHasStoreItem(Er, l, ur) ||
                      n.A.Get().BIsStoreItemMissing(Er, l)
                    ),
                );
              if (Ar.length == 0) return;
              const Dr = nr().CancelToken.source(),
                Pr = Ar.map((Er) => n.A.Get().QueueStoreItemRequest(Er, l, ur));
              return (
                Promise.all(Pr).then(() => {
                  Dr.token.reason || lr();
                }),
                () => Dr.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              M,
              l,
              tr,
              lr,
              cr,
              mr,
              ar,
              Sr,
              fr,
              Ir,
              gr,
              Ur,
              Kr,
              Hr,
              Vr,
              Zr,
              $r,
              Fr,
              Yr,
              Jr,
              Xr,
              pr,
            ]),
            M
              ? M.every(
                  (ur) =>
                    n.A.Get().BHasStoreItem(ur, l, h) ||
                    n.A.Get().BIsStoreItemMissing(ur, l),
                )
                ? M.every((ur) =>
                    n.A.Get().GetStoreItemWithLegacyVisibilityCheck(ur, l),
                  )
                  ? W
                  : f
                : b
              : f
          );
        }
        function kr(M, l, h) {
          return Nr(M, T.c6.qI, l, h);
        }
        function Mr(M, l, h) {
          return Nr(M, EStoreItemType.k_EStoreItemType_Bundle, l, h);
        }
        function wr(M, l, h) {
          return Nr(M, EStoreItemType.k_EStoreItemType_Package, l, h);
        }
        function Cr() {
          br.useEffect(
            () => (
              n.A.Get().SetReturnUnavailableItems(!0),
              () => n.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      13465: (Lr, xr, a) => {
        a.d(xr, { c: () => br });
        var Tr = a(7850),
          nr = a(90626);
        function br(Br) {
          const {
              rgSources: T,
              onIncrementalError: e,
              onError: n,
              strAltText: i,
              ref: b,
              ...f
            } = Br,
            [W, er] = nr.useState(0),
            Or = nr.useMemo(() => JSON.stringify(T), [T]),
            [vr, Qr] = nr.useState(Or);
          vr != Or && (Qr(Or), er(0));
          const qr = nr.useMemo(() => {
              let Mr = "";
              return (
                T && T.length > W && (Mr = T[W]),
                Mr ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    Br,
                    W,
                  ),
                  (Mr =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                Mr
              );
            }, [T, W, Br]),
            Nr = nr.useCallback(
              (Mr) => {
                e?.(Mr, T[W], W);
                const wr = W + 1;
                wr >= T.length && n && n(Mr), wr < T.length && er(wr);
              },
              [W, n, e, T],
            ),
            kr = nr.useRef(null);
          return (
            nr.useImperativeHandle(
              b,
              () => ({ imgRef: kr, nSourceIndex: W, nSourceLength: T.length }),
              [kr, W, T],
            ),
            nr.useEffect(() => {
              const Mr = kr.current;
              Mr?.complete && Mr.naturalWidth == 0 && (Mr.src = Mr.src);
            }, []),
            (0, Tr.jsx)(
              "img",
              { ref: kr, ...f, src: qr, onError: Nr, alt: i },
              vr,
            )
          );
        }
      },
    },
  ]);
})();
