/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [23972],
    {
      16277: (Yr, Nt, ze) => {
        ze.d(Nt, {
          Qi: () => xt,
          v5: () => Gt,
          Mw: () => Ft,
          a9: () => ht,
          KD: () => vt,
          LW: () => It,
          GD: () => Tt,
          Nr: () => Et,
          f0: () => Ut,
          ps: () => Dt,
          fL: () => qt,
          F9: () => Ot,
          ZQ: () => Ce,
          UC: () => Re,
        });
        var Ce = {};
        ze.r(Ce),
          ze.d(Ce, {
            WI: () => Lt,
            Si: () => Kt,
            xX: () => kt,
            qy: () => $t,
            hj: () => At,
            O0: () => Pt,
          });
        var n = ze(80613),
          i = ze.n(n),
          t = ze(75245),
          c = ze(35038);
        const Wt = 0,
          _r = 1,
          ei = 2,
          ti = 3,
          ri = 0,
          At = 1,
          Pt = 2,
          Lt = 3,
          kt = 4,
          $t = 5,
          Kt = 6;
        var Qt = Object.defineProperty,
          Xt = (m, e, r) =>
            e in m
              ? Qt(m, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (m[e] = r),
          a = (m, e, r) => Xt(m, typeof e != "symbol" ? e + "" : e, r);
        function ii(m) {
          return "unknown EReportedContentNotificationStatus ( " + m + " )";
        }
        const qe = class d extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              d.prototype.data || t.Sg(d.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: { data: { n: 1, c: Zt, r: !0, q: !0 } },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = t.w0(d.M())), d.sm_mbf;
          }
          toObject(e = !1) {
            return d.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(d.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(d.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new d();
            return d.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(d.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(d.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData";
          }
        };
        a(qe, "sm_m"), a(qe, "sm_mbf");
        let We = qe;
        const Oe = class B extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.key || t.Sg(B.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    key: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = t.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(B.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new B();
            return B.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(B.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(B.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData_DataEntry";
          }
        };
        a(Oe, "sm_m"), a(Oe, "sm_mbf");
        let Zt = Oe;
        const Ue = class b extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.steamid || t.Sg(b.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    start: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    count: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = t.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(b.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new b();
            return b.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(b.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(b.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportsSubmittedByUser_Request";
          }
        };
        a(Ue, "sm_m"), a(Ue, "sm_mbf");
        let Ht = Ue;
        const he = class g extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              g.prototype.report_id || t.Sg(g.M()),
              n.Message.initialize(this, e, 0, -1, [23, 24], null);
          }
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    report_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    reporter_steamid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_reported: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    report_reason: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    report_text: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    subject_type: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 7,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    resolved: { n: 9, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    time_resolved: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolver_steamid: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_notified: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    additional_subject_data: { n: 13, c: We },
                    time_disputed: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    dispute_details: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    dispute_resolver_steamid: {
                      n: 16,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    dispute_resolved: {
                      n: 17,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    time_dispute_resolved: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    detected_by_automation: {
                      n: 19,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    resolved_by_automation: {
                      n: 20,
                      d: Wt,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    content_moderated_reason: {
                      n: 21,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    dispute_resolved_reason: {
                      n: 22,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    sanctions_applied: { n: 23, c: je, r: !0, q: !0 },
                    sanctions_applied_on_dispute: {
                      n: 24,
                      c: je,
                      r: !0,
                      q: !0,
                    },
                    reported_content_id: {
                      n: 25,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    coordinates: { n: 26, c: Re },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = t.w0(g.M())), g.sm_mbf;
          }
          toObject(e = !1) {
            return g.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(g.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(g.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new g();
            return g.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(g.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(g.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReport";
          }
        };
        a(he, "sm_m"), a(he, "sm_mbf");
        let ve = he;
        const Te = class M extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.content_report || t.Sg(M.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    content_report: { n: 1, c: ve, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(M.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new M();
            return M.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(M.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(M.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportsSubmittedByUser_Response";
          }
        };
        a(Te, "sm_m"), a(Te, "sm_mbf");
        let Jt = Te;
        const Fe = class y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.steamid || t.Sg(y.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_type: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = t.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(y.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new y();
            return y.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(y.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(y.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Request";
          }
        };
        a(Fe, "sm_m"), a(Fe, "sm_mbf");
        let Vt = Fe;
        const Ie = class w extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.content_report || t.Sg(w.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { content_report: { n: 1, c: ve } },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = t.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(w.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new w();
            return w.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(w.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(w.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Response";
          }
        };
        a(Ie, "sm_m"), a(Ie, "sm_mbf");
        let Yt = Ie;
        const Ge = class f extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              f.prototype.steamid || t.Sg(f.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = t.w0(f.M())), f.sm_mbf;
          }
          toObject(e = !1) {
            return f.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(f.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(f.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new f();
            return f.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(f.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(f.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedSubjectsByOwner_Request";
          }
        };
        a(Ge, "sm_m"), a(Ge, "sm_mbf");
        let _t = Ge;
        const Ee = class p extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.subject_type || t.Sg(p.M()),
              n.Message.initialize(this, e, 0, -1, [13, 31, 32], null);
          }
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    owner_steam_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: { n: 5, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    resolved: { n: 6, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    time_resolved: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    unresolved_report_count: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_report_time: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolver_steamid: {
                      n: 10,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    assigned_moderator_steamid: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_claimed_by_moderator: {
                      n: 12,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    reports: { n: 13, c: ve, r: !0, q: !0 },
                    additional_subject_data: { n: 14, c: We },
                    csam_status: {
                      n: 15,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    terrorism_status: {
                      n: 16,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    content_moderated_reason: {
                      n: 17,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    unresolved_dispute_count: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_dispute_time: {
                      n: 19,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    owner_dispute_time: {
                      n: 24,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    owner_dispute_resolved_time: {
                      n: 25,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    owner_dispute_details: {
                      n: 26,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    required_moderator_level: {
                      n: 27,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    resolved_by_automation: {
                      n: 28,
                      d: Wt,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    detected_by_automation: {
                      n: 29,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    credible_threat_of_violence_status: {
                      n: 30,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    sanctions_applied: { n: 31, c: je, r: !0, q: !0 },
                    sanctions_applied_after_dispute: {
                      n: 32,
                      c: je,
                      r: !0,
                      q: !0,
                    },
                    decision_reversed: {
                      n: 33,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    reported_content_id: {
                      n: 34,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    coordinates: { n: 35, c: Re },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = t.w0(p.M())), p.sm_mbf;
          }
          toObject(e = !1) {
            return p.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(p.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(p.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new p();
            return p.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(p.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(p.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubject";
          }
        };
        a(Ee, "sm_m"), a(Ee, "sm_mbf");
        let Se = Ee;
        const xe = class z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.subject || t.Sg(z.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: { subject: { n: 1, c: Se, r: !0, q: !0 } },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = t.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(z.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new z();
            return z.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(z.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(z.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedSubjectsByOwner_Response";
          }
        };
        a(xe, "sm_m"), a(xe, "sm_mbf");
        let er = xe;
        const De = class R extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.sanction || t.Sg(R.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    sanction: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    days: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    escalate_to: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = t.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(R.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new R();
            return R.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(R.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(R.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectSanction";
          }
        };
        a(De, "sm_m"), a(De, "sm_mbf");
        let je = De;
        class me extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
            let r = new (i().BinaryReader)(e),
              s = new me();
            return me.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Request";
          }
        }
        const Ne = class S extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.buckets || t.Sg(S.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    buckets: { n: 1, c: rr, r: !0, q: !0 },
                    pending_for_any_moderator: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_supervisor: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_valve: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = t.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(S.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new S();
            return S.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(S.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(S.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response";
          }
        };
        a(Ne, "sm_m"), a(Ne, "sm_mbf");
        let tr = Ne;
        const Ae = class j extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.subject_type || t.Sg(j.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    unresolved_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    unclaimed_count: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_disputed: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    disputed_count: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    unclaimed_disputed_count: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_any_moderator: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_supervisor: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_valve: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_for_any_moderator: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_for_supervisor: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_for_valve: {
                      n: 13,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    coordinates: { n: 14, c: Re },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = t.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(j.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new j();
            return j.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(j.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(j.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response_Bucket";
          }
        };
        a(Ae, "sm_m"), a(Ae, "sm_mbf");
        let rr = Ae;
        const Pe = class C extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.subject_type || t.Sg(C.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = t.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(C.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new C();
            return C.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(C.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(C.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectKey";
          }
        };
        a(Pe, "sm_m"), a(Pe, "sm_mbf");
        let Ot = Pe;
        const Le = class q extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.steamid || t.Sg(q.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    rtime_cooldown_ends: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    acquit_unresolved_reports: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(q.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new q();
            return q.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateReporterCooldown_Request";
          }
        };
        a(Le, "sm_m"), a(Le, "sm_mbf");
        let Ut = Le;
        class ce extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new ce();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ce();
            return ce.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateReporterCooldown_Response";
          }
        }
        const ke = class W extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.steamid || t.Sg(W.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(W.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new W();
            return W.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(W.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(W.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Request";
          }
        };
        a(ke, "sm_m"), a(ke, "sm_mbf");
        let ht = ke;
        const $e = class O extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.rtime_cooldown_ends || t.Sg(O.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    rtime_cooldown_ends: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(O.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new O();
            return O.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(O.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(O.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Response";
          }
        };
        a($e, "sm_m"), a($e, "sm_mbf");
        let ir = $e;
        const Ke = class U extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.steamid || t.Sg(U.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(U.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new U();
            return U.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(U.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(U.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Request";
          }
        };
        a(Ke, "sm_m"), a(Ke, "sm_mbf");
        let nr = Ke;
        const Qe = class h extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              h.prototype.preferred_level || t.Sg(h.M()),
              n.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    preferred_level: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    enabled_subject_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = t.w0(h.M())), h.sm_mbf;
          }
          toObject(e = !1) {
            return h.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(h.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(h.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new h();
            return h.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(h.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(h.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Response";
          }
        };
        a(Qe, "sm_m"), a(Qe, "sm_mbf");
        let sr = Qe;
        const Xe = class v extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              v.prototype.preferred_level || t.Sg(v.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    preferred_level: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    enabled_subject_types: { n: 2, c: or },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = t.w0(v.M())), v.sm_mbf;
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(v.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(v.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new v();
            return v.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(v.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(v.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request";
          }
        };
        a(Xe, "sm_m"), a(Xe, "sm_mbf");
        let ar = Xe;
        const Ze = class T extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.subject_types || t.Sg(T.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    subject_types: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(T.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new T();
            return T.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(T.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(T.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
          }
        };
        a(Ze, "sm_m"), a(Ze, "sm_mbf");
        let or = Ze;
        class de extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new de();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new de();
            return de.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Response";
          }
        }
        const He = class F extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.steamid || t.Sg(F.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    rt_start: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = t.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(F.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new F();
            return F.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(F.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(F.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Request";
          }
        };
        a(He, "sm_m"), a(He, "sm_mbf");
        let lr = He;
        const Je = class I extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.activities || t.Sg(I.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: { activities: { n: 1, c: mr, r: !0, q: !0 } },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(I.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new I();
            return I.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(I.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(I.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Response";
          }
        };
        a(Je, "sm_m"), a(Je, "sm_mbf");
        let ur = Je;
        const Ve = class G extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.subject_type || t.Sg(G.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    timestamp: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    action: { n: 5, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    json_data: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    reported_content_id: {
                      n: 7,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(G.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new G();
            return G.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(G.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(G.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
          }
        };
        a(Ve, "sm_m"), a(Ve, "sm_mbf");
        let mr = Ve;
        const Ye = class E extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              E.prototype.rtime_start_date || t.Sg(E.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    rtime_start_date: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtime_end_date: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    subject_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = t.w0(E.M())), E.sm_mbf;
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(E.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(E.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new E();
            return E.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(E.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(E.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Request";
          }
        };
        a(Ye, "sm_m"), a(Ye, "sm_mbf");
        let cr = Ye;
        const _e = class x extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.stats || t.Sg(x.M()),
              n.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: { stats: { n: 2, c: Br, r: !0, q: !0 } },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = t.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(x.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new x();
            return x.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(x.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(x.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response";
          }
        };
        a(_e, "sm_m"), a(_e, "sm_mbf");
        let dr = _e;
        const et = class D extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.rtime_date || t.Sg(D.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    rtime_date: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    times_unresolved: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    times_resolved: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(D.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new D();
            return D.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(D.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(D.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
          }
        };
        a(et, "sm_m"), a(et, "sm_mbf");
        let Br = et;
        const tt = class N extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.subject_type || t.Sg(N.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    count: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(N.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new N();
            return N.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(N.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(N.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Request";
          }
        };
        a(tt, "sm_m"), a(tt, "sm_mbf");
        let br = tt;
        const rt = class A extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              A.prototype.subjects || t.Sg(A.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: { subjects: { n: 1, c: Mr, r: !0, q: !0 } },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = t.w0(A.M())), A.sm_mbf;
          }
          toObject(e = !1) {
            return A.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(A.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(A.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new A();
            return A.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(A.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(A.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response";
          }
        };
        a(rt, "sm_m"), a(rt, "sm_mbf");
        let gr = rt;
        const it = class P extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.subject_type || t.Sg(P.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(P.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new P();
            return P.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(P.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(P.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
          }
        };
        a(it, "sm_m"), a(it, "sm_mbf");
        let Mr = it;
        const nt = class L extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.steamid || t.Sg(L.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(L.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new L();
            return L.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(L.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(L.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Request";
          }
        };
        a(nt, "sm_m"), a(nt, "sm_mbf");
        let vt = nt;
        const st = class k extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.total_reports || t.Sg(k.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    total_reports: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_acquitted_reports: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    reports_in_last_week: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    acquitted_reports_in_last_week: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(k.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new k();
            return k.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(k.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(k.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Response";
          }
        };
        a(st, "sm_m"), a(st, "sm_mbf");
        let yr = st;
        const at = class $ extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.subject_type || t.Sg($.M()),
              n.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    moderator_level: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    filters: { n: 3, c: Re, r: !0, q: !0 },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT($.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new $();
            return $.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj($.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0($.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Request";
          }
        };
        a(at, "sm_m"), a(at, "sm_mbf");
        let wr = at;
        const ot = class K extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.subjects || t.Sg(K.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: { subjects: { n: 1, c: Se, r: !0, q: !0 } },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(K.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new K();
            return K.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(K.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(K.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Response";
          }
        };
        a(ot, "sm_m"), a(ot, "sm_mbf");
        let fr = ot;
        const lt = class Q extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.steamid || t.Sg(Q.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Q.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetClaimedSubjects_Request";
          }
        };
        a(lt, "sm_m"), a(lt, "sm_mbf");
        let pr = lt;
        const ut = class X extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.subjects || t.Sg(X.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: { subjects: { n: 1, c: Se, r: !0, q: !0 } },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(X.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new X();
            return X.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(X.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(X.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetClaimedSubjects_Response";
          }
        };
        a(ut, "sm_m"), a(ut, "sm_mbf");
        let zr = ut;
        const mt = class Z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.subjects_to_release || t.Sg(Z.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    subjects_to_release: { n: 1, c: Ot, r: !0, q: !0 },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Z.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Z();
            return Z.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Z.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Z.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReleaseSubjects_Request";
          }
        };
        a(mt, "sm_m"), a(mt, "sm_mbf");
        let Tt = mt;
        class Be extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
            let r = new (i().BinaryReader)(e),
              s = new Be();
            return Be.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReleaseSubjects_Response";
          }
        }
        const ct = class H extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.subject_type || t.Sg(H.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    forum: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    topic: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    comment: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    comment_thread_id: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    sender_account_id: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    chat_message_rtime: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    chat_message_ordinal: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    chat_group_id: {
                      n: 10,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    chat_room_id: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    receiver_account_id: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    published_file_id: {
                      n: 13,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    ugc_content_type: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(H.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new H();
            return H.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(H.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(H.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ReportedContentCoordinates";
          }
        };
        a(ct, "sm_m"), a(ct, "sm_mbf");
        let Re = ct;
        const dt = class J extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.reported_content_id || t.Sg(J.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(J.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new J();
            return J.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(J.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(J.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContentByID_Request";
          }
        };
        a(dt, "sm_m"), a(dt, "sm_mbf");
        let Rr = dt;
        const Bt = class V extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.subject || t.Sg(V.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = { proto: V, fields: { subject: { n: 1, c: Se } } }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(V.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new V();
            return V.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(V.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(V.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContentByID_Response";
          }
        };
        a(Bt, "sm_m"), a(Bt, "sm_mbf");
        let Sr = Bt;
        const bt = class Y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.coordinates || t.Sg(Y.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: { coordinates: { n: 1, c: Re } },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Y.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Y();
            return Y.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Y.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Y.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContent_Request";
          }
        };
        a(bt, "sm_m"), a(bt, "sm_mbf");
        let Ft = bt;
        const gt = class _ extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.subjects || t.Sg(_.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { subjects: { n: 1, c: Se, r: !0, q: !0 } },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(_.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new _();
            return _.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(_.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(_.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContent_Response";
          }
        };
        a(gt, "sm_m"), a(gt, "sm_mbf");
        let jr = gt;
        const Mt = class ee extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.reported_content_id || t.Sg(ee.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    details: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ee.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ee();
            return ee.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ee.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ee.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_OwnerDisputeModeration_Request";
          }
        };
        a(Mt, "sm_m"), a(Mt, "sm_mbf");
        let It = Mt;
        class be extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new be();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new be();
            return be.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_OwnerDisputeModeration_Response";
          }
        }
        const yt = class te extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              te.prototype.reported_content_id || t.Sg(te.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = t.w0(te.M())), te.sm_mbf;
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(te.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new te();
            return te.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Request";
          }
        };
        a(yt, "sm_m"), a(yt, "sm_mbf");
        let Gt = yt;
        const wt = class re extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.entries || t.Sg(re.M()),
              n.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: { entries: { n: 1, c: qr, r: !0, q: !0 } },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(re.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new re();
            return re.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Response";
          }
        };
        a(wt, "sm_m"), a(wt, "sm_mbf");
        let Cr = wt;
        const ft = class ie extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.timestamp || t.Sg(ie.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    actor_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    automated_action: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    action: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    additional_json_data: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ie.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ie();
            return ie.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Response_AuditLogEntry";
          }
        };
        a(ft, "sm_m"), a(ft, "sm_mbf");
        let qr = ft;
        const pt = class ne extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.reported_content_id || t.Sg(ne.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    report_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    dispute_details: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ne();
            return ne.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Request";
          }
        };
        a(pt, "sm_m"), a(pt, "sm_mbf");
        let Wr = pt;
        class ge extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new ge();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ge();
            return ge.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Response";
          }
        }
        const zt = class se extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.reported_content_id || t.Sg(se.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(se.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new se();
            return se.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(se.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(se.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SustainModerationByID_Request";
          }
        };
        a(zt, "sm_m"), a(zt, "sm_mbf");
        let Et = zt;
        class Me extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
            let r = new (i().BinaryReader)(e),
              s = new Me();
            return Me.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SustainModerationByID_Response";
          }
        }
        const Rt = class ae extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.reported_content_id || t.Sg(ae.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    new_level: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    reason: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    note: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ae();
            return ae.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubjectByID_Request";
          }
        };
        a(Rt, "sm_m"), a(Rt, "sm_mbf");
        let xt = Rt;
        class ye extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
            let r = new (i().BinaryReader)(e),
              s = new ye();
            return ye.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubjectByID_Response";
          }
        }
        const St = class oe extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.reported_content_id || t.Sg(oe.M()),
              n.Message.initialize(this, e, 0, -1, [9], null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    resolution: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    reason: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    note: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    resolved_by_automation: {
                      n: 7,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    sanctions_applied: { n: 9, c: je, r: !0, q: !0 },
                    skip_lock: { n: 10, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(oe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new oe();
            return oe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveByID_Request";
          }
        };
        a(St, "sm_m"), a(St, "sm_mbf");
        let Or = St;
        class we extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
            let r = new (i().BinaryReader)(e),
              s = new we();
            return we.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveByID_Response";
          }
        }
        const jt = class le extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.reported_content_id || t.Sg(le.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    csam_status: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    terrorism_status: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    credible_threat_of_violence_status: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    additional_subject_data: { n: 5, c: We },
                    owner_dispute_details: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(le.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new le();
            return le.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectByID_Request";
          }
        };
        a(jt, "sm_m"), a(jt, "sm_mbf");
        let Dt = jt;
        class fe extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
            let r = new (i().BinaryReader)(e),
              s = new fe();
            return fe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectByID_Response";
          }
        }
        const Ct = class ue extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.reported_content_id || t.Sg(ue.M()),
              n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    action: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    automated_action: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    additional_json_data: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    actor_steamid: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ue.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ue();
            return ue.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_WriteToAuditLogByID_Request";
          }
        };
        a(Ct, "sm_m"), a(Ct, "sm_mbf");
        let Ur = Ct;
        class pe extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), n.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new pe();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new pe();
            return pe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_WriteToAuditLogByID_Response";
          }
        }
        var qt;
        ((m) => {
          function e(o, l, u) {
            return o.SendMsg(
              "ContentModeration.ClaimBatch#1",
              (0, c.I8)(wr, l, u),
              fr,
              { ePrivilege: 5 },
            );
          }
          m.ClaimBatch = e;
          function r(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, c.I8)(pr, l, u),
              zr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetClaimedSubjects = r;
          function s(o, l, u) {
            return o.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, c.I8)(Tt, l, u),
              Be,
              { ePrivilege: 5 },
            );
          }
          m.ReleaseSubjects = s;
          function hr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, c.I8)(Ht, l, u),
              Jt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetReportsSubmittedByUser = hr;
          function vr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, c.I8)(Vt, l, u),
              Yt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetOneReportSubmittedByUser = vr;
          function Tr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, c.I8)(_t, l, u),
              er,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetReportedSubjectsByOwner = Tr;
          function Fr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, c.I8)(me, l, u),
              tr,
              { ePrivilege: 5 },
            );
          }
          m.GetSubjectOverview = Fr;
          function Ir(o, l, u) {
            return o.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, c.I8)(Ut, l, u),
              ce,
              { ePrivilege: 5 },
            );
          }
          m.UpdateReporterCooldown = Ir;
          function Gr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, c.I8)(ht, l, u),
              ir,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetReporterCooldown = Gr;
          function Er(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, c.I8)(nr, l, u),
              sr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetModeratorPreferences = Er;
          function xr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, c.I8)(ar, l, u),
              de,
              { ePrivilege: 5 },
            );
          }
          m.SetModeratorPreferences = xr;
          function Dr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, c.I8)(lr, l, u),
              ur,
              { ePrivilege: 5 },
            );
          }
          m.GetModeratorActivity = Dr;
          function Nr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, c.I8)(cr, l, u),
              dr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetDailyModerationStatistics = Nr;
          function Ar(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, c.I8)(br, l, u),
              gr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetOldestUnresolvedSubjects = Ar;
          function Pr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, c.I8)(vt, l, u),
              yr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetReporterStats = Pr;
          function Lr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetReportedContentByID#1",
              (0, c.I8)(Rr, l, u),
              Sr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetReportedContentByID = Lr;
          function kr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetReportedContent#1",
              (0, c.I8)(Ft, l, u),
              jr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetReportedContent = kr;
          function $r(o, l, u) {
            return o.SendMsg(
              "ContentModeration.OwnerDisputeModeration#1",
              (0, c.I8)(It, l, u),
              be,
              { ePrivilege: 1 },
            );
          }
          m.OwnerDisputeModeration = $r;
          function Kr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.GetAuditLogByID#1",
              (0, c.I8)(Gt, l, u),
              Cr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetAuditLogByID = Kr;
          function Qr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, c.I8)(Wr, l, u),
              ge,
              { ePrivilege: 1 },
            );
          }
          m.ReporterDisputeModeration = Qr;
          function Xr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.SustainModerationByID#1",
              (0, c.I8)(Et, l, u),
              Me,
              { ePrivilege: 5 },
            );
          }
          m.SustainModerationByID = Xr;
          function Zr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.EscalateSubjectByID#1",
              (0, c.I8)(xt, l, u),
              ye,
              { ePrivilege: 5 },
            );
          }
          m.EscalateSubjectByID = Zr;
          function Hr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.ResolveByID#1",
              (0, c.I8)(Or, l, u),
              we,
              { ePrivilege: 5 },
            );
          }
          m.ResolveByID = Hr;
          function Jr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.UpdateSubjectByID#1",
              (0, c.I8)(Dt, l, u),
              fe,
              { ePrivilege: 5 },
            );
          }
          m.UpdateSubjectByID = Jr;
          function Vr(o, l, u) {
            return o.SendMsg(
              "ContentModeration.WriteToAuditLogByID#1",
              (0, c.I8)(Ur, l, u),
              pe,
              { ePrivilege: 5 },
            );
          }
          m.WriteToAuditLogByID = Vr;
        })(qt || (qt = {}));
      },
    },
  ]);
})();
