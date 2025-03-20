/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4860],
  {
    14860: (e, r, t) => {
      t.d(r, {
        eS: () => or,
        IN: () => nr,
        Tv: () => Ke,
        w1: () => dr,
        Vo: () => Br,
        Bc: () => Ye,
        v2: () => Xe,
        tN: () => zr,
        fO: () => wr,
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
        Ke: () => sr,
        ll: () => rr,
        RC: () => ur,
        yM: () => _r,
        YW: () => fr,
        vu: () => Rr,
        QU: () => er,
      });
      var i,
        a,
        s = t(90626),
        n = t(56545),
        o = t(20194),
        l = t(75233),
        u = t(51614),
        m = t(57168),
        c = t(68950),
        y = t(23809),
        d = t(80613),
        B = t.n(d),
        g = t(89068);
      class _ extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.name || g.Sg(_.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  name: { n: 1, br: g.qM.readString, bw: g.gp.writeString },
                  steamid: {
                    n: 2,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = g.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Request";
        }
      }
      class p extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.family_groupid || g.Sg(p.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  cooldown_skip_granted: {
                    n: 2,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = g.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Response";
        }
      }
      class b extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.family_groupid || g.Sg(b.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  send_running_apps: {
                    n: 2,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = g.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Request";
        }
      }
      class M extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || g.Sg(M.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  role: { n: 2, br: g.qM.readEnum, bw: g.gp.writeEnum },
                  time_joined: {
                    n: 3,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  cooldown_seconds_remaining: {
                    n: 4,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = g.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMember";
        }
      }
      class f extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || g.Sg(f.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  role: { n: 2, br: g.qM.readEnum, bw: g.gp.writeEnum },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = g.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInvite";
        }
      }
      class w extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || g.Sg(w.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = g.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupFormerMember";
        }
      }
      class z extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.name || g.Sg(z.M()),
            d.Message.initialize(this, e, 0, -1, [2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  name: { n: 1, br: g.qM.readString, bw: g.gp.writeString },
                  members: { n: 2, c: M, r: !0, q: !0 },
                  pending_invites: { n: 3, c: f, r: !0, q: !0 },
                  free_spots: {
                    n: 4,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  country: { n: 5, br: g.qM.readString, bw: g.gp.writeString },
                  slot_cooldown_remaining_seconds: {
                    n: 6,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  former_members: { n: 7, c: w, r: !0, q: !0 },
                  slot_cooldown_overrides: {
                    n: 8,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = g.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Response";
        }
      }
      class F extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.family_groupid || g.Sg(F.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  role: { n: 2, br: g.qM.readEnum, bw: g.gp.writeEnum },
                  inviter_steamid: {
                    n: 3,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  awaiting_2fa: { n: 4, br: g.qM.readBool, bw: g.gp.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = g.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInviteForUser";
        }
      }
      class S extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.steamid || g.Sg(S.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  include_family_group_response: {
                    n: 2,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = g.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Request";
        }
      }
      class R extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.family_groupid || g.Sg(R.M()),
            d.Message.initialize(this, e, 0, -1, [5], null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  is_not_member_of_any_group: {
                    n: 2,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                  latest_time_joined: {
                    n: 3,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  latest_joined_family_groupid: {
                    n: 4,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  pending_group_invites: { n: 5, c: F, r: !0, q: !0 },
                  role: { n: 6, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  cooldown_seconds_remaining: {
                    n: 7,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  family_group: { n: 8, c: z },
                  can_undelete_last_joined_family: {
                    n: 9,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = g.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Response";
        }
      }
      class h extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.family_groupid || g.Sg(h.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  name: { n: 2, br: g.qM.readString, bw: g.gp.writeString },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = g.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
        }
      }
      class j extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
        }
      }
      class v extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.family_groupid || g.Sg(v.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  receiver_steamid: {
                    n: 2,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  receiver_role: {
                    n: 3,
                    br: g.qM.readEnum,
                    bw: g.gp.writeEnum,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = g.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Request";
        }
      }
      class q extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.invite_id || g.Sg(q.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  invite_id: {
                    n: 1,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  two_factor_method: {
                    n: 2,
                    br: g.qM.readEnum,
                    bw: g.gp.writeEnum,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = g.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Response";
        }
      }
      class W extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.family_groupid || g.Sg(W.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  nonce: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = g.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Request";
        }
      }
      class T extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.two_factor_method || g.Sg(T.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readEnum,
                    bw: g.gp.writeEnum,
                  },
                  cooldown_skip_granted: {
                    n: 3,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                  invite_already_accepted: {
                    n: 4,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = g.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Response";
        }
      }
      class O extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.family_groupid || g.Sg(O.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  steamid_to_remove: {
                    n: 2,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = g.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Request";
        }
      }
      class I extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (B().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Response";
        }
      }
      class G extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.family_groupid || g.Sg(G.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  steamid_to_cancel: {
                    n: 2,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = g.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Request";
        }
      }
      class U extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (B().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Response";
        }
      }
      class C extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.family_groupid || g.Sg(C.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = g.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Request";
        }
      }
      class E extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Response";
        }
      }
      class x extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.family_groupid || g.Sg(x.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  client_instance_id: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = g.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Request";
        }
      }
      class N extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.users || g.Sg(N.M()),
            d.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  users: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: g.qM.readFixed64String,
                    pbr: g.qM.readPackedFixed64String,
                    bw: g.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = g.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Response";
        }
      }
      class k extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.family_groupid || g.Sg(k.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  store_country_code: {
                    n: 3,
                    br: g.qM.readString,
                    bw: g.gp.writeString,
                  },
                  use_account_cart: {
                    n: 4,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = g.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Request";
        }
      }
      class P extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.gidshoppingcart || g.Sg(P.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = g.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Response";
        }
      }
      class Q extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.family_groupid || g.Sg(Q.M()),
            d.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  request_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint64String,
                    pbr: g.qM.readPackedUint64String,
                    bw: g.gp.writeRepeatedUint64String,
                  },
                  rt_include_completed_since: {
                    n: 4,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = g.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(Q.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Request";
        }
      }
      class K extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.requester_steamid || g.Sg(K.M()),
            d.Message.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  requester_steamid: {
                    n: 1,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  time_requested: {
                    n: 3,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  time_responded: {
                    n: 4,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  responder_steamid: {
                    n: 5,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  response_action: {
                    n: 6,
                    br: g.qM.readEnum,
                    bw: g.gp.writeEnum,
                  },
                  is_completed: { n: 7, br: g.qM.readBool, bw: g.gp.writeBool },
                  request_id: {
                    n: 8,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  requested_packageids: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint32,
                    pbr: g.qM.readPackedUint32,
                    bw: g.gp.writeRepeatedUint32,
                  },
                  purchased_packageids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint32,
                    pbr: g.qM.readPackedUint32,
                    bw: g.gp.writeRepeatedUint32,
                  },
                  requested_bundleids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint32,
                    pbr: g.qM.readPackedUint32,
                    bw: g.gp.writeRepeatedUint32,
                  },
                  purchased_bundleids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint32,
                    pbr: g.qM.readPackedUint32,
                    bw: g.gp.writeRepeatedUint32,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = g.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PurchaseRequest";
        }
      }
      class L extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.requests || g.Sg(L.M()),
            d.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { requests: { n: 1, c: K, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = g.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Response";
        }
      }
      class A extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.family_groupid || g.Sg(A.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  action: { n: 3, br: g.qM.readEnum, bw: g.gp.writeEnum },
                  request_id: {
                    n: 4,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = g.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(A.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Request";
        }
      }
      class D extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Response";
        }
      }
      class V extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.family_groupid || g.Sg(V.M()),
            d.Message.initialize(this, e, 0, -1, [2], null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  running_apps: { n: 2, c: $, r: !0, q: !0 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = g.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification";
        }
      }
      class J extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.member_steamid || g.Sg(J.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  member_steamid: {
                    n: 1,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  owner_steamid: {
                    n: 2,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = g.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(J.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
        }
      }
      class $ extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.appid || g.Sg($.M()),
            d.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  appid: { n: 1, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  playing_members: { n: 3, c: J, r: !0, q: !0 },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = g.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT($.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
        }
      }
      class H extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_InviteStatus_Notification";
        }
      }
      class Y extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.family_groupid || g.Sg(Y.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = g.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(Y.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_GroupChanged_Notification";
        }
      }
      class X extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.family_groupid || g.Sg(X.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = g.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Request";
        }
      }
      class Z extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.changes || g.Sg(Z.M()),
            d.Message.initialize(this, e, 0, -1, [1], null);
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
          return Z.sm_mbf || (Z.sm_mbf = g.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response";
        }
      }
      class ee extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.timestamp || g.Sg(ee.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  actor_steamid: {
                    n: 2,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  type: { n: 3, br: g.qM.readEnum, bw: g.gp.writeEnum },
                  body: { n: 4, br: g.qM.readString, bw: g.gp.writeString },
                  by_support: { n: 5, br: g.qM.readBool, bw: g.gp.writeBool },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = g.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response_Change";
        }
      }
      class re extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.steamid || g.Sg(re.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  steamid: {
                    n: 1,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  first_played: {
                    n: 3,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  latest_played: {
                    n: 4,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  seconds_played: {
                    n: 5,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = g.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_PlaytimeEntry";
        }
      }
      class te extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.family_groupid || g.Sg(te.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = g.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(te.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Request";
        }
      }
      class ie extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.entries || g.Sg(ie.M()),
            d.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  entries: { n: 1, c: re, r: !0, q: !0 },
                  entries_by_owner: { n: 2, c: re, r: !0, q: !0 },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = g.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Response";
        }
      }
      class ae extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.family_groupid || g.Sg(ae.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  cooldown_count: {
                    n: 2,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = g.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
        }
      }
      class se extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
        }
      }
      class ne extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.family_groupid || g.Sg(ne.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  include_own: { n: 2, br: g.qM.readBool, bw: g.gp.writeBool },
                  include_excluded: {
                    n: 3,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                  language: { n: 5, br: g.qM.readString, bw: g.gp.writeString },
                  max_apps: { n: 6, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  include_non_games: {
                    n: 7,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                  steamid: {
                    n: 8,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = g.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(ne.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Request";
        }
      }
      class oe extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.apps || g.Sg(oe.M()),
            d.Message.initialize(this, e, 0, -1, [1], null);
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
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = g.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(oe.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response";
        }
      }
      class le extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.appid || g.Sg(le.M()),
            d.Message.initialize(this, e, 0, -1, [2, 15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  owner_steamids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: g.qM.readFixed64String,
                    pbr: g.qM.readPackedFixed64String,
                    bw: g.gp.writeRepeatedFixed64String,
                  },
                  name: { n: 6, br: g.qM.readString, bw: g.gp.writeString },
                  sort_as: { n: 7, br: g.qM.readString, bw: g.gp.writeString },
                  capsule_filename: {
                    n: 8,
                    br: g.qM.readString,
                    bw: g.gp.writeString,
                  },
                  img_icon_hash: {
                    n: 9,
                    br: g.qM.readString,
                    bw: g.gp.writeString,
                  },
                  exclude_reason: {
                    n: 10,
                    d: 0,
                    br: g.qM.readEnum,
                    bw: g.gp.writeEnum,
                  },
                  rt_time_acquired: {
                    n: 11,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  rt_last_played: {
                    n: 12,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  rt_playtime: {
                    n: 13,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  app_type: {
                    n: 14,
                    d: 1,
                    br: g.qM.readEnum,
                    bw: g.gp.writeEnum,
                  },
                  content_descriptors: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint32,
                    pbr: g.qM.readPackedUint32,
                    bw: g.gp.writeRepeatedUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = g.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(le.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
        }
      }
      class ue extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.family_groupid || g.Sg(ue.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = g.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(ue.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
        }
      }
      class me extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (B().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
        }
      }
      class ce extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.family_groupid || g.Sg(ce.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = g.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(ce.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
        }
      }
      class ye extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (B().BinaryReader)(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
        }
      }
      class de extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.family_groupid || g.Sg(de.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = g.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(de.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
        }
      }
      class Be extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (B().BinaryReader)(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
        }
      }
      class ge extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.family_groupid || g.Sg(ge.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  appid: { n: 2, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  lender_steamid: {
                    n: 3,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = g.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(ge.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Request";
        }
      }
      class _e extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new _e();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Response";
        }
      }
      class pe extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.family_groupid || g.Sg(pe.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = g.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(pe.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Request";
        }
      }
      class be extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.members || g.Sg(be.M()),
            d.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: { members: { n: 1, c: Me, r: !0, q: !0 } },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = g.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(be.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response";
        }
      }
      class Me extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.steamid || g.Sg(Me.M()),
            d.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  steamid: {
                    n: 1,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  preferred_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint32,
                    pbr: g.qM.readPackedUint32,
                    bw: g.gp.writeRepeatedUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = g.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(Me.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
        }
      }
      class fe extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.family_groupid || g.Sg(fe.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = g.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(fe.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Request";
        }
      }
      class we extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new we();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Response";
        }
      }
      class ze extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.family_groupid || g.Sg(ze.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = g.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(ze.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Request";
        }
      }
      class Fe extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (B().BinaryReader)(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Response";
        }
      }
      class Se extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.family_groupid || g.Sg(Se.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = g.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(Se.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Request";
        }
      }
      class Re extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.wallet_country_matches || g.Sg(Re.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  wallet_country_matches: {
                    n: 1,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                  ip_match: { n: 2, br: g.qM.readBool, bw: g.gp.writeBool },
                  join_restriction: {
                    n: 3,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = g.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(Re.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Response";
        }
      }
      class he extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.steamid || g.Sg(he.M()),
            d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  steamid: {
                    n: 1,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  invite_id: {
                    n: 2,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = g.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return g.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return g.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return g.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          g.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Request";
        }
      }
      class je extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new je();
        }
        static deserializeBinary(e) {
          let r = new (B().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Response";
        }
      }
      !(function (e) {
        (e.CreateFamilyGroup = function (e, r) {
          return e.SendMsg(
            "FamilyGroups.CreateFamilyGroup#1",
            (0, n.I8)(_, r),
            p,
            { ePrivilege: 1 },
          );
        }),
          (e.GetFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, n.I8)(b, r),
              z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFamilyGroupForUser = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, n.I8)(S, r),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ModifyFamilyGroupDetails = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, n.I8)(h, r),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.InviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, n.I8)(v, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmInviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, n.I8)(ue, r),
              me,
              { ePrivilege: 1 },
            );
          }),
          (e.ResendInvitationToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, n.I8)(de, r),
              Be,
              { ePrivilege: 1 },
            );
          }),
          (e.JoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, n.I8)(W, r),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmJoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, n.I8)(ce, r),
              ye,
              { ePrivilege: 1 },
            );
          }),
          (e.RemoveFromFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, n.I8)(O, r),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelFamilyGroupInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, n.I8)(G, r),
              U,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUsersSharingDevice = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, n.I8)(x, r),
              N,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, n.I8)(C, r),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.UndeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, n.I8)(fe, r),
              we,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlaytimeSummary = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, n.I8)(te, r),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.RequestPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, n.I8)(k, r),
              P,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPurchaseRequests = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, n.I8)(Q, r),
              L,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RespondToRequestedPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, n.I8)(A, r),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.GetChangeLog = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, n.I8)(X, r),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetFamilyCooldownOverrides = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, n.I8)(ae, r),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSharedLibraryApps = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, n.I8)(ne, r),
              oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPreferredLender = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, n.I8)(ge, r),
              _e,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferredLenders = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, n.I8)(pe, r),
              be,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ForceAcceptInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, n.I8)(ze, r),
              Fe,
              { ePrivilege: 5 },
            );
          }),
          (e.GetInviteCheckResults = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, n.I8)(Se, r),
              Re,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ClearCooldownSkip = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, n.I8)(he, r),
              je,
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
              request: H,
            }),
            (e.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: Y,
            });
        })(a || (a = {}));
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
      const Qe = s.createContext({ staleTimeMs: 1 / 0 });
      function Ke(e) {
        const { staleTimeMs: r, children: t } = e,
          i = s.useMemo(() => ({ staleTimeMs: r ?? 3e3 }), [r]);
        return s.createElement(Qe.Provider, { value: i }, t);
      }
      function Le(e = !1) {
        return Ae((0, c.LH)(), e);
      }
      function Ae(e, r = !1) {
        const t = (0, y.KV)(),
          a = (0, s.useContext)(Qe).staleTimeMs;
        return (0, o.I)({
          queryKey: Ue(e, r),
          queryFn: async () => {
            const a = n.w.Init(S);
            a.Body().set_steamid(e),
              a.Body().set_include_family_group_response(r);
            const s = await i.GetFamilyGroupForUser(t, a);
            return Pe(s.GetEResult()), s.Body();
          },
          staleTime: a,
          enabled: !!e,
          placeholderData: e ? void 0 : new R(),
        });
      }
      function De(e) {
        const r = (0, y.KV)(),
          t = (0, s.useContext)(Qe).staleTimeMs;
        return (0, o.I)({
          queryKey: Ce(e),
          queryFn: async () => {
            if (e) {
              const t = n.w.Init(b);
              t.Body().set_family_groupid(e);
              const a = await i.GetFamilyGroup(r, t);
              return Pe(a.GetEResult()), a.Body();
            }
            throw 42;
          },
          staleTime: t,
        });
      }
      function Ve() {
        const e = (0, y.KV)(),
          r = (0, l.jE)(),
          t = (0, c.LH)();
        return (0, u.n)({
          mutationFn: async (r) => {
            const t = n.w.Init(_);
            t.Body().set_name(r);
            const a = await i.CreateFamilyGroup(e, t);
            return Pe(a.GetEResult()), a.Body();
          },
          onSuccess: () => {
            r.invalidateQueries({ queryKey: Ue(t) });
          },
        });
      }
      function Je(e) {
        const r = (0, y.KV)(),
          t = (0, l.jE)(),
          a = (0, c.LH)();
        return (0, u.n)({
          mutationFn: async () => {
            const t = n.w.Init(C);
            t.Body().set_family_groupid(e);
            const a = await i.DeleteFamilyGroup(r, t);
            return Pe(a.GetEResult()), a.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: Ue(a) }),
              t.invalidateQueries({ queryKey: Ce(e) }),
              t.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function $e(e) {
        const r = (0, y.KV)(),
          t = (0, l.jE)();
        return (0, u.n)({
          mutationFn: async (t) => {
            const a = n.w.Init(h);
            a.Body().set_family_groupid(e), a.Body().set_name(t);
            const s = await i.ModifyFamilyGroupDetails(r, a);
            return Pe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: Ce(e) }),
              t.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function He(e, r, t) {
        const a = (0, y.KV)(),
          s = (0, l.jE)();
        return (0, u.n)({
          mutationFn: async () => {
            const s = n.w.Init(v);
            s.Body().set_family_groupid(e),
              s.Body().set_receiver_steamid(r),
              s.Body().set_receiver_role(t);
            const o = await i.InviteToFamilyGroup(a, s);
            return Pe(o.GetEResult()), o.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: Ue(r) }),
              s.invalidateQueries({ queryKey: Ce(e) }),
              s.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function Ye(e, r = null) {
        const t = (0, y.KV)(),
          a = (0, c.LH)(),
          s = (0, l.jE)();
        return (0, u.n)({
          mutationFn: async () => {
            const a = n.w.Init(W);
            a.Body().set_family_groupid(e), null !== r && a.Body().set_nonce(r);
            const s = await i.JoinFamilyGroup(t, a);
            return Pe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: Ue(a) }),
              s.invalidateQueries({ queryKey: Ce(e) }),
              s.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function Xe(e, r) {
        const t = (0, y.KV)(),
          a = (0, l.jE)();
        return (0, u.n)({
          mutationFn: async () => {
            const a = n.w.Init(G);
            a.Body().set_family_groupid(e), a.Body().set_steamid_to_cancel(r);
            const s = await i.CancelFamilyGroupInvite(t, a);
            return Pe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            a.invalidateQueries({ queryKey: Ue(r) }),
              a.invalidateQueries({ queryKey: Ce(e) }),
              a.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function Ze(e, r) {
        const t = (0, y.KV)(),
          a = (0, l.jE)();
        return (0, u.n)({
          mutationFn: async () => {
            const a = n.w.Init(O);
            a.Body().set_family_groupid(e), a.Body().set_steamid_to_remove(r);
            const s = await i.RemoveFromFamilyGroup(t, a);
            return Pe(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            a.invalidateQueries({ queryKey: Ue(r) }),
              a.invalidateQueries({ queryKey: Ce(e) }),
              a.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function er(e) {
        const r = (0, y.KV)();
        return (0, o.I)({
          queryKey: xe(e),
          queryFn: async () => {
            const t = (0, Te.VY)("clientsessionid"),
              a = t && BigInt("0x" + t).toString(),
              s = n.w.Init(x);
            s.Body().set_family_groupid(e),
              s.Body().set_client_instance_id(a ?? void 0);
            const o = await i.GetUsersSharingDevice(r, s);
            return Pe(o.GetEResult()), o.Body();
          },
        });
      }
      function rr(e) {
        const r = (0, c.LH)(),
          t = De(e);
        return t.data
          ?.members()
          .find((e) => e.steamid() == r)
          ?.role();
      }
      function tr(e, r) {
        const t = (0, y.KV)();
        return (0, u.n)({
          mutationFn: async () => {
            const a = n.w.Init(k);
            a.Body().set_family_groupid(e),
              a.Body().set_use_account_cart(!0),
              a.Body().set_store_country_code(r);
            const s = await i.RequestPurchase(t, a);
            return Pe(s.GetEResult()), s.Body();
          },
        });
      }
      function ir(e, r) {
        const t = (0, y.KV)(),
          a = (0, c.LH)();
        return (0, o.I)({
          queryKey: ke(e, a),
          queryFn: async () => {
            const a = n.w.Init(Q);
            a.Body().set_family_groupid(e),
              void 0 !== r && a.Body().set_rt_include_completed_since(r);
            const s = await i.GetPurchaseRequests(t, a);
            return Pe(s.GetEResult()), s.Body();
          },
        });
      }
      function ar(e, r) {
        const t = (0, y.KV)(),
          a = (0, c.LH)();
        return (0, o.I)({
          queryKey: ke(e, a, r),
          queryFn: async () => {
            const a = n.w.Init(Q);
            a.Body().set_family_groupid(e), a.Body().add_request_ids(r);
            const s = await i.GetPurchaseRequests(t, a);
            return Pe(s.GetEResult()), s.Body();
          },
          select: (e) =>
            e.toObject().requests?.find(({ request_id: e }) => e === r),
        });
      }
      function sr(e, r, t) {
        const a = (0, y.KV)(),
          s = (0, l.jE)();
        return (0, u.n)({
          mutationFn: async () => {
            const s = n.w.Init(A);
            s.Body().set_family_groupid(e),
              s.Body().set_request_id(r),
              s.Body().set_action(t);
            const o = await i.RespondToRequestedPurchase(a, s);
            return Pe(o.GetEResult()), o.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: ke(e) }),
              s.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      const nr = (0, s.createContext)({
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
        const { setErrorMessage: e } = (0, s.useContext)(nr);
        return { setErrorMessage: e };
      }
      function mr(e, r, t) {
        const { setErrorMessage: i } = ur();
        (0, s.useEffect)(() => {
          if (e.isError) {
            const a = e.error;
            i(
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
              })(a, r, t),
            );
          }
        }, [i, e.isError, e.error, r, t]);
      }
      function cr(e, r) {
        const { setErrorMessage: t } = ur();
        (0, s.useEffect)(() => {
          e.isError && t((0, qe.we)(r));
        }, [t, e.isError, r]);
      }
      function yr(e) {
        const r = (0, y.KV)();
        return (0, o.I)({
          queryKey: Ee(e),
          queryFn: async () => {
            const t = n.w.Init(X);
            t.Body().set_family_groupid(e);
            const a = await i.GetChangeLog(r, t);
            return Pe(a.GetEResult()), a.Body().changes();
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
        const t = (0, c.LH)(),
          { settings: a, mapAppsAllowed: s } = (0, Oe.S0)(t).data,
          l = (0, Oe.BM)(),
          u = (0, y.KV)(),
          {
            bIncludeOwn: d,
            bIncludeExcluded: B,
            bIncludeNonGames: g,
            for_account_id: _,
          } = r ?? {},
          p = void 0 === r?.enabled || r.enabled,
          b = gr(e, r, a, l),
          M = (e) => !(0, Oe.or)(e.appid(), l, a, s);
        return (0, o.I)({
          queryKey: b,
          queryFn: async () => {
            const r = n.w.Init(ne);
            if (
              (r.Body().set_family_groupid(e),
              r.Body().set_include_own(d),
              r.Body().set_include_excluded(B),
              r.Body().set_language(We.TS.LANGUAGE),
              r.Body().set_include_non_games(g),
              _)
            ) {
              const e = Ge.b2.InitFromAccountID(_, We.TS.EUNIVERSE);
              r.Body().set_steamid(e.ConvertTo64BitString());
            }
            const t = await i.GetSharedLibraryApps(u, r);
            return (
              Pe(t.GetEResult()),
              t
                .Body()
                .apps()
                .filter(M)
                .map((e) => e.toObject())
            );
          },
          enabled: !!a && p,
          placeholderData: m.rX,
          select: r?.select,
        });
      }
      function pr(e, r) {
        const t = (0, l.jE)(),
          i = (0, c.LH)(),
          { settings: a } = (0, Oe.S0)(i).data ?? {},
          n = gr(e, r, a, (0, Oe.BM)());
        return (0, s.useCallback)(() => {
          t.invalidateQueries({ queryKey: n });
        }, [t, n]);
      }
      function br(e, r) {
        let t = e.sort_as || e.name,
          i = r.sort_as || r.name;
        return (0, Ie.lY)(t, i);
      }
      function Mr(e, r) {
        return r.rt_time_acquired - e.rt_time_acquired || br(e, r);
      }
      function fr(e, r, t, i = []) {
        const a = (0, s.useMemo)(
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
                })(t, i, e),
              ) || [],
            [e, t, i],
          ),
          n = (0, s.useCallback)(
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
                  i = (e, r) => Mr(r, e);
                  break;
                case "date_acquired-desc":
                  i = Mr;
              }
              return i(e, t);
            },
            [r],
          );
        return (0, s.useMemo)(() => a.slice().sort(n), [a, n]);
      }
      function wr(e, r, t) {
        const a = (0, y.KV)(),
          s = (0, l.jE)(),
          o = (0, c.LH)();
        return (0, u.n)({
          mutationFn: async () => {
            const s = n.w.Init(ce);
            s.Body().set_family_groupid(e),
              s.Body().set_invite_id(r),
              s.Body().set_nonce(t);
            const o = await i.ConfirmJoinFamilyGroup(a, s);
            return Pe(o.GetEResult()), o.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: Ue(o) }),
              s.invalidateQueries({ queryKey: Ce(e) }),
              s.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function zr(e, r, t) {
        const a = (0, y.KV)(),
          s = (0, l.jE)();
        return (0, u.n)({
          mutationFn: async () => {
            const s = n.w.Init(ue);
            s.Body().set_family_groupid(e),
              s.Body().set_invite_id(r),
              s.Body().set_nonce(t);
            const o = await i.ConfirmInviteToFamilyGroup(a, s);
            return Pe(o.GetEResult()), o.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: Ce(e) }),
              s.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
      function Fr(e, r) {
        const t = (0, y.KV)();
        return (0, u.n)({
          mutationFn: async () => {
            const a = n.w.Init(de);
            a.Body().set_family_groupid(e), a.Body().set_steamid(r);
            const s = await i.ResendInvitationToFamilyGroup(t, a);
            return Pe(s.GetEResult()), s;
          },
        });
      }
      function Sr(e) {
        const r = (0, y.KV)();
        return (0, o.I)({
          queryKey: Ne(e),
          queryFn: async () => {
            const t = n.w.Init(ve.m8);
            t.Body().set_steamid(e);
            const i = await ve.xt.GetRecentPlaytimeSessionsForChild(r, t);
            Pe(i.GetEResult());
            const a = (function (e) {
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
            return a;
          },
        });
      }
      function Rr(e) {
        const r = (0, y.KV)(),
          t = (0, c.LH)(),
          a = (0, l.jE)();
        return (0, u.n)({
          mutationFn: async () => {
            const t = n.w.Init(fe);
            t.Body().set_family_groupid(e);
            const a = await i.UndeleteFamilyGroup(r, t);
            return Pe(a.GetEResult()), a;
          },
          onSuccess: () => {
            a.invalidateQueries({ queryKey: Ue(t) }),
              a.invalidateQueries({ queryKey: Ce(e) }),
              a.invalidateQueries({ queryKey: Ee(e) });
          },
        });
      }
    },
  },
]);
