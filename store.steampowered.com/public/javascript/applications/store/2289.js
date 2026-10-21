/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [2289],
    {
      2289: (Si, Kt, wt) => {
        wt.d(Kt, {
          V1: () => T,
          U6: () => H,
          GF: () => Y,
          y0: () => w,
          h: () => x,
          pr: () => I,
          Gt: () => z,
          yj: () => f,
          qb: () => b,
          K5: () => l,
          xy: () => $,
          HP: () => U,
          _Y: () => W,
          sv: () => S,
          YD: () => j,
          Oe: () => O,
          Fk: () => E,
          e$: () => h,
          cl: () => Q,
          NP: () => Yt,
          PQ: () => kt,
          GC: () => $t,
          IG: () => Ht,
          fO: () => Qt,
          Ex: () => Vt,
        });
        var kt = {};
        wt.r(kt), wt.d(kt, { s: () => Nt, sf: () => Dt, kr: () => Jt });
        var $t = {};
        wt.r($t), wt.d($t, { Mk: () => Lt, SC: () => mt, uk: () => At });
        var Ht = {};
        wt.r(Ht),
          wt.d(Ht, {
            JV: () => yt,
            jG: () => Rt,
            DP: () => qt,
            hs: () => ot,
            Z5: () => Pt,
            ge: () => ut,
          });
        var Yt = {};
        wt.r(Yt),
          wt.d(Yt, {
            fd: () => Gt,
            yt: () => cr,
            Pm: () => jr,
            v9: () => br,
            E4: () => Ft,
            xD: () => pt,
            RE: () => Ct,
            qe: () => Wr,
            H$: () => Br,
            M4: () => _t,
            SW: () => Sr,
            yu: () => er,
            Ig: () => ir,
            kv: () => ar,
            pu: () => rr,
            zA: () => nr,
            Ve: () => tr,
            Pj: () => wr,
            n0: () => sr,
            i6: () => dr,
            Wl: () => zr,
            yZ: () => Mr,
            re: () => fr,
            am: () => gr,
            X9: () => Or,
          });
        var Qt = {};
        wt.r(Qt),
          wt.d(Qt, {
            sA: () => Tr,
            DG: () => hr,
            iz: () => kr,
            Az: () => Ir,
            jp: () => lr,
            zC: () => Ur,
            RN: () => Xt,
            C2: () => xr,
            Wr: () => qr,
            DI: () => Pr,
            Ec: () => mr,
            Yt: () => Lr,
            CB: () => ur,
            ro: () => yr,
            qG: () => Rr,
            Qs: () => Dr,
            SU: () => Ar,
            cZ: () => Nr,
            FN: () => Jr,
            xg: () => Er,
            xO: () => $r,
            DQ: () => Yr,
            L6: () => Qr,
            xr: () => Vr,
            A1: () => Kr,
            Wv: () => vr,
            w4: () => Xr,
            zg: () => Hr,
            CY: () => Zr,
          });
        var n = wt(80613),
          e = wt.n(n),
          r = wt(75245),
          s = wt(35038),
          vt = wt(24525);
        const Jt = 0,
          Nt = 1,
          Dt = 2,
          Oi = 3,
          At = 0,
          mt = 1,
          Lt = 2,
          Pt = 0,
          qt = 1,
          ut = 2,
          yt = 3,
          Rt = 4,
          ot = 5,
          Ti = 0,
          Ft = 1,
          Ct = 2,
          pt = 3,
          Gt = 4,
          _t = 5,
          tr = 6,
          rr = 7,
          ir = 8,
          er = 9,
          nr = 10,
          ar = 11,
          cr = 12,
          Br = 13,
          gr = 14,
          dr = 15,
          sr = 16,
          wr = 17,
          br = 18,
          Mr = 19,
          zr = 20,
          fr = 21,
          jr = 22,
          Wr = 23,
          Sr = 24,
          Or = 25,
          Xt = 0,
          Tr = 1,
          xr = 2,
          Ur = 3,
          Er = 4,
          lr = 6,
          hr = 7,
          Ir = 8,
          kr = 9,
          $r = 10,
          Hr = 11,
          Yr = 12,
          Qr = 13,
          Vr = 15,
          Xr = 16,
          Zr = 17,
          Kr = 18,
          vr = 19,
          Jr = 20,
          Nr = 21,
          Dr = 22,
          Ar = 23,
          mr = 24,
          Lr = 25,
          Pr = 26,
          qr = 27,
          ur = 28,
          yr = 29,
          Rr = 30;
        function xi(d) {
          return "unknown EFamilyGroupRole ( " + d + " )";
        }
        function Ui(d) {
          return "unknown EFamilyGroupMembershipRemovalReason ( " + d + " )";
        }
        function Ei(d) {
          return "unknown EFamilyGroupsTwoFactorMethod ( " + d + " )";
        }
        function li(d) {
          return "unknown EPurchaseRequestAction ( " + d + " )";
        }
        function hi(d) {
          return "unknown EFamilyGroupChangeLogType ( " + d + " )";
        }
        function Ii(d) {
          return "unknown ESharedLibraryExcludeReason ( " + d + " )";
        }
        class w extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.name || r.Sg(w.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(t = !1) {
            return w.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(w.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(w.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new w();
            return w.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(w.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(w.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Request";
          }
        }
        class V extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.family_groupid || r.Sg(V.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                    cooldown_skip_granted: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
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
          static toObject(t, i) {
            return r.BT(V.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new V();
            return V.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(V.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(V.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Response";
          }
        }
        class b extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              b.prototype.family_groupid || r.Sg(b.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = r.w0(b.M())), b.sm_mbf;
          }
          toObject(t = !1) {
            return b.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(b.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(b.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new b();
            return b.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(b.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return b.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(b.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Request";
          }
        }
        class X extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.steamid || r.Sg(X.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
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
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(X.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new X();
            return X.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(X.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(X.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMember";
          }
        }
        class Z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.steamid || r.Sg(Z.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    role: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
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
          static toObject(t, i) {
            return r.BT(Z.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Z();
            return Z.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Z.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Z.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInvite";
          }
        }
        class K extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              K.prototype.steamid || r.Sg(K.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, i) {
            return r.BT(K.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(K.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new K();
            return K.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(K.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return K.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(K.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupFormerMember";
          }
        }
        class M extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.name || r.Sg(M.M()),
              n.Message.initialize(this, t, 0, -1, [2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    members: { n: 2, c: X, r: !0, q: !0 },
                    pending_invites: { n: 3, c: Z, r: !0, q: !0 },
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
                    former_members: { n: 7, c: K, r: !0, q: !0 },
                    slot_cooldown_overrides: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = r.w0(M.M())), M.sm_mbf;
          }
          toObject(t = !1) {
            return M.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(M.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(M.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new M();
            return M.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(M.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return M.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(M.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Response";
          }
        }
        class v extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              v.prototype.family_groupid || r.Sg(v.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = r.w0(v.M())), v.sm_mbf;
          }
          toObject(t = !1) {
            return v.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(v.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(v.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new v();
            return v.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(v.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return v.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(v.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInviteForUser";
          }
        }
        class z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.steamid || r.Sg(z.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = r.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(z.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new z();
            return z.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(z.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(z.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Request";
          }
        }
        class J extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.family_groupid || r.Sg(J.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = r.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(J.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new J();
            return J.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(J.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(J.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMembership";
          }
        }
        class f extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              f.prototype.family_groupid || r.Sg(f.M()),
              n.Message.initialize(this, t, 0, -1, [5, 10], null);
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
                    pending_group_invites: { n: 5, c: v, r: !0, q: !0 },
                    role: { n: 6, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    cooldown_seconds_remaining: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    family_group: { n: 8, c: M },
                    can_undelete_last_joined_family: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    membership_history: { n: 10, c: J, r: !0, q: !0 },
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
          static toObject(t, i) {
            return r.BT(f.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(f.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new f();
            return f.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(f.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return f.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(f.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Response";
          }
        }
        class j extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              j.prototype.family_groupid || r.Sg(j.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = r.w0(j.M())), j.sm_mbf;
          }
          toObject(t = !1) {
            return j.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(j.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(j.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new j();
            return j.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(j.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return j.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(j.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
          }
        }
        class bt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return bt.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new bt();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new bt();
            return bt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
          }
        }
        class W extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              W.prototype.family_groupid || r.Sg(W.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = r.w0(W.M())), W.sm_mbf;
          }
          toObject(t = !1) {
            return W.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(W.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(W.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new W();
            return W.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(W.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(W.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Request";
          }
        }
        class N extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              N.prototype.invite_id || r.Sg(N.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
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
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = r.w0(N.M())), N.sm_mbf;
          }
          toObject(t = !1) {
            return N.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(N.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(N.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new N();
            return N.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(N.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(N.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Response";
          }
        }
        class S extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              S.prototype.family_groupid || r.Sg(S.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(t = !1) {
            return S.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(S.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(S.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new S();
            return S.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(S.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return S.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(S.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Request";
          }
        }
        class D extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              D.prototype.two_factor_method || r.Sg(D.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
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
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(t = !1) {
            return D.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(D.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(D.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new D();
            return D.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(D.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return D.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(D.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Response";
          }
        }
        class O extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.family_groupid || r.Sg(O.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = r.w0(O.M())), O.sm_mbf;
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(O.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(O.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new O();
            return O.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(O.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(O.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Request";
          }
        }
        class Mt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Mt.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new Mt();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Mt();
            return Mt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Response";
          }
        }
        class T extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.family_groupid || r.Sg(T.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                    steamid_to_cancel: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, i) {
            return r.BT(T.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new T();
            return T.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(T.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(T.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Request";
          }
        }
        class zt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return zt.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new zt();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new zt();
            return zt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Response";
          }
        }
        class x extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              x.prototype.family_groupid || r.Sg(x.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = r.w0(x.M())), x.sm_mbf;
          }
          toObject(t = !1) {
            return x.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(x.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(x.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new x();
            return x.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(x.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(x.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Request";
          }
        }
        class ft extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ft.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new ft();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new ft();
            return ft.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Response";
          }
        }
        class U extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.family_groupid || r.Sg(U.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                    client_instance_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
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
          static toObject(t, i) {
            return r.BT(U.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new U();
            return U.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(U.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(U.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Request";
          }
        }
        class A extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              A.prototype.users || r.Sg(A.M()),
              n.Message.initialize(this, t, 0, -1, [1], null);
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
                      br: r.qM.readFixed64String,
                      pbr: r.qM.readPackedFixed64String,
                      bw: r.gp.writeRepeatedFixed64String,
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
          static toObject(t, i) {
            return r.BT(A.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(A.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new A();
            return A.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(A.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return A.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(A.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Response";
          }
        }
        class E extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              E.prototype.family_groupid || r.Sg(E.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = r.w0(E.M())), E.sm_mbf;
          }
          toObject(t = !1) {
            return E.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(E.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(E.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new E();
            return E.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(E.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return E.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(E.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Request";
          }
        }
        class m extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              m.prototype.gidshoppingcart || r.Sg(m.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
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
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(t = !1) {
            return m.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(m.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(m.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new m();
            return m.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(m.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(m.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Response";
          }
        }
        class l extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              l.prototype.family_groupid || r.Sg(l.M()),
              n.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
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
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = r.w0(l.M())), l.sm_mbf;
          }
          toObject(t = !1) {
            return l.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(l.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(l.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new l();
            return l.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(l.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return l.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(l.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Request";
          }
        }
        class L extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              L.prototype.requester_steamid || r.Sg(L.M()),
              n.Message.initialize(this, t, 0, -1, [9, 10, 11, 12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
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
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = r.w0(L.M())), L.sm_mbf;
          }
          toObject(t = !1) {
            return L.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(L.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(L.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new L();
            return L.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(L.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return L.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(L.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "PurchaseRequest";
          }
        }
        class P extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              P.prototype.requests || r.Sg(P.M()),
              n.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: { requests: { n: 1, c: L, r: !0, q: !0 } },
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
          static toObject(t, i) {
            return r.BT(P.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(P.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new P();
            return P.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(P.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return P.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(P.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Response";
          }
        }
        class h extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              h.prototype.family_groupid || r.Sg(h.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = r.w0(h.M())), h.sm_mbf;
          }
          toObject(t = !1) {
            return h.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(h.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(h.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new h();
            return h.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(h.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return h.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(h.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Request";
          }
        }
        class jt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new jt();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new jt();
            return jt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Response";
          }
        }
        class q extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              q.prototype.family_groupid || r.Sg(q.M()),
              n.Message.initialize(this, t, 0, -1, [2], null);
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
                    running_apps: { n: 2, c: y, r: !0, q: !0 },
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
          static toObject(t, i) {
            return r.BT(q.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(q.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new q();
            return q.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(q.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(q.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification";
          }
        }
        class u extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              u.prototype.member_steamid || r.Sg(u.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
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
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = r.w0(u.M())), u.sm_mbf;
          }
          toObject(t = !1) {
            return u.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(u.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(u.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new u();
            return u.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(u.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return u.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(u.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
          }
        }
        class y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              y.prototype.appid || r.Sg(y.M()),
              n.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    playing_members: { n: 3, c: u, r: !0, q: !0 },
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
          static toObject(t, i) {
            return r.BT(y.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(y.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new y();
            return y.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(y.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(y.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
          }
        }
        class Wt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Wt.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new Wt();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Wt();
            return Wt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_InviteStatus_Notification";
          }
        }
        class R extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              R.prototype.family_groupid || r.Sg(R.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
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
          static toObject(t, i) {
            return r.BT(R.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(R.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new R();
            return R.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(R.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return R.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(R.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_GroupChanged_Notification";
          }
        }
        class I extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.family_groupid || r.Sg(I.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = r.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(I.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new I();
            return I.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(I.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(I.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Request";
          }
        }
        class o extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              o.prototype.changes || r.Sg(o.M()),
              n.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: { changes: { n: 1, c: F, r: !0, q: !0 } },
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
          static toObject(t, i) {
            return r.BT(o.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(o.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new o();
            return o.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(o.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return o.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(o.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response";
          }
        }
        class F extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              F.prototype.timestamp || r.Sg(F.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
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
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(t = !1) {
            return F.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(F.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(F.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new F();
            return F.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(F.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return F.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(F.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response_Change";
          }
        }
        class k extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.steamid || r.Sg(k.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(k.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new k();
            return k.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(k.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(k.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_PlaytimeEntry";
          }
        }
        class C extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.family_groupid || r.Sg(C.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, i) {
            return r.BT(C.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new C();
            return C.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(C.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(C.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Request";
          }
        }
        class p extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              p.prototype.entries || r.Sg(p.M()),
              n.Message.initialize(this, t, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    entries: { n: 1, c: k, r: !0, q: !0 },
                    entries_by_owner: { n: 2, c: k, r: !0, q: !0 },
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
          static toObject(t, i) {
            return r.BT(p.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(p.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new p();
            return p.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(p.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return p.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(p.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Response";
          }
        }
        class G extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.family_groupid || r.Sg(G.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(G.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new G();
            return G.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(G.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(G.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
          }
        }
        class St extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new St();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new St();
            return St.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
          }
        }
        class $ extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.family_groupid || r.Sg($.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT($.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new $();
            return $.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj($.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0($.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Request";
          }
        }
        class _ extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _.prototype.apps || r.Sg(_.M()),
              n.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    apps: { n: 1, c: tt, r: !0, q: !0 },
                    owner_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
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
          static toObject(t, i) {
            return r.BT(_.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(_.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new _();
            return _.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(_.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return _.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(_.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response";
          }
        }
        class tt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.appid || r.Sg(tt.M()),
              n.Message.initialize(this, t, 0, -1, [2, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
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
                      d: Xt,
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
                      d: vt.$e,
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
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = r.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(tt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new tt();
            return tt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(tt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(tt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
          }
        }
        class H extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.family_groupid || r.Sg(H.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = r.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(H.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new H();
            return H.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(H.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(H.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
          }
        }
        class Ot extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ot.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new Ot();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Ot();
            return Ot.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
          }
        }
        class Y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.family_groupid || r.Sg(Y.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(Y.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Y();
            return Y.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Y.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Y.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
          }
        }
        class Tt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Tt.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new Tt();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Tt();
            return Tt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
          }
        }
        class rt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              rt.prototype.family_groupid || r.Sg(rt.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
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
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = r.w0(rt.M())), rt.sm_mbf;
          }
          toObject(t = !1) {
            return rt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(rt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(rt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new rt();
            return rt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(rt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(rt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
          }
        }
        class xt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return xt.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new xt();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new xt();
            return xt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
          }
        }
        class it extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              it.prototype.family_groupid || r.Sg(it.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    lender_steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, i) {
            return r.BT(it.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(it.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new it();
            return it.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(it.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return it.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(it.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Request";
          }
        }
        class Ut extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ut.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new Ut();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Ut();
            return Ut.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Response";
          }
        }
        class et extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.family_groupid || r.Sg(et.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
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
          static toObject(t, i) {
            return r.BT(et.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(et.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new et();
            return et.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(et.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(et.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Request";
          }
        }
        class nt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.members || r.Sg(nt.M()),
              n.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: { members: { n: 1, c: at, r: !0, q: !0 } },
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
          static toObject(t, i) {
            return r.BT(nt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(nt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new nt();
            return nt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(nt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(nt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response";
          }
        }
        class at extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              at.prototype.steamid || r.Sg(at.M()),
              n.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
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
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = r.w0(at.M())), at.sm_mbf;
          }
          toObject(t = !1) {
            return at.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(at.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(at.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new at();
            return at.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(at.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(at.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
          }
        }
        class Q extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.family_groupid || r.Sg(Q.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
          static toObject(t, i) {
            return r.BT(Q.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Q.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Q();
            return Q.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Q.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Q.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Request";
          }
        }
        class Et extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new Et();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Et();
            return Et.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Response";
          }
        }
        class ct extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ct.prototype.family_groupid || r.Sg(ct.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
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
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = r.w0(ct.M())), ct.sm_mbf;
          }
          toObject(t = !1) {
            return ct.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(ct.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(ct.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new ct();
            return ct.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(ct.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(ct.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Request";
          }
        }
        class lt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return lt.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new lt();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new lt();
            return lt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Response";
          }
        }
        class Bt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Bt.prototype.family_groupid || r.Sg(Bt.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, i) {
            return r.BT(Bt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Bt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new Bt();
            return Bt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Bt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Bt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Request";
          }
        }
        class gt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.wallet_country_matches || r.Sg(gt.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
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
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = r.w0(gt.M())), gt.sm_mbf;
          }
          toObject(t = !1) {
            return gt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(gt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(gt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new gt();
            return gt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(gt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(gt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Response";
          }
        }
        class dt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dt.prototype.steamid || r.Sg(dt.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
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
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = r.w0(dt.M())), dt.sm_mbf;
          }
          toObject(t = !1) {
            return dt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(dt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(dt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new dt();
            return dt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(dt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(dt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Request";
          }
        }
        class ht extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ht.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new ht();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new ht();
            return ht.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Response";
          }
        }
        class st extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.family_groupid || r.Sg(st.M()),
              n.Message.initialize(this, t, 0, -1, void 0, null);
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
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = r.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(st.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new st();
            return st.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(st.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(st.M(), t, i);
          }
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Request";
          }
        }
        class It extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), n.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return It.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new It();
          }
          static deserializeBinary(t) {
            let i = new (e().BinaryReader)(t),
              a = new It();
            return It.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (e().BinaryWriter)();
            return It.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (e().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Response";
          }
        }
        var Vt;
        ((d) => {
          function t(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.CreateFamilyGroup#1",
              (0, s.I8)(w, B, g),
              V,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.CreateFamilyGroup = t;
          function i(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, s.I8)(b, B, g),
              M,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          d.GetFamilyGroup = i;
          function a(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, s.I8)(z, B, g),
              f,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          d.GetFamilyGroupForUser = a;
          function or(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, s.I8)(j, B, g),
              bt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.ModifyFamilyGroupDetails = or;
          function Fr(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, s.I8)(W, B, g),
              N,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.InviteToFamilyGroup = Fr;
          function Cr(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, s.I8)(H, B, g),
              Ot,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.ConfirmInviteToFamilyGroup = Cr;
          function pr(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, s.I8)(rt, B, g),
              xt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.ResendInvitationToFamilyGroup = pr;
          function Gr(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, s.I8)(S, B, g),
              D,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.JoinFamilyGroup = Gr;
          function _r(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, s.I8)(Y, B, g),
              Tt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.ConfirmJoinFamilyGroup = _r;
          function ti(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, s.I8)(O, B, g),
              Mt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.RemoveFromFamilyGroup = ti;
          function ri(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, s.I8)(T, B, g),
              zt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.CancelFamilyGroupInvite = ri;
          function ii(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, s.I8)(U, B, g),
              A,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          d.GetUsersSharingDevice = ii;
          function ei(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, s.I8)(x, B, g),
              ft,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.DeleteFamilyGroup = ei;
          function ni(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, s.I8)(Q, B, g),
              Et,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.UndeleteFamilyGroup = ni;
          function ai(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, s.I8)(C, B, g),
              p,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.GetPlaytimeSummary = ai;
          function ci(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, s.I8)(E, B, g),
              m,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.RequestPurchase = ci;
          function Bi(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, s.I8)(l, B, g),
              P,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          d.GetPurchaseRequests = Bi;
          function gi(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, s.I8)(h, B, g),
              jt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          d.RespondToRequestedPurchase = gi;
          function di(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, s.I8)(I, B, g),
              o,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          d.GetChangeLog = di;
          function si(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, s.I8)(G, B, g),
              St,
              { ePrivilege: 5 },
            );
          }
          d.SetFamilyCooldownOverrides = si;
          function wi(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, s.I8)($, B, g),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          d.GetSharedLibraryApps = wi;
          function bi(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, s.I8)(it, B, g),
              Ut,
              { ePrivilege: 1 },
            );
          }
          d.SetPreferredLender = bi;
          function Mi(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, s.I8)(et, B, g),
              nt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          d.GetPreferredLenders = Mi;
          function zi(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, s.I8)(ct, B, g),
              lt,
              { ePrivilege: 5 },
            );
          }
          d.ForceAcceptInvite = zi;
          function fi(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, s.I8)(Bt, B, g),
              gt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          d.GetInviteCheckResults = fi;
          function ji(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, s.I8)(dt, B, g),
              ht,
              { ePrivilege: 5 },
            );
          }
          d.ClearCooldownSkip = ji;
          function Wi(c, B, g) {
            return c.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, s.I8)(st, B, g),
              It,
              { ePrivilege: 5 },
            );
          }
          d.RollbackFamilyGroup = Wi;
        })(Vt || (Vt = {}));
        var Zt;
        ((d) => {
          (d.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: q,
          }),
            (d.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: Wt,
            }),
            (d.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: R,
            });
        })(Zt || (Zt = {}));
      },
    },
  ]);
})();
