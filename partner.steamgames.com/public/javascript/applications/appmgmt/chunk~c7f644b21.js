/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2079],
  {
    54330: (e, r, t) => {
      t.d(r, { u: () => c });
      var i = t(37085),
        s = t(66418),
        a = t(20194),
        n = t(41735),
        m = t.n(n),
        l = t(90626);
      function c(e) {
        const r = (0, a.I)({
          queryKey: ["useMilestoneByAppID", e],
          queryFn: async () => {
            const r = `${s.TS.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
              t = { appid: e },
              a = await m().get(r, { params: t });
            if (a?.data?.success == i.R) return a.data.milestones;
            throw new Error("failed to load milestonse for appid " + e);
          },
          enabled: Boolean(e),
        });
        return l.useMemo(() => r?.data, [e, r.isLoading]);
      }
    },
    3285: (e, r, t) => {
      t.d(r, {
        HX: () => W,
        RE: () => q,
        ei: () => O,
        rA: () => h,
        _8: () => s,
        Qo: () => i,
        tb: () => a,
        eJ: () => C,
      });
      var i = {};
      t.r(i),
        t.d(i, {
          tb: () => o,
          MF: () => b,
          Z5: () => u,
          Wk: () => B,
          o6: () => d,
          Jg: () => g,
          RO: () => M,
        });
      var s = {};
      t.r(s), t.d(s, { G: () => _ });
      var a = {};
      t.r(a), t.d(a, { ol: () => y });
      var n = t(80613),
        m = t.n(n),
        l = t(89068),
        c = t(56545);
      const o = 1,
        u = 3,
        d = 4,
        B = 5,
        b = 6,
        g = 9,
        M = 10,
        _ = 0,
        y = 1;
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.partnerid || l.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  partnerid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid: {
                    n: 13,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  type: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  status: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  due_date: { n: 4, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  email_days_before_due: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  gid: {
                    n: 6,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  store_item_type: {
                    n: 7,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  store_item_id: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  discount_event_id: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  required_rights: {
                    n: 11,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  description_jsondata: {
                    n: 10,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  send_email_on_creation: {
                    n: 12,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.deadlineid || l.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  deadlineid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  type: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  gid: {
                    n: 4,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  store_item_type: {
                    n: 5,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  store_item_id: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  discount_event_id: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadlineLookUpKey";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.partnerid || l.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  partnerid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  start_date: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_date: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  include_complete: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  lookup_key: { n: 5, c: p, r: !0, q: !0 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = l.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Request";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.deadlines || l.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { deadlines: { n: 1, c: R, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Response";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.deadlineid || l.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  deadlineid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  data: { n: 2, c: w },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = l.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Response_Result";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.type || l.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  type: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  start_date: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_date: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  include_complete: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  store_item_type: {
                    n: 7,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  store_item_id: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlineByTimeRange_Request";
        }
      }
      class F extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.deadlines || l.Sg(F.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { deadlines: { n: 1, c: j, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = l.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlineByTimeRange_Response";
        }
      }
      class j extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.deadlineid || l.Sg(j.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  deadlineid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  data: { n: 2, c: w },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = l.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlineByTimeRange_Response_Result";
        }
      }
      class W extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.state || l.Sg(W.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  state: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  accountid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  key_json: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  partnerid: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  rtime_create: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  rtime_validity: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  dismiss_id: {
                    n: 7,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = l.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDismissPinData";
        }
      }
      class q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.dismiss_list || l.Sg(q.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { dismiss_list: { n: 1, c: W, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = l.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_CreateDismiss_Request";
        }
      }
      class T extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.dismiss_list || l.Sg(T.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { dismiss_list: { n: 1, c: W, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_CreateDismiss_Response";
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.partnerid || l.Sg(h.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  rtime_after: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = l.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_GetDismissTimeRange_Request";
        }
      }
      class U extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.dismiss_list || l.Sg(U.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { dismiss_list: { n: 1, c: W, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = l.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_GetDismissTimeRange_Response";
        }
      }
      class O extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.dismiss_id || l.Sg(O.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  dismiss_id: {
                    n: 7,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = l.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_DeleteDismiss_Request";
        }
      }
      class v extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let r = new (m().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_DeleteDismiss_Response";
        }
      }
      var D, C;
      !(function (e) {
        (e.GetDeadlinesForPartner = function (e, r, t) {
          return e.SendMsg(
            "PartnerDeadline.GetDeadlinesForPartner#1",
            (0, c.I8)(z, r, t),
            f,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetDeadlineByTimeRange = function (e, r, t) {
            return e.SendMsg(
              "PartnerDeadline.GetDeadlineByTimeRange#1",
              (0, c.I8)(S, r, t),
              F,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(D || (D = {})),
        (function (e) {
          (e.CreateDismiss = function (e, r, t) {
            return e.SendMsg(
              "PartnerDismiss.CreateDismiss#1",
              (0, c.I8)(q, r, t),
              T,
              { ePrivilege: 1 },
            );
          }),
            (e.GetDismissTimeRange = function (e, r, t) {
              return e.SendMsg(
                "PartnerDismiss.GetDismissTimeRange#1",
                (0, c.I8)(h, r, t),
                U,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.DeleteDismiss = function (e, r, t) {
              return e.SendMsg(
                "PartnerDismiss.DeleteDismiss#1",
                (0, c.I8)(O, r, t),
                v,
                { ePrivilege: 1 },
              );
            });
        })(C || (C = {}));
    },
  },
]);
