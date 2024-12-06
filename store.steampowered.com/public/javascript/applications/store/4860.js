/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4860],
  {
    14860: (e, r, t) => {
      t.d(r, {
        eS: () => or,
        IN: () => sr,
        Tv: () => Ke,
        w1: () => dr,
        Vo: () => Br,
        Bc: () => Ye,
        v2: () => Xe,
        tN: () => zr,
        fO: () => Mr,
        TI: () => Ve,
        Y0: () => Je,
        Hs: () => De,
        N0: () => Ae,
        vo: () => Le,
        Ww: () => yr,
        Xq: () => pr,
        HM: () => He,
        DD: () => $e,
        Qn: () => ar,
        BO: () => ir,
        gv: () => mr,
        p8: () => cr,
        lF: () => Sr,
        _K: () => Ze,
        Yc: () => tr,
        $N: () => Fr,
        Ke: () => nr,
        ll: () => rr,
        RC: () => ur,
        yM: () => _r,
        YW: () => wr,
        vu: () => Rr,
        QU: () => er,
      });
      var i = t(90626),
        a = t(56545),
        n = t(20194),
        s = t(75233),
        o = t(92240),
        l = t(70996),
        u = t(68950),
        m = t(23809),
        c = t(80613),
        y = t(89068);
      const d = c.Message;
      class B extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.name || y.Sg(B.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Request";
        }
      }
      class g extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.family_groupid || y.Sg(g.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
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
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = y.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Response";
        }
      }
      class _ extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.family_groupid || y.Sg(_.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
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
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = y.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Request";
        }
      }
      class p extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || y.Sg(p.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
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
          let r = new c.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMember";
        }
      }
      class b extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || y.Sg(b.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  role: { n: 2, br: y.qM.readEnum, bw: y.gp.writeEnum },
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
          let r = new c.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInvite";
        }
      }
      class f extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || y.Sg(f.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupFormerMember";
        }
      }
      class w extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.name || y.Sg(w.M()),
            d.initialize(this, e, 0, -1, [2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  name: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  members: { n: 2, c: p, r: !0, q: !0 },
                  pending_invites: { n: 3, c: b, r: !0, q: !0 },
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
                  former_members: { n: 7, c: f, r: !0, q: !0 },
                  slot_cooldown_overrides: {
                    n: 8,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
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
          let r = new c.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Response";
        }
      }
      class M extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.family_groupid || y.Sg(M.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
          let r = new c.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInviteForUser";
        }
      }
      class z extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || y.Sg(z.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
          let r = new c.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Request";
        }
      }
      class F extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.family_groupid || y.Sg(F.M()),
            d.initialize(this, e, 0, -1, [5], null);
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
                  pending_group_invites: { n: 5, c: M, r: !0, q: !0 },
                  role: { n: 6, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  cooldown_seconds_remaining: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  family_group: { n: 8, c: w },
                  can_undelete_last_joined_family: {
                    n: 9,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
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
          let r = new c.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Response";
        }
      }
      class S extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.family_groupid || y.Sg(S.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  name: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
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
          let r = new c.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
        }
      }
      class R extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
        }
      }
      class h extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.family_groupid || y.Sg(h.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Request";
        }
      }
      class j extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.invite_id || y.Sg(j.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
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
          let r = new c.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Response";
        }
      }
      class v extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.family_groupid || y.Sg(v.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
                  nonce: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
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
          let r = new c.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Request";
        }
      }
      class q extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.two_factor_method || y.Sg(q.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
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
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = y.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Response";
        }
      }
      class W extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.family_groupid || y.Sg(W.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
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
          let r = new c.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Request";
        }
      }
      class T extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Response";
        }
      }
      class O extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.family_groupid || y.Sg(O.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
                  steamid_to_cancel: {
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
          let r = new c.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Request";
        }
      }
      class I extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Response";
        }
      }
      class G extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.family_groupid || y.Sg(G.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = y.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Request";
        }
      }
      class U extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Response";
        }
      }
      class C extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.family_groupid || y.Sg(C.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = y.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Request";
        }
      }
      class E extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.users || y.Sg(E.M()),
            d.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
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
          let r = new c.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Response";
        }
      }
      class x extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.family_groupid || y.Sg(x.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Request";
        }
      }
      class N extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.gidshoppingcart || y.Sg(N.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Response";
        }
      }
      class k extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.family_groupid || y.Sg(k.M()),
            d.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
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
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = y.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Request";
        }
      }
      class P extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.requester_steamid || y.Sg(P.M()),
            d.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
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
          let r = new c.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PurchaseRequest";
        }
      }
      class Q extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.requests || y.Sg(Q.M()),
            d.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { requests: { n: 1, c: P, r: !0, q: !0 } },
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
          let r = new c.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Response";
        }
      }
      class K extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.family_groupid || y.Sg(K.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Request";
        }
      }
      class L extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Response";
        }
      }
      class A extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.family_groupid || y.Sg(A.M()),
            d.initialize(this, e, 0, -1, [2], null);
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
                  running_apps: { n: 2, c: V, r: !0, q: !0 },
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
          let r = new c.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification";
        }
      }
      class D extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.member_steamid || y.Sg(D.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
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
          let r = new c.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
        }
      }
      class V extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.appid || y.Sg(V.M()),
            d.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  playing_members: { n: 3, c: D, r: !0, q: !0 },
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
          let r = new c.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
        }
      }
      class J extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_InviteStatus_Notification";
        }
      }
      class $ extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.family_groupid || y.Sg($.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
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
          let r = new c.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_GroupChanged_Notification";
        }
      }
      class H extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.family_groupid || y.Sg(H.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
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
          let r = new c.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Request";
        }
      }
      class Y extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.changes || y.Sg(Y.M()),
            d.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { changes: { n: 1, c: X, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = y.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(Y.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response";
        }
      }
      class X extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.timestamp || y.Sg(X.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
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
          let r = new c.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response_Change";
        }
      }
      class Z extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.steamid || y.Sg(Z.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_PlaytimeEntry";
        }
      }
      class ee extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.family_groupid || y.Sg(ee.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
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
          let r = new c.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Request";
        }
      }
      class re extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.entries || y.Sg(re.M()),
            d.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  entries: { n: 1, c: Z, r: !0, q: !0 },
                  entries_by_owner: { n: 2, c: Z, r: !0, q: !0 },
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
          let r = new c.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Response";
        }
      }
      class te extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.family_groupid || y.Sg(te.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
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
          let r = new c.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
        }
      }
      class ie extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
        }
      }
      class ae extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.family_groupid || y.Sg(ae.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Request";
        }
      }
      class ne extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.apps || y.Sg(ne.M()),
            d.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  apps: { n: 1, c: se, r: !0, q: !0 },
                  owner_steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = y.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ne.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response";
        }
      }
      class se extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.appid || y.Sg(se.M()),
            d.initialize(this, e, 0, -1, [2, 15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
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
                    d: 0,
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
                    d: 1,
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
          let r = new c.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
        }
      }
      class oe extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.family_groupid || y.Sg(oe.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
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
          let r = new c.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
        }
      }
      class le extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
        }
      }
      class ue extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.family_groupid || y.Sg(ue.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
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
          let r = new c.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
        }
      }
      class me extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
        }
      }
      class ce extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.family_groupid || y.Sg(ce.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = y.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ce.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
        }
      }
      class ye extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
        }
      }
      class de extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.family_groupid || y.Sg(de.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  lender_steamid: {
                    n: 3,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
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
          let r = new c.BinaryReader(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Request";
        }
      }
      class Be extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Response";
        }
      }
      class ge extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.family_groupid || y.Sg(ge.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = y.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(ge.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Request";
        }
      }
      class _e extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.members || y.Sg(_e.M()),
            d.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: { members: { n: 1, c: pe, r: !0, q: !0 } },
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
          let r = new c.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response";
        }
      }
      class pe extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.steamid || y.Sg(pe.M()),
            d.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
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
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = y.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(pe.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
        }
      }
      class be extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.family_groupid || y.Sg(be.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Request";
        }
      }
      class fe extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new fe();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Response";
        }
      }
      class we extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.family_groupid || y.Sg(we.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
                  steamid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
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
          let r = new c.BinaryReader(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Request";
        }
      }
      class Me extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Me();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Response";
        }
      }
      class ze extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.family_groupid || y.Sg(ze.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let r = new c.BinaryReader(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Request";
        }
      }
      class Fe extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.wallet_country_matches || y.Sg(Fe.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
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
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = y.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(Fe.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Response";
        }
      }
      class Se extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.steamid || y.Sg(Se.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
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
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = y.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return y.BT(Se.M(), e, r);
        }
        static fromObject(e) {
          return y.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return y.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          y.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Request";
        }
      }
      class Re extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Re();
        }
        static deserializeBinary(e) {
          let r = new c.BinaryReader(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Response";
        }
      }
      var he, je;
      !(function (e) {
        (e.CreateFamilyGroup = function (e, r) {
          return e.SendMsg(
            "FamilyGroups.CreateFamilyGroup#1",
            (0, a.I8)(B, r),
            g,
            { ePrivilege: 1 },
          );
        }),
          (e.GetFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, a.I8)(_, r),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFamilyGroupForUser = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, a.I8)(z, r),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ModifyFamilyGroupDetails = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, a.I8)(S, r),
              R,
              { ePrivilege: 1 },
            );
          }),
          (e.InviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, a.I8)(h, r),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmInviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, a.I8)(oe, r),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.ResendInvitationToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, a.I8)(ce, r),
              ye,
              { ePrivilege: 1 },
            );
          }),
          (e.JoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, a.I8)(v, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmJoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, a.I8)(ue, r),
              me,
              { ePrivilege: 1 },
            );
          }),
          (e.RemoveFromFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, a.I8)(W, r),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelFamilyGroupInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, a.I8)(O, r),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUsersSharingDevice = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, a.I8)(C, r),
              E,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, a.I8)(G, r),
              U,
              { ePrivilege: 1 },
            );
          }),
          (e.UndeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, a.I8)(be, r),
              fe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlaytimeSummary = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, a.I8)(ee, r),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.RequestPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, a.I8)(x, r),
              N,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPurchaseRequests = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, a.I8)(k, r),
              Q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RespondToRequestedPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, a.I8)(K, r),
              L,
              { ePrivilege: 1 },
            );
          }),
          (e.GetChangeLog = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, a.I8)(H, r),
              Y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetFamilyCooldownOverrides = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, a.I8)(te, r),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSharedLibraryApps = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, a.I8)(ae, r),
              ne,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPreferredLender = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, a.I8)(de, r),
              Be,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferredLenders = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, a.I8)(ge, r),
              _e,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ForceAcceptInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, a.I8)(we, r),
              Me,
              { ePrivilege: 5 },
            );
          }),
          (e.GetInviteCheckResults = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, a.I8)(ze, r),
              Fe,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ClearCooldownSkip = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, a.I8)(Se, r),
              Re,
              { ePrivilege: 5 },
            );
          });
      })(he || (he = {})),
        (function (e) {
          (e.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: A,
          }),
            (e.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: J,
            }),
            (e.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: $,
            });
        })(je || (je = {}));
      var ve = t(37735),
        qe = t(61859),
        We = (t(71430), t(30470)),
        Te = t(2627),
        Oe = t(15419),
        Ie = t(41338),
        Ge = t(29233);
      const Ue = (e, r) =>
          void 0 === r
            ? ["get_family_group_for_user ", e]
            : ["get_family_group_for_user ", e, r],
        Ce = (e) => ["get_family_group", e],
        Ee = (e) => ["get_family_history", e],
        xe = (e) => ["get_users_sharing_device", e],
        Ne = (e) => ["recent_playtime_sessions", e];
      function ke(e, r, t) {
        return t
          ? ["get_purchase_requests", e, r, t]
          : r
            ? ["get_purchase_requests", e, r]
            : ["get_purchase_requests", e];
      }
      function Pe(e, r) {
        if (1 != e) throw e;
      }
      const Qe = i.createContext({ staleTimeMs: 1 / 0 });
      function Ke(e) {
        const { staleTimeMs: r, children: t } = e,
          a = i.useMemo(() => ({ staleTimeMs: r ?? 3e3 }), [r]);
        return i.createElement(Qe.Provider, { value: a }, t);
      }
      function Le(e = !1) {
        return Ae((0, u.LH)(), e);
      }
      function Ae(e, r = !1) {
        const t = (0, m.KV)(),
          s = (0, i.useContext)(Qe).staleTimeMs;
        return (0, n.I)({
          queryKey: Ue(e, r),
          queryFn: async () => {
            const i = a.w.Init(z);
            i.Body().set_steamid(e),
              i.Body().set_include_family_group_response(r);
            const n = await he.GetFamilyGroupForUser(t, i);
            return Pe(n.GetEResult()), n.Body();
          },
          staleTime: s,
        });
      }
      function De(e) {
        const r = (0, m.KV)(),
          t = (0, i.useContext)(Qe).staleTimeMs;
        return (0, n.I)({
          queryKey: Ce(e),
          queryFn: async () => {
            if (e) {
              const t = a.w.Init(_);
              t.Body().set_family_groupid(e);
              const i = await he.GetFamilyGroup(r, t);
              return Pe(i.GetEResult()), i.Body();
            }
            throw 42;
          },
          staleTime: t,
        });
      }
      function Ve() {
        const e = (0, m.KV)(),
          r = (0, s.jE)(),
          t = (0, u.LH)();
        return (0, o.n)({
          mutationFn: async (r) => {
            const t = a.w.Init(B);
            t.Body().set_name(r);
            const i = await he.CreateFamilyGroup(e, t);
            return Pe(i.GetEResult()), i.Body();
          },
          onSuccess: () => {
            r.invalidateQueries({ queryKey: Ue(t) });
          },
        });
      }
      function Je(e) {
        const r = (0, m.KV)(),
          t = (0, s.jE)(),
          i = (0, u.LH)();
        return (0, o.n)({
          mutationFn: async () => {
            const t = a.w.Init(G);
            t.Body().set_family_groupid(e);
            const i = await he.DeleteFamilyGroup(r, t);
            return Pe(i.GetEResult()), i.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: Ue(i) }),
              t.invalidateQueries({ queryKey: Ce(e) }),
              t.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function $e(e) {
        const r = (0, m.KV)(),
          t = (0, s.jE)();
        return (0, o.n)({
          mutationFn: async (t) => {
            const i = a.w.Init(S);
            i.Body().set_family_groupid(e), i.Body().set_name(t);
            const n = await he.ModifyFamilyGroupDetails(r, i);
            return Pe(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: Ce(e) }),
              t.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function He(e, r, t) {
        const i = (0, m.KV)(),
          n = (0, s.jE)();
        return (0, o.n)({
          mutationFn: async () => {
            const n = a.w.Init(h);
            n.Body().set_family_groupid(e),
              n.Body().set_receiver_steamid(r),
              n.Body().set_receiver_role(t);
            const s = await he.InviteToFamilyGroup(i, n);
            return Pe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            n.invalidateQueries({ queryKey: Ue(r) }),
              n.invalidateQueries({ queryKey: Ce(e) }),
              n.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function Ye(e, r = null) {
        const t = (0, m.KV)(),
          i = (0, u.LH)(),
          n = (0, s.jE)();
        return (0, o.n)({
          mutationFn: async () => {
            const i = a.w.Init(v);
            i.Body().set_family_groupid(e), null !== r && i.Body().set_nonce(r);
            const n = await he.JoinFamilyGroup(t, i);
            return Pe(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            n.invalidateQueries({ queryKey: Ue(i) }),
              n.invalidateQueries({ queryKey: Ce(e) }),
              n.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function Xe(e, r) {
        const t = (0, m.KV)(),
          i = (0, s.jE)();
        return (0, o.n)({
          mutationFn: async () => {
            const i = a.w.Init(O);
            i.Body().set_family_groupid(e), i.Body().set_steamid_to_cancel(r);
            const n = await he.CancelFamilyGroupInvite(t, i);
            return Pe(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: Ue(r) }),
              i.invalidateQueries({ queryKey: Ce(e) }),
              i.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function Ze(e, r) {
        const t = (0, m.KV)(),
          i = (0, s.jE)();
        return (0, o.n)({
          mutationFn: async () => {
            const i = a.w.Init(W);
            i.Body().set_family_groupid(e), i.Body().set_steamid_to_remove(r);
            const n = await he.RemoveFromFamilyGroup(t, i);
            return Pe(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: Ue(r) }),
              i.invalidateQueries({ queryKey: Ce(e) }),
              i.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function er(e) {
        const r = (0, m.KV)();
        return (0, n.I)({
          queryKey: xe(e),
          queryFn: async () => {
            const t = (0, Te.VY)("clientsessionid"),
              i = t && BigInt("0x" + t).toString(),
              n = a.w.Init(C);
            n.Body().set_family_groupid(e),
              n.Body().set_client_instance_id(i ?? void 0);
            const s = await he.GetUsersSharingDevice(r, n);
            return Pe(s.GetEResult()), s.Body();
          },
        });
      }
      function rr(e) {
        const r = (0, u.LH)(),
          t = De(e);
        return t.data
          ?.members()
          .find((e) => e.steamid() == r)
          ?.role();
      }
      function tr(e, r) {
        const t = (0, m.KV)();
        return (0, o.n)({
          mutationFn: async () => {
            const i = a.w.Init(x);
            i.Body().set_family_groupid(e),
              i.Body().set_use_account_cart(!0),
              i.Body().set_store_country_code(r);
            const n = await he.RequestPurchase(t, i);
            return Pe(n.GetEResult()), n.Body();
          },
        });
      }
      function ir(e, r) {
        const t = (0, m.KV)(),
          i = (0, u.LH)();
        return (0, n.I)({
          queryKey: ke(e, i),
          queryFn: async () => {
            const i = a.w.Init(k);
            i.Body().set_family_groupid(e),
              void 0 !== r && i.Body().set_rt_include_completed_since(r);
            const n = await he.GetPurchaseRequests(t, i);
            return Pe(n.GetEResult()), n.Body();
          },
        });
      }
      function ar(e, r) {
        const t = (0, m.KV)(),
          i = (0, u.LH)();
        return (0, n.I)({
          queryKey: ke(e, i, r),
          queryFn: async () => {
            const i = a.w.Init(k);
            i.Body().set_family_groupid(e), i.Body().add_request_ids(r);
            const n = await he.GetPurchaseRequests(t, i);
            return Pe(n.GetEResult()), n.Body();
          },
          select: (e) =>
            e.toObject().requests?.find(({ request_id: e }) => e === r),
        });
      }
      function nr(e, r, t) {
        const i = (0, m.KV)(),
          n = (0, s.jE)();
        return (0, o.n)({
          mutationFn: async () => {
            const n = a.w.Init(K);
            n.Body().set_family_groupid(e),
              n.Body().set_request_id(r),
              n.Body().set_action(t);
            const s = await he.RespondToRequestedPurchase(i, n);
            return Pe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            n.invalidateQueries({ queryKey: ke(e) }),
              n.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      const sr = (0, i.createContext)({
        errorMessage: null,
        setErrorMessage: (e) => {},
      });
      var or;
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
      })(or || (or = {}));
      const lr = {
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
          [or.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RateLimitExceeded_CreateFamily",
        },
        83: {
          [or.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RegionLocked_CreateFamily",
          [or.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_RegionLocked_JoinFamily",
        },
        31: {
          [or.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_Household_JoinFamily",
        },
        95: {
          [or.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
          [or.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
          [or.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
        },
        29: {
          [or.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
          [or.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
          [or.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
        },
        40: {
          [or.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
        },
      };
      function ur() {
        const { setErrorMessage: e } = (0, i.useContext)(sr);
        return { setErrorMessage: e };
      }
      function mr(e, r, t) {
        const { setErrorMessage: a } = ur();
        (0, i.useEffect)(() => {
          if (e.isError) {
            const i = e.error;
            a(
              (function (e, r, t) {
                let i = "";
                if (e in lr) {
                  const r = lr[e];
                  if ("string" == typeof r) i = (0, qe.we)(r);
                  else {
                    const e = r;
                    t in e && (i = (0, qe.we)(e[t]));
                  }
                }
                return (0, qe.we)(r, i);
              })(i, r, t),
            );
          }
        }, [a, e.isError, e.error, r, t]);
      }
      function cr(e, r) {
        const { setErrorMessage: t } = ur();
        (0, i.useEffect)(() => {
          e.isError && t((0, qe.we)(r));
        }, [t, e.isError, r]);
      }
      function yr(e) {
        const r = (0, m.KV)();
        return (0, n.I)({
          queryKey: Ee(e),
          queryFn: async () => {
            const t = a.w.Init(H);
            t.Body().set_family_groupid(e);
            const i = await he.GetChangeLog(r, t);
            return Pe(i.GetEResult()), i.Body().changes();
          },
          staleTime: 0,
        });
      }
      function dr(e, r) {
        return `${We.TS.STORE_BASE_URL}cart/purchaserequest/${e}/${r}`;
      }
      function Br(e) {
        return `${We.TS.STORE_BASE_URL}cart/purchaserequested/${e}`;
      }
      function gr(e, r, t, i) {
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
      function _r(e, r) {
        const t = (0, u.LH)(),
          { settings: i, mapAppsAllowed: s } = (0, Oe.S0)(t).data,
          o = (0, Oe.BM)(),
          c = (0, m.KV)(),
          {
            bIncludeOwn: y,
            bIncludeExcluded: d,
            bIncludeNonGames: B,
            for_account_id: g,
          } = r ?? {},
          _ = void 0 === r?.enabled || r.enabled,
          p = gr(e, r, i, o),
          b = (e) => !(0, Oe.or)(e.appid(), o, i, s);
        return (0, n.I)({
          queryKey: p,
          queryFn: async () => {
            const r = a.w.Init(ae);
            if (
              (r.Body().set_family_groupid(e),
              r.Body().set_include_own(y),
              r.Body().set_include_excluded(d),
              r.Body().set_language(We.TS.LANGUAGE),
              r.Body().set_include_non_games(B),
              g)
            ) {
              const e = Ge.b2.InitFromAccountID(g, We.TS.EUNIVERSE);
              r.Body().set_steamid(e.ConvertTo64BitString());
            }
            const t = await he.GetSharedLibraryApps(c, r);
            return (
              Pe(t.GetEResult()),
              t
                .Body()
                .apps()
                .filter(b)
                .map((e) => e.toObject())
            );
          },
          enabled: !!i && _,
          placeholderData: l.rX,
          select: r?.select,
        });
      }
      function pr(e, r) {
        const t = (0, s.jE)(),
          a = (0, u.LH)(),
          { settings: n } = (0, Oe.S0)(a).data ?? {},
          o = gr(e, r, n, (0, Oe.BM)());
        return (0, i.useCallback)(() => {
          t.invalidateQueries({ queryKey: o });
        }, [t, o]);
      }
      function br(e, r) {
        let t = e.sort_as || e.name,
          i = r.sort_as || r.name;
        return (0, Ie.lY)(t, i);
      }
      function fr(e, r) {
        return r.rt_time_acquired - e.rt_time_acquired || br(e, r);
      }
      function wr(e, r, t, a = []) {
        const n = (0, i.useMemo)(
            () =>
              e?.filter((e) =>
                (function (e, r, t) {
                  if (!e && 0 === r.length) return !0;
                  const i = t.name?.toLocaleLowerCase(),
                    a = e.toLocaleLowerCase(),
                    n = i?.includes(a) || t.appid?.toString() == a;
                  let s = !0;
                  if (t.content_descriptors)
                    for (const e of r)
                      if (!t.content_descriptors.includes(e)) {
                        s = !1;
                        break;
                      }
                  return n && s;
                })(t, a, e),
              ) || [],
            [e, t, a],
          ),
          s = (0, i.useCallback)(
            (e, t) => {
              let i = br;
              switch (r) {
                case "alpha-asc":
                  i = br;
                  break;
                case "alpha-desc":
                  i = (e, r) => br(r, e);
                  break;
                case "date_acquired-asc":
                  i = (e, r) => fr(r, e);
                  break;
                case "date_acquired-desc":
                  i = fr;
              }
              return i(e, t);
            },
            [r],
          );
        return (0, i.useMemo)(() => n.slice().sort(s), [n, s]);
      }
      function Mr(e, r, t) {
        const i = (0, m.KV)(),
          n = (0, s.jE)(),
          l = (0, u.LH)();
        return (0, o.n)({
          mutationFn: async () => {
            const n = a.w.Init(ue);
            n.Body().set_family_groupid(e),
              n.Body().set_invite_id(r),
              n.Body().set_nonce(t);
            const s = await he.ConfirmJoinFamilyGroup(i, n);
            return Pe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            n.invalidateQueries({ queryKey: Ue(l) }),
              n.invalidateQueries({ queryKey: Ce(e) }),
              n.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function zr(e, r, t) {
        const i = (0, m.KV)(),
          n = (0, s.jE)();
        return (0, o.n)({
          mutationFn: async () => {
            const n = a.w.Init(oe);
            n.Body().set_family_groupid(e),
              n.Body().set_invite_id(r),
              n.Body().set_nonce(t);
            const s = await he.ConfirmInviteToFamilyGroup(i, n);
            return Pe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            n.invalidateQueries({ queryKey: Ce(e) }),
              n.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function Fr(e, r) {
        const t = (0, m.KV)();
        return (0, o.n)({
          mutationFn: async () => {
            const i = a.w.Init(ce);
            i.Body().set_family_groupid(e), i.Body().set_steamid(r);
            const n = await he.ResendInvitationToFamilyGroup(t, i);
            return Pe(n.GetEResult()), n;
          },
        });
      }
      function Sr(e) {
        const r = (0, m.KV)();
        return (0, n.I)({
          queryKey: Ne(e),
          queryFn: async () => {
            const t = a.w.Init(ve.m8);
            t.Body().set_steamid(e);
            const i = await ve.xt.GetRecentPlaytimeSessionsForChild(r, t);
            Pe(i.GetEResult());
            const n = (function (e) {
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
            return n;
          },
        });
      }
      function Rr(e) {
        const r = (0, m.KV)(),
          t = (0, u.LH)(),
          i = (0, s.jE)();
        return (0, o.n)({
          mutationFn: async () => {
            const t = a.w.Init(be);
            t.Body().set_family_groupid(e);
            const i = await he.UndeleteFamilyGroup(r, t);
            return Pe(i.GetEResult()), i;
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: Ue(t) }),
              i.invalidateQueries({ queryKey: Ce(e) }),
              i.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
    },
  },
]);
