/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [30925],
  {
    35850: (e, r, t) => {
      t.d(r, {
        V1: () => Le,
        U6: () => Mr,
        GF: () => wr,
        y0: () => Re,
        h: () => Ae,
        pr: () => or,
        Gt: () => Ie,
        yj: () => Ue,
        qb: () => je,
        K5: () => Ze,
        xy: () => _r,
        HP: () => $e,
        _Y: () => xe,
        sv: () => ke,
        YD: () => Ce,
        Oe: () => Qe,
        Fk: () => Je,
        e$: () => rr,
        cl: () => Wr,
        NP: () => n,
        PQ: () => i,
        GC: () => a,
        IG: () => s,
        fO: () => l,
        Ex: () => kr,
      });
      var i = {};
      t.r(i), t.d(i, { s: () => B, sf: () => g, kr: () => d });
      var a = {};
      t.r(a), t.d(a, { Mk: () => b, SC: () => p, uk: () => _ });
      var s = {};
      t.r(s),
        t.d(s, {
          JV: () => z,
          jG: () => F,
          DP: () => f,
          hs: () => S,
          Z5: () => M,
          ge: () => w,
        });
      var n = {};
      t.r(n),
        t.d(n, {
          fd: () => v,
          yt: () => C,
          Pm: () => A,
          v9: () => Q,
          E4: () => R,
          xD: () => j,
          RE: () => h,
          qe: () => V,
          H$: () => E,
          M4: () => q,
          SW: () => $,
          yu: () => I,
          Ig: () => O,
          kv: () => U,
          pu: () => T,
          zA: () => G,
          Ve: () => W,
          Pj: () => P,
          n0: () => k,
          i6: () => N,
          Wl: () => L,
          yZ: () => K,
          re: () => D,
          am: () => x,
          X9: () => H,
        });
      var l = {};
      t.r(l),
        t.d(l, {
          sA: () => Y,
          DG: () => te,
          iz: () => ae,
          Az: () => ie,
          jp: () => re,
          zC: () => X,
          RN: () => J,
          C2: () => Z,
          Wr: () => we,
          DI: () => fe,
          Ec: () => be,
          Yt: () => Me,
          CB: () => ze,
          ro: () => Fe,
          qG: () => Se,
          Qs: () => _e,
          SU: () => pe,
          cZ: () => ge,
          FN: () => Be,
          xg: () => ee,
          xO: () => se,
          DQ: () => le,
          L6: () => oe,
          xr: () => ue,
          A1: () => ye,
          Wv: () => de,
          w4: () => me,
          zg: () => ne,
          CY: () => ce,
        });
      var o = t(80613),
        u = t.n(o),
        m = t(89068),
        c = t(56545),
        y = t(45334);
      const d = 0,
        B = 1,
        g = 2,
        _ = 0,
        p = 1,
        b = 2,
        M = 0,
        f = 1,
        w = 2,
        z = 3,
        F = 4,
        S = 5,
        R = 1,
        h = 2,
        j = 3,
        v = 4,
        q = 5,
        W = 6,
        T = 7,
        O = 8,
        I = 9,
        G = 10,
        U = 11,
        C = 12,
        E = 13,
        x = 14,
        N = 15,
        k = 16,
        P = 17,
        Q = 18,
        K = 19,
        L = 20,
        D = 21,
        A = 22,
        V = 23,
        $ = 24,
        H = 25,
        J = 0,
        Y = 1,
        Z = 2,
        X = 3,
        ee = 4,
        re = 6,
        te = 7,
        ie = 8,
        ae = 9,
        se = 10,
        ne = 11,
        le = 12,
        oe = 13,
        ue = 15,
        me = 16,
        ce = 17,
        ye = 18,
        de = 19,
        Be = 20,
        ge = 21,
        _e = 22,
        pe = 23,
        be = 24,
        Me = 25,
        fe = 26,
        we = 27,
        ze = 28,
        Fe = 29,
        Se = 30;
      class Re extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.name || m.Sg(Re.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  name: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = m.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Re.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Request";
        }
      }
      class he extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.family_groupid || m.Sg(he.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  cooldown_skip_granted: {
                    n: 2,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = m.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Response";
        }
      }
      class je extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.family_groupid || m.Sg(je.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  send_running_apps: {
                    n: 2,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = m.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(je.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Request";
        }
      }
      class ve extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.steamid || m.Sg(ve.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  role: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  time_joined: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  cooldown_seconds_remaining: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = m.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(ve.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMember";
        }
      }
      class qe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.steamid || m.Sg(qe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  role: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = m.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(qe.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInvite";
        }
      }
      class We extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.steamid || m.Sg(We.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = m.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(We.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupFormerMember";
        }
      }
      class Te extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.name || m.Sg(Te.M()),
            o.Message.initialize(this, e, 0, -1, [2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  name: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  members: { n: 2, c: ve, r: !0, q: !0 },
                  pending_invites: { n: 3, c: qe, r: !0, q: !0 },
                  free_spots: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  country: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                  slot_cooldown_remaining_seconds: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  former_members: { n: 7, c: We, r: !0, q: !0 },
                  slot_cooldown_overrides: {
                    n: 8,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = m.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Te.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Response";
        }
      }
      class Oe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.family_groupid || m.Sg(Oe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  role: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  inviter_steamid: {
                    n: 3,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  awaiting_2fa: { n: 4, br: m.qM.readBool, bw: m.gp.writeBool },
                  invite_id: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = m.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Oe.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInviteForUser";
        }
      }
      class Ie extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.steamid || m.Sg(Ie.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  include_family_group_response: {
                    n: 2,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = m.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ie.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Request";
        }
      }
      class Ge extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.family_groupid || m.Sg(Ge.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  rtime_joined: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  rtime_left: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  role: { n: 4, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  participated: { n: 5, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = m.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ge.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMembership";
        }
      }
      class Ue extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.family_groupid || m.Sg(Ue.M()),
            o.Message.initialize(this, e, 0, -1, [5, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  is_not_member_of_any_group: {
                    n: 2,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  latest_time_joined: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  latest_joined_family_groupid: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  pending_group_invites: { n: 5, c: Oe, r: !0, q: !0 },
                  role: { n: 6, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  cooldown_seconds_remaining: {
                    n: 7,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  family_group: { n: 8, c: Te },
                  can_undelete_last_joined_family: {
                    n: 9,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  membership_history: { n: 10, c: Ge, r: !0, q: !0 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = m.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ue.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Response";
        }
      }
      class Ce extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.family_groupid || m.Sg(Ce.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  name: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = m.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ce.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
        }
      }
      class Ee extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ee();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
        }
      }
      class xe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.family_groupid || m.Sg(xe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  receiver_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  receiver_role: {
                    n: 3,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = m.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(xe.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Request";
        }
      }
      class Ne extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.invite_id || m.Sg(Ne.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  invite_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  two_factor_method: {
                    n: 2,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = m.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ne.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Response";
        }
      }
      class ke extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.family_groupid || m.Sg(ke.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  nonce: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = m.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(ke.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Request";
        }
      }
      class Pe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.two_factor_method || m.Sg(Pe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  two_factor_method: {
                    n: 2,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  cooldown_skip_granted: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  invite_already_accepted: {
                    n: 4,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  cooldown_seconds_remaining: {
                    n: 5,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = m.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Pe.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Response";
        }
      }
      class Qe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.family_groupid || m.Sg(Qe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  steamid_to_remove: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = m.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Qe.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Qe();
          return Qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Request";
        }
      }
      class Ke extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ke();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ke();
          return Ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Response";
        }
      }
      class Le extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.family_groupid || m.Sg(Le.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  steamid_to_cancel: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = m.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Le.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Request";
        }
      }
      class De extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new De();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Response";
        }
      }
      class Ae extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.family_groupid || m.Sg(Ae.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = m.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ae.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Request";
        }
      }
      class Ve extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ve();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ve();
          return Ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Response";
        }
      }
      class $e extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.family_groupid || m.Sg($e.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  client_instance_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = m.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT($e.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new $e();
          return $e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj($e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0($e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Request";
        }
      }
      class He extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.users || m.Sg(He.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  users: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readFixed64String,
                    pbr: m.qM.readPackedFixed64String,
                    bw: m.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = m.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(He.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new He();
          return He.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(He.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(He.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Response";
        }
      }
      class Je extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.family_groupid || m.Sg(Je.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  store_country_code: {
                    n: 3,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  use_account_cart: {
                    n: 4,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = m.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Je.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Je();
          return Je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Request";
        }
      }
      class Ye extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.gidshoppingcart || m.Sg(Ye.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = m.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ye.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ye();
          return Ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Response";
        }
      }
      class Ze extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.family_groupid || m.Sg(Ze.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  request_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint64String,
                    pbr: m.qM.readPackedUint64String,
                    bw: m.gp.writeRepeatedUint64String,
                  },
                  rt_include_completed_since: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = m.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ze.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ze();
          return Ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Request";
        }
      }
      class Xe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.requester_steamid || m.Sg(Xe.M()),
            o.Message.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  requester_steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  time_requested: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  time_responded: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  responder_steamid: {
                    n: 5,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  response_action: {
                    n: 6,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  is_completed: { n: 7, br: m.qM.readBool, bw: m.gp.writeBool },
                  request_id: {
                    n: 8,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  requested_packageids: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  purchased_packageids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  requested_bundleids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  purchased_bundleids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = m.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Xe.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PurchaseRequest";
        }
      }
      class er extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            er.prototype.requests || m.Sg(er.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            er.sm_m ||
              (er.sm_m = {
                proto: er,
                fields: { requests: { n: 1, c: Xe, r: !0, q: !0 } },
              }),
            er.sm_m
          );
        }
        static MBF() {
          return er.sm_mbf || (er.sm_mbf = m.w0(er.M())), er.sm_mbf;
        }
        toObject(e = !1) {
          return er.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(er.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(er.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new er();
          return er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(er.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(er.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Response";
        }
      }
      class rr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rr.prototype.family_groupid || m.Sg(rr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rr.sm_m ||
              (rr.sm_m = {
                proto: rr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  action: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  request_id: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            rr.sm_m
          );
        }
        static MBF() {
          return rr.sm_mbf || (rr.sm_mbf = m.w0(rr.M())), rr.sm_mbf;
        }
        toObject(e = !1) {
          return rr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(rr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new rr();
          return rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Request";
        }
      }
      class tr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return tr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new tr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new tr();
          return tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Response";
        }
      }
      class ir extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ir.prototype.family_groupid || m.Sg(ir.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ir.sm_m ||
              (ir.sm_m = {
                proto: ir,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  running_apps: { n: 2, c: sr, r: !0, q: !0 },
                },
              }),
            ir.sm_m
          );
        }
        static MBF() {
          return ir.sm_mbf || (ir.sm_mbf = m.w0(ir.M())), ir.sm_mbf;
        }
        toObject(e = !1) {
          return ir.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(ir.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(ir.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new ir();
          return ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(ir.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(ir.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification";
        }
      }
      class ar extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ar.prototype.member_steamid || m.Sg(ar.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ar.sm_m ||
              (ar.sm_m = {
                proto: ar,
                fields: {
                  member_steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  owner_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            ar.sm_m
          );
        }
        static MBF() {
          return ar.sm_mbf || (ar.sm_mbf = m.w0(ar.M())), ar.sm_mbf;
        }
        toObject(e = !1) {
          return ar.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(ar.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new ar();
          return ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
        }
      }
      class sr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            sr.prototype.appid || m.Sg(sr.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            sr.sm_m ||
              (sr.sm_m = {
                proto: sr,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  playing_members: { n: 3, c: ar, r: !0, q: !0 },
                },
              }),
            sr.sm_m
          );
        }
        static MBF() {
          return sr.sm_mbf || (sr.sm_mbf = m.w0(sr.M())), sr.sm_mbf;
        }
        toObject(e = !1) {
          return sr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(sr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new sr();
          return sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
        }
      }
      class nr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return nr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new nr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new nr();
          return nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_InviteStatus_Notification";
        }
      }
      class lr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lr.prototype.family_groupid || m.Sg(lr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lr.sm_m ||
              (lr.sm_m = {
                proto: lr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            lr.sm_m
          );
        }
        static MBF() {
          return lr.sm_mbf || (lr.sm_mbf = m.w0(lr.M())), lr.sm_mbf;
        }
        toObject(e = !1) {
          return lr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(lr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(lr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new lr();
          return lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(lr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(lr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_GroupChanged_Notification";
        }
      }
      class or extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            or.prototype.family_groupid || m.Sg(or.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            or.sm_m ||
              (or.sm_m = {
                proto: or,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            or.sm_m
          );
        }
        static MBF() {
          return or.sm_mbf || (or.sm_mbf = m.w0(or.M())), or.sm_mbf;
        }
        toObject(e = !1) {
          return or.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(or.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new or();
          return or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(or.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Request";
        }
      }
      class ur extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ur.prototype.changes || m.Sg(ur.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ur.sm_m ||
              (ur.sm_m = {
                proto: ur,
                fields: { changes: { n: 1, c: mr, r: !0, q: !0 } },
              }),
            ur.sm_m
          );
        }
        static MBF() {
          return ur.sm_mbf || (ur.sm_mbf = m.w0(ur.M())), ur.sm_mbf;
        }
        toObject(e = !1) {
          return ur.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(ur.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new ur();
          return ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response";
        }
      }
      class mr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mr.prototype.timestamp || m.Sg(mr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mr.sm_m ||
              (mr.sm_m = {
                proto: mr,
                fields: {
                  timestamp: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  actor_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  type: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  body: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  by_support: { n: 5, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            mr.sm_m
          );
        }
        static MBF() {
          return mr.sm_mbf || (mr.sm_mbf = m.w0(mr.M())), mr.sm_mbf;
        }
        toObject(e = !1) {
          return mr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(mr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new mr();
          return mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response_Change";
        }
      }
      class cr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            cr.prototype.steamid || m.Sg(cr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            cr.sm_m ||
              (cr.sm_m = {
                proto: cr,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  first_played: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  latest_played: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  seconds_played: {
                    n: 5,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            cr.sm_m
          );
        }
        static MBF() {
          return cr.sm_mbf || (cr.sm_mbf = m.w0(cr.M())), cr.sm_mbf;
        }
        toObject(e = !1) {
          return cr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(cr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(cr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new cr();
          return cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(cr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(cr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_PlaytimeEntry";
        }
      }
      class yr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yr.prototype.family_groupid || m.Sg(yr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yr.sm_m ||
              (yr.sm_m = {
                proto: yr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            yr.sm_m
          );
        }
        static MBF() {
          return yr.sm_mbf || (yr.sm_mbf = m.w0(yr.M())), yr.sm_mbf;
        }
        toObject(e = !1) {
          return yr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(yr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(yr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new yr();
          return yr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(yr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(yr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Request";
        }
      }
      class dr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dr.prototype.entries || m.Sg(dr.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dr.sm_m ||
              (dr.sm_m = {
                proto: dr,
                fields: {
                  entries: { n: 1, c: cr, r: !0, q: !0 },
                  entries_by_owner: { n: 2, c: cr, r: !0, q: !0 },
                },
              }),
            dr.sm_m
          );
        }
        static MBF() {
          return dr.sm_mbf || (dr.sm_mbf = m.w0(dr.M())), dr.sm_mbf;
        }
        toObject(e = !1) {
          return dr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(dr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(dr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new dr();
          return dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(dr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(dr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Response";
        }
      }
      class Br extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Br.prototype.family_groupid || m.Sg(Br.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Br.sm_m ||
              (Br.sm_m = {
                proto: Br,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  cooldown_count: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Br.sm_m
          );
        }
        static MBF() {
          return Br.sm_mbf || (Br.sm_mbf = m.w0(Br.M())), Br.sm_mbf;
        }
        toObject(e = !1) {
          return Br.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Br.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Br();
          return Br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Br.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
        }
      }
      class gr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return gr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new gr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new gr();
          return gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
        }
      }
      class _r extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _r.prototype.family_groupid || m.Sg(_r.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _r.sm_m ||
              (_r.sm_m = {
                proto: _r,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  include_own: { n: 2, br: m.qM.readBool, bw: m.gp.writeBool },
                  include_excluded: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  language: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                  max_apps: { n: 6, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  include_non_games: {
                    n: 7,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  steamid: {
                    n: 8,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            _r.sm_m
          );
        }
        static MBF() {
          return _r.sm_mbf || (_r.sm_mbf = m.w0(_r.M())), _r.sm_mbf;
        }
        toObject(e = !1) {
          return _r.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(_r.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(_r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new _r();
          return _r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(_r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(_r.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Request";
        }
      }
      class pr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pr.prototype.apps || m.Sg(pr.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pr.sm_m ||
              (pr.sm_m = {
                proto: pr,
                fields: {
                  apps: { n: 1, c: br, r: !0, q: !0 },
                  owner_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            pr.sm_m
          );
        }
        static MBF() {
          return pr.sm_mbf || (pr.sm_mbf = m.w0(pr.M())), pr.sm_mbf;
        }
        toObject(e = !1) {
          return pr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(pr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(pr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new pr();
          return pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(pr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(pr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response";
        }
      }
      class br extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            br.prototype.appid || m.Sg(br.M()),
            o.Message.initialize(this, e, 0, -1, [2, 15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            br.sm_m ||
              (br.sm_m = {
                proto: br,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  owner_steamids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readFixed64String,
                    pbr: m.qM.readPackedFixed64String,
                    bw: m.gp.writeRepeatedFixed64String,
                  },
                  name: { n: 6, br: m.qM.readString, bw: m.gp.writeString },
                  sort_as: { n: 7, br: m.qM.readString, bw: m.gp.writeString },
                  capsule_filename: {
                    n: 8,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  img_icon_hash: {
                    n: 9,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  exclude_reason: {
                    n: 10,
                    d: J,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  rt_time_acquired: {
                    n: 11,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  rt_last_played: {
                    n: 12,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  rt_playtime: {
                    n: 13,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  app_type: {
                    n: 14,
                    d: y.$e,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  content_descriptors: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                },
              }),
            br.sm_m
          );
        }
        static MBF() {
          return br.sm_mbf || (br.sm_mbf = m.w0(br.M())), br.sm_mbf;
        }
        toObject(e = !1) {
          return br.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(br.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new br();
          return br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(br.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
        }
      }
      class Mr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mr.prototype.family_groupid || m.Sg(Mr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mr.sm_m ||
              (Mr.sm_m = {
                proto: Mr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Mr.sm_m
          );
        }
        static MBF() {
          return Mr.sm_mbf || (Mr.sm_mbf = m.w0(Mr.M())), Mr.sm_mbf;
        }
        toObject(e = !1) {
          return Mr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Mr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Mr();
          return Mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
        }
      }
      class fr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new fr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new fr();
          return fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
        }
      }
      class wr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wr.prototype.family_groupid || m.Sg(wr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wr.sm_m ||
              (wr.sm_m = {
                proto: wr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            wr.sm_m
          );
        }
        static MBF() {
          return wr.sm_mbf || (wr.sm_mbf = m.w0(wr.M())), wr.sm_mbf;
        }
        toObject(e = !1) {
          return wr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(wr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new wr();
          return wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
        }
      }
      class zr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new zr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new zr();
          return zr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
        }
      }
      class Fr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fr.prototype.family_groupid || m.Sg(Fr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fr.sm_m ||
              (Fr.sm_m = {
                proto: Fr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Fr.sm_m
          );
        }
        static MBF() {
          return Fr.sm_mbf || (Fr.sm_mbf = m.w0(Fr.M())), Fr.sm_mbf;
        }
        toObject(e = !1) {
          return Fr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Fr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Fr();
          return Fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
        }
      }
      class Sr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Sr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Sr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Sr();
          return Sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
        }
      }
      class Rr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rr.prototype.family_groupid || m.Sg(Rr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rr.sm_m ||
              (Rr.sm_m = {
                proto: Rr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  lender_steamid: {
                    n: 3,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Rr.sm_m
          );
        }
        static MBF() {
          return Rr.sm_mbf || (Rr.sm_mbf = m.w0(Rr.M())), Rr.sm_mbf;
        }
        toObject(e = !1) {
          return Rr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Rr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Rr();
          return Rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Request";
        }
      }
      class hr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return hr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new hr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new hr();
          return hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Response";
        }
      }
      class jr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jr.prototype.family_groupid || m.Sg(jr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jr.sm_m ||
              (jr.sm_m = {
                proto: jr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            jr.sm_m
          );
        }
        static MBF() {
          return jr.sm_mbf || (jr.sm_mbf = m.w0(jr.M())), jr.sm_mbf;
        }
        toObject(e = !1) {
          return jr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(jr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(jr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new jr();
          return jr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(jr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(jr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Request";
        }
      }
      class vr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vr.prototype.members || m.Sg(vr.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vr.sm_m ||
              (vr.sm_m = {
                proto: vr,
                fields: { members: { n: 1, c: qr, r: !0, q: !0 } },
              }),
            vr.sm_m
          );
        }
        static MBF() {
          return vr.sm_mbf || (vr.sm_mbf = m.w0(vr.M())), vr.sm_mbf;
        }
        toObject(e = !1) {
          return vr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(vr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(vr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new vr();
          return vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(vr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(vr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response";
        }
      }
      class qr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qr.prototype.steamid || m.Sg(qr.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qr.sm_m ||
              (qr.sm_m = {
                proto: qr,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  preferred_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                },
              }),
            qr.sm_m
          );
        }
        static MBF() {
          return qr.sm_mbf || (qr.sm_mbf = m.w0(qr.M())), qr.sm_mbf;
        }
        toObject(e = !1) {
          return qr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(qr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(qr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new qr();
          return qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(qr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(qr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
        }
      }
      class Wr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wr.prototype.family_groupid || m.Sg(Wr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wr.sm_m ||
              (Wr.sm_m = {
                proto: Wr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Wr.sm_m
          );
        }
        static MBF() {
          return Wr.sm_mbf || (Wr.sm_mbf = m.w0(Wr.M())), Wr.sm_mbf;
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Wr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Wr();
          return Wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Request";
        }
      }
      class Tr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Tr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Tr();
          return Tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Response";
        }
      }
      class Or extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Or.prototype.family_groupid || m.Sg(Or.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Or.sm_m ||
              (Or.sm_m = {
                proto: Or,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Or.sm_m
          );
        }
        static MBF() {
          return Or.sm_mbf || (Or.sm_mbf = m.w0(Or.M())), Or.sm_mbf;
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Or.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Or();
          return Or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Or.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Request";
        }
      }
      class Ir extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ir.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ir();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ir();
          return Ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Response";
        }
      }
      class Gr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gr.prototype.family_groupid || m.Sg(Gr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gr.sm_m ||
              (Gr.sm_m = {
                proto: Gr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Gr.sm_m
          );
        }
        static MBF() {
          return Gr.sm_mbf || (Gr.sm_mbf = m.w0(Gr.M())), Gr.sm_mbf;
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Gr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Gr();
          return Gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Request";
        }
      }
      class Ur extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.wallet_country_matches || m.Sg(Ur.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ur.sm_m ||
              (Ur.sm_m = {
                proto: Ur,
                fields: {
                  wallet_country_matches: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  ip_match: { n: 2, br: m.qM.readBool, bw: m.gp.writeBool },
                  join_restriction: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = m.w0(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Ur.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Ur();
          return Ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Response";
        }
      }
      class Cr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Cr.prototype.steamid || m.Sg(Cr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Cr.sm_m ||
              (Cr.sm_m = {
                proto: Cr,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  invite_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Cr.sm_m
          );
        }
        static MBF() {
          return Cr.sm_mbf || (Cr.sm_mbf = m.w0(Cr.M())), Cr.sm_mbf;
        }
        toObject(e = !1) {
          return Cr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(Cr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(Cr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Cr();
          return Cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(Cr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(Cr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Request";
        }
      }
      class Er extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Er();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Er();
          return Er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Response";
        }
      }
      class xr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xr.prototype.family_groupid || m.Sg(xr.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xr.sm_m ||
              (xr.sm_m = {
                proto: xr,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  rtime32_target: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            xr.sm_m
          );
        }
        static MBF() {
          return xr.sm_mbf || (xr.sm_mbf = m.w0(xr.M())), xr.sm_mbf;
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, r) {
          return m.BT(xr.M(), e, r);
        }
        static fromObject(e) {
          return m.Uq(xr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new xr();
          return xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return m.zj(xr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          m.i0(xr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RollbackFamilyGroup_Request";
        }
      }
      class Nr extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Nr();
        }
        static deserializeBinary(e) {
          let r = new (u().BinaryReader)(e),
            t = new Nr();
          return Nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RollbackFamilyGroup_Response";
        }
      }
      var kr, Pr;
      !(function (e) {
        (e.CreateFamilyGroup = function (e, r, t) {
          return e.SendMsg(
            "FamilyGroups.CreateFamilyGroup#1",
            (0, c.I8)(Re, r, t),
            he,
            { ePrivilege: 1 },
          );
        }),
          (e.GetFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, c.I8)(je, r, t),
              Te,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFamilyGroupForUser = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, c.I8)(Ie, r, t),
              Ue,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ModifyFamilyGroupDetails = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, c.I8)(Ce, r, t),
              Ee,
              { ePrivilege: 1 },
            );
          }),
          (e.InviteToFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, c.I8)(xe, r, t),
              Ne,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmInviteToFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, c.I8)(Mr, r, t),
              fr,
              { ePrivilege: 1 },
            );
          }),
          (e.ResendInvitationToFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, c.I8)(Fr, r, t),
              Sr,
              { ePrivilege: 1 },
            );
          }),
          (e.JoinFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, c.I8)(ke, r, t),
              Pe,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmJoinFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, c.I8)(wr, r, t),
              zr,
              { ePrivilege: 1 },
            );
          }),
          (e.RemoveFromFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, c.I8)(Qe, r, t),
              Ke,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelFamilyGroupInvite = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, c.I8)(Le, r, t),
              De,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUsersSharingDevice = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, c.I8)($e, r, t),
              He,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeleteFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, c.I8)(Ae, r, t),
              Ve,
              { ePrivilege: 1 },
            );
          }),
          (e.UndeleteFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, c.I8)(Wr, r, t),
              Tr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlaytimeSummary = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, c.I8)(yr, r, t),
              dr,
              { ePrivilege: 1 },
            );
          }),
          (e.RequestPurchase = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, c.I8)(Je, r, t),
              Ye,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPurchaseRequests = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, c.I8)(Ze, r, t),
              er,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RespondToRequestedPurchase = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, c.I8)(rr, r, t),
              tr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetChangeLog = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, c.I8)(or, r, t),
              ur,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetFamilyCooldownOverrides = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, c.I8)(Br, r, t),
              gr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSharedLibraryApps = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, c.I8)(_r, r, t),
              pr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPreferredLender = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, c.I8)(Rr, r, t),
              hr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferredLenders = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, c.I8)(jr, r, t),
              vr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ForceAcceptInvite = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, c.I8)(Or, r, t),
              Ir,
              { ePrivilege: 5 },
            );
          }),
          (e.GetInviteCheckResults = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, c.I8)(Gr, r, t),
              Ur,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ClearCooldownSkip = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, c.I8)(Cr, r, t),
              Er,
              { ePrivilege: 5 },
            );
          }),
          (e.RollbackFamilyGroup = function (e, r, t) {
            return e.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, c.I8)(xr, r, t),
              Nr,
              { ePrivilege: 5 },
            );
          });
      })(kr || (kr = {})),
        (function (e) {
          (e.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: ir,
          }),
            (e.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: nr,
            }),
            (e.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: lr,
            });
        })(Pr || (Pr = {}));
    },
    30925: (e, r, t) => {
      t.d(r, {
        BO: () => Q,
        Bc: () => C,
        DD: () => G,
        Ee: () => me,
        HM: () => U,
        Hs: () => T,
        IN: () => D,
        Ke: () => L,
        N0: () => W,
        QU: () => N,
        Qn: () => K,
        RC: () => $,
        TI: () => O,
        Tv: () => v,
        Vo: () => X,
        Ww: () => Y,
        Xq: () => te,
        Y0: () => I,
        YW: () => se,
        Yc: () => P,
        _K: () => x,
        eS: () => A,
        fO: () => ne,
        gv: () => H,
        lF: () => oe,
        ll: () => k,
        p8: () => J,
        tN: () => le,
        v2: () => E,
        vo: () => q,
        vu: () => ue,
        w1: () => Z,
        yM: () => re,
      });
      var i = t(90626),
        a = t(56545),
        s = t(80902),
        n = t(75233),
        l = t(51614),
        o = t(57168),
        u = t(68950),
        m = t(23809),
        c = t(37085),
        y = t(35850),
        d = t(42457),
        B = t(61859),
        g = (t(71430), t(30470)),
        _ = t(2627),
        p = t(15419),
        b = t(41338),
        M = t(29233);
      const f = (e, r) =>
          void 0 === r
            ? ["get_family_group_for_user ", e]
            : ["get_family_group_for_user ", e, r],
        w = (e) => ["get_family_group", e],
        z = (e) => ["get_family_history", e],
        F = (e) => ["get_users_sharing_device", e],
        S = (e) => ["recent_playtime_sessions", e];
      function R(e, r, t) {
        return t
          ? ["get_purchase_requests", e, r, t]
          : r
            ? ["get_purchase_requests", e, r]
            : ["get_purchase_requests", e];
      }
      function h(e, r) {
        if (e != c.R) throw e;
      }
      const j = i.createContext({ staleTimeMs: 1 / 0 });
      function v(e) {
        const { staleTimeMs: r, children: t } = e,
          a = i.useMemo(() => ({ staleTimeMs: r ?? 3e3 }), [r]);
        return i.createElement(j.Provider, { value: a }, t);
      }
      function q(e = !1) {
        return W((0, u.LH)(), e);
      }
      function W(e, r = !1) {
        const t = (0, m.KV)(),
          n = (0, i.useContext)(j).staleTimeMs;
        return (0, s.I)({
          queryKey: f(e, r),
          queryFn: async () => {
            const i = a.w.Init(y.Gt);
            i.Body().set_steamid(e),
              i.Body().set_include_family_group_response(r);
            const s = await y.Ex.GetFamilyGroupForUser(t, i);
            return h(s.GetEResult()), s.Body();
          },
          staleTime: n,
          enabled: !!e,
          placeholderData: e ? void 0 : new y.yj(),
        });
      }
      function T(e) {
        const r = (0, m.KV)(),
          t = (0, i.useContext)(j).staleTimeMs;
        return (0, s.I)({
          queryKey: w(e),
          queryFn: async () => {
            if (e) {
              const t = a.w.Init(y.qb);
              t.Body().set_family_groupid(e);
              const i = await y.Ex.GetFamilyGroup(r, t);
              return h(i.GetEResult()), i.Body();
            }
            throw c.p;
          },
          staleTime: t,
        });
      }
      function O() {
        const e = (0, m.KV)(),
          r = (0, n.jE)(),
          t = (0, u.LH)();
        return (0, l.n)({
          mutationFn: async (r) => {
            const t = a.w.Init(y.y0);
            t.Body().set_name(r);
            const i = await y.Ex.CreateFamilyGroup(e, t);
            return h(i.GetEResult()), i.Body();
          },
          onSuccess: () => {
            r.invalidateQueries({ queryKey: f(t) });
          },
        });
      }
      function I(e) {
        const r = (0, m.KV)(),
          t = (0, n.jE)(),
          i = (0, u.LH)();
        return (0, l.n)({
          mutationFn: async () => {
            const t = a.w.Init(y.h);
            t.Body().set_family_groupid(e);
            const i = await y.Ex.DeleteFamilyGroup(r, t);
            return h(i.GetEResult()), i.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: f(i) }),
              t.invalidateQueries({ queryKey: w(e) }),
              t.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function G(e) {
        const r = (0, m.KV)(),
          t = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async (t) => {
            const i = a.w.Init(y.YD);
            i.Body().set_family_groupid(e), i.Body().set_name(t);
            const s = await y.Ex.ModifyFamilyGroupDetails(r, i);
            return h(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            t.invalidateQueries({ queryKey: w(e) }),
              t.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function U(e, r, t) {
        const i = (0, m.KV)(),
          s = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const s = a.w.Init(y._Y);
            s.Body().set_family_groupid(e),
              s.Body().set_receiver_steamid(r),
              s.Body().set_receiver_role(t);
            const n = await y.Ex.InviteToFamilyGroup(i, s);
            return h(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: f(r) }),
              s.invalidateQueries({ queryKey: w(e) }),
              s.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function C(e) {
        const r = (0, m.KV)(),
          t = (0, u.LH)(),
          i = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const t = a.w.Init(y.sv);
            t.Body().set_family_groupid(e);
            const i = await y.Ex.JoinFamilyGroup(r, t);
            return h(i.GetEResult()), i.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(t) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function E(e, r) {
        const t = (0, m.KV)(),
          i = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = a.w.Init(y.V1);
            i.Body().set_family_groupid(e), i.Body().set_steamid_to_cancel(r);
            const s = await y.Ex.CancelFamilyGroupInvite(t, i);
            return h(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(r) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function x(e, r) {
        const t = (0, m.KV)(),
          i = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = a.w.Init(y.Oe);
            i.Body().set_family_groupid(e), i.Body().set_steamid_to_remove(r);
            const s = await y.Ex.RemoveFromFamilyGroup(t, i);
            return h(s.GetEResult()), s.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(r) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function N(e) {
        const r = (0, m.KV)();
        return (0, s.I)({
          queryKey: F(e),
          queryFn: async () => {
            const t = (0, _.VY)("clientsessionid"),
              i = t && BigInt("0x" + t).toString(),
              s = a.w.Init(y.HP);
            s.Body().set_family_groupid(e),
              s.Body().set_client_instance_id(i ?? void 0);
            const n = await y.Ex.GetUsersSharingDevice(r, s);
            return h(n.GetEResult()), n.Body();
          },
        });
      }
      function k(e) {
        const r = (0, u.LH)(),
          t = T(e);
        return t.data
          ?.members()
          .find((e) => e.steamid() == r)
          ?.role();
      }
      function P(e, r) {
        const t = (0, m.KV)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = a.w.Init(y.Fk);
            i.Body().set_family_groupid(e),
              i.Body().set_use_account_cart(!0),
              i.Body().set_store_country_code(r);
            const s = await y.Ex.RequestPurchase(t, i);
            return h(s.GetEResult()), s.Body();
          },
        });
      }
      function Q(e, r) {
        const t = (0, m.KV)(),
          i = (0, u.LH)();
        return (0, s.I)({
          queryKey: R(e, i),
          queryFn: async () => {
            const i = a.w.Init(y.K5);
            i.Body().set_family_groupid(e),
              void 0 !== r && i.Body().set_rt_include_completed_since(r);
            const s = await y.Ex.GetPurchaseRequests(t, i);
            return h(s.GetEResult()), s.Body();
          },
        });
      }
      function K(e, r) {
        const t = (0, m.KV)(),
          i = (0, u.LH)();
        return (0, s.I)({
          queryKey: R(e, i, r),
          queryFn: async () => {
            const i = a.w.Init(y.K5);
            i.Body().set_family_groupid(e), i.Body().add_request_ids(r);
            const s = await y.Ex.GetPurchaseRequests(t, i);
            return h(s.GetEResult()), s.Body();
          },
          select: (e) =>
            e.toObject().requests?.find(({ request_id: e }) => e === r),
        });
      }
      function L(e, r, t) {
        const i = (0, m.KV)(),
          s = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const s = a.w.Init(y.e$);
            s.Body().set_family_groupid(e),
              s.Body().set_request_id(r),
              s.Body().set_action(t);
            const n = await y.Ex.RespondToRequestedPurchase(i, s);
            return h(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: R(e) }),
              s.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      const D = (0, i.createContext)({
        errorMessage: null,
        setErrorMessage: (e) => {},
      });
      var A;
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
      })(A || (A = {}));
      const V = {
        [c.nO]: "#FamilyManagement_ErrorInternalServerError",
        [c.zi]: "#FamilyManagement_ErrorInternalServerError",
        [c.S7]: "#FamilyManagement_ErrorInternalServerError",
        [c.Te]: "#FamilyManagement_ErrorInternalServerError",
        [c.sW]: "#FamilyManagement_AccessDenied",
        [c.p]: "#FamilyManagement_ErrorNoMatch",
        [c.uN]: "#FamilyManagement_ErrorAccountDisabled",
        [c.$U]: "#FamilyManagement_ErrorNoActiveInvite",
        [c.ZI]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
        [c.UT]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
        [c.TE]: "#FamilyManagement_ErrorLimitExceeded",
        [c.B1]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
        [c.Nb]: "#FamilyManagement_LimitedAccount_CreateFamily",
        [c.h_]: {
          [A.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RateLimitExceeded_CreateFamily",
        },
        [c.lG]: {
          [A.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RegionLocked_CreateFamily",
          [A.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_RegionLocked_JoinFamily",
        },
        [c.zL]: {
          [A.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_Household_JoinFamily",
        },
        [c.iC]: {
          [A.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
          [A.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
          [A.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
        },
        [c.Ze]: {
          [A.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
          [A.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
          [A.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
        },
        [c.fb]: {
          [A.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
        },
      };
      function $() {
        const { setErrorMessage: e } = (0, i.useContext)(D);
        return { setErrorMessage: e };
      }
      function H(e, r, t) {
        const { setErrorMessage: a } = $(),
          { isError: s, error: n } = e,
          l = q();
        (0, i.useEffect)(() => {
          if (s) {
            const e = n,
              i = [];
            if (e === c.TE || e === c.B1) {
              let e;
              l.isSuccess &&
                l.data &&
                (e = l.data.cooldown_seconds_remaining()),
                i.push(
                  (function (e) {
                    if (!e)
                      return (0, B.we)("#FamilyManagement_LoadingPlaceholder");
                    const r = {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        weekday: void 0,
                      },
                      t = (0, B.TW)(Date.now() / 1e3 + e, r);
                    return t;
                  })(e),
                );
            }
            a(
              (function (e, r, t, i) {
                let a = "";
                if (e in V) {
                  const r = V[e];
                  if ("string" == typeof r) a = (0, B.we)(r, ...i);
                  else {
                    const e = r;
                    t in e && (a = (0, B.we)(e[t], ...i));
                  }
                }
                return (0, B.we)(r, a);
              })(e, r, t, i),
            );
          }
        }, [a, s, n, r, t, l.isSuccess, l.data]);
      }
      function J(e, r) {
        const { setErrorMessage: t } = $();
        (0, i.useEffect)(() => {
          e.isError && t((0, B.we)(r));
        }, [t, e.isError, r]);
      }
      function Y(e) {
        const r = (0, m.KV)();
        return (0, s.I)({
          queryKey: z(e),
          queryFn: async () => {
            const t = a.w.Init(y.pr);
            t.Body().set_family_groupid(e);
            const i = await y.Ex.GetChangeLog(r, t);
            return h(i.GetEResult()), i.Body().changes();
          },
          staleTime: 0,
        });
      }
      function Z(e, r) {
        return `${g.TS.STORE_BASE_URL}cart/purchaserequest/${e}/${r}`;
      }
      function X(e) {
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
            bIncludeOwn: d,
            bIncludeExcluded: B,
            bIncludeNonGames: _,
            for_account_id: b,
          } = r ?? {},
          f = void 0 === r?.enabled || r.enabled,
          w = ee(e, r, i, l),
          z = (e) => !(0, p.or)(e.appid(), l, i, n);
        return (0, s.I)({
          queryKey: w,
          queryFn: async () => {
            const r = a.w.Init(y.xy);
            if (
              (r.Body().set_family_groupid(e),
              r.Body().set_include_own(d),
              r.Body().set_include_excluded(B),
              r.Body().set_language(g.TS.LANGUAGE),
              r.Body().set_include_non_games(_),
              b)
            ) {
              const e = M.b2.InitFromAccountID(b, g.TS.EUNIVERSE);
              r.Body().set_steamid(e.ConvertTo64BitString());
            }
            const t = await y.Ex.GetSharedLibraryApps(c, r);
            return (
              h(t.GetEResult()),
              t
                .Body()
                .apps()
                .filter(z)
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
            const s = a.w.Init(y.GF);
            s.Body().set_family_groupid(e),
              s.Body().set_invite_id(r),
              s.Body().set_nonce(i);
            const n = await y.Ex.ConfirmJoinFamilyGroup(t, s);
            return h(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(s) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function le(e, r, t) {
        const i = (0, m.KV)(),
          s = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const s = a.w.Init(y.U6);
            s.Body().set_family_groupid(e),
              s.Body().set_invite_id(r),
              s.Body().set_nonce(t);
            const n = await y.Ex.ConfirmInviteToFamilyGroup(i, s);
            return h(n.GetEResult()), n.Body();
          },
          onSuccess: () => {
            s.invalidateQueries({ queryKey: w(e) }),
              s.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function oe(e) {
        const r = (0, m.KV)();
        return (0, s.I)({
          queryKey: S(e),
          queryFn: async () => {
            const t = a.w.Init(d.m8g);
            t.Body().set_steamid(e);
            const i = await d.xtC.GetRecentPlaytimeSessionsForChild(r, t);
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
      function ue(e) {
        const r = (0, m.KV)(),
          t = (0, u.LH)(),
          i = (0, n.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const t = a.w.Init(y.cl);
            t.Body().set_family_groupid(e);
            const i = await y.Ex.UndeleteFamilyGroup(r, t);
            return h(i.GetEResult()), i;
          },
          onSuccess: () => {
            i.invalidateQueries({ queryKey: f(t) }),
              i.invalidateQueries({ queryKey: w(e) }),
              i.invalidateQueries({ queryKey: z(e) });
          },
        });
      }
      function me(e, r) {
        return e.members().find((e) => e.steamid() == r);
      }
    },
  },
]);
