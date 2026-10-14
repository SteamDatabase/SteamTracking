/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [56585],
    {
      64407: (X, p, T) => {
        T.d(p, {
          dC: () => W,
          fD: () => c,
          iz: () => h,
          l6: () => O,
          lO: () => B,
          w5: () => f,
        });
        var o = T(80613),
          l = T.n(o),
          i = T(75245),
          b = T(35038),
          K = T(40562);
        class W extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.appid || i.Sg(W.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    link: { n: 2, c: K.Bf },
                    remove: {
                      n: 3,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    update_json_only: {
                      n: 4,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    skip_clan_permissions: {
                      n: 5,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    partner_id: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
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
          static toObject(r, n) {
            return i.BT(W.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new W();
            return W.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(W.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(W.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Request";
          }
        }
        class U extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new U();
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new U();
            return U.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Response";
          }
        }
        class h extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.appid || i.Sg(h.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, n) {
            return i.BT(h.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new h();
            return h.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(h.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(h.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Request";
          }
        }
        class d extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.links || i.Sg(d.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: { links: { n: 1, c: K.Bf, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(d.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new d();
            return d.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(d.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(d.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Response";
          }
        }
        class B extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.clan_account_ids || i.Sg(B.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    clan_account_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    ignore_dlc: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = i.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(B.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new B();
            return B.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(B.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(B.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
          }
        }
        class j extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.results || i.Sg(j.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: { results: { n: 1, c: K.qh, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(j.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new j();
            return j.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(j.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(j.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
          }
        }
        class O extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.clan_account_id || i.Sg(O.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    listid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    ignore_dlc: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
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
          static toObject(r, n) {
            return i.BT(O.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new O();
            return O.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(O.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(O.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Request";
          }
        }
        class I extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.apps || i.Sg(I.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: { apps: { n: 1, c: M, r: !0, q: !0 } },
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
          static toObject(r, n) {
            return i.BT(I.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new I();
            return I.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(I.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(I.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response";
          }
        }
        class M extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.appid || i.Sg(M.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    sort_order: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, n) {
            return i.BT(M.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new M();
            return M.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(M.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(M.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
          }
        }
        class c extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.partnerid || i.Sg(c.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = i.w0(c.M())), c.sm_mbf;
          }
          toObject(r = !1) {
            return c.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(c.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(c.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new c();
            return c.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(c.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return c.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(c.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Request";
          }
        }
        class a extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              a.prototype.results || i.Sg(a.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: { results: { n: 1, c: w, r: !0, q: !0 } },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = i.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, n) {
            return i.BT(a.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new a();
            return a.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(a.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(a.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response";
          }
        }
        class w extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.clan_accountid || i.Sg(w.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    clan_accountid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    linknames: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
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
          static toObject(r, n) {
            return i.BT(w.M(), r, n);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (l().BinaryReader)(r),
              z = new w();
            return w.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return i.zj(w.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            i.i0(w.M(), r, n);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
          }
        }
        var f;
        ((H) => {
          function r(x, F, V) {
            return x.SendMsg(
              "StoreCatalog.SetDevPageLink#1",
              (0, b.I8)(W, F, V),
              U,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          H.SetDevPageLink = r;
          function n(x, F, V) {
            return x.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, b.I8)(h, F, V),
              d,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          H.GetDevPageLinks = n;
          function z(x, F, V) {
            return x.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, b.I8)(B, F, V),
              j,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          H.GetDevPageAllAppsLinked = z;
          function $(x, F, V) {
            return x.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, b.I8)(O, F, V),
              I,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          H.GetDevPageListApps = $;
          function N(x, F, V) {
            return x.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, b.I8)(c, F, V),
              a,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          H.GetDevPagesForPartner = N;
        })(f || (f = {}));
      },
      40562: (X, p, T) => {
        T.d(p, { Bf: () => c, qh: () => a, VY: () => o });
        var o = {};
        T.r(o), T.d(o, { XU: () => j, kF: () => W, wQ: () => K });
        var l = T(80613),
          i = T.n(l),
          b = T(75245);
        const K = 0,
          W = 1,
          U = 2,
          h = 3,
          d = 4,
          B = 5,
          j = 6,
          O = 7;
        function I(w) {
          return "unknown EAppDevsRelationship ( " + w + " )";
        }
        function M(w) {
          return "unknown ECreatorHomeLinkRole ( " + w + " )";
        }
        class c extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(f = null) {
            super(),
              c.prototype.appid || b.Sg(c.M()),
              l.Message.initialize(this, f, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    appid: { n: 1, br: b.qM.readUint32, bw: b.gp.writeUint32 },
                    clan_steamid: {
                      n: 2,
                      br: b.qM.readFixed64String,
                      bw: b.gp.writeFixed64String,
                    },
                    relation: { n: 3, br: b.qM.readEnum, bw: b.gp.writeEnum },
                    linkname: {
                      n: 4,
                      br: b.qM.readString,
                      bw: b.gp.writeString,
                    },
                    json: { n: 5, br: b.qM.readString, bw: b.gp.writeString },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = b.w0(c.M())), c.sm_mbf;
          }
          toObject(f = !1) {
            return c.toObject(f, this);
          }
          static toObject(f, H) {
            return b.BT(c.M(), f, H);
          }
          static fromObject(f) {
            return b.Uq(c.M(), f);
          }
          static deserializeBinary(f) {
            let H = new (i().BinaryReader)(f),
              r = new c();
            return c.deserializeBinaryFromReader(r, H);
          }
          static deserializeBinaryFromReader(f, H) {
            return b.zj(c.MBF(), f, H);
          }
          serializeBinary() {
            var f = new (i().BinaryWriter)();
            return c.serializeBinaryToWriter(this, f), f.getResultBuffer();
          }
          static serializeBinaryToWriter(f, H) {
            b.i0(c.M(), f, H);
          }
          serializeBase64String() {
            var f = new (i().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, f), f.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageLink";
          }
        }
        class a extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(f = null) {
            super(),
              a.prototype.clan_account_id || b.Sg(a.M()),
              l.Message.initialize(this, f, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: b.qM.readUint32,
                      pbr: b.qM.readPackedUint32,
                      bw: b.gp.writeRepeatedUint32,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = b.w0(a.M())), a.sm_mbf;
          }
          toObject(f = !1) {
            return a.toObject(f, this);
          }
          static toObject(f, H) {
            return b.BT(a.M(), f, H);
          }
          static fromObject(f) {
            return b.Uq(a.M(), f);
          }
          static deserializeBinary(f) {
            let H = new (i().BinaryReader)(f),
              r = new a();
            return a.deserializeBinaryFromReader(r, H);
          }
          static deserializeBinaryFromReader(f, H) {
            return b.zj(a.MBF(), f, H);
          }
          serializeBinary() {
            var f = new (i().BinaryWriter)();
            return a.serializeBinaryToWriter(this, f), f.getResultBuffer();
          }
          static serializeBinaryToWriter(f, H) {
            b.i0(a.M(), f, H);
          }
          serializeBase64String() {
            var f = new (i().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, f), f.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageToApps";
          }
        }
      },
      16512: (X, p, T) => {
        T.d(p, {
          GT: () => Z,
          eL: () => L,
          io: () => V,
          A2: () => Y,
          n4: () => x,
          pF: () => N,
          id: () => S,
          FV: () => R,
        });
        var o = T(72604),
          l = T(35038),
          i = T(64407),
          b = T(93804),
          K = T(20194),
          W = T(41735),
          U = T.n(W),
          h = T(14947),
          d = T(33512),
          B = T(3166),
          j = Object.defineProperty,
          O = Object.getOwnPropertyDescriptor,
          I = (u, t, s, m) => {
            for (
              var e = m > 1 ? void 0 : m ? O(t, s) : t, y = u.length - 1, E;
              y >= 0;
              y--
            )
              (E = u[y]) && (e = (m ? E(t, s, e) : E(e)) || e);
            return m && e && j(t, s, e), e;
          };
        class M {
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
          constructor(t) {
            (0, h.Gn)(this), (this.m_clanSteamID = t);
          }
          Initialize(t) {
            (this.m_strName = t.name || ""),
              (this.m_strAvatarURLFullSize =
                t.avatar_url_full_size ||
                "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
              (this.m_strTagLineLoc = t.tag_line_localized || ""),
              (this.m_nFollowers = t.followers || 0),
              (this.m_strVanity = t.vanity || void 0),
              (this.m_webLink = t.weblink),
              (this.m_bIsHidden = t.hidden || !1),
              (this.m_clanAccountFlags = t.clan_account_flags ?? 0),
              (this.m_linkedEvent = t.linked_event),
              (this.m_mapListInfo = new Map(Object.entries(t.list_info ?? {}))),
              t.appids && t.appids.forEach((s) => this.m_appidList.push(s)),
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
            return !!(this.m_clanAccountFlags & d.Wv.GH);
          }
          BHasClanAccountFlagSet(t) {
            return !!(this.m_clanAccountFlags & t);
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
          GetCreatorHomeURL(t) {
            if (this.m_strVanity) {
              switch (t) {
                case "publisher":
                  return (
                    B.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                  );
                case "franchise":
                  return (
                    B.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                  );
              }
              return (
                B.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/"
              );
            }
            return (
              B.TS.STORE_BASE_URL +
              "curator/" +
              this.m_clanSteamID.GetAccountID() +
              "/"
            );
          }
          BHasWebLink() {
            return this.m_webLink !== void 0;
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
          AdjustFollower(t) {
            this.m_nFollowers += t;
          }
          async EnablePartnerEventEditorFlag() {
            this.BIsPartnerEventEditorEnabled() ||
              (await this.UpdateGroupFlagsFeature([d.Wv.bM, d.Wv.GH], !0));
          }
          async UpdateGroupFlagsFeature(t, s) {
            let m = B.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              e = this.m_clanAccountFlags;
            if (
              (t.forEach((J) => {
                s ? (e |= J) : (e &= ~J);
              }),
              e == this.m_clanAccountFlags)
            )
              return;
            let y = new Array();
            e & d.Wv._x && y.push(d.Wv._x),
              e & d.Wv.GH && y.push(d.Wv.GH),
              e & d.Wv.bM && y.push(d.Wv.bM),
              e & d.Wv.Jb && y.push(d.Wv.Jb),
              e & d.Wv.Nq && y.push(d.Wv.Nq),
              e & d.Wv.Jn && y.push(d.Wv.Jn),
              e & d.Wv.Mv && y.push(d.Wv.Mv),
              e & d.Wv.xc && y.push(d.Wv.xc),
              e & d.Wv.yl && y.push(d.Wv.yl);
            let E = new FormData();
            E.append("sessionid", (0, B.KC)()),
              E.append("clan_account_id", this.GetClanAccountID().toString()),
              E.append("accountflags", JSON.stringify(y));
            let Q = await U().post(m, E);
            Q &&
              Q.status == 200 &&
              Q.data.success == o.R &&
              (this.m_clanAccountFlags = e);
          }
        }
        I([h.sH], M.prototype, "m_appidList", 2),
          I([h.sH], M.prototype, "m_nFollowers", 2),
          I([h.sH], M.prototype, "m_clanAccountFlags", 2);
        var c = T(77008),
          a = T(60298),
          w = T(76559),
          f = T(77291),
          H = Object.defineProperty,
          r = Object.getOwnPropertyDescriptor,
          n = (u, t, s, m) => {
            for (
              var e = m > 1 ? void 0 : m ? r(t, s) : t, y = u.length - 1, E;
              y >= 0;
              y--
            )
              (E = u[y]) && (e = (m ? E(t, s, e) : E(e)) || e);
            return m && e && H(t, s, e), e;
          };
        const z = class A {
          constructor() {
            (0, h.Gn)(this);
          }
          m_mapClanToCreatorHome = new Map();
          m_mapAppToCreatorIDList = new Map();
          m_bLoadedFromConfig = !1;
          m_serviceTransport = void 0;
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              const t = (0, B.Tc)("creatorhome", "application_config");
              this.ValidateStoreDefault(t) &&
                t.forEach((m) => {
                  const e = Number(m.creator_clan_id),
                    y = w.b.InitFromClanID(e),
                    E = new M(y);
                  E.Initialize(m),
                    (E.m_promise = A.GetAsPromise(E)),
                    this.m_mapClanToCreatorHome.set(e, E);
                });
              const s = (0, B.Tc)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(s) &&
                s.forEach((m) => {
                  m.appid !== void 0 &&
                    (this.m_mapAppToCreatorIDList.has(m.appid) ||
                      this.m_mapAppToCreatorIDList.set(m.appid, new Array()),
                    this.m_mapAppToCreatorIDList.get(m.appid).push(m));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          GetServiceTransport() {
            if (!this.m_serviceTransport) {
              const t = (0, B.Tc)("loyalty_webapi_token", "application_config"),
                s = (0, a.p)(new c.D(B.TS.WEBAPI_BASE_URL, t || void 0));
              this.m_serviceTransport = s.GetServiceTransport();
            }
            return this.m_serviceTransport;
          }
          static async GetAsPromise(t) {
            return t;
          }
          ValidateStoreDefault(t) {
            const s = t;
            return s &&
              Array.isArray(s) &&
              s.length > 0 &&
              typeof s[0] == "object"
              ? typeof s[0].name == "string" &&
                  (typeof s[0].creator_clan_id == "string" ||
                    typeof s[0].creator_clan_id == "number")
              : !1;
          }
          ValidateStoreDefaultAppList(t) {
            const s = t;
            return s &&
              Array.isArray(s) &&
              s.length > 0 &&
              typeof s[0] == "object"
              ? typeof s[0].clan_account_id == "number" &&
                  s[0].clan_account_id > 0 &&
                  typeof s[0].appid == "number" &&
                  s[0].appid > 0
              : !1;
          }
          BHasCreatorHomeLoaded(t) {
            return (
              this.m_mapClanToCreatorHome.has(t.GetAccountID()) &&
              this.m_mapClanToCreatorHome.get(t.GetAccountID()).BIsLoaded()
            );
          }
          GetCreatorHome(t) {
            return this.m_mapClanToCreatorHome.get(t.GetAccountID());
          }
          GetCreatorHomeByID(t) {
            return this.m_mapClanToCreatorHome.get(t.clan_account_id);
          }
          async LoadCreatorHome(t, s = !1, m) {
            if (
              (this.LazyInit(),
              s || !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
            ) {
              let e = new M(t);
              (e.m_promise = this.InternalCreatorHome(e, m)),
                await e.m_promise,
                this.m_mapClanToCreatorHome.set(t.GetAccountID(), e);
            }
            return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
          }
          async InternalCreatorHome(t, s) {
            let m = { get_appids: !0, l: B.TS.LANGUAGE },
              e =
                B.TS.STORE_BASE_URL +
                "curator/" +
                t.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              y = await U().get(e, { params: m, cancelToken: s && s.token });
            return t.Initialize(y.data), t;
          }
          async LoadCreatorHomeListForAppIncludeHiddden(t, s) {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
              let m = { appid: t },
                e = B.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                y = await U().get(e, {
                  params: m,
                  cancelToken: s && s.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(t, y.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(t);
          }
          async SearchCreatorHomeStore(t, s, m) {
            let e = `${B.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              y = {
                term: t.replace(" ", "+"),
                require_creator: s,
                cc: B.TS.COUNTRY,
                l: B.TS.LANGUAGE,
                origin: self.origin,
              },
              E = new Array();
            const Q = await U().get(e, { params: y, cancelToken: m.token });
            return (
              Q.data.curators &&
                (0, h.h5)(() => {
                  Q.data.curators.forEach((J) => {
                    if (!this.m_mapClanToCreatorHome.has(J.creator_clan_id)) {
                      let G = w.b.InitFromClanID(J.creator_clan_id),
                        q = new M(G);
                      q.Initialize(J),
                        this.m_mapClanToCreatorHome.set(J.creator_clan_id, q);
                    }
                    E.push(this.m_mapClanToCreatorHome.get(J.creator_clan_id));
                  });
                }),
              E
            );
          }
          GetCreatorHomeListForAppIncludeHidden(t) {
            return this.m_mapAppToCreatorIDList.has(t)
              ? this.m_mapAppToCreatorIDList.get(t)
              : [];
          }
        };
        n([h.sH], z.prototype, "m_mapClanToCreatorHome", 2),
          n([h.sH], z.prototype, "m_mapAppToCreatorIDList", 2),
          n([h.XI], z.prototype, "LazyInit", 1);
        let $ = z;
        const N = new $();
        (0, f.V)("g_CreatorHomeStore", N);
        function x(u) {
          if (!u) return null;
          const t = N.BHasCreatorHomeLoaded(u.clanSteamID)
            ? N.GetCreatorHome(u.clanSteamID)
            : void 0;
          return u.GetSaleURL(t?.GetCreatorHomeURL("developer"));
        }
        function F(u) {
          if (!u) return;
          const t = (0, B.Tc)("creator_home_list_info", "application_config");
          if (t == null || typeof t != "object" || Array.isArray(t)) return;
          const s = t[u];
          if (!(!s || !s.title))
            return {
              title: s.title,
              description: s.description?.length ? s.description : void 0,
              imageUrl: s.listtileimage?.length ? s.listtileimage : void 0,
            };
        }
        function V(u) {
          return F(u)?.title;
        }
        function L(u) {
          return F(u)?.description;
        }
        function g(u) {
          return F(u)?.imageUrl;
        }
        function Y(u) {
          const t = w.b.InitFromClanID(u);
          return {
            queryKey: ["CreatorHome", u],
            initialData: () => N.GetCreatorHome(t),
            queryFn: async () => {
              const s = w.b.InitFromClanID(u);
              return await N.LoadCreatorHome(s, !0);
            },
          };
        }
        function R(u) {
          const { data: t, isFetching: s, refetch: m } = (0, K.I)(Y(u));
          return { creatorHome: t, isFetching: s, refetch: m };
        }
        function S(u, t, s) {
          const m = (0, K.I)({
            queryKey: ["useCreateHomeLinkedApps", t, s],
            queryFn: async () => {
              const e = l.w.Init(i.lO);
              e.Body().add_clan_account_ids(t),
                s && e.Body().set_ignore_dlc(!0);
              const y = await i.w5.GetDevPageAllAppsLinked(u, e);
              if (y.GetEResult() != o.R)
                throw new Error(
                  `Error from useCreateHomeLinkedApps: ${y.GetEResult()}`,
                );
              return y.Body().results().length == 0
                ? []
                : y.Body().results()[0].appid_list();
            },
            enabled: !!(t > 0 && u),
          });
          return m?.isLoading ? null : m.data;
        }
        function Z(u, t, s) {
          return {
            queryKey: ["GetCreatorHomeListAppsQuery", u, t, s],
            queryFn: async () => {
              const m = N.GetServiceTransport(),
                e = l.w.Init(i.l6);
              e.Body().set_clan_account_id(u),
                e.Body().set_listid(t),
                s && e.Body().set_ignore_dlc(!0);
              const y = await i.w5.GetDevPageListApps(m, e);
              if (y.GetEResult() != o.R)
                throw new Error(
                  `Error from GetCreatorHomeListAppsQuery: ${y.GetEResult()}`,
                );
              return y
                .Body()
                .apps()
                .slice()
                .sort((E, Q) => (E.sort_order() ?? 0) - (Q.sort_order() ?? 0))
                .map((E) => E.appid() ?? 0)
                .filter((E) => E > 0);
            },
            enabled: !!(u > 0 && t),
          };
        }
        function D(u, t, s) {
          const m = useQuery(Z(u, t, s));
          return m?.isLoading ? null : m.data;
        }
        function k(u, t) {
          return {
            queryKey: ["GetCreatorHomeGetAllListsQuery", u, t],
            queryFn: async () => {
              const s = N.GetServiceTransport(),
                m = CProtoBufMsg.Init(CStoreCuration_GetLists_Request);
              m
                .Body()
                .set_steamid(
                  new CSteamID(
                    u,
                    Config.EUNIVERSE,
                    k_EAccountTypeClan,
                    0,
                  ).ConvertTo64BitString(),
                ),
                m.Body().set_count(100);
              const e = await StoreCurationService.GetLists(s, m);
              return e.BSuccess()
                ? e
                    .Body()
                    .list_details()
                    .filter(
                      (y) =>
                        t ||
                        y.list_state() !=
                          EStoreCuratorListState.k_EStoreCuratorListState_Hidden,
                    )
                : null;
            },
            enabled: u > 0,
          };
        }
        function P(u, t) {
          const { data: s, isFetching: m, refetch: e } = useQuery(k(u, t));
          return { lists: s, isFetching: m, refetch: e };
        }
        function v(u, t) {
          return {
            queryKey: ["GetCreatorHomeGetListsDetailsQuery", u, t],
            queryFn: async () => {
              const s = N.GetServiceTransport(),
                m = CProtoBufMsg.Init(CStoreCuration_GetListDetails_Request);
              m
                .Body()
                .set_steamid(
                  new CSteamID(
                    u,
                    Config.EUNIVERSE,
                    k_EAccountTypeClan,
                    0,
                  ).ConvertTo64BitString(),
                ),
                m.Body().set_listid(t);
              const e = await StoreCurationService.GetListDetails(s, m);
              return e.BSuccess() ? (e.Body().list_details() ?? null) : null;
            },
            enabled: u > 0,
          };
        }
        function C(u, t) {
          const { data: s, isFetching: m, refetch: e } = useQuery(v(u, t));
          return { list: s, isFetching: m, refetch: e };
        }
      },
    },
  ]);
})();
