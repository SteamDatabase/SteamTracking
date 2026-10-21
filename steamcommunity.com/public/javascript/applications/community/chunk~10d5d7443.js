/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [23972],
    {
      16277: (or, jr, Or) => {
        Or.d(jr, {
          Qi: () => v,
          v5: () => E,
          Mw: () => x,
          a9: () => T,
          KD: () => U,
          LW: () => N,
          GD: () => O,
          Nr: () => j,
          f0: () => y,
          ps: () => $,
          fL: () => Nr,
          F9: () => F,
          ZQ: () => xr,
          UC: () => w,
        });
        var xr = {};
        Or.r(xr),
          Or.d(xr, {
            WI: () => kr,
            Si: () => Zr,
            xX: () => Qr,
            qy: () => Xr,
            hj: () => vr,
            O0: () => $r,
          });
        var s = Or(80613),
          m = Or.n(s),
          i = Or(75245),
          u = Or(35038);
        const Er = 0,
          ri = 1,
          ii = 2,
          ai = 3,
          mi = 0,
          vr = 1,
          $r = 2,
          kr = 3,
          Qr = 4,
          Xr = 5,
          Zr = 6;
        function si(B) {
          return "unknown EReportedContentNotificationStatus ( " + B + " )";
        }
        class W extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.data || i.Sg(W.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: { data: { n: 1, c: k, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return i.BT(W.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new W();
            return W.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(W.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(W.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData";
          }
        }
        class k extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.key || i.Sg(k.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    key: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    value: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, a) {
            return i.BT(k.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new k();
            return k.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(k.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(k.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData_DataEntry";
          }
        }
        class Q extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.steamid || i.Sg(Q.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    start: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    count: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, a) {
            return i.BT(Q.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new Q();
            return Q.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportsSubmittedByUser_Request";
          }
        }
        class h extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.report_id || i.Sg(h.M()),
              s.Message.initialize(this, r, 0, -1, [23, 24], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    report_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reporter_steamid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_reported: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    report_reason: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    report_text: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    subject_type: {
                      n: 6,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    resolved: { n: 9, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    time_resolved: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    resolver_steamid: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_notified: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    additional_subject_data: { n: 13, c: W },
                    time_disputed: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    dispute_details: {
                      n: 15,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    dispute_resolver_steamid: {
                      n: 16,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    dispute_resolved: {
                      n: 17,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    time_dispute_resolved: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    detected_by_automation: {
                      n: 19,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    resolved_by_automation: {
                      n: 20,
                      d: Er,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    content_moderated_reason: {
                      n: 21,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    dispute_resolved_reason: {
                      n: 22,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sanctions_applied: { n: 23, c: b, r: !0, q: !0 },
                    sanctions_applied_on_dispute: { n: 24, c: b, r: !0, q: !0 },
                    reported_content_id: {
                      n: 25,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    coordinates: { n: 26, c: w },
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
          static toObject(r, a) {
            return i.BT(h.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new h();
            return h.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(h.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(h.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReport";
          }
        }
        class X extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.content_report || i.Sg(X.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    content_report: { n: 1, c: h, r: !0, q: !0 },
                    total_count: {
                      n: 2,
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
          static toObject(r, a) {
            return i.BT(X.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new X();
            return X.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(X.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(X.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportsSubmittedByUser_Response";
          }
        }
        class Z extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.steamid || i.Sg(Z.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_type: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 5,
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
          static toObject(r, a) {
            return i.BT(Z.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new Z();
            return Z.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Request";
          }
        }
        class H extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.content_report || i.Sg(H.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: { content_report: { n: 1, c: h } },
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
          static toObject(r, a) {
            return i.BT(H.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new H();
            return H.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(H.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(H.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Response";
          }
        }
        class J extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.steamid || i.Sg(J.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
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
          static toObject(r, a) {
            return i.BT(J.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new J();
            return J.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(J.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(J.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedSubjectsByOwner_Request";
          }
        }
        class z extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.subject_type || i.Sg(z.M()),
              s.Message.initialize(this, r, 0, -1, [13, 31, 32], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    owner_steam_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: { n: 5, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    resolved: { n: 6, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    time_resolved: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unresolved_report_count: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_report_time: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    resolver_steamid: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assigned_moderator_steamid: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_claimed_by_moderator: {
                      n: 12,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reports: { n: 13, c: h, r: !0, q: !0 },
                    additional_subject_data: { n: 14, c: W },
                    csam_status: {
                      n: 15,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    terrorism_status: {
                      n: 16,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    content_moderated_reason: {
                      n: 17,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    unresolved_dispute_count: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_dispute_time: {
                      n: 19,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    owner_dispute_time: {
                      n: 24,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    owner_dispute_resolved_time: {
                      n: 25,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    owner_dispute_details: {
                      n: 26,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    required_moderator_level: {
                      n: 27,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    resolved_by_automation: {
                      n: 28,
                      d: Er,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    detected_by_automation: {
                      n: 29,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    credible_threat_of_violence_status: {
                      n: 30,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sanctions_applied: { n: 31, c: b, r: !0, q: !0 },
                    sanctions_applied_after_dispute: {
                      n: 32,
                      c: b,
                      r: !0,
                      q: !0,
                    },
                    decision_reversed: {
                      n: 33,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    reported_content_id: {
                      n: 34,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    coordinates: { n: 35, c: w },
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
          static toObject(r, a) {
            return i.BT(z.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new z();
            return z.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubject";
          }
        }
        class V extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.subject || i.Sg(V.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: { subject: { n: 1, c: z, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return i.BT(V.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new V();
            return V.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(V.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(V.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedSubjectsByOwner_Response";
          }
        }
        class b extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.sanction || i.Sg(b.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    sanction: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    days: { n: 2, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    escalate_to: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = i.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(b.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new b();
            return b.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(b.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(b.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectSanction";
          }
        }
        class wr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new wr();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new wr();
            return wr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Request";
          }
        }
        class Y extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.buckets || i.Sg(Y.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    buckets: { n: 1, c: I, r: !0, q: !0 },
                    pending_for_any_moderator: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_supervisor: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_valve: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, a) {
            return i.BT(Y.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new Y();
            return Y.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response";
          }
        }
        class I extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.subject_type || i.Sg(I.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    unresolved_count: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unclaimed_count: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_disputed: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    disputed_count: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unclaimed_disputed_count: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_any_moderator: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_supervisor: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_valve: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_for_any_moderator: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_for_supervisor: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_for_valve: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    coordinates: { n: 14, c: w },
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
          static toObject(r, a) {
            return i.BT(I.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new I();
            return I.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(I.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(I.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response_Bucket";
          }
        }
        class F extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.subject_type || i.Sg(F.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, a) {
            return i.BT(F.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new F();
            return F.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(F.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(F.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectKey";
          }
        }
        class y extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.steamid || i.Sg(y.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    rtime_cooldown_ends: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    acquit_unresolved_reports: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(r, a) {
            return i.BT(y.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new y();
            return y.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateReporterCooldown_Request";
          }
        }
        class Br extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Br();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new Br();
            return Br.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateReporterCooldown_Response";
          }
        }
        class T extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.steamid || i.Sg(T.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(r, a) {
            return i.BT(T.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new T();
            return T.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(T.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(T.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Request";
          }
        }
        class K extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.rtime_cooldown_ends || i.Sg(K.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    rtime_cooldown_ends: {
                      n: 1,
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
          static toObject(r, a) {
            return i.BT(K.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new K();
            return K.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(K.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(K.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Response";
          }
        }
        class P extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.steamid || i.Sg(P.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(r, a) {
            return i.BT(P.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new P();
            return P.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(P.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(P.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Request";
          }
        }
        class L extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.preferred_level || i.Sg(L.M()),
              s.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    preferred_level: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    enabled_subject_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
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
          static toObject(r, a) {
            return i.BT(L.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new L();
            return L.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(L.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(L.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Response";
          }
        }
        class A extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.preferred_level || i.Sg(A.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    preferred_level: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    enabled_subject_types: { n: 2, c: S },
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
          static toObject(r, a) {
            return i.BT(A.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new A();
            return A.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(A.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(A.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request";
          }
        }
        class S extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.subject_types || i.Sg(S.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    subject_types: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
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
          static toObject(r, a) {
            return i.BT(S.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new S();
            return S.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(S.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(S.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
          }
        }
        class zr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new zr();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new zr();
            return zr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Response";
          }
        }
        class q extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.steamid || i.Sg(q.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    rt_start: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, a) {
            return i.BT(q.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new q();
            return q.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Request";
          }
        }
        class p extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.activities || i.Sg(p.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: { activities: { n: 1, c: D, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return i.BT(p.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new p();
            return p.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(p.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(p.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Response";
          }
        }
        class D extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.subject_type || i.Sg(D.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    timestamp: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    action: { n: 5, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    json_data: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    reported_content_id: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, a) {
            return i.BT(D.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new D();
            return D.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(D.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(D.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
          }
        }
        class M extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.rtime_start_date || i.Sg(M.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    rtime_start_date: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_end_date: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    subject_type: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = i.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(M.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new M();
            return M.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(M.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(M.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Request";
          }
        }
        class e extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              e.prototype.stats || i.Sg(e.M()),
              s.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: { stats: { n: 2, c: G, r: !0, q: !0 } },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = i.w0(e.M())), e.sm_mbf;
          }
          toObject(r = !1) {
            return e.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(e.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(e.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new e();
            return e.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(e.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(e.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response";
          }
        }
        class G extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.rtime_date || i.Sg(G.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    rtime_date: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    times_unresolved: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    times_resolved: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, a) {
            return i.BT(G.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new G();
            return G.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(G.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(G.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
          }
        }
        class d extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.subject_type || i.Sg(d.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    count: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, a) {
            return i.BT(d.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new d();
            return d.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(d.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(d.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Request";
          }
        }
        class t extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              t.prototype.subjects || i.Sg(t.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              t.sm_m ||
                (t.sm_m = {
                  proto: t,
                  fields: { subjects: { n: 1, c: n, r: !0, q: !0 } },
                }),
              t.sm_m
            );
          }
          static MBF() {
            return t.sm_mbf || (t.sm_mbf = i.w0(t.M())), t.sm_mbf;
          }
          toObject(r = !1) {
            return t.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(t.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(t.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new t();
            return t.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(t.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(t.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              t.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response";
          }
        }
        class n extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.subject_type || i.Sg(n.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = i.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(n.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new n();
            return n.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(n.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(n.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
          }
        }
        class U extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.steamid || i.Sg(U.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, a) {
            return i.BT(U.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new U();
            return U.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(U.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(U.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Request";
          }
        }
        class R extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.total_reports || i.Sg(R.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    total_reports: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_acquitted_reports: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    reports_in_last_week: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    acquitted_reports_in_last_week: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
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
          static toObject(r, a) {
            return i.BT(R.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new R();
            return R.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(R.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(R.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Response";
          }
        }
        class C extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.subject_type || i.Sg(C.M()),
              s.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    moderator_level: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    filters: { n: 3, c: w, r: !0, q: !0 },
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
          static toObject(r, a) {
            return i.BT(C.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new C();
            return C.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(C.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(C.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Request";
          }
        }
        class _ extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.subjects || i.Sg(_.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { subjects: { n: 1, c: z, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return i.BT(_.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new _();
            return _.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Response";
          }
        }
        class o extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.steamid || i.Sg(o.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(r, a) {
            return i.BT(o.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new o();
            return o.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(o.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(o.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetClaimedSubjects_Request";
          }
        }
        class rr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.subjects || i.Sg(rr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: { subjects: { n: 1, c: z, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return i.BT(rr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new rr();
            return rr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetClaimedSubjects_Response";
          }
        }
        class O extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.subjects_to_release || i.Sg(O.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { subjects_to_release: { n: 1, c: F, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return i.BT(O.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new O();
            return O.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(O.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(O.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReleaseSubjects_Request";
          }
        }
        class br extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new br();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new br();
            return br.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReleaseSubjects_Response";
          }
        }
        class w extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.subject_type || i.Sg(w.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    forum: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    topic: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    comment: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    comment_thread_id: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    sender_account_id: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    chat_message_rtime: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    chat_message_ordinal: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    chat_group_id: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    chat_room_id: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    receiver_account_id: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    published_file_id: {
                      n: 13,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    ugc_content_type: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
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
          static toObject(r, a) {
            return i.BT(w.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new w();
            return w.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(w.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(w.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ReportedContentCoordinates";
          }
        }
        class ir extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.reported_content_id || i.Sg(ir.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(r, a) {
            return i.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new ir();
            return ir.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContentByID_Request";
          }
        }
        class ar extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.subject || i.Sg(ar.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = { proto: ar, fields: { subject: { n: 1, c: z } } }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = i.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ar.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new ar();
            return ar.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContentByID_Response";
          }
        }
        class x extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.coordinates || i.Sg(x.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: { coordinates: { n: 1, c: w } },
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
          static toObject(r, a) {
            return i.BT(x.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new x();
            return x.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(x.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(x.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContent_Request";
          }
        }
        class mr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.subjects || i.Sg(mr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: { subjects: { n: 1, c: z, r: !0, q: !0 } },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = i.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(mr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new mr();
            return mr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContent_Response";
          }
        }
        class N extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.reported_content_id || i.Sg(N.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    details: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, a) {
            return i.BT(N.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new N();
            return N.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(N.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(N.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_OwnerDisputeModeration_Request";
          }
        }
        class ur extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ur();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new ur();
            return ur.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_OwnerDisputeModeration_Response";
          }
        }
        class E extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.reported_content_id || i.Sg(E.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, a) {
            return i.BT(E.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new E();
            return E.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(E.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(E.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Request";
          }
        }
        class sr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.entries || i.Sg(sr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: { entries: { n: 1, c: lr, r: !0, q: !0 } },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = i.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(sr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new sr();
            return sr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Response";
          }
        }
        class lr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.timestamp || i.Sg(lr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    actor_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    automated_action: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    action: { n: 4, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    additional_json_data: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = i.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(lr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new lr();
            return lr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Response_AuditLogEntry";
          }
        }
        class gr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.reported_content_id || i.Sg(gr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    report_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    dispute_details: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = i.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(gr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new gr();
            return gr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Request";
          }
        }
        class Wr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Wr();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new Wr();
            return Wr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Response";
          }
        }
        class j extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.reported_content_id || i.Sg(j.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, a) {
            return i.BT(j.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new j();
            return j.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(j.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(j.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SustainModerationByID_Request";
          }
        }
        class hr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new hr();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new hr();
            return hr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SustainModerationByID_Response";
          }
        }
        class v extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.reported_content_id || i.Sg(v.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    new_level: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    reason: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    note: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, a) {
            return i.BT(v.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new v();
            return v.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(v.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(v.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubjectByID_Request";
          }
        }
        class Fr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Fr();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new Fr();
            return Fr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubjectByID_Response";
          }
        }
        class cr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.reported_content_id || i.Sg(cr.M()),
              s.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    resolution: { n: 4, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    reason: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    note: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    resolved_by_automation: {
                      n: 7,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sanctions_applied: { n: 9, c: b, r: !0, q: !0 },
                    skip_lock: { n: 10, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = i.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(cr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new cr();
            return cr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveByID_Request";
          }
        }
        class yr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new yr();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new yr();
            return yr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveByID_Response";
          }
        }
        class $ extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.reported_content_id || i.Sg($.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    csam_status: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    terrorism_status: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    credible_threat_of_violence_status: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    additional_subject_data: { n: 5, c: W },
                    owner_dispute_details: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, a) {
            return i.BT($.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new $();
            return $.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj($.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0($.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectByID_Request";
          }
        }
        class Tr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Tr();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new Tr();
            return Tr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectByID_Response";
          }
        }
        class fr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.reported_content_id || i.Sg(fr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    action: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    automated_action: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    additional_json_data: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    actor_steamid: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = i.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(fr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new fr();
            return fr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_WriteToAuditLogByID_Request";
          }
        }
        class Ur extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ur();
          }
          static deserializeBinary(r) {
            let a = new (m().BinaryReader)(r),
              l = new Ur();
            return Ur.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_WriteToAuditLogByID_Response";
          }
        }
        var Nr;
        ((B) => {
          function r(g, c, f) {
            return g.SendMsg(
              "ContentModeration.ClaimBatch#1",
              (0, u.I8)(C, c, f),
              _,
              { ePrivilege: 5 },
            );
          }
          B.ClaimBatch = r;
          function a(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, u.I8)(o, c, f),
              rr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          B.GetClaimedSubjects = a;
          function l(g, c, f) {
            return g.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, u.I8)(O, c, f),
              br,
              { ePrivilege: 5 },
            );
          }
          B.ReleaseSubjects = l;
          function Hr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, u.I8)(Q, c, f),
              X,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetReportsSubmittedByUser = Hr;
          function Jr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, u.I8)(Z, c, f),
              H,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetOneReportSubmittedByUser = Jr;
          function Vr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, u.I8)(J, c, f),
              V,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          B.GetReportedSubjectsByOwner = Vr;
          function Yr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, u.I8)(wr, c, f),
              Y,
              { ePrivilege: 5 },
            );
          }
          B.GetSubjectOverview = Yr;
          function Ir(g, c, f) {
            return g.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, u.I8)(y, c, f),
              Br,
              { ePrivilege: 5 },
            );
          }
          B.UpdateReporterCooldown = Ir;
          function Kr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, u.I8)(T, c, f),
              K,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetReporterCooldown = Kr;
          function Pr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, u.I8)(P, c, f),
              L,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          B.GetModeratorPreferences = Pr;
          function Lr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, u.I8)(A, c, f),
              zr,
              { ePrivilege: 5 },
            );
          }
          B.SetModeratorPreferences = Lr;
          function Ar(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, u.I8)(q, c, f),
              p,
              { ePrivilege: 5 },
            );
          }
          B.GetModeratorActivity = Ar;
          function Sr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, u.I8)(M, c, f),
              e,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          B.GetDailyModerationStatistics = Sr;
          function qr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, u.I8)(d, c, f),
              t,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          B.GetOldestUnresolvedSubjects = qr;
          function pr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, u.I8)(U, c, f),
              R,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          B.GetReporterStats = pr;
          function Dr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetReportedContentByID#1",
              (0, u.I8)(ir, c, f),
              ar,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetReportedContentByID = Dr;
          function Mr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetReportedContent#1",
              (0, u.I8)(x, c, f),
              mr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          B.GetReportedContent = Mr;
          function er(g, c, f) {
            return g.SendMsg(
              "ContentModeration.OwnerDisputeModeration#1",
              (0, u.I8)(N, c, f),
              ur,
              { ePrivilege: 1 },
            );
          }
          B.OwnerDisputeModeration = er;
          function Gr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.GetAuditLogByID#1",
              (0, u.I8)(E, c, f),
              sr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          B.GetAuditLogByID = Gr;
          function dr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, u.I8)(gr, c, f),
              Wr,
              { ePrivilege: 1 },
            );
          }
          B.ReporterDisputeModeration = dr;
          function tr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.SustainModerationByID#1",
              (0, u.I8)(j, c, f),
              hr,
              { ePrivilege: 5 },
            );
          }
          B.SustainModerationByID = tr;
          function nr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.EscalateSubjectByID#1",
              (0, u.I8)(v, c, f),
              Fr,
              { ePrivilege: 5 },
            );
          }
          B.EscalateSubjectByID = nr;
          function Rr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.ResolveByID#1",
              (0, u.I8)(cr, c, f),
              yr,
              { ePrivilege: 5 },
            );
          }
          B.ResolveByID = Rr;
          function Cr(g, c, f) {
            return g.SendMsg(
              "ContentModeration.UpdateSubjectByID#1",
              (0, u.I8)($, c, f),
              Tr,
              { ePrivilege: 5 },
            );
          }
          B.UpdateSubjectByID = Cr;
          function _r(g, c, f) {
            return g.SendMsg(
              "ContentModeration.WriteToAuditLogByID#1",
              (0, u.I8)(fr, c, f),
              Ur,
              { ePrivilege: 5 },
            );
          }
          B.WriteToAuditLogByID = _r;
        })(Nr || (Nr = {}));
      },
    },
  ]);
})();
