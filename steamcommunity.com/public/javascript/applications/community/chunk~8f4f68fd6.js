/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [27634],
    {
      25236: (Ot, Xt, _) => {
        "use strict";
        _.d(Xt, { GO: () => F, cf: () => j });
        const s = null,
          q = 0,
          F = 1,
          j = 2;
      },
      68495: (Ot, Xt, _) => {
        "use strict";
        _.d(Xt, { Bv: () => $t, Dq: () => xt, Yd: () => Jt });
        const s = 0,
          q = 1,
          F = 2,
          j = 3,
          d = 4,
          xt = 5,
          Tt = 6,
          $t = 7,
          I = 8,
          G = 9,
          Jt = 10,
          pi = 11,
          Ti = 12,
          Z = 13,
          gi = 14,
          Bi = 15,
          c = 16,
          o = 17,
          i = 18,
          ht = 19,
          Dt = 20,
          Rt = 21;
      },
      48453: (Ot, Xt, _) => {
        "use strict";
        _.d(Xt, {
          GG: () => Nt,
          b$: () => fi,
          V4: () => ki,
          nH: () => Di,
          rB: () => q,
          Vv: () => s,
          p$: () => Li,
          Fn: () => hi,
        });
        var s = {};
        _.r(s),
          _.d(s, {
            Y9: () => i,
            bh: () => rr,
            v_: () => G,
            Rj: () => wt,
            Cz: () => bi,
            HN: () => Zi,
            pZ: () => pi,
            e9: () => c,
            K: () => I,
            wY: () => o,
            Jo: () => Tt,
            hW: () => Jt,
            wp: () => Ti,
            oe: () => Dt,
            Sx: () => Rt,
            uH: () => k,
            j3: () => Ai,
            JN: () => er,
            FK: () => nr,
            Ol: () => Z,
            Iz: () => qt,
            YE: () => tr,
            js: () => ir,
            yh: () => $t,
            an: () => Bi,
            mr: () => ar,
            XJ: () => gi,
          });
        var q = {};
        _.r(q), _.d(q, { D: () => It });
        var F = _(80613),
          j = _.n(F),
          d = _(75245),
          xt = _(35038);
        const Tt = 0,
          $t = 1,
          I = 2,
          G = 3,
          Jt = 4,
          pi = 5,
          Ti = 6,
          Z = 7,
          gi = 8,
          Bi = 9,
          c = 10,
          o = 11,
          i = 12,
          ht = 13,
          Dt = 14,
          Rt = 15,
          wt = 16,
          bi = 17,
          Ai = 18,
          Zi = 19,
          k = 20,
          er = 21,
          tr = 22,
          ir = 23,
          rr = 24,
          Pt = 25,
          Br = 26,
          At = 27,
          nr = 28,
          ar = 29,
          qt = 30,
          It = 0,
          br = 1;
        var sr = Object.defineProperty,
          wr = (J, a, B) =>
            a in J
              ? sr(J, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: B,
                })
              : (J[a] = B),
          ee = (J, a, B) => wr(J, typeof a != "symbol" ? a + "" : a, B);
        function Li(J) {
          return "unknown ESteamNotificationType ( " + J + " )";
        }
        function Ni(J) {
          return "unknown ESteamNotificationTarget ( " + J + " )";
        }
        function or(J) {
          return "unknown ESteamNotificationTargetClientType ( " + J + " )";
        }
        const Ft = class ae extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              ae.prototype.notification_id || d.Sg(ae.M()),
              F.Message.initialize(this, a, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    notification_id: {
                      n: 1,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    notification_targets: {
                      n: 2,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    notification_type: {
                      n: 3,
                      br: d.qM.readEnum,
                      bw: d.gp.writeEnum,
                    },
                    body_data: {
                      n: 4,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    read: { n: 7, br: d.qM.readBool, bw: d.gp.writeBool },
                    timestamp: {
                      n: 8,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    hidden: { n: 9, br: d.qM.readBool, bw: d.gp.writeBool },
                    expiry: {
                      n: 10,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    viewed: {
                      n: 11,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = d.w0(ae.M())), ae.sm_mbf;
          }
          toObject(a = !1) {
            return ae.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(ae.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(ae.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new ae();
            return ae.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(ae.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(ae.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationData";
          }
        };
        ee(Ft, "sm_m"), ee(Ft, "sm_mbf");
        let Ei = Ft;
        const Gi = class se extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              se.prototype.include_hidden || d.Sg(se.M()),
              F.Message.initialize(this, a, 0, -1, void 0, null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    include_hidden: {
                      n: 1,
                      d: !1,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                    language: {
                      n: 2,
                      d: 0,
                      br: d.qM.readInt32,
                      bw: d.gp.writeInt32,
                    },
                    include_confirmation_count: {
                      n: 3,
                      d: !0,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                    include_pinned_counts: {
                      n: 4,
                      d: !1,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                    include_read: {
                      n: 5,
                      d: !0,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                    count_only: {
                      n: 6,
                      d: !1,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = d.w0(se.M())), se.sm_mbf;
          }
          toObject(a = !1) {
            return se.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(se.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(se.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new se();
            return se.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(se.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return se.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(se.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Request";
          }
        };
        ee(Gi, "sm_m"), ee(Gi, "sm_mbf");
        let Nt = Gi;
        const _t = class oe extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              oe.prototype.notifications || d.Sg(oe.M()),
              F.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    notifications: { n: 1, c: Ei, r: !0, q: !0 },
                    confirmation_count: {
                      n: 2,
                      br: d.qM.readInt32,
                      bw: d.gp.writeInt32,
                    },
                    pending_gift_count: {
                      n: 3,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 5,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    unread_count: {
                      n: 6,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 7,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = d.w0(oe.M())), oe.sm_mbf;
          }
          toObject(a = !1) {
            return oe.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(oe.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(oe.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new oe();
            return oe.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(oe.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(oe.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Response";
          }
        };
        ee(_t, "sm_m"), ee(_t, "sm_mbf");
        let lr = _t;
        const ie = class le extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              le.prototype.timestamp || d.Sg(le.M()),
              F.Message.initialize(this, a, 0, -1, [3], null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    notification_type: {
                      n: 2,
                      br: d.qM.readEnum,
                      bw: d.gp.writeEnum,
                    },
                    notification_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: d.qM.readUint64String,
                      pbr: d.qM.readPackedUint64String,
                      bw: d.gp.writeRepeatedUint64String,
                    },
                    mark_all_read: {
                      n: 4,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = d.w0(le.M())), le.sm_mbf;
          }
          toObject(a = !1) {
            return le.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(le.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(le.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new le();
            return le.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(le.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return le.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(le.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsRead_Notification";
          }
        };
        ee(ie, "sm_m"), ee(ie, "sm_mbf");
        let ki = ie;
        const St = class ce extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              ce.prototype.remote_client_id || d.Sg(ce.M()),
              F.Message.initialize(this, a, 0, -1, void 0, null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    remote_client_id: {
                      n: 1,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    target_client_type: {
                      n: 2,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = d.w0(ce.M())), ce.sm_mbf;
          }
          toObject(a = !1) {
            return ce.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(ce.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(ce.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new ce();
            return ce.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(ce.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(ce.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsViewed_Notification";
          }
        };
        ee(St, "sm_m"), ee(St, "sm_mbf");
        let Di = St;
        const wi = class ue extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              ue.prototype.notification_type || d.Sg(ue.M()),
              F.Message.initialize(this, a, 0, -1, void 0, null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: d.qM.readEnum,
                      bw: d.gp.writeEnum,
                    },
                    notification_targets: {
                      n: 2,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = d.w0(ue.M())), ue.sm_mbf;
          }
          toObject(a = !1) {
            return ue.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(ue.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(ue.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new ue();
            return ue.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(ue.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(ue.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationPreference";
          }
        };
        ee(wi, "sm_m"), ee(wi, "sm_mbf");
        let Si = wi;
        const g = class me extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              me.prototype.preferences || d.Sg(me.M()),
              F.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: { preferences: { n: 1, c: Si, r: !0, q: !0 } },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = d.w0(me.M())), me.sm_mbf;
          }
          toObject(a = !1) {
            return me.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(me.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(me.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new me();
            return me.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(me.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return me.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(me.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Request";
          }
        };
        ee(g, "sm_m"), ee(g, "sm_mbf");
        let cr = g;
        class Lt extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(), F.Message.initialize(this, a, 0, -1, void 0, null);
          }
          toObject(a = !1) {
            return Lt.toObject(a, this);
          }
          static toObject(a, B) {
            return a ? { $jspbMessageInstance: B } : {};
          }
          static fromObject(a) {
            return new Lt();
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new Lt();
            return Lt.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return a;
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {}
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Response";
          }
        }
        class Et extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(), F.Message.initialize(this, a, 0, -1, void 0, null);
          }
          toObject(a = !1) {
            return Et.toObject(a, this);
          }
          static toObject(a, B) {
            return a ? { $jspbMessageInstance: B } : {};
          }
          static fromObject(a) {
            return new Et();
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new Et();
            return Et.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return a;
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {}
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Request";
          }
        }
        const Ci = class de extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              de.prototype.preferences || d.Sg(de.M()),
              F.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: { preferences: { n: 1, c: Si, r: !0, q: !0 } },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = d.w0(de.M())), de.sm_mbf;
          }
          toObject(a = !1) {
            return de.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(de.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(de.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new de();
            return de.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(de.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return de.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(de.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Response";
          }
        };
        ee(Ci, "sm_m"), ee(Ci, "sm_mbf");
        let ur = Ci;
        const Mi = class fe extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              fe.prototype.notification_ids || d.Sg(fe.M()),
              F.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    notification_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: d.qM.readUint64String,
                      pbr: d.qM.readPackedUint64String,
                      bw: d.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = d.w0(fe.M())), fe.sm_mbf;
          }
          toObject(a = !1) {
            return fe.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(fe.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(fe.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new fe();
            return fe.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(fe.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(fe.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_HideNotification_Notification";
          }
        };
        ee(Mi, "sm_m"), ee(Mi, "sm_mbf");
        let fi = Mi;
        const vi = class ye extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              ye.prototype.notifications || d.Sg(ye.M()),
              F.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    notifications: { n: 1, c: Ei, r: !0, q: !0 },
                    pending_gift_count: {
                      n: 2,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 3,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 4,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = d.w0(ye.M())), ye.sm_mbf;
          }
          toObject(a = !1) {
            return ye.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(ye.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(ye.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new ye();
            return ye.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(ye.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(ye.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_NotificationsReceived_Notification";
          }
        };
        ee(vi, "sm_m"), ee(vi, "sm_mbf");
        let Zt = vi;
        const Mt = class pe extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              pe.prototype.preferences || d.Sg(pe.M()),
              F.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { preferences: { n: 1, c: Si, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = d.w0(pe.M())), pe.sm_mbf;
          }
          toObject(a = !1) {
            return pe.toObject(a, this);
          }
          static toObject(a, B) {
            return d.BT(pe.M(), a, B);
          }
          static fromObject(a) {
            return d.Uq(pe.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              Q = new pe();
            return pe.deserializeBinaryFromReader(Q, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return d.zj(pe.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            d.i0(pe.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_PreferencesUpdated_Notification";
          }
        };
        ee(Mt, "sm_m"), ee(Mt, "sm_mbf");
        let vt = Mt;
        var hi;
        ((J) => {
          function a(Bt, zt, Ht) {
            return Bt.SendMsg(
              "SteamNotification.GetSteamNotifications#1",
              (0, xt.I8)(Nt, zt, Ht),
              lr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          J.GetSteamNotifications = a;
          function B(Bt, zt) {
            return Bt.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, xt.I8)(ki, zt),
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          J.MarkNotificationsRead = B;
          function Q(Bt, zt) {
            return Bt.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, xt.I8)(Di, zt),
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          J.MarkNotificationsViewed = Q;
          function ji(Bt, zt) {
            return Bt.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, xt.I8)(fi, zt),
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          J.HideNotification = ji;
          function Ri(Bt, zt, Ht) {
            return Bt.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, xt.I8)(cr, zt, Ht),
              Lt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          J.SetPreferences = Ri;
          function qi(Bt, zt, Ht) {
            return Bt.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, xt.I8)(Et, zt, Ht),
              ur,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          J.GetPreferences = qi;
        })(hi || (hi = {}));
        var ei;
        ((J) => {
          (J.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: Zt,
          }),
            (J.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: vt,
            });
        })(ei || (ei = {}));
      },
      80862: (Ot, Xt, _) => {
        "use strict";
        _.d(Xt, {
          OT: () => Ca,
          iO: () => Ga,
          T4: () => Mn,
          n8: () => Sn,
          hr: () => wn,
          IC: () => fn,
          V4: () => gn,
          sR: () => pn,
          jb: () => Rn,
          Rl: () => Ia,
          XT: () => Fn,
          cE: () => Pi,
          V8: () => fr,
          tM: () => Fa,
          K9: () => dn,
          bP: () => ja,
          aq: () => yn,
          u5: () => yr,
          PI: () => vn,
          kE: () => en,
          IL: () => Na,
        });
        var s = _(48453),
          q = _(35038),
          F = _(72604),
          j = _(99412),
          d = _(38636),
          xt = _(88942),
          Tt = _(14947),
          $t = _(76559),
          I = _(79365),
          G = _(68495),
          Jt = _(25236),
          pi = _(36174),
          Ti = _(57589),
          Z = _(98609),
          gi = _(3166),
          Bi = _(90626),
          c = _(80613),
          o = _.n(c),
          i = _(75245),
          ht = _(24525);
        const Dt = 0,
          Rt = 1,
          wt = 2,
          bi = 3,
          Ai = 4,
          Zi = 5,
          k = 0,
          er = 1,
          tr = 2,
          ir = 3,
          rr = 4,
          Pt = 6,
          Br = 7,
          At = 8,
          nr = 9,
          ar = 10,
          qt = 11,
          It = 12,
          br = 13,
          sr = 15,
          wr = 16,
          ee = 17,
          Li = 18,
          Ni = 19,
          or = 20,
          Ft = 21,
          Ei = 22,
          Gi = 23,
          Nt = 24,
          _t = 25,
          lr = 26,
          ie = 27,
          ki = 28,
          St = 29,
          Di = 30;
        var wi = Object.defineProperty,
          Si = (r, e, t) =>
            e in r
              ? wi(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          g = (r, e, t) => Si(r, typeof e != "symbol" ? e + "" : e, t);
        function cr(r) {
          return "unknown EFamilyGroupRole ( " + r + " )";
        }
        function Lt(r) {
          return "unknown EFamilyGroupMembershipRemovalReason ( " + r + " )";
        }
        function Et(r) {
          return "unknown EFamilyGroupsTwoFactorMethod ( " + r + " )";
        }
        function Ci(r) {
          return "unknown EPurchaseRequestAction ( " + r + " )";
        }
        function ur(r) {
          return "unknown EFamilyGroupChangeLogType ( " + r + " )";
        }
        function Mi(r) {
          return "unknown ESharedLibraryExcludeReason ( " + r + " )";
        }
        const fi = class ge extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.name || i.Sg(ge.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = i.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ge.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ge();
            return ge.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ge.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ge.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Request";
          }
        };
        g(fi, "sm_m"), g(fi, "sm_mbf");
        let vi = fi;
        const Zt = class Be extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.family_groupid || i.Sg(Be.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    cooldown_skip_granted: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = i.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Be.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Be();
            return Be.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Be.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Be.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Response";
          }
        };
        g(Zt, "sm_m"), g(Zt, "sm_mbf");
        let Mt = Zt;
        const vt = class be extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.family_groupid || i.Sg(be.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    send_running_apps: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = i.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(be.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new be();
            return be.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(be.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(be.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Request";
          }
        };
        g(vt, "sm_m"), g(vt, "sm_mbf");
        let hi = vt;
        const ei = class we extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.steamid || i.Sg(we.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    role: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    time_joined: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cooldown_seconds_remaining: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = i.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(we.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new we();
            return we.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(we.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(we.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMember";
          }
        };
        g(ei, "sm_m"), g(ei, "sm_mbf");
        let J = ei;
        const a = class Se extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.steamid || i.Sg(Se.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    role: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = i.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Se.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Se();
            return Se.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Se.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Se.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInvite";
          }
        };
        g(a, "sm_m"), g(a, "sm_mbf");
        let B = a;
        const Q = class Me extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.steamid || i.Sg(Me.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = i.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Me.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Me();
            return Me.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Me.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Me.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupFormerMember";
          }
        };
        g(Q, "sm_m"), g(Q, "sm_mbf");
        let ji = Q;
        const Ri = class ve extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.name || i.Sg(ve.M()),
              c.Message.initialize(this, e, 0, -1, [2, 3, 7], null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    members: { n: 2, c: J, r: !0, q: !0 },
                    pending_invites: { n: 3, c: B, r: !0, q: !0 },
                    free_spots: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    country: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    slot_cooldown_remaining_seconds: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    former_members: { n: 7, c: ji, r: !0, q: !0 },
                    slot_cooldown_overrides: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = i.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ve.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ve();
            return ve.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ve.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ve.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Response";
          }
        };
        g(Ri, "sm_m"), g(Ri, "sm_mbf");
        let qi = Ri;
        const Bt = class he extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.family_groupid || i.Sg(he.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    role: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    inviter_steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    awaiting_2fa: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    invite_id: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = i.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(he.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new he();
            return he.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(he.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(he.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInviteForUser";
          }
        };
        g(Bt, "sm_m"), g(Bt, "sm_mbf");
        let zt = Bt;
        const Ht = class Re extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.steamid || i.Sg(Re.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    include_family_group_response: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = i.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Re.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Re();
            return Re.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Re.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Re.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Request";
          }
        };
        g(Ht, "sm_m"), g(Ht, "sm_mbf");
        let Sr = Ht;
        const Hi = class Fe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.family_groupid || i.Sg(Fe.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    rtime_joined: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_left: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    role: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    participated: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = i.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Fe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Fe();
            return Fe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Fe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Fe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMembership";
          }
        };
        g(Hi, "sm_m"), g(Hi, "sm_mbf");
        let Mr = Hi;
        const Ki = class _e extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.family_groupid || i.Sg(_e.M()),
              c.Message.initialize(this, e, 0, -1, [5, 10], null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    is_not_member_of_any_group: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    latest_time_joined: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    latest_joined_family_groupid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    pending_group_invites: { n: 5, c: zt, r: !0, q: !0 },
                    role: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    cooldown_seconds_remaining: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    family_group: { n: 8, c: qi },
                    can_undelete_last_joined_family: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    membership_history: { n: 10, c: Mr, r: !0, q: !0 },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = i.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(_e.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new _e();
            return _e.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(_e.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(_e.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Response";
          }
        };
        g(Ki, "sm_m"), g(Ki, "sm_mbf");
        let vr = Ki;
        const Qi = class ze extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.family_groupid || i.Sg(ze.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = i.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ze.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ze();
            return ze.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ze.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ze.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
          }
        };
        g(Qi, "sm_m"), g(Qi, "sm_mbf");
        let hr = Qi;
        class Kt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Kt.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new Kt();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Kt();
            return Kt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
          }
        }
        const Vi = class Te extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.family_groupid || i.Sg(Te.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    receiver_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    receiver_role: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = i.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Te.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Te();
            return Te.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Te.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Te.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Request";
          }
        };
        g(Vi, "sm_m"), g(Vi, "sm_mbf");
        let mr = Vi;
        const l = class Ne extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.invite_id || i.Sg(Ne.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    invite_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    two_factor_method: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = i.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ne.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ne();
            return Ne.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ne.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ne.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Response";
          }
        };
        g(l, "sm_m"), g(l, "sm_mbf");
        let u = l;
        const y = class Ge extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.family_groupid || i.Sg(Ge.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    nonce: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = i.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ge.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ge();
            return Ge.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ge.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ge.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Request";
          }
        };
        g(y, "sm_m"), g(y, "sm_mbf");
        let p = y;
        const b = class Ce extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.two_factor_method || i.Sg(Ce.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    two_factor_method: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    cooldown_skip_granted: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    invite_already_accepted: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    cooldown_seconds_remaining: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = i.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ce.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ce();
            return Ce.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ce.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ce.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Response";
          }
        };
        g(b, "sm_m"), g(b, "sm_mbf");
        let R = b;
        const S = class je extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.family_groupid || i.Sg(je.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid_to_remove: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = i.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(je.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new je();
            return je.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(je.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(je.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Request";
          }
        };
        g(S, "sm_m"), g(S, "sm_mbf");
        let w = S;
        class v extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new v();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new v();
            return v.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Response";
          }
        }
        const z = class qe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.family_groupid || i.Sg(qe.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid_to_cancel: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = i.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(qe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new qe();
            return qe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(qe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(qe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Request";
          }
        };
        g(z, "sm_m"), g(z, "sm_mbf");
        let h = z;
        class M extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
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
            let t = new (o().BinaryReader)(e),
              n = new M();
            return M.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Response";
          }
        }
        const C = class Ie extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.family_groupid || i.Sg(Ie.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = i.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ie.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ie();
            return Ie.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ie.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ie.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Request";
          }
        };
        g(C, "sm_m"), g(C, "sm_mbf");
        let L = C;
        class E extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new E();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new E();
            return E.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Response";
          }
        }
        const $ = class We extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.family_groupid || i.Sg(We.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = i.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(We.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new We();
            return We.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(We.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(We.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Request";
          }
        };
        g($, "sm_m"), g($, "sm_mbf");
        let V = $;
        const K = class Ue extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.users || i.Sg(Ue.M()),
              c.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    users: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = i.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ue.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ue();
            return Ue.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ue.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ue.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Response";
          }
        };
        g(K, "sm_m"), g(K, "sm_mbf");
        let re = K;
        const Wt = class Oe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.family_groupid || i.Sg(Oe.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    gidshoppingcart: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    store_country_code: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    use_account_cart: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = i.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Oe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Oe();
            return Oe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Oe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Oe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Request";
          }
        };
        g(Wt, "sm_m"), g(Wt, "sm_mbf");
        let ne = Wt;
        const Y = class xe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.gidshoppingcart || i.Sg(xe.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = i.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(xe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new xe();
            return xe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(xe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(xe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Response";
          }
        };
        g(Y, "sm_m"), g(Y, "sm_mbf");
        let Gt = Y;
        const ti = class Pe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.family_groupid || i.Sg(Pe.M()),
              c.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    request_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                    rt_include_completed_since: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = i.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Pe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Pe();
            return Pe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Pe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Pe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Request";
          }
        };
        g(ti, "sm_m"), g(ti, "sm_mbf");
        let Ji = ti;
        const yi = class Ae extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.requester_steamid || i.Sg(Ae.M()),
              c.Message.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    requester_steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    gidshoppingcart: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_requested: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_responded: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    responder_steamid: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    response_action: {
                      n: 6,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    is_completed: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    request_id: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    requested_packageids: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    purchased_packageids: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    requested_bundleids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    purchased_bundleids: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = i.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ae.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ae();
            return Ae.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ae.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ae.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "PurchaseRequest";
          }
        };
        g(yi, "sm_m"), g(yi, "sm_mbf");
        let tn = yi;
        const Fi = class Le extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.requests || i.Sg(Le.M()),
              c.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: { requests: { n: 1, c: tn, r: !0, q: !0 } },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = i.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Le.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Le();
            return Le.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Le.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Le.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Response";
          }
        };
        g(Fi, "sm_m"), g(Fi, "sm_mbf");
        let Ii = Fi;
        const _i = class Ee extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.family_groupid || i.Sg(Ee.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    action: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    request_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = i.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ee.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ee();
            return Ee.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ee.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ee.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Request";
          }
        };
        g(_i, "sm_m"), g(_i, "sm_mbf");
        let Yi = _i;
        class Ct extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ct.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new Ct();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ct();
            return Ct.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Response";
          }
        }
        const Wi = class ke extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.family_groupid || i.Sg(ke.M()),
              c.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    running_apps: { n: 2, c: _n, r: !0, q: !0 },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = i.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ke.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ke();
            return ke.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ke.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ke.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification";
          }
        };
        g(Wi, "sm_m"), g(Wi, "sm_mbf");
        let Ui = Wi;
        const ii = class De extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.member_steamid || i.Sg(De.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    member_steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    owner_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = i.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(De.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new De();
            return De.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(De.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(De.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
          }
        };
        g(ii, "sm_m"), g(ii, "sm_mbf");
        let Rr = ii;
        const Fr = class He extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.appid || i.Sg(He.M()),
              c.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    playing_members: { n: 3, c: Rr, r: !0, q: !0 },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = i.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(He.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new He();
            return He.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(He.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(He.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
          }
        };
        g(Fr, "sm_m"), g(Fr, "sm_mbf");
        let _n = Fr;
        class ri extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ri.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ri();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ri();
            return ri.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_InviteStatus_Notification";
          }
        }
        const _r = class Ke extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.family_groupid || i.Sg(Ke.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = i.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ke.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ke();
            return Ke.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ke.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ke.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_GroupChanged_Notification";
          }
        };
        g(_r, "sm_m"), g(_r, "sm_mbf");
        let zn = _r;
        const zr = class Qe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.family_groupid || i.Sg(Qe.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = i.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Qe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Qe();
            return Qe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Qe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Qe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Request";
          }
        };
        g(zr, "sm_m"), g(zr, "sm_mbf");
        let Tn = zr;
        const Tr = class Ve extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.changes || i.Sg(Ve.M()),
              c.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: { changes: { n: 1, c: Gn, r: !0, q: !0 } },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = i.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ve.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ve();
            return Ve.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ve.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ve.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response";
          }
        };
        g(Tr, "sm_m"), g(Tr, "sm_mbf");
        let Nn = Tr;
        const Nr = class Je extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.timestamp || i.Sg(Je.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    actor_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    body: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    by_support: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = i.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Je.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Je();
            return Je.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Je.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Je.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response_Change";
          }
        };
        g(Nr, "sm_m"), g(Nr, "sm_mbf");
        let Gn = Nr;
        const Gr = class Ye extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.steamid || i.Sg(Ye.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    first_played: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    latest_played: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    seconds_played: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = i.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ye.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ye();
            return Ye.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ye.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ye.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_PlaytimeEntry";
          }
        };
        g(Gr, "sm_m"), g(Gr, "sm_mbf");
        let rn = Gr;
        const Cr = class Xe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.family_groupid || i.Sg(Xe.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = i.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Xe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Xe();
            return Xe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Xe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Xe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Request";
          }
        };
        g(Cr, "sm_m"), g(Cr, "sm_mbf");
        let Cn = Cr;
        const jr = class $e extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.entries || i.Sg($e.M()),
              c.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    entries: { n: 1, c: rn, r: !0, q: !0 },
                    entries_by_owner: { n: 2, c: rn, r: !0, q: !0 },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = i.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT($e.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new $e();
            return $e.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj($e.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0($e.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Response";
          }
        };
        g(jr, "sm_m"), g(jr, "sm_mbf");
        let jn = jr;
        const qr = class Ze extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.family_groupid || i.Sg(Ze.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    cooldown_count: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = i.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ze.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ze();
            return Ze.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ze.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ze.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
          }
        };
        g(qr, "sm_m"), g(qr, "sm_mbf");
        let qn = qr;
        class ni extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ni.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ni();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ni();
            return ni.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
          }
        }
        const Ir = class et extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.family_groupid || i.Sg(et.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    include_own: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    include_excluded: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    max_apps: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    include_non_games: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    steamid: {
                      n: 8,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = i.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(et.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new et();
            return et.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(et.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(et.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Request";
          }
        };
        g(Ir, "sm_m"), g(Ir, "sm_mbf");
        let In = Ir;
        const Wr = class tt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.apps || i.Sg(tt.M()),
              c.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    apps: { n: 1, c: Un, r: !0, q: !0 },
                    owner_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = i.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(tt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new tt();
            return tt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(tt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(tt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response";
          }
        };
        g(Wr, "sm_m"), g(Wr, "sm_mbf");
        let Wn = Wr;
        const Ur = class it extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.appid || i.Sg(it.M()),
              c.Message.initialize(this, e, 0, -1, [2, 15], null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    owner_steamids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                    name: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                    sort_as: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    capsule_filename: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    img_icon_hash: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    exclude_reason: {
                      n: 10,
                      d: k,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    rt_time_acquired: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rt_last_played: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rt_playtime: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    app_type: {
                      n: 14,
                      d: ht.$e,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    content_descriptors: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = i.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(it.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new it();
            return it.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(it.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(it.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
          }
        };
        g(Ur, "sm_m"), g(Ur, "sm_mbf");
        let Un = Ur;
        const Or = class rt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.family_groupid || i.Sg(rt.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    invite_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    nonce: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = i.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(rt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new rt();
            return rt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(rt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(rt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
          }
        };
        g(Or, "sm_m"), g(Or, "sm_mbf");
        let On = Or;
        class ai extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ai.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ai();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ai();
            return ai.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
          }
        }
        const xr = class nt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.family_groupid || i.Sg(nt.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    invite_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    nonce: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = i.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(nt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new nt();
            return nt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(nt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(nt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
          }
        };
        g(xr, "sm_m"), g(xr, "sm_mbf");
        let xn = xr;
        class si extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return si.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new si();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new si();
            return si.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return si.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
          }
        }
        const Pr = class at extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.family_groupid || i.Sg(at.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = i.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(at.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new at();
            return at.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(at.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(at.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
          }
        };
        g(Pr, "sm_m"), g(Pr, "sm_mbf");
        let Pn = Pr;
        class oi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return oi.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new oi();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new oi();
            return oi.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
          }
        }
        const Ar = class st extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.family_groupid || i.Sg(st.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    lender_steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = i.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(st.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new st();
            return st.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(st.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(st.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Request";
          }
        };
        g(Ar, "sm_m"), g(Ar, "sm_mbf");
        let An = Ar;
        class li extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return li.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new li();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new li();
            return li.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return li.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Response";
          }
        }
        const Lr = class ot extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.family_groupid || i.Sg(ot.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = i.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ot.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ot();
            return ot.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ot.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ot.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Request";
          }
        };
        g(Lr, "sm_m"), g(Lr, "sm_mbf");
        let Ln = Lr;
        const Er = class lt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.members || i.Sg(lt.M()),
              c.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: { members: { n: 1, c: kn, r: !0, q: !0 } },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = i.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(lt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new lt();
            return lt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(lt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(lt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response";
          }
        };
        g(Er, "sm_m"), g(Er, "sm_mbf");
        let En = Er;
        const kr = class ct extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.steamid || i.Sg(ct.M()),
              c.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    preferred_appids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = i.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ct.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ct();
            return ct.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ct.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ct.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
          }
        };
        g(kr, "sm_m"), g(kr, "sm_mbf");
        let kn = kr;
        const Dr = class ut extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.family_groupid || i.Sg(ut.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = i.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ut.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ut();
            return ut.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ut.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ut.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Request";
          }
        };
        g(Dr, "sm_m"), g(Dr, "sm_mbf");
        let Dn = Dr;
        class ci extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ci.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ci();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ci();
            return ci.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Response";
          }
        }
        const Hr = class mt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.family_groupid || i.Sg(mt.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = i.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(mt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new mt();
            return mt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(mt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(mt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Request";
          }
        };
        g(Hr, "sm_m"), g(Hr, "sm_mbf");
        let Hn = Hr;
        class ui extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ui.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ui();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ui();
            return ui.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Response";
          }
        }
        const Kr = class dt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.family_groupid || i.Sg(dt.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = i.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(dt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new dt();
            return dt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(dt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(dt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Request";
          }
        };
        g(Kr, "sm_m"), g(Kr, "sm_mbf");
        let Kn = Kr;
        const Qr = class ft extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.wallet_country_matches || i.Sg(ft.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    wallet_country_matches: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    ip_match: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    join_restriction: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = i.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ft.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ft();
            return ft.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ft.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ft.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Response";
          }
        };
        g(Qr, "sm_m"), g(Qr, "sm_mbf");
        let Qn = Qr;
        const Vr = class yt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.steamid || i.Sg(yt.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    invite_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = i.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(yt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new yt();
            return yt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(yt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(yt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Request";
          }
        };
        g(Vr, "sm_m"), g(Vr, "sm_mbf");
        let Vn = Vr;
        class mi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return mi.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new mi();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new mi();
            return mi.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Response";
          }
        }
        const Jr = class pt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.family_groupid || i.Sg(pt.M()),
              c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    rtime32_target: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = i.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(pt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new pt();
            return pt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(pt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(pt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Request";
          }
        };
        g(Jr, "sm_m"), g(Jr, "sm_mbf");
        let Jn = Jr;
        class di extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), c.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return di.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new di();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new di();
            return di.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return di.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Response";
          }
        }
        var nn;
        ((r) => {
          function e(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.CreateFamilyGroup#1",
              (0, q.I8)(vi, U, O),
              Mt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.CreateFamilyGroup = e;
          function t(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, q.I8)(hi, U, O),
              qi,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetFamilyGroup = t;
          function n(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, q.I8)(Sr, U, O),
              vr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetFamilyGroupForUser = n;
          function m(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, q.I8)(hr, U, O),
              Kt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.ModifyFamilyGroupDetails = m;
          function f(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, q.I8)(mr, U, O),
              u,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.InviteToFamilyGroup = f;
          function T(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, q.I8)(On, U, O),
              ai,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.ConfirmInviteToFamilyGroup = T;
          function P(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, q.I8)(Pn, U, O),
              oi,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.ResendInvitationToFamilyGroup = P;
          function x(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, q.I8)(p, U, O),
              R,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.JoinFamilyGroup = x;
          function H(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, q.I8)(xn, U, O),
              si,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.ConfirmJoinFamilyGroup = H;
          function te(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, q.I8)(w, U, O),
              v,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.RemoveFromFamilyGroup = te;
          function jt(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, q.I8)(h, U, O),
              M,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.CancelFamilyGroupInvite = jt;
          function D(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, q.I8)(V, U, O),
              re,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetUsersSharingDevice = D;
          function gt(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, q.I8)(L, U, O),
              E,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.DeleteFamilyGroup = gt;
          function A(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, q.I8)(Dn, U, O),
              ci,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.UndeleteFamilyGroup = A;
          function Yt(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, q.I8)(Cn, U, O),
              jn,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.GetPlaytimeSummary = Yt;
          function Vt(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, q.I8)(ne, U, O),
              Gt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.RequestPurchase = Vt;
          function N(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, q.I8)(Ji, U, O),
              Ii,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetPurchaseRequests = N;
          function gr(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, q.I8)(Yi, U, O),
              Ct,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          r.RespondToRequestedPurchase = gr;
          function Wa(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, q.I8)(Tn, U, O),
              Nn,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetChangeLog = Wa;
          function Ua(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, q.I8)(qn, U, O),
              ni,
              { ePrivilege: 5 },
            );
          }
          r.SetFamilyCooldownOverrides = Ua;
          function Oa(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, q.I8)(In, U, O),
              Wn,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetSharedLibraryApps = Oa;
          function xa(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, q.I8)(An, U, O),
              li,
              { ePrivilege: 1 },
            );
          }
          r.SetPreferredLender = xa;
          function Pa(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, q.I8)(Ln, U, O),
              En,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetPreferredLenders = Pa;
          function Aa(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, q.I8)(Hn, U, O),
              ui,
              { ePrivilege: 5 },
            );
          }
          r.ForceAcceptInvite = Aa;
          function La(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, q.I8)(Kn, U, O),
              Qn,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          r.GetInviteCheckResults = La;
          function Ea(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, q.I8)(Vn, U, O),
              mi,
              { ePrivilege: 5 },
            );
          }
          r.ClearCooldownSkip = Ea;
          function ka(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, q.I8)(Jn, U, O),
              di,
              { ePrivilege: 5 },
            );
          }
          r.RollbackFamilyGroup = ka;
        })(nn || (nn = {}));
        var an;
        ((r) => {
          (r.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: Ui,
          }),
            (r.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: ri,
            }),
            (r.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: zn,
            });
        })(an || (an = {}));
        var Da = _(75916),
          Ha = _(18210),
          Ka = _(36053),
          Yn = _(3692),
          Qa = _(20117);
        const Qt = (r, e) =>
            e === void 0
              ? ["get_family_group_for_user ", r]
              : ["get_family_group_for_user ", r, e],
          kt = (r) => ["get_family_group", r],
          Ut = (r) => ["get_family_history", r],
          Xn = (r) => ["get_users_sharing_device", r],
          $n = (r) => ["get_shopping_cart_contents", r],
          Zn = (r) => ["recent_playtime_sessions", r],
          ea = (r) => ["get_playtime_summary", r],
          ta = (r, e) => ["get_invite_check_results", r, e];
        function Yr(r, e, t) {
          return t
            ? ["get_purchase_requests", r, e, t]
            : e
              ? ["get_purchase_requests", r, e]
              : ["get_purchase_requests", r];
        }
        function X(r, e) {
          if (r != k_EResultOK) throw r;
        }
        const Xr = Bi.createContext({ staleTimeMs: 1 / 0 });
        function Va(r) {
          const { staleTimeMs: e, children: t } = r,
            n = React.useMemo(
              () => ({ staleTimeMs: e != null ? e : 3e3 }),
              [e],
            );
          return React.createElement(Xr.Provider, { value: n }, t);
        }
        function ia(r = !1) {
          return ra(useActiveAccount(), r);
        }
        function ra(r, e = !1) {
          const t = useActiveServiceTransport(),
            n = useContext(Xr).staleTimeMs;
          return useQuery({
            queryKey: Qt(r, e),
            queryFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetFamilyGroupForUser_Request,
              );
              m.Body().set_steamid(r),
                m.Body().set_include_family_group_response(e);
              const f = await FGS.FamilyGroupsService.GetFamilyGroupForUser(
                t,
                m,
              );
              return X(f.GetEResult(), "GetFamilyGroupForUser"), f.Body();
            },
            staleTime: n,
            enabled: !!r,
            placeholderData: r
              ? void 0
              : new FGS.CFamilyGroups_GetFamilyGroupForUser_Response(),
          });
        }
        function na(r) {
          const e = useActiveServiceTransport(),
            t = useContext(Xr).staleTimeMs;
          return useQuery({
            queryKey: kt(r),
            queryFn: async () => {
              if (r) {
                const n = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetFamilyGroup_Request,
                );
                n.Body().set_family_groupid(r);
                const m = await FGS.FamilyGroupsService.GetFamilyGroup(e, n);
                return X(m.GetEResult(), "GetFamilyGroup"), m.Body();
              } else throw k_EResultNoMatch;
            },
            staleTime: t,
          });
        }
        function Ja() {
          const r = useActiveServiceTransport(),
            e = useQueryClient(),
            t = useActiveAccount();
          return useMutation({
            mutationFn: async (n) => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              m.Body().set_name(n);
              const f = await FGS.FamilyGroupsService.CreateFamilyGroup(r, m);
              return X(f.GetEResult(), "CreateFamilyGroup"), f.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: Qt(t) });
            },
          });
        }
        function Ya(r) {
          const e = useActiveServiceTransport(),
            t = useQueryClient(),
            n = useActiveAccount();
          return useMutation({
            mutationFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_DeleteFamilyGroup_Request,
              );
              m.Body().set_family_groupid(r);
              const f = await FGS.FamilyGroupsService.DeleteFamilyGroup(e, m);
              return X(f.GetEResult(), "DeleteFamilyGroup"), f.Body();
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: Qt(n) }),
                t.invalidateQueries({ queryKey: kt(r) }),
                t.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function Xa(r) {
          const e = useActiveServiceTransport(),
            t = useQueryClient();
          return useMutation({
            mutationFn: async (n) => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ModifyFamilyGroupDetails_Request,
              );
              m.Body().set_family_groupid(r), m.Body().set_name(n);
              const f = await FGS.FamilyGroupsService.ModifyFamilyGroupDetails(
                e,
                m,
              );
              return X(f.GetEResult(), "ModifyFamilyGroupDetails"), f.Body();
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: kt(r) }),
                t.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function $a(r, e, t) {
          const n = useActiveServiceTransport(),
            m = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const f = CProtoBufMsg.Init(
                FGS.CFamilyGroups_InviteToFamilyGroup_Request,
              );
              f.Body().set_family_groupid(r),
                f.Body().set_receiver_steamid(e),
                f.Body().set_receiver_role(t);
              const T = await FGS.FamilyGroupsService.InviteToFamilyGroup(n, f);
              return X(T.GetEResult(), "InviteToFamilyGroup"), T.Body();
            },
            onSuccess: () => {
              m.invalidateQueries({ queryKey: Qt(e) }),
                m.invalidateQueries({ queryKey: kt(r) }),
                m.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function Za(r) {
          const e = useActiveServiceTransport(),
            t = useActiveAccount(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_JoinFamilyGroup_Request,
              );
              m.Body().set_family_groupid(r);
              const f = await FGS.FamilyGroupsService.JoinFamilyGroup(e, m);
              return X(f.GetEResult(), "JoinFamilyGroup"), f.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Qt(t) }),
                n.invalidateQueries({ queryKey: kt(r) }),
                n.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function es(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CancelFamilyGroupInvite_Request,
              );
              m.Body().set_family_groupid(r), m.Body().set_steamid_to_cancel(e);
              const f = await FGS.FamilyGroupsService.CancelFamilyGroupInvite(
                t,
                m,
              );
              return X(f.GetEResult(), "CancelFamilyGroupInvite"), f.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Qt(e) }),
                n.invalidateQueries({ queryKey: kt(r) }),
                n.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function ts(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RemoveFromFamilyGroup_Request,
              );
              m.Body().set_family_groupid(r), m.Body().set_steamid_to_remove(e);
              const f = await FGS.FamilyGroupsService.RemoveFromFamilyGroup(
                t,
                m,
              );
              return X(f.GetEResult(), "RemoveFromFamilyGroup"), f.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Qt(e) }),
                n.invalidateQueries({ queryKey: kt(r) }),
                n.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function is(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: Xn(r),
            queryFn: async () => {
              const t = GetCookie("clientsessionid"),
                n = t && BigInt("0x" + t).toString(),
                m = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetUsersSharingDevice_Request,
                );
              m.Body().set_family_groupid(r),
                m.Body().set_client_instance_id(n != null ? n : void 0);
              const f = await FGS.FamilyGroupsService.GetUsersSharingDevice(
                e,
                m,
              );
              return X(f.GetEResult(), "GetUsersSharingDevice"), f.Body();
            },
          });
        }
        function rs(r) {
          var e, t;
          const n = useActiveAccount();
          return (t =
            (e = na(r).data) == null
              ? void 0
              : e.members().find((f) => f.steamid() == n)) == null
            ? void 0
            : t.role();
        }
        function ns(r, e) {
          const t = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RequestPurchase_Request,
              );
              n.Body().set_family_groupid(r),
                n.Body().set_use_account_cart(!0),
                n.Body().set_store_country_code(e);
              const m = await FGS.FamilyGroupsService.RequestPurchase(t, n);
              return X(m.GetEResult(), "RequestPurchase"), m.Body();
            },
          });
        }
        function as(r, e) {
          const t = useActiveServiceTransport(),
            n = useActiveAccount();
          return useQuery({
            queryKey: Yr(r, n),
            queryFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              m.Body().set_family_groupid(r),
                e !== void 0 && m.Body().set_rt_include_completed_since(e);
              const f = await FGS.FamilyGroupsService.GetPurchaseRequests(t, m);
              return X(f.GetEResult(), "GetPurchaseRequests"), f.Body();
            },
          });
        }
        function ss(r, e) {
          const t = useActiveServiceTransport(),
            n = useActiveAccount();
          return useQuery({
            queryKey: Yr(r, n, e),
            queryFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              m.Body().set_family_groupid(r), m.Body().add_request_ids(e);
              const f = await FGS.FamilyGroupsService.GetPurchaseRequests(t, m);
              return X(f.GetEResult(), "GetPurchaseRequests"), f.Body();
            },
            select: (m) => {
              var f;
              return (f = m.toObject().requests) == null
                ? void 0
                : f.find(({ request_id: T }) => T === e);
            },
          });
        }
        function os(r, e, t) {
          const n = useActiveServiceTransport(),
            m = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const f = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RespondToRequestedPurchase_Request,
              );
              f.Body().set_family_groupid(r),
                f.Body().set_request_id(e),
                f.Body().set_action(t);
              const T =
                await FGS.FamilyGroupsService.RespondToRequestedPurchase(n, f);
              return X(T.GetEResult(), "RespondToRequestedPurchase"), T.Body();
            },
            onSuccess: () => {
              m.invalidateQueries({ queryKey: Yr(r) }),
                m.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        const aa = (0, Bi.createContext)({
          errorMessage: null,
          setErrorMessage: (r) => {},
        });
        function sa(r, e) {
          return r;
        }
        var oa = ((r) => (
          (r[(r.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (r[(r.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (r[(r.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (r[(r.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (r[(r.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (r[(r.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (r[(r.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (r[(r.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (r[(r.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (r[(r.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (r[(r.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (r[(r.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (r[(r.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (r[(r.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (r[(r.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (r[(r.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (r[(r.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          r
        ))(oa || {});
        const sn = {
          [F.nO]: "#FamilyManagement_ErrorInternalServerError",
          [F.zi]: "#FamilyManagement_ErrorInternalServerError",
          [F.S7]: "#FamilyManagement_ErrorInternalServerError",
          [F.Te]: "#FamilyManagement_ErrorInternalServerError",
          [F.sW]: "#FamilyManagement_AccessDenied",
          [F.p]: "#FamilyManagement_ErrorNoMatch",
          [F.uN]: "#FamilyManagement_ErrorAccountDisabled",
          [F.$U]: "#FamilyManagement_ErrorNoActiveInvite",
          [F.ZI]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [F.UT]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [F.TE]: "#FamilyManagement_ErrorLimitExceeded",
          [F.B1]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [F.Nb]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [F.h_]: { 5: "#FamilyManagement_RateLimitExceeded_CreateFamily" },
          [F.lG]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [F.zL]: { 2: "#FamilyManagement_Household_JoinFamily" },
          [F.iC]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [F.Ze]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [F.fb]: { 4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails" },
        };
        function la(r, e, t, n) {
          let m = "";
          if (r in sn) {
            const f = sn[r];
            if (typeof f == "string") m = Localize(f, ...n);
            else {
              const T = f;
              t in T && (m = Localize(T[t], ...n));
            }
          }
          return sa(Localize(e, m), r);
        }
        function on() {
          const { setErrorMessage: r } = useContext(aa);
          return { setErrorMessage: r };
        }
        function ls(r, e, t) {
          const { setErrorMessage: n } = on(),
            { isError: m, error: f } = r,
            T = ia();
          useEffect(() => {
            if (m) {
              const P = f,
                x = [];
              if (
                P === k_EResultLimitExceeded ||
                P === k_EResultAccountActivityLimitExceeded
              ) {
                let H;
                T.isSuccess &&
                  T.data &&
                  (H = T.data.cooldown_seconds_remaining()),
                  x.push(ca(H));
              }
              n(la(P, e, t, x));
            }
          }, [n, m, f, e, t, T.isSuccess, T.data]);
        }
        function ca(r) {
          if (!r) return Localize("#FamilyManagement_LoadingPlaceholder");
          const e = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return LocalizeDateHumanReadable(Date.now() / 1e3 + r, e);
        }
        function cs(r, e) {
          const { setErrorMessage: t } = on();
          useEffect(() => {
            r.isError && t(Localize(e));
          }, [t, r.isError, e]);
        }
        function us(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: Ut(r),
            queryFn: async () => {
              const t = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetChangeLog_Request,
              );
              t.Body().set_family_groupid(r);
              const n = await FGS.FamilyGroupsService.GetChangeLog(e, t);
              return (
                X(n.GetEResult(), "GetFamilyGroupChangeLog"), n.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function ms(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: $n(r),
            queryFn: async () => {
              const t = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              t.Body().set_gidshoppingcart(r);
              const n = await ShoppingCartService.GetShoppingCartContents(e, t);
              return X(n.GetEResult(), "GetShoppingCartContents"), n.Body();
            },
          });
        }
        function ds(r) {
          const e = useActiveServiceTransport(),
            t = useQueryClient();
          return useMutation({
            mutationFn: async (n) => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              m.Body().set_family_groupid(r), m.Body().set_cooldown_count(n);
              const f =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(e, m);
              return X(f.GetEResult(), "SetFamilyCooldownOverrides"), f.Body();
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: kt(r) }),
                t.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function ua(r, e) {
          return `${Z.TS.STORE_BASE_URL}cart/purchaserequest/${r}/${e}`;
        }
        function fs(r) {
          return `${Config.STORE_BASE_URL}cart/purchaserequested/${r}`;
        }
        function ys(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              m.Body().set_steamid(r), m.Body().set_name(e);
              const f = await FGS.FamilyGroupsService.CreateFamilyGroup(t, m);
              return (
                X(f.GetEResult(), "ForceCreateFamilyGroup"),
                f.Body().family_groupid()
              );
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Qt(r) });
            },
          });
        }
        function ln(r, e, t, n) {
          return [
            "get_shared_library_apps",
            r,
            e == null ? void 0 : e.bIncludeOwn,
            e == null ? void 0 : e.bIncludeExcluded,
            e == null ? void 0 : e.bIncludeNonGames,
            e == null ? void 0 : e.for_account_id,
            t,
            n,
          ];
        }
        function ps(r, e) {
          const t = useActiveAccount(),
            { settings: n, mapAppsAllowed: m } = useParentalSettings(t).data,
            f = useIsCurrentUserParentalLocked(),
            T = useActiveServiceTransport(),
            {
              bIncludeOwn: P,
              bIncludeExcluded: x,
              bIncludeNonGames: H,
              for_account_id: te,
            } = e != null ? e : {},
            jt = (e == null ? void 0 : e.enabled) !== void 0 ? e.enabled : !0,
            D = ln(r, e, n, f),
            gt = (A) => !BIsAppBlocked(A.appid(), f, n, m);
          return useQuery({
            queryKey: D,
            queryFn: async () => {
              const A = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetSharedLibraryApps_Request,
              );
              if (
                (A.Body().set_family_groupid(r),
                A.Body().set_include_own(P),
                A.Body().set_include_excluded(x),
                A.Body().set_language(Config.LANGUAGE),
                A.Body().set_include_non_games(H),
                te)
              ) {
                const Vt = CSteamID.InitFromAccountID(te, Config.EUNIVERSE);
                A.Body().set_steamid(Vt.ConvertTo64BitString());
              }
              const Yt = await FGS.FamilyGroupsService.GetSharedLibraryApps(
                T,
                A,
              );
              return (
                X(Yt.GetEResult(), "GetSharedLibraryApps"),
                Yt.Body()
                  .apps()
                  .filter(gt)
                  .map((Vt) => Vt.toObject())
              );
            },
            enabled: !!n && jt,
            placeholderData: keepPreviousData,
            select: e == null ? void 0 : e.select,
          });
        }
        function gs(r, e) {
          var t;
          const n = useQueryClient(),
            m = useActiveAccount(),
            { settings: f } =
              (t = useParentalSettings(m).data) != null ? t : {},
            T = useIsCurrentUserParentalLocked(),
            P = ln(r, e, f, T);
          return useCallback(() => {
            n.invalidateQueries({ queryKey: P });
          }, [n, P]);
        }
        function dr(r, e) {
          let t = r.sort_as || r.name,
            n = e.sort_as || e.name;
          return stricmp(t, n);
        }
        function cn(r, e) {
          return e.rt_time_acquired - r.rt_time_acquired || dr(r, e);
        }
        function ma(r, e, t) {
          var n, m;
          if (!r && e.length === 0) return !0;
          const f = (n = t.name) == null ? void 0 : n.toLocaleLowerCase(),
            T = r.toLocaleLowerCase(),
            P =
              (f == null ? void 0 : f.includes(T)) ||
              ((m = t.appid) == null ? void 0 : m.toString()) == T;
          let x = !0;
          if (t.content_descriptors) {
            for (const H of e)
              if (!t.content_descriptors.includes(H)) {
                x = !1;
                break;
              }
          }
          return P && x;
        }
        function Bs(r, e, t, n = []) {
          const m = useMemo(
              () => (r == null ? void 0 : r.filter((T) => ma(t, n, T))) || [],
              [r, t, n],
            ),
            f = useCallback(
              (T, P) => {
                let x = dr;
                switch (e) {
                  case "alpha-asc":
                    x = dr;
                    break;
                  case "alpha-desc":
                    x = (H, te) => dr(te, H);
                    break;
                  case "date_acquired-asc":
                    x = (H, te) => cn(te, H);
                    break;
                  case "date_acquired-desc":
                    x = cn;
                    break;
                }
                return x(T, P);
              },
              [e],
            );
          return useMemo(() => m.slice().sort(f), [m, f]);
        }
        function bs(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient(),
            m = useActiveAccount();
          return useMutation({
            mutationFn: async (f) => {
              const T = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmJoinFamilyGroup_Request,
              );
              T.Body().set_family_groupid(r),
                T.Body().set_invite_id(e),
                T.Body().set_nonce(f);
              const P = await FGS.FamilyGroupsService.ConfirmJoinFamilyGroup(
                t,
                T,
              );
              return X(P.GetEResult(), "ConfirmJoinFamilyGroup"), P.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Qt(m) }),
                n.invalidateQueries({ queryKey: kt(r) }),
                n.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function ws(r, e, t) {
          const n = useActiveServiceTransport(),
            m = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const f = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
              );
              f.Body().set_family_groupid(r),
                f.Body().set_invite_id(e),
                f.Body().set_nonce(t);
              const T =
                await FGS.FamilyGroupsService.ConfirmInviteToFamilyGroup(n, f);
              return X(T.GetEResult(), "ConfirmInviteToFamilyGroup"), T.Body();
            },
            onSuccess: () => {
              m.invalidateQueries({ queryKey: kt(r) }),
                m.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function Ss(r, e) {
          const t = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              n.Body().set_family_groupid(r), n.Body().set_steamid(e);
              const m =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  t,
                  n,
                );
              return X(m.GetEResult(), "ResendInvitationToFamilyGroup"), m;
            },
          });
        }
        function da(r) {
          let e = [];
          r.sort((n, m) => n.time_start - m.time_start);
          let t = new Map();
          for (const n of r) {
            let m = t.get(n.appid);
            m === void 0
              ? t.set(n.appid, n)
              : n.time_start <= m.time_end
                ? (m.time_end = Math.max(m.time_end, n.time_end))
                : (e.push(m), t.set(n.appid, n));
          }
          for (const n of t.values()) e.push(n);
          return e.sort((n, m) => n.time_start - m.time_start), e;
        }
        function Ms(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: Zn(r),
            queryFn: async () => {
              const t = CProtoBufMsg.Init(
                FS.CPlayer_GetRecentPlaytimeSessionsForChild_Request,
              );
              t.Body().set_steamid(r);
              const n =
                await FS.PlayerService.GetRecentPlaytimeSessionsForChild(e, t);
              X(n.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let m = n.Body().toObject().sessions || [];
              return da(m);
            },
          });
        }
        function vs(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: ea(r),
            queryFn: async () => {
              var t, n;
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              m.Body().set_family_groupid(r);
              const f = await FGS.FamilyGroupsService.GetPlaytimeSummary(e, m);
              X(f.GetEResult(), "GetPlaytimeSummary");
              let T = (t = f.Body().toObject().entries) != null ? t : [];
              T.sort((x, H) => H.seconds_played - x.seconds_played);
              let P =
                (n = f.Body().toObject().entries_by_owner) != null ? n : [];
              return (
                P.sort((x, H) => H.seconds_played - x.seconds_played),
                { borrowed: T, loaned: P }
              );
            },
            enabled: r !== "0",
          });
        }
        function hs(r) {
          const e = useActiveServiceTransport(),
            t = useActiveAccount(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_UndeleteFamilyGroup_Request,
              );
              m.Body().set_family_groupid(r);
              const f = await FGS.FamilyGroupsService.UndeleteFamilyGroup(e, m);
              return X(f.GetEResult(), "UndeleteFamilyGroup"), f;
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Qt(t) }),
                n.invalidateQueries({ queryKey: kt(r) }),
                n.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function Rs(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              m.Body().set_family_groupid(r), m.Body().set_steamid(e);
              const f = await FGS.FamilyGroupsService.ForceAcceptInvite(t, m);
              return X(f.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Qt(e) }),
                n.invalidateQueries({ queryKey: kt(r) }),
                n.invalidateQueries({ queryKey: Ut(r) });
            },
          });
        }
        function Fs(r, e) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: ta(r, e),
            queryFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              n.Body().set_family_groupid(r), n.Body().set_steamid(e);
              const m = await FGS.FamilyGroupsService.GetInviteCheckResults(
                t,
                n,
              );
              return (
                X(m.GetEResult(), "GetInviteCheckResults"), m.Body().toObject()
              );
            },
          });
        }
        function _s(r, e) {
          return r.members().find((t) => t.steamid() == e);
        }
        var fa = _(71742),
          Oi = _(16277),
          un = Object.defineProperty,
          ya = Object.getOwnPropertyDescriptor,
          pa = (r, e, t) =>
            e in r
              ? un(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          Xi = (r, e, t, n) => {
            for (
              var m = n > 1 ? void 0 : n ? ya(e, t) : e, f = r.length - 1, T;
              f >= 0;
              f--
            )
              (T = r[f]) && (m = (n ? T(e, t, m) : T(m)) || m);
            return n && m && un(e, t, m), m;
          },
          bt = (r, e, t) => pa(r, typeof e != "symbol" ? e + "" : e, t);
        function mn(r) {
          const e =
            r != null && r.reported_content_id
              ? r.reported_content_id
              : `${r == null ? void 0 : r.subject_type}-${r == null ? void 0 : r.subject_group_id}-${r == null ? void 0 : r.subject_id}`;
          return `${Z.TS.COMMUNITY_BASE_URL}my/reportedcontent/${e}`;
        }
        const ga = {
          [s.Vv.wY]: {
            displayNameLoc: "#SteamNotification_HelpRequest_Author",
            titleLoc: "#SteamNotification_HelpRequest_Title",
            bodyLoc: (r) => ({
              locString: "#SteamNotification_HelpRequest_Body",
              params: [r.ticket],
            }),
            link: (r) => Z.TS.HELP_BASE_URL + "wizard/HelpRequest/" + r.ticket,
          },
          [s.Vv.wp]: {
            displayNameLoc: "#SteamNotifications_MajorSale",
            titleLoc: (r) => ({ locString: r.title }),
            bodyLoc: (r) =>
              (0, gi.Y2)() && r.link.includes("https://store.steampowered.com")
                ? "#SteamNotifications_MajorSale_SteamChina_Title"
                : r.body,
            image: (r) => r.image,
            link: (r) =>
              (0, gi.Y2)() && r.link.includes("https://store.steampowered.com")
                ? r.link.replace(
                    "https://store.steampowered.com",
                    Z.TS.STORE_BASE_URL,
                  )
                : r.link,
          },
          [s.Vv.e9]: {
            displayNameLoc: (r) => r.display_name,
            titleLoc: (r) => r.title,
            bodyLoc: (r) => r.body,
            image: (r) => r.image,
            link: (r) => r.link,
          },
          [s.Vv.oe]: {
            titleLoc: "#SteamNotification_ModeratorMessage_Title",
            link: (r) =>
              Z.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + r.msgid,
          },
          [s.Vv.FK]: {
            displayNameLoc: (r) =>
              r.is_limited_launch
                ? "#Notification_LimitedLaunchInviteTitle"
                : "#Notification_PlaytestInviteTitle",
            titleLoc: (r) =>
              r.is_limited_launch
                ? "#Notification_LimitedLaunchInviteBody"
                : "#Notification_PlaytestInviteBody",
            image: (r) => r.appid,
            link: (r) =>
              Z.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + r.appid,
          },
          [s.Vv.Iz]: {
            titleLoc: (r) => {
              switch (r.status) {
                case Oi.ZQ.hj:
                  return "#Notification_ReportedContentAction_Received";
                case Oi.ZQ.O0:
                  return "#Notification_ReportedContentAction_Sanctioned";
                case Oi.ZQ.WI:
                  return "#Notification_ReportedContentAction_Acquitted";
                case Oi.ZQ.xX:
                  return "#Notification_ReportedContentAction_DisputeReceived";
                case Oi.ZQ.qy:
                  return "#Notification_ReportedContentAction_DisputeSanctioned";
                case Oi.ZQ.Si:
                  return "#Notification_ReportedContentAction_DisputeAcquitted";
                default:
                  return "#Notification_ReportedContentAction_Unknown";
              }
            },
            link: (r) => mn(r),
          },
        };
        function dn(r) {
          if (r !== void 0) return ga[r];
        }
        function fn(r) {
          return !!dn(r);
        }
        const Ba = {
          [s.Vv.Rj]: {
            steamidAttribute: "inviter",
            titleLoc: "#SteamNotifications_FamilyInviteTitle",
            bodyLoc: "#SteamNotifications_FamilyInviteBody",
            url: (r) =>
              `${Z.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${r.familyid}`,
          },
          [s.Vv.Sx]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
            url: () =>
              `${Z.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [s.Vv.Cz]: {
            steamidAttribute: "requestor_steamid",
            titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
            bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
            url: (r) => ua(r.familyid, r.request_id),
          },
          [s.Vv.HN]: {
            steamidAttribute: "responder_steamid",
            titleLoc: (r) =>
              r.action == Rt
                ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
                : "",
            bodyLoc: (r) =>
              r.action == Rt
                ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
                : "",
            url: () =>
              `${Z.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [s.Vv.j3]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
            url: () =>
              `${Z.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [s.Vv.uH]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (r) =>
              r.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
            bodyLoc: (r) =>
              r.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
            url: () =>
              `${Z.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [s.Vv.JN]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (r) =>
              r.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
            bodyLoc: (r) =>
              r.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
            url: () =>
              `${Z.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
        };
        function yn(r) {
          if (r !== void 0) return Ba[r];
        }
        function pn(r) {
          return !!yn(r);
        }
        const ba = [
          s.Vv.v_,
          s.Vv.pZ,
          s.Vv.K,
          s.Vv.hW,
          s.Vv.XJ,
          s.Vv.an,
          s.Vv.Y9,
          s.Vv.YE,
          s.Vv.bh,
          s.Vv.js,
          s.Vv.mr,
        ];
        function gn(r) {
          return ba.findIndex((e) => e == r) != null;
        }
        function wa(r) {
          return r.hidden ? !1 : Sa(r.notification_type) && yr(r.body_data);
        }
        function Sa(r) {
          return fn(r) || pn(r) || gn(r);
        }
        var Ma = ((r) => (
          (r[(r.New = 0)] = "New"),
          (r[(r.Update = 1)] = "Update"),
          (r[(r.Remove = 2)] = "Remove"),
          r
        ))(Ma || {});
        const zs = "Test_",
          va = 3600 * 48,
          ha = 600,
          Bn = !1,
          $r = new Ti.wd("SteamNotificationStore"),
          zi = $r.Debug,
          xi = $r.Error,
          Ra = $r.Warning;
        class Pi {
          constructor() {
            bt(this, "m_rgNotificationRollups", []),
              bt(this, "m_summary", fr()),
              bt(this, "m_bLoaded", !1),
              bt(this, "m_nUnviewed", 0),
              bt(this, "m_rgNotifyServerRead", []),
              bt(this, "m_rgNotifyServerHidden", []),
              bt(this, "m_keyNotifyServerRead", ""),
              bt(this, "m_keyNotifyServerHidden", ""),
              bt(this, "m_steamid"),
              bt(this, "m_transport"),
              bt(this, "m_rgUnreadNotificationIDs", []),
              bt(this, "m_rgNewRollupIDs", new Map()),
              bt(this, "m_rgTestNotifications", []),
              bt(this, "m_currentNotificationsData", null),
              bt(this, "m_strRemoteClientID", ""),
              bt(this, "m_eTargetClientType", s.rB.D),
              bt(this, "m_fnOnNotificationCallback", null),
              (0, Tt.Gn)(this);
          }
          BHasNotificationsData() {
            return this.m_currentNotificationsData != null;
          }
          setTransport(e) {
            this.m_transport = e;
          }
          RegisterOnNotificationCallback(e) {
            this.m_fnOnNotificationCallback = e;
          }
          SetClientFilters(e, t = s.rB.D) {
            (this.m_strRemoteClientID = e), (this.m_eTargetClientType = t);
          }
          NotifyServerNotificationsRead(e) {
            this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
          }
          NotifyServerNotificationsHidden(e) {
            this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
          }
          BSendToCallbackAsNew(e) {
            return (
              !e.read &&
              !Fn(e) &&
              !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
            );
          }
          Dev_AddTestNotification(e) {}
          Dev_UpdateTestNotificationReadState(e, t) {
            const n = this.m_rgTestNotifications.findIndex(
              (m) => m.notification_id == e,
            );
            return n !== -1 && this.m_rgTestNotifications[n].read != t
              ? ((this.m_rgTestNotifications[n].read = t), !0)
              : !1;
          }
          UpdateServer() {
            if (this.m_rgNotifyServerRead.length > 0) {
              const e = q.w.Init(s.V4);
              e.Body().set_notification_ids(this.m_rgNotifyServerRead),
                s.Fn.MarkNotificationsRead(this.m_transport, e) &&
                  (this.m_rgNotifyServerRead = []);
            }
            if (this.m_rgNotifyServerHidden.length > 0) {
              const e = q.w.Init(s.b$);
              e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
                s.Fn.HideNotification(this.m_transport, e) &&
                  (this.m_rgNotifyServerHidden = []);
            }
          }
          MarkItemRead(e, t = !1) {
            var n;
            let m = this.m_rgNotificationRollups.findIndex(
              (T) => T.item.notification_id == e,
            );
            if (m === -1) {
              t
                ? this.NotifyServerNotificationsRead([e])
                : xi(
                    "Attempted to mark notification read that is not in the notification store",
                  );
              return;
            }
            let f = this.m_rgNotificationRollups[m];
            if (f.item.read) {
              xi("Attempted to mark notification read that is already read");
              return;
            }
            if (
              ((f.item.read = !0),
              ((n = f.rgunread) == null ? void 0 : n.length) > 0)
            ) {
              this.ReduceNewTotals(f.type, f.rgunread.length);
              let T = [];
              f.rgunread.forEach((P) => {
                T.push(P);
              }),
                f.rgread.push(...f.rgunread),
                (f.rgunread = []),
                this.NotifyServerNotificationsRead(T);
            }
          }
          MarkItemHidden(e) {
            var t, n;
            let m = this.m_rgNotificationRollups.findIndex(
              (T) => T.item.notification_id == e,
            );
            if (m === -1) {
              xi(
                "Attempted to mark notification hidden that is not in the notification store",
              );
              return;
            }
            let f = this.m_rgNotificationRollups[m];
            (f.item.hidden = !0),
              ((t = f.rgunread) == null ? void 0 : t.length) > 0 &&
                this.ReduceNewTotals(
                  f.type,
                  (n = f.rgunread) == null ? void 0 : n.length,
                ),
              this.NotifyServerNotificationsHidden([
                ...f.rgunread,
                ...f.rgread,
              ]);
          }
          ReduceNewTotals(e, t) {
            en(this.m_summary, e, -t);
          }
          MarkAllItemsViewed() {
            const e = q.w.Init(s.nH);
            e.Body().set_remote_client_id(this.m_strRemoteClientID),
              e.Body().set_target_client_type(this.m_eTargetClientType),
              s.Fn.MarkNotificationsViewed(this.m_transport, e),
              (this.m_nUnviewed = 0);
          }
          MarkAllItemsRead(e) {
            let t = [],
              n = [],
              m = 0;
            const f = e != null ? e : this.m_rgNotificationRollups;
            return (
              f.forEach((T, P) => {
                T.rgunread.length > 0 &&
                  (T.rgunread.forEach((x) => {
                    t.push(x);
                  }),
                  n.push(P));
              }),
              t.length > 0 &&
                ((this.m_summary = Object.assign(fr(), {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                })),
                n.forEach((T) => {
                  let P = f[T];
                  (P.item.read = !0), (P.rgunread = []);
                }),
                this.NotifyServerNotificationsRead(t)),
              t.length + m
            );
          }
          ApplyNotificationsUpdate(e) {
            var t, n;
            if (
              (zi("ApplyNotificationsUpdate", e),
              !e ||
                (!((t = e.notifications) != null && t.length) &&
                  e.pending_friend_count === void 0 &&
                  e.pending_gift_count === void 0))
            ) {
              zi("Error: ApplyNotificationsUpdate was called with no data");
              return;
            }
            if (!this.m_currentNotificationsData) {
              zi(
                "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
              );
              return;
            }
            const m = this.m_currentNotificationsData;
            (n = e.notifications) == null ||
              n.forEach((f) => {
                const T = m.notifications.findIndex(
                  (P) => P.notification_id == f.notification_id,
                );
                T != -1
                  ? Object.assign(m.notifications[T], f)
                  : m.notifications.push(f);
              }),
              e.pending_friend_count !== void 0 &&
                (this.m_currentNotificationsData.pending_friend_count =
                  e.pending_friend_count),
              e.pending_gift_count !== void 0 &&
                (this.m_currentNotificationsData.pending_gift_count =
                  e.pending_gift_count),
              e.pending_family_invite_count !== void 0 &&
                (this.m_currentNotificationsData.pending_family_invite_count =
                  e.pending_family_invite_count),
              this.ProcessNotifications();
          }
          ProcessNewNotificationPayload(e) {
            (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
              this.ProcessNotifications();
          }
          ProcessNotifications() {
            var e, t, n, m, f, T, P, x;
            let H = [],
              te = fr(),
              jt = 0;
            if (
              ((t =
                (e = this.m_currentNotificationsData) == null
                  ? void 0
                  : e.notifications) == null ||
                t.forEach((D) => {
                  this.BExcludeClientTargetedNotification(D) ||
                    (this.m_rgNotifyServerHidden.length > 0 &&
                      this.m_rgNotifyServerHidden.findIndex(
                        (A) => A == D.notification_id,
                      ) !== -1 &&
                      (D.hidden = !0),
                    wa(D) &&
                      (this.m_rgNotifyServerRead.length > 0 &&
                        this.m_rgNotifyServerRead.findIndex(
                          (A) => A == D.notification_id,
                        ) !== -1 &&
                        (D.read = !0),
                      D.read || en(te, D.notification_type, 1),
                      D.viewed || jt++,
                      this.AddNotificationToRollups(H, D)));
                }),
              H.sort((D, gt) => D.timestamp - gt.timestamp),
              this.m_fnOnNotificationCallback)
            ) {
              for (const D of H)
                if (D.bSendToCallbackAsNew)
                  this.m_rgNewRollupIDs.set(
                    D.rollup_key,
                    JSON.parse(JSON.stringify(D)),
                  ),
                    this.m_fnOnNotificationCallback(D, 0);
                else if (this.m_rgNewRollupIDs.has(D.rollup_key)) {
                  let gt = this.m_rgNewRollupIDs.get(D.rollup_key);
                  (gt.item.read != D.item.read ||
                    gt.item.viewed != D.item.viewed) &&
                    (this.m_rgNewRollupIDs.set(
                      D.rollup_key,
                      JSON.parse(JSON.stringify(D)),
                    ),
                    this.m_fnOnNotificationCallback(D, 1));
                }
              for (const [D, gt] of this.m_rgNewRollupIDs)
                H.findIndex((A) => A.rollup_key == D) == -1 &&
                  (this.m_fnOnNotificationCallback(gt, 2),
                  this.m_rgNewRollupIDs.delete(D));
            }
            H.reverse(),
              (te.pending_gifts =
                (m =
                  (n = this.m_currentNotificationsData) == null
                    ? void 0
                    : n.pending_gift_count) != null
                  ? m
                  : 0),
              (te.pending_invites =
                (T =
                  (f = this.m_currentNotificationsData) == null
                    ? void 0
                    : f.pending_friend_count) != null
                  ? T
                  : 0),
              (te.pending_family_invites =
                (x =
                  (P = this.m_currentNotificationsData) == null
                    ? void 0
                    : P.pending_family_invite_count) != null
                  ? x
                  : 0),
              (this.m_rgNotificationRollups = H.slice()),
              (this.m_summary = te),
              (this.m_bLoaded = !0),
              (this.m_nUnviewed = jt);
          }
          BExcludeClientTargetedNotification(e) {
            const t = yr(e.body_data);
            return t
              ? t.remote_client_id &&
                this.m_strRemoteClientID != t.remote_client_id
                ? !0
                : !!(
                    t.target_client_types &&
                    !(this.m_eTargetClientType & t.target_client_types)
                  )
              : !1;
          }
          BReplaceRollupItem(e, t) {
            return e.read != t.read
              ? t.read
              : (e.read && t.read) || t.viewed == e.viewed
                ? t.timestamp < e.timestamp
                : !e.viewed && t.viewed
                  ? !0
                  : e.viewed && t.viewed
                    ? t.viewed < e.viewed
                    : !1;
          }
          AddNotificationToRollups(e, t) {
            var n, m;
            const f = this.BSendToCallbackAsNew(t);
            f && this.m_rgUnreadNotificationIDs.push(t.notification_id);
            let T = t.notification_type;
            switch (T) {
              case s.Vv.v_:
                {
                  const A = pr(t);
                  if (!A) return;
                  const Yt =
                    "comment_" +
                    ((n = A.owner_steam_id) == null
                      ? void 0
                      : n.GetAccountID()) +
                    "_" +
                    A.forum_id +
                    "_" +
                    A.topic_id +
                    (A.brate_limited ? "_ratelimited" : "");
                  let Vt = e.findIndex((N) => N.rollup_key == Yt);
                  if (Vt == -1)
                    e.push({
                      type: T,
                      rollup_key: Yt,
                      item: t,
                      rollup_count: 1,
                      timestamp: t.timestamp,
                      rgunread: t.read ? [] : [t.notification_id],
                      rgread: t.read ? [t.notification_id] : [],
                      bSendToCallbackAsNew: f,
                      url: bn(A),
                    });
                  else {
                    let N = e[Vt];
                    this.BReplaceRollupItem(t, N.item) &&
                      ((!Bn || N.item.read) && (N.url = bn(A)),
                      (N.item = t),
                      (N.timestamp = t.timestamp),
                      (N.bSendToCallbackAsNew = f)),
                      (N.rollup_count = N.rollup_count + 1),
                      t.read
                        ? N.rgread.push(t.notification_id)
                        : N.rgunread.push(t.notification_id);
                  }
                }
                break;
              case s.Vv.hW:
                const P = pr(t);
                if (P) {
                  const A = "item_" + P.appid;
                  this.AddNotificationToRollupByAppID(e, t, A, T, f, P.appid);
                }
                break;
              case s.Vv.Y9:
                const x = (m = pr(t)) == null ? void 0 : m.appid.toString();
                if (x) {
                  const A = "asyncgame_" + x;
                  this.AddNotificationToRollupByAppID(e, t, A, T, f, x);
                }
                break;
              case s.Vv.Iz:
                const H = pr(t),
                  te = H == null ? void 0 : H.report_id,
                  jt = mn(H),
                  D = `contentreport_${te}`;
                let gt = e.findIndex((A) => A.rollup_key == D);
                if (gt == -1)
                  e.push({
                    type: T,
                    rollup_key: D,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bSendToCallbackAsNew: f,
                    url: jt,
                  });
                else {
                  let A = e[gt];
                  this.BReplaceRollupItem(t, A.item) &&
                    ((!Bn || A.item.read) && (A.url = jt),
                    (A.item = t),
                    (A.timestamp = t.timestamp),
                    (A.bSendToCallbackAsNew = f)),
                    (A.rollup_count = A.rollup_count + 1),
                    t.read
                      ? A.rgread.push(t.notification_id)
                      : A.rgunread.push(t.notification_id);
                }
                break;
              default:
                e.push({
                  type: T,
                  rollup_key: t.notification_id,
                  item: t,
                  timestamp: t.timestamp,
                  rgunread: t.read ? [] : [t.notification_id],
                  rgread: t.read ? [t.notification_id] : [],
                  bSendToCallbackAsNew: f,
                });
                break;
            }
          }
          AddNotificationToRollupByAppID(e, t, n, m, f, T) {
            let P = e.findIndex((x) => x.rollup_key == n);
            if (P == -1)
              e.push({
                type: m,
                rollup_key: n,
                item: t,
                rollup_count: 1,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bSendToCallbackAsNew: f,
              });
            else {
              let x = e[P];
              this.BReplaceRollupItem(t, x.item) &&
                ((x.item = t),
                (x.timestamp = t.timestamp),
                (x.bSendToCallbackAsNew = f)),
                (x.rollup_count = x.rollup_count + 1),
                t.read
                  ? x.rgread.push(t.notification_id)
                  : x.rgunread.push(t.notification_id);
            }
          }
        }
        Xi([Tt.sH], Pi.prototype, "m_rgNotificationRollups", 2),
          Xi([Tt.sH], Pi.prototype, "m_summary", 2),
          Xi([Tt.sH], Pi.prototype, "m_bLoaded", 2),
          Xi([Tt.sH], Pi.prototype, "m_nUnviewed", 2),
          Xi([Tt.XI], Pi.prototype, "ProcessNotifications", 1);
        function fr() {
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
        async function Fa(r, e, t, n, m, f = !0, T = !1) {
          var P;
          if (!e) throw new Error("Invalid steamid for GetSteamNotifications");
          const x = q.w.Init(s.GG);
          x.Body().set_language(t),
            x.Body().set_include_read(f),
            x.Body().set_include_pinned_counts(!0),
            x.Body().set_include_confirmation_count(T);
          const H = await s.Fn.GetSteamNotifications(r, x);
          if (H.GetEResult() !== F.R)
            throw (
              (Ra(
                `Received error from GetSteamNotifications. Result ${H.GetEResult()}. Transport ${H.Hdr().transport_error()}`,
              ),
              new Error(`Error from GetSteamNotifications: ${H.GetEResult()}`))
            );
          const te = H.Body().toObject();
          return (
            n &&
              (te.notifications =
                (P = te.notifications) == null
                  ? void 0
                  : P.filter((jt) => !Rn(jt.notification_type, n, m))),
            te
          );
        }
        async function _a(r, e) {
          var t;
          if (!r || !r.steamid || !r.contextid || !r.appid || !r.assetid)
            return xi("Item notification missing required attributes"), null;
          const n = q.w.Init(d.z9);
          n.Body().set_steamid(r.steamid),
            n.Body().set_contextid(r.contextid),
            n.Body().set_appid(parseInt(r.appid)),
            n.Body().set_get_descriptions(!0),
            n.Body().set_language(Z.TS.LANGUAGE);
          let m = new d.ur();
          m.add_assetids(r.assetid), n.Body().set_filters(m);
          const f = await d.tB.GetInventoryItemsWithDescriptions(e, n);
          return f.GetEResult() !== F.R
            ? (xi(
                "Request for steam item metadata did not succeed",
                f.GetEResult(),
              ),
              null)
            : (t = f.Body().toObject().descriptions[0]) != null
              ? t
              : null;
        }
        const za = "ItemMetadata";
        function Ta(r) {
          return [
            `${za}_${r == null ? void 0 : r.steamid}_${r == null ? void 0 : r.appid}_${r == null ? void 0 : r.contextid}_${r == null ? void 0 : r.assetid}`,
          ];
        }
        async function Ts(r, e) {
          if (!e) return [];
          const t = CProtoBufMsg.Init(
            CSteamNotification_GetPreferences_Request,
          );
          let n = await SteamNotificationService.GetPreferences(r, t);
          return n.GetEResult() != k_EResultOK
            ? (xi("Getting notification preferences failed " + n.GetEResult()),
              [])
            : n.Body().toObject().preferences;
        }
        function Na(r, e, t) {
          let n = Zr(s.Vv.hW, r.body_data);
          n.steamid = e;
          let m = (0, xt.I)({
            queryKey: Ta(n),
            queryFn: async () => _a(n, t),
            staleTime: 1 / 0,
          });
          return m.isSuccess ? m.data : null;
        }
        function bn(r) {
          let e = `comment/${r.comment_type}/bounce/${r.owner_steam_id.ConvertTo64BitString()}/${r.forum_id}/?feature2=${r.topic_id}`;
          return r.last_post > 0 && (e += "&tscn=" + (r.last_post - 1)), e;
        }
        function wn(r) {
          return r.comment_type == G.Yd;
        }
        function Sn(r) {
          return r == null ? void 0 : r.bhas_friend;
        }
        function Mn(r) {
          return r.comment_type == G.Yd;
        }
        function Ga(r) {
          return wn(r) || Sn(r);
        }
        function Ca(r) {
          return Mn(r);
        }
        function yr(r) {
          if (!r) return null;
          try {
            return JSON.parse(r);
          } catch {
            zi("Steam notification in invalid format:", r);
          }
          return null;
        }
        function pr(r) {
          return Zr(r.notification_type, r.body_data);
        }
        function ja(r) {
          var e;
          return Zr(r.type, (e = r.item) == null ? void 0 : e.body_data);
        }
        function Zr(r, e) {
          var t, n, m, f, T, P, x, H, te, jt, D, gt, A, Yt, Vt;
          let N = yr(e);
          if (!N) return null;
          switch (r) {
            case s.Vv.K:
              return N.gifter_account;
            case s.Vv.YE:
              return {
                responder_steamid: N.responder_steamid,
                package_id: N.package_id,
                bundle_id: N.bundle_id,
              };
            case s.Vv.an:
              return parseInt(N.sender);
            case s.Vv.XJ:
              return {
                appid: N.appid,
                count: (t = N.count) != null ? t : 1,
                appids: (n = N.appids) != null ? n : [],
              };
            case s.Vv.Y9:
              return !N.appid ||
                !N.state ||
                (N.state != Jt.GO && N.state != Jt.cf)
                ? (zi("Async game notification invalid data", e), null)
                : { appid: parseInt(N.appid), state: parseInt(N.state) };
            case s.Vv.v_:
              let gr = {
                owner_steam_id: N.owner_steam_id
                  ? new $t.b(N.owner_steam_id)
                  : null,
                bclan_account: $i(N.bclan_account),
                title: N.title,
                comment: N.text,
                time: N.last_post,
                comment_type: Number(N.type),
                topic_id: N.topic_id,
                forum_id: N.forum_id,
                account_steam_id: N.account_id
                  ? $t.b.InitFromAccountID(N.account_id)
                  : null,
                bhas_friend: $i(N.bhas_friend),
                bis_forum: $i(N.bis_forum),
                last_post: N.last_post,
                bsubscribed: $i(N.subscribed),
                bis_owner: $i(N.bis_owner),
                brate_limited: !!N.brate_limited,
              };
              return (
                N.json_data &&
                  (gr.json_data = {
                    app_id: parseInt(N.json_data.app_id),
                    file_type: parseInt(N.json_data.file_type),
                    title: N.json_data.title,
                  }),
                gr
              );
            case s.Vv.pZ:
              return {
                requestorID: parseInt(N.requestor_id),
                state: N.state ? parseInt(N.state) : j.abL,
              };
            case s.Vv.hW:
              return {
                appid: parseInt(N.app_id),
                assetid: (m = N.asset_id) != null ? m : "",
                contextid: (f = N.context_id) != null ? f : "",
              };
            case s.Vv.js:
              return {
                url: (T = N.url) != null ? T : "",
                strGameName: (P = N.content_app_name) != null ? P : "",
                mediaType: (x = N.media_type) != null ? x : "clip",
                secDuration: parseFloat(
                  (H = N.duration_seconds) != null ? H : 0,
                ),
                nSize: parseInt((te = N.file_size) != null ? te : 0),
                strMachineName: N.machine_name,
                rtExpiration: N.expiration,
                thumbnailURL: N.thumbnail_url,
              };
            case s.Vv.Iz:
              return {
                report_id: (jt = N.report_id) != null ? jt : "",
                reported_content_id:
                  (D = N.reported_content_id) != null ? D : "",
                subject_type: (gt = N.subject_type) != null ? gt : 0,
                subject_group_id: (A = N.subject_group_id) != null ? A : "0",
                subject_id: (Yt = N.subject_id) != null ? Yt : "0",
                status: (Vt = N.status) != null ? Vt : 0,
              };
            default:
              return (
                zi(
                  "GetCustomNotificationDataByType called with unexpected type:" +
                    r,
                  e,
                ),
                null
              );
          }
        }
        function $i(r) {
          var e;
          if (typeof r == "undefined") return !1;
          if (typeof r == "number") return r > 0;
          if (typeof r == "string")
            switch ((e = r.toLowerCase()) == null ? void 0 : e.trim()) {
              case "true":
              case "1":
                return !0;
              default:
                return !1;
            }
          return zi("notification contained unexpected boolean value"), !1;
        }
        function vn(r) {
          let e = 0;
          return (
            (function (n) {
              return Object.keys(n);
            })(r).forEach((n) => {
              n != "pending_gifts" && n != "pending_invites" && (e += r[n]);
            }),
            e
          );
        }
        const qa = {
          [s.Vv.Jo]: { rollup_field: void 0, eFeature: void 0 },
          [s.Vv.yh]: { rollup_field: void 0, eFeature: void 0 },
          [s.Vv.K]: { rollup_field: "gifts", eFeature: I.uX },
          [s.Vv.v_]: { rollup_field: "comments", eFeature: I.qR },
          [s.Vv.hW]: { rollup_field: "inventory_items", eFeature: I.WJ },
          [s.Vv.pZ]: { rollup_field: "invites", eFeature: I.M },
          [s.Vv.wp]: { rollup_field: "major_sale", eFeature: I.ip },
          [s.Vv.Ol]: { rollup_field: void 0, eFeature: void 0 },
          [s.Vv.XJ]: { rollup_field: "wishlist", eFeature: I.ip },
          [s.Vv.an]: { rollup_field: "trade_offers", eFeature: I.ut },
          [s.Vv.e9]: { rollup_field: "general", eFeature: I.uX },
          [s.Vv.wY]: { rollup_field: "help_request_replies", eFeature: I.uX },
          [s.Vv.Y9]: { rollup_field: "async_game_updates", eFeature: I.uX },
          [s.Vv.oe]: { rollup_field: "moderator_messages", eFeature: I.qR },
          [s.Vv.Sx]: {
            rollup_field: "parental_feature_requests",
            eFeature: I.uX,
          },
          [s.Vv.Rj]: { rollup_field: "family_invites", eFeature: I.uX },
          [s.Vv.Cz]: {
            rollup_field: "family_purchase_requests",
            eFeature: I.uX,
          },
          [s.Vv.j3]: {
            rollup_field: "parental_playtime_requests",
            eFeature: I.uX,
          },
          [s.Vv.HN]: {
            rollup_field: "family_purchase_request_responses",
            eFeature: I.uX,
          },
          [s.Vv.uH]: {
            rollup_field: "parental_feature_access_responses",
            eFeature: I.uX,
          },
          [s.Vv.JN]: {
            rollup_field: "parental_playtime_responses",
            eFeature: I.uX,
          },
          [s.Vv.YE]: { rollup_field: "requested_game_added", eFeature: I.uX },
          [s.Vv.js]: { rollup_field: void 0, eFeature: I.uX },
          [s.Vv.bh]: { rollup_field: void 0, eFeature: I.uX },
          [s.Vv.FK]: { rollup_field: "playtest_invites", eFeature: I.ip },
          [s.Vv.mr]: { rollup_field: void 0, eFeature: I.ut },
          [s.Vv.Iz]: { rollup_field: void 0, eFeature: I.uX },
        };
        function hn(r) {
          const e = qa[r];
          return (0, fa.wT)(!!e, `Missing notification type data for ${r}`), e;
        }
        function Rn(r, e, t) {
          var n;
          if (!e) return !1;
          const m = hn(r);
          return (0, Yn.EC)(
            e,
            (n = m == null ? void 0 : m.eFeature) != null ? n : I.JC,
            t,
          );
        }
        function en(r, e, t) {
          (0, Tt.h5)(() => {
            const n = hn(e);
            n != null &&
              n.rollup_field &&
              (r[n.rollup_field] = Math.max(0, r[n.rollup_field] + t));
          });
        }
        function Ia(r) {
          return !r.viewed || r.viewed + ha > (0, pi._2)();
        }
        function Fn(r) {
          return r.viewed && r.viewed + va < (0, pi._2)();
        }
        function Ns(r) {
          return (
            vn(r) +
              r.pending_gifts +
              r.pending_invites +
              r.pending_family_invites >
            0
          );
        }
      },
      90297: (Ot, Xt, _) => {
        "use strict";
        _.d(Xt, { Rd: () => ji, R1: () => Ri, QR: () => Vi });
        var s = _(7850),
          q = _(90626),
          F = _(99412),
          j = _(48453),
          d = _(42993),
          xt = _(3692),
          Tt = _(68312),
          $t = _(76559),
          I = _(80862),
          G = _(18210);
        function Jt(l) {
          if (!l) return;
          const u = typeof l == "string" ? l : l.locString,
            y = typeof l == "string" ? [] : l.params || [];
          if (u) return u[0] !== "#" ? u : (0, G.we)(u, ...y);
        }
        function pi(l, u) {
          return q.useMemo(() => {
            if (l === void 0) return null;
            let y = (0, I.K9)(l);
            const p = (0, I.u5)(u);
            if (!y || !p) return null;
            const b =
                typeof y.displayNameLoc != "function"
                  ? { locString: y.displayNameLoc }
                  : y.displayNameLoc(p),
              R =
                typeof y.titleLoc != "function"
                  ? { locString: y.titleLoc }
                  : y.titleLoc(p),
              S =
                typeof y.bodyLoc != "function"
                  ? { locString: y.bodyLoc }
                  : y.bodyLoc(p),
              w = typeof y.image != "function" ? y.image : y.image(p),
              v = typeof y.link != "function" ? y.link : y.link(p);
            return {
              display_name: Jt(b),
              title: Jt(R),
              body: Jt(S),
              image: w,
              link: v,
            };
          }, [u, l]);
        }
        function Ti(l, u) {
          return q.useMemo(() => {
            const y = l,
              p = (0, I.aq)(y),
              b = (0, I.u5)(u);
            if (!p) return null;
            const R =
                typeof p.titleLoc == "string" ? p.titleLoc : p.titleLoc(b),
              S = typeof p.bodyLoc == "string" ? p.bodyLoc : p.bodyLoc(b),
              w = typeof p.url == "string" ? p.url : p.url(b),
              v =
                typeof p.steamidAttribute == "string"
                  ? p.steamidAttribute
                  : p.steamidAttribute(b),
              z = b && b[v];
            return { strTitleLoc: R, strBodyLoc: S, strUrl: w, steamid: z };
          }, [u, l]);
        }
        function Z(l) {
          return q.useMemo(
            () => ((0, I.V4)(l.type) ? (0, I.bP)(l) : null),
            [l],
          );
        }
        var gi = _(87910),
          Bi = _.n(gi),
          c = _(36118),
          o = _(51079),
          i = _(72865),
          ht = _(98609),
          Dt = _(35098),
          Rt = _(19298),
          wt = _(36707),
          bi = _(92264),
          Ai = _(36174),
          Zi = _(93761),
          k = _.n(Zi);
        const er = !0;
        function tr(l) {
          let {
              onActivate: u,
              icon: y,
              body: p,
              eUIMode: b,
              classNames: R,
            } = l,
            S = u,
            w = k().PinnedTemplate;
          return (
            b == F.ogI
              ? (w = k().PinnedTemplateDesktop)
              : b == F.yrU && (w = k().PinnedTemplateWeb),
            (w = (0, wt.A)(w, R)),
            (0, s.jsx)(Rt.Z, {
              className: w,
              onActivate: S,
              children: (0, s.jsx)("div", {
                className: k().Content,
                children: (0, s.jsxs)("div", {
                  className: k().PinnedBody,
                  children: [
                    (0, s.jsx)("span", { className: k().Icon, children: y }),
                    p,
                  ],
                }),
              }),
            })
          );
        }
        function ir(l) {
          const {
            count: u,
            icon: y,
            onActivate: p,
            strBody: b,
            bAlwaysShow: R,
            eUIMode: S,
            classNames: w,
            visible: v,
          } = l;
          return !u && !R
            ? null
            : (0, s.jsx)(tr, {
                icon: y,
                body: b,
                onActivate: p,
                eUIMode: S,
                classNames: w,
                visible: v,
              });
        }
        var rr = ((l) => (
          (l[(l.none = 0)] = "none"),
          (l[(l.loadingActive = 1)] = "loadingActive"),
          (l[(l.loadingComplete = 2)] = "loadingComplete"),
          l
        ))(rr || {});
        function Pt(l) {
          let {
            nUnread: u,
            location: y,
            eUIMode: p,
            bLoading: b,
            footer: R,
            bNewIndicator: S,
          } = l;
          const [w, v] = q.useState(b ? 1 : 0),
            [z, h] = q.useState(void 0);
          q.useEffect(() => {
            w == 1 && !b ? v(2) : w == 2 && b && v(1);
          }, [w, b]),
            q.useEffect(() => {
              let E =
                parseInt(k().loadinganimationiterationcount) *
                parseInt(k().loadinganimationduration) *
                1e3;
              const $ = window.setTimeout(() => v(0), E);
              return () => window.clearTimeout($);
            }, []),
            q.useEffect(() => {
              u && u > 0 && z !== k().Unread && y != F.miK && y != F.PN1
                ? h(k().Unread)
                : !u && z == k().Unread && h(k().MarkedRead);
            }, [u, y, z]);
          let M = l.onActivate;
          M || (M = () => console.log("Missing activate function")),
            w == 1 && (M = void 0);
          let C = k().StandardTemplate;
          y == F.oYe
            ? (C = k().AllNotificationsTemplate)
            : y == F.miK
              ? (C = k().DesktopToastTemplate)
              : (p == F.ogI || p == F.yrU) && (C = k().StandardTemplateDesktop);
          let L = null;
          if (w != 0 && y != F.miK && y != F.PN1) {
            let E = w == 2 ? k().Hide : null;
            L = (0, s.jsxs)("div", {
              className: (0, wt.A)(k().LoadingTemplate, E),
              children: [
                (0, s.jsx)("div", {
                  className: (0, wt.A)(
                    k().StandardLogoDimensions,
                    k().ShimmerLogo,
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: k().Content,
                  children: [
                    (0, s.jsx)("div", {
                      className: (0, wt.A)(k().Header, k().ShimmerHeader),
                    }),
                    (0, s.jsx)("div", {
                      className: (0, wt.A)(k().Body, k().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, s.jsxs)(Rt.Z, {
            onActivate: M,
            className: k().StandardTemplateContainer,
            onOptionsButton: l.onOptionsButton,
            onOptionsActionDescription: l.onOptionsButtonDesc,
            children: [
              (0, s.jsxs)("div", {
                className: (0, wt.A)(C, z),
                children: [
                  (0, s.jsx)("div", {
                    className: k().StandardLogoDimensions,
                    children: l.logo,
                  }),
                  l.personaStatus &&
                    (0, s.jsx)("div", {
                      className: (0, wt.A)(k().AvatarStatus, l.personaStatus),
                    }),
                  (0, s.jsx)("div", {
                    className: k().Content,
                    children: l.children,
                  }),
                  L,
                  S && (0, s.jsx)(Br, { location: y }),
                ],
              }),
              R || null,
            ],
          });
        }
        function Br(l) {
          const { location: u } = l;
          return !er || u != F.B3I
            ? null
            : (0, s.jsx)("div", {
                className: k().NewIndicator,
                children: (0, s.jsx)(c.jlt, {}),
              });
        }
        function At(l) {
          let {
            icon: u,
            title: y,
            timestamp: p,
            location: b,
            fnRenderTimestamp: R,
          } = l;
          const S = !!p && (b == F.B3I || b == F.oYe);
          let w;
          return (
            b == F.oYe ? (w = br) : (w = R != null ? R : sr),
            (0, s.jsxs)("div", {
              className: k().Header,
              children: [
                (0, s.jsx)(nr, { icon: u }),
                !!y && (0, s.jsx)(ar, { title: y }),
                S && w({ timestamp: p }),
              ],
            })
          );
        }
        function nr(l) {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              !!l.icon &&
                (0, s.jsx)("div", { className: k().Icon, children: l.icon }),
              " ",
            ],
          });
        }
        function ar(l) {
          return (0, s.jsx)("div", { className: k().Title, children: l.title });
        }
        function qt(l) {
          let u = (0, wt.A)(
            k().StandardNotificationDescription,
            l.multiline && k().Multiline,
          );
          return (0, s.jsx)("div", { className: u, children: l.children });
        }
        function It(l) {
          let u = (0, wt.A)(
            k().StandardNotificationSubText,
            l.multiline && k().Multiline,
          );
          return (0, s.jsx)("div", { className: u, children: l.children });
        }
        function br(l) {
          if (l.timestamp === void 0) return null;
          let u = new Date(),
            y = new Date(l.timestamp * 1e3),
            p = (0, bi.KC)(l.timestamp);
          return (
            (0, Ai.JD)(u, y) ||
              (p = (0, bi._l)(l.timestamp, !1, !1, !1) + " " + p),
            (0, s.jsx)("div", { className: k().Timestamp, children: p })
          );
        }
        function sr(l) {
          if (l.timestamp === void 0) return null;
          let u = new Date(),
            y = new Date(l.timestamp * 1e3),
            p = (0, Ai.JD)(u, y)
              ? (0, bi.KC)(l.timestamp)
              : (0, bi._l)(l.timestamp, !1, !1, !1);
          return (0, s.jsx)("div", { className: k().Timestamp, children: p });
        }
        function wr(l) {
          const { text: u } = l;
          return jsx("div", { className: styles.BottomBar, children: u });
        }
        function ee(l) {
          let {
              playerName: u,
              nickName: y,
              parenthesizeNickNames: p,
              state: b,
            } = l,
            R = !!y,
            S = R && !p,
            w = S ? y : u,
            v = b == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", { className: classnames(v), children: w }),
              p &&
                R &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", y, ")"],
                }),
              S &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        var Li = _(25236),
          Ni = _(68495),
          or = _(3166);
        function Ft(l) {
          return l == F.PN1;
        }
        function Ei(l, u) {
          return q.useCallback(
            (y) => {
              l && l(y), u && u();
            },
            [l, u],
          );
        }
        var Gi = _(97786),
          Nt = _.n(Gi);
        function _t(l) {
          let {
              onActivate: u,
              onDismiss: y,
              logo: p,
              icon: b,
              title: R,
              body: S,
              personaStatus: w,
              className: v,
              singleLineOnly: z,
              fullWidth: h,
            } = l,
            M = Ei(u, y),
            C = (L) => {
              L.button == 1 && y && y();
            };
          return (0, s.jsxs)(Rt.Z, {
            className: (0, wt.A)(Nt().ShortTemplate, !z && Nt().TwoLine, v),
            onActivate: M,
            onMouseDown: C,
            children: [
              (0, s.jsx)("div", {
                className: Nt().ShortLogoDimensions,
                children: p,
              }),
              l.personaStatus &&
                (0, s.jsx)("div", {
                  className: (0, wt.A)(Nt().AvatarStatus, w),
                }),
              (0, s.jsxs)("div", {
                className: (0, wt.A)(Nt().Content, h && Nt().FullWidth),
                children: [
                  (0, s.jsxs)("div", {
                    className: Nt().Header,
                    children: [
                      !!b &&
                        (0, s.jsx)("div", {
                          className: Nt().Icon,
                          children: b,
                        }),
                      (0, s.jsx)("div", { className: Nt().Title, children: R }),
                    ],
                  }),
                  (0, s.jsx)("div", { className: Nt().Body, children: S }),
                ],
              }),
            ],
          });
        }
        var lr = _(92012),
          ie = _.n(lr),
          ki = _(813),
          St = _(40358),
          Di = _(21721);
        function wi(l) {
          switch (l) {
            case j.Vv.wp:
              return (0, s.jsx)(c.ilR, {});
            case j.Vv.wY:
              return (0, s.jsx)(c.Cv4, {});
            default:
              return (0, s.jsx)(c.Qte, {});
          }
        }
        function Si(l) {
          var u, y;
          let {
            fallbackLogo: p,
            data: b,
            location: R,
            icon: S,
            timestamp: w,
            fnRenderTimestamp: v,
            onHide: z,
          } = l;
          const h = typeof (b == null ? void 0 : b.image) == "number",
            M = h ? { appid: b.image } : void 0,
            { data: C } = (0, St.J$)(M),
            { data: L } = (0, St.lv)(M),
            E = (u = b == null ? void 0 : b.display_name) != null ? u : "",
            $ =
              (y = b == null ? void 0 : b.title) != null
                ? y
                : b == null
                  ? void 0
                  : b.body,
            V = b != null && b.title ? b.body : null,
            K = Ft(R),
            re = M && (!C || !L),
            [Wt, ne] = q.useState(!1),
            Y = () => ne(!0);
          let Gt = null;
          if (h) Gt = Zt(L, p, K);
          else {
            const ti = K
              ? ie().ShortLogoDimensions
              : ie().StandardLogoDimensions;
            Gt =
              b != null && b.image && !Wt
                ? (0, s.jsx)("img", { className: ti, src: b.image, onError: Y })
                : p;
          }
          return K
            ? (0, s.jsx)(_t, { ...l, logo: Gt, icon: S, title: E, body: $ })
            : (0, s.jsx)(vt, {
                children: (0, s.jsxs)(Pt, {
                  logo: Gt,
                  bLoading: re,
                  ...l,
                  children: [
                    (0, s.jsx)(At, {
                      icon: S,
                      title: E,
                      timestamp: w,
                      location: R,
                      fnRenderTimestamp: v,
                    }),
                    (0, s.jsx)(qt, { multiline: !V, children: $ }),
                    !!V && (0, s.jsx)(It, { children: V }),
                    z ? (0, s.jsx)(Mt, { onHide: z }) : null,
                  ],
                }),
              });
        }
        function g(l) {
          let {
            displayName: u,
            location: y,
            icon: p,
            timestamp: b,
            fnRenderTimestamp: R,
            onHide: S,
          } = l;
          const w = Ft(y),
            v = (0, G.we)("#SteamNotifications_TradeOffer_Title"),
            z = w
              ? (0, G.we)(
                  "#SteamNotifications_TradeOffer_Body_Short",
                  u != null ? u : "",
                )
              : (0, G.we)("#SteamNotifications_TradeOffer_Body"),
            h = (0, G.we)(
              "#SteamNotifications_TradeOffer_Description",
              u != null ? u : "",
            ),
            M = !u;
          return w
            ? (0, s.jsx)(_t, {
                ...l,
                logo: l.logo,
                icon: l.icon,
                title: v,
                body: z,
              })
            : (0, s.jsx)(vt, {
                children: (0, s.jsxs)(Pt, {
                  bLoading: M,
                  ...l,
                  children: [
                    (0, s.jsx)(At, {
                      icon: p,
                      title: v,
                      timestamp: b,
                      location: y,
                      fnRenderTimestamp: R,
                    }),
                    (0, s.jsx)(qt, { children: z }),
                    (0, s.jsx)(It, { children: h }),
                    S ? (0, s.jsx)(Mt, { onHide: S }) : null,
                  ],
                }),
              });
        }
        const cr = (l) => {
          let {
            location: u,
            icon: y,
            timestamp: p,
            fnRenderTimestamp: b,
            onHide: R,
          } = l;
          const S = Ft(u),
            w = (0, G.we)("#SteamNotifications_TradeReversal_Title"),
            v = S
              ? (0, G.we)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, G.we)("#SteamNotifications_TradeReversal_Body"),
            z = (0, G.we)("#SteamNotifications_TradeReversal_Description");
          return S
            ? (0, s.jsx)(_t, {
                ...l,
                logo: l.logo,
                icon: l.icon,
                title: w,
                body: v,
              })
            : (0, s.jsx)(vt, {
                children: (0, s.jsxs)(Pt, {
                  ...l,
                  children: [
                    (0, s.jsx)(At, {
                      icon: y,
                      title: w,
                      timestamp: p,
                      location: u,
                      fnRenderTimestamp: b,
                    }),
                    (0, s.jsx)(qt, { children: v }),
                    (0, s.jsx)(It, { children: z }),
                    R ? (0, s.jsx)(Mt, { onHide: R }) : null,
                  ],
                }),
              });
        };
        function Lt(l) {
          let {
            senderName: u,
            location: y,
            icon: p,
            timestamp: b,
            fnRenderTimestamp: R,
            onHide: S,
          } = l;
          const w = Ft(y),
            v = w
              ? (0, G.we)(
                  "#Notification_GiftReceived_Body_Short",
                  u != null ? u : "",
                )
              : (0, G.we)("#Notification_GiftReceived_Body"),
            z = u
              ? (0, G.we)("#Notification_GiftReceived_Description", u)
              : null,
            h = (0, G.we)("#Notification_GiftReceived_Title"),
            M = !u;
          return w
            ? (0, s.jsx)(_t, {
                ...l,
                logo: l.logo,
                icon: l.icon,
                title: h,
                body: v,
              })
            : (0, s.jsx)(vt, {
                children: (0, s.jsxs)(Pt, {
                  bLoading: M,
                  ...l,
                  children: [
                    (0, s.jsx)(At, {
                      icon: p,
                      title: h,
                      timestamp: b,
                      location: y,
                      fnRenderTimestamp: R,
                    }),
                    (0, s.jsx)(qt, { multiline: !z, children: v }),
                    !!z && (0, s.jsx)(It, { children: z }),
                    S ? (0, s.jsx)(Mt, { onHide: S }) : null,
                  ],
                }),
              });
        }
        function Et(l) {
          let {
            requestorName: u,
            requestorAvatarURL: y,
            fallbackLogo: p,
            data: b,
            location: R,
            icon: S,
            timestamp: w,
            fnRenderTimestamp: v,
            onHide: z,
          } = l;
          const h = Ft(R);
          let M = "";
          u && b.state == F.UXi
            ? (M = (0, G.we)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : u && b.state == F._UC
              ? (M = (0, G.we)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : u &&
                (M = (0, G.we)("#SteamNotifications_FriendInvite_Description"));
          const [C, L] = q.useState(!1),
            E = () => L(!0);
          let $ = p;
          if (y && !C) {
            const re = b.state == F._UC && R != F.PN1,
              Wt = h ? ie().ShortLogoDimensions : ie().StandardLogoDimensions;
            $ = (0, s.jsxs)(Rt.Z, {
              style: { position: "relative" },
              children: [
                re && (0, s.jsx)(c.GSe, { className: ie().FriendIndicator }),
                (0, s.jsx)("img", { className: Wt, src: y, onError: E }),
              ],
            });
          }
          const V =
              u || (0, G.we)("#SteamNotifications_FriendInvite_Body_Generic"),
            K = !u;
          return h
            ? (0, s.jsx)(_t, {
                ...l,
                logo: $,
                icon: l.icon,
                title: (0, G.we)("#Notification_FriendInvite_Title"),
                body: V,
              })
            : (0, s.jsx)(vt, {
                children: (0, s.jsxs)(Pt, {
                  logo: $,
                  bLoading: K,
                  ...l,
                  children: [
                    (0, s.jsx)(At, {
                      icon: S,
                      title: (0, G.we)("#Notification_FriendInvite_Title"),
                      timestamp: w,
                      location: R,
                      fnRenderTimestamp: v,
                    }),
                    (0, s.jsx)(qt, { multiline: !M, children: V }),
                    !!M && (0, s.jsx)(It, { children: M }),
                    z ? (0, s.jsx)(Mt, { onHide: z }) : null,
                  ],
                }),
              });
        }
        function Ci(l) {
          let {
            itemState: u,
            fallbackLogo: y,
            data: p,
            location: b,
            icon: R,
            timestamp: S,
            appName: w,
            fnRenderTimestamp: v,
            nUnread: z,
            onHide: h,
          } = l;
          const [M, C] = q.useState(!1),
            L = () => C(!0),
            E = Ft(b);
          let $ = y;
          if (u != null && u.icon_url && !M) {
            let ne = `${or.TS.COMMUNITY_CDN_URL}economy/image/${u.icon_url}`,
              Y = u.background_color ? "#" + u.background_color : null;
            const Gt = E
              ? ie().ShortLogoDimensions
              : ie().StandardLogoDimensions;
            $ = (0, s.jsx)(Rt.Z, {
              style: { position: "relative" },
              children: (0, s.jsx)("img", {
                className: Gt,
                style: {
                  backgroundColor: Y != null ? Y : void 0,
                  justifyContent: "center",
                },
                src: ne,
                onError: L,
              }),
            });
          }
          const V = p.appid == 753;
          let K = null;
          if (z !== void 0 && z > 1) {
            const ne = z - 1;
            V
              ? (K = (0, G.we)("#Notification_Item_RollupMore_Steam", ne))
              : w
                ? (K = (0, G.we)(
                    "#Notification_Item_RollupMore_GameName",
                    ne,
                    w,
                  ))
                : (K = (0, G.we)("#Notification_Item_RollupMore", ne));
          } else
            w &&
              (K = V ? w : (0, G.we)("#Notification_Item_Single_GameName", w));
          const re =
              u != null && u.name
                ? u.name
                : (0, G.we)("#Notification_Item_Body_Generic"),
            Wt = !u;
          if (E) {
            let ne = "";
            return (
              w
                ? (ne =
                    z > 1
                      ? (0, G.we)("#Notification_Item_Body_Short_Plural", w)
                      : (0, G.we)("#Notification_Item_Body_Short", w))
                : (ne = (0, G.we)("#Notification_Item_Body_Generic")),
              (0, s.jsx)(_t, {
                ...l,
                logo: $,
                icon: l.icon,
                title: (0, G.we)("#Notification_ItemAnnouncement_Body"),
                body: ne,
              })
            );
          }
          return (0, s.jsx)(vt, {
            children: (0, s.jsxs)(Pt, {
              logo: $,
              bLoading: Wt,
              ...l,
              children: [
                (0, s.jsx)(At, {
                  icon: R,
                  title: (0, G.we)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: S,
                  location: b,
                  fnRenderTimestamp: v,
                }),
                (0, s.jsx)(qt, { multiline: !K, children: re }),
                !!K && (0, s.jsx)(It, { children: K }),
                h ? (0, s.jsx)(Mt, { onHide: h }) : null,
              ],
            }),
          });
        }
        function ur(l) {
          let {
            fallbackLogo: u,
            data: y,
            location: p,
            icon: b,
            timestamp: R,
            fnRenderTimestamp: S,
            onHide: w,
          } = l;
          const v = Ft(p),
            z = y.appid ? { appid: y.appid } : void 0,
            { data: h } = (0, St.J$)(z),
            { data: M } = (0, St.lv)(z),
            C = Zt(M, u, v),
            L = z && (!h || !M);
          let E = "";
          return (
            y.state == Li.GO
              ? (E =
                  v && h != null && h.name
                    ? (0, G.we)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        h.name,
                      )
                    : (0, G.we)("#SteamNotification_AsyncGame_Action"))
              : y.state == Li.cf &&
                (E =
                  v && h != null && h.name
                    ? (0, G.we)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        h.name,
                      )
                    : (0, G.we)("#SteamNotification_AsyncGame_Done")),
            v
              ? (0, s.jsx)(_t, {
                  ...l,
                  logo: C,
                  icon: l.icon,
                  title: (0, G.we)("#SteamNotification_AsyncGame_Title"),
                  body: E,
                })
              : (0, s.jsx)(vt, {
                  children: (0, s.jsxs)(Pt, {
                    logo: C,
                    bLoading: L,
                    ...l,
                    children: [
                      (0, s.jsx)(At, {
                        icon: b,
                        title: (0, G.we)("#SteamNotification_AsyncGame_Title"),
                        timestamp: R,
                        location: p,
                        fnRenderTimestamp: S,
                      }),
                      (0, s.jsx)(qt, { children: E }),
                      (0, s.jsx)(It, { children: h == null ? void 0 : h.name }),
                      w ? (0, s.jsx)(Mt, { onHide: w }) : null,
                    ],
                  }),
                })
          );
        }
        function Mi(l) {
          const {
              title: u,
              body: y,
              logoUrl: p,
              bDataLoading: b,
              icon: R,
              onHide: S,
              location: w,
              timestamp: v,
              fnRenderTimestamp: z,
              onActivate: h,
              personaStatus: M,
            } = l,
            C = Ft(w),
            L = C ? ie().ShortLogoDimensions : ie().StandardLogoDimensions,
            E = (0, s.jsx)(Rt.Z, {
              style: { position: "relative" },
              children: (0, s.jsx)("img", {
                className: L,
                style: { justifyContent: "center" },
                src: p,
              }),
            });
          return C
            ? (0, s.jsx)(_t, {
                logo: E,
                icon: l.icon,
                title: u,
                body: y,
                onActivate: h,
                personaStatus: M,
              })
            : (0, s.jsx)(vt, {
                children: (0, s.jsxs)(Pt, {
                  logo: E,
                  bLoading: b,
                  onActivate: h,
                  personaStatus: M,
                  ...l,
                  children: [
                    (0, s.jsx)(At, {
                      icon: R,
                      title: u,
                      timestamp: v,
                      location: w,
                      fnRenderTimestamp: z,
                    }),
                    (0, s.jsx)(qt, { multiline: !0, children: y }),
                    S ? (0, s.jsx)(Mt, { onHide: S }) : null,
                  ],
                }),
              });
        }
        function fi(l) {
          var u, y, p, b, R;
          let {
              currentUserSteamID: S,
              fallbackLogo: w,
              postedByDisplayName: v,
              postedByAvatarURL: z,
              ownerDisplayName: h,
              data: M,
              location: C,
              icon: L,
              timestamp: E,
              fnRenderTimestamp: $,
              nUnread: V,
              appName: K,
              onHide: re,
              commentTitle: Wt,
              commentBody: ne,
            } = l,
            Y = Wt;
          const Gt = Ft(C),
            [ti, Ji] = q.useState(!1),
            yi = () => Ji(!0),
            [tn, Fi] = (0, ki.TB)(
              M.bclan_account
                ? (u = M.owner_steam_id) == null
                  ? void 0
                  : u.GetAccountID()
                : void 0,
            ),
            Ii = (0, I.hr)(M) ? v : null,
            _i = (0, I.T4)(M) ? h : null;
          M.comment_type == Ni.Yd
            ? ((y = M.owner_steam_id) == null
                ? void 0
                : y.ConvertTo64BitString()) == S
              ? C == F.oYe && Ii
                ? (Y = (0, G.we)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    Ii,
                  ))
                : (Y = (0, G.we)("#SteamNotifications_Comment_Your_Profile"))
              : _i
                ? C == F.oYe && Ii
                  ? (Y = (0, G.we)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      Ii,
                      _i,
                    ))
                  : (Y = (0, G.we)(
                      "#SteamNotifications_Comment_Player_Profile",
                      _i,
                    ))
                : (Y = (0, G.we)("#SteamNotifications_Comment_Profile"))
            : M.comment_type == Ni.Dq &&
                ((p = M.json_data) == null ? void 0 : p.file_type) == F.pmA
              ? ((b = M.owner_steam_id) == null
                  ? void 0
                  : b.ConvertTo64BitString()) == S
                ? K
                  ? (Y = (0, G.we)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      K,
                    ))
                  : (Y = (0, G.we)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : K
                  ? (Y = (0, G.we)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      K,
                    ))
                  : (Y = (0, G.we)("#SteamNotifications_Comment_Screenshot"))
              : !Y &&
                (R = M.json_data) != null &&
                R.title &&
                (Y = M.json_data.title);
          let Yi = null;
          M.brate_limited
            ? M.comment_type == Ni.Bv && M.bis_forum && ne
              ? (Y = (0, G.we)(
                  "#SteamNotifications_Comment_RateLimited_Forum",
                  ne,
                ))
              : (Y = (0, G.we)("#SteamNotifications_Comment_RateLimited"))
            : M.comment_type == Ni.Bv && M.bis_forum && ne
              ? (Yi = (0, s.jsx)(It, {
                  children: (0, G.we)(
                    "#SteamNotifications_Comment_NewDiscussion",
                    ne,
                  ),
                }))
              : (Yi = (0, s.jsxs)(It, { children: ['"', ne, '"'] }));
          let Ct = (0, G.we)("#SteamNotifications_Comment"),
            Wi = null;
          if (V !== void 0 && V > 1) {
            const ii = "+" + (V - 1);
            C == F.oYe
              ? (Wi = (0, s.jsx)("div", {
                  className: ie().AllNotificationsCommentPlus,
                  children: ii,
                }))
              : (Ct = Ct + " " + ii);
          }
          let Ui = w;
          if (!ti) {
            const ii = Gt
              ? ie().ShortLogoDimensions
              : ie().StandardLogoDimensions;
            if (z && (0, I.n8)(M)) {
              const Rr = M.bhas_friend && C != F.PN1;
              Ui = (0, s.jsxs)("div", {
                style: { position: "relative" },
                children: [
                  Rr && (0, s.jsx)(c.GSe, { className: ie().FriendIndicator }),
                  (0, s.jsx)("img", { className: ii, src: z, onError: yi }),
                ],
              });
            } else
              Fi != null &&
                Fi.avatar_medium_url &&
                (Ui = (0, s.jsx)("img", {
                  className: ii,
                  src: Fi.avatar_medium_url,
                  onError: yi,
                }));
          }
          return Gt
            ? (0, s.jsx)(_t, {
                ...l,
                logo: Ui,
                icon: l.icon,
                title: Ct,
                body: Y,
              })
            : (0, s.jsx)(vt, {
                children: (0, s.jsxs)(Pt, {
                  logo: Ui,
                  ...l,
                  children: [
                    (0, s.jsx)(At, {
                      icon: L,
                      title: Ct,
                      timestamp: E,
                      location: C,
                      fnRenderTimestamp: $,
                    }),
                    (0, s.jsx)(qt, { children: Y }),
                    Yi,
                    Wi,
                    re ? (0, s.jsx)(Mt, { onHide: re }) : null,
                  ],
                }),
              });
        }
        function vi(l) {
          var u;
          let {
            fallbackLogo: y,
            data: p,
            location: b,
            icon: R,
            timestamp: S,
            fnRenderTimestamp: w,
            onHide: v,
          } = l;
          const z = Ft(b),
            h = p.appid ? { appid: p.appid } : void 0,
            { data: M } = (0, St.J$)(h),
            { data: C } = (0, St.lv)(h),
            { data: L } = (0, St.Q_)(h),
            E = Zt(C, y, z),
            $ = h && (!M || !C || !L);
          let V = "",
            K = null;
          if (M) {
            const re = (u = M.name) != null ? u : "";
            (V = re),
              p.count == 1
                ? z
                  ? (V = (0, G.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, s.jsx)("span", { children: re }),
                      (0, s.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: L == null ? void 0 : L.formatted_final_price,
                      }),
                    ))
                  : (K = (0, G.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, s.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: L == null ? void 0 : L.formatted_final_price,
                      }),
                    ))
                : p.count == 2
                  ? z
                    ? (V = (0, G.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        re,
                      ))
                    : (K = (0, G.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : z
                    ? (V = (0, G.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        re,
                        p.count - 1,
                      ))
                    : (K = (0, G.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        p.count - 1,
                      ));
          } else V = (0, G.we)("#SteamNotifications_Wishlist_Generic");
          return z
            ? (0, s.jsx)(_t, {
                ...l,
                logo: E,
                icon: l.icon,
                title: (0, G.we)("#SteamNotifications_Wishlist"),
                body: V,
              })
            : (0, s.jsx)(vt, {
                children: (0, s.jsxs)(Pt, {
                  logo: E,
                  bLoading: $,
                  ...l,
                  children: [
                    (0, s.jsx)(At, {
                      icon: R,
                      title: (0, G.we)("#SteamNotifications_Wishlist"),
                      timestamp: S,
                      location: b,
                      fnRenderTimestamp: w,
                    }),
                    (0, s.jsx)(qt, { multiline: !K, children: V }),
                    !!K && (0, s.jsx)(It, { children: K }),
                    v ? (0, s.jsx)(Mt, { onHide: v }) : null,
                  ],
                }),
              });
        }
        function Zt(l, u, y = !1) {
          const [p, b] = q.useState(!1),
            R = () => b(!0);
          if (!l || p)
            return (0, s.jsx)(Rt.Z, {
              style: { position: "relative" },
              children: u,
            });
          const S = (0, Di.b0)(l, "community_icon");
          return y
            ? (0, s.jsx)(Rt.Z, {
                style: { position: "relative" },
                children: (0, s.jsx)("img", {
                  src: S,
                  className: ie().ShortLogoDimensions,
                  onError: R,
                }),
              })
            : (0, s.jsxs)(Rt.Z, {
                style: { position: "relative" },
                children: [
                  (0, s.jsx)("img", {
                    className: (0, wt.A)(ie().WishlistBlurImage),
                    src: S,
                    onError: R,
                  }),
                  (0, s.jsx)("img", {
                    src: S,
                    onError: R,
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
        function Mt(l) {
          const u = (p) => {
              p.stopPropagation(), p.preventDefault();
            },
            y = (p) => {
              l.onHide(), p.stopPropagation(), p.preventDefault();
            };
          return (0, s.jsx)("div", {
            className: ie().HideButton,
            onClick: y,
            onMouseDown: u,
            children: (0, s.jsx)(c.zHo, {}),
          });
        }
        function vt(l) {
          return (0, s.jsx)("div", {
            className: ie().SteamNotificationWrapper,
            children: l.children,
          });
        }
        var hi = _(65946),
          ei = _(24544);
        let J = null,
          a = !1;
        function B() {
          return J || (J = new ei.s({ BIsFriend: (0, ei.Q)() })), J;
        }
        function Q() {
          const l = (0, Tt.KV)(),
            u = (0, Tt.rX)(),
            y = (0, hi.q3)(() => B().m_bInitialized);
          return (
            !y &&
              !a &&
              ((a = !0), J.Init(or.iA.accountid, l, u).finally(() => (a = !1))),
            [y, J]
          );
        }
        function ji(l) {
          let u = null;
          return (
            (0, I.sR)(l)
              ? (u = Ht)
              : (0, I.IC)(l)
                ? (u = qi)
                : mr[l] && (u = mr[l]),
            u
          );
        }
        function Ri(l) {
          const { rollup: u, uimode: y, location: p } = l,
            b = ji(u.type);
          return b
            ? (0, s.jsx)(o.Ay, {
                controller: "notification",
                method: (0, F.fLp)(y),
                submethod: (0, F.ey3)(p),
                children: (0, s.jsx)(b, { ...l }),
              })
            : null;
        }
        function qi(l) {
          var u, y;
          const {
              rollup: p,
              onNotificationClick: b,
              location: R,
              uimode: S,
              onHide: w,
            } = l,
            v = pi(p.item.notification_type, p.item.body_data),
            z =
              (u = (0, j.p$)(p.type).replace(
                "k_ESteamNotificationType_",
                "",
              )) == null
                ? void 0
                : u.toLowerCase(),
            h = (0, i.aL)(
              (y = v == null ? void 0 : v.link) != null ? y : "#",
              z,
            ),
            M = () =>
              b(() => {
                v != null && v.link && h && window.location.assign(h);
              }, p.item),
            C = (L) => b(() => {}, p.item, L);
          return (0, s.jsx)("a", {
            href: v != null && v.link ? h : "#",
            onMouseDown: C,
            children: (0, s.jsx)(Si, {
              icon: wi(p.type),
              onActivate: M,
              fallbackLogo: (0, s.jsx)(c.Qte, {}),
              location: R,
              eUIMode: S,
              data: v,
              timestamp: p.timestamp,
              nUnread: p.rgunread.length,
              bNewIndicator: (0, I.Rl)(p.item),
              onHide: w,
            }),
          });
        }
        function Bt(l) {
          const {
              rollup: u,
              onNotificationClick: y,
              location: p,
              uimode: b,
              onHide: R,
            } = l,
            S = `${ht.TS.COMMUNITY_BASE_URL}my/gamenotifications/`,
            w = () => y(() => window.location.assign(S), u.item),
            v = (h) => y(() => {}, u.item, h),
            z = Z(u);
          return (0, s.jsx)("a", {
            href: S,
            onMouseDown: v,
            children: (0, s.jsx)(ur, {
              icon: (0, s.jsx)(c.Qte, {}),
              fallbackLogo: (0, s.jsx)(c.wC1, {}),
              onActivate: w,
              location: p,
              eUIMode: b,
              data: z,
              timestamp: u.timestamp,
              nUnread: u.rgunread.length,
              bNewIndicator: (0, I.Rl)(u.item),
              onHide: R,
            }),
          });
        }
        function zt(l) {
          var u, y;
          const {
              steamid: p,
              url: b,
              strTitleLoc: R,
              strBodyLoc: S,
              rollup: w,
              onNotificationClick: v,
              location: z,
              uimode: h,
              onHide: M,
            } = l,
            { data: C } = (0, Dt.js)(p),
            L = (re) => v(() => {}, w.item, re),
            E = () => v(() => window.location.assign(b), w.item);
          if (!S) return null;
          const $ = !C,
            V = (0, G.we)(
              R,
              (u = C == null ? void 0 : C.m_strPlayerName) != null ? u : "",
            ),
            K = (0, G.we)(
              S,
              (y = C == null ? void 0 : C.m_strPlayerName) != null ? y : "",
            );
          return (0, s.jsx)("a", {
            href: b,
            onMouseDown: L,
            children: (0, s.jsx)(Mi, {
              title: V,
              body: K,
              bDataLoading: $,
              logoUrl: C == null ? void 0 : C.avatar_url_medium,
              icon: (0, s.jsx)(c.Qte, {}),
              onActivate: E,
              location: z,
              eUIMode: h,
              timestamp: w.timestamp,
              nUnread: w.rgunread.length,
              bNewIndicator: (0, I.Rl)(w.item),
              onHide: M,
            }),
          });
        }
        function Ht(l) {
          const u = Ti(l.rollup.type, l.rollup.item.body_data);
          if (!u) return null;
          const { strTitleLoc: y, strBodyLoc: p, strUrl: b, steamid: R } = u;
          return !R || !y || !p
            ? null
            : (0, s.jsx)(zt, {
                steamid: R,
                url: b,
                strTitleLoc: y,
                strBodyLoc: p,
                ...l,
              });
        }
        function Sr(l) {
          const {
              rollup: u,
              onNotificationClick: y,
              location: p,
              uimode: b,
              onHide: R,
            } = l,
            S = (0, d.LH)(),
            w = Z(u),
            v = `${ht.TS.COMMUNITY_BASE_URL}profiles/${S}/tradeoffers`,
            z = () => y(() => window.location.assign(v), u.item),
            h = (L) => y(() => {}, u.item, L),
            M = $t.b.InitFromAccountID(w),
            { data: C } = (0, Dt.js)(M.GetAccountID());
          return (0, s.jsx)("a", {
            href: v,
            onMouseDown: h,
            children: (0, s.jsx)(g, {
              logo: (0, s.jsx)(c.Qte, {}),
              icon: (0, s.jsx)(c.h20, {}),
              onActivate: z,
              location: p,
              eUIMode: b,
              timestamp: u.timestamp,
              nUnread: u.rgunread.length,
              displayName: C == null ? void 0 : C.m_strPlayerName,
              bNewIndicator: (0, I.Rl)(u.item),
              onHide: R,
            }),
          });
        }
        const Hi = (l) => {
          const {
              rollup: u,
              onNotificationClick: y,
              location: p,
              uimode: b,
              onHide: R,
            } = l,
            S = `${ht.TS.COMMUNITY_BASE_URL}my/tradehistory`,
            w = () => y(() => window.location.assign(S), u.item),
            v = (z) => y(() => {}, u.item, z);
          return (0, s.jsx)("a", {
            href: S,
            onMouseDown: v,
            children: (0, s.jsx)(cr, {
              logo: (0, s.jsx)(c.Qte, {}),
              icon: (0, s.jsx)(c.h20, {}),
              onActivate: w,
              location: p,
              eUIMode: b,
              timestamp: u.timestamp,
              nUnread: u.rgunread.length,
              bNewIndicator: (0, I.Rl)(u.item),
              onHide: R,
            }),
          });
        };
        function Mr(l) {
          const {
              rollup: u,
              onNotificationClick: y,
              location: p,
              uimode: b,
              onHide: R,
            } = l,
            S = (0, d.LH)(),
            w = `${ht.TS.COMMUNITY_BASE_URL}profiles/${S}/inventory/#pending_gifts`,
            v = () => y(() => window.location.assign(w), u.item),
            z = (L) => y(() => {}, u.item, L),
            h = Z(u),
            M = $t.b.InitFromAccountID(h),
            { data: C } = (0, Dt.js)(M.GetAccountID());
          return (0, s.jsx)("a", {
            href: w,
            onMouseDown: z,
            children: (0, s.jsx)(Lt, {
              logo: (0, s.jsx)(c.Qte, {}),
              icon: (0, s.jsx)(c.pD, {}),
              onActivate: v,
              location: p,
              eUIMode: b,
              timestamp: u.timestamp,
              nUnread: u.rgunread.length,
              senderName: C == null ? void 0 : C.m_strPlayerName,
              bNewIndicator: (0, I.Rl)(u.item),
              onHide: R,
            }),
          });
        }
        function Ki(l) {
          var u;
          const {
              rollup: y,
              onNotificationClick: p,
              location: b,
              uimode: R,
              onHide: S,
            } = l,
            w = Z(y),
            { data: v } = (0, Dt.js)(w.responder_steamid),
            z =
              w.package_id > 0
                ? { packageid: w.package_id }
                : { bundleid: w.bundle_id },
            { data: h } = (0, St.U2)(z),
            M = h ? `app/${h.appid}` : "",
            C = `${ht.TS.STORE_BASE_URL}${M}`,
            L = () => p(() => window.location.assign(C), y.item),
            E = (re) => p(() => {}, y.item, re),
            $ = !v || !h,
            V = (0, G.we)("#SteamNotifications_RequestedGameAddedTitle"),
            K = h
              ? (0, G.we)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  (u = h.name) != null ? u : "",
                )
              : "";
          return (0, s.jsx)("a", {
            href: C,
            onMouseDown: E,
            children: (0, s.jsx)(Mi, {
              title: V,
              body: K,
              bDataLoading: $,
              logoUrl: v == null ? void 0 : v.avatar_url_medium,
              icon: (0, s.jsx)(c.Qte, {}),
              onActivate: L,
              location: b,
              eUIMode: R,
              timestamp: y.timestamp,
              nUnread: y.rgunread.length,
              bNewIndicator: (0, I.Rl)(y.item),
              onHide: S,
            }),
          });
        }
        function vr(l) {
          const {
              rollup: u,
              onNotificationClick: y,
              location: p,
              uimode: b,
              onHide: R,
            } = l,
            S = (0, d.LH)(),
            w = (0, Tt.KV)(),
            v = (0, I.IL)(u.item, S, w),
            z = Z(u),
            { data: h } = (0, St.J$)(
              z != null && z.appid ? { appid: z.appid } : void 0,
            ),
            M = `${ht.TS.COMMUNITY_BASE_URL}profiles/${S}/inventory`,
            C = () => y(() => window.location.assign(M), u.item),
            L = (E) => y(() => {}, u.item, E);
          return (0, s.jsx)("a", {
            href: M,
            onMouseDown: L,
            children: (0, s.jsx)(Ci, {
              appName: h == null ? void 0 : h.name,
              icon: (0, s.jsx)(c.rI_, {}),
              fallbackLogo: (0, s.jsx)(c.Qte, {}),
              onActivate: C,
              location: p,
              eUIMode: b,
              data: z,
              timestamp: u.timestamp,
              nUnread: u.rgunread.length,
              itemState: v,
              bNewIndicator: (0, I.Rl)(u.item),
              onHide: R,
            }),
          });
        }
        function Qi(l) {
          const {
              rollup: u,
              onNotificationClick: y,
              location: p,
              uimode: b,
              onHide: R,
            } = l,
            S = (0, d.LH)(),
            w = `${ht.TS.COMMUNITY_BASE_URL}profiles/${S}/friends/pending`,
            v = () => y(() => window.location.assign(w), u.item),
            z = (C) => y(() => {}, u.item, C),
            h = Z(u),
            { data: M } = (0, Dt.js)(h.requestorID);
          return (0, s.jsx)("a", {
            href: w,
            onMouseDown: z,
            children: (0, s.jsx)(Et, {
              fallbackLogo: (0, s.jsx)(c.Gv$, {}),
              icon: (0, s.jsx)(c.sdo, {}),
              onActivate: v,
              location: p,
              eUIMode: b,
              data: h,
              timestamp: u.timestamp,
              nUnread: u.rgunread.length,
              requestorAvatarURL: M == null ? void 0 : M.avatar_url_medium,
              requestorName: M == null ? void 0 : M.m_strPlayerName,
              bNewIndicator: (0, I.Rl)(u.item),
              onHide: R,
            }),
          });
        }
        function hr(l) {
          var u, y, p, b;
          const {
              rollup: R,
              onNotificationClick: S,
              location: w,
              uimode: v,
              onHide: z,
            } = l,
            h = Z(R),
            M = (0, d.LH)(),
            C = ht.TS.COMMUNITY_BASE_URL + R.url,
            L = () => S(() => window.location.assign(C), R.item),
            E = (yi) => {
              S(() => {}, R.item, yi);
            },
            $ = (0, I.iO)(h)
              ? (u = h == null ? void 0 : h.account_steam_id) == null
                ? void 0
                : u.GetAccountID()
              : null,
            { data: V } = (0, Dt.js)($),
            K = (0, I.OT)(h)
              ? (y = h == null ? void 0 : h.owner_steam_id) == null
                ? void 0
                : y.GetAccountID()
              : null,
            { data: re } = (0, Dt.js)(K),
            Wt =
              (p = h.json_data) != null && p.app_id
                ? { appid: (b = h.json_data) == null ? void 0 : b.app_id }
                : void 0,
            { data: ne } = (0, St.J$)(Wt),
            [Y, Gt] = Q(),
            ti = Y
              ? Gt.FilterText(h.account_steam_id.GetAccountID(), h.title)
              : "",
            Ji = Y
              ? Gt.FilterText(h.account_steam_id.GetAccountID(), h.comment)
              : "";
          return (0, s.jsx)("a", {
            href: C,
            onMouseDown: E,
            children: (0, s.jsx)(fi, {
              fallbackLogo: (0, s.jsx)(c.Qte, {}),
              icon: (0, s.jsx)(c.MwB, {}),
              onActivate: L,
              location: w,
              currentUserSteamID: M,
              eUIMode: v,
              data: h,
              timestamp: R.timestamp,
              nUnread: R.rgunread.length,
              postedByAvatarURL: V == null ? void 0 : V.avatar_url_medium,
              postedByDisplayName: V == null ? void 0 : V.m_strPlayerName,
              ownerDisplayName: re == null ? void 0 : re.m_strPlayerName,
              bNewIndicator: (0, I.Rl)(R.item),
              appName: ne == null ? void 0 : ne.name,
              onHide: z,
              commentTitle: ti,
              commentBody: Ji,
              bLoading: !Y,
            }),
          });
        }
        function Kt(l) {
          const {
              rollup: u,
              onNotificationClick: y,
              location: p,
              uimode: b,
              onHide: R,
            } = l,
            S = Z(u),
            { data: w } = (0, St.J$)({ appid: S.appid }),
            [v, z] = (0, q.useState)(""),
            h = (0, d.LH)();
          (0, q.useEffect)(() => {
            var L;
            if (S.count > 1 && (L = S.appids) != null && L.length)
              return z(
                ht.TS.STORE_BASE_URL +
                  `wishlist/profiles/${h}/?wng=${S.appids.toString()}#sort=discount`,
              );
            if (w) return z(ht.TS.STORE_BASE_URL + w.store_url_path);
            const E = S.appid ? `?appid=${S.appid}` : "";
            z(
              ht.TS.STORE_BASE_URL +
                `wishlist/profiles/${h}/${E}#sort=discount`,
            );
          }, [S, w, h]);
          const M = () => y(() => window.location.assign(v), u.item),
            C = (L) => y(() => {}, u.item, L);
          return (0, s.jsx)("a", {
            href: v,
            onMouseDown: C,
            children: (0, s.jsx)(vi, {
              fallbackLogo: (0, s.jsx)(c.Qte, {}),
              icon: (0, s.jsx)(c.ilR, {}),
              onActivate: M,
              location: p,
              data: S,
              timestamp: u.timestamp,
              nUnread: u.rgunread.length,
              eUIMode: b,
              bNewIndicator: (0, I.Rl)(u.item),
              onHide: R,
            }),
          });
        }
        function Vi(l) {
          const { url: u, count: y, icon: p, strBody: b, eFeature: R } = l,
            S = (0, xt.Hw)(R);
          return !y || S
            ? null
            : (0, s.jsx)("a", {
                href: u,
                className: Bi().WebPinnedNotification,
                children: (0, s.jsx)(ir, {
                  icon: (0, s.jsx)(p, {}),
                  count: y,
                  onActivate: () => window.location.assign(u),
                  strBody: b,
                  eUIMode: F.yrU,
                  visible: !0,
                }),
              });
        }
        const mr = {
          [j.Vv.v_]: hr,
          [j.Vv.XJ]: Kt,
          [j.Vv.pZ]: Qi,
          [j.Vv.hW]: vr,
          [j.Vv.K]: Mr,
          [j.Vv.an]: Sr,
          [j.Vv.Y9]: Bt,
          [j.Vv.YE]: Ki,
          [j.Vv.mr]: Hi,
        };
      },
      97786: (Ot) => {
        Ot.exports = {
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
          BackgroundAnimation: "_3w9sEc9GApj44Kg099SX99",
          "ItemFocusAnim-darkerGrey-nocolor": "_3zMKq0Ov9QZXkvzuZaEgKn",
          "ItemFocusAnim-darkGreySettings": "qadlYXxqgL7iZI-3WagQW",
          "ItemFocusAnim-darkGrey": "_1bS3_eEfJQL1uvh9ueXwHc",
          "ItemFocusAnim-grey": "K14jHOeux9t-cKLHsLZ_R",
          "ItemFocusAnim-translucent-white-10": "_14krbCetggqySSjN1tprjy",
          "ItemFocusAnim-translucent-white-20": "_3aWvV_8F4oUsZSPZ67nkhH",
          "ItemFocusAnimBorder-darkGrey": "_3o2RzV2UyrY6P95PvLN1XB",
          "ItemFocusAnim-green": "_3UOE3rRpe9MNf7xTX3P_FD",
          focusAnimation: "_3CquyV6pQpz_ZeEYyhu-6r",
          hoverAnimation: "X3tjvkOeBNndhakzDz7bk",
        };
      },
      93761: (Ot) => {
        Ot.exports = {
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
          BackgroundAnimation: "_2THWJm_DP4_8_21tEsXSSj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3TDFCqwgSFsXL90HH5PmyQ",
          "ItemFocusAnim-darkGreySettings": "_2V49icFFKCzM2imCbWVQKz",
          "ItemFocusAnim-darkGrey": "_22M7t0tCHSgmIcx2rwkyDn",
          "ItemFocusAnim-grey": "lhtmiPnDLy_PH3nWN5N8F",
          "ItemFocusAnim-translucent-white-10": "xPu5sAUAb9KZcZojHZeok",
          "ItemFocusAnim-translucent-white-20": "_35HEPLHufn9k-5gTKvZYrO",
          "ItemFocusAnimBorder-darkGrey": "TQ99CK6pDp4hhQZWjAgGz",
          "ItemFocusAnim-green": "Rxe4URLYwNKRWJ2UaiQq2",
          focusAnimation: "_1vcir9Vcuml6I0DWyCei3i",
          hoverAnimation: "_3dGxvxYZPEwyYDQfin8FOd",
        };
      },
      92012: (Ot) => {
        Ot.exports = {
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
          BackgroundAnimation: "CHduhRYQLY29chQ5oLbsR",
          "ItemFocusAnim-darkerGrey-nocolor": "_3bOlzQnTJZnV9rTU3NSxJh",
          "ItemFocusAnim-darkGreySettings": "_1bdnqXVo31tiUrXoxNB3wW",
          "ItemFocusAnim-darkGrey": "uOdBxiMFNvmWe8MWKL2vT",
          "ItemFocusAnim-grey": "_9s1knb2MNj9uD9M1SCh2u",
          "ItemFocusAnim-translucent-white-10": "_1YVG7HtpgQ26Yx-8ZWKCBi",
          "ItemFocusAnim-translucent-white-20": "_3AcQtXPws6yWb9XuDRcDvV",
          "ItemFocusAnimBorder-darkGrey": "_2pMCkkW6W_xYaepnqR1QDg",
          "ItemFocusAnim-green": "_8sFcRF04vIhk1ou7_oMSI",
          focusAnimation: "_1etMKTqAtC0g5-7msByztO",
          hoverAnimation: "_3iNzRmuVGoWKgoa3u41Fdz",
        };
      },
      87910: (Ot) => {
        Ot.exports = { WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf" };
      },
    },
  ]);
})();
