/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [27634],
    {
      25236: (ce, Te, W) => {
        "use strict";
        W.d(Te, { GO: () => h, cf: () => A });
        const a = null,
          L = 0,
          h = 1,
          A = 2;
      },
      68495: (ce, Te, W) => {
        "use strict";
        W.d(Te, { Bv: () => ve, Dq: () => de, Yd: () => Se });
        const a = 0,
          L = 1,
          h = 2,
          A = 3,
          f = 4,
          de = 5,
          _t = 6,
          ve = 7,
          D = 8,
          I = 9,
          Se = 10,
          xe = 11,
          Ue = 12,
          St = 13,
          Oe = 14,
          Ie = 15,
          g = 16,
          c = 17,
          r = 18,
          Ct = 19,
          fe = 20,
          Gt = 21;
      },
      48453: (ce, Te, W) => {
        "use strict";
        W.d(Te, {
          GG: () => rt,
          b$: () => ut,
          V4: () => J,
          nH: () => mt,
          rB: () => L,
          Vv: () => a,
          p$: () => Fe,
          Fn: () => Ae,
        });
        var a = {};
        W.r(a),
          W.d(a, {
            Y9: () => r,
            bh: () => qe,
            v_: () => I,
            Rj: () => Rt,
            Cz: () => ye,
            HN: () => Xe,
            pZ: () => xe,
            e9: () => g,
            K: () => D,
            wY: () => c,
            Jo: () => _t,
            hW: () => Se,
            wp: () => Ue,
            oe: () => fe,
            Sx: () => Gt,
            uH: () => V,
            j3: () => Ke,
            JN: () => Ze,
            FK: () => pe,
            Ol: () => St,
            Iz: () => re,
            YE: () => Pe,
            js: () => Je,
            yh: () => ve,
            an: () => Ie,
            mr: () => Re,
            XJ: () => Oe,
          });
        var L = {};
        W.r(L), W.d(L, { D: () => ie });
        var h = W(80613),
          A = W.n(h),
          f = W(75245),
          de = W(35038);
        const _t = 0,
          ve = 1,
          D = 2,
          I = 3,
          Se = 4,
          xe = 5,
          Ue = 6,
          St = 7,
          Oe = 8,
          Ie = 9,
          g = 10,
          c = 11,
          r = 12,
          Ct = 13,
          fe = 14,
          Gt = 15,
          Rt = 16,
          ye = 17,
          Ke = 18,
          Xe = 19,
          V = 20,
          Ze = 21,
          Pe = 22,
          Je = 23,
          qe = 24,
          le = 25,
          er = 26,
          oe = 27,
          pe = 28,
          Re = 29,
          re = 30,
          ie = 0,
          rr = 1;
        function Fe(Jt) {
          return "unknown ESteamNotificationType ( " + Jt + " )";
        }
        function dr(Jt) {
          return "unknown ESteamNotificationTarget ( " + Jt + " )";
        }
        function lr(Jt) {
          return "unknown ESteamNotificationTargetClientType ( " + Jt + " )";
        }
        class st extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              st.prototype.notification_id || f.Sg(st.M()),
              h.Message.initialize(this, s, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    notification_id: {
                      n: 1,
                      br: f.qM.readUint64String,
                      bw: f.gp.writeUint64String,
                    },
                    notification_targets: {
                      n: 2,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    notification_type: {
                      n: 3,
                      br: f.qM.readEnum,
                      bw: f.gp.writeEnum,
                    },
                    body_data: {
                      n: 4,
                      br: f.qM.readString,
                      bw: f.gp.writeString,
                    },
                    read: { n: 7, br: f.qM.readBool, bw: f.gp.writeBool },
                    timestamp: {
                      n: 8,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    hidden: { n: 9, br: f.qM.readBool, bw: f.gp.writeBool },
                    expiry: {
                      n: 10,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    viewed: {
                      n: 11,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = f.w0(st.M())), st.sm_mbf;
          }
          toObject(s = !1) {
            return st.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(st.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(st.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new st();
            return st.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(st.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return st.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(st.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationData";
          }
        }
        class rt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              rt.prototype.include_hidden || f.Sg(rt.M()),
              h.Message.initialize(this, s, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    include_hidden: {
                      n: 1,
                      d: !1,
                      br: f.qM.readBool,
                      bw: f.gp.writeBool,
                    },
                    language: {
                      n: 2,
                      d: 0,
                      br: f.qM.readInt32,
                      bw: f.gp.writeInt32,
                    },
                    include_confirmation_count: {
                      n: 3,
                      d: !0,
                      br: f.qM.readBool,
                      bw: f.gp.writeBool,
                    },
                    include_pinned_counts: {
                      n: 4,
                      d: !1,
                      br: f.qM.readBool,
                      bw: f.gp.writeBool,
                    },
                    include_read: {
                      n: 5,
                      d: !0,
                      br: f.qM.readBool,
                      bw: f.gp.writeBool,
                    },
                    count_only: {
                      n: 6,
                      d: !1,
                      br: f.qM.readBool,
                      bw: f.gp.writeBool,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = f.w0(rt.M())), rt.sm_mbf;
          }
          toObject(s = !1) {
            return rt.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(rt.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(rt.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new rt();
            return rt.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(rt.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(rt.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Request";
          }
        }
        class ft extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              ft.prototype.notifications || f.Sg(ft.M()),
              h.Message.initialize(this, s, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    notifications: { n: 1, c: st, r: !0, q: !0 },
                    confirmation_count: {
                      n: 2,
                      br: f.qM.readInt32,
                      bw: f.gp.writeInt32,
                    },
                    pending_gift_count: {
                      n: 3,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 5,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    unread_count: {
                      n: 6,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 7,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = f.w0(ft.M())), ft.sm_mbf;
          }
          toObject(s = !1) {
            return ft.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(ft.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(ft.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new ft();
            return ft.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(ft.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(ft.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Response";
          }
        }
        class J extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              J.prototype.timestamp || f.Sg(J.M()),
              h.Message.initialize(this, s, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    notification_type: {
                      n: 2,
                      br: f.qM.readEnum,
                      bw: f.gp.writeEnum,
                    },
                    notification_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: f.qM.readUint64String,
                      pbr: f.qM.readPackedUint64String,
                      bw: f.gp.writeRepeatedUint64String,
                    },
                    mark_all_read: {
                      n: 4,
                      br: f.qM.readBool,
                      bw: f.gp.writeBool,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = f.w0(J.M())), J.sm_mbf;
          }
          toObject(s = !1) {
            return J.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(J.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(J.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new J();
            return J.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(J.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return J.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(J.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsRead_Notification";
          }
        }
        class mt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              mt.prototype.remote_client_id || f.Sg(mt.M()),
              h.Message.initialize(this, s, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    remote_client_id: {
                      n: 1,
                      br: f.qM.readUint64String,
                      bw: f.gp.writeUint64String,
                    },
                    target_client_type: {
                      n: 2,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = f.w0(mt.M())), mt.sm_mbf;
          }
          toObject(s = !1) {
            return mt.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(mt.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(mt.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new mt();
            return mt.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(mt.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(mt.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsViewed_Notification";
          }
        }
        class ct extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              ct.prototype.notification_type || f.Sg(ct.M()),
              h.Message.initialize(this, s, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: f.qM.readEnum,
                      bw: f.gp.writeEnum,
                    },
                    notification_targets: {
                      n: 2,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = f.w0(ct.M())), ct.sm_mbf;
          }
          toObject(s = !1) {
            return ct.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(ct.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(ct.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new ct();
            return ct.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(ct.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(ct.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationPreference";
          }
        }
        class R extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              R.prototype.preferences || f.Sg(R.M()),
              h.Message.initialize(this, s, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: { preferences: { n: 1, c: ct, r: !0, q: !0 } },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = f.w0(R.M())), R.sm_mbf;
          }
          toObject(s = !1) {
            return R.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(R.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(R.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new R();
            return R.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(R.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return R.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(R.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Request";
          }
        }
        class Zt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(), h.Message.initialize(this, s, 0, -1, void 0, null);
          }
          toObject(s = !1) {
            return Zt.toObject(s, this);
          }
          static toObject(s, z) {
            return s ? { $jspbMessageInstance: z } : {};
          }
          static fromObject(s) {
            return new Zt();
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new Zt();
            return Zt.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return s;
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {}
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Response";
          }
        }
        class ge extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(), h.Message.initialize(this, s, 0, -1, void 0, null);
          }
          toObject(s = !1) {
            return ge.toObject(s, this);
          }
          static toObject(s, z) {
            return s ? { $jspbMessageInstance: z } : {};
          }
          static fromObject(s) {
            return new ge();
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new ge();
            return ge.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return s;
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {}
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Request";
          }
        }
        class X extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              X.prototype.preferences || f.Sg(X.M()),
              h.Message.initialize(this, s, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: { preferences: { n: 1, c: ct, r: !0, q: !0 } },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = f.w0(X.M())), X.sm_mbf;
          }
          toObject(s = !1) {
            return X.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(X.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(X.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new X();
            return X.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(X.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return X.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(X.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Response";
          }
        }
        class ut extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              ut.prototype.notification_ids || f.Sg(ut.M()),
              h.Message.initialize(this, s, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    notification_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: f.qM.readUint64String,
                      pbr: f.qM.readPackedUint64String,
                      bw: f.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = f.w0(ut.M())), ut.sm_mbf;
          }
          toObject(s = !1) {
            return ut.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(ut.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(ut.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new ut();
            return ut.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(ut.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(ut.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_HideNotification_Notification";
          }
        }
        class q extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              q.prototype.notifications || f.Sg(q.M()),
              h.Message.initialize(this, s, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    notifications: { n: 1, c: st, r: !0, q: !0 },
                    pending_gift_count: {
                      n: 2,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 3,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 4,
                      br: f.qM.readUint32,
                      bw: f.gp.writeUint32,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = f.w0(q.M())), q.sm_mbf;
          }
          toObject(s = !1) {
            return q.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(q.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(q.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new q();
            return q.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(q.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return q.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(q.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_NotificationsReceived_Notification";
          }
        }
        class Tt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(s = null) {
            super(),
              Tt.prototype.preferences || f.Sg(Tt.M()),
              h.Message.initialize(this, s, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: { preferences: { n: 1, c: ct, r: !0, q: !0 } },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = f.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(s = !1) {
            return Tt.toObject(s, this);
          }
          static toObject(s, z) {
            return f.BT(Tt.M(), s, z);
          }
          static fromObject(s) {
            return f.Uq(Tt.M(), s);
          }
          static deserializeBinary(s) {
            let z = new (A().BinaryReader)(s),
              et = new Tt();
            return Tt.deserializeBinaryFromReader(et, z);
          }
          static deserializeBinaryFromReader(s, z) {
            return f.zj(Tt.MBF(), s, z);
          }
          serializeBinary() {
            var s = new (A().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, s), s.getResultBuffer();
          }
          static serializeBinaryToWriter(s, z) {
            f.i0(Tt.M(), s, z);
          }
          serializeBase64String() {
            var s = new (A().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, s), s.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_PreferencesUpdated_Notification";
          }
        }
        var Ae;
        ((Jt) => {
          function s(Z, P, tt) {
            return Z.SendMsg(
              "SteamNotification.GetSteamNotifications#1",
              (0, de.I8)(rt, P, tt),
              ft,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner", "help"],
              },
            );
          }
          Jt.GetSteamNotifications = s;
          function z(Z, P) {
            return Z.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, de.I8)(J, P),
              { ePrivilege: 1, rgBrowserAPISites: ["partner", "help"] },
            );
          }
          Jt.MarkNotificationsRead = z;
          function et(Z, P) {
            return Z.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, de.I8)(mt, P),
              { ePrivilege: 1, rgBrowserAPISites: ["partner", "help"] },
            );
          }
          Jt.MarkNotificationsViewed = et;
          function wt(Z, P) {
            return Z.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, de.I8)(ut, P),
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          Jt.HideNotification = wt;
          function bt(Z, P, tt) {
            return Z.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, de.I8)(R, P, tt),
              Zt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          Jt.SetPreferences = bt;
          function dt(Z, P, tt) {
            return Z.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, de.I8)(ge, P, tt),
              X,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          Jt.GetPreferences = dt;
        })(Ae || (Ae = {}));
        var Qe;
        ((Jt) => {
          (Jt.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: q,
          }),
            (Jt.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: Tt,
            });
        })(Qe || (Qe = {}));
      },
      80862: (ce, Te, W) => {
        "use strict";
        W.d(Te, {
          OT: () => Bi,
          iO: () => gi,
          T4: () => xr,
          n8: () => Wr,
          hr: () => hr,
          IC: () => Mr,
          V4: () => Tr,
          sR: () => Sr,
          jb: () => yr,
          Rl: () => ui,
          XT: () => Er,
          cE: () => De,
          V8: () => Ge,
          tM: () => si,
          K9: () => br,
          bP: () => fi,
          aq: () => zr,
          u5: () => _e,
          PI: () => Or,
          kE: () => cr,
          IL: () => oi,
        });
        var a = W(48453),
          L = W(35038),
          h = W(72604),
          A = W(99412),
          f = W(38636),
          de = W(88942),
          _t = W(14947),
          ve = W(76559),
          D = W(79365),
          I = W(68495),
          Se = W(25236),
          xe = W(36174),
          Ue = W(57589),
          St = W(98609),
          Oe = W(3166),
          Ie = W(90626),
          g = W(80613),
          c = W.n(g),
          r = W(75245),
          Ct = W(24525);
        const fe = 0,
          Gt = 1,
          Rt = 2,
          ye = 3,
          Ke = 4,
          Xe = 5,
          V = 0,
          Ze = 1,
          Pe = 2,
          Je = 3,
          qe = 4,
          le = 6,
          er = 7,
          oe = 8,
          pe = 9,
          Re = 10,
          re = 11,
          ie = 12,
          rr = 13,
          Fe = 15,
          dr = 16,
          lr = 17,
          st = 18,
          rt = 19,
          ft = 20,
          J = 21,
          mt = 22,
          ct = 23,
          R = 24,
          Zt = 25,
          ge = 26,
          X = 27,
          ut = 28,
          q = 29,
          Tt = 30;
        function Ae(i) {
          return "unknown EFamilyGroupRole ( " + i + " )";
        }
        function Qe(i) {
          return "unknown EFamilyGroupMembershipRemovalReason ( " + i + " )";
        }
        function Jt(i) {
          return "unknown EFamilyGroupsTwoFactorMethod ( " + i + " )";
        }
        function s(i) {
          return "unknown EPurchaseRequestAction ( " + i + " )";
        }
        function z(i) {
          return "unknown EFamilyGroupChangeLogType ( " + i + " )";
        }
        function et(i) {
          return "unknown ESharedLibraryExcludeReason ( " + i + " )";
        }
        class wt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.name || r.Sg(wt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
            let e = new (c().BinaryReader)(t),
              n = new wt();
            return wt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(wt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(wt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Request";
          }
        }
        class bt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.family_groupid || r.Sg(bt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
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
            let e = new (c().BinaryReader)(t),
              n = new bt();
            return bt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(bt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(bt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Response";
          }
        }
        class dt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dt.prototype.family_groupid || r.Sg(dt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
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
            let e = new (c().BinaryReader)(t),
              n = new dt();
            return dt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(dt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(dt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Request";
          }
        }
        class Z extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.steamid || r.Sg(Z.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              n = new Z();
            return Z.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMember";
          }
        }
        class P extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              P.prototype.steamid || r.Sg(P.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
                    role: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
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
            let e = new (c().BinaryReader)(t),
              n = new P();
            return P.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(P.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return P.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(P.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInvite";
          }
        }
        class tt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.steamid || r.Sg(tt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, e) {
            return r.BT(tt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new tt();
            return tt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(tt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(tt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupFormerMember";
          }
        }
        class F extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              F.prototype.name || r.Sg(F.M()),
              g.Message.initialize(this, t, 0, -1, [2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    members: { n: 2, c: Z, r: !0, q: !0 },
                    pending_invites: { n: 3, c: P, r: !0, q: !0 },
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
                    former_members: { n: 7, c: tt, r: !0, q: !0 },
                    slot_cooldown_overrides: {
                      n: 8,
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
            let e = new (c().BinaryReader)(t),
              n = new F();
            return F.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(F.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return F.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(F.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Response";
          }
        }
        class C extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.family_groupid || r.Sg(C.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              n = new C();
            return C.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(C.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(C.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInviteForUser";
          }
        }
        class xt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              xt.prototype.steamid || r.Sg(xt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
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
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = r.w0(xt.M())), xt.sm_mbf;
          }
          toObject(t = !1) {
            return xt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(xt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(xt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new xt();
            return xt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(xt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(xt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Request";
          }
        }
        class vt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              vt.prototype.family_groupid || r.Sg(vt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
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
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = r.w0(vt.M())), vt.sm_mbf;
          }
          toObject(t = !1) {
            return vt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(vt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(vt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new vt();
            return vt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(vt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(vt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMembership";
          }
        }
        class it extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              it.prototype.family_groupid || r.Sg(it.M()),
              g.Message.initialize(this, t, 0, -1, [5, 10], null);
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
                    pending_group_invites: { n: 5, c: C, r: !0, q: !0 },
                    role: { n: 6, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    cooldown_seconds_remaining: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    family_group: { n: 8, c: F },
                    can_undelete_last_joined_family: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    membership_history: { n: 10, c: vt, r: !0, q: !0 },
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
            let e = new (c().BinaryReader)(t),
              n = new it();
            return it.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(it.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return it.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(it.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Response";
          }
        }
        class Mt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Mt.prototype.family_groupid || r.Sg(Mt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
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
            let e = new (c().BinaryReader)(t),
              n = new Mt();
            return Mt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Mt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Mt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
          }
        }
        class me extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return me.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new me();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new me();
            return me.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
          }
        }
        class Ot extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ot.prototype.family_groupid || r.Sg(Ot.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              n = new Ot();
            return Ot.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ot.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ot.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Request";
          }
        }
        class jt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.invite_id || r.Sg(jt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
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
            let e = new (c().BinaryReader)(t),
              n = new jt();
            return jt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(jt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(jt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Response";
          }
        }
        class It extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              It.prototype.family_groupid || r.Sg(It.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
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
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = r.w0(It.M())), It.sm_mbf;
          }
          toObject(t = !1) {
            return It.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(It.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(It.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new It();
            return It.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(It.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return It.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(It.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Request";
          }
        }
        class yt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yt.prototype.two_factor_method || r.Sg(yt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
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
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = r.w0(yt.M())), yt.sm_mbf;
          }
          toObject(t = !1) {
            return yt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(yt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(yt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new yt();
            return yt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(yt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(yt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Response";
          }
        }
        class Et extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.family_groupid || r.Sg(Et.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
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
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = r.w0(Et.M())), Et.sm_mbf;
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Et.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Et.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Et();
            return Et.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Et.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Et.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Request";
          }
        }
        class ue extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ue.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new ue();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new ue();
            return ue.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Response";
          }
        }
        class Ut extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ut.prototype.family_groupid || r.Sg(Ut.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
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
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = r.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(t = !1) {
            return Ut.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Ut.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Ut.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Ut();
            return Ut.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ut.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ut.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Request";
          }
        }
        class we extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return we.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new we();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new we();
            return we.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return we.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Response";
          }
        }
        class At extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.family_groupid || r.Sg(At.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = r.w0(At.M())), At.sm_mbf;
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(At.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new At();
            return At.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(At.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(At.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Request";
          }
        }
        class be extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return be.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new be();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new be();
            return be.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Response";
          }
        }
        class kt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              kt.prototype.family_groupid || r.Sg(kt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
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
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = r.w0(kt.M())), kt.sm_mbf;
          }
          toObject(t = !1) {
            return kt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(kt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(kt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new kt();
            return kt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(kt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(kt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Request";
          }
        }
        class Lt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Lt.prototype.users || r.Sg(Lt.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
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
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = r.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(t = !1) {
            return Lt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Lt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Lt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Lt();
            return Lt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Lt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Lt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Response";
          }
        }
        class Dt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Dt.prototype.family_groupid || r.Sg(Dt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
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
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = r.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(t = !1) {
            return Dt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Dt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Dt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Dt();
            return Dt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Dt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Dt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Request";
          }
        }
        class Nt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Nt.prototype.gidshoppingcart || r.Sg(Nt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
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
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = r.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(t = !1) {
            return Nt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Nt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Nt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Nt();
            return Nt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Nt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Nt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Response";
          }
        }
        class Ht extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ht.prototype.family_groupid || r.Sg(Ht.M()),
              g.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
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
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = r.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(t = !1) {
            return Ht.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Ht.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Ht.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Ht();
            return Ht.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ht.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ht.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Request";
          }
        }
        class Kt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Kt.prototype.requester_steamid || r.Sg(Kt.M()),
              g.Message.initialize(this, t, 0, -1, [9, 10, 11, 12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
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
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = r.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(t = !1) {
            return Kt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Kt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Kt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Kt();
            return Kt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Kt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Kt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "PurchaseRequest";
          }
        }
        class ht extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ht.prototype.requests || r.Sg(ht.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: { requests: { n: 1, c: Kt, r: !0, q: !0 } },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = r.w0(ht.M())), ht.sm_mbf;
          }
          toObject(t = !1) {
            return ht.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ht.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ht.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new ht();
            return ht.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ht.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ht.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Response";
          }
        }
        class d extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              d.prototype.family_groupid || r.Sg(d.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
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
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = r.w0(d.M())), d.sm_mbf;
          }
          toObject(t = !1) {
            return d.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(d.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(d.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new d();
            return d.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(d.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return d.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(d.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Request";
          }
        }
        class l extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return l.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new l();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new l();
            return l.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return l.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Response";
          }
        }
        class B extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              B.prototype.family_groupid || r.Sg(B.M()),
              g.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    running_apps: { n: 2, c: M, r: !0, q: !0 },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = r.w0(B.M())), B.sm_mbf;
          }
          toObject(t = !1) {
            return B.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(B.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(B.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new B();
            return B.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(B.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return B.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(B.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification";
          }
        }
        class u extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              u.prototype.member_steamid || r.Sg(u.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
          static toObject(t, e) {
            return r.BT(u.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(u.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new u();
            return u.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(u.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return u.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(u.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
          }
        }
        class M extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.appid || r.Sg(M.M()),
              g.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    playing_members: { n: 3, c: u, r: !0, q: !0 },
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
          static toObject(t, e) {
            return r.BT(M.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(M.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new M();
            return M.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(M.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return M.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(M.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
          }
        }
        class v extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return v.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new v();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new v();
            return v.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return v.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_InviteStatus_Notification";
          }
        }
        class m extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              m.prototype.family_groupid || r.Sg(m.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    family_groupid: {
                      n: 1,
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
          static toObject(t, e) {
            return r.BT(m.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(m.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new m();
            return m.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(m.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(m.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_GroupChanged_Notification";
          }
        }
        class w extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.family_groupid || r.Sg(w.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
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
          static toObject(t, e) {
            return r.BT(w.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(w.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new w();
            return w.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(w.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(w.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Request";
          }
        }
        class T extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.changes || r.Sg(T.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: { changes: { n: 1, c: S, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              n = new T();
            return T.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(T.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(T.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response";
          }
        }
        class S extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              S.prototype.timestamp || r.Sg(S.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
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
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(t = !1) {
            return S.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(S.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(S.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new S();
            return S.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(S.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return S.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(S.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response_Change";
          }
        }
        class j extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              j.prototype.steamid || r.Sg(j.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
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
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = r.w0(j.M())), j.sm_mbf;
          }
          toObject(t = !1) {
            return j.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(j.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(j.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new j();
            return j.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(j.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return j.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(j.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_PlaytimeEntry";
          }
        }
        class x extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              x.prototype.family_groupid || r.Sg(x.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, e) {
            return r.BT(x.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(x.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new x();
            return x.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(x.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(x.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Request";
          }
        }
        class O extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.entries || r.Sg(O.M()),
              g.Message.initialize(this, t, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    entries: { n: 1, c: j, r: !0, q: !0 },
                    entries_by_owner: { n: 2, c: j, r: !0, q: !0 },
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
          static toObject(t, e) {
            return r.BT(O.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(O.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new O();
            return O.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(O.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(O.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Response";
          }
        }
        class E extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              E.prototype.family_groupid || r.Sg(E.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
                    cooldown_count: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
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
            let e = new (c().BinaryReader)(t),
              n = new E();
            return E.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(E.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return E.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(E.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
          }
        }
        class Y extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Y();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Y();
            return Y.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
          }
        }
        class k extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.family_groupid || r.Sg(k.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              n = new k();
            return k.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(k.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(k.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Request";
          }
        }
        class U extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.apps || r.Sg(U.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    apps: { n: 1, c: Q, r: !0, q: !0 },
                    owner_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, e) {
            return r.BT(U.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new U();
            return U.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(U.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(U.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response";
          }
        }
        class Q extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.appid || r.Sg(Q.M()),
              g.Message.initialize(this, t, 0, -1, [2, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
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
                      d: V,
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
                      d: Ct.$e,
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
            let e = new (c().BinaryReader)(t),
              n = new Q();
            return Q.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Q.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Q.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
          }
        }
        class G extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.family_groupid || r.Sg(G.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              n = new G();
            return G.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(G.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(G.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
          }
        }
        class Pt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Pt.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Pt();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Pt();
            return Pt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
          }
        }
        class $ extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.family_groupid || r.Sg($.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (c().BinaryReader)(t),
              n = new $();
            return $.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj($.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0($.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
          }
        }
        class Ft extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ft.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ft();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Ft();
            return Ft.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
          }
        }
        class lt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              lt.prototype.family_groupid || r.Sg(lt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
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
            let e = new (c().BinaryReader)(t),
              n = new lt();
            return lt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(lt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(lt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
          }
        }
        class te extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return te.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new te();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new te();
            return te.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
          }
        }
        class zt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              zt.prototype.family_groupid || r.Sg(zt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
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
            let e = new (c().BinaryReader)(t),
              n = new zt();
            return zt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(zt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(zt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Request";
          }
        }
        class ne extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ne.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new ne();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new ne();
            return ne.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Response";
          }
        }
        class ot extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ot.prototype.family_groupid || r.Sg(ot.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = r.w0(ot.M())), ot.sm_mbf;
          }
          toObject(t = !1) {
            return ot.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ot.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ot.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new ot();
            return ot.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ot.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ot.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Request";
          }
        }
        class Wt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Wt.prototype.members || r.Sg(Wt.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: { members: { n: 1, c: gt, r: !0, q: !0 } },
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
            let e = new (c().BinaryReader)(t),
              n = new Wt();
            return Wt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Wt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Wt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response";
          }
        }
        class gt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.steamid || r.Sg(gt.M()),
              g.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
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
            let e = new (c().BinaryReader)(t),
              n = new gt();
            return gt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(gt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(gt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
          }
        }
        class nt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.family_groupid || r.Sg(nt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
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
            let e = new (c().BinaryReader)(t),
              n = new nt();
            return nt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(nt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(nt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Request";
          }
        }
        class Me extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Me.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Me();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Me();
            return Me.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Response";
          }
        }
        class Qt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qt.prototype.family_groupid || r.Sg(Qt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
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
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = r.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(t = !1) {
            return Qt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Qt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Qt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Qt();
            return Qt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Qt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Qt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Request";
          }
        }
        class je extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return je.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new je();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new je();
            return je.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return je.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Response";
          }
        }
        class Vt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Vt.prototype.family_groupid || r.Sg(Vt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
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
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = r.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(t = !1) {
            return Vt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Vt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Vt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Vt();
            return Vt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Vt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Vt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Request";
          }
        }
        class Yt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.wallet_country_matches || r.Sg(Yt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
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
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = r.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(t = !1) {
            return Yt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Yt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Yt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Yt();
            return Yt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Yt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Yt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Response";
          }
        }
        class $t extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.steamid || r.Sg($t.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
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
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = r.w0($t.M())), $t.sm_mbf;
          }
          toObject(t = !1) {
            return $t.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT($t.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq($t.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new $t();
            return $t.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj($t.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0($t.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Request";
          }
        }
        class he extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new he();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new he();
            return he.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Response";
          }
        }
        class Xt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.family_groupid || r.Sg(Xt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
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
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = r.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(t = !1) {
            return Xt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Xt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Xt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new Xt();
            return Xt.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Xt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Xt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Request";
          }
        }
        class We extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return We.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new We();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              n = new We();
            return We.deserializeBinaryFromReader(n, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return We.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Response";
          }
        }
        var or;
        ((i) => {
          function t(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.CreateFamilyGroup#1",
              (0, L.I8)(wt, H, K),
              bt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.CreateFamilyGroup = t;
          function e(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, L.I8)(dt, H, K),
              F,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          i.GetFamilyGroup = e;
          function n(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, L.I8)(xt, H, K),
              it,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          i.GetFamilyGroupForUser = n;
          function o(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, L.I8)(Mt, H, K),
              me,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.ModifyFamilyGroupDetails = o;
          function b(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, L.I8)(Ot, H, K),
              jt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.InviteToFamilyGroup = b;
          function y(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, L.I8)(G, H, K),
              Pt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.ConfirmInviteToFamilyGroup = y;
          function p(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, L.I8)(lt, H, K),
              te,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.ResendInvitationToFamilyGroup = p;
          function _(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, L.I8)(It, H, K),
              yt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.JoinFamilyGroup = _;
          function qt(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, L.I8)($, H, K),
              Ft,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.ConfirmJoinFamilyGroup = qt;
          function se(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, L.I8)(Et, H, K),
              ue,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.RemoveFromFamilyGroup = se;
          function Ne(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, L.I8)(Ut, H, K),
              we,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.CancelFamilyGroupInvite = Ne;
          function at(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, L.I8)(kt, H, K),
              Lt,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          i.GetUsersSharingDevice = at;
          function He(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, L.I8)(At, H, K),
              be,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.DeleteFamilyGroup = He;
          function ee(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, L.I8)(nt, H, K),
              Me,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.UndeleteFamilyGroup = ee;
          function pt(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, L.I8)(x, H, K),
              O,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.GetPlaytimeSummary = pt;
          function $e(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, L.I8)(Dt, H, K),
              Nt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.RequestPurchase = $e;
          function wi(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, L.I8)(Ht, H, K),
              ht,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          i.GetPurchaseRequests = wi;
          function bi(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, L.I8)(d, H, K),
              l,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          i.RespondToRequestedPurchase = bi;
          function Mi(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, L.I8)(w, H, K),
              T,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          i.GetChangeLog = Mi;
          function zi(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, L.I8)(E, H, K),
              Y,
              { ePrivilege: 5 },
            );
          }
          i.SetFamilyCooldownOverrides = zi;
          function Si(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, L.I8)(k, H, K),
              U,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          i.GetSharedLibraryApps = Si;
          function Ti(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, L.I8)(zt, H, K),
              ne,
              { ePrivilege: 1 },
            );
          }
          i.SetPreferredLender = Ti;
          function vi(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, L.I8)(ot, H, K),
              Wt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          i.GetPreferredLenders = vi;
          function ji(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, L.I8)(Qt, H, K),
              je,
              { ePrivilege: 5 },
            );
          }
          i.ForceAcceptInvite = ji;
          function hi(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, L.I8)(Vt, H, K),
              Yt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          i.GetInviteCheckResults = hi;
          function Wi(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, L.I8)($t, H, K),
              he,
              { ePrivilege: 5 },
            );
          }
          i.ClearCooldownSkip = Wi;
          function xi(N, H, K) {
            return N.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, L.I8)(Xt, H, K),
              We,
              { ePrivilege: 5 },
            );
          }
          i.RollbackFamilyGroup = xi;
        })(or || (or = {}));
        var gr;
        ((i) => {
          (i.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: B,
          }),
            (i.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: v,
            }),
            (i.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: m,
            });
        })(gr || (gr = {}));
        var Oi = W(75916),
          Ii = W(18210),
          yi = W(36053),
          Ur = W(3692),
          Ei = W(20117);
        const ze = (i, t) =>
            t === void 0
              ? ["get_family_group_for_user ", i]
              : ["get_family_group_for_user ", i, t],
          Be = (i) => ["get_family_group", i],
          ae = (i) => ["get_family_history", i],
          Ar = (i) => ["get_users_sharing_device", i],
          kr = (i) => ["get_shopping_cart_contents", i],
          Lr = (i) => ["recent_playtime_sessions", i],
          Dr = (i) => ["get_playtime_summary", i],
          Nr = (i, t) => ["get_invite_check_results", i, t];
        function ir(i, t, e) {
          return e
            ? ["get_purchase_requests", i, t, e]
            : t
              ? ["get_purchase_requests", i, t]
              : ["get_purchase_requests", i];
        }
        function Bt(i, t) {
          if (i != k_EResultOK) throw i;
        }
        const nr = Ie.createContext({ staleTimeMs: 1 / 0 });
        function Ui(i) {
          const { staleTimeMs: t, children: e } = i,
            n = React.useMemo(() => ({ staleTimeMs: t ?? 3e3 }), [t]);
          return React.createElement(nr.Provider, { value: n }, e);
        }
        function Hr(i = !1) {
          return Kr(useActiveAccount(), i);
        }
        function Kr(i, t = !1) {
          const e = useActiveServiceTransport(),
            n = useContext(nr).staleTimeMs;
          return useQuery({
            queryKey: ze(i, t),
            queryFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetFamilyGroupForUser_Request,
              );
              o.Body().set_steamid(i),
                o.Body().set_include_family_group_response(t);
              const b = await FGS.FamilyGroupsService.GetFamilyGroupForUser(
                e,
                o,
              );
              return Bt(b.GetEResult(), "GetFamilyGroupForUser"), b.Body();
            },
            staleTime: n,
            enabled: !!i,
            placeholderData: i
              ? void 0
              : new FGS.CFamilyGroups_GetFamilyGroupForUser_Response(),
          });
        }
        function Qr(i) {
          const t = useActiveServiceTransport(),
            e = useContext(nr).staleTimeMs;
          return useQuery({
            queryKey: Be(i),
            queryFn: async () => {
              if (i) {
                const n = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetFamilyGroup_Request,
                );
                n.Body().set_family_groupid(i);
                const o = await FGS.FamilyGroupsService.GetFamilyGroup(t, n);
                return Bt(o.GetEResult(), "GetFamilyGroup"), o.Body();
              } else throw k_EResultNoMatch;
            },
            staleTime: e,
          });
        }
        function Ai() {
          const i = useActiveServiceTransport(),
            t = useQueryClient(),
            e = useActiveAccount();
          return useMutation({
            mutationFn: async (n) => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              o.Body().set_name(n);
              const b = await FGS.FamilyGroupsService.CreateFamilyGroup(i, o);
              return Bt(b.GetEResult(), "CreateFamilyGroup"), b.Body();
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: ze(e) });
            },
          });
        }
        function ki(i) {
          const t = useActiveServiceTransport(),
            e = useQueryClient(),
            n = useActiveAccount();
          return useMutation({
            mutationFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_DeleteFamilyGroup_Request,
              );
              o.Body().set_family_groupid(i);
              const b = await FGS.FamilyGroupsService.DeleteFamilyGroup(t, o);
              return Bt(b.GetEResult(), "DeleteFamilyGroup"), b.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ze(n) }),
                e.invalidateQueries({ queryKey: Be(i) }),
                e.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function Li(i) {
          const t = useActiveServiceTransport(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async (n) => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ModifyFamilyGroupDetails_Request,
              );
              o.Body().set_family_groupid(i), o.Body().set_name(n);
              const b = await FGS.FamilyGroupsService.ModifyFamilyGroupDetails(
                t,
                o,
              );
              return Bt(b.GetEResult(), "ModifyFamilyGroupDetails"), b.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: Be(i) }),
                e.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function Di(i, t, e) {
          const n = useActiveServiceTransport(),
            o = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const b = CProtoBufMsg.Init(
                FGS.CFamilyGroups_InviteToFamilyGroup_Request,
              );
              b.Body().set_family_groupid(i),
                b.Body().set_receiver_steamid(t),
                b.Body().set_receiver_role(e);
              const y = await FGS.FamilyGroupsService.InviteToFamilyGroup(n, b);
              return Bt(y.GetEResult(), "InviteToFamilyGroup"), y.Body();
            },
            onSuccess: () => {
              o.invalidateQueries({ queryKey: ze(t) }),
                o.invalidateQueries({ queryKey: Be(i) }),
                o.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function Ni(i) {
          const t = useActiveServiceTransport(),
            e = useActiveAccount(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_JoinFamilyGroup_Request,
              );
              o.Body().set_family_groupid(i);
              const b = await FGS.FamilyGroupsService.JoinFamilyGroup(t, o);
              return Bt(b.GetEResult(), "JoinFamilyGroup"), b.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ze(e) }),
                n.invalidateQueries({ queryKey: Be(i) }),
                n.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function Hi(i, t) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CancelFamilyGroupInvite_Request,
              );
              o.Body().set_family_groupid(i), o.Body().set_steamid_to_cancel(t);
              const b = await FGS.FamilyGroupsService.CancelFamilyGroupInvite(
                e,
                o,
              );
              return Bt(b.GetEResult(), "CancelFamilyGroupInvite"), b.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ze(t) }),
                n.invalidateQueries({ queryKey: Be(i) }),
                n.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function Ki(i, t) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RemoveFromFamilyGroup_Request,
              );
              o.Body().set_family_groupid(i), o.Body().set_steamid_to_remove(t);
              const b = await FGS.FamilyGroupsService.RemoveFromFamilyGroup(
                e,
                o,
              );
              return Bt(b.GetEResult(), "RemoveFromFamilyGroup"), b.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ze(t) }),
                n.invalidateQueries({ queryKey: Be(i) }),
                n.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function Qi(i) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: Ar(i),
            queryFn: async () => {
              const e = GetCookie("clientsessionid"),
                n = e && BigInt("0x" + e).toString(),
                o = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetUsersSharingDevice_Request,
                );
              o.Body().set_family_groupid(i),
                o.Body().set_client_instance_id(n ?? void 0);
              const b = await FGS.FamilyGroupsService.GetUsersSharingDevice(
                t,
                o,
              );
              return Bt(b.GetEResult(), "GetUsersSharingDevice"), b.Body();
            },
          });
        }
        function Vi(i) {
          const t = useActiveAccount();
          return Qr(i)
            .data?.members()
            .find((n) => n.steamid() == t)
            ?.role();
        }
        function Yi(i, t) {
          const e = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RequestPurchase_Request,
              );
              n.Body().set_family_groupid(i),
                n.Body().set_use_account_cart(!0),
                n.Body().set_store_country_code(t);
              const o = await FGS.FamilyGroupsService.RequestPurchase(e, n);
              return Bt(o.GetEResult(), "RequestPurchase"), o.Body();
            },
          });
        }
        function $i(i, t) {
          const e = useActiveServiceTransport(),
            n = useActiveAccount();
          return useQuery({
            queryKey: ir(i, n),
            queryFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              o.Body().set_family_groupid(i),
                t !== void 0 && o.Body().set_rt_include_completed_since(t);
              const b = await FGS.FamilyGroupsService.GetPurchaseRequests(e, o);
              return Bt(b.GetEResult(), "GetPurchaseRequests"), b.Body();
            },
          });
        }
        function Xi(i, t) {
          const e = useActiveServiceTransport(),
            n = useActiveAccount();
          return useQuery({
            queryKey: ir(i, n, t),
            queryFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              o.Body().set_family_groupid(i), o.Body().add_request_ids(t);
              const b = await FGS.FamilyGroupsService.GetPurchaseRequests(e, o);
              return Bt(b.GetEResult(), "GetPurchaseRequests"), b.Body();
            },
            select: (o) =>
              o.toObject().requests?.find(({ request_id: b }) => b === t),
          });
        }
        function Zi(i, t, e) {
          const n = useActiveServiceTransport(),
            o = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const b = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RespondToRequestedPurchase_Request,
              );
              b.Body().set_family_groupid(i),
                b.Body().set_request_id(t),
                b.Body().set_action(e);
              const y =
                await FGS.FamilyGroupsService.RespondToRequestedPurchase(n, b);
              return Bt(y.GetEResult(), "RespondToRequestedPurchase"), y.Body();
            },
            onSuccess: () => {
              o.invalidateQueries({ queryKey: ir(i) }),
                o.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        const Vr = (0, Ie.createContext)({
          errorMessage: null,
          setErrorMessage: (i) => {},
        });
        function Yr(i, t) {
          return i;
        }
        var $r = ((i) => (
          (i[(i.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (i[(i.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (i[(i.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (i[(i.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (i[(i.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (i[(i.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (i[(i.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (i[(i.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (i[(i.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (i[(i.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (i[(i.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (i[(i.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (i[(i.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (i[(i.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (i[(i.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (i[(i.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (i[(i.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          i
        ))($r || {});
        const Br = {
          [h.nO]: "#FamilyManagement_ErrorInternalServerError",
          [h.zi]: "#FamilyManagement_ErrorInternalServerError",
          [h.S7]: "#FamilyManagement_ErrorInternalServerError",
          [h.Te]: "#FamilyManagement_ErrorInternalServerError",
          [h.sW]: "#FamilyManagement_AccessDenied",
          [h.p]: "#FamilyManagement_ErrorNoMatch",
          [h.uN]: "#FamilyManagement_ErrorAccountDisabled",
          [h.$U]: "#FamilyManagement_ErrorNoActiveInvite",
          [h.ZI]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [h.UT]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [h.TE]: "#FamilyManagement_ErrorLimitExceeded",
          [h.B1]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [h.Nb]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [h.h_]: { 5: "#FamilyManagement_RateLimitExceeded_CreateFamily" },
          [h.lG]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [h.zL]: { 2: "#FamilyManagement_Household_JoinFamily" },
          [h.iC]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [h.Ze]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [h.fb]: { 4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails" },
        };
        function Xr(i, t, e, n) {
          let o = "";
          if (i in Br) {
            const b = Br[i];
            if (typeof b == "string") o = Localize(b, ...n);
            else {
              const y = b;
              e in y && (o = Localize(y[e], ...n));
            }
          }
          return Yr(Localize(t, o), i);
        }
        function fr() {
          const { setErrorMessage: i } = useContext(Vr);
          return { setErrorMessage: i };
        }
        function Pi(i, t, e) {
          const { setErrorMessage: n } = fr(),
            { isError: o, error: b } = i,
            y = Hr();
          useEffect(() => {
            if (o) {
              const p = b,
                _ = [];
              if (
                p === k_EResultLimitExceeded ||
                p === k_EResultAccountActivityLimitExceeded
              ) {
                let qt;
                y.isSuccess &&
                  y.data &&
                  (qt = y.data.cooldown_seconds_remaining()),
                  _.push(Zr(qt));
              }
              n(Xr(p, t, e, _));
            }
          }, [n, o, b, t, e, y.isSuccess, y.data]);
        }
        function Zr(i) {
          if (!i) return Localize("#FamilyManagement_LoadingPlaceholder");
          const t = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return LocalizeDateHumanReadable(Date.now() / 1e3 + i, t);
        }
        function Ji(i, t) {
          const { setErrorMessage: e } = fr();
          useEffect(() => {
            i.isError && e(Localize(t));
          }, [e, i.isError, t]);
        }
        function qi(i) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: ae(i),
            queryFn: async () => {
              const e = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetChangeLog_Request,
              );
              e.Body().set_family_groupid(i);
              const n = await FGS.FamilyGroupsService.GetChangeLog(t, e);
              return (
                Bt(n.GetEResult(), "GetFamilyGroupChangeLog"),
                n.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function pi(i) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: kr(i),
            queryFn: async () => {
              const e = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              e.Body().set_gidshoppingcart(i);
              const n = await ShoppingCartService.GetShoppingCartContents(t, e);
              return Bt(n.GetEResult(), "GetShoppingCartContents"), n.Body();
            },
          });
        }
        function Ri(i) {
          const t = useActiveServiceTransport(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async (n) => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              o.Body().set_family_groupid(i), o.Body().set_cooldown_count(n);
              const b =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(t, o);
              return Bt(b.GetEResult(), "SetFamilyCooldownOverrides"), b.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: Be(i) }),
                e.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function Pr(i, t) {
          return `${St.TS.STORE_BASE_URL}cart/purchaserequest/${i}/${t}`;
        }
        function Fi(i) {
          return `${Config.STORE_BASE_URL}cart/purchaserequested/${i}`;
        }
        function Ci(i, t) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              o.Body().set_steamid(i), o.Body().set_name(t);
              const b = await FGS.FamilyGroupsService.CreateFamilyGroup(e, o);
              return (
                Bt(b.GetEResult(), "ForceCreateFamilyGroup"),
                b.Body().family_groupid()
              );
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ze(i) });
            },
          });
        }
        function mr(i, t, e, n) {
          return [
            "get_shared_library_apps",
            i,
            t?.bIncludeOwn,
            t?.bIncludeExcluded,
            t?.bIncludeNonGames,
            t?.for_account_id,
            e,
            n,
          ];
        }
        function Gi(i, t) {
          const e = useActiveAccount(),
            { settings: n, mapAppsAllowed: o } = useParentalSettings(e).data,
            b = useIsCurrentUserParentalLocked(),
            y = useActiveServiceTransport(),
            {
              bIncludeOwn: p,
              bIncludeExcluded: _,
              bIncludeNonGames: qt,
              for_account_id: se,
            } = t ?? {},
            Ne = t?.enabled !== void 0 ? t.enabled : !0,
            at = mr(i, t, n, b),
            He = (ee) => !BIsAppBlocked(ee.appid(), b, n, o);
          return useQuery({
            queryKey: at,
            queryFn: async () => {
              const ee = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetSharedLibraryApps_Request,
              );
              if (
                (ee.Body().set_family_groupid(i),
                ee.Body().set_include_own(p),
                ee.Body().set_include_excluded(_),
                ee.Body().set_language(Config.LANGUAGE),
                ee.Body().set_include_non_games(qt),
                se)
              ) {
                const $e = CSteamID.InitFromAccountID(se, Config.EUNIVERSE);
                ee.Body().set_steamid($e.ConvertTo64BitString());
              }
              const pt = await FGS.FamilyGroupsService.GetSharedLibraryApps(
                y,
                ee,
              );
              return (
                Bt(pt.GetEResult(), "GetSharedLibraryApps"),
                pt
                  .Body()
                  .apps()
                  .filter(He)
                  .map(($e) => $e.toObject())
              );
            },
            enabled: !!n && Ne,
            placeholderData: keepPreviousData,
            select: t?.select,
          });
        }
        function _i(i, t) {
          const e = useQueryClient(),
            n = useActiveAccount(),
            { settings: o } = useParentalSettings(n).data ?? {},
            b = useIsCurrentUserParentalLocked(),
            y = mr(i, t, o, b);
          return useCallback(() => {
            e.invalidateQueries({ queryKey: y });
          }, [e, y]);
        }
        function Ce(i, t) {
          let e = i.sort_as || i.name,
            n = t.sort_as || t.name;
          return stricmp(e, n);
        }
        function ur(i, t) {
          return t.rt_time_acquired - i.rt_time_acquired || Ce(i, t);
        }
        function Jr(i, t, e) {
          if (!i && t.length === 0) return !0;
          const n = e.name?.toLocaleLowerCase(),
            o = i.toLocaleLowerCase(),
            b = n?.includes(o) || e.appid?.toString() == o;
          let y = !0;
          if (e.content_descriptors) {
            for (const p of t)
              if (!e.content_descriptors.includes(p)) {
                y = !1;
                break;
              }
          }
          return b && y;
        }
        function tn(i, t, e, n = []) {
          const o = useMemo(
              () => i?.filter((y) => Jr(e, n, y)) || [],
              [i, e, n],
            ),
            b = useCallback(
              (y, p) => {
                let _ = Ce;
                switch (t) {
                  case "alpha-asc":
                    _ = Ce;
                    break;
                  case "alpha-desc":
                    _ = (qt, se) => Ce(se, qt);
                    break;
                  case "date_acquired-asc":
                    _ = (qt, se) => ur(se, qt);
                    break;
                  case "date_acquired-desc":
                    _ = ur;
                    break;
                }
                return _(y, p);
              },
              [t],
            );
          return useMemo(() => o.slice().sort(b), [o, b]);
        }
        function en(i, t) {
          const e = useActiveServiceTransport(),
            n = useQueryClient(),
            o = useActiveAccount();
          return useMutation({
            mutationFn: async (b) => {
              const y = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmJoinFamilyGroup_Request,
              );
              y.Body().set_family_groupid(i),
                y.Body().set_invite_id(t),
                y.Body().set_nonce(b);
              const p = await FGS.FamilyGroupsService.ConfirmJoinFamilyGroup(
                e,
                y,
              );
              return Bt(p.GetEResult(), "ConfirmJoinFamilyGroup"), p.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ze(o) }),
                n.invalidateQueries({ queryKey: Be(i) }),
                n.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function rn(i, t, e) {
          const n = useActiveServiceTransport(),
            o = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const b = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
              );
              b.Body().set_family_groupid(i),
                b.Body().set_invite_id(t),
                b.Body().set_nonce(e);
              const y =
                await FGS.FamilyGroupsService.ConfirmInviteToFamilyGroup(n, b);
              return Bt(y.GetEResult(), "ConfirmInviteToFamilyGroup"), y.Body();
            },
            onSuccess: () => {
              o.invalidateQueries({ queryKey: Be(i) }),
                o.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function nn(i, t) {
          const e = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              n.Body().set_family_groupid(i), n.Body().set_steamid(t);
              const o =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  e,
                  n,
                );
              return Bt(o.GetEResult(), "ResendInvitationToFamilyGroup"), o;
            },
          });
        }
        function qr(i) {
          let t = [];
          i.sort((n, o) => n.time_start - o.time_start);
          let e = new Map();
          for (const n of i) {
            let o = e.get(n.appid);
            o === void 0
              ? e.set(n.appid, n)
              : n.time_start <= o.time_end
                ? (o.time_end = Math.max(o.time_end, n.time_end))
                : (t.push(o), e.set(n.appid, n));
          }
          for (const n of e.values()) t.push(n);
          return t.sort((n, o) => n.time_start - o.time_start), t;
        }
        function an(i) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: Lr(i),
            queryFn: async () => {
              const e = CProtoBufMsg.Init(
                FS.CPlayer_GetRecentPlaytimeSessionsForChild_Request,
              );
              e.Body().set_steamid(i);
              const n =
                await FS.PlayerService.GetRecentPlaytimeSessionsForChild(t, e);
              Bt(n.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let o = n.Body().toObject().sessions || [];
              return qr(o);
            },
          });
        }
        function sn(i) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: Dr(i),
            queryFn: async () => {
              const e = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              e.Body().set_family_groupid(i);
              const n = await FGS.FamilyGroupsService.GetPlaytimeSummary(t, e);
              Bt(n.GetEResult(), "GetPlaytimeSummary");
              let o = n.Body().toObject().entries ?? [];
              o.sort((y, p) => p.seconds_played - y.seconds_played);
              let b = n.Body().toObject().entries_by_owner ?? [];
              return (
                b.sort((y, p) => p.seconds_played - y.seconds_played),
                { borrowed: o, loaned: b }
              );
            },
            enabled: i !== "0",
          });
        }
        function cn(i) {
          const t = useActiveServiceTransport(),
            e = useActiveAccount(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_UndeleteFamilyGroup_Request,
              );
              o.Body().set_family_groupid(i);
              const b = await FGS.FamilyGroupsService.UndeleteFamilyGroup(t, o);
              return Bt(b.GetEResult(), "UndeleteFamilyGroup"), b;
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ze(e) }),
                n.invalidateQueries({ queryKey: Be(i) }),
                n.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function dn(i, t) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const o = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              o.Body().set_family_groupid(i), o.Body().set_steamid(t);
              const b = await FGS.FamilyGroupsService.ForceAcceptInvite(e, o);
              return Bt(b.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ze(t) }),
                n.invalidateQueries({ queryKey: Be(i) }),
                n.invalidateQueries({ queryKey: ae(i) });
            },
          });
        }
        function ln(i, t) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: Nr(i, t),
            queryFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              n.Body().set_family_groupid(i), n.Body().set_steamid(t);
              const o = await FGS.FamilyGroupsService.GetInviteCheckResults(
                e,
                n,
              );
              return (
                Bt(o.GetEResult(), "GetInviteCheckResults"), o.Body().toObject()
              );
            },
          });
        }
        function on(i, t) {
          return i.members().find((e) => e.steamid() == t);
        }
        var pr = W(71742),
          ke = W(16277),
          Rr = Object.defineProperty,
          Fr = Object.getOwnPropertyDescriptor,
          Ve = (i, t, e, n) => {
            for (
              var o = n > 1 ? void 0 : n ? Fr(t, e) : t, b = i.length - 1, y;
              b >= 0;
              b--
            )
              (y = i[b]) && (o = (n ? y(t, e, o) : y(o)) || o);
            return n && o && Rr(t, e, o), o;
          };
        function wr(i) {
          const t = i?.reported_content_id
            ? i.reported_content_id
            : `${i?.subject_type}-${i?.subject_group_id}-${i?.subject_id}`;
          return `${St.TS.COMMUNITY_BASE_URL}my/reportedcontent/${t}`;
        }
        const Cr = {
          [a.Vv.wY]: {
            displayNameLoc: "#SteamNotification_HelpRequest_Author",
            titleLoc: "#SteamNotification_HelpRequest_Title",
            bodyLoc: (i) => ({
              locString: "#SteamNotification_HelpRequest_Body",
              params: [i.ticket],
            }),
            link: (i) => St.TS.HELP_BASE_URL + "wizard/HelpRequest/" + i.ticket,
          },
          [a.Vv.wp]: {
            displayNameLoc: "#SteamNotifications_MajorSale",
            titleLoc: (i) => ({ locString: i.title }),
            bodyLoc: (i) =>
              (0, Oe.Y2)() && i.link.includes("https://store.steampowered.com")
                ? "#SteamNotifications_MajorSale_SteamChina_Title"
                : i.body,
            image: (i) => i.image,
            link: (i) =>
              (0, Oe.Y2)() && i.link.includes("https://store.steampowered.com")
                ? i.link.replace(
                    "https://store.steampowered.com",
                    St.TS.STORE_BASE_URL,
                  )
                : i.link,
          },
          [a.Vv.e9]: {
            displayNameLoc: (i) => i.display_name,
            titleLoc: (i) => i.title,
            bodyLoc: (i) => i.body,
            image: (i) => i.image,
            link: (i) => i.link,
          },
          [a.Vv.oe]: {
            titleLoc: "#SteamNotification_ModeratorMessage_Title",
            link: (i) =>
              St.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + i.msgid,
          },
          [a.Vv.FK]: {
            displayNameLoc: (i) =>
              i.is_limited_launch
                ? "#Notification_LimitedLaunchInviteTitle"
                : "#Notification_PlaytestInviteTitle",
            titleLoc: (i) =>
              i.is_limited_launch
                ? "#Notification_LimitedLaunchInviteBody"
                : "#Notification_PlaytestInviteBody",
            image: (i) => i.appid,
            link: (i) =>
              St.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + i.appid,
          },
          [a.Vv.Iz]: {
            titleLoc: (i) => {
              switch (i.status) {
                case ke.ZQ.hj:
                  return "#Notification_ReportedContentAction_Received";
                case ke.ZQ.O0:
                  return "#Notification_ReportedContentAction_Sanctioned";
                case ke.ZQ.WI:
                  return "#Notification_ReportedContentAction_Acquitted";
                case ke.ZQ.xX:
                  return "#Notification_ReportedContentAction_DisputeReceived";
                case ke.ZQ.qy:
                  return "#Notification_ReportedContentAction_DisputeSanctioned";
                case ke.ZQ.Si:
                  return "#Notification_ReportedContentAction_DisputeAcquitted";
                default:
                  return "#Notification_ReportedContentAction_Unknown";
              }
            },
            link: (i) => wr(i),
          },
        };
        function br(i) {
          if (i !== void 0) return Cr[i];
        }
        function Mr(i) {
          return !!br(i);
        }
        const Gr = {
          [a.Vv.Rj]: {
            steamidAttribute: "inviter",
            titleLoc: "#SteamNotifications_FamilyInviteTitle",
            bodyLoc: "#SteamNotifications_FamilyInviteBody",
            url: (i) =>
              `${St.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${i.familyid}`,
          },
          [a.Vv.Sx]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
            url: () =>
              `${St.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [a.Vv.Cz]: {
            steamidAttribute: "requestor_steamid",
            titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
            bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
            url: (i) => Pr(i.familyid, i.request_id),
          },
          [a.Vv.HN]: {
            steamidAttribute: "responder_steamid",
            titleLoc: (i) =>
              i.action == Gt
                ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
                : "",
            bodyLoc: (i) =>
              i.action == Gt
                ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
                : "",
            url: () =>
              `${St.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [a.Vv.j3]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
            url: () =>
              `${St.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [a.Vv.uH]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (i) =>
              i.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
            bodyLoc: (i) =>
              i.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
            url: () =>
              `${St.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [a.Vv.JN]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (i) =>
              i.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
            bodyLoc: (i) =>
              i.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
            url: () =>
              `${St.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
        };
        function zr(i) {
          if (i !== void 0) return Gr[i];
        }
        function Sr(i) {
          return !!zr(i);
        }
        const _r = [
          a.Vv.v_,
          a.Vv.pZ,
          a.Vv.K,
          a.Vv.hW,
          a.Vv.XJ,
          a.Vv.an,
          a.Vv.Y9,
          a.Vv.YE,
          a.Vv.bh,
          a.Vv.js,
          a.Vv.mr,
        ];
        function Tr(i) {
          return _r.findIndex((t) => t == i) != null;
        }
        function ti(i) {
          return i.hidden ? !1 : ei(i.notification_type) && _e(i.body_data);
        }
        function ei(i) {
          return Mr(i) || Sr(i) || Tr(i);
        }
        var ri = ((i) => (
          (i[(i.New = 0)] = "New"),
          (i[(i.Update = 1)] = "Update"),
          (i[(i.Remove = 2)] = "Remove"),
          i
        ))(ri || {});
        const gn = "Test_",
          ii = 3600 * 48,
          ni = 600,
          vr = !1,
          ar = new Ue.wd("SteamNotificationStore"),
          Ee = ar.Debug,
          Le = ar.Error,
          ai = ar.Warning;
        class De {
          constructor() {
            (0, _t.Gn)(this);
          }
          m_rgNotificationRollups = [];
          m_summary = Ge();
          m_bLoaded = !1;
          m_nUnviewed = 0;
          m_rgNotifyServerRead = [];
          m_rgNotifyServerHidden = [];
          m_keyNotifyServerRead = "";
          m_keyNotifyServerHidden = "";
          m_steamid;
          m_transport;
          m_rgUnreadNotificationIDs = [];
          m_rgNewRollupIDs = new Map();
          m_rgTestNotifications = [];
          m_currentNotificationsData = null;
          m_strRemoteClientID = "";
          m_eTargetClientType = a.rB.D;
          m_fnOnNotificationCallback = null;
          BHasNotificationsData() {
            return this.m_currentNotificationsData != null;
          }
          setTransport(t) {
            this.m_transport = t;
          }
          RegisterOnNotificationCallback(t) {
            this.m_fnOnNotificationCallback = t;
          }
          SetClientFilters(t, e = a.rB.D) {
            (this.m_strRemoteClientID = t), (this.m_eTargetClientType = e);
          }
          NotifyServerNotificationsRead(t) {
            this.m_rgNotifyServerRead.push(...t), this.UpdateServer();
          }
          NotifyServerNotificationsHidden(t) {
            this.m_rgNotifyServerHidden.push(...t), this.UpdateServer();
          }
          BSendToCallbackAsNew(t) {
            return (
              !t.read &&
              !Er(t) &&
              !this.m_rgUnreadNotificationIDs.includes(t.notification_id)
            );
          }
          Dev_AddTestNotification(t) {}
          Dev_UpdateTestNotificationReadState(t, e) {
            const n = this.m_rgTestNotifications.findIndex(
              (o) => o.notification_id == t,
            );
            return n !== -1 && this.m_rgTestNotifications[n].read != e
              ? ((this.m_rgTestNotifications[n].read = e), !0)
              : !1;
          }
          UpdateServer() {
            if (this.m_rgNotifyServerRead.length > 0) {
              const t = L.w.Init(a.V4);
              t.Body().set_notification_ids(this.m_rgNotifyServerRead),
                a.Fn.MarkNotificationsRead(this.m_transport, t) &&
                  (this.m_rgNotifyServerRead = []);
            }
            if (this.m_rgNotifyServerHidden.length > 0) {
              const t = L.w.Init(a.b$);
              t.Body().set_notification_ids(this.m_rgNotifyServerHidden),
                a.Fn.HideNotification(this.m_transport, t) &&
                  (this.m_rgNotifyServerHidden = []);
            }
          }
          MarkItemRead(t, e = !1) {
            let n = this.m_rgNotificationRollups.findIndex(
              (b) => b.item.notification_id == t,
            );
            if (n === -1) {
              e
                ? this.NotifyServerNotificationsRead([t])
                : Le(
                    "Attempted to mark notification read that is not in the notification store",
                  );
              return;
            }
            let o = this.m_rgNotificationRollups[n];
            if (o.item.read) {
              Le("Attempted to mark notification read that is already read");
              return;
            }
            if (((o.item.read = !0), o.rgunread?.length > 0)) {
              this.ReduceNewTotals(o.type, o.rgunread.length);
              let b = [];
              o.rgunread.forEach((y) => {
                b.push(y);
              }),
                o.rgread.push(...o.rgunread),
                (o.rgunread = []),
                this.NotifyServerNotificationsRead(b);
            }
          }
          MarkItemHidden(t) {
            let e = this.m_rgNotificationRollups.findIndex(
              (o) => o.item.notification_id == t,
            );
            if (e === -1) {
              Le(
                "Attempted to mark notification hidden that is not in the notification store",
              );
              return;
            }
            let n = this.m_rgNotificationRollups[e];
            (n.item.hidden = !0),
              n.rgunread?.length > 0 &&
                this.ReduceNewTotals(n.type, n.rgunread?.length),
              this.NotifyServerNotificationsHidden([
                ...n.rgunread,
                ...n.rgread,
              ]);
          }
          ReduceNewTotals(t, e) {
            cr(this.m_summary, t, -e);
          }
          MarkAllItemsViewed() {
            const t = L.w.Init(a.nH);
            t.Body().set_remote_client_id(this.m_strRemoteClientID),
              t.Body().set_target_client_type(this.m_eTargetClientType),
              a.Fn.MarkNotificationsViewed(this.m_transport, t),
              (this.m_nUnviewed = 0);
          }
          MarkAllItemsRead(t) {
            let e = [],
              n = [],
              o = 0;
            const b = t ?? this.m_rgNotificationRollups;
            return (
              b.forEach((y, p) => {
                y.rgunread.length > 0 &&
                  (y.rgunread.forEach((_) => {
                    e.push(_);
                  }),
                  n.push(p));
              }),
              e.length > 0 &&
                ((this.m_summary = Object.assign(Ge(), {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                })),
                n.forEach((y) => {
                  let p = b[y];
                  (p.item.read = !0), (p.rgunread = []);
                }),
                this.NotifyServerNotificationsRead(e)),
              e.length + o
            );
          }
          ApplyNotificationsUpdate(t) {
            if (
              (Ee("ApplyNotificationsUpdate", t),
              !t ||
                (!t.notifications?.length &&
                  t.pending_friend_count === void 0 &&
                  t.pending_gift_count === void 0))
            ) {
              Ee("Error: ApplyNotificationsUpdate was called with no data");
              return;
            }
            if (!this.m_currentNotificationsData) {
              Ee(
                "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
              );
              return;
            }
            const e = this.m_currentNotificationsData;
            t.notifications?.forEach((n) => {
              const o = e.notifications.findIndex(
                (b) => b.notification_id == n.notification_id,
              );
              o != -1
                ? Object.assign(e.notifications[o], n)
                : e.notifications.push(n);
            }),
              t.pending_friend_count !== void 0 &&
                (this.m_currentNotificationsData.pending_friend_count =
                  t.pending_friend_count),
              t.pending_gift_count !== void 0 &&
                (this.m_currentNotificationsData.pending_gift_count =
                  t.pending_gift_count),
              t.pending_family_invite_count !== void 0 &&
                (this.m_currentNotificationsData.pending_family_invite_count =
                  t.pending_family_invite_count),
              this.ProcessNotifications();
          }
          ProcessNewNotificationPayload(t) {
            (this.m_currentNotificationsData = JSON.parse(JSON.stringify(t))),
              this.ProcessNotifications();
          }
          ProcessNotifications() {
            let t = [],
              e = Ge(),
              n = 0;
            if (
              (this.m_currentNotificationsData?.notifications?.forEach((o) => {
                this.BExcludeClientTargetedNotification(o) ||
                  (this.m_rgNotifyServerHidden.length > 0 &&
                    this.m_rgNotifyServerHidden.findIndex(
                      (y) => y == o.notification_id,
                    ) !== -1 &&
                    (o.hidden = !0),
                  ti(o) &&
                    (this.m_rgNotifyServerRead.length > 0 &&
                      this.m_rgNotifyServerRead.findIndex(
                        (y) => y == o.notification_id,
                      ) !== -1 &&
                      (o.read = !0),
                    o.read || cr(e, o.notification_type, 1),
                    o.viewed || n++,
                    this.AddNotificationToRollups(t, o)));
              }),
              t.sort((o, b) => o.timestamp - b.timestamp),
              this.m_fnOnNotificationCallback)
            ) {
              for (const o of t)
                if (o.bSendToCallbackAsNew)
                  this.m_rgNewRollupIDs.set(
                    o.rollup_key,
                    JSON.parse(JSON.stringify(o)),
                  ),
                    this.m_fnOnNotificationCallback(o, 0);
                else if (this.m_rgNewRollupIDs.has(o.rollup_key)) {
                  let b = this.m_rgNewRollupIDs.get(o.rollup_key);
                  (b.item.read != o.item.read ||
                    b.item.viewed != o.item.viewed) &&
                    (this.m_rgNewRollupIDs.set(
                      o.rollup_key,
                      JSON.parse(JSON.stringify(o)),
                    ),
                    this.m_fnOnNotificationCallback(o, 1));
                }
              for (const [o, b] of this.m_rgNewRollupIDs)
                t.findIndex((y) => y.rollup_key == o) == -1 &&
                  (this.m_fnOnNotificationCallback(b, 2),
                  this.m_rgNewRollupIDs.delete(o));
            }
            t.reverse(),
              (e.pending_gifts =
                this.m_currentNotificationsData?.pending_gift_count ?? 0),
              (e.pending_invites =
                this.m_currentNotificationsData?.pending_friend_count ?? 0),
              (e.pending_family_invites =
                this.m_currentNotificationsData?.pending_family_invite_count ??
                0),
              (this.m_rgNotificationRollups = t.slice()),
              (this.m_summary = e),
              (this.m_bLoaded = !0),
              (this.m_nUnviewed = n);
          }
          BExcludeClientTargetedNotification(t) {
            const e = _e(t.body_data);
            return e
              ? e.remote_client_id &&
                this.m_strRemoteClientID != e.remote_client_id
                ? !0
                : !!(
                    e.target_client_types &&
                    !(this.m_eTargetClientType & e.target_client_types)
                  )
              : !1;
          }
          BReplaceRollupItem(t, e) {
            return t.read != e.read
              ? e.read
              : (t.read && e.read) || e.viewed == t.viewed
                ? e.timestamp < t.timestamp
                : !t.viewed && e.viewed
                  ? !0
                  : t.viewed && e.viewed
                    ? e.viewed < t.viewed
                    : !1;
          }
          AddNotificationToRollups(t, e) {
            const n = this.BSendToCallbackAsNew(e);
            n && this.m_rgUnreadNotificationIDs.push(e.notification_id);
            let o = e.notification_type;
            switch (o) {
              case a.Vv.v_:
                {
                  const at = tr(e);
                  if (!at) return;
                  const He =
                    "comment_" +
                    at.owner_steam_id?.GetAccountID() +
                    "_" +
                    at.forum_id +
                    "_" +
                    at.topic_id +
                    (at.brate_limited ? "_ratelimited" : "");
                  let ee = t.findIndex((pt) => pt.rollup_key == He);
                  if (ee == -1)
                    t.push({
                      type: o,
                      rollup_key: He,
                      item: e,
                      rollup_count: 1,
                      timestamp: e.timestamp,
                      rgunread: e.read ? [] : [e.notification_id],
                      rgread: e.read ? [e.notification_id] : [],
                      bSendToCallbackAsNew: n,
                      url: jr(at),
                    });
                  else {
                    let pt = t[ee];
                    this.BReplaceRollupItem(e, pt.item) &&
                      ((!vr || pt.item.read) && (pt.url = jr(at)),
                      (pt.item = e),
                      (pt.timestamp = e.timestamp),
                      (pt.bSendToCallbackAsNew = n)),
                      (pt.rollup_count = pt.rollup_count + 1),
                      e.read
                        ? pt.rgread.push(e.notification_id)
                        : pt.rgunread.push(e.notification_id);
                  }
                }
                break;
              case a.Vv.hW:
                const b = tr(e);
                if (b) {
                  const at = "item_" + b.appid;
                  this.AddNotificationToRollupByAppID(t, e, at, o, n, b.appid);
                }
                break;
              case a.Vv.Y9:
                const y = tr(e)?.appid.toString();
                if (y) {
                  const at = "asyncgame_" + y;
                  this.AddNotificationToRollupByAppID(t, e, at, o, n, y);
                }
                break;
              case a.Vv.Iz:
                const p = tr(e),
                  _ = p?.report_id,
                  qt = wr(p),
                  se = `contentreport_${_}`;
                let Ne = t.findIndex((at) => at.rollup_key == se);
                if (Ne == -1)
                  t.push({
                    type: o,
                    rollup_key: se,
                    item: e,
                    rollup_count: 1,
                    timestamp: e.timestamp,
                    rgunread: e.read ? [] : [e.notification_id],
                    rgread: e.read ? [e.notification_id] : [],
                    bSendToCallbackAsNew: n,
                    url: qt,
                  });
                else {
                  let at = t[Ne];
                  this.BReplaceRollupItem(e, at.item) &&
                    ((!vr || at.item.read) && (at.url = qt),
                    (at.item = e),
                    (at.timestamp = e.timestamp),
                    (at.bSendToCallbackAsNew = n)),
                    (at.rollup_count = at.rollup_count + 1),
                    e.read
                      ? at.rgread.push(e.notification_id)
                      : at.rgunread.push(e.notification_id);
                }
                break;
              default:
                t.push({
                  type: o,
                  rollup_key: e.notification_id,
                  item: e,
                  timestamp: e.timestamp,
                  rgunread: e.read ? [] : [e.notification_id],
                  rgread: e.read ? [e.notification_id] : [],
                  bSendToCallbackAsNew: n,
                });
                break;
            }
          }
          AddNotificationToRollupByAppID(t, e, n, o, b, y) {
            let p = t.findIndex((_) => _.rollup_key == n);
            if (p == -1)
              t.push({
                type: o,
                rollup_key: n,
                item: e,
                rollup_count: 1,
                timestamp: e.timestamp,
                rgunread: e.read ? [] : [e.notification_id],
                rgread: e.read ? [e.notification_id] : [],
                bSendToCallbackAsNew: b,
              });
            else {
              let _ = t[p];
              this.BReplaceRollupItem(e, _.item) &&
                ((_.item = e),
                (_.timestamp = e.timestamp),
                (_.bSendToCallbackAsNew = b)),
                (_.rollup_count = _.rollup_count + 1),
                e.read
                  ? _.rgread.push(e.notification_id)
                  : _.rgunread.push(e.notification_id);
            }
          }
        }
        Ve([_t.sH], De.prototype, "m_rgNotificationRollups", 2),
          Ve([_t.sH], De.prototype, "m_summary", 2),
          Ve([_t.sH], De.prototype, "m_bLoaded", 2),
          Ve([_t.sH], De.prototype, "m_nUnviewed", 2),
          Ve([_t.XI], De.prototype, "ProcessNotifications", 1);
        function Ge() {
          return {
            comments: 0,
            inventory_items: 0,
            invites: 0,
            gifts: 0,
            offline_messages: 0,
            trade_offers: 0,
            async_game_updates: 0,
            moderator_messages: 0,
            help_request_replies: 0,
            general: 0,
            wishlist: 0,
            pending_gifts: 0,
            pending_invites: 0,
            major_sale: 0,
            parental_feature_requests: 0,
            family_invites: 0,
            family_purchase_requests: 0,
            family_purchase_request_responses: 0,
            pending_family_invites: 0,
            parental_playtime_requests: 0,
            parental_feature_access_responses: 0,
            parental_playtime_responses: 0,
            requested_game_added: 0,
            playtest_invites: 0,
          };
        }
        async function si(i, t, e, n, o, b = !0, y = !1) {
          if (!t) throw new Error("Invalid steamid for GetSteamNotifications");
          const p = L.w.Init(a.GG);
          p.Body().set_language(e),
            p.Body().set_include_read(b),
            p.Body().set_include_pinned_counts(!0),
            p.Body().set_include_confirmation_count(y);
          const _ = await a.Fn.GetSteamNotifications(i, p);
          if (_.GetEResult() !== h.R)
            throw (
              (ai(
                `Received error from GetSteamNotifications. Result ${_.GetEResult()}. Transport ${_.Hdr().transport_error()}`,
              ),
              new Error(`Error from GetSteamNotifications: ${_.GetEResult()}`))
            );
          const qt = _.Body().toObject();
          return (
            n &&
              (qt.notifications = qt.notifications?.filter(
                (se) => !yr(se.notification_type, n, o),
              )),
            qt
          );
        }
        async function ci(i, t) {
          if (!i || !i.steamid || !i.contextid || !i.appid || !i.assetid)
            return Le("Item notification missing required attributes"), null;
          const e = L.w.Init(f.z9);
          e.Body().set_steamid(i.steamid),
            e.Body().set_contextid(i.contextid),
            e.Body().set_appid(parseInt(i.appid)),
            e.Body().set_get_descriptions(!0),
            e.Body().set_language(St.TS.LANGUAGE);
          let n = new f.ur();
          n.add_assetids(i.assetid), e.Body().set_filters(n);
          const o = await f.tB.GetInventoryItemsWithDescriptions(t, e);
          return o.GetEResult() !== h.R
            ? (Le(
                "Request for steam item metadata did not succeed",
                o.GetEResult(),
              ),
              null)
            : (o.Body().toObject().descriptions[0] ?? null);
        }
        const di = "ItemMetadata";
        function li(i) {
          return [
            `${di}_${i?.steamid}_${i?.appid}_${i?.contextid}_${i?.assetid}`,
          ];
        }
        async function Bn(i, t) {
          if (!t) return [];
          const e = CProtoBufMsg.Init(
            CSteamNotification_GetPreferences_Request,
          );
          let n = await SteamNotificationService.GetPreferences(i, e);
          return n.GetEResult() != k_EResultOK
            ? (Le("Getting notification preferences failed " + n.GetEResult()),
              [])
            : n.Body().toObject().preferences;
        }
        function oi(i, t, e) {
          let n = sr(a.Vv.hW, i.body_data);
          n.steamid = t;
          let o = (0, de.I)({
            queryKey: li(n),
            queryFn: async () => ci(n, e),
            staleTime: 1 / 0,
          });
          return o.isSuccess ? o.data : null;
        }
        function jr(i) {
          let t = `comment/${i.comment_type}/bounce/${i.owner_steam_id.ConvertTo64BitString()}/${i.forum_id}/?feature2=${i.topic_id}`;
          return i.last_post > 0 && (t += "&tscn=" + (i.last_post - 1)), t;
        }
        function hr(i) {
          return i.comment_type == I.Yd;
        }
        function Wr(i) {
          return i?.bhas_friend;
        }
        function xr(i) {
          return i.comment_type == I.Yd;
        }
        function gi(i) {
          return hr(i) || Wr(i);
        }
        function Bi(i) {
          return xr(i);
        }
        function _e(i) {
          if (!i) return null;
          try {
            return JSON.parse(i);
          } catch {
            Ee("Steam notification in invalid format:", i);
          }
          return null;
        }
        function tr(i) {
          return sr(i.notification_type, i.body_data);
        }
        function fi(i) {
          return sr(i.type, i.item?.body_data);
        }
        function sr(i, t) {
          let e = _e(t);
          if (!e) return null;
          switch (i) {
            case a.Vv.K:
              return e.gifter_account;
            case a.Vv.YE:
              return {
                responder_steamid: e.responder_steamid,
                package_id: e.package_id,
                bundle_id: e.bundle_id,
              };
            case a.Vv.an:
              return parseInt(e.sender);
            case a.Vv.XJ:
              return {
                appid: e.appid,
                count: e.count ?? 1,
                appids: e.appids ?? [],
              };
            case a.Vv.Y9:
              return !e.appid ||
                !e.state ||
                (e.state != Se.GO && e.state != Se.cf)
                ? (Ee("Async game notification invalid data", t), null)
                : { appid: parseInt(e.appid), state: parseInt(e.state) };
            case a.Vv.v_:
              let n = {
                owner_steam_id: e.owner_steam_id
                  ? new ve.b(e.owner_steam_id)
                  : null,
                bclan_account: Ye(e.bclan_account),
                title: e.title,
                comment: e.text,
                time: e.last_post,
                comment_type: Number(e.type),
                topic_id: e.topic_id,
                forum_id: e.forum_id,
                account_steam_id: e.account_id
                  ? ve.b.InitFromAccountID(e.account_id)
                  : null,
                bhas_friend: Ye(e.bhas_friend),
                bis_forum: Ye(e.bis_forum),
                last_post: e.last_post,
                bsubscribed: Ye(e.subscribed),
                bis_owner: Ye(e.bis_owner),
                brate_limited: !!e.brate_limited,
              };
              return (
                e.json_data &&
                  (n.json_data = {
                    app_id: parseInt(e.json_data.app_id),
                    file_type: parseInt(e.json_data.file_type),
                    title: e.json_data.title,
                  }),
                n
              );
            case a.Vv.pZ:
              return {
                requestorID: parseInt(e.requestor_id),
                state: e.state ? parseInt(e.state) : A.abL,
              };
            case a.Vv.hW:
              return {
                appid: parseInt(e.app_id),
                assetid: e.asset_id ?? "",
                contextid: e.context_id ?? "",
              };
            case a.Vv.js:
              return {
                url: e.url ?? "",
                strGameName: e.content_app_name ?? "",
                mediaType: e.media_type ?? "clip",
                secDuration: parseFloat(e.duration_seconds ?? 0),
                nSize: parseInt(e.file_size ?? 0),
                strMachineName: e.machine_name,
                rtExpiration: e.expiration,
                thumbnailURL: e.thumbnail_url,
              };
            case a.Vv.Iz:
              return {
                report_id: e.report_id ?? "",
                reported_content_id: e.reported_content_id ?? "",
                subject_type: e.subject_type ?? 0,
                subject_group_id: e.subject_group_id ?? "0",
                subject_id: e.subject_id ?? "0",
                status: e.status ?? 0,
              };
            default:
              return (
                Ee(
                  "GetCustomNotificationDataByType called with unexpected type:" +
                    i,
                  t,
                ),
                null
              );
          }
        }
        function Ye(i) {
          if (typeof i > "u") return !1;
          if (typeof i == "number") return i > 0;
          if (typeof i == "string")
            switch (i.toLowerCase()?.trim()) {
              case "true":
              case "1":
                return !0;
              default:
                return !1;
            }
          return Ee("notification contained unexpected boolean value"), !1;
        }
        function Or(i) {
          let t = 0;
          return (
            (function (n) {
              return Object.keys(n);
            })(i).forEach((n) => {
              n != "pending_gifts" && n != "pending_invites" && (t += i[n]);
            }),
            t
          );
        }
        const mi = {
          [a.Vv.Jo]: { rollup_field: void 0, eFeature: void 0 },
          [a.Vv.yh]: { rollup_field: void 0, eFeature: void 0 },
          [a.Vv.K]: { rollup_field: "gifts", eFeature: D.uX },
          [a.Vv.v_]: { rollup_field: "comments", eFeature: D.qR },
          [a.Vv.hW]: { rollup_field: "inventory_items", eFeature: D.WJ },
          [a.Vv.pZ]: { rollup_field: "invites", eFeature: D.M },
          [a.Vv.wp]: { rollup_field: "major_sale", eFeature: D.ip },
          [a.Vv.Ol]: { rollup_field: void 0, eFeature: void 0 },
          [a.Vv.XJ]: { rollup_field: "wishlist", eFeature: D.ip },
          [a.Vv.an]: { rollup_field: "trade_offers", eFeature: D.ut },
          [a.Vv.e9]: { rollup_field: "general", eFeature: D.uX },
          [a.Vv.wY]: { rollup_field: "help_request_replies", eFeature: D.uX },
          [a.Vv.Y9]: { rollup_field: "async_game_updates", eFeature: D.uX },
          [a.Vv.oe]: { rollup_field: "moderator_messages", eFeature: D.qR },
          [a.Vv.Sx]: {
            rollup_field: "parental_feature_requests",
            eFeature: D.uX,
          },
          [a.Vv.Rj]: { rollup_field: "family_invites", eFeature: D.uX },
          [a.Vv.Cz]: {
            rollup_field: "family_purchase_requests",
            eFeature: D.uX,
          },
          [a.Vv.j3]: {
            rollup_field: "parental_playtime_requests",
            eFeature: D.uX,
          },
          [a.Vv.HN]: {
            rollup_field: "family_purchase_request_responses",
            eFeature: D.uX,
          },
          [a.Vv.uH]: {
            rollup_field: "parental_feature_access_responses",
            eFeature: D.uX,
          },
          [a.Vv.JN]: {
            rollup_field: "parental_playtime_responses",
            eFeature: D.uX,
          },
          [a.Vv.YE]: { rollup_field: "requested_game_added", eFeature: D.uX },
          [a.Vv.js]: { rollup_field: void 0, eFeature: D.uX },
          [a.Vv.bh]: { rollup_field: void 0, eFeature: D.uX },
          [a.Vv.FK]: { rollup_field: "playtest_invites", eFeature: D.ip },
          [a.Vv.mr]: { rollup_field: void 0, eFeature: D.ut },
          [a.Vv.Iz]: { rollup_field: void 0, eFeature: D.uX },
        };
        function Ir(i) {
          const t = mi[i];
          return (0, pr.wT)(!!t, `Missing notification type data for ${i}`), t;
        }
        function yr(i, t, e) {
          if (!t) return !1;
          const n = Ir(i);
          return (0, Ur.EC)(t, n?.eFeature ?? D.JC, e);
        }
        function cr(i, t, e) {
          (0, _t.h5)(() => {
            const n = Ir(t);
            n?.rollup_field &&
              (i[n.rollup_field] = Math.max(0, i[n.rollup_field] + e));
          });
        }
        function ui(i) {
          return !i.viewed || i.viewed + ni > (0, xe._2)();
        }
        function Er(i) {
          return i.viewed && i.viewed + ii < (0, xe._2)();
        }
        function fn(i) {
          return (
            Or(i) +
              i.pending_gifts +
              i.pending_invites +
              i.pending_family_invites >
            0
          );
        }
      },
      90297: (ce, Te, W) => {
        "use strict";
        W.d(Te, { Rd: () => jt, R1: () => It, QR: () => Kt });
        var a = W(7850),
          L = W(90626),
          h = W(99412),
          A = W(48453),
          f = W(42993),
          de = W(3692),
          _t = W(68312),
          ve = W(76559),
          D = W(80862),
          I = W(18210);
        function Se(d) {
          if (!d) return;
          const l = typeof d == "string" ? d : d.locString,
            B = typeof d == "string" ? [] : d.params || [];
          if (l) return l[0] !== "#" ? l : (0, I.we)(l, ...B);
        }
        function xe(d, l) {
          return L.useMemo(() => {
            if (d === void 0) return null;
            let B = (0, D.K9)(d);
            const u = (0, D.u5)(l);
            if (!B || !u) return null;
            const M =
                typeof B.displayNameLoc != "function"
                  ? { locString: B.displayNameLoc }
                  : B.displayNameLoc(u),
              v =
                typeof B.titleLoc != "function"
                  ? { locString: B.titleLoc }
                  : B.titleLoc(u),
              m =
                typeof B.bodyLoc != "function"
                  ? { locString: B.bodyLoc }
                  : B.bodyLoc(u),
              w = typeof B.image != "function" ? B.image : B.image(u),
              T = typeof B.link != "function" ? B.link : B.link(u);
            return {
              display_name: Se(M),
              title: Se(v),
              body: Se(m),
              image: w,
              link: T,
            };
          }, [l, d]);
        }
        function Ue(d, l) {
          return L.useMemo(() => {
            const B = d,
              u = (0, D.aq)(B),
              M = (0, D.u5)(l);
            if (!u) return null;
            const v =
                typeof u.titleLoc == "string" ? u.titleLoc : u.titleLoc(M),
              m = typeof u.bodyLoc == "string" ? u.bodyLoc : u.bodyLoc(M),
              w = typeof u.url == "string" ? u.url : u.url(M),
              T =
                typeof u.steamidAttribute == "string"
                  ? u.steamidAttribute
                  : u.steamidAttribute(M),
              S = M && M[T];
            return { strTitleLoc: v, strBodyLoc: m, strUrl: w, steamid: S };
          }, [l, d]);
        }
        function St(d) {
          return L.useMemo(
            () => ((0, D.V4)(d.type) ? (0, D.bP)(d) : null),
            [d],
          );
        }
        var Oe = W(87910),
          Ie = W.n(Oe),
          g = W(36118),
          c = W(51079),
          r = W(72865),
          Ct = W(98609),
          fe = W(35098),
          Gt = W(19298),
          Rt = W(36707),
          ye = W(92264),
          Ke = W(36174),
          Xe = W(93761),
          V = W.n(Xe);
        const Ze = !0;
        function Pe(d) {
          let {
              onActivate: l,
              icon: B,
              body: u,
              eUIMode: M,
              classNames: v,
            } = d,
            m = l,
            w = V().PinnedTemplate;
          return (
            M == h.ogI
              ? (w = V().PinnedTemplateDesktop)
              : M == h.yrU && (w = V().PinnedTemplateWeb),
            (w = (0, Rt.A)(w, v)),
            (0, a.jsx)(Gt.Z, {
              className: w,
              onActivate: m,
              children: (0, a.jsx)("div", {
                className: V().Content,
                children: (0, a.jsxs)("div", {
                  className: V().PinnedBody,
                  children: [
                    (0, a.jsx)("span", { className: V().Icon, children: B }),
                    u,
                  ],
                }),
              }),
            })
          );
        }
        function Je(d) {
          const {
            count: l,
            icon: B,
            onActivate: u,
            strBody: M,
            bAlwaysShow: v,
            eUIMode: m,
            classNames: w,
            visible: T,
          } = d;
          return !l && !v
            ? null
            : (0, a.jsx)(Pe, {
                icon: B,
                body: M,
                onActivate: u,
                eUIMode: m,
                classNames: w,
                visible: T,
              });
        }
        var qe = ((d) => (
          (d[(d.none = 0)] = "none"),
          (d[(d.loadingActive = 1)] = "loadingActive"),
          (d[(d.loadingComplete = 2)] = "loadingComplete"),
          d
        ))(qe || {});
        function le(d) {
          let {
            nUnread: l,
            location: B,
            eUIMode: u,
            bLoading: M,
            footer: v,
            bNewIndicator: m,
          } = d;
          const [w, T] = L.useState(M ? 1 : 0),
            [S, j] = L.useState(void 0);
          L.useEffect(() => {
            w == 1 && !M ? T(2) : w == 2 && M && T(1);
          }, [w, M]),
            L.useEffect(() => {
              let Y =
                parseInt(V().loadinganimationiterationcount) *
                parseInt(V().loadinganimationduration) *
                1e3;
              const k = window.setTimeout(() => T(0), Y);
              return () => window.clearTimeout(k);
            }, []),
            L.useEffect(() => {
              l && l > 0 && S !== V().Unread && B != h.miK && B != h.PN1
                ? j(V().Unread)
                : !l && S == V().Unread && j(V().MarkedRead);
            }, [l, B, S]);
          let x = d.onActivate;
          x || (x = () => console.log("Missing activate function")),
            w == 1 && (x = void 0);
          let O = V().StandardTemplate;
          B == h.oYe
            ? (O = V().AllNotificationsTemplate)
            : B == h.miK
              ? (O = V().DesktopToastTemplate)
              : (u == h.ogI || u == h.yrU) && (O = V().StandardTemplateDesktop);
          let E = null;
          if (w != 0 && B != h.miK && B != h.PN1) {
            let Y = w == 2 ? V().Hide : null;
            E = (0, a.jsxs)("div", {
              className: (0, Rt.A)(V().LoadingTemplate, Y),
              children: [
                (0, a.jsx)("div", {
                  className: (0, Rt.A)(
                    V().StandardLogoDimensions,
                    V().ShimmerLogo,
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: V().Content,
                  children: [
                    (0, a.jsx)("div", {
                      className: (0, Rt.A)(V().Header, V().ShimmerHeader),
                    }),
                    (0, a.jsx)("div", {
                      className: (0, Rt.A)(V().Body, V().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, a.jsxs)(Gt.Z, {
            onActivate: x,
            className: V().StandardTemplateContainer,
            onOptionsButton: d.onOptionsButton,
            onOptionsActionDescription: d.onOptionsButtonDesc,
            children: [
              (0, a.jsxs)("div", {
                className: (0, Rt.A)(O, S),
                children: [
                  (0, a.jsx)("div", {
                    className: V().StandardLogoDimensions,
                    children: d.logo,
                  }),
                  d.personaStatus &&
                    (0, a.jsx)("div", {
                      className: (0, Rt.A)(V().AvatarStatus, d.personaStatus),
                    }),
                  (0, a.jsx)("div", {
                    className: V().Content,
                    children: d.children,
                  }),
                  E,
                  m && (0, a.jsx)(er, { location: B }),
                ],
              }),
              v || null,
            ],
          });
        }
        function er(d) {
          const { location: l } = d;
          return !Ze || l != h.B3I
            ? null
            : (0, a.jsx)("div", {
                className: V().NewIndicator,
                children: (0, a.jsx)(g.jlt, {}),
              });
        }
        function oe(d) {
          let {
            icon: l,
            title: B,
            timestamp: u,
            location: M,
            fnRenderTimestamp: v,
          } = d;
          const m = !!u && (M == h.B3I || M == h.oYe);
          let w;
          return (
            M == h.oYe ? (w = rr) : (w = v ?? Fe),
            (0, a.jsxs)("div", {
              className: V().Header,
              children: [
                (0, a.jsx)(pe, { icon: l }),
                !!B && (0, a.jsx)(Re, { title: B }),
                m && w({ timestamp: u }),
              ],
            })
          );
        }
        function pe(d) {
          return (0, a.jsxs)(a.Fragment, {
            children: [
              !!d.icon &&
                (0, a.jsx)("div", { className: V().Icon, children: d.icon }),
              " ",
            ],
          });
        }
        function Re(d) {
          return (0, a.jsx)("div", { className: V().Title, children: d.title });
        }
        function re(d) {
          let l = (0, Rt.A)(
            V().StandardNotificationDescription,
            d.multiline && V().Multiline,
          );
          return (0, a.jsx)("div", { className: l, children: d.children });
        }
        function ie(d) {
          let l = (0, Rt.A)(
            V().StandardNotificationSubText,
            d.multiline && V().Multiline,
          );
          return (0, a.jsx)("div", { className: l, children: d.children });
        }
        function rr(d) {
          if (d.timestamp === void 0) return null;
          let l = new Date(),
            B = new Date(d.timestamp * 1e3),
            u = (0, ye.KC)(d.timestamp);
          return (
            (0, Ke.JD)(l, B) ||
              (u = (0, ye._l)(d.timestamp, !1, !1, !1) + " " + u),
            (0, a.jsx)("div", { className: V().Timestamp, children: u })
          );
        }
        function Fe(d) {
          if (d.timestamp === void 0) return null;
          let l = new Date(),
            B = new Date(d.timestamp * 1e3),
            u = (0, Ke.JD)(l, B)
              ? (0, ye.KC)(d.timestamp)
              : (0, ye._l)(d.timestamp, !1, !1, !1);
          return (0, a.jsx)("div", { className: V().Timestamp, children: u });
        }
        function dr(d) {
          const { text: l } = d;
          return jsx("div", { className: styles.BottomBar, children: l });
        }
        function lr(d) {
          let {
              playerName: l,
              nickName: B,
              parenthesizeNickNames: u,
              state: M,
            } = d,
            v = !!B,
            m = v && !u,
            w = m ? B : l,
            T = M == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", { className: classnames(T), children: w }),
              u &&
                v &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", B, ")"],
                }),
              m &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        var st = W(25236),
          rt = W(68495),
          ft = W(3166);
        function J(d) {
          return d == h.PN1;
        }
        function mt(d, l) {
          return L.useCallback(
            (B) => {
              d && d(B), l && l();
            },
            [d, l],
          );
        }
        var ct = W(97786),
          R = W.n(ct);
        function Zt(d) {
          let {
              onActivate: l,
              onDismiss: B,
              logo: u,
              icon: M,
              title: v,
              body: m,
              personaStatus: w,
              className: T,
              singleLineOnly: S,
              fullWidth: j,
            } = d,
            x = mt(l, B),
            O = (E) => {
              E.button == 1 && B && B();
            };
          return (0, a.jsxs)(Gt.Z, {
            className: (0, Rt.A)(R().ShortTemplate, !S && R().TwoLine, T),
            onActivate: x,
            onMouseDown: O,
            children: [
              (0, a.jsx)("div", {
                className: R().ShortLogoDimensions,
                children: u,
              }),
              d.personaStatus &&
                (0, a.jsx)("div", {
                  className: (0, Rt.A)(R().AvatarStatus, w),
                }),
              (0, a.jsxs)("div", {
                className: (0, Rt.A)(R().Content, j && R().FullWidth),
                children: [
                  (0, a.jsxs)("div", {
                    className: R().Header,
                    children: [
                      !!M &&
                        (0, a.jsx)("div", { className: R().Icon, children: M }),
                      (0, a.jsx)("div", { className: R().Title, children: v }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: R().Body, children: m }),
                ],
              }),
            ],
          });
        }
        var ge = W(92012),
          X = W.n(ge),
          ut = W(813),
          q = W(40358),
          Tt = W(21721);
        function Ae(d) {
          switch (d) {
            case A.Vv.wp:
              return (0, a.jsx)(g.ilR, {});
            case A.Vv.wY:
              return (0, a.jsx)(g.Cv4, {});
            default:
              return (0, a.jsx)(g.Qte, {});
          }
        }
        function Qe(d) {
          let {
            fallbackLogo: l,
            data: B,
            location: u,
            icon: M,
            timestamp: v,
            fnRenderTimestamp: m,
            onHide: w,
          } = d;
          const T = typeof B?.image == "number",
            S = T ? { appid: B.image } : void 0,
            { data: j } = (0, q.J$)(S),
            { data: x } = (0, q.lv)(S),
            O = B?.display_name ?? "",
            E = B?.title ?? B?.body,
            Y = B?.title ? B.body : null,
            k = J(u),
            U = S && (!j || !x),
            [Q, G] = L.useState(!1),
            Pt = () => G(!0);
          let $ = null;
          if (T) $ = tt(x, l, k);
          else {
            const Ft = k ? X().ShortLogoDimensions : X().StandardLogoDimensions;
            $ =
              B?.image && !Q
                ? (0, a.jsx)("img", {
                    className: Ft,
                    src: B.image,
                    onError: Pt,
                  })
                : l;
          }
          return k
            ? (0, a.jsx)(Zt, { ...d, logo: $, icon: M, title: O, body: E })
            : (0, a.jsx)(C, {
                children: (0, a.jsxs)(le, {
                  logo: $,
                  bLoading: U,
                  ...d,
                  children: [
                    (0, a.jsx)(oe, {
                      icon: M,
                      title: O,
                      timestamp: v,
                      location: u,
                      fnRenderTimestamp: m,
                    }),
                    (0, a.jsx)(re, { multiline: !Y, children: E }),
                    !!Y && (0, a.jsx)(ie, { children: Y }),
                    w ? (0, a.jsx)(F, { onHide: w }) : null,
                  ],
                }),
              });
        }
        function Jt(d) {
          let {
            displayName: l,
            location: B,
            icon: u,
            timestamp: M,
            fnRenderTimestamp: v,
            onHide: m,
          } = d;
          const w = J(B),
            T = (0, I.we)("#SteamNotifications_TradeOffer_Title"),
            S = w
              ? (0, I.we)("#SteamNotifications_TradeOffer_Body_Short", l ?? "")
              : (0, I.we)("#SteamNotifications_TradeOffer_Body"),
            j = (0, I.we)(
              "#SteamNotifications_TradeOffer_Description",
              l ?? "",
            ),
            x = !l;
          return w
            ? (0, a.jsx)(Zt, {
                ...d,
                logo: d.logo,
                icon: d.icon,
                title: T,
                body: S,
              })
            : (0, a.jsx)(C, {
                children: (0, a.jsxs)(le, {
                  bLoading: x,
                  ...d,
                  children: [
                    (0, a.jsx)(oe, {
                      icon: u,
                      title: T,
                      timestamp: M,
                      location: B,
                      fnRenderTimestamp: v,
                    }),
                    (0, a.jsx)(re, { children: S }),
                    (0, a.jsx)(ie, { children: j }),
                    m ? (0, a.jsx)(F, { onHide: m }) : null,
                  ],
                }),
              });
        }
        const s = (d) => {
          let {
            location: l,
            icon: B,
            timestamp: u,
            fnRenderTimestamp: M,
            onHide: v,
          } = d;
          const m = J(l),
            w = (0, I.we)("#SteamNotifications_TradeReversal_Title"),
            T = m
              ? (0, I.we)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, I.we)("#SteamNotifications_TradeReversal_Body"),
            S = (0, I.we)("#SteamNotifications_TradeReversal_Description");
          return m
            ? (0, a.jsx)(Zt, {
                ...d,
                logo: d.logo,
                icon: d.icon,
                title: w,
                body: T,
              })
            : (0, a.jsx)(C, {
                children: (0, a.jsxs)(le, {
                  ...d,
                  children: [
                    (0, a.jsx)(oe, {
                      icon: B,
                      title: w,
                      timestamp: u,
                      location: l,
                      fnRenderTimestamp: M,
                    }),
                    (0, a.jsx)(re, { children: T }),
                    (0, a.jsx)(ie, { children: S }),
                    v ? (0, a.jsx)(F, { onHide: v }) : null,
                  ],
                }),
              });
        };
        function z(d) {
          let {
            senderName: l,
            location: B,
            icon: u,
            timestamp: M,
            fnRenderTimestamp: v,
            onHide: m,
          } = d;
          const w = J(B),
            T = w
              ? (0, I.we)("#Notification_GiftReceived_Body_Short", l ?? "")
              : (0, I.we)("#Notification_GiftReceived_Body"),
            S = l
              ? (0, I.we)("#Notification_GiftReceived_Description", l)
              : null,
            j = (0, I.we)("#Notification_GiftReceived_Title"),
            x = !l;
          return w
            ? (0, a.jsx)(Zt, {
                ...d,
                logo: d.logo,
                icon: d.icon,
                title: j,
                body: T,
              })
            : (0, a.jsx)(C, {
                children: (0, a.jsxs)(le, {
                  bLoading: x,
                  ...d,
                  children: [
                    (0, a.jsx)(oe, {
                      icon: u,
                      title: j,
                      timestamp: M,
                      location: B,
                      fnRenderTimestamp: v,
                    }),
                    (0, a.jsx)(re, { multiline: !S, children: T }),
                    !!S && (0, a.jsx)(ie, { children: S }),
                    m ? (0, a.jsx)(F, { onHide: m }) : null,
                  ],
                }),
              });
        }
        function et(d) {
          let {
            requestorName: l,
            requestorAvatarURL: B,
            fallbackLogo: u,
            data: M,
            location: v,
            icon: m,
            timestamp: w,
            fnRenderTimestamp: T,
            onHide: S,
          } = d;
          const j = J(v);
          let x = "";
          l && M.state == h.UXi
            ? (x = (0, I.we)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : l && M.state == h._UC
              ? (x = (0, I.we)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : l &&
                (x = (0, I.we)("#SteamNotifications_FriendInvite_Description"));
          const [O, E] = L.useState(!1),
            Y = () => E(!0);
          let k = u;
          if (B && !O) {
            const G = M.state == h._UC && v != h.PN1,
              Pt = j ? X().ShortLogoDimensions : X().StandardLogoDimensions;
            k = (0, a.jsxs)(Gt.Z, {
              style: { position: "relative" },
              children: [
                G && (0, a.jsx)(g.GSe, { className: X().FriendIndicator }),
                (0, a.jsx)("img", { className: Pt, src: B, onError: Y }),
              ],
            });
          }
          const U =
              l || (0, I.we)("#SteamNotifications_FriendInvite_Body_Generic"),
            Q = !l;
          return j
            ? (0, a.jsx)(Zt, {
                ...d,
                logo: k,
                icon: d.icon,
                title: (0, I.we)("#Notification_FriendInvite_Title"),
                body: U,
              })
            : (0, a.jsx)(C, {
                children: (0, a.jsxs)(le, {
                  logo: k,
                  bLoading: Q,
                  ...d,
                  children: [
                    (0, a.jsx)(oe, {
                      icon: m,
                      title: (0, I.we)("#Notification_FriendInvite_Title"),
                      timestamp: w,
                      location: v,
                      fnRenderTimestamp: T,
                    }),
                    (0, a.jsx)(re, { multiline: !x, children: U }),
                    !!x && (0, a.jsx)(ie, { children: x }),
                    S ? (0, a.jsx)(F, { onHide: S }) : null,
                  ],
                }),
              });
        }
        function wt(d) {
          let {
            itemState: l,
            fallbackLogo: B,
            data: u,
            location: M,
            icon: v,
            timestamp: m,
            appName: w,
            fnRenderTimestamp: T,
            nUnread: S,
            onHide: j,
          } = d;
          const [x, O] = L.useState(!1),
            E = () => O(!0),
            Y = J(M);
          let k = B;
          if (l?.icon_url && !x) {
            let $ = `${ft.TS.COMMUNITY_CDN_URL}economy/image/${l.icon_url}`,
              Ft = l.background_color ? "#" + l.background_color : null;
            const lt = Y ? X().ShortLogoDimensions : X().StandardLogoDimensions;
            k = (0, a.jsx)(Gt.Z, {
              style: { position: "relative" },
              children: (0, a.jsx)("img", {
                className: lt,
                style: {
                  backgroundColor: Ft ?? void 0,
                  justifyContent: "center",
                },
                src: $,
                onError: E,
              }),
            });
          }
          const U = u.appid == 753;
          let Q = null;
          if (S !== void 0 && S > 1) {
            const $ = S - 1;
            U
              ? (Q = (0, I.we)("#Notification_Item_RollupMore_Steam", $))
              : w
                ? (Q = (0, I.we)(
                    "#Notification_Item_RollupMore_GameName",
                    $,
                    w,
                  ))
                : (Q = (0, I.we)("#Notification_Item_RollupMore", $));
          } else
            w &&
              (Q = U ? w : (0, I.we)("#Notification_Item_Single_GameName", w));
          const G = l?.name
              ? l.name
              : (0, I.we)("#Notification_Item_Body_Generic"),
            Pt = !l;
          if (Y) {
            let $ = "";
            return (
              w
                ? ($ =
                    S > 1
                      ? (0, I.we)("#Notification_Item_Body_Short_Plural", w)
                      : (0, I.we)("#Notification_Item_Body_Short", w))
                : ($ = (0, I.we)("#Notification_Item_Body_Generic")),
              (0, a.jsx)(Zt, {
                ...d,
                logo: k,
                icon: d.icon,
                title: (0, I.we)("#Notification_ItemAnnouncement_Body"),
                body: $,
              })
            );
          }
          return (0, a.jsx)(C, {
            children: (0, a.jsxs)(le, {
              logo: k,
              bLoading: Pt,
              ...d,
              children: [
                (0, a.jsx)(oe, {
                  icon: v,
                  title: (0, I.we)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: m,
                  location: M,
                  fnRenderTimestamp: T,
                }),
                (0, a.jsx)(re, { multiline: !Q, children: G }),
                !!Q && (0, a.jsx)(ie, { children: Q }),
                j ? (0, a.jsx)(F, { onHide: j }) : null,
              ],
            }),
          });
        }
        function bt(d) {
          let {
            fallbackLogo: l,
            data: B,
            location: u,
            icon: M,
            timestamp: v,
            fnRenderTimestamp: m,
            onHide: w,
          } = d;
          const T = J(u),
            S = B.appid ? { appid: B.appid } : void 0,
            { data: j } = (0, q.J$)(S),
            { data: x } = (0, q.lv)(S),
            O = tt(x, l, T),
            E = S && (!j || !x);
          let Y = "";
          return (
            B.state == st.GO
              ? (Y =
                  T && j?.name
                    ? (0, I.we)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        j.name,
                      )
                    : (0, I.we)("#SteamNotification_AsyncGame_Action"))
              : B.state == st.cf &&
                (Y =
                  T && j?.name
                    ? (0, I.we)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        j.name,
                      )
                    : (0, I.we)("#SteamNotification_AsyncGame_Done")),
            T
              ? (0, a.jsx)(Zt, {
                  ...d,
                  logo: O,
                  icon: d.icon,
                  title: (0, I.we)("#SteamNotification_AsyncGame_Title"),
                  body: Y,
                })
              : (0, a.jsx)(C, {
                  children: (0, a.jsxs)(le, {
                    logo: O,
                    bLoading: E,
                    ...d,
                    children: [
                      (0, a.jsx)(oe, {
                        icon: M,
                        title: (0, I.we)("#SteamNotification_AsyncGame_Title"),
                        timestamp: v,
                        location: u,
                        fnRenderTimestamp: m,
                      }),
                      (0, a.jsx)(re, { children: Y }),
                      (0, a.jsx)(ie, { children: j?.name }),
                      w ? (0, a.jsx)(F, { onHide: w }) : null,
                    ],
                  }),
                })
          );
        }
        function dt(d) {
          const {
              title: l,
              body: B,
              logoUrl: u,
              bDataLoading: M,
              icon: v,
              onHide: m,
              location: w,
              timestamp: T,
              fnRenderTimestamp: S,
              onActivate: j,
              personaStatus: x,
            } = d,
            O = J(w),
            E = O ? X().ShortLogoDimensions : X().StandardLogoDimensions,
            Y = (0, a.jsx)(Gt.Z, {
              style: { position: "relative" },
              children: (0, a.jsx)("img", {
                className: E,
                style: { justifyContent: "center" },
                src: u,
              }),
            });
          return O
            ? (0, a.jsx)(Zt, {
                logo: Y,
                icon: d.icon,
                title: l,
                body: B,
                onActivate: j,
                personaStatus: x,
              })
            : (0, a.jsx)(C, {
                children: (0, a.jsxs)(le, {
                  logo: Y,
                  bLoading: M,
                  onActivate: j,
                  personaStatus: x,
                  ...d,
                  children: [
                    (0, a.jsx)(oe, {
                      icon: v,
                      title: l,
                      timestamp: T,
                      location: w,
                      fnRenderTimestamp: S,
                    }),
                    (0, a.jsx)(re, { multiline: !0, children: B }),
                    m ? (0, a.jsx)(F, { onHide: m }) : null,
                  ],
                }),
              });
        }
        function Z(d) {
          let {
              currentUserSteamID: l,
              fallbackLogo: B,
              postedByDisplayName: u,
              postedByAvatarURL: M,
              ownerDisplayName: v,
              data: m,
              location: w,
              icon: T,
              timestamp: S,
              fnRenderTimestamp: j,
              nUnread: x,
              appName: O,
              onHide: E,
              commentTitle: Y,
              commentBody: k,
            } = d,
            U = Y;
          const Q = J(w),
            [G, Pt] = L.useState(!1),
            $ = () => Pt(!0),
            [Ft, lt] = (0, ut.TB)(
              m.bclan_account ? m.owner_steam_id?.GetAccountID() : void 0,
            ),
            te = (0, D.hr)(m) ? u : null,
            zt = (0, D.T4)(m) ? v : null;
          m.comment_type == rt.Yd
            ? m.owner_steam_id?.ConvertTo64BitString() == l
              ? w == h.oYe && te
                ? (U = (0, I.we)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    te,
                  ))
                : (U = (0, I.we)("#SteamNotifications_Comment_Your_Profile"))
              : zt
                ? w == h.oYe && te
                  ? (U = (0, I.we)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      te,
                      zt,
                    ))
                  : (U = (0, I.we)(
                      "#SteamNotifications_Comment_Player_Profile",
                      zt,
                    ))
                : (U = (0, I.we)("#SteamNotifications_Comment_Profile"))
            : m.comment_type == rt.Dq && m.json_data?.file_type == h.pmA
              ? m.owner_steam_id?.ConvertTo64BitString() == l
                ? O
                  ? (U = (0, I.we)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      O,
                    ))
                  : (U = (0, I.we)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : O
                  ? (U = (0, I.we)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      O,
                    ))
                  : (U = (0, I.we)("#SteamNotifications_Comment_Screenshot"))
              : !U && m.json_data?.title && (U = m.json_data.title);
          let ne = null;
          m.brate_limited
            ? m.comment_type == rt.Bv && m.bis_forum && k
              ? (U = (0, I.we)(
                  "#SteamNotifications_Comment_RateLimited_Forum",
                  k,
                ))
              : (U = (0, I.we)("#SteamNotifications_Comment_RateLimited"))
            : m.comment_type == rt.Bv && m.bis_forum && k
              ? (ne = (0, a.jsx)(ie, {
                  children: (0, I.we)(
                    "#SteamNotifications_Comment_NewDiscussion",
                    k,
                  ),
                }))
              : (ne = (0, a.jsxs)(ie, { children: ['"', k, '"'] }));
          let ot = (0, I.we)("#SteamNotifications_Comment"),
            Wt = null;
          if (x !== void 0 && x > 1) {
            const nt = "+" + (x - 1);
            w == h.oYe
              ? (Wt = (0, a.jsx)("div", {
                  className: X().AllNotificationsCommentPlus,
                  children: nt,
                }))
              : (ot = ot + " " + nt);
          }
          let gt = B;
          if (!G) {
            const nt = Q ? X().ShortLogoDimensions : X().StandardLogoDimensions;
            if (M && (0, D.n8)(m)) {
              const Me = m.bhas_friend && w != h.PN1;
              gt = (0, a.jsxs)("div", {
                style: { position: "relative" },
                children: [
                  Me && (0, a.jsx)(g.GSe, { className: X().FriendIndicator }),
                  (0, a.jsx)("img", { className: nt, src: M, onError: $ }),
                ],
              });
            } else
              lt?.avatar_medium_url &&
                (gt = (0, a.jsx)("img", {
                  className: nt,
                  src: lt.avatar_medium_url,
                  onError: $,
                }));
          }
          return Q
            ? (0, a.jsx)(Zt, {
                ...d,
                logo: gt,
                icon: d.icon,
                title: ot,
                body: U,
              })
            : (0, a.jsx)(C, {
                children: (0, a.jsxs)(le, {
                  logo: gt,
                  ...d,
                  children: [
                    (0, a.jsx)(oe, {
                      icon: T,
                      title: ot,
                      timestamp: S,
                      location: w,
                      fnRenderTimestamp: j,
                    }),
                    (0, a.jsx)(re, { children: U }),
                    ne,
                    Wt,
                    E ? (0, a.jsx)(F, { onHide: E }) : null,
                  ],
                }),
              });
        }
        function P(d) {
          let {
            fallbackLogo: l,
            data: B,
            location: u,
            icon: M,
            timestamp: v,
            fnRenderTimestamp: m,
            onHide: w,
          } = d;
          const T = J(u),
            S = B.appid ? { appid: B.appid } : void 0,
            { data: j } = (0, q.J$)(S),
            { data: x } = (0, q.lv)(S),
            { data: O } = (0, q.Q_)(S),
            E = tt(x, l, T),
            Y = S && (!j || !x || !O);
          let k = "",
            U = null;
          if (j) {
            const Q = j.name ?? "";
            (k = Q),
              B.count == 1
                ? T
                  ? (k = (0, I.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, a.jsx)("span", { children: Q }),
                      (0, a.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: O?.formatted_final_price,
                      }),
                    ))
                  : (U = (0, I.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, a.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: O?.formatted_final_price,
                      }),
                    ))
                : B.count == 2
                  ? T
                    ? (k = (0, I.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        Q,
                      ))
                    : (U = (0, I.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : T
                    ? (k = (0, I.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        Q,
                        B.count - 1,
                      ))
                    : (U = (0, I.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        B.count - 1,
                      ));
          } else k = (0, I.we)("#SteamNotifications_Wishlist_Generic");
          return T
            ? (0, a.jsx)(Zt, {
                ...d,
                logo: E,
                icon: d.icon,
                title: (0, I.we)("#SteamNotifications_Wishlist"),
                body: k,
              })
            : (0, a.jsx)(C, {
                children: (0, a.jsxs)(le, {
                  logo: E,
                  bLoading: Y,
                  ...d,
                  children: [
                    (0, a.jsx)(oe, {
                      icon: M,
                      title: (0, I.we)("#SteamNotifications_Wishlist"),
                      timestamp: v,
                      location: u,
                      fnRenderTimestamp: m,
                    }),
                    (0, a.jsx)(re, { multiline: !U, children: k }),
                    !!U && (0, a.jsx)(ie, { children: U }),
                    w ? (0, a.jsx)(F, { onHide: w }) : null,
                  ],
                }),
              });
        }
        function tt(d, l, B = !1) {
          const [u, M] = L.useState(!1),
            v = () => M(!0);
          if (!d || u)
            return (0, a.jsx)(Gt.Z, {
              style: { position: "relative" },
              children: l,
            });
          const m = (0, Tt.b0)(d, "community_icon");
          return B
            ? (0, a.jsx)(Gt.Z, {
                style: { position: "relative" },
                children: (0, a.jsx)("img", {
                  src: m,
                  className: X().ShortLogoDimensions,
                  onError: v,
                }),
              })
            : (0, a.jsxs)(Gt.Z, {
                style: { position: "relative" },
                children: [
                  (0, a.jsx)("img", {
                    className: (0, Rt.A)(X().WishlistBlurImage),
                    src: m,
                    onError: v,
                  }),
                  (0, a.jsx)("img", {
                    src: m,
                    onError: v,
                    style: {
                      position: "absolute",
                      left: 7,
                      top: 7,
                      height: 32,
                      width: 32,
                    },
                  }),
                ],
              });
        }
        function F(d) {
          const l = (u) => {
              u.stopPropagation(), u.preventDefault();
            },
            B = (u) => {
              d.onHide(), u.stopPropagation(), u.preventDefault();
            };
          return (0, a.jsx)("div", {
            className: X().HideButton,
            onClick: B,
            onMouseDown: l,
            children: (0, a.jsx)(g.zHo, {}),
          });
        }
        function C(d) {
          return (0, a.jsx)("div", {
            className: X().SteamNotificationWrapper,
            children: d.children,
          });
        }
        var xt = W(65946),
          vt = W(24544);
        let it = null,
          Mt = !1;
        function me() {
          return it || (it = new vt.s({ BIsFriend: (0, vt.Q)() })), it;
        }
        function Ot() {
          const d = (0, _t.KV)(),
            l = (0, _t.rX)(),
            B = (0, xt.q3)(() => me().m_bInitialized);
          return (
            !B &&
              !Mt &&
              ((Mt = !0),
              it.Init(ft.iA.accountid, d, l).finally(() => (Mt = !1))),
            [B, it]
          );
        }
        function jt(d) {
          let l = null;
          return (
            (0, D.sR)(d)
              ? (l = Ut)
              : (0, D.IC)(d)
                ? (l = yt)
                : ht[d] && (l = ht[d]),
            l
          );
        }
        function It(d) {
          const { rollup: l, uimode: B, location: u } = d,
            M = jt(l.type);
          return M
            ? (0, a.jsx)(c.Ay, {
                controller: "notification",
                method: (0, h.fLp)(B),
                submethod: (0, h.ey3)(u),
                children: (0, a.jsx)(M, { ...d }),
              })
            : null;
        }
        function yt(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = xe(l.item.notification_type, l.item.body_data),
            w = (0, A.p$)(l.type)
              .replace("k_ESteamNotificationType_", "")
              ?.toLowerCase(),
            T = (0, r.aL)(m?.link ?? "#", w),
            S = () =>
              B(() => {
                m?.link && T && window.location.assign(T);
              }, l.item),
            j = (x) => B(() => {}, l.item, x);
          return (0, a.jsx)("a", {
            href: m?.link ? T : "#",
            onMouseDown: j,
            children: (0, a.jsx)(Qe, {
              icon: Ae(l.type),
              onActivate: S,
              fallbackLogo: (0, a.jsx)(g.Qte, {}),
              location: u,
              eUIMode: M,
              data: m,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        }
        function Et(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = `${Ct.TS.COMMUNITY_BASE_URL}my/gamenotifications/`,
            w = () => B(() => window.location.assign(m), l.item),
            T = (j) => B(() => {}, l.item, j),
            S = St(l);
          return (0, a.jsx)("a", {
            href: m,
            onMouseDown: T,
            children: (0, a.jsx)(bt, {
              icon: (0, a.jsx)(g.Qte, {}),
              fallbackLogo: (0, a.jsx)(g.wC1, {}),
              onActivate: w,
              location: u,
              eUIMode: M,
              data: S,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        }
        function ue(d) {
          const {
              steamid: l,
              url: B,
              strTitleLoc: u,
              strBodyLoc: M,
              rollup: v,
              onNotificationClick: m,
              location: w,
              uimode: T,
              onHide: S,
            } = d,
            { data: j } = (0, fe.js)(l),
            x = (U) => m(() => {}, v.item, U),
            O = () => m(() => window.location.assign(B), v.item);
          if (!M) return null;
          const E = !j,
            Y = (0, I.we)(u, j?.m_strPlayerName ?? ""),
            k = (0, I.we)(M, j?.m_strPlayerName ?? "");
          return (0, a.jsx)("a", {
            href: B,
            onMouseDown: x,
            children: (0, a.jsx)(dt, {
              title: Y,
              body: k,
              bDataLoading: E,
              logoUrl: j?.avatar_url_medium,
              icon: (0, a.jsx)(g.Qte, {}),
              onActivate: O,
              location: w,
              eUIMode: T,
              timestamp: v.timestamp,
              nUnread: v.rgunread.length,
              bNewIndicator: (0, D.Rl)(v.item),
              onHide: S,
            }),
          });
        }
        function Ut(d) {
          const l = Ue(d.rollup.type, d.rollup.item.body_data);
          if (!l) return null;
          const { strTitleLoc: B, strBodyLoc: u, strUrl: M, steamid: v } = l;
          return !v || !B || !u
            ? null
            : (0, a.jsx)(ue, {
                steamid: v,
                url: M,
                strTitleLoc: B,
                strBodyLoc: u,
                ...d,
              });
        }
        function we(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = (0, f.LH)(),
            w = St(l),
            T = `${Ct.TS.COMMUNITY_BASE_URL}profiles/${m}/tradeoffers`,
            S = () => B(() => window.location.assign(T), l.item),
            j = (E) => B(() => {}, l.item, E),
            x = ve.b.InitFromAccountID(w),
            { data: O } = (0, fe.js)(x.GetAccountID());
          return (0, a.jsx)("a", {
            href: T,
            onMouseDown: j,
            children: (0, a.jsx)(Jt, {
              logo: (0, a.jsx)(g.Qte, {}),
              icon: (0, a.jsx)(g.h20, {}),
              onActivate: S,
              location: u,
              eUIMode: M,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              displayName: O?.m_strPlayerName,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        }
        const At = (d) => {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = `${Ct.TS.COMMUNITY_BASE_URL}my/tradehistory`,
            w = () => B(() => window.location.assign(m), l.item),
            T = (S) => B(() => {}, l.item, S);
          return (0, a.jsx)("a", {
            href: m,
            onMouseDown: T,
            children: (0, a.jsx)(s, {
              logo: (0, a.jsx)(g.Qte, {}),
              icon: (0, a.jsx)(g.h20, {}),
              onActivate: w,
              location: u,
              eUIMode: M,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        };
        function be(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = (0, f.LH)(),
            w = `${Ct.TS.COMMUNITY_BASE_URL}profiles/${m}/inventory/#pending_gifts`,
            T = () => B(() => window.location.assign(w), l.item),
            S = (E) => B(() => {}, l.item, E),
            j = St(l),
            x = ve.b.InitFromAccountID(j),
            { data: O } = (0, fe.js)(x.GetAccountID());
          return (0, a.jsx)("a", {
            href: w,
            onMouseDown: S,
            children: (0, a.jsx)(z, {
              logo: (0, a.jsx)(g.Qte, {}),
              icon: (0, a.jsx)(g.pD, {}),
              onActivate: T,
              location: u,
              eUIMode: M,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              senderName: O?.m_strPlayerName,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        }
        function kt(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = St(l),
            { data: w } = (0, fe.js)(m.responder_steamid),
            T =
              m.package_id > 0
                ? { packageid: m.package_id }
                : { bundleid: m.bundle_id },
            { data: S } = (0, q.U2)(T),
            j = S ? `app/${S.appid}` : "",
            x = `${Ct.TS.STORE_BASE_URL}${j}`,
            O = () => B(() => window.location.assign(x), l.item),
            E = (Q) => B(() => {}, l.item, Q),
            Y = !w || !S,
            k = (0, I.we)("#SteamNotifications_RequestedGameAddedTitle"),
            U = S
              ? (0, I.we)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  S.name ?? "",
                )
              : "";
          return (0, a.jsx)("a", {
            href: x,
            onMouseDown: E,
            children: (0, a.jsx)(dt, {
              title: k,
              body: U,
              bDataLoading: Y,
              logoUrl: w?.avatar_url_medium,
              icon: (0, a.jsx)(g.Qte, {}),
              onActivate: O,
              location: u,
              eUIMode: M,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        }
        function Lt(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = (0, f.LH)(),
            w = (0, _t.KV)(),
            T = (0, D.IL)(l.item, m, w),
            S = St(l),
            { data: j } = (0, q.J$)(S?.appid ? { appid: S.appid } : void 0),
            x = `${Ct.TS.COMMUNITY_BASE_URL}profiles/${m}/inventory`,
            O = () => B(() => window.location.assign(x), l.item),
            E = (Y) => B(() => {}, l.item, Y);
          return (0, a.jsx)("a", {
            href: x,
            onMouseDown: E,
            children: (0, a.jsx)(wt, {
              appName: j?.name,
              icon: (0, a.jsx)(g.rI_, {}),
              fallbackLogo: (0, a.jsx)(g.Qte, {}),
              onActivate: O,
              location: u,
              eUIMode: M,
              data: S,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              itemState: T,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        }
        function Dt(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = (0, f.LH)(),
            w = `${Ct.TS.COMMUNITY_BASE_URL}profiles/${m}/friends/pending`,
            T = () => B(() => window.location.assign(w), l.item),
            S = (O) => B(() => {}, l.item, O),
            j = St(l),
            { data: x } = (0, fe.js)(j.requestorID);
          return (0, a.jsx)("a", {
            href: w,
            onMouseDown: S,
            children: (0, a.jsx)(et, {
              fallbackLogo: (0, a.jsx)(g.Gv$, {}),
              icon: (0, a.jsx)(g.sdo, {}),
              onActivate: T,
              location: u,
              eUIMode: M,
              data: j,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              requestorAvatarURL: x?.avatar_url_medium,
              requestorName: x?.m_strPlayerName,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        }
        function Nt(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = St(l),
            w = (0, f.LH)(),
            T = Ct.TS.COMMUNITY_BASE_URL + l.url,
            S = () => B(() => window.location.assign(T), l.item),
            j = (Ft) => {
              B(() => {}, l.item, Ft);
            },
            x = (0, D.iO)(m) ? m?.account_steam_id?.GetAccountID() : null,
            { data: O } = (0, fe.js)(x),
            E = (0, D.OT)(m) ? m?.owner_steam_id?.GetAccountID() : null,
            { data: Y } = (0, fe.js)(E),
            k = m.json_data?.app_id ? { appid: m.json_data?.app_id } : void 0,
            { data: U } = (0, q.J$)(k),
            [Q, G] = Ot(),
            Pt = Q
              ? G.FilterText(m.account_steam_id.GetAccountID(), m.title)
              : "",
            $ = Q
              ? G.FilterText(m.account_steam_id.GetAccountID(), m.comment)
              : "";
          return (0, a.jsx)("a", {
            href: T,
            onMouseDown: j,
            children: (0, a.jsx)(Z, {
              fallbackLogo: (0, a.jsx)(g.Qte, {}),
              icon: (0, a.jsx)(g.MwB, {}),
              onActivate: S,
              location: u,
              currentUserSteamID: w,
              eUIMode: M,
              data: m,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              postedByAvatarURL: O?.avatar_url_medium,
              postedByDisplayName: O?.m_strPlayerName,
              ownerDisplayName: Y?.m_strPlayerName,
              bNewIndicator: (0, D.Rl)(l.item),
              appName: U?.name,
              onHide: v,
              commentTitle: Pt,
              commentBody: $,
              bLoading: !Q,
            }),
          });
        }
        function Ht(d) {
          const {
              rollup: l,
              onNotificationClick: B,
              location: u,
              uimode: M,
              onHide: v,
            } = d,
            m = St(l),
            { data: w } = (0, q.J$)({ appid: m.appid }),
            [T, S] = (0, L.useState)(""),
            j = (0, f.LH)();
          (0, L.useEffect)(() => {
            if (m.count > 1 && m.appids?.length)
              return S(
                Ct.TS.STORE_BASE_URL +
                  `wishlist/profiles/${j}/?wng=${m.appids.toString()}#sort=discount`,
              );
            if (w) return S(Ct.TS.STORE_BASE_URL + w.store_url_path);
            const E = m.appid ? `?appid=${m.appid}` : "";
            S(
              Ct.TS.STORE_BASE_URL +
                `wishlist/profiles/${j}/${E}#sort=discount`,
            );
          }, [m, w, j]);
          const x = () => B(() => window.location.assign(T), l.item),
            O = (E) => B(() => {}, l.item, E);
          return (0, a.jsx)("a", {
            href: T,
            onMouseDown: O,
            children: (0, a.jsx)(P, {
              fallbackLogo: (0, a.jsx)(g.Qte, {}),
              icon: (0, a.jsx)(g.ilR, {}),
              onActivate: x,
              location: u,
              data: m,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              eUIMode: M,
              bNewIndicator: (0, D.Rl)(l.item),
              onHide: v,
            }),
          });
        }
        function Kt(d) {
          const { url: l, count: B, icon: u, strBody: M, eFeature: v } = d,
            m = (0, de.Hw)(v);
          return !B || m
            ? null
            : (0, a.jsx)("a", {
                href: l,
                className: Ie().WebPinnedNotification,
                children: (0, a.jsx)(Je, {
                  icon: (0, a.jsx)(u, {}),
                  count: B,
                  onActivate: () => window.location.assign(l),
                  strBody: M,
                  eUIMode: h.yrU,
                  visible: !0,
                }),
              });
        }
        const ht = {
          [A.Vv.v_]: Nt,
          [A.Vv.XJ]: Ht,
          [A.Vv.pZ]: Dt,
          [A.Vv.hW]: Lt,
          [A.Vv.K]: be,
          [A.Vv.an]: we,
          [A.Vv.Y9]: Et,
          [A.Vv.YE]: kt,
          [A.Vv.mr]: At,
        };
      },
      97786: (ce) => {
        ce.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_2yhmcyeUOyM8lt__Skbk9O",
          "ItemFocusAnim-darkerGrey": "_3mfiE_PUWOPy8UTDJlYI0u",
          Timestamp: "_26rvbcKFCQjLKx-pD7BhvY",
          StandardTemplate: "_3-H47wPl1Ng3lh7xGZOPIg",
          PinnedTemplate: "_3V6804k2yutEiF6IWg8axH",
          StandardLogoDimensions: "_1KIwOtwkYQUtRoPyxlh3G-",
          Content: "_2axKS7MCnzMBRXRcYLn2Is",
          Header: "_1WuK_iZ6ARkIiptCX5qd7G",
          Icon: "_2F0wqsu2mqsHxBSJcu1sPJ",
          Title: "_18PwvOcpWfW3M8j2-bEPPJ",
          StandardNotificationDescription: "_3fUrGm-WHq3qxIpSqRZDgc",
          StandardNotificationSubText: "_2yUEtF_eCucoxdu85zlOCp",
          Multiline: "_2sQoMK-0onl8u8WHHUnDdw",
          Count: "_2zZKXEnYcEZsL5OGHzkKv2",
          PinnedBody: "_1nziGc41LlyGfDufK0iQos",
          AllNotificationsTemplate: "_1xvIUtLkTrdEk2Ob1MqFcQ",
          StandardTemplateDesktop: "_1GcAugE5c4nbBUwrA4_xwS",
          DesktopToastTemplate: "_3ENh9LzRnZgfTyfxp_J2rr",
          PinnedTemplateWeb: "_2Mo87NUHyjLkjvKcPQxPRu",
          PinnedTemplateDesktop: "j9jQA6QaLJ23lyfuo9nY6",
          AppLogo: "_3mWpfn1_PDwd1gOm26RhMl",
          AppLogoBackgroundImage: "_2FcBwxd4lGOEMTXCnmxczK",
          MarkedRead: "_15_E6efeCt2NTqCgUKav1W",
          markReadBackground: "_1paPuAH6aCXNKdXvf5jv1d",
          Unread: "_1YAQHDHv4hsPaauccvAFtn",
          PlayerNickName: "_2n0ipWJFroZdQVwkXHqdJL",
          FullName: "_2EWNcLrlrl9Gx-yZH039tH",
          IngameTitle: "_3uSbhtY3vHtdj-3tpua_Pb",
          OnlineTitle: "_3bqD-bBMgrGwLsBY2L1gSL",
          GroupMessageTitle: "_3C8GdaaS-zmchnCHHiHG6n",
          GroupMessageUserName: "_2hs2ZR_wYkRHWdtlr681Z6",
          GroupMessageBody: "_3AbCrY-d5NpL5E5DUfgdQ8",
          GroupMessageIcon: "_3vDmqJBvNPH1D_p-Da_djj",
          Body: "_2jpxEWvo06efD6-NR1cplA",
          FriendInGameAppColor: "_2XSwzNWGiJvW0zTgqT0DUI",
          WishlistBlurImage: "_2HBcq6niThHlNihI9xiBSm",
          AvatarStatus: "_1mMC7Hv71CzO0jfm_66W4K",
          IncomingCallToast: "_3wNcsYlo3lQ-yamJPMco8F",
          ShortLogoDimensions: "_1-CP3jNFd252Y0uV_Ua0VE",
          LoadingTemplate: "_2mFLv5Puw95n9oUFp9OMAs",
          Hide: "_1W2rIElq16YPQi4DqoqPLM",
          ShimmerLogo: "_3QrlTtpidzjKPhrvgxFXbI",
          ShimmerBody: "_1ugrCy0x7fRJ7TyoURzzTa",
          ShimmerHeader: "_1Tp3oOeqWARWDsQDI3owRD",
          loading: "_3CI8AFu67GMoINumH6Yvax",
          BottomBar: "_2FMNpalUV1wDdi-cywGIMN",
          NewIndicator: "-B93GaGXJf0lPTNh66m4i",
          ShortTemplate: "fntOoeLPSTpmyXGGmgf99",
          TwoLine: "P1FhGdWv2NCXZXWsaKqqY",
          FullWidth: "_6EcDVXFHtdirTkETQjKOK",
        };
      },
      93761: (ce) => {
        ce.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_30fVm4Rsel-4nUKEiPJgz9",
          "ItemFocusAnim-darkerGrey": "_3z4hV832fi8W9gRRPhmC1V",
          Timestamp: "_7XKFnSNjW_tHfyxaezoD3",
          StandardTemplate: "_2h6KD6p6y4vIgO2Toxx-_K",
          PinnedTemplate: "_3oKFhPrh1lbp-WtA72Q2Yi",
          StandardLogoDimensions: "_1VRx9qVxigUC4qeM0NWNMR",
          Content: "_1SQjN025UZ0z_8AkWHCsGd",
          Header: "_3u0Sb5gUTscs0TQlKpA7WZ",
          Icon: "_2auM-VHPU-KKomAWyuWrSV",
          Title: "_2MGSmn9lIFnmLVIX49POSx",
          StandardNotificationDescription: "_26v9mHAi56x63OwY-jxett",
          StandardNotificationSubText: "_3hEeummFKRey8l5VXxZwxz",
          Multiline: "_21DVSDVmPUgGXuTkI2HqbO",
          Count: "CRYjulQaQOjokS7b_8cOH",
          PinnedBody: "h-lNlCUnCRbIcn38-Oqaw",
          AllNotificationsTemplate: "QFW0BtI4l77AFmv1xLAkx",
          StandardTemplateDesktop: "_3B8wRA4H7e_oSksYNqpSPv",
          DesktopToastTemplate: "_2NdiftmP-B3C4LPWnNGTCB",
          PinnedTemplateWeb: "_25gii5r23MmAqXvLZj24tK",
          PinnedTemplateDesktop: "_3k90ug209sE23xAMqcM74s",
          AppLogo: "_3p74fAyjLzNltNbJUf55kk",
          AppLogoBackgroundImage: "_2qpzt_PffGJwN3Vm2bkKQI",
          MarkedRead: "FMwg5OFGT6NP3h3EW89IP",
          markReadBackground: "_3eZECZ7BxfGeq4yfoKHDal",
          Unread: "_1B1XTNsfuwOaDPAkkr8M42",
          PlayerNickName: "_1YqYJ2yaHfODWbIB0abgzQ",
          FullName: "fozLrCNjCbPGiVKYi2L_M",
          IngameTitle: "rN6p14MiFEoCZvdjnfpgQ",
          OnlineTitle: "_35uWYHT2zJoSv9PE_euqxo",
          GroupMessageTitle: "_33qpBDHTkkQ4TCFB4gPGk_",
          GroupMessageUserName: "_3m94SADycX0JIk8urdZQ2X",
          GroupMessageBody: "_1XTFkmspXcukxWSFz5Fn61",
          GroupMessageIcon: "brsvX3XkZwkemQ_HM3JOP",
          Body: "_3JT9UI68R_-oZc63_NRIcA",
          FriendInGameAppColor: "_10165iFPxrqzt0kfV00tbu",
          WishlistBlurImage: "_3QLXE6SzCKiwEgK5iORZPA",
          AvatarStatus: "_1iutOH026zK2dbpsMFDmMm",
          IncomingCallToast: "j2oDsM6xV2rFx-UrisfYh",
          ShortLogoDimensions: "BNKAIWal-7E00ymauRaHg",
          LoadingTemplate: "Lakql1yamweHbP1OPuahF",
          Hide: "WnLkF0HwOQr2BIjlAlrjF",
          ShimmerLogo: "_2macs5lWMPN5NfDpGE3Iyh",
          ShimmerBody: "_3Ivl8dbxH6D6LwaSLTNTLe",
          ShimmerHeader: "_2a2loheX4ZKGZCGNEdAT3h",
          loading: "_2PdZZCNo176UV7FcPPdqTt",
          BottomBar: "_3yiWpBXwEmDLlaIupVXjUt",
          NewIndicator: "_1pIhbqWsrCVPaGGYc6fT-H",
        };
      },
      92012: (ce) => {
        ce.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_1lqXpJpRlYvyM2fBx6beHd",
          "ItemFocusAnim-darkerGrey": "_3WRewosNPP9V6g7O3hWH5k",
          Timestamp: "w1Bf_xO8scHETzsfr2HtM",
          StandardTemplate: "_1k275cE1gk-jpZE5r-37zl",
          PinnedTemplate: "_4egmnB1wTrDll5Mc_eal8",
          StandardLogoDimensions: "_3n8vALReUk851YHiEiWEfQ",
          Content: "_3c_vhR2WnZLHuyVP2m4UO2",
          Header: "_1186NyOXeTBoB-vvWlJq1I",
          Icon: "_1piyUE09t3QXktcD3FrCwJ",
          Title: "_2x6qMHeQndH78e6sL2XHk_",
          StandardNotificationDescription: "Wh50moO-nKvfE3l4Buav",
          StandardNotificationSubText: "_2T5BxMT87QHfYWXDHFzpT1",
          Multiline: "_2fLmG6Oxk7tiZGLfH8dwXG",
          Count: "sdjVIgKSOKqyi7O2VDy70",
          PinnedBody: "_3OCMnBpXVpdYv5isBLVdJK",
          AllNotificationsTemplate: "d9RJTj9G8qU-U9-he2cQx",
          StandardTemplateDesktop: "_2uW9K6fqc6jZX1XBjnLjw",
          DesktopToastTemplate: "QbSr4hMpMfp0Qtsg4qOh5",
          PinnedTemplateWeb: "_3BvcYKoq-n7GgNwbfFgRAc",
          PinnedTemplateDesktop: "alS2LW_qAwNkYk_GPUC_3",
          AppLogo: "CA_EGBMvnnGy5ib6McPk1",
          AppLogoBackgroundImage: "_1WuzAPck-kGxa4mMIJvAzm",
          MarkedRead: "Wu9rtfDDzG6xfABpqX6oN",
          markReadBackground: "ULHzVL1tuahqUcVisVW-P",
          Unread: "_2kLHZTRgRl0POZfXPcfxks",
          PlayerNickName: "_2YpLUGZ7uC8ZZn67r0WFW_",
          FullName: "_31kBipdYxJf7OOfdvXt0_h",
          IngameTitle: "uoMiFtc9c1Qj-4N-yFmVY",
          OnlineTitle: "_1HmXUbyHRzGqMtpIXrI9-T",
          GroupMessageTitle: "_2sd1s2w2m26_3gQi1EUTR_",
          GroupMessageUserName: "gAoOCl1gHHigL5slBv_yA",
          GroupMessageBody: "_8o4Xz7dGPPQqf36w2HN--",
          GroupMessageIcon: "_15V41jl8st_uQsDMGCqnBx",
          Body: "_1bPTPIVs6QoX2gWvrhM6J-",
          FriendInGameAppColor: "_3xh1N-yvA3u7rLrq-DYZ1U",
          WishlistBlurImage: "_1GTWEgiW95vRIhUWfk6omo",
          AvatarStatus: "_2wKwJWdgy12ZO1tSjI9lXY",
          IncomingCallToast: "YukY0Anz5NHyFELGf9mPn",
          ShortLogoDimensions: "_1DaCc7OUCLHfc6VrQ3OIne",
          LoadingTemplate: "_5iNL0HazAvED5sWE9InJy",
          Hide: "_40XuJsiNG2Ls-sTWqrXG8",
          ShimmerLogo: "_1vzYeDqT7Eiy-LKfLm42sI",
          ShimmerBody: "_12dqPPvVDehwCa8i2oM-eA",
          ShimmerHeader: "_2ZzsgKvsaWmnKQRz0W83GA",
          loading: "_2qr7PO4jvslSCsJbTRFpwd",
          BottomBar: "IUPLZJhHdBex9tQTgC6Ug",
          NewIndicator: "_38yM72K6RxKmOhKZtInP2x",
          AllNotificationsCommentPlus: "WbA7y77Ujam9JOnYuGsMj",
          FriendIndicator: "_2Hphxk564S5yQHog-MFXfN",
          HideButton: "_3M-7E5Nj8iNX_jL5pAQDy_",
          SteamNotificationWrapper: "UmtNgXD92RoDeYjxKEskk",
        };
      },
      87910: (ce) => {
        ce.exports = { WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf" };
      },
    },
  ]);
})();
