/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [16343],
    {
      3067: (se, Gt, E) => {
        "use strict";
        E.r(Gt), E.d(Gt, { default: () => Co });
        var c = E(7850),
          Be = E(121),
          Ie = E(45737),
          ye = E.n(Ie),
          C = E(58534),
          v = E(95695),
          d = E.n(v),
          i = E(88003),
          F = E(82734),
          S = E(18210),
          H = E(72604),
          R = E(80613),
          Z = E.n(R),
          T = E(75245),
          de = E(35038);
        const re = 1,
          Oe = 2,
          Ae = 3;
        function Se(s) {
          return "unknown ETimelineImageType ( " + s + " )";
        }
        class ie extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ie.prototype.appid || T.Sg(ie.M()),
              R.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                    assetset_id: {
                      n: 2,
                      br: T.qM.readFixed64String,
                      bw: T.gp.writeFixed64String,
                    },
                    name: { n: 3, br: T.qM.readString, bw: T.gp.writeString },
                    desc: { n: 4, br: T.qM.readString, bw: T.gp.writeString },
                    branches: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: T.qM.readString,
                      bw: T.gp.writeRepeatedString,
                    },
                    last_update_rtime: {
                      n: 6,
                      br: T.qM.readUint32,
                      bw: T.gp.writeUint32,
                    },
                    priority: {
                      n: 7,
                      br: T.qM.readUint32,
                      bw: T.gp.writeUint32,
                    },
                    last_publish_rtime: {
                      n: 8,
                      br: T.qM.readUint32,
                      bw: T.gp.writeUint32,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = T.w0(ie.M())), ie.sm_mbf;
          }
          toObject(t = !1) {
            return ie.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(ie.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(ie.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new ie();
            return ie.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(ie.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(ie.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSet";
          }
        }
        class fe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              fe.prototype.appid || T.Sg(fe.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                    assetset: { n: 2, c: ie },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = T.w0(fe.M())), fe.sm_mbf;
          }
          toObject(t = !1) {
            return fe.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(fe.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(fe.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new fe();
            return fe.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(fe.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(fe.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_CreateAssetSet_Request";
          }
        }
        class Y extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.assetset || T.Sg(Y.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = { proto: Y, fields: { assetset: { n: 1, c: ie } } }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = T.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(Y.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new Y();
            return Y.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(Y.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(Y.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_CreateAssetSet_Response";
          }
        }
        class P extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              P.prototype.appid || T.Sg(P.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                    assetset_id: {
                      n: 2,
                      br: T.qM.readFixed64String,
                      bw: T.gp.writeFixed64String,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = T.w0(P.M())), P.sm_mbf;
          }
          toObject(t = !1) {
            return P.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(P.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(P.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new P();
            return P.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(P.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return P.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(P.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_DeleteAssetSet_Request";
          }
        }
        class J extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new J();
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new J();
            return J.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_DeleteAssetSet_Response";
          }
        }
        class $ extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.appid || T.Sg($.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                    assetset: { n: 2, c: ie },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = T.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT($.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new $();
            return $.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj($.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0($.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_UpdateAssetSet_Request";
          }
        }
        class ce extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ce.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new ce();
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new ce();
            return ce.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_UpdateAssetSet_Response";
          }
        }
        class ge extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ge.prototype.appid || T.Sg(ge.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = T.w0(ge.M())), ge.sm_mbf;
          }
          toObject(t = !1) {
            return ge.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(ge.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(ge.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new ge();
            return ge.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(ge.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(ge.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_GetAllAssetSets_Request";
          }
        }
        class he extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.assetset || T.Sg(he.M()),
              R.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: { assetset: { n: 2, c: ie, r: !0, q: !0 } },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = T.w0(he.M())), he.sm_mbf;
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(he.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(he.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new he();
            return he.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(he.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(he.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_GetAllAssetSets_Response";
          }
        }
        class pe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pe.prototype.appid || T.Sg(pe.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                    assetset_id: {
                      n: 2,
                      br: T.qM.readFixed64String,
                      bw: T.gp.writeFixed64String,
                    },
                    branch: { n: 3, br: T.qM.readString, bw: T.gp.writeString },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = T.w0(pe.M())), pe.sm_mbf;
          }
          toObject(t = !1) {
            return pe.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(pe.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(pe.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new pe();
            return pe.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(pe.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(pe.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_AddBranchToAssetSet_Request";
          }
        }
        class ue extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ue.prototype.updated || T.Sg(ue.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = { proto: ue, fields: { updated: { n: 1, c: ie } } }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = T.w0(ue.M())), ue.sm_mbf;
          }
          toObject(t = !1) {
            return ue.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(ue.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(ue.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new ue();
            return ue.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(ue.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(ue.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_AddBranchToAssetSet_Response";
          }
        }
        class g extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              g.prototype.appid || T.Sg(g.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                    assetset_id: {
                      n: 2,
                      br: T.qM.readFixed64String,
                      bw: T.gp.writeFixed64String,
                    },
                    branch: { n: 3, br: T.qM.readString, bw: T.gp.writeString },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = T.w0(g.M())), g.sm_mbf;
          }
          toObject(t = !1) {
            return g.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(g.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(g.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new g();
            return g.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(g.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return g.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(g.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_RemoveBranchFromAssetSet_Request";
          }
        }
        class p extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              p.prototype.updated || T.Sg(p.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = { proto: p, fields: { updated: { n: 1, c: ie } } }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = T.w0(p.M())), p.sm_mbf;
          }
          toObject(t = !1) {
            return p.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(p.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(p.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new p();
            return p.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(p.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return p.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(p.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_RemoseBranchFromAssetSet_Response";
          }
        }
        class I extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.appid || T.Sg(I.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                    first_assetset_id: {
                      n: 2,
                      br: T.qM.readFixed64String,
                      bw: T.gp.writeFixed64String,
                    },
                    second_assetset_id: {
                      n: 3,
                      br: T.qM.readFixed64String,
                      bw: T.gp.writeFixed64String,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = T.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(I.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new I();
            return I.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(I.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(I.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_SwapAssetSetPriority_Request";
          }
        }
        class x extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              x.prototype.updated_first || T.Sg(x.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    updated_first: { n: 1, c: ie },
                    updated_second: { n: 2, c: ie },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = T.w0(x.M())), x.sm_mbf;
          }
          toObject(t = !1) {
            return x.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(x.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(x.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new x();
            return x.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(x.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(x.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_SwapAssetSetPriority_Response";
          }
        }
        class k extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.appid || T.Sg(k.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    appid: { n: 1, br: T.qM.readUint32, bw: T.gp.writeUint32 },
                    assetset_id: {
                      n: 2,
                      br: T.qM.readFixed64String,
                      bw: T.gp.writeFixed64String,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = T.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(k.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new k();
            return k.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(k.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(k.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_UpdatePublishTime_Request";
          }
        }
        class O extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.updated || T.Sg(O.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = { proto: O, fields: { updated: { n: 1, c: ie } } }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = T.w0(O.M())), O.sm_mbf;
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, r) {
            return T.BT(O.M(), t, r);
          }
          static fromObject(t) {
            return T.Uq(O.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (Z().BinaryReader)(t),
              n = new O();
            return O.deserializeBinaryFromReader(n, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return T.zj(O.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (Z().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            T.i0(O.M(), t, r);
          }
          serializeBase64String() {
            var t = new (Z().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAssetSetPublishing_UpdatePublishTime_Response";
          }
        }
        var N;
        ((s) => {
          function t(b, y, w) {
            return b.SendMsg(
              "AssetSetPublishing.CreateAssetSet#1",
              (0, de.I8)(fe, y, w),
              Y,
              { ePrivilege: 7, rgBrowserAPISites: ["partner"] },
            );
          }
          s.CreateAssetSet = t;
          function r(b, y, w) {
            return b.SendMsg(
              "AssetSetPublishing.DeleteAssetSet#1",
              (0, de.I8)(P, y, w),
              J,
              { ePrivilege: 7, rgBrowserAPISites: ["partner"] },
            );
          }
          s.DeleteAssetSet = r;
          function n(b, y, w) {
            return b.SendMsg(
              "AssetSetPublishing.UpdateAssetSet#1",
              (0, de.I8)($, y, w),
              ce,
              { ePrivilege: 7, rgBrowserAPISites: ["partner"] },
            );
          }
          s.UpdateAssetSet = n;
          function l(b, y, w) {
            return b.SendMsg(
              "AssetSetPublishing.GetAllAssetSets#1",
              (0, de.I8)(ge, y, w),
              he,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          s.GetAllAssetSets = l;
          function u(b, y, w) {
            return b.SendMsg(
              "AssetSetPublishing.AddBranchToAssetSet#1",
              (0, de.I8)(pe, y, w),
              ue,
              { ePrivilege: 7, rgBrowserAPISites: ["partner"] },
            );
          }
          s.AddBranchToAssetSet = u;
          function m(b, y, w) {
            return b.SendMsg(
              "AssetSetPublishing.RemoveBranchFromAssetSet#1",
              (0, de.I8)(g, y, w),
              p,
              { ePrivilege: 7, rgBrowserAPISites: ["partner"] },
            );
          }
          s.RemoveBranchFromAssetSet = m;
          function f(b, y, w) {
            return b.SendMsg(
              "AssetSetPublishing.SwapAssetSetPriority#1",
              (0, de.I8)(I, y, w),
              x,
              { ePrivilege: 7 },
            );
          }
          s.SwapAssetSetPriority = f;
          function h(b, y, w) {
            return b.SendMsg(
              "AssetSetPublishing.UpdatePublishTime#1",
              (0, de.I8)(k, y, w),
              O,
              { ePrivilege: 7 },
            );
          }
          s.UpdatePublishTime = h;
        })(N || (N = {}));
        var M = E(90626),
          ee = E(77008),
          le = E(60298),
          me = E(34592),
          De = E(27066),
          Je = E(8323),
          be = E(54963),
          Ye = E(3166),
          Nr = Object.defineProperty,
          Ar = Object.getOwnPropertyDescriptor,
          pr = (s, t, r, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Ar(t, r) : t, u = s.length - 1, m;
              u >= 0;
              u--
            )
              (m = s[u]) && (l = (n ? m(t, r, l) : m(l)) || l);
            return n && l && Nr(t, r, l), l;
          };
        const Mr = "default",
          cr = "steam_default_assetset",
          vr = "steam_default_hidden",
          Vr = class hi {
            m_mapAssetSets = new Map();
            m_mapAssetSetCallback = new Map();
            m_dummyAssetSetCallback = new Je.lu();
            m_mapAssetSetListChangeCallback = new Map();
            m_SteamInterface = null;
            GetAllAssetSets(t) {
              return Array.from(this.m_mapAssetSets.values()).filter(
                (r) => r.appid === t,
              );
            }
            GetAllNonSpecialAssetSets(t) {
              return Array.from(this.m_mapAssetSets.values()).filter(
                (r) => r.appid === t && r.name != cr && r.name != vr,
              );
            }
            GetAllPublicAssetSets(t) {
              return Array.from(this.m_mapAssetSets.values()).filter(
                (r) => r.appid === t && r.branches.includes(Mr),
              );
            }
            GetAssetSetByID(t, r) {
              return r
                ? this.m_mapAssetSets.get(r)
                : {
                    name: (0, S.we)(
                      "#TimelineMarkers_Hidden_new_asset_set_new_name",
                      this.GetAllNonSpecialAssetSets(t).length + 1,
                    ),
                    desc: "",
                  };
            }
            GetAssetSetChangeCallback(t) {
              return t
                ? (this.m_mapAssetSetCallback.has(t) ||
                    this.m_mapAssetSetCallback.set(t, new Je.lu()),
                  this.m_mapAssetSetCallback.get(t))
                : this.m_dummyAssetSetCallback;
            }
            GetAppAssetSetListChangeCallback(t) {
              return (
                this.m_mapAssetSetListChangeCallback.has(t) ||
                  this.m_mapAssetSetListChangeCallback.set(t, new Je.lu()),
                this.m_mapAssetSetListChangeCallback.get(t)
              );
            }
            GetPublicSpecialAssetSet(t) {
              const r = this.GetAllAssetSets(t);
              for (let n = 0; n < r.length; ++n)
                if (r[n].name == cr) return r[n].assetset_id;
              return null;
            }
            GetHiddenSpecialAssetSet(t) {
              const r = this.GetAllAssetSets(t);
              for (let n = 0; n < r.length; ++n)
                if (r[n].name == vr) return r[n].assetset_id;
              return null;
            }
            async CreateAssetSet(t) {
              const r = de.w.Init(fe);
              let n = null;
              try {
                r.Body().set_appid(t.appid),
                  r.Body().set_assetset(ie.fromObject(t));
                const l = await N.CreateAssetSet(
                  this.m_SteamInterface.GetServiceTransport(),
                  r,
                );
                if (l.GetEResult() == H.R) {
                  const u = l.Body().assetset().toObject();
                  return (
                    this.m_mapAssetSets.set(u.assetset_id, u),
                    this.GetAppAssetSetListChangeCallback(t.appid).Dispatch(
                      this.GetAllAssetSets(t.appid),
                    ),
                    H.R
                  );
                }
                n = (0, me.H)(l);
              } catch (l) {
                n = (0, me.H)(l);
              }
              return (
                console.error(
                  "CAssetSetStore.CreateAssetSet failed: on item " +
                    t.appid +
                    " with " +
                    n?.strErrorMsg,
                  n,
                ),
                H.zi
              );
            }
            async UpdateAssetSet(t) {
              const r = de.w.Init($);
              let n = null;
              try {
                r.Body().set_appid(t.appid),
                  r.Body().set_assetset(ie.fromObject(t));
                const l = await N.UpdateAssetSet(
                  this.m_SteamInterface.GetServiceTransport(),
                  r,
                );
                if (l.GetEResult() == H.R)
                  return (
                    this.m_mapAssetSets.set(t.assetset_id, t),
                    this.GetAssetSetChangeCallback(t.assetset_id).Dispatch(t),
                    H.R
                  );
                n = (0, me.H)(l);
              } catch (l) {
                n = (0, me.H)(l);
              }
              return (
                console.error(
                  "CAssetSetStore.UpdateAssetSet failed: on item " +
                    t.appid +
                    " with " +
                    n?.strErrorMsg,
                  n,
                ),
                H.zi
              );
            }
            async DeleteAssetSet(t, r) {
              const n = de.w.Init(P);
              let l = null;
              try {
                n.Body().set_appid(t), n.Body().set_assetset_id(r);
                const u = await N.DeleteAssetSet(
                  this.m_SteamInterface.GetServiceTransport(),
                  n,
                );
                if (u.GetEResult() == H.R)
                  return (
                    this.m_mapAssetSets.delete(r),
                    this.GetAppAssetSetListChangeCallback(t).Dispatch(
                      this.GetAllAssetSets(t),
                    ),
                    H.R
                  );
                l = (0, me.H)(u);
              } catch (u) {
                l = (0, me.H)(u);
              }
              return (
                console.error(
                  "CAssetSetStore.DeleteAssetSet failed: on item " +
                    t +
                    " with " +
                    l?.strErrorMsg,
                  l,
                ),
                H.zi
              );
            }
            async AddBranchToAssetSet(t, r, n) {
              const l = de.w.Init(pe);
              let u = null;
              const m = this.m_mapAssetSets.get(r);
              if (!m)
                return (
                  console.log(
                    "CAssetSetStore.AddBranchToAssetSet object missing: " + r,
                  ),
                  H.zi
                );
              try {
                l.Body().set_appid(t),
                  l.Body().set_assetset_id(r),
                  l.Body().set_branch(n);
                const f = await N.AddBranchToAssetSet(
                  this.m_SteamInterface.GetServiceTransport(),
                  l,
                );
                if (f.GetEResult() == H.R)
                  return (
                    m.branches || (m.branches = []),
                    m.branches.push(n),
                    this.GetAssetSetChangeCallback(m.assetset_id).Dispatch({
                      ...m,
                    }),
                    H.R
                  );
                u = (0, me.H)(f);
              } catch (f) {
                u = (0, me.H)(f);
              }
              return (
                console.error(
                  "CAssetSetStore.AddBranchToAssetSet failed: on item " +
                    t +
                    " with " +
                    u?.strErrorMsg,
                  u,
                ),
                H.zi
              );
            }
            async RemoveBranchFromAssetSet(t, r, n) {
              const l = de.w.Init(g);
              let u = null;
              const m = this.m_mapAssetSets.get(r);
              if (!m)
                return (
                  console.log(
                    "CAssetSetStore.RemoveBranchFromAssetSet object missing: " +
                      r,
                  ),
                  H.zi
                );
              const f = (m.branches || []).findIndex((h) => h === n);
              if (f < 0)
                return (
                  console.log(
                    "CAssetSetStore.RemoveBranchFromAssetSet branch does not exist: " +
                      r,
                  ),
                  H.zi
                );
              try {
                l.Body().set_appid(t),
                  l.Body().set_assetset_id(r),
                  l.Body().set_branch(n);
                const h = await N.RemoveBranchFromAssetSet(
                  this.m_SteamInterface.GetServiceTransport(),
                  l,
                );
                if (h.GetEResult() == H.R)
                  return (
                    m.branches.splice(f, 1),
                    this.GetAssetSetChangeCallback(m.assetset_id).Dispatch({
                      ...m,
                    }),
                    H.R
                  );
                u = (0, me.H)(h);
              } catch (h) {
                u = (0, me.H)(h);
              }
              return (
                console.error(
                  "CAssetSetStore.RemoveBranchFromAssetSet failed: on item " +
                    t +
                    " with " +
                    u?.strErrorMsg,
                  u,
                ),
                H.zi
              );
            }
            static s_Singleton;
            static Get() {
              return (
                hi.s_Singleton ||
                  ((hi.s_Singleton = new hi()), hi.s_Singleton.Init()),
                hi.s_Singleton
              );
            }
            Init() {
              let t = (0, Ye.Tc)("asset_sets", "application_config");
              this.ValidateStoreDefault(t) &&
                t.forEach((r) => this.m_mapAssetSets.set(r.assetset_id, r)),
                (this.m_SteamInterface = (0, le.p)(
                  new ee.D(Ye.TS.WEBAPI_BASE_URL),
                ));
            }
            ValidateStoreDefault(t) {
              const r = t;
              return r &&
                Array.isArray(r) &&
                r.length > 0 &&
                typeof r[0] == "object"
                ? typeof r[0].assetset_id == "string" &&
                    typeof r[0].appid == "number"
                : !1;
            }
          };
        pr([De.o], Vr.prototype, "CreateAssetSet", 1),
          pr([De.o], Vr.prototype, "UpdateAssetSet", 1),
          pr([De.o], Vr.prototype, "DeleteAssetSet", 1),
          pr([De.o], Vr.prototype, "AddBranchToAssetSet", 1),
          pr([De.o], Vr.prototype, "RemoveBranchFromAssetSet", 1);
        let rr = Vr;
        function Di() {
          return {
            fnCreateAssetSet: rr.Get().CreateAssetSet,
            fnUpdateAssetSet: rr.Get().UpdateAssetSet,
            fnDeleteAssetSet: rr.Get().DeleteAssetSet,
            fnAddBranchToAssetSet: rr.Get().AddBranchToAssetSet,
            fnRemoveBranchFromAssetSet: rr.Get().RemoveBranchFromAssetSet,
          };
        }
        function nn(s, t) {
          return rr.Get().GetAssetSetByID(s, t)?.name || (0, S.we)("#Unknown");
        }
        function ra(s) {
          const [t, r] = (0, M.useState)(() => rr.Get().GetAllAssetSets(s));
          return (0, be.hL)(rr.Get().GetAppAssetSetListChangeCallback(s), r), t;
        }
        function Tr(s) {
          const [t, r] = (0, M.useState)(() =>
            rr.Get().GetAllNonSpecialAssetSets(s),
          );
          return (
            (0, be.hL)(rr.Get().GetAppAssetSetListChangeCallback(s), (n) =>
              r(n.filter((l) => l.name != vr && l.name != cr)),
            ),
            t
          );
        }
        function Ne(s) {
          const [t, r] = (0, M.useState)(null),
            [n, l] = (0, M.useState)(null),
            u = (0, M.useCallback)((m) => {
              rr.Get()
                .GetAllAssetSets(m)
                .forEach((f) => {
                  f.name === cr
                    ? r(f.assetset_id)
                    : f.name === vr && l(f.assetset_id);
                });
            }, []);
          return (
            (0, M.useEffect)(() => u(s), [s, u]),
            (0, be.hL)(rr.Get().GetAppAssetSetListChangeCallback(s), (m) =>
              u(s),
            ),
            { publicAssetSetID: t, hiddenAssetSetID: n }
          );
        }
        function ir(s) {
          const [t, r] = useState(() => rr.Get().GetAllPublicAssetSets(s));
          return (
            useCallbackList(rr.Get().GetAppAssetSetListChangeCallback(s), () =>
              r(rr.Get().GetAllPublicAssetSets(s)),
            ),
            t
          );
        }
        function rt(s, t) {
          const [r, n] = (0, M.useState)(() => rr.Get().GetAssetSetByID(s, t));
          return (0, be.hL)(rr.Get().GetAssetSetChangeCallback(t), n), r;
        }
        function At(s) {
          const [t, r] = useState(() => rr.Get().GetAllAssetSets(s).length > 0);
          return (
            useCallbackList(rr.Get().GetAppAssetSetListChangeCallback(s), () =>
              r(rr.Get().GetAllAssetSets(s).length > 0),
            ),
            t
          );
        }
        async function it(s, t) {
          const { fnCreateAssetSet: r } = Di(),
            l = await r({
              appid: s,
              name: t ? cr : vr,
              branches: t ? [Mr] : [],
            });
          return l != H.R
            ? { eResult: l, assetSetID: null }
            : {
                eResult: l,
                assetSetID: t
                  ? rr.Get().GetPublicSpecialAssetSet(s)
                  : rr.Get().GetHiddenSpecialAssetSet(s),
              };
        }
        var yt = E(41735),
          Ge = E.n(yt);
        let ft = null;
        function St(s) {
          if (ft) {
            console.error("Attempt to set timeline marker hook a second time");
            return;
          }
          ft = s;
        }
        function Rt(s, t) {
          return ft
            ? ft(s, t)
            : (console.error(
                "useGameMarkerFromID called in a context where the hook isn't defined.",
              ),
              null);
        }
        var Vt = E(71742),
          Ee = E(71421);
        function dt(s) {
          const { assetSetID: t, className: r, appid: n } = s,
            { publicAssetSetID: l } = Ne(n);
          return (0, c.jsxs)(C.$n, {
            onClick: (u) => wr(n, l, t),
            disabled: !t,
            children: [
              "\u2193",
              " ",
              (0, S.we)("#TimelineMarkers_Hidden_download"),
              "\xA0",
              (0, c.jsx)(Ee.he, {
                toolTipContent: (0, S.we)(
                  "#TimelineMarkers_Hidden_download_ttip",
                ),
                className: r,
                children: "(?)",
              }),
            ],
          });
        }
        function wr(s, t, r) {
          const n = new Map();
          t &&
            at(t).forEach((f) => {
              const h = He(t, f);
              n.set(h.markerid, h);
            }),
            r &&
              r != t &&
              at(r).forEach((f) => {
                const h = He(r, f);
                n.set(h.markerid, h);
              });
          let l =
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>';
          Array.from(n.values()).forEach((m) => {
            l += ht(m);
          }),
            (l += "</defs></svg>");
          const u = `${s}_markers.svg`;
          Ir(u, l);
        }
        function ht(s) {
          let t = `<g id="${s.markerid}">`;
          if (s.image_type == re) t += Bt(s.image);
          else if (s.image_type == Oe) {
            const r = s.image
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/"/g, "&quot;");
            t += `<image width="36" height="36" xlink:href="${r}" />`;
          }
          return (t += "</g>"), t;
        }
        function Ir(s, t) {
          const r = new Blob([t], { type: "text/plain" }),
            n = window.URL.createObjectURL(r),
            l = document.createElement("a");
          (l.href = n),
            (l.download = s),
            document.body.appendChild(l),
            l.click(),
            window.URL.revokeObjectURL(n);
        }
        function Bt(s) {
          const n = new DOMParser()
            .parseFromString(s, "image/svg+xml")
            .querySelector("svg");
          return n ? n.innerHTML : null;
        }
        var vt = Object.defineProperty,
          Tt = Object.getOwnPropertyDescriptor,
          qe = (s, t, r, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Tt(t, r) : t, u = s.length - 1, m;
              u >= 0;
              u--
            )
              (m = s[u]) && (l = (n ? m(t, r, l) : m(l)) || l);
            return n && l && vt(t, r, l), l;
          };
        const Re = 128,
          nt = 128,
          yr = 24,
          $e = class Mi {
            m_mapTimelineMarker = new Map();
            m_mapAppToMarkerListChange = new Map();
            m_mapAssetSetAndMarkerIDToMarkerChanges = new Map();
            GetAllMarkersForApp(t) {
              return Array.from(this.m_mapTimelineMarker.values()).filter(
                (r) => r.appid == t,
              );
            }
            GetMarkerForAssetSets(t) {
              if (!t || t.length == 0) return [];
              const r = new Map();
              return (
                t.forEach((n) => r.set(n.assetset_id, !0)),
                Array.from(this.m_mapTimelineMarker.values()).filter((n) =>
                  r.has(n.asset_set_id),
                )
              );
            }
            GetGameMarkerSVGById(t, r) {
              const n = this.m_mapTimelineMarker.get(r);
              if (n) return ht(n);
            }
            AddTempMarker(t, r) {
              this.m_mapTimelineMarker.set(t, r);
            }
            RemoveTempMarker(t) {
              this.m_mapTimelineMarker.delete(t);
            }
            BIsLoaded(t) {
              return !0;
            }
            GetMarkerChange(t, r) {
              const n = t + "_" + r;
              return (
                this.m_mapAssetSetAndMarkerIDToMarkerChanges.has(n) ||
                  this.m_mapAssetSetAndMarkerIDToMarkerChanges.set(
                    n,
                    new Je.lu(),
                  ),
                this.m_mapAssetSetAndMarkerIDToMarkerChanges.get(n)
              );
            }
            GetAppMarkerListChange(t) {
              return (
                this.m_mapAppToMarkerListChange.has(t) ||
                  this.m_mapAppToMarkerListChange.set(t, new Je.lu()),
                this.m_mapAppToMarkerListChange.get(t)
              );
            }
            GetAppMarkers(t, r) {
              let n = null,
                l = null;
              return (
                Array.from(this.m_mapTimelineMarker.values()).forEach((u) => {
                  u.asset_set_id == t &&
                    u.markerid == r &&
                    (u.unpublished_changes ? (l = u) : (n = u));
                }),
                { oPublishedMarker: n, oUnpublishedMarker: l }
              );
            }
            GetMarkerIDSetForAssetSetID(t) {
              const r = new Set();
              return (
                this.m_mapTimelineMarker.forEach((n) => {
                  n.asset_set_id === t && r.add(n.markerid);
                }),
                r
              );
            }
            GetUnpublishedTimelineMarkerIDSetForAssetSetID(t) {
              const r = new Set();
              return (
                this.m_mapTimelineMarker.forEach((n) => {
                  n.asset_set_id === t &&
                    n.unpublished_changes &&
                    r.add(n.timeline_marker_id);
                }),
                r
              );
            }
            BDoesAssetSetHaveMarkerID(t, r) {
              return Array.from(this.m_mapTimelineMarker.values()).some(
                (n) => n.asset_set_id == t && n.markerid == r,
              );
            }
            GetUnpublishedThanPublishedFor(t, r) {
              const n = this.GetAppMarkers(t, r);
              return n.oUnpublishedMarker
                ? n.oUnpublishedMarker
                : n.oPublishedMarker;
            }
            EnsureRequirePublishingIsVisible() {
              const t = document.getElementById("needs_publishing_msg");
              t && t.style.display === "none" && (t.style.display = "block");
            }
            async CreateTimelineMarkerDefinition(t, r, n, l, u) {
              let m = null;
              try {
                const f = new FormData();
                f.append("sessionid", (0, Ye.KC)()),
                  f.append("appid", "" + t),
                  f.append("asset_set_id", r),
                  f.append("markerid", n),
                  f.append("imagedata", l),
                  f.append("imagetype", "" + u);
                const h = `${Ye.TS.PARTNER_BASE_URL}timelinemarkers/ajaxcreatemarker`,
                  b = await Ge().post(h, f);
                if (b?.status == 200 && b.data.success == H.R) {
                  const y = b.data.new_marker;
                  return (
                    this.m_mapTimelineMarker.set(y.timeline_marker_id, y),
                    this.GetAppMarkerListChange(t).Dispatch([
                      ...this.GetAllMarkersForApp(t),
                    ]),
                    nn(t, r) == cr && this.EnsureRequirePublishingIsVisible(),
                    H.R
                  );
                }
                m = (0, me.H)(b);
              } catch (f) {
                m = (0, me.H)(f);
              }
              return (
                console.error(
                  "CTimelineMarkerEditorStore create failed with " +
                    m.strErrorMsg,
                  m,
                ),
                H.zi
              );
            }
            async UpdateTimelineMarkerDefinition(t, r, n, l, u, m) {
              let f = null;
              const h = this.m_mapTimelineMarker.get(n);
              if (!h)
                return (
                  console.error(
                    "CTimelineMarkerEditorStore attempting update, timeline markerid does not exist: " +
                      n,
                  ),
                  H.p
                );
              (0, Vt.wT)(
                t == h.appid,
                "Unexpected in UpdateTimelineMarkerDefinition appid don't match",
              );
              const b = h.markerid,
                y = h.asset_set_id;
              try {
                const w = new FormData();
                w.append("sessionid", (0, Ye.KC)()),
                  w.append("appid", "" + t),
                  w.append("asset_set_id", r),
                  w.append("markerid", l),
                  w.append("imagedata", u),
                  w.append("imagetype", "" + m),
                  w.append("timeline_marker_id", n);
                const D = `${Ye.TS.PARTNER_BASE_URL}timelinemarkers/ajaxupdatemarker`,
                  W = await Ge().post(D, w);
                if (W?.status == 200 && W.data.success == H.R) {
                  const X = W.data.updated_marker;
                  this.m_mapTimelineMarker.set(X.timeline_marker_id, X);
                  const V = this.GetAppMarkers(y, b);
                  if (
                    (this.GetMarkerChange(y, b).Dispatch(
                      V.oPublishedMarker,
                      V.oUnpublishedMarker,
                    ),
                    b != X.markerid)
                  ) {
                    const A = this.GetAppMarkers(r, X.markerid);
                    this.GetMarkerChange(r, X.markerid).Dispatch(
                      A.oPublishedMarker,
                      A.oUnpublishedMarker,
                    );
                  }
                  return (
                    this.GetAppMarkerListChange(t).Dispatch([
                      ...this.GetAllMarkersForApp(t),
                    ]),
                    nn(t, r) == cr && this.EnsureRequirePublishingIsVisible(),
                    H.R
                  );
                }
                f = (0, me.H)(W);
              } catch (w) {
                f = (0, me.H)(w);
              }
              return (
                console.error(
                  "CTimelineMarkerEditorStore update failed with " +
                    f.strErrorMsg,
                  f,
                ),
                H.zi
              );
            }
            async DeleteTimelineMarkerDefinition(t, r, n) {
              let l = null;
              const u = this.m_mapTimelineMarker.get(n);
              if (!u)
                return (
                  console.error(
                    "CTimelineMarkerEditorStore attempting delete, timeline markerid does not exist: " +
                      n,
                  ),
                  H.p
                );
              const m = u.markerid;
              try {
                const f = new FormData();
                f.append("sessionid", (0, Ye.KC)()),
                  f.append("appid", "" + t),
                  f.append("asset_set_id", r),
                  f.append("timeline_marker_id", n);
                const h = `${Ye.TS.PARTNER_BASE_URL}timelinemarkers/ajaxdeletemarker`,
                  b = await Ge().post(h, f);
                if (b?.status == 200 && b.data.success == H.R) {
                  this.m_mapTimelineMarker.delete(n);
                  const y = this.GetAppMarkers(r, m);
                  return (
                    (y?.oPublishedMarker || y.oUnpublishedMarker) &&
                      this.GetMarkerChange(r, u.markerid).Dispatch(
                        y.oPublishedMarker,
                        y.oUnpublishedMarker,
                      ),
                    this.GetAppMarkerListChange(t).Dispatch([
                      ...this.GetAllMarkersForApp(t),
                    ]),
                    H.R
                  );
                }
                l = (0, me.H)(b);
              } catch (f) {
                l = (0, me.H)(f);
              }
              return (
                console.error(
                  "DeleteTimelineMarkerDefinition create failed with " +
                    l.strErrorMsg,
                  l,
                ),
                H.zi
              );
            }
            async PublishTimelineMarkerDefinitions(t, r, n) {
              let l = null;
              for (let u = 0; u < n.length; ++u) {
                const m = n[u],
                  f = this.m_mapTimelineMarker.get(m);
                if (!f)
                  return (
                    console.error(
                      "CTimelineMarkerEditorStore attempting publish, timeline markerid does not exist: " +
                        m,
                    ),
                    H.p
                  );
                if (!f.unpublished_changes)
                  return (
                    console.error(
                      "CTimelineMarkerEditorStore attempting publish already published asset: " +
                        m,
                    ),
                    H.$U
                  );
              }
              try {
                const u = new FormData();
                u.append("sessionid", (0, Ye.KC)()),
                  u.append("appid", "" + t),
                  u.append("asset_set_id", r),
                  u.append("timeline_marker_id", n.join(","));
                const m = `${Ye.TS.PARTNER_BASE_URL}timelinemarkers/ajaxpublishmarkers`,
                  f = await Ge().post(m, u);
                if (f?.status == 200 && f.data.success == H.R) {
                  for (let h = 0; h < n.length; ++h) {
                    const b = n[h],
                      y = this.m_mapTimelineMarker.get(b),
                      w = this.GetAppMarkers(y.asset_set_id, y.markerid);
                    w.oPublishedMarker &&
                      this.m_mapTimelineMarker.delete(
                        w.oPublishedMarker.timeline_marker_id,
                      );
                    const D = {
                      ...w.oUnpublishedMarker,
                      unpublished_changes: !1,
                      time_last_updater: Math.floor(Date.now() / 1e3),
                    };
                    this.m_mapTimelineMarker.set(D.timeline_marker_id, D),
                      this.GetMarkerChange(D.asset_set_id, D.markerid).Dispatch(
                        D,
                        null,
                      );
                  }
                  return (
                    this.GetAppMarkerListChange(t).Dispatch([
                      ...this.GetAllMarkersForApp(t),
                    ]),
                    H.R
                  );
                }
                l = (0, me.H)(f);
              } catch (u) {
                l = (0, me.H)(u);
              }
              return (
                console.error(
                  "PublishTimelineMarkerDefinition create failed with " +
                    l.strErrorMsg,
                  l,
                ),
                H.zi
              );
            }
            static s_Singleton;
            static Get() {
              return (
                Mi.s_Singleton ||
                  ((Mi.s_Singleton = new Mi()), Mi.s_Singleton.Init()),
                Mi.s_Singleton
              );
            }
            Init() {
              let t = (0, Ye.Tc)("timeline_markers", "application_config");
              this.ValidateStoreDefault(t) &&
                t.forEach((r) =>
                  this.m_mapTimelineMarker.set(r.timeline_marker_id, r),
                ),
                St(Ot);
            }
            ValidateStoreDefault(t) {
              const r = t;
              return r &&
                Array.isArray(r) &&
                r.length > 0 &&
                typeof r[0] == "object"
                ? typeof r[0].asset_set_id == "string" &&
                    typeof r[0].appid == "number"
                : !1;
            }
          };
        qe([be.oI], $e.prototype, "CreateTimelineMarkerDefinition", 1),
          qe([be.oI], $e.prototype, "UpdateTimelineMarkerDefinition", 1),
          qe([be.oI], $e.prototype, "DeleteTimelineMarkerDefinition", 1),
          qe([be.oI], $e.prototype, "PublishTimelineMarkerDefinitions", 1);
        let ve = $e;
        function _e() {
          return {
            fnCreateTimelineMarkerDefinition:
              ve.Get().CreateTimelineMarkerDefinition,
            fnUpdateTimelineMarkerDefinition:
              ve.Get().UpdateTimelineMarkerDefinition,
            fnDeleteTimelineMarkerDefinition:
              ve.Get().DeleteTimelineMarkerDefinition,
            fnPublishTimelineMarkerDefinitions:
              ve.Get().PublishTimelineMarkerDefinitions,
          };
        }
        function Or(s, t) {
          return ve.Get().BDoesAssetSetHaveMarkerID(s, t);
        }
        function He(s, t) {
          return ve.Get().GetUnpublishedThanPublishedFor(s, t);
        }
        function at(s) {
          return Array.from(ve.Get().GetMarkerIDSetForAssetSetID(s));
        }
        function _t(s) {
          return Array.from(
            ve.Get().GetUnpublishedTimelineMarkerIDSetForAssetSetID(s),
          );
        }
        function wt(s, t) {
          return ve.Get().GetAppMarkers(s, t);
        }
        function Mt(s, t) {
          return ve.Get().AddTempMarker(s, t);
        }
        function Sr(s) {
          return ve.Get().RemoveTempMarker(s);
        }
        function st(s) {
          const [t, r] = (0, M.useState)(() => ve.Get().GetAllMarkersForApp(s));
          return (0, be.hL)(ve.Get().GetAppMarkerListChange(s), r), t;
        }
        function Kt(s) {
          const t = useAllPublicAssetSets(s),
            [r, n] = useState(() => ve.Get().GetMarkerForAssetSets(t));
          return (
            useCallbackList(ve.Get().GetAppMarkerListChange(s), () =>
              n(ve.Get().GetMarkerForAssetSets(t)),
            ),
            r
          );
        }
        function lt(s, t) {
          const [r, n] = (0, M.useState)(() =>
            ve.Get().GetMarkerIDSetForAssetSetID(t),
          );
          return (
            (0, M.useEffect)(() => {
              t && s && n(ve.Get().GetMarkerIDSetForAssetSetID(t));
            }, [s, t]),
            (0, be.hL)(ve.Get().GetAppMarkerListChange(s), () =>
              n(ve.Get().GetMarkerIDSetForAssetSetID(t)),
            ),
            r
          );
        }
        function It(s, t) {
          const [r, n] = (0, M.useState)(null),
            [l, u] = (0, M.useState)(null);
          return (
            (0, M.useEffect)(() => {
              const m = ve.Get().GetAppMarkers(s, t);
              m && (n(m.oPublishedMarker), u(m.oUnpublishedMarker));
            }, [s, t]),
            (0, be.hL)(ve.Get().GetMarkerChange(s, t), (m, f) => {
              n(m), u(f);
            }),
            { oPublishedMarker: r, oUnpublishedMarker: l }
          );
        }
        function Ot(s, t) {
          const r = ve.Get().GetGameMarkerSVGById(s, t);
          if (!r) return null;
          const n = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${r}</svg>`;
          return new DOMParser().parseFromString(n, "image/svg+xml")
            .documentElement.firstChild;
        }
        var ke = E(73191),
          Ve = E(56330),
          Ue = E(2801),
          ot = E(36118),
          Q = E(36707),
          Pe = E(43456),
          je = E(83113),
          Xe = E(82554);
        function ct(s) {
          const { imageBase64OrUntrustedSVG: t, imageType: r } = s;
          if (!t) return null;
          let n;
          return (
            r == re
              ? (n = `data:image/svg+xml,${encodeURIComponent(t)}`)
              : r == Oe && (n = t),
            (0, c.jsx)("div", {
              className: (0, Q.A)(Pe.IconPreviewCtn),
              children: (0, c.jsxs)("div", {
                className: je.Icons,
                children: [
                  (0, c.jsx)("img", {
                    className: je.LargeIcon,
                    src: n,
                    alt: "SVG Large Preview",
                  }),
                  (0, c.jsx)("img", {
                    className: je.MediumIcon,
                    src: n,
                    alt: "SVG Medium Preview",
                  }),
                  (0, c.jsx)("img", {
                    className: je.SmallIcon,
                    src: n,
                    alt: "SVG Small Preview",
                  }),
                ],
              }),
            })
          );
        }
        function zt(s) {
          const { svgXmlUntrusted: t } = s;
          if (!t) return null;
          const r = `data:image/svg+xml,${encodeURIComponent(t)}`;
          return (0, c.jsx)("img", {
            className: je.SmallIcon,
            src: r,
            alt: "SVG Small Preview",
          });
        }
        function xt(s) {
          const { appid: t, assetSetID: r, markerID: n } = s,
            { oPublishedMarker: l, oUnpublishedMarker: u } = It(r, n),
            { publicAssetSetID: m, hiddenAssetSetID: f } = Ne(t),
            [h, b] = (0, M.useState)(!1);
          if (!l && !u) return null;
          const y = u || l,
            w = !!(u && u.asset_set_id != f),
            D = l?.asset_set_id === m;
          return (0, c.jsxs)("div", {
            className: je.IconContents,
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            children: [
              w &&
                (0, c.jsx)("span", {
                  className: je.MsgUnpublished,
                  children: (0, S.we)("#TimelineMarker_state_pending"),
                }),
              (0, c.jsx)(ct, {
                imageBase64OrUntrustedSVG: y.image,
                imageType: y.image_type,
              }),
              (0, c.jsx)("div", {
                className: je.MarkerID,
                children: y.markerid,
              }),
              h &&
                (0, c.jsx)(C.$n, {
                  className: je.EditButton,
                  onClick: (W) =>
                    (0, i.pg)(
                      (0, c.jsx)(ko, {
                        appid: t,
                        bDisallowMarkerIDEdit: D,
                        oTimelineMarkerDef: y,
                      }),
                      (0, F.uX)(W),
                    ),
                  children: (0, S.we)("#Button_Edit"),
                }),
            ],
          });
        }
        function ut(s) {
          const {
              appid: t,
              assetSetID: r,
              strMessageOnEmpty: n,
              bDraggable: l,
            } = s,
            u = lt(t, r);
          return !u || u.size == 0
            ? (0, c.jsx)("div", { className: Xe.NoHidden, children: n })
            : (0, c.jsx)("div", {
                className: je.IconGridCtn,
                children: (0, c.jsx)(zr, {
                  assetSetID: r,
                  children: Array.from(u).map((m, f) =>
                    (0, c.jsx)(
                      kt,
                      {
                        id: `assetsetid_${r}_markerid_${m}`,
                        index: f,
                        bDraggable: l,
                        children: (0, c.jsx)(xt, {
                          appid: t,
                          assetSetID: r,
                          markerID: m,
                        }),
                      },
                      r + "_" + m,
                    ),
                  ),
                }),
              });
        }
        function kt(s) {
          const { id: t, children: r, index: n, bDraggable: l } = s;
          return (0, c.jsx)(Be.sx, {
            draggableId: t,
            index: n,
            isDragDisabled: !l,
            children: (u) =>
              (0, c.jsx)("div", {
                ref: u.innerRef,
                ...u.draggableProps,
                ...u.dragHandleProps,
                className: je.DraggableBox,
                style: { ...u.draggableProps.style },
                children: r,
              }),
          });
        }
        function zr(s) {
          const { assetSetID: t, children: r } = s;
          return (0, c.jsx)(Be.gL, {
            droppableId: "undroppable" + t,
            direction: "horizontal",
            children: (n) =>
              (0, c.jsxs)("div", {
                ref: n.innerRef,
                ...n.droppableProps,
                style: { display: "flex" },
                children: [r, n.placeholder],
              }),
          });
        }
        function bt(s) {
          const { assetSetID: t, appid: r, strMessage: n } = s;
          return (0, c.jsx)(Be.gL, {
            droppableId: `droptarget_assetsetid_${t}_appid_${r}`,
            children: (l) =>
              (0, c.jsxs)("div", {
                ...l.droppableProps,
                ref: l.innerRef,
                className: je.DragBox,
                children: [(0, c.jsx)("span", { children: n }), l.placeholder],
              }),
          });
        }
        var q = E(14947),
          Me = E(85443),
          jt = E(21196),
          Dt = E(57589),
          Et = E(36174),
          Pt = Object.defineProperty,
          Wt = Object.getOwnPropertyDescriptor,
          er = (s, t, r, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Wt(t, r) : t, u = s.length - 1, m;
              u >= 0;
              u--
            )
              (m = s[u]) && (l = (n ? m(t, r, l) : m(l)) || l);
            return n && l && Pt(t, r, l), l;
          };
        const mt = new Dt.wd("ReactUsageReporting").Debug,
          xr = 100,
          Ft = Et.Kp.PerMinute * 1e3;
        class gt {
          m_strProduct;
          m_strVersion;
          m_transport = null;
          m_mapRoutes = new Map();
          m_mapComponents = new Map();
          m_mapActions = new Map();
          m_reportCount = 0;
          m_bInitialized = !1;
          Init(t, r, n) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = t),
              (this.m_strVersion = r),
              (this.m_transport = n),
              this.ScheduleSend();
          }
          ScheduleSend() {
            setTimeout(() => this.CheckSend(), Ft);
          }
          CheckSend() {
            this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
          }
          ReportInternal(t, r) {
            r.has(t) || r.set(t, 0),
              r.set(t, r.get(t) + 1),
              this.m_reportCount++,
              this.ShouldSendMetricsImmediately() && this.SendMetrics();
          }
          ReportRouteMatch(t) {
            mt("Route match: " + t), this.ReportInternal(t, this.m_mapRoutes);
          }
          ReportTrackedComponent(t) {
            mt("Tracked component: " + t),
              this.ReportInternal(t, this.m_mapComponents);
          }
          ReportTrackedAction(t) {
            mt("User action: " + t), this.ReportInternal(t, this.m_mapActions);
          }
          ShouldSendMetricsImmediately() {
            return this.m_reportCount >= xr;
          }
          SendMetrics() {
            if (!this.m_bInitialized) return;
            const t = de.w.Init(jt.bc);
            t.Body().set_product(this.m_strProduct),
              t.Body().set_version(this.m_strVersion),
              this.m_mapRoutes.forEach((r, n) => {
                let l = new jt.N4();
                l.set_route(n), l.set_count(r), t.Body().add_routes(l);
              }),
              this.m_mapComponents.forEach((r, n) => {
                let l = new jt.Zd();
                l.set_component(n), l.set_count(r), t.Body().add_components(l);
              }),
              this.m_mapActions.forEach((r, n) => {
                let l = new jt.Ys();
                l.set_action(n), l.set_count(r), t.Body().add_actions(l);
              }),
              this.m_mapRoutes.clear(),
              this.m_mapComponents.clear(),
              this.m_mapActions.clear(),
              (this.m_reportCount = 0),
              jt._5.ReportReactUsage(this.m_transport, t);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
        }
        er([De.o], gt.prototype, "CheckSend", 1);
        const ze = new gt();
        var U = E(65946);
        function _() {
          return window.g_GRS;
        }
        async function Er(s, t, r) {
          if (!_()) {
            const [{ CGameRecordingStore: n }] = await Promise.all([
              E.e(90146).then(E.bind(E, 90146)),
            ]);
            r && SetTimelineMarkerHookFunction(r);
            let l = new n();
            await l.Init(s, t), (window.g_GRS = l);
          }
        }
        function Br() {
          if (_() != null) {
            const s = _();
            return {
              bLoading: s.BLoadingAppsWithBackgroundVideo(),
              rgApps: s.GetAppsWithBackgroundVideo(),
            };
          }
          return { bLoading: !1, rgApps: [] };
        }
        function Lt() {
          const [s, t] = (0, M.useState)(Br());
          return (0, M.useEffect)(() => (0, q.mJ)(Br, t), []), s;
        }
        function Nt(s) {
          const { bLoading: t, rgApps: r } = Lt();
          return {
            bLoading: t,
            app: (0, M.useMemo)(() => r.find((n) => n.game_id === s), [r, s]),
          };
        }
        function Zt(s) {
          return _().GetTimelineLoaderForGame(s);
        }
        function Jt(s) {
          return _().GetTimelineLoaderForClip(s);
        }
        function tr(s) {
          return _().GetTimelineLoaderForSharedClip(s);
        }
        function br(s) {
          return _() != null
            ? {
                bLoading: _()?.BLoadingClips(),
                rgClipHandles: _()?.GetClipIDs(s),
              }
            : { bLoading: !1, rgClipHandles: [] };
        }
        function Yt(s) {
          const [t, r] = useState(() => br(s));
          return useEffect(() => (r(br(s)), reaction(() => br(s), r)), [s]), t;
        }
        function qt(s) {
          return useObserver(() => _()?.GetClipSummaries(s));
        }
        function Pr(s) {
          return _()?.GetClipSummary(s);
        }
        function Ut(s) {
          return _() != null && s ? _().GetClipSummariesForGame(s) || [] : [];
        }
        function Wr(s) {
          return useObserver(() => _()?.GetClipSummary(s));
        }
        function $t(s) {
          return useObserver(() =>
            s ? _()?.GetClipSummariesForGame(s) || [] : [],
          );
        }
        function pt(s, t, r, n, l, u) {
          return _() != null
            ? _().LoadThumbnails(s, t, r, n, l, u ?? !0)
            : null;
        }
        function kr() {
          return _() != null ? { fnSaveClip: _().SaveClip } : {};
        }
        function jr() {
          return _() != null ? { fnDeleteClip: _().DeleteClip } : {};
        }
        function Qt() {
          return _() != null ? { fnUploadClip: _().UploadClip } : {};
        }
        function Fr() {
          return _() != null
            ? {
                fnExportClip: _().ExportClip,
                fnUpdateExportPath: _().UpdateClipExportPath,
              }
            : {};
        }
        function gi(s, t, r, n) {
          return _() != null ? _().TakeScreenshot(s, t, r.valMS, n) : null;
        }
        function j(s) {
          return useObserver(() => {
            if (_() != null) return _().GetClipExportProgress(s);
          });
        }
        function e() {
          return useObserver(() => {
            if (_() != null) return _().GetCurrentExportingClip();
          });
        }
        function a() {
          return _() != null
            ? {
                fnStartRecording: _().StartRecording,
                fnStopRecording: _().StopRecording,
              }
            : {};
        }
        function z() {
          if (_() != null) return _().SwitchRecordedGame;
        }
        function ia(s, t) {
          return _() != null
            ? _().RegisterManualRecordingCallback(s, t)
            : () => {};
        }
        function na() {
          return _() != null ? _().GetRecordingState() : null;
        }
        function pi() {
          return _() != null
            ? {
                fnCreateUserTimelineMarkers: _().CreateUserTimelineMarkers,
                fnUpdateUserTimelineMarkers: _().UpdateUserTimelineMarkers,
                fnRemoveUserTimelineMarker: _().RemoveUserTimelineMarker,
              }
            : null;
        }
        function Ei(s, t) {
          return (0, U.q3)(() => {
            if (_() != null) return _().GetAchievementInfo(s, t);
          });
        }
        function aa() {
          return useObserver(() => {
            if (_() != null) return _().GetLastClip();
          });
        }
        function sa(s) {
          return _() != null ? _().GetBestClipTitle(s) : "";
        }
        function la(s) {
          _() != null && _().ManuallyDeleteRecordingForApps(s);
        }
        function oa(s, t) {
          const [r, n] = React.useState(0);
          return (
            useEffect(() => {
              _() != null &&
                _()
                  .GetTotalDiskSpaceUsage(s, t)
                  .then((l) => n(l));
            }, [s, t]),
            r
          );
        }
        function ca(s, t, r, n, l) {
          return _().ReportClipShare(s, t, r, n, l);
        }
        function an(s, t, r, n, l) {
          return _().ReportClipRange(s, t, r, n, l);
        }
        function ua(s) {
          switch (s) {
            default:
            case 0:
              return StorageRecordings;
            case 1:
              return StorageClips;
            case 2:
              return StorageScreenshots;
          }
        }
        async function ma() {
          _() != null && (await _().CheckEnoughDiskSpace());
        }
        function yi() {
          return (0, U.q3)(() => {
            if (_() != null) return !_().BEnoughDiskSpace();
          });
        }
        async function fa() {
          return _() != null ? await _().GetAvailableDiskSpace() : 0;
        }
        async function da(s, t) {
          return await _().GetRecordingHighlights(s, t);
        }
        var Pi = E(86578),
          Zr = E(85958),
          et = E(13854),
          Fe = E(86347),
          $r = E(41635),
          Ur = E(89083),
          sn = Object.defineProperty,
          ln = Object.getOwnPropertyDescriptor,
          Le = (s, t, r, n) => {
            for (
              var l = n > 1 ? void 0 : n ? ln(t, r) : t, u = s.length - 1, m;
              u >= 0;
              u--
            )
              (m = s[u]) && (l = (n ? m(t, r, l) : m(l)) || l);
            return n && l && sn(t, r, l), l;
          },
          on = ((s) => (
            (s[(s.None = 0)] = "None"),
            (s[(s.DownloadFailed = 1)] = "DownloadFailed"),
            (s[(s.PlaybackError = 2)] = "PlaybackError"),
            (s[(s.MediaTypeError = 3)] = "MediaTypeError"),
            s
          ))(on || {});
        class We {
          m_elVideo = null;
          m_player = null;
          m_listeners = new Je.Ji();
          m_nDownloadFailureCount = 0;
          m_bInitailized = !1;
          m_bPaused = !1;
          m_bAtEnd = !1;
          m_strMediaTypeError = null;
          m_ePlayerError = 0;
          m_bUserInputNeeded = !1;
          m_bMuted = !1;
          m_bSeekReadyToPlay = !1;
          m_bVideoElementPlaying = !1;
          m_nPlaybackSpeed = 1;
          m_bIsWaiting = !0;
          m_bAutoPlay;
          m_bLoadedMetadata = !1;
          m_nPlaybackTime = 0;
          m_nVideoStartTime = 0;
          m_nVideoDuration = 0;
          m_nVolume = 1;
          m_eSeekType = Ur.lU.Absolute;
          constructor(t) {
            (0, q.Gn)(this), (this.m_bAutoPlay = !!t);
          }
          IsPaused() {
            return this.m_bPaused;
          }
          IsAtEnd() {
            return this.m_bAtEnd;
          }
          BSeekReadyToPlay() {
            return this.m_bSeekReadyToPlay;
          }
          GetMediaTypeError() {
            return this.m_strMediaTypeError;
          }
          GetPlaybackError() {
            return this.m_ePlayerError;
          }
          GetUserInputNeeded() {
            return this.m_bUserInputNeeded;
          }
          GetPlaybackTime() {
            return this.m_eSeekType === Ur.lU.Absolute
              ? this.m_nPlaybackTime
              : this.m_nPlaybackTime - this.m_nVideoStartTime;
          }
          GetTimelineDuration() {
            return this.m_eSeekType === Ur.lU.Absolute
              ? this.m_nVideoDuration
              : this.m_nVideoDuration - this.m_nVideoStartTime;
          }
          GetVolume() {
            return this.m_nVolume;
          }
          GetMuted() {
            return this.m_bMuted;
          }
          GetMPDURL() {
            return this.m_player?.GetMPDURL();
          }
          GetVideoElementCurrentTime() {
            return this.m_elVideo?.currentTime;
          }
          BVideoElementPlaying() {
            return this.m_bVideoElementPlaying;
          }
          BVideoElementWaiting() {
            return this.m_bIsWaiting;
          }
          GetVideoHeight() {
            return this.m_elVideo?.clientHeight || 0;
          }
          GetVideoWidth() {
            return this.m_elVideo?.clientWidth || 0;
          }
          GetLoadedMetadata() {
            return this.m_bLoadedMetadata;
          }
          Start(t, r, n, l = Ur.lU.Absolute) {
            this.Stop(),
              (this.m_bAtEnd = !1),
              (this.m_elVideo = t),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userpausechange",
                this.OnUserPauseChange,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "playing",
                this.OnVideoPlaying,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "timeupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "ended",
                this.OnVideoEnd,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-ended",
                this.OnVideoEnd,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-bufferupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-downloadfailed",
                this.OnDownloadFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-playbackerror",
                this.OnPlaybackError,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userinputneeded",
                this.OnUserInputNeeded,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "waiting",
                this.OnVideoWaiting,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "volumechange",
                this.OnVolumeChange,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "canplay",
                this.OnCanPlay,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "seeking",
                this.OnSeeking,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "loadedmetadata",
                this.OnLoadedMetadata,
              ),
              (this.m_player = new Ur.Zn(this.m_elVideo)),
              this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
              this.m_player.PlayMPD(r),
              (this.m_bMuted = Fi("muted")),
              (this.m_nVolume = Fi("volume")),
              this.m_player.SetMuted(this.m_bMuted),
              this.m_player.SetVolume(this.m_nVolume),
              (this.m_bSeekReadyToPlay = !1),
              (this.m_eSeekType = l);
            const u = `seeking_${r}_${n.toFixed(3)}`;
            (0, Me.q_)(`CGameRecordingVideo:: perf mark ${u}`),
              performance.mark(u),
              this.m_player.Seek(n, this.m_eSeekType),
              (this.m_bPaused = this.m_player.IsPaused()),
              (this.m_bInitailized = !0);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_player && this.m_player.Close(),
              (this.m_elVideo = null),
              (this.m_player = null),
              (this.m_bInitailized = !1),
              (this.m_bPaused = !1),
              (this.m_bAtEnd = !1),
              (this.m_bSeekReadyToPlay = !1),
              (this.m_bVideoElementPlaying = !1),
              (this.m_ePlayerError = 0),
              (this.m_bUserInputNeeded = !1),
              (this.m_nPlaybackTime = 0),
              (this.m_nVideoStartTime = 0),
              (this.m_nVideoDuration = 0),
              (this.m_bLoadedMetadata = !1),
              (this.m_bIsWaiting = !0);
          }
          async UpdateMPD() {
            await this.m_player?.UpdateMPD();
          }
          IsInitialized() {
            return this.m_bInitailized;
          }
          OnCanPlay() {
            (this.m_bSeekReadyToPlay = !0), (this.m_bAtEnd = !1);
          }
          OnUserPauseChange() {
            this.m_bPaused = this.m_player.IsPaused();
          }
          OnVideoPlaying() {
            (this.m_bVideoElementPlaying = !0),
              (this.m_bIsWaiting = !1),
              this.SetPlaybackSpeed(this.m_nPlaybackSpeed),
              (0, Me.tG)("video playing");
          }
          OnVideoPause() {
            (this.m_bVideoElementPlaying = !1), (0, Me.tG)("video paused");
          }
          OnVideoTimeUpdate() {
            (this.m_nVideoStartTime =
              this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
              (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime());
          }
          OnVideoEnd() {
            (this.m_bVideoElementPlaying = !1),
              (this.m_bAtEnd = !0),
              (0, Me.tG)("video ended");
          }
          OnSeeking() {
            (0, Me.tG)("video on seeking"),
              (this.m_bVideoElementPlaying = !1),
              (this.m_bIsWaiting = !0),
              (this.m_bAtEnd = !1);
          }
          OnLoadedMetadata() {
            this.m_bLoadedMetadata = !0;
          }
          async OnDownloadFailed(t) {
            if (
              (t.detail || Ur.N_.PlaybackError) == Ur.N_.UnsupportedMediaType
            ) {
              (0, Me.ZI)("media type error"), (this.m_ePlayerError = 3);
              return;
            }
            (0, Me.ZI)("video download failed", t.detail),
              this.m_nDownloadFailureCount < 2
                ? (await this.m_player?.UpdateMPD(),
                  this.m_nDownloadFailureCount++)
                : (this.m_ePlayerError = 1);
          }
          OnPlaybackError() {
            (this.m_bVideoElementPlaying = !1),
              (0, Me.ZI)("video playback error"),
              (this.m_ePlayerError = 2);
          }
          OnUserInputNeeded() {
            (this.m_bUserInputNeeded = !0),
              !this.m_bMuted &&
                this.m_elVideo.autoplay &&
                ((0, Me.fX)(
                  "Failed to autoplay video. Muting and trying again.",
                ),
                this.SetMute(!0),
                this.Play());
          }
          OnVolumeChange() {
            (0, Me.tG)("volume change");
          }
          OnVideoWaiting() {
            (this.m_bIsWaiting = !0),
              (this.m_bVideoElementPlaying = !1),
              this.GetTimelineDuration() - this.GetPlaybackTime() < 1 &&
                (this.m_bAtEnd = !0);
          }
          UserInputReceived() {
            this.IsInitialized() &&
              ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
          }
          SetVolume(t) {
            (this.m_nVolume = t),
              Li("volume", t),
              t > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
              this.IsInitialized() && this.m_player.SetVolume(t);
          }
          SetMute(t, r) {
            this.IsInitialized() && this.m_player.SetMuted(t),
              (this.m_bMuted = t),
              r && Li("muted", t);
          }
          TogglePlayPause() {
            this.IsInitialized() &&
              (this.m_player.IsPaused() ? this.Play() : this.Pause());
          }
          Play() {
            this.IsInitialized() && this.m_player.Play();
          }
          Pause() {
            this.IsInitialized() &&
              (this.m_player.Pause(), (this.m_bIsWaiting = !1));
          }
          SetPlaybackSpeed(t) {
            (this.m_nPlaybackSpeed = t),
              this.IsInitialized() && (this.m_elVideo.playbackRate = t);
          }
          GetPlaybackSpeed() {
            return this.m_nPlaybackSpeed;
          }
          Seek(t) {
            if (!this.IsInitialized()) return;
            const r = `seeking_${this.m_player.GetMPDURL()}_${t.toFixed(3)}`;
            (this.m_bAtEnd = !1),
              (this.m_bSeekReadyToPlay = !1),
              performance.mark(r),
              (0, Me.q_)(`CGameRecordingVideo:: perf mark ${r}`),
              (0, Me.q_)(`CGameRecordingVideo::Seek to ${t}`),
              (this.m_nPlaybackTime = t),
              this.m_player.Seek(t, this.m_eSeekType);
          }
        }
        Le([q.sH], We.prototype, "m_bInitailized", 2),
          Le([q.sH], We.prototype, "m_bPaused", 2),
          Le([q.sH], We.prototype, "m_bAtEnd", 2),
          Le([q.sH], We.prototype, "m_strMediaTypeError", 2),
          Le([q.sH], We.prototype, "m_ePlayerError", 2),
          Le([q.sH], We.prototype, "m_bUserInputNeeded", 2),
          Le([q.sH], We.prototype, "m_bMuted", 2),
          Le([q.sH], We.prototype, "m_bSeekReadyToPlay", 2),
          Le([q.sH], We.prototype, "m_bVideoElementPlaying", 2),
          Le([q.sH], We.prototype, "m_nPlaybackSpeed", 2),
          Le([q.sH], We.prototype, "m_bIsWaiting", 2),
          Le([q.sH], We.prototype, "m_bLoadedMetadata", 2),
          Le([q.sH], We.prototype, "m_nPlaybackTime", 2),
          Le([q.sH], We.prototype, "m_nVideoStartTime", 2),
          Le([q.sH], We.prototype, "m_nVideoDuration", 2),
          Le([q.sH], We.prototype, "m_nVolume", 2),
          Le([q.sH], We.prototype, "m_eSeekType", 2),
          Le([q.XI], We.prototype, "Start", 1),
          Le([q.XI], We.prototype, "Stop", 1),
          Le([be.oI], We.prototype, "OnCanPlay", 1),
          Le([be.oI], We.prototype, "OnUserPauseChange", 1),
          Le([be.oI], We.prototype, "OnVideoPlaying", 1),
          Le([be.oI], We.prototype, "OnVideoPause", 1),
          Le([be.oI], We.prototype, "OnVideoTimeUpdate", 1),
          Le([be.oI], We.prototype, "OnVideoEnd", 1),
          Le([be.oI], We.prototype, "OnSeeking", 1),
          Le([be.oI], We.prototype, "OnLoadedMetadata", 1),
          Le([be.oI], We.prototype, "OnDownloadFailed", 1),
          Le([be.oI], We.prototype, "OnPlaybackError", 1),
          Le([be.oI], We.prototype, "OnUserInputNeeded", 1),
          Le([be.oI], We.prototype, "OnVolumeChange", 1),
          Le([be.oI], We.prototype, "OnVideoWaiting", 1),
          Le([be.oI], We.prototype, "UserInputReceived", 1);
        function ha(s, t) {
          return useRefCallbackWithCleanup((n) => (t(n), () => s()), [t]);
        }
        let Si;
        function Wi() {
          if (!Si) {
            let s = window.localStorage.getItem("gameRecordingPlayer") || "{}",
              t;
            try {
              t = JSON.parse(s);
            } catch {
              t = {};
            }
            Si = { muted: t.muted || !1, volume: t.volume || 1 };
          }
          return Si;
        }
        function Fi(s) {
          return Wi()[s];
        }
        function Li(s, t) {
          let r = Wi();
          r[s] = t;
          let n = JSON.stringify(r);
          window.localStorage.setItem("gameRecordingPlayer", n);
        }
        const cn = 0,
          un = 1,
          Ni = 2,
          mn = 3,
          fn = 4;
        function Ma(s) {
          const { app: t } = useRecordingActiveApp(s),
            { loader: r } = useTimelineLoaderForGame(s),
            n =
              t?.recording_type ===
                EGameRecordingType.k_EGameRecordingType_BackgroundRecording ||
              t?.recording_type ===
                EGameRecordingType.k_EGameRecordingType_ManualRecording,
            [l, u] = useState(null);
          if (
            (useEffect(
              () =>
                r
                  ? (u(
                      n
                        ? {
                            startTime: Date.now(),
                            startDuration: r.GetTotalRecordingDuration(),
                          }
                        : null,
                    ),
                    () => {})
                  : () => {},
              [n, r],
            ),
            useRerenderOnInterval({ msInterval: 1e3, bEnabled: !!l }),
            l)
          ) {
            const m = Date.now() - l.startTime + l.startDuration,
              f = r.GetTotalRecordingDuration();
            return Math.abs(m - f) > 1e4
              ? Math.floor(f / 1e3)
              : Math.floor(m / 1e3);
          }
          return r && r.BInitialized()
            ? Math.floor(r.GetTotalRecordingDuration() / 1e3)
            : t
              ? t.video_duration_seconds
              : 0;
        }
        var Qr = ((s) => (
          (s.NotRunning = "NotRunning"),
          (s.NotRecording = "NotRecording"),
          (s.ManualRecording = "ManualRecording"),
          (s.BackgroundRecording = "BackgroundRecording"),
          s
        ))(Qr || {});
        function Ui(s) {
          const { app: t } = Nt(s);
          if (!t) return "NotRecording";
          switch (t.recording_type) {
            default:
            case cn:
            case un:
              return "NotRecording";
            case Ni:
              return "ManualRecording";
            case mn:
              return "BackgroundRecording";
          }
        }
        var dn = Object.defineProperty,
          hn = Object.getOwnPropertyDescriptor,
          tt = (s, t, r, n) => {
            for (
              var l = n > 1 ? void 0 : n ? hn(t, r) : t, u = s.length - 1, m;
              u >= 0;
              u--
            )
              (m = s[u]) && (l = (n ? m(t, r, l) : m(l)) || l);
            return n && l && dn(t, r, l), l;
          },
          ri = ((s) => (
            (s.Overlay = "Overlay"),
            (s.Clips = "Clips"),
            (s.Background = "Background"),
            (s.CommunityClip = "Community"),
            (s.ChatClip = "Chat"),
            (s.Partner = "Partner"),
            s
          ))(ri || {}),
          Mn = ((s) => (
            (s.Never = "Never"), (s.Always = "Always"), (s.Manual = "Manual"), s
          ))(Mn || {});
        const Hi = 3 * Zr.kh,
          bn = 5 * Zr.kh,
          gn = Zr.kh + 2e3,
          Bi = 1e3;
        class Qe {
          m_gameRecordingVideo = null;
          m_timelineLoader = null;
          m_fnUnregisterLoader = null;
          m_rgListeners = [];
          m_videoRef;
          m_bHidePlayer = !1;
          m_fnGetManifest;
          m_strRecordingID = null;
          m_nPendingSeekSec = -1;
          m_playbackDefinition = null;
          m_pendingStop = null;
          m_durationMS = (0, Fe.Sb)(null);
          m_lastRecordingGlobalMS = (0, Fe.Sb)(null);
          m_bWasLiveEdge = !1;
          m_nGlobalTimelinePlaybackMS = null;
          m_nGlobalTimelinePlaybackSec = null;
          m_fnUnregisterAutorun = [];
          m_eGameRecordingMode;
          m_rgSeekPerf = [];
          m_eRecordingState = Qr.NotRecording;
          m_eRecordingSetting = "Never";
          m_bGamepadMode = !1;
          m_bControlsVisible = !0;
          m_fnRenderGlyph = void 0;
          m_previousHighlightEntry = null;
          m_nextHighlightEntry = null;
          m_displayHighlightEntry = null;
          m_nRelativeTimeForDisplay = void 0;
          m_rgClipOffsets = [];
          m_phasePreview = void 0;
          constructor(t, r, n, l, u, m, f, h) {
            (0, q.Gn)(this),
              (this.m_fnGetManifest = r),
              (this.m_gameRecordingVideo = new We(!0)),
              (this.m_eGameRecordingMode = n),
              (this.m_bGamepadMode = u),
              (this.m_playbackDefinition = f),
              l != null && (this.m_bControlsVisible = l),
              n === "Overlay" && (this.m_bHidePlayer = !0),
              h && this.SetClipOffsets(h),
              (this.m_fnRenderGlyph = m),
              this.m_fnUnregisterAutorun.push(
                (0, q.mJ)(
                  () => ({
                    bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
                    bIsPaused: this.m_gameRecordingVideo.IsPaused(),
                  }),
                  (b) => {
                    b.bIsAtEnd &&
                      !b.bIsPaused &&
                      this.PlayNextTimelineRecording();
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, q.mJ)(
                  () => this.m_gameRecordingVideo.GetPlaybackTime(),
                  (b) => {
                    if (
                      this.m_pendingStop &&
                      this.m_pendingStop.m_strRecordingID ==
                        this.m_strRecordingID &&
                      this.m_pendingStop.m_nOffsetMS <= b * 1e3
                    ) {
                      if (this.m_playbackDefinition?.m_nLoopDurationMS) {
                        this.StartPlaybackForRange();
                        return;
                      }
                      this.m_gameRecordingVideo.Pause(),
                        (this.m_pendingStop = null);
                    }
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, q.mJ)(
                  () => ({
                    playback: this.m_gameRecordingVideo.GetPlaybackTime(),
                    bVideoPlaying:
                      this.m_gameRecordingVideo.BVideoElementPlaying(),
                  }),
                  (b) => {
                    if (b.bVideoPlaying) {
                      const y =
                        this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                          this.m_strRecordingID,
                          b.playback * 1e3,
                          0,
                        );
                      if (y)
                        this.UpdateGlobalPlayTime(y.nGlobalOffsetMS),
                          y.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
                            this.m_eGameRecordingMode === "Overlay" &&
                            this.m_gameRecordingVideo.GetPlaybackSpeed() > 1 &&
                            (console.log(
                              " hitting live edge, slow down the playback ",
                            ),
                            this.m_gameRecordingVideo.SetPlaybackSpeed(1));
                      else {
                        const w = this.GetLiveEdgeMS();
                        isNaN(w.valMS) ||
                          (this.SetPlaytimeFromGlobalMS(w),
                          this.FocusGlobalMS(w));
                      }
                    }
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, q.mJ)(
                  () => ({
                    globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
                    bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
                    bHidePlayer: this.m_bHidePlayer,
                  }),
                  (b) => {
                    if (!this.m_timelineLoader?.BInitialized()) return;
                    if (b.bHidePlayer) {
                      this.SetEntriesForLiveEdge();
                      return;
                    }
                    (!this.m_previousHighlightEntry ||
                      !this.m_nextHighlightEntry ||
                      (this.m_nextHighlightEntry?.globalMS &&
                        b.globalPlaybackMS >=
                          this.m_nextHighlightEntry.globalMS.valMS) ||
                      (this.m_previousHighlightEntry?.globalMS &&
                        b.globalPlaybackMS <=
                          this.m_previousHighlightEntry.globalMS.valMS) ||
                      (b.bVideoPaused &&
                        this.m_previousHighlightEntry?.globalMS &&
                        b.globalPlaybackMS >=
                          this.m_previousHighlightEntry.globalMS.valMS + Bi)) &&
                      (this.CalculatePreviousHighlightEntry(
                        b.globalPlaybackMS,
                        b.bVideoPaused,
                      ),
                      this.CalculateNextHighlightEntry(
                        b.globalPlaybackMS,
                        b.bVideoPaused,
                      ));
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, q.mJ)(
                  () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
                  (b) => {
                    if (b) {
                      const y = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                      try {
                        const w = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                          D = performance.measure(w, y);
                        (0, Me.q_)(
                          `CGameRecordingVideo:: perf measure ${y} duration ${D.duration}`,
                        ),
                          D && this.m_rgSeekPerf.push(D.duration);
                      } catch (w) {
                        (0, Me.q_)(
                          `CGameRecordingVideo:: cant measure ${y}, error: ${w}`,
                        );
                      }
                    }
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.SetLoader(t);
          }
          AddEventListener(t) {
            return (
              this.m_rgListeners.push(t), () => $r.x9(this.m_rgListeners, t)
            );
          }
          FireEvent(t, ...r) {
            for (let n of this.m_rgListeners) {
              let l = n[t];
              l instanceof Function && l.apply(n, r);
            }
          }
          dispose() {
            this.m_fnUnregisterAutorun.forEach((t) => t()),
              this.m_fnUnregisterLoader &&
                (this.m_fnUnregisterLoader(),
                (this.m_fnUnregisterLoader = null));
          }
          SetVideoElement(t) {
            if (t) {
              if (this.m_videoRef === t) return;
              if (((this.m_videoRef = t), this.m_strRecordingID)) {
                const r =
                  this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
                (this.m_nPendingSeekSec = -1),
                  this.ChangePlaybackRecording(this.m_strRecordingID, r);
              } else this.TryPlayInitialTimelineVideo();
            } else this.m_gameRecordingVideo.Stop(), (this.m_videoRef = null);
          }
          OnInvalidateRecording(t, r) {
            const n = this.m_fnGetManifest(r);
            this.m_gameRecordingVideo.GetMPDURL() == n &&
              ((0, Me.q_)(`Recording invalidated for ${r}. Reloading MPD`),
              this.m_gameRecordingVideo.UpdateMPD());
          }
          OnLoaderInitialized() {
            (this.m_durationMS =
              this.m_timelineLoader.GetGlobalTimelineEndMS()),
              (this.m_lastRecordingGlobalMS =
                this.m_timelineLoader.GetEndOfRecordingsMS()),
              (this.m_bWasLiveEdge = !0),
              this.TryPlayInitialTimelineVideo();
            const t = Ut(this.m_timelineLoader.GetGameID());
            this.SetClipOffsets(t);
          }
          OnInvalidate(t) {
            if (
              ((this.m_durationMS =
                this.m_timelineLoader.GetGlobalTimelineEndMS()),
              (this.m_lastRecordingGlobalMS =
                this.m_timelineLoader.GetEndOfRecordingsMS()),
              this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(t))
            ) {
              this.SetEntriesForLiveEdge();
              return;
            }
            if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
              const r = this.m_timelineLoader.GetTimelineMetadataIndex(t),
                n = this.m_timelineLoader.GetTimelineMetadataIndex(
                  this.m_previousHighlightEntry.timelineID,
                ),
                l = this.m_timelineLoader.GetTimelineMetadataIndex(
                  this.m_nextHighlightEntry.timelineID,
                );
              if (r < n || r > l) return;
            }
            this.CalculatePreviousHighlightEntry(
              this.m_nGlobalTimelinePlaybackMS,
              this.GetGameRecordingVideo().IsPaused(),
            ),
              this.CalculateNextHighlightEntry(
                this.m_nGlobalTimelinePlaybackMS,
                this.GetGameRecordingVideo().IsPaused(),
              );
          }
          OnTimelineLoaded(t) {
            this.m_previousHighlightEntry &&
              this.m_previousHighlightEntry.timelineID === t &&
              this.CalculatePreviousHighlightEntry(
                this.m_nGlobalTimelinePlaybackMS,
                this.GetGameRecordingVideo().IsPaused(),
              ),
              this.m_nextHighlightEntry &&
                this.m_nextHighlightEntry.timelineID === t &&
                this.CalculateNextHighlightEntry(
                  this.m_nGlobalTimelinePlaybackMS,
                  this.GetGameRecordingVideo().IsPaused(),
                );
          }
          SetEntriesForLiveEdge() {
            const t = this.GetLiveEdgeMS();
            this.CalculatePreviousHighlightEntry(t.valMS, !0),
              (this.m_nextHighlightEntry = null);
          }
          CalculatePreviousHighlightEntry(t, r) {
            const n = r ? 1 : Bi * this.m_gameRecordingVideo.GetPlaybackSpeed(),
              l = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
                t - n,
              );
            l.timelineState === "loaded" && !l.entry
              ? (this.m_previousHighlightEntry =
                  this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
                    t,
                  ))
              : (this.m_previousHighlightEntry = l);
          }
          CalculateNextHighlightEntry(t, r) {
            const n =
              this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(t);
            if (n.timelineState === "loaded" && !n.entry) {
              const l = r
                ? 1
                : Bi * this.m_gameRecordingVideo.GetPlaybackSpeed();
              this.m_nextHighlightEntry =
                this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(
                  t - l,
                );
            } else this.m_nextHighlightEntry = n;
          }
          GetPreviousHighlightEntry() {
            return this.m_previousHighlightEntry;
          }
          GetNextHighlightEntry() {
            return this.m_nextHighlightEntry;
          }
          GetDisplayHighlightEntry() {
            return this.m_displayHighlightEntry;
          }
          SetDisplayHighlightEntry(t, r) {
            this.m_displayHighlightEntry = { entry: t, duration: r };
          }
          GetPhasePreview() {
            return this.m_phasePreview;
          }
          SetPhasePreview(t) {
            this.m_phasePreview = t;
          }
          GetRelativeTimeForDisplay() {
            return this.m_nRelativeTimeForDisplay;
          }
          ClearRelativeTimeDisplay() {
            this.m_nRelativeTimeForDisplay = void 0;
          }
          GetClipOffsets() {
            return this.m_rgClipOffsets;
          }
          SetClipOffsets(t) {
            if (!this.m_timelineLoader?.BInitialized()) return;
            let r = [];
            t &&
              t.length &&
              t.forEach((n) => {
                const l = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
                  n.start_timeline_id,
                  0,
                );
                if (!l) return;
                const u = l.nGlobalOffsetMS + parseInt(n.start_offset_ms);
                r.push({
                  strClipID: n.clip_id,
                  nGlobalOffsetMS: u,
                  nDurationMS: parseInt(n.duration_ms),
                });
              }),
              (this.m_rgClipOffsets = r);
          }
          GetTotalMS() {
            return this.m_durationMS;
          }
          GetIsActiveTimeline(t) {
            return this.m_timelineLoader.IsActiveTimeline(t);
          }
          BIsVideoElementPaused() {
            return this.m_gameRecordingVideo.IsPaused();
          }
          BInitialized() {
            return this.m_timelineLoader.BInitialized();
          }
          GetHidePlayer() {
            return this.m_bHidePlayer;
          }
          SetHidePlayer(t) {
            t && (this.m_strRecordingID = null), (this.m_bHidePlayer = t);
          }
          BPlayerInitialized() {
            return this.m_gameRecordingVideo.IsInitialized();
          }
          GetGameRecordingVideo() {
            return this.m_gameRecordingVideo;
          }
          GetGameID() {
            return this.m_timelineLoader.GetGameID();
          }
          GetClipID() {
            return this.m_timelineLoader.GetClipID();
          }
          GetRecordingState() {
            return this.m_eRecordingState;
          }
          SetRecordingState(t) {
            this.m_eRecordingState = t;
          }
          GetLoader() {
            return this.m_timelineLoader;
          }
          SetLoader(t) {
            this.m_timelineLoader != t &&
              (this.m_fnUnregisterLoader && this.m_fnUnregisterLoader(),
              (this.m_timelineLoader = t),
              (this.m_fnUnregisterLoader =
                this.m_timelineLoader.AddEventListener(this)),
              t.BInitialized() && this.OnLoaderInitialized());
          }
          SetGetManifest(t) {
            this.m_fnGetManifest = t;
          }
          GetRecordingID() {
            return this.m_strRecordingID;
          }
          GetRecordingSetting() {
            return this.m_eRecordingSetting;
          }
          SetRecordingSetting(t) {
            this.m_eRecordingSetting = t;
          }
          GetRecordingMode() {
            return this.m_eGameRecordingMode;
          }
          ShouldModeShowClipControls() {
            switch (this.m_eGameRecordingMode) {
              case "Overlay":
              case "Clips":
              case "Background":
                return !0;
              default:
                return !1;
            }
          }
          CanModeAddMarker() {
            switch (this.m_eGameRecordingMode) {
              case "Overlay":
              case "Clips":
              case "Background":
                return !0;
              default:
                return !1;
            }
          }
          GetPlaybackStats() {
            if (!this.m_rgSeekPerf.length) return null;
            const t = this.m_rgSeekPerf.length,
              r = this.m_rgSeekPerf.reduce((m, f) => m + f) / t,
              n = Math.sqrt(
                this.m_rgSeekPerf
                  .map((m) => Math.pow(m - r, 2))
                  .reduce((m, f) => m + f) / t,
              ),
              l = Math.max(...this.m_rgSeekPerf),
              u = Math.min(...this.m_rgSeekPerf);
            return {
              nMean: r,
              nStdDev: n,
              nMax: l,
              nMin: u,
              nLength: t,
              nLastVal: this.m_rgSeekPerf[t - 1],
            };
          }
          async StartPlaybackForRange() {
            let r =
              this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
                this.m_playbackDefinition.m_strTimelineID,
                0,
              )?.nGlobalOffsetMS || 0;
            r += this.m_playbackDefinition.m_nTimelineStartMS;
            let n;
            if (
              (this.m_playbackDefinition.m_strEntryID
                ? (n =
                    await this.m_timelineLoader.FindRecordingAndOffsetForEntry(
                      this.m_playbackDefinition.m_strEntryID,
                    ))
                : (n =
                    this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                      r,
                    )),
              n)
            ) {
              if (this.m_playbackDefinition.m_nLoopDurationMS) {
                let l = r + this.m_playbackDefinition.m_nLoopDurationMS,
                  u =
                    this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                      l,
                    );
                this.m_pendingStop = {
                  m_strRecordingID: u.strRecordingID,
                  m_nOffsetMS: u.nRecordingOffsetMS,
                };
              }
              this.UpdateGlobalPlayTime(r),
                this.ChangePlaybackRecording(
                  n.strRecordingID,
                  n.nRecordingOffsetMS / 1e3,
                );
            }
          }
          TryPlayInitialTimelineVideo() {
            if (!(!this.m_timelineLoader.BInitialized() || this.m_bHidePlayer))
              if (this.m_playbackDefinition) this.StartPlaybackForRange();
              else if (this.m_eGameRecordingMode === "Overlay") {
                const t = this.GetLiveEdgeMS(),
                  r =
                    this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession(),
                  n =
                    this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                      r,
                      0,
                      0,
                    );
                n && t.valMS < n.nGlobalOffsetMS
                  ? (this.UpdateGlobalPlayTime(n.nGlobalOffsetMS),
                    this.ChangePlaybackRecording(r, 0))
                  : isNaN(t.valMS) || this.SetPlaytimeFromGlobalMS(t, !1, !0);
              } else if (this.m_eGameRecordingMode === "Background") {
                const t =
                  this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
                this.SetPlaytimeFromRecordingOffset(t, 0);
              } else {
                const t = this.m_timelineLoader.GetFirstRecording();
                this.SetPlaytimeFromRecordingOffset(t, 0);
              }
          }
          GetTotalSeconds() {
            return Math.floor(
              this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1e3,
            );
          }
          GetCurrentPlaybackGlobalMS(t = 0) {
            const r =
              Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3) + t;
            return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              this.m_strRecordingID,
              r,
              0,
            );
          }
          GetIsLiveEdge() {
            const t = this.GetGlobalMSPlaytime().valMS || 0;
            return this.m_eGameRecordingMode === "Overlay"
              ? this.m_lastRecordingGlobalMS
                ? this.m_bWasLiveEdge
                : !1
              : this.GetTotalMS().valMS - t < 1;
          }
          GetLiveEdgeBufferWindowStartMS() {
            if (
              this.m_eGameRecordingMode === "Overlay" &&
              this.m_lastRecordingGlobalMS
            ) {
              const t = Math.max(
                0,
                this.m_lastRecordingGlobalMS.valMS - Hi - 1e3,
              );
              return (0, Fe.Sb)(t);
            }
            return this.GetTotalMS();
          }
          GetLiveEdgeMS() {
            if (
              this.m_eGameRecordingMode === "Overlay" &&
              this.m_lastRecordingGlobalMS
            ) {
              const t = Math.max(0, this.m_lastRecordingGlobalMS.valMS - gn);
              return (0, Fe.Sb)(t);
            }
            return (0, Fe.Sb)(Math.max(0, this.GetTotalMS().valMS - 1));
          }
          GetTimelineAndOffsetRelativeToCurrentPlayback(t = 0) {
            const r = this.GetCurrentPlaybackGlobalMS(t);
            return (
              r ||
              ((0, Me.ZI)(
                `failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3)} MS`,
              ),
              null)
            );
          }
          SeekDeltaMS(t) {
            const r = this.GetGlobalMSPlaytime();
            if (!this.m_strRecordingID) {
              const u =
                t > 0
                  ? this.GetClosestNextRecordingForGlobalMS(r)
                  : this.GetClosestPreviousRecordingForGlobalMS(r);
              if (u) {
                const m = t > 0 ? t : Math.max(parseInt(u.duration_ms) + t, 0);
                this.SetPlaytimeFromRecordingOffset(u.recording_id, m, t < 0);
                return;
              }
            }
            const n =
                this.m_eGameRecordingMode === "Overlay"
                  ? this.GetLiveEdgeMS().valMS
                  : this.GetTotalMS().valMS,
              l = et.OQ(r.valMS + t, 0, n - 1e3);
            this.SetPlaytimeFromGlobalMS((0, Fe.Sb)(l));
          }
          ConvertGlobaOffsetToRecordingAndRelativeOffset(t) {
            return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              t,
            );
          }
          PlayNextTimelineRecording(t) {
            if (this.m_playbackDefinition?.m_nLoopDurationMS) {
              this.StartPlaybackForRange();
              return;
            }
            let r;
            if (
              (this.m_strRecordingID
                ? (r = this.m_timelineLoader.GetNextRecording(
                    this.m_strRecordingID,
                  ))
                : (r =
                    this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
                      (0, Fe.Sb)(this.m_nGlobalTimelinePlaybackMS),
                    )?.recording_id),
              r)
            ) {
              this.SetPlaytimeFromRecordingOffset(r, 0);
              return;
            }
            this.m_gameRecordingVideo.Pause(),
              t && this.TryPlayInitialTimelineVideo();
          }
          GetClipsAtGlobalMS(t) {
            return (
              this.m_rgClipOffsets.filter(
                (r) =>
                  r.nGlobalOffsetMS <= t.valMS &&
                  r.nGlobalOffsetMS + r.nDurationMS >= t.valMS,
              ) || []
            );
          }
          GetClosestPreviousRecordingForGlobalMS(t) {
            return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(
              t,
            );
          }
          GetClosestNextRecordingForGlobalMS(t) {
            return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
              t,
            );
          }
          SetPlaytimeFromRecordingOffset(t, r, n, l) {
            let u = r;
            n &&
              (u = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(
                t,
                r,
              ));
            const m =
              this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                t,
                u,
                0,
              );
            m &&
              (this.UpdateGlobalPlayTime(m.nGlobalOffsetMS),
              this.ChangePlaybackRecording(t, u / 1e3, l));
          }
          GetManifestFromRecordingID(t) {
            return this.m_fnGetManifest(t);
          }
          ChangePlaybackRecording(t, r = 0, n) {
            this.m_bHidePlayer = !1;
            const l = this.m_gameRecordingVideo.IsPaused();
            if (
              this.m_strRecordingID === t &&
              this.m_gameRecordingVideo.IsInitialized()
            ) {
              this.m_gameRecordingVideo.Seek(r);
              return;
            }
            if (
              (this.m_gameRecordingVideo.Stop(),
              (this.m_strRecordingID = t),
              !t)
            )
              return;
            if (!this.m_videoRef) {
              this.m_nPendingSeekSec = r;
              return;
            }
            const u = this.GetManifestFromRecordingID(t),
              m = this.m_timelineLoader.BRecordingHasZeroOffset(t)
                ? Ur.lU.Absolute
                : Ur.lU.FromAvailableStart;
            this.m_gameRecordingVideo.Start(this.m_videoRef, u, r, m),
              (n || l) && this.m_gameRecordingVideo.Pause();
          }
          StopPlayback() {
            this.m_gameRecordingVideo.Stop();
          }
          TogglePlayPause() {
            this.m_gameRecordingVideo.IsPaused() ||
            !this.m_gameRecordingVideo.IsInitialized()
              ? (this.m_nGlobalTimelinePlaybackMS >
                  (this.m_lastRecordingGlobalMS?.valMS ?? 0) &&
                  this.TryPlayInitialTimelineVideo(),
                this.m_gameRecordingVideo.GetTimelineDuration() -
                  this.m_gameRecordingVideo.GetPlaybackTime() <
                0.05
                  ? this.PlayNextTimelineRecording(!0)
                  : this.m_gameRecordingVideo.Play())
              : this.m_gameRecordingVideo.Pause();
          }
          GetGlobalMSPlaytime() {
            return (0, Fe.Sb)(this.m_nGlobalTimelinePlaybackMS);
          }
          GetGlobalPlaytimeSec() {
            return this.m_nGlobalTimelinePlaybackSec;
          }
          UpdateGlobalPlayTime(t) {
            if (
              ((this.m_nGlobalTimelinePlaybackMS = t),
              (this.m_nGlobalTimelinePlaybackSec = Math.floor(t / 1e3)),
              this.m_lastRecordingGlobalMS &&
                this.m_lastRecordingGlobalMS.valMS !== null)
            ) {
              const r = this.m_bWasLiveEdge ? bn : Hi;
              this.m_bWasLiveEdge =
                this.m_lastRecordingGlobalMS.valMS -
                  (this.GetGlobalMSPlaytime()?.valMS || 0) <
                r;
            }
          }
          HandleSeekToPreviousRecording(t, r, n) {
            const l = this.GetClosestPreviousRecordingForGlobalMS(t);
            if (l) {
              const u = parseInt(l.duration_ms),
                m = Math.max(u - 5e3, u * 0.75);
              n || (this.m_nRelativeTimeForDisplay = m / 1e3),
                this.UpdateGlobalPlayTime(
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    l.recording_id,
                    m,
                    0,
                  ).nGlobalOffsetMS,
                ),
                this.ChangePlaybackRecording(l?.recording_id, m / 1e3, r);
            } else
              n || (this.m_nRelativeTimeForDisplay = 0),
                this.UpdateGlobalPlayTime(0),
                this.ChangePlaybackRecording(this.m_strRecordingID, 0, r);
          }
          HandleSeekToNextRecording(t, r, n) {
            const l = this.GetClosestNextRecordingForGlobalMS(t);
            l
              ? (n || (this.m_nRelativeTimeForDisplay = 0),
                this.UpdateGlobalPlayTime(
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    l.recording_id,
                    0,
                    0,
                  ).nGlobalOffsetMS,
                ),
                this.ChangePlaybackRecording(l?.recording_id, 0, r))
              : (n ||
                  (this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS),
                this.ChangePlaybackRecording(
                  this.m_strRecordingID,
                  this.GetTotalMS().valMS / 1e3,
                  r,
                ));
          }
          SetPlaytimeFromGlobalMS(t, r, n, l) {
            this.m_pendingStop = null;
            let u =
              this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                t.valMS,
              );
            u
              ? (n || (this.m_nRelativeTimeForDisplay = t.valMS),
                this.UpdateGlobalPlayTime(t.valMS),
                this.ChangePlaybackRecording(
                  u?.strRecordingID,
                  u?.nRecordingOffsetMS / 1e3,
                  r,
                ))
              : l
                ? this.ChangePlaybackRecording(
                    u?.strRecordingID,
                    u?.nRecordingOffsetMS / 1e3,
                    r,
                  )
                : t.valMS > this.m_nGlobalTimelinePlaybackMS
                  ? this.HandleSeekToNextRecording(t, r, n)
                  : this.HandleSeekToPreviousRecording(t, r, n);
          }
          ConvertGlobalOffsetToTimelineRelativeOffset(t) {
            return this.m_timelineLoader.GetTimelineOffsetFromGlobal(t, 0);
          }
          MakeRelativeToTimelineEndIfActive(t, r) {
            return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(
              t,
              r,
            );
          }
          GetTimelineDuration(t) {
            if (!this.m_timelineLoader.BInitialized()) return null;
            const r = this.m_timelineLoader.GetTimelineMetadata(t);
            return r ? parseInt(r.metadata.duration_ms) : null;
          }
          GetTimelineFirstRecordingOffset(t) {
            if (!this.m_timelineLoader.BInitialized()) return null;
            const r = this.m_timelineLoader.GetTimelineMetadata(t);
            if (!r) return null;
            const n = r.metadata.recordings;
            return n.length ? parseInt(n[0].start_offset_ms) : null;
          }
          async AddUserMarkerAtGlobalMS(t, r, n) {
            const l = this.m_timelineLoader.GetTimelineOffsetFromGlobal(
              t.valMS,
              0,
            );
            if (l) {
              const u = this.m_timelineLoader.GetGameID(),
                { fnCreateUserTimelineMarkers: m } = pi(),
                f = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
                  l.strTimelineID,
                );
              ze.ReportTrackedAction(r);
              const h = "steam_marker",
                b = await m(u, this.GetClipID(), {
                  timeline_id: l.strTimelineID,
                  entry_id: "",
                  time: "" + Math.floor(l.nTimelineOffsetMS.valMS + f),
                  type: Pi.Bw.jL,
                  marker_icon: h,
                  marker_priority: 0,
                });
              b.eResult == H.R &&
                (this.m_timelineLoader.AddUserMarker(
                  l.strTimelineID,
                  Math.floor(l.nTimelineOffsetMS.valMS),
                  h,
                  b.entry_id,
                ),
                n && n(b.entry_id, l.strTimelineID));
            }
          }
          async RemoveUserMarker(t, r) {
            const { fnRemoveUserTimelineMarker: n } = pi(),
              l = this.m_timelineLoader.GetGameID();
            return (await n(l, this.GetClipID(), t, r)) == H.R
              ? (this.m_timelineLoader.RemoveUserMarker(t, r), !0)
              : ((0, Me.tG)(
                  `Failed to delete user marker for timeline ${t} entry ${r}`,
                ),
                !1);
          }
          async UpdateUserMarker(t, r, n, l) {
            const { fnUpdateUserTimelineMarkers: u } = pi(),
              m = this.m_timelineLoader.GetGameID(),
              f = {
                timeline_id: t,
                entry_id: r.id,
                time: r.time,
                type: Pi.Bw.jL,
                marker_icon: r.icon,
                marker_priority: r.priority,
                range_title: n,
                marker_description: l,
              };
            if ((await u(m, this.GetClipID(), f)) == H.R) {
              const b = {
                strIcon: r.icon,
                name: n,
                description: l,
                nTimelineOffsetMS: parseInt(r.time),
              };
              return this.m_timelineLoader.UpdateUserMarker(t, r.id, b), !0;
            }
            return !1;
          }
          FocusGlobalMS(t) {
            this.FireEvent("OnFocusGlobalMS", t);
          }
          SetPlaybackStop(t) {
            const r = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              t.valMS,
            );
            r &&
              (this.m_pendingStop = {
                m_strRecordingID: r.strRecordingID,
                m_nOffsetMS: r.nRecordingOffsetMS,
              });
          }
          ClearPlaybackStop() {
            this.m_pendingStop = null;
          }
          GenerateClipNameFromTimeline(t, r, n, l) {
            return this.m_timelineLoader.GenerateClipNameFromTimeline(
              t,
              r,
              n,
              l,
            );
          }
          GetRenderGlyph() {
            if (this.m_bGamepadMode) return this.m_fnRenderGlyph;
          }
          SetRenderGlyph(t) {
            this.m_fnRenderGlyph = t;
          }
          GetGamepadMode() {
            return this.m_bGamepadMode;
          }
          SetGamepadMode(t) {
            this.m_bGamepadMode = t;
          }
          GetControlsVisible() {
            return this.m_bControlsVisible;
          }
          SetControlsVisible(t) {
            t != null && (this.m_bControlsVisible = t);
          }
        }
        tt([q.sH], Qe.prototype, "m_bHidePlayer", 2),
          tt([q.sH], Qe.prototype, "m_strRecordingID", 2),
          tt([q.sH], Qe.prototype, "m_durationMS", 2),
          tt([q.sH], Qe.prototype, "m_lastRecordingGlobalMS", 2),
          tt([q.sH], Qe.prototype, "m_nGlobalTimelinePlaybackMS", 2),
          tt([q.sH], Qe.prototype, "m_nGlobalTimelinePlaybackSec", 2),
          tt([q.sH], Qe.prototype, "m_rgSeekPerf", 2),
          tt([q.sH], Qe.prototype, "m_eRecordingState", 2),
          tt([q.sH], Qe.prototype, "m_eRecordingSetting", 2),
          tt([q.sH], Qe.prototype, "m_bGamepadMode", 2),
          tt([q.sH], Qe.prototype, "m_bControlsVisible", 2),
          tt([q.sH], Qe.prototype, "m_fnRenderGlyph", 2),
          tt([q.sH], Qe.prototype, "m_previousHighlightEntry", 2),
          tt([q.sH], Qe.prototype, "m_nextHighlightEntry", 2),
          tt([q.sH], Qe.prototype, "m_displayHighlightEntry", 2),
          tt([q.sH], Qe.prototype, "m_nRelativeTimeForDisplay", 2),
          tt([q.sH.ref], Qe.prototype, "m_rgClipOffsets", 2),
          tt([q.sH.ref], Qe.prototype, "m_phasePreview", 2),
          tt([be.oI], Qe.prototype, "SetVideoElement", 1),
          tt([be.oI], Qe.prototype, "OnInvalidateRecording", 1),
          tt([q.XI], Qe.prototype, "OnLoaderInitialized", 1),
          tt([be.oI], Qe.prototype, "OnInvalidate", 1),
          tt([be.oI], Qe.prototype, "OnTimelineLoaded", 1),
          tt([be.oI], Qe.prototype, "GetLiveEdgeMS", 1),
          tt([be.oI], Qe.prototype, "StopPlayback", 1),
          tt([be.oI], Qe.prototype, "TogglePlayPause", 1),
          tt([q.XI], Qe.prototype, "UpdateGlobalPlayTime", 1);
        const vi = M.createContext({ timelinePlaybackCoordinator: null });
        function pn(s) {
          const {
              children: t,
              mode: r,
              fnGetManifest: n,
              loader: l,
              recordingState: u,
              controlsVisible: m,
              gamepadMode: f,
              renderGlyph: h,
              recordingSetting: b,
              playbackDefinition: y,
              clipSummaries: w,
            } = s,
            [D] = M.useState(() => new Qe(l, n, r, m, f, h, y, w));
          (0, M.useEffect)(() => {
            D.SetLoader(l);
          }, [D, l]),
            (0, M.useEffect)(() => {
              D.SetRecordingState(u);
            }, [D, u]),
            (0, M.useEffect)(() => {
              D.SetRecordingSetting(b);
            }, [D, b]),
            (0, M.useEffect)(() => {
              D.SetGetManifest(n);
            }, [D, n]),
            (0, M.useEffect)(() => {
              D.SetControlsVisible(m);
            }, [D, m]),
            (0, M.useEffect)(() => {
              D.SetGamepadMode(f);
            }, [D, f]),
            (0, M.useEffect)(() => {
              D.SetRenderGlyph(h);
            }, [D, h]),
            (0, M.useEffect)(() => {
              D.SetClipOffsets(w);
            }, [D, w]),
            (0, M.useEffect)(() => () => D.dispose(), [D]);
          const W = M.useMemo(() => ({ timelinePlaybackCoordinator: D }), [D]);
          return (0, c.jsx)(vi.Provider, { value: W, children: t });
        }
        function Ke() {
          return (0, M.useContext)(vi).timelinePlaybackCoordinator;
        }
        function ba() {
          return useContext(
            vi,
          ).timelinePlaybackCoordinator.GetGameRecordingVideo();
        }
        function yn() {
          const s = Ke();
          return [
            (0, U.q3)(() => s?.GetPhasePreview() || null),
            (r) => s?.SetPhasePreview(r),
          ];
        }
        var ar = E(8959);
        const ii = { nBeforeMS: 0, nAfterMS: 12e3 },
          sr = M.createContext({
            globalStartMS: void 0,
            globalEndMS: void 0,
            setRange: null,
            setStartMS: null,
            setEndMS: null,
            globalPreviewStartMS: void 0,
            globalPreviewEndMS: void 0,
            setPreviewRange: null,
            clearPreviewSelection: null,
            selectionZoomCount: 0,
            eInitMethod: void 0,
            startMetrics: void 0,
            endMetrics: void 0,
            zoomIntoSelection: null,
            zoomOutSelection: null,
          });
        function ga(s) {
          const { children: t, loader: r } = s,
            [n, l] = React.useState(),
            [u, m] = React.useState(),
            [f, h] = React.useState(),
            [b, y] = React.useState(),
            w = React.useMemo(
              () => ({
                originalGlobalMS: 0,
                originalRangeMethod: void 0,
                latestRangeMethod: void 0,
              }),
              [],
            ),
            [D, W] = React.useState({ ...w }),
            [X, V] = React.useState({ ...w }),
            [A, K] = React.useState(),
            [ne, G] = React.useState(),
            [te, oe] = React.useState(0),
            xe = useTimelinePlaybackCoordinator(),
            Ce = React.useCallback(() => {
              h(null),
                l(void 0),
                m(void 0),
                y(void 0),
                W(w),
                V(w),
                xe.ClearPlaybackStop();
            }, [xe, w]),
            dr = React.useCallback((lr) => {
              K(lr.valMS > 0 ? lr : GlobalRelativeMS(0));
            }, []),
            Ze = React.useCallback(
              (lr) => {
                const hr = r.GetGlobalTimelineEndMS();
                G(lr.valMS < hr.valMS ? lr : hr);
              },
              [r],
            ),
            Xt = React.useCallback(
              (lr, hr) => {
                dr(lr), Ze(hr);
              },
              [Ze, dr],
            ),
            ur = React.useCallback(() => {
              K(void 0), G(void 0);
            }, []),
            mi = React.useCallback(
              (lr, hr) => {
                if (lr !== void 0) {
                  let Lr = D ?? { ...w };
                  Lr.originalGlobalMS == 0 &&
                    ((Lr.originalRangeMethod = lr),
                    (Lr.originalGlobalMS = hr.valMS)),
                    (Lr.latestRangeMethod = lr),
                    W(Lr);
                }
                l(hr.valMS > 0 ? hr : GlobalRelativeMS(0));
              },
              [D, w],
            ),
            fi = React.useCallback(
              (lr, hr) => {
                if (lr !== void 0) {
                  let ti = X ?? { ...w };
                  ti.originalGlobalMS == 0 &&
                    ((ti.originalRangeMethod = lr),
                    (ti.originalGlobalMS = hr.valMS)),
                    (ti.latestRangeMethod = lr),
                    V(ti);
                }
                const Lr = r.GetGlobalTimelineEndMS();
                m(hr.valMS < Lr.valMS ? hr : Lr);
              },
              [r, X, w],
            ),
            di = React.useCallback(
              (lr, hr, Lr) => {
                b == null && y(lr), mi(lr, hr), fi(lr, Lr), ur();
              },
              [fi, mi, ur, b, y],
            ),
            xi = React.useCallback(() => {
              oe(te + 1);
            }, [oe, te]),
            ki = React.useCallback(() => {
              te > 0 && oe(te - 1);
            }, [oe, te]);
          useEffect(() => () => Ce(), [Ce, r]);
          const Ro = React.useMemo(
            () => ({
              globalStartMS: n,
              globalPreviewStartMS: A,
              globalPreviewEndMS: ne,
              globalEndMS: u,
              selectedMarker: f,
              eInitMethod: b,
              startMetrics: D,
              endMetrics: X,
              setStartMS: mi,
              setEndMS: fi,
              setRange: di,
              setPreviewRange: Xt,
              clearPreviewSelection: ur,
              setSelectedMarker: (lr, hr, Lr, ti) => {
                h({ strEntryID: lr, strTimelineID: hr }),
                  di(
                    EClipRangeMethod.k_EClipRangeMethod_Highlight,
                    GlobalRelativeMS(Math.max(0, Lr)),
                    GlobalRelativeMS(ti),
                  );
              },
              clearSelection: Ce,
              selectionZoomCount: te,
              zoomIntoSelection: xi,
              zoomOutSelection: ki,
            }),
            [n, A, ne, u, f, b, D, X, mi, fi, di, Xt, ur, Ce, te, ki, xi],
          );
          return jsx(sr.Provider, { value: Ro, children: t });
        }
        function Xi() {
          const s = (0, M.useContext)(sr);
          return {
            nGlobalStartMS: s.globalStartMS,
            nGlobalEndMS: s.globalEndMS,
          };
        }
        function pa() {
          const s = useContext(sr);
          return {
            eInitMethod: s.eInitMethod,
            startMetrics: s.startMetrics,
            endMetrics: s.endMetrics,
          };
        }
        function ya() {
          const s = useContext(sr),
            t =
              s.globalStartMS !== void 0
                ? s.globalStartMS.valMS - s.startMetrics.originalGlobalMS
                : 0,
            r =
              s.globalEndMS !== void 0
                ? s.globalEndMS.valMS - s.endMetrics.originalGlobalMS
                : 0;
          return {
            eInitMethod: s.eInitMethod,
            startMetrics: {
              originalRangeMethod: s.startMetrics.originalRangeMethod,
              latestRangeMethod: s.startMetrics.latestRangeMethod,
              relativeMS: t,
            },
            endMetrics: {
              originalRangeMethod: s.endMetrics.originalRangeMethod,
              latestRangeMethod: s.endMetrics.latestRangeMethod,
              relativeMS: r,
            },
          };
        }
        function ni() {
          return (0, M.useContext)(sr).globalStartMS;
        }
        function ai() {
          return (0, M.useContext)(sr).globalEndMS;
        }
        function Ai() {
          return (0, M.useContext)(sr).setRange;
        }
        function Vi() {
          return (0, M.useContext)(sr).setStartMS;
        }
        function Ki() {
          return (0, M.useContext)(sr).setEndMS;
        }
        function si() {
          const s = (0, M.useContext)(sr);
          return {
            selectedMarker: s.selectedMarker,
            setSelectedMarker: s.setSelectedMarker,
          };
        }
        function li() {
          const s = (0, M.useContext)(sr);
          return !isNaN(s.globalStartMS?.valMS) && !isNaN(s.globalEndMS?.valMS);
        }
        function Zi() {
          return (0, M.useContext)(sr).clearSelection;
        }
        function Sn() {
          return useContext(sr).setPreviewRange;
        }
        function Sa() {
          const s = useContext(sr);
          return {
            globalStartMS: s.globalPreviewStartMS,
            globalEndMS: s.globalPreviewEndMS,
          };
        }
        function Ba() {
          const s = useContext(sr);
          return (
            !isNaN(s.globalPreviewStartMS?.valMS) &&
            !isNaN(s.globalPreviewEndMS?.valMS)
          );
        }
        function va() {
          return useContext(sr).clearPreviewSelection;
        }
        function Ta() {
          const s = Sn(),
            t = useTimelinePlaybackCoordinator();
          return React.useCallback(() => {
            let n = t.GetCurrentPlaybackGlobalMS(0);
            if (n && n.strTimelineID) {
              let [l, u] = t
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  n.strTimelineID,
                  n.nGlobalOffsetMS,
                  ii.nBeforeMS,
                  ii.nAfterMS,
                );
              s(GlobalRelativeMS(l), GlobalRelativeMS(u));
            }
          }, [t, s]);
        }
        function Bn() {
          const s = Ai(),
            t = Vi(),
            r = Ki(),
            n = Xi(),
            l = vn(),
            u = Ji();
          return M.useCallback(
            (f, h, b, y) => {
              if (b === void 0 && y === void 0) return;
              let w = n.nGlobalStartMS !== void 0 || n.nGlobalEndMS !== void 0,
                D = b || n.nGlobalStartMS,
                W = y || n.nGlobalEndMS;
              D &&
                W &&
                W.valMS <= D.valMS &&
                (b !== void 0 ? (W = void 0) : (D = void 0));
              const X = ii.nBeforeMS + ii.nAfterMS;
              D === void 0 && (D = (0, Fe.Sb)(W.valMS - X)),
                W === void 0 && (W = (0, Fe.Sb)(D.valMS + X));
              const V = D != n.nGlobalStartMS,
                A = W != n.nGlobalEndMS;
              V && A ? s(h, D, W) : V ? t(h, D) : A && r(h, W),
                !w && V && A && l == 0 && u();
            },
            [n, s, t, r, l, u],
          );
        }
        function Ji() {
          return (0, M.useContext)(sr).zoomIntoSelection;
        }
        function wa() {
          return useContext(sr).zoomOutSelection;
        }
        function vn() {
          return (0, M.useContext)(sr).selectionZoomCount;
        }
        function Tn(s) {
          let t = (0, M.useContext)(sr),
            r = t.selectionZoomCount,
            n = t.globalStartMS,
            l = t.globalEndMS,
            u = (0, M.useRef)(r),
            m = (0, M.useRef)(null);
          (m.current = s),
            (0, M.useEffect)(() => {
              if (!m.current) return;
              let f = !isNaN(n?.valMS) && !isNaN(l?.valMS);
              (u.current == r && f) ||
                ((u.current = r),
                f && r ? m.current(n, l) : m.current(null, null));
            }, [r, n, l, u, m]);
        }
        var wn = Object.defineProperty,
          In = Object.getOwnPropertyDescriptor,
          Ct = (s, t, r, n) => {
            for (
              var l = n > 1 ? void 0 : n ? In(t, r) : t, u = s.length - 1, m;
              u >= 0;
              u--
            )
              (m = s[u]) && (l = (n ? m(t, r, l) : m(l)) || l);
            return n && l && wn(t, r, l), l;
          };
        const On = 5e3,
          Yi = 300 * 1e3,
          zn = 1e3,
          xn = 10,
          Cr = 10;
        var nr = ((s) => (
          (s.Playhead = "Playhead"),
          (s.RangeLeft = "RangeLeft"),
          (s.RangeRight = "RangeRight"),
          (s.Highlight = "Highlight"),
          s
        ))(nr || {});
        class kn {
          m_fnUnregisterFromLoader;
          m_loader;
          m_maskBounds = [-1, -1];
          m_eventTarget;
          constructor(t, r) {
            (0, q.Gn)(this), (this.m_loader = t), (this.m_eventTarget = r);
          }
          Init() {
            (this.m_fnUnregisterFromLoader =
              this.m_loader.AddEventListener(this)),
              this.m_loader.BInitialized() && this.OnLoaderInitialized();
          }
          GetGameID() {
            return this.m_loader.GetGameID();
          }
          BInitialized() {
            return this.m_loader.BInitialized();
          }
          IsActiveRecording(t) {
            return this.m_loader.IsActiveRecording(t);
          }
          IsActiveTimeline(t) {
            return this.m_loader.IsActiveTimeline(t);
          }
          GetStateDescriptionAtGlobalMS(t) {
            return this.m_loader.GetStateDescriptionAtGlobalMS((0, Fe.Sb)(t));
          }
          GetTimelineOffsetFromGlobal(t, r) {
            return this.m_loader.GetTimelineOffsetFromGlobal(t, r);
          }
          GetTimelineStartTime(t) {
            const r = this.m_loader.GetTimelineMetadata(t);
            return r?.metadata ? r.metadata.date_recorded : null;
          }
          BEmpty() {
            return !1;
          }
          GetTimelines() {
            return this.m_loader.GetTimelines();
          }
          GetGlobalTimelineEndMS() {
            return this.m_loader.GetGlobalTimelineEndMS();
          }
          GetTimelineDataOrStartLoad(t) {
            return this.m_loader.GetTimelineDataOrStartLoad(t);
          }
          GetTimelineStartBeforeGlobalZeroMS(t) {
            return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(t);
          }
          MakeRelativeToTimelineEndIfActive(t, r) {
            return this.m_loader.MakeRelativeToTimelineEndIfActive(t, r);
          }
          FindRangeEventsAtGlobalMS(t) {
            return this.m_loader.FindRangeEventsAtGlobalMS(t);
          }
          Close() {
            this.m_fnUnregisterFromLoader &&
              (this.m_fnUnregisterFromLoader(),
              (this.m_fnUnregisterFromLoader = void 0)),
              (this.m_loader = null);
          }
          OnLoaderInitialized() {
            this.m_eventTarget.OnLoaderInitialized &&
              this.m_eventTarget.OnLoaderInitialized();
          }
          OnInvalidate(t) {
            this.m_eventTarget.OnInvalidate &&
              this.m_eventTarget.OnInvalidate(t);
          }
          OnTimelineLoaded(t) {
            this.m_eventTarget.OnTimelineLoaded &&
              this.m_eventTarget.OnTimelineLoaded(t);
          }
          OnInvalidateRecording(t, r) {
            this.m_eventTarget.OnInvalidateRecording &&
              this.m_eventTarget.OnInvalidateRecording(t, r);
          }
        }
        class Ht {
          m_playbackCoordinator;
          m_fnUnregisterPlaybackCoordinator;
          m_refTimelineParentCtn;
          m_timelineMask;
          m_durationMS = 0;
          m_mapTimelineClips = q.sH.map([], { deep: !1 });
          m_scrollLeftPX = 0;
          m_scrollWindowWidth = null;
          m_scrollWindowOffsetPX = null;
          m_bAutoScrollPaused = !1;
          m_autoScrollPauseTimeout = null;
          m_msVisible = 0;
          m_bCustomZoom = !1;
          m_bUserClipping = !1;
          m_prevLeftAndVisible = null;
          m_rgTimelineOffsets = [];
          m_mapTimelineEntries = q.sH.map([], { deep: !1 });
          m_bInitialized = !1;
          m_eThumbnailComponent = null;
          m_nGlobalRelativeThumbnailPositionPX = void 0;
          m_thumbnailHighlightEntry = void 0;
          m_phaseToHighlight = void 0;
          constructor(t, r, n) {
            (0, q.Gn)(this),
              (this.m_playbackCoordinator = r),
              (this.m_timelineMask = new kn(t, this)),
              (this.m_fnUnregisterPlaybackCoordinator =
                r.AddEventListener(this)),
              this.UpdateClipSummaries(n),
              this.m_timelineMask.Init();
          }
          BInitialized() {
            return this.m_bInitialized;
          }
          OnLoaderInitialized() {
            (this.m_durationMS =
              this.m_timelineMask.GetGlobalTimelineEndMS().valMS),
              this.OnInvalidate(),
              this.InitDefaultsIfReady();
          }
          InitDefaultsIfReady() {
            !this.m_bInitialized &&
              this.m_scrollWindowWidth &&
              this.m_timelineMask.BInitialized() &&
              ((this.m_bInitialized = !0),
              (this.m_msVisible = this.ComputeDefaultMSVisible()),
              this.ScrollToCenteredGlobalMS(
                this.m_playbackCoordinator.GetGlobalMSPlaytime().valMS,
              ));
          }
          OnTimelineLoaded(t) {
            if (
              ((0, Me.q_)("OnTimelineLoaded", t), !this.FindTimelineOffsets(t))
            ) {
              (0, Me.tG)("Missing timeline offset metadata for", t);
              return;
            }
            this.ComputeEntriesForTimeline(t);
          }
          OnInvalidate(t) {
            (0, Me.q_)("on invalidate", t);
            const r = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
              n = r - this.m_durationMS,
              l = this.m_durationMS <= 0;
            let u;
            this.m_durationMS = r;
            let m =
              this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
            if (n > 0 && l) this.m_msVisible = this.ComputeDefaultMSVisible();
            else if (n > 0 && !this.m_bAutoScrollPaused && !m)
              this.m_msVisible = this.ComputeDefaultMSVisible();
            else if (n < 0 && this.m_msVisible > r)
              (this.m_msVisible = this.ComputeDefaultMSVisible()),
                this.ScrollToOffset(0);
            else if (n < 0) {
              const b = this.FindClosestTimelineStartForOffsetPX(
                this.m_scrollLeftPX,
              );
              if (b) {
                const y = this.ConvertGlobalMSToGlobalPXOffset(
                    b.globalOffsetMS,
                  ),
                  w = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - y);
                u = { strTimelineID: b.timelineID, nTimelineOffsetMS: w };
              }
            }
            const f = this.m_timelineMask.GetTimelines();
            let h = 0;
            if (this.BInitialized() && t) {
              const b = f.findIndex((y) => y.metadata.timeline_id === t);
              b >= 0 && (h = b);
            }
            if (
              ((this.m_rgTimelineOffsets = f.map((b, y) =>
                y >= h
                  ? this.ComputeTimelineOffset(b)
                  : this.m_rgTimelineOffsets[y],
              )),
              u)
            ) {
              const b = this.FindTimelineOffsets(u.strTimelineID);
              if (b) {
                const y = b.globalOffsetMS + u.nTimelineOffsetMS,
                  w = (0, et.OQ)(
                    this.ConvertGlobalMSToGlobalPXOffset(y),
                    0,
                    this.GetMaxScrollLeftPX(),
                  );
                this.ScrollToOffset(w);
              }
            }
            f.forEach((b, y) => {
              y >= h && this.ComputeEntriesForTimeline(b.metadata.timeline_id);
            });
          }
          OnFocusGlobalMS(t) {
            this.ScrollToCenteredGlobalMS(t.valMS);
          }
          GetGameID() {
            return this.m_timelineMask.GetGameID();
          }
          SetTimelineParentCtnRef(t) {
            this.m_refTimelineParentCtn = t;
          }
          GetTimelineParentCtnRef() {
            return this.m_refTimelineParentCtn;
          }
          SetThumbnailComponent(t) {
            (this.m_eThumbnailComponent = t),
              t || (this.m_nGlobalRelativeThumbnailPositionPX = void 0),
              t !== "Highlight" && (this.m_thumbnailHighlightEntry = null);
          }
          GetThumbnailComponent() {
            return this.m_eThumbnailComponent;
          }
          SetThumbnailPosition(t) {
            this.m_nGlobalRelativeThumbnailPositionPX = t;
          }
          GetThumbnailPosition() {
            return this.m_nGlobalRelativeThumbnailPositionPX;
          }
          SetThumbnailEntry(t) {
            this.m_thumbnailHighlightEntry = t;
          }
          GetThumbnailEntry() {
            return this.m_eThumbnailComponent === "Highlight"
              ? this.m_thumbnailHighlightEntry
              : null;
          }
          Close() {
            this.m_timelineMask.Close(),
              (this.m_timelineMask = null),
              this.m_fnUnregisterPlaybackCoordinator &&
                this.m_fnUnregisterPlaybackCoordinator(),
              (this.m_fnUnregisterPlaybackCoordinator = null),
              (this.m_bInitialized = !1),
              this.m_autoScrollPauseTimeout &&
                this.ClearAutoScrollPauseTimeout();
          }
          ComputeDefaultMSVisible() {
            const t = this.GetTimelineMarginWidth() * 2,
              r = Cr * (this.m_rgTimelineOffsets.length - 1),
              n = Math.max(1, this.m_scrollWindowWidth - r - t),
              l = Math.ceil(
                ((t + r) * this.m_durationMS) /
                  (this.m_scrollWindowWidth - (t + r)),
              ),
              u = zn * n;
            return Math.min(this.m_durationMS + l, u);
          }
          ZoomIn(t, r) {
            if (this.m_msVisible <= 1e3) return;
            const l = this.m_msVisible - this.m_msVisible / 1.1 ** t,
              u = l * r,
              m = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
              f = Math.max(this.m_msVisible - l, 1e3);
            (this.m_msVisible = f),
              (this.m_bCustomZoom = !0),
              this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(m + u));
          }
          ZoomOut(t, r) {
            const n =
              this.m_durationMS +
              this.ConvertDeltaPXToDurationMS(
                Cr * (this.m_rgTimelineOffsets.length - 1) +
                  this.GetTimelineMarginWidth() * 2,
              );
            if (this.m_msVisible >= n) return;
            const l = this.m_msVisible * 1.1 ** t - this.m_msVisible,
              u = l * r,
              m = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
              f = Math.min(this.m_msVisible + l, n);
            (this.m_msVisible = f),
              (this.m_bCustomZoom = !0),
              this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(m - u));
          }
          IsTempZoom() {
            return !!this.m_prevLeftAndVisible;
          }
          SetTempZoomScale(t, r) {
            let n = Math.max(t, 0),
              l = Math.min(r, this.m_durationMS);
            (this.m_prevLeftAndVisible = [
              this.m_scrollLeftPX,
              this.m_msVisible,
            ]),
              (this.m_msVisible = l - n);
            const u = this.ConvertGlobalMSToGlobalPXOffset(n);
            this.ScrollToOffset(u);
          }
          ClearTempZoomScale() {
            if (!this.m_prevLeftAndVisible) return;
            const [t, r] = this.m_prevLeftAndVisible;
            (this.m_prevLeftAndVisible = null),
              this.ScrollToOffset(t),
              (this.m_msVisible = r);
          }
          SetUserIsClipping(t) {
            this.m_bUserClipping = t;
          }
          GetTimelineGapWidth() {
            return Cr;
          }
          GetTimelineMarginWidth() {
            return 12;
          }
          UpdateClipSummaries(t = []) {
            this.m_mapTimelineClips.clear(),
              t.forEach((r) => {
                const n = r.start_timeline_id;
                this.m_mapTimelineClips.has(n) ||
                  this.m_mapTimelineClips.set(n, []);
                const l = {
                  clipID: r.clip_id,
                  msDuration: parseInt(r.duration_ms),
                  msTimelineOffset: parseInt(r.start_offset_ms),
                  timelineID: n,
                };
                this.m_mapTimelineClips.get(n).push(l);
              });
          }
          BEmpty() {
            return this.m_timelineMask.BEmpty();
          }
          ComputeTimelineOffset(t) {
            const r = isNaN(parseInt(t.metadata.duration_ms))
                ? 0
                : parseInt(t.metadata.duration_ms),
              n = t.metadata.recordings.map((m) => {
                const f = parseInt(m.start_offset_ms);
                let h = parseInt(m.duration_ms);
                return (
                  isNaN(h) &&
                    this.m_timelineMask.IsActiveRecording(m.recording_id) &&
                    (h = r - f),
                  {
                    recordingID: m.recording_id,
                    timelineOffsetMS: f,
                    nDurationMS: h,
                    bIsActive: this.m_timelineMask.IsActiveRecording(
                      m.recording_id,
                    ),
                    recordingType: m.recording_type,
                  }
                );
              }),
              u = (t.metadata.phases || []).map((m) => {
                const f = parseInt(m.background_timeline_offset),
                  h = parseInt(m.duration_ms);
                return { timelineOffsetMS: f, nDurationMS: h, phase: m };
              });
            return {
              timelineID: t.metadata.timeline_id,
              globalOffsetMS: t.nGlobalOffsetMS.valMS,
              nDurationMS: r,
              recordingOffsets: n,
              phaseOffsets: u,
            };
          }
          GetCurrentZoomScale() {
            return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
          }
          GetClipsForTimeline(t) {
            return this.m_mapTimelineClips.get(t) || [];
          }
          ComputeEntriesForTimeline(t) {
            const r = this.m_timelineMask.GetTimelineDataOrStartLoad(t);
            !r ||
              r.m_strState != "loaded" ||
              this.m_mapTimelineEntries.set(t, {
                rgGameModes: r.m_rgGameModeChanges,
                rgHighlights: r.m_rgEntries,
              });
          }
          GetVisibleTimelineGameModes(t) {
            return this.m_mapTimelineEntries.get(t)?.rgGameModes;
          }
          GetVisibleTimelineHighlights(t) {
            return this.m_mapTimelineEntries.get(t)?.rgHighlights;
          }
          GetStateDescriptionAtGlobalMS(t) {
            return this.m_timelineMask.GetStateDescriptionAtGlobalMS(t);
          }
          FindRangeEventsAtGlobalMS(t) {
            return this.m_timelineMask.FindRangeEventsAtGlobalMS(t);
          }
          GetTimelineOffsetMS(t) {
            return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(t);
          }
          ScrollToCenteredGlobalMS(t) {
            const r = this.ConvertGlobalMSToGlobalPXOffset(t);
            this.ScrollToOffsetCentered(r);
          }
          ScrollToOffset(t) {
            this.m_scrollLeftPX = (0, et.OQ)(t, 0, this.GetMaxScrollLeftPX());
          }
          ScrollToOffsetCentered(t) {
            const r = Math.max(0, t - 0.5 * this.m_scrollWindowWidth);
            this.ScrollToOffset(r);
          }
          ScrollBy(t) {
            const r = this.m_scrollLeftPX + t;
            this.ScrollToOffset(r);
          }
          GetAutoScrollPaused() {
            return this.m_bAutoScrollPaused;
          }
          SetAutoScrollPaused(t) {
            this.ClearAutoScrollPauseTimeout(), (this.m_bAutoScrollPaused = t);
          }
          GetAutoScrollPauseTimeout() {
            return this.m_autoScrollPauseTimeout;
          }
          ClearAutoScrollPauseTimeout() {
            this.m_autoScrollPauseTimeout &&
              clearTimeout(this.m_autoScrollPauseTimeout),
              (this.m_autoScrollPauseTimeout = null);
          }
          SetAutoScrollPauseTimeout(t = On) {
            this.ClearAutoScrollPauseTimeout(),
              (this.m_autoScrollPauseTimeout = window.setTimeout(() => {
                this.SetAutoScrollPaused(!1);
              }, t));
          }
          ScrollToEnd() {
            this.ScrollToOffset(this.GetMaxScrollLeftPX());
          }
          SetScrollWindowWidth(t) {
            (this.m_scrollWindowWidth = t),
              this.m_timelineMask.BInitialized() &&
                (this.ScrollToOffset(this.m_scrollLeftPX),
                this.InitDefaultsIfReady());
          }
          SetScrollWindowOffset(t) {
            this.m_scrollWindowOffsetPX = t;
          }
          GetScrollWindowOffset() {
            return this.m_scrollWindowOffsetPX;
          }
          GetScrollableWidthPX() {
            if (!this.m_rgTimelineOffsets?.length) return 0;
            const t = this.m_rgTimelineOffsets.length - 1,
              r = this.m_rgTimelineOffsets[t];
            return (
              t * Cr +
              this.ConvertDurationMSToDeltaPX(r.globalOffsetMS + r.nDurationMS)
            );
          }
          GetOverscanWidth() {
            return (this.GetScrollWindowWidth() * xn) / 100;
          }
          GetScrollWindowWidth() {
            return this.m_scrollWindowWidth;
          }
          GetMaxScrollLeftPX() {
            return Math.max(
              0,
              this.GetScrollableWidthPX() -
                this.GetScrollWindowWidth() +
                2 * this.GetTimelineMarginWidth(),
            );
          }
          BReachedMaxScroll() {
            return (
              Math.ceil(this.m_scrollLeftPX) ===
              Math.ceil(this.GetMaxScrollLeftPX())
            );
          }
          BReachedMinScroll() {
            return this.m_scrollLeftPX === 0;
          }
          GetVisualWindowStartPX() {
            return this.m_scrollLeftPX;
          }
          GetVisualWidth() {
            return Math.min(
              this.m_scrollWindowWidth,
              this.GetScrollableWidthPX() + 2 * this.GetTimelineMarginWidth(),
            );
          }
          GetVirtualWindowStartPX() {
            return Math.max(this.m_scrollLeftPX - this.GetOverscanWidth(), 0);
          }
          GetVirtualWindowWidthPX() {
            const t = (0, et.OQ)(
                this.m_scrollLeftPX,
                0,
                this.GetOverscanWidth(),
              ),
              r = Math.min(
                this.GetScrollableWidthPX() -
                  (this.m_scrollLeftPX + this.m_scrollWindowWidth),
                this.GetOverscanWidth(),
              );
            return t + this.m_scrollWindowWidth + r;
          }
          GetVirtualWindowEndPX() {
            return (
              this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX()
            );
          }
          GetVisibleTimelines() {
            const t =
                this.FindIndexOfClosestTimelineEndForOffsetPX(
                  this.GetVirtualWindowStartPX(),
                ) + 1,
              r = this.FindIndexOfClosestTimelineStartForOffsetPX(
                this.GetVirtualWindowEndPX(),
              );
            return this.m_rgTimelineOffsets.slice(t, r + 1).map((n) => {
              const l = Math.max(
                  n.globalOffsetMS,
                  this.ConvertPXOffsetToGlobalMS(
                    this.GetVirtualWindowStartPX(),
                  ),
                ),
                u = Math.min(
                  n.nDurationMS - (l - n.globalOffsetMS),
                  this.ConvertDeltaPXToDurationMS(
                    this.GetVirtualWindowWidthPX(),
                  ),
                ),
                m = this.ConvertGlobalMSToGlobalPXOffset(l),
                f = this.ConvertDurationMSToDeltaPX(u),
                h = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS),
                b = this.ConvertDurationMSToDeltaPX(n.nDurationMS);
              return {
                ...n,
                pxStart: h,
                pxDuration: b,
                msVisibleStart: l,
                msVisibleDuration: u,
                pxVisibleStart: m,
                pxVisibleDuration: f,
              };
            });
          }
          GetVisibleRecordings() {
            const t = [];
            return (
              this.GetVisibleTimelines().forEach((r) => {
                r.recordingOffsets.forEach((n) => {
                  const l =
                      r.pxStart + this.GetPXForDuration(n.timelineOffsetMS),
                    u = l + this.GetPXForDuration(n.nDurationMS);
                  u < this.GetVirtualWindowStartPX() ||
                    l > this.GetVirtualWindowEndPX() ||
                    t.push({
                      recordingID: n.recordingID,
                      nStartPX: l,
                      nEndPX: u,
                      bIsActive: n.bIsActive,
                      recordingType: n.recordingType,
                    });
                });
              }),
              t
            );
          }
          GetVisibleClips() {
            const t = [];
            return (
              this.GetVisibleTimelines().forEach((r) => {
                const n = this.ConvertGlobalMSToGlobalPXOffset(
                  r.globalOffsetMS,
                );
                this.GetClipsForTimeline(r.timelineID).forEach((l) => {
                  const u = n + this.GetPXForDuration(l.msTimelineOffset),
                    m = Math.min(
                      this.GetVirtualWindowEndPX(),
                      this.ConvertGlobalMSToGlobalPXOffset(
                        r.globalOffsetMS + l.msTimelineOffset + l.msDuration,
                      ),
                    );
                  m < this.GetVirtualWindowStartPX() ||
                    u > this.GetVirtualWindowEndPX() ||
                    t.push({ clipID: l.clipID, pxClipStart: u, pxClipEnd: m });
                });
              }),
              t
            );
          }
          GetPXForDuration(t) {
            return t / this.GetCurrentZoomScale();
          }
          GetVisibleTimelinesInWindow() {
            const t =
                this.FindIndexOfClosestTimelineEndForOffsetPX(
                  this.m_scrollLeftPX,
                ) + 1,
              r = this.FindIndexOfClosestTimelineStartForOffsetPX(
                this.m_scrollLeftPX + this.m_scrollWindowWidth,
              );
            return this.m_rgTimelineOffsets.slice(t, r + 1);
          }
          GetVisibleWindowRelativeTimelines() {
            return this.GetVisibleTimelinesInWindow().map((t) => {
              const r = this.m_scrollLeftPX,
                n = this.GetVirtualWindowEndPX() - this.GetOverscanWidth(),
                l = this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS),
                u = l + this.ConvertDurationMSToDeltaPX(t.nDurationMS),
                m = Math.max(l, r),
                f = Math.min(u, n);
              return {
                timelineID: t.timelineID,
                nVisibleStartPX: m,
                nEndPX: f,
                nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(r),
                nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(r),
              };
            });
          }
          ConvertPXToTimelineRelativeMS(t, r = "start") {
            const n = this.ConvertPXOffsetToGlobalMS(t);
            let l = this.m_timelineMask.GetTimelineOffsetFromGlobal(n, 0);
            return r == "end-if-active" &&
              l.strTimelineID &&
              this.m_timelineMask.IsActiveTimeline(l.strTimelineID)
              ? this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
                  l.strTimelineID,
                  l.nTimelineOffsetMS.valMS,
                )
              : l.nTimelineOffsetMS.valMS;
          }
          GetTimeRecorded(t) {
            return this.m_timelineMask.GetTimelineStartTime(t);
          }
          ConvertGlobalMSToClipOrNone(t) {
            if (!this.m_timelineMask) return null;
            const r = this.m_timelineMask.GetTimelineOffsetFromGlobal(t, 0);
            if (!r) return null;
            const { nTimelineOffsetMS: n, strTimelineID: l } = r;
            return l && this.m_mapTimelineClips.has(l)
              ? this.m_mapTimelineClips
                  .get(l)
                  .find(
                    (m) =>
                      m.msTimelineOffset <= n.valMS &&
                      m.msTimelineOffset + m.msDuration >= n.valMS,
                  )
              : null;
          }
          ConvertGlobalMSToScrollWindowPXOffset(t) {
            return (
              this.ConvertGlobalMSToGlobalPXOffset(t) - this.m_scrollLeftPX
            );
          }
          ConvertGlobalMSToGlobalPXOffset(t, r = -1) {
            r < 0 &&
              (r = $r.rJ(
                this.m_rgTimelineOffsets,
                (l) => t - l.globalOffsetMS,
              ));
            const n = r * Cr;
            return this.ConvertDurationMSToDeltaPX(t) + n;
          }
          ConvertPXOffsetToGlobalMS(t, r = !0) {
            if (this.BPositionInGap(t)) {
              if (!r) return null;
              const m = this.FindClosestTimelineEndForOffsetPX(t);
              return m ? m.globalOffsetMS + m.nDurationMS : 0;
            }
            const n = this.FindClosestTimelineStartForOffsetPX(t);
            if (!n) return null;
            const l = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS),
              u = this.ConvertDeltaPXToDurationMS(t - l);
            return n.globalOffsetMS + u;
          }
          FindClosestTimelineEndForOffsetPX(t) {
            const r = this.FindIndexOfClosestTimelineEndForOffsetPX(t);
            return r < 0 ? null : this.m_rgTimelineOffsets[r];
          }
          FindClosestTimelineStartForOffsetPX(t) {
            const r = this.FindIndexOfClosestTimelineStartForOffsetPX(t);
            return r < 0 ? null : this.m_rgTimelineOffsets[r];
          }
          FindIndexOfClosestTimelineEndForOffsetPX(t) {
            return $r.rJ(this.m_rgTimelineOffsets, (r) => {
              const l =
                this.ConvertGlobalMSToGlobalPXOffset(r.globalOffsetMS) +
                this.ConvertDurationMSToDeltaPX(r.nDurationMS);
              return t - l;
            });
          }
          FindIndexOfClosestTimelineStartForOffsetPX(t) {
            return $r.rJ(this.m_rgTimelineOffsets, (r) => {
              const n = this.ConvertGlobalMSToGlobalPXOffset(r.globalOffsetMS);
              return t - n;
            });
          }
          FindTimelineOffsets(t) {
            return this.m_rgTimelineOffsets.find((r) => r.timelineID === t);
          }
          BPositionInGap(t) {
            const r = this.FindIndexOfClosestTimelineEndForOffsetPX(t);
            if (r < 0) return !1;
            const n = r + 1;
            if (n >= this.m_rgTimelineOffsets.length) return !1;
            const l = this.m_rgTimelineOffsets[r],
              u = this.m_rgTimelineOffsets[n],
              m = this.ConvertGlobalMSToGlobalPXOffset(l.globalOffsetMS),
              f = this.ConvertGlobalMSToGlobalPXOffset(u.globalOffsetMS);
            return t < f && t !== m;
          }
          ConvertDurationMSToDeltaPX(t) {
            return t / this.GetCurrentZoomScale();
          }
          ConvertDeltaPXToDurationMS(t) {
            return t * this.GetCurrentZoomScale();
          }
          SetPhaseToHighlight(t) {
            this.m_phaseToHighlight = t;
          }
          GetPhaseToHighlight() {
            return this.m_phaseToHighlight;
          }
        }
        Ct([q.sH], Ht.prototype, "m_durationMS", 2),
          Ct([q.sH], Ht.prototype, "m_scrollLeftPX", 2),
          Ct([q.sH], Ht.prototype, "m_scrollWindowWidth", 2),
          Ct([q.sH], Ht.prototype, "m_scrollWindowOffsetPX", 2),
          Ct([q.sH], Ht.prototype, "m_bAutoScrollPaused", 2),
          Ct([q.sH], Ht.prototype, "m_autoScrollPauseTimeout", 2),
          Ct([q.sH], Ht.prototype, "m_msVisible", 2),
          Ct([q.sH.ref], Ht.prototype, "m_rgTimelineOffsets", 2),
          Ct([q.sH], Ht.prototype, "m_bInitialized", 2),
          Ct([q.sH], Ht.prototype, "m_eThumbnailComponent", 2),
          Ct([q.sH], Ht.prototype, "m_nGlobalRelativeThumbnailPositionPX", 2),
          Ct([q.sH], Ht.prototype, "m_thumbnailHighlightEntry", 2),
          Ct([q.sH], Ht.prototype, "m_phaseToHighlight", 2),
          Ct([q.XI], Ht.prototype, "OnLoaderInitialized", 1),
          Ct([q.XI], Ht.prototype, "InitDefaultsIfReady", 1),
          Ct([q.XI], Ht.prototype, "OnInvalidate", 1),
          Ct([q.XI], Ht.prototype, "ZoomIn", 1),
          Ct([q.XI], Ht.prototype, "ZoomOut", 1),
          Ct([q.XI], Ht.prototype, "SetTempZoomScale", 1),
          Ct([q.XI], Ht.prototype, "ClearTempZoomScale", 1),
          Ct([q.XI], Ht.prototype, "UpdateClipSummaries", 1),
          Ct([be.oI], Ht.prototype, "BReachedMaxScroll", 1),
          Ct([be.oI], Ht.prototype, "BReachedMinScroll", 1);
        const qi = M.createContext(null);
        function jn(s) {
          let {
              loader: t,
              playbackCoordinator: r,
              children: n,
              clipSummaries: l,
              refTimelineParentCtn: u,
            } = s,
            [m, f] = (0, M.useState)(null);
          return (
            (0, M.useEffect)(() => {
              if (!t) return;
              let h = new Ht(t, r, l);
              return f(h), () => h.Close();
            }, [t]),
            (0, M.useEffect)(() => {
              m && m.UpdateClipSummaries(l);
            }, [m, l]),
            (0, M.useEffect)(() => {
              m && u && m.SetTimelineParentCtnRef(u.current);
            }, [m, u]),
            En(m),
            Dn(m),
            m ? (0, c.jsx)(qi.Provider, { value: m, children: n }) : null
          );
        }
        function Dn(s) {
          let t = M.useCallback(
            (r, n) => {
              if (!s) return;
              if (!r || !n) {
                s.ClearTempZoomScale();
                return;
              }
              let l = Math.floor((n.valMS - r.valMS) * 0.1),
                u = n.valMS - r.valMS;
              u < Yi * 0.9 && (l = Math.floor((Yi - u) / 2));
              let m = r.valMS - l,
                f = n.valMS + l;
              s.SetTempZoomScale(m, f);
            },
            [s],
          );
          Tn(t);
        }
        function En(s) {
          let t = li();
          (0, M.useEffect)(() => {
            s && s.SetUserIsClipping(t);
          }, [s, t]);
        }
        function Te() {
          return (0, M.useContext)(qi);
        }
        var Gr = E(59254);
        const $i = 20,
          Pn = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
          Wn = M.memo(function (t) {
            const r = Te(),
              n = (0, U.q3)(() => r.GetVisibleTimelines());
            return (0, c.jsx)(c.Fragment, {
              children: n.map((l) =>
                (0, c.jsx)(
                  Fn,
                  {
                    msVisibleStart: l.msVisibleStart,
                    pxVisibleDuration: l.pxVisibleDuration,
                    pxVisibleStart: l.pxVisibleStart,
                    msTimelineStart: l.globalOffsetMS,
                  },
                  l.timelineID,
                ),
              ),
            });
          }),
          Fn = M.memo(function (t) {
            const {
                msVisibleStart: r,
                msTimelineStart: n,
                pxVisibleDuration: l,
                pxVisibleStart: u,
              } = t,
              { msTickSpacing: m, pxTickSpacing: f } = Nn(),
              h = Te(),
              b = Math.ceil((r - n) / m),
              y = n + b * m,
              w = h.ConvertGlobalMSToGlobalPXOffset(y),
              D = (0, M.useMemo)(() => {
                const W = Math.ceil(l / f),
                  X = [];
                for (let V = 0; V < W; V++) {
                  const A = y + m * V,
                    K = w + V * f,
                    ne = `${A}`;
                  X.push({
                    key: ne,
                    offsetPX: K,
                    iTimelineRelativeTick: b + V,
                  });
                }
                return X;
              }, [l, f, y, m, w, b]);
            return D
              ? (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)("div", {
                      className: Gr.TimelineBacking,
                      style: { transform: `translateX(${u}px)`, width: l },
                    }),
                    D.map((W) =>
                      (0, c.jsx)(
                        Ln,
                        {
                          timelineRelativeIndex: W.iTimelineRelativeTick,
                          globalOffsetPX: W.offsetPX,
                        },
                        W.key,
                      ),
                    ),
                  ],
                })
              : null;
          });
        function Ln(s) {
          const { globalOffsetPX: t, timelineRelativeIndex: r } = s,
            l = r % $i === 0 ? Gr.Major : Gr.Minor;
          return (0, c.jsx)("div", {
            className: Gr.TimeTick,
            style: { transform: `translateX(${t}px)` },
            children: (0, c.jsx)("div", {
              className: (0, Q.A)(Gr.TickLine, l),
            }),
          });
        }
        function Nn() {
          const s = Te(),
            t = (0, U.q3)(() => s.GetCurrentZoomScale()),
            r = 300,
            n = (f) => Math.abs(r - f / t),
            u = Pn.reduce((f, h) => (n(f) - n(h) < 0 ? f : h)) / $i,
            m = u / t;
          return { msTickSpacing: u, pxTickSpacing: m };
        }
        var Kr = E(23533),
          B = E(67721),
          o = E(20525);
        const ae = "steam_";
        var L = ((s) => (
          (s[(s.White = 0)] = "White"),
          (s[(s.Red = 1)] = "Red"),
          (s[(s.Orange = 2)] = "Orange"),
          (s[(s.Yellow = 3)] = "Yellow"),
          (s[(s.Green = 4)] = "Green"),
          (s[(s.Blue = 5)] = "Blue"),
          (s[(s.Purple = 6)] = "Purple"),
          (s[(s.Brown = 7)] = "Brown"),
          (s[(s.Gray = 8)] = "Gray"),
          s
        ))(L || {});
        function Un(s) {
          switch (s) {
            default:
            case 0:
              return "#DCDEDF";
            case 1:
              return "#FB7C7C";
            case 2:
              return "#FBB17C";
            case 3:
              return "#FBDF7C";
            case 4:
              return "#9DFB7C";
            case 5:
              return "#7CD5FB";
            case 6:
              return "#A57CFB";
            case 7:
              return "#C18C5B";
            case 8:
              return "#B8BCBF";
          }
        }
        function _o(s) {
          if (!s) return 0;
          const t = s.toLowerCase(),
            r = Ia(L);
          for (const n of r) if (n.toLowerCase() == t) return L[n];
          return 0;
        }
        function ec(s) {
          return L[s].toLowerCase();
        }
        function Ia(s) {
          return Object.keys(s).filter((t) => !Number.isNaN(t));
        }
        const os = Ia(L).map((s) => L[s]);
        class Jr {
          m_mapSteamTimelineMarkers = new Map();
          GetMarkerByID(t) {
            const r = t.toLowerCase().startsWith(ae)
              ? t.slice(ae.length).toLowerCase()
              : t.toLowerCase();
            if (this.m_mapSteamTimelineMarkers.has(r))
              return this.m_mapSteamTimelineMarkers.get(r);
            const n = parseInt(r);
            return typeof n == "number" && n >= 0 && n <= 99
              ? { func: (l) => o.wN({ nNumber: n }), color: 8 }
              : Oa();
          }
          GetAllUseableMarkerID() {
            return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
              (t) => ae + t,
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Jr.s_Singleton ||
                ((Jr.s_Singleton = new Jr()), Jr.s_Singleton.Init()),
              Jr.s_Singleton
            );
          }
          AddMarker(t, r, n) {
            const l = n ?? 0;
            this.m_mapSteamTimelineMarkers.set(t, { func: r, color: l });
            for (const u of os) {
              const m = `${t}_${L[u]}`.toLowerCase();
              this.m_mapSteamTimelineMarkers.set(m, { func: r, color: u });
            }
          }
          Init() {
            this.AddMarker("explosion", o.Wq, 8),
              this.AddMarker("attack", o.LB, 8),
              this.AddMarker("defend", o.po, 8),
              this.AddMarker("combat", o.t4, 8),
              this.AddMarker("chest", o.k8, 8),
              this.AddMarker("view", o.Ss, 8),
              (0, Ye.Y2)()
                ? this.AddMarker("death", o.X, 8)
                : this.AddMarker("death", o.lQ, 8),
              this.AddMarker("x", o.X, 8),
              this.AddMarker("plus", o.FW, 8),
              this.AddMarker("minus", o.Hs, 8),
              this.AddMarker("info", o.R2, 8),
              this.AddMarker("bolt", o.y$, 8),
              this.AddMarker("caution", o.eT, 8),
              this.AddMarker("completed", o.AY, 8),
              this.AddMarker("checkmark", o.MG, 8),
              this.AddMarker("effect", o.Mj, 8),
              this.AddMarker("purchase", o.QY, 8),
              this.AddMarker("ribbon", o.y4, 8),
              this.AddMarker("scroll", o.OY, 8),
              this.AddMarker("crown", o.Oe, 8),
              this.AddMarker("starburst", o.bL, 8),
              this.AddMarker("flag", o.lN, 8),
              this.AddMarker("cart", o.Z3, 8),
              this.AddMarker("timer", o.M4, 8),
              this.AddMarker("chat", o.ry, 8),
              this.AddMarker("wrench", o.Ml, 8),
              this.AddMarker("transfer", o.mr, 8),
              this.AddMarker("edit", o.ff, 8),
              this.AddMarker("bookmark", o.Xh, 8),
              this.AddMarker("invalid", o.WO, 8),
              this.AddMarker("star", o.FE, 8),
              this.AddMarker("circle", o.jl, 8),
              this.AddMarker("square", o.M6, 8),
              this.AddMarker("triangle", o.lM, 8),
              this.AddMarker("heart", o.B1, 8),
              this.AddMarker("diamond", o.JB, 8),
              this.AddMarker("gem", o.gD, 8),
              this.AddMarker("group", o.YJ, 8),
              this.AddMarker("pair", o.Rm, 8),
              this.AddMarker("single", o.KJ, 8),
              this.AddMarker("trophy", o.Oi, 8),
              this.AddMarker("achievement", o.Oi, 8),
              this.AddMarker("screenshot", o.pw, 8),
              this.AddMarker("bug", o.zP, 8),
              this.AddMarker("fix", o.Ml, 8),
              this.AddMarker("person", o.KJ, 8),
              this.AddMarker("question", o.O_, 8);
          }
        }
        function tc() {
          return Jr.Get().GetAllUseableMarkerID();
        }
        function Hn(s) {
          return Jr.Get().GetMarkerByID(s);
        }
        function cs() {
          return { func: o.pH, color: 5 };
        }
        function us() {
          return { func: o.Oi, color: 0 };
        }
        function Oa() {
          return { func: o.pH, color: 8 };
        }
        function za(s) {
          return s && s.toLowerCase().startsWith(ae);
        }
        var Ti = E(34843),
          Yr = E(95896);
        function ms(s) {
          let {
            entry: t,
            strMarkerIcon: r,
            onClick: n,
            onMouseEnter: l,
            onMouseLeave: u,
            onContextMenu: m,
            classNames: f,
            style: h,
            faded: b,
            bSelectedMarker: y,
          } = s;
          return (0, c.jsx)("div", {
            style: h ?? {},
            className: (0, Q.A)(f, {
              [Yr.HighlightIcon]: !0,
              [Yr.Selected]: y,
              [Yr.Faded]: b,
            }),
            onClick: (w) => {
              n && n(w);
            },
            onContextMenu: m,
            onMouseEnter: l,
            onMouseLeave: u,
            children: (0, c.jsx)(xa, { entry: t, strMarkerIcon: r }),
          });
        }
        function xa(s) {
          let { entry: t, strMarkerIcon: r } = s;
          const l = Ke().GetGameID();
          return (0, B.xz)(t)
            ? (0, c.jsx)(fs, { achievementEntry: t, strGameID: l })
            : (0, B.In)(t)
              ? (0, c.jsx)(Ms, {})
              : za(r)
                ? (0, c.jsx)(ds, { entry: t, strMarkerIcon: r })
                : (0, c.jsx)(bs, { strMarkerIcon: r, strGameID: l });
        }
        function fs(s) {
          const { achievementEntry: t, strGameID: r } = s,
            n = new Ti.VS(r),
            l = Ei(n.GetAppID(), t.achievement_name);
          let u, m;
          if (l) (u = "white"), (m = (0, c.jsx)("img", { src: l.iconURL }));
          else {
            const f = us();
            (u = Un(f.color)), (m = f.func({}));
          }
          return (0, c.jsx)("div", {
            className: Yr.Marker,
            style: { color: u },
            children: m,
          });
        }
        function ds(s) {
          const { entry: t, strMarkerIcon: r } = s;
          let n, l;
          (0, B.N$)(t) ? ((n = cs()), (l = Yr.CustomMarker)) : (n = Hn(r));
          const u = Un(n.color);
          return (0, c.jsx)(Xn, {
            color: u,
            children: (0, c.jsx)("div", { className: l, children: n.func({}) }),
          });
        }
        function hs(s) {
          const { icon: t, className: r } = s;
          return Hn(t).func({ className: r });
        }
        function Ms(s) {
          const t = Hn("steam_invalid"),
            r = Un(t.color);
          return (0, c.jsx)(Xn, {
            color: r,
            children: (0, c.jsx)("div", { children: t.func({}) }),
          });
        }
        function bs(s) {
          const { strMarkerIcon: t, strGameID: r } = s;
          return (0, c.jsx)(Xn, {
            children: (0, c.jsx)(ka, { icon: t, gameID: r }),
          });
        }
        function ka(s) {
          const { icon: t, gameID: r, className: n } = s,
            l = new Ti.VS(r).GetAppID(),
            u = Rt(l, t);
          if (za(t)) return (0, c.jsx)(hs, { ...s });
          if (u === null) return null;
          if (u === void 0) {
            const f = Oa();
            return (0, c.jsx)("div", { className: n, children: f.func({}) });
          }
          let m = "";
          return (
            typeof u != "string"
              ? (m = new XMLSerializer().serializeToString(u))
              : (m = u),
            (0, c.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              className: (0, Q.A)(n, Yr.GameMarkerSVG),
              children: (0, c.jsx)("g", {
                dangerouslySetInnerHTML: { __html: m },
              }),
            })
          );
        }
        function Xn(s) {
          const { children: t, color: r } = s;
          return (0, c.jsx)("div", {
            className: Yr.MarkerCtn,
            children: (0, c.jsx)("div", {
              className: Yr.Marker,
              style: r ? { color: r } : null,
              children: t,
            }),
          });
        }
        function gs(s, t) {
          return !(s.nStart >= t.nEnd || s.nEnd <= t.nStart);
        }
        class ps {
          m_reservations = [];
          m_nIconWidth;
          constructor(t) {
            this.m_nIconWidth = t;
          }
          BAllowIcon(t) {
            const r = {
              nStart: t - this.m_nIconWidth / 2,
              nEnd: t + this.m_nIconWidth / 2,
            };
            let n = 0;
            for (; n < this.m_reservations.length; n++) {
              const l = this.m_reservations[n];
              if (l.nStart >= r.nEnd) break;
              if (gs(r, l)) return !1;
            }
            return this.m_reservations.splice(n, 0, r), !0;
          }
        }
        var Dr = E(99047),
          ja = E(16346);
        const Da = (0, M.createContext)({});
        function rc(s) {
          const {
              children: t,
              onMarkerCreated: r,
              onNavigateToClip: n,
              onNavigateToScreenshot: l,
              onSetGamepadHeaderVisible: u,
              onShowProgressBar: m,
              onNavigateToGRSettings: f,
              onNavigateToMedia: h,
              onNavigateToFAQ: b,
              onShowError: y,
            } = s,
            w = useMemo(
              () => ({
                onMarkerCreated: r,
                onNavigateToClip: n,
                onNavigateToGRSettings: f,
                onNavigateToScreenshot: l,
                onSetGamepadHeaderVisible: u,
                onShowProgressBar: m,
                onNavigateToMedia: h,
                onNavigateToFAQ: b,
                onShowError: y,
              }),
              [n, r, l, u, m, f, h, b, y],
            );
          return jsx(Da.Provider, { value: w, children: t });
        }
        function wi() {
          return (0, M.useContext)(Da);
        }
        var gr = E(41972),
          Ii = E(249);
        function Ea(s) {
          const {
              closeModal: t,
              strTimelineID: r,
              entry: n,
              playbackCoordinator: l,
              fnClearSelection: u,
            } = s,
            [m, f] = M.useState(n.title || ""),
            [h, b] = M.useState(n.description || ""),
            y = (0, ke.vs)();
          return y.bLoading
            ? (0, c.jsx)(ke.Hh, {
                state: y,
                strDialogTitle: (0, S.we)("#Marker_Dialog"),
                closeModal: t,
              })
            : (0, c.jsxs)(Ue.o0, {
                strTitle: (0, S.we)("#Marker_Dialog"),
                strMiddleButtonText: (0, S.we)("#Marker_Action_Delete"),
                onCancel: t,
                onOK: async () => {
                  y.fnSetLoading(!0),
                    (await l.UpdateUserMarker(r, n, m, h))
                      ? t()
                      : (y.fnSetError(!0),
                        y.fnSetStrError((0, S.we)("#Marker_UpdateFailed")));
                },
                children: [
                  (0, c.jsx)(C.pd, {
                    type: "text",
                    value: m,
                    onChange: (w) => f(w.currentTarget.value),
                    label: (0, S.we)("#Marker_Title"),
                  }),
                  (0, c.jsx)(C.pd, {
                    type: "text",
                    value: h,
                    onChange: (w) => b(w.currentTarget.value),
                    label: (0, S.we)("#Marker_Description"),
                  }),
                ],
              });
        }
        var mr = E(54637),
          ys = Object.defineProperty,
          Ss = Object.getOwnPropertyDescriptor,
          Qi = (s, t, r, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Ss(t, r) : t, u = s.length - 1, m;
              u >= 0;
              u--
            )
              (m = s[u]) && (l = (n ? m(t, r, l) : m(l)) || l);
            return n && l && ys(t, r, l), l;
          };
        const Bs = null;
        async function ic(s, t, r, n, l) {
          const u = t.GetTimelineAndOffsetRelativeToCurrentPlayback(),
            m = t.GetTimelineAndOffsetRelativeToCurrentPlayback(Bs);
          if (u && m) {
            const f = m.nGlobalOffsetMS - u.nGlobalOffsetMS,
              h = await t.GenerateClipNameFromTimeline(
                u.strTimelineID,
                u.nTimelineOffsetMS,
                m.strTimelineID,
                m.nTimelineOffsetMS,
              );
            return Vn(
              s,
              t.GetClipID(),
              h,
              u.strTimelineID,
              u.nTimelineOffsetMS,
              m.strTimelineID,
              m.nTimelineOffsetMS,
              f,
              r,
              n,
              l,
            );
          } else LogWarning("Failed to determine time start/end for clip");
          return null;
        }
        async function nc(s, t, r, n, l, u, m) {
          if (!isNaN(n) && !isNaN(r) && r < n) {
            const f = t.ConvertGlobalOffsetToTimelineRelativeOffset(r),
              h = t.ConvertGlobalOffsetToTimelineRelativeOffset(n);
            if (f && h) {
              const b = n - r,
                y = await t.GenerateClipNameFromTimeline(
                  f.strTimelineID,
                  f.nTimelineOffsetMS.valMS,
                  h.strTimelineID,
                  h.nTimelineOffsetMS.valMS,
                );
              return Vn(
                s,
                t.GetClipID(),
                y,
                f.strTimelineID,
                f.nTimelineOffsetMS.valMS,
                h.strTimelineID,
                h.nTimelineOffsetMS.valMS,
                b,
                l,
                u,
                m,
              );
            } else
              LogWarning("Could not find the timeline for start or stop", f, h);
          } else LogWarning("Range not setup for creating the clip");
          return null;
        }
        class An {
          m_bCreationWasTemporary;
          m_fnCreate;
          m_creationResult;
          m_bCleanedUp = !1;
          m_nClipLengthSeconds;
          m_strSuggestedClipName;
          m_strGameID;
          m_strSrcClipID;
          m_eInitMethod;
          m_startMetrics;
          m_endMetrics;
          constructor(t, r, n, l, u, m, f, h) {
            (this.m_fnCreate = t),
              (this.m_nClipLengthSeconds = r),
              (this.m_strSuggestedClipName = n),
              (this.m_strGameID = l),
              (this.m_strSrcClipID = u),
              (this.m_eInitMethod = m),
              (this.m_startMetrics = f),
              (this.m_endMetrics = h);
          }
          Request() {
            return {
              create: this.create,
              cleanup: this.cleanup,
              bExistingClip: !1,
              nClipLengthSeconds: this.m_nClipLengthSeconds,
              strSuggestedClipName: this.m_strSuggestedClipName,
              gameID: new Ti.VS(this.m_strGameID),
              strSrcClipID: this.m_strSrcClipID,
              eInitMethod: this.m_eInitMethod,
              startMetrics: this.m_startMetrics,
              endMetrics: this.m_endMetrics,
            };
          }
          async create(t, r) {
            return this.m_creationResult
              ? Promise.resolve(this.m_creationResult)
              : ((this.m_creationResult = await this.m_fnCreate(t, r)),
                (this.m_bCreationWasTemporary = t),
                an(
                  new Ti.VS(this.m_strGameID),
                  this.m_eInitMethod,
                  this.m_nClipLengthSeconds,
                  this.m_startMetrics,
                  this.m_endMetrics,
                ),
                Promise.resolve(this.m_creationResult));
          }
          async cleanup() {
            if (this.m_bCleanedUp)
              throw new Error("cleanup called twice on clip creation");
            if (
              ((this.m_bCleanedUp = !0),
              this.m_creationResult?.clipSummary &&
                this.m_bCreationWasTemporary)
            ) {
              const { fnDeleteClip: t } = jr();
              await t(this.m_creationResult.clipSummary.clip_id);
            }
          }
        }
        Qi([be.oI], An.prototype, "create", 1),
          Qi([be.oI], An.prototype, "cleanup", 1);
        function Vn(s, t, r, n, l, u, m, f, h, b, y) {
          const w = (D, W) => vs(s, t, r, n, l, u, m, D, W);
          return new An(w, f / 1e3, r, s, t, h, b, y).Request();
        }
        function ac(s) {
          const t = GetClipSummary(s);
          if (!t) return null;
          const r = GetGRS().GetClipExportProgress(s),
            n = parseInt(t.duration_ms) / 1e3,
            l = t.file_size ? (parseInt(t.file_size) * 8) / (1024 * n) : void 0;
          class u {
            m_bCreated = !1;
            async create(h) {
              return (
                this.m_bCreated ||
                  ((this.m_bCreated = !0),
                  ReportClipRange(
                    new CGameID(t.game_id),
                    EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    parseInt(t.duration_ms) / 1e3,
                    {
                      relativeMS: 0,
                      originalRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                      latestRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    },
                    {
                      relativeMS: 0,
                      originalRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                      latestRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    },
                  )),
                Promise.resolve({ result: k_EResultOK, clipSummary: t })
              );
            }
            async cleanup() {
              return Promise.resolve();
            }
          }
          Qi([bind], u.prototype, "create", 1),
            Qi([bind], u.prototype, "cleanup", 1);
          let m = new u();
          return {
            create: m.create,
            cleanup: m.cleanup,
            nClipLengthSeconds: n,
            bExistingClip: !0,
            strSuggestedClipName: t.name,
            strCurrentExportPath: r?.exportPath,
            strSrcClipID: s,
            gameID: new CGameID(t.game_id),
            nEstimatedBitrateKbps: l,
            eInitMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            startMetrics: {
              relativeMS: 0,
              originalRangeMethod:
                EClipRangeMethod.k_EClipRangeMethod_EntireClip,
              latestRangeMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            },
            endMetrics: {
              relativeMS: 0,
              originalRangeMethod:
                EClipRangeMethod.k_EClipRangeMethod_EntireClip,
              latestRangeMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            },
          };
        }
        async function vs(s, t, r, n, l, u, m, f, h) {
          const { fnSaveClip: b } = kr();
          (0, Me.tG)(`start ${n} @ ${l} upto ${u} @ ${m}`);
          try {
            const y = await b(
                s,
                t,
                r,
                { timeline_id: n, offset_ms: "" + l },
                { timeline_id: u, offset_ms: "" + m },
                f,
                h,
              ),
              { clipSummary: w, result: D } = y;
            return (
              w
                ? (0, Me.tG)(`Clip ${w.clip_id} created`)
                : (0, Me.tG)(`Clip was not created: ${D}`),
              y
            );
          } catch (y) {
            (0, Me.ZI)(y);
          }
          return { result: H.zi };
        }
        const Pa = 20,
          Kn = "PhaseList";
        function Ts(s) {
          const t = s.tags || {};
          return {
            filter_gameid: s.gameid,
            filter_search_string: s.strSearch || void 0,
            filter_tags: Object.keys(t).map((r) => ({ group: r, name: t[r] })),
            filter_phase_id: s.phaseID,
          };
        }
        function sc(s = {}) {
          ws();
          const t = Ts(s);
          return useInfiniteQuery({
            queryKey: [Kn, "Query", t],
            queryFn: async (r) => {
              const l = (
                await GameRecordingService.QueryPhases({
                  count: Pa,
                  page: r.pageParam,
                  ...t,
                })
              )
                .Body()
                .toObject();
              if (s.strSearch && s.strSearch.trim()) {
                const u = s.strSearch.toLowerCase();
                for (const m of l.phases)
                  for (const f of m.tags)
                    f.bFilterMatch = f.name.toLowerCase().indexOf(u) > -1;
              }
              return {
                ...l,
                nextPage: l.phases.length === Pa ? r.pageParam + 1 : null,
              };
            },
            initialPageParam: 0,
            getNextPageParam: (r) => r.nextPage,
          });
        }
        function ws() {
          const s = useQueryClient();
          useEffect(() => {
            const t = () => (
                s.invalidateQueries({ queryKey: [Kn] }), k_EResultOK
              ),
              r = GameRecordingService.RegisterForNotifyPhaseListChanged(t),
              n = GameRecordingService.RegisterForNotifyClipCreated(t),
              l = GameRecordingService.RegisterForNotifyClipDeleted(t);
            return () => {
              r.unregister(), n.unregister(), l.unregister();
            };
          }, [s]);
        }
        function lc(s) {
          return useQuery({
            queryKey: [Kn, "GetTags", s],
            queryFn: async () => {
              const r = (await GameRecordingService.GetTags({ game_id: s }))
                  .Body()
                  .toObject().tags,
                { rgIconGroups: n } = Wa(r);
              return n.sort((l, u) => u[0].priority - l[0].priority);
            },
          });
        }
        function Wa(s) {
          const t = {};
          for (const l of s)
            t[l.group] || (t[l.group] = []), t[l.group].push(l);
          const r = [],
            n = [];
          for (const l of Object.values(t)) {
            const u = l.some(({ icon: m }) => !!m);
            l.sort((m, f) => f.priority - m.priority),
              u ? r.push(l) : n.push(...l);
          }
          return { rgIconGroups: r, rgTextOnlyTags: n };
        }
        function oc(s, t) {
          return useMemo(() => Is(s, t), [s, t]);
        }
        function Is(s = [], t = []) {
          const { rgIconGroups: r, rgTextOnlyTags: n } = Wa(s),
            l = [
              ...t.map((m) => ({ type: "attribute", attribute: m })),
              ...r.map((m) => ({ type: "tags", tags: m })),
            ],
            u = (m) =>
              m.type === "attribute"
                ? m.attribute.priority
                : m.tags[0].priority;
          return l.sort((m, f) => u(f) - u(m)), { rgMetadata: l, rgDemoted: n };
        }
        function cc(s) {
          return Fa(s.date_recorded);
        }
        function Fa(s) {
          const t = new Date(),
            r = new Date(s * 1e3),
            n = t.getFullYear() == r.getFullYear(),
            l = IsDateSameDay(t, r);
          let u = "";
          if (!l) {
            const b = {
              day: "numeric",
              month: "short",
              year: n ? void 0 : "numeric",
            };
            u = r.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              b,
            );
          }
          const m = { hour: "numeric", minute: "numeric" },
            f = r.toLocaleTimeString(
              LocalizationManager.GetPreferredLocales(),
              m,
            ),
            h = u ? `${u} ${f}` : f;
          return { strDate: u, strTime: f, strDateTime: h };
        }
        function uc(s, t) {
          const r = new Date(),
            n = new Date(s * 1e3),
            l = new Date(t * 1e3),
            u = r.getFullYear() == l.getFullYear(),
            m = n.getFullYear() == l.getFullYear(),
            f = m && n.getMonth() == l.getMonth(),
            h = f && n.getDate() == l.getDate(),
            { strDateTime: b } = Fa(s);
          let y = "";
          if (!h) {
            const W = {
              day: "numeric",
              month: f && u ? void 0 : "short",
              year: m ? void 0 : "numeric",
            };
            y =
              l.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                W,
              ) + " ";
          }
          const w = { hour: "numeric", minute: "numeric" },
            D = l.toLocaleTimeString(
              LocalizationManager.GetPreferredLocales(),
              w,
            );
          return `${b} - ${y}${D}`;
        }
        function Os(s, t, r, n) {
          const l = r + 1,
            u = l + n - 2;
          return Vn(
            s,
            void 0,
            void 0,
            t,
            l,
            t,
            u,
            u - l,
            jt.Ov.r8,
            {
              latestRangeMethod: jt.Ov.r8,
              originalRangeMethod: jt.Ov.r8,
              relativeMS: 0,
            },
            {
              latestRangeMethod: jt.Ov.r8,
              originalRangeMethod: jt.Ov.r8,
              relativeMS: 0,
            },
          ).create(!1);
        }
        var zs = E(7450);
        const La = M.createContext({
          bInContainer: !1,
          bContainerFocus: !1,
          nMouseClientXPX: null,
          globalMouseXPX: null,
          scrollWindowMouseXPX: null,
          fnRegisterMouseEvent: null,
          bContextMenuOpen: !1,
          setContextMenuOpen: () => {},
        });
        function xs(s) {
          const { children: t } = s,
            [r, n] = (0, M.useState)(!1),
            [l, u] = (0, M.useState)(!1),
            [m, f] = (0, M.useState)(!1),
            [h, b] = (0, M.useState)(),
            y = (0, M.useRef)(void 0),
            w = Te(),
            D = (0, U.q3)(() => w.GetScrollableWidthPX()),
            W = (0, U.q3)(() => w.GetVisualWindowStartPX()),
            X = (0, U.q3)(() => w.GetScrollWindowWidth()),
            V = (0, U.q3)(() => w.GetScrollWindowOffset()),
            A = (0, U.q3)(() => w.GetTimelineMarginWidth()),
            K = M.useMemo(() => {
              if (y.current) {
                const Xt = W - V - A;
                return (0, Fe.OB)(et.OQ(h + Xt, 0, D));
              }
              return (0, Fe.OB)(0);
            }, [A, h, V, W, D]),
            ne = M.useMemo(() => {
              if (y.current) {
                const Xt = y.current.getBoundingClientRect(),
                  ur = D > X ? V : Xt.x;
                return (0, Fe.QP)(et.OQ(h - ur, 0, X));
              }
              return (0, Fe.QP)(0);
            }, [h, V, X, D]),
            G = (0, M.useCallback)(
              (Xt, ur) => (
                y.current && y.current.addEventListener(Xt, ur),
                () => y.current?.removeEventListener(Xt, ur)
              ),
              [],
            ),
            te = (0, M.useCallback)(() => n(!0), []),
            oe = (0, M.useCallback)(() => n(!1), []),
            xe = (0, M.useCallback)((Xt) => b(Xt.clientX), []),
            Ce = (0, M.useCallback)((Xt) => u(!0), []),
            dr = (0, M.useCallback)((Xt) => u(!1), []);
          (0, M.useEffect)(() => {
            const Xt = (0, F.qf)(y.current);
            return (
              Xt.addEventListener("mousemove", xe),
              () => Xt.removeEventListener("mousemove", xe)
            );
          }, [xe]);
          const Ze = (0, M.useMemo)(
            () => ({
              bContainerFocus: l,
              bInContainer: r,
              nMouseClientXPX: h,
              globalMouseXPX: K,
              scrollWindowMouseXPX: ne,
              fnRegisterMouseEvent: G,
              bContextMenuOpen: m,
              setContextMenuOpen: f,
            }),
            [l, r, m, h, K, ne, G],
          );
          return (0, c.jsx)(La.Provider, {
            value: Ze,
            children: (0, c.jsx)("div", {
              ref: y,
              onMouseOver: Ce,
              onFocus: Ce,
              onMouseOut: dr,
              onBlur: dr,
              onMouseEnter: te,
              onMouseLeave: oe,
              className: zs.MouseListenerContainer,
              children: t,
            }),
          });
        }
        function Rr() {
          return (0, M.useContext)(La);
        }
        function Ci() {
          return Rr().globalMouseXPX;
        }
        function Zn() {
          return Rr().scrollWindowMouseXPX;
        }
        function Na() {
          return Rr().bInContainer;
        }
        function Jn() {
          return Rr().bContainerFocus;
        }
        function Ua() {
          const s = Rr();
          return [s.bContextMenuOpen, s.setContextMenuOpen];
        }
        function Yn(s, t) {
          const r = Rr().fnRegisterMouseEvent,
            n = (0, M.useRef)(void 0),
            l = (0, M.useCallback)(() => {
              n.current = r(s, t);
            }, [r, t, s]),
            u = (0, M.useCallback)(() => {
              n.current && n.current();
            }, []);
          (0, M.useEffect)(() => (l(), () => u()), [l, u]);
        }
        function Ha() {
          const s = Te(),
            t = Ke(),
            r = Bn(),
            n = (0, U.q3)(() => !t.ShouldModeShowClipControls()),
            l = yi(),
            { onMarkerCreated: u, onNavigateToClip: m } = wi(),
            [f, h] = Ua();
          return M.useCallback(
            (y, w, D, W) =>
              n || l
                ? null
                : (0, ja.lX)(
                    (0, c.jsx)(ks, {
                      isCurrentPlayback: D,
                      nGlobalOffsetMS: w,
                      playbackCoordinator: t,
                      timelineView: s,
                      fnSetSelectionClipRange: r,
                      onMarkerCreated: u,
                      onNavigateToClip: m,
                      onContextMenuOpenChange: h,
                    }),
                    y,
                    W,
                  ),
            [n, l, t, s, r, u, m, h],
          );
        }
        function ks(s) {
          const {
              playbackCoordinator: t,
              timelineView: r,
              nGlobalOffsetMS: n,
              fnSetSelectionClipRange: l,
              isCurrentPlayback: u,
              onMarkerCreated: m,
              onNavigateToClip: f,
              onContextMenuOpenChange: h,
            } = s,
            b = (0, U.q3)(() => t.GetClipsAtGlobalMS(n)),
            y = Xa(r);
          (0, M.useEffect)(() => (h(!0), () => h(!1)), [h]);
          const D = (() => {
              const { strTimelineID: te, nTimelineOffsetMS: oe } =
                t.ConvertGlobalOffsetToTimelineRelativeOffset(n.valMS);
              if (!te) return null;
              const xe = t.GetLoader().GetTimelineData(te);
              if (!xe) return null;
              const Ce = $r.rJ(
                xe.m_rgPhases,
                (Ze) => oe.valMS - parseInt(Ze.time),
              );
              if (Ce < 0) return null;
              const dr = xe.m_rgPhases[Ce];
              return oe.valMS >= parseInt(dr.time) &&
                oe.valMS <= parseInt(dr.time) + parseInt(dr.duration)
                ? { strTimelineID: te, phase: dr }
                : null;
            })(),
            W = (te) => {
              const oe = (xe, Ce) => {
                m && m(xe, Ce, te);
              };
              t.AddUserMarkerAtGlobalMS(
                n,
                "/GameRecording/AddMarker/TimelineCtxMenu",
                oe,
              ),
                t.SetPlaytimeFromGlobalMS(n),
                t.FocusGlobalMS(n);
            },
            X = () => {
              l(t, jt.Ov.fo, n, void 0),
                t.SetPlaytimeFromGlobalMS(n),
                t.FocusGlobalMS(n);
            },
            V = () => {
              l(t, jt.Ov.fo, void 0, n),
                t.SetPlaytimeFromGlobalMS(n),
                t.FocusGlobalMS(n);
            },
            A = () => {
              b.length > 0 &&
                (ze.ReportTrackedAction(
                  "/GameRecording/Tooltip/ViewClip/TimelineCtxMenu",
                ),
                f && f(b[0].strClipID));
            },
            K = () => {
              const { strTimelineID: te, nTimelineOffsetMS: oe } =
                  t.ConvertGlobalOffsetToTimelineRelativeOffset(n.valMS),
                xe = t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(te);
              gi(t.GetGameID(), te, oe, t.GetClipID());
            },
            ne = () => {
              if (!D) return;
              const { phase: te, strTimelineID: oe } = D;
              Os(t.GetGameID(), oe, parseInt(te.time), parseInt(te.duration));
            },
            G = (te) => r.SetPhaseToHighlight(te);
          return (
            (0, M.useEffect)(() => () => r.SetPhaseToHighlight(null), [r]),
            (0, c.jsxs)(Dr.tz, {
              refInstance: y,
              children: [
                (0, c.jsx)(Dr.kt, {
                  onSelected: W,
                  className: mr.TimelineContextMenuItem,
                  children: (0, c.jsxs)("div", {
                    className: (0, Q.A)(mr.MenuItem, mr.AddUserMarker),
                    children: [
                      (0, c.jsx)(o.pH, {}),
                      (0, S.we)(
                        u
                          ? "#Playback_UserSelectionControls_AddUserMarker"
                          : "#TimelineDialog_AddMarker",
                      ),
                    ],
                  }),
                }),
                (0, c.jsx)(Dr.kt, {
                  onSelected: K,
                  className: mr.TimelineContextMenuItem,
                  children: (0, c.jsxs)("div", {
                    className: (0, Q.A)(mr.MenuItem, mr.TakeScreenshot),
                    children: [
                      (0, c.jsx)(o.i7, {}),
                      (0, S.we)(
                        u
                          ? "#Playback_UserSelectionControls_TakeScreenshot"
                          : "#TimelineDialog_TakeScreenshot",
                      ),
                    ],
                  }),
                }),
                (0, c.jsx)(Dr.kt, {
                  onSelected: X,
                  className: mr.TimelineContextMenuItem,
                  children: (0, c.jsxs)("div", {
                    className: (0, Q.A)(mr.MenuItem, mr.StartEndClip),
                    children: [
                      (0, c.jsx)(o.Nm, { direction: "left" }),
                      (0, S.we)(
                        u
                          ? "#Playback_UserSelectionControls_SetClipStart"
                          : "#TimelineContext_SetClipStart",
                      ),
                    ],
                  }),
                }),
                (0, c.jsx)(Dr.kt, {
                  onSelected: V,
                  className: mr.TimelineContextMenuItem,
                  children: (0, c.jsxs)("div", {
                    className: (0, Q.A)(mr.MenuItem, mr.StartEndClip),
                    children: [
                      (0, c.jsx)(o.Nm, { direction: "right" }),
                      (0, S.we)(
                        u
                          ? "#Playback_UserSelectionControls_SetClipEnd"
                          : "#TimelineContext_SetClipEnd",
                      ),
                    ],
                  }),
                }),
                !!D &&
                  (0, c.jsx)(Dr.kt, {
                    onSelected: ne,
                    className: mr.TimelineContextMenuItem,
                    onMouseOver: () => G([D.strTimelineID, D.phase.time]),
                    onMouseLeave: () => G(null),
                    children: (0, c.jsxs)("div", {
                      className: (0, Q.A)(mr.MenuItem, mr.ClipPhase),
                      children: [
                        (0, c.jsx)(o.O5, {}),
                        (0, S.we)("#TimelineDialog_ClipPhase"),
                      ],
                    }),
                  }),
                b.length > 0 &&
                  (0, c.jsx)(Dr.kt, {
                    onSelected: A,
                    className: mr.TimelineContextMenuItem,
                    children: (0, c.jsxs)("div", {
                      className: (0, Q.A)(mr.MenuItem, mr.ViewClip),
                      children: [
                        (0, c.jsx)(Ii.CeX, {}),
                        (0, S.we)("#TimelineDialog_ViewClip"),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function mc() {
          const s = useTimelinePlaybackCoordinator(),
            t = useSetSelectionClipRange(),
            r = useObserver(() => !s.ShouldModeShowClipControls()),
            n = useLowDiskSpace(),
            { onMarkerCreated: l } = useGameRecordingCallbacks();
          return React.useCallback(
            (m, f) => {
              if (r || n) return;
              const h = jsx(js, {
                onMarkerCreated: l,
                playbackCoordinator: s,
                fnSetSelectionClipRange: t,
              });
              CreateContextMenu(h, m, f);
            },
            [r, n, l, s, t],
          );
        }
        function js(s) {
          const { playbackCoordinator: t, fnSetSelectionClipRange: r } = s,
            n = useRef(void 0),
            { onMarkerCreated: l } = useGameRecordingCallbacks(),
            u = (b) => {
              const y = (D, W) => {
                  l && l(D, W, b);
                },
                w = t.GetGlobalMSPlaytime();
              t.AddUserMarkerAtGlobalMS(
                w,
                "/GameRecording/AddMarker/VideoCtxMenu",
                y,
              ),
                t.SetPlaytimeFromGlobalMS(w),
                t.FocusGlobalMS(w);
            },
            m = () => {
              const b = t.GetGlobalMSPlaytime();
              r(t, EClipRangeMethod.k_EClipRangeMethod_ContextMenu, b, void 0),
                t.SetPlaytimeFromGlobalMS(b),
                t.FocusGlobalMS(b);
            },
            f = () => {
              const b = t.GetGlobalMSPlaytime();
              r(t, EClipRangeMethod.k_EClipRangeMethod_ContextMenu, void 0, b),
                t.SetPlaytimeFromGlobalMS(b),
                t.FocusGlobalMS(b);
            },
            h = () => {
              const b = t.GetGlobalMSPlaytime(),
                { strTimelineID: y, nTimelineOffsetMS: w } =
                  t.ConvertGlobalOffsetToTimelineRelativeOffset(b.valMS),
                D = t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(y);
              TakeScreenshot(t.GetGameID(), y, w, t.GetClipID());
            };
          return jsxs(ContextMenu, {
            refInstance: n,
            children: [
              jsx(ContextMenuItem, {
                onSelected: u,
                className: styles.TimelineContextMenuItem,
                children: jsxs("div", {
                  className: classnames(styles.MenuItem, styles.AddUserMarker),
                  children: [
                    jsx(SVG.AddMarker, {}),
                    Localize("#Playback_UserSelectionControls_AddUserMarker"),
                  ],
                }),
              }),
              jsx(ContextMenuItem, {
                onSelected: h,
                className: styles.TimelineContextMenuItem,
                children: jsxs("div", {
                  className: classnames(styles.MenuItem, styles.TakeScreenshot),
                  children: [
                    jsx(SVG.Camera, {}),
                    Localize("#Playback_UserSelectionControls_TakeScreenshot"),
                  ],
                }),
              }),
              jsx(ContextMenuItem, {
                onSelected: m,
                className: styles.TimelineContextMenuItem,
                children: jsxs("div", {
                  className: classnames(styles.MenuItem, styles.StartEndClip),
                  children: [
                    jsx(SVG.SetClip, { direction: "left" }),
                    Localize("#Playback_UserSelectionControls_SetClipStart"),
                  ],
                }),
              }),
              jsx(ContextMenuItem, {
                onSelected: f,
                className: styles.TimelineContextMenuItem,
                children: jsxs("div", {
                  className: classnames(styles.MenuItem, styles.StartEndClip),
                  children: [
                    jsx(SVG.SetClip, { direction: "right" }),
                    Localize("#Playback_UserSelectionControls_SetClipEnd"),
                  ],
                }),
              }),
            ],
          });
        }
        function Xa(s) {
          const t = (0, U.q3)(() => s.GetAutoScrollPauseTimeout()),
            r = (0, U.q3)(() => s.GetVisualWindowStartPX()),
            n = (0, M.useRef)(void 0),
            l = (0, M.useRef)(void 0);
          return (
            (0, M.useEffect)(() => {
              n.current && l.current ? l.current.Hide() : (n.current = !0);
            }, [r]),
            (0, M.useEffect)(() => {
              s.SetAutoScrollPaused(!0);
            }, [s]),
            (0, M.useEffect)(() => {
              t && s.ClearAutoScrollPauseTimeout();
            }, [t, s]),
            l
          );
        }
        function Ds() {
          const s = Te(),
            t = Ke(),
            { setSelectedMarker: r } = si(),
            n = Zi(),
            { onNavigateToClip: l, onNavigateToScreenshot: u } = wi(),
            m = yi(),
            f = (0, U.q3)(() => !t.ShouldModeShowClipControls());
          return M.useCallback(
            (b, y, w) => {
              if (f) return;
              const D = (0, c.jsx)(Es, {
                markerInfo: y,
                playbackCoordinator: t,
                timelineView: s,
                setSelectedMarker: r,
                onNavigateToClip: l,
                onNavigateToScreenshot: u,
                bLowDiskSpace: m,
                clearRange: n,
              });
              (0, ja.lX)(D, b, w);
            },
            [f, m, t, s, r, l, u, n],
          );
        }
        function Es(s) {
          const {
              playbackCoordinator: t,
              timelineView: r,
              markerInfo: n,
              setSelectedMarker: l,
              clearRange: u,
              bLowDiskSpace: m,
              onNavigateToClip: f,
              onNavigateToScreenshot: h,
            } = s,
            b = (0, U.q3)(() =>
              r.ConvertGlobalMSToClipOrNone(n.nGlobalMS.valMS),
            ),
            y = (0, U.q3)(() =>
              t.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                n.nGlobalMS.valMS,
              ),
            ),
            w = Xa(r),
            D = (ne) => {
              let G = Aa,
                te = Va;
              (0, B.zG)(n.entry) &&
                ((G = 0), (te = parseInt(n.entry.duration)));
              const [oe, xe] = t
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  n.strTimelineID,
                  n.nGlobalMS.valMS,
                  G,
                  te,
                );
              t.SetPlaytimeFromGlobalMS((0, Fe.Sb)(oe)),
                l?.(n.entry.id, n.strTimelineID, oe, xe),
                ze.ReportTrackedAction(
                  "/GameRecording/HighlightCtxMenu/ClipFromHighlight",
                ),
                ne.stopPropagation();
            },
            W = () => {
              b &&
                (ze.ReportTrackedAction(
                  `/GameRecording/MarkerCtxMenu/ViewClip/${n.entry.type}`,
                ),
                f && f(b.clipID));
            },
            X = (ne) => {
              if (!(0, B.N$)(n.entry)) return;
              ze.ReportTrackedAction(
                `/GameRecording/HighlightCtxMenu/Marker/Edit/${n.entry.type}`,
              );
              let G = (0, c.jsx)(Ea, {
                entry: n.entry,
                playbackCoordinator: t,
                fnClearSelection: u,
                strTimelineID: n.strTimelineID,
              });
              (0, i.pg)(G, (0, F.uX)(ne)),
                ne.stopPropagation(),
                ne.preventDefault();
            },
            V = (ne) => {
              (0, B.N$)(n.entry) &&
                (ze.ReportTrackedAction(
                  `/GameRecording/HighlightCtxMenu/Marker/Delete/${n.entry.type}`,
                ),
                t.RemoveUserMarker(n.strTimelineID, n.entry.id));
            },
            A = () => {
              !(0, B.sX)(n.entry) ||
                !n.entry?.handle ||
                (ze.ReportTrackedAction(
                  "/GameRecording/HighlightCtxMenu/Screenshot",
                ),
                h(r.GetGameID(), n.entry.handle));
            };
          let K = [];
          return (
            (0, B.N$)(n.entry) &&
              K.push(
                (0, c.jsx)(
                  Dr.kt,
                  {
                    onSelected: X,
                    className: gr.HighlightContextMenuItem,
                    children: (0, c.jsxs)("div", {
                      className: (0, Q.A)(gr.MenuItem, gr.EditMarker),
                      children: [
                        (0, c.jsx)(o.ff, {}),
                        (0, S.we)("#Marker_Action_Edit"),
                      ],
                    }),
                  },
                  "edit",
                ),
              ),
            y?.strRecordingID &&
              !m &&
              K.push(
                (0, c.jsx)(
                  Dr.kt,
                  {
                    onSelected: D,
                    className: gr.HighlightContextMenuItem,
                    children: (0, c.jsxs)("div", {
                      className: (0, Q.A)(gr.MenuItem, gr.CreateClip),
                      children: [
                        (0, c.jsx)(o.Wd, {}),
                        (0, S.we)("#TimelineDialog_ClipVideo"),
                      ],
                    }),
                  },
                  "clip",
                ),
              ),
            (0, B.sX)(n.entry) &&
              K.push(
                (0, c.jsx)(
                  Dr.kt,
                  {
                    onSelected: A,
                    className: gr.HighlightContextMenuItem,
                    children: (0, c.jsxs)("div", {
                      className: (0, Q.A)(gr.MenuItem, gr.ViewScreenshot),
                      children: [
                        (0, c.jsx)(o.pw, {}),
                        (0, S.we)("#TimelineDialog_ViewScreenshot"),
                      ],
                    }),
                  },
                  "view_screenshot",
                ),
              ),
            b &&
              W &&
              K.push(
                (0, c.jsx)(
                  Dr.kt,
                  {
                    onSelected: W,
                    className: gr.HighlightContextMenuItem,
                    children: (0, c.jsxs)("div", {
                      className: (0, Q.A)(gr.MenuItem, gr.ViewClip),
                      children: [
                        (0, c.jsx)(o.ai, {}),
                        (0, S.we)("#TimelineDialog_ViewClip"),
                      ],
                    }),
                  },
                  "view_clip",
                ),
              ),
            (0, B.N$)(n.entry) &&
              K.push(
                (0, c.jsx)(
                  Dr.kt,
                  {
                    onSelected: V,
                    className: gr.HighlightContextMenuItem,
                    children: (0, c.jsxs)("div", {
                      className: (0, Q.A)(gr.MenuItem, gr.DeleteMarker),
                      children: [
                        (0, c.jsx)(Ii.lMJ, {}),
                        (0, S.we)("#Marker_Action_Delete"),
                      ],
                    }),
                  },
                  "delete",
                ),
              ),
            K.length ? (0, c.jsx)(Dr.tz, { refInstance: w, children: K }) : null
          );
        }
        const Aa = 5e3,
          Va = 3e3,
          Ps = 5e3;
        function Ws(s) {
          const {
              markerInfo: t,
              view: r,
              coordinator: n,
              gameID: l,
              clipID: u,
              timelineID: m,
              faded: f,
            } = s,
            h = t.nGlobalMS,
            b = (0, U.q3)(() => r.ConvertGlobalMSToGlobalPXOffset(h.valMS)),
            y = (0, U.q3)(() => {
              const G = r.GetThumbnailComponent();
              return G && G !== nr.Highlight;
            }),
            w = Ds(),
            { selectedMarker: D } = si(),
            W =
              t.entry?.id == D?.strEntryID &&
              t.strTimelineID == D?.strTimelineID,
            { ref: X, ...V } = Fs(r, t),
            A = M.useCallback(
              (G) => {
                const te = h.valMS - Ps,
                  oe = r.FindTimelineOffsets(m),
                  xe = Math.max(te, oe.globalOffsetMS);
                n.SetPlaytimeFromGlobalMS((0, Fe.Sb)(xe)),
                  n.SetDisplayHighlightEntry(t.entry),
                  G.stopPropagation(),
                  ze.ReportTrackedAction(
                    `/GameRecording/Marker/Click/${t.entry.type}`,
                  );
              },
              [n, h.valMS, m, r, t],
            ),
            K = (G) => {
              w(G, t, {
                bDisableMouseOverlay: !0,
                bForcePopup: !0,
                bAlwaysOnTop: !0,
              }),
                G.stopPropagation();
            },
            ne = { transform: `translateX( calc( ${b}px - 50% ))` };
          return (0, c.jsxs)("div", {
            className: (0, Q.A)(
              Kr.MarkerAndDropline,
              y && Kr.NoPointer,
              f && Kr.Faded,
            ),
            style: ne,
            ref: X,
            onContextMenu: K,
            ...V,
            children: [
              (0, c.jsx)(
                "div",
                {
                  className: (0, Q.A)(Kr.TimelineMarkerCtn),
                  children: (0, c.jsx)(
                    ms,
                    {
                      classNames: Kr.TimelineMarker,
                      entry: t.entry,
                      strMarkerIcon: t.strMarkerIcon,
                      faded: f,
                      onClick: A,
                      bSelectedMarker: W,
                    },
                    t.entry.id,
                  ),
                },
                h.valMS,
              ),
              (0, c.jsx)("div", {
                className: Kr.DroplineCtn,
                children: (0, c.jsx)("div", {
                  className: (0, Q.A)(Kr.TimelineMarkerDropLine),
                }),
              }),
            ],
          });
        }
        const Ka = 150;
        function Fs(s, t) {
          const r = M.useRef(void 0),
            n = M.useRef(void 0),
            l = M.useCallback(
              (f) => {
                if (!r.current) return;
                const h = r.current.getBoundingClientRect();
                if (f.clientY >= h.top && f.clientY <= h.bottom) {
                  if (h.left - f.clientX > 1 || f.clientX - h.right > 1) {
                    s.SetThumbnailComponent(null),
                      n.current && n.current(),
                      (n.current = null);
                    return;
                  }
                  return;
                }
                const b = h.left + 0.5 * h.width;
                (f.clientX < b - Ka || f.clientX > b + Ka) &&
                  (s.SetThumbnailComponent(null),
                  n.current && n.current(),
                  (n.current = null));
              },
              [s],
            ),
            u = M.useCallback(
              (f) => {
                if (
                  (s.SetThumbnailComponent(nr.Highlight),
                  s.SetThumbnailEntry(t),
                  !n.current)
                ) {
                  const h = (0, F.uX)(f);
                  h.addEventListener("mousemove", l),
                    (n.current = () => h.removeEventListener("mousemove", l));
                }
                f.stopPropagation();
              },
              [l, t, s],
            ),
            m = M.useCallback(
              (f) => {
                const h = r.current.getBoundingClientRect(),
                  b = h.left,
                  y = h.right;
                if (f.clientX - b < 1 || y - f.clientX < 1) {
                  s.SetThumbnailComponent(null),
                    n.current && n.current(),
                    (n.current = null);
                  return;
                }
                (0, F.id)(r.current, f.relatedTarget) ||
                  (f.clientY - h.top > 1 &&
                    h.bottom - f.clientY > 1 &&
                    f.clientX - h.left > 1 &&
                    h.right - f.clientX > 1 &&
                    (s.SetThumbnailComponent(null),
                    n.current && n.current(),
                    (n.current = null))),
                  f.stopPropagation();
              },
              [s],
            );
          return (
            M.useEffect(() => () => n.current && n.current(), []),
            { ref: r, onMouseOver: u, onMouseLeave: m }
          );
        }
        const Ls = 16;
        function qn(s) {
          return s.type === "achievement" ? 9e3 : s.priority;
        }
        const Ns = M.memo(function (t) {
            const r = Te(),
              n = (0, U.q3)(() => r.GetVisibleTimelines());
            return (0, c.jsx)(c.Fragment, {
              children: n.map((l) =>
                (0, c.jsx)(Hs, { timeline: l }, l.timelineID),
              ),
            });
          }),
          Gi = { screenshot: 0, event: 0, achievement: 1, usermarker: 2 };
        function Us(s, t) {
          if (Gi[s.type] !== Gi[t.type]) return Gi[t.type] - Gi[s.type];
          const r = qn(s),
            n = qn(t);
          return r != n
            ? n - r
            : s.time != t.time
              ? parseInt(s.time) - parseInt(t.time)
              : s.id.localeCompare(t.id);
        }
        const Hs = M.memo(function (t) {
          const { timeline: r } = t,
            n = Te(),
            l = Ke(),
            m = (0, U.q3)(
              () => n.GetVisibleTimelineHighlights(r.timelineID) || [],
            )
              .slice()
              .sort(Us),
            f = (0, U.q3)(() => n.GetTimelineOffsetMS(r.timelineID)),
            h = r.globalOffsetMS - f,
            b = l.GetGameID(),
            y = l.GetClipID(),
            w = n.GetCurrentZoomScale() * Ls;
          let D = new ps(w);
          return m.map((W, X) => {
            if (Za(W) !== "highlight") return null;
            const V = `${W.type}_${W.id}_${r.timelineID}_${X}`,
              A = Xs(r.timelineID, h, W),
              K = D.BAllowIcon(A.nGlobalMS.valMS);
            return (0, c.jsx)(
              Ws,
              {
                gameID: b,
                clipID: y,
                view: n,
                coordinator: l,
                faded: !K,
                timelineID: r.timelineID,
                markerInfo: A,
              },
              V,
            );
          });
        });
        function Xs(s, t, r) {
          if (
            ![
              "event",
              "usermarker",
              "screenshot",
              "achievement",
              "error",
            ].includes(r.type)
          )
            return (
              (0, Me.q_)(
                `Unexpected timeline entry type ${r.type}, returning empty highlight marker`,
              ),
              null
            );
          let n = r;
          const l = (0, B.xz)(n);
          return {
            entry: n,
            strMarkerIcon: l ? "steam_achievement" : n.icon,
            nMarkerPriority: qn(n),
            strTimelineID: s,
            strTitle: (!l && n.title) || "",
            strDescription: (!l && n.description) || "",
            nGlobalMS: (0, Fe.Sb)(parseInt(n.time) + t),
          };
        }
        function Za(s) {
          switch (s.type) {
            case "usermarker":
            case "achievement":
            case "screenshot":
            case "error":
              return "highlight";
            case "event":
              return parseInt(s.duration) > 0 ? "range_highlight" : "highlight";
            default:
              return "none";
          }
        }
        var oi = E(53298);
        function As(s) {
          const {
              view: t,
              entry: r,
              nGlobalEntryEndMS: n,
              nGlobalTLStartMS: l,
            } = s,
            u = Ke(),
            m = (0, Fe.Sb)(parseInt(r.time) + l.valMS),
            f = (0, U.q3)(() => {
              const D = t.ConvertGlobalMSToGlobalPXOffset(m.valMS),
                W = t.GetVirtualWindowStartPX();
              return W < D ? D : W;
            }),
            h = (0, U.q3)(() => {
              const D = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
                W = t.GetVirtualWindowEndPX();
              return W < D ? W : D;
            }),
            b = !!u.GetClipID(),
            y = { transform: `translateX( ${f}px )`, width: h - f },
            w = (0, Q.A)({
              [oi.Unspecified]: r.mode === B.il.Invalid,
              [oi.Staging]: r.mode === B.il.Staging,
              [oi.Menus]: r.mode === B.il.Menus,
              [oi.Playing]: r.mode === B.il.Playing,
            });
          return (0, c.jsx)(
            "div",
            {
              className: (0, Q.A)(
                oi.GameModeMarker,
                w,
                b && oi.GameModeMarkerClip,
              ),
              style: y,
            },
            r.id,
          );
        }
        const Vs = M.memo(function (t) {
            const r = Te(),
              n = (0, U.q3)(() => r.GetVisibleTimelines());
            return (0, c.jsx)(c.Fragment, {
              children: n.map((l) =>
                (0, c.jsx)(Ks, { timeline: l }, l.timelineID),
              ),
            });
          }),
          Ks = M.memo(function (t) {
            const {
                timelineID: r,
                globalOffsetMS: n,
                nDurationMS: l,
              } = t.timeline,
              u = Te(),
              m = (0, U.q3)(() => {
                const w = u.GetVisibleTimelineGameModes(r);
                return !w || w.length === 0
                  ? [
                      {
                        time: "0",
                        type: "gamemode",
                        mode: B.il.Invalid,
                        id: "synthetic",
                      },
                    ]
                  : w;
              }),
              f = (0, Fe.Sb)(n + l),
              h = u.GetTimelineOffsetMS(r),
              b = n - h;
            let y = [];
            for (let w = 0; w < m.length; w++) {
              const D = (0, Fe.Sb)(
                w < m.length - 1 ? parseInt(m[w + 1].time) + b : f.valMS - 1,
              );
              y.push(
                (0, c.jsx)(
                  As,
                  {
                    view: u,
                    entry: m[w],
                    nGlobalEntryEndMS: D,
                    nGlobalTLStartMS: (0, Fe.Sb)(b),
                  },
                  `gameMode_${r}_${w}`,
                ),
              );
            }
            return (0, c.jsx)(c.Fragment, { children: y });
          });
        var Ri = E(36616),
          _r = E(5540);
        const Zs = 500,
          Js = (0, M.memo)(function (t) {
            const r = Ke(),
              n = (0, U.q3)(() => r.GetHidePlayer()),
              [l, u] = (0, M.useState)({
                bDragActive: !1,
                bPausedOnDragStart: !1,
              }),
              m = Te(),
              f = (0, U.q3)(() => {
                if (
                  m.GetAutoScrollPaused() ||
                  m.BReachedMaxScroll() ||
                  m.BReachedMinScroll() ||
                  r.BIsVideoElementPaused()
                )
                  return !1;
                const h = r.GetGlobalMSPlaytime(),
                  b = m.ConvertGlobalMSToGlobalPXOffset(h.valMS),
                  y = m.GetMaxScrollLeftPX() + 0.5 * m.GetScrollWindowWidth();
                return b < y;
              });
            return n
              ? (0, c.jsx)(qs, { setDragActive: u })
              : f
                ? (0, c.jsx)(Ys, { view: m, setDragActive: u })
                : (0, c.jsx)($s, { dragState: l, setDragActive: u });
          });
        function Ys(s) {
          const { view: t, setDragActive: r } = s,
            n = (0, U.q3)(
              () => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2,
            );
          return (0, c.jsx)(Qn, {
            playheadPosition: n,
            children: (0, c.jsx)($n, { setDragActive: r, bDragActive: !1 }),
          });
        }
        const qs = (0, M.memo)(function (t) {
            const { setDragActive: r } = t,
              n = Te(),
              l = (0, U.q3)(() => n.GetScrollableWidthPX()),
              u = (0, be._g)(100),
              m = (0, M.useCallback)(
                (f) => {
                  n.GetAutoScrollPaused() || u(() => n.ScrollToOffset(f));
                },
                [u, n],
              );
            return (
              (0, M.useEffect)(() => n.ScrollToEnd(), [n]),
              (0, M.useEffect)(() => m(l), [l, m]),
              (0, c.jsx)(Qn, {
                playheadPosition: l,
                children: (0, c.jsx)($n, { setDragActive: r, bDragActive: !1 }),
              })
            );
          }),
          $s = (0, M.memo)(function (t) {
            const { dragState: r, setDragActive: n } = t,
              { bDragActive: l, bPausedOnDragStart: u } = r,
              m = Ke(),
              f = Te(),
              h = Ci(),
              b = Zn(),
              y = Cs(b, f, l, h, m);
            return (
              (0, M.useEffect)(() => {
                if (!l) return;
                f.SetThumbnailPosition(y);
                const w = f.ConvertPXOffsetToGlobalMS(y, !1);
                if (!w) return;
                const D = m.GetLiveEdgeMS();
                m.SetPlaytimeFromGlobalMS(
                  D.valMS < w ? D : (0, Fe.Sb)(w),
                  u,
                  !0,
                  !0,
                );
              }, [y, u, l, m, f]),
              (0, c.jsx)("div", {
                className: (0, Q.A)(
                  _r.PlayheadInteractionCtn,
                  l && _r.ActiveCtn,
                ),
                children: (0, c.jsx)(Qn, {
                  className: l ? _r.Active : void 0,
                  playheadPosition: y,
                  children: (0, c.jsx)($n, {
                    setDragActive: n,
                    bDragActive: l,
                  }),
                }),
              })
            );
          }),
          $n = (0, M.memo)(function (t) {
            const { setDragActive: r, bDragActive: n } = t,
              l = Te(),
              u = (f) => {
                n || l.SetThumbnailComponent(nr.Playhead), f.stopPropagation();
              },
              m = (f) => {
                n || l.SetThumbnailComponent(null), f.stopPropagation();
              };
            return (0, c.jsx)("div", {
              className: _r.PlayHeadContent,
              onMouseOver: u,
              onMouseOut: m,
              onFocus: u,
              onBlur: m,
              children: (0, c.jsx)(Qs, { setDragActive: r }),
            });
          }),
          Qs = M.memo(function (t) {
            const { setDragActive: r } = t,
              n = Ke(),
              l = Ha(),
              u = Te(),
              m = (0, U.q3)(() => {
                const b = u.GetThumbnailComponent();
                return b === nr.RangeLeft || b === nr.RangeRight;
              }),
              f = (0, M.useCallback)(
                (b) => {
                  if (b.button != 0) return;
                  const y = (0, F.uX)(b);
                  let w, D;
                  const W = () => {
                    const V = n.GetGameRecordingVideo().IsPaused();
                    r({ bDragActive: !0, bPausedOnDragStart: V }),
                      u.SetThumbnailComponent(nr.Playhead),
                      w();
                  };
                  y.addEventListener("mousemove", W),
                    (w = () => y.removeEventListener("mousemove", W));
                  const X = () => {
                    r({ bDragActive: !1, bPausedOnDragStart: !1 }),
                      u.SetThumbnailComponent(null),
                      w(),
                      D();
                  };
                  y.addEventListener("mouseup", X),
                    (D = () => y.removeEventListener("mouseup", X));
                },
                [n, r, u],
              ),
              h = (0, M.useCallback)(
                (b) => {
                  const y = n.GetGlobalMSPlaytime();
                  l(b, y, !0, {
                    bDisableMouseOverlay: !0,
                    bForcePopup: !0,
                    bAlwaysOnTop: !0,
                  }),
                    b.stopPropagation(),
                    b.preventDefault();
                },
                [n, l],
              );
            return (0, c.jsx)("div", {
              className: (0, Q.A)(_r.PlayHead, m && _r.NoPointer),
              onMouseDown: f,
              onContextMenu: h,
              children: (0, c.jsx)(Ja, {}),
            });
          });
        function Ja(s) {
          return (0, c.jsxs)("svg", {
            ...s,
            width: "12",
            height: "32",
            viewBox: "0 0 12 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, c.jsx)("rect", {
                x: "5",
                y: "4",
                width: "2",
                height: "40",
                fill: "currentColor",
              }),
              (0, c.jsx)("path", {
                d: "M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function Cs(s, t, r, n, l) {
          const u = (0, M.useRef)(void 0),
            m = (0, U.q3)(() => t.GetScrollableWidthPX()),
            f = (0, U.q3)(() => t.GetScrollWindowWidth()),
            [h, b] = (0, M.useState)(0),
            y = (0, M.useRef)(void 0),
            w = (0, M.useRef)(void 0),
            { clearPlaybackAnimation: D, startPlaybackAnimation: W } = Gs(
              l,
              t,
              b,
            );
          (0, M.useEffect)(
            () => () => {
              y.current &&
                (cancelAnimationFrame(y.current),
                (y.current = null),
                (w.current = null)),
                D();
            },
            [D],
          );
          const X = M.useCallback(
            (V, A, K, ne, G) => {
              if (G(A))
                b(
                  (0, et.OQ)(
                    A.GetVisualWindowStartPX() + K,
                    0,
                    A.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(y.current),
                  (y.current = null),
                  (w.current = null);
              else {
                if (
                  (y.current &&
                    (y.current = requestAnimationFrame((te) =>
                      X(te, A, K, ne, G),
                    )),
                  w.current)
                ) {
                  const oe = ((V - w.current) / Zs) * ne;
                  A.ScrollBy(oe),
                    b((xe) => (0, et.OQ)(xe + oe, 0, A.GetScrollableWidthPX()));
                }
                w.current = V;
              }
            },
            [b],
          );
          return (
            (0, M.useEffect)(() => {
              const V = f * (1 - ui),
                A = f * ui;
              if (
                (y.current &&
                  (cancelAnimationFrame(y.current),
                  (y.current = null),
                  (w.current = null)),
                !r)
              ) {
                W();
                return;
              }
              if ((D(), s.valPX < A && !t.BReachedMinScroll())) {
                if (s.valPX <= u.current) {
                  const K = s.valPX - A,
                    G = (0, et.OQ)(Math.abs(K / A), 0, 1) * K;
                  y.current = requestAnimationFrame((te) =>
                    X(te, t, s.valPX, G, t.BReachedMinScroll),
                  );
                }
                u.current = s.valPX;
              } else if (s.valPX > V && !t.BReachedMaxScroll()) {
                if (s.valPX >= u.current) {
                  const K = s.valPX - V,
                    G = (0, et.OQ)(Math.abs(K / (f - V)), 0, 1) * K;
                  y.current = requestAnimationFrame((te) =>
                    X(te, t, s.valPX, G, t.BReachedMaxScroll),
                  );
                }
                u.current = s.valPX;
              } else b((0, et.OQ)(n.valPX, 0, m));
            }, [r, D, n.valPX, f, m, X, s.valPX, W, t]),
            h
          );
        }
        function Gs(s, t, r) {
          const n = (0, M.useRef)(void 0),
            l = s.GetGameRecordingVideo(),
            u = (0, M.useRef)(void 0),
            m = (0, M.useRef)(void 0),
            f = (0, M.useRef)(void 0),
            h = (0, M.useRef)(void 0),
            b = (0, M.useCallback)(() => {
              if (!n.current) return;
              const D = s.GetGlobalMSPlaytime();
              if (D.valMS >= 0) {
                const W = l.BVideoElementPlaying(),
                  X = l.GetVideoElementCurrentTime(),
                  V = t.GetScrollableWidthPX(),
                  A = t.GetCurrentZoomScale();
                if (u.current !== D.valMS || (h.current && h.current != A)) {
                  const K = t.ConvertGlobalMSToGlobalPXOffset(D.valMS),
                    ne = Math.min(V, K);
                  r(ne), (f.current = ne);
                } else if (
                  u.current &&
                  u.current === D.valMS &&
                  X &&
                  m.current &&
                  m.current !== X &&
                  W
                ) {
                  const K = u.current + (X - m.current) * 1e3,
                    ne = t.ConvertGlobalMSToGlobalPXOffset(K);
                  if (f.current && f.current < ne) {
                    const G = Math.min(V, ne);
                    r(G);
                  }
                  f.current = ne;
                }
                W || ((m.current = null), (u.current = D.valMS)),
                  W &&
                    u.current !== D.valMS &&
                    ((m.current = X), (u.current = D.valMS)),
                  (h.current = A);
              }
              n.current = requestAnimationFrame(b);
            }, [s, r, t, l]),
            y = (0, M.useCallback)(() => {
              n.current && cancelAnimationFrame(n.current),
                (n.current = null),
                (u.current = null),
                (m.current = null),
                (f.current = null);
            }, []),
            w = (0, M.useCallback)(() => {
              n.current || (n.current = requestAnimationFrame(b));
            }, [b]);
          return { clearPlaybackAnimation: y, startPlaybackAnimation: w };
        }
        function Qn(s) {
          const { className: t, playheadPosition: r, children: n } = s;
          return (0, c.jsx)("div", {
            className: (0, Q.A)(_r.PlayHeadContainer, t),
            style: { transform: `translateX( calc(${r}px - 50% ))` },
            children: n,
          });
        }
        var we = E(48419),
          Rs = E(47689),
          _s = Object.defineProperty,
          el = Object.getOwnPropertyDescriptor,
          tl = (s, t, r, n) => {
            for (
              var l = n > 1 ? void 0 : n ? el(t, r) : t, u = s.length - 1, m;
              u >= 0;
              u--
            )
              (m = s[u]) && (l = (n ? m(t, r, l) : m(l)) || l);
            return n && l && _s(t, r, l), l;
          };
        const rl = 30;
        function il(s, t) {
          return (
            s.strRecordingID === t.strRecordingID &&
            s.strClipID === t.strClipID &&
            s.nRecordingOffsetMS === t.nRecordingOffsetMS &&
            s.nRecordingStartOffsetMS === t.nRecordingStartOffsetMS &&
            s.cPxMajorAxis === t.cPxMajorAxis &&
            s.bPreciseTiming == t.bPreciseTiming
          );
        }
        const Ya = class bi {
          k_QueueWaitUntilRequestMS = 10;
          k_nMaxBatchSize = 50;
          m_nMaxCacheSize = (rl * 60 * 1e3) / Zr.kh;
          m_LRUTrackerSet = new Set();
          m_mapPromises = new Map();
          m_mapThumbnailImages = new Map();
          m_rgPendingRequest = new Array();
          m_PendingInfoPromise;
          m_PendingInfoResolve = void 0;
          m_PendingTimer = void 0;
          k_AlreadyResolvedOK = Promise.resolve(!0);
          m_rgThumbnailPerf = [];
          constructor() {
            (0, q.Gn)(this);
          }
          AddPerfMeasure(t) {
            this.m_rgThumbnailPerf.push(t);
          }
          GetPerfMeasures() {
            if (!this.m_rgThumbnailPerf.length) return null;
            const t = this.m_rgThumbnailPerf.length,
              r = this.m_rgThumbnailPerf.reduce((m, f) => m + f) / t,
              n = Math.sqrt(
                this.m_rgThumbnailPerf
                  .map((m) => Math.pow(m - r, 2))
                  .reduce((m, f) => m + f) / t,
              ),
              l = Math.max(...this.m_rgThumbnailPerf),
              u = Math.min(...this.m_rgThumbnailPerf);
            return {
              nMean: r,
              nStdDev: n,
              nMax: l,
              nMin: u,
              nLength: t,
              nLastVal: this.m_rgThumbnailPerf[t - 1],
            };
          }
          GetKey(t, r, n, l, u, m, f) {
            const h = u + l,
              b = f ? h : h - (h % Zr.kh);
            return `${t}_${r}_${n}_${b}_${m}_${f}`;
          }
          GetThumbnailData(t) {
            const r = this.m_mapThumbnailImages.get(t);
            return (
              r &&
                (this.m_LRUTrackerSet.has(t) && this.m_LRUTrackerSet.delete(t),
                this.m_LRUTrackerSet.add(t)),
              r
            );
          }
          SetThumbnailData(t, r) {
            if (
              (this.m_LRUTrackerSet.has(t) && this.m_LRUTrackerSet.delete(t),
              this.m_LRUTrackerSet.add(t),
              this.m_mapThumbnailImages.set(t, r),
              this.m_LRUTrackerSet.size >= this.m_nMaxCacheSize)
            ) {
              const n = this.m_LRUTrackerSet.keys().next().value;
              this.m_LRUTrackerSet.delete(n),
                this.m_mapThumbnailImages.delete(n);
            }
          }
          ClearThumbnailData() {
            this.m_LRUTrackerSet.clear(), this.m_mapThumbnailImages.clear();
          }
          GetThumbnail(t, r, n, l, u, m, f) {
            if (!r) return;
            const h = this.GetKey(t, r, n, l, u, m, f);
            return this.GetThumbnailData(h);
          }
          GetOrQueueThumbnail(t, r, n, l, u, m, f) {
            if (!r) return;
            const h = this.GetKey(t, r, n, l, u, m, f);
            let b = this.GetThumbnailData(h);
            if (!b) {
              let y = `thumbnail_${t}_${m}_${f}`;
              performance.mark(y),
                this.QueueThumbnailRequest(t, r, n, l, u, m, f).then(() => {
                  try {
                    const w = performance.measure(`measure_${y}`, y);
                    w && bi.Get().AddPerfMeasure(w.duration);
                  } catch (w) {
                    (0, Me.q_)(
                      `CThumbnailCache:: cant measure ${y}, error: ${w}`,
                    );
                  }
                }),
                (b = this.GetThumbnailData(h));
            }
            return b;
          }
          QueueThumbnailRequest(t, r, n, l, u, m, f) {
            const h = this.GetKey(t, r, n, l, u, m, f),
              b = this.GetThumbnailData(h);
            if (b && (b.data || b.bIsLoading)) return this.k_AlreadyResolvedOK;
            this.SetThumbnailData(h, { data: null, bIsLoading: !0 }),
              this.m_PendingInfoPromise &&
                (this.m_rgPendingRequest[0].strRecordingID != r ||
                  this.m_rgPendingRequest.length > this.k_nMaxBatchSize) &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              (!this.m_PendingInfoPromise ||
                this.m_rgPendingRequest[0].strRecordingID != r) &&
                ((this.m_PendingInfoPromise = new Promise(
                  (w) => (this.m_PendingInfoResolve = w),
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS,
                )));
            const y = {
              gameID: t,
              strRecordingID: r,
              strClipID: n,
              nRecordingOffsetMS: l,
              nRecordingStartOffsetMS: u,
              cPxMajorAxis: m,
              bPreciseTiming: f,
            };
            return (
              this.m_rgPendingRequest.some((w) => il(w, y)) ||
                (this.m_rgPendingRequest.push(y),
                this.m_mapPromises.set(h, this.m_PendingInfoPromise)),
              this.m_PendingInfoPromise
            );
          }
          async FlushPendingInfo() {
            if (typeof this.m_PendingInfoResolve > "u") return;
            const t = this.m_PendingInfoResolve,
              r = this.m_rgPendingRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              (this.m_rgPendingRequest = []),
              (this.m_PendingTimer = void 0),
              await this.InternalLoadMultipleThumbnails(r),
              t();
          }
          async InternalLoadMultipleThumbnails(t) {
            t.sort((r, n) => r.nRecordingOffsetMS - n.nRecordingOffsetMS);
            try {
              const r = t.map((l) => l.nRecordingOffsetMS * 1e3),
                n = await pt(
                  t[0].strRecordingID,
                  t[0].strClipID,
                  void 0,
                  r,
                  t[0].cPxMajorAxis,
                  t[0].bPreciseTiming,
                );
              (0, Vt.wT)(
                n?.length == r.length,
                `CThumbnailCache.InternalLoadMultipleThumbnails request ${r.length} and got back ${n?.length}`,
              );
              for (let l = 0; l < r.length && l < n?.length; ++l) {
                const u = t[l],
                  m = this.GetKey(
                    u.gameID,
                    u.strRecordingID,
                    u.strClipID,
                    u.nRecordingOffsetMS,
                    u.nRecordingStartOffsetMS,
                    u.cPxMajorAxis,
                    u.bPreciseTiming,
                  );
                let f = n ? n[l].image_data() : null;
                this.SetThumbnailData(m, { data: f, bIsLoading: !1 });
              }
            } catch (r) {
              (0, Me.ZI)("Failed to load multiple request thumbnails", r);
              for (let n = 0; n < t.length; ++n) {
                const l = t[n],
                  u = this.GetKey(
                    l.gameID,
                    l.strRecordingID,
                    l.strClipID,
                    l.nRecordingOffsetMS,
                    l.nRecordingStartOffsetMS,
                    l.cPxMajorAxis,
                    t[0].bPreciseTiming,
                  );
                this.SetThumbnailData(u, { data: null, bIsLoading: !1 });
              }
            }
          }
          async LoadThumbnail(t, r, n, l, u, m, f) {
            const h = this.GetKey(t, r, n, l, u, m, f),
              b = this.GetThumbnailData(h);
            return b && b.data
              ? !0
              : (this.m_mapPromises.has(h) ||
                  this.m_mapPromises.set(
                    h,
                    this.InternalLoadThumbnail(t, r, n, l, u, m, f),
                  ),
                this.m_mapPromises.get(h));
          }
          async InternalLoadThumbnail(t, r, n, l, u, m, f) {
            const h = this.GetKey(t, r, n, l, u, m, f);
            try {
              const b = await pt(r, n, void 0, [l * 1e3], m, f);
              if (b?.length > 0) {
                let y = b ? b[0].image_data() : null;
                return (
                  this.SetThumbnailData(h, { data: y, bIsLoading: !1 }), !0
                );
              }
              (0, Me.tH)(
                `ThumbnailImage: got empty jpeg ${b.length} list back ${r} @ ${l}`,
              );
            } catch (b) {
              (0, Me.ZI)(
                `ThumbnailImage: Fail to load thumbnail ${r} @ ${l} with ${b}`,
              ),
                this.SetThumbnailData(h, { data: null, bIsLoading: !1 });
            }
            return !1;
          }
          static s_Singleton;
          static Get() {
            return (
              bi.s_Singleton || (bi.s_Singleton = new bi()), bi.s_Singleton
            );
          }
        };
        tl([q.sH], Ya.prototype, "m_mapThumbnailImages", 2);
        let Cn = Ya;
        function nl(s) {
          const t = (0, M.useRef)(null),
            r = (0, be.CH)(),
            n = (0, Rs.m)("useThumbnailAsURL");
          return (
            (0, M.useEffect)(() => {
              if (s && !n?.token?.reason) {
                const l = new Blob([s], { type: "image/jpeg" }),
                  u = URL.createObjectURL(l);
                (t.current = u), r();
              }
              return () => {
                t.current &&
                  (URL.revokeObjectURL(t.current), (t.current = void 0));
              };
            }, [n?.token?.reason, s, r]),
            t.current
          );
        }
        function fc() {
          return Cn.Get().GetPerfMeasures();
        }
        function al(s, t, r, n, l, u, m) {
          const f = (0, U.q3)(() =>
            Cn.Get().GetOrQueueThumbnail(s, r, t, n, l, u, m),
          );
          return nl(f?.data);
        }
        function dc() {
          return Cn.Get().ClearThumbnailData();
        }
        var ei = E(92264);
        const sl = parseInt(we.thumbnailWidth),
          ll = M.forwardRef(function (t, r) {
            const {
                globalMS: n,
                children: l,
                imgClassName: u,
                className: m,
                ...f
              } = t,
              h = Ke(),
              b = h.GetGameID(),
              y = h.GetClipID(),
              w = (0, U.q3)(() => h.GetRecordingMode()),
              D = (0, U.q3)(() =>
                h.ConvertGlobaOffsetToRecordingAndRelativeOffset(n),
              ),
              W = li(),
              X = !1,
              V =
                D && X
                  ? Math.round(D.nRecordingOffsetMS * 100) / 100
                  : D?.nRecordingOffsetMS,
              A = al(b, y, D?.strRecordingID, V, D?.nStartOffsetMS, sl, X),
              [K, ne] = (0, M.useState)();
            return (
              (0, M.useEffect)(() => {
                A && ne(A);
              }, [A]),
              (0, c.jsxs)("div", {
                ref: r,
                className: (0, Q.A)(we.ThumbnailContainerOffset, we[w], m),
                ...f,
                children: [
                  (0, c.jsxs)("div", {
                    className: (0, Q.A)(
                      we.ThumbnailContents,
                      D?.strRecordingID && !K && we.Hide,
                      we[w],
                    ),
                    children: [
                      (0, c.jsx)("div", {
                        className: we.ImageAndInfoBoxContainer,
                        children: (0, c.jsxs)("div", {
                          className: we.ImageContainer,
                          children: [
                            D?.strRecordingID
                              ? (0, c.jsx)("img", {
                                  className: we.ThumbnailImage,
                                  src: K,
                                })
                              : (0, c.jsx)("div", {
                                  className: we.NoRecordedContent,
                                  children: (0, S.we)(
                                    "#GameRecording_PlayerNoContent",
                                  ),
                                }),
                            (0, c.jsx)(ol, {}),
                          ],
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className: (0, Q.A)(we.TooltipChildren),
                        children: l,
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className: (0, Q.A)(we.ThumbnailHitBoxPadding),
                  }),
                ],
              })
            );
          });
        function ol() {
          const s = Te(),
            t = (0, U.q3)(() => s.GetGameID()),
            r = (0, U.q3)(() => s.GetThumbnailComponent()),
            n = (0, U.q3)(() => s.GetThumbnailEntry());
          if (!n || r !== nr.Highlight) return null;
          if ((0, B.xz)(n.entry))
            return (0, c.jsx)(cl, {
              thumbnailEntry: n,
              achievementEntry: n.entry,
              strGameID: t,
            });
          let l = "",
            u = "";
          return (
            (0, B.In)(n.entry)
              ? (u =
                  (0, S.we)(n.entry.description) ||
                  "#GameRecording_UnknownError")
              : (0, B.N$)(n.entry)
                ? ((l = n.entry.title
                    ? n.entry.title
                    : (0, S.we)("#Marker_UserMarker_Title")),
                  (u = n.entry.description || ""))
                : (0, B.eJ)(n.entry) &&
                  ((l = n.entry.title || ""), (u = n.entry.description || "")),
            !l && !u
              ? null
              : (0, c.jsx)(qa, { title: l, description: u, thumbnailEntry: n })
          );
        }
        function cl(s) {
          const { strGameID: t, thumbnailEntry: r, achievementEntry: n } = s,
            l = new Ti.VS(t),
            u = Ei(l.GetAppID(), n.achievement_name);
          return u
            ? (0, c.jsx)(qa, {
                title: u.name ?? "",
                description: u.description ?? "",
                thumbnailEntry: r,
              })
            : null;
        }
        function qa(s) {
          const { title: t, description: r, thumbnailEntry: n } = s;
          return (0, c.jsxs)("div", {
            className: we.InfoBoxContainer,
            children: [
              (0, c.jsxs)("div", {
                className: we.Header,
                children: [
                  (0, c.jsx)("div", {
                    className: we.Icon,
                    children: (0, c.jsx)(xa, {
                      entry: n.entry,
                      strMarkerIcon: n.strMarkerIcon,
                    }),
                  }),
                  t && (0, c.jsx)("div", { className: we.Title, children: t }),
                ],
              }),
              (0, c.jsx)("div", {
                className: we.DescriptionBlock,
                children:
                  r &&
                  (0, c.jsx)("div", { className: we.Description, children: r }),
              }),
            ],
          });
        }
        const ul = M.forwardRef(function (t, r) {
          const { globalPX: n, onMouseEnter: l, onMouseLeave: u } = t,
            m = Te(),
            f = (0, U.q3)(() => m.ConvertPXOffsetToGlobalMS(n, !1)),
            h = (0, U.q3)(() => m.GetThumbnailComponent()),
            b = Ke(),
            y = (0, U.q3)(() => b.GetRecordingMode());
          return (0, c.jsxs)(ll, {
            className: (0, Q.A)(we.ThumbnailTooltip, we[y], we[h]),
            globalMS: f,
            ref: r,
            onMouseEnter: l,
            onMouseLeave: u,
            children: [
              (0, c.jsx)(dl, { globalMS: f }),
              (0, c.jsx)(ml, { globalMS: f }),
              (0, c.jsxs)("div", {
                className: we.TooltipInteractionRegion,
                children: [
                  h === nr.Highlight
                    ? (0, c.jsx)(hl, {})
                    : (0, c.jsx)(Ml, { globalPX: n }),
                  (0, c.jsx)(bl, { globalMS: f }),
                ],
              }),
            ],
          });
        });
        function ml(s) {
          const { globalMS: t } = s,
            r = Te(),
            n = (0, U.q3)(() => r.GetStateDescriptionAtGlobalMS(t));
          return n?.title
            ? (0, c.jsx)("div", {
                className: we.StateDescription,
                children: n.title,
              })
            : null;
        }
        function fl(s, t) {
          return s.priority - t.priority;
        }
        function dl(s) {
          const { globalMS: t } = s,
            { setSelectedMarker: r } = si(),
            n = Te(),
            l = Ke(),
            u = (0, U.q3)(() => n.FindRangeEventsAtGlobalMS(t)),
            m = 3,
            f = u.length > m ? u.sort(fl).slice(0, m) : u,
            h = (b, y) => {
              const w = parseInt(y.duration),
                { nTimelineOffsetMS: D, strTimelineID: W } =
                  l.ConvertGlobalOffsetToTimelineRelativeOffset(t),
                X = t - D.valMS + parseInt(y.time),
                [V, A] = l.GetLoader().CreateGlobalRangeForTimeline(W, X, 0, w);
              l.SetPlaytimeFromGlobalMS((0, Fe.Sb)(V)),
                r?.(y.id, W, V, A),
                ze.ReportTrackedAction(
                  "/GameRecording/Tooltip/ClipFromRangeEvent",
                ),
                b.stopPropagation();
            };
          return (0, c.jsx)(c.Fragment, {
            children: f.map((b, y) =>
              (0, c.jsxs)(
                "div",
                {
                  className: we.TooltipRangeContainer,
                  onClick: (w) => h(w, b),
                  children: [
                    b.icon &&
                      (0, c.jsx)(ka, {
                        gameID: l.GetGameID(),
                        icon: b.icon,
                        className: we.RangeIcon,
                      }),
                    (0, c.jsx)("div", {
                      className: we.Title,
                      children: b.title,
                    }),
                    (0, c.jsx)("div", {
                      className: we.Duration,
                      children: (0, ei.qZ)(parseInt(b.duration) / 1e3, !1),
                    }),
                  ],
                },
                `${b.time}_${y}`,
              ),
            ),
          });
        }
        function hl() {
          const s = Ke(),
            t = (0, U.q3)(() => s.GetRecordingMode()),
            r = Te(),
            n = (0, U.q3)(() => r.GetThumbnailEntry());
          if (!n) return null;
          const l = r.GetTimelineOffsetMS(n.strTimelineID),
            u = parseInt(n.entry.time),
            m = (0, Fe.sK)(u - l),
            f = s.MakeRelativeToTimelineEndIfActive(n.strTimelineID, m.valMS);
          let h = "";
          if ((0, B.zG)(n.entry)) {
            const b = f + parseInt(n.entry.duration);
            if (f < 0) {
              const y = (0, ei.qZ)(Math.abs(f / 1e3), !1, !1),
                w = (0, ei.qZ)(Math.abs(b / 1e3), !1, !1);
              h = (0, S.we)("#Duration_WrittenNegation", y + " - " + w);
            } else {
              const y = (0, ei.qZ)(f / 1e3, !1, !1),
                w = (0, ei.qZ)(b / 1e3, !1, !1);
              h = y + " - " + w;
            }
          } else h = (0, ei.qZ)(f / 1e3, !1, !0);
          return (0, c.jsx)("div", {
            className: (0, Q.A)(we.TimeDisplayContainer, we.Highlight, we[t]),
            children: h,
          });
        }
        function Ml(s) {
          const { globalPX: t } = s,
            r = Te(),
            n = (0, U.q3)(() =>
              r.ConvertPXToTimelineRelativeMS(t, "end-if-active"),
            );
          return n
            ? (0, c.jsx)("div", {
                className: we.TimeDisplayContainer,
                children: (0, ei.qZ)(n / 1e3, !1, !0),
              })
            : null;
        }
        function bl(s) {
          const { globalMS: t } = s,
            r = Te(),
            n = (0, U.q3)(() => r.GetGameID()),
            l = (0, U.q3)(() => r.GetThumbnailComponent()),
            u = (0, U.q3)(() => r.GetThumbnailEntry());
          let m = [
            (0, c.jsx)(Sl, { globalMS: t }, "add_marker"),
            (0, c.jsx)(Bl, { globalMS: t }, "view_clip"),
          ];
          return (
            l == nr.Highlight &&
              u &&
              ((0, B.In)(u.entry) || (0, B.xz)(u.entry) || (0, B.eJ)(u.entry)
                ? (m = [
                    (0, c.jsx)(Gn, { markerInfo: u }, "create_marker_clip"),
                    (0, c.jsx)(Rn, { markerInfo: u }, "view_clip"),
                  ])
                : (0, B.sX)(u.entry)
                  ? (m = [
                      (0, c.jsx)(Gn, { markerInfo: u }, "create_marker_clip"),
                      (0, c.jsx)(
                        yl,
                        { entry: u.entry, gameID: n },
                        "view_screen",
                      ),
                      (0, c.jsx)(Rn, { markerInfo: u }, "view_clip"),
                    ])
                  : (0, B.N$)(u.entry) &&
                    (m = [
                      (0, c.jsx)(pl, { markerInfo: u }, "edit_user"),
                      (0, c.jsx)(Gn, { markerInfo: u }, "create_marker_clip"),
                      (0, c.jsx)(gl, { markerInfo: u }, "delete_user"),
                      (0, c.jsx)(Rn, { markerInfo: u }, "view_clip"),
                    ])),
            (0, c.jsx)("div", { className: we.TooltipButtons, children: m })
          );
        }
        function Gn(s) {
          const { setSelectedMarker: t } = si(),
            { markerInfo: r } = s,
            n = Ke(),
            l = (0, U.q3)(() => n.ShouldModeShowClipControls()),
            u = (0, U.q3)(() =>
              n.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                r.nGlobalMS.valMS,
              ),
            ),
            m = yi(),
            f = Ji(),
            h = (b) => {
              let y = Aa,
                w = Va;
              (0, B.zG)(r.entry) && ((y = 0), (w = parseInt(r.entry.duration)));
              const [D, W] = n
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  r.strTimelineID,
                  r.nGlobalMS.valMS,
                  y,
                  w,
                );
              n.SetPlaytimeFromGlobalMS((0, Fe.Sb)(D)),
                t?.(r.entry.id, r.strTimelineID, D, W),
                f(),
                ze.ReportTrackedAction(
                  "/GameRecording/Tooltip/ClipFromHighlight",
                ),
                b.stopPropagation();
            };
          return !u?.strRecordingID || !l
            ? null
            : (0, c.jsx)(Ee.he, {
                toolTipContent: (0, S.we)(
                  m
                    ? "#RecordingState_Clip_LowDiskSpace"
                    : "#TimelineDialog_ClipVideo",
                ),
                direction: "top",
                bTopmost: !0,
                children: (0, c.jsx)("div", {
                  className: (0, Q.A)(we.Button, we.CreateClipButton),
                  onClick: h,
                  children: (0, c.jsx)(o.Wd, {}),
                }),
              });
        }
        function Rn(s) {
          const { markerInfo: t } = s,
            r = Te(),
            n = (0, U.q3)(() =>
              r.ConvertGlobalMSToClipOrNone(t.nGlobalMS.valMS),
            ),
            { onNavigateToClip: l } = wi(),
            u = () => {
              n &&
                (ze.ReportTrackedAction(
                  `/GameRecording/Tooltip/ViewClip/${t.entry.type}`,
                ),
                l(n.clipID));
            };
          return n
            ? (0, c.jsx)(Ee.he, {
                toolTipContent: (0, S.we)("#TimelineDialog_ViewClip"),
                direction: "top",
                bTopmost: !0,
                children: (0, c.jsx)("div", {
                  className: (0, Q.A)(we.Button, we.GoToClipFromMarker),
                  onClick: u,
                  children: (0, c.jsx)(Ii.CeX, {}),
                }),
              })
            : null;
        }
        function gl(s) {
          const { markerInfo: t } = s,
            r = Ke(),
            n = Te(),
            l = (u) => {
              (0, B.N$)(t.entry) &&
                (ze.ReportTrackedAction(
                  `/GameRecording/Marker/Delete/${t.entry.type}`,
                ),
                r.RemoveUserMarker(t.strTimelineID, t.entry.id),
                n.SetThumbnailComponent(null));
            };
          return (0, c.jsx)(Ee.he, {
            toolTipContent: (0, S.we)("#Marker_Action_Delete"),
            direction: "top",
            bTopmost: !0,
            children: (0, c.jsx)("div", {
              className: (0, Q.A)(we.Button, we.DeleteMarker),
              onClick: l,
              children: (0, c.jsx)(Ii.lMJ, {}),
            }),
          });
        }
        function pl(s) {
          const { markerInfo: t } = s,
            r = Ke(),
            n = Zi(),
            l = (u) => {
              if (!(0, B.N$)(t.entry)) return;
              ze.ReportTrackedAction(
                `/GameRecording/Marker/Edit/${t.entry.type}`,
              );
              let m = (0, c.jsx)(Ea, {
                entry: t.entry,
                playbackCoordinator: r,
                fnClearSelection: n,
                strTimelineID: t.strTimelineID,
              });
              (0, i.pg)(m, (0, F.uX)(u)),
                u.stopPropagation(),
                u.preventDefault();
            };
          return (0, c.jsx)(Ee.he, {
            toolTipContent: (0, S.we)("#Marker_Action_Edit"),
            direction: "top",
            bTopmost: !0,
            children: (0, c.jsx)("div", {
              className: (0, Q.A)(we.Button, we.EditMarker),
              onClick: l,
              children: (0, c.jsx)(o.ff, {}),
            }),
          });
        }
        function yl(s) {
          const { entry: t, gameID: r } = s,
            n = t.handle,
            { onNavigateToScreenshot: l } = wi(),
            u = () => {
              n &&
                (ze.ReportTrackedAction("/GameRecording/Tooltip/Screenshot"),
                l(r, n));
            };
          return (0, c.jsx)(Ee.he, {
            toolTipContent: (0, S.we)("#TimelineDialog_ViewScreenshot"),
            direction: "top",
            bTopmost: !0,
            children: (0, c.jsx)("div", {
              className: (0, Q.A)(we.Button, we.ViewScreenshot),
              onClick: u,
              children: (0, c.jsx)(o.pw, {}),
            }),
          });
        }
        function Sl(s) {
          const { globalMS: t } = s,
            r = Ke();
          if (
            !(0, U.q3)(() =>
              r.ConvertGlobaOffsetToRecordingAndRelativeOffset(t),
            )?.strRecordingID
          )
            return null;
          const l = () => {
            r.AddUserMarkerAtGlobalMS(
              (0, Fe.Sb)(t),
              "/GameRecording/AddMarker/Thumbnail",
              null,
            ),
              r.SetPlaytimeFromGlobalMS((0, Fe.Sb)(t));
          };
          return (0, c.jsx)(Ee.he, {
            toolTipContent: (0, S.we)("#TimelineDialog_AddMarker"),
            direction: "top",
            children: (0, c.jsx)("div", {
              className: (0, Q.A)(we.Button, we.AddMarker),
              onClick: l,
              children: (0, c.jsx)(o.pH, {}),
            }),
          });
        }
        function Bl(s) {
          const { globalMS: t } = s,
            r = Te(),
            n = (0, U.q3)(() => r.ConvertGlobalMSToClipOrNone(t)),
            { onNavigateToClip: l } = wi(),
            u = () => {
              n &&
                (ze.ReportTrackedAction(
                  "/GameRecording/Tooltip/ViewClip/timeline",
                ),
                l(n.clipID));
            };
          return n
            ? (0, c.jsx)(Ee.he, {
                toolTipContent: (0, S.we)("#TimelineDialog_ViewClip"),
                direction: "top",
                children: (0, c.jsx)("div", {
                  className: (0, Q.A)(we.Button, we.GoToClip),
                  onClick: u,
                  children: (0, c.jsx)(Ii.CeX, {}),
                }),
              })
            : null;
        }
        const vl = M.memo(function (t) {
            const r = Rr(),
              n = Jn(),
              l = Te(),
              u = Ke(),
              m = Ha(),
              f = (0, M.useCallback)(
                (b) => {
                  if (!n) return;
                  const y = b.currentTarget.getBoundingClientRect(),
                    w = et.OQ(b.clientX - y.x, 0, y.width),
                    D = l.ConvertPXOffsetToGlobalMS(w, !1);
                  D &&
                    u.SetPlaytimeFromGlobalMS(
                      (0, Fe.Sb)(D),
                      void 0,
                      void 0,
                      !0,
                    );
                },
                [n, u, l],
              ),
              h = (0, M.useCallback)(
                (b) => {
                  if (!n) return;
                  const y = b.currentTarget.getBoundingClientRect(),
                    w = et.OQ(b.clientX - y.x, 0, y.width),
                    D = l.ConvertPXOffsetToGlobalMS(w, !1);
                  D &&
                    (m(b, (0, Fe.Sb)(D), !1, {
                      bDisableMouseOverlay: !0,
                      bForcePopup: !0,
                      bAlwaysOnTop: !0,
                    }),
                    b.preventDefault(),
                    b.stopPropagation());
                },
                [n, l, m],
              );
            return (
              Yn("click", f),
              Yn("contextmenu", h),
              (0, c.jsx)(Tl, { globalMouseXPX: r.globalMouseXPX.valPX || 0 })
            );
          }),
          Tl = M.memo(function (t) {
            const { globalMouseXPX: r } = t,
              n = Na(),
              l = Te(),
              u = Jn(),
              m = (0, U.q3)(() => {
                if (l.GetThumbnailComponent()) return l.GetThumbnailPosition();
              }),
              [f, h] = (0, M.useState)(),
              [b, y] = (0, M.useState)();
            return (
              (0, M.useEffect)(() => {
                if (!isNaN(m)) {
                  h(m);
                  return;
                }
                !b && n && h(r);
              }, [b, n, u, r, m]),
              (0, c.jsx)("div", {
                className: Ri.GhostPlayheadCtn,
                style: { transform: `translateX( calc(${f}px - 50%))` },
                children: (0, c.jsx)(wl, {
                  globalPX: f,
                  setInteractingWithThumbnail: y,
                  bInteractingWithThumbnail: b,
                }),
              })
            );
          });
        function wl(s) {
          const {
              globalPX: t,
              setInteractingWithThumbnail: r,
              bInteractingWithThumbnail: n,
            } = s,
            l = Te(),
            u = Ke(),
            m = (0, U.q3)(() => u.GetRecordingMode() === "Overlay"),
            f = (0, U.q3)(() => l.ConvertPXOffsetToGlobalMS(t, !1)),
            h = (0, U.q3)(() => l.GetTimelineParentCtnRef()),
            b = (0, M.useRef)(void 0),
            y = (0, M.useRef)(void 0),
            w = (0, M.useRef)(void 0),
            D = (0, U.q3)(() => l.GetThumbnailComponent()),
            W = Jn(),
            X = () => r(!0),
            V = (Ze) => r(!1),
            A = (0, Ee.fS)({
              toolTipContent: (0, c.jsx)(ul, {
                globalPX: t,
                ref: b,
                onMouseEnter: X,
                onMouseLeave: V,
              }),
              direction: m ? "bottom" : "top",
              nDelayShowMS: 0,
              nBodyDistance: 0,
              nAllowOffscreenPx: 0,
            }),
            { setHovered: K, setTarget: ne } = A.stateHandlers,
            G = (0, M.useCallback)(() => {
              K(!1),
                r(!1),
                w.current && w.current(),
                (w.current = null),
                l.GetAutoScrollPaused() && l.SetAutoScrollPauseTimeout(),
                l.SetThumbnailComponent(null);
            }, [r, K, l]),
            te = (0, M.useCallback)(
              (Ze, Xt) => {
                if (!y.current || !b.current) return;
                const ur = y.current.getBoundingClientRect(),
                  mi = ur.left,
                  fi = ur.right;
                let di = ur.top,
                  xi = ur.bottom;
                if (b.current) {
                  const ki = b.current.getBoundingClientRect();
                  m ? (xi = ki.bottom) : (di = ki.top);
                }
                (Ze <= mi || Ze >= fi || Xt <= di || Xt >= xi) && G();
              },
              [m, G],
            ),
            oe = (0, M.useCallback)(
              (Ze) => {
                const Xt = l.GetThumbnailComponent();
                (Xt && Xt !== nr.Highlight) || te(Ze.clientX, Ze.clientY);
              },
              [te, l],
            ),
            xe = (0, M.useCallback)(
              (Ze) => {
                te(Ze.clientX, Ze.clientY);
              },
              [te],
            ),
            Ce = (0, M.useCallback)(() => {
              K(!0), ne(y.current);
              const Ze = (0, F.qf)(y.current);
              Ze &&
                !w.current &&
                (Ze.addEventListener("mousemove", oe),
                Ze.addEventListener("mouseup", xe),
                (w.current = () => {
                  Ze.removeEventListener("mousemove", oe),
                    Ze.removeEventListener("mouseup", xe);
                }));
            }, [oe, xe, K, ne]);
          Yn("mouseenter", Ce),
            (0, M.useEffect)(() => {
              const Ze = (Xt) => {
                const ur = l.GetThumbnailComponent();
                (ur && ur === nr.Playhead) ||
                  ur === nr.RangeLeft ||
                  ur === nr.RangeRight ||
                  (b.current && !(0, F.id)(b.current, Xt.relatedTarget) && G());
              };
              return (
                h && h.addEventListener("mouseleave", Ze),
                () => h && h.removeEventListener("mouseleave", Ze)
              );
            }, [G, h, l]),
            (0, M.useEffect)(() => G, [G]);
          const dr = (W || n) && f && !D;
          return (0, c.jsxs)("div", {
            ref: y,
            className: Ri.TooltipHoverSource,
            children: [
              (0, c.jsx)(Ja, {
                className: (0, Q.A)(Ri.GhostPlayhead, dr && Ri.Show),
              }),
              !!f && A.tooltip,
            ],
          });
        }
        var Hr = E(2508);
        const $a = 500;
        var Il = ((s) => (
          (s.none = "none"), (s.left = "left"), (s.right = "right"), s
        ))(Il || {});
        const Ol = (0, M.memo)(function () {
            const [t, r] = (0, M.useState)("none"),
              n = Ai(),
              l = ni(),
              u = ai();
            return !n || !l || !u
              ? null
              : (0, c.jsx)("div", {
                  className: Hr.RangeControls,
                  children: (0, c.jsx)(zl, {
                    activeControlState: t,
                    setActiveControlState: r,
                  }),
                });
          }),
          zl = (0, M.memo)(function (t) {
            const { activeControlState: r, setActiveControlState: n } = t,
              [l, u] = (0, M.useState)(),
              [m, f] = (0, M.useState)(),
              h = ni(),
              b = ai(),
              y = Te(),
              w = (0, U.q3)(() => y.ConvertGlobalMSToGlobalPXOffset(h.valMS)),
              D = (0, U.q3)(() => y.ConvertGlobalMSToGlobalPXOffset(b.valMS)),
              W = (0, M.useCallback)(
                (K) => {
                  u(K), y.SetAutoScrollPauseTimeout();
                },
                [y],
              ),
              X = (0, M.useCallback)(
                (K) => {
                  f(K), y.SetAutoScrollPauseTimeout();
                },
                [y],
              ),
              V = (0, M.useCallback)(
                (K) => {
                  r === "none" && K.stopPropagation();
                },
                [r],
              ),
              A = (0, M.useCallback)(
                (K) => {
                  r === "none" && K.stopPropagation();
                },
                [r],
              );
            return (0, c.jsx)("div", {
              className: (0, Q.A)(
                Hr.RangeSelectorCtn,
                r !== "none" && Hr.Active,
              ),
              onMouseOver: V,
              onMouseOut: A,
              onFocus: V,
              onBlur: A,
              children: (0, c.jsxs)("div", {
                className: Hr.TrackRangeControls,
                children: [
                  (0, c.jsx)(kl, {
                    isActive: r === "left",
                    setControlState: n,
                    setRangeControlPX: W,
                    pxOffset: l,
                  }),
                  (0, c.jsx)(Wl, {
                    startOffsetPX: (r === "left" && l) || w,
                    endOffsetPX: (r === "right" && m) || D,
                    className: Hr.SelectedRangeMask,
                  }),
                  (0, c.jsx)(Dl, {
                    isActive: r === "right",
                    setControlState: n,
                    setRangeControlPX: X,
                    pxOffset: m,
                  }),
                ],
              }),
            });
          });
        function _i(s, t, r) {
          const l = t.GetVisualWindowStartPX() - t.GetTimelineMarginWidth(),
            u = l + t.GetVisualWidth(),
            m = Math.max(0, l + 3),
            f = Math.min(t.GetScrollableWidthPX(), u - 3);
          r(et.OQ(s, m, f));
        }
        function xl(s, t, r, n, l, u) {
          const m = (0, M.useRef)(void 0),
            f = (0, M.useRef)(!1),
            h = (0, M.useRef)(void 0),
            b = (0, M.useRef)(void 0),
            y = (0, U.q3)(() => t.GetScrollableWidthPX()),
            w = (0, U.q3)(() => t.GetScrollWindowWidth());
          (0, M.useEffect)(
            () => () => {
              h.current &&
                (cancelAnimationFrame(h.current),
                (h.current = null),
                (b.current = null));
            },
            [],
          );
          const D = M.useCallback(
            (W, X, V, A, K) => {
              if (K(X))
                u(
                  et.OQ(
                    X.GetVisualWindowStartPX() + V,
                    0,
                    X.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(h.current),
                  (h.current = null),
                  (b.current = null);
              else {
                if (
                  (h.current &&
                    (h.current = requestAnimationFrame((ne) =>
                      D(ne, X, V, A, K),
                    )),
                  b.current)
                ) {
                  const G = ((W - b.current) / $a) * A;
                  X.ScrollBy(G),
                    u((te) => et.OQ(te + G, 0, X.GetScrollableWidthPX()));
                }
                b.current = W;
              }
            },
            [u],
          );
          (0, M.useEffect)(() => {
            h.current &&
              (cancelAnimationFrame(h.current),
              (h.current = null),
              (b.current = null));
            const W = w * (1 - ui),
              X = w * ui,
              V = t.ConvertGlobalMSToGlobalPXOffset(r.valMS),
              A = t.ConvertGlobalMSToScrollWindowPXOffset(r.valMS);
            if (n.valPX > V) {
              u(V), l("right"), t.SetThumbnailComponent(nr.RangeRight);
              return;
            }
            if (s.valPX < X && !t.BReachedMinScroll()) {
              if (s.valPX > m.current) f.current = !0;
              else if (s.valPX < m.current || !f.current) {
                const K = Math.min(X, A),
                  ne = s.valPX - K,
                  te = et.OQ(Math.abs(ne / K), 0, 1) * ne;
                (h.current = requestAnimationFrame((oe) =>
                  D(oe, t, s.valPX, te, t.BReachedMinScroll),
                )),
                  (f.current = !1);
              }
              _i(n.valPX, t, u);
            } else if (s.valPX > W && A > W && !t.BReachedMaxScroll()) {
              if (s.valPX < m.current) f.current = !0;
              else if (s.valPX > m.current || !f.current) {
                const K = (oe) => {
                    const xe = oe.ConvertGlobalMSToScrollWindowPXOffset(
                      r.valMS,
                    );
                    return oe.BReachedMaxScroll() || xe <= W;
                  },
                  ne = s.valPX - W,
                  te = et.OQ(Math.abs(ne / (w - W)), 0, 1) * ne;
                (h.current = requestAnimationFrame((oe) =>
                  D(oe, t, s.valPX, te, K),
                )),
                  (f.current = !1);
              }
              _i(n.valPX, t, u);
            } else u(et.OQ(n.valPX, 0, y));
            m.current = s.valPX;
          }, [n.valPX, r.valMS, s.valPX, l, t, u, y, D, w]);
        }
        const kl = (0, M.memo)(function (t) {
          const {
              isActive: r,
              setControlState: n,
              setRangeControlPX: l,
              pxOffset: u,
            } = t,
            m = ni();
          return r
            ? (0, c.jsx)(jl, {
                setControlState: n,
                setRangeControlPX: l,
                pxOffset: u,
              })
            : (0, c.jsx)(Qa, {
                offsetMS: m.valMS,
                direction: "left",
                setControlState: n,
                setRangeControlPX: l,
              });
        });
        function jl(s) {
          const { setControlState: t, setRangeControlPX: r, pxOffset: n } = s,
            l = Vi(),
            u = ai(),
            m = Te(),
            f = Ci(),
            h = Zn();
          return (
            xl(h, m, u, f, t, r),
            (0, M.useEffect)(() => {
              isNaN(n) ||
                (m.SetThumbnailPosition(n),
                l(jt.Ov.TQ, (0, Fe.Sb)(m.ConvertPXOffsetToGlobalMS(n))));
            }, [n, l, m]),
            (0, c.jsx)(_n, { offsetPX: n, direction: "left" })
          );
        }
        const Dl = (0, M.memo)(function (t) {
          const {
              isActive: r,
              setControlState: n,
              setRangeControlPX: l,
              pxOffset: u,
            } = t,
            m = ai();
          return r
            ? (0, c.jsx)(El, {
                setControlState: n,
                setRangeControlPX: l,
                pxOffset: u,
              })
            : (0, c.jsx)(Qa, {
                offsetMS: m.valMS,
                direction: "right",
                setControlState: n,
                setRangeControlPX: l,
              });
        });
        function El(s) {
          const { setControlState: t, setRangeControlPX: r, pxOffset: n } = s,
            l = Ki(),
            u = ni(),
            m = Te(),
            f = Ci(),
            h = Zn();
          return (
            Pl(h, m, u, f, t, r),
            (0, M.useEffect)(() => {
              isNaN(n) ||
                (m.SetThumbnailPosition(n),
                l(jt.Ov.TQ, (0, Fe.Sb)(m.ConvertPXOffsetToGlobalMS(n))));
            }, [n, l, m]),
            (0, c.jsx)(_n, { offsetPX: n, direction: "right" })
          );
        }
        function Pl(s, t, r, n, l, u) {
          const m = (0, M.useRef)(void 0),
            f = (0, M.useRef)(!1),
            h = (0, M.useRef)(void 0),
            b = (0, M.useRef)(void 0),
            y = (0, U.q3)(() => t.GetScrollableWidthPX()),
            w = (0, U.q3)(() => t.GetScrollWindowWidth());
          (0, M.useEffect)(
            () => () => {
              h.current &&
                (cancelAnimationFrame(h.current),
                (h.current = null),
                (b.current = null));
            },
            [],
          );
          const D = M.useCallback(
            (W, X, V, A, K) => {
              if (K(X))
                u(
                  et.OQ(
                    X.GetVisualWindowStartPX() + V,
                    0,
                    X.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(h.current),
                  (h.current = null),
                  (b.current = null);
              else {
                if (
                  (h.current &&
                    (h.current = requestAnimationFrame((ne) =>
                      D(ne, X, V, A, K),
                    )),
                  b.current)
                ) {
                  const G = ((W - b.current) / $a) * A;
                  X.ScrollBy(G),
                    u((te) => et.OQ(te + G, 0, X.GetScrollableWidthPX()));
                }
                b.current = W;
              }
            },
            [u],
          );
          (0, M.useEffect)(() => {
            h.current &&
              (cancelAnimationFrame(h.current),
              (h.current = null),
              (b.current = null));
            const W = w * (1 - ui),
              X = w * ui,
              V = t.ConvertGlobalMSToGlobalPXOffset(r.valMS),
              A = t.ConvertGlobalMSToScrollWindowPXOffset(r.valMS);
            if (n.valPX < V) {
              u(V), l("left"), t.SetThumbnailComponent(nr.RangeLeft);
              return;
            }
            if (s.valPX > W && !t.BReachedMaxScroll()) {
              if (s.valPX < m.current) f.current = !0;
              else if (s.valPX > m.current || !f.current) {
                const K = Math.max(W, A),
                  ne = s.valPX - K,
                  te = et.OQ(Math.abs(ne / (w - K)), 0, 1) * ne;
                (h.current = requestAnimationFrame((oe) =>
                  D(oe, t, s.valPX, te, t.BReachedMaxScroll),
                )),
                  (f.current = !1);
              }
              _i(n.valPX, t, u);
            } else if (
              s.valPX < X &&
              A < X &&
              s.valPX <= m.current &&
              !t.BReachedMinScroll()
            ) {
              if (s.valPX > m.current) f.current = !0;
              else if (s.valPX < m.current || !f.current) {
                const K = s.valPX - X,
                  G = et.OQ(Math.abs(K / X), 0, 1) * K,
                  te = (oe) =>
                    oe.ConvertGlobalMSToScrollWindowPXOffset(r.valMS) > X ||
                    oe.BReachedMinScroll();
                (h.current = requestAnimationFrame((oe) =>
                  D(oe, t, s.valPX, G, te),
                )),
                  (f.current = !1);
              }
              _i(n.valPX, t, u);
            } else u(et.OQ(n.valPX, 0, y));
            m.current = s.valPX;
          }, [r.valMS, s.valPX, l, t, u, y, w, n.valPX, D]);
        }
        function Qa(s) {
          const {
              offsetMS: t,
              direction: r,
              setControlState: n,
              setRangeControlPX: l,
            } = s,
            u = Te(),
            m = (0, U.q3)(() => u.ConvertGlobalMSToGlobalPXOffset(t));
          (0, M.useEffect)(
            () => (
              l(void 0),
              () => {
                l(m);
              }
            ),
            [m, l],
          );
          const f = (0, M.useCallback)(
              (y) => {
                const w = (0, F.uX)(y);
                let D, W;
                const X = () => {
                  n(r),
                    u.SetThumbnailComponent(
                      r === "left" ? nr.RangeLeft : nr.RangeRight,
                    ),
                    D();
                };
                w.addEventListener("mousemove", X),
                  (D = () => w.removeEventListener("mousemove", X));
                const V = () => {
                  n("none"), u.SetThumbnailComponent(null), D(), W();
                };
                w.addEventListener("mouseup", V),
                  (W = () => w.removeEventListener("mouseup", V));
              },
              [r, n, u],
            ),
            h = (y) => {
              u.SetThumbnailComponent(
                r === "left" ? nr.RangeLeft : nr.RangeRight,
              );
            },
            b = (y) => {
              u.SetThumbnailComponent(null);
            };
          return (0, c.jsx)("div", {
            className: Hr.InactiveSelectedRangeControl,
            onMouseDown: f,
            onMouseOver: h,
            onFocus: h,
            onMouseOut: b,
            onBlur: b,
            children: (0, c.jsx)(_n, { offsetPX: m, direction: r }),
          });
        }
        const Wl = (0, M.memo)(function (t) {
            const { startOffsetPX: r, endOffsetPX: n, className: l } = t;
            if (isNaN(r) || isNaN(n)) return null;
            const m = { width: n - r || 0, transform: `translateX(${r}px)` };
            return (0, c.jsx)("div", {
              className: (0, Q.A)(Hr.RangeMask, l),
              style: m,
            });
          }),
          _n = (0, M.memo)(function (t) {
            const { direction: r, offsetPX: n } = t,
              l = { transform: `translateX( calc( ${n}px - 50%) )` },
              u = Te(),
              m = (0, U.q3)(() => u.GetThumbnailComponent() === nr.Playhead);
            return (0, c.jsx)("div", {
              style: l,
              className: (0, Q.A)(Hr.RangeControl),
              children: (0, c.jsx)("div", {
                className: (0, Q.A)(
                  Hr.RangeIcon,
                  r === "left" && Hr.Left,
                  m && Hr.Hide,
                ),
                children: (0, c.jsx)(Fl, {
                  innerFill: "#171d25",
                  direction: r,
                }),
              }),
            });
          });
        function Fl(s) {
          return (0, c.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 3 36",
            fill: "none",
            style: {
              transform: `rotate(${s.direction === "right" ? 180 : 0}deg)`,
            },
            children: [
              (0, c.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 0)",
              }),
              (0, c.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 10)",
              }),
              (0, c.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 20)",
              }),
              (0, c.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 30)",
              }),
            ],
          });
        }
        var Ca = E(28361);
        const Ll = 100,
          Nl = M.memo(function (t) {
            const r = Te(),
              n = (0, U.q3)(() => r.GetVisibleWindowRelativeTimelines()),
              u = Ke().GetRecordingMode();
            let m = [],
              f = "";
            for (let h of n) {
              let b = r.GetTimeRecorded(h.timelineID),
                y = (0, S._l)(b);
              y != f && (m.push({ timeline: h, strLabel: y }), (f = y));
            }
            for (let h = m.length - 2; h >= 0; h--) {
              let b = m[h];
              m[h + 1].timeline.nVisibleStartPX - b.timeline.nVisibleStartPX >=
                Ll || m.splice(h, 1);
            }
            return (0, c.jsx)(c.Fragment, {
              children: m.map((h) =>
                (0, c.jsx)(
                  Ul,
                  {
                    startPX: h.timeline.nVisibleStartPX,
                    label: h.strLabel,
                    recordingMode: u,
                  },
                  h.timeline.timelineID,
                ),
              ),
            });
          });
        function Ul(s) {
          const { label: t, startPX: r, recordingMode: n } = s;
          let l = n == ri.Overlay;
          return (0, c.jsx)("div", {
            className: (0, Q.A)(Ca.TimelineRelativeDate, l && Ca.Overlay),
            style: { transform: `translateX(${r}px)` },
            children: t,
          });
        }
        var ci = E(78760);
        const Hl = (0, M.memo)(function (t) {
          const r = Te(),
            n = (0, U.q3)(() => r.GetVisibleRecordings());
          return (0, c.jsx)(c.Fragment, {
            children: n.map((l) =>
              (0, c.jsx)(
                Xl,
                {
                  startPX: l.nStartPX,
                  endPX: l.nEndPX,
                  isActive: l.bIsActive,
                  recordingType: l.recordingType,
                },
                l.recordingID,
              ),
            ),
          });
        });
        function Xl(s) {
          const { isActive: t, endPX: r, startPX: n, recordingType: l } = s,
            u = { width: r - n || 0, transform: `translateX(${n}px)` },
            m = li(),
            f = l === fn,
            h = l === Ni;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("div", {
                className: (0, Q.A)(
                  ci.RecordingDecorator,
                  f && ci.Clip,
                  h && ci.Manual,
                  m && ci.ClipMode,
                ),
                style: u,
              }),
              t && (0, c.jsx)(Al, { endPX: r }),
            ],
          });
        }
        function Al(s) {
          const { endPX: t } = s,
            r = Ke(),
            n = Te(),
            l = (0, U.q3)(() => r.GetRecordingMode() === "Overlay"),
            u = Ui(r.GetGameID()),
            m = (0, U.q3)(() => r.GetIsLiveEdge() && !r.GetHidePlayer()),
            f = (0, U.q3)(() => {
              const b = r.GetLiveEdgeBufferWindowStartMS();
              return n.ConvertGlobalMSToGlobalPXOffset(b.valMS);
            });
          if (!l || u !== Qr.BackgroundRecording) return null;
          const h = { width: t - f || 0, transform: `translateX(${f}px)` };
          return (0, c.jsx)("div", {
            className: (0, Q.A)(ci.LiveRecordingBuffer, m && ci.IsLive),
            style: h,
          });
        }
        var Vl = E(10564);
        const Kl = (0, M.memo)(function (t) {
            const r = Te(),
              n = (0, U.q3)(() => r.GetVisibleClips());
            return (0, c.jsx)(c.Fragment, {
              children: n.map((l) =>
                (0, c.jsx)(
                  Zl,
                  { startPX: l.pxClipStart, endPX: l.pxClipEnd },
                  l.clipID,
                ),
              ),
            });
          }),
          Zl = (0, M.memo)(function (t) {
            const { endPX: r, startPX: n } = t,
              l = { width: r - n || 0, transform: `translateX(${n}px)` };
            return (0, c.jsx)("div", { className: Vl.ClipDecorator, style: l });
          });
        var fr = E(99550),
          en = E(35009),
          Jl = E(19298);
        function Yl() {
          const s = Ke(),
            t = Ui(s.GetGameID());
          return t === Qr.NotRecording || t === Qr.NotRunning
            ? null
            : (0, c.jsx)(ql, {});
        }
        function ql(s) {
          const t = Ke(),
            r = (0, U.q3)(() => t.GetIsLiveEdge() && !t.GetHidePlayer()),
            n = M.useCallback(() => {
              t.SetHidePlayer(!1), t.GetGameRecordingVideo().Play();
              const l = t.GetLiveEdgeMS();
              t.SetPlaytimeFromGlobalMS(l), t.FocusGlobalMS(l);
            }, [t]);
          return (0, c.jsx)(Ee.he, {
            className: en.GoLiveButtonCtn,
            toolTipContent: (0, S.we)(
              r ? "#Playback_AtLatest" : "#Playback_JumpToLatest",
            ),
            direction: "bottom",
            children: (0, c.jsx)(Jl.Z, {
              onClick: n,
              className: (0, Q.A)(en.GoLiveButton, r && en.IsLive),
              children: (0, c.jsx)(o.xA, {
                className: (0, Q.A)(en.JumpToEndIcon),
              }),
            }),
          });
        }
        const $l = (0, M.forwardRef)(function (t, r) {
            const n = Te();
            return (0, U.q3)(() => !n.BEmpty())
              ? (0, c.jsx)(Cl, { ...t, timelineView: n, ref: r })
              : (0, c.jsx)(Ql, { ref: r });
          }),
          Ql = (0, M.forwardRef)(function (t, r) {
            return (0, c.jsx)("div", {
              ref: r,
              className: (0, Q.A)(fr.ScrollbarPlaceholder, t.className),
            });
          }),
          Cl = (0, M.forwardRef)(function (t, r) {
            const n = Ke(),
              {
                children: l,
                className: u,
                timelineView: m,
                disableZoom: f,
              } = t,
              [h, b] = (0, M.useState)(),
              y = M.useCallback(
                (V) => {
                  const A = V.target.getBoundingClientRect();
                  m.SetScrollWindowOffset(A.x),
                    m.SetScrollWindowWidth(A.width),
                    b(A);
                },
                [m],
              ),
              w = (0, be.wY)(y),
              D = M.useCallback(
                (V) => {
                  if (V.ctrlKey && !f) {
                    const A = h ? (V.clientX - h.x) / h.width : 0.5;
                    V.deltaY > 0
                      ? m.ZoomOut(V.deltaY / 100, A)
                      : m.ZoomIn(-V.deltaY / 100, A);
                  } else m.ScrollBy(V.deltaY);
                },
                [f, h, m],
              ),
              W = () => m.SetAutoScrollPaused(!0),
              X = () => m.SetAutoScrollPauseTimeout();
            return (
              so(n, m),
              (0, c.jsxs)("div", {
                ref: r,
                onWheel: D,
                onMouseOver: W,
                onFocus: () => {},
                onMouseLeave: X,
                children: [
                  (0, c.jsxs)("div", {
                    className: fr.LeftControlsAndContent,
                    children: [
                      (0, c.jsxs)("div", {
                        ref: w,
                        className: (0, Q.A)(fr.ContentAndGradient, u),
                        children: [l, (0, c.jsx)(Gl, { timelineView: m })],
                      }),
                      n.GetRecordingMode() === ri.Overlay && (0, c.jsx)(Yl, {}),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className: fr.ScrollbarAndSiblings,
                    children: !n.GetGamepadMode() && (0, c.jsx)(Rl, {}),
                  }),
                ],
              })
            );
          });
        function Gl(s) {
          const { timelineView: t } = s,
            r = (0, U.q3)(() => t.GetVisualWindowStartPX()),
            n = (0, U.q3)(() => t.BReachedMaxScroll());
          return (0, c.jsxs)("div", {
            className: fr.ScrollGradientCtn,
            children: [
              (0, c.jsx)("div", {
                className: (0, Q.A)(
                  fr.FrontGradient,
                  r === 0 && fr.HideGradient,
                ),
              }),
              (0, c.jsx)("div", {
                className: (0, Q.A)(fr.EndGradient, n && fr.HideGradient),
              }),
            ],
          });
        }
        function Rl() {
          const [s, t] = (0, M.useState)({
              scrollBarWidth: 0,
              scrollBarXOffset: 0,
            }),
            r = M.useCallback((h) => {
              const b = h.target.getBoundingClientRect();
              t({ scrollBarWidth: b.width, scrollBarXOffset: b.x });
            }, []),
            n = Te(),
            l = (0, U.q3)(
              () => n.GetScrollableWidthPX() + 2 * n.GetTimelineMarginWidth(),
            ),
            u = (0, U.q3)(() => n.GetVisualWidth()),
            m = (0, M.useMemo)(
              () => (u * s.scrollBarWidth) / l || 0,
              [u, s.scrollBarWidth, l],
            ),
            f = (0, be.wY)(r);
          return (0, c.jsxs)("div", {
            className: (0, Q.A)(
              fr.ScrollBarCtn,
              Math.round(m) === Math.round(s.scrollBarWidth) &&
                fr.HideScrollBar,
            ),
            ref: f,
            children: [
              (0, c.jsx)(_l, { timelineView: n, scrollSize: s }),
              (0, c.jsx)(no, {
                scrollSize: s,
                timelineView: n,
                timelineWidth: l,
                thumbWidth: m,
              }),
            ],
          });
        }
        function _l(s) {
          const { timelineView: t, scrollSize: r } = s,
            n = Ke(),
            l = eo(t, r),
            u = (0, U.q3)(() => t.GetTimelineMarginWidth()),
            m = (0, U.q3)(() => t.GetScrollableWidthPX()),
            f = (0, M.useCallback)(
              (h) => {
                const b = h + u;
                return et.OQ((b * r.scrollBarWidth) / m, 0, r.scrollBarWidth);
              },
              [r.scrollBarWidth, u, m],
            );
          return (0, c.jsxs)("div", {
            className: fr.ScrollTrack,
            ...l,
            children: [
              (0, c.jsx)(to, {
                timelineView: t,
                playbackCoordinator: n,
                fnConvertGlobalPXToTrackPX: f,
                scrollBarWidth: r.scrollBarWidth,
              }),
              (0, c.jsx)(io, {
                timelineView: t,
                fnConvertGlobalPXToTrackPX: f,
              }),
            ],
          });
        }
        function eo(s, t) {
          const r = (0, M.useRef)(void 0),
            n = (0, M.useRef)(void 0),
            l = (0, U.q3)(() => s.GetScrollableWidthPX()),
            u = (0, M.useCallback)(
              (y) => (0, Fe.OB)((l * y) / t.scrollBarWidth),
              [t.scrollBarWidth, l],
            ),
            m = (0, M.useCallback)(() => {
              if (!r.current) return;
              const y = s.GetScrollWindowWidth(),
                w = s.GetVisualWindowStartPX() + y / 2;
              if (
                r.current.valPX > w - y * 0.1 &&
                r.current.valPX < w + y * 0.1
              )
                return;
              const W = s.GetScrollableWidthPX() * 0.005,
                X = r.current.valPX - w;
              if (Math.abs(X) > W) {
                const V = X > 0 ? W : -W;
                s.ScrollToOffsetCentered(w + V),
                  (n.current = requestAnimationFrame(() => m()));
              } else s.ScrollToOffsetCentered(r.current.valPX);
            }, [s]),
            f = (0, M.useCallback)(
              (y) => {
                (r.current = u(y.clientX - t.scrollBarXOffset)),
                  (n.current = requestAnimationFrame(() => m()));
              },
              [u, m, t.scrollBarXOffset],
            ),
            h = (0, M.useCallback)(() => {
              n.current && cancelAnimationFrame(n.current);
            }, []),
            b = (0, M.useCallback)(
              (y) => {
                r.current = u(y.clientX - t.scrollBarXOffset);
              },
              [u, t.scrollBarXOffset],
            );
          return (
            (0, M.useEffect)(
              () => () => {
                n.current && cancelAnimationFrame(n.current);
              },
              [],
            ),
            { onMouseDown: f, onMouseMove: b, onMouseUp: h, onMouseLeave: h }
          );
        }
        function to(s) {
          const {
              timelineView: t,
              playbackCoordinator: r,
              fnConvertGlobalPXToTrackPX: n,
              scrollBarWidth: l,
            } = s,
            u = (0, U.q3)(() => r.GetHidePlayer()),
            m = (0, U.q3)(() => {
              const h = r.GetGlobalMSPlaytime();
              if (h && t.BInitialized()) {
                const b = Math.floor(
                  t.ConvertGlobalMSToGlobalPXOffset(h.valMS),
                );
                return n(b);
              }
              return null;
            });
          if (!m) return null;
          const f = () => {
            let h = r.GetGlobalMSPlaytime();
            u && (h = r.GetLiveEdgeMS()), t.ScrollToCenteredGlobalMS(h.valMS);
          };
          return (0, c.jsx)("div", {
            className: fr.PlayHeadAnnotation,
            onClick: f,
            style: { transform: `translateX(${u ? l : m}px)` },
            children: (0, c.jsx)(ro, {}),
          });
        }
        function ro() {
          return (0, c.jsx)("svg", {
            width: "52",
            height: "31",
            viewBox: "0 0 52 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, c.jsx)("path", {
              d: "M26 31L51.1147 0.25H0.885263L26 31Z",
              fill: "#D9D9D9",
            }),
          });
        }
        function io(s) {
          const { timelineView: t, fnConvertGlobalPXToTrackPX: r } = s,
            n = li(),
            l = Xi(),
            u = (0, U.q3)(() => {
              if (n && t.BInitialized()) {
                const f = Math.floor(
                    t.ConvertGlobalMSToGlobalPXOffset(l.nGlobalStartMS.valMS),
                  ),
                  h = Math.floor(
                    t.ConvertGlobalMSToGlobalPXOffset(l.nGlobalEndMS.valMS),
                  );
                if (!isNaN(f) && !isNaN(h)) {
                  const b = r(f),
                    y = r(h);
                  return { rangeStartPX: b, rangeEndPX: y };
                }
              }
              return null;
            });
          if (!u) return null;
          const m = () => {
            t.ScrollToCenteredGlobalMS(l.nGlobalStartMS.valMS);
          };
          return (0, c.jsx)("div", {
            className: fr.RangeAnnotation,
            onClick: m,
            style: {
              width: u.rangeEndPX - u.rangeStartPX,
              transform: `translateX(${u.rangeStartPX}px)`,
            },
          });
        }
        function no(s) {
          const {
              scrollSize: t,
              timelineWidth: r,
              thumbWidth: n,
              timelineView: l,
            } = s,
            {
              thumbPositionPX: u,
              onMouseDown: m,
              bHiglightThumb: f,
            } = ao(t, r, n, l);
          return (0, c.jsx)("div", {
            className: (0, Q.A)(fr.ScrollThumb, f && fr.Highlight),
            style: { width: n, transform: `translateX(${u}px)` },
            onMouseDown: m,
          });
        }
        function ao(s, t, r, n) {
          const [l, u] = (0, M.useState)(!1),
            [m, f] = (0, M.useState)(0),
            h = (0, U.q3)(() => {
              const X = n.BInitialized(),
                V = n.GetVisualWindowStartPX();
              return X
                ? et.OQ((V * s.scrollBarWidth) / t, 0, s.scrollBarWidth - r)
                : 0;
            }),
            [b, y] = (0, M.useState)(!1),
            w = (0, M.useRef)(void 0);
          (0, M.useEffect)(() => {
            if (n.GetAutoScrollPaused())
              return (
                y(!0),
                (w.current = window.setTimeout(() => {
                  y(!1);
                }, 500)),
                () => window.clearTimeout(w.current)
              );
          }, [h, n]);
          const D = (0, M.useCallback)(
              (X) => {
                f(h), u(!0);
                const V = X.nativeEvent.offsetX,
                  A = n.GetTimelineParentCtnRef() ?? (0, F.uX)(X);
                let K, ne, G;
                const te = (xe) => {
                  f(xe.clientX - s.scrollBarXOffset - V);
                };
                A.addEventListener("mousemove", te),
                  (K = () => A.removeEventListener("mousemove", te));
                const oe = () => {
                  u(!1), K(), ne(), G();
                };
                A.addEventListener("mouseup", oe),
                  A.addEventListener("mouseleave", oe),
                  (ne = () => A.removeEventListener("mouseup", oe)),
                  (G = () => A.removeEventListener("mouseleave", oe));
              },
              [h, s.scrollBarXOffset, n],
            ),
            W = (0, M.useMemo)(
              () => (l ? et.OQ(m, 0, s.scrollBarWidth - r) : h),
              [m, l, h, s.scrollBarWidth, r],
            );
          return (
            (0, M.useEffect)(() => {
              if (l) {
                const X = (t * W) / s.scrollBarWidth;
                n.ScrollToOffset(X);
              }
            }, [l, s.scrollBarWidth, W, n, t]),
            { thumbPositionPX: W, onMouseDown: D, bHiglightThumb: b }
          );
        }
        function so(s, t) {
          const r = (0, U.q3)(
            () =>
              !t.GetAutoScrollPaused() &&
              s.GetGameRecordingVideo().BVideoElementPlaying(),
          );
          (0, M.useEffect)(() => {
            if (!r) return () => {};
            let n = !1,
              l = s.GetGlobalMSPlaytime(),
              u = Date.now();
            const m = (f) => {
              const h = Date.now(),
                b = h - u;
              t.ScrollToCenteredGlobalMS(l.valMS + b);
              const y = s.GetGlobalMSPlaytime();
              y.valMS !== l.valMS && ((l = y), (u = h)),
                n || requestAnimationFrame(m);
            };
            return requestAnimationFrame(m), () => (n = !0);
          }, [s, t, r]);
        }
        var Ga = E(64415),
          lo = E(21988),
          Oi = E(62745);
        function oo(s) {
          const t = Te(),
            r = (0, U.q3)(() => t.GetVisibleTimelines());
          return (0, c.jsx)(c.Fragment, {
            children: r.flatMap((n) =>
              n.phaseOffsets.map((l, u) =>
                (0, M.createElement)(co, {
                  ...l,
                  timeline: n,
                  key: `${n.timelineID}_${u}`,
                }),
              ),
            ),
          });
        }
        function co(s) {
          const {
            timelineOffsetMS: t,
            nDurationMS: r,
            phase: n,
            timeline: l,
          } = s;
          return (0, c.jsxs)(uo, {
            ...s,
            children: [
              (0, c.jsx)(Ra, {}),
              (0, c.jsx)(mo, {}),
              (0, c.jsx)(Ra, {}),
            ],
          });
        }
        function uo(s) {
          const {
              children: t,
              timeline: r,
              timelineOffsetMS: n,
              nDurationMS: l,
              phase: u,
            } = s,
            m = Te(),
            f = Ke(),
            h = Ci()?.valPX || -1,
            b = Na(),
            [y] = Ua(),
            {
              pxStart: w,
              pxWidth: D,
              bHighlight: W,
            } = (0, U.q3)(() => {
              const G = m.GetPhaseToHighlight();
              return {
                pxStart: m.ConvertGlobalMSToGlobalPXOffset(
                  r.globalOffsetMS + n,
                ),
                pxWidth: m.ConvertDurationMSToDeltaPX(l),
                bHighlight:
                  G &&
                  G[0] === r.timelineID &&
                  G[1] === u.background_timeline_offset,
              };
            }),
            X = (b || y) && h >= w && h <= w + D,
            [V, A] = yn(),
            K = () => {
              const G = f.GetLoader(),
                te = G.GetTimelineData(r.timelineID),
                oe = G.GetTimelineMetadata(r.timelineID),
                xe = te.m_rgPhases.find((Ce) => parseInt(Ce.time) === n);
              xe && A({ entry: xe, timeline: oe });
            },
            ne = () => A(void 0);
          return (0, c.jsx)("div", {
            className: (0, Q.A)(
              Oi.Positioner,
              X && Oi.MouseWithin,
              W && Oi.Highlight,
            ),
            style: { transform: `translateX( ${w}px )`, width: `${D}px` },
            onMouseOver: K,
            onMouseLeave: ne,
            onFocus: K,
            onBlur: ne,
            children: t,
          });
        }
        function mo(s) {
          return (0, c.jsx)("div", { className: Oi.Body });
        }
        function Ra(s) {
          return (0, c.jsx)("div", { className: Oi.Edge });
        }
        var fo = E(14296);
        function ho(s) {
          const t = Te(),
            r = (0, U.q3)(() => t.GetVisibleTimelines());
          return (0, c.jsx)(c.Fragment, {
            children: r.map((n) =>
              (0, c.jsx)(Mo, { timeline: n }, n.timelineID),
            ),
          });
        }
        function Mo(s) {
          const { timeline: t } = s,
            r = Te(),
            n = (0, U.q3)(
              () => r.GetVisibleTimelineHighlights(t.timelineID) || [],
            ),
            l = (0, U.q3)(() => r.GetTimelineOffsetMS(t.timelineID)),
            u = t.globalOffsetMS - l;
          return (0, c.jsx)(c.Fragment, {
            children: n
              .filter((m) => Za(m) === "range_highlight")
              .map((m) =>
                (0, c.jsx)(
                  bo,
                  { entry: m, timeline: t, timelineView: r, timelineOffset: u },
                  m.id,
                ),
              ),
          });
        }
        function bo(s) {
          const { timelineView: t, entry: r, timelineOffset: n } = s,
            l = n + parseInt(r.time),
            { pxStart: u, pxWidth: m } = (0, U.q3)(() => ({
              pxStart: t.ConvertGlobalMSToGlobalPXOffset(l),
              pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(r.duration)),
            })),
            f = { width: `${m}px`, transform: `translateX( ${u}px )` };
          return (0, c.jsx)("svg", {
            className: fo.RangeHighlight,
            style: f,
            children: (0, c.jsx)("line", {
              x1: "0",
              x2: m,
              y1: "0",
              y2: "0",
              fill: "none",
              stroke: "#ffc82c",
              "stroke-width": "3",
              "stroke-dasharray": "3 6",
              "stroke-dashoffset": "0",
              "stroke-linecap": "square",
            }),
          });
        }
        const ui = 0.08;
        function go(s) {
          const {
              loader: t,
              className: r,
              clipSummaries: n,
              refTimelineParentCtn: l,
              disableZoom: u,
            } = s,
            m = (0, U.q3)(() => t.BInitialized()),
            f = Ke();
          if (!m) return (0, c.jsx)("div", { className: ar.LoadingTimeline });
          let h = (0, Q.A)(
            ar.ScrollAndControlsCtn,
            f.GetGamepadMode() && ar.GamepadMode,
            r,
          );
          return (0, c.jsx)(jn, {
            loader: t,
            clipSummaries: n,
            playbackCoordinator: f,
            refTimelineParentCtn: l,
            children: (0, c.jsxs)("div", {
              className: h,
              dir: "ltr",
              children: [
                (0, c.jsx)(So, {}),
                (0, c.jsx)(Bo, {}),
                (0, c.jsx)(lo.dD, {
                  tour: "recording_timeline",
                  name: "timeline",
                  options: { position: "left", offset: 20 },
                  children: (0, c.jsx)($l, {
                    className: ar.TimelineScrollContainer,
                    disableZoom: u,
                    children: (0, c.jsx)(po, {}),
                  }),
                }),
              ],
            }),
          });
        }
        const po = (0, M.memo)(function (t) {
          const r = Te();
          return (0, U.q3)(() => r.BInitialized()) ? (0, c.jsx)(yo, {}) : null;
        });
        function yo() {
          const s = Te(),
            t = (0, U.q3)(() => s.GetScrollableWidthPX()),
            r = (0, U.q3)(() => s.GetVisualWindowStartPX()),
            n = (0, U.q3)(() => s.GetTimelineMarginWidth());
          return (0, c.jsxs)("div", {
            className: ar.ContentContainer,
            style: {
              minWidth: t || 0,
              marginRight: n,
              marginLeft: n,
              transform: `translateX(${-r}px)`,
            },
            children: [
              (0, c.jsx)(Xr, {
                id: "recordings",
                className: ar.RecordingDecorators,
                children: (0, c.jsx)(Hl, {}),
              }),
              (0, c.jsx)(Xr, {
                id: "clips",
                className: ar.ClipDecorators,
                children: (0, c.jsx)(Kl, {}),
              }),
              (0, c.jsx)(Xr, {
                id: "game_modes",
                className: ar.GameModes,
                children: (0, c.jsx)(Vs, {}),
              }),
              (0, c.jsx)(Xr, {
                id: "date_decorators",
                className: ar.DateDecorator,
                children: (0, c.jsx)(Nl, {}),
              }),
              (0, c.jsx)(Xr, {
                id: "ticks",
                className: ar.BackgroundTicks,
                children: (0, c.jsx)(Wn, {}),
              }),
              (0, c.jsxs)(xs, {
                children: [
                  (0, c.jsx)(Xr, {
                    id: "highlights",
                    className: ar.Highlights,
                    children: (0, c.jsx)(Ns, {}),
                  }),
                  (0, c.jsx)(Xr, {
                    id: "range_selection",
                    className: ar.RangeSelector,
                    children: (0, c.jsx)(Ol, {}),
                  }),
                  (0, c.jsx)(Xr, {
                    id: "seek_scrub",
                    className: ar.SeekScrubber,
                    children: (0, c.jsx)(vl, {}),
                  }),
                  (0, c.jsx)(Xr, {
                    id: "play_head",
                    className: ar.PlayHead,
                    children: (0, c.jsx)(Js, {}),
                  }),
                  (0, c.jsx)(Xr, {
                    id: "phases",
                    className: ar.Phases,
                    children: (0, c.jsx)(oo, {}),
                  }),
                  (0, c.jsx)(Xr, {
                    id: "range_highlights",
                    className: ar.RangeHighlights,
                    children: (0, c.jsx)(ho, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function Xr(s) {
          const { children: t, id: r, className: n } = s;
          return (0, c.jsx)("div", {
            id: r,
            className: (0, Q.A)(n, ar.AbsoluteLayer),
            children: (0, c.jsx)("div", {
              className: ar.RelativeLayer,
              children: t,
            }),
          });
        }
        function So(s) {
          const r = Ke().GetRenderGlyph();
          return r ? r(Ga.pR.TRIGGER_LEFT, !1, !1, ar.PositionLeft) : null;
        }
        function Bo(s) {
          const r = Ke().GetRenderGlyph();
          return r ? r(Ga.pR.TRIGGER_RIGHT, !1, !1, ar.PositionRight) : null;
        }
        function vo() {
          return [
            {
              timeline_id: "mocktimeline_1",
              game_id: "clip_1",
              date_recorded: 1713811258,
              duration_ms: "60000",
              recordings: [
                {
                  recording_id: "recording_1",
                  duration_ms: "15000",
                  start_offset_ms: "5000",
                },
                {
                  recording_id: "recording_2",
                  duration_ms: "15000",
                  start_offset_ms: "25000",
                },
                {
                  recording_id: "recording_3",
                  duration_ms: "15000",
                  start_offset_ms: "45000",
                },
              ],
            },
          ];
        }
        const _a = JSON.parse(
          '{"daterecorded":1713552945,"starttime":0,"entries":[{"id":"1","time":"1000","type":"gamemode","mode":3},{"id":"2","time":"7000","type":"event","title":"bolt","description":"steam_bolt","icon":"steam_bolt","priority":2,"duration":"0","possible_clip":2},{"id":"3","time":"8500","type":"event","title":"gem","description":"steam_gem","icon":"steam_gem","priority":1,"duration":"0","possible_clip":2},{"id":"4","time":"11000","type":"event","title":"star","description":"steam_star","icon":"steam_star","priority":4,"duration":"0","possible_clip":2},{"id":"6","time":"13000","type":"event","title":"heart","description":"steam_heart","icon":"steam_heart","priority":2,"duration":"0","possible_clip":2},{"id":"7","time":"15500","type":"event","title":"checkmark","description":"steam_checkmark","icon":"steam_checkmark","priority":3,"duration":"0","possible_clip":2},{"id":"8","time":"18000","type":"gamemode","mode":1},{"id":"9","time":"25000","type":"event","title":"crown","description":"steam_crown","icon":"steam_crown","priority":10,"duration":"0","possible_clip":2},{"id":"10","time":"27000","type":"event","title":"ribbon","description":"steam_ribbon","icon":"steam_ribbon","priority":9,"duration":"0","possible_clip":2},{"id":"11","time":"32000","type":"event","title":"chest","description":"steam_chest","icon":"steam_chest","priority":8,"duration":"0","possible_clip":2},{"id":"13","time":"34500","type":"event","title":"defend","description":"steam_defend","icon":"steam_defend","priority":8,"duration":"0","possible_clip":2},{"id":"14","time":"36000","type":"event","title":"timer","description":"steam_timer","icon":"steam_timer","priority":10,"duration":"0","possible_clip":2},{"id":"15","time":"46000","type":"event","title":"defend","description":"steam_defend","icon":"steam_defend","priority":10,"duration":"0","possible_clip":2},{"id":"17","time":"50000","type":"usermarker","icon":"steam_marker","priority":0},{"id":"18","time":"51500","type":"event","title":"defend","description":"steam_defend","icon":"steam_defend","priority":10,"duration":"0","possible_clip":2},{"id":"19","time":"52500","type":"event","title":"explosion","description":"steam_explosion","icon":"steam_explosion","priority":10,"duration":"0","possible_clip":2}],"endtime":60000}',
        );
        function es(s) {
          const { appid: t, markerID: r } = s,
            n = To(t);
          return (
            (0, M.useEffect)(() => {
              const l = n.GetTimelines()[0].metadata.timeline_id;
              n.RemoveTimelineEvent(l, "5"),
                n.RemoveTimelineEvent(l, "12"),
                n.RemoveTimelineEvent(l, "16"),
                n.AddEventToTimeline(l, 12500, r, "5", 9, r, r, 0),
                n.AddEventToTimeline(l, 33500, r, "12", 2, r, r, 0),
                n.AddEventToTimeline(l, 48500, r, "16", 9, r, r, 0);
            }, [r, n]),
            (0, c.jsx)(pn, {
              loader: n,
              fnGetManifest: () => "",
              mode: ri.Partner,
              children: (0, c.jsx)(go, { loader: n, disableZoom: !0 }),
            })
          );
        }
        function To(s) {
          const [t] = (0, M.useState)(() => new Zr.SX());
          return (
            (0, M.useEffect)(() => {
              const r = vo(),
                n = { ..._a, entries: _a.entries.map((l) => l) };
              t.LoadTimelinesForTestClip(0, void 0, `${s}`, r),
                t.SetTimelineData(r[0].timeline_id, n);
            }, [s, t]),
            t
          );
        }
        const zi = 31;
        function ea(s) {
          return /^[a-z0-9_-]{1,31}$/.test(s);
        }
        var wo = ((s) => (
          (s.k_IconEditorPublic = "public"),
          (s.k_IconEditorHidden = "hidden"),
          s
        ))(wo || {});
        function Io(s, t, r, n) {
          const l = new FileReader();
          (l.onload = (u) => {
            const m = new Image();
            (m.onload = () => {
              const f = document.createElement("canvas");
              let h = m.width,
                b = m.height;
              h > b
                ? h > t && ((b *= t / h), (h = t))
                : b > r && ((h *= r / b), (b = r)),
                (f.width = h),
                (f.height = b),
                f.getContext("2d").drawImage(m, 0, 0, h, b);
              const w = f.toDataURL(s.type);
              n(w);
            }),
              (m.src = u.target?.result);
          }),
            l.readAsDataURL(s);
        }
        async function ts(s) {
          return new Promise((t, r) => {
            if (s) {
              const n = new FileReader();
              (n.onloadend = () => {
                const l = s.type,
                  u = s.name;
                if (
                  (l === "image/png" || u.endsWith(".png")) &&
                  n.result.toString().startsWith("data:image/png;base64,")
                ) {
                  const m = new Image();
                  (m.onload = function () {
                    m.width != m.height
                      ? (console.error("Image wrong width, must be square"),
                        t((0, S.we)("#TimelineMarkers_Error_PNGDimensions")))
                      : m.width < yr
                        ? (console.error("Image too small"),
                          t((0, S.we)("#TimelineMarkers_Error_PNGSize", yr)))
                        : m.width > nt
                          ? Io(s, nt, nt, (f) => {
                              t({
                                image: f,
                                image_type: Oe,
                                strFilenameWithoutExtension: ta(u).substring(
                                  0,
                                  zi,
                                ),
                              });
                            })
                          : t({
                              image: n.result,
                              image_type: Oe,
                              strFilenameWithoutExtension: ta(u).substring(
                                0,
                                zi,
                              ),
                            });
                  }),
                    (m.src = n.result);
                } else
                  l === "image/svg+xml" || u.endsWith(".svg")
                    ? t({
                        image: n.result,
                        image_type: re,
                        strFilenameWithoutExtension: ta(u).substring(0, zi),
                      })
                    : (console.error("unknown content types: " + l),
                      t(
                        (0, S.we)("#TimelineMarkers_Error_UnknownFileType", l),
                      ));
              }),
                s.type === "image/svg+xml" || s.name.endsWith(".svg")
                  ? n.readAsText(s)
                  : n.readAsDataURL(s);
            } else return t((0, S.we)("#TimelineMarkers_Error_NotFound"));
          });
        }
        function ta(s) {
          const t = s.lastIndexOf(".");
          return t !== -1 && t > s.lastIndexOf("/") ? s.slice(0, t) : s;
        }
        function Oo(s) {
          const { appid: t, closeModal: r } = s,
            [n, l] = (0, M.useState)(() => [
              {
                markerid: "",
                image: null,
                image_type: null,
                timeline_marker_id: null,
              },
            ]),
            [u, m] = (0, M.useState)("hidden"),
            { publicAssetSetID: f, hiddenAssetSetID: h } = Ne(t),
            { fnCreateTimelineMarkerDefinition: b } = _e(),
            y = (0, M.useRef)(void 0),
            [w, D] = (0, M.useState)(null),
            W = (0, ke.vs)(),
            X = (0, M.useCallback)(
              async (A) => {
                const K = [{ ...n[0] }],
                  ne = A.length;
                for (let G = 0; G < A.length; ++G) {
                  const te = A[G],
                    oe = await ts(te);
                  if (typeof oe == "string") {
                    D(oe);
                    break;
                  } else if (G == 0) {
                    if (
                      ((K[0].image = oe.image),
                      (K[0].image_type = oe.image_type),
                      ne > 1 || n[0].markerid.length == 0)
                    ) {
                      const xe = oe.strFilenameWithoutExtension.substring(
                        0,
                        zi,
                      );
                      (K[0].markerid = xe),
                        (K[0].timeline_marker_id = `temp_${G}_${xe}`);
                    }
                  } else {
                    const xe = oe.strFilenameWithoutExtension.substring(0, zi);
                    K.push({
                      image: oe.image,
                      image_type: oe.image_type,
                      markerid: xe,
                      timeline_marker_id: `temp_${G}_${xe}`,
                    });
                  }
                }
                l(K);
              },
              [n],
            ),
            V = (0, M.useCallback)(
              async (A) => {
                if ((D(null), (A.currentTarget?.files?.length || 0) > 0)) {
                  const ne = new Array();
                  for (let G = 0; G < A.currentTarget.files.length; ++G)
                    ne.push(A.currentTarget.files[G]);
                  X(ne);
                }
              },
              [X],
            );
          return W.bLoading
            ? (0, c.jsx)(ke.Hh, {
                state: W,
                strDialogTitle: (0, S.we)("#TimelineMarkers_Dialog_Create"),
                closeModal: r,
              })
            : (0, c.jsx)(Ue.o0, {
                strTitle: (0, S.we)("#TimelineMarkers_Dialog_Create"),
                bOKDisabled: n.some(
                  (A) => !ea(A.markerid) || !A.image || A.image?.length < 10,
                ),
                bDisableBackgroundDismiss: !0,
                onCancel: r,
                strOKButtonText: (0, S.we)("#Button_Create"),
                onOK: async () => {
                  W.fnSetLoading(!0);
                  let A = u == "public" ? f : h;
                  if (
                    (u == "public" && !f
                      ? (A = (await it(t, !0)).assetSetID)
                      : u == "hidden" &&
                        !h &&
                        (A = (await it(t, !1)).assetSetID),
                    !A)
                  ) {
                    console.error(
                      "IconCreateEditDialog failed to create hidden sets " + u,
                    ),
                      W.fnSetError(!0),
                      W.fnSetStrError(
                        (0, S.we)("#OptIn_Appeals_Dialog_Failed"),
                      );
                    return;
                  }
                  let K = !0;
                  for (let ne = 0; ne < n.length; ++ne) {
                    const G = n[ne];
                    if (
                      (await b(t, A, G.markerid, G.image, G.image_type)) != H.R
                    ) {
                      W.fnSetError(!0),
                        W.fnSetStrError(
                          (0, S.we)("#OptIn_Appeals_Dialog_Failed"),
                        ),
                        (K = !1);
                      break;
                    }
                  }
                  K &&
                    (W.fnSetSuccess(!0),
                    W.fnSetStrSuccess(
                      (0, S.we)("#TimelineMarkers_Dialog_CreateSuccess"),
                    ));
                },
                children: (0, c.jsxs)("div", {
                  className: Pe.DialogBody,
                  children: [
                    (0, c.jsxs)("div", {
                      className: Pe.DialogIntro,
                      children: [
                        (0, c.jsx)("div", {
                          children: (0, S.we)(
                            "#TimelineMarkers_Dialog_Create_Description",
                          ),
                        }),
                        (0, c.jsxs)("ul", {
                          children: [
                            (0, c.jsxs)("li", {
                              children: [
                                (0, c.jsx)("strong", {
                                  children: (0, S.we)(
                                    "#TimelineMarkers_Dialog_Name_Title",
                                  ),
                                }),
                                " - ",
                                (0, S.we)(
                                  "#TimelineMarkers_Dialog_Name_ttip",
                                  Re,
                                ),
                              ],
                            }),
                            (0, c.jsxs)("li", {
                              children: [
                                (0, c.jsx)("strong", {
                                  children: (0, S.we)(
                                    "#TimelineMarkers_Dialog_SVG",
                                  ),
                                }),
                                " - ",
                                (0, S.we)(
                                  "#TimelineMarkers_Dialog_SVG_create_desc",
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    !!w &&
                      (0, c.jsx)("div", {
                        className: Ve.ErrorStylesBackground,
                        children: w,
                      }),
                    (0, c.jsx)("br", {}),
                    (0, c.jsx)("br", {}),
                    (0, c.jsx)("h3", {
                      children: (0, S.we)(
                        "#TimelineMarkers_Dialog_Title_UploadIcons",
                      ),
                    }),
                    (0, c.jsx)("input", {
                      type: "file",
                      accept: ".svg,.png",
                      style: { display: "none" },
                      multiple: !0,
                      name: "fileupload",
                      ref: y,
                      onChange: V,
                    }),
                    (0, c.jsxs)(C.$n, {
                      onClick: () => y.current.click(),
                      children: [
                        (0, c.jsx)(ot.xv8, {}),
                        " ",
                        (0, S.we)("#TimelineMarkers_Dialog_SVG_mutli_button"),
                      ],
                    }),
                    (0, c.jsx)("div", {
                      className: Pe.DragTargetCtn,
                      children: (0, c.jsx)(zo, { fnHandleFiles: X }),
                    }),
                    n?.length > 0 &&
                      n[0].image?.length > 0 &&
                      (0, c.jsx)("h3", {
                        children: (0, S.we)(
                          "#TimelineMarkers_Dialog_IconCreateTitle",
                        ),
                      }),
                    n.map((A, K) =>
                      (0, c.jsx)(
                        xo,
                        {
                          marker: A,
                          appid: t,
                          setMarkerID: (ne) => {
                            const G = [...n];
                            (G[K].markerid = ne), l(G);
                          },
                        },
                        "" + K,
                      ),
                    ),
                    (0, c.jsx)("br", {}),
                    (0, c.jsx)("br", {}),
                    (0, c.jsx)(jo, {
                      createVisibilityState: u,
                      setCreateVisibilityState: m,
                    }),
                  ],
                }),
              });
        }
        function zo(s) {
          const { fnHandleFiles: t } = s,
            [r, n] = (0, M.useState)(!1),
            l = (h) => {
              h.preventDefault(), n(!0);
            },
            u = () => {
              n(!1);
            },
            m = (h) => {
              h.preventDefault();
            },
            f = (h) => {
              h.preventDefault(), n(!1);
              const b = Array.from(h.dataTransfer.files);
              t(b);
            };
          return (0, c.jsx)("div", {
            className: (0, Q.A)(
              Pe["drag-drop-box"],
              r && Pe.dragging,
              je.DragBox,
            ),
            onDragEnter: l,
            onDragOver: m,
            onDragLeave: u,
            onDrop: f,
            children: (0, c.jsx)("p", {
              children: (0, S.we)("#TimelineMarkers_Dialog_SVG_draganddrop"),
            }),
          });
        }
        function xo(s) {
          const { marker: t, appid: r, setMarkerID: n } = s;
          return (
            (0, M.useEffect)(
              () => (
                Mt(t.timeline_marker_id, t),
                () => {
                  Sr(t.timeline_marker_id);
                }
              ),
              [t],
            ),
            t?.image
              ? (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)(rs, {
                      markerID: t.markerid,
                      strErrorMessage: null,
                      imageContent: t.image,
                      imageType: t.image_type,
                    }),
                    (0, c.jsxs)("div", {
                      className: Pe.PreviewCtn,
                      children: [
                        (0, c.jsxs)("div", {
                          children: [
                            (0, c.jsx)(C.JU, {
                              children: (0, S.we)(
                                "#TimelineMarkers_Dialog_Icon_Title",
                              ),
                            }),
                            (0, c.jsx)(ct, {
                              imageBase64OrUntrustedSVG: t.image,
                              imageType: t.image_type,
                            }),
                          ],
                        }),
                        (0, c.jsx)(C.pd, {
                          type: "text",
                          value: t.markerid,
                          maxChars: Re,
                          label: (0, S.we)(
                            "#TimelineMarkers_Dialog_Name_Title",
                          ),
                          placeholder: (0, S.we)(
                            "#TimelineMarkers_Dialog_Name_placeholder",
                          ),
                          onChange: (l) => n(l.currentTarget.value || ""),
                        }),
                      ],
                    }),
                    (0, c.jsx)(C.JU, {
                      children: (0, S.we)(
                        "#TimelineMarkers_Dialog_Icon_TimelinePreview",
                      ),
                    }),
                    (0, c.jsx)(es, {
                      appid: r,
                      markerID: t.timeline_marker_id,
                    }),
                  ],
                })
              : null
          );
        }
        function ko(s) {
          const {
              appid: t,
              closeModal: r,
              bDisallowMarkerIDEdit: n,
              oTimelineMarkerDef: l,
            } = s,
            [u, m] = (0, M.useState)(l.markerid),
            {
              fnUpdateTimelineMarkerDefinition: f,
              fnDeleteTimelineMarkerDefinition: h,
            } = _e(),
            [b, y] = (0, M.useState)(l.image),
            [w, D] = (0, M.useState)(l.image_type),
            [W, X] = (0, M.useState)(0),
            V = (0, M.useRef)(void 0),
            [A, K] = (0, M.useState)(null),
            ne = (0, S.we)("#TimelineMarkers_Dialog_Edit", u);
          (0, M.useEffect)(() => {
            if (b && w && W && u) {
              const Ce = `temp_${W}_${l.timeline_marker_id}`;
              Mt(Ce, {
                image: b,
                image_type: w,
                timeline_marker_id: Ce,
                markerid: u,
              });
            }
            return () => {
              if (W) {
                const Ce = `temp_${W}_${l.timeline_marker_id}`;
                Sr(Ce);
              }
            };
          }, [b, w, u, W, l.timeline_marker_id]);
          const G = (0, M.useCallback)(async (Ce) => {
              K(null);
              const dr = Ce.currentTarget?.files?.[0],
                Ze = await ts(dr);
              typeof Ze == "string"
                ? K(Ze)
                : (y(Ze.image), D(Ze.image_type), X((Xt) => Xt + 1));
            }, []),
            te = (0, ke.vs)();
          if (te.bLoading)
            return (0, c.jsx)(ke.Hh, {
              state: te,
              strDialogTitle: ne,
              closeModal: r,
            });
          let oe, xe;
          if (!n || l.unpublished_changes) {
            let Ce = null;
            wt(l.asset_set_id, l.markerid).oPublishedMarker &&
            l.unpublished_changes
              ? ((oe = (0, S.we)("#Button_Revert")),
                (Ce = (0, S.we)("#TimelineMarkers_Dialog_RevertSuccess")))
              : ((Ce = (0, S.we)("#TimelineMarkers_Dialog_DeleteSuccess")),
                (oe = (0, S.we)("#Button_Delete"))),
              (xe = async () => {
                (0, i.pg)(
                  (0, c.jsx)(Ue.o0, {
                    strTitle: oe,
                    strDescription: (0, S.we)("#Dialog_AreYouSure"),
                    onOK: async () => {
                      te.fnSetLoading(!0),
                        (await h(t, l.asset_set_id, l.timeline_marker_id)) !=
                        H.R
                          ? (te.fnSetError(!0),
                            te.fnSetStrError(
                              (0, S.we)("#OptIn_Appeals_Dialog_Failed"),
                            ))
                          : (te.fnSetSuccess(!0), te.fnSetStrSuccess(Ce));
                    },
                  }),
                  window,
                );
              });
          }
          return (0, c.jsx)(Ue.o0, {
            strTitle: ne,
            bOKDisabled: !ea(u) || b?.length < 10,
            bDisableBackgroundDismiss: !0,
            onCancel: r,
            onMiddleButton: xe,
            strMiddleButtonText: oe,
            strOKButtonText: (0, S.we)("#Button_Update"),
            onOK: async () => {
              te.fnSetLoading(!0),
                (await f(t, l.asset_set_id, l.timeline_marker_id, u, b, w)) ==
                H.R
                  ? (te.fnSetSuccess(!0),
                    te.fnSetStrSuccess(
                      (0, S.we)("#TimelineMarkers_Dialog_UpdateSuccess"),
                    ))
                  : (te.fnSetError(!0),
                    te.fnSetStrError(
                      (0, S.we)("#OptIn_Appeals_Dialog_Failed"),
                    ));
            },
            children: (0, c.jsxs)("div", {
              className: Pe.DialogBody,
              children: [
                (0, c.jsx)(rs, {
                  markerID: u,
                  strErrorMessage: A,
                  imageContent: b,
                  imageType: w,
                }),
                (0, c.jsx)("h3", {
                  children: (0, S.we)("#TimelineMarkers_Dialog_Name_Title"),
                }),
                n
                  ? (0, c.jsx)("p", {
                      children: (0, S.we)(
                        "#TimelineMarkers_Dialog_Name_Disabled",
                      ),
                    })
                  : (0, c.jsx)("p", {
                      children: (0, S.we)("#TimelineMarkers_Dialog_Name", Re),
                    }),
                (0, c.jsx)(C.pd, {
                  type: "text",
                  value: u,
                  disabled: n,
                  maxChars: Re,
                  className: Pe.Identifier,
                  placeholder: (0, S.we)(
                    "#TimelineMarkers_Dialog_Name_placeholder",
                  ),
                  tooltip: (0, S.we)("#TimelineMarkers_Dialog_Name_ttip"),
                  onChange: (Ce) => m(Ce.currentTarget.value || ""),
                }),
                (0, c.jsx)("br", {}),
                (0, c.jsx)("br", {}),
                (0, c.jsx)("h3", {
                  children: (0, S.we)("#TimelineMarkers_Dialog_SVG"),
                }),
                (0, c.jsx)("p", {
                  children: (0, S.we)("#TimelineMarkers_Dialog_SVG_desc"),
                }),
                (0, c.jsxs)("div", {
                  className: Pe.PreviewCtn,
                  children: [
                    (0, c.jsx)(ct, {
                      imageBase64OrUntrustedSVG: b,
                      imageType: w,
                    }),
                    (0, c.jsx)("input", {
                      type: "file",
                      accept: ".svg,.png",
                      style: { display: "none" },
                      multiple: !1,
                      name: "fileupload",
                      ref: V,
                      onChange: G,
                    }),
                    (0, c.jsxs)(C.$n, {
                      onClick: () => V.current.click(),
                      children: [
                        (0, c.jsx)(ot.xv8, {}),
                        " ",
                        (0, S.we)("#TimelineMarkers_Dialog_SVG_button"),
                      ],
                    }),
                  ],
                }),
                (0, c.jsx)(es, {
                  appid: t,
                  markerID: W
                    ? `temp_${W}_${l.timeline_marker_id}`
                    : l.timeline_marker_id,
                }),
              ],
            }),
          });
        }
        function rs(s) {
          const {
              markerID: t,
              strErrorMessage: r,
              imageContent: n,
              imageType: l,
            } = s,
            u = ea(t),
            m = t?.trimStart().startsWith("steam_");
          let f;
          if (l == re) {
            const y = new DOMParser()
              .parseFromString(n, "image/svg+xml")
              .querySelector("svg");
            let w = 0,
              D = 0,
              W = 0,
              X = 0;
            if (y) {
              const V = y.viewBox;
              if (V && V.baseVal) {
                const A = V.baseVal;
                (w = A.x), (D = A.y), (W = A.width), (X = A.height);
              }
              (W == 0 || X == 0) &&
                ((w = y.x.baseVal.value),
                (D = y.y.baseVal.value),
                (W = y.width.baseVal.value),
                (X = y.height.baseVal.value)),
                (Math.abs(w - 0) > 0.5 ||
                  Math.abs(D - 0) > 0.5 ||
                  Math.abs(W - 36) > 0.5 ||
                  Math.abs(X - 36) > 0.5) &&
                  (f = `(${w}, ${D})-(${w + W}, ${D + X})`);
            }
          }
          return (0, c.jsxs)(c.Fragment, {
            children: [
              !u &&
                t.length > 0 &&
                (0, c.jsx)("div", {
                  className: Ve.ErrorStylesBackground,
                  children: (0, S.we)("#TimelineMarkers_Dialog_Name_error"),
                }),
              !!m &&
                (0, c.jsx)("div", {
                  className: Ve.ErrorStylesBackground,
                  children: (0, S.we)("#TimelineMarkers_Dialog_Name_error2"),
                }),
              !!f &&
                (0, c.jsx)("div", {
                  className: Ve.WarningStylesBackground,
                  children: (0, S.we)(
                    "#TimelineMarkers_Dialog_SVG_warning_dimensions",
                    f,
                  ),
                }),
            ],
          });
        }
        function jo(s) {
          const { createVisibilityState: t, setCreateVisibilityState: r } = s,
            n = M.useId();
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("h3", {
                id: n,
                children: (0, S.we)("#TimelineMarkers_Dialog_Visibility"),
              }),
              (0, c.jsx)(C.zW, {
                labelId: n,
                value: t,
                onChange: (l) => {
                  r(l);
                },
                children: (0, c.jsxs)("div", {
                  className: Pe.RadioColumn,
                  children: [
                    (0, c.jsx)(C.a, {
                      value: "public",
                      children: (0, S.oW)(
                        "#TimelineMarkers_Dialog_Public",
                        (0, c.jsx)("b", {}),
                      ),
                    }),
                    (0, c.jsx)(C.a, {
                      value: "hidden",
                      children: (0, S.oW)(
                        "#TimelineMarkers_Dialog_Hidden",
                        (0, c.jsx)("b", {}),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var or = E(87275);
        const is = "publicmissing";
        function Do(s) {
          const { appid: t } = s,
            { publicAssetSetID: r } = Ne(t),
            n = st(t);
          return (0, c.jsx)("div", {
            children: (0, c.jsxs)("div", {
              className: or.Columns,
              children: [
                (0, c.jsxs)("div", {
                  className: or.LeftCol,
                  children: [
                    (0, c.jsx)("div", {
                      className: (0, Q.A)(d().SectionTitle),
                      children: (0, S.we)("#TimelineMarkers_Public_title"),
                    }),
                    (0, c.jsx)("div", {
                      children: (0, S.we)("#TimelineMarkers_Public_desc1"),
                    }),
                    (0, c.jsx)("br", {}),
                    (0, c.jsx)("div", {
                      children: (0, S.we)("#TimelineMarkers_Public_desc2"),
                    }),
                  ],
                }),
                (0, c.jsx)("div", {
                  className: or.Ctn,
                  children: (0, c.jsxs)("div", {
                    className: or.GridCtn,
                    children: [
                      r
                        ? (0, c.jsx)(ut, {
                            assetSetID: r,
                            appid: t,
                            bDraggable: !1,
                            strMessageOnEmpty: (0, S.we)(
                              "#TimelineMarkers_Public_none",
                            ),
                          })
                        : (0, c.jsx)("div", {
                            children: (0, S.we)("#TimelineMarkers_Public_none"),
                          }),
                      n?.length > 0 &&
                        (0, c.jsx)(bt, {
                          assetSetID: r || is,
                          appid: t,
                          strMessage: (0, S.we)(
                            "#TimelineMarkers_drag_target_public",
                          ),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        const Eo = /^assetsetid_(.+)_markerid_(.+)$/,
          Po = /^droptarget_assetsetid_(.+)_appid_(.+)$/;
        async function Wo(s, t) {
          if (!s.destination) return;
          const r = s.draggableId.match(Eo),
            n = s.destination.droppableId.match(Po);
          if (!(r?.length > 2 && n?.length > 2)) return;
          const l = r[1],
            u = r[2];
          let m = n[1];
          const f = Number.parseInt(n[2]);
          ns(l, u, m, f);
        }
        async function ns(s, t, r, n) {
          if (s == r) return r;
          if (r == is) {
            const b = await it(n, !0);
            if (b.eResult != H.R) {
              const y = (0, me.H)({ success: b.eResult });
              return (
                console.error(
                  "TimelineMarkerDrop failed to create public asset set: " +
                    y.strErrorMsg,
                  y,
                ),
                r
              );
            }
            r = b.assetSetID;
          }
          const {
            fnCreateTimelineMarkerDefinition: l,
            fnDeleteTimelineMarkerDefinition: u,
            fnUpdateTimelineMarkerDefinition: m,
          } = _e();
          let f = He(s, t),
            h = H.R;
          if (Or(r, t)) {
            const b = He(r, t);
            h = await m(n, r, b.timeline_marker_id, t, f.image, f.image_type);
          } else h = await l(n, r, t, f.image, f.image_type);
          if (h != H.R)
            return console.error("TimelineMarkerDrop failed on step 1" + h), r;
          if (f.unpublished_changes) {
            if (((h = await u(n, s, f.timeline_marker_id)), h != H.R))
              return (
                console.error("TimelineMarkerDrop failed on step 2: " + h), r
              );
            f = He(s, t);
          }
          return (
            f &&
              !f?.unpublished_changes &&
              ((h = await u(n, s, f.timeline_marker_id)), h != H.R) &&
              console.error("TimelineMarkerDrop failed on step 3: " + h),
            r
          );
        }
        var tn = E(36952),
          as = E(98609);
        function Fo(s) {
          const { appid: t } = s,
            r = st(t),
            { hiddenAssetSetID: n } = Ne(t),
            l = (0, M.useMemo)(
              () =>
                r?.filter((u) => u.unpublished_changes && u.asset_set_id != n)
                  .length || 0,
              [r, n],
            );
          return l == 0
            ? null
            : (0, c.jsxs)("div", {
                className: tn.PublishNoteCtn,
                children: [
                  (0, c.jsx)("div", {
                    className: tn.CalloutTitle,
                    children: (0, S.Yp)("#TimelineMarkers_Publishing_title", l),
                  }),
                  (0, c.jsx)("div", {
                    children: (0, S.we)("#TimelineMarkers_Publishing_desc"),
                  }),
                  (0, c.jsx)(C.jn, {
                    onClick: (u) => {
                      window.location.href = `${as.TS.PARTNER_BASE_URL}apps/publishing/${t}`;
                    },
                    children: (0, S.we)("#TimelineMarkers_Publishing_action"),
                  }),
                ],
              });
        }
        function ss(s, t, r) {
          return r == t
            ? Localize("#TimelineMarkers_Public_title")
            : AssetSetStore_GetAssetSetName(s, r);
        }
        function hc(s) {
          const { rgAssetSetsToPublish: t, closeModal: r, appid: n } = s,
            { fnPublishTimelineMarkerDefinitions: l } =
              GetTimelineMarkerDefinitionFunctions(),
            { publicAssetSetID: u } = useSpecialAssetSets(n),
            m = useMemo(() => {
              const h = new Map();
              return (
                t.forEach((b) => {
                  h.set(
                    b,
                    TimelineMarkerStore_GetUnpublishedTimelineMarkerIDsForAssetSetID(
                      b,
                    ),
                  );
                }),
                h
              );
            }, [t]),
            f = useSimpleDialogProgressStates();
          return f.bLoading
            ? jsx(SimpleDialogProgressState, {
                state: f,
                strDialogTitle: Localize("#AssetSet_Publish_Dialog_title"),
                closeModal: r,
              })
            : jsx(GenericConfirmDialog, {
                strTitle: Localize("#AssetSet_Publish_Dialog_title"),
                strDescription: Localize("#AssetSet_Publish_Dialog_desc"),
                onCancel: r,
                onOK: async () => {
                  f.fnSetLoading(!0);
                  for (let h = 0; h < t.length; ++h) {
                    const b = t[h],
                      y = m.get(b);
                    if ((await l(n, b, y)) != k_EResultOK) {
                      console.error(
                        `PublishAssetSetDialog failed to publish ${y.length} for ${b}`,
                      ),
                        f.fnSetError(!0),
                        f.fnSetStrError(
                          Localize("#OptIn_Appeals_Dialog_Failed"),
                        );
                      return;
                    }
                  }
                  f.fnSetSuccess(!0),
                    f.fnSetElSuccess(
                      jsx("ol", {
                        children: t.map((h) => {
                          const b = ss(n, u, h);
                          return jsx(
                            "li",
                            {
                              children: Localize(
                                "#AssetSet_Publish_Dialog_line_success",
                                b,
                              ),
                            },
                            h,
                          );
                        }),
                      }),
                    );
                },
                children: jsx("ol", {
                  children: t.map((h) => {
                    const b = m.get(h)?.length || 0,
                      y = ss(n, u, h);
                    return jsx(
                      "li",
                      {
                        children: LocalizePlural(
                          "#AssetSet_Publish_Dialog_line",
                          b,
                          y,
                          b,
                        ),
                      },
                      h,
                    );
                  }),
                }),
              });
        }
        function Lo(s) {
          const { appid: t, assetSetID: r, closeModal: n } = s,
            l = rt(t, r),
            { fnCreateAssetSet: u, fnUpdateAssetSet: m } = Di(),
            [f, h] = (0, M.useState)(l.name),
            [b, y] = (0, M.useState)(l.desc),
            w = f.trimStart().toLowerCase().startsWith("steam_"),
            D = f.trim().length == 0,
            W = (0, S.we)(
              r
                ? "#AssetSet_Dialog_Edit_Title"
                : "#AssetSet_Dialog_Create_Title",
            ),
            X = (0, ke.vs)();
          return X.bLoading
            ? (0, c.jsx)(ke.Hh, { state: X, strDialogTitle: W, closeModal: n })
            : (0, c.jsxs)(Ue.o0, {
                strTitle: W,
                strDescription: (0, S.we)(
                  "#TimelineMarkers_Hidden_new_asset_set_desc",
                ),
                strOKButtonText: (0, S.we)("#Button_Save"),
                onOK: async () => {
                  X.fnSetLoading(!0), (l.name = f), (l.desc = b), (l.appid = t);
                  let V = null;
                  try {
                    let A;
                    r
                      ? (A = await m(l))
                      : ((l.branches = []), (A = await u(l))),
                      A != H.R && (V = (0, me.H)({ sucess: A }));
                  } catch (A) {
                    V = (0, me.H)(A);
                  }
                  V
                    ? (console.error("Branch Set error " + V.strErrorMsg, V),
                      X.fnSetError(!0),
                      X.fnSetStrError(
                        (0, S.we)("#OptIn_Appeals_Dialog_Failed"),
                      ))
                    : X.fnSetSuccess(!0);
                },
                onCancel: n,
                bDisableBackgroundDismiss: !1,
                bOKDisabled: w || D || X.bLoading,
                children: [
                  w &&
                    (0, c.jsx)("div", {
                      className: Ve.ErrorStylesWithIcon,
                      children: (0, S.we)("#AssetSet_Dialog_Disallowed"),
                    }),
                  D &&
                    (0, c.jsx)("div", {
                      className: Ve.ErrorStylesWithIcon,
                      children: (0, S.we)("#AssetSet_Dialog_MustHaveName"),
                    }),
                  (0, c.jsx)(C.pd, {
                    type: "text",
                    label: (0, S.we)("#AssetSet_Dialog_Edit_Name"),
                    value: f,
                    onChange: (V) => {
                      h(V?.currentTarget?.value || "");
                    },
                  }),
                  (0, c.jsx)(C.pd, {
                    type: "text",
                    label: (0, S.we)("#AssetSet_Dialog_Edit_Description"),
                    value: b,
                    onChange: (V) => {
                      y(V?.currentTarget?.value || "");
                    },
                  }),
                ],
              });
        }
        function No(s) {
          const { appid: t } = s,
            { hiddenAssetSetID: r } = Ne(t);
          return (0, c.jsxs)("div", {
            className: (0, Q.A)(Xe.Unassigned, or.Ctn),
            children: [
              (0, c.jsx)("div", {
                className: or.Title,
                children: (0, c.jsxs)("div", {
                  className: or.TopRow,
                  children: [
                    (0, c.jsx)("div", {
                      className: or.TitleText,
                      children: (0, S.we)(
                        "#TimelineMarkers_Hidden_section_info",
                      ),
                    }),
                    (0, c.jsx)(Uo, { appid: t }),
                    (0, c.jsx)(dt, { appid: t, assetSetID: r }),
                  ],
                }),
              }),
              (0, c.jsx)("div", {
                children: r
                  ? (0, c.jsx)(ut, {
                      appid: t,
                      assetSetID: r,
                      strMessageOnEmpty: (0, S.we)(
                        "#TimelineMarkers_Hidden_none",
                      ),
                      bDraggable: !0,
                    })
                  : (0, c.jsx)("div", {
                      className: Xe.NoHidden,
                      children: (0, S.we)("#TimelineMarkers_Hidden_none"),
                    }),
              }),
              (0, c.jsxs)("div", {
                className: (0, Q.A)(Xe.DragCtn, Xe.Row),
                children: [
                  (0, c.jsx)("div", {
                    className: Xe.BurgerWrapper,
                    children: (0, c.jsx)(ot.wVV, { size: "10px" }),
                  }),
                  " ",
                  (0, S.we)("#TimelineMarkers_drag_source_public"),
                ],
              }),
            ],
          });
        }
        function Uo(s) {
          const { appid: t } = s,
            { hiddenAssetSetID: r } = Ne(t),
            n = lt(t, r);
          return (0, c.jsxs)(C.$n, {
            disabled: !r || !n || n.size == 0,
            onClick: (l) =>
              (0, i.pg)((0, c.jsx)(Ho, { appid: t }), (0, F.uX)(l)),
            children: [
              "\u2191",
              " ",
              (0, S.we)("#TimelineMarkers_MoveAllHiddenToPublic"),
            ],
          });
        }
        function Ho(s) {
          const { appid: t, closeModal: r } = s,
            { hiddenAssetSetID: n, publicAssetSetID: l } = Ne(t),
            u = lt(t, n),
            m = (0, ke.vs)();
          return m.bLoading
            ? (0, c.jsx)(ke.Hh, {
                state: m,
                strDialogTitle: (0, S.we)(
                  "#TimelineMarkers_MoveAllHiddenToPublic",
                ),
                closeModal: r,
              })
            : (0, c.jsx)(Ue.o0, {
                strTitle: (0, S.we)("#TimelineMarkers_MoveAllHiddenToPublic"),
                strDescription: (0, S.we)("#Dialog_AreYouSure"),
                onCancel: r,
                bOKDisabled: !u,
                onOK: async () => {
                  m.fnSetLoading(!0);
                  const f = Array.from(u);
                  let h = l;
                  for (let b = 0; b < f.length; ++b) {
                    const y = f[b];
                    h = await ns(n, y, h, t);
                  }
                  m.fnSetSuccess(!0);
                },
              });
        }
        function Xo(s) {
          const { appid: t } = s;
          return (0, c.jsxs)("div", {
            className: Xe.CreateNewCtn,
            children: [
              (0, c.jsx)("div", {
                children: (0, S.we)(
                  "#TimelineMarkers_Hidden_new_asset_set_desc",
                ),
              }),
              (0, c.jsx)(C.$n, {
                onClick: (r) =>
                  (0, i.pg)((0, c.jsx)(Lo, { appid: t }), (0, F.uX)(r)),
                children: (0, S.we)("#TimelineMarkers_Hidden_new_asset_set"),
              }),
            ],
          });
        }
        function Ao(s) {
          const { oAssetSet: t } = s;
          return t.name == cr
            ? (0, c.jsx)("span", {
                children: (0, S.we)("#TimelineMarkers_Public_title"),
              })
            : t.name == vr
              ? (0, c.jsx)("span", {
                  children: (0, S.we)("#TimelineMarkers_Hidden_title"),
                })
              : (0, c.jsx)("span", { children: t.name });
        }
        class qr {
          m_vecBranches = new Array();
          m_mapBranchNameToDetails = new Map();
          GetBranchDetails() {
            return this.m_vecBranches;
          }
          GetBranchDetailsByName(t) {
            return this.m_mapBranchNameToDetails.get(t);
          }
          static s_Singleton;
          static Get() {
            return (
              qr.s_Singleton ||
                ((qr.s_Singleton = new qr()), qr.s_Singleton.Init()),
              qr.s_Singleton
            );
          }
          Init() {
            let t = (0, Ye.Tc)("branch_details", "application_config");
            this.ValidateStoreDefault(t) &&
              ((this.m_vecBranches = t),
              this.m_vecBranches.forEach((r) =>
                this.m_mapBranchNameToDetails.set(r.name, r),
              ));
          }
          ValidateStoreDefault(t) {
            const r = t;
            return !!(
              r &&
              Array.isArray(r) &&
              r.length > 0 &&
              typeof r[0].name == "string"
            );
          }
        }
        function Vo() {
          return qr.Get().GetBranchDetails();
        }
        function Ko(s) {
          return qr.Get().GetBranchDetailsByName(s);
        }
        var rn = E(82237);
        function Zo(s) {
          const { oAssetSet: t } = s;
          return (0, c.jsxs)("div", {
            className: rn.BranchDefCtn,
            children: [
              (0, c.jsx)("div", {
                className: rn.BranchDesc,
                children: (0, S.we)("#TimelineMarkers_Hidden_controls"),
              }),
              t.branches?.length > 0
                ? (0, c.jsx)(c.Fragment, {
                    children: t.branches.map((r) =>
                      (0, c.jsx)(
                        "span",
                        {
                          className: rn.BranchName,
                          children: (0, c.jsx)(ls, { branchName: r }),
                        },
                        r,
                      ),
                    ),
                  })
                : (0, c.jsx)("div", {
                    children: (0, S.we)("#TimelineMarkers_Hidden_nobranches"),
                  }),
              (0, c.jsx)("br", {}),
              (0, c.jsx)(C.$n, {
                onClick: (r) => {
                  (0, i.pg)((0, c.jsx)(Jo, { oAssetSet: t }), (0, F.uX)(r));
                },
                children: (0, S.we)("#TimelineMarkers_Hidden_updatebranches"),
              }),
              (0, c.jsx)(C.$n, {
                onClick: () => {},
                children: (0, S.we)("#TimelineMarkers_Hidden_publishbranch"),
              }),
            ],
          });
        }
        function Jo(s) {
          const { oAssetSet: t, closeModal: r } = s,
            n = Vo(),
            [l, u] = (0, M.useState)(new Set(t.branches || [])),
            { fnAddBranchToAssetSet: m, fnRemoveBranchFromAssetSet: f } = Di(),
            h = (0, ke.vs)();
          return h.bLoading
            ? (0, c.jsx)(ke.Hh, {
                state: h,
                strDialogTitle: (0, S.we)(
                  "#TimelineMarkers_Hidden_updatebranches",
                ),
                closeModal: r,
              })
            : (0, c.jsxs)(Ue.o0, {
                strTitle: (0, S.we)("#TimelineMarkers_Hidden_updatebranches"),
                strDescription: (0, S.we)("#AssetSet_Branch_Dialog_Desc"),
                onCancel: r,
                onOK: async () => {
                  h.fnSetLoading(!0);
                  const b = Array.from(l);
                  let y = 0,
                    w = 0;
                  for (let W = 0; W < b.length; ++W) {
                    const X = b[W];
                    if (!t.branches?.includes(X)) {
                      if ((await m(t.appid, t.assetset_id, X)) != H.R) {
                        h.fnSetError(!0);
                        return;
                      }
                      y++;
                    }
                  }
                  const D = [...(t.branches || [])];
                  for (let W = 0; W < D.length; ++W) {
                    const X = D[W];
                    if (!l.has(X)) {
                      if ((await f(t.appid, t.assetset_id, X)) != H.R) {
                        h.fnSetError(!0);
                        return;
                      }
                      w++;
                    }
                  }
                  y == 0 && w == 0
                    ? h.fnSetStrSuccess(
                        (0, S.we)("#AssetSet_Branch_Dialog_nochange"),
                      )
                    : h.fnSetStrSuccess(
                        (0, S.we)("#AssetSet_Branch_Dialog_updated", y, w),
                      ),
                    h.fnSetSuccess(!0);
                },
                children: [
                  (0, c.jsx)("br", {}),
                  n.map((b) =>
                    (0, c.jsx)(
                      C.Yh,
                      {
                        label: (0, c.jsx)(ls, { branchName: b.name }),
                        tooltip: b.description,
                        checked: l.has(b.name),
                        onChange: (y) => {
                          const w = new Set(l);
                          y ? w.add(b.name) : w.delete(b.name), u(w);
                        },
                      },
                      b.name,
                    ),
                  ),
                ],
              });
        }
        function ls(s) {
          const { branchName: t } = s,
            r = Ko(t);
          return (0, c.jsxs)("span", {
            className: rn.Lock,
            children: [
              r?.password?.length > 0 &&
                (0, c.jsx)(Ee.he, {
                  toolTipContent: (0, S.we)("#AssetSet_Branch_Dialog_password"),
                  bTopmost: !0,
                  children: (0, c.jsx)("span", { children: "\u{1F512} " }),
                }),
              t,
            ],
          });
        }
        function Yo(s) {
          const { appid: t, assetSetID: r, closeModal: n } = s,
            l = rt(t, r),
            u = ra(t),
            m = st(t),
            [f, h] = (0, M.useState)(null),
            { fnCreateTimelineMarkerDefinition: b } = _e(),
            { hiddenAssetSetID: y } = Ne(t),
            w = (0, M.useMemo)(() => {
              const W = new Set();
              at(l.assetset_id).forEach((K) => W.add(K));
              const V = new Map();
              return (
                u.forEach((K) => {
                  K.assetset_id != l.assetset_id && V.set(K.assetset_id, K);
                }),
                m
                  .filter(
                    (K) =>
                      (!K.unpublished_changes || K.asset_set_id == y) &&
                      !W.has(K.markerid),
                  )
                  .map((K) => ({
                    label: (0, c.jsxs)(c.Fragment, {
                      children: [
                        (0, c.jsx)(zt, { svgXmlUntrusted: K.image }),
                        K.markerid,
                        " ",
                        "(",
                        (0, c.jsx)(Ao, { oAssetSet: V.get(K.asset_set_id) }),
                        ")",
                      ],
                    }),
                    data: K,
                  }))
              );
            }, [l.assetset_id, u, m, y]),
            D = (0, ke.vs)();
          return D.bLoading
            ? (0, c.jsx)(ke.Hh, {
                state: D,
                strDialogTitle: (0, S.we)("#TimelineMarker_Clone_title"),
                closeModal: n,
              })
            : (0, c.jsxs)(Ue.o0, {
                strTitle: (0, S.we)("#TimelineMarker_Clone_title"),
                strDescription: (0, S.we)("#TimelineMarker_Clone_desc", l.name),
                onCancel: n,
                bOKDisabled: !f,
                onOK: async () => {
                  if (
                    (D.fnSetLoading(!0),
                    (await b(t, r, f.markerid, f.image, f.image_type)) != H.R)
                  ) {
                    D.fnSetError(!0);
                    return;
                  }
                  D.fnSetStrSuccess((0, S.we)("#TimelineMarker_Clone_success")),
                    D.fnSetSuccess(!0);
                },
                children: [
                  (0, c.jsx)("br", {}),
                  (0, c.jsx)("br", {}),
                  (0, c.jsx)(C.m, {
                    rgOptions: w,
                    selectedOption: f,
                    onChange: (W) => h(W.data),
                  }),
                ],
              });
        }
        var qo = E(179);
        function $o(s) {
          const { appid: t } = s,
            r = Tr(t),
            [n] = (0, qo.QD)("branchset", !1);
          return (0, c.jsxs)("div", {
            className: or.RestrictedIconsSection,
            children: [
              (0, c.jsxs)("div", {
                className: or.Columns,
                children: [
                  (0, c.jsxs)("div", {
                    className: or.LeftCol,
                    children: [
                      (0, c.jsx)("div", {
                        className: d().SectionTitle,
                        children: (0, S.we)("#TimelineMarkers_Hidden_title"),
                      }),
                      (0, c.jsx)("div", {
                        children: (0, S.we)("#TimelineMarkers_Hidden_desc2"),
                      }),
                    ],
                  }),
                  (0, c.jsx)(No, { appid: t }),
                ],
              }),
              n &&
                (0, c.jsxs)("div", {
                  className: or.Columns,
                  children: [
                    (0, c.jsxs)("div", {
                      className: or.LeftCol,
                      children: [
                        (0, c.jsx)("div", {
                          className: d().SectionTitle,
                          children: (0, S.we)(
                            "#TimelineMarkers_Hidden_branchsets_title",
                          ),
                        }),
                        (0, c.jsx)(Xo, { appid: t }),
                      ],
                    }),
                    (0, c.jsx)("div", {
                      className: or.RightCol,
                      children: r?.map((l) =>
                        (0, c.jsx)(
                          Qo,
                          { appid: t, assetSetID: l.assetset_id },
                          l.assetset_id,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function Qo(s) {
          const { appid: t, assetSetID: r } = s,
            n = rt(t, r);
          return (0, c.jsxs)("div", {
            className: or.Ctn,
            children: [
              (0, c.jsxs)("div", {
                className: or.Title,
                children: [
                  (0, c.jsxs)("div", {
                    className: or.TopRow,
                    children: [
                      (0, c.jsx)(Ee.he, {
                        toolTipContent: n.desc,
                        children: (0, c.jsx)("div", {
                          className: or.TitleText,
                          children: n.name,
                        }),
                      }),
                      (0, c.jsx)(dt, {
                        appid: n.appid,
                        assetSetID: n.assetset_id,
                      }),
                    ],
                  }),
                  (0, c.jsx)(Zo, { oAssetSet: n }),
                ],
              }),
              (0, c.jsxs)("div", {
                className: or.CtnGridAndBranchSelection,
                children: [
                  (0, c.jsxs)("div", {
                    className: or.GridCtn,
                    children: [
                      (0, c.jsx)(ut, {
                        assetSetID: n.assetset_id,
                        appid: n.appid,
                        strMessageOnEmpty: "",
                        bDraggable: !0,
                      }),
                      (0, c.jsx)(bt, {
                        assetSetID: n.assetset_id,
                        appid: n.appid,
                        strMessage: (0, S.we)("#TimelineMarkers_drag_target"),
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    children: (0, c.jsx)(C.$n, {
                      onClick: (l) =>
                        (0, i.pg)(
                          (0, c.jsx)(Yo, { appid: t, assetSetID: r }),
                          (0, F.uX)(l),
                        ),
                      children: (0, S.we)("#TimelineMarker_Clone_title"),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Co(s) {
          const { appId: t } = s,
            r = Number.parseInt(t);
          return (0, c.jsx)("div", {
            className: tn.EditorCtn,
            children: (0, c.jsxs)(Be.JY, {
              onDragEnd: Wo,
              children: [
                (0, c.jsx)(Go, { appid: r }),
                (0, c.jsx)(Fo, { appid: r }),
                (0, c.jsx)(Do, { appid: r }),
                (0, c.jsx)($o, { appid: r }),
              ],
            }),
          });
        }
        function Go(s) {
          const { appid: t } = s;
          return (0, c.jsx)("div", {
            className: tn.HeaderCtn,
            children: (0, c.jsxs)("div", {
              className: ye().ColumnCtn,
              children: [
                (0, c.jsxs)("div", {
                  className: ye().LeftCol,
                  children: [
                    (0, c.jsx)("div", {
                      className: ye().ColHeader,
                      children: (0, S.we)("#TimelineMarkers_Editor_title"),
                    }),
                    (0, c.jsx)("div", {
                      className: ye().SectionCtn,
                      children: (0, S.we)("#TimelineMarkers_Editor_desc"),
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: ye().RightCol,
                  children: [
                    (0, c.jsx)("div", {
                      className: ye().ColHeader,
                      children: (0, c.jsx)("a", {
                        href: `${as.TS.PARTNER_BASE_URL}doc/features/timeline`,
                        className: (0, Q.A)(ye().Button, d().Button),
                        target: "_blank",
                        children: (0, S.we)("#AssetRequest_General_SeeDocs"),
                      }),
                    }),
                    (0, c.jsxs)("div", {
                      className: ye().SectionCtn,
                      children: [
                        (0, c.jsx)(C.jn, {
                          onClick: (r) =>
                            (0, i.pg)(
                              (0, c.jsx)(Oo, { appid: t }),
                              (0, F.uX)(r),
                            ),
                          children: (0, S.we)(
                            "#TimelineMarkers_Editor_createnew",
                          ),
                        }),
                        (0, c.jsx)("div", {
                          children: (0, S.we)(
                            "#TimelineMarkers_Editor_createnew_desc",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
      },
      67721: (se, Gt, E) => {
        "use strict";
        E.d(Gt, {
          In: () => S,
          N$: () => H,
          Te: () => C,
          eJ: () => d,
          hT: () => ye,
          il: () => Be,
          rU: () => Z,
          sX: () => R,
          xz: () => F,
          zG: () => v,
        });
        var c = E(86578),
          Be = ((T) => (
            (T[(T.Invalid = 0)] = "Invalid"),
            (T[(T.Playing = 1)] = "Playing"),
            (T[(T.Staging = 2)] = "Staging"),
            (T[(T.Menus = 3)] = "Menus"),
            T
          ))(Be || {}),
          Ie = ((T) => (
            (T[(T.Invalid = 0)] = "Invalid"),
            (T[(T.None = 1)] = "None"),
            (T[(T.Standard = 2)] = "Standard"),
            (T[(T.Featured = 3)] = "Featured"),
            T
          ))(Ie || {});
        function ye(T) {
          return T.type === "gamemode";
        }
        function C(T) {
          return T.type === "state_description";
        }
        function v(T) {
          return T.type === "event" && parseInt(T.duration) > 0;
        }
        function d(T) {
          return T.type === "event";
        }
        function i(T) {
          return T.type === "state_description";
        }
        function F(T) {
          return T.type === "achievement";
        }
        function S(T) {
          return T.type === "error";
        }
        function H(T) {
          return T.type === "usermarker";
        }
        function R(T) {
          return T.type === "screenshot";
        }
        function Z(T) {
          let de = { id: T.entry_id, time: T.time, type: void 0 };
          switch (T.type) {
            case c.Bw.BA: {
              let re = de;
              (re.type = "gamemode"), (re.mode = T.game_mode);
              break;
            }
            case c.Bw.jL: {
              let re = de;
              (re.type = "usermarker"),
                (re.icon = "steam_marker"),
                (re.priority = T.marker_priority);
              break;
            }
            case c.Bw.P8: {
              let re = de;
              (re.type = "achievement"),
                (re.achievement_name = T.achievement_name);
              break;
            }
            case c.Bw.Ey: {
              let re = de;
              (re.type = "error"), (re.description = T.marker_description);
              break;
            }
            case c.Bw.Fy: {
              let re = de;
              (re.type = "state_description"), (re.title = T.timestamp_title);
              break;
            }
            case c.Bw.aI: {
              let re = de;
              (re.type = "event"),
                (re.icon = T.marker_icon),
                (re.title = T.range_title),
                (re.description = T.marker_description),
                (re.priority = T.marker_priority),
                (re.duration = T.range_duration),
                (re.possible_clip = T.range_possible_clip);
              break;
            }
            case c.Bw.uw: {
              let re = de;
              (re.type = "screenshot"),
                (re.icon = T.marker_icon),
                (re.priority = T.marker_priority),
                (re.handle = T.screenshot_handle);
              break;
            }
            default:
              return null;
          }
          return de;
        }
      },
      86347: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { OB: () => S, QP: () => Z, Sb: () => c, sK: () => Be });
        function c(Se) {
          return { type: "global", valMS: Se };
        }
        function Be(Se) {
          return { type: "timeline", valMS: Se };
        }
        function Ie(Se) {
          return { type: "recording", valMS: Se };
        }
        function ye(Se) {
          return { type: "clip", valMS: Se };
        }
        function C(Se) {
          return (ie) => ie.type === Se;
        }
        const v = C("global"),
          d = C("timeline"),
          i = C("recording"),
          F = C("clip");
        function S(Se) {
          return { type: "global", valPX: Se };
        }
        function H(Se) {
          return { type: "clientWindow", valPX: Se };
        }
        function R(Se) {
          return { type: "virtualWindow", valPX: Se };
        }
        function Z(Se) {
          return { type: "scrollWindow", valPX: Se };
        }
        function T(Se) {
          return (ie) => ie.type === Se;
        }
        const de = T("global"),
          re = T("clientWindow"),
          Oe = T("virtualWindow"),
          Ae = T("scrollWindow");
      },
      85958: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { SX: () => $, kh: () => Y });
        var c = E(41735),
          Be = E.n(c),
          Ie = E(86578),
          ye = E(41635),
          C = E(85443),
          v = E(67721),
          d = E(72604),
          i = E(36174),
          F = E(8323),
          S = E(27066),
          H = E(86347),
          R = E(90626),
          Z = E(14947),
          T = E(34843),
          de = E(85528),
          re = E(71742),
          Oe = E(18210),
          Ae = Object.defineProperty,
          Se = Object.getOwnPropertyDescriptor,
          ie = (ue, g, p, I) => {
            for (
              var x = I > 1 ? void 0 : I ? Se(g, p) : g, k = ue.length - 1, O;
              k >= 0;
              k--
            )
              (O = ue[k]) && (x = (I ? O(g, p, x) : O(x)) || x);
            return I && x && Ae(g, p, x), x;
          };
        const fe = 10 * 1e3,
          Y = 3e3,
          P = Y + 1e3,
          J = class ji {
            constructor() {
              (0, Z.Gn)(this);
            }
            m_bInitialized = !1;
            m_rgListeners = [];
            m_gameID;
            m_clipID;
            m_ulFirstTimelineOffsetMS = 0;
            m_rgTimelineMetadata = [];
            m_mapTimelineData = new Map();
            m_mapRunningTimelines = new Map();
            m_schUpdateRunning = new F.LU();
            m_fnTimelineURLBuilder;
            BInitialized() {
              return this.m_bInitialized;
            }
            GetTimelines() {
              return this.m_rgTimelineMetadata;
            }
            GetTimelineMetadataIndex(g) {
              return this.m_rgTimelineMetadata.findIndex(
                (p) => p.metadata.timeline_id === g,
              );
            }
            GetTimelineMetadata(g) {
              return this.m_rgTimelineMetadata.find(
                (p) => p.metadata.timeline_id === g,
              );
            }
            GetGameID() {
              return this.m_gameID;
            }
            GetClipID() {
              return this.m_clipID;
            }
            BIsTimelineRunning(g) {
              return this.m_mapRunningTimelines.has(g);
            }
            AddEventListener(g) {
              return (
                this.m_rgListeners.push(g), () => ye.x9(this.m_rgListeners, g)
              );
            }
            async LoadTimelinesForBackgroundVideo(g) {
              this.m_gameID = g;
              const p = await Ie.xM.GetTimelinesForApp({ game_id: g }),
                { timelines: I = [] } = p.Body().toObject();
              this.m_mapRunningTimelines.forEach((x, k) => {
                I.find((O) => O.timeline_id == k) || I.push(x.m_metadata);
              }),
                this.UpdateTimelineMetadata(I),
                (this.m_fnTimelineURLBuilder = (x) =>
                  `https://steamloopback.host/gamerecordings/timelines/${x}.json`),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            async LoadTimelinesForClip(g) {
              this.m_clipID = g;
              const p = await Ie.xM.GetTimelinesForClip({ clip_id: g });
              if (p.GetEResult() != d.R)
                throw new Error("Unable to load clip " + g);
              const {
                timelines: I = [],
                game_id: x,
                first_timeline_start_offset_ms: k,
              } = p.Body().toObject();
              (this.m_gameID = x), this.UpdateTimelineMetadata(I);
              for (let O of this.m_rgTimelineMetadata) {
                (0, C.q_)(
                  `Loaded clip ${g} timeline ${O.metadata.timeline_id}`,
                );
                for (let N of O.metadata.recordings)
                  (0, C.q_)(
                    `Clip recording ${N.recording_id} duration ${N.duration_ms}`,
                  );
              }
              (this.m_ulFirstTimelineOffsetMS = parseInt(k)),
                (this.m_fnTimelineURLBuilder = (O) =>
                  `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${O}.json`),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            UpdateTimelineMetadata(g) {
              const p = g
                .slice()
                .sort((O, N) => O.date_recorded - N.date_recorded);
              let I = [],
                x = 0;
              const k = {};
              p.forEach((O) => {
                if ((O.recordings || (O.recordings = []), k[O.timeline_id])) {
                  console.error(
                    "Duplicate timelines found in UpdateTimelineMetadata()",
                    O.timeline_id,
                    g,
                  );
                  return;
                }
                I.push({ nGlobalOffsetMS: (0, H.Sb)(x), metadata: O }),
                  (x += parseInt(O.duration_ms)),
                  (k[O.timeline_id] = !0);
              }),
                (this.m_rgTimelineMetadata = I);
            }
            LoadTimelinesForSharedClip(g) {
              this.SetPreloadedTimelines(
                0,
                g.clip_id,
                g.game_id,
                g.timelines,
                void 0,
              );
            }
            LoadTimelinesForTestGame(g, p) {
              const I = (x) =>
                `https://steamloopback.host/gamerecordings/timelines/${x}.json`;
              this.SetPreloadedTimelines(0, void 0, g, p, I);
            }
            LoadTimelinesForTestClip(g, p, I, x) {
              this.SetPreloadedTimelines(g, p, I, x, void 0);
            }
            SetPreloadedTimelines(g, p, I, x, k) {
              (this.m_gameID = I),
                (this.m_clipID = p),
                (this.m_ulFirstTimelineOffsetMS = g);
              const O = x.slice();
              this.m_mapRunningTimelines.forEach((N, M) => {
                O.find((ee) => ee.timeline_id == M) || O.push(N.m_metadata);
              }),
                this.UpdateTimelineMetadata(O),
                (this.m_fnTimelineURLBuilder = k),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            FireEvent(g, ...p) {
              for (let I of this.m_rgListeners) {
                let x = I[g];
                x instanceof Function && x.apply(I, p);
              }
            }
            async LoadTimelineData(g) {
              let p = this.m_mapTimelineData.get(g);
              if (p && p.m_strState === "loading") {
                await p.m_promise;
                return;
              }
              if (
                (p && p.m_strState == "error") ||
                (this.IsActiveTimeline(g) && p.m_strState == "loaded")
              )
                return;
              const I = {
                m_rgGameModeChanges: [],
                m_rgStateDescriptions: [],
                m_rgEntries: [],
                m_rgPhases: [],
              };
              if (!this.m_fnTimelineURLBuilder)
                this.m_mapTimelineData.set(g, { m_strState: "loaded", ...I });
              else {
                const x = this.m_fnTimelineURLBuilder(g),
                  k = Be()
                    .get(x, { withCredentials: !1 })
                    .then(
                      (O) => {
                        if (O.status == 200 && O.data) {
                          pe(O.data);
                          const N = this.ProcessTimelineEntries(O.data);
                          this.m_mapTimelineData.set(g, N);
                        } else
                          this.m_mapTimelineData.set(g, {
                            ...I,
                            m_strState: "error",
                          });
                      },
                      (O) => {
                        this.m_mapTimelineData.set(g, {
                          ...I,
                          m_strState: "error",
                        });
                      },
                    )
                    .finally(() => this.FireEvent("OnTimelineLoaded", g));
                this.m_mapTimelineData.set(g, {
                  m_strState: "loading",
                  m_promise: k,
                  ...I,
                });
              }
            }
            ProcessTimelineEntries(g) {
              let p = {
                m_strState: "loaded",
                m_rgGameModeChanges: [],
                m_rgStateDescriptions: [],
                m_rgEntries: [],
                m_rgPhases: [],
              };
              if (g.entries) {
                const I = [],
                  x = [],
                  k = [],
                  O = [];
                for (const M of g.entries)
                  switch (M.type) {
                    case "phase":
                      k.push(M);
                      break;
                    case "gamemode":
                      I.push(M);
                      break;
                    case "state_description":
                      x.push(M);
                      break;
                    case "achievement":
                    case "error":
                    case "event":
                    case "screenshot":
                    case "usermarker":
                      O.push(M);
                      break;
                    default:
                      console.error(`Unknown timeline entry type ${M.type}`);
                  }
                const N = (M, ee) => parseInt(M.time) - parseInt(ee.time);
                (p.m_rgGameModeChanges = I.sort(N)),
                  (p.m_rgStateDescriptions = x.sort(N)),
                  (p.m_rgPhases = k.sort(N)),
                  (p.m_rgEntries = O.sort(N)),
                  p.m_rgGameModeChanges.length > 0 &&
                    parseInt(p.m_rgGameModeChanges[0].time) < fe &&
                    (p.m_rgGameModeChanges[0].time = "0");
              }
              return p;
            }
            static ApplyTimelineRounding(g, p) {
              if (p === 0) return g;
              const I = g % p;
              return I == 0 ? g : g + (p - I);
            }
            FindTimelineAtOffset(g, p) {
              const I = g + this.m_ulFirstTimelineOffsetMS;
              let x = 0;
              for (let k of this.m_rgTimelineMetadata) {
                const O = this.GetTimelineStartBeforeGlobalZeroMS(
                  k.metadata.timeline_id,
                );
                let N = parseInt(k.metadata.duration_ms) + O;
                if (x + N > I)
                  return {
                    timeline: k,
                    nTimelineOffsetMS: I - x,
                    ulGlobalToTimelineOffset: O,
                  };
                x += ji.ApplyTimelineRounding(N, p);
              }
              return null;
            }
            GetGlobalOffsetDataForTimeline(g, p) {
              let I = 0;
              for (let x of this.m_rgTimelineMetadata) {
                let k = parseInt(x.metadata.duration_ms),
                  O = ji.ApplyTimelineRounding(k, p);
                if (x.metadata.timeline_id == g)
                  return { nGlobalOffsetMS: I, nRoundedDurationMS: O };
                I += O;
              }
              return null;
            }
            CreateGlobalRangeForTimeline(g, p, I, x) {
              let k = p - I,
                O = p + x;
              return this.ClampGlobalRangeToTimeline(g, k, O);
            }
            ClampGlobalRangeToTimeline(g, p, I) {
              let x = this.GetGlobalOffsetDataForTimeline(g, 0);
              if (!x) return [0, 0];
              let k = Math.max(p, x.nGlobalOffsetMS),
                O = Math.min(I, x.nGlobalOffsetMS + x.nRoundedDurationMS - 1);
              return [k, O];
            }
            GetTimelineOffsetFromGlobal(g, p) {
              const I = this.m_ulFirstTimelineOffsetMS + g;
              let x = 0;
              for (let k of this.m_rgTimelineMetadata) {
                const O = this.GetTimelineStartBeforeGlobalZeroMS(
                    k.metadata.timeline_id,
                  ),
                  N = parseInt(k.metadata.duration_ms) + O,
                  M = ji.ApplyTimelineRounding(N, p);
                if (I < x + M)
                  return {
                    strTimelineID: k.metadata.timeline_id,
                    nTimelineOffsetMS: (0, H.sK)(I - x - O),
                  };
                x += N;
              }
              return {
                strTimelineID: void 0,
                nTimelineOffsetMS: (0, H.sK)(NaN),
              };
            }
            ConvertRecordingOffsetToGlobalOffset(g, p, I) {
              let x = 0;
              for (let k of this.m_rgTimelineMetadata) {
                let O = parseInt(k.metadata.duration_ms);
                const N = this.GetTimelineStartBeforeGlobalZeroMS(
                  k.metadata.timeline_id,
                );
                let M = ji.ApplyTimelineRounding(O, I);
                for (let ee of k.metadata.recordings)
                  if (ee.recording_id === g) {
                    let me =
                      (isNaN(parseInt(ee.recording_zero_timeline_offset_ms))
                        ? 0
                        : parseInt(ee.recording_zero_timeline_offset_ms) - N) +
                      p;
                    return (
                      (x += me),
                      {
                        nGlobalOffsetMS: x,
                        nRoundedDurationMS: M,
                        strTimelineID: k.metadata.timeline_id,
                        nTimelineOffsetMS: me,
                      }
                    );
                  }
                x += M;
              }
              return null;
            }
            IsActiveTimeline(g) {
              return g ? this.m_mapRunningTimelines.has(g) : !1;
            }
            MakeRelativeToTimelineEndIfActive(g, p) {
              if (!this.IsActiveTimeline(g)) return p;
              const I = this.GetTimelineMetadata(g);
              if (!I) return p;
              let x = parseInt(I.metadata.duration_ms);
              return Math.min(p - x, 0);
            }
            IsActiveRecording(g) {
              for (let p of this.m_rgTimelineMetadata)
                for (let I of p.metadata.recordings)
                  if (I.recording_id === g) {
                    const x = this.m_mapRunningTimelines.get(
                      p.metadata.timeline_id,
                    );
                    return x && x.m_runningRecording
                      ? x.m_runningRecording.recording_id === g
                      : !1;
                  }
              return !1;
            }
            GetRunningTimelineDurationMS(g) {
              let p = this.m_mapRunningTimelines.get(g);
              if (!p) return 0;
              let I =
                  performance.now() -
                  p.m_perfCounterStart +
                  p.m_nPerfCounterOffsetMS,
                x = parseInt(p.m_metadata.duration_ms) || 0;
              return Math.max(I, x);
            }
            GetRunningTimelineForRecording(g, p) {
              const I = this.m_mapRunningTimelines.get(g);
              return I &&
                I.m_runningRecording &&
                I.m_runningRecording.recording_id === p
                ? I
                : null;
            }
            ConvertGlobaOffsetToRecordingAndRelativeOffset(g) {
              if (!this.m_bInitialized) return null;
              let p = this.FindTimelineAtOffset(g, 0);
              if (!p) return null;
              let I = p.nTimelineOffsetMS - p.ulGlobalToTimelineOffset;
              for (let x of p.timeline.metadata.recordings) {
                let k = parseInt(x.start_offset_ms);
                if (k + parseInt(x.duration_ms) < I || k > I) continue;
                let N = parseInt(x.recording_zero_timeline_offset_ms),
                  M = Math.max(I - k, 0);
                return (
                  isNaN(N) || (M = Math.max(p.nTimelineOffsetMS - N, 0)),
                  {
                    strRecordingID: x.recording_id,
                    nRecordingOffsetMS: M,
                    nStartOffsetMS: k,
                  }
                );
              }
              return null;
            }
            async FindRecordingAndOffsetForEntry(g) {
              for (const p of this.m_mapRunningTimelines.keys()) {
                if (!this.IsActiveTimeline(p)) continue;
                await this.LoadTimelineData(p);
                const I = this.m_mapTimelineData.get(p),
                  x = this.m_mapRunningTimelines.get(p);
                if (!(!I || !x)) {
                  for (const k of I.m_rgEntries)
                    if (k.id == g) {
                      const O = parseInt(k.time);
                      for (const N of x.m_metadata.recordings) {
                        const M = parseInt(N.start_offset_ms),
                          ee = M + parseInt(N.duration_ms);
                        if (O >= M && O <= ee)
                          return {
                            strRecordingID: N.recording_id,
                            nRecordingOffsetMS: O,
                            nStartOffsetMS: M,
                          };
                      }
                    }
                  break;
                }
              }
            }
            GetClosestNextRecordingInGlobalTimeline(g) {
              for (let p of this.m_rgTimelineMetadata)
                for (let I of p.metadata.recordings)
                  if (
                    parseInt(I.start_offset_ms) + p.nGlobalOffsetMS.valMS >
                    g.valMS
                  )
                    return I;
              return null;
            }
            GetClosestPreviousRecordingInGlobalTimeline(g) {
              let p = null;
              for (let I of this.m_rgTimelineMetadata)
                for (let x of I.metadata.recordings) {
                  if (
                    parseInt(x.start_offset_ms) + I.nGlobalOffsetMS.valMS >
                    g.valMS
                  )
                    return p;
                  p = x;
                }
              return p;
            }
            ConvertRecordingTimeMStoPreTrimTimeMS(g, p) {
              for (let I of this.m_rgTimelineMetadata)
                for (let x of I.metadata.recordings)
                  if (x.recording_id === g) {
                    const k = parseInt(x.recording_zero_timeline_offset_ms),
                      O = this.GetTimelineStartBeforeGlobalZeroMS(
                        I.metadata.timeline_id,
                      );
                    return !O || isNaN(k) ? p : p + O - k;
                  }
              return p;
            }
            GetTimelineDataOrStartLoad(g) {
              if (!g) return null;
              let p = this.m_mapTimelineData.get(g);
              return (
                p ||
                  (this.LoadTimelineData(g),
                  (p = this.m_mapTimelineData.get(g))),
                p
              );
            }
            GetTimelineData(g) {
              return this.m_mapTimelineData.get(g);
            }
            SetTimelineData(g, p) {
              const I = this.ProcessTimelineEntries(p);
              this.m_mapTimelineData.set(g, I);
            }
            GetClosestPreviousEntryInTimeline(g, p) {
              const I = this.GetTimelineMetadata(g),
                x = this.GetTimelineStartBeforeGlobalZeroMS(g),
                k = this.GetTimelineDataOrStartLoad(g);
              let O = null;
              if (k && k.m_strState === "loaded") {
                const N = k.m_rgEntries.filter((ee) => {
                    const le = parseInt(ee.time),
                      me = x + parseInt(I.metadata.duration_ms);
                    return le < me && le > x;
                  }),
                  M = ye.rJ(N, (ee) => p.valMS - 1 - parseInt(ee.time));
                M !== -1 && (O = N[M]);
              }
              return { entry: O, timelineState: k?.m_strState };
            }
            GetClosestNextEntryInTimeline(g, p) {
              const I = this.GetTimelineMetadata(g),
                x = this.GetTimelineStartBeforeGlobalZeroMS(g),
                k = this.GetTimelineDataOrStartLoad(g);
              let O = null;
              if (k && k.m_strState === "loaded") {
                const N = k.m_rgEntries.filter((ee) => {
                    const le = parseInt(ee.time),
                      me = x + parseInt(I.metadata.duration_ms);
                    return le < me && le > x;
                  }),
                  M = ye.rJ(N, (ee) => p.valMS - parseInt(ee.time));
                M < N.length - 1 && (O = N[M + 1]);
              }
              return { entry: O, timelineState: k?.m_strState };
            }
            GetClosestPreviousEntryInGlobalTimeline(g) {
              const p = this.GetTimelineOffsetFromGlobal(g, 0),
                I = this.GetTimelineData(p.strTimelineID);
              if (!I || I.m_strState !== "loaded")
                return {
                  timelineID: p?.strTimelineID,
                  timelineState: I?.m_strState,
                  entry: null,
                  globalMS: null,
                };
              const x = this.GetTimelineStartBeforeGlobalZeroMS(
                  p.strTimelineID,
                ),
                k = p.nTimelineOffsetMS.valMS + x,
                O = ye.rJ(I.m_rgEntries, (M) => k - parseInt(M.time));
              if (O !== -1) {
                const M = I.m_rgEntries[O],
                  le =
                    this.GetTimelineMetadata(p.strTimelineID).nGlobalOffsetMS
                      .valMS -
                    x +
                    parseInt(M.time);
                return le < 0
                  ? {
                      timelineID: p.strTimelineID,
                      timelineState: I.m_strState,
                      entry: null,
                      globalMS: null,
                    }
                  : {
                      timelineID: p.strTimelineID,
                      timelineState: I.m_strState,
                      entry: M,
                      globalMS: (0, H.Sb)(le),
                    };
              }
              let N = this.GetTimelineMetadataIndex(p.strTimelineID);
              if (N < 1)
                return {
                  timelineID: p.strTimelineID,
                  timelineState: I.m_strState,
                  entry: null,
                  globalMS: null,
                };
              for (let M = N - 1; M >= 0; M--) {
                const ee = this.m_rgTimelineMetadata[M],
                  le = this.GetTimelineData(ee.metadata.timeline_id);
                if (le) {
                  if (le.m_strState !== "loaded")
                    return {
                      timelineID: ee.metadata.timeline_id,
                      timelineState: le.m_strState,
                      entry: null,
                      globalMS: null,
                    };
                  if (le.m_rgEntries.length) {
                    const me = le.m_rgEntries[le.m_rgEntries.length - 1],
                      De = this.GetTimelineStartBeforeGlobalZeroMS(
                        ee.metadata.timeline_id,
                      ),
                      Je = ee.nGlobalOffsetMS.valMS - De + parseInt(me.time);
                    return Je < 0
                      ? {
                          timelineID: ee.metadata.timeline_id,
                          timelineState: le.m_strState,
                          entry: null,
                          globalMS: null,
                        }
                      : {
                          timelineID: ee.metadata.timeline_id,
                          timelineState: le.m_strState,
                          entry: me,
                          globalMS: (0, H.Sb)(Je),
                        };
                  }
                }
              }
              return {
                timelineID: this.m_rgTimelineMetadata[0].metadata.timeline_id,
                timelineState: "loaded",
                entry: null,
                globalMS: null,
              };
            }
            GetClosestNextEntryInGlobalTimeline(g) {
              const p = this.GetTimelineOffsetFromGlobal(g, 0),
                I = this.GetTimelineData(p.strTimelineID);
              if (!I || I.m_strState !== "loaded")
                return {
                  timelineID: p?.strTimelineID,
                  timelineState: I?.m_strState,
                  entry: null,
                  globalMS: null,
                };
              const x = this.GetTimelineStartBeforeGlobalZeroMS(
                  p.strTimelineID,
                ),
                k = p.nTimelineOffsetMS.valMS + x,
                N = ye.rJ(I.m_rgEntries, (le) => k - parseInt(le.time)) + 1;
              if (N <= I.m_rgEntries.length - 1) {
                const le = I.m_rgEntries[N],
                  De =
                    this.GetTimelineMetadata(p.strTimelineID).nGlobalOffsetMS
                      .valMS -
                    x +
                    parseInt(le.time);
                return De < this.GetGlobalTimelineEndMS().valMS
                  ? {
                      timelineID: p.strTimelineID,
                      timelineState: I.m_strState,
                      entry: le,
                      globalMS: (0, H.Sb)(De),
                    }
                  : {
                      timelineID: p.strTimelineID,
                      timelineState: I.m_strState,
                      entry: null,
                      globalMS: null,
                    };
              }
              const M = this.m_rgTimelineMetadata.length;
              let ee = this.GetTimelineMetadataIndex(p.strTimelineID);
              if (ee === -1 || ee === M - 1)
                return {
                  timelineID: p.strTimelineID,
                  timelineState: I.m_strState,
                  entry: null,
                  globalMS: null,
                };
              for (let le = ee + 1; le < M; le++) {
                const me = this.m_rgTimelineMetadata[le],
                  De = this.GetTimelineData(me.metadata.timeline_id);
                if (De) {
                  if (De.m_strState !== "loaded")
                    return {
                      timelineID: me.metadata.timeline_id,
                      timelineState: De.m_strState,
                      entry: null,
                      globalMS: null,
                    };
                  if (De.m_rgEntries.length) {
                    const Je = De.m_rgEntries[0],
                      be = this.GetTimelineStartBeforeGlobalZeroMS(
                        me.metadata.timeline_id,
                      ),
                      Ye = me.nGlobalOffsetMS.valMS - be + parseInt(Je.time);
                    return Ye < this.GetGlobalTimelineEndMS().valMS
                      ? {
                          timelineID: me.metadata.timeline_id,
                          timelineState: De.m_strState,
                          entry: Je,
                          globalMS: (0, H.Sb)(Ye),
                        }
                      : {
                          timelineID: me.metadata.timeline_id,
                          timelineState: De.m_strState,
                          entry: null,
                          globalMS: null,
                        };
                  }
                }
              }
              return {
                timelineID:
                  this.m_rgTimelineMetadata[M - 1].metadata.timeline_id,
                timelineState: "loaded",
                entry: null,
                globalMS: null,
              };
            }
            FindRangeEventsAtGlobalMS(g) {
              const p = this.GetTimelineOffsetFromGlobal(g, 0),
                I = this.GetTimelineDataOrStartLoad(p.strTimelineID);
              if (!I || I.m_strState !== "loaded") return [];
              const x = [];
              for (const k of I.m_rgEntries) {
                if (parseInt(k.time) > p.nTimelineOffsetMS.valMS) break;
                if (k.type !== "event" || parseInt(k.duration) == 0) continue;
                const O = parseInt(k.time),
                  N = O + parseInt(k.duration);
                O <= p.nTimelineOffsetMS.valMS &&
                  N >= p.nTimelineOffsetMS.valMS &&
                  x.push(k);
              }
              return x;
            }
            GetStateDescriptionAtGlobalMS(g) {
              const p = this.GetTimelineOffsetFromGlobal(g.valMS, 0),
                I = this.GetTimelineDataOrStartLoad(p.strTimelineID);
              if (!I || I.m_strState !== "loaded") return null;
              const x = ye.rJ(
                I.m_rgStateDescriptions,
                (k) => p.nTimelineOffsetMS.valMS - parseInt(k.time),
              );
              return x > -1 ? I.m_rgStateDescriptions[x] : null;
            }
            AdvanceGameModeIndex(g) {
              let p = g.m_iGameModeChanges;
              for (; p + 1 < g.m_data.m_rgGameModeChanges.length; ) {
                let I = g.m_data.m_rgGameModeChanges[p + 1];
                if (parseInt(I.time) > g.m_nTimelineOffsetMS) break;
                p++;
              }
              g.m_iGameModeChanges = p;
            }
            AdvanceEntriesIndex(g) {
              for (
                g.m_iEntries == -1 && g.m_iEntries++;
                g.m_iEntries < g.m_data.m_rgEntries.length;
              ) {
                let p = g.m_data.m_rgEntries[g.m_iEntries];
                if (parseInt(p.time) >= g.m_nTimelineOffsetMS) break;
                g.m_iEntries++;
              }
            }
            CreateTimelineIterator(g, p) {
              let I = this.FindTimelineAtOffset(g, p);
              if (!I)
                return {
                  m_timeline: null,
                  m_data: null,
                  m_nTimelineOffsetMS: 0,
                  m_iGameModeChanges: -1,
                  m_iEntries: -1,
                };
              let x = this.GetTimelineDataOrStartLoad(
                  I.timeline.metadata.timeline_id,
                ),
                k = -1,
                O = -1;
              if (x?.m_strState == "loaded") {
                let M = (ee) => I.ulGlobalToTimelineOffset - parseInt(ee.time);
                (k = ye.rJ(x.m_rgGameModeChanges, M)),
                  (O = ye.rJ(x.m_rgEntries, M));
              }
              let N = {
                m_timeline: I.timeline.metadata,
                m_data: x,
                m_nTimelineOffsetMS: Math.max(I.ulGlobalToTimelineOffset, 0),
                m_iGameModeChanges: k,
                m_iEntries: O,
              };
              return (
                this.AdvanceEntriesIndex(N), this.AdvanceGameModeIndex(N), N
              );
            }
            HasIteratorReachedEnd(g) {
              return !g.m_timeline;
            }
            AdvanceIterator(g, p) {
              let I = parseInt(g.m_timeline.duration_ms);
              if (
                g.m_nTimelineOffsetMS + p <
                I + this.m_ulFirstTimelineOffsetMS
              ) {
                (g.m_nTimelineOffsetMS += p),
                  this.AdvanceEntriesIndex(g),
                  this.AdvanceGameModeIndex(g);
                return;
              }
              let x = this.m_rgTimelineMetadata.findIndex(
                (k) => k.metadata == g.m_timeline,
              );
              if (x < 0 || x == this.m_rgTimelineMetadata.length - 1) {
                g.m_timeline = null;
                return;
              }
              x++,
                (g.m_timeline = this.m_rgTimelineMetadata[x].metadata),
                (g.m_data = this.GetTimelineDataOrStartLoad(
                  g.m_timeline.timeline_id,
                )),
                (g.m_nTimelineOffsetMS = 0),
                (g.m_iGameModeChanges = 0),
                (g.m_iEntries = 0);
            }
            GetIteratorTimelineState(g) {
              return g.m_data.m_strState;
            }
            GetIteratorGameMode(g) {
              return g.m_iGameModeChanges < 0 ||
                g.m_iGameModeChanges >= g.m_data.m_rgGameModeChanges.length
                ? v.il.Playing
                : g.m_data.m_rgGameModeChanges[g.m_iGameModeChanges].mode;
            }
            *GetIteratorEntriesWithin(g, p) {
              let I = g.m_data.m_rgEntries;
              for (let x = g.m_iEntries; x >= 0 && x < I.length; x++) {
                let k = I[x];
                if (parseInt(k.time) >= g.m_nTimelineOffsetMS + p) break;
                yield k;
              }
            }
            *GetIteratorGameModesWithin(g, p) {
              let I = g.m_data.m_rgGameModeChanges;
              for (let x = g.m_iEntries; x >= 0 && x < I.length; x++) {
                let k = I[x];
                if (parseInt(k.time) >= g.m_nTimelineOffsetMS + p) break;
                yield k;
              }
            }
            GetFirstRecording() {
              if (!this.m_bInitialized) return "";
              const g = this.m_rgTimelineMetadata[0];
              if (!g) return "";
              const p = g.metadata.recordings[0];
              return p ? p.recording_id : "";
            }
            GetFirstRecordingOfLastTimelineSession() {
              if (!this.m_bInitialized) return "";
              const g =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (!g) return "";
              const p = g.metadata.recordings[0];
              return p ? p.recording_id : "";
            }
            GetNextRecording(g) {
              if (!this.m_bInitialized || !g) return "";
              let p = !1;
              for (let I of this.m_rgTimelineMetadata)
                for (let x of I.metadata.recordings) {
                  if (p) return x.recording_id;
                  x.recording_id == g && (p = !0);
                }
              return "";
            }
            BRecordingHasZeroOffset(g) {
              if (!this.m_bInitialized) return !1;
              for (let p of this.m_rgTimelineMetadata)
                for (let I of p.metadata.recordings)
                  if (I.recording_id == g)
                    return !isNaN(
                      parseInt(I.recording_zero_timeline_offset_ms),
                    );
              return !1;
            }
            GetTimelineDateMS(g, p) {
              if (!this.m_bInitialized) return 0;
              let I = this.FindTimelineAtOffset(g, p);
              return I
                ? I.timeline.metadata.date_recorded * 1e3 + I.nTimelineOffsetMS
                : 0;
            }
            InsertEntryIntoTimelineSorted(g, p) {
              let I = (x, k) => parseInt(x.time) - parseInt(k.time);
              ye.Xr(g.m_rgEntries, p, I);
            }
            AddEventToTimeline(g, p, I, x, k, O, N, M) {
              if (!this.m_bInitialized)
                return (
                  (0, C.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const ee = this.m_mapTimelineData.get(g);
              if (!ee) return (0, C.ZI)(`failed to find timeline ${g}`), !1;
              const le = p + this.GetTimelineStartBeforeGlobalZeroMS(g),
                me = {
                  id: x,
                  time: le + "",
                  type: "event",
                  icon: I,
                  title: O,
                  description: N,
                  priority: k,
                  duration: `${M}`,
                  possible_clip: 2,
                };
              return (
                (0, C.tG)(`adding timeline event marker at ${g} at ${le} MS`),
                this.InsertEntryIntoTimelineSorted(ee, me),
                this.FireEvent("OnInvalidate", g),
                !0
              );
            }
            RemoveTimelineEvent(g, p) {
              if (!this.m_bInitialized)
                return (
                  (0, C.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const I = this.m_mapTimelineData.get(g);
              if (!I) return (0, C.ZI)(`failed to find timeline ${g}`), !1;
              const x = I.m_rgEntries.findIndex((k) => k.id === p);
              return x < 0
                ? ((0, C.ZI)(`failed to find entry by id: ${p}`), !1)
                : (I.m_rgEntries.splice(x, 1),
                  this.FireEvent("OnInvalidate", g),
                  !0);
            }
            AddUserMarker(g, p, I, x) {
              if (!this.m_bInitialized)
                return (
                  (0, C.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const k = this.m_mapTimelineData.get(g);
              if (!k) return (0, C.ZI)(`failed to find timeline ${g}`), !1;
              const O = p + this.GetTimelineStartBeforeGlobalZeroMS(g),
                N = {
                  id: x,
                  time: O + "",
                  type: "usermarker",
                  icon: I,
                  title: "",
                  description: "",
                  priority: 0,
                };
              return (
                (0, C.tG)(`adding user marker at ${g} at ${O} MS`),
                this.InsertEntryIntoTimelineSorted(k, N),
                this.FireEvent("OnInvalidate", g),
                !0
              );
            }
            UpdateUserMarker(g, p, I) {
              if (!this.m_bInitialized)
                return (
                  (0, C.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const x = this.m_mapTimelineData.get(g);
              if (!x) return (0, C.ZI)(`failed to find timeline ${g}`), !1;
              const k = x.m_rgEntries.findIndex((M) => M.id === p);
              if (k < 0)
                return (0, C.ZI)(`failed to find entry by id: ${p}`), !1;
              const O = x.m_rgEntries[k],
                N = O.time;
              return (
                (O.icon = I.strIcon),
                (O.time = "" + I.nTimelineOffsetMS),
                (O.title = I.name),
                (O.description = I.description),
                N != O.time &&
                  (x.m_rgEntries.splice(k, 1),
                  this.InsertEntryIntoTimelineSorted(x, O)),
                this.FireEvent("OnInvalidate", g),
                !0
              );
            }
            RemoveUserMarker(g, p) {
              if (!this.m_bInitialized)
                return (
                  (0, C.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const I = this.m_mapTimelineData.get(g);
              if (!I) return (0, C.ZI)(`failed to find timeline ${g}`), !1;
              const x = I.m_rgEntries.findIndex((k) => k.id === p);
              return x < 0
                ? ((0, C.ZI)(`failed to find entry by id: ${p}`), !1)
                : (I.m_rgEntries.splice(x, 1),
                  this.FireEvent("OnInvalidate", g),
                  !0);
            }
            AddRunningTimeline(g, p, I) {
              if (
                this.m_rgTimelineMetadata.find(
                  (M) => M.metadata.timeline_id == g,
                )
              )
                return;
              const x = {
                  timeline_id: g,
                  game_id: p,
                  date_recorded: I,
                  recordings: [],
                },
                k =
                  this.m_rgTimelineMetadata[
                    this.m_rgTimelineMetadata.length - 1
                  ],
                O = k
                  ? k.nGlobalOffsetMS.valMS + parseInt(k.metadata.duration_ms)
                  : 0;
              ye.Xr(
                this.m_rgTimelineMetadata,
                { nGlobalOffsetMS: (0, H.Sb)(O), metadata: x },
                (M, ee) => M.metadata.date_recorded - ee.metadata.date_recorded,
              ),
                this.m_mapTimelineData.set(g, {
                  m_strState: "loaded",
                  m_rgGameModeChanges: [],
                  m_rgStateDescriptions: [],
                  m_rgEntries: [],
                  m_rgPhases: [],
                });
              let N = {
                m_metadata: x,
                m_globalStartMS: O,
                m_perfCounterStart: performance.now(),
                m_nPerfCounterOffsetMS: Math.max(0, (0, i._2)() - I) * 1e3,
                m_runningRecording: null,
              };
              this.m_mapRunningTimelines.set(g, N),
                this.m_schUpdateRunning.IsScheduled() ||
                  this.m_schUpdateRunning.Schedule(
                    P,
                    this.UpdateRunningTimelines,
                  ),
                this.FireEvent("OnInvalidate", g);
            }
            UpdateRunningTimelines() {
              let g;
              this.m_mapRunningTimelines.forEach((p) => {
                g = p.m_metadata.timeline_id;
                let I =
                    performance.now() -
                    p.m_perfCounterStart +
                    p.m_nPerfCounterOffsetMS,
                  x = parseInt(p.m_metadata.duration_ms) || 0;
                I > x && (p.m_metadata.duration_ms = I.toString());
              }),
                this.m_mapRunningTimelines.size > 0 &&
                  this.m_schUpdateRunning.Schedule(
                    P,
                    this.UpdateRunningTimelines,
                  ),
                this.FireEvent("OnInvalidate", g);
            }
            RunningTimelineStopped(g, p) {
              let I = this.m_mapRunningTimelines.get(g);
              I &&
                ((I.m_metadata.duration_ms = p),
                this.m_mapRunningTimelines.delete(g),
                this.FireEvent("OnInvalidate", g));
            }
            AddRunningTimelineEntry(g) {
              let p = this.m_mapRunningTimelines.get(g.timeline_id),
                I = this.m_mapTimelineData.get(g.timeline_id);
              if (!p || !I) return;
              let x = (0, v.rU)(g);
              if (!x) return;
              (0, v.hT)(x)
                ? ye.Xr(
                    I.m_rgGameModeChanges,
                    x,
                    (N, M) => parseInt(N.time) - parseInt(M.time),
                  )
                : (0, v.Te)(x)
                  ? ye.Xr(
                      I.m_rgStateDescriptions,
                      x,
                      (N, M) => parseInt(N.time) - parseInt(M.time),
                    )
                  : ye.Xr(
                      I.m_rgEntries,
                      x,
                      (N, M) => parseInt(N.time) - parseInt(M.time),
                    );
              let k = parseInt(p.m_metadata.duration_ms) || 0,
                O = parseInt(g.time);
              k < O && (p.m_metadata.duration_ms = O.toString()),
                this.FireEvent("OnInvalidate", g.timeline_id);
            }
            TimelineDeleted(g) {
              const I = this.m_rgTimelineMetadata
                .filter((x) => x.metadata.timeline_id !== g)
                .map((x) => x.metadata);
              this.UpdateTimelineMetadata(I),
                this.m_mapTimelineData.delete(g),
                this.FireEvent("OnInvalidate", g);
            }
            RecordingSessionChanged(g) {
              let p = g.session_id,
                I = g.notification_type;
              if (I == Ie.E6.MC) {
                const x = this.m_mapRunningTimelines.get(g.timeline_id);
                if (!x) {
                  this.FireEvent("OnInvalidateRecording", g.timeline_id, p),
                    (0, re.wT)(
                      !1,
                      "Received recording started message before timeline info",
                    );
                  return;
                }
                const k = {
                  recording_id: p,
                  start_offset_ms: g.start_offset,
                  recording_zero_timeline_offset_ms: g.start_offset,
                  duration_ms: g.duration_ms,
                  recording_type: g.recording_type,
                };
                x.m_metadata.recordings.push(k), (x.m_runningRecording = k);
              } else if (I == Ie.E6.wK) {
                const x = this.GetRunningTimelineForRecording(g.timeline_id, p);
                if (!x) return;
                (x.m_runningRecording.duration_ms = g.duration_ms),
                  (x.m_runningRecording = null),
                  this.FireEvent("OnInvalidateRecording", g.timeline_id, p);
              } else if (I == Ie.E6.G6) {
                const x = this.GetTimelineMetadata(g.timeline_id);
                if (x) {
                  const O = x.metadata.recordings.find(
                    (N) => N.recording_id === p,
                  );
                  if (O) {
                    (O.start_offset_ms = g.start_offset),
                      (O.duration_ms = g.duration_ms);
                    const N =
                      parseInt(g.start_offset) + parseInt(g.duration_ms);
                    let M = parseInt(x.metadata.duration_ms) || 0;
                    N > M && (x.metadata.duration_ms = N.toString());
                  }
                }
                this.GetRunningTimelineForRecording(g.timeline_id, p) ||
                  this.FireEvent("OnInvalidateRecording", g.timeline_id, p);
              } else if (I == Ie.E6.qN) {
                const x = this.GetTimelineMetadata(g.timeline_id);
                if (x) {
                  const k = x.metadata.recordings.filter(
                    (O) => O.recording_id !== p,
                  );
                  x.metadata.recordings = k;
                }
              }
              this.FireEvent("OnInvalidate", g.timeline_id);
            }
            GetGlobalTimelineEndMS() {
              const g =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (g) {
                const p = isNaN(parseInt(g.metadata.duration_ms))
                  ? 0
                  : parseInt(g.metadata.duration_ms);
                return (0, H.Sb)(g.nGlobalOffsetMS.valMS + p);
              }
              return (0, H.Sb)(0);
            }
            GetEndOfRecordingsMS() {
              const g =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (g) {
                const p =
                  g.metadata.recordings[g.metadata.recordings.length - 1];
                if (p) {
                  const I = this.m_mapRunningTimelines.has(
                      g.metadata.timeline_id,
                    ),
                    x = isNaN(parseInt(p.start_offset_ms))
                      ? 0
                      : parseInt(p.start_offset_ms),
                    k = isNaN(parseInt(g.metadata.duration_ms))
                      ? 0
                      : parseInt(g.metadata.duration_ms);
                  let O = 0;
                  return (
                    I
                      ? (O = Math.max(0, k - x))
                      : isNaN(parseInt(p.duration_ms)) ||
                        (O = parseInt(p.duration_ms)),
                    (0, H.Sb)(g.nGlobalOffsetMS.valMS + x + O)
                  );
                }
              }
              return null;
            }
            GetTotalRecordingDuration() {
              let g = 0;
              return (
                this.m_rgTimelineMetadata.forEach((p) => {
                  p.metadata.recordings.forEach((I) => {
                    isNaN(parseInt(I.duration_ms)) ||
                      (g = g + parseInt(I.duration_ms));
                  });
                }),
                g
              );
            }
            GetTimelineStartBeforeGlobalZeroMS(g) {
              return g == this.m_rgTimelineMetadata[0].metadata.timeline_id
                ? this.m_ulFirstTimelineOffsetMS
                : 0;
            }
            async GenerateNamePartsFromTimeline(g, p, I, x) {
              let k,
                O = !1,
                N,
                M,
                ee,
                le;
              for (let Ye of this.m_rgTimelineMetadata) {
                let Nr = !1;
                if (!O) {
                  if (Ye.metadata.timeline_id != g) continue;
                  (Nr = !0), (O = !0);
                }
                const Ar = Ye.metadata.timeline_id == I;
                await this.LoadTimelineData(Ye.metadata.timeline_id);
                const pr = this.m_mapTimelineData.get(Ye.metadata.timeline_id);
                Nr && (ee = Ye.metadata.date_recorded + Math.floor(p / 1e3)),
                  Ar && (le = Ye.metadata.date_recorded + Math.floor(x / 1e3));
                for (let Mr of pr.m_rgEntries) {
                  const cr = parseInt(Mr.time);
                  if (
                    (Nr && cr < p) ||
                    (Ar && cr > x) ||
                    (!(0, v.eJ)(Mr) && !(0, v.N$)(Mr))
                  )
                    continue;
                  const vr = ce(Mr);
                  (!k || (vr && vr.rank > k.rank)) && (k = vr);
                }
                for (let Mr of pr.m_rgStateDescriptions) {
                  const cr = parseInt(Mr.time);
                  (Ar && cr > x) || ((!N || M < cr) && ((N = Mr), (M = cr)));
                }
                if (Ar) break;
              }
              const me = k?.strTitle ?? N?.title,
                De = new T.VS(this.GetGameID()),
                be = de.Vw.GetAppInfo(De.GetInternalAppID())?.name;
              return {
                strTimelinePart: me,
                strAppNamePart: be,
                rtStart: ee,
                rtEnd: le,
              };
            }
            async GenerateClipNameFromTimeline(g, p, I, x) {
              const { strTimelinePart: k, strAppNamePart: O } =
                  await this.GenerateNamePartsFromTimeline(g, p, I, x),
                N = new Date(),
                M = `${N.getFullYear()}-${(N.getMonth() + 1).toString().padStart(2, "0")}-${N.getDate().toString().padStart(2, "0")} ${N.toLocaleTimeString(Oe.pf.GetPreferredLocales())}`,
                ee = [O, M, k].filter((le) => !!le).join(" - ");
              return (0, C.q_)(`Generated clip name "${ee}"`), ee;
            }
          };
        ie([Z.sH], J.prototype, "m_bInitialized", 2),
          ie([S.o], J.prototype, "UpdateRunningTimelines", 1);
        let $ = J;
        function ce(ue) {
          switch (ue.type) {
            case "event":
              const g = ue;
              return { rank: 5e4 + ue.priority, strTitle: g.title };
            case "usermarker":
              const p = ue;
              return !p.title && !p.description
                ? null
                : {
                    rank: 1e5 + ue.priority,
                    strTitle: ue.title || ue.description,
                  };
            case "state_description":
              return { rank: 4e4, strTitle: ue.title };
            case "achievement":
              return { rank: 9e4, strTitle: ue.title };
          }
          return null;
        }
        function ge(ue) {
          const g = React.useMemo(() => GetTimelineLoaderForClip(ue), [ue]),
            p = React.useCallback(
              (I) =>
                `https://steamloopback.host/gamerecordings/clips/${ue}/video/${I}/session.mpd`,
              [ue],
            );
          return (
            React.useEffect(() => () => g && g.release(), [g]),
            { loader: g.loader, fnGetManifest: p }
          );
        }
        function he(ue) {
          const g = React.useMemo(() => GetTimelineLoaderForGame(ue), [ue]),
            p = React.useCallback(
              (I) =>
                `https://steamloopback.host/gamerecordings/video/${I}/session.mpd`,
              [],
            );
          return (
            React.useEffect(() => () => g && g.release(), [g]),
            { loader: g.loader, fnGetManifest: p }
          );
        }
        function pe(ue) {
          if (!Array.isArray(ue.entries)) {
            let g = [];
            ue.entries &&
              typeof ue.entries == "object" &&
              ((g = Object.values(ue.entries)),
              (g = g.filter((p) => p && typeof p == "object" && "time" in p)),
              g.sort((p, I) => parseInt(p.time) - parseInt(I.time))),
              (ue.entries = g);
          }
        }
      },
      86578: (se, Gt, E) => {
        "use strict";
        E.d(Gt, {
          Hv: () => ye,
          E6: () => Ie,
          $C: () => C,
          QX: () => Be,
          Bw: () => c,
          xM: () => gi,
        });
        var c = {};
        E.r(c),
          E.d(c, {
            P8: () => he,
            Ey: () => g,
            aI: () => ce,
            BA: () => $,
            uw: () => ue,
            Fy: () => ge,
            jL: () => pe,
          });
        var Be = {};
        E.r(Be),
          E.d(Be, {
            sd: () => O,
            dh: () => N,
            Jr: () => M,
            t8: () => ee,
            qK: () => x,
            yq: () => k,
          });
        var Ie = {};
        E.r(Ie),
          E.d(Ie, { qN: () => De, MC: () => le, wK: () => me, G6: () => Je });
        var ye = {};
        E.r(ye), E.d(ye, { W: () => Ye, h: () => be });
        var C = {};
        E.r(C), E.d(C, { E: () => Ar, v: () => Nr });
        var v = E(80613),
          d = E.n(v),
          i = E(75245),
          F = E(35038),
          S = E(66781);
        class H extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.timelines || i.Sg(H.M()),
              v.Message.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    timelines: { n: 1, c: Z, r: !0, q: !0 },
                    postgame_events: { n: 2, c: de, r: !0, q: !0 },
                    temporary_clips: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    tags: { n: 4, c: Oe, r: !0, q: !0 },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(H.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new H();
            return H.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(H.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(H.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingFile";
          }
        }
        class R extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.timelines || i.Sg(R.M()),
              v.Message.initialize(this, e, 0, -1, [1, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    timelines: { n: 1, c: Z, r: !0, q: !0 },
                    first_timeline_start_offset_ms: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    game_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    published_file_id: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    size_in_bytes: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    name: { n: 7, br: i.qM.readString, bw: i.gp.writeString },
                    temporary: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                    original_device: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    original_gaming_device_type: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    date_downloaded: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    thumbnail_width: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    tags: { n: 14, c: Oe, r: !0, q: !0 },
                    phases: { n: 15, c: ie, r: !0, q: !0 },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(R.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new R();
            return R.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(R.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(R.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingClipFile";
          }
        }
        class Z extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.timeline_id || i.Sg(Z.M()),
              v.Message.initialize(this, e, 0, -1, [5, 6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    game_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    duration_ms: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    recordings: { n: 5, c: T, r: !0, q: !0 },
                    phases: { n: 6, c: ie, r: !0, q: !0 },
                    significant_events: { n: 7, c: re, r: !0, q: !0 },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = i.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Z.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Z();
            return Z.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Z.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Z.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineMetadata";
          }
        }
        class T extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.recording_id || i.Sg(T.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    start_offset_ms: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    recording_type: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    delete_on_cleanup: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    video_manager_clip_id: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    video_manager_video_id: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    cdn_manifest_url: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    file_size: {
                      n: 9,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    recording_zero_timeline_offset_ms: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(T.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new T();
            return T.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(T.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(T.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineMetadata_Recording";
          }
        }
        class de extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.game_id || i.Sg(de.M()),
              v.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    events: { n: 2, c: re, r: !0, q: !0 },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = i.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(de.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new de();
            return de.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(de.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(de.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPostGameSummary";
          }
        }
        class re extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.game_id || i.Sg(re.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    rt_created: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    possible_clip: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    timeline_id: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    entry_id: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    timeline_offset_ms: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    marker_icon: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    marker_title: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    user_marker: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = i.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(re.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new re();
            return re.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(re.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(re.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineEvent";
          }
        }
        class Oe extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.game_id || i.Sg(Oe.M()),
              v.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    tag: { n: 2, c: Y },
                    references: { n: 3, c: Ae, r: !0, q: !0 },
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
          static toObject(e, a) {
            return i.BT(Oe.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Oe();
            return Oe.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Oe.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Oe.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTag";
          }
        }
        class Ae extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.clip_id || i.Sg(Ae.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    timeline_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    offset_ms: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(e, a) {
            return i.BT(Ae.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ae();
            return Ae.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ae.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ae.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTag_Timeline";
          }
        }
        class Se extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.timeline_id || i.Sg(Se.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    entry_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    timeline_offset_ms: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(e, a) {
            return i.BT(Se.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Se();
            return Se.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Se.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Se.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTagInstance";
          }
        }
        class ie extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.phase_id || i.Sg(ie.M()),
              v.Message.initialize(this, e, 0, -1, [6, 7, 9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    phase_id: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    duration_ms: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    tags: { n: 6, c: fe, r: !0, q: !0 },
                    contained_tags: { n: 7, c: fe, r: !0, q: !0 },
                    background_timeline_offset: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    attributes: { n: 9, c: P, r: !0, q: !0 },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = i.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(ie.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ie();
            return ie.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ie.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ie.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPhase";
          }
        }
        class fe extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.name || i.Sg(fe.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    group: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = i.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(fe.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new fe();
            return fe.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(fe.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(fe.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPhase_Tag";
          }
        }
        class Y extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.name || i.Sg(Y.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    group: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    icon: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    priority: {
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
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Y.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Y();
            return Y.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Y.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Y.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTimelineTag";
          }
        }
        class P extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.group || i.Sg(P.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    group: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    value: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    priority: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = i.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(P.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new P();
            return P.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(P.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(P.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhaseAttribute";
          }
        }
        const J = 0,
          $ = 1,
          ce = 2,
          ge = 3,
          he = 4,
          pe = 5,
          ue = 6,
          g = 7,
          p = 8,
          I = 9,
          x = 1,
          k = 2,
          O = 3,
          N = 4,
          M = 5,
          ee = 6,
          le = 1,
          me = 2,
          De = 3,
          Je = 4,
          be = 0,
          Ye = 1,
          Nr = 0,
          Ar = 1,
          pr = 1,
          Mr = 2;
        function cr(j) {
          return "unknown ETimelineEntryType ( " + j + " )";
        }
        function vr(j) {
          return "unknown EPhaseResultType ( " + j + " )";
        }
        function Vr(j) {
          return "unknown ETimelineChangeNotificationType ( " + j + " )";
        }
        function rr(j) {
          return (
            "unknown ERecordingSessionChangeNotificationType ( " + j + " )"
          );
        }
        function Di(j) {
          return "unknown EDiskSpaceType ( " + j + " )";
        }
        function nn(j) {
          return "unknown EThumbnailTimePrecision ( " + j + " )";
        }
        function ra(j) {
          return "unknown EThumbnailFormat ( " + j + " )";
        }
        class Tr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Tr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Tr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Tr();
            return Tr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Request";
          }
        }
        class Ne extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.apps || i.Sg(Ne.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: { apps: { n: 1, c: ir, r: !0, q: !0 } },
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
          static toObject(e, a) {
            return i.BT(Ne.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ne();
            return Ne.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ne.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ne.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Response";
          }
        }
        class ir extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ir.prototype.game_id || i.Sg(ir.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    most_recent_start_time: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    recording_type: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    video_duration_seconds: {
                      n: 4,
                      br: i.qM.readDouble,
                      bw: i.gp.writeDouble,
                    },
                    timeline_duration_seconds: {
                      n: 5,
                      br: i.qM.readDouble,
                      bw: i.gp.writeDouble,
                    },
                    is_active: { n: 6, br: i.qM.readBool, bw: i.gp.writeBool },
                    file_size: {
                      n: 7,
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
          toObject(e = !1) {
            return ir.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(ir.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ir.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ir();
            return ir.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ir.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ir.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Response_App";
          }
        }
        class rt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.game_id || i.Sg(rt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    game_id: {
                      n: 1,
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
          static toObject(e, a) {
            return i.BT(rt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new rt();
            return rt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(rt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(rt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForApp_Request";
          }
        }
        class At extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              At.prototype.timelines || i.Sg(At.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: { timelines: { n: 1, c: Z, r: !0, q: !0 } },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = i.w0(At.M())), At.sm_mbf;
          }
          toObject(e = !1) {
            return At.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(At.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(At.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new At();
            return At.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(At.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(At.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForApp_Response";
          }
        }
        class it extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.clip_id || i.Sg(it.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(e, a) {
            return i.BT(it.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new it();
            return it.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(it.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(it.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForClip_Request";
          }
        }
        class yt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.game_id || i.Sg(yt.M()),
              v.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    timelines: { n: 2, c: Z, r: !0, q: !0 },
                    first_timeline_start_offset_ms: {
                      n: 3,
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
          static toObject(e, a) {
            return i.BT(yt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new yt();
            return yt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(yt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(yt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForClip_Response";
          }
        }
        class Ge extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.page || i.Sg(Ge.M()),
              v.Message.initialize(this, e, 0, -1, [12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    page: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    count: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    filter_gameid: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    filter_search_string: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    filter_tags: { n: 12, c: ft, r: !0, q: !0 },
                    filter_phase_id: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(e, a) {
            return i.BT(Ge.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ge();
            return Ge.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ge.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ge.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Request";
          }
        }
        class ft extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.group || i.Sg(ft.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    group: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(e, a) {
            return i.BT(ft.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ft();
            return ft.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ft.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ft.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Request_Tag";
          }
        }
        class St extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.phases || i.Sg(St.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    phases: { n: 1, c: Rt, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = i.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(St.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new St();
            return St.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(St.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(St.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response";
          }
        }
        class Rt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Rt.prototype.game_id || i.Sg(Rt.M()),
              v.Message.initialize(
                this,
                e,
                0,
                -1,
                [7, 8, 10, 13, 16, 17],
                null,
              );
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    duration_ms: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    tags: { n: 7, c: Y, r: !0, q: !0 },
                    contained_tags: { n: 8, c: Y, r: !0, q: !0 },
                    background_recording: { n: 9, c: Vt },
                    clip_ids: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    type: { n: 11, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    start_ms: {
                      n: 12,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    screenshots: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    active: { n: 14, br: i.qM.readBool, bw: i.gp.writeBool },
                    phase_id: {
                      n: 15,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    significant_events: { n: 16, c: qe, r: !0, q: !0 },
                    attributes: { n: 17, c: P, r: !0, q: !0 },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = i.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(e = !1) {
            return Rt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Rt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Rt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Rt();
            return Rt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Rt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Rt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response_Phase";
          }
        }
        class Vt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Vt.prototype.timeline_id || i.Sg(Vt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    offset: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = i.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(e = !1) {
            return Vt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Vt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Vt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Vt();
            return Vt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Vt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Vt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response_Phase_BackgroundRecording";
          }
        }
        class Ee extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.game_id || i.Sg(Ee.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    game_id: {
                      n: 1,
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
          static toObject(e, a) {
            return i.BT(Ee.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ee();
            return Ee.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ee.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ee.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTags_Request";
          }
        }
        class dt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.tags || i.Sg(dt.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: { tags: { n: 1, c: Y, r: !0, q: !0 } },
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
          static toObject(e, a) {
            return i.BT(dt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new dt();
            return dt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(dt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(dt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTags_Response";
          }
        }
        class wr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return wr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new wr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new wr();
            return wr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetEnoughDiskSpace_Request";
          }
        }
        class ht extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.enough_space || i.Sg(ht.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    enough_space: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = i.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(ht.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ht();
            return ht.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ht.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ht.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetEnoughDiskSpace_Response";
          }
        }
        class Ir extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ir.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Ir();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ir();
            return Ir.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAvailableDiskSpace_Request";
          }
        }
        class Bt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.size || i.Sg(Bt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    size: { n: 1, br: i.qM.readDouble, bw: i.gp.writeDouble },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = i.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Bt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Bt();
            return Bt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Bt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Bt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAvailableDiskSpace_Response";
          }
        }
        class vt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vt.prototype.notification_type || i.Sg(vt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    timeline_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    game_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    start_time: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    duration_ms: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = i.w0(vt.M())), vt.sm_mbf;
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(vt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(vt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new vt();
            return vt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(vt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(vt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineChanged_Notification";
          }
        }
        class Tt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Tt.prototype.notification_type || i.Sg(Tt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    timeline_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    game_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    session_id: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    start_offset: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    recording_type: {
                      n: 8,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = i.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(e = !1) {
            return Tt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Tt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Tt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Tt();
            return Tt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Tt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Tt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_RecordingSessionChanged_Notification";
          }
        }
        class qe extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.timeline_id || i.Sg(qe.M()),
              v.Message.initialize(this, e, 0, -1, [17, 19], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    entry_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    type: { n: 4, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    game_mode: {
                      n: 5,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    range_title: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    range_duration: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    range_possible_clip: {
                      n: 9,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    timestamp_title: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    marker_icon: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    marker_description: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    marker_priority: {
                      n: 14,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    screenshot_handle: {
                      n: 15,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    achievement_name: {
                      n: 16,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    tag: { n: 17, c: Y, r: !0, q: !0 },
                    phase_id: {
                      n: 18,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    attributes: { n: 19, c: P, r: !0, q: !0 },
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
          static toObject(e, a) {
            return i.BT(qe.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new qe();
            return qe.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(qe.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(qe.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTimelineEntry";
          }
        }
        class Re extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.entry || i.Sg(Re.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    entry: { n: 1, c: qe },
                    game_id: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(e, a) {
            return i.BT(Re.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Re();
            return Re.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Re.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Re.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineEntryChanged_Notification";
          }
        }
        class nt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.game_id || i.Sg(nt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    timeline_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    entry_id: {
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
          static toObject(e, a) {
            return i.BT(nt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new nt();
            return nt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(nt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(nt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineEntryRemoved_Notification";
          }
        }
        class yr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return yr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new yr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new yr();
            return yr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_LowDiskSpace_Notification";
          }
        }
        class $e extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.game_id || i.Sg($e.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(e, a) {
            return i.BT($e.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new $e();
            return $e.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj($e.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0($e.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PostGameHighlightsChanged_Notification";
          }
        }
        class ve extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.game_id || i.Sg(ve.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    phase_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(e, a) {
            return i.BT(ve.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ve();
            return ve.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ve.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ve.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_OpenOverlayToGamePhase_Notification";
          }
        }
        class _e extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.game_id || i.Sg(_e.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    entry_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(e, a) {
            return i.BT(_e.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new _e();
            return _e.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(_e.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(_e.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_OpenOverlayToTimelineEvent_Notification";
          }
        }
        class Or extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Or.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Or();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Or();
            return Or.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PhaseListChanged_Notification";
          }
        }
        class He extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.clip_id || i.Sg(He.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    game_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    start_timeline_id: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    start_offset_ms: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    published_file_id: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    file_size: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    name: { n: 9, br: i.qM.readString, bw: i.gp.writeString },
                    date_clipped: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    temporary: { n: 11, br: i.qM.readBool, bw: i.gp.writeBool },
                    original_device: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    original_gaming_device_type: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    date_downloaded: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    thumbnail_url: {
                      n: 15,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    thumbnail_width: {
                      n: 16,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 17,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
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
          static toObject(e, a) {
            return i.BT(He.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new He();
            return He.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(He.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(He.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipSummary";
          }
        }
        class at extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.game_id || i.Sg(at.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    start: { n: 2, c: _t },
                    end: { n: 3, c: _t },
                    name: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    src_clip_id: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    temporary: { n: 6, br: i.qM.readBool, bw: i.gp.writeBool },
                    force_thumbnail: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(e, a) {
            return i.BT(at.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new at();
            return at.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(at.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(at.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Request";
          }
        }
        class _t extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _t.prototype.timeline_id || i.Sg(_t.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    offset_ms: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = i.w0(_t.M())), _t.sm_mbf;
          }
          toObject(e = !1) {
            return _t.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(_t.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(_t.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new _t();
            return _t.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(_t.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(_t.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Request_Position";
          }
        }
        class wt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wt.prototype.summary || i.Sg(wt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = { proto: wt, fields: { summary: { n: 1, c: He } } }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = i.w0(wt.M())), wt.sm_mbf;
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(wt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(wt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new wt();
            return wt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(wt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(wt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Response";
          }
        }
        class Mt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mt.prototype.clip_id || i.Sg(Mt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = i.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Mt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Mt();
            return Mt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Mt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Mt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteClip_Request";
          }
        }
        class Sr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Sr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Sr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Sr();
            return Sr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteClip_Response";
          }
        }
        class st extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.bitrate_kbps || i.Sg(st.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    bitrate_kbps: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    width: { n: 2, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    height: { n: 3, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    frames_per_second: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    codec: { n: 5, br: i.qM.readEnum, bw: i.gp.writeEnum },
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
          static toObject(e, a) {
            return i.BT(st.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new st();
            return st.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(st.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(st.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Settings";
          }
        }
        class Kt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Kt.prototype.clip_id || i.Sg(Kt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    export_mp4_path: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    settings: { n: 3, c: st },
                    use_unique_filename: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = i.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(e = !1) {
            return Kt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Kt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Kt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Kt();
            return Kt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Kt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Kt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Request";
          }
        }
        class lt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.result || i.Sg(lt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    result: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
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
          static toObject(e, a) {
            return i.BT(lt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new lt();
            return lt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(lt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(lt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Response";
          }
        }
        class It extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.clip_id || i.Sg(It.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    settings: { n: 2, c: st },
                    run_policy_checks: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = i.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(It.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new It();
            return It.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(It.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(It.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClipPreview_Request";
          }
        }
        class Ot extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ot.prototype.estimated_size || i.Sg(Ot.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    estimated_size: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    settings: { n: 2, c: st },
                    result: { n: 3, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = i.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(e = !1) {
            return Ot.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Ot.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ot.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ot();
            return Ot.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ot.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ot.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClipPreview_Response";
          }
        }
        class ke extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.game_id || i.Sg(ke.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    timeline_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    timeline_offset_ms: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    source_clip_id: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
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
          static toObject(e, a) {
            return i.BT(ke.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ke();
            return ke.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ke.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ke.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TakeScreenshot_Request";
          }
        }
        class Ve extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.screenshot_id || i.Sg(Ve.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    screenshot_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
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
          static toObject(e, a) {
            return i.BT(Ve.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ve();
            return Ve.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ve.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ve.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TakeScreenshot_Response";
          }
        }
        class Ue extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.clip_id || i.Sg(Ue.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    desc: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    visibility: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
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
          static toObject(e, a) {
            return i.BT(Ue.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ue();
            return Ue.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ue.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ue.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadClipToSteam_Request";
          }
        }
        class ot extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.summary || i.Sg(ot.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = { proto: ot, fields: { summary: { n: 1, c: He } } }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = i.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(ot.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ot();
            return ot.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ot.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ot.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadClipToSteam_Response";
          }
        }
        class Q extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.clip_id || i.Sg(Q.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = i.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Q.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Q();
            return Q.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Q.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Q.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ZipClip_Request";
          }
        }
        class Pe extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.zip_path || i.Sg(Pe.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    zip_path: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(e, a) {
            return i.BT(Pe.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Pe();
            return Pe.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Pe.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Pe.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ZipClip_Response";
          }
        }
        class je extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.game_id || i.Sg(je.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    created_after: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    include_temporary: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
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
          static toObject(e, a) {
            return i.BT(je.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new je();
            return je.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(je.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(je.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetClips_Request";
          }
        }
        class Xe extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.clip || i.Sg(Xe.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: { clip: { n: 1, c: He, r: !0, q: !0 } },
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
          static toObject(e, a) {
            return i.BT(Xe.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Xe();
            return Xe.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Xe.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Xe.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetClips_Response";
          }
        }
        class ct extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.game_id || i.Sg(ct.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    created_after: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(e, a) {
            return i.BT(ct.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ct();
            return ct.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ct.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ct.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAndTrimPostGameHighlights_Request";
          }
        }
        class zt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              zt.prototype.events || i.Sg(zt.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: { events: { n: 1, c: re, r: !0, q: !0 } },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = i.w0(zt.M())), zt.sm_mbf;
          }
          toObject(e = !1) {
            return zt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(zt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(zt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new zt();
            return zt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(zt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(zt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAndTrimPostGameHighlights_Response";
          }
        }
        class xt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.game_id || i.Sg(xt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    entry: { n: 2, c: qe },
                    clip_id: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = i.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(xt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new xt();
            return xt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(xt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(xt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserAddTimelineEntry_Request";
          }
        }
        class ut extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.entry_id || i.Sg(ut.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    entry_id: {
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
          static toObject(e, a) {
            return i.BT(ut.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ut();
            return ut.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ut.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ut.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserAddTimelineEntry_Response";
          }
        }
        class kt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              kt.prototype.game_id || i.Sg(kt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    entry: { n: 2, c: qe },
                    clip_id: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = i.w0(kt.M())), kt.sm_mbf;
          }
          toObject(e = !1) {
            return kt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(kt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(kt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new kt();
            return kt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(kt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(kt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserUpdateTimelineEntry_Request";
          }
        }
        class zr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return zr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new zr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new zr();
            return zr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserUpdateTimelineEntry_Response";
          }
        }
        class bt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.game_id || i.Sg(bt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    timeline_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    entry_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    clip_id: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = i.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(bt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new bt();
            return bt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(bt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(bt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserRemoveTimelineEntry_Request";
          }
        }
        class q extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new q();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new q();
            return q.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserRemoveTimelineEntry_Response";
          }
        }
        class Me extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.game_ids || i.Sg(Me.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    game_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
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
          static toObject(e, a) {
            return i.BT(Me.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Me();
            return Me.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Me.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Me.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ManuallyDeleteRecordingsForApps_Request";
          }
        }
        class jt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new jt();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new jt();
            return jt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ManuallyDeleteRecordingsForApps_Response";
          }
        }
        class Dt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Dt.prototype.folder_path || i.Sg(Dt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    folder_path: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = i.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Dt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Dt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Dt();
            return Dt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Dt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Dt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTotalDiskSpaceUsage_Request";
          }
        }
        class Et extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.size || i.Sg(Et.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    size: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = i.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Et.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Et();
            return Et.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Et.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Et.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTotalDiskSpaceUsage_Response";
          }
        }
        class Pt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pt.prototype.recording_id || i.Sg(Pt.M()),
              v.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    clip_id: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    timeline_id: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    start_offset_us: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readInt64String,
                      pbr: i.qM.readPackedInt64String,
                      bw: i.gp.writeRepeatedInt64String,
                    },
                    major_axis: {
                      n: 5,
                      d: 512,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_precision: {
                      n: 6,
                      d: Nr,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    format: {
                      n: 8,
                      d: pr,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = i.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Pt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Pt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Pt();
            return Pt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Pt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Pt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Request";
          }
        }
        class Wt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Wt.prototype.thumbnails || i.Sg(Wt.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: { thumbnails: { n: 1, c: er, r: !0, q: !0 } },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = i.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(e = !1) {
            return Wt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Wt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Wt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Wt();
            return Wt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Wt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Wt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Response";
          }
        }
        class er extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              er.prototype.image_data || i.Sg(er.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    image_data: {
                      n: 1,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    width: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    height: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = i.w0(er.M())), er.sm_mbf;
          }
          toObject(e = !1) {
            return er.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(er.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(er.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new er();
            return er.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(er.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(er.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Response_Thumbnail";
          }
        }
        class mt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.game_id || i.Sg(mt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(e, a) {
            return i.BT(mt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new mt();
            return mt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(mt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(mt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StartRecording_Request";
          }
        }
        class xr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return xr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new xr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new xr();
            return xr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StartRecording_Response";
          }
        }
        class Ft extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ft.prototype.game_id || i.Sg(Ft.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = i.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(e = !1) {
            return Ft.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Ft.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ft.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ft();
            return Ft.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ft.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ft.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StopRecording_Request";
          }
        }
        class gt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.summary || i.Sg(gt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = { proto: gt, fields: { summary: { n: 1, c: He } } }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = i.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(gt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new gt();
            return gt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(gt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(gt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StopRecording_Response";
          }
        }
        class ze extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.game_id || i.Sg(ze.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
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
          static toObject(e, a) {
            return i.BT(ze.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new ze();
            return ze.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(ze.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(ze.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetRecordingSize_Request";
          }
        }
        class U extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.file_size || i.Sg(U.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    file_size: {
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
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(U.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new U();
            return U.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(U.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(U.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetRecordingSize_Response";
          }
        }
        class _ extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new _();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new _();
            return _.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CleanupBackgroundRecordings_Request";
          }
        }
        class Er extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Er.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Er();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Er();
            return Er.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CleanupBackgroundRecordings_Response";
          }
        }
        class Br extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Br.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Br();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Br();
            return Br.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPlatformCapabilities_Request";
          }
        }
        class Lt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Lt.prototype.per_process_audio_capture || i.Sg(Lt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    per_process_audio_capture: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = i.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(e = !1) {
            return Lt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Lt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Lt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Lt();
            return Lt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Lt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Lt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPlatformCapabilities_Response";
          }
        }
        class Nt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Nt.prototype.summary || i.Sg(Nt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = { proto: Nt, fields: { summary: { n: 1, c: He } } }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = i.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Nt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Nt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Nt();
            return Nt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Nt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Nt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipCreated_Notification";
          }
        }
        class Zt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Zt.prototype.clip_id || i.Sg(Zt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    game_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = i.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(e = !1) {
            return Zt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Zt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Zt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Zt();
            return Zt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Zt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Zt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipDeleted_Notification";
          }
        }
        class Jt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Jt.prototype.progress || i.Sg(Jt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    progress: { n: 1, br: i.qM.readFloat, bw: i.gp.writeFloat },
                    clip_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = i.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(e = !1) {
            return Jt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Jt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Jt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Jt();
            return Jt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Jt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Jt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportProgress_Notification";
          }
        }
        class tr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tr.prototype.gameid || i.Sg(tr.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    gameid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    enabled: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    minutes: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    bitrate: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    infinite: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = i.w0(tr.M())), tr.sm_mbf;
          }
          toObject(e = !1) {
            return tr.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(tr.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(tr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new tr();
            return tr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(tr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(tr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PerGameSettings";
          }
        }
        class br extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return br.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new br();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new br();
            return br.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPerGameSettings_Request";
          }
        }
        class Yt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Yt.prototype.settings || i.Sg(Yt.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: { settings: { n: 1, c: tr, r: !0, q: !0 } },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = i.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(e = !1) {
            return Yt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Yt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Yt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Yt();
            return Yt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Yt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Yt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPerGameSettings_Response";
          }
        }
        class qt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qt.prototype.game_settings || i.Sg(qt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: { game_settings: { n: 1, c: tr } },
                }),
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = i.w0(qt.M())), qt.sm_mbf;
          }
          toObject(e = !1) {
            return qt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(qt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(qt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new qt();
            return qt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(qt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(qt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SetPerGameSettings_Request";
          }
        }
        class Pr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Pr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Pr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Pr();
            return Pr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SetPerGameSettings_Response";
          }
        }
        class Ut extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ut.prototype.gameid || i.Sg(Ut.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    gameid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = i.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(e = !1) {
            return Ut.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Ut.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Ut.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Ut();
            return Ut.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Ut.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Ut.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeletePerGameSettings_Request";
          }
        }
        class Wr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Wr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Wr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Wr();
            return Wr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeletePerGameSettings_Response";
          }
        }
        class $t extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $t.prototype.progress || i.Sg($t.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    progress: { n: 1, br: i.qM.readFloat, bw: i.gp.writeFloat },
                    clip_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    eresult: { n: 3, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = i.w0($t.M())), $t.sm_mbf;
          }
          toObject(e = !1) {
            return $t.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT($t.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq($t.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new $t();
            return $t.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj($t.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0($t.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadProgress_Notification";
          }
        }
        class pt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.game_id || i.Sg(pt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(e, a) {
            return i.BT(pt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new pt();
            return pt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(pt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(pt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SwitchBackgroundRecordingGame_Request";
          }
        }
        class kr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return kr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new kr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new kr();
            return kr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SwitchBackgroundRecordingGame_Response";
          }
        }
        class jr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return jr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new jr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new jr();
            return jr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetState_Request";
          }
        }
        class Qt extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qt.prototype.is_h265_enabled || i.Sg(Qt.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    is_h265_enabled: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = i.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(e = !1) {
            return Qt.toObject(e, this);
          }
          static toObject(e, a) {
            return i.BT(Qt.M(), e, a);
          }
          static fromObject(e) {
            return i.Uq(Qt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Qt();
            return Qt.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return i.zj(Qt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            i.i0(Qt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetState_Response";
          }
        }
        class Fr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Fr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Fr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              z = new Fr();
            return Fr.deserializeBinaryFromReader(z, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StateChanged_Notification";
          }
        }
        var gi;
        ((j) => {
          j.GetAppsWithBackgroundVideoHandler = {
            name: "GameRecording.GetAppsWithBackgroundVideo#1",
            request: Tr,
            response: Ne,
          };
          function e(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAppsWithBackgroundVideo#1",
                    (0, F.I8)(Tr, B),
                    Ne,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetAppsWithBackgroundVideo = e;
          function a(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAppsWithBackgroundVideo#1",
                    (0, F.I8)(Tr, B),
                    Ne,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetAppsWithBackgroundVideo = a),
            (j.GetTimelinesForAppHandler = {
              name: "GameRecording.GetTimelinesForApp#1",
              request: rt,
              response: At,
            });
          function z(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTimelinesForApp#1",
                    (0, F.I8)(rt, B),
                    At,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetTimelinesForApp = z;
          function ia(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTimelinesForApp#1",
                    (0, F.I8)(rt, B),
                    At,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetTimelinesForApp = ia),
            (j.GetTimelinesForClipHandler = {
              name: "GameRecording.GetTimelinesForClip#1",
              request: it,
              response: yt,
            });
          function na(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTimelinesForClip#1",
                    (0, F.I8)(it, B),
                    yt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetTimelinesForClip = na;
          function pi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTimelinesForClip#1",
                    (0, F.I8)(it, B),
                    yt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetTimelinesForClip = pi),
            (j.QueryPhasesHandler = {
              name: "GameRecording.QueryPhases#1",
              request: Ge,
              response: St,
            });
          function Ei(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.QueryPhases#1",
                    (0, F.I8)(Ge, B),
                    St,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.QueryPhases = Ei;
          function aa(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.QueryPhases#1",
                    (0, F.I8)(Ge, B),
                    St,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgQueryPhases = aa),
            (j.GetTagsHandler = {
              name: "GameRecording.GetTags#1",
              request: Ee,
              response: dt,
            });
          function sa(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetTags#1", (0, F.I8)(Ee, B), dt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          j.GetTags = sa;
          function la(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetTags#1", (0, F.I8)(Ee, B), dt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (j.SendMsgGetTags = la),
            (j.GetEnoughDiskSpaceHandler = {
              name: "GameRecording.GetEnoughDiskSpace#1",
              request: wr,
              response: ht,
            });
          function oa(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetEnoughDiskSpace#1",
                    (0, F.I8)(wr, B),
                    ht,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetEnoughDiskSpace = oa;
          function ca(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetEnoughDiskSpace#1",
                    (0, F.I8)(wr, B),
                    ht,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetEnoughDiskSpace = ca),
            (j.GetAvailableDiskSpaceHandler = {
              name: "GameRecording.GetAvailableDiskSpace#1",
              request: Ir,
              response: Bt,
            });
          function an(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAvailableDiskSpace#1",
                    (0, F.I8)(Ir, B),
                    Bt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetAvailableDiskSpace = an;
          function ua(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAvailableDiskSpace#1",
                    (0, F.I8)(Ir, B),
                    Bt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetAvailableDiskSpace = ua),
            (j.SaveClipHandler = {
              name: "GameRecording.SaveClip#1",
              request: at,
              response: wt,
            });
          function ma(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.SaveClip#1", (0, F.I8)(at, B), wt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          j.SaveClip = ma;
          function yi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.SaveClip#1", (0, F.I8)(at, B), wt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (j.SendMsgSaveClip = yi),
            (j.DeleteClipHandler = {
              name: "GameRecording.DeleteClip#1",
              request: Mt,
              response: Sr,
            });
          function fa(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.DeleteClip#1",
                    (0, F.I8)(Mt, B),
                    Sr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.DeleteClip = fa;
          function da(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.DeleteClip#1",
                    (0, F.I8)(Mt, B),
                    Sr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgDeleteClip = da),
            (j.GetClipsHandler = {
              name: "GameRecording.GetClips#1",
              request: je,
              response: Xe,
            });
          function Pi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetClips#1", (0, F.I8)(je, B), Xe, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          j.GetClips = Pi;
          function Zr(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetClips#1", (0, F.I8)(je, B), Xe, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (j.SendMsgGetClips = Zr),
            (j.UploadClipToSteamHandler = {
              name: "GameRecording.UploadClipToSteam#1",
              request: Ue,
              response: ot,
            });
          function et(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UploadClipToSteam#1",
                    (0, F.I8)(Ue, B),
                    ot,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.UploadClipToSteam = et;
          function Fe(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UploadClipToSteam#1",
                    (0, F.I8)(Ue, B),
                    ot,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgUploadClipToSteam = Fe),
            (j.ExportClipHandler = {
              name: "GameRecording.ExportClip#1",
              request: Kt,
              response: lt,
            });
          function $r(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ExportClip#1",
                    (0, F.I8)(Kt, B),
                    lt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.ExportClip = $r;
          function Ur(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ExportClip#1",
                    (0, F.I8)(Kt, B),
                    lt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgExportClip = Ur),
            (j.ExportClipPreviewHandler = {
              name: "GameRecording.ExportClipPreview#1",
              request: It,
              response: Ot,
            });
          function sn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ExportClipPreview#1",
                    (0, F.I8)(It, B),
                    Ot,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.ExportClipPreview = sn;
          function ln(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ExportClipPreview#1",
                    (0, F.I8)(It, B),
                    Ot,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgExportClipPreview = ln),
            (j.TakeScreenshotHandler = {
              name: "GameRecording.TakeScreenshot#1",
              request: ke,
              response: Ve,
            });
          function Le(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.TakeScreenshot#1",
                    (0, F.I8)(ke, B),
                    Ve,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.TakeScreenshot = Le;
          function on(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.TakeScreenshot#1",
                    (0, F.I8)(ke, B),
                    Ve,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgTakeScreenshot = on),
            (j.ZipClipHandler = {
              name: "GameRecording.ZipClip#1",
              request: Q,
              response: Pe,
            });
          function We(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.ZipClip#1", (0, F.I8)(Q, B), Pe, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          j.ZipClip = We;
          function ha(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.ZipClip#1", (0, F.I8)(Q, B), Pe, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (j.SendMsgZipClip = ha),
            (j.StartRecordingHandler = {
              name: "GameRecording.StartRecording#1",
              request: mt,
              response: xr,
            });
          function Si(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.StartRecording#1",
                    (0, F.I8)(mt, B),
                    xr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.StartRecording = Si;
          function Wi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.StartRecording#1",
                    (0, F.I8)(mt, B),
                    xr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgStartRecording = Wi),
            (j.StopRecordingHandler = {
              name: "GameRecording.StopRecording#1",
              request: Ft,
              response: gt,
            });
          function Fi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.StopRecording#1",
                    (0, F.I8)(Ft, B),
                    gt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.StopRecording = Fi;
          function Li(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.StopRecording#1",
                    (0, F.I8)(Ft, B),
                    gt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgStopRecording = Li),
            (j.GetBackgroundRecordingFileSizeHandler = {
              name: "GameRecording.GetBackgroundRecordingFileSize#1",
              request: ze,
              response: U,
            });
          function cn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetBackgroundRecordingFileSize#1",
                    (0, F.I8)(ze, B),
                    U,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetBackgroundRecordingFileSize = cn;
          function un(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetBackgroundRecordingFileSize#1",
                    (0, F.I8)(ze, B),
                    U,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetBackgroundRecordingFileSize = un),
            (j.CleanupBackgroundRecordingsHandler = {
              name: "GameRecording.CleanupBackgroundRecordings#1",
              request: _,
              response: Er,
            });
          function Ni(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.CleanupBackgroundRecordings#1",
                    (0, F.I8)(_, B),
                    Er,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.CleanupBackgroundRecordings = Ni;
          function mn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.CleanupBackgroundRecordings#1",
                    (0, F.I8)(_, B),
                    Er,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgCleanupBackgroundRecordings = mn),
            (j.GetAndTrimPostGameHighlightsHandler = {
              name: "GameRecording.GetAndTrimPostGameHighlights#1",
              request: ct,
              response: zt,
            });
          function fn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAndTrimPostGameHighlights#1",
                    (0, F.I8)(ct, B),
                    zt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetAndTrimPostGameHighlights = fn;
          function Ma(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAndTrimPostGameHighlights#1",
                    (0, F.I8)(ct, B),
                    zt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetAndTrimPostGameHighlights = Ma),
            (j.GetThumbnailsHandler = {
              name: "GameRecording.GetThumbnails#1",
              request: Pt,
              response: Wt,
            });
          function Qr(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetThumbnails#1",
                    (0, F.I8)(Pt, B),
                    Wt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetThumbnails = Qr;
          function Ui(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetThumbnails#1",
                    (0, F.I8)(Pt, B),
                    Wt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetThumbnails = Ui),
            (j.GetPlatformCapabilitiesHandler = {
              name: "GameRecording.GetPlatformCapabilities#1",
              request: Br,
              response: Lt,
            });
          function dn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetPlatformCapabilities#1",
                    (0, F.I8)(Br, B),
                    Lt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetPlatformCapabilities = dn;
          function hn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetPlatformCapabilities#1",
                    (0, F.I8)(Br, B),
                    Lt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetPlatformCapabilities = hn),
            (j.NotifyTimelineChangedHandler = {
              name: "GameRecording.NotifyTimelineChanged#1",
              request: vt,
            });
          function tt(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyTimelineChangedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyTimelineChanged = tt;
          function ri(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineChanged#1",
                    (0, F.I8)(vt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyTimelineChanged = ri;
          function Mn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineChanged#1",
                    (0, F.I8)(vt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyTimelineChanged = Mn),
            (j.NotifyRecordingSessionChangedHandler = {
              name: "GameRecording.NotifyRecordingSessionChanged#1",
              request: Tt,
            });
          function Hi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyRecordingSessionChangedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyRecordingSessionChanged = Hi;
          function bn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyRecordingSessionChanged#1",
                    (0, F.I8)(Tt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyRecordingSessionChanged = bn;
          function gn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyRecordingSessionChanged#1",
                    (0, F.I8)(Tt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyRecordingSessionChanged = gn),
            (j.NotifyTimelineEntryChangedHandler = {
              name: "GameRecording.NotifyTimelineEntryChanged#1",
              request: Re,
            });
          function Bi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyTimelineEntryChangedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyTimelineEntryChanged = Bi;
          function Qe(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineEntryChanged#1",
                    (0, F.I8)(Re, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyTimelineEntryChanged = Qe;
          function vi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineEntryChanged#1",
                    (0, F.I8)(Re, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyTimelineEntryChanged = vi),
            (j.NotifyTimelineEntryRemovedHandler = {
              name: "GameRecording.NotifyTimelineEntryRemoved#1",
              request: nt,
            });
          function pn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyTimelineEntryRemovedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyTimelineEntryRemoved = pn;
          function Ke(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineEntryRemoved#1",
                    (0, F.I8)(nt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyTimelineEntryRemoved = Ke;
          function ba(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineEntryRemoved#1",
                    (0, F.I8)(nt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyTimelineEntryRemoved = ba),
            (j.NotifyClipCreatedHandler = {
              name: "GameRecording.NotifyClipCreated#1",
              request: Nt,
            });
          function yn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyClipCreatedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyClipCreated = yn;
          function ar(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyClipCreated#1",
                    (0, F.I8)(Nt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyClipCreated = ar;
          function ii(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyClipCreated#1",
                    (0, F.I8)(Nt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyClipCreated = ii),
            (j.NotifyClipDeletedHandler = {
              name: "GameRecording.NotifyClipDeleted#1",
              request: Zt,
            });
          function sr(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyClipDeletedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyClipDeleted = sr;
          function ga(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyClipDeleted#1",
                    (0, F.I8)(Zt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyClipDeleted = ga;
          function Xi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyClipDeleted#1",
                    (0, F.I8)(Zt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyClipDeleted = Xi),
            (j.NotifyExportProgressHandler = {
              name: "GameRecording.NotifyExportProgress#1",
              request: Jt,
            });
          function pa(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyExportProgressHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyExportProgress = pa;
          function ya(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyExportProgress#1",
                    (0, F.I8)(Jt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyExportProgress = ya;
          function ni(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyExportProgress#1",
                    (0, F.I8)(Jt, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyExportProgress = ni),
            (j.NotifyUploadProgressHandler = {
              name: "GameRecording.NotifyUploadProgress#1",
              request: $t,
            });
          function ai(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyUploadProgressHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyUploadProgress = ai;
          function Ai(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyUploadProgress#1",
                    (0, F.I8)($t, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyUploadProgress = Ai;
          function Vi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyUploadProgress#1",
                    (0, F.I8)($t, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyUploadProgress = Vi),
            (j.NotifyLowDiskSpaceHandler = {
              name: "GameRecording.NotifyLowDiskSpace#1",
              request: yr,
            });
          function Ki(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyLowDiskSpaceHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyLowDiskSpace = Ki;
          function si(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyLowDiskSpace#1",
                    (0, F.I8)(yr, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyLowDiskSpace = si;
          function li(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyLowDiskSpace#1",
                    (0, F.I8)(yr, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyLowDiskSpace = li),
            (j.NotifyPostGameHighlightsChangedHandler = {
              name: "GameRecording.NotifyPostGameHighlightsChanged#1",
              request: $e,
            });
          function Zi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyPostGameHighlightsChangedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyPostGameHighlightsChanged = Zi;
          function Sn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyPostGameHighlightsChanged#1",
                    (0, F.I8)($e, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyPostGameHighlightsChanged = Sn;
          function Sa(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyPostGameHighlightsChanged#1",
                    (0, F.I8)($e, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyPostGameHighlightsChanged = Sa),
            (j.NotifyOpenOverlayToGamePhaseHandler = {
              name: "GameRecording.NotifyOpenOverlayToGamePhase#1",
              request: ve,
            });
          function Ba(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyOpenOverlayToGamePhaseHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyOpenOverlayToGamePhase = Ba;
          function va(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyOpenOverlayToGamePhase#1",
                    (0, F.I8)(ve, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyOpenOverlayToGamePhase = va;
          function Ta(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyOpenOverlayToGamePhase#1",
                    (0, F.I8)(ve, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyOpenOverlayToGamePhase = Ta),
            (j.NotifyOpenOverlayToTimelineEventHandler = {
              name: "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
              request: _e,
            });
          function Bn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyOpenOverlayToTimelineEventHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyOpenOverlayToTimelineEvent = Bn;
          function Ji(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
                    (0, F.I8)(_e, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyOpenOverlayToTimelineEvent = Ji;
          function wa(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
                    (0, F.I8)(_e, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyOpenOverlayToTimelineEvent = wa),
            (j.NotifyPhaseListChangedHandler = {
              name: "GameRecording.NotifyPhaseListChanged#1",
              request: Or,
            });
          function vn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyPhaseListChangedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyPhaseListChanged = vn;
          function Tn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyPhaseListChanged#1",
                    (0, F.I8)(Or, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyPhaseListChanged = Tn;
          function wn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyPhaseListChanged#1",
                    (0, F.I8)(Or, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgNotifyPhaseListChanged = wn),
            (j.GetPerGameSettingsHandler = {
              name: "GameRecording.GetPerGameSettings#1",
              request: br,
              response: Yt,
            });
          function In(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetPerGameSettings#1",
                    (0, F.I8)(br, B),
                    Yt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetPerGameSettings = In;
          function Ct(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetPerGameSettings#1",
                    (0, F.I8)(br, B),
                    Yt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetPerGameSettings = Ct),
            (j.SetPerGameSettingsHandler = {
              name: "GameRecording.SetPerGameSettings#1",
              request: qt,
              response: Pr,
            });
          function On(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.SetPerGameSettings#1",
                    (0, F.I8)(qt, B),
                    Pr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.SetPerGameSettings = On;
          function Yi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.SetPerGameSettings#1",
                    (0, F.I8)(qt, B),
                    Pr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgSetPerGameSettings = Yi),
            (j.DeletePerGameSettingsHandler = {
              name: "GameRecording.DeletePerGameSettings#1",
              request: Ut,
              response: Wr,
            });
          function zn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.DeletePerGameSettings#1",
                    (0, F.I8)(Ut, B),
                    Wr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.DeletePerGameSettings = zn;
          function xn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.DeletePerGameSettings#1",
                    (0, F.I8)(Ut, B),
                    Wr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgDeletePerGameSettings = xn),
            (j.UserAddTimelineEntryHandler = {
              name: "GameRecording.UserAddTimelineEntry#1",
              request: xt,
              response: ut,
            });
          function Cr(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserAddTimelineEntry#1",
                    (0, F.I8)(xt, B),
                    ut,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.UserAddTimelineEntry = Cr;
          function nr(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserAddTimelineEntry#1",
                    (0, F.I8)(xt, B),
                    ut,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgUserAddTimelineEntry = nr),
            (j.UserUpdateTimelineEntryHandler = {
              name: "GameRecording.UserUpdateTimelineEntry#1",
              request: kt,
              response: zr,
            });
          function kn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserUpdateTimelineEntry#1",
                    (0, F.I8)(kt, B),
                    zr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.UserUpdateTimelineEntry = kn;
          function Ht(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserUpdateTimelineEntry#1",
                    (0, F.I8)(kt, B),
                    zr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgUserUpdateTimelineEntry = Ht),
            (j.UserRemoveTimelineEntryHandler = {
              name: "GameRecording.UserRemoveTimelineEntry#1",
              request: bt,
              response: q,
            });
          function qi(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserRemoveTimelineEntry#1",
                    (0, F.I8)(bt, B),
                    q,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.UserRemoveTimelineEntry = qi;
          function jn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserRemoveTimelineEntry#1",
                    (0, F.I8)(bt, B),
                    q,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgUserRemoveTimelineEntry = jn),
            (j.ManuallyDeleteRecordingsForAppsHandler = {
              name: "GameRecording.ManuallyDeleteRecordingsForApps#1",
              request: Me,
              response: jt,
            });
          function Dn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ManuallyDeleteRecordingsForApps#1",
                    (0, F.I8)(Me, B),
                    jt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.ManuallyDeleteRecordingsForApps = Dn;
          function En(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ManuallyDeleteRecordingsForApps#1",
                    (0, F.I8)(Me, B),
                    jt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgManuallyDeleteRecordingsForApps = En),
            (j.GetTotalDiskSpaceUsageHandler = {
              name: "GameRecording.GetTotalDiskSpaceUsage#1",
              request: Dt,
              response: Et,
            });
          function Te(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTotalDiskSpaceUsage#1",
                    (0, F.I8)(Dt, B),
                    Et,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.GetTotalDiskSpaceUsage = Te;
          function Gr(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTotalDiskSpaceUsage#1",
                    (0, F.I8)(Dt, B),
                    Et,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgGetTotalDiskSpaceUsage = Gr),
            (j.SwitchBackgroundRecordingGameHandler = {
              name: "GameRecording.SwitchBackgroundRecordingGame#1",
              request: pt,
              response: kr,
            });
          function $i(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.SwitchBackgroundRecordingGame#1",
                    (0, F.I8)(pt, B),
                    kr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.SwitchBackgroundRecordingGame = $i;
          function Pn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.SwitchBackgroundRecordingGame#1",
                    (0, F.I8)(pt, B),
                    kr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (j.SendMsgSwitchBackgroundRecordingGame = Pn),
            (j.GetStateHandler = {
              name: "GameRecording.GetState#1",
              request: jr,
              response: Qt,
            });
          function Wn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetState#1", (0, F.I8)(jr, B), Qt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          j.GetState = Wn;
          function Fn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((ae, L) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      L(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetState#1", (0, F.I8)(jr, B), Qt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (j.SendMsgGetState = Fn),
            (j.NotifyStateChangedHandler = {
              name: "GameRecording.NotifyStateChanged#1",
              request: Fr,
            });
          function Ln(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    j.NotifyStateChangedHandler,
                    B,
                  )
            );
          }
          j.RegisterForNotifyStateChanged = Ln;
          function Nn(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyStateChanged#1",
                    (0, F.I8)(Fr, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.NotifyStateChanged = Nn;
          function Kr(B, o) {
            return (
              (o = o || (0, S.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyStateChanged#1",
                    (0, F.I8)(Fr, B),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          j.SendMsgNotifyStateChanged = Kr;
        })(gi || (gi = {}));
      },
      69561: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { by: () => pe, sc: () => J, IU: () => he });
        var c = E(3166),
          Be = E(35413),
          Ie = E(71742);
        const ye = 0,
          C = 1,
          v = 2,
          d = 4,
          i = 8,
          F = 16,
          S = 32,
          H = 64,
          R = 128,
          Z = 256,
          T = 512,
          de = 1024,
          re = 2048,
          Oe = 4096,
          Ae = 8192,
          Se = 16384,
          ie = 32768,
          fe = 65536,
          Y = 1073741824,
          P = null,
          J = 0,
          $ = "061818254b2c99ac49e6626adb128ed1282a392f",
          ce = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          ge = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          he = 120;
        class pe {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(p) {
            this.m_unAppID = p;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, $);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, $);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == d || this.apptype == v;
          }
          BuildAppURL(p, I) {
            return p
              ? c.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  p +
                  ".jpg"
              : (0, Be.t)(I);
          }
          DeserializeFromMessage(p) {
            (this.m_bInitialized = !0),
              (this.m_strName = p.name()),
              (this.m_strIconURL = p.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = p.app_type());
          }
          DeserializeFromAppOverview(p) {
            p.icon_hash() && p.app_type() != Y
              ? ((this.m_bInitialized = !0),
                (this.m_strName = p.display_name()),
                (this.m_strIconURL = p.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = p.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(p) {
            try {
              (this.m_strName = p.strName),
                (this.m_strIconURL = p.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(p.strUpdatedFromServer)),
                (this.m_eAppType = p.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, Ie.wT)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class ue {}
      },
      85528: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { Vw: () => fe });
        var c = E(14947),
          Be = E(99412),
          Ie = E(72604),
          ye = E(35038),
          C = E(69561),
          v = E(3166);
        class d {
          m_nLastUpdated = 0;
          m_mapLanguages = c.sH.map();
          m_appid;
          m_fetching = null;
          constructor(P) {
            this.m_appid = P;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(P) {
            return this.m_mapLanguages.has(P)
              ? this.m_mapLanguages.get(P)
              : null;
          }
          Localize(P, J) {
            let $ = v.TS.LANGUAGE,
              ce = this.GetTokenList($),
              ge = $ != "english" ? this.GetTokenList("english") : null;
            return i(P, ce, ge, this.m_appid, J);
          }
          SubstituteParams(P, J) {
            let $ = v.TS.LANGUAGE,
              ce = this.GetTokenList($),
              ge = $ != "english" ? this.GetTokenList("english") : null;
            return F(P, ce, ge, this.m_appid, J);
          }
        }
        function i(Y, P, J, $, ce) {
          if (!Y.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                Y,
                "appid",
                $,
                "tokens",
                P,
              ),
              ""
            );
          let ge = Y;
          Y = Y.toLowerCase();
          let he = "";
          if (
            (P && P.has(Y) && (he = P.get(Y)),
            !he && J && J.has(Y) && (he = J.get(Y)),
            he)
          )
            he = F(he, P, J, $, ce);
          else if (
            ((P || J) &&
              console.log(
                "No loc found for appid",
                $,
                ge,
                "Tokens:",
                P,
                "Fallback:",
                J,
              ),
            P && v.TS.EUNIVERSE != Be.wLO)
          )
            return Y;
          return he;
        }
        function F(Y, P, J, $, ce) {
          let ge = /{[A-za-z0-9_%#:]+}/g,
            he = Y.match(ge);
          if (he)
            for (let pe of he) {
              let ue = pe.slice(1, -1),
                g = S(ue, ce),
                p = i(g, P, J, $, ce);
              if (!p) return "";
              Y = Y.replace(pe, p);
            }
          return (Y = S(Y, ce)), Y;
        }
        function S(Y, P) {
          let J = /%[A-Za-z0-9_:]+%/g,
            $ = Y.match(J);
          if ($)
            for (let ce of $) {
              let ge = ce.slice(1, -1).toLowerCase(),
                he = P.get(ge);
              he == null
                ? console.log("No rich presence found for", ge)
                : (Y = Y.replace(ce, he));
            }
          return Y;
        }
        var H = E(72849),
          R = E(71742),
          Z = E(8323),
          T = Object.defineProperty,
          de = Object.getOwnPropertyDescriptor,
          re = (Y, P, J, $) => {
            for (
              var ce = $ > 1 ? void 0 : $ ? de(P, J) : P, ge = Y.length - 1, he;
              ge >= 0;
              ge--
            )
              (he = Y[ge]) && (ce = ($ ? he(P, J, ce) : he(ce)) || ce);
            return $ && ce && T(P, J, ce), ce;
          };
        function Oe(Y) {
          return useObserver(() => fe.GetAppInfo(Y));
        }
        function Ae(Y) {
          return useObserver(() => Y.map((P) => fe.GetAppInfo(P)));
        }
        const Se = 3600 * 24 * 7 * 2;
        class ie {
          m_CMInterface;
          m_mapAppInfo = c.sH.map();
          m_mapRichPresenceLoc = c.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new Z.lu();
          constructor() {
            (0, c.Gn)(this);
          }
          Init(P) {
            this.m_CMInterface = P;
          }
          BHavePendingAppInfoRequests() {
            return (
              this.m_setPendingAppInfo.size > 0 ||
              this.m_cAppInfoRequestsInFlight > 0
            );
          }
          get CMInterface() {
            return this.m_CMInterface;
          }
          RegisterCallbackOnLoad(P) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, R.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                P();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(P);
          }
          IsLoadingAppID(P) {
            return this.m_setPendingAppInfo.has(P);
          }
          GetAppInfo(P) {
            if (
              ((0, R.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(P))
            ) {
              let J = new C.by(P);
              this.m_mapAppInfo.set(P, J), this.QueueAppInfoRequest(P);
            }
            return this.m_mapAppInfo.get(P);
          }
          QueueAppInfoRequest(P) {
            return P
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (J) => (this.m_PendingAppInfoResolve = J),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(P),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const P = this.m_PendingAppInfoResolve,
              J = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(J),
              P?.();
          }
          async LoadAppInfoBatch(P) {
            this.m_cAppInfoRequestsInFlight++;
            let J = await this.LoadAppInfoBatchFromLocalCache(P);
            if (J.length) {
              console.log("Loading batch of App Info from Steam: ", J),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let $ = ye.w.Init(H._z);
              $.Body().set_language((0, Be.sfN)(v.TS.LANGUAGE));
              const ce = 50;
              for (; J.length > 0; ) {
                const ge = Math.min(ce, J.length),
                  he = J.slice(0, ge);
                (J = J.slice(ge)), $.Body().set_appids(he);
                const pe = await H.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  $,
                );
                pe.GetEResult() == Ie.R
                  ? this.OnGetAppsResponse(pe)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${pe.GetEResult()}, AppIDs:`,
                      he,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(P) {
            let J = [];
            for (let $ of P.Body().apps()) {
              let ce = this.m_mapAppInfo.get($.appid());
              (0, R.wT)(
                ce,
                `Got AppInfo response for unrequested AppID: ${$.appid()}`,
              ),
                ce &&
                  ((ce = new C.by($.appid())),
                  ce.DeserializeFromMessage($),
                  this.m_mapAppInfo.set($.appid(), ce),
                  J.push(ce));
            }
            this.SaveAppInfoBatchToLocalCache(J);
          }
          OnAppOverviewChange(P) {
            for (let J of P) {
              const $ = new C.by(J.appid());
              $.DeserializeFromAppOverview(J),
                $.is_initialized && this.m_mapAppInfo.set(J.appid(), $);
            }
          }
          async EnsureAppInfoForAppIDs(P) {
            let J = !1;
            return (
              P.forEach(($) => {
                let ce = this.m_mapAppInfo.get($);
                if (ce) {
                  ce.is_valid || (J = !0);
                  return;
                }
                (ce = new C.by($)),
                  this.m_mapAppInfo.set($, ce),
                  this.QueueAppInfoRequest($),
                  (J = !0);
              }),
              J && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(P) {
            this.m_CacheStorage = P;
          }
          GetCacheKeyForAppID(P) {
            return "APPINFO_" + P;
          }
          async LoadAppInfoBatchFromLocalCache(P) {
            if (!this.m_CacheStorage) return P;
            console.log("Loading batch of App Info from Local Cache: ", P);
            const J = new Date(new Date().getTime() - Se * 1e3),
              $ = async (pe) => {
                const ue = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(pe),
                );
                if (!ue) return pe;
                let g = this.m_mapAppInfo.get(pe);
                return (
                  (0, R.wT)(
                    g,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  g
                    ? ((g = new C.by(pe)),
                      g.DeserializeFromCacheObject(ue),
                      g.is_initialized
                        ? (this.m_mapAppInfo.set(pe, g),
                          g.time_updated_from_server < J ? pe : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            pe,
                            ue,
                          ),
                          pe))
                    : pe
                );
              };
            let ce = P.map((pe) => $(pe));
            return (await Promise.all(ce)).filter((pe) => pe !== null);
          }
          async SaveAppInfoBatchToLocalCache(P) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                P.map((J) => J.appid),
              );
              for (const J of P) {
                const $ = J.SerializeToCacheObject();
                $ &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(J.appid),
                    $,
                  );
              }
            }
          }
          Localize(P, J, $) {
            const ce = this.GetRichPresenceLoc(P);
            return ce
              ? ce.Localize(J, $)
              : v.TS.EUNIVERSE != Be.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${P} token ${J}, this may not have had a chance to load yet`,
                  ),
                  J)
                : "";
          }
          GetRichPresenceLoc(P) {
            if (this.m_mapRichPresenceLoc.has(P.toString())) {
              let $ = this.m_mapRichPresenceLoc.get(P.toString());
              return (
                $.m_nLastUpdated + 1e3 * 60 * C.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest($),
                $
              );
            }
            let J = new d(P);
            return (
              this.m_mapRichPresenceLoc.set(P.toString(), J),
              this.QueueRichPresenceLocRequest(J),
              J
            );
          }
          GetRichPresenceLocAsync(P) {
            let J = this.GetRichPresenceLoc(P);
            return J.m_nLastUpdated ? Promise.resolve(J) : J.m_fetching;
          }
          OnRichPresenceLocUpdate(P, J) {
            P.m_nLastUpdated = Date.now();
            for (let $ of J) {
              let ce = $.language(),
                ge = P.m_mapLanguages.get(ce);
              ge
                ? ge.clear()
                : (P.m_mapLanguages.set(ce, new Map()),
                  (ge = P.m_mapLanguages.get(ce)));
              for (let he of $.tokens())
                ge?.set(he.name().toLowerCase(), he.value());
            }
          }
          QueueRichPresenceLocRequest(P) {
            return (
              P.m_fetching ||
                ((P.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let J = ye.w.Init(H.zQ);
                    return (
                      J.Body().set_appid(P.GetAppID()),
                      J.Body().set_language(v.TS.LANGUAGE),
                      H.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        J,
                      )
                    );
                  })
                  .then(
                    (J) => (
                      (P.m_fetching = null),
                      J.GetEResult() != Ie.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            P,
                            J.Body().token_lists(),
                          ),
                          Promise.resolve(P))
                    ),
                  )),
                P.m_fetching.catch(() => {
                  P.m_fetching = null;
                })),
              P.m_fetching
            );
          }
        }
        re([c.XI], ie.prototype, "OnGetAppsResponse", 1),
          re([c.XI], ie.prototype, "OnRichPresenceLocUpdate", 1);
        const fe = new ie();
      },
      34843: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { VS: () => C });
        var c = E(38506),
          Be = E(99412),
          Ie = E(69561),
          ye = E(71742);
        class C {
          m_ulGameID;
          constructor(F, S, H) {
            if (typeof F == "string") this.m_ulGameID = c.A.fromString(F, !0);
            else {
              const R = H,
                Z = ((F & 255) << 24) + (S & 16777215);
              this.m_ulGameID = c.A.fromBits(Z, R, !0);
            }
          }
          GetAppID() {
            return this.m_ulGameID.getLowBitsUnsigned() & 16777215;
          }
          GetType() {
            return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
          }
          GetModID() {
            return this.m_ulGameID.getHighBitsUnsigned();
          }
          ConvertTo64BitString() {
            return this.m_ulGameID.toString();
          }
          BIsSteamApp() {
            return this.GetType() === Be.Rhn.k_EGameIDTypeApp;
          }
          BIsShortcut() {
            return this.GetType() === Be.Rhn.k_EGameIDTypeShortcut;
          }
          BIsMod() {
            return this.GetType() === Be.Rhn.k_EGameIDTypeGameMod;
          }
          GetInternalAppID() {
            return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
          }
          BIsValid() {
            switch (this.GetType()) {
              case Be.Rhn.k_EGameIDTypeApp:
                return this.GetAppID() !== Ie.sc;
              case Be.Rhn.k_EGameIDTypeGameMod:
                return (
                  this.GetAppID() !== Ie.sc &&
                  (this.GetModID() & 2147483648) != 0
                );
              case Be.Rhn.k_EGameIDTypeShortcut:
                return (this.GetModID() & 2147483648) != 0;
              default:
                return (
                  (0, ye.wT)(!1, `Unknown GameID type: ${this.GetType()}`), !1
                );
            }
          }
          static InitFromAppID(F) {
            return new C(Be.Rhn.k_EGameIDTypeApp, F, 0);
          }
          static InitFromShortcutID(F) {
            return new C(Be.Rhn.k_EGameIDTypeShortcut, 0, F);
          }
        }
        function v(i) {
          return C.InitFromAppID(i).ConvertTo64BitString();
        }
        function d(i) {
          return C.InitFromShortcutID(i).ConvertTo64BitString();
        }
      },
      35413: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { d: () => Be, t: () => Ie });
        var c = E(3166);
        const Be = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function Ie(ye, C) {
          let v = ".jpg";
          (!ye || ye === "0000000000000000000000000000000000000000") &&
            (ye = Be),
            ye.length == 44 && ((v = ye.substr(-4)), (ye = ye.substr(0, 40)));
          let d = c.TS.AVATAR_BASE_URL;
          return (
            d ||
              ((d = c.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (d += ye.substr(0, 2) + "/")),
            (d += ye),
            C && C != "small" && (d += "_" + C),
            (d += v),
            d
          );
        }
      },
      21988: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { dD: () => pe, fX: () => J });
        var c = E(7850),
          Be = E(90626),
          Ie = E(2596),
          ye = E.n(Ie),
          C = E(36118),
          v = E(58534),
          d = E(18210),
          i = E(71568),
          F = E(72739),
          S = E(68312),
          H = E(14947),
          R = E(65946),
          Z = E(18938),
          T = Object.defineProperty,
          de = Object.getOwnPropertyDescriptor,
          re = (k, O, N, M) => {
            for (
              var ee = M > 1 ? void 0 : M ? de(O, N) : O, le = k.length - 1, me;
              le >= 0;
              le--
            )
              (me = k[le]) && (ee = (M ? me(O, N, ee) : me(ee)) || ee);
            return M && ee && T(O, N, ee), ee;
          };
        class Oe {
          m_tours = {};
          m_strActiveTour = "";
          m_storage = void 0;
          m_bReady = !1;
          constructor() {
            (0, H.Gn)(this);
          }
          async Init(O) {
            if (this.m_storage) return;
            this.m_storage = O;
            const N = await Se(O);
            Object.keys(N || {}).forEach((M) => {
              const ee = !!N[M];
              this.m_tours[M] = {
                ...(this.m_tours[M] || { stops: {} }),
                bSeen: ee,
              };
            }),
              (this.m_bReady = !0);
          }
          UpdateStop(O, N, M, ee) {
            this.m_tours[O] || (this.m_tours[O] = { bSeen: !1, stops: {} }),
              (this.m_tours[O].stops[N] = { options: M, elem: ee });
          }
          BHasSeenTour(O) {
            return this.m_bReady
              ? this.m_tours[O] && this.m_tours[O].bSeen
              : !0;
          }
          GetTrackedStops(O) {
            return this.m_tours[O]?.stops || {};
          }
          ActivateTour(O) {
            this.m_strActiveTour &&
              this.m_strActiveTour !== O &&
              this.DismissTour(this.m_strActiveTour),
              (this.m_strActiveTour = O);
          }
          DismissTour(O) {
            this.m_tours[O] &&
              (this.MarkTourSeen(O),
              (this.m_tours[O].bSeen = !0),
              this.m_strActiveTour === O && (this.m_strActiveTour = ""));
          }
          MarkTourSeen(O) {
            return ie(this.m_storage, O, Date.now());
          }
          MarkTourUnseen(O) {
            return ie(this.m_storage, O, void 0);
          }
        }
        re([H.sH], Oe.prototype, "m_tours", 2),
          re([H.sH], Oe.prototype, "m_strActiveTour", 2),
          re([H.sH], Oe.prototype, "m_bReady", 2),
          re([H.XI.bound], Oe.prototype, "UpdateStop", 1),
          re([H.XI], Oe.prototype, "ActivateTour", 1),
          re([H.XI], Oe.prototype, "DismissTour", 1);
        const Ae = "tour_history";
        async function Se(k) {
          const O = await k.GetObject(Ae);
          return !O || typeof O != "object" ? {} : O;
        }
        async function ie(k, O, N) {
          const M = await Se(k);
          return k.StoreObject(Ae, { ...M, [O]: N });
        }
        const fe = new Oe();
        function Y() {
          const k = (0, S.rX)();
          return (
            (0, Be.useEffect)(() => {
              fe.Init(k);
            }, [k]),
            fe
          );
        }
        function P(k) {
          const O = Y(),
            { bShowTour: N, stopElems: M } = (0, R.q3)(() => ({
              bShowTour: !O.BHasSeenTour(k),
              stopElems: O.GetTrackedStops(k),
            }));
          return {
            bShowTour: N,
            stopElems: M,
            onInteraction: (0, Be.useCallback)(() => O.MarkTourSeen(k), [O, k]),
            onDismiss: (0, Be.useCallback)(() => O.DismissTour(k), [O, k]),
            onActivate: (0, Be.useCallback)(() => O.ActivateTour(k), [O, k]),
            updateStop: O.UpdateStop,
          };
        }
        function J(k) {
          const { children: O } = k;
          return (0, c.jsxs)(c.Fragment, {
            children: [O, (0, c.jsx)($, { ...k })],
          });
        }
        function $(k) {
          const { active: O, name: N, stops: M } = k,
            {
              bShowTour: ee,
              onInteraction: le,
              onDismiss: me,
              stopElems: De,
            } = P(N),
            [Je, be] = (0, Be.useState)(0);
          if (!ee || !O || Je >= M.length) return null;
          const Ye = () => {
              be(Je + 1), le();
            },
            { id: Nr, title: Ar, content: pr } = M[Je],
            Mr = De[Nr];
          if (!Mr || !Mr.elem) return null;
          let cr = pr;
          return (
            Array.isArray(pr) &&
              (cr = pr.map((vr, Vr) =>
                (0, c.jsx)("div", { children: vr }, Vr),
              )),
            (0, c.jsx)(ce, {
              ...Mr,
              children: (0, c.jsxs)(he, {
                tour: N,
                title: Ar,
                onRequestClose: me,
                children: [
                  cr,
                  (0, c.jsxs)("div", {
                    className: Ie.Action,
                    children: [
                      M.length > 1 &&
                        (0, c.jsx)("div", {
                          className: Ie.TipCount,
                          children: (0, d.we)(
                            "#Tour_TipCount",
                            Je + 1,
                            M.length,
                          ),
                        }),
                      Je < M.length - 1
                        ? (0, c.jsx)(v.jn, {
                            onClick: Ye,
                            children: (0, d.we)("#Button_Next"),
                          })
                        : (0, c.jsx)(v.jn, {
                            onClick: me,
                            children: (0, d.we)("#Button_Done"),
                          }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function ce(k) {
          const { elem: O, options: N, children: M } = k,
            { ownerWindow: ee } = (0, i.R7)(),
            le = O.getBoundingClientRect(),
            { style: me, position: De } = ge(ee, le, N.position, N.offset);
          return (0, F.createPortal)(
            (0, c.jsxs)("div", {
              className: Ie.TourPositioner,
              style: me,
              "data-position": De,
              children: [(0, c.jsx)(ue, { position: De, targetRect: le }), M],
            }),
            ee.document.body,
          );
        }
        function ge(k, O, N, M = 0) {
          let ee,
            le = N;
          const me = 240,
            De = 10,
            Je = M + p,
            be = me + De + Je;
          let Ye = k.document.body.matches(":dir(rtl)");
          switch (
            (Ye &&
              (le === "left"
                ? (le = "right")
                : le === "right" && (le = "left")),
            ((le === "left" && O.x < be) ||
              (le === "right" && k.innerWidth - (O.x + O.width) < be)) &&
              (le = "below"),
            le)
          ) {
            case "left":
              ee = {
                top: O.top,
                width: O.left - De - Je,
                left: De,
                minWidth: me,
                flexDirection: "row",
                justifyContent: "flex-end",
              };
              break;
            case "right":
              ee = {
                top: O.top,
                left: O.right + Je,
                right: De,
                minWidth: me,
                flexDirection: "row",
                justifyContent: "flex-start",
              };
              break;
            case "above":
              ee = {
                top: De,
                height: O.y - De - Je,
                left: O.x,
                flexDirection: "column",
                justifyContent: "flex-end",
              };
              break;
            default:
              Ye
                ? (ee = {
                    top: O.y + O.height + Je,
                    right: k.innerWidth - O.right,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  })
                : (ee = {
                    top: O.y + O.height + Je,
                    left: O.x,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  });
              break;
          }
          return {
            style: { ...ee, ...{ display: "flex" } },
            position: le,
            rect: O,
          };
        }
        function he(k) {
          const { tour: O, title: N, onRequestClose: M, children: ee } = k,
            { onActivate: le } = P(O);
          return (
            (0, Be.useEffect)(() => le(), [le]),
            (0, c.jsxs)("div", {
              className: Ie.TourBox,
              children: [
                (0, c.jsx)("div", {
                  onClick: M,
                  className: Ie.CloseButton,
                  children: (0, c.jsx)(C.sED, { className: Ie.X }),
                }),
                (0, c.jsx)("div", { className: Ie.Title, children: N }),
                (0, c.jsx)("div", { className: Ie.Content, children: ee }),
              ],
            })
          );
        }
        function pe(k) {
          const { name: O, tour: N, options: M, children: ee } = k,
            { updateStop: le } = P(N),
            me = (0, Be.useCallback)((be) => le(N, O, M, be), [le, N, O]),
            De = Be.Children.only(ee),
            Je = (0, Z.Ue)(me, De.props.ref);
          return (0, Be.cloneElement)(Be.Children.only(ee), { ref: Je });
        }
        function ue(k) {
          const { position: O, targetRect: N } = k;
          return (0, c.jsx)("svg", {
            viewBox: "0 0 28 10",
            className: Ie.TourStopArrow,
            style: I(O, N),
            children: (0, c.jsx)("polygon", {
              points: "0,0 14,10 28,0",
              fill: "currentColor",
            }),
          });
        }
        const g = 28,
          p = 10;
        function I(k, O) {
          const N = { width: `${g}px`, height: `${p}px` };
          switch (k) {
            case "right":
              (N.left = "0px"), (N.top = `${Math.max(O.height / 2 - p, p)}px`);
              break;
            case "left":
              (N.right = "0px"), (N.top = `${Math.max(O.height / 2 - p, p)}px`);
              break;
            case "above":
              (N.bottom = `${-p}px`),
                (N.insetInlineStart = `${Math.max(O.width / 2 - p, p)}px`);
              break;
            case "below":
              (N.top = `${-p}px`),
                (N.insetInlineStart = `${Math.max(O.width / 2 - p, p)}px`);
          }
          return N;
        }
        function x() {
          const k = Y();
          return useCallback((O) => k.MarkTourUnseen(O), [k]);
        }
      },
      47689: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { m: () => ye });
        var c = E(41735),
          Be = E.n(c),
          Ie = E(90626);
        function ye(C) {
          const v = Ie.useRef(Be().CancelToken.source());
          return (
            Ie.useEffect(() => {
              const d = v.current;
              return () => d.cancel(C ? `${C}: unmounting` : "unmounting");
            }, [C]),
            v.current
          );
        }
      },
      19730: (se, Gt, E) => {
        "use strict";
        E.d(Gt, { Dq: () => C, NO: () => v, dm: () => ye });
        var c = E(84346),
          Be = E(39905);
        function Ie(d, i) {
          const F = i.bUseBinary1K ? 1024 : 1e3,
            S = F * F,
            H = S * F,
            R = H * F;
          return d > R
            ? { nNum: d / R, strPrefix: "Tera" }
            : d > H
              ? { nNum: d / H, strPrefix: "Giga" }
              : d > S
                ? { nNum: d / S, strPrefix: "Mega" }
                : d > F
                  ? { nNum: d / F, strPrefix: "Kilo" }
                  : { nNum: d, strPrefix: "" };
        }
        function ye(d, i, F, S) {
          let H = i;
          typeof H == "number"
            ? (H = {
                nDigitsAfterDecimal: i,
                bUseBinary1K: F || F === void 0,
                bValueIsInBytes: !S,
                bValueIsRate: S,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (H = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...H,
              });
          const { nNum: R, strPrefix: Z } = Ie(d, H),
            T = `#${Z}${H.bValueIsInBytes ? "bytes" : "bits"}${H.bValueIsRate ? "_PerSecond" : ""}`;
          return Be.Z.Localize(
            T,
            R.toLocaleString((0, c.J)(), {
              minimumFractionDigits: H.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: H.nDigitsAfterDecimal,
            }),
          );
        }
        function C(d, i = 0) {
          let F;
          return (
            i && (F = { maximumFractionDigits: i }),
            d ? d.toLocaleString((0, c.J)(), F) : "" + d
          );
        }
        function v(d) {
          return d > 1e9
            ? Math.trunc(d / 1e9).toString() + "B"
            : d > 1e6
              ? Math.trunc(d / 1e6).toString() + "M"
              : d > 1e3
                ? Math.trunc(d / 1e3).toString() + "K"
                : d.toString();
        }
      },
      82554: (se) => {
        se.exports = {
          BurgerWrapper: "_3MSz7L-XuvWfvFpBVftE1d",
          DragCtn: "_2b8yW5EptL3NZIM0kUbBmD",
          Row: "_3Z-k6Tgg_S03GPAXhShlPk",
          CreateNewCtn: "_2aHNC95rlbJ-2Wq3Au7zld",
          NoHidden: "_28H0v-MAYUppGj9ujTvgvW",
        };
      },
      82237: (se) => {
        se.exports = {
          Lock: "_3cqGSrhjuXb6Lw4dojTPEJ",
          BranchDefCtn: "_11WAUIwXjb3rL72ZaRtzdN",
          BranchName: "_3ynqGe3uvkGERYhMf1NQw6",
        };
      },
      43456: (se) => {
        se.exports = {
          DialogBody: "KSlT0UneLB1zpHRwylHVu",
          Identifier: "_2Xy8CetS9wxH_SB6iHopUF",
          DialogIntro: "_3dhpNFAZYMVjWtmhN7dCeG",
          RadioColumn: "_9-nH5Jcd_6ulz54s_05aZ",
          DragTargetCtn: "_1AM376IieEYFXxShihHfyJ",
          PreviewCtn: "_3haphwObDbQPvjmAQjy5S",
          IconPreviewCtn: "_3kkzSe6w1iFoXurO7KAQLp",
          "drag-drop-box": "aYdSQzbLzkCN9cJL0B45q",
          dragging: "_1Qf1VRDr0cRTUVkzOjDUF6",
        };
      },
      87275: (se) => {
        se.exports = {
          GridCtn: "_3aZdpxGUGPNdPlgmQ36X4Z",
          Title: "_2PuQFm-Uj5YLaqn-EJBN8W",
          CtnGridAndBranchSelection: "_3_kNX8WB1RQfUU58NLOkng",
          RestrictedIconsSection: "xnQ8wePEyeWhyKBuWfFNL",
          Columns: "P0LqcYqIoPMpNiIQNqBzo",
          LeftCol: "u-kARSsloZ1bumhOELUFp",
          RightCol: "VlHqUJNvQLHjxVfx8eqon",
          BranchSets: "_1gsbwBi65Y-6b3qDT9_b9A",
          Ctn: "_2_TSqr_PahJsdUr7OUbOtb",
          Header: "_2vGQ8_vi8RhVVYtUDoJb3H",
          SubTitle: "_16kNii34_urQfBwE0zBAQX",
          TopRow: "_2Ikzk3s5grjLZfKS4rmn1-",
          TitleText: "_3maqtebgAEfvjk-ib8CmoC",
        };
      },
      83113: (se) => {
        se.exports = {
          Row: "_3Enetf2TSp3eysYLb7Gr-",
          LargeIcon: "_1MtLAT6eLpozVPmevUsgqU",
          MediumIcon: "_26JGm_1NnXHMgSqM9JGNVe",
          SmallIcon: "_28o4lkB_elG0p3JZiRZStf",
          IconGridCtn: "_1j5Zbtm3I1NFNClVlq4Iv0",
          DraggableBox: "_2PT9jzd7z8YAn7wA9d3lrN",
          MsgUnpublished: "t0ZBz0HtxBsB9bGw8mRM",
          Icons: "_2DAN7CmSHDvbDgASG1HdqS",
          MarkerID: "EBvlSRsAswgZaKRoaUHSz",
          IconContents: "_1QxLGdvoMspodnFxsItlT0",
          EditButton: "_2EQQiFzNO5Cwok7l2r4HXp",
          DragBox: "_23dzP716dQpqS5cKc563Tl",
        };
      },
      36952: (se) => {
        se.exports = {
          EditorCtn: "mCr782p9TpOa_yS4crmr5",
          HeaderCtn: "_31vyCu9RQ4FcloKNaUf8GB",
          Row: "_12SNJrSPcxhX6RkaZXZq86",
          PublishNoteCtn: "_30NmSIrCpnJ9lCOdZqZm6e",
          CalloutTitle: "por_TNP8uIqnxGfaUwx-F",
        };
      },
      95896: (se) => {
        se.exports = {
          Dummy: "_2840rmUpPlQD_u2oirCKXu",
          Selected: "WvAtVArGoU9dj88kJb1G",
          HighlightIcon: "_3rt1qClyPaHAYiVwOSu9Xz",
          CustomMarker: "_3F_GfwciLV6y6FOEIe3_S5",
          MarkerBacking: "_1ft3M77d9XtBcrueBGrbGw",
          HighlightIconSVG: "nt4N5Hp8gRa3CnL6YpyKr",
          Faded: "_3G-TED_y5JFy9DHiymK5Cn",
          Marker: "_3GP2Yb1IBiNxW79A0_H-Q1",
          GameMarkerSVG: "_2FfQ96ZQOySW735_57yKby",
        };
      },
      35009: (se) => {
        se.exports = {
          GoLiveButtonCtn: "_1Ssh6bcQcBm8T6zVNU48G2",
          GoLiveButton: "_1rZeqdwHzajXNoY-uxRgfW",
          IsLive: "_2MGnyLAWN4c3di_W6U3YWJ",
          JumpToEndIcon: "_2FkWFO_BAQnsWrQr-nHvEz",
        };
      },
      99550: (se) => {
        se.exports = {
          LoadingTimeline: "_3AC5PeKRkSoB1JUS8LCinu",
          ScrollAndControlsCtn: "_1CYsmnIqkn90UQTVYK63be",
          GamepadMode: "_1wi1J1l41xYwh6lx7zH4Aw",
          Controls: "_1l2J-z02NZ7-HU23Bk7FwR",
          TimelineScrollContainer: "_3v-bzPuU4mVOvwvq1wX6Z6",
          ContentContainer: "_1Jjb0RXXDDj5JSQTNRIeRi",
          AbsoluteLayer: "_2F0d9JLSNH0gY26UBXIZYS",
          HideOverflow: "_2GDis70-E8G-El7mDlayt8",
          RelativeLayer: "_1xZCNiE6ZMwQsUHLh2y9t1",
          WithPointerEvents: "_12MLk3-t1rqZ33U6DiMKg1",
          RecordingDecorators: "_2PJGDULdt2ctu6R0EkUHPj",
          ClipDecorators: "tbss_z2HLa4Oa0yS4mGrb",
          GameModes: "_1Bh3PscPMEMGlegOtxPEWM",
          DateDecorator: "_2w-ta9UJW1Y73wRilaD9l-",
          BackgroundTicks: "xD30aylfCATSjNrytpUAm",
          Highlights: "_56YDWYPBkNJazWmgg83Sk",
          RangeHighlights: "s20SLnZnerU68G2dHOWRW",
          Timestamps: "xLUyqvUeXIgxuJpmmte1i",
          RangeSelector: "_2vqUVszLX8jrl8soNo84qt",
          SeekScrubber: "_3MV0K4aiJwcuWauL5dt6gY",
          PlayHead: "_37u67bibEd1DUyQFBTBNzb",
          Thumbnails: "_1pOPbtOaUeqeJm3nrdEkyx",
          PositionLeft: "_2lo44W-Sy4zMrYWnl55XBD",
          PositionRight: "_2tl3cTX_fsKtBrtcctB5wc",
          Phases: "_29M5GL7LdzPRq4bOtIu5My",
          ContentAndGradient: "XrJofUthOAZ7wCkD_C2fE",
          ScrollbarPlaceholder: "_1NhP7G104P9VPsp6bTxyBb",
          LeftControlsAndContent: "_1vc8f5bCHfDynpWgwyhf5m",
          ScrollGradientCtn: "rWNgVMPb6DEglMsLileNg",
          FrontGradient: "_2M09urev2z_0keBeRWlFsa",
          HideGradient: "_28_y-RUEZhJpt4in4Wyry9",
          EndGradient: "YzFF90kSvFzYRc4OndPpi",
          ScrollbarAndSiblings: "_34dlBrUZP054ElsvOp5hQm",
          ScrollBarCtn: "_1-ooPvEW2c6SHuhnz6SK3t",
          HideScrollBar: "N-WtiJTQNtp0Tzuw4BmgF",
          ScrollTrack: "NP3DlSRiWZygPWZSLSVX",
          PlayHeadAnnotation: "_32vHJA51iTnZgyk7drRCvc",
          RangeAnnotation: "_2cjQVZ5ycKyb79yPxB-Bms",
          ScrollThumb: "JffqXSW3actHr6hj8F9Sn",
          Highlight: "_1EGQ0DSJx5OOPFoNVz85oF",
        };
      },
      7450: (se) => {
        se.exports = { MouseListenerContainer: "_1t81JirfhcUdp7F73SUzQF" };
      },
      8959: (se) => {
        se.exports = {
          LoadingTimeline: "_3HMMNaShMT1M773fCgCd",
          ScrollAndControlsCtn: "gAhqB_Mx8V-7QYnzQP1eo",
          GamepadMode: "XkOPy2hiLaUWJsZVWC23u",
          Controls: "uwbPYSFyWCkcEbf3b5Y9K",
          TimelineScrollContainer: "II0EI3Ol8DvWt7FQfsNbx",
          ContentContainer: "_2eSQSp9u7_VDUDrCG4V-tL",
          AbsoluteLayer: "_2fti4qzLVbEydOmlw7A16i",
          HideOverflow: "_16Ta99sWFo7DNbWlpvpHRV",
          RelativeLayer: "_1RIfcMPhdua9IftpbJJAKq",
          WithPointerEvents: "_2Sk-Lj6jlDfehv6uuUa_Yn",
          RecordingDecorators: "NBc0PgdECgNGHybXMXgOp",
          ClipDecorators: "YBRVEhywfTRwb_vT9HdnU",
          GameModes: "_3vfGkbTjXUzSwr6b-v42JO",
          DateDecorator: "kakzXn3creKWdal1etpku",
          BackgroundTicks: "_3bRgOtndRhCrJpwTzd0Oim",
          Highlights: "LzHSWmJHomqtU-jTSLDEG",
          RangeHighlights: "_1NdyCSdtiQFvoBznqvarvN",
          Timestamps: "_36FQk5T4kMLr1axT-z3jAq",
          RangeSelector: "_3jnVEdXp155d_RQr3eZuyK",
          SeekScrubber: "_3x48wiJyAtvabHFlW4HWuo",
          PlayHead: "_3ckxIZyeOrSrQ775apezh2",
          Thumbnails: "_31eJnQyMpbmhp0mnHd02Ky",
          PositionLeft: "_1stnksokEwzIn10nHGDCEM",
          PositionRight: "_2f_ksFBRUllauZs4HA-bzg",
          Phases: "TaarLFX9W8lQiCjgz-nIn",
        };
      },
      59254: (se) => {
        se.exports = {
          LoadingTimeline: "JGGVRlj-AwNguh4wa7807",
          ScrollAndControlsCtn: "_2RzAySWe-9uzCJA9oGykll",
          GamepadMode: "_3lpEJRNBcA9EpAgLomD0jn",
          Controls: "HvZN6nroENhLkhniNutuR",
          TimelineScrollContainer: "_1cFVEeJk2np6JpMKYq0m9t",
          ContentContainer: "_3wqjsEPRzSGUpOgWYezV30",
          AbsoluteLayer: "_1vYBX3E1lB7wsdRdmsRSwV",
          HideOverflow: "C6chOG85M6_-hqwofg04b",
          RelativeLayer: "_1_XjIyiq_P7oZk4Aa3PZsk",
          WithPointerEvents: "_2GrriEvGl2vEPERHoIkg9X",
          RecordingDecorators: "T_GKyHV01N-0Mw4V9Q8N4",
          ClipDecorators: "_3jAa31iOtuHCYOt1cyYPHU",
          GameModes: "z3tClNy49hdbgj0NVx7R5",
          DateDecorator: "EiFtpT2NTMMovW9unJLGu",
          BackgroundTicks: "_2abPmFPmW_oPE349VO2TpA",
          Highlights: "_2_8rC82wthkPbfuHxBkHYk",
          RangeHighlights: "_2Lj8ZYpDL8HxfPJRXg0kgm",
          Timestamps: "_1e7MByQ-W7P_ftMx-4WcMV",
          RangeSelector: "_4kLbmnRkHeqUQus1ItdUY",
          SeekScrubber: "_23WuCkYUy41WcwdxqycJXb",
          PlayHead: "_1Zf0UX5Nyt7ZflIvx86a9K",
          Thumbnails: "Px56HgqgodVj1s1lELr9s",
          PositionLeft: "PftJQL7hFlMD6fyCmJ94X",
          PositionRight: "_3lMvwFfrxKrrjEOlUf7ov3",
          Phases: "_3CMHPm1gab4V9JTfZYAp1E",
          TimelineBacking: "_18sxaBKg910kJmmJS3zaaE",
          TimeTick: "faIAh3Zzg4MdulktB1IFo",
          TickLine: "iLLznzt7Npcsc-y_9tyCc",
          Major: "walQuMqIA1KE3_0tchqYj",
          Minor: "_2I5yeKjfnjaPmRNIpHUrl1",
        };
      },
      10564: (se) => {
        se.exports = {
          LoadingTimeline: "_1ZSym6hTh_XycEHZQv3waF",
          ScrollAndControlsCtn: "_1q95sqXb4oTj5LekKlUWqI",
          GamepadMode: "_1F4jNXOr-Gwt5oygH9F_mh",
          Controls: "z15TYuRsvRt6Li7EM3mM5",
          TimelineScrollContainer: "R0SGdHf8Z6rpbQGEf06ZP",
          ContentContainer: "_2XMJZ6Tb3zjNYuh91Il3rA",
          AbsoluteLayer: "_3AkqWv_vVG7IcuxTsw4FBK",
          HideOverflow: "qGvsK6jhx7uQrlMTQ6zSP",
          RelativeLayer: "_3zzAfZQcPSWB4Gj3tebKrI",
          WithPointerEvents: "_3z05uqMI8WeroTsIbWYYr0",
          RecordingDecorators: "TlW7mv6AQcJacn3I9Wcho",
          ClipDecorators: "_2HPd50upMLAGM4Ne2mOpIA",
          GameModes: "mKXM660QBtJ7Qy_5uNGdP",
          DateDecorator: "_1KAHyZKmBLACfUu9XXht0l",
          BackgroundTicks: "_1sDp4tXvu6KF6yaTe5Y65b",
          Highlights: "_3vFdT_Qdu7unGt0x2UBIOz",
          RangeHighlights: "P3bkvf7j3c-xSz6s7HtHY",
          Timestamps: "_3esOhQ7c-vdhQ6yUCny4aA",
          RangeSelector: "NMfai6QhLJB5lfGE-3T3o",
          SeekScrubber: "_3n81RbB8WDAKT_q_iUYF6P",
          PlayHead: "_1j_4JBYTjJZ3L044d9QjQL",
          Thumbnails: "_1a1mkc6mxngGs0scqTx8Rv",
          PositionLeft: "_3Tw8uk4rZfrmmyGfql1eTc",
          PositionRight: "_3OI9MLjE2183pXrrzjZlZ",
          Phases: "_1j2D4HXwIaWGBWeUeZiWve",
          ClipDecorator: "_3EWp_eWXsvKB-Lwz-Afl0S",
          gradient: "_3vAWnjV6c5oyReAPoGg-Ln",
        };
      },
      28361: (se) => {
        se.exports = {
          LoadingTimeline: "_3KG8zrhAf5BZd7OOkiM3Vn",
          ScrollAndControlsCtn: "_2Ox4l0Syi-OBMfeLLwGB0S",
          GamepadMode: "_1Nc3R34LFcFFu9xxGczIZx",
          Controls: "_1S92sYYyOl3-hAGUyKk3mT",
          TimelineScrollContainer: "_2yvt6-n0jndik9woSi9oiV",
          ContentContainer: "_28oA65JjmGpgktil_Spx8V",
          AbsoluteLayer: "_3RYVNG8TM3G95eG8DCgVCb",
          HideOverflow: "_1kDYn7vvEbKlU7Z4VfveI8",
          RelativeLayer: "_189IQalI-kinGc53wY8Btm",
          WithPointerEvents: "V18cwfJ6UCohOoz26FN68",
          RecordingDecorators: "_2u47IazTp8la3TplHQ4uMB",
          ClipDecorators: "_2LgpdbDk3onwK4JvCZ39GV",
          GameModes: "_32FUOpVgoy1QDT7K79IbqA",
          DateDecorator: "_3I1C0omMrwDJGYMspB33xc",
          BackgroundTicks: "-YJsXiYQ82zAY6sIPD-Z3",
          Highlights: "_1YMPrXbYXRhzivMd0RAOk-",
          RangeHighlights: "MxB0pCFqE_x6FHJiO8vGU",
          Timestamps: "_2GK8qqQxwH2_oWzF5rDbv6",
          RangeSelector: "pUP4yzI_BrVbBm7Bv9_ta",
          SeekScrubber: "_4LzfJqGOGDmemv2y4TUvS",
          PlayHead: "_7tgJLenOXLuiHf4FQsal-",
          Thumbnails: "TulKT7sbANoIafI9_KJza",
          PositionLeft: "_2g51I5QZegiV94lHBGsUhw",
          PositionRight: "_1AQnsvHDMaK1BJGY5kAcTl",
          Phases: "_3rPpP9lH-E-fnlD-DUERH3",
          TimelineRelativeDate: "xYXziACgvkSwOnjGsjrll",
          Overlay: "c1Fn5e_N42Q5Oz4gyqRvL",
        };
      },
      53298: (se) => {
        se.exports = {
          LoadingTimeline: "ALhsP_3HUfx4PHrpqy8R9",
          ScrollAndControlsCtn: "_5tbL0FKI0tuPTIa9Kh7Eo",
          GamepadMode: "_1dlSZNEhvmBeFco9nqqgCu",
          Controls: "u1VLCsRiWRO141U_KrOsN",
          TimelineScrollContainer: "_2IbHVvHaXnfviOahuULDQE",
          ContentContainer: "_2akKkTmA-GSqjV0ZuWZrxH",
          AbsoluteLayer: "_2e4HsYQIYWCzm4AUpHqlD2",
          HideOverflow: "_2Cp350sAx9clmoB_LKnqbp",
          RelativeLayer: "_124G22Z6qukxV-0yFjpk6h",
          WithPointerEvents: "ZoJ5cv5eX5Scw_K3FbQVA",
          RecordingDecorators: "_1b3xBvE7bRvkHIrvljgLJb",
          ClipDecorators: "_12hX8NvmhU3g8lrWcYZmia",
          GameModes: "_1w4ECxgpqgm_8JHSj5S_ys",
          DateDecorator: "_2_LxF0wGALV2Jtr6yimHGW",
          BackgroundTicks: "_1wC4nFbVKj98NDRuVnW2DK",
          Highlights: "_3Mwk0XzURhRyn-iKASG7Yj",
          RangeHighlights: "AwYHl8RlppVEH0g3dKMjP",
          Timestamps: "_2_I_TyIeQdR-V7l562aVwJ",
          RangeSelector: "_2509eCzShezVSGfZFWi9BW",
          SeekScrubber: "_3Re46KW-L5PLoUYxCq_k6W",
          PlayHead: "_3BW9NlhX6WYWHXM6WNBI54",
          Thumbnails: "_3WC2e0zUqP5LoUxckgI6Fv",
          PositionLeft: "m29ndF7OUcWuJyQ7gz0r9",
          PositionRight: "_3scLcN4HvBYNivCKDSVIGj",
          Phases: "_25KI7BuIZxgifkWKhYIy4m",
          GameModeMarker: "_XZRbjOovnp3-oJB1FHsX",
          Playing: "_1QXuDX8p22dW30Dq7Q4cY1",
          Staging: "_5elfnsld99d9XPrRSVVMb",
          Menus: "_2ouy5ehbuCra9zvvJVRt7N",
          Unspecified: "_3tV_P5UlKOy23ovyof9BCG",
          GameModeMarkerClip: "_2X0XBzWywYh06tLOpEVVhV",
        };
      },
      41972: (se) => {
        se.exports = {
          HighlightContextMenuItem: "_28S8ry9bxlwML-iCsdsuB",
          MenuItem: "JZCa05wXidmR0BEW4wKuT",
          EditMarker: "sMTceKd747vq8bsuL3OW9",
          CreateClip: "_1xK5Up775-kzkarHJyaUSH",
          DeleteMarker: "_1HITbDUgqbAsnVISlw-IU4",
          ViewScreenshot: "_2HfiRMT1mpZZy-Op04_Vp5",
          ViewClip: "_20E0pQUHwdjs6eM1Ow2GiS",
        };
      },
      23533: (se) => {
        se.exports = {
          LoadingTimeline: "_2i7CkGHUrVZKOMEsrhI1p_",
          ScrollAndControlsCtn: "_3fITrWggW83OcggiMJdPz3",
          GamepadMode: "_2hCXeP62uQrMldE08f-mjT",
          Controls: "_1EiX3eLLYicyYcDHtIM6_s",
          TimelineScrollContainer: "_2RYEV5Q8tyI-Z488xqMdJh",
          ContentContainer: "_2lWpy5QzYnH2pWhRjUASJL",
          AbsoluteLayer: "_3wd1JlZa9wOIFFMqdVmsh8",
          HideOverflow: "_2PTM3ppOv1W0jPmlXV9zeK",
          RelativeLayer: "_237IHLV36I9F3GAeSC3Ast",
          WithPointerEvents: "sMhiTRaHJInFdVQZ6J0-m",
          RecordingDecorators: "_3S9aExsAjU_DTaDbMIj5i9",
          ClipDecorators: "_3sy9QqiqMextSXnKc1AMAN",
          GameModes: "_2zfITr74kyUJlBfMyJLgnn",
          DateDecorator: "_2ad7ZMfcbWLopAqjoc1dQy",
          BackgroundTicks: "_2rdq8jGEzjIT8wAFNFhiYQ",
          Highlights: "_2MKxDzVJV5-FqyH991s2MT",
          RangeHighlights: "_2pwNSvaiG6OMTbuF-NyeqL",
          Timestamps: "_1BmX-E7ljnjRC-DwV0vehq",
          RangeSelector: "_3Kw_btjCsTccf081ReOvQp",
          SeekScrubber: "lP4qnNu-VBcvUzlXNQtyt",
          PlayHead: "_3pAXAVoqYOE6IKmH5vVcvy",
          Thumbnails: "_26VL6vWz_H-HdOIX-WB1NV",
          PositionLeft: "_1UQilx5P8cBrDKId9y9Zml",
          PositionRight: "vmWKsPz2yK9DdAMmGopBd",
          Phases: "_3hNl6_lWZBob973Eyo8tN7",
          MarkerAndDropline: "KxkV7ibv4HxiLzsJDo09y",
          Faded: "_2YIhgvCldNrTquf5YdDweU",
          NoPointer: "_2ebcCpkh2QhQIrtDjawNTL",
          TimelineMarkerCtn: "_1Dg_c4LTkbyiG_03VDAsQE",
          TimelineMarker: "_2CNnKSqRD_9z5U0Knq2yjM",
          DroplineCtn: "_2KKJRZF-_QAqfpR0e-20x6",
          TimelineMarkerDropLine: "_3JsMmXCkE-NhKNzxarPwuc",
        };
      },
      62745: (se) => {
        se.exports = {
          Positioner: "r5C4vqop5qm8LQK3X0ko3",
          MouseWithin: "ew9abErxuaHlGCMzkyeWJ",
          Highlight: "xk10sVHcF-iepUcNGM7xL",
          PhaseHighlight: "_2sP2GHDIcIT3HmoJT5xGlA",
          Body: "_1hlTgJwbrd9u_brCsEsT0N",
          Edge: "_3_tErLe8CNqRhYf0vAfb-t",
        };
      },
      5540: (se) => {
        se.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_2X7jhW-qi_3UccesLWrrSi",
          ScrollAndControlsCtn: "_3NY57YPlBtVmbManJByw3B",
          GamepadMode: "_3LWcSQg02x6_mKFAC2HnOA",
          Controls: "_3iXWpF78DL2KpP8zwC0a0D",
          TimelineScrollContainer: "_3A2oPv5e_smY5BRZYb44oC",
          ContentContainer: "_37F8Twe4-MEGnPuMdrRjdV",
          AbsoluteLayer: "_2TPYTXJ5LTahFqYyrgyybY",
          HideOverflow: "_1GDbd0Ag6dx77g7HNg9fjA",
          RelativeLayer: "_1Gp1jY_vrVhkryDDlAy5XA",
          WithPointerEvents: "_2Wca3Yup3sepGJyb3yB9Wx",
          RecordingDecorators: "_2yAWbzlcRBmXGKBJxO5Q6K",
          ClipDecorators: "_1vxxhyF1HrGzKc8R-wGDGw",
          GameModes: "_2W6eCuNryz1pMcGhYEyFag",
          DateDecorator: "_2XW6UMjMH0uXl0q6gIOKs7",
          BackgroundTicks: "_3Tt6WBdl000PCM7C2kwD2c",
          Highlights: "_1epMF6kwn7KeUBakQKPhCm",
          RangeHighlights: "aRAHUpKDR27OMcL2xHCSC",
          Timestamps: "_2of-NiJ1-JIp_fPSufxZJ3",
          RangeSelector: "bBVOLxbX1EUhwt_Oez4GK",
          SeekScrubber: "_1c_f2oDp_5tIKiGQcvboIB",
          PlayHead: "NAXFU_K2NP9xmH2cnITpG",
          Thumbnails: "FNvG_yK3LCIcUTGSfMhVP",
          PositionLeft: "GECyynaguvZTc6_17XpFd",
          PositionRight: "_3Rwz0Dale6Fxyu3k2khbuf",
          Phases: "_xSGH0PVjr0l8tuXz9-3f",
          PlayheadInteractionCtn: "_3_VTfkSR95EXQBQCvfM-ua",
          ActiveCtn: "_2bsFx5e6IWGwk1Smh_yRl",
          PlayHeadContainer: "_2RtcuI1Wk2JRTn39xig3OS",
          TooltipSource: "DgGCjpjgZ28PDlwxsTwCr",
          Active: "_3N6L28ckYs_8Z7u62KJCJV",
          PlayHeadContent: "_1zm_aVI1mDMkbM_o1um30R",
          PlayHeadCurrentTimeContainer: "_38jg4bQlW8Tyygoswt3epd",
          NoPointer: "_2qwplD-OoJ3_iLfl14eORi",
        };
      },
      14296: (se) => {
        se.exports = { RangeHighlight: "_2a4wDhcnXixHXxFFvpLGbe" };
      },
      2508: (se) => {
        se.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_15xYd1duz4CX9ojFz0CE0r",
          ScrollAndControlsCtn: "_39WVqvqzprHCxsDbq6RIVi",
          GamepadMode: "_1iVq_Vso_g-hPu4I6clDcI",
          Controls: "q39fhjQv3o2GqRMkZeGeA",
          TimelineScrollContainer: "_2Ns82DABvcHzpa7h2Z1yN0",
          ContentContainer: "_2flM04qSQgffE6G2_pghpT",
          AbsoluteLayer: "hPYovdeG0fnX79y5Lq6i8",
          HideOverflow: "zl42_yRu36YJmTpwkrll3",
          RelativeLayer: "wxj4IaR3D-7lPHenwnyaS",
          WithPointerEvents: "_2AobDyHPf2lTm9ZzZIsGop",
          RecordingDecorators: "_1hCGwoXgxZG5aIyUcumoan",
          ClipDecorators: "_1d_mX4rNoLcSBlpCOOZ9d-",
          GameModes: "_26Bbv689gSTq0MjmYL-Y6Y",
          DateDecorator: "_2BqCIYg1x7daCu3oF0vicq",
          BackgroundTicks: "_2YoyAw0aHd57nTMyCX8Ek8",
          Highlights: "_2hsueyKwIwA6dgxRFhAuEw",
          RangeHighlights: "_3eoxS78PdZxxZaBBmdJDZB",
          Timestamps: "_3O3iRzw4rwhbFvTKLV7s2J",
          RangeSelector: "_2gSg55gNLQhpokogPcJ-As",
          SeekScrubber: "sTaCR323nQeC8QrAQW3Cr",
          PlayHead: "_3Ra6BfYOEPCrvdKvrXpd2i",
          Thumbnails: "_7KwbBvSEcjyRsmZ0g6j6z",
          PositionLeft: "_27IW3T5nky75Oz6a17zWSg",
          PositionRight: "xf_NxJ83twPRPic2nUu3s",
          Phases: "IIuLWvFELtrtCRCvRlpo",
          RangeControls: "_3TsJzrPgtC5rqLcR6ihpFi",
          RangeSelectorCtn: "_2ULjGYMNYTiUllQtzFXS11",
          Active: "_2bFlccGjBmvO9sTXH-UhId",
          InactiveSelectedRangeControl: "_2uX26Fo_kmE4ZR6JmKQpp4",
          SelectedRangeMask: "_2C2hWRks6sMz8e9rdXj_BH",
          RangeIcon: "DTarGRkLfmPhdBVfdlNIf",
          Hide: "_2OktuE6gQcRmHdDbzj7AzW",
          TrackRangeControls: "_1xinhHBSWQ2oYszkzt2zrt",
          RangeControl: "_106ZAEQ05s5XGwxAQ4k_W6",
          RangeMask: "_1SW3yTh55ykBnsHiBzIQFC",
          FullMask: "HBfBmaVuNVcfkTcAqMJdE",
        };
      },
      78760: (se) => {
        se.exports = {
          LoadingTimeline: "_3tH-UmmBxFZv85a4VmjR83",
          ScrollAndControlsCtn: "_3EGBZkS2chHJ5KaKxGam9e",
          GamepadMode: "_3Wahmr7e1VA6i9w9Iq0-Vg",
          Controls: "_3nrFGW_JIvdhMPBQvVaqby",
          TimelineScrollContainer: "_3vqWS2_hdUvKZO0Vipm-Pa",
          ContentContainer: "_2_mqytSivE2wDjb0DQRqEp",
          AbsoluteLayer: "CiFLrniSN_egwVrtxdvwm",
          HideOverflow: "_2BoIL1h7HxeuUr9oEBJu5e",
          RelativeLayer: "_3obgM4lCFV2Ggqbiz0HJZX",
          WithPointerEvents: "_1e6-Zdv13LsrP3qEPoBDr9",
          RecordingDecorators: "_3l9q4-8eUf8mm3ml4NZ-9m",
          ClipDecorators: "_1HU0h3xOeCJtdhA_ieKKsf",
          GameModes: "_2FL-NrMawaFVKSgQr2NRu7",
          DateDecorator: "_2bCxb7i3bzq1DCZWl04h-n",
          BackgroundTicks: "_2UfqYYX9g4-SFlozy19diE",
          Highlights: "_2iZX0eAmOssSWzNwVW2Sk2",
          RangeHighlights: "_1aNkPwMsxHkCpTJ3zueNmV",
          Timestamps: "_2TfF2B8IJjQO4cxcYnzNv-",
          RangeSelector: "wMeTvFQex5TV0NsHdu1En",
          SeekScrubber: "_1x23j31qyK2ov8527ywrtY",
          PlayHead: "_3hU0qsPL5AdwVbmHfPQjz8",
          Thumbnails: "_3U1E2lH8PHXEKmmCidFYET",
          PositionLeft: "_3a7NFvp83NwS--Uea7c18J",
          PositionRight: "_2aWYEMKtLLTVAg5lTA30Du",
          Phases: "_2HWX2m_BjCepXubvHC-OBI",
          RecordingDecorator: "_24zNSxRiQlHxbGT_RvZsoY",
          Clip: "_3Q-H1_vR-NtTfQf_Ohljdx",
          ClipMode: "_7MCqjcHde47TGpwTMEK5",
          Manual: "_1kfoF8deRCDIcTe5l3oplt",
          RecordingDecoratorClip: "_3d4VU3BdaG9Z5sL2fNq_xy",
          LiveRecordingBuffer: "_3PHrI-zb5iHRj5OfLEwEc0",
          IsLive: "_1kxbPOC7CK5DmZi9fZLfUl",
        };
      },
      36616: (se) => {
        se.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_3Tmq42XNJAOKkmYYNLwhYt",
          ScrollAndControlsCtn: "_2zSlRD5EZdNkxEXqxX19xj",
          GamepadMode: "_1iEsh140l3SOV-CHmx1gPK",
          Controls: "_3Sigu8Ua4QhAoaSILhJjnk",
          TimelineScrollContainer: "_36TGeLVHkkcngviDfI1e3w",
          ContentContainer: "_2mJpXt1qXS1THVBTX6wQIh",
          AbsoluteLayer: "_1hyNg-11fi93ggy44EPp0D",
          HideOverflow: "_1IkW2bCIFdXrtYpOKZJT78",
          RelativeLayer: "_1RLJoHOySeNow6t6Gb4q2I",
          WithPointerEvents: "_1o2r-Bw4voSyttJ2TnlIMF",
          RecordingDecorators: "_2qcUYqRha1_HKm_YVHzDFf",
          ClipDecorators: "_3qqUOckgF-Vne9B37h2VNV",
          GameModes: "_2K3UBqeIoBHg4LbvxflBnI",
          DateDecorator: "_2BEmrgSvLIuVLtOq4uyk-b",
          BackgroundTicks: "WbVOga7uck_kj9-xd1ZBj",
          Highlights: "_2nvnMUT2DtnJcH1Rlz3i04",
          RangeHighlights: "_2PKtguqz5iQChuLNLyEq-9",
          Timestamps: "R3B96ZoLAEXfwE5F5VAlS",
          RangeSelector: "_3DWyeaU2HR8tgw6IYQIrF2",
          SeekScrubber: "_2wVY5UH9H5eVSyRfPhgV10",
          PlayHead: "_3knz_EuOFUYwJ-8OisxbLi",
          Thumbnails: "JjnuXWzLmCm63Y-6KipH6",
          PositionLeft: "feeCzNA4u_b9e5tzS9oa6",
          PositionRight: "_1uGyz62lktHAb9_wh3QEUn",
          Phases: "_2wzBXR-nPbsfwcRPnqJ4yk",
          PlayheadInteractionCtn: "cxkAkBK32ah0etQ7VXfDI",
          ActiveCtn: "_3HMQwpcr66jg7N3RW9U4r1",
          PlayHeadContainer: "_3Fg3Bef5dt1s1SK8yzivuJ",
          TooltipSource: "_1zTEVuta8tTd1Iw-c1Ea-N",
          Active: "G8XiKETNpSUHoyKM8T3QA",
          PlayHeadContent: "t2rs722c_hdaOG6MWrVhD",
          PlayHeadCurrentTimeContainer: "_1BM_Z8Iu_1o-aPNlOB8DYa",
          NoPointer: "XCAfYcKute_vaG8jbwVAr",
          RangeControls: "_2ylJ735myBUxj8mYp92MQz",
          RangeSelectorCtn: "_35GmRrlfGhrO_6QVFR0Wi7",
          InactiveSelectedRangeControl: "_bKQMA7pDeFEDDAbdgdNg",
          SelectedRangeMask: "_3PO0lBzzlKrUN85s6-CJmt",
          RangeIcon: "_3H1CUoiDPdbAQs16z1Zc5X",
          Hide: "_1YPpCzSDkjW9CznvJ-t8ze",
          TrackRangeControls: "_23YDdZ4YDQPRZOCaKwscyh",
          RangeControl: "_3Z9hkuB9-Hmn5_8M48FE01",
          RangeMask: "Cr2MdFPZcaH4sJctAG6Gl",
          FullMask: "_3qoMxbpjei5WjkAOyagCpU",
          GhostPlayheadCtn: "_2QEZwA3q0IO62G_BU-Drbn",
          TooltipHoverSource: "_3GHTkEg295xMBJ6usRbh45",
          GhostPlayhead: "_1NsKSV4XAmywc3NCkOdJEq",
          Show: "_2rHDnc8CHv56EKtuTCKszw",
        };
      },
      48419: (se) => {
        se.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_3Q5mItz1omGnn-T1D3hSx6",
          ScrollAndControlsCtn: "_1fH0OLSeGlehC7ZroCzqe9",
          GamepadMode: "_2t0z1NBG3JkzrwgVIk_P3W",
          Controls: "_2LpY_Ns-dcnT5PHQQLiXPp",
          TimelineScrollContainer: "_1q2QlUl7dhMQoUemqokVst",
          ContentContainer: "cUBJWpslwHW62w7LbnL7c",
          AbsoluteLayer: "_1pSOlypnO47E0bAGUg8vzb",
          HideOverflow: "_2hT8Akt7q9EZvx2C0IFuRR",
          RelativeLayer: "_3zkquJ_VVnjp1lWbN1tTxS",
          WithPointerEvents: "_2KJPu1BcFSB6UeyCGC1Q9l",
          RecordingDecorators: "_2lJHaMtseWGNtKzez_c-tR",
          ClipDecorators: "Xqf7VLN_JqMJeMe-gjyHj",
          GameModes: "Z9nyGreF6wFTFgKjwuTur",
          DateDecorator: "_1H35HfLIngfg1Spx8-se-m",
          BackgroundTicks: "_2Qp-oYu2NVGRgnr-MnIi2c",
          Highlights: "_1pFb1qr2LgVW_Epi61zjiM",
          RangeHighlights: "F3-cbznHCNkLM3OoAmQEK",
          Timestamps: "_3fHbNOeEXYFGE31WD5XnOr",
          RangeSelector: "_3ovQqX7ALXvRC1ekegy7Lf",
          SeekScrubber: "_3YSduxpL8KnXHYHJkjuwvv",
          PlayHead: "_3uZ7PVoL2PO3WBpvCAnoK9",
          Thumbnails: "_2ZT_p0F8NlyiN2w9uK0V-8",
          PositionLeft: "_2dupDWRctKjVqN0z4s0oyR",
          PositionRight: "_1PDRoz5nG__plPLMJYlHLW",
          Phases: "_26bhPWtFCbtjxSwlbSIltM",
          TooltipOffset: "_2dYuDsUYCHiGRqSksoc2iU",
          ThumbnailContainerOffset: "iJ-nnbMoplnO7sW4GoKZE",
          ThumbnailContents: "_1p6K1C-xCaggsPiZeYS6xb",
          Hide: "_1IGjtF0VQplGgo8JQKuoMP",
          ImageAndInfoBoxContainer: "ke2xSKYvfY9kTFlZgvXyx",
          ImageContainer: "_16W4iNZCkRy5g-01USxzcp",
          ThumbnailImage: "_15YmEFGejPCWqJsgZIwIHh",
          NoRecordedContent: "_2oSbwmF9lRWp2wTpQ2BTcr",
          InfoBoxContainer: "_39hE1ouldA7027OOjS1Mgy",
          Header: "_1RvdZuUvhMBHThLFwYwITy",
          Icon: "_3ALDTTrBPXnpHpt1yU52k3",
          DescriptionBlock: "_2WNbTb6IIvTgYqRePMVYqW",
          Title: "_2xgQkBo5Tkz0utecycIdA4",
          Description: "_3wvMa5Sd15895W_3Q3Fyfx",
          ThumbnailHitBoxPadding: "_25m6SU3qwK58gHr_sKPaUm",
          Overlay: "_1F33WqZYbfSW5lvdSEZL4I",
          TooltipContents: "_1Q9Po562tX-Vtgo2NWXIw",
          TooltipChildren: "_2T0U4DTFWI5h9xaeZagxLF",
          TooltipImage: "_1xD6jfVHbDjGwO77Svhkcv",
          TooltipImageCtn: "_1v_O5vtQFICye0ocFetnId",
          ThumbnailTooltip: "_2Z4RGgTd1bRpgdwEhO8jCU",
          Highlight: "_3a20-bJDPDlu4mazQECyx5",
          TimeDisplayContainer: "_3d8jwG8NBfQYTwkZ0OxQJp",
          Playhead: "_2n75OrROEywBwiWw2aHhTK",
          RangeLeft: "_1gO9xZ0-LFtgn8qA4tyXYr",
          RangeRight: "JDbwFLFfYMT4xQA-bQ9Ko",
          Timestamp: "_2lPBQbxG1oIaw3OCRbqSwX",
          TooltipInteractionRegion: "nbJB1LiguVOaBnJGRVnl7",
          StateDescription: "u04UCICvObTJ4FUr9RQen",
          TooltipButtons: "_2__OPNuJ5jPGfN7LuKW-Qw",
          Button: "_15dYncysqGpt47Cy4LxDu6",
          AddMarker: "_1U3RGrxKiDB_p4u4cKiixk",
          GoToClip: "_38jzRyjtRvySB27qxc3OlN",
          CreateClipButton: "_3KYRSKclWw-y1WSWZZ0NdW",
          EditMarker: "_2ho8quLzRrIUiJRPbr8lzp",
          DeleteMarker: "_113MCALzgYpL4lDc_eE542",
          GoToClipFromMarker: "_1HHxKvMUEWqDdSy1BGBnyK",
          ViewScreenshot: "Id7gML3NYais_DAVYP7LW",
          TooltipHitBox: "_2QbChk9tpXisnWlJFH0Igj",
          TooltipContainer: "_1sw-kUqdIDK2G5BlOu_Dm9",
          ImageHighlightPosition: "_2ywONE_xgamAkfBmUE67IL",
          ImageHighlightBlock: "_1BeXpXQyetKgeO2_6NuHiJ",
          TooltipRangeContainer: "Ytt19E3fOLhHsFDpTCviL",
          Duration: "_1kvsGVxJZ9tkKXwysVa5PP",
          RangeIcon: "qV2yorV1nAB0bIQrbROqm",
        };
      },
      54637: (se) => {
        se.exports = {
          TimelineContextMenuItem: "_1_VGcqhwscnT-kPnPb2c22",
          MenuItem: "_1wPm9-zsQlqLzb92eR77lC",
          AddUserMarker: "_3VSFddY_9-Sh1I3ByUwmD4",
          TakeScreenshot: "_13th0aVaGQhNp6eltjFYyh",
          StartEndClip: "_1eb1crSvl4J1Ie12OvhHUz",
          ViewClip: "_3YpMycJiNuGZOe9A5ddrxL",
          ClipPhase: "_3BLSZg3UyXhaQ4rkXaTvhs",
        };
      },
      45737: (se) => {
        se.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
          Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
          ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
          SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
          warning: "_2HiNh3o5cgMEbzFKYBUjAy",
          IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
          RightCol: "_3kaQhRnhNh_awrnNX90rui",
          NoSticky: "JQNb8bHftBTAYpCXTx52v",
          SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
          Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
          TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
          DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
          Indent: "_7PV326-4cpZdmTCEdgC2l",
          DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
          FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
          MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
          UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
          UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
          MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
          BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
          UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
          LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
          LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
          UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
          LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
          DeleteAll: "rYuknI3K1VFknv90GNUTc",
          EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
          StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
          HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
          StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
          Stat: "_3OYQbVCq1yBuEx1XcDzG06",
          BigStat: "lYYwDDss378Sm0FKPBxPh",
          IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
      95695: (se) => {
        se.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
      2596: (se) => {
        se.exports = {
          "duration-app-launch": "800ms",
          TourPositioner: "_3SETpnYbAtvmO7w4gpOCtK",
          TourBox: "_1lcizT_Nbxsk484XzTtcFf",
          CloseButton: "_1A5Qloms_qv3D5xh052LKf",
          X: "kcjJIs0EE3MG_h_t5nCza",
          Title: "_51Xf1tIa1NCIih20Qi1Nm",
          Content: "_1iiz2Ocj1OAe9wZjdPrZSv",
          Action: "_39eWK3BcJKYP9H1X1cTdyV",
          TipCount: "_1T5ZuXrxnGb4BDtEbYTuGz",
          TourStopArrow: "_2JvQPEForHWVgljtxxAwRP",
          BackgroundAnimation: "_15yvWK6GCakW5yZ0YB66fv",
          "ItemFocusAnim-darkerGrey-nocolor": "Eu2HOvMbunn7MzCLIJ5ES",
          "ItemFocusAnim-darkerGrey": "DvP1wiF6eV9afdQaEkods",
          "ItemFocusAnim-darkGreySettings": "_2MNkLvIOgwx0GSMCjDlkL8",
          "ItemFocusAnim-darkGrey": "_2tQsBdyAzzF2_nY65OSwNm",
          "ItemFocusAnim-grey": "Qg-4WEghuaXqBRIE-lEVs",
          "ItemFocusAnim-translucent-white-10": "_18ENJxMfn40_y_8CMeuuMm",
          "ItemFocusAnim-translucent-white-20": "_1wbIEe3KnohwpAw2O4M9YP",
          "ItemFocusAnimBorder-darkGrey": "_3hC5OOIGfv0lY8ykI4qpNa",
          "ItemFocusAnim-green": "_3ZDnxVKI3Xfr_a6bvaivKR",
          focusAnimation: "_2KA789f9Y4_LCtoyqU3FM3",
          hoverAnimation: "VH09gZfzWmSxuuocDY_-n",
        };
      },
    },
  ]);
})();
