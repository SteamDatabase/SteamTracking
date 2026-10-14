/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [68396],
    {
      34169: (qt, ve, h) => {
        "use strict";
        h.r(ve),
          h.d(ve, {
            BroadcastEmbeddablePopoutHeader: () => Si,
            default: () => jn,
          });
        var n = h(7850),
          Ft = h(41735),
          D = h.n(Ft),
          P = h(75844),
          Kt = h(65946),
          mt = h(90626),
          L = h(14947),
          _ = h(16346),
          pt = h(90711),
          rt = h(90828),
          J = h(72604),
          v = h(35038),
          xt = h(84110),
          De = h(77008),
          Vt = h(60298),
          Wt = h(45806),
          Bt = h(76559),
          g = h(80613),
          c = h.n(g),
          r = h(75245);
        function ur(d) {
          return "unknown EBroadcastImageType ( " + d + " )";
        }
        function lr(d) {
          return "unknown EGetGamesAlgorithm ( " + d + " )";
        }
        function Qe(d) {
          return "unknown EGetChannelsAlgorithm ( " + d + " )";
        }
        function sr(d) {
          return "unknown ESteamTVContentTemplate ( " + d + " )";
        }
        class Ct extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ct.prototype.unique_name || r.Sg(Ct.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = r.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(t = !1) {
            return Ct.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Ct.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Ct.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ct();
            return Ct.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Ct.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Ct.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class _t extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _t.prototype.broadcast_channel_id || r.Sg(_t.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = r.w0(_t.M())), _t.sm_mbf;
          }
          toObject(t = !1) {
            return _t.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(_t.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(_t.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new _t();
            return _t.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(_t.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(_t.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class $t extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.unique_name || r.Sg($t.M()),
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
                    unique_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
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
              s = new $t();
            return $t.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class ct extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ct.prototype.broadcast_channel_id || r.Sg(ct.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    steamid: {
                      n: 3,
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
          static toObject(t, e) {
            return r.BT(ct.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ct.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ct();
            return ct.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ct.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ct.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class Zt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Zt.prototype.broadcast_channel_id || r.Sg(Zt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    language: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rules: { n: 8, br: r.qM.readString, bw: r.gp.writeString },
                    panels: { n: 9, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = r.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(t = !1) {
            return Zt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Zt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Zt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Zt();
            return Zt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Zt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Zt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        }
        class Ee extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ee.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ee();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ee();
            return Ee.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class te extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              te.prototype.broadcast_channel_id || r.Sg(te.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = r.w0(te.M())), te.sm_mbf;
          }
          toObject(t = !1) {
            return te.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(te.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(te.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new te();
            return te.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(te.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(te.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class Nt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Nt.prototype.unique_name || r.Sg(Nt.M()),
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
                    unique_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    language: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rules: { n: 8, br: r.qM.readString, bw: r.gp.writeString },
                    panels: { n: 9, br: r.qM.readString, bw: r.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
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
              s = new Nt();
            return Nt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class ee extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ee.prototype.broadcast_channel_id || r.Sg(ee.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    undo: { n: 9, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = r.w0(ee.M())), ee.sm_mbf;
          }
          toObject(t = !1) {
            return ee.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ee.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ee.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ee();
            return ee.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ee.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ee.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        }
        class ht extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ht.prototype.replace_image_hash || r.Sg(ht.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    replace_image_hash: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
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
              s = new ht();
            return ht.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        }
        class dt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dt.prototype.broadcast_channel_id || r.Sg(dt.M()),
              g.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
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
              s = new dt();
            return dt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        }
        class q extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              q.prototype.images || r.Sg(q.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: { images: { n: 1, c: B, r: !0, q: !0 } },
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
          static toObject(t, e) {
            return r.BT(q.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(q.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new q();
            return q.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(q.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(q.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        }
        class B extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              B.prototype.image_type || r.Sg(B.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    image_type: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
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
              s = new B();
            return B.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        }
        class $ extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.broadcast_channel_id || r.Sg($.M()),
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
                    broadcast_channel_id: {
                      n: 1,
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
          static toObject(t, e) {
            return r.BT($.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new $();
            return $.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        }
        class ne extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ne.prototype.links || r.Sg(ne.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: { links: { n: 1, c: V, r: !0, q: !0 } },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = r.w0(ne.M())), ne.sm_mbf;
          }
          toObject(t = !1) {
            return ne.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ne.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ne.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ne();
            return ne.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ne.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ne.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        }
        class V extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.link_index || r.Sg(V.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    link_index: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    url: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    link_description: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    left: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    top: { n: 5, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    width: { n: 6, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    height: { n: 7, br: r.qM.readUint32, bw: r.gp.writeUint32 },
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
          static toObject(t, e) {
            return r.BT(V.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new V();
            return V.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(V.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(V.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        }
        class x extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              x.prototype.broadcast_channel_id || r.Sg(x.M()),
              g.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    links: { n: 2, c: nt, r: !0, q: !0 },
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
              s = new x();
            return x.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        }
        class nt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.link_index || r.Sg(nt.M()),
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
                    link_index: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    url: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    link_description: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    left: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    top: { n: 5, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    width: { n: 6, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    height: { n: 7, br: r.qM.readUint32, bw: r.gp.writeUint32 },
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
              s = new nt();
            return nt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        }
        class ot extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ot.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new ot();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ot();
            return ot.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        class it extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              it.prototype.broadcast_channel_id || r.Sg(it.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
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
          static toObject(t, e) {
            return r.BT(it.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(it.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new it();
            return it.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        }
        class tt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.is_live || r.Sg(tt.M()),
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
                    is_live: { n: 1, br: r.qM.readBool, bw: r.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
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
              s = new tt();
            return tt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        }
        class Q extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.broadcast_channel_id || r.Sg(Q.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    name: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    appid: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    is_live: { n: 16, br: r.qM.readBool, bw: r.gp.writeBool },
                    language: {
                      n: 17,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
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
              s = new Q();
            return Q.deserializeBinaryFromReader(s, e);
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
            return "GetBroadcastChannelEntry";
          }
        }
        class Ot extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ot.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ot();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ot();
            return Ot.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        class at extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              at.prototype.results || r.Sg(at.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: { results: { n: 1, c: Q, r: !0, q: !0 } },
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
          static toObject(t, e) {
            return r.BT(at.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(at.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new at();
            return at.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(at.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(at.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        }
        class Ue extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ue.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ue();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ue();
            return Ue.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        class Qt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qt.prototype.results || r.Sg(Qt.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: { results: { n: 1, c: Q, r: !0, q: !0 } },
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
              s = new Qt();
            return Qt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class Rt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Rt.prototype.broadcast_channel_id || r.Sg(Rt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = r.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(t = !1) {
            return Rt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Rt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Rt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Rt();
            return Rt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Rt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Rt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        }
        class zt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              zt.prototype.is_followed || r.Sg(zt.M()),
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
                    is_followed: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
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
              s = new zt();
            return zt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        }
        class Tt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Tt.prototype.broadcast_channel_id || r.Sg(Tt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = r.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(t = !1) {
            return Tt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Tt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Tt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Tt();
            return Tt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Tt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Tt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        }
        class Pt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pt.prototype.is_subscribed || r.Sg(Pt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = r.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(t = !1) {
            return Pt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Pt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Pt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Pt();
            return Pt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Pt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Pt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        }
        class re extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              re.prototype.broadcast_channel_id || r.Sg(re.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = r.w0(re.M())), re.sm_mbf;
          }
          toObject(t = !1) {
            return re.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(re.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(re.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new re();
            return re.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(re.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(re.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        }
        class Pe extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Pe.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Pe();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Pe();
            return Pe.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class E extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              E.prototype.broadcast_channel_id || r.Sg(E.M()),
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
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
              s = new E();
            return E.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class Lt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Lt.prototype.is_followed || r.Sg(Lt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
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
              s = new Lt();
            return Lt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class Et extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.appid || r.Sg(Et.M()),
              g.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    image: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    viewers: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    channels: { n: 5, c: Q, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
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
              s = new Et();
            return Et.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_Game";
          }
        }
        class ie extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ie.prototype.appid || r.Sg(ie.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    algorithm: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    count: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = r.w0(ie.M())), ie.sm_mbf;
          }
          toObject(t = !1) {
            return ie.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ie.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ie.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ie();
            return ie.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ie.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ie.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        }
        class Yt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.results || r.Sg(Yt.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: { results: { n: 1, c: Et, r: !0, q: !0 } },
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
              s = new Yt();
            return Yt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetGames_Response";
          }
        }
        class ft extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ft.prototype.algorithm || r.Sg(ft.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    algorithm: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    count: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = r.w0(ft.M())), ft.sm_mbf;
          }
          toObject(t = !1) {
            return ft.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ft.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ft.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ft();
            return ft.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ft.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ft.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        }
        class St extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.results || r.Sg(St.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: { results: { n: 1, c: Q, r: !0, q: !0 } },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = r.w0(St.M())), St.sm_mbf;
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(St.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(St.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new St();
            return St.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(St.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(St.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        }
        class Ht extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ht.prototype.broadcast_channel_id || r.Sg(Ht.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
              s = new Ht();
            return Ht.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class vt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              vt.prototype.broadcasters || r.Sg(vt.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: { broadcasters: { n: 1, c: bt, r: !0, q: !0 } },
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
              s = new vt();
            return vt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        }
        class bt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.steamid || r.Sg(bt.M()),
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
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
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
              s = new bt();
            return bt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class Ut extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ut.prototype.issuer_steamid || r.Sg(Ut.M()),
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
                    issuer_steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    permanent: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    name: { n: 5, br: r.qM.readString, bw: r.gp.writeString },
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
              s = new Ut();
            return Ut.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_ChatBan";
          }
        }
        class Gt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Gt.prototype.broadcast_channel_id || r.Sg(Gt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    permanent: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    undo: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = r.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(t = !1) {
            return Gt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Gt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Gt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Gt();
            return Gt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Gt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Gt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        }
        class He extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return He.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new He();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new He();
            return He.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return He.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class U extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.broadcast_channel_id || r.Sg(U.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
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
              s = new U();
            return U.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetChatBans_Request";
          }
        }
        class Jt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Jt.prototype.results || r.Sg(Jt.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: { results: { n: 1, c: Ut, r: !0, q: !0 } },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = r.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(t = !1) {
            return Jt.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Jt.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Jt.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Jt();
            return Jt.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Jt.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Jt.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        }
        class T extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.broadcast_channel_id || r.Sg(T.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
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
          static toObject(t, e) {
            return r.BT(T.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new T();
            return T.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_AddChatModerator_Request";
          }
        }
        class ut extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ut.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new ut();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ut();
            return ut.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class A extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              A.prototype.broadcast_channel_id || r.Sg(A.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, e) {
            return r.BT(A.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(A.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new A();
            return A.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(A.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return A.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(A.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        }
        class i extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              i.prototype.steamid || r.Sg(i.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              i.sm_m ||
                (i.sm_m = {
                  proto: i,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = r.w0(i.M())), i.sm_mbf;
          }
          toObject(t = !1) {
            return i.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(i.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(i.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new i();
            return i.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(i.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return i.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(i.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        }
        class l extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              l.prototype.results || r.Sg(l.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: { results: { n: 1, c: i, r: !0, q: !0 } },
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
          static toObject(t, e) {
            return r.BT(l.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(l.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new l();
            return l.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(l.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return l.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(l.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        }
        class p extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              p.prototype.broadcast_channel_id || r.Sg(p.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    word: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    undo: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
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
          static toObject(t, e) {
            return r.BT(p.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(p.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new p();
            return p.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(p.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return p.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(p.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        }
        class I extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new I();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new I();
            return I.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        class z extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.broadcast_channel_id || r.Sg(z.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, e) {
            return r.BT(z.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new z();
            return z.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        }
        class F extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              F.prototype.results || r.Sg(F.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    results: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
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
              s = new F();
            return F.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetWordBans_Response";
          }
        }
        class N extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              N.prototype.broadcast_channel_id || r.Sg(N.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(t, e) {
            return r.BT(N.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(N.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new N();
            return N.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(N.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(N.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        }
        class st extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.chat_id || r.Sg(st.M()),
              g.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint64String,
                      pbr: r.qM.readPackedUint64String,
                      bw: r.gp.writeRepeatedUint64String,
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
          static toObject(t, e) {
            return r.BT(st.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new st();
            return st.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(st.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(st.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        }
        class C extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.term || r.Sg(C.M()),
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
                    term: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
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
              s = new C();
            return C.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_Search_Request";
          }
        }
        class yt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yt.prototype.results || r.Sg(yt.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: { results: { n: 1, c: Q, r: !0, q: !0 } },
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
              s = new yt();
            return yt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_Search_Response";
          }
        }
        class Ie extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ie.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Ie();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Ie();
            return Ie.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        class wt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.stream_live_email || r.Sg(wt.M()),
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
                    stream_live_email: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
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
              s = new wt();
            return wt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        }
        class o extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              o.prototype.stream_live_email || r.Sg(o.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
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
          static toObject(t, e) {
            return r.BT(o.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(o.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new o();
            return o.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(o.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return o.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(o.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        }
        class m extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return m.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new m();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new m();
            return m.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class b extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return b.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new b();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new b();
            return b.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return b.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        class w extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.results || r.Sg(w.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { results: { n: 1, c: Q, r: !0, q: !0 } },
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
              s = new w();
            return w.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        }
        class M extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.broadcasts || r.Sg(M.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: { broadcasts: { n: 1, c: Q, r: !0, q: !0 } },
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
              s = new M();
            return M.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        }
        class j extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              j.prototype.broadcasts || r.Sg(j.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    broadcasts: { n: 1, c: Q, r: !0, q: !0 },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    title: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
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
              s = new j();
            return j.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        }
        class O extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.appid || r.Sg(O.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcast: { n: 3, c: Q },
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
              s = new O();
            return O.deserializeBinaryFromReader(s, e);
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
            return "GameListEntry";
          }
        }
        class R extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              R.prototype.entries || r.Sg(R.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    entries: { n: 1, c: O, r: !0, q: !0 },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
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
          static toObject(t, e) {
            return r.BT(R.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(R.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new R();
            return R.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(R.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return R.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(R.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class et extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.broadcasts || r.Sg(et.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    broadcasts: { n: 1, c: Q, r: !0, q: !0 },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
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
          static toObject(t, e) {
            return r.BT(et.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(et.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new et();
            return et.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(et.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(et.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        }
        class lt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              lt.prototype.broadcasts || r.Sg(lt.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    broadcasts: { n: 1, c: Q, r: !0, q: !0 },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
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
              s = new lt();
            return lt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        }
        class gt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.broadcast || r.Sg(gt.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    broadcast: { n: 1, c: Q },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
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
              s = new gt();
            return gt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class kt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              kt.prototype.broadcast || r.Sg(kt.M()),
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
                    broadcast: { n: 1, c: Q },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
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
              s = new kt();
            return kt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class Xt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.title || r.Sg(Xt.M()),
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
                    title: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
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
              s = new Xt();
            return Xt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class Mt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Mt.prototype.template_type || r.Sg(Mt.M()),
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
                    template_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    takeover: { n: 2, c: M },
                    single_game: { n: 3, c: j },
                    game_list: { n: 4, c: R },
                    quick_explore: { n: 5, c: et },
                    conveyor_belt: { n: 6, c: lt },
                    watch_party: { n: 7, c: gt },
                    developer: { n: 8, c: kt },
                    event: { n: 9, c: Xt },
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
              s = new Mt();
            return Mt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_HomePageContentRow";
          }
        }
        class Se extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Se.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Se();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Se();
            return Se.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class se extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              se.prototype.rows || r.Sg(se.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: { rows: { n: 1, c: Mt, r: !0, q: !0 } },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = r.w0(se.M())), se.sm_mbf;
          }
          toObject(t = !1) {
            return se.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(se.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(se.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new se();
            return se.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(se.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(se.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        }
        class ae extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ae.prototype.broadcast_channel_id || r.Sg(ae.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = r.w0(ae.M())), ae.sm_mbf;
          }
          toObject(t = !1) {
            return ae.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ae.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ae.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ae();
            return ae.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ae.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ae.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        }
        class oe extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              oe.prototype.broadcast_clip_id || r.Sg(oe.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = r.w0(oe.M())), oe.sm_mbf;
          }
          toObject(t = !1) {
            return oe.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(oe.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(oe.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new oe();
            return oe.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(oe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(oe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        }
        class ue extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ue.prototype.clips || r.Sg(ue.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    clips: { n: 1, c: oe, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = r.w0(ue.M())), ue.sm_mbf;
          }
          toObject(t = !1) {
            return ue.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ue.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ue.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ue();
            return ue.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ue.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ue.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        }
        class me extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              me.prototype.cheer_type || r.Sg(me.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    cheer_type: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = r.w0(me.M())), me.sm_mbf;
          }
          toObject(t = !1) {
            return me.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(me.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(me.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new me();
            return me.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(me.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(me.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class fe extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              fe.prototype.app_id || r.Sg(fe.M()),
              g.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    app_id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: me, r: !0, q: !0 },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = r.w0(fe.M())), fe.sm_mbf;
          }
          toObject(t = !1) {
            return fe.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(fe.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(fe.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new fe();
            return fe.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(fe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(fe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        }
        class jt extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.aggregation_delay_ms || r.Sg(jt.M()),
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
                    aggregation_delay_ms: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
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
              s = new jt();
            return jt.deserializeBinaryFromReader(s, e);
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
            return "CSteamTV_AppCheer_Response";
          }
        }
        var nr;
        ((d) => {
          function t(X, K, Y) {
            return X.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, v.I8)(Ct, K, Y),
              _t,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.CreateBroadcastChannel = t;
          function e(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, v.I8)($t, K, Y),
              ct,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelID = e;
          function s(X, K, Y) {
            return X.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, v.I8)(Zt, K, Y),
              Ee,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelProfile = s;
          function a(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, v.I8)(te, K, Y),
              Nt,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelProfile = a;
          function u(X, K, Y) {
            return X.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, v.I8)(ee, K, Y),
              ht,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelImage = u;
          function f(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, v.I8)(dt, K, Y),
              q,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelImages = f;
          function y(X, K, Y) {
            return X.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, v.I8)(x, K, Y),
              ot,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelLinkRegions = y;
          function S(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, v.I8)($, K, Y),
              ne,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelLinks = S;
          function G(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, v.I8)(Ht, K, Y),
              vt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetBroadcastChannelBroadcasters = G;
          function Be(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, v.I8)(Ot, K, Y),
              at,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetFollowedChannels = Be;
          function We(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, v.I8)(Ue, K, Y),
              Qt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetSubscribedChannels = We;
          function Fe(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, v.I8)(it, K, Y),
              tt,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelStatus = Fe;
          function Ne(X, K, Y) {
            return X.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, v.I8)(Rt, K, Y),
              zt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.FollowBroadcastChannel = Ne;
          function _e(X, K, Y) {
            return X.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, v.I8)(Tt, K, Y),
              Pt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SubscribeBroadcastChannel = _e;
          function ci(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, v.I8)(ae, K, Y),
              ue,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelClips = ci;
          function At(X, K, Y) {
            return X.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, v.I8)(re, K, Y),
              Pe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.ReportBroadcastChannel = At;
          function W(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, v.I8)(E, K, Y),
              Lt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetBroadcastChannelInteraction = W;
          function br(X, K, Y) {
            return X.SendMsg("SteamTV.GetGames#1", (0, v.I8)(ie, K, Y), Yt, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.GetGames = br;
          function Xe(X, K, Y) {
            return X.SendMsg("SteamTV.GetChannels#1", (0, v.I8)(ft, K, Y), St, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.GetChannels = Xe;
          function An(X, K, Y) {
            return X.SendMsg("SteamTV.AddChatBan#1", (0, v.I8)(Gt, K, Y), He, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          d.AddChatBan = An;
          function Nn(X, K, Y) {
            return X.SendMsg("SteamTV.GetChatBans#1", (0, v.I8)(U, K, Y), Jt, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.GetChatBans = Nn;
          function Un(X, K, Y) {
            return X.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, v.I8)(T, K, Y),
              ut,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          d.AddChatModerator = Un;
          function Pn(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, v.I8)(A, K, Y),
              l,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          d.GetChatModerators = Pn;
          function Ln(X, K, Y) {
            return X.SendMsg("SteamTV.AddWordBan#1", (0, v.I8)(p, K, Y), I, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.AddWordBan = Ln;
          function En(X, K, Y) {
            return X.SendMsg("SteamTV.GetWordBans#1", (0, v.I8)(z, K, Y), F, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.GetWordBans = En;
          function Hn(X, K, Y) {
            return X.SendMsg("SteamTV.JoinChat#1", (0, v.I8)(N, K, Y), st, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          d.JoinChat = Hn;
          function kn(X, K, Y) {
            return X.SendMsg("SteamTV.Search#1", (0, v.I8)(C, K, Y), yt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          d.Search = kn;
          function Xn(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, v.I8)(Ie, K, Y),
              wt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetSteamTVUserSettings = Xn;
          function Kn(X, K, Y) {
            return X.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, v.I8)(o, K, Y),
              m,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetSteamTVUserSettings = Kn;
          function Yn(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, v.I8)(b, K, Y),
              w,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetMyBroadcastChannels = Yn;
          function Jn(X, K, Y) {
            return X.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, v.I8)(Se, K, Y),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          d.GetHomePageContents = Jn;
          function $n(X, K, Y) {
            return X.SendMsg("SteamTV.AppCheer#1", (0, v.I8)(fe, K, Y), jt, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.AppCheer = $n;
        })(nr || (nr = {}));
        var Le = h(27066),
          yr = h(8323),
          H = h(18210),
          k = h(3166),
          ui = h(71944),
          Dr = h(99412),
          Ae = h(27386),
          Wr = h(36191),
          Oe = h(66781);
        class le extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              le.prototype.language || r.Sg(le.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = r.w0(le.M())), le.sm_mbf;
          }
          toObject(t = !1) {
            return le.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(le.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(le.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new le();
            return le.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(le.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(le.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
          }
        }
        class ce extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ce.prototype.language || r.Sg(ce.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = r.w0(ce.M())), ce.sm_mbf;
          }
          toObject(t = !1) {
            return ce.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ce.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ce.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ce();
            return ce.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ce.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ce.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        }
        class he extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.dictionary || r.Sg(he.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    dictionary: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = r.w0(he.M())), he.sm_mbf;
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(he.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(he.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new he();
            return he.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(he.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(he.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Response";
          }
        }
        class ge extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ge.prototype.language || r.Sg(ge.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = r.w0(ge.M())), ge.sm_mbf;
          }
          toObject(t = !1) {
            return ge.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ge.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ge.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ge();
            return ge.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ge.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ge.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        }
        class pe extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pe.prototype.pid || r.Sg(pe.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    pid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = r.w0(pe.M())), pe.sm_mbf;
          }
          toObject(t = !1) {
            return pe.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(pe.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(pe.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new pe();
            return pe.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(pe.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(pe.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        }
        class be extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              be.prototype.gameid || r.Sg(be.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    gameid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = r.w0(be.M())), be.sm_mbf;
          }
          toObject(t = !1) {
            return be.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(be.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(be.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new be();
            return be.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(be.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(be.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        }
        class ye extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.gameid || r.Sg(ye.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    gameid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    should_handle: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = r.w0(ye.M())), ye.sm_mbf;
          }
          toObject(t = !1) {
            return ye.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(ye.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(ye.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new ye();
            return ye.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(ye.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(ye.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        }
        class we extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              we.prototype.search_term || r.Sg(we.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    search_term: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    max_results: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = r.w0(we.M())), we.sm_mbf;
          }
          toObject(t = !1) {
            return we.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(we.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(we.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new we();
            return we.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(we.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return we.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(we.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        }
        class Me extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Me.prototype.appids || r.Sg(Me.M()),
              g.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = r.w0(Me.M())), Me.sm_mbf;
          }
          toObject(t = !1) {
            return Me.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(Me.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(Me.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Me();
            return Me.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(Me.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(Me.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        }
        var wr;
        ((d) => {
          d.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: le,
          };
          function t(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultHandlerRegistry()),
              W == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : W.RegisterServiceNotificationHandler(
                    d.UpdateTextFilterDictionaryHandler,
                    At,
                  )
            );
          }
          d.RegisterForUpdateTextFilterDictionary = t;
          function e(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, v.I8)(le, At),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.UpdateTextFilterDictionary = e;
          function s(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, v.I8)(le, At),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgUpdateTextFilterDictionary = s),
            (d.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: ce,
              response: he,
            });
          function a(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((br, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, v.I8)(ce, At),
                    he,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.GetTextFilterDictionary = a;
          function u(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((br, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, v.I8)(ce, At),
                    he,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgGetTextFilterDictionary = u),
            (d.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: ge,
            });
          function f(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultHandlerRegistry()),
              W == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : W.RegisterServiceNotificationHandler(
                    d.NotifyTextFilterDictionaryChangedHandler,
                    At,
                  )
            );
          }
          d.RegisterForNotifyTextFilterDictionaryChanged = f;
          function y(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, v.I8)(ge, At),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.NotifyTextFilterDictionaryChanged = y;
          function S(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, v.I8)(ge, At),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgNotifyTextFilterDictionaryChanged = S),
            (d.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: pe,
              response: be,
            });
          function G(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((br, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, v.I8)(pe, At),
                    be,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.GetGameIDForPID = G;
          function Be(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((br, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, v.I8)(pe, At),
                    be,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgGetGameIDForPID = Be),
            (d.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: ye,
            });
          function We(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultHandlerRegistry()),
              W == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : W.RegisterServiceNotificationHandler(
                    d.SetOverlayEscapeKeyHandlingHandler,
                    At,
                  )
            );
          }
          d.RegisterForSetOverlayEscapeKeyHandling = We;
          function Fe(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, v.I8)(ye, At),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.SetOverlayEscapeKeyHandling = Fe;
          function Ne(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : W.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, v.I8)(ye, At),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (d.SendMsgSetOverlayEscapeKeyHandling = Ne),
            (d.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: we,
              response: Me,
            });
          function _e(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((br, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, v.I8)(we, At),
                    Me,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.SearchAppDataCacheByStoreKeywords = _e;
          function ci(At, W) {
            return (
              (W = W || (0, Oe.OI)().GetDefaultTransport()),
              W == null
                ? new Promise((br, Xe) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      Xe(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : W.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, v.I8)(we, At),
                    Me,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          d.SendMsgSearchAppDataCacheByStoreKeywords = ci;
        })(wr || (wr = {}));
        var ze = h(54963),
          Ni = h(15369),
          Hr = h(94354),
          mi = h(57589),
          Tr = h(71742);
        const fi = 0,
          Ui = 1,
          Pi = 2,
          Zn = 3;
        function Qn(d) {
          return "unknown EClientExecutionSite ( " + d + " )";
        }
        class cr extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return cr.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new cr();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new cr();
            return cr.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "WebUINoResponse";
          }
        }
        var Li = Object.defineProperty,
          Ei = Object.getOwnPropertyDescriptor,
          hi = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ei(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && Li(t, e, a), a;
          };
        class Gr {
          constructor() {
            (0, L.Gn)(this);
          }
          m_mapCallbacks = new Map();
          m_rgRegisteredEMsgs = [];
          m_mapServiceMethodHandlers = new Map();
          m_rgRegisteredServiceMethodHandlers = [];
          DispatchMsgToHandlers(t, e) {
            let s = t.GetEMsg();
            if (s == Hr.bSr) {
              let a = t.Hdr().target_job_name();
              if (a) {
                let u = this.m_mapServiceMethodHandlers.get(a);
                if (u) {
                  this.DEBUG_LogMessageDispatch(t, u[0]);
                  for (let f of u)
                    try {
                      f.invoke(t, e);
                    } catch (y) {
                      y instanceof Error
                        ? (0, Wr.aj)().ReportError(y)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${a}): `,
                            y,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let a = this.m_mapCallbacks.get(s);
              if (a) {
                this.DEBUG_LogMessageDispatch(t, a[0]);
                for (let u of a)
                  try {
                    u.invoke(t);
                  } catch (f) {
                    f instanceof Error
                      ? (0, Wr.aj)().ReportError(f)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          f,
                        );
                  }
                return !0;
              }
            }
            return !1;
          }
          DEBUG_LogMessageDispatch(t, e) {}
          get emsg_list() {
            return this.m_rgRegisteredEMsgs;
          }
          get servicemethod_list() {
            return this.m_rgRegisteredServiceMethodHandlers;
          }
          AddCallback(t, e, s) {
            let a = this.m_mapCallbacks.get(t);
            return (
              a ||
                ((a = []),
                this.m_mapCallbacks.set(t, a),
                this.m_rgRegisteredEMsgs.push(t)),
              a.push({ invoke: s, msgClass: e }),
              {
                invoke: s,
                unregister: () => {
                  let u = this.m_mapCallbacks.get(t);
                  if (u)
                    for (let f = 0; f < u.length; f++)
                      u[f].invoke == s && (u.splice(f, 1), f--);
                },
              }
            );
          }
          AddServiceMethodHandler(t, e) {
            let s = (a, u) => {
              let f = v.w.InitFromMsg(t.request, a),
                y = v.w.Init(t.response, Hr.kHd),
                S = e(f, y),
                G = (Be) => {
                  y.Hdr().set_eresult(Be), u(y);
                };
              S instanceof Promise
                ? S.then(G).catch(() => {
                    G(J.zi);
                  })
                : G(S);
            };
            return (
              this.m_mapServiceMethodHandlers.has(t.name)
                ? console.error("Duplicate registration for method " + t.name)
                : (this.m_mapServiceMethodHandlers.set(t.name, [
                    { invoke: s, msgClass: t.request },
                  ]),
                  this.m_rgRegisteredServiceMethodHandlers.push(t.name)),
              {
                invoke: s,
                unregister: () => {
                  let a = this.m_mapServiceMethodHandlers.get(t.name);
                  if (a)
                    for (let u = 0; u < a.length; u++)
                      a[u].invoke == s && (a.splice(u, 1), u--);
                },
              }
            );
          }
          AddServiceNotificationHandler(t, e) {
            let s = (u, f) => {
                let y = v.w.InitFromMsg(t.request, u);
                e(y);
              },
              a = this.m_mapServiceMethodHandlers.get(t.name);
            return (
              a ||
                ((a = []),
                this.m_mapServiceMethodHandlers.set(t.name, a),
                this.m_rgRegisteredServiceMethodHandlers.push(t.name)),
              a.push({ invoke: s, msgClass: t.request }),
              {
                invoke: s,
                unregister: () => {
                  let u = this.m_mapServiceMethodHandlers.get(t.name);
                  if (u)
                    for (let f = 0; f < u.length; f++)
                      u[f].invoke == s && (u.splice(f, 1), f--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(t, e) {
            return this.AddCallback(t, void 0, e);
          }
          RegisterEMessageHandler(t, e, s) {
            return this.AddCallback(t, e, (a) => {
              s(v.w.InitFromMsg(e, a));
            });
          }
          RegisterEMessageAction(t, e, s) {
            return this.AddCallback(t, e, (a) => {
              (0, L.h5)(() => {
                s(v.w.InitFromMsg(e, a));
              });
            });
          }
          RegisterServiceNotificationHandler(t, e) {
            return this.AddServiceNotificationHandler(t, e);
          }
          RegisterServiceNotificationHandlerAction(t, e) {
            return this.AddServiceNotificationHandler(t, (s) => {
              let a;
              return (
                (0, L.h5)(() => {
                  a = e(s);
                }),
                a
              );
            });
          }
          RegisterServiceMethodHandler(t, e) {
            return this.AddServiceMethodHandler(t, e);
          }
          RegisterServiceMethodHandlerAction(t, e) {
            return this.AddServiceMethodHandler(t, (s, a) => {
              let u;
              return (
                (0, L.h5)(() => {
                  u = e(s, a);
                }),
                u
              );
            });
          }
        }
        hi([L.sH], Gr.prototype, "m_rgRegisteredEMsgs", 2),
          hi([L.sH], Gr.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        class de extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              de.prototype.auth_key || r.Sg(de.M()),
              g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    auth_key: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = r.w0(de.M())), de.sm_mbf;
          }
          toObject(t = !1) {
            return de.toObject(t, this);
          }
          static toObject(t, e) {
            return r.BT(de.M(), t, e);
          }
          static fromObject(t) {
            return r.Uq(de.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new de();
            return de.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return r.zj(de.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return de.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            r.i0(de.M(), t, e);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
          }
        }
        class Re extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Re.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Re();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Re();
            return Re.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Response";
          }
        }
        class Te extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), g.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Te.toObject(t, this);
          }
          static toObject(t, e) {
            return t ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(t) {
            return new Te();
          }
          static deserializeBinary(t) {
            let e = new (c().BinaryReader)(t),
              s = new Te();
            return Te.deserializeBinaryFromReader(s, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var Fr;
        ((d) => {
          d.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: de,
            response: Re,
          };
          function t(f, y) {
            return (
              (y = y || (0, Oe.OI)().GetDefaultTransport()),
              y == null
                ? new Promise((S, G) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      G(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : y.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, v.I8)(de, f),
                    Re,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          d.Authenticate = t;
          function e(f, y) {
            return (
              (y = y || (0, Oe.OI)().GetDefaultTransport()),
              y == null
                ? new Promise((S, G) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      G(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : y.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, v.I8)(de, f),
                    Re,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          (d.SendMsgAuthenticate = e),
            (d.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: Te,
            });
          function s(f, y) {
            return (
              (y = y || (0, Oe.OI)().GetDefaultHandlerRegistry()),
              y == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : y.RegisterServiceNotificationHandler(
                    d.NotifyStartShutdownHandler,
                    f,
                  )
            );
          }
          d.RegisterForNotifyStartShutdown = s;
          function a(f, y) {
            return (
              (y = y || (0, Oe.OI)().GetDefaultTransport()),
              y == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : y.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, v.I8)(Te, f),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          d.NotifyStartShutdown = a;
          function u(f, y) {
            return (
              (y = y || (0, Oe.OI)().GetDefaultTransport()),
              y == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : y.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, v.I8)(Te, f),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          d.SendMsgNotifyStartShutdown = u;
        })(Fr || (Fr = {}));
        var Hi = h(98609),
          ki = h(13854),
          Xi = Object.defineProperty,
          Ki = Object.getOwnPropertyDescriptor,
          kr = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ki(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && Xi(t, e, a), a;
          };
        class Sr {
          m_socket = null;
          m_sName;
          m_sURL;
          Log = new mi.wd("CWebSocketConnection", () => this.m_sName);
          m_bDisconnectRequested = !1;
          m_bConnecting = !1;
          m_fnOnMessageHandler;
          m_fnOnCloseHandler;
          m_fnOnReconnectStartHandler;
          m_fnOnReconnectFinishHandler;
          m_nConnectAttemptsMax;
          m_nConnectAttemptTimeoutMs;
          m_bReconnectOnFailure;
          m_nReconnectAttemptTimeoutMs;
          m_nReconnectAttemptsMax;
          constructor(t, e) {
            (this.m_sName = t),
              (this.m_fnOnMessageHandler = e.fnOnMessageHandler),
              (this.m_fnOnCloseHandler = e.fnOnCloseHandler),
              (this.m_fnOnReconnectStartHandler =
                e.fnOnReconnectStartHandler ?? (() => {})),
              (this.m_fnOnReconnectFinishHandler =
                e.fnOnReconnectFinishHandler ?? (() => {})),
              (this.m_nConnectAttemptsMax = e.nConnectAttemptsMax ?? 8),
              (this.m_nConnectAttemptTimeoutMs =
                e.nConnectAttemptTimeoutMs ?? 1e3),
              (this.m_bReconnectOnFailure = e.bReconnectOnFailure ?? !1),
              (this.m_nReconnectAttemptsMax = e.nReconnectAttemptsMax ?? 3e4),
              (this.m_nReconnectAttemptTimeoutMs =
                e.nReconnectAttemptTimeoutMs ?? 1e4);
          }
          get name() {
            return this.m_sName;
          }
          async Connect(t) {
            return (
              (this.m_sURL = t),
              this.ConnectWithRetry(
                this.m_sURL,
                this.m_nConnectAttemptsMax,
                this.m_nConnectAttemptTimeoutMs,
              )
            );
          }
          async Reconnect() {
            return this.ConnectWithRetry(
              this.m_sURL,
              this.m_nReconnectAttemptsMax,
              this.m_nReconnectAttemptTimeoutMs,
            );
          }
          GetInterAttemptBackoffMs(t) {
            return (0, ki.OQ)(t, 1, 5) * 1e3;
          }
          async ConnectWithRetry(t, e, s) {
            this.m_bConnecting = !0;
            let a = 0;
            do {
              try {
                const f = await this.ConnectToSocket(t, s);
                if (f.result == J.R) return (this.m_bConnecting = !1), f;
                this.Log.Warning(
                  `connect attempt failed: ${f.result} - ${f.message}`,
                );
              } catch (f) {
                this.Log.Warning(
                  `connect attempt failed: exception ${f.name} - ${f}`,
                );
              }
              const u = this.GetInterAttemptBackoffMs(a);
              this.Log.Info(`connect retry: attempt:${a}/${e} backoff:${u}`),
                await new Promise((f) => setTimeout(f, u)),
                (this.m_socket = null),
                (a += 1);
            } while (a < e);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              { result: J.zi, message: "not ready, exceeded retry count" }
            );
          }
          Disconnect() {
            this.Log.Info("disconnect requested"),
              (this.m_bDisconnectRequested = !0),
              this.m_socket.close();
          }
          PrepareForShutdown() {
            this.Log.Info("shutdown pending"),
              (this.m_bDisconnectRequested = !0);
          }
          BShouldReconnect() {
            return this.m_bConnecting || !this.m_bReconnectOnFailure
              ? !1
              : !this.m_bDisconnectRequested;
          }
          async StartReconnect() {
            if (
              (this.Log.Info("start reconnect"),
              (this.m_socket = null),
              this.m_fnOnReconnectStartHandler({ connection: this }),
              (await this.Reconnect()).result != J.R)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: J.zi,
                }),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !0,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            this.Log.Info("reconnect successful"),
              this.m_fnOnReconnectFinishHandler({
                connection: this,
                eResult: J.R,
              });
          }
          async ConnectToSocket(t, e) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  { result: J.zi, message: "websocket in an unexpected state" })
                : { result: J.R, message: "ready" };
            try {
              this.m_socket = new WebSocket(t);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: J.iV,
                  message: "Failed to initialize websocket connection",
                }
              );
            }
            return (
              (this.m_socket.binaryType = "arraybuffer"),
              (this.m_socket.onerror = this.OnSocketError),
              (this.m_socket.onmessage = this.OnSocketMessage),
              (this.m_socket.onopen = this.OnSocketOpen),
              (this.m_socket.onclose = this.OnSocketClose),
              (await this.WaitForSocketOpen(this.m_socket, e))
                ? (this.Log.Info("connection ready"),
                  { result: J.R, message: "ready" })
                : (this.Log.Warning("failed to reach open state"),
                  { result: J.zi, message: "failed to reach open state" })
            );
          }
          async WaitForSocketOpen(t, e) {
            if (t.readyState != WebSocket.CONNECTING)
              return t.readyState == WebSocket.OPEN;
            const s = 100;
            let a = e / s;
            for (; t.readyState == WebSocket.CONNECTING && a > 0; )
              a--, await new Promise((u) => setTimeout(u, s));
            return t.readyState == WebSocket.OPEN;
          }
          BCanSendMessages() {
            return (
              this.m_socket != null &&
              this.m_socket.readyState == WebSocket.OPEN
            );
          }
          OnSocketError(t) {
            this.Log.Warning("websocket error");
          }
          OnSocketOpen(t) {
            this.Log.Info("websocket open");
          }
          OnSocketClose(t) {
            if (this.m_bDisconnectRequested) {
              this.Log.Info("websocket closed"),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !1,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            if (this.m_bConnecting) return;
            this.Log.Warning("websocket unexpectedly closed");
            const e = this.BShouldReconnect();
            this.m_fnOnCloseHandler({
              connection: this,
              bError: !0,
              bIsExpectedToReconnect: e,
            }),
              e && this.StartReconnect();
          }
          async OnSocketMessage(t) {
            this.m_fnOnMessageHandler(t.data);
          }
          SendSerializedMessage(t) {
            try {
              return this.m_socket.send(t), J.R;
            } catch {
              return J.zi;
            }
          }
        }
        kr([ze.oI], Sr.prototype, "OnSocketError", 1),
          kr([ze.oI], Sr.prototype, "OnSocketOpen", 1),
          kr([ze.oI], Sr.prototype, "OnSocketClose", 1),
          kr([ze.oI], Sr.prototype, "OnSocketMessage", 1);
        var Yi = Object.defineProperty,
          Ji = Object.getOwnPropertyDescriptor,
          Ar = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ji(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && Yi(t, e, a), a;
          };
        const $i = "localhost",
          Ge = new mi.wd("WebUITransport");
        class Mr {
          m_iMsgSeq = 1;
          m_mapPendingMethodRequests = new Map();
          m_messageHandlers = new Gr();
          m_mapServiceCallErrorCount = new Map();
          m_mapConnectionDetails = new Map();
          m_fnOnStatusEventHandler;
          m_fnOnReconnectErrorHandler;
          m_bInitialized = !1;
          m_nMaximumMsgSizeBytes = 1024;
          BIsValid() {
            return this.m_bInitialized;
          }
          GetMaximumMsgSizeBytes() {
            return this.m_nMaximumMsgSizeBytes;
          }
          TEST_GetMaximumMsgBodySizeBytes() {
            return (
              this.m_nMaximumMsgSizeBytes -
              this.TEST_GetMsgHeaderEstimatedSizeBytes()
            );
          }
          TEST_GetMsgHeaderEstimatedSizeBytes() {
            return 128;
          }
          TEST_GetExcessivelyLargeBodySize() {
            return 64 * 1024 * 1024;
          }
          ReportError(t) {
            Ge.Warning(t);
            const e = (0, Wr.aj)();
            e &&
              e.ReportError(new Error(t), {
                bIncludeMessageInIdentifier: !0,
                cCallsitesToIgnore: 1,
              });
          }
          async Init() {
            if (!Hi.TS.IN_CLIENT) return;
            const t = await SteamClient.WebUITransport.GetTransportInfo();
            (this.m_nMaximumMsgSizeBytes = t.nMaximumMsgSizeBytes),
              this.CreateConnection(
                Ui,
                "steamUI",
                t.portSteamUI,
                t.authKeySteamUI,
              ),
              this.CreateConnection(
                Pi,
                "clientdll",
                t.portClientdll,
                t.authKeyClientdll,
              ),
              (0, Oe.OI)().SetDefaultTransport(this),
              (0, Oe.OI)().SetDefaultHandlerRegistry(this.m_messageHandlers),
              Fr.RegisterForNotifyStartShutdown(this.OnStartShutdown);
          }
          get messageHandlers() {
            return this.m_messageHandlers;
          }
          SetStatusEventHandler(t) {
            this.m_fnOnStatusEventHandler = t;
          }
          SetReconnectErrorHandler(t) {
            this.m_fnOnReconnectErrorHandler = t;
          }
          CreateConnection(t, e, s, a) {
            const u = {
                bReconnectOnFailure: !0,
                fnOnMessageHandler: this.OnWebsocketMessage,
                fnOnCloseHandler: this.OnWebsocketClose,
                fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
                fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
                nConnectAttemptsMax: 8,
                nConnectAttemptTimeoutMs: 1e4,
                nReconnectAttemptsMax: 8,
                nReconnectAttemptTimeoutMs: 1e4,
              },
              f = {
                connection: new Sr(e, u),
                sUrl: `ws://${$i}:${s}/transportsocket/`,
                sAuthKey: a,
                eClientExecutionSite: t,
              };
            this.m_mapConnectionDetails.set(t, f);
          }
          SendMsg(t, e, s, a) {
            return new Promise((u, f) => {
              const y = a.eClientExecutionSite;
              if (y == null || y == fi) {
                Ge.Error(`SendMsg: Invalid client execution site: ${y}`),
                  f(`Transport SendMsg: invalid client execution site ${y}`);
                return;
              }
              const S = this.m_mapConnectionDetails.get(y);
              if (S == null) {
                Ge.Error(
                  `SendMsg: could not find connection for execution site: ${y}`,
                ),
                  f(
                    `Transport SendMsg: could not find connection for execution site ${y}`,
                  );
                return;
              }
              const G = S.connection;
              if (!G.BCanSendMessages()) {
                const Ne = this.m_mapServiceCallErrorCount.get(t) ?? 1;
                this.m_mapServiceCallErrorCount.set(t, Ne + 1);
                const _e = `SendMsg: Attempt to send message but socket wasn't ready: ${G.name} - ${t}`;
                Ne == 1 && this.ReportError(_e),
                  Ge.Warning(_e + ` error count: ${Ne}`),
                  f("Transport SendMsg: socket not ready");
                return;
              }
              const Be = this.m_iMsgSeq++;
              e.SetEMsg(Hr.bSr),
                e.Hdr().set_target_job_name(t),
                e.Hdr().set_jobid_source("" + Be);
              const We = e.Serialize();
              if (We.byteLength >= this.m_nMaximumMsgSizeBytes) {
                Ge.Error(
                  `SendMsg: message exceeds maximum size: ${We.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const Ne = v.w.Init(s);
                Ne.Hdr().set_eresult(J.zi), u(Ne);
                return;
              }
              if (G.SendSerializedMessage(We) != J.R) {
                Ge.Error("SendMsg: Failed to send message"),
                  f("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(Be, {
                m_iSeq: Be,
                m_responseClass: s,
                m_fnCallback: u,
                m_fnError: f,
              });
            });
          }
          SendNotification(t, e, s) {
            const a = s.eClientExecutionSite;
            if (a == null || a == fi)
              return (
                Ge.Error(
                  `SendNotification: Invalid client execution site: ${a}`,
                ),
                !1
              );
            const u = this.m_mapConnectionDetails.get(a);
            if (u == null)
              return (
                Ge.Error(
                  `SendNotification: could not find connection for execution site: ${a}`,
                ),
                !1
              );
            const f = u.connection;
            if (!f.BCanSendMessages()) {
              const S = this.m_mapServiceCallErrorCount.get(t) ?? 1;
              this.m_mapServiceCallErrorCount.set(t, S + 1);
              const G = `SendNotification: Attempt to send message but socket wasn't ready: ${f.name} - ${t}`;
              return (
                S == 1 && this.ReportError(G),
                Ge.Warning(G + ` error count: ${S}`),
                !1
              );
            }
            return (
              e.SetEMsg(Hr.bSr),
              e.Hdr().set_target_job_name(t),
              f.SendSerializedMessage(e.Serialize()) == J.R
            );
          }
          async ConnectToSite(t) {
            const s = await t.connection.Connect(t.sUrl);
            return s.result != J.R
              ? s
              : (await this.SendAuthMessage(t)).BSuccess()
                ? { result: J.R, message: "connected" }
                : { result: J.zi, message: "client auth failed" };
          }
          async MakeReady() {
            const t = [];
            for (const [s, a] of this.m_mapConnectionDetails)
              t.push(this.ConnectToSite(a));
            const e = await Promise.all(t);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const s of e) if (s.result != J.R) return s;
            return { result: J.R, message: "ready" };
          }
          GetConnectionDetails(t) {
            for (const [e, s] of this.m_mapConnectionDetails)
              if (s.connection === t) return s;
            return (
              Ge.Error("GetConnectionDetails: failed to identify connection"),
              null
            );
          }
          DispatchTransportStatusUpdate() {
            if (!this.m_fnOnStatusEventHandler) return;
            let t = !0;
            for (const [e, s] of this.m_mapConnectionDetails)
              s.connection.BCanSendMessages() || (t = !1);
            this.m_fnOnStatusEventHandler({ bConnected: t });
          }
          OnWebsocketReconnectStart(t) {
            this.DispatchTransportStatusUpdate();
          }
          OnWebsocketReconnectFinish(t) {
            if ((this.DispatchTransportStatusUpdate(), t.eResult != J.R)) {
              Ge.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
                this.m_fnOnReconnectErrorHandler?.({});
              return;
            }
            this.FailAllPendingRequests();
            const e = this.GetConnectionDetails(t.connection);
            e && this.SendAuthMessage(e);
          }
          OnWebsocketClose(t) {
            t.bIsExpectedToReconnect || this.FailAllPendingRequests();
          }
          OnWebsocketMessage(t) {
            const e = new Ni.pV(t),
              s = v.w.InitHeaderFromPacket(e);
            s.Hdr().jobid_target() && s.Hdr().jobid_target() !== Dr.kFb
              ? this.DispatchMethodResponse(s)
              : this.DispatchNotification(s);
          }
          DispatchMethodResponse(t) {
            const e = parseInt(t.Hdr().jobid_target()),
              s = this.m_mapPendingMethodRequests.get(e);
            if (s == null) {
              (0, Tr.wT)(
                !1,
                "Transport Error: no pending callback for request",
              );
              return;
            }
            (0, Tr.wT)(
              e == s.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(e);
            const a = v.w.InitFromMsg(s.m_responseClass, t);
            s.m_fnCallback(a);
          }
          DispatchNotification(t) {
            const e = (s) => {
              (0, Tr.wT)(
                !1,
                "Transport Error: A notification should not generate a response",
              );
            };
            this.m_messageHandlers.DispatchMsgToHandlers(t, e);
          }
          FailAllPendingRequests() {
            for (const [t, e] of this.m_mapPendingMethodRequests) {
              this.ReportError(
                `FailAllPendingRequests: forcing failure for request: ${e.m_responseClass.name}`,
              );
              let s = v.w.Init(e.m_responseClass);
              s.Hdr().set_eresult(J.zi), e.m_fnCallback(s);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(t) {
            const e = Fr.AuthenticateHandler.name,
              s = { eClientExecutionSite: t.eClientExecutionSite },
              a = v.w.Init(de);
            return (
              a.Hdr().set_webui_auth_key(t.sAuthKey),
              await this.SendMsg(e, a, Fr.AuthenticateHandler.response, s)
            );
          }
          OnStartShutdown(t) {
            for (const [e, s] of this.m_mapConnectionDetails)
              s.connection.PrepareForShutdown();
            return J.R;
          }
        }
        Ar([ze.oI], Mr.prototype, "OnWebsocketReconnectStart", 1),
          Ar([ze.oI], Mr.prototype, "OnWebsocketReconnectFinish", 1),
          Ar([ze.oI], Mr.prototype, "OnWebsocketClose", 1),
          Ar([ze.oI], Mr.prototype, "OnWebsocketMessage", 1),
          Ar([ze.oI], Mr.prototype, "OnStartShutdown", 1);
        const Zi = new Mr();
        var Qi = Object.defineProperty,
          Ri = Object.getOwnPropertyDescriptor,
          qe = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ri(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && Qi(t, e, a), a;
          };
        function Br() {
          return k.TS.IN_MOBILE ? k.NQ : (0, k.xv)();
        }
        function Ti(d) {
          if (d === "") return !1;
          try {
            return new RegExp("\\b(" + d + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${d}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const Xr = 15,
          Gi = 3600,
          qr = "(1)";
        class Ke {
          m_WebUIServiceTransport;
          m_unAccountID;
          m_Transport = null;
          m_Storage = null;
          m_TextFilterPreferences = {
            eTextFilterSetting: Ae.Bx6.NS,
            bIgnoreFriends: !1,
          };
          m_TextFilterWords;
          m_mapPlayerCache = new Map();
          m_strBannedWords = "";
          m_strProfanityWords = "";
          m_strCleanWords = "";
          m_strBannedPattern = "";
          m_strCleanPattern = "";
          m_bWordListsComplete = !1;
          m_bHaveCompleteFilter = !1;
          m_regexBannedWords = null;
          m_regexCleanWords = null;
          m_bShownFilterTip = !1;
          m_bInitialized = !1;
          m_bFilterChangedWhileLoading = !1;
          m_bOngoingLoad = !1;
          m_promiseOngoingLoad = null;
          m_fnUnregisterDictionaryChanged = void 0;
          m_rgUnregisterPlayerNotifications = [];
          m_DataAccess;
          constructor(t) {
            (0, L.Gn)(this);
            let e = new Ae.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: e.text_filter_setting(),
              bIgnoreFriends: e.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new Ae.EyI()),
              (this.m_DataAccess = t);
          }
          async Init(t = 0, e = null, s = null, a = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = Zi),
              (this.m_unAccountID = t),
              (this.m_Transport = e),
              (this.m_Storage = s),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_bWordListsComplete = !1),
              this.InitSteamEngineLanguages(),
              this.RegisterPlayerNotifications(a),
              await this.LoadFilter(),
              await this.LoadTextFilterPreferences(),
              await this.LoadTextFilterWords(),
              await this.RequestUpdatedSettings(),
              (this.m_nLoadLanguagesRetryDelaySec = Xr),
              await this.EnsureFiltersLoaded();
          }
          InitSteamEngineLanguages() {
            this.m_WebUIServiceTransport.BIsValid() &&
              (this.m_fnUnregisterDictionaryChanged?.(),
              (this.m_fnUnregisterDictionaryChanged =
                this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
                  wr.NotifyTextFilterDictionaryChangedHandler,
                  this.OnTextFilterDictionaryChanged,
                ).unregister),
              this.InitSteamEngineLanguage(k.TS.LANGUAGE),
              k.TS.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(t) {
            return (
              !this.m_bInitialized && !this.m_bOngoingLoad
                ? (this.m_bFilterChangedWhileLoading = !0)
                : ((this.m_nLoadLanguagesRetryDelaySec = Xr),
                  this.EnsureFiltersLoaded()),
              J.R
            );
          }
          EnsureFiltersLoaded() {
            return this.m_bOngoingLoad && this.m_promiseOngoingLoad
              ? ((this.m_bFilterChangedWhileLoading = !0),
                this.m_promiseOngoingLoad)
              : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
                this.m_promiseOngoingLoad);
          }
          async InitFiltersWithRetry() {
            this.m_bOngoingLoad = !0;
            try {
              do
                (this.m_bFilterChangedWhileLoading = !1),
                  await this.LoadLanguages(),
                  this.OnFilterDataChanged(),
                  (this.m_bInitialized = !0);
              while (this.m_bFilterChangedWhileLoading);
            } finally {
              (this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null);
            }
          }
          RegisterPlayerNotifications(t) {
            this.m_rgUnregisterPlayerNotifications.forEach((e) => e()),
              (this.m_rgUnregisterPlayerNotifications = []),
              t &&
                this.m_rgUnregisterPlayerNotifications.push(
                  t.RegisterServiceNotificationHandler(
                    Ae.QAJ.NotifyCommunityPreferencesChangedHandler,
                    (e) => (
                      this.UpdateCommunityPreferences(e.Body().preferences()),
                      this.OnPlayerSettingsChanged(),
                      J.R
                    ),
                  ).unregister,
                  t.RegisterServiceNotificationHandler(
                    Ae.QAJ.NotifyTextFilterWordsChangedHandler,
                    (e) => (
                      this.UpdateTextFilterWords(e.Body().words()),
                      this.OnPlayerSettingsChanged(),
                      J.R
                    ),
                  ).unregister,
                );
          }
          OnPlayerSettingsChanged() {
            this.m_bInitialized &&
              !this.m_bOngoingLoad &&
              this.OnFilterDataChanged();
          }
          InitSteamEngineLanguage(t) {
            const e = v.w.Init(le);
            e.Body().set_language(t),
              e.Body().set_type("profanity"),
              wr.SendMsgUpdateTextFilterDictionary(
                e,
                this.m_WebUIServiceTransport,
              ),
              e.Body().set_type("banned"),
              wr.SendMsgUpdateTextFilterDictionary(
                e,
                this.m_WebUIServiceTransport,
              );
          }
          GetSteamEngineTextFilterDictionary(t, e) {
            const s = v.w.Init(ce);
            return (
              s.Body().set_language(t),
              s.Body().set_type(e),
              wr.SendMsgGetTextFilterDictionary(s, this.m_WebUIServiceTransport)
            );
          }
          GetStorageKey(t) {
            return t + "_" + this.m_unAccountID;
          }
          async LoadTextFilterPreferences() {
            if (this.m_Storage) {
              let t = await this.m_Storage.GetObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              );
              t && (this.m_TextFilterPreferences = t);
            }
          }
          SaveTextFilterPreferences() {
            this.m_Storage &&
              this.m_Storage.StoreObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
                this.m_TextFilterPreferences,
              );
          }
          ObfuscateString(t) {
            try {
              const e = new TextEncoder().encode(qr + t);
              return ui.fromByteArray(e);
            } catch {
              return "";
            }
          }
          DeobfuscateString(t) {
            try {
              const e = ui.toByteArray(t);
              let s = new TextDecoder().decode(e);
              return s.startsWith(qr)
                ? ((s = s.slice(qr.length)), s)
                : (console.log(
                    "DeobfuscateString given invalid base64 data, ignoring: " +
                      t,
                  ),
                  "");
            } catch {
              return "";
            }
          }
          async LoadObfuscatedString(t) {
            if (this.m_Storage) {
              let e = await this.m_Storage.GetString(this.GetStorageKey(t));
              if (e) return this.DeobfuscateString(e);
            }
            return null;
          }
          async SaveObfuscatedString(t, e) {
            this.m_Storage &&
              this.m_Storage.StoreString(
                this.GetStorageKey(t),
                this.ObfuscateString(e),
              );
          }
          async LoadTextFilterWords() {
            let t = await this.LoadObfuscatedString(
              "CTextFilterStore_TextFilterWords",
            );
            if (t)
              try {
                this.m_TextFilterWords = Ae.EyI.fromObject(JSON.parse(t));
              } catch {
                console.warn("Error parsing cached text filter word list", t),
                  (this.m_TextFilterWords = new Ae.EyI());
              }
          }
          SaveTextFilterWords() {
            this.SaveObfuscatedString(
              "CTextFilterStore_TextFilterWords",
              JSON.stringify(this.m_TextFilterWords.toObject()),
            );
          }
          async LoadFilter() {
            let t = await this.LoadObfuscatedString(
                "CTextFilterStore_strBannedPattern",
              ),
              e = await this.LoadObfuscatedString(
                "CTextFilterStore_strCleanPattern",
              );
            (this.m_bHaveCompleteFilter = t != null && e != null),
              t != null && e != null && this.BRebuildFilter(t, e);
          }
          SaveFilter() {
            this.SaveObfuscatedString(
              "CTextFilterStore_strBannedPattern",
              this.m_strBannedPattern,
            ),
              this.SaveObfuscatedString(
                "CTextFilterStore_strCleanPattern",
                this.m_strCleanPattern,
              );
          }
          async RequestUpdatedSettings() {
            let t = new Ae.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let e = v.w.Init(Ae.tzK);
                  t = (
                    await Ae.xtC.GetCommunityPreferences(this.m_Transport, e)
                  )
                    .Body()
                    .preferences();
                } else {
                  let e = { sessionid: (0, k.KC)(), origin: Br() };
                  const s = await D().get(
                    k.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: e, withCredentials: !0 },
                  );
                  t = Ae.B4H.fromObject(s.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(t),
              t.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let e = new Ae.EyI();
              if (t.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let s = v.w.Init(Ae.SCE);
                    e = (await Ae.xtC.GetTextFilterWords(this.m_Transport, s))
                      .Body()
                      .words();
                  } else {
                    let s = { sessionid: (0, k.KC)(), origin: Br() };
                    const a = await D().get(
                      k.TS.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: s, withCredentials: !0 },
                    );
                    e = Ae.EyI.fromObject(a.data.words);
                  }
                } catch {}
              this.UpdateTextFilterWords(e);
            }
          }
          UpdateCommunityPreferences(t) {
            let e = !1;
            t.text_filter_setting() !==
              this.m_TextFilterPreferences?.eTextFilterSetting &&
              ((this.m_TextFilterPreferences.eTextFilterSetting =
                t.text_filter_setting()),
              (e = !0)),
              t.text_filter_ignore_friends() !==
                this.m_TextFilterPreferences.bIgnoreFriends &&
                ((this.m_TextFilterPreferences.bIgnoreFriends =
                  t.text_filter_ignore_friends()),
                (e = !0)),
              e && this.SaveTextFilterPreferences();
          }
          get TextFilterPreferences() {
            return this.m_TextFilterPreferences;
          }
          UpdateTextFilterWords(t) {
            (this.m_TextFilterWords = t), this.SaveTextFilterWords();
          }
          m_nLoadLanguagesRetryTimeout = void 0;
          m_nLoadLanguagesRetryDelaySec = Xr;
          async LoadLanguages() {
            (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_bWordListsComplete = !1),
              this.m_nLoadLanguagesRetryTimeout &&
                (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0));
            try {
              let t = await this.LoadLanguage(k.TS.LANGUAGE);
              if (
                (k.TS.LANGUAGE !== "english" &&
                  (t = (await this.LoadLanguage("english")) && t),
                !t)
              )
                throw new Error("clean_public dictionary unavailable");
              (this.m_nLoadLanguagesRetryDelaySec = Xr),
                (this.m_bWordListsComplete = !0);
            } catch (t) {
              this.m_nLoadLanguagesRetryDelaySec = Math.min(
                this.m_nLoadLanguagesRetryDelaySec * 2,
                Gi,
              );
              const e = this.m_nLoadLanguagesRetryDelaySec;
              console.warn("LoadLanguages caught", t, "retry in", e, "seconds"),
                (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
                  (this.m_nLoadLanguagesRetryTimeout = void 0),
                    this.EnsureFiltersLoaded();
                }, e * 1e3));
            }
          }
          async LoadLanguage(t) {
            let e = "1",
              s = "",
              a = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const y = await this.GetSteamEngineTextFilterDictionary(
                    t,
                    "banned",
                  );
                  this.m_strBannedWords += y.Body().dictionary();
                }
                {
                  const y = await this.GetSteamEngineTextFilterDictionary(
                    t,
                    "profanity",
                  );
                  this.m_strProfanityWords += y.Body().dictionary();
                }
                a = !0;
              } catch (y) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  y,
                );
              }
            if (!a) {
              s = `${k.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${t}&v=${e}&origin=${Br()}`;
              {
                const y = await D().get(s);
                this.m_strBannedWords += y.data;
              }
              s = `${k.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${t}&v=${e}&origin=${Br()}`;
              {
                const y = await D().get(s);
                this.m_strProfanityWords += y.data;
              }
            }
            const u = this.m_WebUIServiceTransport.BIsValid(),
              f = "CTextFilterStore_strCleanPublic_" + t;
            s = `${k.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${t}&v=${e}&origin=${Br()}`;
            try {
              const y = await D().get(s);
              (this.m_strCleanWords += y.data),
                u && this.SaveObfuscatedString(f, y.data);
            } catch (y) {
              console.warn("LoadLanguage caught while loading clean list:", y);
              const S = u ? await this.LoadObfuscatedString(f) : null;
              if (!S) return !1;
              this.m_strCleanWords += S;
            }
            return !0;
          }
          CreatePattern(t) {
            let e = t.filter(function (s) {
              return Ti(s);
            });
            return e.length > 0 ? "\\b(" + e.join("|") + ")\\b" : "";
          }
          OnFilterDataChanged() {
            if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter)
              return;
            let t = new RegExp(/\s*[\r\n]+\s*/g),
              e = [],
              s = [];
            switch (this.m_TextFilterPreferences.eTextFilterSetting) {
              case Ae.Bx6.C5:
                break;
              case Ae.Bx6.NS:
                break;
              case Ae.Bx6.bf:
                e = e.concat(this.m_strBannedWords.split(t));
                break;
              default:
                e = e.concat(
                  this.m_strProfanityWords.split(t),
                  this.m_strBannedWords.split(t),
                );
                break;
            }
            (e = e.concat(
              this.m_TextFilterWords.text_filter_custom_banned_words(),
            )),
              (s = this.m_strCleanWords.split(t)),
              (s = s.concat(
                this.m_TextFilterWords.text_filter_custom_clean_words(),
              ));
            let a = this.CreatePattern(e),
              u = this.CreatePattern(s);
            u != "" && (u = "^(" + u + ")$"),
              this.BRebuildFilter(a, u) &&
                this.m_bWordListsComplete &&
                this.SaveFilter(),
              (this.m_bHaveCompleteFilter = this.m_bWordListsComplete);
          }
          BRebuildFilter(t, e) {
            if (t === this.m_strBannedPattern && e === this.m_strCleanPattern)
              return !1;
            if (
              ((this.m_regexBannedWords = null),
              (this.m_strBannedPattern = t),
              t !== "")
            )
              try {
                this.m_regexBannedWords = new RegExp(t, "ugi");
              } catch (s) {
                console.warn("Couldn't compile textfilter bannedwords regex"),
                  (0, Wr.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter bannedwords regex: ${s}`,
                    ),
                  ),
                  (this.m_strBannedPattern = "");
              }
            if (
              ((this.m_regexCleanWords = null),
              (this.m_strCleanPattern = e),
              e !== "")
            )
              try {
                this.m_regexCleanWords = new RegExp(e, "ugi");
              } catch (s) {
                console.warn("Couldn't compile textfilter cleanwords regex"),
                  (0, Wr.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter cleanwords regex: ${s}`,
                    ),
                  ),
                  (this.m_strCleanPattern = "");
              }
            return !0;
          }
          CreateProfanityReplacement(t) {
            return "\u2665".repeat(t);
          }
          BHasFilter() {
            return this.m_regexBannedWords != null;
          }
          BShownFilterTip() {
            return this.m_bShownFilterTip;
          }
          SetFilterTipShown(t) {
            this.m_bShownFilterTip = t;
          }
          FilterText(t, e) {
            if (!this.m_regexBannedWords) return e;
            let s = 0;
            return (
              typeof t == "string" && t !== ""
                ? (s = new Bt.b(t).GetAccountID())
                : typeof t == "number" && (s = t),
              !e ||
              s == this.m_unAccountID ||
              (t &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(s))
                ? e
                : e.replace(this.m_regexBannedWords, (a) =>
                    this.m_regexCleanWords &&
                    a.search(this.m_regexCleanWords) == 0
                      ? a
                      : this.CreateProfanityReplacement(a.length),
                  )
            );
          }
        }
        qe([L.sH], Ke.prototype, "m_TextFilterPreferences", 2),
          qe([L.sH], Ke.prototype, "m_mapPlayerCache", 2),
          qe([L.sH], Ke.prototype, "m_regexBannedWords", 2),
          qe([L.sH], Ke.prototype, "m_regexCleanWords", 2),
          qe([L.sH], Ke.prototype, "m_bInitialized", 2),
          qe([L.sH], Ke.prototype, "m_bFilterChangedWhileLoading", 2),
          qe([L.sH], Ke.prototype, "m_bOngoingLoad", 2),
          qe([L.XI], Ke.prototype, "Init", 1),
          qe([Le.o], Ke.prototype, "OnTextFilterDictionaryChanged", 1),
          qe([L.XI], Ke.prototype, "UpdateCommunityPreferences", 1),
          qe([L.XI], Ke.prototype, "BRebuildFilter", 1);
        let Vr;
        function qi() {
          if (!Vr) {
            const d = new Set();
            let t = { sessionid: (0, k.KC)(), origin: Br() };
            D()
              .get(k.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: t,
                withCredentials: !0,
              })
              .then((e) => {
                for (const s of e.data.friendslist?.friends ?? [])
                  (0, Dr.S$u)(s.efriendrelationship) &&
                    d.add(new Bt.b(s.ulfriendid).GetAccountID());
              }),
              (Vr = (e) => d.has(e));
          }
          return Vr;
        }
        var Vi = Object.defineProperty,
          Ci = Object.getOwnPropertyDescriptor,
          tr = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ci(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && Vi(t, e, a), a;
          };
        const _i = 4,
          ts = 500,
          es = 10,
          gi = class Er {
            m_mapChats = new Map();
            m_cmInterface;
            SetCMInterface(t) {
              this.m_cmInterface = t;
            }
            GetCMInterface() {
              return this.m_cmInterface;
            }
            GetChat(t, e) {
              return this.m_mapChats.get(t) || this.m_mapChats.get(e);
            }
            GetOrCreateChat(t, e) {
              let s = this.GetChat(t, e);
              return s || ((s = new er()), this.m_mapChats.set(t || e, s)), s;
            }
            static s_Singleton;
            static Get() {
              return (
                Er.s_Singleton || (Er.s_Singleton = new Er()), Er.s_Singleton
              );
            }
            constructor() {
              (0, L.Gn)(this);
            }
          };
        tr([L.sH], gi.prototype, "m_mapChats", 2);
        let Cr = gi;
        class er {
          m_ulBroadcastChannelID = "";
          m_ulChatID = "";
          m_strFlairGroupID = "";
          m_bAutoScroll = !0;
          m_ulBroadcastID = "";
          m_ulBroadcastSteamID = "";
          m_tsFirstRequest = null;
          m_nFromFirstRequestMS = 0;
          m_nNextChatTS = 0;
          m_cConsecutiveErrors = 0;
          m_nNudgeFactorMS = 0;
          m_nLastSleepMS = 0;
          m_bReconnecting = !1;
          m_strChatURL;
          m_unInstanceID = Math.floor(Math.random() * 4294967296);
          m_strUserSteamID = "";
          m_regexUserEmoticons = null;
          m_chatScheduledFunc = null;
          m_steamInterface = null;
          m_textFilterStore = null;
          m_bHasAddedWelcomeChat = !1;
          m_mapMutedUsers = {};
          m_mapChannelModeratorUsers = new Map();
          m_mapBroadcastModeratorUsers = new Map();
          m_nRateLimitSeconds = 0;
          m_bRateLimited = !1;
          m_rgChatMessages = [];
          m_rgAnnouncements = [];
          m_latestAnnouncement = null;
          constructor() {
            (0, L.Gn)(this),
              (this.m_steamInterface = this.CreateSteamInterface());
          }
          InitTextFilter() {
            this.m_textFilterStore = new Ke({ BIsFriend: qi() });
            let t = 0;
            k.iA.steamid !== "" && (t = new Bt.b(k.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(t, null, new xt.A());
          }
          get TextFilterStore() {
            return this.m_textFilterStore;
          }
          GetBroadcastSteamID() {
            return this.m_ulBroadcastSteamID;
          }
          GetUserSteamID() {
            return this.m_strUserSteamID;
          }
          CreateSteamInterface() {
            const t = (0, Wt.q)() ?? Cr.Get().GetCMInterface();
            return (
              t || (0, Vt.C)(new De.D(k.TS.WEBAPI_BASE_URL, k.iA.webapi_token))
            );
          }
          StartForSteamID(t, e) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastSteamID = t),
              (this.m_ulBroadcastID = e),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(t) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastChannelID = t),
              (this.m_strUserSteamID = k.iA.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(t) {
            const e = t.trim();
            if (e.length != 0)
              try {
                const s = v.w.Init(pt.Lw);
                s.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  message: e,
                  instance_id: this.m_unInstanceID.toString(),
                });
                const a = await pt.DK.PostChatMessage(
                    this.m_steamInterface.GetServiceTransport(),
                    s,
                  ),
                  u = {
                    result: a.GetEResult(),
                    cooldown_time_seconds: a.Body().cooldown_time_seconds(),
                    in_game: a.Body().in_game(),
                    persona_name: a.Body().persona_name(),
                  };
                if (u && u.result && u.result != J.R) {
                  let f = "";
                  u.result == J.f4
                    ? (f = (0, H.we)("#BroadcastChat_YouMuted"))
                    : u.result == J.h_
                      ? (f = (0, H.we)(
                          "#BroadcastChat_Cooldown",
                          u.cooldown_time_seconds,
                        ))
                      : (f = (0, H.we)("#BroadcastChat_FailedToSendMsg", e)),
                    this.m_rgChatMessages.push({
                      type: rt.X8.Error,
                      msg: f,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: u.in_game,
                      persona_name: u.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = u.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: rt.X8.Error,
                  msg: (0, H.we)("#BroadcastChat_FailedToSendMsg", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(t) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const e = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, k.KC)(),
                  notoken: 1,
                },
                s = await D().get(
                  `${k.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  { params: e, withCredentials: !0, cancelToken: t?.token },
                );
              (!t || !t.token.reason) &&
                (0, L.h5)(() => {
                  const a = s.data;
                  (this.m_strChatURL = a.view_url_template),
                    (this.m_ulChatID = a.chat_id),
                    (this.m_strFlairGroupID =
                      a.flair_group_ids && a.flair_group_ids[0]),
                    a.blocked && console.log("User is blocked from chat"),
                    a.steamid && (this.m_strUserSteamID = a.steamid),
                    a.emoticons && this.SetOwnedEmoticons(a.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: rt.X8.Notification,
                        msg: (0, H.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    a.moderators_steamid &&
                      a.moderators_steamid.forEach((u) =>
                        this.m_mapBroadcastModeratorUsers.set(u, !0),
                      ),
                    (this.m_chatScheduledFunc = new yr.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (e) {
              console.error(e), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const t = v.w.Init(N);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let e = await nr.JoinChat(
                this.m_steamInterface.GetServiceTransport(),
                t,
              );
              if (!e.Body().chat_id || !e.Body().view_url_template) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = e.Body().view_url_template()),
                (this.m_ulChatID = e.Body().chat_id()),
                (this.m_strFlairGroupID =
                  e.Body().flair_group_ids() && e.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: rt.X8.Notification,
                  msg: (0, H.we)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new yr.LU()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (t) {
              console.error(t), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const t = v.w.Init(A);
            t.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const s = (
                await nr.GetChatModerators(
                  this.m_steamInterface.GetServiceTransport(),
                  t,
                )
              )
                .Body()
                .results(),
              a = new Map();
            s.forEach((u) => {
              a.set(u.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = a);
          }
          ReplaceChatAnnouncementIfAny(t) {
            t.announcements?.length > 0
              ? ((this.m_rgAnnouncements = t.announcements.reverse()),
                (!this.m_latestAnnouncement ||
                  JSON.stringify(this.m_latestAnnouncement) !=
                    JSON.stringify(
                      this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
                    )) &&
                  (this.m_latestAnnouncement =
                    this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
              : this.m_rgAnnouncements.length > 0 &&
                ((this.m_rgAnnouncements = []),
                (this.m_latestAnnouncement = null));
          }
          async RequestLoop() {
            const t = {},
              e = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            e == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (t.t = this.m_nNextChatTS);
            try {
              const a = (await D().get(e, { params: t })).data;
              this.m_cConsecutiveErrors = 0;
              const u = a.messages
                .map((S) => ({
                  ...S,
                  type: rt.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((S) => !this.IsUserMutedLocally(S.steamid));
              this.m_rgChatMessages.push(...u),
                this.ReplaceChatAnnouncementIfAny(a);
              const f = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > f &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - f,
                  ),
                a.muted)
              )
                for (const S of a.muted) {
                  const G =
                    S.muted == this.m_strUserSteamID
                      ? (0, H.we)("#BroadcastChat_YouMuted", S.persona_name)
                      : (0, H.we)("#BroadcastChat_UserMuted", S.persona_name);
                  this.m_rgChatMessages.push({
                    type: rt.X8.Notification,
                    msg: G,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (a.remove_msgs)
                for (const S of a.remove_msgs)
                  this.RemoveUserMessagesLocal(S.steamid);
              let y = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                a.initial_delay
              ) {
                if (a.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + a.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = a.next_request),
                  (y = a.initial_delay);
              } else {
                if (a.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  a.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = a.next_request),
                  (y =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = y),
                y < 0 && (y = 0),
                this.m_chatScheduledFunc.Schedule(y, this.RequestLoop);
            } catch {
              if (
                (console.log(
                  "Failed to get chat messages. Previous sleep set to: " +
                    this.m_nLastSleepMS +
                    " firstReq: " +
                    this.m_tsFirstRequest +
                    " firstFromRequest: " +
                    this.m_nFromFirstRequestMS +
                    " nudge: " +
                    this.m_nNudgeFactorMS,
                ),
                this.m_cConsecutiveErrors++,
                (this.m_nNudgeFactorMS += es),
                this.m_cConsecutiveErrors >= _i)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: rt.X8.Error,
                    msg: (0, H.we)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                  return;
                }
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(ts, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(t) {
            let e = [];
            for (let a = 0; a < t.length; a++) {
              let u = t[a];
              u.length >= 2 && u[0] == ":"
                ? e.push(u.substr(1, u.length - 2))
                : e.push(u);
            }
            let s = ":(" + e.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(s, "g");
          }
          async UpdateBroadcastChatModerator(t, e, s) {
            {
              const a = new FormData();
              a.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                a.append("moderatorsteamid", t),
                a.append("bAdd", e ? "1" : "0"),
                a.append("sessionid", (0, k.KC)());
              try {
                await D().post(
                  `${k.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a,
                ),
                  this.m_mapBroadcastModeratorUsers.set(t, e);
                const u = (0, H.we)(
                  e
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  s,
                );
                this.m_rgChatMessages.push({
                  type: rt.X8.Notification,
                  msg: u,
                });
              } catch {
                const u = (0, H.we)(
                  e
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  s,
                );
                this.m_rgChatMessages.push({ type: rt.X8.Error, msg: u });
              }
            }
          }
          async UpdateUserChatBan(t, e, s, a, u, f) {
            const y = this.m_ulBroadcastSteamID,
              S = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const G = v.w.Init(Gt);
              G.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: t,
                duration: s * 3600,
                permanent: a,
                undo: f,
              }),
                await nr.AddChatBan(
                  this.m_steamInterface.GetServiceTransport(),
                  G,
                );
            } else {
              const G = new FormData();
              G.append("broadcaststeamid", y),
                G.append("issuersteamid", S),
                G.append("chattersteamid", t),
                G.append("bantype", e),
                G.append("duration", s.toString()),
                G.append("perm", a ? "1" : "0"),
                G.append("sessionid", (0, k.KC)());
              try {
                await D().post(
                  `${k.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  G,
                ),
                  e == pt.sW.rx
                    ? delete this.m_mapMutedUsers[t]
                    : (this.m_mapMutedUsers[t] = u);
              } catch {
                console.log("Failed to update mute for " + u);
              }
            }
          }
          async MuteUserForSession(t, e) {
            if (t == this.m_strUserSteamID || this.m_ulBroadcastSteamID == t)
              return;
            let s = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[t]) {
              this.m_mapMutedUsers[t] = e;
              try {
                const a = v.w.Init(pt.hW);
                a.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: t,
                  muted: !0,
                }),
                  await pt.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    a,
                  );
              } catch {
                s &&
                  (this.m_rgChatMessages.push({
                    type: rt.X8.Error,
                    msg: (0, H.we)("#BroadcastChat_UserMuteFailed", e),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[t]);
              }
            }
            s ||
              this.m_rgChatMessages.push({
                type: rt.X8.Notification,
                msg: (0, H.we)("#BroadcastChat_UserMutedLocal", e),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(t, e) {
            if (t == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[t] && delete this.m_mapMutedUsers[t],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                const a = v.w.Init(pt.hW);
                a.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: t,
                  muted: !1,
                }),
                  await pt.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    a,
                  ),
                  this.m_rgChatMessages.push({
                    type: rt.X8.Notification,
                    msg: (0, H.we)("#BroadcastChat_UserUnmutedLocal", e),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
              } catch {
                this.m_rgChatMessages.push({
                  type: rt.X8.Error,
                  msg: (0, H.we)("#BroadcastChat_UserUnmuteFailed", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: rt.X8.Notification,
                msg: (0, H.we)("#BroadcastChat_UserUnmutedLocal", e),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(t) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (e) => e.steamid !== t,
            );
          }
          async RemoveUserMessagesServer(t, e) {
            if (t != this.m_strUserSteamID)
              try {
                const s = v.w.Init(pt.ku);
                s.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: t }),
                  await pt.DK.RemoveUserChatText(
                    this.m_steamInterface.GetServiceTransport(),
                    s,
                  );
              } catch {
                this.m_rgChatMessages.push({
                  type: rt.X8.Error,
                  msg: (0, H.we)("#BroadcastChat_RemoveMessagesFailed", e),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(t) {
            const e = v.w.Init(pt.Mn);
            e.SetBodyFields({
              chat_id: this.m_ulChatID,
              flair: `^${this.m_strFlairGroupID}^:${t}:`,
            }),
              await pt.DK.UpdateChatMessageFlair(
                this.m_steamInterface.GetServiceTransport(),
                e,
              );
          }
          IsUserMutedLocally(t) {
            return !!this.m_mapMutedUsers[t];
          }
          BIsUserBroadcastModerator(t) {
            return this.m_mapBroadcastModeratorUsers.has(t);
          }
          IsUserBroadcaster(t) {
            return t === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        tr([L.sH], er.prototype, "m_mapChannelModeratorUsers", 2),
          tr([L.sH], er.prototype, "m_mapBroadcastModeratorUsers", 2),
          tr([L.sH], er.prototype, "m_nRateLimitSeconds", 2),
          tr([L.sH], er.prototype, "m_bRateLimited", 2),
          tr([L.sH], er.prototype, "m_rgChatMessages", 2),
          tr([L.sH], er.prototype, "m_latestAnnouncement", 2),
          tr([Le.o], er.prototype, "FetchChatModerators", 1),
          tr([Le.o], er.prototype, "RequestLoop", 1),
          tr([Le.o], er.prototype, "MuteUserForSession", 1);
        var _r = h(7582),
          pi = h(65804),
          rs = Object.defineProperty,
          is = Object.getOwnPropertyDescriptor,
          ss = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? is(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && rs(t, e, a), a;
          };
        const bi = class Ze {
          constructor() {
            (0, L.Gn)(this);
          }
          m_mapBroadcasterSteamIDToEvents = new Map();
          m_mapBroadcasterSteamIDData = new Map();
          static GetBBCodeParam(t, e, s = "") {
            const u = new RegExp(`\\W${e}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(t);
            return u ? u[1] : s;
          }
          static ParseCalendarEventPresentersFromText(t) {
            const e =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              s = new Array();
            for (;;) {
              const a = e.exec(t);
              if (a === null) break;
              const u = a[1],
                f = a[2],
                y = Ze.GetBBCodeParam(u, "steamid"),
                S = {
                  steamID: y ? new Bt.b(y) : void 0,
                  name: Ze.GetBBCodeParam(u, "name"),
                  title: Ze.GetBBCodeParam(u, "title"),
                  company: Ze.GetBBCodeParam(u, "company"),
                  photo: Ze.GetBBCodeParam(u, "photo"),
                  bio: f,
                };
              s.push(S);
            }
            return s;
          }
          static ParseEventModelPresenters(t, e) {
            const s = t.GetDescriptionWithFallback(e);
            return Ze.ParseCalendarEventPresentersFromText(s);
          }
          static ParseEventAppReferencesFromText(t) {
            const e = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              s = new Set();
            for (;;) {
              const a = e.exec(t);
              if (a === null) break;
              const u = a[1];
              s.add(Number(u));
            }
            return s;
          }
          static ParseEventModelAppReferences(t, e) {
            const s = t.GetDescriptionWithFallback(e),
              a = Ze.ParseEventAppReferencesFromText(s);
            if (t.jsondata?.referenced_appids)
              for (const u of t.jsondata.referenced_appids) a.add(u);
            return a;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(t) {
            const e = _r.HD.GetTimeNowWithOverride(),
              a = t.GetCalendarItemsInTimeRange(e - 3600, e);
            for (const S of a.rgCalendarItems)
              pi.O3.QueueLoadPartnerEvent(S.clanid, S.unique_id);
            const u = a.rgCalendarItems.map((S) =>
                pi.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  Bt.b.InitFromClanID(S.clanid),
                  S.unique_id,
                  0,
                ),
              ),
              f = await Promise.all(u),
              y = new Map();
            for (const S of f)
              if (S && !(S.endTime && S.endTime < e))
                for (const G of S.GetBroadcastWhitelistAsSteamIDs())
                  y.has(G) ? y.get(G).push(S) : y.set(G, [S]);
            return y;
          }
          IsBroadcasterAlreadyBound(t, e) {
            const s = this.m_mapBroadcasterSteamIDToEvents.get(t),
              a = s ? s.length : 0;
            if ((e ? e.length : 0) != a) return !1;
            for (let f = 0; f < a; f++) if (s[f] != e[f].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(t, e) {
            let s = new Map();
            for (const a of t) {
              if (!a) continue;
              const u = Ze.ParseEventModelPresenters(a, e);
              for (const f of u)
                f.steamID && s.set(f.steamID.ConvertTo64BitString(), f);
            }
            return s;
          }
          RemoveCachedDataIfNotInMap(t) {
            const e = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((s, a) => {
              t.has(a) || e.push(a);
            }),
              e.forEach((s) => {
                this.m_mapBroadcasterSteamIDData.delete(s),
                  this.m_mapBroadcasterSteamIDToEvents.delete(s);
              });
          }
          static BuildAppIDRefsForEventList(t, e) {
            const s = new Set();
            for (const a of t)
              Ze.ParseEventModelAppReferences(a, e).forEach((f) => s.add(f));
            return Array.from(s);
          }
          UpdateCachedDataFromEvents(t, e) {
            t.forEach((s, a) => {
              if (this.IsBroadcasterAlreadyBound(a, s)) return;
              const u = {
                m_mapPresenters: Ze.BuildSteamIDToPresenterMapFromEventList(
                  s,
                  e,
                ),
                m_rgAppIDs: Ze.BuildAppIDRefsForEventList(s, e),
              };
              this.m_mapBroadcasterSteamIDData.set(a, u),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  a,
                  s.map((f) => f.GID),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(t, e) {
            const s = await this.BuildBroadcasterSteamIDToActiveEventMap(t);
            this.RemoveCachedDataIfNotInMap(s),
              this.UpdateCachedDataFromEvents(s, e);
          }
          GetPresenterMapForBroadcasterSteamID(t) {
            return this.m_mapBroadcasterSteamIDData.get(t)?.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(t) {
            return this.m_mapBroadcasterSteamIDData.get(t)?.m_rgAppIDs;
          }
        };
        ss([L.sH], bi.prototype, "m_mapBroadcasterSteamIDData", 2);
        let ns = bi;
        const yi = new ns();
        var as = h(90024),
          mr = h.n(as),
          Ve = h(99047),
          wi = h(58534),
          os = h(96197),
          Mi = h(88656),
          ti = h(88003),
          ls = h(87242),
          ei = h(42780),
          cs = h(94276),
          ds = h(62179),
          us = h(2801);
        function ri(d) {
          return (0, n.jsx)(ti.x_, {
            onEscKeypress: d.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, n.jsx)(fs, {
              redirectURL: d.redirectURL,
              guestOption: d.guestOption,
            }),
          });
        }
        function Rn(d) {
          const { redirectURL: t = window.location.href } = d;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(ri, { redirectURL: t }),
          });
        }
        function ms() {
          (0, ti.pg)(
            (0, n.jsx)(ri, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, H.we)("#Login_SignInTitle") },
          );
        }
        function Tn(d, t) {
          ShowModalDialog(
            jsx(ri, { ownerWin: window, redirectURL: d, guestOption: t }),
            window,
            { strTitle: Localize("#Login_SignInTitle") },
          );
        }
        function fs(d) {
          const { redirectURL: t, guestOption: e } = d,
            [s] = (0, mt.useState)(
              new ds.x(
                new De.D(k.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [a, u] = (0, mt.useState)(!1),
            f = (y) => {
              y == ls.wI.k_PrimaryDomainFail
                ? u(!0)
                : window.location.assign(t);
            };
          return (0, n.jsx)("div", {
            children: a
              ? (0, n.jsx)(ei.Fn, {})
              : (0, n.jsx)(ei.YN, {
                  autoFocus: !0,
                  transport: s,
                  platform: cs.SS.tS,
                  onComplete: f,
                  redirectUrl: t,
                  theme: "modal",
                  children: e && (0, n.jsx)(ei.Mk, { redirectURL: t }),
                }),
          });
        }
        var hs = h(44814),
          gs = h(33543),
          Kr = h.n(gs);
        const ps = () =>
            (0, n.jsx)("div", {
              className: Kr().FriendsListInsetShadowCtn,
              children: (0, n.jsx)("div", {
                className: Kr().FriendListInsetShadowTop,
              }),
            }),
          bs = () =>
            (0, n.jsx)("div", {
              className: Kr().FriendsListInsetShadowCtn,
              children: (0, n.jsx)("div", {
                className: Kr().FriendListInsetShadowBottom,
              }),
            });
        var Ye = h(36118),
          Dt = h(36707),
          ys = h(63508),
          It = h.n(ys),
          je = h(22950),
          Bi = h(29630),
          ws = Object.defineProperty,
          Ms = Object.getOwnPropertyDescriptor,
          Je = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ms(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && ws(t, e, a), a;
          };
        const fr = class Ai {
          constructor() {
            (0, L.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const t = new Ai();
            return (
              (t.giveaway_id = this.giveaway_id),
              (t.seconds_until_drawing = this.seconds_until_drawing),
              (t.rtime_start = this.rtime_start),
              (t.rtime_end = this.rtime_end),
              (t.closed = this.closed),
              (t.winner_count = this.winner_count),
              t
            );
          }
        };
        Je([L.sH], fr.prototype, "giveaway_id", 2),
          Je([L.sH], fr.prototype, "seconds_until_drawing", 2),
          Je([L.sH], fr.prototype, "rtime_start", 2),
          Je([L.sH], fr.prototype, "rtime_end", 2),
          Je([L.sH], fr.prototype, "closed", 2),
          Je([L.sH], fr.prototype, "winner_count", 2);
        let ii = fr;
        const si = class xr {
          constructor() {
            (0, L.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(t, e) {
            return t + "_" + e;
          }
          GetInfoByInstance(t, e) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(t, e),
            );
          }
          GetNextDrawChangeCallback(t) {
            return (
              this.m_mapNextDrawChangeCallback.has(t) ||
                this.m_mapNextDrawChangeCallback.set(t, new yr.lu()),
              this.m_mapNextDrawChangeCallback.get(t)
            );
          }
          CopyToGiveaway(t, e) {
            e.closed != t.closed && (e.closed = t.closed),
              e.giveaway_id != t.giveaway_id && (e.giveaway_id = t.giveaway_id),
              e.rtime_start != t.rtime_start && (e.rtime_start = t.rtime_start),
              e.rtime_end != t.rtime_end && (e.rtime_end = t.rtime_end),
              e.winner_count != t.winner_count &&
                (e.winner_count = t.winner_count),
              e.seconds_until_drawing != t.seconds_until_drawing &&
                (e.seconds_until_drawing = t.seconds_until_drawing);
          }
          async ReloadGiveaway(t, e) {
            if (!t) return null;
            let s = k.TS.STORE_BASE_URL + "prizes/nextdraw/" + t,
              a = null,
              u = { origin: self.origin };
            return (
              (a = await D().get(s, { params: u })),
              (0, L.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(t) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(t, new ii()),
                  this.CopyToGiveaway(
                    a.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(t),
                  ),
                  e !== void 0)
                ) {
                  const f = this.GetKey(t, e);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(f) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      f,
                      new ii(),
                    ),
                    this.CopyToGiveaway(
                      a.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(f),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(t).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(t),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(t)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              xr.s_Singleton ||
                ((xr.s_Singleton = new xr()), xr.s_Singleton.Init()),
              xr.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let t = (0, k.Tc)("giveawaynextdraw", "application_config");
              if (t && t.giveaway_id) {
                let e = new ii();
                this.CopyToGiveaway(t, e),
                  this.m_mapGiveawayIDToNextDrawInfo.set(t.giveaway_id, e);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        Je([L.sH], si.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          Je([L.XI], si.prototype, "CopyToGiveaway", 1);
        let Nr = si;
        const Ur = class di {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = di.s_GlobalInstance),
              (di.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(t, e) {
            if ((this.ClearRefreshInterval(), !t.closed)) {
              let s =
                t.seconds_until_drawing <= 0 && t.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(e, s);
            }
          }
          SetupCountDown(t, e) {
            t > 0 && (this.m_intervalCountDownID = window.setInterval(e, 1e3));
          }
        };
        Je([Le.o], Ur.prototype, "ClearRefreshInterval", 1),
          Je([Le.o], Ur.prototype, "ClearCountDown", 1),
          Je([Le.o], Ur.prototype, "SetupRefreshDataInterval", 1),
          Je([Le.o], Ur.prototype, "SetupCountDown", 1);
        let Bs = Ur;
        function vi(d, t) {
          const e = Nr.Get().GetInfoByInstance(d, t.m_myInstanceNumber);
          (e.seconds_until_drawing -= 1),
            e.seconds_until_drawing == 0 && t.ClearCountDown();
        }
        function vs(d, t) {
          const e = Nr.Get().GetInfoByInstance(d, t.m_myInstanceNumber);
          e &&
            e.BIsValid() &&
            e.seconds_until_drawing <= 0 &&
            !e.closed &&
            (t.ClearCountDown(),
            Nr.Get()
              .ReloadGiveaway(d, t.m_myInstanceNumber)
              .then((s) => {
                t.SetupCountDown(s.seconds_until_drawing, () => vi(d, t));
              }));
        }
        function Is(d) {
          const [t] = (0, mt.useState)(new Bs()),
            e = (0, ze.CH)();
          (0, mt.useEffect)(
            () => (
              Nr.Get()
                .ReloadGiveaway(d, t.m_myInstanceNumber)
                .then((y) => {
                  t.SetupRefreshDataInterval(y, () => vs(d, t)),
                    t.SetupCountDown(y.seconds_until_drawing, () => vi(d, t)),
                    e();
                }),
              () => {
                t.ClearRefreshInterval(), t.ClearCountDown();
              }
            ),
            [t, d, e],
          );
          const s = Nr.Get().GetInfoByInstance(d, t.m_myInstanceNumber),
            [a, u, f] = (0, Kt.q3)(() => [
              s?.winner_count,
              s?.closed,
              s?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !s || s.giveaway_id == null || !s.BStarted() || a === void 0,
            winner_count: a,
            closed: u,
            seconds_until_drawing: f,
          };
        }
        var zs = h(11587),
          Yr = h(53107),
          Ii = h(53113),
          js = h(8287),
          ke = h.n(js);
        function xs(d) {
          const { latestAnnouncement: t } = d;
          return t?.type == "giveaway_draw"
            ? (0, n.jsx)(zi, { latestWinner: t })
            : null;
        }
        function zi(d) {
          const {
              latestWinner: t,
              className: e,
              strActionButton: s,
              strActionClassname: a,
            } = d,
            u = t.winners_info?.length > 0 ? t.winners_info[0].accountid : 0,
            [f, y] = mt.useState(u),
            S =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            G = (0, Ii.L$)(
              `${Bi.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            Be = (0, Ii.L$)(
              `${Bi.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            We = Is(t.giveaway_gid);
          let Fe =
            We.bLoadingGiveawayInfo || We.closed
              ? null
              : We.seconds_until_drawing;
          const Ne = u === k.iA.accountid;
          mt.useEffect(() => {
            f != u && setTimeout(() => y(u), 1500);
          }, [u, f]);
          const _e =
            t.winners_info?.length > 0 && t.winners_info[0].persona
              ? t.winners_info[0].persona
              : (0, H.we)("#GA2022_UnknownPersonaName");
          return (0, n.jsx)(Yr.uU, {
            href: S,
            className: e,
            children: (0, n.jsxs)("div", {
              className: (0, Dt.A)({
                [ke().GiveawayWinnerBox]: !0,
                [ke().GiveawayWinnerAnnounced]: f === u,
              }),
              children: [
                (0, n.jsx)("div", {
                  className: ke().GiveawayWinnerBoxLeft,
                  children: (0, n.jsx)("img", {
                    className: ke().GiveawayWinnerArt,
                    src: G,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: ke().GiveawayWinnerBoxRight,
                  children: [
                    f !== u &&
                      (0, n.jsx)("div", {
                        className: (0, Dt.A)(ke().GiveawayWinnerText),
                        children: (0, H.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, n.jsx)("br", {}),
                        ),
                      }),
                    f === u &&
                      (0, n.jsx)("div", {
                        className: (0, Dt.A)(
                          ke().GiveawayWinnerText,
                          ke().GiveawayWinnerAnnounced,
                        ),
                        children: (0, H.PP)(
                          Ne
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          _e,
                          (0, n.jsx)("br", {}),
                        ),
                      }),
                    Fe > 0 &&
                      (0, n.jsx)("div", {
                        className: ke().GiveawayWinnerCountdown,
                        children: (0, H.PP)("#GA2022_Congrats_NextDraw", Fe),
                      }),
                  ],
                }),
                (0, n.jsx)("img", {
                  className: ke().GiveawayWinnerQuestion,
                  src: Be,
                }),
                !!s &&
                  (0, n.jsx)("div", {
                    className: a,
                    children: Ne ? (0, H.we)("#GA2022_YouWonNextSteps") : s,
                  }),
              ],
            }),
          });
        }
        function Os(d, t) {
          const [e, s] = (0, Kt.q3)(() => [
              t?.steamid,
              je.es.GetBroadcast(t?.steamid)?.m_ulBroadcastID,
            ]),
            [a, u] = mt.useState(null);
          mt.useEffect(() => {
            let y = null;
            return (
              (e || s) &&
                ((y = Cr.Get().GetOrCreateChat(s, e)),
                y.StartForSteamID(e, s),
                u(y)),
              () => {
                y && (y.Stop(), u(null));
              }
            );
          }, [e, s]);
          const f = (0, Kt.q3)(() => a?.m_latestAnnouncement || null);
          if (f?.type == "giveaway_draw") {
            const y = f;
            if (y.giveaway_gid == d) return y;
          }
          return null;
        }
        function Ds(d) {
          const { gidGiveaway: t, stream: e } = d,
            s = Os(t, e),
            a = (0, zs.h3)("GameAwardDrop2022");
          let u = null,
            f = ke().GiveawayRegisterButton;
          return (
            k.iA.logged_in
              ? a?.registered
                ? ((u = (0, H.we)("#GA2022_AlreadyRegistered")),
                  (f = ke().GiveawayAlreadyRegistered))
                : (u = (0, H.we)("#GA2022_RegisterToWin"))
              : (u = (0, H.we)("#GA2022_RegisterLoginToWin")),
            s
              ? (0, n.jsx)(zi, {
                  latestWinner: s,
                  className: ke().InViewerBar,
                  strActionButton: u,
                  strActionClassname: f,
                })
              : null
          );
        }
        var $e = h(71421),
          Ws = Object.defineProperty,
          Fs = Object.getOwnPropertyDescriptor,
          vr = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Fs(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && Ws(t, e, a), a;
          };
        const ji = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          Gn = null,
          Ss = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function As(d, t, e) {
          return e
            ? "presenter"
            : t.GetBroadcastSteamID() === d
              ? "broadcaster"
              : t.BIsUserBroadcastModerator(d)
                ? "moderator"
                : "";
        }
        const Ns = (d) => {
            const { userType: t, msg: e, presenterInfo: s } = d;
            if (t === "presenter")
              return (0, n.jsx)("span", {
                children: (0, n.jsx)(hs.fI, {
                  name: s.name,
                  title: s.title,
                  photo: s.photo,
                  company: s.company,
                  bioString: s.bio,
                  children: (0, n.jsx)("a", {
                    className: (0, Dt.A)(
                      It().MessageName,
                      It().MessagePresenter,
                    ),
                    href: k.TS.COMMUNITY_BASE_URL + "profiles/" + e.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: e.persona_name,
                  }),
                }),
              });
            {
              let a = null;
              return (
                t === "broadcaster"
                  ? (a = It().MessageBroadcaster)
                  : t === "moderator" && (a = It().MessageModerator),
                (0, n.jsx)("span", {
                  children: (0, n.jsx)("a", {
                    className: (0, Dt.A)(It().MessageName, a),
                    href: k.TS.COMMUNITY_BASE_URL + "profiles/" + e.steamid,
                    "data-miniprofile": "s" + e.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: e.persona_name,
                  }),
                })
              );
            }
          },
          Us = (d) => {
            switch (d.userType) {
              case "presenter":
                return (0, n.jsx)($e.Gq, {
                  toolTipContent: (0, H.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, n.jsx)("span", {
                    className: It().RoleFlairContainer,
                    children: (0, n.jsx)(Ye.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, n.jsx)($e.Gq, {
                  toolTipContent: (0, H.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, n.jsx)("span", {
                    className: It().RoleFlairContainer,
                    children: (0, n.jsx)(Ye.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, n.jsx)($e.Gq, {
                  toolTipContent: (0, H.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, n.jsx)("span", {
                    className: It().RoleFlairContainer,
                    children: (0, n.jsx)(Ye.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let dr = class extends mt.Component {
          constructor(d) {
            super(d), (0, L.Gn)(this);
          }
          m_chat = null;
          messagesContainer = mt.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(d) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== d.steamID ||
                this.props.broadcastID !== d.broadcastID ||
                this.props.broadcastChannelID !== d.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = Cr.Get().GetOrCreateChat(
                this.props.broadcastChannelID,
                this.props.steamID,
              )),
              this.props.broadcastChannelID)
            )
              this.m_chat.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let d = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, d),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(d) {
            return !!d.match(Ss);
          }
          AddLinksEmoticons(d, t) {
            let e = ji;
            t && (e = this.m_chat.GetUserEmoticons());
            let s = d.split(ji);
            const a = [];
            for (let u = 0; u < s.length; u += 1)
              u % 2 === 1
                ? a.push((0, n.jsx)(os.n, { emoticon: s[u], large: !0 }, u))
                : a.push(s[u]);
            return a;
          }
          HandleScroll(d) {
            const t = this.props.bInvertLayout
              ? d.currentTarget.scrollTop < 6
              : d.currentTarget.scrollTop + d.currentTarget.clientHeight >=
                d.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = t);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(d, t) {
            if (t.type !== rt.X8.Chat) return null;
            const e = [],
              s = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              a = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (k.iA && k.iA.is_support) || s || a
                ? e.push(
                    (0, n.jsx)(
                      Ve.kt,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            t.steamid,
                            t.persona_name,
                          ),
                        children: (0, H.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, n.jsx)(
                      Ve.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            pt.sW.XP,
                            12,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, H.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, n.jsx)(
                      Ve.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            pt.sW.XP,
                            24,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, H.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, n.jsx)(
                      Ve.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            pt.sW.XP,
                            168,
                            !1,
                            t.persona_name,
                          ),
                        children: (0, H.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, n.jsx)(
                      Ve.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            pt.sW.XP,
                            0,
                            !0,
                            t.persona_name,
                          ),
                        children: (0, H.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, n.jsx)(
                      Ve.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            t.steamid,
                            pt.sW.rx,
                            0,
                            !1,
                            t.persona_name,
                            !0,
                          ),
                        children: (0, H.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(t.steamid)
                  ? e.push(
                      (0, n.jsx)(
                        Ve.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              t.steamid,
                              t.persona_name,
                            ),
                          children: (0, H.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : e.push(
                      (0, n.jsx)(
                        Ve.kt,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              t.steamid,
                              t.persona_name,
                            ),
                          children: (0, H.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((k.iA && k.iA.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                t.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                  ? e.push(
                      (0, n.jsx)(
                        Ve.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !1,
                              t.persona_name,
                            ),
                          children: (0, H.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : e.push(
                      (0, n.jsx)(
                        Ve.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !0,
                              t.persona_name,
                            ),
                          children: (0, H.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              e.length
                ? (0, _.lX)(
                    (0, n.jsxs)(Ve.tz, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: It().SelectedUserNameCtn,
                          children: [
                            (0, H.we)("#BroadcastChat_User"),
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)("span", {
                              className: It().SelectedUserName,
                              children: t.persona_name,
                            }),
                          ],
                        }),
                        e,
                      ],
                    }),
                    d,
                  )
                : null
            );
          }
          GetTypeClassName(d) {
            return d.type === rt.X8.Notification
              ? It().MessageNotification
              : d.type === rt.X8.Error
                ? It().MessageError
                : It().MessageChat;
          }
          FormatMessage(d, t) {
            if (d.type === rt.X8.Chat) {
              let e = t ? t.FilterText(d.steamid, d.msg) : d.msg;
              return this.AddLinksEmoticons(e, !1);
            } else return d.msg;
          }
          RenderUserChatLine(d, t, e) {
            let s = e ? e.get(d.steamid) : void 0;
            const a =
              d.type === rt.X8.Chat ? As(d.steamid, this.m_chat, s) : "";
            return (0, n.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(d),
                onContextMenu: (u) => this.OnContextMenu(u, d),
                children: [
                  d.type === rt.X8.Chat && (0, n.jsx)(Us, { userType: a }),
                  d.flair &&
                    (0, n.jsx)("span", {
                      className: It().FlairContainer,
                      children: this.AddLinksEmoticons(d.flair, !1),
                    }),
                  d.type === rt.X8.Chat &&
                    (0, n.jsx)(Ns, { userType: a, msg: d, presenterInfo: s }),
                  d.type === rt.X8.Chat &&
                    this.m_chat.GetBroadcastSteamID() === d.steamid &&
                    (0, n.jsx)("span", {
                      className: `${It().MessageNotification} ${It().MessageContents}`,
                      children: ` (${(0, H.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  d.type === rt.X8.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(d.steamid) &&
                    (0, n.jsx)("span", {
                      className: `${It().MessageNotification} ${It().MessageContents}`,
                      children: ` (${(0, H.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, n.jsxs)("span", {
                    className: `${It().MessageContents} ${this.AddLinksEmoticons(d.msg, !1).filter((u) => u && typeof u == "string").length ? "" : It().EmoticonsOnly}`,
                    children: [
                      d.type === rt.X8.Chat ? " : " : "",
                      this.FormatMessage(d, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              d.instance_id + "_" + d.client_ts + "_" + t,
            );
          }
          render() {
            const {
                hidden: d,
                bPartnerMemberOnlyChat: t,
                bInvertLayout: e,
                onSignIn: s,
              } = this.props,
              a = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              u = e ? a.reverse() : a,
              f = this.m_chat
                ? yi.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              y = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, n.jsxs)("div", {
              className: (0, Dt.A)(It().ChatPanel, "ChatPanel"),
              style: d ? { display: "none" } : void 0,
              children: [
                (0, n.jsx)(xs, { latestAnnouncement: y }),
                e &&
                  !!this.m_chat &&
                  (0, n.jsx)(xi, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: t,
                    onSignIn: s,
                  }),
                (0, n.jsx)(ps, {}),
                (0, n.jsx)("div", {
                  className: (0, Dt.A)(
                    `${It().ChatMessages} ${mr().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: u.map((S, G) => this.RenderUserChatLine(S, G, f)),
                }),
                (0, n.jsx)(bs, {}),
                !e &&
                  !!this.m_chat &&
                  (0, n.jsx)(xi, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: t,
                    onSignIn: s,
                  }),
              ],
            });
          }
        };
        vr([L.sH], dr.prototype, "m_chat", 2),
          vr([ze.oI], dr.prototype, "StartChat", 1),
          vr([ze.oI], dr.prototype, "HandleScroll", 1),
          vr([ze.oI], dr.prototype, "OnContextMenu", 1),
          vr([ze.oI], dr.prototype, "RenderUserChatLine", 1),
          (dr = vr([P.PA], dr));
        function xi(d) {
          const {
            oChat: t,
            emoticonStore: e,
            bPartnerMemberOnlyChat: s,
            onSignIn: a,
          } = d;
          return s && (!k.iA?.logged_in || !k.iA?.is_partner_member)
            ? (0, n.jsx)(ks, {})
            : k.iA?.logged_in
              ? (0, n.jsx)(Ps, { oChat: t, emoticonStore: e })
              : a
                ? (0, n.jsx)(Hs, { onSignIn: a })
                : null;
        }
        function Ps(d) {
          const { oChat: t, emoticonStore: e } = d,
            [s, a] = mt.useState(""),
            u = mt.useRef(void 0),
            f = (0, Kt.q3)(() => t.m_bRateLimited),
            y = mt.useCallback(
              (Fe) => {
                !Fe.shiftKey &&
                  Fe.charCode === 13 &&
                  (t.m_bRateLimited || (t.SendMessage(s), a("")),
                  Fe.preventDefault());
              },
              [t, s],
            ),
            S = mt.useCallback(
              (Fe, Ne = !1) => {
                a(s + `\u02D0${Fe}\u02D0`), u?.current && u.current.focus();
              },
              [s, u],
            ),
            G = () => {
              t.SendMessage(s), a("");
            };
          let Be = f || s.trim().length == 0,
            We = (0, Dt.A)(
              mr().chatSubmitButton,
              s.length == 0 && mr().disabled,
            );
          return (0, n.jsx)("div", {
            className: (0, Dt.A)(It().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, n.jsxs)("div", {
              className: (0, Dt.A)(It().ChatEntry, "ChatEntry"),
              children: [
                (0, n.jsxs)("form", {
                  className: `${mr().chatEntryControls}`,
                  children: [
                    (0, n.jsx)("textarea", {
                      className: mr().chatTextarea,
                      placeholder: (0, H.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: y,
                      onChange: (Fe) => a(Fe.target.value),
                      value: s,
                      ref: u,
                    }),
                    f &&
                      (0, n.jsx)(Es, {
                        nSeconds: t.m_nRateLimitSeconds,
                        bRateLimited: t.m_bRateLimited,
                      }),
                    (0, n.jsx)("button", {
                      className: We,
                      title: (0, H.we)("#ChatEntryButton_Submit"),
                      disabled: Be,
                      onClick: G,
                      children: (0, n.jsx)(Ye.XTb, {}),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  style: { height: "50px" },
                  className: `${mr().chatEntryActionsContainer}`,
                  children: (0, n.jsxs)("div", {
                    className: mr().chatEntryActionsGroup,
                    children: [
                      (0, n.jsx)(Mi.A, {
                        disabled: !1,
                        OnEmoticonSelected: S,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: e,
                      }),
                      (0, n.jsx)(Ls, { ...d, textInputRef: u }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Ls(d) {
          const { oChat: t, emoticonStore: e, textInputRef: s } = d;
          return t.m_strFlairGroupID &&
            e.flair_list &&
            e.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
            ? (0, n.jsx)(Mi.A, {
                disabled: !1,
                OnEmoticonSelected: (a) => {
                  t.UpdateChatMessageFlair(a), s?.current && s.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: e,
                strFlairGroupID: t.m_strFlairGroupID,
                title: (0, H.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, n.jsx)(Ye.P7r, {}),
              })
            : null;
        }
        class Es extends mt.Component {
          render() {
            return (0, n.jsx)("div", {
              className: It().TimedProgressBarContainer,
              children: (0, n.jsxs)("div", {
                className: It().wrapper,
                children: [
                  (0, n.jsx)("div", {
                    className: `${It().spinner} ${It().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, n.jsx)("div", {
                    className: `${It().filler} ${It().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, n.jsx)("div", {
                    className: It().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function Hs(d) {
          return (0, n.jsx)("div", {
            className: It().Description,
            children: (0, n.jsx)(wi.$n, {
              onClick: d.onSignIn,
              className: (0, Dt.A)(It().SignInButton),
              children: (0, H.we)("#BroadcastChat_Login"),
            }),
          });
        }
        function ks(d) {
          return (0, n.jsxs)("div", {
            className: It().Description,
            children: [
              (0, n.jsx)("div", {
                className: It().LogInPrompt,
                children: (0, H.we)("#Broadcast_PartnerChat_Login"),
              }),
              !k.iA.logged_in &&
                !k.TS.IN_STEAMUI &&
                (0, n.jsx)(wi.$n, {
                  onClick: ms,
                  className: (0, Dt.A)(It().SignInButton),
                  children: (0, H.we)("#Login_SignIn"),
                }),
            ],
          });
        }
        var Xs = h(73110),
          Ks = h(83482),
          Ys = h(3367),
          Js = h(84676),
          Jr = h(76532),
          $r = h(95414),
          $s = h(4705),
          Zs = h(72865),
          Qs = h(85599),
          Rs = h(43087),
          ni = h.n(Rs),
          ai = h(29522),
          Ir = h(40358),
          Ts = h(47875),
          Oi = h(21721),
          Gs = h(3348);
        const qs = (0, P.PA)((d) => {
          const { appid: t } = d,
            e = (0, Zs.n9)(),
            s = (0, mt.useRef)({ include_assets: !0, include_release: !0 }),
            a = (0, ai.$5)(t),
            { data: u } = (0, Ir.J$)(a),
            { data: f } = (0, Ir.lv)(a),
            { data: y } = (0, Ir.by)(a),
            [S, G] = (0, Js.t7)(t, s.current);
          let Be = (0, Dt.A)(
              ni().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            We = ni().StoreSaleWidgetImage_mini,
            Fe = ni().StoreSaleImage_mini;
          if (u == null)
            return (0, n.jsx)("div", {
              className: Be,
              children: (0, n.jsx)(Qs.t, { size: "medium" }),
            });
          if (u == null || !u.name)
            return (0, n.jsx)("div", {
              className: Jr.StoreSaleWidgetEmptyContainer,
            });
          const Ne = u.type != Ys.uE.gQ,
            _e = (0, Ks.wJ)((0, Ts._)(u), e);
          return (0, n.jsxs)("div", {
            className: Be,
            children: [
              (0, n.jsx)("a", {
                href: _e,
                target: k.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, n.jsx)($r.j, {
                  id: a,
                  children: (0, n.jsx)("div", {
                    className: We,
                    children:
                      f &&
                      (0, n.jsx)("img", {
                        className: Fe,
                        src: (0, Oi.b0)(f, "small_capsule"),
                        alt: u.name,
                      }),
                  }),
                }),
              }),
              (0, n.jsxs)("div", {
                className: Jr.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, n.jsx)("a", {
                    href: _e,
                    target: k.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, n.jsx)($r.j, {
                      id: a,
                      children: (0, n.jsx)("div", {
                        className: (0, Dt.A)(
                          Jr.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: u.name,
                      }),
                    }),
                  }),
                  y &&
                    (0, n.jsx)("div", {
                      className: Jr.StoreSaleWidgetRelease,
                      children: (0, Gs.CC)(y),
                    }),
                  !!Ne && (0, n.jsx)($s.w, { id: a, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        function zr() {
          let d = window.GetUsabilityTracker;
          if (d) return d();
        }
        var hr = h(61639),
          oi = h(32288),
          Zr = h(10142),
          Vs = h(28462),
          Qr = h(34592),
          ar = h(34032),
          Cs = Object.defineProperty,
          _s = Object.getOwnPropertyDescriptor,
          or = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? _s(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && Cs(t, e, a), a;
          };
        let tn = !1;
        function li(d) {
          return !!(d && d.thumbnail_http_address);
        }
        function qn(d, t) {
          if (t || d) {
            const e = t || d;
            return !!(e && xe.Get().BIsAppStreaming(e));
          }
          return !1;
        }
        const rr = class Or {
          constructor() {
            (0, L.Gn)(this);
          }
          static s_GlobalStore;
          m_inFlightRequests = new Map();
          m_lookupKeyToEmbedStreamDef = new Map();
          m_lookupStreams = new Map();
          m_playReadyStream = new Map();
          m_bMapHasStartedVideo = new Map();
          m_mapBroadcastChecked = new Map();
          m_pageChatStatus = "hide";
          m_streamChatStatus = "hide";
          m_bUserChatExpanded = void 0;
          m_bUserPreferenceHideBroadcastByDefault = void 0;
          m_bCollapsed = void 0;
          m_setStreamChangedListeners = new Set();
          m_bUseFakeData = !1;
          m_onLoadContextCall = new Map();
          BHasStreams(t) {
            const e = this.GetStreams(t);
            return !!(e && e.length > 0);
          }
          AddCallbackOnNewContext(t, e, s) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(t), {
              name: e,
              fnCallback: s,
            });
          }
          ClearCallbackOnNewContext(t) {
            this.m_onLoadContextCall.set(
              this.GetStreamsLookupKeyFromDef(t),
              null,
            );
          }
          GetPlayReadyStream(t) {
            let e = this.GetStreamsLookupKeyFromDef(t);
            return this.m_playReadyStream.get(e);
          }
          BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
            return !!this.m_bUserPreferenceHideBroadcastByDefault;
          }
          BIsEmbeddedStreamCollapsed() {
            return !!this.m_bCollapsed;
          }
          SetEmbeddedStreamCollapsed(t) {
            this.m_bCollapsed != t && (this.m_bCollapsed = t);
          }
          GetConcurrentStreams(t) {
            const e = this.GetStreams(t);
            return e ? e.filter((s) => li(s)).length : 0;
          }
          GetChatVisibility() {
            return this.m_pageChatStatus === "remove" ||
              this.m_streamChatStatus === "remove"
              ? "remove"
              : this.m_bUserChatExpanded !== void 0
                ? this.m_bUserChatExpanded
                  ? "show"
                  : "hide"
                : this.m_pageChatStatus === "show"
                  ? "show"
                  : this.m_pageChatStatus === "hide" ||
                      this.m_streamChatStatus === "hide"
                    ? "hide"
                    : "show";
          }
          ToggleChatVisibility() {
            const t = this.GetChatVisibility();
            t !== "remove" && (this.m_bUserChatExpanded = t === "hide");
          }
          DebugDumpContextAndAvailableContext(t) {
            console.log(
              "Requested context",
              this.GetStreamsLookupKeyFromDef(t),
            ),
              console.log(
                "Available context count: ",
                this.m_lookupStreams.size,
              ),
              this.m_lookupStreams.forEach((e, s) => {
                console.log(s, e.length);
              });
          }
          GetStreams(t) {
            const e = this.GetStreamsLookupKeyFromDef(t);
            return this.m_lookupStreams.get(e);
          }
          GetBroadcastURL(t) {
            let e = null;
            return (
              t.steamid
                ? (e = new Bt.b(t.steamid))
                : (e = Bt.b.InitFromAccountID(t.accountid)),
              k.TS.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                e.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(t) {
            let e = !1;
            return (
              this.m_lookupStreams.forEach((s) => {
                e ||
                  (e =
                    !!s &&
                    s.some(
                      (a) =>
                        je.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID ===
                        t,
                    ));
              }),
              e
            );
          }
          GetStreamsForAppID(t) {
            const e = new Array();
            return (
              this.m_lookupStreams.forEach((s) => {
                s?.forEach((a) => {
                  je.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID === t &&
                    e.push(a);
                });
              }),
              e
            );
          }
          AddStreamChangedListener(t) {
            this.m_setStreamChangedListeners.add(t);
          }
          RemoveStreamChangedListener(t) {
            this.m_setStreamChangedListeners.delete(t);
          }
          async LoadBIsEmbeddedBroadcastHidden(t) {
            if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
              let e = (0, k.Tc)("broadcastuser", "application_config");
              if (!e)
                try {
                  let s =
                    k.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  e = (await D().get(s, { params: {}, cancelToken: t.token }))
                    .data;
                } catch (s) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, Qr.H)(s).strErrorMsg,
                  ),
                    (e = { bHideStoreBroadcast: !1 });
                }
              (0, L.h5)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  e.bHideStoreBroadcast),
                  (this.m_bCollapsed = e.bHideStoreBroadcast);
              });
            }
            return this.m_bUserPreferenceHideBroadcastByDefault;
          }
          async SetupEmbeddableVOD(t, e) {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              await Zr.A.Get().QueueAppRequest(t.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const s = Zr.A.Get().GetApp(t.nAppIDVOD),
              a = new ar.TT();
            if (
              ((a.accountid = 0),
              (a.nAppIDVOD = t.nAppIDVOD),
              (a.default_selection_priority = ar.mY.k_ePrimary),
              (a.current_selection_priority = ar.mY.k_ePrimary),
              (a.thumbnail_http_address = s?.GetAssets().GetHeaderURL() || ""),
              (a.title = s?.GetName() || ""),
              this.GetStreams(t).unshift(a),
              e)
            ) {
              const u = this.GetStreamsLookupKeyFromDef(t);
              this.m_playReadyStream.set(u, a);
            }
          }
          async HintLoadEmbeddablePreviewStreams(t) {
            let e = null,
              s = {
                eventid: t.event ? t.event.GID : void 0,
                previewAccounts:
                  t.bIsPreview && t.accountIDs
                    ? t.accountIDs.slice().sort().join(",")
                    : void 0,
              };
            try {
              return (
                (e = await D().get(
                  k.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: s },
                )),
                this.HandleHintLoadBroadcastResponse(t, e.data)
              );
            } catch (a) {
              let u = (0, Qr.H)(a);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  u.strErrorMsg,
                u,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(t) {
            let e = this.MapEmbeddableStreamToRequest(t),
              s = this.GetStreamsLookupKeyFromParam(e);
            if (!this.m_inFlightRequests.has(s)) {
              this.m_lookupKeyToEmbedStreamDef.set(s, t);
              const a = this.InternalHintLoadEmbeddableStreams(t, e);
              this.m_inFlightRequests.set(s, a);
            }
            return this.m_inFlightRequests.get(s);
          }
          async InternalHintLoadEmbeddableStreams(t, e) {
            let s = (0, k.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, ar.h7)(s))
              return this.HandleHintLoadBroadcastResponse(t, s);
            try {
              let a = null;
              return (
                (a = await D().get(
                  k.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: e },
                )),
                this.HandleHintLoadBroadcastResponse(t, a.data)
              );
            } catch (a) {
              let u = (0, Qr.H)(a);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + u.strErrorMsg,
                u,
              );
            }
            return [];
          }
          async HandleHintLoadBroadcastResponse(t, e) {
            (this.m_bUseFakeData = !1),
              t.bIsPreview &&
                (e?.filtered?.length > 0
                  ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      t.event,
                      e.filtered,
                    )
                  : ((e = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              e.broadcast_chat_visibility &&
                (this.m_pageChatStatus = e.broadcast_chat_visibility);
            const s = new Array();
            (0, L.h5)(() => {
              e.filtered.forEach((f) => {
                if (!f.steamid) {
                  const G = Bt.b.InitFromAccountID(f.accountid);
                  f.steamid = G.ConvertTo64BitString();
                }
                const y = je.es.GetOrCreateBroadcastInfo(f.steamid),
                  S = f.appid ? Number(f.appid) : je.fO;
                (y.m_nAppID = S),
                  (y.m_strAppId = "" + S),
                  f.current_selection_priority === void 0 &&
                    (f.current_selection_priority =
                      f.default_selection_priority),
                  S != je.fO && s.push(S);
              });
            });
            const a = this.GetStreamsLookupKeyFromDef(t);
            if (
              (this.m_lookupStreams.set(a, e.filtered),
              this.m_onLoadContextCall.has(a))
            ) {
              const f = this.m_onLoadContextCall.get(a);
              f && f.fnCallback();
            }
            const u = this.GetStreams(t);
            return await this.AutoStartVideoStream(t, u), u;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(t, e) {
            const s = Array.from(t.jsondata.broadcast_whitelist ?? []),
              a = Array.from(t.jsondata.broadcast_priority ?? []),
              u = new Map();
            for (let f = 0; f < s.length && !(f >= a.length); f++)
              u.set(s[f], (0, ar.PH)(a[f]));
            e.forEach((f) => {
              const y = Number(f.accountid);
              u.has(y) && (f.current_selection_priority = u.get(y));
            });
          }
          async AutoStartVideoStream(t, e) {
            let s = this.GetStreamsLookupKeyFromDef(t);
            if (this.m_bMapHasStartedVideo.get(s)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(s)) {
                const a = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: ar.mY.k_eGeneral,
                  current_selection_priority: ar.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(s, a);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(t, e);
          }
          async PlayFromAvailableStreams(t, e, s = !1) {
            const a = new Set();
            for (;;) {
              const u = e.filter((S) => !a.has(S) && (!s || !S.nAppIDVOD)),
                f = this.GetAutoStartStream(u);
              if (!f) return null;
              if (await this.AttemptToPlayStream(t, f)) return f;
              a.add(f);
            }
          }
          async AttemptToPlayStream(t, e) {
            let s = this.GetStreamsLookupKeyFromDef(t);
            if (
              (this.m_bMapHasStartedVideo.set(s, !0),
              this.m_mapBroadcastChecked.has(e.accountid) ||
                this.m_mapBroadcastChecked.set(
                  e.accountid,
                  this.InternalAttemptToPlayStream(t, e),
                ),
              e.nAppIDVOD)
            )
              this.m_playReadyStream.set(s, e);
            else {
              const a = await this.m_mapBroadcastChecked.get(e.accountid);
              if (a?.success == J.R) {
                (e.steamid = a.steamid),
                  this.m_playReadyStream.set(s, e),
                  this.GetConcurrentStreams(t) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus = e.broadcast_chat_visibility),
                  this.m_setStreamChangedListeners.forEach((f) => f(e));
                const u = je.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
                Pr(u, hr.Mc.iy, e.snr);
              } else return null;
            }
            return e;
          }
          async InternalAttemptToPlayStream(t, e) {
            let s = this.GetStreamsLookupKeyFromDef(t),
              a = null;
            try {
              const u = k.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let f = {
                broadcastaccountid: e.accountid,
                viewer_token: je.es.GetViewerToken(),
                origin: self.origin,
              };
              return (a = await D().get(u, { params: f })), a.data;
            } catch (u) {
              let f = (0, Qr.H)(u);
              console.error(
                "Broadcast.AttemptToPlayStream: " + f.strErrorMsg,
                f,
              );
            }
            return null;
          }
          GetAutoStartStream(t) {
            if (!t) return null;
            const e = t.filter((f) => li(f)),
              s = e.reduce((f, y) => Math.max(f, jr(y)), 0),
              a = e.filter((f) => jr(f) === s);
            if (a.length === 0) return null;
            const u = Math.floor(Math.random() * a.length);
            return a[u];
          }
          MapEmbeddableStreamToRequest(t) {
            return {
              appid: t.appid,
              promotionName: t.bIsPreview ? "preview" : t.promotionName,
              clanid: t.clanid
                ? t.clanid
                : t.event
                  ? t.event.clanSteamID.GetAccountID()
                  : void 0,
              listid: t.listid,
              subid: t.subid,
              bundleid: t.bundleid,
              eventid: t.event ? t.event.GID : void 0,
              previewAccounts:
                t.bIsPreview && t.accountIDs
                  ? t.accountIDs.slice().sort().join(",")
                  : void 0,
              test: tn,
              cc: k.TS.COUNTRY,
              l: k.TS.LANGUAGE,
              hubtype: t.event?.GetContentHubType(),
              hubcategory: t.event?.GetContentHubCategory(),
              hubtagid: t.event?.GetContentHubTag(),
              tabuniqueid: t.tabuniqueid,
              tabfilter: t.tabfilter,
              rt_now_override_test: _r.HD.BHasTimeOverride()
                ? _r.HD.GetTimeNowWithOverride()
                : void 0,
            };
          }
          GetStreamsLookupKeyFromDef(t) {
            return this.GetStreamsLookupKeyFromParam(
              this.MapEmbeddableStreamToRequest(t),
            );
          }
          GetStreamsLookupKeyFromParam(t) {
            return JSON.stringify(t);
          }
          static Get() {
            return (
              Or.s_GlobalStore ||
                ((Or.s_GlobalStore = new Or()), Or.s_GlobalStore.Init()),
              Or.s_GlobalStore
            );
          }
          Init() {}
        };
        or([L.sH], rr.prototype, "m_lookupStreams", 2),
          or([L.sH], rr.prototype, "m_playReadyStream", 2),
          or([L.sH], rr.prototype, "m_pageChatStatus", 2),
          or([L.sH], rr.prototype, "m_streamChatStatus", 2),
          or([L.sH], rr.prototype, "m_bUserChatExpanded", 2),
          or(
            [L.sH],
            rr.prototype,
            "m_bUserPreferenceHideBroadcastByDefault",
            2,
          ),
          or([L.sH], rr.prototype, "m_bCollapsed", 2),
          or([L.XI], rr.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          or([L.XI], rr.prototype, "AttemptToPlayStream", 1);
        let xe = rr;
        function jr(d) {
          return d.current_selection_priority || ar.mY.k_eGeneral;
        }
        function en(d) {
          d.sort((t, e) =>
            jr(t) != jr(e)
              ? jr(e) - jr(t)
              : t.viewer_count != e.viewer_count
                ? e.viewer_count - t.viewer_count
                : e.accountid - t.accountid,
          );
        }
        async function Pr(d, t, e) {
          if (d > 0 && d != 7 && e) {
            let s = new URLSearchParams();
            s.append("page_action", "" + t),
              s.append("snr", e),
              D().post(
                k.TS.STORE_BASE_URL + "ajaxreportproductaction/" + d + "/",
                s,
              );
          }
        }
        const rn = new Vs.T();
        var sn = h(23627),
          nn = h(39239),
          an = h(90405),
          Di = h(19730),
          Wi = h(16512),
          on = h(53120),
          Z = h.n(on);
        const ln = (0, P.PA)((d) => {
          const { event: t } = d,
            e = t.clanSteamID.GetAccountID(),
            s = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            a = (0, mt.useRef)(null),
            [u, f] = (0, mt.useState)(
              t ? Wi.pF.GetCreatorHome(t.clanSteamID) : null,
            );
          if (
            ((0, mt.useEffect)(() => {
              const S = D().CancelToken.source();
              return (
                (a.current = S.cancel),
                (async () => {
                  const Be = Bt.b.InitFromClanID(e),
                    We = await Wi.pF.LoadCreatorHome(Be, !1, S);
                  S.token.reason || f(We);
                })(),
                () => {
                  a.current && a.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [e]),
            s || !u || !u.BIsLoaded())
          )
            return null;
          const y =
            k.TS.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return (0, n.jsx)("div", {
            className: Z().item_drop_ctn,
            children: (0, n.jsxs)("div", {
              children: [
                (0, H.we)(
                  u.GetName().length > 0
                    ? t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                          60 ==
                        0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                    ? t.jsondata.broadcast_item_drops_min_watch_time_minutes /
                        60
                    : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
                  u.GetName(),
                ),
                !!t.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, n.jsx)("a", {
                    href: y,
                    target: k.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, H.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var cn = h(95695),
          gr = h.n(cn),
          dn = h(96715),
          un = h(10886),
          mn = h(19654),
          fn = h(3209),
          hn = h(14256),
          ir = h.n(hn);
        function gn(d) {
          const { steamid: t, closeModal: e } = d;
          return (0, n.jsxs)(us.o0, {
            strDescription: "",
            strTitle: (0, H.we)("#Button_Share"),
            onCancel: e,
            onOK: e,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, n.jsx)(pn, { steamid: t }),
              (0, n.jsx)(bn, { steamid: t }),
            ],
          });
        }
        function pn(d) {
          const { steamid: t } = d,
            e = yn(t);
          return (0, n.jsxs)("div", {
            className: (0, Dt.A)(
              gr().FlexRowContainer,
              ir().share_controls_ctn,
            ),
            children: [
              (0, n.jsx)($e.he, {
                toolTipContent: (0, H.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, n.jsx)(Yr.uU, {
                  href: e.strFacebookUrl,
                  className: ir().ShareBtn,
                  children: (0, n.jsx)("img", {
                    className: (0, Dt.A)(gr().Button),
                    src: un.A,
                  }),
                }),
              }),
              (0, n.jsx)($e.he, {
                toolTipContent: (0, H.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, n.jsx)(Yr.uU, {
                  href: e.strTwitterUrl,
                  className: ir().ShareBtn,
                  children: (0, n.jsx)("img", {
                    className: (0, Dt.A)(gr().Button),
                    src: fn.A,
                  }),
                }),
              }),
              (0, n.jsx)($e.he, {
                toolTipContent: (0, H.we)("#EventDisplay_Share_OnReddit"),
                children: (0, n.jsx)(Yr.uU, {
                  href: e.strRedditUrl,
                  className: ir().ShareBtn,
                  children: (0, n.jsx)("img", {
                    className: (0, Dt.A)(gr().Button),
                    src: mn.A,
                  }),
                }),
              }),
            ],
          });
        }
        function bn(d) {
          const { steamid: t } = d,
            e = mt.createRef(),
            [s, a] = mt.useState(""),
            u = mt.createRef(),
            f = mt.useCallback(
              (S) => {
                e.current &&
                  e.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(e.current.value)
                    .then((G) => {
                      a((0, H.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((G) => {
                      a(
                        (0, H.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", G);
                    });
              },
              [e],
            ),
            y = k.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", {
                className: (0, Dt.A)(gr().FlexRowContainer, ir().linkField),
                onClick: f,
                children: [
                  (0, n.jsx)("span", {
                    className: ir().LinkInputLabel,
                    children: (0, H.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, n.jsx)("textarea", {
                    className: ir().LinkInput,
                    ref: e,
                    value: y,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, n.jsx)($e.he, {
                      toolTipContent: (0, H.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, n.jsx)("div", {
                        className: (0, Dt.A)(
                          gr().Button,
                          gr().Icon,
                          ir().LinkButton,
                        ),
                        children: (0, n.jsx)("img", {
                          className: ir().ClipboardIcon,
                          src: dn.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                ref: u,
                className: ir().ClipboardText,
                children: s,
              }),
            ],
          });
        }
        function yn(d) {
          const t = k.TS.COMMUNITY_BASE_URL + "broadcast/share/" + d;
          return {
            strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: t + "?site=twitter",
            strRedditUrl: t + "?site=reddit",
          };
        }
        var wn = h(82734),
          Mn = h(37589),
          Bn = Object.defineProperty,
          vn = Object.getOwnPropertyDescriptor,
          Ce = (d, t, e, s) => {
            for (
              var a = s > 1 ? void 0 : s ? vn(t, e) : t, u = d.length - 1, f;
              u >= 0;
              u--
            )
              (f = d[u]) && (a = (s ? f(t, e, a) : f(a)) || a);
            return s && a && Bn(t, e, a), a;
          };
        const In = {
          list: [
            { appid: 444090, url: "https://steam.tv/paladins" },
            { appid: 386360, url: "https://steam.tv/smite" },
            { appid: 813820, url: "https://steam.tv/realmroyale" },
            {
              appid: 583950,
              url: "https://steam.tv/artifact",
              broadcasterAccountID: 912972716,
            },
            {
              appid: 570,
              url: "https://steam.tv/dota",
              broadcasterAccountID: 238221269,
            },
            {
              appid: 1025790,
              url: "https://steam.tv/steamawards",
              broadcasterAccountID: 934427243,
            },
            {
              appid: 730,
              url: "https://steam.tv/csgo",
              broadcasterAccountID: 927819071,
            },
          ],
        };
        function zn() {
          const d = (0, k.Qn)();
          return !(0, k.Y2)() && !d;
        }
        function jn(d) {
          return zn() ? (0, n.jsx)(pr, { ...d }) : null;
        }
        let pr = class extends mt.Component {
          m_cancelSignal = D().CancelToken.source();
          m_bMarkedUsabilitySeen = !1;
          state = {
            bShowPopoutHeader: !1,
            bExpanded: !1,
            bLoadingPreference: !0,
            style: {
              maxHeight: "0vh",
              overflow: "hidden",
              transition: "max-height 1s ease-in-out",
            },
            innerStyle: {
              maxHeight: "0vh",
              overflow: "hidden",
              transition: "max-height 1s ease-in-out",
            },
            bStartMuted: !0,
          };
          async componentDidMount() {
            await xe.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !xe
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: xe
                      .Get()
                      .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? xe.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : xe.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                xe
                  .Get()
                  .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
              window.setTimeout(() => {
                this.m_cancelSignal.token.reason ||
                  this.setState({
                    style: { ...this.state.style, maxHeight: "100vh" },
                  });
              }, 10);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "BroadcastEmbeddable component unmounted",
            );
          }
          ToggleBroadcastExpandShrink() {
            let d = xe.Get().GetPlayReadyStream(this.props);
            const t = this.state.bExpanded,
              e = je.es.GetOrCreateBroadcastInfo(d.steamid).m_nAppID;
            Pr(e, t ? hr.Mc.U6 : hr.Mc.B_, d.snr),
              t && zr() && zr().AddEvent(oi.Xm.d),
              window.setTimeout(
                () =>
                  this.setState({
                    innerStyle: {
                      ...this.state.innerStyle,
                      maxHeight: t ? "0vh" : "100vh",
                    },
                  }),
                10,
              ),
              t ||
                this.setState({ bExpanded: !this.state.bExpanded }, () =>
                  xe.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState({ bExpanded: !1 }, () =>
                xe.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(d) {
            this.setState({ bStartMuted: !1 }),
              xe.Get().GetPlayReadyStream(this.props).accountid !=
                d.accountid &&
                (await xe.Get().AttemptToPlayStream(this.props, d));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const d = xe
              .Get()
              .GetStreams(this.props)
              .filter(
                (t) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(t),
              );
            await xe.Get().PlayFromAvailableStreams(this.props, d, !0);
          }
          ConstructSidePanels(d, t) {
            let e = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return e;
            const s = xe.Get().GetConcurrentStreams(this.props) > 1;
            let a = je.es.GetOrCreateBroadcastInfo(d.steamid).m_nAppID,
              u = (0, n.jsx)(Fi, { ImgUrl: d.right_panel }, "right" + a),
              f = (0, n.jsx)(Fi, { ImgUrl: d.left_panel }, "left" + a);
            const y = 11;
            if (a < y) {
              const S = yi.GetAppIDListForBroadcasterSteamID(d.steamid);
              S && S.length === 1 && (a = S[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                a >= y &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((u = (0, n.jsx)(qs, { appid: a }, "mini" + d.accountid)),
                (e.bRightPanelArtworkOrEmpty = !1)),
              s && !t
                ? ((e.leftPanel = (0, n.jsx)(
                    Dn,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: d,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + a,
                  )),
                  (e.rightPanel = u))
                : t
                  ? ((e.leftPanel = (0, n.jsx)("div", {})),
                    (e.rightPanel = (0, n.jsx)(Sn, {
                      stream: d,
                      orientation: "rightside",
                    })),
                    (e.bRightPanelArtworkOrEmpty = !1))
                  : ((e.leftPanel = f), (e.rightPanel = u)),
              e
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              zr() && zr().AddEvent(oi.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            let d = xe.Get().GetPlayReadyStream(this.props);
            if (d) {
              this.MarkBroadcastSeen();
              let t = xe.Get().GetChatVisibility() === "show";
              const {
                event: e,
                language: s,
                fnRenderBroadcastContext: a,
              } = this.props;
              e &&
                (d = {
                  ...d,
                  left_panel: e.GetImageURL(
                    "broadcast_left",
                    s || (0, Dr.sfN)(k.TS.LANGUAGE),
                  ),
                  right_panel: e.GetImageURL(
                    "broadcast_right",
                    s || (0, Dr.sfN)(k.TS.LANGUAGE),
                  ),
                  store_title: e.GetBroadcastTitle(
                    s || (0, Dr.sfN)(k.TS.LANGUAGE),
                  ),
                  broadcast_chat_visibility: e.GetBroadcastChatVisibility(),
                });
              let u = this.ConstructSidePanels(d, t),
                f = d.store_title ? d.store_title : d.title,
                y = xe.Get().GetConcurrentStreams(this.props) > 1;
              const S = () => {
                d.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, n.jsx)(mt.Fragment, {
                children: (0, n.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, n.jsxs)("div", {
                      className: (0, Dt.A)({
                        [Z().bordered_container]: !0,
                        [Z().Event]: !!e,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, n.jsxs)("div", {
                          className: (0, Dt.A)(
                            Z().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, n.jsx)(sn.K, {}),
                            (0, n.jsx)("div", {
                              className: Z().streamTitle,
                              children: f,
                            }),
                            (0, n.jsxs)("div", {
                              className: Z().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, n.jsx)($e.he, {
                                    toolTipContent: (0, H.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, n.jsx)("div", {
                                      className: Z().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${k.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, n.jsx)($e.he, {
                                  toolTipContent: (0, H.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, n.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? Z().bordered_corner_expanded
                                      : Z().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!d.gamedata_subtitle &&
                              (0, n.jsx)("div", {
                                className: Z().bordered_subtitle,
                                children: d.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, n.jsxs)("div", {
                            className: (0, Dt.A)({
                              [Z().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: y,
                              broadcast_right_panel_simple:
                                u.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: t,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, n.jsx)("div", {
                                className: Z().LeftPanelCtn,
                                children: u.leftPanel,
                              }),
                              (0, n.jsx)(Rr, {
                                stream: d,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: a,
                                fnOnVideoEnd: S,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, n.jsx)("div", {
                                className: Z().RightPanelCtn,
                                children: u.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, n.jsx)(Lr, {
                                  stream: d,
                                  bMultistream: y,
                                  chatAnnouncementGivewayGID: u.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!(
                      e &&
                      e.jsondata &&
                      e.jsondata.broadcast_item_drops_enabled
                    ) && (0, n.jsx)(ln, { event: e }),
                    (0, n.jsx)("div", { className: Z().clear_div }),
                  ],
                }),
              });
            } else
              return (0, n.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        Ce([ze.oI], pr.prototype, "ToggleBroadcastExpandShrink", 1),
          Ce([ze.oI], pr.prototype, "OnShrinkTransitionEnd", 1),
          Ce([ze.oI], pr.prototype, "onStreamSelect", 1),
          Ce([ze.oI], pr.prototype, "PlayNextNonVOD", 1),
          (pr = Ce([P.PA], pr));
        class Rr extends mt.Component {
          m_iVideoContainerRef = mt.createRef();
          constructor(t) {
            super(t),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const t = je.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Pr(t, hr.Mc.n6, this.props.stream.snr),
              zr() && zr().AddEvent(oi.Xm.ok),
              this.setState({ bPopout: !1, bPreventPopup: !0 });
          }
          OnEnter() {
            !this.state.bPreventPopup &&
              this.state.bPopout &&
              this.setState({ bPopout: !1 });
          }
          OnLeave() {
            !this.state.bPreventPopup &&
              !this.state.bPopout &&
              this.setState({ bPopout: !0 });
          }
          render() {
            return (0, n.jsx)("div", {
              className: Z().wrapper,
              children: (0, n.jsx)(Mn.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (t) => {
                  t.isIntersecting || this.OnLeave();
                },
                className: (0, Dt.A)({
                  [Z().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [Z().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, n.jsxs)("div", {
                  className: this.state.bPopout
                    ? Z().broadcast_floating
                    : Z().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, n.jsx)(Si, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, n.jsx)("div", {
                      className: Z().BroadcastPlayerContainer,
                      children: (0, n.jsx)(Xs.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: pt.nn.fe,
                        bStartMuted: this.props.bStartMuted,
                        fnRenderBroadcastContext:
                          this.props.fnRenderBroadcastContext,
                        fnOnVideoEnd: this.props.fnOnVideoEnd,
                        nAppIDVOD: this.props.stream.nAppIDVOD,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }
        }
        Ce([ze.oI], Rr.prototype, "CloseBroadcastPopup", 1),
          Ce([ze.oI], Rr.prototype, "OnEnter", 1),
          Ce([ze.oI], Rr.prototype, "OnLeave", 1);
        function xn(d) {
          const { stream: t } = d,
            [e] = (0, Kt.q3)(() => [t.steamid]),
            s = je.es.GetOrCreateBroadcastInfo(e).m_nAppID,
            a = In.list.find(
              (u) =>
                u.appid == s &&
                (!u.broadcasterAccountID ||
                  u.broadcasterAccountID == t.accountid),
            );
          if (a) {
            let u = a.url;
            return (
              (k.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (u = "steam://openurl/" + u),
              (0, n.jsx)("a", {
                href: u,
                children: (0, H.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const u = k.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return (0, n.jsx)($e.he, {
              toolTipContent: (0, H.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, n.jsx)("a", {
                href: u,
                className: Z().external_link,
                children: (0, n.jsx)(Ye.GrD, {}),
              }),
            });
          }
        }
        let Lr = class extends mt.Component {
          OnToggleChat(d) {
            d.preventDefault();
            const t = je.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Pr(
              t,
              xe.Get().GetChatVisibility() === "show" ? hr.Mc.kz : hr.Mc.bW,
              this.props.stream.snr,
            ),
              xe.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const d = je.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            Pr(d, hr.Mc.Is, this.props.stream.snr);
          }
          render() {
            const d = xe.Get().GetChatVisibility() != "remove",
              t = xe.Get().GetChatVisibility() === "hide",
              e = !this.props.stream.nAppIDVOD,
              s = e;
            let a = Number.parseInt(
              "" +
                je.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, n.jsxs)("div", {
              className: (0, Dt.A)(Z().viewer_bar, "viewer_bar"),
              children: [
                (0, n.jsxs)("div", {
                  className: (0, Dt.A)(Z().viewer_count, "viewer_count"),
                  children: [(0, n.jsx)(Ye.y_e, {}), (0, Di.Dq)(a)],
                }),
                (0, n.jsxs)("div", {
                  className: (0, Dt.A)(Z().viewer_links, "viewer_links"),
                  children: [
                    !!(d && !t && this.props.bMultistream) &&
                      (0, n.jsx)("div", {
                        className: Z().chat_link,
                        children: (0, n.jsx)("a", {
                          href: "#",
                          className: Z().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, H.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    d &&
                      (0, n.jsxs)("div", {
                        className: Z().chat_link,
                        children: [
                          (0, n.jsx)(Ye.ROZ, {}),
                          (0, n.jsx)("a", {
                            href: "#",
                            className: Z().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, H.we)(
                              t
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    s &&
                      (0, n.jsxs)("div", {
                        className: Z().chat_link,
                        children: [
                          (0, n.jsx)(Ye.SYj, {}),
                          (0, n.jsx)("a", {
                            href: "#",
                            className: Z().ChatToggle,
                            onClick: (u) =>
                              (0, ti.pg)(
                                (0, n.jsx)(gn, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, wn.uX)(u),
                              ),
                            children: (0, H.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, n.jsx)($e.he, {
                      toolTipContent: (0, H.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, n.jsx)("a", {
                        href:
                          k.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: k.TS.IN_CLIENT ? void 0 : "_blank",
                        className: Z().settings_link,
                        children: (0, n.jsx)(Ye.wB_, {}),
                      }),
                    }),
                    e && (0, n.jsx)(xn, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, n.jsx)(Ds, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        Ce([ze.oI], Lr.prototype, "OnToggleChat", 1),
          Ce([ze.oI], Lr.prototype, "onWatchBroadcastPage", 1),
          (Lr = Ce([P.PA], Lr));
        class Fi extends mt.Component {
          render() {
            let t = this.props.ImgUrl;
            return (0, n.jsxs)("div", {
              className: Z().SidePanelBackground,
              children: [
                t &&
                  (0, n.jsx)("img", {
                    className: Z().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !t && (0, n.jsx)("div", { className: Z().side_panels }),
              ],
            });
          }
        }
        const Si = (0, P.PA)((d) => {
          const { steamIDBroadcast: t } = d;
          let e = je.es.GetOrCreateBroadcastInfo(t).m_nAppID;
          e = e != je.fO ? e : 0;
          const s = (0, ai.$5)(e),
            { data: a } = (0, Ir.J$)(s);
          return (0, n.jsxs)("div", {
            className: [Z().PopOutVideoTitleBar, Z().NoSeslect].join(" "),
            children: [
              a
                ? (0, n.jsx)($r.u, {
                    id: s,
                    className: Z().PopOutVideoTitleText,
                    children: (0, H.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, n.jsx)("div", {
                    className: Z().PopOutVideoTitleText,
                    children: (0, H.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, n.jsx)($e.he, {
                toolTipContent: (0, H.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, n.jsx)("button", {
                  className: Z().PopOutVideoCloseButton,
                  onClick: d.OnPreventPopup,
                  children: (0, n.jsx)(Ye.X, {}),
                }),
              }),
            ],
          });
        });
        function On(d, t) {
          const e = je.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            s = Zr.A.Get().GetApp(e),
            a = d && s?.GetAssets()?.GetHeaderURL();
          return parseInt(
            a
              ? Z().strStreamIconCapsuleArtHeight
              : Z().strStreamIconScreenshotArtHeight,
          );
        }
        function Dn(d) {
          const {
              curStream: t,
              onStreamSelect: e,
              fnFilterStreams: s,
              bShowCapsuleArt: a,
              broadcastEmbedContext: u,
            } = d,
            f = (0, mt.useRef)(void 0),
            y = (0, mt.useMemo)(() => {
              const S = xe
                .Get()
                .GetStreams(u)
                .filter((G) => !s || s(G));
              return en(S), S;
            }, [u, s]);
          return (
            (0, mt.useEffect)(() => {
              if (f && f.current) {
                const S = y
                  .map(
                    (G) => je.es.GetOrCreateBroadcastInfo(G.steamid).m_nAppID,
                  )
                  .filter(Boolean);
                Zr.A.Get()
                  .QueueMultipleAppRequests(S, { include_assets: !0 })
                  .then(() => {
                    if (f.current) {
                      let G = 0;
                      for (const Be of y) {
                        if (t.accountid == Be.accountid) break;
                        G += On(a, Be);
                      }
                      f.current.scrollTop = G;
                    }
                  });
              }
            }, [y, a, t.accountid, f]),
            (0, n.jsx)("div", {
              ref: f,
              className: (0, Dt.A)({
                [Z().side_panels]: !0,
                side_panels: !0,
                [Z().multistream]: !0,
                [Z().scrollingstreams]: y.length > 3,
              }),
              children: (0, n.jsx)("div", {
                className: Z().MultiStreamCtn,
                children: y.map((S) =>
                  (0, n.jsx)(
                    Wn,
                    {
                      stream: S,
                      bSelected: t.accountid == S.accountid,
                      onStreamSelect: e,
                      bShowCapsuleArt: a,
                    },
                    S.accountid ?? S.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function Wn(d) {
          const {
            onStreamSelect: t,
            bSelected: e,
            stream: s,
            bShowCapsuleArt: a,
          } = d;
          let u = (0, Kt.q3)(
            () => je.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID,
          );
          u = u != je.fO ? u : 0;
          const f = (0, ai.$5)(u),
            { data: y } = (0, Ir.J$)(f),
            { data: S } = (0, Ir.lv)(f);
          if (!li(s)) return null;
          const G = a && S && (0, Oi.b0)(S, "header"),
            Be = Number.parseInt("" + s.viewer_count),
            We = !Number.isNaN(Be),
            Fe = !!s.nAppIDVOD && y?.name;
          return (0, n.jsxs)("div", {
            className: (0, Dt.A)({
              [Z().stream_icon_and_viewer_container]: !0,
              [Z().stream_featured]:
                s.current_selection_priority == ar.mY.k_eFeatured,
              [Z().display_capsule_art]: !!G,
            }),
            children: [
              (0, n.jsx)($r.j, {
                id: f,
                hoverClassName: Z().StreamCapsule,
                children: (0, n.jsx)(an.K, {
                  className: (0, Dt.A)(
                    Z().stream_icon_container,
                    e && Z().stream_selected,
                  ),
                  onClick: () => t && t(s),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, n.jsx)(Fn, {
                    strThumbnail: s.thumbnail_http_address,
                    bSelected: e,
                    strCapsuleArtURL: G,
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: (0, Dt.A)(Z().viewer_count, !We && Z().vod_title),
                children: We
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(Ye.y_e, {}),
                        (0, n.jsx)("div", {
                          className: Z().ViewerNum,
                          children: (0, Di.Dq)(Be),
                        }),
                      ],
                    })
                  : Fe,
              }),
            ],
          });
        }
        function Fn(d) {
          const { strCapsuleArtURL: t, strThumbnail: e, bSelected: s } = d,
            a = s ? Z().stream_icon_selected : Z().stream_icon;
          if (t) {
            const u = [t];
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("img", {
                  className: (0, Dt.A)(a, Z().stream_icon_hide_on_hover),
                  src: t,
                }),
                (0, n.jsx)(nn.o, {
                  className: (0, Dt.A)(a, Z().stream_icon_show_on_hover),
                  srcs: u,
                }),
              ],
            });
          } else return (0, n.jsx)("img", { className: a, src: e });
        }
        function Sn(d) {
          const { stream: t, orientation: e } = d,
            s = e == "below",
            [a, u] = (0, Kt.q3)(() => [
              je.es.GetBroadcast(t.steamid),
              je.es.GetBroadcast(t.steamid)?.m_ulBroadcastID,
            ]),
            f = (0, Kt.q3)(() => t.steamid);
          return a
            ? (0, n.jsx)("div", {
                className: (0, Dt.A)({
                  [Z().chat_below_container]: s,
                  [Z().chat_rightside_container]: !s,
                  [Z().store_chat_ctn]: !0,
                }),
                children: (0, n.jsx)("div", {
                  className: Z().ChatContainer,
                  children: (0, n.jsx)(dr, {
                    emoticonStore: rn,
                    watchLocation: pt.nn.fe,
                    steamID: f,
                    broadcastID: u,
                  }),
                }),
              })
            : null;
        }
      },
      6600: (qt, ve, h) => {
        "use strict";
        h.d(ve, { td: () => pt });
        var n = h(14947),
          Ft = h(3166),
          D = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          Kt = (J, v, xt, De) => {
            for (
              var Vt = De > 1 ? void 0 : De ? P(v, xt) : v,
                Wt = J.length - 1,
                Bt;
              Wt >= 0;
              Wt--
            )
              (Bt = J[Wt]) && (Vt = (De ? Bt(v, xt, Vt) : Bt(Vt)) || Vt);
            return De && Vt && D(v, xt, Vt), Vt;
          };
        const mt =
            Ft.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          L = Ft.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class _ {
          bValid = !1;
          stream = { 0: "#Broadcast_EnglishMain" };
          name = "";
          appName = "";
          appID = 0;
          link = "";
          linkName = "";
          tabIcon = "";
          offlineImage = "";
          gidEvent = "";
          constructor(v) {
            (0, n.Gn)(this), this.init(v);
          }
          init(v) {
            (this.bValid = v.bValid),
              (this.stream = v.stream),
              (this.name = v.name),
              (this.appName = v.appName ?? ""),
              (this.appID = v.appID),
              (this.link = v.link),
              (this.linkName = v.linkName),
              (this.tabIcon = v.tabIcon ?? ""),
              (this.offlineImage = v.offlineImage),
              (this.gidEvent = v.gidEvent ?? "");
          }
        }
        Kt([n.sH], _.prototype, "bValid", 2),
          Kt([n.sH], _.prototype, "stream", 2),
          Kt([n.sH], _.prototype, "name", 2),
          Kt([n.sH], _.prototype, "appName", 2),
          Kt([n.sH], _.prototype, "appID", 2),
          Kt([n.sH], _.prototype, "link", 2),
          Kt([n.sH], _.prototype, "linkName", 2),
          Kt([n.sH], _.prototype, "tabIcon", 2),
          Kt([n.sH], _.prototype, "offlineImage", 2),
          Kt([n.sH], _.prototype, "gidEvent", 2);
        let pt = new _({
          bValid: !1,
          stream: { 0: "#Broadcast_EnglishMain" },
          name: "",
          appName: "",
          appID: 0,
          link: "",
          linkName: "",
          tabIcon: "",
          offlineImage: "",
        });
        function rt(J) {
          (J == "76561198888084799" || J == "76561198910244427") &&
            pt.init({
              bValid: !0,
              stream: {
                "76561198888084799": "#Broadcast_Stream1",
                "76561198910244427": "#Broadcast_Stream2",
              },
              name: "Cologne Major 2026",
              appID: 730,
              link: "https://store.steampowered.com/app/730/CounterStrike_2/",
              linkName: "Counter-Strike 2 on Steam",
              tabIcon:
                Config.CHAT_BASE_URL +
                "public/images/broadcast/cs2_major2026_cologne_icon.png",
              offlineImage: "public/images/broadcast/cs2_major2026_cologne.png",
            }),
            J == "76561197960266962" &&
              pt.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: L,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      90828: (qt, ve, h) => {
        "use strict";
        h.d(ve, { J8: () => D, X8: () => Ft });
        var n = ((P) => (
            (P[(P.Hover = 0)] = "Hover"),
            (P[(P.ClickPopup = 1)] = "ClickPopup"),
            (P[(P.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            P
          ))(n || {}),
          Ft = ((P) => (
            (P[(P.Chat = 0)] = "Chat"),
            (P[(P.Notification = 1)] = "Notification"),
            (P[(P.Error = 2)] = "Error"),
            P
          ))(Ft || {});
        class D {}
      },
      73110: (qt, ve, h) => {
        "use strict";
        h.r(ve),
          h.d(ve, {
            BroadcastDetails: () => yt,
            LinkOverlay: () => wt,
            default: () => ut,
          });
        var n = h(7850),
          Ft = h(14947),
          D = h(75844),
          P = h(90626),
          Kt = h(16346),
          mt = h(41301),
          L = h(83482),
          _ = h(22950),
          pt = h(10142),
          rt = h(62510),
          J = h(99047),
          v = h(81115),
          xt = h(58584),
          De = h(59913),
          Vt = h(42891),
          Wt = h(28679);
        function Bt(o, m) {
          var b = function (j) {
              return m && (0, P.isValidElement)(j) ? m(j) : j;
            },
            w = Object.create(null);
          return (
            o &&
              P.Children.map(o, function (M) {
                return M;
              }).forEach(function (M) {
                w[M.key] = b(M);
              }),
            w
          );
        }
        function g(o, m) {
          (o = o || {}), (m = m || {});
          function b(gt) {
            return gt in m ? m[gt] : o[gt];
          }
          var w = Object.create(null),
            M = [];
          for (var j in o)
            j in m ? M.length && ((w[j] = M), (M = [])) : M.push(j);
          var O,
            R = {};
          for (var et in m) {
            if (w[et])
              for (O = 0; O < w[et].length; O++) {
                var lt = w[et][O];
                R[w[et][O]] = b(lt);
              }
            R[et] = b(et);
          }
          for (O = 0; O < M.length; O++) R[M[O]] = b(M[O]);
          return R;
        }
        function c(o, m, b) {
          return b[m] != null ? b[m] : o.props[m];
        }
        function r(o, m) {
          return Bt(o.children, function (b) {
            return (0, P.cloneElement)(b, {
              onExited: m.bind(null, b),
              in: !0,
              appear: c(b, "appear", o),
              enter: c(b, "enter", o),
              exit: c(b, "exit", o),
            });
          });
        }
        function ur(o, m, b) {
          var w = Bt(o.children),
            M = g(m, w);
          return (
            Object.keys(M).forEach(function (j) {
              var O = M[j];
              if ((0, P.isValidElement)(O)) {
                var R = j in m,
                  et = j in w,
                  lt = m[j],
                  gt = (0, P.isValidElement)(lt) && !lt.props.in;
                et && (!R || gt)
                  ? (M[j] = (0, P.cloneElement)(O, {
                      onExited: b.bind(null, O),
                      in: !0,
                      exit: c(O, "exit", o),
                      enter: c(O, "enter", o),
                    }))
                  : !et && R && !gt
                    ? (M[j] = (0, P.cloneElement)(O, { in: !1 }))
                    : et &&
                      R &&
                      (0, P.isValidElement)(lt) &&
                      (M[j] = (0, P.cloneElement)(O, {
                        onExited: b.bind(null, O),
                        in: lt.props.in,
                        exit: c(O, "exit", o),
                        enter: c(O, "enter", o),
                      }));
              }
            }),
            M
          );
        }
        var lr =
            Object.values ||
            function (o) {
              return Object.keys(o).map(function (m) {
                return o[m];
              });
            },
          Qe = {
            component: "div",
            childFactory: function (m) {
              return m;
            },
          },
          sr = (function (o) {
            (0, Vt.A)(m, o);
            function m(w, M) {
              var j;
              j = o.call(this, w, M) || this;
              var O = j.handleExited.bind((0, De.A)(j));
              return (
                (j.state = {
                  contextValue: { isMounting: !0 },
                  handleExited: O,
                  firstRender: !0,
                }),
                j
              );
            }
            var b = m.prototype;
            return (
              (b.componentDidMount = function () {
                (this.mounted = !0),
                  this.setState({ contextValue: { isMounting: !1 } });
              }),
              (b.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (m.getDerivedStateFromProps = function (M, j) {
                var O = j.children,
                  R = j.handleExited,
                  et = j.firstRender;
                return {
                  children: et ? r(M, R) : ur(M, O, R),
                  firstRender: !1,
                };
              }),
              (b.handleExited = function (M, j) {
                var O = Bt(this.props.children);
                M.key in O ||
                  (M.props.onExited && M.props.onExited(j),
                  this.mounted &&
                    this.setState(function (R) {
                      var et = (0, xt.A)({}, R.children);
                      return delete et[M.key], { children: et };
                    }));
              }),
              (b.render = function () {
                var M = this.props,
                  j = M.component,
                  O = M.childFactory,
                  R = (0, v.A)(M, ["component", "childFactory"]),
                  et = this.state.contextValue,
                  lt = lr(this.state.children).map(O);
                return (
                  delete R.appear,
                  delete R.enter,
                  delete R.exit,
                  j === null
                    ? P.createElement(Wt.A.Provider, { value: et }, lt)
                    : P.createElement(
                        Wt.A.Provider,
                        { value: et },
                        P.createElement(j, R, lt),
                      )
                );
              }),
              m
            );
          })(P.Component);
        (sr.propTypes = {}), (sr.defaultProps = Qe);
        const Ct = sr;
        var _t = h(80724),
          $t = h(36707);
        const ct = 500;
        class Zt extends P.Component {
          render() {
            let {
              keyExtractor: m,
              style: b,
              duration: w = ct,
              className: M,
              children: j,
              childRef: O,
              ...R
            } = this.props;
            const et = { ...(b || {}), transitionDuration: `${w / 1e3}s` };
            return (0, n.jsx)(Ct, {
              ...R,
              className: (0, $t.A)("crossfade", M),
              children: (0, n.jsx)(
                _t.A,
                {
                  nodeRef: O,
                  classNames: "crossfade-anim",
                  timeout: w,
                  style: et,
                  children: j,
                },
                m(),
              ),
            });
          }
        }
        function Ee(o) {
          const { src: m, ...b } = o,
            w = { backgroundImage: `url(${m})` },
            M = P.useRef(null);
          return (0, n.jsx)(Zt, {
            style: w,
            keyExtractor: () => m,
            childRef: M,
            ...b,
            children: (0, n.jsx)("div", { ref: M, className: "crossfade-img" }),
          });
        }
        var te = h(61431),
          Nt = h(79590),
          ee = h(79167),
          ht = h(36118),
          dt = h(53107),
          q = h(8323),
          B = h(82734),
          $ = h(18210),
          ne = h(19730),
          V = h(13854),
          x = h(54963),
          nt = h(3166),
          ot = h(6600),
          it = h(48937),
          tt = h(15527),
          Q = h.n(tt),
          Ot = h(85599),
          at = Object.defineProperty,
          Ue = Object.getOwnPropertyDescriptor,
          Qt = (o, m, b, w) => {
            for (
              var M = w > 1 ? void 0 : w ? Ue(m, b) : m, j = o.length - 1, O;
              j >= 0;
              j--
            )
              (O = o[j]) && (M = (w ? O(m, b, M) : O(M)) || M);
            return w && M && at(m, b, M), M;
          };
        function Rt() {
          return (0, n.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, $.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const zt = (0, D.PA)((o) => {
          let m = o.video;
          if (m && (m.IsBroadcastClip() || m.IsBroadcastVOD())) return null;
          let b = _.fK.Loading,
            w = "";
          if (m) {
            (b = m.GetBroadcastState()), (w = m.GetBroadcastStateDescription());
            let j = m.IsBuffering();
            b == _.fK.Unlocking && ((b = _.fK.Loading), (w = "")),
              b == _.fK.Ready && j && ((b = _.fK.Loading), (w = ""));
          }
          if (
            (m && b != _.fK.Error && m.GetUserInputNeeded()) ||
            b == _.fK.Ready
          )
            return null;
          let M = b == _.fK.Loading;
          return (0, n.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              M && (0, n.jsx)(Ot.t, {}),
              !M &&
                (0, n.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: w,
                }),
            ],
          });
        });
        class Tt extends P.Component {
          OnClick() {
            _.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, n.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, n.jsx)(ht.jGG, {}),
                (0, n.jsx)("span", {
                  children: (0, $.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        Qt([x.oI], Tt.prototype, "OnClick", 1);
        var Pt = Object.defineProperty,
          re = Object.getOwnPropertyDescriptor,
          Pe = (o, m, b, w) => {
            for (
              var M = w > 1 ? void 0 : w ? re(m, b) : m, j = o.length - 1, O;
              j >= 0;
              j--
            )
              (O = o[j]) && (M = (w ? O(m, b, M) : O(M)) || M);
            return w && M && Pt(m, b, M), M;
          };
        let E = class extends P.Component {
          constructor(o) {
            super(o);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let o = this.props.stats;
            return (0, n.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, n.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, n.jsx)(ht.sED, {}),
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, n.jsx)(Lt, { stats: o }),
              ],
            });
          }
        };
        Pe([x.oI], E.prototype, "HideStats", 1), (E = Pe([D.PA], E));
        let Lt = class extends P.Component {
          constructor(o) {
            super(o);
          }
          createBufferedRange(o) {
            let m = this.props.stats,
              b = [],
              w = o ? "vidbuf" : "audbuf",
              M = o
                ? m.GetNumBufferedVideoRanges()
                : m.GetNumBufferedAudioRanges();
            if (M > 0)
              for (let j = 0; j < M; ++j) {
                let O = (0, $.we)(
                    o
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    j,
                  ),
                  R = o
                    ? m.GetBufferedVideoSegmentForDisplay(j)
                    : m.GetBufferedAudioSegmentForDisplay(j);
                b.push(
                  (0, n.jsxs)(
                    "div",
                    {
                      children: [
                        O,
                        " ",
                        (0, n.jsx)("span", {
                          className: "videoStatsValue",
                          children: R,
                        }),
                      ],
                    },
                    w + j,
                  ),
                );
              }
            else {
              let j = (0, $.we)(
                o
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              b.push((0, n.jsx)("div", { children: j }, w + "none"));
            }
            return b;
          }
          render() {
            let o = this.props.stats;
            return (0, n.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, n.jsxs)("div", {
                    children: [
                      (0, $.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, n.jsx)("span", {
                        className: "videoStatsValue",
                        children: o.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, n.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [o.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, n.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [o.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, $.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, n.jsx)("span", {
                      className: "videoStatsValue",
                      children: o.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Lt = Pe([D.PA], Lt);
        var Et = h(82581),
          ie = Object.defineProperty,
          Yt = Object.getOwnPropertyDescriptor,
          ft = (o, m, b, w) => {
            for (
              var M = w > 1 ? void 0 : w ? Yt(m, b) : m, j = o.length - 1, O;
              j >= 0;
              j--
            )
              (O = o[j]) && (M = (w ? O(m, b, M) : O(M)) || M);
            return w && M && ie(m, b, M), M;
          };
        class St extends P.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = P.createRef();
          m_elSubtitlesPanel = P.createRef();
          m_SubtitlesButtonPos;
          constructor(m) {
            super(m), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(m) {
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                m.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(m) {
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                m.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(m) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, B.id)(this.m_elSettingsPanel, m.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, B.id)(this.m_elSubtitlesPanel.current, m.target) ||
                this.setState({ bSubtitlesOpen: !1 });
          }
          bindSettingsButton(m) {
            this.m_elSettingsButton = m;
          }
          BindSettingsPanel(m) {
            this.m_elSettingsPanel = m;
          }
          OnShowStats(m) {
            this.props.onShowStats(m),
              this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
          }
          render() {
            let m = !1,
              b = !1;
            const { video: w, actions: M } = this.props;
            let j,
              O = [],
              R = 0,
              et = (0, n.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const lt = 260,
              gt = 32;
            if (
              (this.state.bSettingsOpen &&
                ((m = !0),
                (j = this.props.video.GetVideoRepresentations()),
                (O = j.map((Mt) =>
                  (0, n.jsx)(
                    Et.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(Mt),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: Mt.selected,
                      children: Mt.displayName,
                    },
                    Mt.id,
                  ),
                )),
                O.push(et),
                O.push(
                  (0, n.jsxs)(
                    Et.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, $.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (R = 0 - (O.length * 21 + gt))),
              this.state.bSubtitlesOpen)
            ) {
              (b = !0),
                (O = []),
                O.push(
                  (0, n.jsx)(
                    Et.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, $.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let Mt = 0;
                Mt < this.props.video.ListSubtitles().length;
                Mt++
              ) {
                const Se = this.props.video.ListSubtitles()[Mt];
                O.push(
                  (0, n.jsx)(
                    Et.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(Se.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: Se.mode === "showing",
                      children: Se.label,
                    },
                    Se.language,
                  ),
                );
              }
              R = 0 - (lt + gt);
            }
            const Xt =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, n.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                Xt &&
                  (0, n.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (Xt ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, n.jsx)(ht.N8C, {}),
                  }),
                (0, n.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (m ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, n.jsx)(ht.wB_, {}),
                }),
                (0, n.jsx)(vt, { video: w }),
                M &&
                  M.map((Mt) =>
                    (0, n.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: Mt,
                      },
                      Mt.key,
                    ),
                  ),
                m &&
                  (0, n.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: R,
                    },
                    children: (0, n.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: O,
                    }),
                  }),
                b &&
                  (0, n.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: lt + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: R,
                    },
                    children: (0, n.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: O,
                    }),
                  }),
              ],
            });
          }
        }
        ft([x.oI], St.prototype, "OnVideoControlClick", 1),
          ft([x.oI], St.prototype, "OnSubtitlesClick", 1),
          ft([x.oI], St.prototype, "OnMouseUp", 1),
          ft([x.oI], St.prototype, "bindSettingsButton", 1),
          ft([x.oI], St.prototype, "BindSettingsPanel", 1),
          ft([x.oI], St.prototype, "OnShowStats", 1);
        const Ht = !0;
        let vt = class extends P.Component {
          constructor(o) {
            super(o), (0, Ft.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = Ht;
          m_schHideSlider = new q.LU();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let o = this.props.video,
              m = o.IsMuted();
            o.SetMute(!m), o.GetVolume() < 0.01 && o.SetVolume(0.5);
          }
          OnMouseEnter(o) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(o) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(o) {
            (this.m_bChildDragging = o), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = Ht),
              );
          }
          render() {
            let o = this.props.video,
              m = o.IsMuted(),
              b = o.GetVolume() * 100,
              w = "videoControlButton";
            b > 65
              ? (w += " HighestVolume")
              : b > 45
                ? (w += " HighVolume")
                : b < 46 && b > 24
                  ? (w += " MedVolume")
                  : b < 25 && (w += " LowVolume");
            let M = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (M += " ShowVolumeSlider"),
              m && (M += " muted"),
              (0, n.jsx)("div", {
                className: M,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, n.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, n.jsx)("div", {
                      className: w,
                      onClick: this.ToggleMute,
                      children: (0, n.jsx)(ht.fSs, {}),
                    }),
                    (0, n.jsx)(bt, { video: o, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        ft([Ft.sH], vt.prototype, "m_bShowSlider", 2),
          ft([x.oI], vt.prototype, "ToggleMute", 1),
          ft([x.oI], vt.prototype, "OnMouseEnter", 1),
          ft([x.oI], vt.prototype, "OnMouseLeave", 1),
          ft([x.oI], vt.prototype, "OnChildDrag", 1),
          (vt = ft([D.PA], vt));
        let bt = class extends P.Component {
          constructor(o) {
            super(o), (0, Ft.Gn)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(o) {
            let m = o.currentTarget;
            (this.m_elSlider = m),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(m, o.clientX),
              m.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              m.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.props.onDrag(!0);
          }
          OnMouseMove(o) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, o.clientX);
          }
          OnMouseUp(o) {
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, o.clientX);
            let m = this.props.video;
            m.IsMuted() && m.SetVolume(this.m_nVolumeStartOfDrag),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(o, m) {
            let b = o.getBoundingClientRect(),
              w = V.Fu(m, b.left, b.right, 0, 1),
              M = V.OQ(w, 0, 1),
              j = this.props.video;
            j.SetMute(w < 0.01), j.SetVolume(M);
          }
          render() {
            let o = this.props.video,
              m = o.GetVolume() * 100;
            o.IsMuted() && (m = 0);
            let w = { left: `${m}%` },
              M = { width: `${m}%` };
            return (0, n.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, n.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, n.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: M,
                }),
                (0, n.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: w,
                }),
              ],
            });
          }
        };
        ft([x.oI], bt.prototype, "OnMouseDown", 1),
          ft([x.oI], bt.prototype, "OnMouseMove", 1),
          ft([x.oI], bt.prototype, "OnMouseUp", 1),
          ft([Ft.XI], bt.prototype, "SetVolumeWithCoord", 1),
          (bt = ft([D.PA], bt));
        var Ut = h(43434),
          Gt = Object.defineProperty,
          He = Object.getOwnPropertyDescriptor,
          U = (o, m, b, w) => {
            for (
              var M = w > 1 ? void 0 : w ? He(m, b) : m, j = o.length - 1, O;
              j >= 0;
              j--
            )
              (O = o[j]) && (M = (w ? O(m, b, M) : O(M)) || M);
            return w && M && Gt(m, b, M), M;
          };
        const Jt = 3200,
          T = 15;
        let ut = class extends P.Component {
          m_schHideControls = new q.LU();
          m_schUnmountControls = new q.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new q.Ji();
          constructor(o) {
            super(o),
              (this.state = {
                bMountControls: !1,
                bControlsVisible: !1,
                bShowStats: !1,
                video: null,
                nResizedHeight: null,
                bFullscreen: !1,
              });
          }
          StopVideo() {
            let o = this.state.video;
            o &&
              (_.es.StopVideo(o),
              this.setState({ video: null }),
              this.props.fnSetBroadcastVideo?.(null));
          }
          IsMuted() {
            let o = this.state.video;
            return !o || o.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let o = this.state.video;
            o && o.StopPlaybackTillUserInput();
          }
          componentDidUpdate(o, m) {
            !m.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((w) => ({
                    bControlsVisible: w.bMountControls,
                  }));
                }, 15)
              : m.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== o.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const b = this.props.nAppIDVOD;
            b &&
              (m.strInitialCapsuleImageUrl === void 0 || o.nAppIDVOD != b) &&
              pt.A.Get()
                .QueueAppRequest(b, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const M =
                    pt.A.Get().GetApp(b)?.GetAssets()?.GetMainCapsuleURL() ||
                    "";
                  this.setState({ strInitialCapsuleImageUrl: M });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(o) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = o),
              o &&
                (this.m_listeners.AddEventListener(
                  o,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  o,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  o,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  o,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(o) {
            let m = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? o &&
                  (m = _.es.CreateBroadcastVideo(
                    o,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? o &&
                    (m = _.es.CreateClipVideo(
                      o,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    o &&
                    ((m = _.es.CreateVODVideo(
                      o,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      m.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              m &&
                (this.props.bStartMuted && m.SetMute(!0),
                this.props.bStartWithSubtitles && m.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? m.StopPlaybackTillUserInput()
                  : m.Play()),
              this.setState({ video: m }),
              this.props.fnSetBroadcastVideo?.(m),
              (this.m_elVideo = o);
          }
          OnMouseDown(o) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = o.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(o) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(Jt, this.HideControls);
          }
          OnMouseMove(o) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(Jt, this.HideControls);
          }
          OnMouseLeave(o) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({ bControlsVisible: !1 });
          }
          UmountControls() {
            this.setState((o) =>
              !o.bControlsVisible && o.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let o = this.state.video;
            if (!o) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), o.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(o) {
            this.state.bFullscreen ||
              ((0, Kt.lX)(
                (0, n.jsx)(J.tz, { children: this.GetContextMenuItems() }),
                o,
              ),
              o.preventDefault());
          }
          ToggleStatsView(o) {
            let m = !this.state.bShowStats;
            this.setState({ bShowStats: m });
            let b = this.state.video;
            b && b.SetStatsViewIsVisible(m);
          }
          ShowStorePage(o) {
            let m = this.state.video;
            if (!m || !this.props.onOpenLinkInNewWindow) return;
            let b = m.GetBroadcastInfo();
            if (!b) return;
            let w = (0, L.k2)(`${nt.TS.STORE_BASE_URL}app/${b.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(o, w), o.stopPropagation();
          }
          GetContextMenuItems() {
            let o = [],
              m = this.state.video;
            if (!m) return o;
            let b = m.GetBroadcastInfo();
            return (
              o.push(
                (0, n.jsx)(
                  J.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (w) => {
                      this.ToggleStatsView(w);
                    },
                    children: (0, $.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              b &&
                b.m_strAppId != "0" &&
                Number.parseInt(b.m_strAppId) != _.fO &&
                o.push(
                  (0, n.jsx)(
                    J.kt,
                    {
                      onSelected: (w) => {
                        this.ShowStorePage(w);
                      },
                      children: (0, $.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              o
            );
          }
          CloseStats() {
            let o = this.state.video;
            o &&
              this.state.bShowStats &&
              (this.setState({ bShowStats: !1 }), o.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            this.m_elBroadcastPlayer &&
              ((0, B.ww)(this.m_elBroadcastPlayer)
                ? (0, B.MS)(this.m_elBroadcastPlayer)
                : (0, B.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(o) {
            if (!this.m_elBroadcastPlayer) return;
            let m = (0, B.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: m });
          }
          BHideVideoControls() {
            let o = this.state.video;
            return !o || o.GetUserInputNeeded()
              ? !0
              : _.es.GetBroadcastState(o) == _.fK.Error;
          }
          render() {
            const o = this.state.video,
              m = o && o.IsPaused(),
              b = o && o.BHasDASHStats() && this.state.bShowStats,
              w = !!(o && o.IsReplay()),
              M = this.state.bMountControls,
              j = this.state.bControlsVisible || m,
              O = !!(o && o.GetUserInputNeeded()),
              R = o?.GetDASHPlayerStats(),
              et =
                o?.IsBroadcastVOD() &&
                O &&
                this.state.strInitialCapsuleImageUrl;
            let lt = "videoContainer";
            j || (lt += " HidePlayerControls"),
              m && (lt += " VideoPaused"),
              this.state.bFullscreen && (lt += " fullscreenVideo"),
              this.props.classes && (lt += " " + this.props.classes);
            let gt = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (gt = gt.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                gt.push(
                  (0, n.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, $.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              gt.push(
                (0, n.jsx)(
                  "div",
                  {
                    title: (0, $.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const kt = M && !this.BHideVideoControls(),
              Xt = M && !this.state.bFullscreen,
              Mt =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, n.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: lt,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                Mt &&
                  (0, n.jsx)("div", {
                    className: Q().BroadcastContext,
                    children: Mt,
                  }),
                w && (0, n.jsx)(Rt, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, n.jsx)(rt.m, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, n.jsx)("video", {
                  className: "videoSrc",
                  ref: this.BindVideoRef,
                  muted: this.props.bMuted ?? !0,
                  autoPlay: !0,
                  playsInline: !0,
                  controls: !1,
                  onVolumeChange: this.props.fnVolumeChanged,
                  onClick: this.props.fnVideoClick,
                }),
                this.props.linkRegions
                  ? (0, n.jsx)(wt, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                et &&
                  (0, n.jsx)("img", {
                    loading: "lazy",
                    className: (0, $t.A)(
                      Q().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                kt &&
                  o &&
                  (0, n.jsx)(A, {
                    video: o,
                    actions: gt,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                Xt && (0, n.jsx)(i, { onClick: this.props.onRequestClose }),
                b &&
                  R &&
                  (0, n.jsx)(E, { stats: R, closeStats: this.CloseStats }),
                (0, n.jsx)(zt, { video: o }),
                O && o && (0, n.jsx)(Tt, { video: o }),
              ],
            });
          }
        };
        U([x.oI], ut.prototype, "BindBroadcastPlayerRef", 1),
          U([x.oI], ut.prototype, "BindVideoRef", 1),
          U([x.oI], ut.prototype, "OnMouseDown", 1),
          U([x.oI], ut.prototype, "OnMouseUp", 1),
          U([x.oI], ut.prototype, "OnMouseMove", 1),
          U([x.oI], ut.prototype, "OnMouseLeave", 1),
          U([x.oI], ut.prototype, "HideControls", 1),
          U([x.oI], ut.prototype, "UmountControls", 1),
          U([x.oI], ut.prototype, "ShowStatsView", 1),
          U([x.oI], ut.prototype, "OnContextMenu", 1),
          U([x.oI], ut.prototype, "ToggleStatsView", 1),
          U([x.oI], ut.prototype, "ShowStorePage", 1),
          U([x.oI], ut.prototype, "CloseStats", 1),
          U([x.oI], ut.prototype, "OnToggleFullscreen", 1),
          U([x.oI], ut.prototype, "OnFullscreenChange", 1),
          (ut = U([D.PA], ut));
        let A = class extends P.Component {
          render() {
            const { video: o } = this.props;
            if (!o) return null;
            let m = o.has_segments;
            return (0, n.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, n.jsx)(yt, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, n.jsxs)("div", {
                  className: "videoControlsBottom" + (m ? "" : " noSegments"),
                  children: [
                    (0, n.jsx)(C, {
                      video: o,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, n.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, n.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, n.jsx)(l, { video: o }),
                        (0, n.jsx)(p, { video: o }),
                        (0, n.jsx)(St, {
                          video: o,
                          actions: this.props.actions,
                          onShowStats: this.props.onShowStats,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        A = U([D.PA], A);
        class i extends P.PureComponent {
          render() {
            return this.props.onClick
              ? (0, n.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, n.jsx)(ht.sED, {}),
                })
              : null;
          }
        }
        class l extends P.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-T);
          }
          OnJumpForward() {
            this.props.video.JumpTime(T);
          }
          render() {
            let m = this.props.video,
              b = m.CanSeek();
            return (0, n.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, n.jsx)(z, { video: m }),
                b &&
                  (0, n.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, n.jsx)(ht.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, n.jsx)("div", {
                        className: "jumpAheadValue",
                        children: T,
                      }),
                    ],
                  }),
                (0, n.jsx)(I, { video: m }),
                b &&
                  (0, n.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, n.jsx)(ht.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: "jumpAheadValue",
                        children: T,
                      }),
                    ],
                  }),
                b && (0, n.jsx)(F, { video: m }),
              ],
            });
          }
        }
        U([x.oI], l.prototype, "OnJumpBackward", 1),
          U([x.oI], l.prototype, "OnJumpForward", 1);
        const p = (0, D.PA)((o) => {
          if (o.video.IsBroadcastClip() || o.video.IsBroadcastVOD())
            return null;
          const m = (w) => {
            o.video.JumpToLiveEdge();
          };
          let b = o.video.IsOnLiveEdge();
          return (0, n.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, n.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (b ? " isLiveEdge" : ""),
              onClick: b ? void 0 : m,
              children: [
                (0, n.jsx)(ht.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, n.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, $.we)(
                    b
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let I = class extends P.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let m = this.props.video.IsPaused();
            return (0, n.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: m ? (0, n.jsx)(ht.jGG, {}) : (0, n.jsx)(ht.vRz, {}),
            });
          }
        };
        U([x.oI], I.prototype, "OnTogglePlayPause", 1), (I = U([D.PA], I));
        let z = class extends P.Component {
          constructor(o) {
            super(o), (0, Ft.Gn)(this), (this.video = o.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const o = this.video;
            if (!o?.has_markers) return;
            let m = o.GetTimelineMarkers(),
              b = o.GetPlaybackTime();
            for (let w = m.length - 1; w >= 0; w--)
              if (!(m[w].nTime >= b)) return m[w].nTime;
          }
          OnJumpToPreviousMarkerClicked(o) {
            let m = this.GetPreviousMarkerTime();
            m !== void 0 && this.props.video.Seek(m - 0.2);
          }
          render() {
            let o = this.props.video.BHasMarkersOrSegments();
            return (0, n.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (o ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, n.jsx)(ht.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        U([Ft.sH], z.prototype, "video", 2),
          U([Ft.EW], z.prototype, "has_previous_marker", 1),
          U([x.oI], z.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (z = U([D.PA], z));
        let F = class extends P.Component {
          constructor(o) {
            super(o), (0, Ft.Gn)(this), (this.video = o.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const o = this.video;
            if (!o?.has_markers) return;
            let m = o.GetTimelineMarkers(),
              b = o.GetPlaybackTime();
            for (let w = 0; w < m.length; w++)
              if (!(m[w].nTime <= b)) return m[w].nTime;
          }
          OnJumpToNextMarkerClicked(o) {
            let m = this.GetNextMarkerTime();
            m !== void 0 && this.props.video.Seek(m);
          }
          render() {
            let o = this.props.video.BHasMarkersOrSegments();
            return (0, n.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (o ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, n.jsx)(ht.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        U([Ft.sH], F.prototype, "video", 2),
          U([Ft.EW], F.prototype, "has_next_marker", 1),
          U([x.oI], F.prototype, "OnJumpToNextMarkerClicked", 1),
          (F = U([D.PA], F));
        const N = (o) => {
          let m = () => o.onMouseEnter(o.pos);
          return (0, n.jsx)("div", {
            className: "timelineMarker",
            title: o.label,
            style: { left: o.pos + "%" },
            onMouseEnter: m,
            onMouseLeave: o.onMouseLeave,
            onMouseDown: o.onMouseDown ? o.onMouseDown : void 0,
            children: (0, n.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, n.jsx)(ht.Dp6, {}),
            }),
          });
        };
        function st(o) {
          let m = o.startPos,
            b = o.endPos,
            w = "",
            M = 1;
          return (
            m < 0 && ((M = (b - m) / 10), (m = 0), (w = " hideFront")),
            (0, n.jsxs)("div", {
              className: "STV_timelineSegment" + w,
              style: { left: m + "%", width: b - m + "%", opacity: M },
              onClick: o.onClick,
              children: [
                (0, n.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + o.color + ")" },
                }),
                (0, n.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + o.color + ")" },
                  children: o.label,
                }),
                (0, n.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + o.color + ")" },
                }),
              ],
            })
          );
        }
        let C = class extends P.Component {
          m_elSlider = P.createRef();
          m_rectSlider = void 0;
          constructor(o) {
            super(o),
              (this.state = {
                nGrabberMouseDownTime: 0,
                bGrabberMouseDown: !1,
                nHoverValue: void 0,
                hoverX: 0,
                bStartMouseDown: !1,
                bEndMouseDown: !1,
                thumbnailURL: "",
              });
          }
          OnMouseDown(o, m) {
            const b = this.m_elSlider.current;
            if (b) {
              o.persist(), (this.m_rectSlider = b.getBoundingClientRect());
              let w = {};
              m === "start"
                ? ((w = { bStartMouseDown: !0 }), o.stopPropagation())
                : m === "end"
                  ? ((w = { bEndMouseDown: !0 }), o.stopPropagation())
                  : (w = { bGrabberMouseDown: !0 }),
                this.setState(w, () => this.AdjustSliderForClientX(o.clientX)),
                b.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                b.ownerDocument.defaultView?.addEventListener(
                  "mouseup",
                  this.OnMouseUp,
                );
            }
          }
          OnMouseMove(o) {
            this.AdjustSliderForClientX(o.clientX);
          }
          OnMouseUp(o) {
            this.state.bStartMouseDown
              ? this.setState({ bStartMouseDown: !1 })
              : this.state.bEndMouseDown
                ? this.setState({ bEndMouseDown: !1 })
                : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                  this.setState({
                    bGrabberMouseDown: !1,
                    nGrabberMouseDownTime: 0,
                  })),
              this.m_elSlider.current &&
                (this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mouseup",
                  this.OnMouseUp,
                ));
          }
          OnKeyDown(o) {
            o.keyCode == mt.ek
              ? (this.props.video.JumpTime(-1 * T), o.preventDefault())
              : o.keyCode == mt.JI &&
                (this.props.video.JumpTime(1 * T), o.preventDefault());
          }
          AdjustSliderForClientX(o) {
            const m = this.m_rectSlider;
            if (!m) return;
            let b = this.props.video,
              w = b.GetTimelineStartPos(),
              M = b.GetTimelineStartPos() + b.GetTimelineDuration(),
              j = b.GetTimeAtMousePosition(o, m, w, M);
            const O = 5;
            if (this.state.bStartMouseDown) {
              const R = V.OQ(j, w, b.m_editorEndTime - O);
              b.m_editorStartTime = R;
            } else if (this.state.bEndMouseDown) {
              const R = V.OQ(j, b.m_editorStartTime + O, M);
              b.m_editorEndTime = R;
            } else
              j != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: j });
          }
          OnMouseHoverMove(o) {
            this.AdjustHoverForClientX(o.clientX);
          }
          OnMouseHoverLeave(o) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(o) {
            let m = this.props.video,
              b = m.GetTimelineStartPos(),
              w = m.GetTimelineStartPos() + m.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let M =
              this.m_rectSlider &&
              m.GetTimeAtMousePosition(o, this.m_rectSlider, b, w);
          }
          OnSegmentClick(o) {
            this.props.video.Seek(o);
          }
          OnMarkerMouseEnter(o) {
            this.setState({ nHoverValue: o });
          }
          OnMarkerMouseLeave() {
            this.setState({ nHoverValue: void 0 });
          }
          render() {
            let o = this.props.video,
              m = this.state.bGrabberMouseDown,
              b = o.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                _.a0.Timeline,
              ),
              w = o.GetPercentOffsetFromTime(
                o.GetPlaybackTime(),
                _.a0.Timeline,
              ),
              M = o.GetPercentOffsetFromTime(
                o.GetVideoAvailableStartTime(),
                _.a0.Timeline,
              );
            M < 0.05 && (M = 0);
            let j = V.OQ(b, 0, 100).toFixed(1) + "%",
              O = V.OQ(w, 0, 100).toFixed(1) + "%",
              R = V.OQ(M, 0, 100).toFixed(1) + "%",
              et = {},
              lt = {},
              gt = {},
              kt = {};
            m
              ? ((kt.left = j), (et.width = j), (lt.width = O), (gt.width = R))
              : ((kt.left = O), (lt.width = O), (gt.width = R));
            let Xt = (0, it.ap)(o.GetPlaybackTime()),
              Mt = (0, it.ap)(this.state.nHoverValue ?? 0),
              Se = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (Se += " grabberDown"),
              o.IsTimelineMapActive() && (Se += " minimapActive");
            let se = "";
            (b = m ? b : w),
              b > 100
                ? (se = " grabberOffScreenRight grabberOffscreen")
                : b < 0 && (se = " grabberOffScreenLeft grabberOffscreen");
            let ae = [];
            o.GetTimelineMarkers().forEach((jt, nr) => {
              let Le = o.GetPercentOffsetFromTime(jt.nTime, _.a0.Timeline);
              Le < 0 ||
                Le > 100 ||
                ae.push(
                  (0, n.jsx)(
                    N,
                    {
                      pos: Le,
                      label: jt.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    nr,
                  ),
                );
            });
            let oe = [];
            o.GetTimelineSegments().forEach((jt, nr) => {
              let Le = o.GetPercentOffsetFromTime(jt.nTimeStart, _.a0.Timeline);
              if (Le > 100) return;
              let yr = o.GetPercentOffsetFromTime(jt.nTimeEnd, _.a0.Timeline);
              yr < 0 ||
                oe.push(
                  (0, n.jsx)(
                    st,
                    {
                      startPos: Le,
                      endPos: yr,
                      label: jt.strTemplateName,
                      color: jt.color,
                      onClick: (H) => this.OnSegmentClick(jt.nTimeStart),
                    },
                    nr,
                  ),
                );
            });
            const ue = o.GetPercentOffsetFromTime(
                o.m_editorStartTime,
                _.a0.Timeline,
              ),
              me = o.GetPercentOffsetFromTime(o.m_editorEndTime, _.a0.Timeline),
              fe = this.props.bIncludeClipEditor
                ? [
                    (0, n.jsx)(
                      N,
                      {
                        pos: ue,
                        label: (0, $.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (jt) => this.OnMouseDown(jt, "start"),
                      },
                      "start",
                    ),
                    (0, n.jsx)(
                      N,
                      {
                        pos: me,
                        label: (0, $.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (jt) => this.OnMouseDown(jt, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, n.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, n.jsxs)("div", {
                className: Se,
                children: [
                  (0, n.jsx)("div", { className: "DialogLabel", children: Xt }),
                  (0, n.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: oe,
                  }),
                  (0, n.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, n.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, n.jsx)("div", {
                          className: "STV_timelineValue",
                          style: et,
                        }),
                        (0, n.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: lt,
                        }),
                        (0, n.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: gt,
                        }),
                        ae,
                        fe,
                        !!this.state.hoverX &&
                          (0, n.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, n.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, n.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, n.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: Mt,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, n.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: kt,
                          children: (0, n.jsx)("div", {
                            className: "STV_timelineGrabber" + se,
                            children: (0, n.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, n.jsx)(ht.apU, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        U([x.oI], C.prototype, "OnMouseDown", 1),
          U([x.oI], C.prototype, "OnMouseMove", 1),
          U([x.oI], C.prototype, "OnMouseUp", 1),
          U([x.oI], C.prototype, "OnKeyDown", 1),
          U([x.oI], C.prototype, "OnMouseHoverMove", 1),
          U([x.oI], C.prototype, "OnMouseHoverLeave", 1),
          U([x.oI], C.prototype, "AdjustHoverForClientX", 1),
          U([x.oI], C.prototype, "OnSegmentClick", 1),
          U([x.oI], C.prototype, "OnMarkerMouseEnter", 1),
          U([x.oI], C.prototype, "OnMarkerMouseLeave", 1),
          (C = U([D.PA], C));
        let yt = class extends P.Component {
          state = { info: null };
          static getDerivedStateFromProps(o, m) {
            return (!m.info || m.info.m_steamIDBroadcast !== o.steamID) &&
              (m.info && (_.es.StopInfo(m.info), (m.info = null)), o.steamID)
              ? { info: _.es.StartInfo(o.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && _.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const o = this.props.steamID,
              m = this.props.onLocalStreamChange;
            return m && ot.td.stream[o]
              ? (0, n.jsx)(Ie, { value: o, options: ot.td.stream, onChange: m })
              : null;
          }
          render() {
            let { info: o } = this.state;
            if (!o) return null;
            let m = "";
            o.m_nViewerCount && (m = (0, ne.Dq)(o.m_nViewerCount));
            let b =
                ot.td.bValid &&
                ot.td.stream &&
                ot.td.stream[o.m_steamIDBroadcast],
              w =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(o.m_strAppId) > 0 || b);
            const M =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              b &&
              ot.td.gidEvent;
            return (0, n.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, n.jsx)(Ee, {
                    className: "broadcastDetailsThumbBlur",
                    src: o.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, n.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    o &&
                      o.m_strAppTitle &&
                      (0, n.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, n.jsx)("span", {
                                className: "AppTitle",
                                children: o.m_strAppTitle,
                              }),
                              o.m_strTitle &&
                                (0, n.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", o.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          m &&
                            (0, n.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, n.jsx)(ht.y_e, {}),
                                (0, $.Yp)("#Broadcast_ViewerCount", m),
                              ],
                            }),
                        ],
                      }),
                    b &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, n.jsx)("div", {
                        className: "Actions",
                        children: (0, n.jsx)("div", {
                          onClick: (j) =>
                            this.props.onOpenLinkInNewWindow?.(j, ot.td.link),
                          className: "BroadcastLink",
                          children: ot.td.linkName,
                        }),
                      }),
                  ],
                }),
                M && (0, n.jsx)(Nt.m, { gidEvent: ot.td.gidEvent }),
                w &&
                  (0, n.jsx)(te.p, {
                    id:
                      ot.td.bValid &&
                      ot.td.stream &&
                      ot.td.stream[o.m_steamIDBroadcast]
                        ? ot.td.appID
                        : parseInt(o.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        yt = U([D.PA], yt);
        class Ie extends P.Component {
          showContextMenu(m) {
            const { options: b, value: w, onChange: M } = this.props,
              j = Object.keys(b).map((O) =>
                (0, n.jsx)(
                  J.IK,
                  {
                    onSelected: () => M(O),
                    bChecked: O === w,
                    children: (0, $.we)(b[O]),
                  },
                  O,
                ),
              );
            (0, Kt.lX)((0, n.jsx)(J.tz, { children: j }), m);
          }
          render() {
            const { value: m, options: b } = this.props,
              w = b[m];
            return (0, n.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, n.jsxs)("span", { children: ["\xA0- ", (0, $.we)(w)] }),
                (0, n.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, n.jsx)(ht.GB9, {}),
                }),
              ],
            });
          }
        }
        U([x.oI], Ie.prototype, "showContextMenu", 1);
        let wt = class extends P.Component {
          constructor(o) {
            super(o), (this.state = { sizableRegion: [] });
          }
          async AddLinkRegion() {
            let o = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + o,
              yPosPct: 2.5 + o,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          componentDidUpdate(o) {
            o.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((m, b) => {
                this.LoadLinkRegion(m, b);
              });
          }
          async LoadLinkRegion(o, m) {
            let b = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: o.left,
              yPosPct: o.top,
              widthPct: o.width,
              heightPct: o.height,
              link_url: o.url,
              link_description: o.link_description,
              link_index: o.link_index,
            }),
              await this.setState({ sizableRegion: this.state.sizableRegion });
          }
          OnSaveRegions() {
            let o;
            o = { links: [] };
            for (let m = 0; m < this.state.sizableRegion.length; m++) {
              let b;
              (b = {
                left: Math.floor(this.state.sizableRegion[m].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[m].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[m].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[m].heightPct * 100),
                url: this.state.sizableRegion[m].link_url,
                link_description: this.state.sizableRegion[m].link_description,
                link_index: m,
              }),
                o.links.push(b);
            }
            this.props.onSaveLinkRegions?.(o);
          }
          async DeleteRegion(o) {
            this.state.sizableRegion.splice(o, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(o, m) {
            const b = [...this.state.sizableRegion];
            (b[o] = m),
              this.setState({ sizableRegion: b }, () => this.OnSaveRegions());
          }
          render() {
            return (0, n.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, n.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((o) => {
                          const m = (0, Ut.p)(o.url);
                          return (0, n.jsx)(
                            dt.uU,
                            {
                              href: o.url,
                              bForceExternal: m,
                              bUseLinkFilter: m,
                              children: (0, n.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: o.left + "%",
                                  top: o.top + "%",
                                  width: o.width + "%",
                                  height: o.height + "%",
                                },
                                children: (0, n.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [o.link_description, " "],
                                }),
                              }),
                            },
                            o.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((o, m) =>
                        (0, n.jsx)(
                          ee.I,
                          {
                            index: m,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: o.xPosPct,
                            yPosPct: o.yPosPct,
                            widthPct: o.widthPct,
                            heightPct: o.heightPct,
                            link_url: o.link_url,
                            link_description: o.link_description,
                          },
                          m * 100 + o.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, n.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, $.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, n.jsx)("div", {
                    children: (0, $.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        U([x.oI], wt.prototype, "AddLinkRegion", 1),
          U([x.oI], wt.prototype, "LoadLinkRegion", 1),
          U([x.oI], wt.prototype, "OnSaveRegions", 1),
          U([x.oI], wt.prototype, "DeleteRegion", 1),
          U([x.oI], wt.prototype, "UpdatePanel", 1),
          (wt = U([D.PA], wt));
      },
      22950: (qt, ve, h) => {
        "use strict";
        h.d(ve, { es: () => ut, fK: () => ft, a0: () => Jt, fO: () => Yt });
        var n = h(41735),
          Ft = h.n(n),
          D = h(14947),
          P = h(6600),
          Kt = h(90828);
        function mt(A, i, l) {
          return [A, i, l];
        }
        class L extends Error {}
        class _ extends Kt.J8 {
          m_appid;
          constructor(i) {
            super(), (this.m_appid = i || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(i) {
            if (typeof i != "string" || !i.match(/^#[0-9a-fA-F]{6}$/))
              throw new L("expected color string");
            return [
              parseInt(i.substring(1, 3), 16),
              parseInt(i.substring(3, 5), 16),
              parseInt(i.substring(5, 7), 16),
            ];
          }
          parseString(i) {
            if (typeof i == "string") return i;
            throw new L("expected string");
          }
          parseNumber(i) {
            if (typeof i == "number") return i;
            throw new L("expected number");
          }
          parseDate(i) {
            if (typeof i == "number") return new Date(i);
            throw new L("expected timestamp");
          }
          parseArray(i, l) {
            let p = [];
            if (typeof i != "object" || !Array.isArray(i))
              throw new L("expected array");
            let I = i.length;
            for (let z = 0; z < I; ++z)
              try {
                p.push(l(i[z]));
              } catch (F) {
                throw (
                  ((F.message +=
                    `
...while parsing array element ` + z),
                  F)
                );
              }
            return p;
          }
          parseDict(i, l) {
            let p = new Map();
            if (typeof i != "object" || Array.isArray(i))
              throw new L("expected object");
            for (let I in i)
              try {
                p.set(I, l(i[I]));
              } catch (z) {
                throw (
                  ((z.message +=
                    `
...while parsing dictionary element ` + I),
                  z)
                );
              }
            return p;
          }
          parseBracket(i) {
            let l = {
              name: this.parseString(i.name),
              start: this.parseDate(i.start),
              color: [255, 0, 255],
            };
            return (
              "params" in i &&
                (l.params = this.parseDict(
                  i.params,
                  this.parseString.bind(this),
                )),
              "end" in i && (l.end = this.parseDate(i.end)),
              "color" in i && (l.color = this.parseColor(i.color)),
              l
            );
          }
          parseMarker(i) {
            let l = { time: this.parseDate(i.time), color: [0, 255, 255] };
            return (
              "name" in i && (l.name = this.parseString(i.name)),
              "params" in i &&
                (l.params = this.parseDict(
                  i.params,
                  this.parseString.bind(this),
                )),
              "color" in i && (l.color = this.parseColor(i.color)),
              l
            );
          }
          parseSoundTrack(i) {
            let l = {};
            return (
              "song_title" in i &&
                (l.song_title = this.parseString(i.song_title)),
              "appid" in i && (l.appid = this.parseNumber(i.appid)),
              "song_index" in i &&
                (l.song_index = this.parseNumber(i.song_index)),
              l
            );
          }
          parseBroadcastGameData(i) {
            let l = { appid: 0, brackets: [], markers: [] };
            return (
              "appid" in i && (l.appid = this.parseNumber(i.appid)),
              "brackets" in i &&
                (l.brackets = this.parseArray(
                  i.brackets,
                  this.parseBracket.bind(this),
                )),
              "markers" in i &&
                (l.markers = this.parseArray(
                  i.markers,
                  this.parseMarker.bind(this),
                )),
              "soundtrack" in i &&
                (l.soundtrack = this.parseSoundTrack(i.soundtrack)),
              l
            );
          }
          convertTime(i, l) {
            return i - l / 1e3;
          }
          UpdateMarkers(i, l) {
            let p = [],
              I = [];
            for (const z of i)
              z.persistent
                ? (I.length > 0 &&
                    (I[I.length - 1].nTimeEnd = this.convertTime(
                      z.Timestamp,
                      l,
                    )),
                  z.name.length > 0 &&
                    I.push({
                      strTemplateName: z.name,
                      nTimeStart: this.convertTime(z.Timestamp, l),
                      nTimeEnd: -1,
                      color: mt(z.color_r, z.color_g, z.color_b),
                    }))
                : p.push({
                    strTemplateName: z.name,
                    nTime: this.convertTime(z.Timestamp, l),
                    color: mt(z.color_r, z.color_g, z.color_b),
                  });
            return { rgMarkers: p, rgSegments: I };
          }
          UpdateRegions(i) {
            let l = [];
            for (const p of i)
              l.push({
                strTemplateName: p.name,
                min: { x: p.min_x, y: p.min_y },
                max: { x: p.max_x, y: p.max_y },
                behavior: p.behavior,
              });
            return l;
          }
          UpdateSoundtrack(i, l) {}
        }
        var pt = h(48937),
          rt = h(89083),
          J = h(13854),
          v = h(3166),
          xt = h(27066),
          De = h(7409),
          Vt = h(14043),
          Wt = h(8323),
          Bt = h(72604),
          g = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          r = (A, i, l, p) => {
            for (
              var I = p > 1 ? void 0 : p ? c(i, l) : i, z = A.length - 1, F;
              z >= 0;
              z--
            )
              (F = A[z]) && (I = (p ? F(i, l, I) : F(I)) || I);
            return p && I && g(i, l, I), I;
          };
        const ur = 250,
          lr = 250;
        class Qe {
          m_elVideo;
          m_peerConnection = null;
          m_strBroadcastSteamID = "";
          m_ulWebRTCSessionID = "";
          m_schCandidateTimer = new Wt.LU();
          m_nHostCandidateGeneration = 0;
          m_nCandidateUpdateIntervalMS = 0;
          m_listeners = new Wt.Ji();
          m_bFirstPlay = !0;
          m_bStatsViewVisible = !1;
          m_schCaptureDisplayStatsTrigger = new Wt.LU();
          m_stats = new De._L();
          constructor(i) {
            (0, D.Gn)(this), (this.m_elVideo = i);
          }
          async PlayMPD(i, l, p) {}
          async PlayWebRTC(i, l, p, I, z) {
            (this.m_strBroadcastSteamID = i),
              (this.m_ulWebRTCSessionID = p),
              (this.m_nHostCandidateGeneration = 0),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "resize",
                this.OnVideoResize,
              );
            let F = { urls: ["stun:" + I] },
              N = { urls: ["turn:" + I], username: l, credential: p },
              st = { iceServers: [F, N], iceTransportPolicy: "relay" };
            const C = new RTCPeerConnection(st);
            (this.m_peerConnection = C),
              (C.oniceconnectionstatechange = ((yt) => {
                this.m_peerConnection &&
                  (console.log(
                    "BroadcastWebRTC: ICE connection state changed to " +
                      this.m_peerConnection.iceConnectionState,
                  ),
                  this.m_peerConnection.iceConnectionState === "failed"
                    ? this.OnWebRTCConnectionFailed()
                    : this.m_peerConnection.iceConnectionState ===
                        "disconnected" && this.OnWebRTCConnectionRetry());
              }).bind(this)),
              (C.onicecandidate = ((yt) => {
                if (yt.candidate) {
                  const Ie = new FormData();
                  Ie.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    Ie.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    Ie.append("sdp_mid", String(yt.candidate.sdpMid)),
                    Ie.append(
                      "sdp_mline_index",
                      String(yt.candidate.sdpMLineIndex),
                    ),
                    Ie.append("candidate", yt.candidate.candidate),
                    Ft()
                      .post(
                        `${v.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        Ie,
                      )
                      .then((wt) => {
                        const o = wt.data;
                        (o.success && o.success == Bt.R) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String(o.success),
                          );
                      })
                      .catch((wt) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + wt,
                        ),
                      );
                }
              }).bind(this)),
              (C.ontrack = ((yt) => {
                yt.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = yt.streams[0]),
                  this.Play());
              }).bind(this)),
              C.setRemoteDescription({ type: "offer", sdp: z }).then(
                async () => {
                  await C.setLocalDescription(await C.createAnswer());
                  const yt = new FormData();
                  yt.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    yt.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    yt.append("answer", C.localDescription?.sdp ?? "");
                  try {
                    await Ft()
                      .post(
                        `${v.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                        yt,
                      )
                      .then((Ie) => {
                        const wt = Ie.data;
                        if (!(wt.success && wt.success == Bt.R))
                          throw new Error(String(wt.success));
                      });
                  } catch (Ie) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + Ie,
                    ),
                      this.OnWebRTCConnectionRetry();
                    return;
                  }
                  (this.m_nCandidateUpdateIntervalMS = ur),
                    this.m_schCandidateTimer.Schedule(
                      this.m_nCandidateUpdateIntervalMS,
                      () => this.GetHostCandidates(),
                    );
                },
              );
          }
          async GetHostCandidates() {
            const i = new FormData();
            i.append("broadcaststeamid", this.m_strBroadcastSteamID),
              i.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              i.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration),
              );
            try {
              await Ft()
                .post(
                  `${v.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  i,
                )
                .then((l) => {
                  const p = l.data,
                    I = p.data,
                    z = this.m_peerConnection;
                  if (p.success && p.success == Bt.R)
                    z &&
                    I.candidate_generation > this.m_nHostCandidateGeneration
                      ? (I.candidates.forEach((F) => {
                          const N = new RTCIceCandidate({
                            sdpMid: F.sdp_mid,
                            sdpMLineIndex: F.sdp_mline_index,
                            candidate: F.candidate,
                          });
                          z.addIceCandidate(N).catch((st) => console.error(st));
                        }),
                        (this.m_nHostCandidateGeneration =
                          I.candidate_generation))
                      : this.m_nHostCandidateGeneration > 0 &&
                        (this.m_nCandidateUpdateIntervalMS *= 2);
                  else throw new Error(String(p.success));
                });
            } catch (l) {
              console.log("Failed to get WebRTC session ICE candidates" + l),
                this.OnWebRTCConnectionRetry();
              return;
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            );
          }
          DispatchEvent(i, l = null) {
            let p = new CustomEvent(i, {
              cancelable: !0,
              bubbles: !0,
              detail: l,
            });
            this.m_elVideo.dispatchEvent(p);
          }
          OnWebRTCConnectionRetry() {
            this.DispatchEvent("valve-webrtcretry");
          }
          OnWebRTCConnectionFailed() {
            this.DispatchEvent("valve-webrtcfailed");
          }
          Close() {
            this.m_listeners.Unregister(),
              this.m_schCandidateTimer.Cancel(),
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
              this.m_peerConnection &&
                (this.m_peerConnection.close(), (this.m_peerConnection = null)),
              this.m_elVideo.pause(),
              (this.m_elVideo.srcObject = null),
              this.m_stats.GetFPSMonitor().Close(),
              (this.m_bFirstPlay = !0);
          }
          IsBuffering() {
            return !1;
          }
          GetCurrentPlayTime() {
            return 0;
          }
          GetLiveContentStartTime() {
            return new Date(0);
          }
          GetAvailableVideoStartTime() {
            return 0;
          }
          GetBufferedLiveEdgeTime() {
            return 0;
          }
          IsPaused() {
            return this.m_elVideo.paused;
          }
          async Play() {
            const i = this.m_bFirstPlay;
            this.m_bFirstPlay = !1;
            let l = !1;
            const p = () => {
                (l = !0),
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
              },
              I = (F, N) => !1,
              z = (F, N) => !1;
            try {
              await this.m_elVideo.play(), p();
            } catch (F) {
              F.name === "NotAllowedError"
                ? I("Failed to play video, probably due to auto play policy", F)
                : z("Failed to play video", F);
            }
            !l && i && this.DispatchEvent("valve-userinputneeded");
          }
          Pause() {
            this.m_elVideo.pause();
          }
          CanSeek() {
            return !1;
          }
          SeekAndPlay(i) {
            return this.Play(), 0;
          }
          Seek(i) {
            return 0;
          }
          JumpTime(i) {
            return 0;
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(i) {
            this.m_elVideo.muted = i;
          }
          SetVolume(i) {
            (i = J.OQ(i, 0, 1)), (this.m_elVideo.volume = i);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          SetStatsViewIsVisible(i) {
            i && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  lr,
                  this.CaptureStatsForDisplay,
                ))
              : !i &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = i);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                lr,
                this.CaptureStatsForDisplay,
              );
          }
          OnVideoPause(i) {
            this.m_stats.GetFPSMonitor().Close();
          }
          OnVideoResize(i) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          GetVideoRepresentations() {
            let i = [];
            return i.push({ id: Vt.Y, displayName: "Auto", selected: !0 }), i;
          }
          SetVideoRepresentation(i) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        r([xt.o], Qe.prototype, "PlayWebRTC", 1),
          r([D.XI.bound], Qe.prototype, "CaptureStatsForDisplay", 1),
          r([xt.o], Qe.prototype, "OnVideoPause", 1),
          r([xt.o], Qe.prototype, "OnVideoResize", 1);
        var sr = h(99412),
          Ct = h(90711),
          _t = h(41635),
          $t = h(71742),
          ct = h(18210),
          Zt = h(34592),
          Ee = h(40497),
          te = h(9032),
          Nt = h(35038),
          ee = h(77008),
          ht = h(60298),
          dt = h(80613),
          q = h.n(dt),
          B = h(75245);
        function $(A) {
          return "unknown ETrailerConvertState ( " + A + " )";
        }
        function ne(A) {
          return "unknown ETrailerConvertTargetType ( " + A + " )";
        }
        class V extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              V.prototype.video_id || B.Sg(V.M()),
              dt.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    video_id: {
                      n: 1,
                      br: B.qM.readUint64String,
                      bw: B.gp.writeUint64String,
                    },
                    client_cellid: {
                      n: 2,
                      br: B.qM.readUint32,
                      bw: B.gp.writeUint32,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = B.w0(V.M())), V.sm_mbf;
          }
          toObject(i = !1) {
            return V.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(V.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(V.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new V();
            return V.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(V.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return V.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(V.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class x extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              x.prototype.video_id || B.Sg(x.M()),
              dt.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    video_id: {
                      n: 1,
                      br: B.qM.readUint64String,
                      bw: B.gp.writeUint64String,
                    },
                    video_url: {
                      n: 2,
                      br: B.qM.readString,
                      bw: B.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = B.w0(x.M())), x.sm_mbf;
          }
          toObject(i = !1) {
            return x.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(x.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(x.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new x();
            return x.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(x.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return x.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(x.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class nt extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              nt.prototype.encryption_key || B.Sg(nt.M()),
              dt.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    encryption_key: {
                      n: 1,
                      br: B.qM.readBytes,
                      bw: B.gp.writeBytes,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = B.w0(nt.M())), nt.sm_mbf;
          }
          toObject(i = !1) {
            return nt.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(nt.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(nt.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new nt();
            return nt.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(nt.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(nt.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class ot extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ot.prototype.app_id || B.Sg(ot.M()),
              dt.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    app_id: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                    client_cellid: {
                      n: 2,
                      br: B.qM.readUint32,
                      bw: B.gp.writeUint32,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = B.w0(ot.M())), ot.sm_mbf;
          }
          toObject(i = !1) {
            return ot.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(ot.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(ot.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new ot();
            return ot.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(ot.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(ot.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class it extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              it.prototype.app_id || B.Sg(it.M()),
              dt.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    app_id: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                    opf_settings: {
                      n: 2,
                      br: B.qM.readString,
                      bw: B.gp.writeString,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = B.w0(it.M())), it.sm_mbf;
          }
          toObject(i = !1) {
            return it.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(it.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(it.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new it();
            return it.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(it.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return it.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(it.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        }
        class tt extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              tt.prototype.app_id || B.Sg(tt.M()),
              dt.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    app_id: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                    playback_position_in_seconds: {
                      n: 2,
                      br: B.qM.readUint32,
                      bw: B.gp.writeUint32,
                    },
                    video_track_id: {
                      n: 3,
                      br: B.qM.readUint64String,
                      bw: B.gp.writeUint64String,
                    },
                    audio_track_id: {
                      n: 4,
                      br: B.qM.readUint64String,
                      bw: B.gp.writeUint64String,
                    },
                    timedtext_track_id: {
                      n: 5,
                      br: B.qM.readUint64String,
                      bw: B.gp.writeUint64String,
                    },
                    last_modified: {
                      n: 6,
                      br: B.qM.readUint32,
                      bw: B.gp.writeUint32,
                    },
                    hide_from_watch_history: {
                      n: 7,
                      d: !1,
                      br: B.qM.readBool,
                      bw: B.gp.writeBool,
                    },
                    hide_from_library: {
                      n: 8,
                      d: !1,
                      br: B.qM.readBool,
                      bw: B.gp.writeBool,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = B.w0(tt.M())), tt.sm_mbf;
          }
          toObject(i = !1) {
            return tt.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(tt.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(tt.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new tt();
            return tt.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(tt.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(tt.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class Q extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Q.prototype.bookmarks || B.Sg(Q.M()),
              dt.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: { bookmarks: { n: 1, c: tt, r: !0, q: !0 } },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = B.w0(Q.M())), Q.sm_mbf;
          }
          toObject(i = !1) {
            return Q.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(Q.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(Q.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new Q();
            return Q.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(Q.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(Q.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class Ot extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ot.prototype.appids || B.Sg(Ot.M()),
              dt.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: B.qM.readUint32,
                      pbr: B.qM.readPackedUint32,
                      bw: B.gp.writeRepeatedUint32,
                    },
                    updated_since: {
                      n: 2,
                      br: B.qM.readUint32,
                      bw: B.gp.writeUint32,
                    },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = B.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(i = !1) {
            return Ot.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(Ot.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(Ot.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new Ot();
            return Ot.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(Ot.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(Ot.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class at extends dt.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              at.prototype.bookmarks || B.Sg(at.M()),
              dt.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: { bookmarks: { n: 1, c: tt, r: !0, q: !0 } },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = B.w0(at.M())), at.sm_mbf;
          }
          toObject(i = !1) {
            return at.toObject(i, this);
          }
          static toObject(i, l) {
            return B.BT(at.M(), i, l);
          }
          static fromObject(i) {
            return B.Uq(at.M(), i);
          }
          static deserializeBinary(i) {
            let l = new (q().BinaryReader)(i),
              p = new at();
            return at.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(i, l) {
            return B.zj(at.MBF(), i, l);
          }
          serializeBinary() {
            var i = new (q().BinaryWriter)();
            return at.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, l) {
            B.i0(at.M(), i, l);
          }
          serializeBase64String() {
            var i = new (q().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var Ue;
        ((A) => {
          function i(I, z, F) {
            return I.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, Nt.I8)(V, z, F),
              x,
              { ePrivilege: 1 },
            );
          }
          A.ClientGetVideoURL = i;
          function l(I, z) {
            return I.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, Nt.I8)(Q, z),
              { ePrivilege: 1 },
            );
          }
          A.SetVideoBookmark = l;
          function p(I, z, F) {
            return I.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, Nt.I8)(Ot, z, F),
              at,
              { ePrivilege: 1 },
            );
          }
          A.GetVideoBookmarks = p;
        })(Ue || (Ue = {}));
        var Qt;
        ((A) => {
          A.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: nt,
          };
        })(Qt || (Qt = {}));
        var Rt;
        ((A) => {
          function i(l, p, I) {
            return l.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, Nt.I8)(ot, p, I),
              it,
              { ePrivilege: 1 },
            );
          }
          A.ClientGetOPFSettings = i;
        })(Rt || (Rt = {}));
        class zt {
          static s_VODStore;
          m_transport = null;
          m_mapBookmarks = new Map();
          SetBookmarkForApp(i, l) {
            this.ValidateBookmarkData(l)
              ? this.m_mapBookmarks.set(i, tt.fromObject(l))
              : this.InitializeBookmarkForApp(i);
          }
          ValidateBookmarkData(i) {
            const l = i;
            return typeof l == "object"
              ? Number.isInteger(l.playback_position_in_seconds) &&
                  Number.isInteger(l.app_id)
              : !1;
          }
          InitializeBookmarkForApp(i) {
            if (!this.m_mapBookmarks.has(i)) {
              let l = {
                app_id: i,
                playback_position_in_seconds: 0,
                video_track_id: "0",
                audio_track_id: "0",
                timedtext_track_id: "0",
                hide_from_watch_history: !1,
                hide_from_library: !1,
              };
              this.m_mapBookmarks.set(i, new tt(l));
            }
          }
          GetBookmarkPlayTimeInSeconds(i) {
            let l = this.m_mapBookmarks.get(i);
            if (l) {
              let p = l.playback_position_in_seconds();
              if (Number.isInteger(p)) return p;
            }
            return 0;
          }
          async SendBookMarkedTimeToServer(i, l, p, I, z) {
            if (!v.iA.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const F = Nt.w.Init(Q);
            let N = this.m_mapBookmarks.get(i);
            if (N) {
              let st = !1;
              N.app_id() != i && ((st = !0), N.set_app_id(i)),
                N.playback_position_in_seconds() != l &&
                  ((st = !0), N.set_playback_position_in_seconds(l)),
                (p = p || "0"),
                N.video_track_id() != p && (N.set_video_track_id(p), (st = !0)),
                (I = I || "0"),
                N.audio_track_id() != I && (N.set_audio_track_id(I), (st = !0)),
                (z = z || "0"),
                z != N.timedtext_track_id() &&
                  (N.set_timedtext_track_id(z), (st = !0)),
                st &&
                  (F.Body().add_bookmarks(N),
                  Ue.SetVideoBookmark(this.m_transport, F));
            }
          }
          static Get() {
            return (
              zt.s_VODStore ||
                ((zt.s_VODStore = new zt()), zt.s_VODStore.Init()),
              zt.s_VODStore
            );
          }
          Init() {
            v.iA.logged_in && this.LoadWatchVideoOAuthToken();
          }
          async LoadWatchVideoOAuthToken() {
            const i =
                (0, v.yK)() == "community"
                  ? v.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : v.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              l = {};
            try {
              let p = await Ft().get(i, { params: l, withCredentials: !0 });
              if (
                p &&
                p.status == 200 &&
                p.data &&
                p.data.success == Bt.R &&
                p.data.webapi_token
              ) {
                this.m_transport = (0, ht.C)(
                  new ee.D(v.TS.WEBAPI_BASE_URL, p.data.webapi_token),
                ).GetServiceTransport();
                return;
              }
            } catch (p) {
              let I = (0, Zt.H)(p);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  I.strErrorMsg,
                I,
              );
            }
          }
        }
        class Tt {
          m_appid;
          constructor(i) {
            this.m_appid = i;
          }
          async SetBookmark(i, l, p, I) {
            v.iA.logged_in &&
              zt
                .Get()
                .SendBookMarkedTimeToServer(
                  this.m_appid,
                  Math.floor(i),
                  l,
                  p,
                  I,
                );
          }
          GetBeginPlaytime() {
            return v.iA.logged_in
              ? zt.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
        var Pt = h(44930),
          re = Object.defineProperty,
          Pe = Object.getOwnPropertyDescriptor,
          E = (A, i, l, p) => {
            for (
              var I = p > 1 ? void 0 : p ? Pe(i, l) : i, z = A.length - 1, F;
              z >= 0;
              z--
            )
              (F = A[z]) && (I = (p ? F(i, l, I) : F(I)) || I);
            return p && I && re(i, l, I), I;
          };
        const Lt = 1800,
          Et = 1e3,
          ie = 5 * 1e3,
          Yt = 7;
        var ft = ((A) => (
          (A[(A.None = 0)] = "None"),
          (A[(A.Unlocking = 1)] = "Unlocking"),
          (A[(A.Loading = 2)] = "Loading"),
          (A[(A.Ready = 3)] = "Ready"),
          (A[(A.Error = 4)] = "Error"),
          A
        ))(ft || {});
        async function St(A, i, l) {
          if (!i) return;
          let p = new FormData();
          p.append("steamid", A),
            p.append("broadcastid", i),
            p.append("viewertoken", l);
          try {
            await Ft().post(v.TS.CHAT_BASE_URL + "broadcast/stopwatching", p);
          } catch {}
        }
        class Ht {
          m_rtUnlockTime = 0;
          m_schUnlockTimeout = new Wt.LU();
          m_broadcast;
          m_video;
          UnlockH264(i, l) {
            this.BCanUnlockH264()
              ? (i.SetState(1, ""),
                console.log("Unlocking H.264 for broadcast video playback"),
                this.RequestUnlockH264(),
                (this.m_broadcast = i),
                (this.m_video = l),
                (this.m_rtUnlockTime = Date.now()),
                this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                ))
              : i.SetState(4, (0, ct.we)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, Pt.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, Pt.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, Pt.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, Pt.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Requesting browserview unlock"),
                  SteamClient.BrowserView.PostMessageToParent(
                    "UnlockH264Request",
                    "CUnlockH264Helper",
                  ))
                : console.log(
                    "Failed to request H.264 unlock: no method supported",
                  );
          }
          CheckUnlockState() {
            if (this.m_broadcast.m_eWatchState != 1) return;
            if ((0, pt.Mc)() || (0, pt.aM)()) {
              console.log("Unlocking H.264 successful"),
                this.m_broadcast.SetState(0, ""),
                this.m_video.Restart();
              return;
            }
            Date.now() - this.m_rtUnlockTime > 6 * 1e3
              ? (console.log(
                  "Unlocking H.264 timed out (Steam client or servers offline?)",
                ),
                this.m_broadcast.SetState(
                  4,
                  (0, ct.we)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class vt {
          constructor() {
            (0, D.Gn)(this);
          }
          m_steamIDBroadcast = "";
          m_ulBroadcastID = "";
          m_ulViewerToken = "";
          m_strCDNAuthUrlParameters = void 0;
          m_bWebRTC = !1;
          m_data;
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          m_schManifestTimeout = new Wt.LU();
          m_schHeartbeatTimeout = new Wt.LU();
          SetState(i, l = "") {
            (this.m_eWatchState = i),
              (this.m_strStateDescription = l),
              i == 4 && console.log(this.m_strStateDescription);
          }
        }
        E([D.sH], vt.prototype, "m_ulBroadcastID", 2),
          E([D.sH], vt.prototype, "m_eWatchState", 2),
          E([D.sH], vt.prototype, "m_strStateDescription", 2),
          E([D.XI], vt.prototype, "SetState", 1);
        class bt {
          m_steamIDBroadcast = "";
          m_bInitialized = !1;
          m_strTitle = "";
          m_strAppId = "" + Yt;
          m_nAppID = Yt;
          m_strAppTitle = "";
          m_strThumbnailUrl = "";
          m_nViewerCount = 0;
          m_bIsOnline = !1;
          m_schUpdateTimeout = new Wt.LU();
          m_nRefCount = 0;
          constructor(i) {
            (0, D.Gn)(this), (this.m_steamIDBroadcast = i);
          }
        }
        E([D.sH], bt.prototype, "m_bInitialized", 2),
          E([D.sH], bt.prototype, "m_strTitle", 2),
          E([D.sH], bt.prototype, "m_strAppId", 2),
          E([D.sH], bt.prototype, "m_nAppID", 2),
          E([D.sH], bt.prototype, "m_strAppTitle", 2),
          E([D.sH], bt.prototype, "m_strThumbnailUrl", 2),
          E([D.sH], bt.prototype, "m_nViewerCount", 2),
          E([D.sH], bt.prototype, "m_bIsOnline", 2);
        class Ut {
          constructor() {
            (0, D.Gn)(this);
          }
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          SetState(i, l = "") {
            (this.m_eWatchState = i),
              (this.m_strStateDescription = l),
              i == 4 && console.log(this.m_strStateDescription);
          }
        }
        E([D.sH], Ut.prototype, "m_eWatchState", 2),
          E([D.sH], Ut.prototype, "m_strStateDescription", 2),
          E([D.XI], Ut.prototype, "SetState", 1);
        class Gt extends Ut {
          m_clipID;
          m_data;
        }
        class He extends Ut {
          m_nAppIDVOD;
          m_manifestURL;
        }
        class U {
          m_mapBroadcasts = new Map();
          m_mapClips = new Map();
          m_mapVODs = new Map();
          m_activeVideo = null;
          m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: "0" };
          m_schSaveSettings = new Wt.LU();
          m_broadcastInfos = {};
          constructor() {
            (0, D.Gn)(this), this.LoadBroadcastSettings();
          }
          GetBroadcastState(i) {
            if (i.IsBroadcastClip()) {
              let l = this.m_mapClips.get(i.GetBroadcastClipID());
              return l ? l.m_eWatchState : 0;
            } else if (i.IsBroadcastVOD()) {
              const l = this.m_mapVODs.get(i.GetBroadcastAppIDVOD());
              return l ? l.m_eWatchState : 0;
            } else {
              let l = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
              return l ? l.m_eWatchState : 0;
            }
          }
          GetBroadcastStateDescription(i) {
            if (i.IsBroadcastClip()) {
              let l = this.m_mapClips.get(i.GetBroadcastClipID());
              return l ? l.m_strStateDescription : "";
            } else if (i.IsBroadcastVOD()) {
              const l = this.m_mapVODs.get(i.GetBroadcastAppIDVOD());
              return l ? l.m_strStateDescription : "";
            } else {
              let l = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
              return l ? l.m_strStateDescription : "";
            }
          }
          CreateBroadcastVideo(i, l, p, I) {
            let z = this.GetOrCreateBroadcast(l),
              { nVolume: F, bMuted: N } = this.m_broadcastSettings,
              st = new T(i, F, N, p);
            return (
              st.SetBroadcastSteamID(l),
              z.m_rgVideos.push(st),
              (z.m_bWebRTC = I),
              !(0, pt.Mc)() && !(0, pt.aM)() && new Ht().UnlockH264(z, st),
              st
            );
          }
          CreateClipVideo(i, l, p) {
            let I = this.GetOrCreateClip(l),
              { nVolume: z, bMuted: F } = this.m_broadcastSettings,
              N = new T(i, z, F, p);
            return (
              N.SetBroadcastClipID(l),
              I.m_rgVideos.push(N),
              !(0, pt.Mc)() && !(0, pt.aM)() && new Ht().UnlockH264(I, N),
              N
            );
          }
          CreateVODVideo(i, l, p) {
            let I = this.GetOrCreateVOD(l),
              { nVolume: z, bMuted: F } = this.m_broadcastSettings,
              N = new T(i, z, F, p);
            return (
              N.SetBroadcastAppIDVOD(l),
              I.m_rgVideos.push(N),
              !(0, pt.Mc)() && !(0, pt.aM)() && new Ht().UnlockH264(I, N),
              N
            );
          }
          StartVideo(i) {
            if (i.IsBroadcastClip()) {
              console.log(`Starting clip for ${i.GetBroadcastClipID()}`);
              let l = this.m_mapClips.get(i.GetBroadcastClipID());
              if (!l) return;
              this.SetActiveVideo(i),
                l.m_eWatchState == 0
                  ? this.GetClipManifest(l, i.GetWatchLocation())
                  : l.m_eWatchState == 3 && i.StartClip(l);
            } else if (i.IsBroadcastVOD()) {
              console.log(`Starting VOD for ${i.GetBroadcastAppIDVOD()}`);
              let l = this.m_mapVODs.get(i.GetBroadcastAppIDVOD());
              if (!l) return;
              this.SetActiveVideo(i),
                l.m_eWatchState == 0
                  ? this.GetVODManifest(l, i.GetWatchLocation())
                  : l.m_eWatchState == 3 && i.StartVOD(l);
            } else {
              let l = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
              if (!l) return;
              this.SetActiveVideo(i),
                l.m_eWatchState == 0
                  ? this.GetBroadcastManifest(l, i.GetWatchLocation())
                  : l.m_eWatchState == 3 && i.StartBroadcast(l);
            }
          }
          SetActiveVideo(i) {
            this.m_mapBroadcasts.forEach((l) => {
              for (let p of l.m_rgVideos)
                p != i && p.StopPlaybackTillUserInput();
            }),
              this.m_mapClips.forEach((l) => {
                for (let p of l.m_rgVideos)
                  p != i && p.StopPlaybackTillUserInput();
              }),
              (this.m_activeVideo = i);
          }
          PauseAllVideo() {
            this.m_mapBroadcasts.forEach((i) => {
              for (let l of i.m_rgVideos) l.StopPlaybackTillUserInput();
            });
          }
          async StopVideo(i) {
            let l = i.GetBroadcastSteamID(),
              p = this.m_mapBroadcasts.get(l);
            i.Stop(),
              p &&
                (p.m_ulBroadcastID &&
                  St(
                    l,
                    p.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                _t.Wp(p.m_rgVideos, (I) => I == i),
                this.RemoveBroadcastIfUnused(p));
          }
          StartInfo(i) {
            const l = this.GetOrCreateBroadcastInfo(i);
            return (
              l.m_nRefCount++,
              (!l.m_bInitialized || !l.m_schUpdateTimeout.IsScheduled()) &&
                this.LoadBroadcastInfo(l),
              l
            );
          }
          StopInfo(i) {
            i.m_nRefCount--;
          }
          GetOrCreateBroadcastInfo(i) {
            if (!i) return new bt("");
            if (!this.m_broadcastInfos[i]) {
              const l = (0, D.sH)(new bt(i));
              this.m_broadcastInfos[i] = l;
            }
            return this.m_broadcastInfos[i];
          }
          GetOrCreateBroadcast(i) {
            let l = this.m_mapBroadcasts.get(i);
            return (
              l ||
              ((l = new vt()),
              (l.m_steamIDBroadcast = i),
              (l.m_eWatchState = 0),
              this.m_mapBroadcasts.set(i, l),
              l)
            );
          }
          GetBroadcast(i) {
            return this.m_mapBroadcasts.get(i);
          }
          GetBroadcastClip(i) {
            return this.m_mapClips.get(i);
          }
          GetBroadcastVOD(i) {
            return this.m_mapVODs.get(i);
          }
          RemoveBroadcastIfUnused(i) {
            i.m_rgVideos.length ||
              (i.m_schHeartbeatTimeout.Cancel(),
              i.m_schManifestTimeout.Cancel(),
              this.m_mapBroadcasts.delete(i.m_steamIDBroadcast));
          }
          GetOrCreateClip(i) {
            let l = this.m_mapClips.get(i);
            return (
              l ||
              ((l = new Gt()),
              (l.m_clipID = i),
              (l.m_eWatchState = 0),
              this.m_mapClips.set(i, l),
              l)
            );
          }
          GetOrCreateVOD(i) {
            let l = this.m_mapVODs.get(i);
            return (
              l ||
              ((l = new He()),
              (l.m_nAppIDVOD = i),
              (l.m_eWatchState = 0),
              this.m_mapVODs.set(i, l),
              l)
            );
          }
          async LoadBroadcastInfo(i) {
            let l = "0",
              p = this.m_mapBroadcasts.get(i.m_steamIDBroadcast);
            if ((p && (l = p.m_ulBroadcastID), i.m_nRefCount == 0)) return;
            const I = {
              steamid: i.m_steamIDBroadcast,
              broadcastid: l,
              location:
                p &&
                p.m_rgVideos &&
                p.m_rgVideos[0] &&
                p.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const z = await Ft().get(
                `${v.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: I },
              );
              if (!z || !z.data || !z.data.success || z.data.success != Bt.R) {
                i.m_bInitialized = !0;
                return;
              }
              const F = z.data;
              (0, D.h5)(() => {
                (i.m_bInitialized = !0),
                  (i.m_strTitle = F.title),
                  (i.m_strAppId = F.appid),
                  (i.m_nAppID = Number.parseInt(F.appid)),
                  (i.m_strAppTitle = F.app_title),
                  (i.m_strThumbnailUrl = F.thumbnail_url),
                  (i.m_nViewerCount = F.viewer_count),
                  (i.m_bIsOnline = F.is_online),
                  !i.m_strTitle &&
                    P.td &&
                    ((i.m_strTitle = P.td.name),
                    (i.m_strAppTitle = P.td.appName || P.td.name));
                const N = F.update_interval;
                N &&
                  typeof N == "number" &&
                  i.m_schUpdateTimeout.Schedule(N * 1e3, () =>
                    this.LoadBroadcastInfo(i),
                  );
              });
            } catch (z) {
              console.error(z);
            }
          }
          DelayedGetBroadcastManifest(i, l, p = Date.now()) {
            i.m_schManifestTimeout.Schedule(ie, () =>
              this.GetBroadcastManifest(i, l, p),
            );
          }
          async GetBroadcastManifest(i, l, p = Date.now()) {
            i.SetState(2, "");
            let I = {
                steamid: i.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: l,
                sessionid: (0, v.KC)(),
                is_webrtc: i.m_bWebRTC,
              },
              z = null;
            try {
              z = await Ft().get(
                v.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: I, withCredentials: !0 },
              );
            } catch (st) {
              let C = (0, Zt.H)(st);
              console.error(
                "Failed to get broadcast manifest!" + C.strErrorMsg,
                C,
              );
            }
            if (!z || z.status != 200) {
              i.SetState(4, (0, ct.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let F = z.data;
            F.viewertoken && this.SetViewerToken(F.viewertoken);
            let N = F.success;
            if (N == "ready")
              i.SetState(3),
                (i.m_ulBroadcastID = F.broadcastid),
                (i.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (i.m_strCDNAuthUrlParameters = F.cdn_auth_url_parameters),
                (i.m_bWebRTC = F.is_webrtc),
                (i.m_data = F),
                this.LoadBroadcast(i),
                setTimeout(() => {
                  i.m_schHeartbeatTimeout.Schedule(
                    i.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(i),
                  );
                }, Math.random() * 3e4);
            else if (N == "waiting") {
              i.SetState(2, (0, ct.we)("#BroadcastWatch_WaitingForResponse"));
              let st = Date.now() - p;
              if (st > 60 * 1e3) {
                i.SetState(4, (0, ct.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let C = st > 30 * 1e3 ? F.retry : 5e3;
              i.m_schManifestTimeout.Schedule(C, () =>
                this.GetBroadcastManifest(i, l, p),
              );
            } else
              N == "waiting_for_start"
                ? (i.SetState(2, (0, ct.we)("#BroadcastWatch_WaitingForStart")),
                  i.m_schManifestTimeout.Schedule(F.retry, () =>
                    this.GetBroadcastManifest(i, l, p),
                  ))
                : N == "waiting_for_reconnect"
                  ? (i.SetState(
                      2,
                      (0, ct.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    i.m_schManifestTimeout.Schedule(F.retry, () =>
                      this.GetBroadcastManifest(i, l, p),
                    ))
                  : N == "end"
                    ? i.SetState(4, (0, ct.we)("#BroadcastWatch_NotAvailable"))
                    : N == "too_many_broadcasts"
                      ? i.SetState(
                          4,
                          (0, ct.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : N == "system_not_supported"
                        ? i.SetState(
                            4,
                            (0, ct.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : N == "user_restricted"
                          ? i.SetState(
                              4,
                              (0, ct.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : N == "poor_upload_quality"
                            ? i.SetState(
                                4,
                                (0, ct.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : N == "request_failed"
                              ? i.SetState(
                                  4,
                                  (0, ct.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : N == "too_many_viewers"
                                ? i.SetState(
                                    4,
                                    (0, ct.we)(
                                      "#BroadcastWatch_TooManyViewers",
                                    ),
                                  )
                                : i.SetState(
                                    4,
                                    (0, ct.we)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(i, l) {
            i.SetState(2, "");
            let p = {
                clipid: i.m_clipID,
                watchlocation: l,
                sessionid: (0, v.KC)(),
              },
              I = null;
            try {
              I = await Ft().get(
                v.TS.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: p, withCredentials: !0 },
              );
            } catch (F) {
              console.error(F), console.log("Failed to get clip manifest!");
            }
            if (!I || I.status != 200) {
              i.SetState(4, (0, ct.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let z = I.data;
            z.success == Bt.R
              ? (i.SetState(3), (i.m_data = z), this.LoadClip(i))
              : i.SetState(4, (0, ct.we)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(i, l) {
            i.SetState(2, "");
            let p = await Ee.L.fetchQuery((0, te.uj)(i.m_nAppIDVOD)).catch(
              (I) => {
                console.error(
                  "BroadcastWatchStore:GetVODManifest: Failed to load VOD " +
                    i.m_nAppIDVOD,
                  I,
                );
              },
            );
            p
              ? (p.bookmark
                  ? zt.Get().SetBookmarkForApp(i.m_nAppIDVOD, p.bookmark)
                  : zt.Get().InitializeBookmarkForApp(i.m_nAppIDVOD),
                i.SetState(3),
                (i.m_manifestURL = p.video_url),
                this.LoadVOD(i))
              : i.SetState(4, (0, ct.we)("#BroadcastWatch_RequestFailed"));
          }
          async HeartbeatBroadcast(i) {
            let l = new FormData();
            l.append("steamid", i.m_steamIDBroadcast),
              l.append("broadcastid", i.m_ulBroadcastID),
              l.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              Ft().post(v.TS.CHAT_BASE_URL + "broadcast/heartbeat/", l),
              i.m_schHeartbeatTimeout.Schedule(
                i.m_data.heartbeat_interval * 1e3,
                () => this.HeartbeatBroadcast(i),
              );
          }
          LoadBroadcast(i) {
            const l = this.m_activeVideo;
            l &&
              i.m_rgVideos.findIndex((p) => p == l) >= 0 &&
              l.StartBroadcast(i);
          }
          LoadClip(i) {
            const l = this.m_activeVideo;
            l && i.m_rgVideos.findIndex((p) => p == l) >= 0 && l.StartClip(i);
          }
          LoadVOD(i) {
            const l = this.m_activeVideo;
            l && i.m_rgVideos.findIndex((p) => p == l) >= 0 && l.StartVOD(i);
          }
          BroadcastDownloadFailed(i, l = !0, p = rt.N_.Invalid) {
            i.Stop();
            let I = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
            I &&
              I.m_eWatchState != 2 &&
              (I.m_bWebRTC && l && (I.m_bWebRTC = !1),
              p == rt.N_.StreamGone
                ? this.DelayedGetBroadcastManifest(I, i.GetWatchLocation())
                : this.GetBroadcastManifest(I, i.GetWatchLocation()));
          }
          UserInputClickVideo(i) {
            if (
              this.m_activeVideo != i &&
              (this.PauseAllVideo(),
              (this.m_activeVideo = i),
              !i.IsBroadcastClip() && !i.IsBroadcastVOD())
            ) {
              let l = this.m_mapBroadcasts.get(i.GetBroadcastSteamID());
              l && this.GetBroadcastManifest(l, i.GetWatchLocation());
            }
            i.UserInputClick();
          }
          LoadBroadcastSettings() {
            if (!window.localStorage) return;
            let i = window.localStorage.getItem("broadcastSettings");
            if (!i) return;
            let l = JSON.parse(i);
            if (!l) return;
            Object.assign(this.m_broadcastSettings, l);
            let p = this.m_broadcastSettings;
            (p.bMuted = !!p.bMuted),
              (p.nVolume = J.OQ(p.nVolume, 0, 1)),
              typeof p.ulViewerToken != "string" && (p.ulViewerToken = "0");
          }
          SaveBroadcastSettings() {
            window.localStorage &&
              this.m_schSaveSettings.Schedule(Et, () => {
                try {
                  window.localStorage.setItem(
                    "broadcastSettings",
                    JSON.stringify(this.m_broadcastSettings),
                  );
                } catch {}
              });
          }
          SetViewerToken(i) {
            this.m_broadcastSettings.ulViewerToken != i &&
              ((this.m_broadcastSettings.ulViewerToken = i),
              this.SaveBroadcastSettings());
          }
          GetViewerToken() {
            return this.m_broadcastSettings.ulViewerToken;
          }
          SaveVolumeChange(i, l) {
            (this.m_broadcastSettings.nVolume == i &&
              this.m_broadcastSettings.bMuted == l) ||
              ((this.m_broadcastSettings.nVolume = i),
              (this.m_broadcastSettings.bMuted = l),
              this.SaveBroadcastSettings());
          }
        }
        E([D.sH], U.prototype, "m_mapBroadcasts", 2);
        var Jt = ((A) => (
          (A[(A.Timeline = 1)] = "Timeline"),
          (A[(A.Minimap = 2)] = "Minimap"),
          A
        ))(Jt || {});
        class T {
          m_elVideo;
          m_player = null;
          m_listeners = new Wt.Ji();
          m_gameDataParser = null;
          m_eWatchLocation = Ct.nn.Tq;
          m_bStartWithSubtitles = !1;
          m_steamIDBroadcast = "";
          m_BroadcastInfo = null;
          m_broadcastClipID = "";
          m_nBroadcastAppIDVOD = 0;
          m_bPaused = !1;
          m_nPlaybackTime = 0;
          m_bBuffering = !1;
          m_bOnLiveEdge = !1;
          m_nVolume = 0;
          m_bMuted = !1;
          m_bUserInputNeeded = !1;
          m_bIsReplay = !1;
          m_nTimelineDuration = Lt;
          m_nVideoStartPos = 0;
          m_nVideoEndPos = 0;
          m_editorStartTime = 0;
          m_editorEndTime = 0;
          m_rgMarkers = D.sH.array();
          m_rgSegments = D.sH.array();
          m_rgRegions = D.sH.array();
          m_fnOnVideoEnd;
          m_videoEndingTimer;
          constructor(i, l, p, I) {
            (0, D.Gn)(this),
              (this.m_elVideo = i),
              (this.m_nVolume = l),
              (this.m_bMuted = p),
              (this.m_eWatchLocation = I);
          }
          SetBroadcastSteamID(i) {
            this.m_steamIDBroadcast = i;
          }
          GetBroadcastSteamID() {
            return this.m_steamIDBroadcast;
          }
          GetWatchLocation() {
            return this.m_eWatchLocation;
          }
          IsPaused() {
            return this.m_bPaused;
          }
          GetPlaybackTime() {
            return this.m_nPlaybackTime;
          }
          SetStatsViewIsVisible(i) {
            this.m_player && this.m_player.SetStatsViewIsVisible(i);
          }
          GetDASHPlayerStats() {
            return this.m_player?.GetDASHPlayerStats();
          }
          BHasDASHStats() {
            return this.m_player != null;
          }
          IsTimelineMapActive() {
            return !1;
          }
          CanSeek() {
            return this.m_player?.CanSeek() ?? !1;
          }
          IsBuffering() {
            return this.m_bBuffering;
          }
          IsOnLiveEdge() {
            return this.m_bOnLiveEdge;
          }
          GetVideoAvailableStartTime() {
            return this.m_nVideoStartPos;
          }
          GetVolume() {
            return this.m_nVolume;
          }
          GetUserInputNeeded() {
            return this.m_bUserInputNeeded;
          }
          IsReplay() {
            return this.m_bIsReplay;
          }
          IsBroadcastClip() {
            return !!this.m_broadcastClipID;
          }
          SetBroadcastClipID(i) {
            this.m_broadcastClipID = i;
          }
          GetBroadcastClipID() {
            return this.m_broadcastClipID;
          }
          IsBroadcastVOD() {
            return !!this.m_nBroadcastAppIDVOD;
          }
          SetBroadcastAppIDVOD(i) {
            this.m_nBroadcastAppIDVOD = i;
          }
          GetBroadcastAppIDVOD() {
            return this.m_nBroadcastAppIDVOD;
          }
          GetVideoRepresentations() {
            return this.m_player ? this.m_player.GetVideoRepresentations() : [];
          }
          SetVideoRepresentation(i) {
            this.m_player?.SetVideoRepresentation(i);
          }
          GetBroadcastInfo() {
            return this.m_BroadcastInfo;
          }
          BHasTimedText() {
            return this.m_player?.BHasTimedText() ?? !1;
          }
          BHasPlayer() {
            return !!this.m_player;
          }
          ListSubtitles() {
            return this.m_elVideo.textTracks;
          }
          GetSubtitles() {
            for (let i = 0; i < this.m_elVideo.textTracks.length; i++) {
              const l = this.m_elVideo.textTracks[i];
              if (l.mode === "showing") return l;
            }
            return null;
          }
          SetSubtitles(i) {
            let l = i ? ct.bi[i] : sr.xPp;
            this.m_player.SetSubtitles(l);
          }
          SetStartWithSubtitles(i) {
            this.m_bStartWithSubtitles = i;
          }
          GetBroadcastState() {
            return ut.GetBroadcastState(this);
          }
          GetBroadcastStateDescription() {
            return ut.GetBroadcastStateDescription(this);
          }
          SetOnVideoCallback(i) {
            this.m_fnOnVideoEnd = i;
          }
          InitPlayer() {
            (0, $t.wT)(!this.m_player, "Initialized twice?"),
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
                "volumechange",
                this.OnVolumeUpdated,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-bufferupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-gamedataupdate",
                this.OnGameDataUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-downloadfailed",
                this.OnDownloadFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-webrtcretry",
                this.OnWebRTCRetry,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-webrtcfailed",
                this.OnWebRTCFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userinputneeded",
                this.OnUserInputNeeded,
              ),
              (this.m_bPaused = !1),
              (this.m_nPlaybackTime = 0),
              (this.m_bBuffering = !1),
              (this.m_nTimelineDuration = Lt),
              (this.m_nVideoStartPos = 0),
              (this.m_nVideoEndPos = 0),
              this.m_rgMarkers.clear(),
              this.m_rgSegments.clear(),
              (this.m_bUserInputNeeded = !1),
              (this.m_bIsReplay = !1);
          }
          Restart() {
            this.IsMuted() ||
              this.IsPaused() ||
              this.GetUserInputNeeded() ||
              this.Play();
          }
          StartBroadcast(i) {
            if ((this.InitPlayer(), i.m_data.url)) {
              let p = new rt.Zn(this.m_elVideo);
              p.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = p),
                p.PlayMPD(
                  i.m_data.url,
                  i.m_data.hls_url,
                  void 0,
                  i.m_strCDNAuthUrlParameters,
                );
            } else {
              let p = new Qe(this.m_elVideo);
              (this.m_player = p),
                p.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  i.m_ulViewerToken,
                  i.m_data.webrtc_session_id,
                  i.m_data.webrtc_turn_server,
                  i.m_data.webrtc_offer_sdp,
                );
            }
            this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
            let l = this.m_player?.GetDASHPlayerStats();
            l &&
              l.SetBroadcasterAndViewerInfo(
                this.m_steamIDBroadcast,
                v.iA.steamid,
                i.m_ulBroadcastID,
                i.m_ulViewerToken,
              ),
              (this.m_BroadcastInfo = ut.StartInfo(this.m_steamIDBroadcast));
          }
          StartClip(i) {
            this.InitPlayer();
            let l = new rt.Zn(this.m_elVideo);
            l.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = l),
              l.PlayMPD(i.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          StartVOD(i) {
            this.InitPlayer();
            let l = new rt.Zn(this.m_elVideo);
            l.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = l),
              v.iA.logged_in &&
                i.m_nAppIDVOD &&
                l.SetBookmarkAdapter(new Tt(i.m_nAppIDVOD)),
              i.m_manifestURL && l.PlayMPD(i.m_manifestURL),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_BroadcastInfo &&
                (ut.StopInfo(this.m_BroadcastInfo),
                (this.m_BroadcastInfo = null)),
              (this.m_gameDataParser = null),
              this.m_player && (this.m_player.Close(), (this.m_player = null));
          }
          TogglePlayPause() {
            !this.m_player || this.m_player.IsPaused()
              ? this.Play()
              : this.Pause();
          }
          Play() {
            const i = this.GetBroadcastState();
            if (i == 0 || this.IsBroadcastClip()) {
              ut.StartVideo(this);
              return;
            } else if (i == 3)
              if ((ut.SetActiveVideo(this), this.m_player))
                this.m_player.Play();
              else if (this.IsBroadcastVOD()) {
                const l = ut.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
                l && this.StartVOD(l);
              } else {
                const l = ut.GetBroadcast(this.m_steamIDBroadcast);
                l && this.StartBroadcast(l);
              }
          }
          Pause() {
            console.log(
              "Pause ",
              this.m_steamIDBroadcast,
              this.m_nBroadcastAppIDVOD,
              this.m_broadcastClipID,
            ),
              this.m_player && this.m_player.Pause();
          }
          JumpTime(i) {
            this.m_player?.JumpTime(i);
          }
          Seek(i) {
            this.m_player?.Seek(i);
          }
          SeekAndPlay(i) {
            this.m_player?.SeekAndPlay(i);
          }
          JumpToLiveEdge() {
            const i = this.m_player;
            i &&
              (i.IsLiveContent()
                ? this.SeekAndPlay(i.GetBufferedLiveEdgeTime())
                : this.SeekAndPlay(i.GetAvailableVideoStartTime()));
          }
          SetVolume(i) {
            this.m_player &&
              (this.m_player.SetVolume(i),
              (this.m_nVolume = this.m_player.GetVolume())),
              ut.SaveVolumeChange(i, this.m_bMuted);
          }
          SetMute(i) {
            this.m_player && this.m_player.SetMuted(i),
              (this.m_bMuted = i),
              ut.SaveVolumeChange(this.m_nVolume, i);
          }
          IsMuted() {
            return this.m_bMuted;
          }
          OnVideoPlaying() {
            (this.m_bPaused = !1),
              this.m_editorStartTime === 0 &&
                this.m_editorEndTime === 0 &&
                ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
                (this.m_editorEndTime =
                  this.GetVideoAvailableStartTime() +
                  this.GetTimelineDuration()));
          }
          OnVideoPause() {
            this.m_bPaused = !0;
          }
          OnVideoTimeUpdate() {
            window.clearTimeout(this.m_videoEndingTimer);
            const i = this.m_player;
            if (i)
              if (this.IsBroadcastClip())
                (this.m_nPlaybackTime = i.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = i.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = i.GetBufferedLiveEdgeTime()),
                  (this.m_nTimelineDuration =
                    this.m_nVideoEndPos - this.m_nVideoStartPos),
                  (this.m_bOnLiveEdge = !1),
                  (this.m_bBuffering = i.IsBuffering());
              else {
                if (
                  ((this.m_nPlaybackTime = i.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = i.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = Math.max(
                    i.GetBufferedLiveEdgeTime(),
                    this.m_nPlaybackTime,
                  )),
                  this.IsBroadcastVOD())
                ) {
                  this.m_nTimelineDuration = this.m_nVideoEndPos;
                  const l = this.m_fnOnVideoEnd;
                  l &&
                    this.m_nVideoEndPos - this.m_nPlaybackTime < rt.Br &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      l();
                    }, 400));
                }
                (this.m_bBuffering = i.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < rt.Br),
                  i.IsPaused() && (this.m_bOnLiveEdge = !1);
              }
          }
          OnVolumeUpdated() {
            const i = this.m_player;
            i &&
              ((this.m_nVolume = i.GetVolume()), (this.m_bMuted = i.IsMuted()));
          }
          OnGameDataUpdate(i) {
            let l = i.detail;
            if (!l || typeof l.gamedata != "object") return;
            (!this.m_gameDataParser ||
              this.m_gameDataParser.GetAppID() != l.gamedata.__appid) &&
              (this.m_gameDataParser = new _(l.gamedata.__appid));
            const p = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
            if ("timelinemarkers" in l.gamedata) {
              const I = this.m_gameDataParser.UpdateMarkers(
                l.gamedata.__timelinemarkers,
                p,
              );
              I &&
                (this.m_rgMarkers.replace(I.rgMarkers || []),
                this.m_rgSegments.replace(I.rgSegments || []));
              const z = this.m_gameDataParser.UpdateRegions(
                l.gamedata.__regions,
              );
              z && this.m_rgRegions.replace(z);
            } else
              "soundtrack" in l.gamedata &&
                this.m_gameDataParser.UpdateSoundtrack(
                  this.m_steamIDBroadcast,
                  l.gamedata.soundtrack,
                );
          }
          OnDownloadFailed(i) {
            let l = i.detail || rt.N_.Invalid;
            ut.BroadcastDownloadFailed(this, !0, l);
          }
          OnWebRTCRetry() {
            ut.BroadcastDownloadFailed(this, !1);
          }
          OnWebRTCFailed() {
            ut.BroadcastDownloadFailed(this, !0);
          }
          OnUserInputNeeded() {
            this.m_bUserInputNeeded = !0;
          }
          UserInputClick() {
            (this.m_bUserInputNeeded = !1),
              this.m_player ? this.JumpToLiveEdge() : this.Play();
          }
          StopPlaybackTillUserInput() {
            this.Stop(), this.OnUserInputNeeded();
          }
          GetTimelineStartPos() {
            return this.m_nVideoEndPos - this.m_nTimelineDuration;
          }
          GetTimelineDuration() {
            return this.m_nTimelineDuration;
          }
          GetTimeAtMousePosition(i, l, p, I) {
            let z = J.Fu(i, l.left, l.right, p, I);
            return Math.floor(z + 0.5);
          }
          GetPercentOffsetFromTime(i, l) {
            let p = 0,
              I = 0;
            return (
              l == 1
                ? ((I = this.m_nVideoEndPos),
                  (p = I - this.m_nTimelineDuration))
                : ((p = 0), (I = 0)),
              J.Fu(i, p, I, 0, 100)
            );
          }
          GetTimelineMarkers() {
            return this.m_rgMarkers;
          }
          GetTimelineSegments() {
            return this.m_rgSegments;
          }
          GetGameDataRegions() {
            return this.m_rgRegions;
          }
          BHasMarkersOrSegments() {
            return this.has_segments || this.has_markers;
          }
          get has_markers() {
            return this.m_rgMarkers.length > 0;
          }
          get has_segments() {
            return this.m_rgSegments.length > 0;
          }
        }
        E([D.sH], T.prototype, "m_player", 2),
          E([D.sH], T.prototype, "m_bPaused", 2),
          E([D.sH], T.prototype, "m_nPlaybackTime", 2),
          E([D.sH], T.prototype, "m_bBuffering", 2),
          E([D.sH], T.prototype, "m_bOnLiveEdge", 2),
          E([D.sH], T.prototype, "m_nVolume", 2),
          E([D.sH], T.prototype, "m_bMuted", 2),
          E([D.sH], T.prototype, "m_bUserInputNeeded", 2),
          E([D.sH], T.prototype, "m_bIsReplay", 2),
          E([D.sH], T.prototype, "m_nTimelineDuration", 2),
          E([D.sH], T.prototype, "m_nVideoStartPos", 2),
          E([D.sH], T.prototype, "m_nVideoEndPos", 2),
          E([D.sH], T.prototype, "m_editorStartTime", 2),
          E([D.sH], T.prototype, "m_editorEndTime", 2),
          E([D.XI.bound], T.prototype, "StartBroadcast", 1),
          E([D.XI.bound], T.prototype, "StartClip", 1),
          E([D.XI.bound], T.prototype, "StartVOD", 1),
          E([xt.o], T.prototype, "OnVideoPlaying", 1),
          E([xt.o], T.prototype, "OnVideoPause", 1),
          E([D.XI.bound], T.prototype, "OnVideoTimeUpdate", 1),
          E([xt.o], T.prototype, "OnVolumeUpdated", 1),
          E([D.XI.bound], T.prototype, "OnGameDataUpdate", 1),
          E([xt.o], T.prototype, "OnDownloadFailed", 1),
          E([xt.o], T.prototype, "OnWebRTCRetry", 1),
          E([xt.o], T.prototype, "OnWebRTCFailed", 1),
          E([xt.o], T.prototype, "OnUserInputNeeded", 1);
        const ut = new U();
        window.uiBroadcastWatchStore = ut;
      },
      62510: (qt, ve, h) => {
        "use strict";
        h.d(ve, { m: () => _ });
        var n = h(7850),
          Ft = h(90626),
          D = h(54963),
          P = h(8323),
          Kt = Object.defineProperty,
          mt = Object.getOwnPropertyDescriptor,
          L = (pt, rt, J, v) => {
            for (
              var xt = v > 1 ? void 0 : v ? mt(rt, J) : rt,
                De = pt.length - 1,
                Vt;
              De >= 0;
              De--
            )
              (Vt = pt[De]) && (xt = (v ? Vt(rt, J, xt) : Vt(xt)) || xt);
            return v && xt && Kt(rt, J, xt), xt;
          };
        class _ extends Ft.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new P.LU();
          m_bSetupComplete = !1;
          componentDidMount() {
            this.props.updateRate == 0 && this.updateCanvas();
          }
          componentWillUnmount() {
            this.m_schUpdate.Cancel();
          }
          componentDidUpdate() {
            this.updateCanvas();
          }
          BindCanvasRef(rt) {
            this.m_elCanvas = rt;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let rt = this.props.scaleFactor || [1, 1],
              J = this.props.elementRef,
              v = this.props.updateRate;
            const xt = this.m_elCanvas.getContext("2d");
            if (!xt) return;
            this.m_Context = xt;
            let De = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              Vt = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = De),
              (this.m_elCanvas.height = Vt),
              (this.props.blurAmount ?? 0) > 0 &&
                (xt.filter = "blur(" + this.props.blurAmount + "px)");
            let Wt = () => {
              xt.drawImage(J, 0, 0, De * rt[0], Vt * rt[1]),
                v > 0 && this.m_schUpdate.Schedule(v, Wt);
            };
            Wt(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, n.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        L([D.oI], _.prototype, "BindCanvasRef", 1),
          L([D.oI], _.prototype, "updateCanvas", 1);
      },
      79590: (qt, ve, h) => {
        "use strict";
        h.d(ve, { m: () => De });
        var n = h(7850),
          Ft = h(99412),
          D = h(29630),
          P = h(72609),
          Kt = h(90626),
          mt = h(48421),
          L = h(16512),
          _ = h(36707),
          pt = h(18210),
          rt = h(53113),
          J = h(20193);
        function v(Vt) {
          const { gidEvent: Wt } = Vt,
            Bt = usePartnerEventByEventGID(Wt);
          return Bt
            ? jsx(xt, {
                event: Bt,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(Bt) ?? ""),
              })
            : null;
        }
        function xt(Vt) {
          const { event: Wt, lang: Bt, href: g } = Vt,
            [c, r] = (0, Kt.useMemo)(() => {
              const ur = Wt.jsondata.localized_sale_product_banner,
                lr = Wt.jsondata.localized_sale_product_mobile_banner;
              if (ur?.length && lr?.length) {
                const Qe = pt.NT.GetWithFallback(ur, Bt),
                  sr = pt.NT.GetWithFallback(lr, Bt);
                if (Qe?.length && sr?.length)
                  return [
                    D.zU.GenerateURLFromHashAndExt(Wt.clanSteamID, Qe),
                    D.zU.GenerateURLFromHashAndExt(Wt.clanSteamID, sr),
                  ];
              }
              return [void 0, void 0];
            }, [Wt, Bt]);
          return !c?.length || !r?.length
            ? null
            : (0, n.jsxs)("a", {
                href: g,
                className: J.Link,
                children: [
                  (0, n.jsx)("img", {
                    src: c,
                    className: (0, _.A)(J.Banner, J.Big),
                    alt: Wt.GetNameWithFallback(Bt),
                  }),
                  (0, n.jsx)("img", {
                    src: r,
                    className: (0, _.A)(J.Banner, J.Mobile),
                    alt: Wt.GetNameWithFallback(Bt),
                  }),
                ],
              });
        }
        function De(Vt) {
          const { gidEvent: Wt } = Vt,
            Bt = (0, mt.RR)(Wt);
          return Bt
            ? (0, n.jsx)(xt, {
                event: Bt,
                lang: (0, Ft.sfN)(P.TS.LANGUAGE),
                href: (0, rt.k2)((0, L.n4)(Bt) ?? ""),
              })
            : null;
        }
      },
      20193: (qt) => {
        qt.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      53120: (qt) => {
        qt.exports = {
          strStreamIconCapsuleArtHeight: "58px",
          strStreamIconScreenshotArtHeight: "58px",
          bordered_container: "_3zXpFCyX2IiaD-MNF5KJFf",
          WidePlayer: "_3zjvrmOCIh31clDHjpLE2a",
          store_chat_ctn: "_21N-VV6Gvjjc1FqzOMJQfi",
          item_drop_ctn: "ifxDfv8dAGa5u71nRT0CJ",
          BorderedContainerPromotion: "-b_1HPR-CqjjzrTnTG2fn",
          bordered_title: "WsfbqpkdutNGWu3V4uhn_",
          streamTitle: "XMkaslAYoJyTgLBY3WHVJ",
          bordered_subtitle: "_3tYeiJ6LHC_iVhqb9zqOMy",
          bordered_corner_container: "_3IBcNy1U-I38_F9BNw-VHE",
          bordered_corner_expanded: "ahz31bshwySKGB_tBKf14",
          bordered_corner_shrinked: "L8sFYvKOUztrhXdjxy7mp",
          broadcast_settings_icon: "_37ugZJhL-qCRkdeZBRju2h",
          side_panels: "T_zpRAGXggYgVaRyCSXDu",
          wrapper: "_1mH-vDK7JF0NBAdZfdzr1a",
          video_placeholder: "_1KU955BfHBkZdSvJncjc9V",
          embedded_player: "_12fBJU1kOnQCeKc9JFTGMX",
          NoChat: "_2QQm1StfkXOLXrBhLy_jYP",
          video_container: "_1gbNxru_N2ui-EXc2_zmRy",
          viewer_bar: "_2YgphHYykz192eH3FgalS4",
          viewer_links: "_2EQpO5nLkHNXFdPk0ZnoY2",
          chat_link: "_3a0zX_I8eGlU5CYF3lcQjs",
          settings_link: "_1ThkelBkPfoE80ibfGyyVB",
          external_link: "_1n1BMOyCVFA0y6ULd_laPH",
          viewer_count: "_1MrTWpNan4htXK4Kql6ms8",
          vod_title: "_2xKaMJn0nexa3MMJvN6yq-",
          stream_icon_and_viewer_container: "_2sbrGTttGmHbz8ZPsO1YuR",
          display_capsule_art: "SsORVFNW3KBOdsIxDVqcd",
          ViewerNum: "_1reMoMi3BZbMUs6jHW93f1",
          StreamCapsule: "biTh7mrlaSv_WSY2gFsCH",
          stream_icon_container: "_2zBOiujXasDdHPmFPW4O90",
          stream_icon_hide_on_hover: "qYFsGojW19eJQAuemyuHQ",
          stream_icon_show_on_hover: "_29z3Nu6SGTNFDwIw8Gdvuk",
          stream_icon: "_1LBYspkgF9X97b89kPRBFC",
          stream_icon_selected: "mSpzeNvpTqIiZHkJgHRw7",
          multistream: "_1DS-WZoUJyBitKOZoq7u3n",
          MultiStreamCtn: "_1K6j5rrGvLPb8aT2L7CBAA",
          scrollingstreams: "_3aYWlUqW6-SosI72nizpP4",
          clear_div: "_1oCVbTJqa4Av40NuPdztIv",
          NoSelect: "_3Zm9dcDmIQkcWVzEq0IB-E",
          broadcast_floating: "_2WNxa8Qii8HrG8e0th6oB8",
          PopOutVideoTitleBar: "_184SIP7TlwJaOjOVVxLBLS",
          PopOutVideoTitleText: "_28O6dX6-Xf37oViWRRhvjz",
          PopOutVideoCloseButton: "_3bIsS_eft2P6BaAUZdlqme",
          BroadcastPlayerContainer: "_3VvcXgvuoyH2OXPyzZXeVT",
          ChatContainer: "_3kqwu6KzpbMqW5fIlXMIKI",
          BroadcastAndChat: "_1aJ9yfIUd-oGDvpo5-BuBx",
          detail_chat_ctn: "IaFnsy98_mIwYox4zmFu2",
          ChatEntry: "Rs7EltAKuQWw9U0v2bKxp",
          Event: "_1A0NY-wvZmZAqMMiw9oTYR",
          container: "_2yiy6ghVhj3fkC4I01odHC",
          LeftPanelCtn: "_6O_psaoFJTLs30M_ePzZ7",
          RightPanelCtn: "yRHl2kJWdMGdwVN_70nrP",
          SidePanelBackground: "_2FYu31I46rjm0DVxq-ufK9",
          LeftPanel: "o6XqrPpvDrpRsE7SpW8qJ",
        };
      },
      63508: (qt) => {
        qt.exports = {
          BroadcastChat: "_3URK7gSLJV_b2M32URtdZ1",
          ChatEntry: "_3soy-wJhd4RZ8SNtC31AOz",
          ChatPanel: "_2ZCAIdTy8CoxNNL8KBGNM",
          ChatMessages: "_3M5L0Ioa2wfgEXvySi1hr6",
          EmoticonContainer: "_1wa4oT25nXzeGxGXYpgDwI",
          ChatSend: "_3JUnDuh4M77s4kfjpnkaYW",
          ChatBox: "_2qfgSP2OtiZ-r-oBJanIaJ",
          ChatControls: "_1TekO7c6uL1uezWI5iWEBG",
          MessageChat: "_22PB4rET-Rx8JtZs34nMkf",
          MessageName: "BJe6CMne992juEIk9iv-k",
          MessageContents: "PNYZaITw4xz8Xi60JGcBM",
          EmoticonsOnly: "gFjH8o1u6iAUuxxkUey3m",
          MessageNotification: "_3Xb4_FEsLWwa-ux6iYDjLZ",
          MessageError: "_8MzyWIQ6TwS_AnWj_m4rL",
          minHeightZero: "r7HLM4rGlw8BlvCfsQoMx",
          ChatLoginButton: "_2TAQo-af_j4l7zy9uy5p-l",
          RateLimitProgressBarContainer: "JPqUGxAKEhSxZR4Hr99D1",
          RateLimitProgressBar: "_1EcVKYO2FR6NiyJchLLbol",
          TimedProgressBarContainer: "_39xGjKkRIIE7HwloXCWT41",
          wrapper: "_2vz6RRjc3uhVClPT9KmsWO",
          pie: "_1k4dSfTb9MQQkhRmcTNjXs",
          spinner: "_3nRh57_ZMuIbHDg29qxFoy",
          rota: "_1xXh6121fD_MtzKqUoAKP8",
          filler: "_3EegkD4UmE1ZI1j7DOgAIe",
          fill: "_2tyuX1freBgl1ICX3yI2qG",
          mask: "_1V4KedCnQKPf-TNpoigdVe",
          SelectedUserNameCtn: "_3K4QXV1l7toIASzIn03a9w",
          SelectedUserName: "c907VNi3QBNJZYF7xxgUB",
          FlairContainer: "_166wpHbAcQPnZog52jPZLN",
          RoleFlairContainer: "_1QRJ2HWdG8P7m3J0-ATU4u",
          Description: "_105HH_vRwSwjIsvw_F-73M",
          LogInPrompt: "CsA8vCxom50xEpq0oyOHG",
          SignInButton: "_1dMwWQHXZbAAqaFBL4YyCP",
        };
      },
      8287: (qt) => {
        qt.exports = {
          GiveawayWinnerBox: "_3cv4lblvGYp_wrnLaNEVn0",
          GiveawayWinnerAnnounced: "oLk3wFE5C0ocSKj9h7UMR",
          WinnerFlash: "_29x--KnTUnv5WIHAtqtwID",
          GiveawayWinnerBoxRight: "_2ftrc0KIXzfdR16ghJYvPg",
          GiveawayWinnerText: "_1SY2g9O-qYNIpmXPLu4XKK",
          GiveawayWinnerCountdown: "_1eP67dgalghp9Y7VMqedDT",
          GiveawayWinnerBoxLeft: "N6Rk1L-HIjqiJV3iXqRGK",
          GiveawayWinnerArt: "_1sgypTHPFS1VzmPOCkP_pK",
          GiveawayWinnerQuestion: "_3mvdct5S8-AGn0JrsRW0Vo",
          InViewerBar: "_25VQ8K4B2BcYKAbkfDx6Z_",
          GiveawayRegisterButton: "eKSAvf7P4Na3LE-0FkJFY",
          GiveawayAlreadyRegistered: "_2AVNRKDYvludWnAzqwlRYA",
        };
      },
      15527: (qt) => {
        qt.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      43087: (qt) => {
        qt.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      14256: (qt) => {
        qt.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      33543: (qt) => {
        qt.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
      96715: (qt, ve, h) => {
        "use strict";
        h.d(ve, { A: () => n });
        const n =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      10886: (qt, ve, h) => {
        "use strict";
        h.d(ve, { A: () => n });
        const n =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (qt, ve, h) => {
        "use strict";
        h.d(ve, { A: () => n });
        const n =
          h.p +
          "images/applications/appmgmt/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (qt, ve, h) => {
        "use strict";
        h.d(ve, { A: () => n });
        const n =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
