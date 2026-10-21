/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [24317],
    {
      24642: (br, nr, C) => {
        C.d(nr, { D: () => tr });
        var ir = C(84346);
        function tr(c) {
          return c.toLocaleString((0, ir.J)());
        }
      },
      9591: (br, nr, C) => {
        C.d(nr, {
          RY: () => u,
          Sm: () => T,
          bA: () => l,
          pt: () => a,
          Pw: () => tr,
          Pk: () => ir,
          l3: () => z,
          a9: () => cr,
        });
        var ir = {};
        C.r(ir), C.d(ir, { au: () => Mr });
        var tr = {};
        C.r(tr),
          C.d(tr, {
            Zp: () => fr,
            uz: () => zr,
            Ri: () => Br,
            BZ: () => mr,
            tN: () => gr,
            j3: () => er,
          });
        var c = C(80613),
          n = C.n(c),
          i = C(75245),
          L = C(35038);
        const Mr = 0,
          Hr = 1,
          Er = 2,
          $r = 3,
          Jr = 4,
          Zr = 5,
          Yr = 6,
          Vr = 7,
          Xr = 8,
          Fr = 9,
          sr = 10,
          Qr = 11,
          Ar = 12,
          pr = 13,
          qr = 14,
          Dr = 15,
          wr = 16,
          Pr = 17,
          Gr = 18,
          dr = 19,
          Lr = 20,
          Cr = 21,
          yr = 22,
          or = 23,
          Rr = 24,
          _r = 25,
          ri = 26,
          ii = 27,
          ti = 28,
          ni = 29,
          ci = 30,
          bi = 31,
          Mi = 32,
          Bi = 33,
          ei = 34,
          gi = 35,
          Br = 0,
          er = 1,
          gr = 2,
          mr = 3,
          zr = 4,
          fr = 5,
          ar = 1,
          mi = 2;
        function zi(g) {
          return "unknown ELoyaltyRewardAuditType ( " + g + " )";
        }
        function fi(g) {
          return "unknown ELoyaltyRewardDefinitionID ( " + g + " )";
        }
        function ai(g) {
          return "unknown ELoyaltyRewardType ( " + g + " )";
        }
        function ui(g) {
          return "unknown ELoyaltyRewardPointTransferType ( " + g + " )";
        }
        function li(g) {
          return "unknown ELoyaltyRewardReactionType ( " + g + " )";
        }
        function Ti(g) {
          return "unknown ELoyaltyRewardReactionTargetType ( " + g + " )";
        }
        function Wi(g) {
          return "unknown ELoyaltyRewardsQuerySort ( " + g + " )";
        }
        function ji(g) {
          return "unknown ELoyaltyRewardQueryFilter ( " + g + " )";
        }
        class a extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              a.prototype.steamid || i.Sg(a.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = i.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(a.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new a();
            return a.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(a.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(a.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Request";
          }
        }
        class O extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.summary || i.Sg(O.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    summary: { n: 1, c: v },
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
              b = new O();
            return O.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetSummary_Response";
          }
        }
        class v extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.points || i.Sg(v.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
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
              b = new v();
            return v.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetSummary_Response_Summary";
          }
        }
        class h extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.amount || i.Sg(h.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
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
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = i.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(h.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new h();
            return h.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(h.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(h.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetPointsForSpend_Request";
          }
        }
        class S extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.points || i.Sg(S.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    points: {
                      n: 1,
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
              b = new S();
            return S.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetPointsForSpend_Response";
          }
        }
        class U extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.defid || i.Sg(U.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    defid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    expected_points_cost: {
                      n: 2,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
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
              b = new U();
            return U.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_RedeemPoints_Request";
          }
        }
        class x extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.defid || i.Sg(x.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
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
              b = new x();
            return x.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
          }
        }
        class N extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.defid || i.Sg(N.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    defid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    communityitemid: {
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
              b = new N();
            return N.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
          }
        }
        class f extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.communityitemid || i.Sg(f.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
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
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = i.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(f.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new f();
            return f.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(f.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(f.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPoints_Response";
          }
        }
        class I extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.customization_type || i.Sg(I.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
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
              b = new I();
            return I.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
          }
        }
        class k extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.purchaseid || i.Sg(k.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    purchaseid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
              b = new k();
            return k.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
          }
        }
        class K extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.customization_type || i.Sg(K.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
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
              b = new K();
            return K.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
          }
        }
        class y extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new y();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new y();
            return y.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
          }
        }
        class H extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.serial_number || i.Sg(H.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
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
              b = new H();
            return H.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
          }
        }
        class E extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.granted_profile_modifier || i.Sg(E.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    granted_profile_modifier: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
              b = new E();
            return E.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
          }
        }
        class u extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.target_type || i.Sg(u.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
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
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(u.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new u();
            return u.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(u.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(u.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_AddReaction_Request";
          }
        }
        class o extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new o();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new o();
            return o.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_AddReaction_Response";
          }
        }
        class l extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.target_type || i.Sg(l.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
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
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = i.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(l.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new l();
            return l.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(l.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(l.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactions_Request";
          }
        }
        class $ extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.reactionids || i.Sg($.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
              b = new $();
            return $.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetReactions_Response";
          }
        }
        class J extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.steamid || i.Sg(J.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
              b = new J();
            return J.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
          }
        }
        class Z extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.total || i.Sg(Z.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2, 3, 4, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    total: { n: 1, c: m, r: !0, q: !0 },
                    user_reviews: { n: 2, c: m, r: !0, q: !0 },
                    ugc: { n: 3, c: m, r: !0, q: !0 },
                    profile: { n: 4, c: m, r: !0, q: !0 },
                    forum_topics: { n: 5, c: m, r: !0, q: !0 },
                    comments: { n: 6, c: m, r: !0, q: !0 },
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
              b = new Z();
            return Z.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
          }
        }
        class m extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.reactionid || i.Sg(m.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
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
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = i.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(m.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new m();
            return m.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(m.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(m.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
          }
        }
        class T extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.elanguage || i.Sg(T.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(T.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new T();
            return T.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(T.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(T.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Request";
          }
        }
        class Y extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.reactions || i.Sg(Y.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: { reactions: { n: 3, c: V, r: !0, q: !0 } },
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
              b = new Y();
            return Y.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetReactionConfig_Response";
          }
        }
        class V extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.reactionid || i.Sg(V.M()),
              c.Message.initialize(this, r, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
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
              b = new V();
            return V.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
          }
        }
        class R extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new R();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new R();
            return R.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
          }
        }
        class X extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.points_cost || i.Sg(X.M()),
              c.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
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
              b = new X();
            return X.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
          }
        }
        class _ extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new _();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new _();
            return _.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Request";
          }
        }
        class F extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.apps || i.Sg(F.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: { apps: { n: 1, c: s, r: !0, q: !0 } },
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
              b = new F();
            return F.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetEligibleApps_Response";
          }
        }
        class s extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.appid || i.Sg(s.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
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
              b = new s();
            return s.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
          }
        }
        class z extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.appid || i.Sg(z.M()),
              c.Message.initialize(this, r, 0, -1, [15], null);
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
                    community_item_data: { n: 13, c: Q },
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
              b = new z();
            return z.deserializeBinaryFromReader(b, t);
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
        class Q extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.item_name || i.Sg(Q.M()),
              c.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
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
                    badge_data: { n: 9, c: A, r: !0, q: !0 },
                    profile_theme_id: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    tiled: { n: 13, br: i.qM.readBool, bw: i.gp.writeBool },
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
              b = new Q();
            return Q.deserializeBinaryFromReader(b, t);
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
            return "LoyaltyRewardDefinition_CommunityItemData";
          }
        }
        class A extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.level || i.Sg(A.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    level: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    image: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
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
              b = new A();
            return A.deserializeBinaryFromReader(b, t);
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
            return "LoyaltyRewardDefinition_BadgeData";
          }
        }
        class p extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.bonusid || i.Sg(p.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
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
              b = new p();
            return p.deserializeBinaryFromReader(b, t);
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
            return "LoyaltyRewardPurchaseBonus";
          }
        }
        class rr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new rr();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new rr();
            return rr.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
          }
        }
        class q extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.bonuses || i.Sg(q.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: { bonuses: { n: 1, c: p, r: !0, q: !0 } },
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
              b = new q();
            return q.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
          }
        }
        class W extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.appids || i.Sg(W.M()),
              c.Message.initialize(
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
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
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
                      d: ar,
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
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(W.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              b = new W();
            return W.deserializeBinaryFromReader(b, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(W.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(W.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_QueryRewardItems_Request";
          }
        }
        class j extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.definitions || i.Sg(j.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
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
              b = new j();
            return j.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_QueryRewardItems_Response";
          }
        }
        class D extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.requests || i.Sg(D.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: { requests: { n: 1, c: W, r: !0, q: !0 } },
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
              b = new D();
            return D.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
          }
        }
        class w extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.responses || i.Sg(w.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { responses: { n: 1, c: P, r: !0, q: !0 } },
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
              b = new w();
            return w.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
          }
        }
        class P extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.eresult || i.Sg(P.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    eresult: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    response: { n: 2, c: j },
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
              b = new P();
            return P.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
          }
        }
        class G extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.steamid || i.Sg(G.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
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
              b = new G();
            return G.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetEquippedProfileItems_Request";
          }
        }
        class d extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.active_definitions || i.Sg(d.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    active_definitions: { n: 1, c: z, r: !0, q: !0 },
                    inactive_definitions: { n: 2, c: z, r: !0, q: !0 },
                    bundle_definitions: { n: 3, c: z, r: !0, q: !0 },
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
              b = new d();
            return d.deserializeBinaryFromReader(b, t);
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
            return "CLoyaltyRewards_GetEquippedProfileItems_Response";
          }
        }
        var cr;
        ((g) => {
          function r(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetPointsForSpend#1",
              (0, L.I8)(h, B, e),
              S,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GetPointsForSpend = r;
          function t(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, L.I8)(a, B, e),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          g.GetSummary = t;
          function b(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, L.I8)(U, B, e),
              f,
              { ePrivilege: 1 },
            );
          }
          g.RedeemPoints = b;
          function ur(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, L.I8)(x, B, e),
              f,
              { ePrivilege: 1 },
            );
          }
          g.RedeemPointsForBadgeLevel = ur;
          function lr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, L.I8)(N, B, e),
              f,
              { ePrivilege: 1 },
            );
          }
          g.RedeemPointsToUpgradeItem = lr;
          function Tr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, L.I8)(I, B, e),
              k,
              { ePrivilege: 1 },
            );
          }
          g.RedeemPointsForProfileCustomization = Tr;
          function Wr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, L.I8)(K, B, e),
              y,
              { ePrivilege: 1 },
            );
          }
          g.RedeemPointsForProfileCustomizationUpgrade = Wr;
          function jr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, L.I8)(H, B, e),
              E,
              { ePrivilege: 1 },
            );
          }
          g.RegisterForSteamDeckRewards = jr;
          function Or(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, L.I8)(u, B, e),
              o,
              { ePrivilege: 1 },
            );
          }
          g.AddReaction = Or;
          function vr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, L.I8)(l, B, e),
              $,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          g.GetReactions = vr;
          function hr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, L.I8)(J, B, e),
              Z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GetReactionsSummaryForUser = hr;
          function Sr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, L.I8)(T, B, e),
              Y,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GetReactionConfig = Sr;
          function Ur(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, L.I8)(R, B, e),
              X,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GetProfileCustomizationsConfig = Ur;
          function xr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, L.I8)(_, B, e),
              F,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GetEligibleApps = xr;
          function Nr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, L.I8)(rr, B, e),
              q,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GetActivePurchaseBonuses = Nr;
          function Ir(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, L.I8)(W, B, e),
              j,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          g.QueryRewardItems = Ir;
          function kr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, L.I8)(D, B, e),
              w,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          g.BatchedQueryRewardItems = kr;
          function Kr(M, B, e) {
            return M.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, L.I8)(G, B, e),
              d,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GetEquippedProfileItems = Kr;
        })(cr || (cr = {}));
      },
    },
  ]);
})();
