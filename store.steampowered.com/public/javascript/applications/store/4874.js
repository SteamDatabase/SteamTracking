/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [4874],
    {
      2289: (ee, ar, O) => {
        O.d(ar, {
          V1: () => X,
          U6: () => o,
          GF: () => q,
          y0: () => f,
          h: () => Z,
          pr: () => L,
          Gt: () => E,
          yj: () => U,
          qb: () => T,
          K5: () => J,
          xy: () => u,
          HP: () => D,
          _Y: () => H,
          sv: () => $,
          YD: () => V,
          Oe: () => Y,
          Fk: () => N,
          e$: () => A,
          cl: () => y,
          NP: () => Et,
          PQ: () => Tt,
          GC: () => I,
          IG: () => ht,
          fO: () => mt,
          Ex: () => or,
        });
        var Tt = {};
        O.r(Tt), O.d(Tt, { s: () => Pt, sf: () => qr, kr: () => pt });
        var I = {};
        O.r(I), O.d(I, { Mk: () => cr, SC: () => ut, uk: () => sr });
        var ht = {};
        O.r(ht),
          O.d(ht, {
            JV: () => xt,
            jG: () => dr,
            DP: () => Ut,
            hs: () => gr,
            Z5: () => Br,
            ge: () => vt,
          });
        var Et = {};
        O.r(Et),
          O.d(Et, {
            fd: () => x,
            yt: () => lr,
            Pm: () => Ur,
            v9: () => Er,
            E4: () => wr,
            xD: () => yt,
            RE: () => fr,
            qe: () => rr,
            H$: () => Sr,
            M4: () => Rt,
            SW: () => hr,
            yu: () => tr,
            Ig: () => _t,
            kv: () => zr,
            pu: () => Gt,
            zA: () => br,
            Ve: () => Mr,
            Pj: () => Tr,
            n0: () => Or,
            i6: () => Wr,
            Wl: () => xr,
            yZ: () => mr,
            re: () => vr,
            am: () => jr,
            X9: () => er,
          });
        var mt = {};
        O.r(mt),
          O.d(mt, {
            sA: () => Kr,
            DG: () => Vr,
            iz: () => Fr,
            Az: () => Rr,
            jp: () => Qr,
            zC: () => Ir,
            RN: () => Ft,
            C2: () => Ct,
            Wr: () => Pr,
            DI: () => Gr,
            Ec: () => Ar,
            Yt: () => Lr,
            CB: () => _r,
            ro: () => te,
            qG: () => ur,
            Qs: () => Jr,
            SU: () => pr,
            cZ: () => Nr,
            FN: () => Dr,
            xg: () => kr,
            xO: () => Hr,
            DQ: () => Cr,
            L6: () => ir,
            xr: () => Yr,
            A1: () => nr,
            Wv: () => Zr,
            w4: () => Xr,
            zg: () => $r,
            CY: () => ot,
          });
        var a = O(80613),
          i = O.n(a),
          r = O(75245),
          l = O(35038),
          j = O(24525);
        const pt = 0,
          Pt = 1,
          qr = 2,
          qt = 3,
          sr = 0,
          ut = 1,
          cr = 2,
          Br = 0,
          Ut = 1,
          vt = 2,
          xt = 3,
          dr = 4,
          gr = 5,
          yr = 0,
          wr = 1,
          fr = 2,
          yt = 3,
          x = 4,
          Rt = 5,
          Mr = 6,
          Gt = 7,
          _t = 8,
          tr = 9,
          br = 10,
          zr = 11,
          lr = 12,
          Sr = 13,
          jr = 14,
          Wr = 15,
          Or = 16,
          Tr = 17,
          Er = 18,
          mr = 19,
          xr = 20,
          vr = 21,
          Ur = 22,
          rr = 23,
          hr = 24,
          er = 25,
          Ft = 0,
          Kr = 1,
          Ct = 2,
          Ir = 3,
          kr = 4,
          Qr = 6,
          Vr = 7,
          Rr = 8,
          Fr = 9,
          Hr = 10,
          $r = 11,
          Cr = 12,
          ir = 13,
          Yr = 15,
          Xr = 16,
          ot = 17,
          nr = 18,
          Zr = 19,
          Dr = 20,
          Nr = 21,
          Jr = 22,
          pr = 23,
          Ar = 24,
          Lr = 25,
          Gr = 26,
          Pr = 27,
          _r = 28,
          te = 29,
          ur = 30;
        function n(S) {
          return "unknown EFamilyGroupRole ( " + S + " )";
        }
        function c(S) {
          return "unknown EFamilyGroupMembershipRemovalReason ( " + S + " )";
        }
        function g(S) {
          return "unknown EFamilyGroupsTwoFactorMethod ( " + S + " )";
        }
        function B(S) {
          return "unknown EPurchaseRequestAction ( " + S + " )";
        }
        function d(S) {
          return "unknown EFamilyGroupChangeLogType ( " + S + " )";
        }
        function w(S) {
          return "unknown ESharedLibraryExcludeReason ( " + S + " )";
        }
        class f extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              f.prototype.name || r.Sg(f.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = r.w0(f.M())), f.sm_mbf;
          }
          toObject(t = !1) {
            return f.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(f.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(f.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new f();
            return f.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(f.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return f.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(f.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Request";
          }
        }
        class W extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              W.prototype.family_groupid || r.Sg(W.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    cooldown_skip_granted: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = r.w0(W.M())), W.sm_mbf;
          }
          toObject(t = !1) {
            return W.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(W.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(W.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new W();
            return W.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(W.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(W.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Response";
          }
        }
        class T extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.family_groupid || r.Sg(T.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    send_running_apps: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = r.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(T.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new T();
            return T.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(T.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(T.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Request";
          }
        }
        class m extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              m.prototype.steamid || r.Sg(m.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    role: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    time_joined: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    cooldown_seconds_remaining: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(t = !1) {
            return m.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(m.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(m.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new m();
            return m.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(m.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(m.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMember";
          }
        }
        class v extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              v.prototype.steamid || r.Sg(v.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    role: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = r.w0(v.M())), v.sm_mbf;
          }
          toObject(t = !1) {
            return v.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(v.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(v.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new v();
            return v.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(v.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return v.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(v.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInvite";
          }
        }
        class k extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.steamid || r.Sg(k.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(k.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new k();
            return k.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(k.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(k.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupFormerMember";
          }
        }
        class h extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              h.prototype.name || r.Sg(h.M()),
              a.Message.initialize(this, t, 0, -1, [2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    members: { n: 2, c: m, r: !0, q: !0 },
                    pending_invites: { n: 3, c: v, r: !0, q: !0 },
                    free_spots: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    country: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    slot_cooldown_remaining_seconds: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    former_members: { n: 7, c: k, r: !0, q: !0 },
                    slot_cooldown_overrides: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = r.w0(h.M())), h.sm_mbf;
          }
          toObject(t = !1) {
            return h.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(h.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(h.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new h();
            return h.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(h.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return h.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(h.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Response";
          }
        }
        class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.family_groupid || r.Sg(Q.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    role: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    inviter_steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    awaiting_2fa: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    invite_id: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(t = !1) {
            return Q.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Q.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Q.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Q.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Q.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInviteForUser";
          }
        }
        class E extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              E.prototype.steamid || r.Sg(E.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    include_family_group_response: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = r.w0(E.M())), E.sm_mbf;
          }
          toObject(t = !1) {
            return E.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(E.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(E.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new E();
            return E.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(E.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return E.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(E.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Request";
          }
        }
        class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              K.prototype.family_groupid || r.Sg(K.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    rtime_joined: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rtime_left: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    role: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    participated: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = r.w0(K.M())), K.sm_mbf;
          }
          toObject(t = !1) {
            return K.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(K.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(K.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new K();
            return K.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(K.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return K.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(K.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMembership";
          }
        }
        class U extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.family_groupid || r.Sg(U.M()),
              a.Message.initialize(this, t, 0, -1, [5, 10], null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    is_not_member_of_any_group: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    latest_time_joined: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    latest_joined_family_groupid: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    pending_group_invites: { n: 5, c: Q, r: !0, q: !0 },
                    role: { n: 6, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    cooldown_seconds_remaining: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    family_group: { n: 8, c: h },
                    can_undelete_last_joined_family: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    membership_history: { n: 10, c: K, r: !0, q: !0 },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = r.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(U.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new U();
            return U.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(U.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(U.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Response";
          }
        }
        class V extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.family_groupid || r.Sg(V.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = r.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(V.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new V();
            return V.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(V.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(V.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
          }
        }
        class Kt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Kt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Kt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Kt();
            return Kt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
          }
        }
        class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.family_groupid || r.Sg(H.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    receiver_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    receiver_role: {
                      n: 3,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = r.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(H.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new H();
            return H.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(H.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(H.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Request";
          }
        }
        class R extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              R.prototype.invite_id || r.Sg(R.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    invite_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    two_factor_method: {
                      n: 2,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(t = !1) {
            return R.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(R.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(R.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new R();
            return R.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(R.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return R.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(R.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Response";
          }
        }
        class $ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.family_groupid || r.Sg($.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    nonce: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT($.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new $();
            return $.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj($.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0($.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Request";
          }
        }
        class F extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              F.prototype.two_factor_method || r.Sg(F.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    two_factor_method: {
                      n: 2,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    cooldown_skip_granted: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    invite_already_accepted: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    cooldown_seconds_remaining: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(t = !1) {
            return F.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(F.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(F.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new F();
            return F.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(F.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return F.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(F.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Response";
          }
        }
        class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.family_groupid || r.Sg(Y.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid_to_remove: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Y.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Y();
            return Y.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Y.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Y.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Request";
          }
        }
        class It extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return It.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new It();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new It();
            return It.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return It.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Response";
          }
        }
        class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.family_groupid || r.Sg(X.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid_to_cancel: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(X.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new X();
            return X.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(X.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(X.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Request";
          }
        }
        class kt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return kt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new kt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new kt();
            return kt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Response";
          }
        }
        class Z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.family_groupid || r.Sg(Z.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = r.w0(Z.M())), Z.sm_mbf;
          }
          toObject(t = !1) {
            return Z.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Z.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Z();
            return Z.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Request";
          }
        }
        class Qt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Qt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Qt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Qt();
            return Qt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Response";
          }
        }
        class D extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              D.prototype.family_groupid || r.Sg(D.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(t = !1) {
            return D.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(D.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(D.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new D();
            return D.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(D.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return D.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(D.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Request";
          }
        }
        class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.users || r.Sg(C.M()),
              a.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    users: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readFixed64String,
                      pbr: r.qM.readPackedFixed64String,
                      bw: r.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(C.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new C();
            return C.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(C.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(C.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Response";
          }
        }
        class N extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              N.prototype.family_groupid || r.Sg(N.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    gidshoppingcart: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    store_country_code: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    use_account_cart: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = r.w0(N.M())), N.sm_mbf;
          }
          toObject(t = !1) {
            return N.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(N.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(N.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new N();
            return N.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(N.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(N.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Request";
          }
        }
        class p extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              p.prototype.gidshoppingcart || r.Sg(p.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = r.w0(p.M())), p.sm_mbf;
          }
          toObject(t = !1) {
            return p.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(p.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(p.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new p();
            return p.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(p.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return p.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(p.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Response";
          }
        }
        class J extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.family_groupid || r.Sg(J.M()),
              a.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    request_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint64String,
                      pbr: r.qM.readPackedUint64String,
                      bw: r.gp.writeRepeatedUint64String,
                    },
                    rt_include_completed_since: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = r.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(J.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new J();
            return J.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(J.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(J.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Request";
          }
        }
        class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.requester_steamid || r.Sg(G.M()),
              a.Message.initialize(this, t, 0, -1, [9, 10, 11, 12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    requester_steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    gidshoppingcart: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    time_requested: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    time_responded: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    responder_steamid: {
                      n: 5,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    response_action: {
                      n: 6,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    is_completed: {
                      n: 7,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    request_id: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    requested_packageids: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    purchased_packageids: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    requested_bundleids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    purchased_bundleids: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(G.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new G();
            return G.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(G.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(G.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "PurchaseRequest";
          }
        }
        class _ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _.prototype.requests || r.Sg(_.M()),
              a.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { requests: { n: 1, c: G, r: !0, q: !0 } },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = r.w0(_.M())), _.sm_mbf;
          }
          toObject(t = !1) {
            return _.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(_.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(_.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new _();
            return _.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(_.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return _.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(_.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Response";
          }
        }
        class A extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              A.prototype.family_groupid || r.Sg(A.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    action: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    request_id: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = r.w0(A.M())), A.sm_mbf;
          }
          toObject(t = !1) {
            return A.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(A.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(A.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new A();
            return A.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(A.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return A.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(A.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Request";
          }
        }
        class Vt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Vt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Vt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Vt();
            return Vt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Response";
          }
        }
        class tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.family_groupid || r.Sg(tt.M()),
              a.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    running_apps: { n: 2, c: et, r: !0, q: !0 },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = r.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(tt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new tt();
            return tt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(tt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(tt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification";
          }
        }
        class rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              rt.prototype.member_steamid || r.Sg(rt.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    member_steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    owner_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = r.w0(rt.M())), rt.sm_mbf;
          }
          toObject(t = !1) {
            return rt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(rt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(rt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new rt();
            return rt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(rt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(rt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
          }
        }
        class et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.appid || r.Sg(et.M()),
              a.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    playing_members: { n: 3, c: rt, r: !0, q: !0 },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = r.w0(et.M())), et.sm_mbf;
          }
          toObject(t = !1) {
            return et.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(et.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(et.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new et();
            return et.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(et.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(et.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
          }
        }
        class Ht extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ht.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ht();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Ht();
            return Ht.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_InviteStatus_Notification";
          }
        }
        class it extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              it.prototype.family_groupid || r.Sg(it.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = r.w0(it.M())), it.sm_mbf;
          }
          toObject(t = !1) {
            return it.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(it.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(it.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new it();
            return it.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(it.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return it.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(it.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_GroupChanged_Notification";
          }
        }
        class L extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              L.prototype.family_groupid || r.Sg(L.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = r.w0(L.M())), L.sm_mbf;
          }
          toObject(t = !1) {
            return L.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(L.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(L.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new L();
            return L.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(L.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return L.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(L.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Request";
          }
        }
        class nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.changes || r.Sg(nt.M()),
              a.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: { changes: { n: 1, c: at, r: !0, q: !0 } },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = r.w0(nt.M())), nt.sm_mbf;
          }
          toObject(t = !1) {
            return nt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(nt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(nt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new nt();
            return nt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(nt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(nt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response";
          }
        }
        class at extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              at.prototype.timestamp || r.Sg(at.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    actor_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    type: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    body: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                    by_support: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = r.w0(at.M())), at.sm_mbf;
          }
          toObject(t = !1) {
            return at.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(at.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(at.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new at();
            return at.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(at.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(at.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response_Change";
          }
        }
        class P extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              P.prototype.steamid || r.Sg(P.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    first_played: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    latest_played: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    seconds_played: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = r.w0(P.M())), P.sm_mbf;
          }
          toObject(t = !1) {
            return P.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(P.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(P.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new P();
            return P.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(P.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return P.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(P.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_PlaytimeEntry";
          }
        }
        class st extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.family_groupid || r.Sg(st.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = r.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(st.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new st();
            return st.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(st.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(st.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Request";
          }
        }
        class ct extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ct.prototype.entries || r.Sg(ct.M()),
              a.Message.initialize(this, t, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    entries: { n: 1, c: P, r: !0, q: !0 },
                    entries_by_owner: { n: 2, c: P, r: !0, q: !0 },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = r.w0(ct.M())), ct.sm_mbf;
          }
          toObject(t = !1) {
            return ct.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ct.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ct.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new ct();
            return ct.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ct.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ct.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Response";
          }
        }
        class Bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Bt.prototype.family_groupid || r.Sg(Bt.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    cooldown_count: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = r.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(t = !1) {
            return Bt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Bt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Bt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Bt();
            return Bt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Bt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Bt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
          }
        }
        class $t extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return $t.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new $t();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new $t();
            return $t.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
          }
        }
        class u extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              u.prototype.family_groupid || r.Sg(u.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    include_own: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_excluded: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    max_apps: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    include_non_games: {
                      n: 7,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    steamid: {
                      n: 8,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = r.w0(u.M())), u.sm_mbf;
          }
          toObject(t = !1) {
            return u.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(u.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(u.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new u();
            return u.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(u.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return u.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(u.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Request";
          }
        }
        class dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dt.prototype.apps || r.Sg(dt.M()),
              a.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    apps: { n: 1, c: gt, r: !0, q: !0 },
                    owner_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = r.w0(dt.M())), dt.sm_mbf;
          }
          toObject(t = !1) {
            return dt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(dt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(dt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new dt();
            return dt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(dt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(dt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response";
          }
        }
        class gt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.appid || r.Sg(gt.M()),
              a.Message.initialize(this, t, 0, -1, [2, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    owner_steamids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readFixed64String,
                      pbr: r.qM.readPackedFixed64String,
                      bw: r.gp.writeRepeatedFixed64String,
                    },
                    name: { n: 6, br: r.qM.readString, bw: r.gp.writeString },
                    sort_as: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    capsule_filename: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    img_icon_hash: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    exclude_reason: {
                      n: 10,
                      d: Ft,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    rt_time_acquired: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rt_last_played: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rt_playtime: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    app_type: {
                      n: 14,
                      d: j.$e,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    content_descriptors: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = r.w0(gt.M())), gt.sm_mbf;
          }
          toObject(t = !1) {
            return gt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(gt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(gt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new gt();
            return gt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(gt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(gt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
          }
        }
        class o extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              o.prototype.family_groupid || r.Sg(o.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    invite_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    nonce: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(t = !1) {
            return o.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(o.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(o.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new o();
            return o.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(o.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return o.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(o.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
          }
        }
        class Yt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Yt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Yt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Yt();
            return Yt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
          }
        }
        class q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              q.prototype.family_groupid || r.Sg(q.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    invite_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    nonce: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(t = !1) {
            return q.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(q.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(q.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new q();
            return q.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(q.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(q.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
          }
        }
        class Xt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Xt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Xt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Xt();
            return Xt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
          }
        }
        class wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.family_groupid || r.Sg(wt.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = r.w0(wt.M())), wt.sm_mbf;
          }
          toObject(t = !1) {
            return wt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(wt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(wt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new wt();
            return wt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(wt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(wt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
          }
        }
        class Zt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Zt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Zt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Zt();
            return Zt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
          }
        }
        class ft extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ft.prototype.family_groupid || r.Sg(ft.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    lender_steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = r.w0(ft.M())), ft.sm_mbf;
          }
          toObject(t = !1) {
            return ft.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ft.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ft.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new ft();
            return ft.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ft.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ft.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Request";
          }
        }
        class Dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Dt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Dt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Dt();
            return Dt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Response";
          }
        }
        class Mt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Mt.prototype.family_groupid || r.Sg(Mt.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = r.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(t = !1) {
            return Mt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Mt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Mt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Mt();
            return Mt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Mt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Mt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Request";
          }
        }
        class bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.members || r.Sg(bt.M()),
              a.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: { members: { n: 1, c: zt, r: !0, q: !0 } },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = r.w0(bt.M())), bt.sm_mbf;
          }
          toObject(t = !1) {
            return bt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(bt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(bt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new bt();
            return bt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(bt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(bt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response";
          }
        }
        class zt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              zt.prototype.steamid || r.Sg(zt.M()),
              a.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    preferred_appids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = r.w0(zt.M())), zt.sm_mbf;
          }
          toObject(t = !1) {
            return zt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(zt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(zt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new zt();
            return zt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(zt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(zt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
          }
        }
        class y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              y.prototype.family_groupid || r.Sg(y.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = r.w0(y.M())), y.sm_mbf;
          }
          toObject(t = !1) {
            return y.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(y.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(y.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new y();
            return y.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(y.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(y.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Request";
          }
        }
        class Nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Nt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Nt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Nt();
            return Nt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Response";
          }
        }
        class lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              lt.prototype.family_groupid || r.Sg(lt.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = r.w0(lt.M())), lt.sm_mbf;
          }
          toObject(t = !1) {
            return lt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(lt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(lt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new lt();
            return lt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(lt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(lt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Request";
          }
        }
        class Jt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Jt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Jt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Jt();
            return Jt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Response";
          }
        }
        class St extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.family_groupid || r.Sg(St.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = r.w0(St.M())), St.sm_mbf;
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(St.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(St.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new St();
            return St.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(St.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(St.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Request";
          }
        }
        class jt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.wallet_country_matches || r.Sg(jt.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    wallet_country_matches: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    ip_match: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                    join_restriction: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = r.w0(jt.M())), jt.sm_mbf;
          }
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(jt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(jt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new jt();
            return jt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(jt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(jt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Response";
          }
        }
        class Wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Wt.prototype.steamid || r.Sg(Wt.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    invite_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = r.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(t = !1) {
            return Wt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Wt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Wt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Wt();
            return Wt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Wt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Wt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Request";
          }
        }
        class At extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new At();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new At();
            return At.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Response";
          }
        }
        class Ot extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ot.prototype.family_groupid || r.Sg(Ot.M()),
              a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    rtime32_target: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = r.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(t = !1) {
            return Ot.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Ot.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Ot.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Ot();
            return Ot.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ot.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ot.M(), t, e);
          }
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Request";
          }
        }
        class Lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), a.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Lt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Lt();
          }
          static deserializeBinary(t) {
            let e = new (i().BinaryReader)(t),
              s = new Lt();
            return Lt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (i().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (i().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Response";
          }
        }
        var or;
        ((S) => {
          function t(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.CreateFamilyGroup#1",
              (0, l.I8)(f, b, z),
              W,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.CreateFamilyGroup = t;
          function e(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, l.I8)(T, b, z),
              h,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          S.GetFamilyGroup = e;
          function s(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, l.I8)(E, b, z),
              U,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          S.GetFamilyGroupForUser = s;
          function ie(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, l.I8)(V, b, z),
              Kt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.ModifyFamilyGroupDetails = ie;
          function ne(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, l.I8)(H, b, z),
              R,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.InviteToFamilyGroup = ne;
          function ae(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, l.I8)(o, b, z),
              Yt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.ConfirmInviteToFamilyGroup = ae;
          function se(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, l.I8)(wt, b, z),
              Zt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.ResendInvitationToFamilyGroup = se;
          function ce(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, l.I8)($, b, z),
              F,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.JoinFamilyGroup = ce;
          function Be(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, l.I8)(q, b, z),
              Xt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.ConfirmJoinFamilyGroup = Be;
          function de(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, l.I8)(Y, b, z),
              It,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.RemoveFromFamilyGroup = de;
          function ge(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, l.I8)(X, b, z),
              kt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.CancelFamilyGroupInvite = ge;
          function we(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, l.I8)(D, b, z),
              C,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          S.GetUsersSharingDevice = we;
          function fe(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, l.I8)(Z, b, z),
              Qt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.DeleteFamilyGroup = fe;
          function Me(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, l.I8)(y, b, z),
              Nt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.UndeleteFamilyGroup = Me;
          function be(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, l.I8)(st, b, z),
              ct,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.GetPlaytimeSummary = be;
          function ze(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, l.I8)(N, b, z),
              p,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.RequestPurchase = ze;
          function le(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, l.I8)(J, b, z),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          S.GetPurchaseRequests = le;
          function Se(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, l.I8)(A, b, z),
              Vt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          S.RespondToRequestedPurchase = Se;
          function je(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, l.I8)(L, b, z),
              nt,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          S.GetChangeLog = je;
          function We(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, l.I8)(Bt, b, z),
              $t,
              { ePrivilege: 5 },
            );
          }
          S.SetFamilyCooldownOverrides = We;
          function Oe(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, l.I8)(u, b, z),
              dt,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          S.GetSharedLibraryApps = Oe;
          function Te(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, l.I8)(ft, b, z),
              Dt,
              { ePrivilege: 1 },
            );
          }
          S.SetPreferredLender = Te;
          function Ee(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, l.I8)(Mt, b, z),
              bt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          S.GetPreferredLenders = Ee;
          function me(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, l.I8)(lt, b, z),
              Jt,
              { ePrivilege: 5 },
            );
          }
          S.ForceAcceptInvite = me;
          function xe(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, l.I8)(St, b, z),
              jt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          S.GetInviteCheckResults = xe;
          function ve(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, l.I8)(Wt, b, z),
              At,
              { ePrivilege: 5 },
            );
          }
          S.ClearCooldownSkip = ve;
          function Ue(M, b, z) {
            return M.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, l.I8)(Ot, b, z),
              Lt,
              { ePrivilege: 5 },
            );
          }
          S.RollbackFamilyGroup = Ue;
        })(or || (or = {}));
        var re;
        ((S) => {
          (S.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: tt,
          }),
            (S.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: Ht,
            }),
            (S.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: it,
            });
        })(re || (re = {}));
      },
      4874: (ee, ar, O) => {
        O.d(ar, {
          BO: () => xr,
          Bc: () => jr,
          DD: () => lr,
          Ee: () => ur,
          HM: () => Sr,
          Hs: () => tr,
          IN: () => rr,
          Ke: () => Ur,
          N0: () => _t,
          QU: () => Tr,
          Qn: () => vr,
          RC: () => Ct,
          TI: () => br,
          Tv: () => Mr,
          Vo: () => $r,
          Ww: () => Vr,
          Xq: () => Xr,
          Y0: () => zr,
          YW: () => Dr,
          Yc: () => mr,
          _K: () => Or,
          eS: () => er,
          fO: () => Nr,
          gv: () => Ir,
          lF: () => Lr,
          ll: () => Er,
          p8: () => Qr,
          tN: () => Jr,
          v2: () => Wr,
          vo: () => Gt,
          vu: () => Pr,
          w1: () => Hr,
          yM: () => Yr,
        });
        var Tt = O(90626),
          I = O(35038),
          ht = O(80902),
          Et = O(75233),
          mt = O(51614),
          a = O(57168),
          i = O(42993),
          r = O(68312),
          l = O(72604),
          j = O(2289),
          pt = O(27386),
          Pt = O(18210),
          qr = O(36053),
          qt = O(98609),
          sr = O(97996),
          ut = O(96214),
          cr = O(48473),
          Br = O(20117);
        const Ut = (n, c) =>
            c === void 0
              ? ["get_family_group_for_user ", n]
              : ["get_family_group_for_user ", n, c],
          vt = (n) => ["get_family_group", n],
          xt = (n) => ["get_family_history", n],
          dr = (n) => ["get_users_sharing_device", n],
          gr = (n) => ["get_shopping_cart_contents", n],
          yr = (n) => ["recent_playtime_sessions", n],
          wr = (n) => ["get_playtime_summary", n],
          fr = (n, c) => ["get_invite_check_results", n, c];
        function yt(n, c, g) {
          return g
            ? ["get_purchase_requests", n, c, g]
            : c
              ? ["get_purchase_requests", n, c]
              : ["get_purchase_requests", n];
        }
        function x(n, c) {
          if (n != l.R) throw n;
        }
        const Rt = Tt.createContext({ staleTimeMs: 1 / 0 });
        function Mr(n) {
          const { staleTimeMs: c, children: g } = n,
            B = Tt.useMemo(() => ({ staleTimeMs: c ?? 3e3 }), [c]);
          return Tt.createElement(Rt.Provider, { value: B }, g);
        }
        function Gt(n = !1) {
          return _t((0, i.LH)(), n);
        }
        function _t(n, c = !1) {
          const g = (0, r.KV)(),
            B = (0, Tt.useContext)(Rt).staleTimeMs;
          return (0, ht.I)({
            queryKey: Ut(n, c),
            queryFn: async () => {
              const d = I.w.Init(j.Gt);
              d.Body().set_steamid(n),
                d.Body().set_include_family_group_response(c);
              const w = await j.Ex.GetFamilyGroupForUser(g, d);
              return x(w.GetEResult(), "GetFamilyGroupForUser"), w.Body();
            },
            staleTime: B,
            enabled: !!n,
            placeholderData: n ? void 0 : new j.yj(),
          });
        }
        function tr(n) {
          const c = (0, r.KV)(),
            g = (0, Tt.useContext)(Rt).staleTimeMs;
          return (0, ht.I)({
            queryKey: vt(n),
            queryFn: async () => {
              if (n) {
                const B = I.w.Init(j.qb);
                B.Body().set_family_groupid(n);
                const d = await j.Ex.GetFamilyGroup(c, B);
                return x(d.GetEResult(), "GetFamilyGroup"), d.Body();
              } else throw l.p;
            },
            staleTime: g,
          });
        }
        function br() {
          const n = (0, r.KV)(),
            c = (0, Et.jE)(),
            g = (0, i.LH)();
          return (0, mt.n)({
            mutationFn: async (B) => {
              const d = I.w.Init(j.y0);
              d.Body().set_name(B);
              const w = await j.Ex.CreateFamilyGroup(n, d);
              return x(w.GetEResult(), "CreateFamilyGroup"), w.Body();
            },
            onSuccess: () => {
              c.invalidateQueries({ queryKey: Ut(g) });
            },
          });
        }
        function zr(n) {
          const c = (0, r.KV)(),
            g = (0, Et.jE)(),
            B = (0, i.LH)();
          return (0, mt.n)({
            mutationFn: async () => {
              const d = I.w.Init(j.h);
              d.Body().set_family_groupid(n);
              const w = await j.Ex.DeleteFamilyGroup(c, d);
              return x(w.GetEResult(), "DeleteFamilyGroup"), w.Body();
            },
            onSuccess: () => {
              g.invalidateQueries({ queryKey: Ut(B) }),
                g.invalidateQueries({ queryKey: vt(n) }),
                g.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function lr(n) {
          const c = (0, r.KV)(),
            g = (0, Et.jE)();
          return (0, mt.n)({
            mutationFn: async (B) => {
              const d = I.w.Init(j.YD);
              d.Body().set_family_groupid(n), d.Body().set_name(B);
              const w = await j.Ex.ModifyFamilyGroupDetails(c, d);
              return x(w.GetEResult(), "ModifyFamilyGroupDetails"), w.Body();
            },
            onSuccess: () => {
              g.invalidateQueries({ queryKey: vt(n) }),
                g.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function Sr(n, c, g) {
          const B = (0, r.KV)(),
            d = (0, Et.jE)();
          return (0, mt.n)({
            mutationFn: async () => {
              const w = I.w.Init(j._Y);
              w.Body().set_family_groupid(n),
                w.Body().set_receiver_steamid(c),
                w.Body().set_receiver_role(g);
              const f = await j.Ex.InviteToFamilyGroup(B, w);
              return x(f.GetEResult(), "InviteToFamilyGroup"), f.Body();
            },
            onSuccess: () => {
              d.invalidateQueries({ queryKey: Ut(c) }),
                d.invalidateQueries({ queryKey: vt(n) }),
                d.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function jr(n) {
          const c = (0, r.KV)(),
            g = (0, i.LH)(),
            B = (0, Et.jE)();
          return (0, mt.n)({
            mutationFn: async () => {
              const d = I.w.Init(j.sv);
              d.Body().set_family_groupid(n);
              const w = await j.Ex.JoinFamilyGroup(c, d);
              return x(w.GetEResult(), "JoinFamilyGroup"), w.Body();
            },
            onSuccess: () => {
              B.invalidateQueries({ queryKey: Ut(g) }),
                B.invalidateQueries({ queryKey: vt(n) }),
                B.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function Wr(n, c) {
          const g = (0, r.KV)(),
            B = (0, Et.jE)();
          return (0, mt.n)({
            mutationFn: async () => {
              const d = I.w.Init(j.V1);
              d.Body().set_family_groupid(n), d.Body().set_steamid_to_cancel(c);
              const w = await j.Ex.CancelFamilyGroupInvite(g, d);
              return x(w.GetEResult(), "CancelFamilyGroupInvite"), w.Body();
            },
            onSuccess: () => {
              B.invalidateQueries({ queryKey: Ut(c) }),
                B.invalidateQueries({ queryKey: vt(n) }),
                B.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function Or(n, c) {
          const g = (0, r.KV)(),
            B = (0, Et.jE)();
          return (0, mt.n)({
            mutationFn: async () => {
              const d = I.w.Init(j.Oe);
              d.Body().set_family_groupid(n), d.Body().set_steamid_to_remove(c);
              const w = await j.Ex.RemoveFromFamilyGroup(g, d);
              return x(w.GetEResult(), "RemoveFromFamilyGroup"), w.Body();
            },
            onSuccess: () => {
              B.invalidateQueries({ queryKey: Ut(c) }),
                B.invalidateQueries({ queryKey: vt(n) }),
                B.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function Tr(n) {
          const c = (0, r.KV)();
          return (0, ht.I)({
            queryKey: dr(n),
            queryFn: async () => {
              const g = (0, sr.VY)("clientsessionid"),
                B = g && BigInt("0x" + g).toString(),
                d = I.w.Init(j.HP);
              d.Body().set_family_groupid(n),
                d.Body().set_client_instance_id(B ?? void 0);
              const w = await j.Ex.GetUsersSharingDevice(c, d);
              return x(w.GetEResult(), "GetUsersSharingDevice"), w.Body();
            },
          });
        }
        function Er(n) {
          const c = (0, i.LH)();
          return tr(n)
            .data?.members()
            .find((B) => B.steamid() == c)
            ?.role();
        }
        function mr(n, c) {
          const g = (0, r.KV)();
          return (0, mt.n)({
            mutationFn: async () => {
              const B = I.w.Init(j.Fk);
              B.Body().set_family_groupid(n),
                B.Body().set_use_account_cart(!0),
                B.Body().set_store_country_code(c);
              const d = await j.Ex.RequestPurchase(g, B);
              return x(d.GetEResult(), "RequestPurchase"), d.Body();
            },
          });
        }
        function xr(n, c) {
          const g = (0, r.KV)(),
            B = (0, i.LH)();
          return (0, ht.I)({
            queryKey: yt(n, B),
            queryFn: async () => {
              const d = I.w.Init(j.K5);
              d.Body().set_family_groupid(n),
                c !== void 0 && d.Body().set_rt_include_completed_since(c);
              const w = await j.Ex.GetPurchaseRequests(g, d);
              return x(w.GetEResult(), "GetPurchaseRequests"), w.Body();
            },
          });
        }
        function vr(n, c) {
          const g = (0, r.KV)(),
            B = (0, i.LH)();
          return (0, ht.I)({
            queryKey: yt(n, B, c),
            queryFn: async () => {
              const d = I.w.Init(j.K5);
              d.Body().set_family_groupid(n), d.Body().add_request_ids(c);
              const w = await j.Ex.GetPurchaseRequests(g, d);
              return x(w.GetEResult(), "GetPurchaseRequests"), w.Body();
            },
            select: (d) =>
              d.toObject().requests?.find(({ request_id: w }) => w === c),
          });
        }
        function Ur(n, c, g) {
          const B = (0, r.KV)(),
            d = (0, Et.jE)();
          return (0, mt.n)({
            mutationFn: async () => {
              const w = I.w.Init(j.e$);
              w.Body().set_family_groupid(n),
                w.Body().set_request_id(c),
                w.Body().set_action(g);
              const f = await j.Ex.RespondToRequestedPurchase(B, w);
              return x(f.GetEResult(), "RespondToRequestedPurchase"), f.Body();
            },
            onSuccess: () => {
              d.invalidateQueries({ queryKey: yt(n) }),
                d.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        const rr = (0, Tt.createContext)({
          errorMessage: null,
          setErrorMessage: (n) => {},
        });
        function hr(n, c) {
          return n;
        }
        var er = ((n) => (
          (n[(n.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (n[(n.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (n[(n.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (n[(n.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (n[(n.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (n[(n.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (n[(n.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (n[(n.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (n[(n.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (n[(n.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (n[(n.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (n[(n.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (n[(n.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (n[(n.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (n[(n.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (n[(n.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (n[(n.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          n
        ))(er || {});
        const Ft = {
          [l.nO]: "#FamilyManagement_ErrorInternalServerError",
          [l.zi]: "#FamilyManagement_ErrorInternalServerError",
          [l.S7]: "#FamilyManagement_ErrorInternalServerError",
          [l.Te]: "#FamilyManagement_ErrorInternalServerError",
          [l.sW]: "#FamilyManagement_AccessDenied",
          [l.p]: "#FamilyManagement_ErrorNoMatch",
          [l.uN]: "#FamilyManagement_ErrorAccountDisabled",
          [l.$U]: "#FamilyManagement_ErrorNoActiveInvite",
          [l.ZI]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [l.UT]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [l.TE]: "#FamilyManagement_ErrorLimitExceeded",
          [l.B1]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [l.Nb]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [l.h_]: { 5: "#FamilyManagement_RateLimitExceeded_CreateFamily" },
          [l.lG]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [l.zL]: { 2: "#FamilyManagement_Household_JoinFamily" },
          [l.iC]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [l.Ze]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [l.fb]: { 4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails" },
        };
        function Kr(n, c, g, B) {
          let d = "";
          if (n in Ft) {
            const w = Ft[n];
            if (typeof w == "string") d = (0, Pt.we)(w, ...B);
            else {
              const f = w;
              g in f && (d = (0, Pt.we)(f[g], ...B));
            }
          }
          return hr((0, Pt.we)(c, d), n);
        }
        function Ct() {
          const { setErrorMessage: n } = (0, Tt.useContext)(rr);
          return { setErrorMessage: n };
        }
        function Ir(n, c, g) {
          const { setErrorMessage: B } = Ct(),
            { isError: d, error: w } = n,
            f = Gt();
          (0, Tt.useEffect)(() => {
            if (d) {
              const W = w,
                T = [];
              if (W === l.TE || W === l.B1) {
                let m;
                f.isSuccess &&
                  f.data &&
                  (m = f.data.cooldown_seconds_remaining()),
                  T.push(kr(m));
              }
              B(Kr(W, c, g, T));
            }
          }, [B, d, w, c, g, f.isSuccess, f.data]);
        }
        function kr(n) {
          if (!n) return (0, Pt.we)("#FamilyManagement_LoadingPlaceholder");
          const c = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return (0, Pt.TW)(Date.now() / 1e3 + n, c);
        }
        function Qr(n, c) {
          const { setErrorMessage: g } = Ct();
          (0, Tt.useEffect)(() => {
            n.isError && g((0, Pt.we)(c));
          }, [g, n.isError, c]);
        }
        function Vr(n) {
          const c = (0, r.KV)();
          return (0, ht.I)({
            queryKey: xt(n),
            queryFn: async () => {
              const g = I.w.Init(j.pr);
              g.Body().set_family_groupid(n);
              const B = await j.Ex.GetChangeLog(c, g);
              return (
                x(B.GetEResult(), "GetFamilyGroupChangeLog"), B.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function Rr(n) {
          const c = useActiveServiceTransport();
          return useQuery({
            queryKey: gr(n),
            queryFn: async () => {
              const g = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              g.Body().set_gidshoppingcart(n);
              const B = await ShoppingCartService.GetShoppingCartContents(c, g);
              return x(B.GetEResult(), "GetShoppingCartContents"), B.Body();
            },
          });
        }
        function Fr(n) {
          const c = useActiveServiceTransport(),
            g = useQueryClient();
          return useMutation({
            mutationFn: async (B) => {
              const d = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              d.Body().set_family_groupid(n), d.Body().set_cooldown_count(B);
              const w =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(c, d);
              return x(w.GetEResult(), "SetFamilyCooldownOverrides"), w.Body();
            },
            onSuccess: () => {
              g.invalidateQueries({ queryKey: vt(n) }),
                g.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function Hr(n, c) {
          return `${qt.TS.STORE_BASE_URL}cart/purchaserequest/${n}/${c}`;
        }
        function $r(n) {
          return `${qt.TS.STORE_BASE_URL}cart/purchaserequested/${n}`;
        }
        function Cr(n, c) {
          const g = useActiveServiceTransport(),
            B = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const d = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              d.Body().set_steamid(n), d.Body().set_name(c);
              const w = await FGS.FamilyGroupsService.CreateFamilyGroup(g, d);
              return (
                x(w.GetEResult(), "ForceCreateFamilyGroup"),
                w.Body().family_groupid()
              );
            },
            onSuccess: () => {
              B.invalidateQueries({ queryKey: Ut(n) });
            },
          });
        }
        function ir(n, c, g, B) {
          return [
            "get_shared_library_apps",
            n,
            c?.bIncludeOwn,
            c?.bIncludeExcluded,
            c?.bIncludeNonGames,
            c?.for_account_id,
            g,
            B,
          ];
        }
        function Yr(n, c) {
          const g = (0, i.LH)(),
            { settings: B, mapAppsAllowed: d } = (0, ut.S0)(g).data,
            w = (0, ut.BM)(),
            f = (0, r.KV)(),
            {
              bIncludeOwn: W,
              bIncludeExcluded: T,
              bIncludeNonGames: m,
              for_account_id: v,
            } = c ?? {},
            k = c?.enabled !== void 0 ? c.enabled : !0,
            h = ir(n, c, B, w),
            Q = (E) => !(0, ut.or)(E.appid(), w, B, d);
          return (0, ht.I)({
            queryKey: h,
            queryFn: async () => {
              const E = I.w.Init(j.xy);
              if (
                (E.Body().set_family_groupid(n),
                E.Body().set_include_own(W),
                E.Body().set_include_excluded(T),
                E.Body().set_language(qt.TS.LANGUAGE),
                E.Body().set_include_non_games(m),
                v)
              ) {
                const U = Br.b2.InitFromAccountID(v, qt.TS.EUNIVERSE);
                E.Body().set_steamid(U.ConvertTo64BitString());
              }
              const K = await j.Ex.GetSharedLibraryApps(f, E);
              return (
                x(K.GetEResult(), "GetSharedLibraryApps"),
                K.Body()
                  .apps()
                  .filter(Q)
                  .map((U) => U.toObject())
              );
            },
            enabled: !!B && k,
            placeholderData: a.rX,
            select: c?.select,
          });
        }
        function Xr(n, c) {
          const g = (0, Et.jE)(),
            B = (0, i.LH)(),
            { settings: d } = (0, ut.S0)(B).data ?? {},
            w = (0, ut.BM)(),
            f = ir(n, c, d, w);
          return (0, Tt.useCallback)(() => {
            g.invalidateQueries({ queryKey: f });
          }, [g, f]);
        }
        function ot(n, c) {
          let g = n.sort_as || n.name,
            B = c.sort_as || c.name;
          return (0, cr.lY)(g, B);
        }
        function nr(n, c) {
          return c.rt_time_acquired - n.rt_time_acquired || ot(n, c);
        }
        function Zr(n, c, g) {
          if (!n && c.length === 0) return !0;
          const B = g.name?.toLocaleLowerCase(),
            d = n.toLocaleLowerCase(),
            w = B?.includes(d) || g.appid?.toString() == d;
          let f = !0;
          if (g.content_descriptors) {
            for (const W of c)
              if (!g.content_descriptors.includes(W)) {
                f = !1;
                break;
              }
          }
          return w && f;
        }
        function Dr(n, c, g, B = []) {
          const d = (0, Tt.useMemo)(
              () => n?.filter((f) => Zr(g, B, f)) || [],
              [n, g, B],
            ),
            w = (0, Tt.useCallback)(
              (f, W) => {
                let T = ot;
                switch (c) {
                  case "alpha-asc":
                    T = ot;
                    break;
                  case "alpha-desc":
                    T = (m, v) => ot(v, m);
                    break;
                  case "date_acquired-asc":
                    T = (m, v) => nr(v, m);
                    break;
                  case "date_acquired-desc":
                    T = nr;
                    break;
                }
                return T(f, W);
              },
              [c],
            );
          return (0, Tt.useMemo)(() => d.slice().sort(w), [d, w]);
        }
        function Nr(n, c) {
          const g = (0, r.KV)(),
            B = (0, Et.jE)(),
            d = (0, i.LH)();
          return (0, mt.n)({
            mutationFn: async (w) => {
              const f = I.w.Init(j.GF);
              f.Body().set_family_groupid(n),
                f.Body().set_invite_id(c),
                f.Body().set_nonce(w);
              const W = await j.Ex.ConfirmJoinFamilyGroup(g, f);
              return x(W.GetEResult(), "ConfirmJoinFamilyGroup"), W.Body();
            },
            onSuccess: () => {
              B.invalidateQueries({ queryKey: Ut(d) }),
                B.invalidateQueries({ queryKey: vt(n) }),
                B.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function Jr(n, c, g) {
          const B = (0, r.KV)(),
            d = (0, Et.jE)();
          return (0, mt.n)({
            mutationFn: async () => {
              const w = I.w.Init(j.U6);
              w.Body().set_family_groupid(n),
                w.Body().set_invite_id(c),
                w.Body().set_nonce(g);
              const f = await j.Ex.ConfirmInviteToFamilyGroup(B, w);
              return x(f.GetEResult(), "ConfirmInviteToFamilyGroup"), f.Body();
            },
            onSuccess: () => {
              d.invalidateQueries({ queryKey: vt(n) }),
                d.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function pr(n, c) {
          const g = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const B = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              B.Body().set_family_groupid(n), B.Body().set_steamid(c);
              const d =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  g,
                  B,
                );
              return x(d.GetEResult(), "ResendInvitationToFamilyGroup"), d;
            },
          });
        }
        function Ar(n) {
          let c = [];
          n.sort((B, d) => B.time_start - d.time_start);
          let g = new Map();
          for (const B of n) {
            let d = g.get(B.appid);
            d === void 0
              ? g.set(B.appid, B)
              : B.time_start <= d.time_end
                ? (d.time_end = Math.max(d.time_end, B.time_end))
                : (c.push(d), g.set(B.appid, B));
          }
          for (const B of g.values()) c.push(B);
          return c.sort((B, d) => B.time_start - d.time_start), c;
        }
        function Lr(n) {
          const c = (0, r.KV)();
          return (0, ht.I)({
            queryKey: yr(n),
            queryFn: async () => {
              const g = I.w.Init(pt.m8g);
              g.Body().set_steamid(n);
              const B = await pt.xtC.GetRecentPlaytimeSessionsForChild(c, g);
              x(B.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let d = B.Body().toObject().sessions || [];
              return Ar(d);
            },
          });
        }
        function Gr(n) {
          const c = useActiveServiceTransport();
          return useQuery({
            queryKey: wr(n),
            queryFn: async () => {
              const g = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              g.Body().set_family_groupid(n);
              const B = await FGS.FamilyGroupsService.GetPlaytimeSummary(c, g);
              x(B.GetEResult(), "GetPlaytimeSummary");
              let d = B.Body().toObject().entries ?? [];
              d.sort((f, W) => W.seconds_played - f.seconds_played);
              let w = B.Body().toObject().entries_by_owner ?? [];
              return (
                w.sort((f, W) => W.seconds_played - f.seconds_played),
                { borrowed: d, loaned: w }
              );
            },
            enabled: n !== "0",
          });
        }
        function Pr(n) {
          const c = (0, r.KV)(),
            g = (0, i.LH)(),
            B = (0, Et.jE)();
          return (0, mt.n)({
            mutationFn: async () => {
              const d = I.w.Init(j.cl);
              d.Body().set_family_groupid(n);
              const w = await j.Ex.UndeleteFamilyGroup(c, d);
              return x(w.GetEResult(), "UndeleteFamilyGroup"), w;
            },
            onSuccess: () => {
              B.invalidateQueries({ queryKey: Ut(g) }),
                B.invalidateQueries({ queryKey: vt(n) }),
                B.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function _r(n, c) {
          const g = useActiveServiceTransport(),
            B = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const d = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              d.Body().set_family_groupid(n), d.Body().set_steamid(c);
              const w = await FGS.FamilyGroupsService.ForceAcceptInvite(g, d);
              return x(w.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              B.invalidateQueries({ queryKey: Ut(c) }),
                B.invalidateQueries({ queryKey: vt(n) }),
                B.invalidateQueries({ queryKey: xt(n) });
            },
          });
        }
        function te(n, c) {
          const g = useActiveServiceTransport();
          return useQuery({
            queryKey: fr(n, c),
            queryFn: async () => {
              const B = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              B.Body().set_family_groupid(n), B.Body().set_steamid(c);
              const d = await FGS.FamilyGroupsService.GetInviteCheckResults(
                g,
                B,
              );
              return (
                x(d.GetEResult(), "GetInviteCheckResults"), d.Body().toObject()
              );
            },
          });
        }
        function ur(n, c) {
          return n.members().find((g) => g.steamid() == c);
        }
      },
    },
  ]);
})();
