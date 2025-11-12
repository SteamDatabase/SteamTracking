/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8453],
  {
    16516: (e) => {
      e.exports = {
        FAQContainer: "_2PQsW53YUsH-Z6TICGEF3K",
        Section: "bjwwIcPcDhqU8vTIhRti3",
        Note: "XjQ8ghCC1Ncl0mZyQ3iDM",
        Important: "mRx2Io-gR5pz0gqZnF4e7",
        Warning: "_3Hvtr6roA7ZUH4Vmi-YiYS",
        FAQImage: "_3EebtYBetncFupzjwjtJ8k",
      };
    },
    64372: (e, t, r) => {
      "use strict";
      r.d(t, {
        CP: () => b,
        K: () => h,
        PS: () => x,
        QE: () => M,
        RD: () => i,
        b5: () => g,
        hU: () => _,
        k_: () => C,
        lk: () => P,
        nR: () => T,
        q3: () => c,
        vn: () => p,
      });
      var i,
        a = r(80613),
        s = r.n(a),
        n = r(89068),
        l = r(56545);
      class o extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.faq_id || n.Sg(o.M()),
            a.Message.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  faq_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  json_data: {
                    n: 5,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  per_language_info: { n: 6, c: m, r: !0, q: !0 },
                  url_code: { n: 7, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary";
        }
      }
      class m extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.language || n.Sg(m.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  language: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  last_update_timestamp: {
                    n: 2,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                  last_publish_timestamp: {
                    n: 3,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary_CLanguageInfo";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.faq_id || n.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  faq_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  version: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  content: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  title: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                  timestamp: {
                    n: 6,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                  author_account_id: {
                    n: 7,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  url_code: { n: 8, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQContent";
        }
      }
      class c extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.steamid || n.Sg(c.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  json_data: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Request";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.faq_id || n.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  faq_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Response";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || n.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Request";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Response";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamid || n.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Request";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Response";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || n.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  json_data: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Request";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Response";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || n.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Request";
        }
      }
      class S extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Response";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || n.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  content: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  title: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Request";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.last_update_timestamp || n.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  last_update_timestamp: {
                    n: 1,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Response";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.steamid || n.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Request";
        }
      }
      class F extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.last_publish_timestamp || n.Sg(F.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  last_publish_timestamp: {
                    n: 1,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Response";
        }
      }
      class z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || n.Sg(z.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PreviewDraft_Request";
        }
      }
      class R extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.faq || n.Sg(R.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m || (R.sm_m = { proto: R, fields: { faq: { n: 1, c: u } } }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PreviewDraft_Response";
        }
      }
      class v extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.faq_id || n.Sg(v.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQ_Request";
        }
      }
      class A extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.faq || n.Sg(A.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  faq: { n: 1, c: u },
                  faq_exists: {
                    n: 2,
                    d: !1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQ_Response";
        }
      }
      class C extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || n.Sg(C.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  version: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Request";
        }
      }
      class q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.faq || n.Sg(q.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m || (q.sm_m = { proto: q, fields: { faq: { n: 1, c: u } } }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Response";
        }
      }
      class T extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || n.Sg(T.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Request";
        }
      }
      class j extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.summary || n.Sg(j.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  summary: { n: 1, c: o },
                  draft: { n: 2, c: u, r: !0, q: !0 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Response";
        }
      }
      class U extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || n.Sg(U.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Request";
        }
      }
      class W extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.faq || n.Sg(W.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { faq: { n: 1, c: o, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Response";
        }
      }
      class I extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || n.Sg(I.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
        }
      }
      class Q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.faqs || n.Sg(Q.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { faqs: { n: 1, c: u, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
        }
      }
      class O extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.steamid || n.Sg(O.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Request";
        }
      }
      class D extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Response";
        }
      }
      class G extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.search_text || n.Sg(G.M()),
            a.Message.initialize(this, e, 0, -1, [2, 5], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  search_text: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  elanguages: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readInt32,
                    pbr: n.qM.readPackedInt32,
                    bw: n.gp.writeRepeatedInt32,
                  },
                  count: { n: 3, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  cursor: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  filter_clanids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Request";
        }
      }
      class E extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.faqs || n.Sg(E.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  faqs: { n: 1, c: N, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  next_cursor: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response";
        }
      }
      class N extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.articleid || n.Sg(N.M()),
            a.Message.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  articleid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  name: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  content: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                  clan_accountid: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  url_code: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                  localized_names: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: n.qM.readString,
                    bw: n.gp.writeRepeatedString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
        }
      }
      class x extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.faq_id || n.Sg(x.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  faq_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  steamid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQs_FetchLocalizationFromCrowdIn_Request";
        }
      }
      class L extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQs_FetchLocalizationFromCrowdIn_Response";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.faq_id || n.Sg(P.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  faq_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQs_GetCrowdInMetadata_Request";
        }
      }
      class V extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.crowdin_project_id || n.Sg(V.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  crowdin_file_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQs_GetCrowdInMetadata_Response";
        }
      }
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", (0, l.I8)(c, t), d, {
            ePrivilege: 1,
          });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", (0, l.I8)(g, t), B, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, l.I8)(_, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", (0, l.I8)(p, t), y, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", (0, l.I8)(b, t), S, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", (0, l.I8)(M, t), w, {
              ePrivilege: 1,
            });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", (0, l.I8)(h, t), F, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", (0, l.I8)(z, t), R, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", (0, l.I8)(v, t), A, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", (0, l.I8)(C, t), q, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", (0, l.I8)(T, t), j, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, l.I8)(U, t),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, l.I8)(I, t),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, l.I8)(O, t),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.SearchFAQs = function (e, t) {
            return e.SendMsg("ClanFAQS.SearchFAQs#1", (0, l.I8)(G, t), E, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.FetchLocalizationFromCrowdIn = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.FetchLocalizationFromCrowdIn#1",
              (0, l.I8)(x, t),
              L,
              { ePrivilege: 1 },
            );
          }),
          (e.GetCrowdInMetadata = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetCrowdInMetadata#1",
              (0, l.I8)(P, t),
              V,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
    },
    17909: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => p });
      var i = r(90626),
        a = r(2160),
        s = r(26296),
        n = r(3088),
        l = r(52038),
        o = r(78327),
        m = r(52967),
        u = r(42780),
        c = r(59952),
        d = r(87540),
        g = r(16516),
        B = r.n(g),
        _ = r(74410);
      const f = new Map([
          ...Array.from(c.W4.entries()),
          ...Array.from(c.N2.entries()),
          [
            "section",
            {
              Constructor: function (e) {
                let t = (0, c.j$)(e.args, "id");
                t &&
                  "string" == typeof t &&
                  t.length > 0 &&
                  "#" === t[0] &&
                  (t = t.substring(1));
                const r = (0, c.j$)(e.args, "style"),
                  a = (0, l.A)(
                    B().Section,
                    "note" == r && B().Note,
                    "important" == r && B().Important,
                    "warning" == r && B().Warning,
                  );
                return i.createElement(
                  "div",
                  { id: t || void 0, className: a },
                  e.children,
                );
              },
              autocloses: !1,
            },
          ],
          [
            "img",
            {
              Constructor: function (e) {
                var t, r, a;
                const { showErrorInfo: l } = e.context;
                let o =
                  null === (t = null == e ? void 0 : e.children) || void 0 === t
                    ? void 0
                    : t.toString();
                (null != o && null != o && 0 != o.length) ||
                  (o =
                    null === (r = null == e ? void 0 : e.args) || void 0 === r
                      ? void 0
                      : r[""]);
                const m =
                    null === (a = null == e ? void 0 : e.args) || void 0 === a
                      ? void 0
                      : a.alt,
                  u = (0, c.z5)(o, e.language);
                return null == u
                  ? null
                  : "string" == typeof u
                    ? ((o = u),
                      l
                        ? i.createElement(s.i, {
                            className: B().FAQImage,
                            src: o,
                            alt: m,
                          })
                        : ((o = o.replace("http://", "https://")),
                          i.createElement("img", {
                            className: B().FAQImage,
                            src: o,
                            alt: m,
                          })))
                    : i.createElement(n.c, {
                        className: B().FAQImage,
                        rgSources: u,
                        alt: m,
                      });
              },
              autocloses: !1,
            },
          ],
          [
            "exclude_realm",
            {
              Constructor: function (e) {
                const t = (0, c.j$)(e.args);
                return ("global" == t &&
                  o.TS.EREALM == a.TU.k_ESteamRealmGlobal) ||
                  ("china" == t && (0, o.Y2)())
                  ? null
                  : i.createElement(i.Fragment, null, e.children);
              },
              autocloses: !1,
            },
          ],
        ]),
        p = (e) => {
          const { text: t, bShowErrorInfo: r } = e,
            a = i.useCallback(
              (e) =>
                new d.gL(
                  new d.pH(
                    new u.OJ(new u.R8(), 0),
                    e,
                    [
                      {
                        urlRegExp: /youtu.be|youtube.com/i,
                        fnBBComponent: _.j6,
                      },
                    ],
                    {},
                  ),
                  e,
                ),
              [],
            ),
            s = i.useRef(new m.B(f, a, o.TS.LANGUAGE));
          return i.createElement(
            "div",
            { className: B().FAQContainer },
            s.current.ParseBBCode(t, { showErrorInfo: r }),
          );
        };
    },
    87231: (e, t, r) => {
      "use strict";
      r.d(t, {
        pN: () => y,
        Wj: () => M,
        CJ: () => S,
        z5: () => h,
        cf: () => z,
        g5: () => F,
        W: () => R,
        Kv: () => w,
      });
      var i = r(34629),
        a = r(41735),
        s = r.n(a),
        n = r(38506),
        l = r(14947),
        o = r(90626),
        m = r(56545),
        u = r(2160),
        c = r(81393),
        d = r(6419),
        g = r(68797),
        B = r(78327);
      class _ {
        constructor(e, t) {
          (this.m_summary = void 0),
            (this.m_mapLocalUpdates = new Map()),
            (0, l.Gn)(this),
            (this.m_summary = e),
            (this.m_mapStoredDrafts = t),
            (this.m_mapLocalUpdates = new Map());
          for (let e = 0; e < 31; e++) this.m_mapLocalUpdates.set(e, {});
        }
        BNeedsSaving(e) {
          if (void 0 !== e) {
            const t = this.m_mapLocalUpdates.get(e);
            return !!t.strTitle || !!t.strContent;
          }
          return Array.from(this.m_mapLocalUpdates.values()).some(
            (e) => !!e.strTitle || !!e.strContent,
          );
        }
        async SaveDrafts() {
          var e, t, r, i;
          (0, c.wT)(
            Boolean(
              null === (e = this.m_summary) || void 0 === e ? void 0 : e.faq_id,
            ),
            "Attempting to save when we lack a FaqID in the summary object",
          );
          let a = 1,
            s = new Array();
          for (let e = 0; e < 31; ++e)
            if (
              (this.m_mapLocalUpdates.get(e).strTitle &&
                this.m_mapLocalUpdates.get(e).strTitle !==
                  (null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
                    ? void 0
                    : t.title)) ||
              (this.m_mapLocalUpdates.get(e).strContent &&
                this.m_mapLocalUpdates.get(e).strContent !==
                  (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
                    ? void 0
                    : r.content))
            ) {
              const t = this.GetDraftTitle(e),
                r = this.GetDraftContent(e),
                n = y
                  .Get()
                  .UpdateDraft(
                    null === (i = this.m_summary) || void 0 === i
                      ? void 0
                      : i.faq_id,
                    e,
                    t,
                    r,
                  );
              n
                .then((i) => {
                  1 == i.eResult
                    ? (0, l.h5)(() => {
                        this.m_mapStoredDrafts.has(e) ||
                          this.m_mapStoredDrafts.set(e, {}),
                          (this.m_mapStoredDrafts.get(e).title = t),
                          (this.m_mapStoredDrafts.get(e).content = r),
                          (this.m_mapStoredDrafts.get(e).timestamp =
                            i.rtUpdateTime),
                          (this.m_mapStoredDrafts.get(e).author_account_id =
                            B.iA.accountid.toString()),
                          (this.m_mapLocalUpdates.get(e).strTitle = null),
                          (this.m_mapLocalUpdates.get(e).strContent = null);
                        let a = !1;
                        this.m_summary.per_language_info.forEach((t) => {
                          e == t.language &&
                            ((a = !0),
                            (t.last_update_timestamp = Math.max(
                              t.last_update_timestamp,
                              i.rtUpdateTime,
                            )));
                        }),
                          a ||
                            this.m_summary.per_language_info.push({
                              language: e,
                              last_update_timestamp: i.rtUpdateTime,
                            });
                      })
                    : 1 == a &&
                      (console.error(
                        "FAQModel.SaveDraft: Response not ok " + i.eResult,
                        i,
                      ),
                      (a = i.eResult));
                })
                .catch((e) => {
                  console.error(
                    "FAQModel.SaveDrafts: Hit error " + (0, g.H)(e).strErrorMsg,
                  ),
                    1 == a && (a = 2);
                }),
                s.push(n);
            }
          return await Promise.all(s), a;
        }
        GetFAQInternalName() {
          var e;
          return null === (e = this.m_summary) || void 0 === e
            ? void 0
            : e.internal_name;
        }
        GetDraftTitle(e) {
          var t;
          return null !== this.m_mapLocalUpdates.get(e).strTitle &&
            void 0 !== this.m_mapLocalUpdates.get(e).strTitle
            ? this.m_mapLocalUpdates.get(e).strTitle
            : null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
              ? void 0
              : t.title;
        }
        GetDraftContent(e) {
          var t;
          return null !== this.m_mapLocalUpdates.get(e).strContent &&
            void 0 !== this.m_mapLocalUpdates.get(e).strContent
            ? this.m_mapLocalUpdates.get(e).strContent
            : null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
              ? void 0
              : t.content;
        }
        GetDraftTitleWithFallback(e, t = u.TU.k_ESteamRealmGlobal) {
          var r, i, a, s, n, l;
          const o = t == u.TU.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (l =
              null !==
                (s =
                  null !==
                    (i =
                      null !== (r = this.m_mapLocalUpdates.get(e).strTitle) &&
                      void 0 !== r
                        ? r
                        : this.m_mapLocalUpdates.get(o).strTitle) &&
                  void 0 !== i
                    ? i
                    : null === (a = this.m_mapStoredDrafts.get(e)) ||
                        void 0 === a
                      ? void 0
                      : a.title) && void 0 !== s
                ? s
                : null === (n = this.m_mapStoredDrafts.get(o)) || void 0 === n
                  ? void 0
                  : n.title) && void 0 !== l
            ? l
            : "";
        }
        GetDraftContentWithFallback(e, t = u.TU.k_ESteamRealmGlobal) {
          var r, i, a, s, n, l;
          const o = t == u.TU.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (l =
              null !==
                (s =
                  null !==
                    (i =
                      null !== (r = this.m_mapLocalUpdates.get(e).strContent) &&
                      void 0 !== r
                        ? r
                        : this.m_mapLocalUpdates.get(o).strContent) &&
                  void 0 !== i
                    ? i
                    : null === (a = this.m_mapStoredDrafts.get(e)) ||
                        void 0 === a
                      ? void 0
                      : a.content) && void 0 !== s
                ? s
                : null === (n = this.m_mapStoredDrafts.get(o)) || void 0 === n
                  ? void 0
                  : n.content) && void 0 !== l
            ? l
            : "";
        }
        GetLastSavedDraftVersion(e) {
          return this.m_mapStoredDrafts.get(e);
        }
        BHasSomeTextForLanguage(e) {
          return Boolean(this.GetDraftContent(e) || this.GetDraftTitle(e));
        }
        SetDraftTitle(e, t) {
          var r;
          t ===
          (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
            ? void 0
            : r.title)
            ? (this.m_mapLocalUpdates.get(e).strTitle = null)
            : (this.m_mapLocalUpdates.get(e).strTitle = t);
        }
        SetDraftContent(e, t) {
          var r;
          t ===
          (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
            ? void 0
            : r.content)
            ? (this.m_mapLocalUpdates.get(e).strContent = null)
            : (this.m_mapLocalUpdates.get(e).strContent = t);
        }
        GetIncludedRealmList() {
          const e = new Array();
          return (
            this.m_summary.visible_in_global_realm &&
              e.push(u.TU.k_ESteamRealmGlobal),
            this.m_summary.visible_in_global_realm &&
              e.push(u.TU.k_ESteamRealmChina),
            0 == e.length && e.push(u.TU.k_ESteamRealmGlobal),
            (0, c.wT)(
              e.length > 0,
              `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
            ),
            e
          );
        }
        BHasPublished() {
          return Boolean(
            this.m_summary.per_language_info.some(
              (e) => !!e.last_publish_timestamp,
            ),
          );
        }
        GetLastTimeLanguageUpdated(e) {
          var t, r;
          return null !==
            (r =
              null === (t = this.GetLastSavedDraftVersion(e)) || void 0 === t
                ? void 0
                : t.timestamp) && void 0 !== r
            ? r
            : 0;
        }
        GetFAQID() {
          return this.m_summary.faq_id;
        }
        GetSummary() {
          return this.m_summary;
        }
        BLocalizeDraft() {
          var e;
          if (0 === this.m_summary.json_data.length) return !1;
          return (
            null !== (e = JSON.parse(this.m_summary.json_data).localizeDraft) &&
            void 0 !== e &&
            e
          );
        }
        BPushToCrowdIn() {
          var e;
          if (0 === this.m_summary.json_data.length) return !1;
          return (
            null !== (e = JSON.parse(this.m_summary.json_data).pushToCrowdIn) &&
            void 0 !== e &&
            e
          );
        }
        GetJsonData() {
          return this.m_summary.json_data;
        }
        async UpdateJsonData(e) {
          const t = await y.Get().UpdateJsonData(this.GetFAQID(), e);
          return 1 === t && (this.m_summary.json_data = JSON.stringify(e)), t;
        }
      }
      (0, i.Cg)([l.sH], _.prototype, "m_summary", void 0),
        (0, i.Cg)([l.sH], _.prototype, "m_mapLocalUpdates", void 0),
        (0, i.Cg)([d.o], _.prototype, "BHasSomeTextForLanguage", null),
        (0, i.Cg)([d.o], _.prototype, "GetLastTimeLanguageUpdated", null);
      var f = r(96059),
        p = r(64372);
      class y {
        static Get() {
          return y.s_Singleton || (y.s_Singleton = new y()), y.s_Singleton;
        }
        static Init(e) {
          y.Get().m_steamInterface = e;
        }
        constructor() {
          (this.m_mapFAQSummaries = new Map()),
            (this.m_mapFAQPublishedContent = new Map()),
            (this.m_mapFAQDrafts = new Map()),
            (this.m_bHasFAQEdit = !1),
            (this.m_steamInterface = null),
            (0, l.Gn)(this),
            "dev" == B.TS.WEB_UNIVERSE && (window.g_FAQStore = this),
            B.TS.IN_STEAMUI ||
              (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
        }
        SetUpWebAPIInterface() {
          const e = (0, B.Tc)("faqstore", "application_config"),
            t = null == e ? void 0 : e.webapi_token;
          this.m_steamInterface = new f.D(B.TS.WEBAPI_BASE_URL, t);
        }
        ReadInitialPayload() {
          const e = (0, B.Tc)("faqstore", "application_config");
          if (
            (("dev" != B.TS.WEB_UNIVERSE && "beta" != B.TS.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CFAQStore loading payload: ", e),
            this.BIsConfigValid(e))
          ) {
            if (e.faqs)
              for (const t in e.faqs) {
                const r = e.faqs[t];
                (null == r ? void 0 : r.faq_id) == t &&
                  void 0 !== (null == r ? void 0 : r.language) &&
                  (this.m_mapFAQPublishedContent.has(t) ||
                    this.m_mapFAQPublishedContent.set(t, new Map()),
                  this.m_mapFAQPublishedContent.get(t).set(r.language, r));
              }
            if (e.alldrafts)
              for (const t in e.alldrafts) {
                const r = e.alldrafts[t];
                if (!(null == r ? void 0 : r.summary) || !r.draft) continue;
                this.m_mapFAQSummaries.set(t, r.summary);
                const i = new Map();
                for (const e of r.draft) i.set(e.language, e);
                this.m_mapFAQDrafts.set(
                  t,
                  new _(this.m_mapFAQSummaries.get(t), i),
                );
              }
            if (e.allfaqs)
              for (const t of e.allfaqs)
                t.faq_id &&
                  (this.m_mapFAQSummaries.has(t.faq_id) ||
                    this.m_mapFAQSummaries.set(t.faq_id, t));
            this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
          } else
            "dev" == B.TS.WEB_UNIVERSE &&
              console.error("CFAQStore Invalid payload");
        }
        BIsConfigValid(e) {
          const t = e;
          return !!(
            (t && t.faqs && "object" == typeof t.faqs) ||
            (t.alldrafts && "object" == typeof t.alldrafts) ||
            (t.allfaqs && Array.isArray(t.allfaqs))
          );
        }
        async CreateFAQ(e) {
          const t = m.w.Init(p.q3);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_internal_name(e);
          let r,
            i = 2;
          try {
            const a = await p.RD.Create(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (((i = a.GetEResult()), 1 == i)) {
              r = a.Body().faq_id();
              const t = { faq_id: r, internal_name: e };
              this.m_mapFAQSummaries.set(r, t);
            } else
              console.error("FAQStore.CreateFAQ: Create request failed:", i);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.CreateFAQ: caught error " + t.strErrorMsg,
              t,
            );
          }
          return { eResult: i, strFaqId: r };
        }
        async UpdateDraft(e, t, r, i) {
          const a = m.w.Init(p.QE);
          a.Body().set_steamid(B.UF.CLANSTEAMID),
            a.Body().set_faq_id(e),
            a.Body().set_language(t),
            a.Body().set_content(i),
            a.Body().set_title(r);
          let s = 2,
            n = 0;
          try {
            const e = await p.RD.UpdateDraft(
              this.m_steamInterface.GetServiceTransport(),
              a,
            );
            (s = e.GetEResult()),
              1 != s
                ? console.error("FAQStore.UpdateDraft request failed:", s)
                : (n = e.Body().last_update_timestamp());
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.UpdateDraft: caught error " + t.strErrorMsg,
              t,
            );
          }
          return { eResult: s, rtUpdateTime: n };
        }
        async UpdateJsonData(e, t) {
          const r = JSON.stringify(t),
            i = m.w.Init(p.vn);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_json_data(r);
          let a = 2;
          try {
            (a = (
              await p.RD.UpdateJsonData(
                this.m_steamInterface.GetServiceTransport(),
                i,
              )
            ).GetEResult()),
              1 != a
                ? console.error("FAQStore.UpdateJsonData request failed:", a)
                : (this.m_mapFAQSummaries.get(e).json_data = r);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.UpdateJsonData: caught error " + t.strErrorMsg,
              t,
            );
          }
          return a;
        }
        async GetFAQVersion(e, t, r) {
          const i = m.w.Init(p.k_);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_version(t),
            i.Body().set_language(r);
          try {
            const e = await p.RD.GetFAQVersion(
                this.m_steamInterface.GetServiceTransport(),
                i,
              ),
              t = e.GetEResult();
            if (1 == t) return e.Body().faq().toObject();
            console.error("FAQStore.GetFAQVersion request failed:", t);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.GetFAQVersion: caught error " + t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async DeleteFAQ(e) {
          const t = m.w.Init(p.b5);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_faq_id(e);
          let r = 2;
          try {
            (r = (
              await p.RD.Delete(this.m_steamInterface.GetServiceTransport(), t)
            ).GetEResult()),
              1 != r
                ? console.error("FAQStore.DeleteFAQ request failed:", r)
                : (this.m_mapFAQDrafts.delete(e),
                  this.m_mapFAQPublishedContent.delete(e),
                  this.m_mapFAQSummaries.delete(e));
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.DeleteFAQ: caught error " + t.strErrorMsg,
              t,
            );
          }
          return r;
        }
        GetFAQPublishedContent(e, t) {
          const r = this.m_mapFAQPublishedContent.get(e);
          if (!r) return null;
          let i = r.get(t);
          return (
            !i &&
              y.sm_mapFallbackLanguages.has(t) &&
              (i = r.get(y.sm_mapFallbackLanguages.get(t))),
            i || 0 == t || (0, B.Y2)() || (i = r.get(0)),
            i
          );
        }
        GetFAQDraftContent(e) {
          return this.m_mapFAQDrafts.get(e);
        }
        GetAllFAQSummaries() {
          return Array.from(this.m_mapFAQSummaries.values());
        }
        GetFAQArticleSummary(e) {
          return this.m_mapFAQSummaries.get(e) || {};
        }
        async LoadFAQDraftContent(e) {
          if (this.m_mapFAQDrafts.has(e)) return this.m_mapFAQDrafts.get(e);
          const t = m.w.Init(p.nR);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_faq_id(e);
          let r = 2;
          try {
            const i = await p.RD.GetAllDrafts(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (((r = i.GetEResult()), 1 != r))
              return (
                console.error(
                  "FaqStore.LoadFAQDraftContent request failed:",
                  r,
                ),
                null
              );
            {
              const t = i.Body().summary().toObject();
              this.m_mapFAQSummaries.set(e, t);
              const r = new Map();
              i.Body()
                .draft()
                .forEach((e) => r.set(e.language(), e.toObject()));
              const a = new _(this.m_mapFAQSummaries.get(e), r);
              return this.m_mapFAQDrafts.set(e, a), a;
            }
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FaqStore.LoadFAQDraftContent: exception " + t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async UpdateVisibility(e, t, r) {
          const i = m.w.Init(p.CP);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_visible_in_global_realm(t),
            i.Body().set_visible_in_china_realm(r);
          let a = 2;
          try {
            if (
              ((a = (
                await p.RD.SetVisibility(
                  this.m_steamInterface.GetServiceTransport(),
                  i,
                )
              ).GetEResult()),
              1 === a)
            ) {
              const i = this.m_mapFAQSummaries.get(e);
              i &&
                ((i.visible_in_global_realm = t),
                (i.visible_in_china_realm = r),
                this.m_mapFAQSummaries.set(e, i));
            } else console.error("FaqStore.UpdateVisibility: Failed " + a);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FaqStore.UpdateVisibility: exception " + t.strErrorMsg,
              t,
            );
          }
          return a;
        }
        async PublishDraftByLanguage(e, t) {
          if (!t || 0 == t.length) return 1;
          const r = m.w.Init(p.K);
          r.Body().set_steamid(B.UF.CLANSTEAMID),
            r.Body().set_faq_id(e),
            t.forEach((e) => r.Body().add_language(e));
          let i = 2;
          try {
            const a = await p.RD.PublishDraft(
              this.m_steamInterface.GetServiceTransport(),
              r,
            );
            if (((i = a.GetEResult()), 1 === i)) {
              const r = this.m_mapFAQSummaries.get(e);
              r &&
                (0, l.h5)(() => {
                  this.m_mapFAQPublishedContent.has(e) ||
                    this.m_mapFAQPublishedContent.set(e, new Map()),
                    r.per_language_info.forEach((r) => {
                      var i;
                      const s = r.language;
                      if (t.indexOf(s) >= 0) {
                        r.last_publish_timestamp = Math.max(
                          r.last_publish_timestamp,
                          a.Body().last_publish_timestamp(),
                        );
                        const t =
                          null === (i = this.m_mapFAQDrafts.get(e)) ||
                          void 0 === i
                            ? void 0
                            : i.GetLastSavedDraftVersion(s);
                        this.m_mapFAQPublishedContent.get(e).set(s, t);
                      }
                    });
                });
            } else
              console.error("FaqStore.PublishDraftByLanguage: Failed " + i);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FaqStore.PublishDraftByLanguage: exception " + t.strErrorMsg,
              t,
            );
          }
          return i;
        }
        async UpdateInternalName(e, t) {
          const r = m.w.Init(p.hU);
          r.Body().set_steamid(B.UF.CLANSTEAMID),
            r.Body().set_faq_id(e),
            r.Body().set_internal_name(t);
          let i = 2;
          try {
            (i = (
              await p.RD.UpdateInternalName(
                this.m_steamInterface.GetServiceTransport(),
                r,
              )
            ).GetEResult()),
              1 === i
                ? (0, l.h5)(() => {
                    var r, i, a;
                    (null === (r = this.m_mapFAQSummaries.get(e)) ||
                    void 0 === r
                      ? void 0
                      : r.internal_name) &&
                      (this.m_mapFAQSummaries.get(e).internal_name = t),
                      (null ===
                        (a =
                          null === (i = this.m_mapFAQDrafts.get(e)) ||
                          void 0 === i
                            ? void 0
                            : i.GetSummary()) || void 0 === a
                        ? void 0
                        : a.internal_name) &&
                        (this.m_mapFAQDrafts.get(e).GetSummary().internal_name =
                          t);
                  })
                : console.error("FaqStore.UpdateInternalName: Failed " + i);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FaqStore.UpdateInternalName: exception " + t.strErrorMsg,
              t,
            );
          }
          return i;
        }
        GetLoadedDraftObjs() {
          return Array.from(this.m_mapFAQDrafts.values());
        }
        RemoveAllDirtyDrafts() {
          var e, t;
          const r =
            null ===
              (t =
                null === (e = this.GetLoadedDraftObjs()) || void 0 === e
                  ? void 0
                  : e.filter((e) => e.BNeedsSaving())) || void 0 === t
              ? void 0
              : t.map((e) => e.GetFAQID());
          null == r || r.forEach((e) => this.m_mapFAQDrafts.delete(e));
        }
        BHasFAQEdit() {
          return this.m_bHasFAQEdit;
        }
        async ExportEnglishDraftToCrowdin(e) {
          const t =
            B.TS.COMMUNITY_BASE_URL +
            "faqs/" +
            B.UF.VANITY_ID +
            "/ajaxpushtocrowdin/" +
            M(e);
          await s().get(t);
        }
        async ImportNonEnglishDraftsFromCrowdin(e, t, r) {
          var i, a;
          const n =
              B.TS.COMMUNITY_BASE_URL +
              "faqs/" +
              B.UF.VANITY_ID +
              "/ajaxpullfromcrowdin/" +
              M(e),
            l = new FormData();
          l.append("sessionid", B.TS.SESSIONID),
            l.append("languages", t.join(","));
          let o = null;
          try {
            const t = await s().post(n, l, {
              withCredentials: !0,
              cancelToken: null == r ? void 0 : r.token,
            });
            if (
              200 == (null == t ? void 0 : t.status) &&
              1 == (null === (i = t.data) || void 0 === i ? void 0 : i.success)
            ) {
              const r = t.data.updated,
                i =
                  null !== (a = null == r ? void 0 : r[e]) && void 0 !== a
                    ? a
                    : [];
              return (
                i.length > 0 &&
                  (this.m_mapFAQSummaries.has(e) ||
                    this.m_mapFAQDrafts.has(e)) &&
                  (this.m_mapFAQDrafts.delete(e),
                  await this.LoadFAQDraftContent(e)),
                i
              );
            }
            o = { response: t };
          } catch (e) {
            o = e;
          }
          const m = (0, g.H)(o);
          return (
            console.error("Could not import from crowdin", e, m.strErrorMsg, m),
            []
          );
        }
        BHasLiveEnglishVersion(e) {
          return this.m_mapFAQSummaries
            .get(e)
            .per_language_info.some(
              (e) => 0 == e.language && e.last_publish_timestamp > 0,
            );
        }
        GetNonEnglishDraftsToPublish(e) {
          return this.m_mapFAQSummaries
            .get(e)
            .per_language_info.filter((e) => {
              var t;
              return (
                0 != e.language &&
                e.last_update_timestamp >
                  (null !== (t = e.last_publish_timestamp) && void 0 !== t
                    ? t
                    : 0)
              );
            })
            .map((e) => e.language);
        }
      }
      (y.sm_mapFallbackLanguages = new Map([
        [5, 27],
        [27, 5],
        [29, 6],
      ])),
        (0, i.Cg)([l.sH], y.prototype, "m_mapFAQSummaries", void 0),
        (0, i.Cg)([l.XI], y.prototype, "RemoveAllDirtyDrafts", null);
      const b = /^[0-9a-fA-F]+$/;
      function S(e) {
        const t = null == e ? void 0 : e.replace(/-/g, "");
        if (16 != (null == t ? void 0 : t.length) || !b.test(t)) return null;
        return n.A.fromString(t, !0, 16).toString();
      }
      function M(e) {
        const t = ("0000000000000000" + n.A.fromString(e, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}`;
      }
      function w(e, t) {
        return [e && y.Get().GetFAQPublishedContent(e, t), !0];
      }
      function h(e) {
        const [t, r] = o.useState(y.Get().GetFAQDraftContent(e)),
          [i, a] = o.useState(!!t);
        return (
          (0, o.useEffect)(() => {
            y.Get()
              .LoadFAQDraftContent(e)
              .then((e) => r(e))
              .finally(() => a(!0));
          }, [e]),
          [t, i]
        );
      }
      function F(e) {
        return [y.Get().GetFAQArticleSummary(e), !0];
      }
      function z() {
        const e = y.Get().GetAllFAQSummaries();
        return o.useRef([e, !0]).current;
      }
      function R(e, t, r) {
        const [i, a] = o.useState(null),
          [s, n] = o.useState(!1);
        return (
          (0, o.useEffect)(() => {
            y.Get().BHasFAQEdit() &&
              y
                .Get()
                .GetFAQVersion(e, t, r)
                .then((e) => a(e))
                .finally(() => n(!0));
          }, [e, t, r]),
          [i, s]
        );
      }
    },
  },
]);
