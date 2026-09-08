/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [67165],
  {
    67165: (e, t, r) => {
      r.d(t, {
        mD: () => V,
        ie: () => K,
        GT: () => x,
        eL: () => E,
        bW: () => P,
        io: () => H,
        A2: () => k,
        n4: () => O,
        pF: () => U,
        FV: () => N,
      });
      var i,
        a = r(34629),
        s = r(37085),
        n = r(22837),
        o = r(56545),
        l = r(80613),
        c = r.n(l),
        m = r(89068);
      class u extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || m.Sg(u.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  linkname: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  json: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = m.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class d extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.clan_account_id || m.Sg(d.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = m.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || m.Sg(p.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  link: { n: 2, c: u },
                  remove: {
                    n: 3,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = m.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class _ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || m.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = m.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.links || m.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { links: { n: 1, c: u, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = m.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.clan_account_ids || m.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = m.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class b extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.results || m.Sg(b.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { results: { n: 1, c: d, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = m.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.clan_account_id || m.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  listid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  ignore_dlc: { n: 3, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = m.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Request";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.apps || m.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { apps: { n: 1, c: M, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = m.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Response";
        }
      }
      class M extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || m.Sg(M.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  sort_order: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = m.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
        }
      }
      class w extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.partnerid || m.Sg(w.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = m.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class S extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.results || m.Sg(S.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { results: { n: 1, c: z, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = m.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class z extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.clan_accountid || m.Sg(z.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = m.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t, r) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, o.I8)(p, t, r),
            _,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, o.I8)(g, t, r),
              B,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, o.I8)(y, t, r),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPageListApps = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, o.I8)(f, t, r),
              h,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, o.I8)(w, t, r),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
      var v = r(64087),
        C = r(80902),
        T = r(41735),
        R = r.n(T),
        I = r(14947),
        F = r(29197),
        L = r(78327);
      class W {
        m_clanSteamID;
        m_appidList = new Array();
        m_strName = "";
        m_strAvatarURLFullSize = "";
        m_strTagLineLoc = "";
        m_nFollowers = 0;
        m_strVanity = "";
        m_webLink = void 0;
        m_linkedEvent = void 0;
        m_mapListInfo = new Map();
        m_promise;
        m_bIsLoaded = !1;
        m_bIsHidden = !1;
        m_clanAccountFlags = 0;
        constructor(e) {
          (0, I.Gn)(this), (this.m_clanSteamID = e);
        }
        Initialize(e) {
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
            (this.m_linkedEvent = e.linked_event),
            (this.m_mapListInfo = new Map(Object.entries(e.list_info ?? {}))),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(this.m_clanAccountFlags & F.Wv.GH);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  L.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  L.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return L.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            L.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        GetLinkedEventGID() {
          return this.m_linkedEvent;
        }
        GetListInfo() {
          return this.m_mapListInfo;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([F.Wv.bM, F.Wv.GH], !0));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let r = L.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            i = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (i |= e) : (i &= ~e);
            }),
            i == this.m_clanAccountFlags)
          )
            return;
          let a = new Array();
          i & F.Wv._x && a.push(F.Wv._x),
            i & F.Wv.GH && a.push(F.Wv.GH),
            i & F.Wv.bM && a.push(F.Wv.bM),
            i & F.Wv.Jb && a.push(F.Wv.Jb),
            i & F.Wv.Nq && a.push(F.Wv.Nq),
            i & F.Wv.Jn && a.push(F.Wv.Jn),
            i & F.Wv.Mv && a.push(F.Wv.Mv),
            i & F.Wv.xc && a.push(F.Wv.xc),
            i & F.Wv.yl && a.push(F.Wv.yl);
          let n = new FormData();
          n.append("sessionid", (0, L.KC)()),
            n.append("clan_account_id", this.GetClanAccountID().toString()),
            n.append("accountflags", JSON.stringify(a));
          let o = await R().post(r, n);
          o &&
            200 == o.status &&
            o.data.success == s.R &&
            (this.m_clanAccountFlags = i);
        }
      }
      (0, a.Cg)([I.sH], W.prototype, "m_appidList", void 0),
        (0, a.Cg)([I.sH], W.prototype, "m_nFollowers", void 0),
        (0, a.Cg)([I.sH], W.prototype, "m_clanAccountFlags", void 0);
      var A = r(72034),
        j = r(17720),
        G = r(63340);
      class D {
        constructor() {
          (0, I.Gn)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        m_serviceTransport = void 0;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, L.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                const t = Number(e.creator_clan_id),
                  r = j.b.InitFromClanID(t),
                  i = new W(r);
                i.Initialize(e),
                  (i.m_promise = D.GetAsPromise(i)),
                  this.m_mapClanToCreatorHome.set(t, i);
              });
            const t = (0, L.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        GetServiceTransport() {
          if (!this.m_serviceTransport) {
            const e = (0, L.Tc)("loyalty_webapi_token", "application_config"),
              t = new A.D(L.TS.WEBAPI_BASE_URL, e || void 0);
            this.m_serviceTransport = t.GetServiceTransport();
          }
          return this.m_serviceTransport;
        }
        static async GetAsPromise(e) {
          return e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
              t[0].clan_account_id > 0 &&
              "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, t = !1, r) {
          if (
            (this.LazyInit(),
            t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let t = new W(e);
            (t.m_promise = this.InternalCreatorHome(t, r)),
              await t.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let r = { get_appids: !0, l: L.TS.LANGUAGE },
            i =
              L.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            a = await R().get(i, { params: r, cancelToken: t && t.token });
          return e.Initialize(a.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let r = { appid: e },
              i = L.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              a = await R().get(i, {
                params: r,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, a.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, r) {
          let i = `${L.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            a = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: L.TS.COUNTRY,
              l: L.TS.LANGUAGE,
              origin: self.origin,
            },
            s = new Array();
          const n = await R().get(i, { params: a, cancelToken: r.token });
          return (
            n.data.curators &&
              (0, I.h5)(() => {
                n.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = j.b.InitFromClanID(e.creator_clan_id),
                      r = new W(t);
                    r.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
                  }
                  s.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            s
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, a.Cg)([I.sH], D.prototype, "m_mapClanToCreatorHome", void 0),
        (0, a.Cg)([I.sH], D.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, a.Cg)([I.XI], D.prototype, "LazyInit", null);
      const U = new D();
      function O(e) {
        if (!e) return null;
        const t = U.BHasCreatorHomeLoaded(e.clanSteamID)
          ? U.GetCreatorHome(e.clanSteamID)
          : void 0;
        return e.GetSaleURL(t?.GetCreatorHomeURL("developer"));
      }
      function q(e) {
        if (!e) return;
        const t = (0, L.Tc)("creator_home_list_info", "application_config");
        if (null == t || "object" != typeof t || Array.isArray(t)) return;
        const r = t[e];
        return r && r.title
          ? {
              title: r.title,
              description: r.description?.length ? r.description : void 0,
              imageUrl: r.listtileimage?.length ? r.listtileimage : void 0,
            }
          : void 0;
      }
      function H(e) {
        return q(e)?.title;
      }
      function E(e) {
        return q(e)?.description;
      }
      function P(e) {
        return q(e)?.imageUrl;
      }
      function k(e) {
        const t = j.b.InitFromClanID(e);
        return {
          queryKey: ["CreatorHome", e],
          initialData: () => U.GetCreatorHome(t),
          queryFn: async () => {
            const t = j.b.InitFromClanID(e);
            return await U.LoadCreatorHome(t, !0);
          },
        };
      }
      function N(e) {
        const { data: t, isFetching: r, refetch: i } = (0, C.I)(k(e));
        return { creatorHome: t, isFetching: r, refetch: i };
      }
      function x(e, t, r) {
        return {
          queryKey: ["GetCreatorHomeListAppsQuery", e, t, r],
          queryFn: async () => {
            const a = U.GetServiceTransport(),
              n = o.w.Init(f);
            n.Body().set_clan_account_id(e),
              n.Body().set_listid(t),
              r && n.Body().set_ignore_dlc(!0);
            const l = await i.GetDevPageListApps(a, n);
            if (l.GetEResult() != s.R)
              throw new Error(
                `Error from GetCreatorHomeListAppsQuery: ${l.GetEResult()}`,
              );
            return l
              .Body()
              .apps()
              .slice()
              .sort((e, t) => (e.sort_order() ?? 0) - (t.sort_order() ?? 0))
              .map((e) => e.appid() ?? 0)
              .filter((e) => e > 0);
          },
          enabled: Boolean(e > 0 && t),
        };
      }
      function V(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetAllListsQuery", e, t],
          queryFn: async () => {
            const r = U.GetServiceTransport(),
              i = o.w.Init(v.eh);
            i
              .Body()
              .set_steamid(
                new j.b(e, L.TS.EUNIVERSE, n.P3F, 0).ConvertTo64BitString(),
              ),
              i.Body().set_count(100);
            const a = await v.K_.GetLists(r, i);
            return a.BSuccess()
              ? a
                  .Body()
                  .list_details()
                  .filter((e) => t || e.list_state() != v.eb.N0)
              : null;
          },
          enabled: e > 0,
        };
      }
      function K(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetListsDetailsQuery", e, t],
          queryFn: async () => {
            const r = U.GetServiceTransport(),
              i = o.w.Init(v.dU);
            i
              .Body()
              .set_steamid(
                new j.b(e, L.TS.EUNIVERSE, n.P3F, 0).ConvertTo64BitString(),
              ),
              i.Body().set_listid(t);
            const a = await v.K_.GetListDetails(r, i);
            return a.BSuccess() ? (a.Body().list_details() ?? null) : null;
          },
          enabled: e > 0,
        };
      }
      (0, G.V)("g_CreatorHomeStore", U);
    },
  },
]);
