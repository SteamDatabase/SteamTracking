/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2837],
  {
    14860: (e, t, r) => {
      r.d(t, {
        eS: () => ot,
        IN: () => nt,
        Tv: () => Ne,
        w1: () => yt,
        Vo: () => gt,
        Bc: () => Ye,
        v2: () => Xe,
        tN: () => zt,
        fO: () => wt,
        TI: () => Ve,
        Y0: () => Ke,
        Hs: () => Qe,
        N0: () => He,
        vo: () => ke,
        Ww: () => dt,
        Xq: () => pt,
        HM: () => Je,
        DD: () => $e,
        Qn: () => at,
        BO: () => it,
        gv: () => ut,
        p8: () => ct,
        lF: () => St,
        _K: () => Ze,
        Yc: () => rt,
        $N: () => Ft,
        Ke: () => st,
        ll: () => tt,
        RC: () => mt,
        yM: () => _t,
        YW: () => Mt,
        vu: () => ht,
        QU: () => et,
      });
      var i,
        a,
        s = r(90626),
        n = r(56545),
        o = r(20194),
        l = r(75233),
        m = r(51614),
        u = r(57168),
        c = r(68950),
        d = r(23809),
        y = r(80613),
        g = r.n(y),
        B = r(89068);
      class _ extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.name || B.Sg(_.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  name: { n: 1, br: B.qM.readString, bw: B.gp.writeString },
                  steamid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = B.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Request";
        }
      }
      class p extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.family_groupid || B.Sg(p.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  cooldown_skip_granted: {
                    n: 2,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = B.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Response";
        }
      }
      class f extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.family_groupid || B.Sg(f.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  send_running_apps: {
                    n: 2,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = B.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Request";
        }
      }
      class b extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || B.Sg(b.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  role: { n: 2, br: B.qM.readEnum, bw: B.gp.writeEnum },
                  time_joined: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  cooldown_seconds_remaining: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = B.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMember";
        }
      }
      class M extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || B.Sg(M.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  role: { n: 2, br: B.qM.readEnum, bw: B.gp.writeEnum },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = B.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInvite";
        }
      }
      class w extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || B.Sg(w.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = B.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupFormerMember";
        }
      }
      class z extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.name || B.Sg(z.M()),
            y.Message.initialize(this, e, 0, -1, [2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  name: { n: 1, br: B.qM.readString, bw: B.gp.writeString },
                  members: { n: 2, c: b, r: !0, q: !0 },
                  pending_invites: { n: 3, c: M, r: !0, q: !0 },
                  free_spots: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  country: { n: 5, br: B.qM.readString, bw: B.gp.writeString },
                  slot_cooldown_remaining_seconds: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  former_members: { n: 7, c: w, r: !0, q: !0 },
                  slot_cooldown_overrides: {
                    n: 8,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = B.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Response";
        }
      }
      class F extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.family_groupid || B.Sg(F.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  role: { n: 2, br: B.qM.readEnum, bw: B.gp.writeEnum },
                  inviter_steamid: {
                    n: 3,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  awaiting_2fa: { n: 4, br: B.qM.readBool, bw: B.gp.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = B.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInviteForUser";
        }
      }
      class S extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.steamid || B.Sg(S.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  include_family_group_response: {
                    n: 2,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = B.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Request";
        }
      }
      class h extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.family_groupid || B.Sg(h.M()),
            y.Message.initialize(this, e, 0, -1, [5], null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  is_not_member_of_any_group: {
                    n: 2,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  latest_time_joined: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  latest_joined_family_groupid: {
                    n: 4,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  pending_group_invites: { n: 5, c: F, r: !0, q: !0 },
                  role: { n: 6, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  cooldown_seconds_remaining: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  family_group: { n: 8, c: z },
                  can_undelete_last_joined_family: {
                    n: 9,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = B.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Response";
        }
      }
      class R extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.family_groupid || B.Sg(R.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  name: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = B.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
        }
      }
      class I extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
        }
      }
      class C extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.family_groupid || B.Sg(C.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  receiver_steamid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  receiver_role: {
                    n: 3,
                    br: B.qM.readEnum,
                    bw: B.gp.writeEnum,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = B.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Request";
        }
      }
      class v extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.invite_id || B.Sg(v.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  invite_id: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  two_factor_method: {
                    n: 2,
                    br: B.qM.readEnum,
                    bw: B.gp.writeEnum,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = B.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Response";
        }
      }
      class T extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.family_groupid || B.Sg(T.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  nonce: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = B.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Request";
        }
      }
      class j extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.two_factor_method || B.Sg(j.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  two_factor_method: {
                    n: 2,
                    br: B.qM.readEnum,
                    bw: B.gp.writeEnum,
                  },
                  cooldown_skip_granted: {
                    n: 3,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  invite_already_accepted: {
                    n: 4,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = B.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Response";
        }
      }
      class q extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.family_groupid || B.Sg(q.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  steamid_to_remove: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = B.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Request";
        }
      }
      class W extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Response";
        }
      }
      class O extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.family_groupid || B.Sg(O.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  steamid_to_cancel: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = B.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Request";
        }
      }
      class G extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Response";
        }
      }
      class U extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.family_groupid || B.Sg(U.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = B.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Request";
        }
      }
      class L extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (g().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Response";
        }
      }
      class E extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.family_groupid || B.Sg(E.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  client_instance_id: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = B.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Request";
        }
      }
      class A extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.users || B.Sg(A.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  users: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: B.qM.readFixed64String,
                    pbr: B.qM.readPackedFixed64String,
                    bw: B.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = B.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Response";
        }
      }
      class D extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.family_groupid || B.Sg(D.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  store_country_code: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  use_account_cart: {
                    n: 4,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = B.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Request";
        }
      }
      class x extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.gidshoppingcart || B.Sg(x.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = B.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Response";
        }
      }
      class P extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.family_groupid || B.Sg(P.M()),
            y.Message.initialize(this, e, 0, -1, [3], null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  request_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint64String,
                    pbr: B.qM.readPackedUint64String,
                    bw: B.gp.writeRepeatedUint64String,
                  },
                  rt_include_completed_since: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = B.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Request";
        }
      }
      class N extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.requester_steamid || B.Sg(N.M()),
            y.Message.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  requester_steamid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  time_requested: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  time_responded: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  responder_steamid: {
                    n: 5,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  response_action: {
                    n: 6,
                    br: B.qM.readEnum,
                    bw: B.gp.writeEnum,
                  },
                  is_completed: { n: 7, br: B.qM.readBool, bw: B.gp.writeBool },
                  request_id: {
                    n: 8,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  requested_packageids: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                  purchased_packageids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                  requested_bundleids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                  purchased_bundleids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = B.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PurchaseRequest";
        }
      }
      class k extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.requests || B.Sg(k.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { requests: { n: 1, c: N, r: !0, q: !0 } },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = B.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Response";
        }
      }
      class H extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.family_groupid || B.Sg(H.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  action: { n: 3, br: B.qM.readEnum, bw: B.gp.writeEnum },
                  request_id: {
                    n: 4,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = B.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Request";
        }
      }
      class Q extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Response";
        }
      }
      class V extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.family_groupid || B.Sg(V.M()),
            y.Message.initialize(this, e, 0, -1, [2], null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  running_apps: { n: 2, c: $, r: !0, q: !0 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = B.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification";
        }
      }
      class K extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.member_steamid || B.Sg(K.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  member_steamid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  owner_steamid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = B.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
        }
      }
      class $ extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.appid || B.Sg($.M()),
            y.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  playing_members: { n: 3, c: K, r: !0, q: !0 },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = B.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT($.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
        }
      }
      class J extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_InviteStatus_Notification";
        }
      }
      class Y extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.family_groupid || B.Sg(Y.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = B.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_GroupChanged_Notification";
        }
      }
      class X extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.family_groupid || B.Sg(X.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = B.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Request";
        }
      }
      class Z extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.changes || B.Sg(Z.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { changes: { n: 1, c: ee, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = B.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response";
        }
      }
      class ee extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.timestamp || B.Sg(ee.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  timestamp: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  actor_steamid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  type: { n: 3, br: B.qM.readEnum, bw: B.gp.writeEnum },
                  body: { n: 4, br: B.qM.readString, bw: B.gp.writeString },
                  by_support: { n: 5, br: B.qM.readBool, bw: B.gp.writeBool },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = B.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response_Change";
        }
      }
      class te extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steamid || B.Sg(te.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  first_played: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  latest_played: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  seconds_played: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = B.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_PlaytimeEntry";
        }
      }
      class re extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.family_groupid || B.Sg(re.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = B.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Request";
        }
      }
      class ie extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.entries || B.Sg(ie.M()),
            y.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  entries: { n: 1, c: te, r: !0, q: !0 },
                  entries_by_owner: { n: 2, c: te, r: !0, q: !0 },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = B.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Response";
        }
      }
      class ae extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.family_groupid || B.Sg(ae.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  cooldown_count: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = B.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
        }
      }
      class se extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
        }
      }
      class ne extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.family_groupid || B.Sg(ne.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  include_own: { n: 2, br: B.qM.readBool, bw: B.gp.writeBool },
                  include_excluded: {
                    n: 3,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  language: { n: 5, br: B.qM.readString, bw: B.gp.writeString },
                  max_apps: { n: 6, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  include_non_games: {
                    n: 7,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  steamid: {
                    n: 8,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = B.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Request";
        }
      }
      class oe extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.apps || B.Sg(oe.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  apps: { n: 1, c: le, r: !0, q: !0 },
                  owner_steamid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = B.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response";
        }
      }
      class le extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.appid || B.Sg(le.M()),
            y.Message.initialize(this, e, 0, -1, [2, 15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  owner_steamids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: B.qM.readFixed64String,
                    pbr: B.qM.readPackedFixed64String,
                    bw: B.gp.writeRepeatedFixed64String,
                  },
                  name: { n: 6, br: B.qM.readString, bw: B.gp.writeString },
                  sort_as: { n: 7, br: B.qM.readString, bw: B.gp.writeString },
                  capsule_filename: {
                    n: 8,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  img_icon_hash: {
                    n: 9,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  exclude_reason: {
                    n: 10,
                    d: 0,
                    br: B.qM.readEnum,
                    bw: B.gp.writeEnum,
                  },
                  rt_time_acquired: {
                    n: 11,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rt_last_played: {
                    n: 12,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rt_playtime: {
                    n: 13,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  app_type: {
                    n: 14,
                    d: 1,
                    br: B.qM.readEnum,
                    bw: B.gp.writeEnum,
                  },
                  content_descriptors: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = B.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
        }
      }
      class me extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.family_groupid || B.Sg(me.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = B.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
        }
      }
      class ue extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ue();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
        }
      }
      class ce extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.family_groupid || B.Sg(ce.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = B.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
        }
      }
      class de extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new de();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
        }
      }
      class ye extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.family_groupid || B.Sg(ye.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = B.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
        }
      }
      class ge extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ge();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
        }
      }
      class Be extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.family_groupid || B.Sg(Be.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  appid: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  lender_steamid: {
                    n: 3,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = B.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Request";
        }
      }
      class _e extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _e();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Response";
        }
      }
      class pe extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.family_groupid || B.Sg(pe.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = B.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Request";
        }
      }
      class fe extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.members || B.Sg(fe.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { members: { n: 1, c: be, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = B.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response";
        }
      }
      class be extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.steamid || B.Sg(be.M()),
            y.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  steamid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  preferred_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = B.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
        }
      }
      class Me extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.family_groupid || B.Sg(Me.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = B.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Request";
        }
      }
      class we extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new we();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Response";
        }
      }
      class ze extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.family_groupid || B.Sg(ze.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = B.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Request";
        }
      }
      class Fe extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Fe();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Response";
        }
      }
      class Se extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.family_groupid || B.Sg(Se.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = B.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Request";
        }
      }
      class he extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.wallet_country_matches || B.Sg(he.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  ip_match: { n: 2, br: B.qM.readBool, bw: B.gp.writeBool },
                  join_restriction: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = B.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Response";
        }
      }
      class Re extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.steamid || B.Sg(Re.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  steamid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  invite_id: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = B.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Request";
        }
      }
      class Ie extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ie();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Response";
        }
      }
      !(function (e) {
        (e.CreateFamilyGroup = function (e, t) {
          return e.SendMsg(
            "FamilyGroups.CreateFamilyGroup#1",
            (0, n.I8)(_, t),
            p,
            { ePrivilege: 1 },
          );
        }),
          (e.GetFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, n.I8)(f, t),
              z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFamilyGroupForUser = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, n.I8)(S, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ModifyFamilyGroupDetails = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, n.I8)(R, t),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.InviteToFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, n.I8)(C, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmInviteToFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, n.I8)(me, t),
              ue,
              { ePrivilege: 1 },
            );
          }),
          (e.ResendInvitationToFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, n.I8)(ye, t),
              ge,
              { ePrivilege: 1 },
            );
          }),
          (e.JoinFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, n.I8)(T, t),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmJoinFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, n.I8)(ce, t),
              de,
              { ePrivilege: 1 },
            );
          }),
          (e.RemoveFromFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, n.I8)(q, t),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelFamilyGroupInvite = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, n.I8)(O, t),
              G,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUsersSharingDevice = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, n.I8)(E, t),
              A,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeleteFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, n.I8)(U, t),
              L,
              { ePrivilege: 1 },
            );
          }),
          (e.UndeleteFamilyGroup = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, n.I8)(Me, t),
              we,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlaytimeSummary = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, n.I8)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.RequestPurchase = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, n.I8)(D, t),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPurchaseRequests = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, n.I8)(P, t),
              k,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RespondToRequestedPurchase = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, n.I8)(H, t),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetChangeLog = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, n.I8)(X, t),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetFamilyCooldownOverrides = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, n.I8)(ae, t),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSharedLibraryApps = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, n.I8)(ne, t),
              oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPreferredLender = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, n.I8)(Be, t),
              _e,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferredLenders = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, n.I8)(pe, t),
              fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ForceAcceptInvite = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, n.I8)(ze, t),
              Fe,
              { ePrivilege: 5 },
            );
          }),
          (e.GetInviteCheckResults = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, n.I8)(Se, t),
              he,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ClearCooldownSkip = function (e, t) {
            return e.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, n.I8)(Re, t),
              Ie,
              { ePrivilege: 5 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: V,
          }),
            (e.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: J,
            }),
            (e.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: Y,
            });
        })(a || (a = {}));
      var Ce = r(37735),
        ve = r(61859),
        Te = (r(71430), r(30470)),
        je = r(2627),
        qe = r(15419),
        We = r(41338),
        Oe = r(29233);
      const Ge = (e, t) =>
          void 0 === t
            ? ["get_family_group_for_user ", e]
            : ["get_family_group_for_user ", e, t],
        Ue = (e) => ["get_family_group", e],
        Le = (e) => ["get_family_history", e],
        Ee = (e) => ["get_users_sharing_device", e],
        Ae = (e) => ["recent_playtime_sessions", e];
      function De(e, t, r) {
        return r
          ? ["get_purchase_requests", e, t, r]
          : t
            ? ["get_purchase_requests", e, t]
            : ["get_purchase_requests", e];
      }
      function xe(e, t) {
        if (1 != e) throw e;
      }
      const Pe = s.createContext({ staleTimeMs: 1 / 0 });
      function Ne(e) {
        const { staleTimeMs: t, children: r } = e,
          i = s.useMemo(() => ({ staleTimeMs: t ?? 3e3 }), [t]);
        return s.createElement(Pe.Provider, { value: i }, r);
      }
      function ke(e = !1) {
        return He((0, c.LH)(), e);
      }
      function He(e, t = !1) {
        const r = (0, d.KV)(),
          a = (0, s.useContext)(Pe).staleTimeMs;
        return (0, o.I)({
          queryKey: Ge(e, t),
          queryFn: async () => {
            const a = n.w.Init(S);
            a.Body().set_steamid(e),
              a.Body().set_include_family_group_response(t);
            const s = await i.GetFamilyGroupForUser(r, a);
            return xe(s.GetEResult()), s.Body();
          },
          staleTime: a,
          enabled: !!e,
          placeholderData: e ? void 0 : new h(),
        });
      }
      function Qe(e) {
        const t = (0, d.KV)(),
          r = (0, s.useContext)(Pe).staleTimeMs;
        return (0, o.I)({
          queryKey: Ue(e),
          queryFn: async () => {
            if (e) {
              const r = n.w.Init(f);
              r.Body().set_family_groupid(e);
              const a = await i.GetFamilyGroup(t, r);
              return xe(a.GetEResult()), a.Body();
            }
            throw 42;
          },
          staleTime: r,
        });
      }
      function Ve() {
        const e = (0, d.KV)(),
          t = (0, l.jE)(),
          r = (0, c.LH)();
        return (0, m.n)({
          mutationFn: async (t) => {
            const r = n.w.Init(_);
            r.Body().set_name(t);
            const a = await i.CreateFamilyGroup(e, r);
            return xe(a.GetEResult()), a.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: Ge(r) });
          },
        });
      }
      function Ke(e) {
        const t = (0, d.KV)(),
          r = (0, l.jE)(),
          a = (0, c.LH)();
        return (0, m.n)({
          mutationFn: async () => {
            const r = n.w.Init(U);
            r.Body().set_family_groupid(e);
            const a = await i.DeleteFamilyGroup(t, r);
            return xe(a.GetEResult()), a.Body();
          },
          onSuccess: () => {
            r.invalidateQueries({ queryKey: Ge(a) }),
              r.invalidateQueries({ queryKey: Ue(e) }),
              r.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      function $e(e) {
        const t = (0, d.KV)(),
          r = (0, l.jE)();
        return (0, m.n)({
          mutationFn: async (r) => {
            const a = n.w.Init(R);
            a.Body().set_family_groupid(e), a.Body().set_name(r);
            const s = await i.ModifyFamilyGroupDetails(t, a);
            return xe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            r.invalidateQueries({ queryKey: Ue(e) }),
              r.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      function Je(e, t, r) {
        const a = (0, d.KV)(),
          s = (0, l.jE)();
        return (0, m.n)({
          mutationFn: async () => {
            const s = n.w.Init(C);
            s.Body().set_family_groupid(e),
              s.Body().set_receiver_steamid(t),
              s.Body().set_receiver_role(r);
            const o = await i.InviteToFamilyGroup(a, s);
            return xe(o.GetEResult()), o.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: Ge(t) }),
              s.invalidateQueries({ queryKey: Ue(e) }),
              s.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      function Ye(e, t = null) {
        const r = (0, d.KV)(),
          a = (0, c.LH)(),
          s = (0, l.jE)();
        return (0, m.n)({
          mutationFn: async () => {
            const a = n.w.Init(T);
            a.Body().set_family_groupid(e), null !== t && a.Body().set_nonce(t);
            const s = await i.JoinFamilyGroup(r, a);
            return xe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: Ge(a) }),
              s.invalidateQueries({ queryKey: Ue(e) }),
              s.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      function Xe(e, t) {
        const r = (0, d.KV)(),
          a = (0, l.jE)();
        return (0, m.n)({
          mutationFn: async () => {
            const a = n.w.Init(O);
            a.Body().set_family_groupid(e), a.Body().set_steamid_to_cancel(t);
            const s = await i.CancelFamilyGroupInvite(r, a);
            return xe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            a.invalidateQueries({ queryKey: Ge(t) }),
              a.invalidateQueries({ queryKey: Ue(e) }),
              a.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      function Ze(e, t) {
        const r = (0, d.KV)(),
          a = (0, l.jE)();
        return (0, m.n)({
          mutationFn: async () => {
            const a = n.w.Init(q);
            a.Body().set_family_groupid(e), a.Body().set_steamid_to_remove(t);
            const s = await i.RemoveFromFamilyGroup(r, a);
            return xe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            a.invalidateQueries({ queryKey: Ge(t) }),
              a.invalidateQueries({ queryKey: Ue(e) }),
              a.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      function et(e) {
        const t = (0, d.KV)();
        return (0, o.I)({
          queryKey: Ee(e),
          queryFn: async () => {
            const r = (0, je.VY)("clientsessionid"),
              a = r && BigInt("0x" + r).toString(),
              s = n.w.Init(E);
            s.Body().set_family_groupid(e),
              s.Body().set_client_instance_id(a ?? void 0);
            const o = await i.GetUsersSharingDevice(t, s);
            return xe(o.GetEResult()), o.Body();
          },
        });
      }
      function tt(e) {
        const t = (0, c.LH)(),
          r = Qe(e);
        return r.data
          ?.members()
          .find((e) => e.steamid() == t)
          ?.role();
      }
      function rt(e, t) {
        const r = (0, d.KV)();
        return (0, m.n)({
          mutationFn: async () => {
            const a = n.w.Init(D);
            a.Body().set_family_groupid(e),
              a.Body().set_use_account_cart(!0),
              a.Body().set_store_country_code(t);
            const s = await i.RequestPurchase(r, a);
            return xe(s.GetEResult()), s.Body();
          },
        });
      }
      function it(e, t) {
        const r = (0, d.KV)(),
          a = (0, c.LH)();
        return (0, o.I)({
          queryKey: De(e, a),
          queryFn: async () => {
            const a = n.w.Init(P);
            a.Body().set_family_groupid(e),
              void 0 !== t && a.Body().set_rt_include_completed_since(t);
            const s = await i.GetPurchaseRequests(r, a);
            return xe(s.GetEResult()), s.Body();
          },
        });
      }
      function at(e, t) {
        const r = (0, d.KV)(),
          a = (0, c.LH)();
        return (0, o.I)({
          queryKey: De(e, a, t),
          queryFn: async () => {
            const a = n.w.Init(P);
            a.Body().set_family_groupid(e), a.Body().add_request_ids(t);
            const s = await i.GetPurchaseRequests(r, a);
            return xe(s.GetEResult()), s.Body();
          },
          select: (e) =>
            e.toObject().requests?.find(({ request_id: e }) => e === t),
        });
      }
      function st(e, t, r) {
        const a = (0, d.KV)(),
          s = (0, l.jE)();
        return (0, m.n)({
          mutationFn: async () => {
            const s = n.w.Init(H);
            s.Body().set_family_groupid(e),
              s.Body().set_request_id(t),
              s.Body().set_action(r);
            const o = await i.RespondToRequestedPurchase(a, s);
            return xe(o.GetEResult()), o.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: De(e) }),
              s.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      const nt = (0, s.createContext)({
        errorMessage: null,
        setErrorMessage: (e) => {},
      });
      var ot;
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
      })(ot || (ot = {}));
      const lt = {
        8: "#FamilyManagement_ErrorInternalServerError",
        2: "#FamilyManagement_ErrorInternalServerError",
        10: "#FamilyManagement_ErrorInternalServerError",
        37: "#FamilyManagement_ErrorInternalServerError",
        15: "#FamilyManagement_AccessDenied",
        42: "#FamilyManagement_ErrorNoMatch",
        43: "#FamilyManagement_ErrorAccountDisabled",
        11: "#FamilyManagement_ErrorNoActiveInvite",
        45: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
        129: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
        25: "#FamilyManagement_ErrorLimitExceeded",
        96: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
        112: "#FamilyManagement_LimitedAccount_CreateFamily",
        84: {
          [ot.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RateLimitExceeded_CreateFamily",
        },
        83: {
          [ot.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RegionLocked_CreateFamily",
          [ot.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_RegionLocked_JoinFamily",
        },
        31: {
          [ot.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_Household_JoinFamily",
        },
        95: {
          [ot.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
          [ot.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
          [ot.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
        },
        29: {
          [ot.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
          [ot.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
          [ot.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
        },
        40: {
          [ot.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
        },
      };
      function mt() {
        const { setErrorMessage: e } = (0, s.useContext)(nt);
        return { setErrorMessage: e };
      }
      function ut(e, t, r) {
        const { setErrorMessage: i } = mt();
        (0, s.useEffect)(() => {
          if (e.isError) {
            const a = e.error;
            i(
              (function (e, t, r) {
                let i = "";
                if (e in lt) {
                  const t = lt[e];
                  if ("string" == typeof t) i = (0, ve.we)(t);
                  else {
                    const e = t;
                    r in e && (i = (0, ve.we)(e[r]));
                  }
                }
                return (0, ve.we)(t, i);
              })(a, t, r),
            );
          }
        }, [i, e.isError, e.error, t, r]);
      }
      function ct(e, t) {
        const { setErrorMessage: r } = mt();
        (0, s.useEffect)(() => {
          e.isError && r((0, ve.we)(t));
        }, [r, e.isError, t]);
      }
      function dt(e) {
        const t = (0, d.KV)();
        return (0, o.I)({
          queryKey: Le(e),
          queryFn: async () => {
            const r = n.w.Init(X);
            r.Body().set_family_groupid(e);
            const a = await i.GetChangeLog(t, r);
            return xe(a.GetEResult()), a.Body().changes();
          },
          staleTime: 0,
        });
      }
      function yt(e, t) {
        return `${Te.TS.STORE_BASE_URL}cart/purchaserequest/${e}/${t}`;
      }
      function gt(e) {
        return `${Te.TS.STORE_BASE_URL}cart/purchaserequested/${e}`;
      }
      function Bt(e, t, r, i) {
        return [
          "get_shared_library_apps",
          e,
          t?.bIncludeOwn,
          t?.bIncludeExcluded,
          t?.bIncludeNonGames,
          t?.for_account_id,
          r,
          i,
        ];
      }
      function _t(e, t) {
        const r = (0, c.LH)(),
          { settings: a, mapAppsAllowed: s } = (0, qe.S0)(r).data,
          l = (0, qe.BM)(),
          m = (0, d.KV)(),
          {
            bIncludeOwn: y,
            bIncludeExcluded: g,
            bIncludeNonGames: B,
            for_account_id: _,
          } = t ?? {},
          p = void 0 === t?.enabled || t.enabled,
          f = Bt(e, t, a, l),
          b = (e) => !(0, qe.or)(e.appid(), l, a, s);
        return (0, o.I)({
          queryKey: f,
          queryFn: async () => {
            const t = n.w.Init(ne);
            if (
              (t.Body().set_family_groupid(e),
              t.Body().set_include_own(y),
              t.Body().set_include_excluded(g),
              t.Body().set_language(Te.TS.LANGUAGE),
              t.Body().set_include_non_games(B),
              _)
            ) {
              const e = Oe.b2.InitFromAccountID(_, Te.TS.EUNIVERSE);
              t.Body().set_steamid(e.ConvertTo64BitString());
            }
            const r = await i.GetSharedLibraryApps(m, t);
            return (
              xe(r.GetEResult()),
              r
                .Body()
                .apps()
                .filter(b)
                .map((e) => e.toObject())
            );
          },
          enabled: !!a && p,
          placeholderData: u.rX,
          select: t?.select,
        });
      }
      function pt(e, t) {
        const r = (0, l.jE)(),
          i = (0, c.LH)(),
          { settings: a } = (0, qe.S0)(i).data ?? {},
          n = Bt(e, t, a, (0, qe.BM)());
        return (0, s.useCallback)(() => {
          r.invalidateQueries({ queryKey: n });
        }, [r, n]);
      }
      function ft(e, t) {
        let r = e.sort_as || e.name,
          i = t.sort_as || t.name;
        return (0, We.lY)(r, i);
      }
      function bt(e, t) {
        return t.rt_time_acquired - e.rt_time_acquired || ft(e, t);
      }
      function Mt(e, t, r, i = []) {
        const a = (0, s.useMemo)(
            () =>
              e?.filter((e) =>
                (function (e, t, r) {
                  if (!e && 0 === t.length) return !0;
                  const i = r.name?.toLocaleLowerCase(),
                    a = e.toLocaleLowerCase(),
                    s = i?.includes(a) || r.appid?.toString() == a;
                  let n = !0;
                  if (r.content_descriptors)
                    for (const e of t)
                      if (!r.content_descriptors.includes(e)) {
                        n = !1;
                        break;
                      }
                  return s && n;
                })(r, i, e),
              ) || [],
            [e, r, i],
          ),
          n = (0, s.useCallback)(
            (e, r) => {
              let i = ft;
              switch (t) {
                case "alpha-asc":
                  i = ft;
                  break;
                case "alpha-desc":
                  i = (e, t) => ft(t, e);
                  break;
                case "date_acquired-asc":
                  i = (e, t) => bt(t, e);
                  break;
                case "date_acquired-desc":
                  i = bt;
              }
              return i(e, r);
            },
            [t],
          );
        return (0, s.useMemo)(() => a.slice().sort(n), [a, n]);
      }
      function wt(e, t, r) {
        const a = (0, d.KV)(),
          s = (0, l.jE)(),
          o = (0, c.LH)();
        return (0, m.n)({
          mutationFn: async () => {
            const s = n.w.Init(ce);
            s.Body().set_family_groupid(e),
              s.Body().set_invite_id(t),
              s.Body().set_nonce(r);
            const o = await i.ConfirmJoinFamilyGroup(a, s);
            return xe(o.GetEResult()), o.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: Ge(o) }),
              s.invalidateQueries({ queryKey: Ue(e) }),
              s.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      function zt(e, t, r) {
        const a = (0, d.KV)(),
          s = (0, l.jE)();
        return (0, m.n)({
          mutationFn: async () => {
            const s = n.w.Init(me);
            s.Body().set_family_groupid(e),
              s.Body().set_invite_id(t),
              s.Body().set_nonce(r);
            const o = await i.ConfirmInviteToFamilyGroup(a, s);
            return xe(o.GetEResult()), o.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: Ue(e) }),
              s.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
      function Ft(e, t) {
        const r = (0, d.KV)();
        return (0, m.n)({
          mutationFn: async () => {
            const a = n.w.Init(ye);
            a.Body().set_family_groupid(e), a.Body().set_steamid(t);
            const s = await i.ResendInvitationToFamilyGroup(r, a);
            return xe(s.GetEResult()), s;
          },
        });
      }
      function St(e) {
        const t = (0, d.KV)();
        return (0, o.I)({
          queryKey: Ae(e),
          queryFn: async () => {
            const r = n.w.Init(Ce.m8);
            r.Body().set_steamid(e);
            const i = await Ce.xt.GetRecentPlaytimeSessionsForChild(t, r);
            xe(i.GetEResult());
            const a = (function (e) {
              let t = [];
              e.sort((e, t) => e.time_start - t.time_start);
              let r = new Map();
              for (const i of e) {
                let e = r.get(i.appid);
                void 0 === e
                  ? r.set(i.appid, i)
                  : i.time_start <= e.time_end
                    ? (e.time_end = Math.max(e.time_end, i.time_end))
                    : (t.push(e), r.set(i.appid, i));
              }
              for (const e of r.values()) t.push(e);
              return t.sort((e, t) => e.time_start - t.time_start), t;
            })(i.Body().toObject().sessions || []);
            return a;
          },
        });
      }
      function ht(e) {
        const t = (0, d.KV)(),
          r = (0, c.LH)(),
          a = (0, l.jE)();
        return (0, m.n)({
          mutationFn: async () => {
            const r = n.w.Init(Me);
            r.Body().set_family_groupid(e);
            const a = await i.UndeleteFamilyGroup(t, r);
            return xe(a.GetEResult()), a;
          },
          onSuccess: () => {
            a.invalidateQueries({ queryKey: Ge(r) }),
              a.invalidateQueries({ queryKey: Ue(e) }),
              a.invalidateQueries({ queryKey: Le(e) });
          },
        });
      }
    },
    4796: (e, t, r) => {
      r.d(t, { TB: () => g, ac: () => y });
      var i = r(34629),
        a = r(41735),
        s = r.n(a),
        n = r(14947),
        o = r(90626),
        l = r(17720),
        m = r(81393),
        u = r(78327),
        c = r(67165);
      class d {
        constructor() {
          (0, n.Gn)(this);
        }
        m_mapAppIDToClanInfo = new Map();
        m_mapVanityToClanInfo = new Map();
        m_mapClanAccountIDToClanInfo = new Map();
        m_mapPromisesLoading = new Map();
        m_rgQueuedEventsClanIDs = new Array();
        m_bLoadedFromConfig = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, n.h5)(() => {
              let e = (0, u.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, n.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, m.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, m.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new l.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : 0,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, m.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(e))
            return this.m_mapAppIDToClanInfo.get(e);
          let t = "appid_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let r = null;
          try {
            r = (await s().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return r
            ? (this.InternalSetupValue(r), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
          let t = "storevanity_" + e?.toLocaleLowerCase();
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let r = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  e?.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let r = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let r = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = l.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const r =
            u.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let i = await s().get(r, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(i.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return l.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, m.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = c.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            u.TS.COMMUNITY_BASE_URL +
            (r.vanity_url
              ? "groups/" + r.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, i.Cg)([n.sH], d.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, i.Cg)([n.sH], d.prototype, "m_mapVanityToClanInfo", void 0),
        (0, i.Cg)([n.sH], d.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, i.Cg)([n.XI], d.prototype, "RegisterClanData", null),
        (0, i.Cg)([n.XI], d.prototype, "InternalSetupValue", null);
      const y = new d();
      function g(e) {
        const [t, r] = (0, o.useState)(
            e ? y.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [i, a] = (0, o.useState)(!!e && !y.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, o.useEffect)(() => {
            if (e)
              if (y.BHasClanInfoLoadedByAccountID(e))
                r(y.GetClanInfoByClanAccountID(e)), a(!1);
              else {
                a(!0);
                const t = l.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                y.LoadClanInfoForClanSteamID(t)
                  .then((e) => {
                    r(e ?? void 0), a(!1);
                  })
                  .catch((t) =>
                    console.error(`Failed to load clan info ${e}`, t),
                  );
              }
            else r(void 0), a(!1);
          }, [e]),
          [i, t]
        );
      }
      window.g_ClanStore = y;
    },
    67165: (e, t, r) => {
      r.d(t, { pF: () => v, FV: () => T });
      var i = r(34629),
        a = r(4434),
        s = r(41735),
        n = r.n(s),
        o = r(14947),
        l = r(90626),
        m = r(78327);
      class u {
        m_clanSteamID;
        m_appidList = new Array();
        m_strName = "";
        m_strAvatarURLFullSize = "";
        m_strTagLineLoc = "";
        m_nFollowers = 0;
        m_strVanity = "";
        m_webLink = void 0;
        m_promise;
        m_bIsLoaded = !1;
        m_bIsHidden = !1;
        m_clanAccountFlags = 0;
        constructor(e) {
          (0, o.Gn)(this), (this.m_clanSteamID = e);
        }
        Initialize(e) {
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(8 & this.m_clanAccountFlags);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  m.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  m.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return m.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            m.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let r = m.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            i = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (i |= e) : (i &= ~e);
            }),
            i == this.m_clanAccountFlags)
          )
            return;
          let a = new Array();
          1 & i && a.push(1),
            8 & i && a.push(8),
            2 & i && a.push(2),
            4 & i && a.push(4),
            16 & i && a.push(16),
            32 & i && a.push(32),
            64 & i && a.push(64);
          let s = new FormData();
          s.append("sessionid", m.TS.SESSIONID),
            s.append("clan_account_id", this.GetClanAccountID().toString()),
            s.append("accountflags", JSON.stringify(a));
          let o = await n().post(r, s);
          o &&
            200 == o.status &&
            1 == o.data.success &&
            (this.m_clanAccountFlags = i);
        }
      }
      (0, i.Cg)([o.sH], u.prototype, "m_appidList", void 0),
        (0, i.Cg)([o.sH], u.prototype, "m_nFollowers", void 0),
        (0, i.Cg)([o.sH], u.prototype, "m_clanAccountFlags", void 0);
      var c,
        d = r(17720),
        y = r(56545),
        g = r(80613),
        B = r.n(g),
        _ = r(89068);
      class p extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || _.Sg(p.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  linkname: { n: 4, br: _.qM.readString, bw: _.gp.writeString },
                  json: { n: 5, br: _.qM.readString, bw: _.gp.writeString },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = _.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class f extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.clan_account_id || _.Sg(f.M()),
            g.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = _.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class b extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || _.Sg(b.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  link: { n: 2, c: p },
                  remove: {
                    n: 3,
                    d: !1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = _.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class M extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class w extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || _.Sg(w.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = _.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class z extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.links || _.Sg(z.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { links: { n: 1, c: p, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = _.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class F extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.clan_account_ids || _.Sg(F.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: _.qM.readBool, bw: _.gp.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = _.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class S extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.results || _.Sg(S.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { results: { n: 1, c: f, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = _.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class h extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.partnerid || _.Sg(h.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  partnerid: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = _.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class R extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.results || _.Sg(R.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { results: { n: 1, c: I, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = _.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class I extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.clan_accountid || _.Sg(I.M()),
            g.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeRepeatedString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = _.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, y.I8)(b, t),
            M,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, y.I8)(w, t),
              z,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, y.I8)(F, t),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, y.I8)(h, t),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(c || (c = {}));
      class C {
        constructor() {
          (0, o.Gn)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, m.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                let t = Number(e.creator_clan_id),
                  r = d.b.InitFromClanID(t),
                  i = new u(r);
                i.Initialize(e),
                  (i.m_promise = C.GetAsPromise(i)),
                  this.m_mapClanToCreatorHome.set(t, i);
              });
            let t = (0, m.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static async GetAsPromise(e) {
          return e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
              t[0].clan_account_id > 0 &&
              "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, t) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let r = new u(e);
            (r.m_promise = this.InternalCreatorHome(r, t)),
              await r.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), r);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let r = { get_appids: !0, l: m.TS.LANGUAGE, origin: self.origin },
            i =
              m.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            a = await n().get(i, { params: r, cancelToken: t && t.token });
          return e.Initialize(a.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let r = { appid: e },
              i = m.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              a = await n().get(i, {
                params: r,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, a.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, r) {
          let i = `${m.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            a = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: m.TS.COUNTRY,
              l: m.TS.LANGUAGE,
              origin: self.origin,
            },
            s = new Array();
          const l = await n().get(i, { params: a, cancelToken: r.token });
          return (
            l.data.curators &&
              (0, o.h5)(() => {
                l.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = d.b.InitFromClanID(e.creator_clan_id),
                      r = new u(t);
                    r.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
                  }
                  s.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            s
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, i.Cg)([o.sH], C.prototype, "m_mapClanToCreatorHome", void 0),
        (0, i.Cg)([o.sH], C.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, i.Cg)([o.XI], C.prototype, "LazyInit", null);
      const v = new C();
      function T(e) {
        const t = d.b.InitFromClanID(e),
          [r, i] = l.useState(v.GetCreatorHome(t)),
          s = (0, a.m)("useCreatorHome");
        return (
          l.useEffect(() => {
            const t = d.b.InitFromClanID(e);
            v.BHasCreatorHomeLoaded(t)
              ? r
                ? r.GetClanAccountID() != e && i(v.GetCreatorHome(t))
                : i(v.GetCreatorHome(t))
              : v.LoadCreatorHome(t).then(() => {
                  s?.token?.reason || i(v.GetCreatorHome(t));
                });
          }, [s?.token?.reason, e, r]),
          r
        );
      }
      window.g_CreatorHomeStore = v;
    },
  },
]);
