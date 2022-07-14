/* Third-party software licenses can be found at licenses.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "0CKs": function (e, t, r) {
      e.exports = {
        StoreSaleWidgetContainer_mini:
          "broadcastwidgets_StoreSaleWidgetContainer_mini_1Vz-y",
        Action: "broadcastwidgets_Action_1ZA3F",
        WishList: "broadcastwidgets_WishList_20tgR",
        StoreSaleWidgetImage_mini:
          "broadcastwidgets_StoreSaleWidgetImage_mini_1Ep8o",
        StoreSaleImage_mini: "broadcastwidgets_StoreSaleImage_mini_26Hh7",
        StoreSaleWidgetShortDesc_mini:
          "broadcastwidgets_StoreSaleWidgetShortDesc_mini_DvDV2",
      };
    },
    "2mvG": function (e, t, r) {},
    "3fR/": function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "BroadcastEmbeddablePopoutHeader", function () {
          return Lt;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("TyAF"),
        o = r("aoTL"),
        l = r("q1tI"),
        c = r.n(l),
        d = r("2vnA"),
        m = r("pC2t"),
        u = r("ZBhF"),
        h = r("Tj6G"),
        b = r("msu0"),
        _ = r("9XWO"),
        p = r("WFtA"),
        g = r("rmVU"),
        B = r("oleE"),
        S = r("hRO2"),
        y = r("3dpo");
      const f = S.Message;
      class C extends f {
        constructor(e = null) {
          super(),
            C.prototype.broadcast_channel_id || y.a(C.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = y.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(C.M(), e, t);
        }
        static fromObject(e) {
          return y.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_CreateBroadcastChannel_Response";
        }
      }
      class v extends f {
        constructor(e = null) {
          super(),
            v.prototype.broadcast_channel_id || y.a(v.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  steamid: {
                    n: 3,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = y.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(v.M(), e, t);
        }
        static fromObject(e) {
          return y.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelID_Response";
        }
      }
      class w extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelProfile_Response";
        }
      }
      class M extends f {
        constructor(e = null) {
          super(),
            M.prototype.unique_name || y.a(M.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  unique_name: {
                    n: 1,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  owner_steamid: {
                    n: 2,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  name: { n: 3, br: y.d.readString, bw: y.h.writeString },
                  language: { n: 4, br: y.d.readString, bw: y.h.writeString },
                  headline: { n: 5, br: y.d.readString, bw: y.h.writeString },
                  summary: { n: 6, br: y.d.readString, bw: y.h.writeString },
                  schedule: { n: 7, br: y.d.readString, bw: y.h.writeString },
                  rules: { n: 8, br: y.d.readString, bw: y.h.writeString },
                  panels: { n: 9, br: y.d.readString, bw: y.h.writeString },
                  is_partnered: { n: 10, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = y.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(M.M(), e, t);
        }
        static fromObject(e) {
          return y.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelProfile_Response";
        }
      }
      class O extends f {
        constructor(e = null) {
          super(),
            O.prototype.replace_image_hash || y.a(O.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  replace_image_hash: {
                    n: 1,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = y.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(O.M(), e, t);
        }
        static fromObject(e) {
          return y.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelImage_Response";
        }
      }
      class T extends f {
        constructor(e = null) {
          super(),
            T.prototype.images || y.a(T.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { images: { n: 1, c: R, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = y.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(T.M(), e, t);
        }
        static fromObject(e) {
          return y.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response";
        }
      }
      class R extends f {
        constructor(e = null) {
          super(),
            R.prototype.image_type || y.a(R.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  image_type: { n: 1, br: y.d.readEnum, bw: y.h.writeEnum },
                  image_path: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  image_index: {
                    n: 3,
                    br: y.d.readUint32,
                    bw: y.h.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = y.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(R.M(), e, t);
        }
        static fromObject(e) {
          return y.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response_Images";
        }
      }
      class E extends f {
        constructor(e = null) {
          super(),
            E.prototype.links || y.a(E.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { links: { n: 1, c: j, r: !0, q: !0 } },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = y.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(E.M(), e, t);
        }
        static fromObject(e) {
          return y.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response";
        }
      }
      class j extends f {
        constructor(e = null) {
          super(),
            j.prototype.link_index || y.a(j.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  link_index: { n: 1, br: y.d.readUint32, bw: y.h.writeUint32 },
                  url: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  link_description: {
                    n: 3,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  left: { n: 4, br: y.d.readUint32, bw: y.h.writeUint32 },
                  top: { n: 5, br: y.d.readUint32, bw: y.h.writeUint32 },
                  width: { n: 6, br: y.d.readUint32, bw: y.h.writeUint32 },
                  height: { n: 7, br: y.d.readUint32, bw: y.h.writeUint32 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = y.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(j.M(), e, t);
        }
        static fromObject(e) {
          return y.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
        }
      }
      class F extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
        }
      }
      class z extends f {
        constructor(e = null) {
          super(),
            z.prototype.is_live || y.a(z.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  is_live: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                  is_disabled: { n: 2, br: y.d.readBool, bw: y.h.writeBool },
                  appid: { n: 3, br: y.d.readUint32, bw: y.h.writeUint32 },
                  viewers: {
                    n: 4,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  views: {
                    n: 5,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  broadcaster_steamid: {
                    n: 6,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  subscribers: {
                    n: 9,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  unique_name: {
                    n: 10,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  broadcast_session_id: {
                    n: 11,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = y.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(z.M(), e, t);
        }
        static fromObject(e) {
          return y.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelStatus_Response";
        }
      }
      class I extends f {
        constructor(e = null) {
          super(),
            I.prototype.broadcast_channel_id || y.a(I.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  name: { n: 3, br: y.d.readString, bw: y.h.writeString },
                  appid: { n: 4, br: y.d.readUint32, bw: y.h.writeUint32 },
                  viewers: {
                    n: 5,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  views: {
                    n: 6,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  headline: { n: 9, br: y.d.readString, bw: y.h.writeString },
                  avatar_url: {
                    n: 10,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  broadcaster_steamid: {
                    n: 11,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  subscribers: {
                    n: 12,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  background_url: {
                    n: 13,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  is_featured: { n: 14, br: y.d.readBool, bw: y.h.writeBool },
                  is_disabled: { n: 15, br: y.d.readBool, bw: y.h.writeBool },
                  is_live: { n: 16, br: y.d.readBool, bw: y.h.writeBool },
                  language: { n: 17, br: y.d.readString, bw: y.h.writeString },
                  reports: { n: 18, br: y.d.readUint32, bw: y.h.writeUint32 },
                  is_partnered: { n: 19, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = y.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(I.M(), e, t);
        }
        static fromObject(e) {
          return y.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GetBroadcastChannelEntry";
        }
      }
      class P extends f {
        constructor(e = null) {
          super(),
            P.prototype.results || y.a(P.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { results: { n: 1, c: I, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = y.e(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(P.M(), e, t);
        }
        static fromObject(e) {
          return y.c(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetFollowedChannels_Response";
        }
      }
      class D extends f {
        constructor(e = null) {
          super(),
            D.prototype.results || y.a(D.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { results: { n: 1, c: I, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = y.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(D.M(), e, t);
        }
        static fromObject(e) {
          return y.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSubscribedChannels_Response";
        }
      }
      class W extends f {
        constructor(e = null) {
          super(),
            W.prototype.is_followed || y.a(W.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  is_followed: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = y.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(W.M(), e, t);
        }
        static fromObject(e) {
          return y.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_FollowBroadcastChannel_Response";
        }
      }
      class N extends f {
        constructor(e = null) {
          super(),
            N.prototype.is_subscribed || y.a(N.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  is_subscribed: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = y.e(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(N.M(), e, t);
        }
        static fromObject(e) {
          return y.c(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SubscribeBroadcastChannel_Response";
        }
      }
      class x extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ReportBroadcastChannel_Response";
        }
      }
      class k extends f {
        constructor(e = null) {
          super(),
            k.prototype.is_followed || y.a(k.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  is_followed: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                  is_subscribed: { n: 2, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = y.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(k.M(), e, t);
        }
        static fromObject(e) {
          return y.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelInteraction_Response";
        }
      }
      class G extends f {
        constructor(e = null) {
          super(),
            G.prototype.appid || y.a(G.M()),
            f.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appid: { n: 1, br: y.d.readUint32, bw: y.h.writeUint32 },
                  name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  image: { n: 3, br: y.d.readString, bw: y.h.writeString },
                  viewers: {
                    n: 4,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  channels: { n: 5, c: I, r: !0, q: !0 },
                  release_date: {
                    n: 6,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  developer: { n: 7, br: y.d.readString, bw: y.h.writeString },
                  publisher: { n: 8, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = y.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(G.M(), e, t);
        }
        static fromObject(e) {
          return y.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Game";
        }
      }
      class A extends f {
        constructor(e = null) {
          super(),
            A.prototype.results || y.a(A.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { results: { n: 1, c: G, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = y.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(A.M(), e, t);
        }
        static fromObject(e) {
          return y.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetGames_Response";
        }
      }
      class V extends f {
        constructor(e = null) {
          super(),
            V.prototype.results || y.a(V.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { results: { n: 1, c: I, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = y.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(V.M(), e, t);
        }
        static fromObject(e) {
          return y.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChannels_Response";
        }
      }
      class U extends f {
        constructor(e = null) {
          super(),
            U.prototype.broadcasters || y.a(U.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { broadcasters: { n: 1, c: L, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = y.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(U.M(), e, t);
        }
        static fromObject(e) {
          return y.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
        }
      }
      class L extends f {
        constructor(e = null) {
          super(),
            L.prototype.steamid || y.a(L.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  rtmp_token: { n: 3, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = y.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(L.M(), e, t);
        }
        static fromObject(e) {
          return y.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
        }
      }
      class H extends f {
        constructor(e = null) {
          super(),
            H.prototype.issuer_steamid || y.a(H.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  issuer_steamid: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  time_expires: {
                    n: 3,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  permanent: { n: 4, br: y.d.readBool, bw: y.h.writeBool },
                  name: { n: 5, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = y.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(H.M(), e, t);
        }
        static fromObject(e) {
          return y.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatBan";
        }
      }
      class q extends f {
        constructor(e = null) {
          super(),
            q.prototype.broadcast_channel_id || y.a(q.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  duration: { n: 3, br: y.d.readUint32, bw: y.h.writeUint32 },
                  permanent: { n: 4, br: y.d.readBool, bw: y.h.writeBool },
                  undo: { n: 5, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = y.e(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(q.M(), e, t);
        }
        static fromObject(e) {
          return y.c(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Request";
        }
      }
      class $ extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Response";
        }
      }
      class J extends f {
        constructor(e = null) {
          super(),
            J.prototype.results || y.a(J.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { results: { n: 1, c: H, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = y.e(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(J.M(), e, t);
        }
        static fromObject(e) {
          return y.c(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatBans_Response";
        }
      }
      class K extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatModerator_Response";
        }
      }
      class X extends f {
        constructor(e = null) {
          super(),
            X.prototype.broadcast_channel_id || y.a(X.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = y.e(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(X.M(), e, t);
        }
        static fromObject(e) {
          return y.c(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Request";
        }
      }
      class Y extends f {
        constructor(e = null) {
          super(),
            Y.prototype.steamid || y.a(Y.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = y.e(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(Y.M(), e, t);
        }
        static fromObject(e) {
          return y.c(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatModerator";
        }
      }
      class Q extends f {
        constructor(e = null) {
          super(),
            Q.prototype.results || y.a(Q.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { results: { n: 1, c: Y, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = y.e(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(Q.M(), e, t);
        }
        static fromObject(e) {
          return y.c(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Response";
        }
      }
      class Z extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddWordBan_Response";
        }
      }
      class ee extends f {
        constructor(e = null) {
          super(),
            ee.prototype.results || y.a(ee.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  results: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: y.d.readString,
                    bw: y.h.writeRepeatedString,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = y.e(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ee.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetWordBans_Response";
        }
      }
      class te extends f {
        constructor(e = null) {
          super(),
            te.prototype.broadcast_channel_id || y.a(te.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = y.e(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(te.M(), e, t);
        }
        static fromObject(e) {
          return y.c(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Request";
        }
      }
      class re extends f {
        constructor(e = null) {
          super(),
            re.prototype.chat_id || y.a(re.M()),
            f.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  chat_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  view_url_template: {
                    n: 2,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  flair_group_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: y.d.readUint64String,
                    bw: y.h.writeRepeatedUint64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = y.e(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(re.M(), e, t);
        }
        static fromObject(e) {
          return y.c(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Response";
        }
      }
      class ae extends f {
        constructor(e = null) {
          super(),
            ae.prototype.results || y.a(ae.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { results: { n: 1, c: I, r: !0, q: !0 } },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = y.e(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ae.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Search_Response";
        }
      }
      class ie extends f {
        constructor(e = null) {
          super(),
            ie.prototype.stream_live_email || y.a(ie.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  stream_live_email: {
                    n: 1,
                    br: y.d.readBool,
                    bw: y.h.writeBool,
                  },
                  stream_live_notification: {
                    n: 2,
                    br: y.d.readBool,
                    bw: y.h.writeBool,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = y.e(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ie.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSteamTVUserSettings_Response";
        }
      }
      class se extends f {
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetSteamTVUserSettings_Response";
        }
      }
      class ne extends f {
        constructor(e = null) {
          super(),
            ne.prototype.results || y.a(ne.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { results: { n: 1, c: I, r: !0, q: !0 } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = y.e(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ne.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetMyBroadcastChannels_Response";
        }
      }
      class oe extends f {
        constructor(e = null) {
          super(),
            oe.prototype.broadcasts || y.a(oe.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: { broadcasts: { n: 1, c: I, r: !0, q: !0 } },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = y.e(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(oe.M(), e, t);
        }
        static fromObject(e) {
          return y.c(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Takeover";
        }
      }
      class le extends f {
        constructor(e = null) {
          super(),
            le.prototype.broadcasts || y.a(le.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  broadcasts: { n: 1, c: I, r: !0, q: !0 },
                  appid: { n: 2, br: y.d.readUint32, bw: y.h.writeUint32 },
                  title: { n: 3, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = y.e(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(le.M(), e, t);
        }
        static fromObject(e) {
          return y.c(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_SingleGame";
        }
      }
      class ce extends f {
        constructor(e = null) {
          super(),
            ce.prototype.appid || y.a(ce.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: y.d.readUint32, bw: y.h.writeUint32 },
                  game_name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  broadcast: { n: 3, c: I },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = y.e(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ce.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GameListEntry";
        }
      }
      class de extends f {
        constructor(e = null) {
          super(),
            de.prototype.entries || y.a(de.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  entries: { n: 1, c: ce, r: !0, q: !0 },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = y.e(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(de.M(), e, t);
        }
        static fromObject(e) {
          return y.c(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_GameList";
        }
      }
      class me extends f {
        constructor(e = null) {
          super(),
            me.prototype.broadcasts || y.a(me.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  broadcasts: { n: 1, c: I, r: !0, q: !0 },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = y.e(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(me.M(), e, t);
        }
        static fromObject(e) {
          return y.c(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_QuickExplore";
        }
      }
      class ue extends f {
        constructor(e = null) {
          super(),
            ue.prototype.broadcasts || y.a(ue.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  broadcasts: { n: 1, c: I, r: !0, q: !0 },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = y.e(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ue.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_ConveyorBelt";
        }
      }
      class he extends f {
        constructor(e = null) {
          super(),
            he.prototype.broadcast || y.a(he.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  broadcast: { n: 1, c: I },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  chat_group_id: {
                    n: 3,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = y.e(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(he.M(), e, t);
        }
        static fromObject(e) {
          return y.c(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_WatchParty";
        }
      }
      class be extends f {
        constructor(e = null) {
          super(),
            be.prototype.broadcast || y.a(be.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  broadcast: { n: 1, c: I },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = y.e(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(be.M(), e, t);
        }
        static fromObject(e) {
          return y.c(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Developer";
        }
      }
      class _e extends f {
        constructor(e = null) {
          super(),
            _e.prototype.title || y.a(_e.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  title: { n: 1, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = y.e(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(_e.M(), e, t);
        }
        static fromObject(e) {
          return y.c(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Event";
        }
      }
      class pe extends f {
        constructor(e = null) {
          super(),
            pe.prototype.template_type || y.a(pe.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  template_type: { n: 1, br: y.d.readEnum, bw: y.h.writeEnum },
                  takeover: { n: 2, c: oe },
                  single_game: { n: 3, c: le },
                  game_list: { n: 4, c: de },
                  quick_explore: { n: 5, c: me },
                  conveyor_belt: { n: 6, c: ue },
                  watch_party: { n: 7, c: he },
                  developer: { n: 8, c: be },
                  event: { n: 9, c: _e },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = y.e(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(pe.M(), e, t);
        }
        static fromObject(e) {
          return y.c(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageContentRow";
        }
      }
      class ge extends f {
        constructor(e = null) {
          super(),
            ge.prototype.rows || y.a(ge.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: { rows: { n: 1, c: pe, r: !0, q: !0 } },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = y.e(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ge.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetHomePageContents_Response";
        }
      }
      class Be extends f {
        constructor(e = null) {
          super(),
            Be.prototype.broadcast_clip_id || y.a(Be.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  channel_id: {
                    n: 2,
                    br: y.d.readUint64String,
                    bw: y.h.writeUint64String,
                  },
                  app_id: { n: 3, br: y.d.readUint32, bw: y.h.writeUint32 },
                  broadcaster_steamid: {
                    n: 4,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  creator_steamid: {
                    n: 5,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  video_description: {
                    n: 6,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                  live_time: { n: 7, br: y.d.readUint32, bw: y.h.writeUint32 },
                  length_ms: { n: 8, br: y.d.readUint32, bw: y.h.writeUint32 },
                  thumbnail_path: {
                    n: 9,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = y.e(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(Be.M(), e, t);
        }
        static fromObject(e) {
          return y.c(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_BroadcastClipInfo";
        }
      }
      class Se extends f {
        constructor(e = null) {
          super(),
            Se.prototype.clips || y.a(Se.M()),
            f.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  clips: { n: 1, c: Be, r: !0, q: !0 },
                  thumbnail_host: {
                    n: 2,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = y.e(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(Se.M(), e, t);
        }
        static fromObject(e) {
          return y.c(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelClips_Response";
        }
      }
      class ye extends f {
        constructor(e = null) {
          super(),
            ye.prototype.aggregation_delay_ms || y.a(ye.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  aggregation_delay_ms: {
                    n: 1,
                    br: y.d.readUint32,
                    bw: y.h.writeUint32,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = y.e(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ye.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new S.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new S.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new S.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AppCheer_Response";
        }
      }
      var fe;
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, C, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, v, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, w, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, M, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, O, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelLinkRegions#1", t, F, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, E, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              U,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, P, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, D, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, z, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, W, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, N, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, Se, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, x, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", t, k, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, A, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetChannels#1", t, V, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddChatBan = function (e, t) {
            return e.SendMsg("SteamTV.AddChatBan#1", t, $, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, J, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, K, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, Q, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, Z, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, ee, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, re, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, ae, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, ie, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, se, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, ne, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, ge, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, ye, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(fe || (fe = {}));
      r("sTxY");
      var Ce = r("3u1o"),
        ve = r("GXif"),
        we = r("vYsE"),
        Me = r("/Q1a"),
        Oe = r("GcKe"),
        Te = r("ztGc"),
        Re = r("u76H"),
        Ee = (r("uWhj"), r("Zdsb")),
        je = r("kslQ");
      class Fe {
        constructor() {
          (this.m_mapPlayerCache = new Map()),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            (this.m_strBannedPattern = ""),
            (this.m_strCleanPattern = ""),
            (this.m_regexBannedWords = null),
            (this.m_regexCleanWords = null),
            (this.m_bShownFilterTip = !1),
            (this.m_TextFilterPreferences = new Ee.K());
          {
            let e = new Te.b();
            (this.m_TextFilterPreferences.eTextFilterSetting =
              e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends =
                e.text_filter_ignore_friends());
          }
          this.m_TextFilterWords = new Te.q();
        }
        Init(e = 0, t = null, r = null) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_unAccountID = e),
              (this.m_Transport = t),
              (this.m_Storage = r),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              yield this.LoadFilter(),
              yield this.LoadTextFilterPreferences(),
              yield this.LoadTextFilterWords(),
              yield this.RequestUpdatedSettings(),
              yield this.RequestFriendsList(),
              yield this.LoadLanguage(Me.c.LANGUAGE),
              "english" !== Me.c.LANGUAGE &&
                (yield this.LoadLanguage("english")),
              this.OnFilterDataChanged();
          });
        }
        LoadTextFilterPreferences() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                "CTextFilterStore_TextFilterPreferences"
              );
              e && (this.m_TextFilterPreferences = e);
            }
          });
        }
        SaveTextFilterPreferences() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              "CTextFilterStore_TextFilterPreferences",
              this.m_TextFilterPreferences
            );
        }
        LoadTextFilterWords() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                "CTextFilterStore_TextFilterWords"
              );
              e && (this.m_TextFilterWords = Te.q.fromObject(e));
            }
          });
        }
        SaveTextFilterWords() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              "CTextFilterStore_TextFilterWords",
              this.m_TextFilterWords.toObject()
            );
        }
        LoadFilter() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                  "CTextFilterStore_strBannedPattern"
                ),
                t = yield this.m_Storage.GetObject(
                  "CTextFilterStore_strCleanPattern"
                );
              null != e && null != t && this.BRebuildFilter(e, t);
            }
          });
        }
        SaveFilter() {
          this.m_Storage &&
            (this.m_Storage.StoreObject(
              "CTextFilterStore_strBannedPattern",
              this.m_strBannedPattern
            ),
            this.m_Storage.StoreObject(
              "CTextFilterStore_strCleanPattern",
              this.m_strCleanPattern
            ));
        }
        RequestUpdatedSettings() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = new Te.b();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = _.b.Init(Te.e);
                  e = (yield Te.s.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: Me.c.SESSIONID, origin: Object(Me.d)() };
                  const r = yield s.a.get(
                    Me.c.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 }
                  );
                  e = Te.b.fromObject(r.data.preferences);
                }
              } catch (e) {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new Te.q();
              if (0 !== e.text_filter_words_revision())
                try {
                  if (this.m_Transport) {
                    let e = _.b.Init(Te.l);
                    t = (yield Te.s.GetTextFilterWords(this.m_Transport, e))
                      .Body()
                      .words();
                  } else {
                    let e = {
                      sessionid: Me.c.SESSIONID,
                      origin: Object(Me.d)(),
                    };
                    const r = yield s.a.get(
                      Me.c.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: e, withCredentials: !0 }
                    );
                    t = Te.q.fromObject(r.data.words);
                  }
                } catch (e) {}
              this.UpdateTextFilterWords(t);
            }
          });
        }
        UpdateCommunityPreferences(e) {
          let t = !1;
          e.text_filter_setting() !==
            this.m_TextFilterPreferences.eTextFilterSetting &&
            ((this.m_TextFilterPreferences.eTextFilterSetting =
              e.text_filter_setting()),
            (t = !0)),
            e.text_filter_ignore_friends() !==
              this.m_TextFilterPreferences.bIgnoreFriends &&
              ((this.m_TextFilterPreferences.bIgnoreFriends =
                e.text_filter_ignore_friends()),
              (t = !0)),
            t && this.SaveTextFilterPreferences();
        }
        get TextFilterPreferences() {
          return this.m_TextFilterPreferences;
        }
        UpdateTextFilterWords(e) {
          (this.m_TextFilterWords = e), this.SaveTextFilterWords();
        }
        RequestFriendsList() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = new Re.c();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = _.b.Init(Oe.b);
                  e = (yield Oe.d.GetFriendsList(this.m_Transport, t))
                    .Body()
                    .friendslist();
                } else {
                  let t = { sessionid: Me.c.SESSIONID, origin: Object(Me.d)() };
                  const r = yield s.a.get(
                    Me.c.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist",
                    { params: t, withCredentials: !0 }
                  );
                  e = Re.c.fromObject(r.data.friendslist);
                }
              } catch (e) {}
            this.SetFriendsList(e);
          });
        }
        SetFriendsList(e) {
          e.bincremental() || this.m_mapPlayerCache.clear();
          for (let t of e.friends()) {
            let e = new B.a(t.ulfriendid());
            if (e.BIsIndividualAccount()) {
              let r = t.efriendrelationship();
              this.m_mapPlayerCache.set(e.GetAccountID(), r);
            }
          }
        }
        BIsFriend(e) {
          return (
            !!this.m_mapPlayerCache.has(e) && 3 == this.m_mapPlayerCache.get(e)
          );
        }
        LoadLanguage(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = `${
              Me.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${Object(
              Me.d
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strBannedWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              Me.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${Object(
              Me.d
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strProfanityWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              Me.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${Object(
              Me.d
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strCleanWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
          });
        }
        AppendPattern(e, t) {
          return "" !== t && ("" !== e && (e += "|"), (e += t)), e;
        }
        CreatePattern(e) {
          let t = e.filter(function (e) {
            return "" !== e;
          });
          return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
        }
        OnFilterDataChanged() {
          let e = new RegExp(/\s*[\r\n]+\s*/g),
            t = [],
            r = [];
          switch (this.m_TextFilterPreferences.eTextFilterSetting) {
            case 0:
            case 3:
              break;
            case 2:
              t = t.concat(this.m_strBannedWords.split(e));
              break;
            default:
              t = t.concat(
                this.m_strProfanityWords.split(e),
                this.m_strBannedWords.split(e)
              );
          }
          (t = t.concat(
            this.m_TextFilterWords.text_filter_custom_banned_words()
          )),
            (r = this.m_strCleanWords.split(e)),
            (r = r.concat(
              this.m_TextFilterWords.text_filter_custom_clean_words()
            ));
          let a = this.CreatePattern(t),
            i = this.CreatePattern(r);
          "" != i && (i = "^(" + i + ")$"),
            this.BRebuildFilter(a, i) && this.SaveFilter();
        }
        BRebuildFilter(e, t) {
          if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
            return !1;
          if (((this.m_regexBannedWords = null), "" !== e))
            try {
              this.m_regexBannedWords = new RegExp(e, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter bannedwords regex"),
                Object(je.a)().ReportError(
                  new Error(
                    `Couldn't compile textfilter bannedwords regex: ${e}`
                  )
                );
            }
          if (((this.m_regexCleanWords = null), "" !== t))
            try {
              this.m_regexCleanWords = new RegExp(t, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter cleanwords regex"),
                Object(je.a)().ReportError(
                  new Error(
                    `Couldn't compile textfilter cleanwords regex: ${e}`
                  )
                );
            }
          return (
            (this.m_strBannedPattern = e), (this.m_strCleanPattern = t), !0
          );
        }
        CreateProfanityReplacement(e) {
          return "♥".repeat(e);
        }
        BHasFilter() {
          return null != this.m_regexBannedWords;
        }
        BShownFilterTip() {
          return this.m_bShownFilterTip;
        }
        SetFilterTipShown(e) {
          this.m_bShownFilterTip = e;
        }
        FilterText(e, t) {
          if (!this.m_regexBannedWords) return t;
          let r = 0;
          if ("string" == typeof e && "" !== e) {
            r = new B.a(e).GetAccountID();
          } else "number" == typeof e && (r = e);
          return !t ||
            r == this.m_unAccountID ||
            (this.m_TextFilterPreferences.bIgnoreFriends && this.BIsFriend(r))
            ? t
            : t.replace(this.m_regexBannedWords, (e) =>
                this.m_regexCleanWords && 0 == e.search(this.m_regexCleanWords)
                  ? e
                  : this.CreateProfanityReplacement(e.length)
              );
        }
      }
      Object(a.b)([d.C], Fe.prototype, "m_TextFilterPreferences", void 0),
        Object(a.b)([d.C], Fe.prototype, "m_mapPlayerCache", void 0),
        Object(a.b)([d.C], Fe.prototype, "m_regexBannedWords", void 0),
        Object(a.b)([d.C], Fe.prototype, "m_regexCleanWords", void 0),
        Object(a.b)([d.k], Fe.prototype, "UpdateCommunityPreferences", null),
        Object(a.b)([d.k], Fe.prototype, "SetFriendsList", null),
        Object(a.b)([d.k], Fe.prototype, "BRebuildFilter", null);
      class ze {
        constructor() {
          this.m_mapChats = new Map();
        }
        GetChat(e, t) {
          return this.m_mapChats.get(e) || this.m_mapChats.get(t);
        }
        GetOrCreateChat(e, t) {
          let r = this.GetChat(e, t);
          return r || ((r = new Ie()), this.m_mapChats.set(e || t, r)), r;
        }
      }
      Object(a.b)([d.C], ze.prototype, "m_mapChats", void 0);
      class Ie {
        constructor() {
          (this.m_ulBroadcastChannelID = ""),
            (this.m_ulChatID = ""),
            (this.m_strFlairGroupID = ""),
            (this.m_bAutoScroll = !0),
            (this.m_ulBroadcastID = ""),
            (this.m_ulBroadcastSteamID = ""),
            (this.m_tsFirstRequest = null),
            (this.m_nFromFirstRequestMS = 0),
            (this.m_nNextChatTS = 0),
            (this.m_cConsecutiveErrors = 0),
            (this.m_nNudgeFactorMS = 0),
            (this.m_nLastSleepMS = 0),
            (this.m_bReconnecting = !1),
            (this.m_unInstanceID = Math.floor(4294967296 * Math.random())),
            (this.m_strUserSteamID = ""),
            (this.m_regexUserEmoticons = null),
            (this.m_chatScheduledFunc = null),
            (this.m_webAPIInterface = null),
            (this.m_textFilterStore = null),
            (this.m_bHasAddedWelcomeChat = !1),
            (this.m_mapMutedUsers = {}),
            (this.m_mapChannelModeratorUsers = new Map()),
            (this.m_mapBroadcastModeratorUsers = new Map()),
            (this.m_nRateLimitSeconds = 0),
            (this.m_bRateLimited = !1),
            (this.m_rgChatMessages = []),
            (this.m_webAPIInterface = new g.a(
              Me.c.WEBAPI_BASE_URL,
              Me.h.webapi_token
            ));
        }
        InitTextFilter() {
          this.m_textFilterStore = new Fe();
          let e = 0;
          if ("" !== Me.h.steamid) {
            e = new B.a(Me.h.steamid).GetAccountID();
          }
          this.m_textFilterStore.Init(e, null, new p.a());
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
        StartForSteamID(e, t) {
          (this.m_webAPIInterface = new g.a(
            Me.c.WEBAPI_BASE_URL,
            Me.h.webapi_token
          )),
            (this.m_ulBroadcastSteamID = e),
            (this.m_ulBroadcastID = t),
            this.InitTextFilter(),
            this.RequestChatInfo();
        }
        StartForChannel(e) {
          (this.m_webAPIInterface = new g.a(
            Me.c.WEBAPI_BASE_URL,
            Me.h.webapi_token
          )),
            (this.m_ulBroadcastChannelID = e),
            (this.m_strUserSteamID = Me.h.steamid),
            this.InitTextFilter(),
            this.JoinChannelChat();
        }
        Stop() {
          this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
        }
        SendMessage(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const t = e.trim();
            if (0 != t.length)
              try {
                let e, r, a;
                if (this.m_webApiToken) {
                  const e = new FormData();
                  e.append("chat_id", this.m_ulChatID),
                    e.append("message", t),
                    e.append("instance_id", this.m_unInstanceID.toString()),
                    (r = yield s.a.post(
                      `${Me.c.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      e
                    )),
                    (a = r.data && r.data.response);
                } else {
                  const r = _.b.Init(u.c);
                  r.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: t,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (e = yield u.a.PostChatMessage(
                      this.m_webAPIInterface.GetServiceTransport(),
                      r
                    )),
                    (a = {
                      result: e.GetEResult(),
                      cooldown_time_seconds: e.Body().cooldown_time_seconds(),
                      in_game: e.Body().in_game(),
                      persona_name: e.Body().persona_name(),
                    });
                }
                if (a && a.result && 1 != a.result) {
                  let e = "";
                  return (
                    (e =
                      17 == a.result
                        ? Object(ve.g)("#BroadcastChat_YouMuted")
                        : 84 == a.result
                        ? Object(ve.g)(
                            "#BroadcastChat_Cooldown",
                            a.cooldown_time_seconds
                          )
                        : Object(ve.g)("#BroadcastChat_FailedToSendMsg", t)),
                    void this.m_rgChatMessages.push({
                      type: h.a.Error,
                      msg: e,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: a.in_game,
                      persona_name: a.persona_name,
                      steamid: "",
                    })
                  );
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = a.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      1e3 * this.m_nRateLimitSeconds
                    ));
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: h.a.Error,
                  msg: Object(ve.g)("#BroadcastChat_FailedToSendMsg", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          });
        }
        RequestChatInfo(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const t = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: Me.c.SESSIONID,
                },
                r = yield s.a.get(
                  `${Me.c.CHAT_BASE_URL}broadcast/getchatinfo`,
                  {
                    params: t,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                  }
                );
              (e && e.token.reason) ||
                Object(d.G)(() => {
                  const e = r.data;
                  (this.m_strChatURL = e.view_url_template),
                    (this.m_ulChatID = e.chat_id),
                    (this.m_strFlairGroupID =
                      e.flair_group_ids && e.flair_group_ids[0]),
                    e.blocked && console.log("User is blocked from chat"),
                    e.steamid && (this.m_strUserSteamID = e.steamid),
                    e.token && (this.m_webApiToken = e.token),
                    e.emoticons && this.SetOwnedEmoticons(e.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: h.a.Notification,
                        msg: Object(ve.g)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    e.moderators_steamid &&
                      e.moderators_steamid.forEach((e) =>
                        this.m_mapBroadcastModeratorUsers.set(e, !0)
                      ),
                    (this.m_chatScheduledFunc = new Ce.b()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (e) {
              console.error(e), console.log("Failed to get chat info!");
            }
          });
        }
        JoinChannelChat() {
          return Object(a.a)(this, void 0, void 0, function* () {
            try {
              const e = _.b.Init(te);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = yield fe.JoinChat(
                this.m_webAPIInterface.GetServiceTransport(),
                e
              );
              if (!t.Body().chat_id || !t.Body().view_url_template)
                return void console.log("Failed to join channel chat");
              (this.m_strChatURL = t.Body().view_url_template()),
                (this.m_ulChatID = t.Body().chat_id()),
                (this.m_strFlairGroupID =
                  t.Body().flair_group_ids() && t.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: h.a.Notification,
                  msg: Object(ve.g)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new Ce.b()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (e) {
              console.error(e), console.log("Failed to join chat!");
            }
          });
        }
        FetchChatModerators() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = _.b.Init(X);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const t = (yield fe.GetChatModerators(
                this.m_webAPIInterface.GetServiceTransport(),
                e
              ))
                .Body()
                .results(),
              r = new Map();
            t.forEach((e) => {
              r.set(e.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = r);
          });
        }
        RequestLoop() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = {},
              t = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString()
              );
            t == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (e.t = this.m_nNextChatTS);
            try {
              const r = (yield s.a.get(t, { params: e })).data;
              this.m_cConsecutiveErrors = 0;
              const a = r.messages
                .map((e) =>
                  Object.assign(Object.assign({}, e), {
                    type: h.a.Chat,
                    client_ts: Number(new Date()),
                  })
                )
                .filter((e) => !this.IsUserMutedLocally(e.steamid));
              this.m_rgChatMessages.push(...a);
              const i = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > i &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - i
                  ),
                r.muted)
              )
                for (const e of r.muted) {
                  const t =
                    e.muted == this.m_strUserSteamID
                      ? Object(ve.g)("#BroadcastChat_YouMuted", e.persona_name)
                      : Object(ve.g)(
                          "#BroadcastChat_UserMuted",
                          e.persona_name
                        );
                  this.m_rgChatMessages.push({
                    type: h.a.Notification,
                    msg: t,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (r.remove_msgs)
                for (const e of r.remove_msgs)
                  this.RemoveUserMessagesLocal(e.steamid);
              let n = 0;
              if (
                null == this.m_tsFirstRequest ||
                0 == this.m_nNextChatTS ||
                r.initial_delay
              ) {
                if ("undefined" === r.initial_delay)
                  return void console.log(
                    "Need initial_delay to know when to request first chat message"
                  );
                (this.m_tsFirstRequest = performance.now() + r.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = r.next_request),
                  (n = r.initial_delay);
              } else {
                if (r.next_request < this.m_nNextChatTS)
                  return void console.log("Next request in past");
                (this.m_nFromFirstRequestMS +=
                  r.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = r.next_request),
                  (n =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = n),
                n < 0 && (n = 0),
                this.m_chatScheduledFunc.Schedule(n, this.RequestLoop);
            } catch (e) {
              if (
                (console.log(
                  "Failed to get chat messages. Previous sleep set to: " +
                    this.m_nLastSleepMS +
                    " firstReq: " +
                    this.m_tsFirstRequest +
                    " firstFromRequest: " +
                    this.m_nFromFirstRequestMS +
                    " nudge: " +
                    this.m_nNudgeFactorMS
                ),
                this.m_cConsecutiveErrors++,
                (this.m_nNudgeFactorMS += 10),
                this.m_cConsecutiveErrors >= 4)
              ) {
                if (null == this.m_tsFirstRequest)
                  return void this.m_rgChatMessages.push({
                    type: h.a.Error,
                    msg: Object(ve.g)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(500, this.RequestLoop);
            }
          });
        }
        GetUserEmoticons() {
          return this.m_regexUserEmoticons;
        }
        SetOwnedEmoticons(e) {
          let t = [];
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            a.length >= 2 && ":" == a[0]
              ? t.push(a.substr(1, a.length - 2))
              : t.push(a);
          }
          let r = ":(" + t.join("|") + "):";
          this.m_regexUserEmoticons = new RegExp(r, "g");
        }
        UpdateBroadcastChatModerator(e, t, r) {
          return Object(a.a)(this, void 0, void 0, function* () {
            {
              const a = new FormData();
              a.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                a.append("moderatorsteamid", e),
                a.append("bAdd", t ? "1" : "0"),
                a.append("sessionid", Me.c.SESSIONID);
              try {
                yield s.a.post(
                  `${Me.c.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, t);
                const i = Object(ve.g)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  r
                );
                this.m_rgChatMessages.push({ type: h.a.Notification, msg: i });
              } catch (e) {
                const a = Object(ve.g)(
                  t
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  r
                );
                this.m_rgChatMessages.push({ type: h.a.Error, msg: a });
              }
            }
          });
        }
        UpdateUserChatBan(e, t, r, i, n, o) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const a = this.m_ulBroadcastSteamID,
              l = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const t = _.b.Init(q);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: 3600 * r,
                permanent: i,
                undo: o,
              }),
                yield fe.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t
                );
            } else {
              const o = new FormData();
              o.append("broadcaststeamid", a),
                o.append("issuersteamid", l),
                o.append("chattersteamid", e),
                o.append("bantype", t),
                o.append("duration", r.toString()),
                o.append("perm", i ? "1" : "0"),
                o.append("sessionid", Me.c.SESSIONID);
              try {
                yield s.a.post(
                  `${Me.c.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  o
                ),
                  0 == t
                    ? delete this.m_mapMutedUsers[e]
                    : (this.m_mapMutedUsers[e] = n);
              } catch (e) {
                console.log("Failed to update mute for " + n);
              }
            }
          });
        }
        MuteUserForSession(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e == this.m_strUserSteamID) return;
            if (this.m_ulBroadcastSteamID == e) return;
            let r = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[e]) {
              this.m_mapMutedUsers[e] = t;
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    t.append("muted", "1"),
                    yield s.a.post(
                      `${Me.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = _.b.Init(u.b);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !0,
                  }),
                    yield u.a.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
              } catch (a) {
                r &&
                  (this.m_rgChatMessages.push({
                    type: h.a.Error,
                    msg: Object(ve.g)("#BroadcastChat_UserMuteFailed", t),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[e]);
              }
            }
            r ||
              this.m_rgChatMessages.push({
                type: h.a.Notification,
                msg: Object(ve.g)("#BroadcastChat_UserMutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          });
        }
        UnmuteUserForSession(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[e] && delete this.m_mapMutedUsers[e],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    t.append("muted", "0"),
                    yield s.a.post(
                      `${Me.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = _.b.Init(u.b);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !1,
                  }),
                    yield u.a.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
                this.m_rgChatMessages.push({
                  type: h.a.Notification,
                  msg: Object(ve.g)("#BroadcastChat_UserUnmutedLocal", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: h.a.Error,
                  msg: Object(ve.g)("#BroadcastChat_UserUnmuteFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: h.a.Notification,
                msg: Object(ve.g)("#BroadcastChat_UserUnmutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          });
        }
        RemoveUserMessagesLocal(e) {
          this.m_rgChatMessages = this.m_rgChatMessages.filter(
            (t) => t.steamid !== e
          );
        }
        RemoveUserMessagesServer(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e != this.m_strUserSteamID)
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    yield s.a.post(
                      `${Me.c.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = _.b.Init(u.d);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                  }),
                    yield u.a.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: h.a.Error,
                  msg: Object(ve.g)("#BroadcastChat_RemoveMessagesFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          });
        }
        UpdateChatMessageFlair(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_webApiToken) {
              const t = new FormData();
              t.append("chat_id", this.m_ulChatID),
                t.append("flair", `^${this.m_strFlairGroupID}^:${e}:`),
                yield s.a.post(
                  `${Me.c.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  t
                );
            } else {
              const t = _.b.Init(u.e);
              t.SetBodyFields({
                chat_id: this.m_ulChatID,
                flair: `^${this.m_strFlairGroupID}^:${e}:`,
              }),
                yield u.a.UpdateChatMessageFlair(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t
                );
            }
          });
        }
        IsUserMutedLocally(e) {
          return Boolean(this.m_mapMutedUsers[e]);
        }
        BIsUserBroadcastModerator(e) {
          return this.m_mapBroadcastModeratorUsers.has(e);
        }
        IsUserBroadcaster(e) {
          return e === this.m_ulBroadcastSteamID;
        }
        SyncChat() {
          (this.m_tsFirstRequest = null),
            (this.m_nFromFirstRequestMS = 0),
            (this.m_nNextChatTS = 0),
            (this.m_rgChatMessages = []);
        }
      }
      Object(a.b)([d.C], Ie.prototype, "m_mapChannelModeratorUsers", void 0),
        Object(a.b)(
          [d.C],
          Ie.prototype,
          "m_mapBroadcastModeratorUsers",
          void 0
        ),
        Object(a.b)([d.C], Ie.prototype, "m_nRateLimitSeconds", void 0),
        Object(a.b)([d.C], Ie.prototype, "m_bRateLimited", void 0),
        Object(a.b)([d.C], Ie.prototype, "m_rgChatMessages", void 0),
        Object(a.b)([we.a], Ie.prototype, "FetchChatModerators", null),
        Object(a.b)([we.a], Ie.prototype, "RequestLoop", null),
        Object(a.b)([we.a], Ie.prototype, "MuteUserForSession", null);
      const Pe = new ze();
      window.g_BroadcastChatStore = Pe;
      var De = r("Y6GK"),
        We = (r("QwK/"), r("Wjgn")),
        Ne = r("USh/"),
        xe = r.n(Ne),
        ke = r("SS8s"),
        Ge = r("7ast"),
        Ae = r("55de"),
        Ve = r("c8QL"),
        Ue = r("tXj3"),
        Le = r("GfUI"),
        He = r("TCgL"),
        qe = r.n(He);
      const $e = () =>
          c.a.createElement(
            "div",
            { className: qe.a.FriendsListInsetShadowCtn },
            c.a.createElement("div", {
              className: qe.a.FriendListInsetShadowTop,
            })
          ),
        Je = () =>
          c.a.createElement(
            "div",
            { className: qe.a.FriendsListInsetShadowCtn },
            c.a.createElement("div", {
              className: qe.a.FriendListInsetShadowBottom,
            })
          );
      var Ke = r("e356"),
        Xe = r("GbHM"),
        Ye = r("hCpY"),
        Qe = r("mE5e"),
        Ze = r.n(Qe);
      const et = new RegExp("ː([^ː]*)ː", "g"),
        tt =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      const rt = (e) => {
          const { userType: t, msg: r, presenterInfo: a } = e;
          if ("presenter" === t)
            return l.createElement(
              "span",
              null,
              l.createElement(
                Le.b,
                {
                  name: a.name,
                  title: a.title,
                  photo: a.photo,
                  company: a.company,
                  bioString: a.bio,
                },
                l.createElement(
                  "a",
                  {
                    className: Object(Xe.a)(
                      Ze.a.MessageName,
                      Ze.a.MessagePresenter
                    ),
                    href: Me.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          {
            let e = null;
            return (
              "broadcaster" === t
                ? (e = Ze.a.MessageBroadcaster)
                : "moderator" === t && (e = Ze.a.MessageModerator),
              l.createElement(
                "span",
                null,
                l.createElement(
                  "a",
                  {
                    className: Object(Xe.a)(Ze.a.MessageName, e),
                    href: Me.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    "data-miniprofile": "s" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          }
        },
        at = (e) => {
          switch (e.userType) {
            case "presenter":
              return l.createElement(
                "span",
                {
                  className: Ze.a.RoleFlairContainer,
                  "data-tooltip-text": Object(ve.g)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                l.createElement(Ke.i, null)
              );
            case "moderator":
              return l.createElement(
                "span",
                {
                  className: Ze.a.RoleFlairContainer,
                  "data-tooltip-text": Object(ve.g)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                l.createElement(Ke.j, null)
              );
            case "broadcaster":
              return l.createElement(
                "span",
                {
                  className: Ze.a.RoleFlairContainer,
                  "data-tooltip-text": Object(ve.g)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                l.createElement(Ke.h, null)
              );
            default:
              return null;
          }
        };
      let it = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_chat = null),
            (this.messagesContainer = l.createRef());
        }
        componentDidMount() {
          this.StartChat();
        }
        componentDidUpdate(e) {
          this.m_chat &&
            this.m_chat.m_bAutoScroll &&
            this.ScrollToNewestMessages(),
            (this.props.steamID === e.steamID &&
              this.props.broadcastID === e.broadcastID &&
              this.props.broadcastChannelID === e.broadcastChannelID) ||
              this.StartChat();
        }
        componentWillUnmount() {
          this.m_chat && this.m_chat.Stop();
        }
        StartChat() {
          if (
            (this.m_chat && this.m_chat.Stop(),
            (this.m_chat = Pe.GetOrCreateChat(
              this.props.broadcastChannelID,
              this.props.steamID
            )),
            this.props.broadcastChannelID)
          )
            this.m_chat.StartForChannel(this.props.broadcastChannelID);
          else if (
            this.props.steamID &&
            this.props.steamID &&
            (this.props.broadcastID || this.props.globalChat)
          ) {
            let e = this.props.broadcastID || "0";
            this.m_chat.StartForSteamID(this.props.steamID, e),
              this.ScrollToNewestMessages();
          }
        }
        IsTrustedDomain(e) {
          return !!e.match(tt);
        }
        AddLinksEmoticons(e, t) {
          let r = et;
          t && (r = this.m_chat.GetUserEmoticons());
          let a = e.split(et);
          const i = [];
          for (let e = 0; e < a.length; e += 1)
            e % 2 == 1
              ? i.push(
                  l.createElement(Ae.d, {
                    emoticonHoverStore: We.b,
                    key: e,
                    emoticon: a[e],
                    large: !0,
                  })
                )
              : i.push(a[e]);
          return i;
        }
        HandleScroll(e) {
          const t = this.props.bInvertLayout
            ? e.currentTarget.scrollTop < 6
            : e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
              e.currentTarget.scrollHeight - 6;
          this.m_chat && (this.m_chat.m_bAutoScroll = t);
        }
        ScrollToNewestMessages() {
          this.messagesContainer &&
            this.messagesContainer.current &&
            (this.messagesContainer.current.scrollTop = this.props.bInvertLayout
              ? 0
              : this.messagesContainer.current.scrollHeight);
        }
        OnContextMenu(e, t) {
          if (t.type !== h.a.Chat) return null;
          const r = [],
            a = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
            i = this.m_chat.BIsUserBroadcastModerator(
              this.m_chat.GetUserSteamID()
            );
          if (
            ((Me.h && Me.h.is_support) || a || i
              ? r.push(
                  l.createElement(
                    ke.e,
                    {
                      key: "remove",
                      onSelected: () =>
                        this.m_chat.RemoveUserMessagesServer(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_RemoveMessages")
                  ),
                  l.createElement(
                    ke.e,
                    {
                      key: "updatebanh",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          12,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_half_Mute")
                  ),
                  l.createElement(
                    ke.e,
                    {
                      key: "updateband",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          24,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_day_Mute")
                  ),
                  l.createElement(
                    ke.e,
                    {
                      key: "updatebanw",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          168,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_week_Mute")
                  ),
                  l.createElement(
                    ke.e,
                    {
                      key: "updatebanp",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          0,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_perm_Mute")
                  ),
                  l.createElement(
                    ke.e,
                    {
                      key: "removeban",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          0,
                          0,
                          !1,
                          t.persona_name,
                          !0
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_Unmute")
                  )
                )
              : this.m_chat.IsUserMutedLocally(t.steamid)
              ? r.push(
                  l.createElement(
                    ke.e,
                    {
                      key: "unmuteuser",
                      onSelected: () =>
                        this.m_chat.UnmuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_UnmuteLocal")
                  )
                )
              : r.push(
                  l.createElement(
                    ke.e,
                    {
                      key: "muteuser",
                      onSelected: () =>
                        this.m_chat.MuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_MuteLocal")
                  )
                ),
            ((Me.h && Me.h.is_support) ||
              this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
              t.steamid)
          ) {
            this.m_chat.BIsUserBroadcastModerator(t.steamid)
              ? r.push(
                  l.createElement(
                    ke.e,
                    {
                      key: "removemod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_Remove_Moderator")
                  )
                )
              : r.push(
                  l.createElement(
                    ke.e,
                    {
                      key: "addmod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(ve.g)("#BroadcastChat_Add_Moderator")
                  )
                );
          }
          return r.length
            ? Object(m.a)(
                l.createElement(
                  ke.c,
                  null,
                  l.createElement(
                    "div",
                    { className: Ze.a.SelectedUserNameCtn },
                    Object(ve.g)("#BroadcastChat_User"),
                    l.createElement("br", null),
                    l.createElement(
                      "span",
                      { className: Ze.a.SelectedUserName },
                      t.persona_name
                    )
                  ),
                  r
                ),
                e
              )
            : null;
        }
        GetTypeClassName(e) {
          return e.type === h.a.Notification
            ? Ze.a.MessageNotification
            : e.type === h.a.Error
            ? Ze.a.MessageError
            : Ze.a.MessageChat;
        }
        FormatMessage(e, t) {
          if (e.type === h.a.Chat) {
            let r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
            return this.AddLinksEmoticons(r, !1);
          }
          return e.msg;
        }
        RenderUserChatLine(e, t, r) {
          let a = r ? r.get(e.steamid) : void 0;
          const i =
            e.type === h.a.Chat
              ? (function (e, t, r) {
                  return r
                    ? "presenter"
                    : t.GetBroadcastSteamID() === e
                    ? "broadcaster"
                    : t.BIsUserBroadcastModerator(e)
                    ? "moderator"
                    : "";
                })(e.steamid, this.m_chat, a)
              : "";
          return l.createElement(
            "div",
            {
              key: e.instance_id + "_" + e.client_ts + "_" + t,
              className: this.GetTypeClassName(e),
              onContextMenu: (t) => this.OnContextMenu(t, e),
            },
            e.type === h.a.Chat && l.createElement(at, { userType: i }),
            e.flair &&
              l.createElement(
                "span",
                { className: Ze.a.FlairContainer },
                this.AddLinksEmoticons(e.flair, !1)
              ),
            e.type === h.a.Chat &&
              l.createElement(rt, { userType: i, msg: e, presenterInfo: a }),
            e.type === h.a.Chat &&
              this.m_chat.GetBroadcastSteamID() === e.steamid &&
              l.createElement(
                "span",
                {
                  className: `${Ze.a.MessageNotification} ${Ze.a.MessageContents}`,
                },
                ` (${Object(ve.g)("#BroadcastChat_Broadcaster")})`
              ),
            e.type === h.a.Chat &&
              this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
              l.createElement(
                "span",
                {
                  className: `${Ze.a.MessageNotification} ${Ze.a.MessageContents}`,
                },
                ` (${Object(ve.g)("#BroadcastChat_Moderator")})`
              ),
            l.createElement(
              "span",
              {
                className: `${Ze.a.MessageContents} ${
                  this.AddLinksEmoticons(e.msg, !1).filter(
                    (e) => e && "string" == typeof e
                  ).length
                    ? ""
                    : Ze.a.EmoticonsOnly
                }`,
              },
              e.type === h.a.Chat ? " : " : "",
              this.FormatMessage(e, this.m_chat.TextFilterStore)
            )
          );
        }
        render() {
          const {
              hidden: e,
              bPartnerMemberOnlyChat: t,
              bInvertLayout: r,
            } = this.props,
            a = this.m_chat ? this.m_chat.m_rgChatMessages : [],
            i = r ? a.reverse() : a,
            s = this.m_chat
              ? De.b.GetPresenterMapForBroadcasterSteamID(
                  this.m_chat.GetBroadcastSteamID()
                )
              : void 0;
          return l.createElement(
            "div",
            {
              className: Object(Xe.a)(Ze.a.ChatPanel, "ChatPanel"),
              style: e ? { display: "none" } : void 0,
            },
            r &&
              !!this.m_chat &&
              l.createElement(st, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              }),
            l.createElement($e, null),
            l.createElement(
              "div",
              {
                className: Object(Xe.a)(
                  `${Ze.a.ChatMessages} ${xe.a.minHeightZero}`,
                  "ChatMessages"
                ),
                onScroll: this.HandleScroll,
                ref: this.messagesContainer,
              },
              i.map((e, t) => this.RenderUserChatLine(e, t, s))
            ),
            l.createElement(Je, null),
            !r &&
              !!this.m_chat &&
              l.createElement(st, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              })
          );
        }
      };
      function st(e) {
        const { oChat: t, emoticonStore: r, bPartnerMemberOnlyChat: a } = e;
        return !a ||
          ((null === Me.h || void 0 === Me.h ? void 0 : Me.h.logged_in) &&
            (null === Me.h || void 0 === Me.h
              ? void 0
              : Me.h.is_partner_member))
          ? (null === Me.h || void 0 === Me.h ? void 0 : Me.h.logged_in)
            ? l.createElement(nt, { oChat: t, emoticonStore: r })
            : null
          : l.createElement(ct, null);
      }
      function nt(e) {
        const { oChat: t, emoticonStore: r } = e,
          [a, i] = l.useState(""),
          s = l.useRef(),
          n = l.useCallback(
            (e) => {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (t.m_bRateLimited || (t.SendMessage(a), i("")),
                e.preventDefault());
            },
            [t, a]
          ),
          o = l.useCallback(
            (e, t = !1) => {
              i(a + `ː${e}ː`),
                (null == s ? void 0 : s.current) && s.current.focus();
            },
            [a, s]
          );
        return l.createElement(
          "div",
          { className: Object(Xe.a)(Ze.a.ChatEntryCtn, "ChatEntryCtn") },
          l.createElement(
            "div",
            { className: Object(Xe.a)(Ze.a.ChatEntry, "ChatEntry") },
            l.createElement(
              "form",
              { className: `${xe.a.chatEntryControls}` },
              l.createElement("textarea", {
                className: xe.a.chatTextarea,
                placeholder: Object(ve.g)("#BroadcastChat_EnterResponse"),
                onKeyPress: n,
                onChange: (e) => i(e.target.value),
                value: a,
                ref: s,
              }),
              Boolean(t.m_bRateLimited) &&
                l.createElement(lt, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              l.createElement(
                "button",
                {
                  className: `${xe.a.chatSubmitButton} ${
                    a ? "" : xe.a.disabled
                  }`,
                  title: Object(ve.g)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: () => {
                    t.SendMessage(a), i("");
                  },
                },
                l.createElement(Ke.zb, null)
              )
            ),
            l.createElement(
              "div",
              {
                style: { height: "50px" },
                className: `${xe.a.chatEntryActionsContainer}`,
              },
              l.createElement(
                "div",
                { className: xe.a.chatEntryActionsGroup },
                l.createElement(Ve.a, {
                  disabled: !1,
                  OnEmoticonSelected: o,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: We.b,
                }),
                l.createElement(ot, Object.assign({}, e, { textInputRef: s }))
              )
            )
          )
        );
      }
      function ot(e) {
        var t;
        const { oChat: r, emoticonStore: a, textInputRef: i } = e;
        return r.m_strFlairGroupID &&
          a.flair_list &&
          (null === (t = a.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? l.createElement(Ve.a, {
              disabled: !1,
              OnEmoticonSelected: (e) => {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: a,
              emoticonHoverStore: We.b,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(ve.g)("#ChatEntryButton_Flair"),
              buttonIcon: l.createElement(Ke.l, null),
            })
          : null;
      }
      Object(a.b)([d.C], it.prototype, "m_chat", void 0),
        Object(a.b)([Ye.b], it.prototype, "StartChat", null),
        Object(a.b)([Ye.b], it.prototype, "HandleScroll", null),
        Object(a.b)([Ye.b], it.prototype, "OnContextMenu", null),
        Object(a.b)([Ye.b], it.prototype, "RenderUserChatLine", null),
        (it = Object(a.b)([n.a], it));
      class lt extends l.Component {
        render() {
          return l.createElement(
            "div",
            { className: Ze.a.TimedProgressBarContainer },
            l.createElement(
              "div",
              { className: Ze.a.wrapper },
              l.createElement("div", {
                className: `${Ze.a.spinner} ${Ze.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              l.createElement("div", {
                className: `${Ze.a.filler} ${Ze.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              l.createElement("div", {
                className: Ze.a.mask,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              })
            )
          );
        }
      }
      function ct(e) {
        return l.createElement(
          "div",
          { className: Ze.a.Description },
          l.createElement(
            "div",
            { className: Ze.a.LogInPrompt },
            Object(ve.g)("#Broadcast_PartnerChat_Login")
          ),
          !Me.h.logged_in &&
            l.createElement(
              Ge.i,
              { onClick: Ue.a, className: Object(Xe.a)(Ze.a.SignInButton) },
              Object(ve.g)("#Login_SignIn")
            )
        );
      }
      var dt = r("y+i+"),
        mt = r("lfGQ"),
        ut = (r("yfxr"), r("RrtU")),
        ht = r("zy5s"),
        bt = r("1QaA"),
        _t = r("5ZQm"),
        pt = r("0JCO"),
        gt = r("kWcV"),
        Bt = r("0CKs"),
        St = r.n(Bt);
      const yt = Object(n.a)((e) => {
        const { appid: t } = e,
          r = Object(pt.c)(),
          a = Object(l.useRef)({ include_assets: !0, include_release: !0 }),
          [i, s] = Object(ut.b)(t, a.current);
        let n = St.a.StoreSaleWidgetContainer_mini,
          o = St.a.StoreSaleWidgetImage_mini,
          d = St.a.StoreSaleImage_mini;
        if (!i && 2 != s)
          return c.a.createElement(
            "div",
            { className: n },
            c.a.createElement(gt.a, { size: "medium" }),
            ";"
          );
        if (2 == s || !i.GetName())
          return c.a.createElement("div", {
            className: ht.StoreSaleWidgetEmptyContainer,
          });
        const m = 8 != i.GetAppType(),
          u = Object(mt.b)(i.GetStorePageURL(), r);
        return c.a.createElement(
          "div",
          { className: n },
          c.a.createElement(
            "div",
            { className: ht.Actions },
            c.a.createElement(
              "a",
              { href: u, target: Me.c.IN_CLIENT ? void 0 : "_blank" },
              c.a.createElement(
                _t.b,
                { type: "app", id: t },
                c.a.createElement(
                  "div",
                  { className: o },
                  c.a.createElement("img", {
                    className: d,
                    src: i.GetAssets().GetSmallCapsuleURL(),
                  })
                )
              )
            )
          ),
          c.a.createElement(
            "div",
            { className: ht.StoreSaleBroadcastWidgetRight },
            c.a.createElement(
              "div",
              { className: ht.Actions },
              c.a.createElement(
                "a",
                { href: u, target: Me.c.IN_CLIENT ? void 0 : "_blank" },
                c.a.createElement(
                  _t.b,
                  { type: "app", id: t },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(Xe.a)(
                        ht.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle"
                      ),
                    },
                    i.GetName()
                  )
                )
              )
            ),
            c.a.createElement(
              "div",
              { className: ht.StoreSaleWidgetRelease },
              i.GetFormattedSteamReleaseDate()
            ),
            Boolean(m) &&
              c.a.createElement(bt.c, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      var ft = r("HGFm"),
        Ct = (r("uLSr"), r("3XYX")),
        vt = r("bmfB"),
        wt = (r("Wtw7"), r("4EJs")),
        Mt = r("poS6"),
        Ot = r("/HXi"),
        Tt = r("uuth");
      const Rt = (e) => {
        const { onPositionChange: t, onLeave: r } = e,
          a = l.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === Tt.a.above &&
                r &&
                r(e),
              t && t(e)
            ),
            [t, r]
          );
        return l.createElement(
          Tt.a,
          Object.assign({}, e, { onPositionChange: a })
        );
      };
      r("jrt+"), r("XrGS");
      var Et = r("10xk"),
        jt = r("GOJk"),
        Ft = r.n(jt);
      const zt = Object(n.a)((e) => {
        const { event: t } = e,
          r = t.clanSteamID.GetAccountID(),
          i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = Object(l.useRef)(null),
          [o, d] = Object(l.useState)(
            t ? Et.a.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          (Object(l.useEffect)(() => {
            const e = s.a.CancelToken.source();
            n.current = e.cancel;
            return (
              Object(a.a)(void 0, void 0, void 0, function* () {
                const t = B.a.InitFromClanID(r),
                  a = yield Et.a.LoadCreatorHome(t, e);
                e.token.reason || d(a);
              }),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [r]),
          i || !o || !o.BIsLoaded())
        )
          return null;
        const m =
          Me.c.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return c.a.createElement(
          "div",
          { className: Ft.a.item_drop_ctn },
          c.a.createElement(
            "div",
            null,
            Object(ve.g)(
              o.GetName().length > 0
                ? t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                  0
                  ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                  : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                : t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                  0
                ? "#SalePage_WatchForDrop_Hours_Developer"
                : "#SalePage_WatchForDrop_Minutes_Developer",
              t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
              o.GetName()
            ),
            Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
              c.a.createElement(
                "a",
                { href: m, target: Me.c.IN_CLIENT ? "" : "_blank" },
                Object(ve.g)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var It = r("Ys0h"),
        Pt = r("/cMS");
      r("2VXD"), r("f5iL");
      function Dt(e) {
        Pt.a.BIsInitialized() ||
          Pt.a.Initialize(new g.a(Me.c.WEBAPI_BASE_URL, e));
      }
      var Wt,
        Nt = r("XFIJ"),
        xt = (r("WOjH"), r("r0f0"));
      const kt = {
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
            broadcasterAccountID: 161065804,
          },
        ],
      };
      let Gt = (Wt = class extends c.a.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = s.a.CancelToken.source()),
            (this.m_bMarkedUsabilitySeen = !1),
            (this.state = {
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
            });
        }
        static IsBroadcastAllowed() {
          return Me.c.EREALM != ft.c.k_ESteamRealmChina && !Me.c.IN_GAMEPADUI;
        }
        componentDidMount() {
          return Object(a.a)(this, void 0, void 0, function* () {
            Wt.IsBroadcastAllowed() &&
              (Dt(null),
              yield vt.a
                .Get()
                .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !vt.a
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: vt.a
                        .Get()
                        .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                        ? "0vh"
                        : "100vh",
                    }
                  ),
                }),
              yield this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? vt.a.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : vt.a.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (vt.a
                  .Get()
                  .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
                this.props.bSkipPreRoll && this.PlayTopNonVOD()),
              window.setTimeout(() => {
                this.m_cancelSignal.token.reason ||
                  this.setState({
                    style: Object.assign(Object.assign({}, this.state.style), {
                      maxHeight: "100vh",
                    }),
                  });
              }, 10));
          });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let e = vt.a.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            r = Ct.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          Object(vt.e)(r, t ? 2 : 3, e.snr),
            t && Object(Nt.a)() && Object(Nt.a)().AddEvent(1005),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    { maxHeight: t ? "0vh" : "100vh" }
                  ),
                }),
              10
            ),
            t ||
              this.setState({ bExpanded: !this.state.bExpanded }, () =>
                vt.a.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              vt.a.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              vt.a.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield vt.a.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = vt.a
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            Object(vt.f)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield vt.a
                  .Get()
                  .AttemptToPlayStream(this.props, t));
          });
        }
        ConstructSidePanels(e, t) {
          let r = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return r;
          const a = vt.a.Get().GetConcurrentStreams(this.props) > 1;
          let i = Ct.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = c.a.createElement(
              "div",
              { className: Ft.a.rightPanel },
              c.a.createElement(Ut, { key: "right" + i, ImgUrl: e.right_panel })
            ),
            n = c.a.createElement(Ut, {
              key: "left" + i,
              ImgUrl: e.left_panel,
            });
          if (i < 11) {
            const t = De.b.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (i = t[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              i >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((s = c.a.createElement(yt, {
                key: "mini" + e.accountid,
                appid: i,
              })),
              (r.bRightPanelArtworkOrEmpty = !1)),
            a && !t
              ? ((r.leftPanel = c.a.createElement(qt, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + i,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (r.rightPanel = s))
              : t
              ? ((r.leftPanel = c.a.createElement("div", null)),
                (r.rightPanel = c.a.createElement(Kt, {
                  stream: e,
                  orientation: "rightside",
                })),
                (r.bRightPanelArtworkOrEmpty = !1))
              : ((r.leftPanel = n), (r.rightPanel = s)),
            r
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0),
            Object(Nt.a)() && Object(Nt.a)().AddEvent(1004));
        }
        render() {
          if (!Wt.IsBroadcastAllowed() || this.state.bLoadingPreference)
            return null;
          let e = vt.a.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === vt.a.Get().GetChatVisibility();
            const {
              event: r,
              language: a,
              fnRenderBroadcastContext: i,
            } = this.props;
            r &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: r.GetImageURL(
                  "broadcast_left",
                  a || Object(b.n)(Me.c.LANGUAGE)
                ),
                right_panel: r.GetImageURL(
                  "broadcast_right",
                  a || Object(b.n)(Me.c.LANGUAGE)
                ),
                store_title: r.GetBroadcastTitle(
                  a || Object(b.n)(Me.c.LANGUAGE)
                ),
                broadcast_chat_visibility: r.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              n = e.store_title ? e.store_title : e.title,
              o = vt.a.Get().GetConcurrentStreams(this.props) > 1;
            const l = () => {
              var t, r;
              e.nAppIDVOD && this.PlayTopNonVOD(),
                null === (r = (t = this.props).fnOnVideoEnd) ||
                  void 0 === r ||
                  r.call(t);
            };
            r && r.jsondata && r.jsondata.broadcast_gradient_inner_color,
              r && r.jsondata && r.jsondata.broadcast_gradient_outer_color;
            return c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                "div",
                {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                },
                c.a.createElement(
                  "div",
                  {
                    className: Object(Xe.a)({
                      [Ft.a.bordered_container]: !0,
                      [Ft.a.Event]: Boolean(r),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(Xe.a)(
                        Ft.a.bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    c.a.createElement(wt.h, null),
                    n,
                    c.a.createElement(
                      "div",
                      { className: Ft.a.bordered_corner_container },
                      !this.state.bExpanded &&
                        c.a.createElement("div", {
                          className: Ft.a.broadcast_settings_icon,
                          "data-tooltip-text": Object(ve.g)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${Me.c.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      c.a.createElement("div", {
                        className: this.state.bExpanded
                          ? Ft.a.bordered_corner_expanded
                          : Ft.a.bordered_corner_shrinked,
                        "data-tooltip-text": Object(ve.g)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      c.a.createElement(
                        "div",
                        { className: Ft.a.bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  this.state.bExpanded &&
                    c.a.createElement(
                      "div",
                      {
                        className: Object(Xe.a)({
                          [Ft.a.container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: o,
                          broadcast_right_panel_simple:
                            s.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      s.leftPanel,
                      c.a.createElement(At, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      this.state.bExpanded &&
                        c.a.createElement(Vt, { stream: e, bMultistream: o })
                    )
                ),
                Boolean(
                  r && r.jsondata && r.jsondata.broadcast_item_drops_enabled
                ) && c.a.createElement(zt, { event: r }),
                this.state.bExpanded &&
                  c.a.createElement(
                    "div",
                    { className: `${r ? Ft.a.Event : ""}` },
                    c.a.createElement(Vt, { stream: e, bMultistream: o })
                  ),
                c.a.createElement("div", { className: Ft.a.clear_div })
              )
            );
          }
          return c.a.createElement("div", {
            className: "NoBroadcastAvailable",
          });
        }
      });
      Object(a.b)([Ye.b], Gt.prototype, "ToggleBroadcastExpandShrink", null),
        Object(a.b)([Ye.b], Gt.prototype, "OnShrinkTransitionEnd", null),
        Object(a.b)([Ye.b], Gt.prototype, "onStreamSelect", null),
        Object(a.b)([Ye.b], Gt.prototype, "PlayTopNonVOD", null),
        (Gt = Wt = Object(a.b)([n.a], Gt));
      t.default = Gt;
      class At extends c.a.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = c.a.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = Ct.a.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          Object(vt.e)(e, 7, this.props.stream.snr),
            Object(Nt.a)() && Object(Nt.a)().AddEvent(1006),
            this.setState({ bPopout: !1, bPreventPopup: !0 });
        }
        OnEnter() {
          !this.state.bPreventPopup &&
            this.state.bPopout &&
            this.setState({ bPopout: !1 });
        }
        OnLeave() {
          this.state.bPreventPopup ||
            this.state.bPopout ||
            this.setState({ bPopout: !0 });
        }
        render() {
          return c.a.createElement(
            "div",
            { className: Ft.a.wrapper },
            c.a.createElement(
              Rt,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              c.a.createElement(
                "div",
                {
                  className: Object(Xe.a)({
                    [Ft.a.video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [Ft.a.WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                c.a.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? Ft.a.broadcast_floating
                      : Ft.a.video_container,
                  },
                  this.state.bPopout &&
                    c.a.createElement(Lt, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  c.a.createElement(
                    "div",
                    { className: Ft.a.BroadcastPlayerContainer },
                    c.a.createElement(dt.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: 6,
                      bStartMuted: this.props.bStartMuted,
                      fnRenderBroadcastContext:
                        this.props.fnRenderBroadcastContext,
                      fnOnVideoEnd: this.props.fnOnVideoEnd,
                      nAppIDVOD: this.props.stream.nAppIDVOD,
                    })
                  )
                )
              )
            )
          );
        }
      }
      Object(a.b)([Ye.b], At.prototype, "CloseBroadcastPopup", null),
        Object(a.b)([Ye.b], At.prototype, "OnEnter", null),
        Object(a.b)([Ye.b], At.prototype, "OnLeave", null);
      let Vt = class extends c.a.Component {
        ConstructBroadcastLink() {
          let e = this.props.stream;
          const t = Ct.a.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          let r = kt.list.find(
            (r) =>
              r.appid == t &&
              (!r.broadcasterAccountID || r.broadcasterAccountID == e.accountid)
          );
          if (r) {
            let e = r.url;
            return (
              (Me.c.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (e = "steam://openurl/" + e),
              c.a.createElement(
                "a",
                { href: e },
                Object(ve.g)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
              )
            );
          }
          {
            let e = this.props.stream.steamid,
              t = Me.c.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return c.a.createElement(
              "a",
              {
                href: t,
                className: Ft.a.external_link,
                "data-tooltip-text": Object(ve.g)(
                  "#BroadcastWatch_View_Broadcast_Page"
                ),
              },
              c.a.createElement(Ke.D, null)
            );
          }
        }
        OnToggleChat(e) {
          e.preventDefault();
          const t = Ct.a.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          Object(vt.e)(
            t,
            "show" === vt.a.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            vt.a.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = Ct.a.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          Object(vt.e)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = this.ConstructBroadcastLink(),
            t = "remove" != vt.a.Get().GetChatVisibility(),
            r = "hide" === vt.a.Get().GetChatVisibility();
          let a = Number.parseInt(
            "" +
              Ct.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return c.a.createElement(
            "div",
            { className: Object(Xe.a)(Ft.a.viewer_bar, "viewer_bar") },
            c.a.createElement(
              "div",
              { className: Object(Xe.a)(Ft.a.viewer_count, "viewer_count") },
              c.a.createElement(Ke.Jb, null),
              Object(xt.a)(a)
            ),
            c.a.createElement(
              "div",
              { className: Object(Xe.a)(Ft.a.viewer_links, "viewer_links") },
              Boolean(t && !r && this.props.bMultistream) &&
                c.a.createElement(
                  "div",
                  { className: Ft.a.chat_link },
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: Ft.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(ve.g)("#sale_three_section_show_streams")
                  )
                ),
              t &&
                c.a.createElement(
                  "div",
                  { className: Ft.a.chat_link },
                  c.a.createElement(Ke.m, null),
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: Ft.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(ve.g)(
                      r
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              t && c.a.createElement("span", { className: Ft.a.ChatToggle }),
              c.a.createElement(
                "a",
                {
                  href:
                    Me.c.STORE_BASE_URL +
                    "account/preferences/#store_broadcast_settings",
                  target: Me.c.IN_CLIENT ? void 0 : "_blank",
                  className: Ft.a.settings_link,
                  "data-tooltip-text": Object(ve.g)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                c.a.createElement(Ke.mb, null)
              ),
              e
            )
          );
        }
      };
      Object(a.b)([Ye.b], Vt.prototype, "OnToggleChat", null),
        Object(a.b)([Ye.b], Vt.prototype, "onWatchBroadcastPage", null),
        (Vt = Object(a.b)([n.a], Vt));
      class Ut extends c.a.Component {
        render() {
          let e = this.props.ImgUrl;
          return c.a.createElement(
            c.a.Fragment,
            null,
            e &&
              c.a.createElement("img", {
                className: Ft.a.side_panels,
                src: this.props.ImgUrl,
              }),
            !e && c.a.createElement("div", { className: Ft.a.side_panels })
          );
        }
      }
      const Lt = Object(n.a)((e) => {
        const { steamIDBroadcast: t } = e,
          r = Ct.a.GetOrCreateBroadcastInfo(t).m_nAppID,
          [a] = Object(ut.b)(r, {});
        return c.a.createElement(
          "div",
          { className: [Ft.a.PopOutVideoTitleBar, Ft.a.NoSeslect].join(" ") },
          Boolean(a)
            ? c.a.createElement(
                _t.a,
                { type: "app", id: r, className: Ft.a.PopOutVideoTitleText },
                Object(ve.g)("#StoreBroadcast_Detault_popout_Title")
              )
            : c.a.createElement(
                "div",
                { className: Ft.a.PopOutVideoTitleText },
                Object(ve.g)("#StoreBroadcast_Detault_popout_Title")
              ),
          c.a.createElement(
            "button",
            {
              className: Ft.a.PopOutVideoCloseButton,
              "data-tooltip-text": Object(ve.g)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            c.a.createElement(Ke.Ob, null)
          )
        );
      });
      function Ht(e, t) {
        var r;
        const a = Ct.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          i = It.a.Get().GetApp(a);
        return e &&
          (null === (r = null == i ? void 0 : i.GetAssets()) || void 0 === r
            ? void 0
            : r.GetHeaderURL())
          ? parseInt(Ft.a.strStreamIconCapsuleArtHeight)
          : parseInt(Ft.a.strStreamIconScreenshotArtHeight);
      }
      function qt(e) {
        const {
            curStream: t,
            onStreamSelect: r,
            fnFilterStreams: a,
            bShowCapsuleArt: i,
            broadcastEmbedContext: s,
          } = e,
          n = Object(l.useRef)(),
          o = Object(l.useMemo)(() => {
            const e = vt.a
              .Get()
              .GetStreams(s)
              .filter((e) => !a || a(e));
            return Object(vt.f)(e), e;
          }, [s, a]);
        return (
          Object(l.useEffect)(() => {
            if (n && n.current) {
              const e = o
                .map((e) => Ct.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              It.a
                .Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (n.current) {
                    let e = 0;
                    for (const r of o) {
                      if (t.accountid == r.accountid) break;
                      e += Ht(i, r);
                    }
                    n.current.scrollTop = e;
                  }
                });
            }
          }, [o, i, t.accountid, n]),
          c.a.createElement(
            "div",
            {
              ref: n,
              className: Object(Xe.a)({
                [Ft.a.side_panels]: !0,
                side_panels: !0,
                [Ft.a.multistream]: !0,
                [Ft.a.scrollingstreams]: o.length > 3,
              }),
            },
            o.map((e) => {
              var a;
              return c.a.createElement($t, {
                key: null !== (a = e.accountid) && void 0 !== a ? a : e.steamid,
                stream: e,
                bSelected: t.accountid == e.accountid,
                onStreamSelect: r,
                bShowCapsuleArt: i,
              });
            })
          )
        );
      }
      function $t(e) {
        var t;
        const {
            onStreamSelect: r,
            bSelected: a,
            stream: i,
            bShowCapsuleArt: s,
          } = e,
          n = Object(o.d)(
            () => Ct.a.GetOrCreateBroadcastInfo(i.steamid).m_nAppID
          ),
          [l] = Object(ut.b)(
            null !== (t = i.nAppIDVOD) && void 0 !== t ? t : n,
            { include_assets: !0 }
          );
        if (!Object(vt.d)(i)) return null;
        const d = s && (null == l ? void 0 : l.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + i.viewer_count),
          u = !Number.isNaN(m),
          h = !!i.nAppIDVOD && (null == l ? void 0 : l.GetName());
        return c.a.createElement(
          "div",
          {
            className: Object(Xe.a)({
              [Ft.a.stream_icon_and_viewer_container]: !0,
              [Ft.a.stream_featured]:
                i.current_selection_priority == vt.b.k_eFeatured,
              [Ft.a.display_capsule_art]: Boolean(d),
            }),
          },
          c.a.createElement(
            _t.b,
            { type: "app", id: n },
            c.a.createElement(
              Ot.a,
              {
                className: Ft.a.stream_icon_container,
                onClick: () => r && r(i),
                rootMargin: "100px 0px 100px 0px",
              },
              c.a.createElement(Jt, {
                strThumbnail: i.thumbnail_http_address,
                bSelected: a,
                strCapsuleArtURL: d,
              }),
              a &&
                c.a.createElement("div", { className: Ft.a.stream_icon_arrow })
            )
          ),
          c.a.createElement(
            "div",
            {
              className: Object(Xe.a)(Ft.a.viewer_count, !u && Ft.a.vod_title),
            },
            u
              ? c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(Ke.Jb, null),
                  " ",
                  Object(xt.a)(m)
                )
              : h
          )
        );
      }
      function Jt(e) {
        const { strCapsuleArtURL: t, strThumbnail: r, bSelected: a } = e,
          i = a ? Ft.a.stream_icon_selected : Ft.a.stream_icon;
        if (t) {
          const e = [t];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement("img", {
              className: Object(Xe.a)(i, Ft.a.stream_icon_hide_on_hover),
              src: t,
            }),
            c.a.createElement(Mt.b, {
              className: Object(Xe.a)(i, Ft.a.stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return c.a.createElement("img", { className: i, src: r });
      }
      function Kt(e) {
        const { stream: t, orientation: r } = e,
          a = "below" == r,
          i = Object(o.d)(() => Ct.a.GetBroadcast(t.steamid));
        return i
          ? c.a.createElement(
              "div",
              {
                className: Object(Xe.a)({
                  [Ft.a.chat_below_container]: a,
                  [Ft.a.chat_rightside_container]: !a,
                  [Ft.a.store_chat_ctn]: !0,
                }),
              },
              c.a.createElement(
                "div",
                { className: Ft.a.ChatContainer },
                c.a.createElement(it, {
                  emoticonStore: vt.g,
                  watchLocation: 6,
                  steamID: t.steamid,
                  broadcastID: i.m_ulBroadcastID,
                })
              )
            )
          : null;
      }
    },
    DgOg: function (e, t, r) {
      e.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    GOJk: function (e, t, r) {
      e.exports = {
        strStreamIconCapsuleArtHeight: "90px",
        strStreamIconScreenshotArtHeight: "90px",
        bordered_container: "broadcast_embeddable_bordered_container_3cQe7",
        video_placeholder: "broadcast_embeddable_video_placeholder_3AO8B",
        embedded_player: "broadcast_embeddable_embedded_player_2Y3Pd",
        WidePlayer: "broadcast_embeddable_WidePlayer_3DYQa",
        store_chat_ctn: "broadcast_embeddable_store_chat_ctn_2nZVP",
        item_drop_ctn: "broadcast_embeddable_item_drop_ctn_1ynmZ",
        BorderedContainerPromotion:
          "broadcast_embeddable_BorderedContainerPromotion_6w9mo",
        bordered_title: "broadcast_embeddable_bordered_title_1X5ll",
        bordered_subtitle: "broadcast_embeddable_bordered_subtitle_2-kGj",
        bordered_corner_container:
          "broadcast_embeddable_bordered_corner_container_38qcY",
        bordered_corner_expanded:
          "broadcast_embeddable_bordered_corner_expanded_1f-oL",
        bordered_corner_shrinked:
          "broadcast_embeddable_bordered_corner_shrinked__mdbD",
        broadcast_settings_icon:
          "broadcast_embeddable_broadcast_settings_icon_2fD_x",
        container: "broadcast_embeddable_container_2t2rR",
        viewer_bar: "broadcast_embeddable_viewer_bar_2t4Yv",
        side_panels: "broadcast_embeddable_side_panels_52TmM",
        multistream: "broadcast_embeddable_multistream_2ZEx4",
        wrapper: "broadcast_embeddable_wrapper_1gWJA",
        NoChat: "broadcast_embeddable_NoChat_12cS_",
        video_container: "broadcast_embeddable_video_container_10bUz",
        viewer_links: "broadcast_embeddable_viewer_links_15u7W",
        chat_link: "broadcast_embeddable_chat_link_2sm6H",
        settings_link: "broadcast_embeddable_settings_link_1m1Dz",
        external_link: "broadcast_embeddable_external_link_3mFZG",
        viewer_count: "broadcast_embeddable_viewer_count_2D9lH",
        vod_title: "broadcast_embeddable_vod_title_2Rb6f",
        stream_icon_and_viewer_container:
          "broadcast_embeddable_stream_icon_and_viewer_container_3yOFf",
        display_capsule_art: "broadcast_embeddable_display_capsule_art_1jFRs",
        stream_icon_container:
          "broadcast_embeddable_stream_icon_container_1wWar",
        stream_icon_hide_on_hover:
          "broadcast_embeddable_stream_icon_hide_on_hover_lpU7M",
        stream_icon_show_on_hover:
          "broadcast_embeddable_stream_icon_show_on_hover_2y2_x",
        stream_icon: "broadcast_embeddable_stream_icon_11057",
        stream_icon_selected: "broadcast_embeddable_stream_icon_selected_2xRVt",
        scrollingstreams: "broadcast_embeddable_scrollingstreams_1hfOY",
        stream_icon_arrow: "broadcast_embeddable_stream_icon_arrow_3mivE",
        clear_div: "broadcast_embeddable_clear_div_1Mwf2",
        NoSelect: "broadcast_embeddable_NoSelect_I9nF5",
        broadcast_floating: "broadcast_embeddable_broadcast_floating_3Sg16",
        PopOutVideoTitleBar: "broadcast_embeddable_PopOutVideoTitleBar_1vT_0",
        PopOutVideoTitleText: "broadcast_embeddable_PopOutVideoTitleText_27rIe",
        PopOutVideoCloseButton:
          "broadcast_embeddable_PopOutVideoCloseButton_W4fRn",
        BroadcastPlayerContainer:
          "broadcast_embeddable_BroadcastPlayerContainer_1pDmt",
        ChatContainer: "broadcast_embeddable_ChatContainer_2X2rQ",
        BroadcastAndChat: "broadcast_embeddable_BroadcastAndChat_2PrUG",
        detail_chat_ctn: "broadcast_embeddable_detail_chat_ctn_3yNwz",
        ChatEntry: "broadcast_embeddable_ChatEntry_p7wUc",
        Event: "broadcast_embeddable_Event_1YaET",
        rightPanel: "broadcast_embeddable_rightPanel_2Xp5Y",
      };
    },
    Pmtj: function (e, t, r) {
      e.exports = {
        BroadcastPlayerLite: "broadcastplayer_BroadcastPlayerLite_3YmNP",
        BroadcastPlayerLiteVideo:
          "broadcastplayer_BroadcastPlayerLiteVideo_2NLpd",
        BroadcastContext: "broadcastplayer_BroadcastContext_IlTJG",
        BroadcastPlaceholderImg:
          "broadcastplayer_BroadcastPlaceholderImg_3Hcqn",
      };
    },
    TCgL: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        FriendsListInsetShadowCtn:
          "insetshadow_FriendsListInsetShadowCtn_17ewz",
        FriendListInsetShadowTop: "insetshadow_FriendListInsetShadowTop_2-sgw",
        FriendListInsetShadowBottom:
          "insetshadow_FriendListInsetShadowBottom_2hL6s",
      };
    },
    "bQ+M": function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r("mrSG"),
        i = r("q1tI"),
        s = r("e356"),
        n = (r("Zdsb"), r("TyAF")),
        o = r("2vnA"),
        l = r("ionH"),
        c = r("GXif"),
        d = r("oleE"),
        m = r("hCpY"),
        u = (r("ZBhF"), r("Fq2z")),
        h = r("QIS/"),
        b = r.n(h),
        _ = (r("x76A"), r("y+i+")),
        p = r("GbHM");
      let g = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_playerRef = i.createRef()),
            (this.m_hRegisterForGameActionStart = null),
            (this.m_hRegisterForGameActionStart =
              SteamClient.Apps.RegisterForGameActionStart(
                this.onGameActionStart
              )),
            SteamClient.Apps.GetGameActionForApp(
              this.props.overview.GetGameID(),
              this.onGameActionStart
            ),
            (this.state = { broadcast: null, bPlaying: !1 });
        }
        componentDidMount() {
          this.RefreshAndSelectBroadcast();
        }
        RefreshAndSelectBroadcast() {
          this.m_dispose ||
            (this.m_dispose = Object(o.l)(() => {
              let e =
                  l.a.GetBroadcastList(this.props.overview.appid).broadcasts ||
                  [],
                t = this.state.broadcast;
              t && (t = e.find((e) => e.unAccountId == t.unAccountId)),
                !t && e.length > 0 && (t = e[0]),
                this.state.broadcast != t && this.setState({ broadcast: t });
            }));
        }
        componentDidUpdate(e) {
          e.overview.appid != this.props.overview.appid &&
            (this.setState({ broadcast: null, bPlaying: !1 }),
            this.m_dispose && (this.m_dispose(), (this.m_dispose = null)),
            this.RefreshAndSelectBroadcast());
        }
        componentWillUnmount() {
          this.m_hRegisterForGameActionStart &&
            this.m_hRegisterForGameActionStart.unregister(),
            this.m_dispose && (this.m_dispose(), (this.m_dispose = null));
        }
        onGameActionStart(e, t, r) {
          t == this.props.overview.GetGameID() &&
            0 != e &&
            "LaunchApp" == r &&
            this.m_playerRef.current &&
            this.m_playerRef.current.StopPlaybackTillUserInput();
        }
        GetBroadcastURL(e) {
          return (
            `steam://openurl_external/${u.c.GetCommunityURL()}broadcast/watch/` +
            e
          );
        }
        OnClickPlay() {
          this.setState({ bPlaying: !0 });
        }
        render() {
          let e = this.state.broadcast;
          if (!e) return null;
          let t = d.a.InitFromAccountID(e.unAccountId),
            r = this.state.bPlaying,
            a = "GameDetailsPlayer";
          return (
            this.props.isTheaterMode && (a += " TheaterMode"),
            i.createElement(
              "div",
              { className: b.a.BroadcastBox },
              !r &&
                i.createElement(B, {
                  img: e.strThumbnailURL,
                  onClick: this.OnClickPlay,
                }),
              r &&
                i.createElement(
                  "div",
                  { className: b.a.BroadcastPlayer },
                  i.createElement(_.default, {
                    ref: this.m_playerRef,
                    steamIDBroadcast: t.ConvertTo64BitString(),
                    watchLocation: 6,
                    onTheaterMode: this.props.onTheaterMode,
                    bStartMuted: !1,
                    bStartPaused: !1,
                    classes: a,
                  })
                ),
              !this.props.isTheaterMode &&
                i.createElement(
                  "a",
                  {
                    href: this.GetBroadcastURL(t.ConvertTo64BitString()),
                    className: b.a.ViewBroadcastOnWeb,
                  },
                  Object(c.g)("#AppDetails_Broadcast_ViewOnWeb")
                )
            )
          );
        }
      };
      function B(e) {
        let t = Object(p.a)(
          "BroadcastVideoUserInputNeeded",
          b.a.PlayButtonWrapper
        );
        return i.createElement(
          "div",
          { className: b.a.BroadcastThumbnail, onClick: e.onClick },
          i.createElement("img", { src: e.img }),
          i.createElement(
            "div",
            { className: t },
            i.createElement(s.ab, null),
            i.createElement(
              "span",
              null,
              Object(c.g)("#DASHPlayerControls_ClickToPlay")
            )
          )
        );
      }
      Object(a.b)([m.b], g.prototype, "onGameActionStart", null),
        Object(a.b)([m.b], g.prototype, "GetBroadcastURL", null),
        Object(a.b)([m.b], g.prototype, "OnClickPlay", null),
        (g = Object(a.b)([n.a], g)),
        (t.default = g);
    },
    mE5e: function (e, t, r) {
      e.exports = {
        BroadcastChat: "broadcastchat_BroadcastChat_37jsi",
        ChatEntry: "broadcastchat_ChatEntry_3o0ss",
        ChatPanel: "broadcastchat_ChatPanel_3RXwS",
        ChatMessages: "broadcastchat_ChatMessages_VeT2J",
        EmoticonContainer: "broadcastchat_EmoticonContainer_ikBOk",
        ChatSend: "broadcastchat_ChatSend_2J8Sc",
        ChatBox: "broadcastchat_ChatBox_CVXBI",
        ChatControls: "broadcastchat_ChatControls_3JcMC",
        MessageChat: "broadcastchat_MessageChat_3WCO8",
        MessageName: "broadcastchat_MessageName_2moOK",
        MessageContents: "broadcastchat_MessageContents_3YqUZ",
        EmoticonsOnly: "broadcastchat_EmoticonsOnly_2hwH8",
        MessageNotification: "broadcastchat_MessageNotification_3b8gU",
        MessageError: "broadcastchat_MessageError_2KF5w",
        minHeightZero: "broadcastchat_minHeightZero_-dYCi",
        ChatLoginButton: "broadcastchat_ChatLoginButton_1hkDB",
        RateLimitProgressBarContainer:
          "broadcastchat_RateLimitProgressBarContainer_3mU3j",
        RateLimitProgressBar: "broadcastchat_RateLimitProgressBar_2kmUt",
        TimedProgressBarContainer:
          "broadcastchat_TimedProgressBarContainer_3_j4r",
        wrapper: "broadcastchat_wrapper_1UnXS",
        pie: "broadcastchat_pie_2Om87",
        spinner: "broadcastchat_spinner_16u04",
        rota: "broadcastchat_rota_1fHgB",
        filler: "broadcastchat_filler_1fMzV",
        fill: "broadcastchat_fill_3shEQ",
        mask: "broadcastchat_mask_1lxwg",
        SelectedUserNameCtn: "broadcastchat_SelectedUserNameCtn_1RZru",
        SelectedUserName: "broadcastchat_SelectedUserName_3OG_P",
        FlairContainer: "broadcastchat_FlairContainer_14B5k",
        RoleFlairContainer: "broadcastchat_RoleFlairContainer_G3lqG",
        Description: "broadcastchat_Description_2fiV5",
        LogInPrompt: "broadcastchat_LogInPrompt_AJDVh",
        SignInButton: "broadcastchat_SignInButton_26lxf",
      };
    },
    "y+i+": function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "BroadcastDetails", function () {
          return ne;
        }),
        r.d(t, "LinkOverlay", function () {
          return le;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("2vnA"),
        o = r("TyAF"),
        l = r("q1tI"),
        c = r.n(l),
        d = r("uzoi"),
        m = (r("Zdsb"), r("pC2t")),
        u = (r("/0nC"), r("lfGQ")),
        h = (r("ZBhF"), r("3XYX")),
        b = r("Ys0h"),
        _ = r("M8jt"),
        p = r("SS8s"),
        g = r("Gzl2"),
        B = r("4EJs"),
        S = r("/IT7"),
        y = r("e356"),
        f = r("tQrp"),
        C = r("3u1o"),
        v = r("GbHM"),
        w = r("rSrx"),
        M = r("GXif"),
        O = r("7VqR"),
        T = r("hCpY"),
        R = r("/Q1a"),
        E = (r("2mvG"), r("JsFJ")),
        j = r("VnJP"),
        F = r("Pmtj"),
        z = r.n(F),
        I = r("kWcV");
      function P() {
        return l.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          Object(M.g)("#DASHPlayerControls_IsReplay")
        );
      }
      const D = Object(o.a)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let r = h.b.Loading,
          a = "";
        if (t) {
          (r = t.GetBroadcastState()), (a = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          r == h.b.Ready && e && ((r = h.b.Loading), (a = ""));
        }
        if (t && r != h.b.Error && t.GetUserInputNeeded()) return null;
        if (r == h.b.Ready) return null;
        let i = r == h.b.Loading;
        return l.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
          },
          i && l.createElement(I.a, null),
          !i &&
            l.createElement(
              "div",
              { className: "BroadcastVideoWatchState_Text" },
              a
            )
        );
      });
      class W extends l.Component {
        OnClick() {
          h.a.UserInputClickVideo(this.props.video);
        }
        render() {
          return l.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            l.createElement(y.ab, null),
            l.createElement(
              "span",
              null,
              Object(M.g)("#DASHPlayerControls_ClickToPlay")
            )
          );
        }
      }
      Object(a.b)([T.b], W.prototype, "OnClick", null);
      r("pJv3");
      let N = class extends l.Component {
        constructor(e) {
          super(e);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let e = this.props.stats;
          return l.createElement(
            "div",
            { className: "dash_video_stats" },
            l.createElement(
              "button",
              { className: "dash_stat_close_button", onClick: this.HideStats },
              l.createElement(y.Pb, null)
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_BufferingResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBufferingResolutionToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_PlaybackResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackResolutionToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_HtmlResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetHTMLVideoResolutionToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_ContentServer"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetContentServerToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_StallEvents"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetStalledEventsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_FailedDownloads"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetFailedDownloadsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_TimeToFirstFrame"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetTimeToFirstFrameToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_PlaybackRate"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay()
              )
            ),
            l.createElement(x, { stats: e })
          );
        }
      };
      Object(a.b)([T.b], N.prototype, "HideStats", null),
        (N = Object(a.b)([o.a], N));
      let x = class extends l.Component {
        constructor(e) {
          super(e);
        }
        createBufferedRange(e) {
          let t = this.props.stats,
            r = [],
            a = e ? "vidbuf" : "audbuf",
            i = e
              ? t.GetNumBufferedVideoRanges()
              : t.GetNumBufferedAudioRanges();
          if (i > 0)
            for (let s = 0; s < i; ++s) {
              let i = Object(M.g)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  s
                ),
                n = e
                  ? t.GetBufferedVideoSegmentForDisplay(s)
                  : t.GetBufferedAudioSegmentForDisplay(s);
              r.push(
                l.createElement(
                  "div",
                  { key: a + s },
                  i,
                  " ",
                  l.createElement("span", { className: "videoStatsValue" }, n)
                )
              );
            }
          else {
            let t = Object(M.g)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation"
            );
            r.push(l.createElement("div", { key: a + "none" }, t));
          }
          return r;
        }
        render() {
          let e = this.props.stats;
          return l.createElement(
            "div",
            { className: "dash_video_quick_stats" },
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_BytesReceived"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBytesReceivedToDisplay()
              )
            ),
            this.props.stats.BHasFrameInformation() &&
              l.createElement(
                "div",
                null,
                Object(M.g)("#DASHPlayerStats_DroppedFrames"),
                " ",
                l.createElement(
                  "span",
                  { className: "videoStatsValue" },
                  e.GetDroppedFramesToDisplay()
                )
              ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_VideoBuffered"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoBufferedToDisplay(),
                " "
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_AudioBuffered"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetAudioBufferedToDisplay(),
                " "
              )
            ),
            this.createBufferedRange(!0),
            this.createBufferedRange(!1),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_BandwidthRequired"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthRequiredToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_BandwidthVideo"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwithVideoToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_BandwidthNums"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthStatsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_DownloadNums"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetDownloadTimeStatsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_ActiveDownloads"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetActiveDownloadsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_VideoDownloadProgress"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoDownloadProgressToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_DroppingFrames"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPersistentFrameDropsForDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(M.g)("#DASHPlayerStats_CurrentFPS"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetCurrentFPSForDisplay()
              )
            )
          );
        }
      };
      x = Object(a.b)([o.a], x);
      r("bFkU");
      var k = r("msu0"),
        G = r("rB+X"),
        A = r("pSt8"),
        V = r("DgOg");
      function U(e) {
        const { gidEvent: t } = e,
          r = Object(G.b)(t),
          [a, i] = Object(l.useMemo)(() => {
            var e, t, a, i;
            if (
              (null ===
                (t =
                  null === (e = null == r ? void 0 : r.jsondata) || void 0 === e
                    ? void 0
                    : e.localized_sale_product_banner) || void 0 === t
                ? void 0
                : t.length) > 0 &&
              (null ===
                (i =
                  null === (a = null == r ? void 0 : r.jsondata) || void 0 === a
                    ? void 0
                    : a.localized_sale_product_mobile_banner) || void 0 === i
                ? void 0
                : i.length) > 0
            ) {
              const e = Object(k.n)(R.c.LANGUAGE),
                t = M.b.GetWithFallback(
                  r.jsondata.localized_sale_product_banner,
                  e
                ),
                a = M.b.GetWithFallback(
                  r.jsondata.localized_sale_product_mobile_banner,
                  e
                ),
                i = r.clanSteamID.GetAccountID();
              return [
                R.c.MEDIA_CDN_COMMUNITY_URL + `images/clans/${i}/${t}`,
                R.c.MEDIA_CDN_COMMUNITY_URL + `images/clans/${i}/${a}`,
              ];
            }
            return [null, null];
          }, [r]);
        return a && i
          ? c.a.createElement(
              "a",
              { href: Object(A.f)(r.GetSaleURL()), className: V.Link },
              c.a.createElement("img", {
                src: a,
                className: Object(v.a)(V.Banner, V.Big),
              }),
              c.a.createElement("img", {
                src: i,
                className: Object(v.a)(V.Banner, V.Mobile),
              })
            )
          : null;
      }
      var L = r("r0f0");
      const H = 15;
      let q = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_schHideControls = new C.b()),
            (this.m_schUnmountControls = new C.b()),
            (this.m_elBroadcastPlayer = null),
            (this.m_bMouseDown = !1),
            (this.m_elMouseDown = null),
            (this.m_listeners = new C.c()),
            (this.m_cancelSignal = s.a.CancelToken.source()),
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
          let e = this.state.video;
          e && (h.a.StopVideo(e), this.setState({ video: null }));
        }
        IsMuted() {
          let e = this.state.video;
          return !e || e.IsMuted();
        }
        StopPlaybackTillUserInput() {
          let e = this.state.video;
          e && e.StopPlaybackTillUserInput();
        }
        componentDidUpdate(e, t) {
          !t.bMountControls && this.state.bMountControls
            ? setTimeout(() => {
                this.setState((e) => ({ bControlsVisible: e.bMountControls }));
              }, 15)
            : t.bControlsVisible &&
              !this.state.bControlsVisible &&
              this.state.video &&
              !this.state.video.IsPaused() &&
              this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
            this.props.steamIDBroadcast !== e.steamIDBroadcast &&
              this.BindVideoRef(this.m_elVideo),
            !this.props.nAppIDVOD ||
              (void 0 !== t.strInitialCapsuleImageUrl &&
                e.nAppIDVOD == this.props.nAppIDVOD) ||
              b.a
                .Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const e = b.a.Get().GetApp(this.props.nAppIDVOD),
                    t =
                      (null == e
                        ? void 0
                        : e.GetAssets().GetMainCapsuleURL()) || "";
                  this.setState({ strInitialCapsuleImageUrl: t });
                });
        }
        componentWillUnmount() {
          this.m_listeners.Unregister(),
            this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.StopVideo();
        }
        BindBroadcastPlayerRef(e) {
          this.m_listeners.Unregister(),
            (this.m_elBroadcastPlayer = e),
            e &&
              (this.m_listeners.AddEventListener(
                e,
                "fullscreenchange",
                this.OnFullscreenChange
              ),
              this.m_listeners.AddEventListener(
                e,
                "mozfullscreenchange",
                this.OnFullscreenChange
              ),
              this.m_listeners.AddEventListener(
                e,
                "webkitfullscreenchange",
                this.OnFullscreenChange
              ),
              this.m_listeners.AddEventListener(
                e,
                "msfullscreenchange",
                this.OnFullscreenChange
              ));
        }
        BindVideoRef(e) {
          let t;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? e &&
                (t = h.a.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC
                ))
              : this.props.broadcastClipID
              ? e &&
                (t = h.a.CreateClipVideo(
                  e,
                  this.props.broadcastClipID,
                  this.props.watchLocation
                ))
              : this.props.nAppIDVOD &&
                e &&
                ((t = h.a.CreateVODVideo(
                  e,
                  this.props.nAppIDVOD,
                  this.props.watchLocation
                )),
                this.props.fnOnVideoEnd &&
                  t.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            t &&
              (this.props.bStartMuted && t.SetMute(!0),
              this.props.bStartPaused
                ? t.StopPlaybackTillUserInput()
                : t.Play()),
            this.setState({ video: t }),
            (this.m_elVideo = e);
        }
        OnMouseDown(e) {
          (this.m_bMouseDown = !0),
            (this.m_elMouseDown = e.currentTarget),
            this.m_elMouseDown.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp
            );
        }
        OnMouseUp(e) {
          (this.m_bMouseDown = !1),
            this.m_elMouseDown.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseMove(e) {
          this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.state.bMountControls
              ? this.state.bControlsVisible ||
                this.setState({ bControlsVisible: !0 })
              : this.setState({ bMountControls: !0 }),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseLeave(e) {
          this.HideControls();
        }
        HideControls() {
          this.state.bControlsVisible &&
            !this.m_bMouseDown &&
            this.setState({ bControlsVisible: !1 });
        }
        UmountControls() {
          this.setState((e) => {
            if (!e.bControlsVisible && e.bMountControls)
              return { bMountControls: !1 };
          });
        }
        ShowStatsView() {
          let e = this.state.video;
          e &&
            (this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), e.SetStatsViewIsVisible(!0)));
        }
        OnContextMenu(e) {
          this.state.bFullscreen ||
            (Object(m.a)(
              l.createElement(p.c, null, this.GetContextMenuItems()),
              e
            ),
            e.preventDefault());
        }
        ToggleStatsView(e) {
          let t = !this.state.bShowStats;
          this.setState({ bShowStats: t });
          let r = this.state.video;
          r && r.SetStatsViewIsVisible(t);
        }
        ShowStorePage(e) {
          let t = this.state.video;
          if (!t || !this.props.onOpenLinkInNewWindow) return;
          let r = t.GetBroadcastInfo();
          if (!r) return;
          let a = Object(u.a)(`${R.c.STORE_BASE_URL}app/${r.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, a), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let r = t.GetBroadcastInfo();
          return (
            e.push(
              l.createElement(
                p.b,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                },
                Object(M.g)("#Broadcast_VideoContext_ToggleStats")
              )
            ),
            r &&
              "0" != r.m_strAppId &&
              Number.parseInt(r.m_strAppId) != h.d &&
              e.push(
                l.createElement(
                  p.e,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  Object(M.g)("#Broadcast_VideoContext_OpenStore")
                )
              ),
            e
          );
        }
        CloseStats() {
          let e = this.state.video;
          e &&
            this.state.bShowStats &&
            (this.setState({ bShowStats: !1 }), e.SetStatsViewIsVisible(!1));
        }
        OnToggleFullscreen() {
          this.m_elBroadcastPlayer &&
            (Object(w.c)(this.m_elBroadcastPlayer)
              ? Object(w.h)(this.m_elBroadcastPlayer)
              : Object(w.w)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = Object(w.c)(this.m_elBroadcastPlayer);
          this.setState({ bFullscreen: t });
        }
        BHideVideoControls() {
          let e = this.state.video;
          return (
            !e ||
            !!e.GetUserInputNeeded() ||
            h.a.GetBroadcastState(e) == h.b.Error
          );
        }
        render() {
          const e = this.state.video,
            t = e && e.IsPaused(),
            r = e && e.BHasDASHStats() && this.state.bShowStats,
            a = Boolean(e && e.IsReplay()),
            i = this.state.bMountControls,
            s = this.state.bControlsVisible || t,
            n = e && e.GetUserInputNeeded(),
            o =
              (null == e ? void 0 : e.IsBroadcastVOD()) &&
              n &&
              this.state.strInitialCapsuleImageUrl;
          let c = "videoContainer";
          s || (c += " HidePlayerControls"),
            t && (c += " VideoPaused"),
            this.state.bFullscreen && (c += " fullscreenVideo"),
            this.props.classes && (c += " " + this.props.classes);
          let d = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (d = d.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              d.push(
                l.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: Object(M.g)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                })
              ),
            d.push(
              l.createElement("div", {
                key: "FullscreenToggle",
                title: Object(M.g)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              })
            );
          const m = i && !this.BHideVideoControls(),
            u = i && !this.state.bFullscreen,
            h =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return l.createElement(
            "div",
            {
              ref: this.BindBroadcastPlayerRef,
              className: c,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
            },
            h && l.createElement("div", { className: z.a.BroadcastContext }, h),
            a && l.createElement(P, null),
            this.props.showVideoBackgroundBlur &&
              l.createElement(_.a, {
                className: "videoBlur",
                elementRef: this.m_elVideo,
                updateRate: 33,
                width: 320,
                height: 180,
                reductionFactor: 10,
                blurAmount: 5,
              }),
            l.createElement("video", {
              className: "videoSrc",
              ref: this.BindVideoRef,
              muted: !0,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
            }),
            this.props.linkRegions
              ? l.createElement(le, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            o &&
              l.createElement("img", {
                loading: "lazy",
                className: Object(v.a)(
                  z.a.BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg"
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            m &&
              l.createElement($, {
                video: e,
                actions: d,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            u && l.createElement(J, { onClick: this.props.onRequestClose }),
            r &&
              l.createElement(N, {
                stats: e.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            l.createElement(D, { video: e }),
            n && l.createElement(W, { video: e })
          );
        }
      };
      Object(a.b)([T.b], q.prototype, "BindBroadcastPlayerRef", null),
        Object(a.b)([T.b], q.prototype, "BindVideoRef", null),
        Object(a.b)([T.b], q.prototype, "OnMouseDown", null),
        Object(a.b)([T.b], q.prototype, "OnMouseUp", null),
        Object(a.b)([T.b], q.prototype, "OnMouseMove", null),
        Object(a.b)([T.b], q.prototype, "OnMouseLeave", null),
        Object(a.b)([T.b], q.prototype, "HideControls", null),
        Object(a.b)([T.b], q.prototype, "UmountControls", null),
        Object(a.b)([T.b], q.prototype, "ShowStatsView", null),
        Object(a.b)([T.b], q.prototype, "OnContextMenu", null),
        Object(a.b)([T.b], q.prototype, "ToggleStatsView", null),
        Object(a.b)([T.b], q.prototype, "ShowStorePage", null),
        Object(a.b)([T.b], q.prototype, "CloseStats", null),
        Object(a.b)([T.b], q.prototype, "OnToggleFullscreen", null),
        Object(a.b)([T.b], q.prototype, "OnFullscreenChange", null),
        (q = Object(a.b)([o.a], q));
      t.default = q;
      let $ = class extends l.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return l.createElement(
            "div",
            { className: "videoControls" },
            l.createElement(ne, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            l.createElement(
              "div",
              { className: "videoControlsBottom" + (t ? "" : " noSegments") },
              l.createElement(se, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              l.createElement(
                "div",
                { className: "STV_BroadcastController" },
                l.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                l.createElement(K, { video: e }),
                l.createElement(X, { video: e }),
                l.createElement(ee, {
                  video: e,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                })
              )
            )
          );
        }
      };
      $ = Object(a.b)([o.a], $);
      class J extends l.PureComponent {
        render() {
          return this.props.onClick
            ? l.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                l.createElement(y.Pb, null)
              )
            : null;
        }
      }
      class K extends l.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(H);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return l.createElement(
            "div",
            { className: "videoControlsButtons PlayControls" },
            l.createElement(Q, { video: e }),
            t &&
              l.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                l.createElement(y.T, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                l.createElement("div", { className: "jumpAheadValue" }, H)
              ),
            l.createElement(Y, { video: e }),
            t &&
              l.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                l.createElement(y.T, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                l.createElement("div", { className: "jumpAheadValue" }, H)
              ),
            t && l.createElement(Z, { video: e })
          );
        }
      }
      Object(a.b)([T.b], K.prototype, "OnJumpBackward", null),
        Object(a.b)([T.b], K.prototype, "OnJumpForward", null);
      const X = Object(o.a)((e) => {
        if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
        let t = e.video.IsOnLiveEdge();
        return l.createElement(
          "div",
          { className: "videoControlsButtons GoLive" },
          l.createElement(
            "div",
            {
              className:
                "videoControlButton videoControlGoLive" +
                (t ? " isLiveEdge" : ""),
              onClick: t
                ? null
                : (t) => {
                    e.video.JumpToLiveEdge();
                  },
            },
            l.createElement(y.T, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            l.createElement(
              "div",
              { className: "jumpGoLive" },
              Object(M.g)(
                t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive"
              )
            )
          )
        );
      });
      let Y = class extends l.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let e = this.props.video.IsPaused();
          return l.createElement(
            "div",
            {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
            },
            e ? l.createElement(y.ab, null) : l.createElement(y.Z, null)
          );
        }
      };
      Object(a.b)([T.b], Y.prototype, "OnTogglePlayPause", null),
        (Y = Object(a.b)([o.a], Y));
      let Q = class extends l.Component {
        get has_previous_marker() {
          return void 0 !== this.GetPreviousMarkerTime();
        }
        GetPreviousMarkerTime() {
          if (!this.props.video.has_markers) return;
          let e = this.props.video.GetTimelineMarkers(),
            t = this.props.video.GetPlaybackTime();
          for (let r = e.length - 1; r >= 0; r--)
            if (!(e[r].nTime >= t)) return e[r].nTime;
        }
        OnJumpToPreviousMarkerClicked(e) {
          let t = this.GetPreviousMarkerTime();
          void 0 !== t && this.props.video.Seek(t - 0.2);
        }
        render() {
          let e = this.props.video.BHasMarkersOrSegments();
          return l.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            l.createElement(y.T, { bHidePostArrow: !0, bFlipHorizontal: !0 })
          );
        }
      };
      Object(a.b)([n.n], Q.prototype, "has_previous_marker", null),
        Object(a.b)([T.b], Q.prototype, "OnJumpToPreviousMarkerClicked", null),
        (Q = Object(a.b)([o.a], Q));
      let Z = class extends l.Component {
        get has_next_marker() {
          return void 0 !== this.GetNextMarkerTime();
        }
        GetNextMarkerTime() {
          if (!this.props.video.has_markers) return;
          let e = this.props.video.GetTimelineMarkers(),
            t = this.props.video.GetPlaybackTime();
          for (let r = 0; r < e.length; r++)
            if (!(e[r].nTime <= t)) return e[r].nTime;
        }
        OnJumpToNextMarkerClicked(e) {
          let t = this.GetNextMarkerTime();
          void 0 !== t && this.props.video.Seek(t);
        }
        render() {
          let e = this.props.video.BHasMarkersOrSegments();
          return l.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            l.createElement(y.T, { bHidePostArrow: !0, bFlipHorizontal: !1 })
          );
        }
      };
      Object(a.b)([n.n], Z.prototype, "has_next_marker", null),
        Object(a.b)([T.b], Z.prototype, "OnJumpToNextMarkerClicked", null),
        (Z = Object(a.b)([o.a], Z));
      class ee extends l.Component {
        constructor(e) {
          super(e),
            (this.m_elSubtitlesButton = l.createRef()),
            (this.m_elSubtitlesPanel = l.createRef()),
            (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
        }
        OnVideoControlClick(e) {
          this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
            (this.m_SettingsButtonPos = [
              this.m_elSettingsButton.offsetLeft,
              this.m_elSettingsButton.offsetTop,
            ]),
            (this.m_elClickListener =
              e.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0
            );
        }
        OnSubtitlesClick(e) {
          this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
            (this.m_SubtitlesButtonPos = [
              this.m_elSubtitlesButton.current.offsetLeft,
              this.m_elSubtitlesButton.current.offsetTop,
            ]),
            (this.m_elClickListener =
              e.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0
            );
        }
        OnMouseUp(e) {
          this.m_elClickListener.removeEventListener(
            "mouseup",
            this.OnMouseUp,
            !0
          ),
            Object(w.f)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            Object(w.f)(this.m_elSubtitlesPanel.current, e.target) ||
              this.setState({ bSubtitlesOpen: !1 });
        }
        bindSettingsButton(e) {
          this.m_elSettingsButton = e;
        }
        BindSettingsPanel(e) {
          this.m_elSettingsPanel = e;
        }
        OnShowStats(e) {
          this.props.onShowStats(e),
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
        }
        render() {
          let e = !1,
            t = !1;
          const { video: r, actions: a } = this.props;
          let i,
            s,
            n = 0,
            o = l.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (i = this.props.video.GetVideoRepresentations()),
              (s = i.map((e) =>
                l.createElement(
                  p.b,
                  {
                    key: e.id,
                    onSelected: () => {
                      this.props.video.SetVideoRepresentation(e),
                        this.setState({
                          bSettingsOpen: !this.state.bSettingsOpen,
                        });
                    },
                    bChecked: e.selected,
                  },
                  e.displayName
                )
              )),
              s.push(o),
              s.push(
                l.createElement(
                  p.e,
                  { key: "statsToggle", onSelected: this.OnShowStats },
                  Object(M.g)("#Broadcast_VideoContext_ToggleStats"),
                  "\t"
                )
              ),
              (n = 0 - (21 * s.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (s = []),
              s.push(
                l.createElement(
                  p.b,
                  {
                    key: "none",
                    onSelected: () => {
                      this.props.video.SetSubtitles(null),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    className: "NoSubtitles",
                    bChecked: !1,
                  },
                  Object(M.g)("#Broadcast_None")
                )
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              s.push(
                l.createElement(
                  p.b,
                  {
                    key: t.language,
                    onSelected: () => {
                      this.props.video.SetSubtitles(t.language),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    bChecked: "showing" === t.mode,
                  },
                  t.label
                )
              );
            }
            n = -352;
          }
          let c = this.props.video.GetSubtitles() || !1;
          return l.createElement(
            "div",
            { className: "STV_BroadcastSettings" },
            this.props.video.ListSubtitles().length
              ? l.createElement(
                  "div",
                  {
                    className:
                      "videoControlButton" + (c ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                  },
                  l.createElement(y.p, null)
                )
              : null,
            l.createElement(
              "div",
              {
                className:
                  "videoControlButton VideoSettings " +
                  (e ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
              },
              l.createElement(y.mb, null)
            ),
            l.createElement(te, { video: r }),
            a &&
              a.map((e) =>
                l.createElement(
                  "div",
                  {
                    key: e.key,
                    className: "videoControlButton videoControlFitWidth",
                  },
                  e
                )
              ),
            e &&
              l.createElement(
                "div",
                {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: n,
                  },
                },
                l.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  s
                )
              ),
            t &&
              l.createElement(
                "div",
                {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "320px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: n,
                  },
                },
                l.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  s
                )
              )
          );
        }
      }
      Object(a.b)([T.b], ee.prototype, "OnVideoControlClick", null),
        Object(a.b)([T.b], ee.prototype, "OnSubtitlesClick", null),
        Object(a.b)([T.b], ee.prototype, "OnMouseUp", null),
        Object(a.b)([T.b], ee.prototype, "bindSettingsButton", null),
        Object(a.b)([T.b], ee.prototype, "BindSettingsPanel", null),
        Object(a.b)([T.b], ee.prototype, "OnShowStats", null);
      let te = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.k_nHideSliderTimeout = 1500),
            (this.m_bShowSlider = true),
            (this.m_schHideSlider = new C.b()),
            (this.m_bChildDragging = !1),
            (this.m_bMouseOver = !1);
        }
        componentWillUnmount() {
          this.m_schHideSlider.Cancel();
        }
        ToggleMute() {
          let e = this.props.video,
            t = e.IsMuted();
          e.SetMute(!t), e.GetVolume() < 0.01 && e.SetVolume(0.5);
        }
        OnMouseEnter(e) {
          (this.m_bShowSlider = !0),
            (this.m_bMouseOver = !0),
            this.m_schHideSlider.Cancel();
        }
        OnMouseLeave(e) {
          (this.m_bMouseOver = !1), this.ScheduleHide();
        }
        OnChildDrag(e) {
          (this.m_bChildDragging = e), this.ScheduleHide();
        }
        ScheduleHide() {
          this.m_bMouseOver ||
            this.m_bChildDragging ||
            this.m_schHideSlider.Schedule(
              this.k_nHideSliderTimeout,
              () => (this.m_bShowSlider = true)
            );
        }
        render() {
          let e = this.props.video,
            t = e.IsMuted(),
            r = 100 * e.GetVolume(),
            a = "videoControlButton";
          r > 65
            ? (a += " HighestVolume")
            : r > 45
            ? (a += " HighVolume")
            : r < 46 && r > 24
            ? (a += " MedVolume")
            : r < 25 && (a += " LowVolume");
          let i = "BroadcastVolumeControl";
          return (
            this.m_bShowSlider && (i += " ShowVolumeSlider"),
            t && (i += " muted"),
            l.createElement(
              "div",
              {
                className: i,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              l.createElement(
                "div",
                { className: "BroadcastVolumeControl_FixedLayout" },
                l.createElement(
                  "div",
                  { className: a, onClick: this.ToggleMute },
                  l.createElement(y.Kb, null)
                ),
                l.createElement(re, { video: e, onDrag: this.OnChildDrag })
              )
            )
          );
        }
      };
      Object(a.b)([n.C], te.prototype, "m_bShowSlider", void 0),
        Object(a.b)([T.b], te.prototype, "ToggleMute", null),
        Object(a.b)([T.b], te.prototype, "OnMouseEnter", null),
        Object(a.b)([T.b], te.prototype, "OnMouseLeave", null),
        Object(a.b)([T.b], te.prototype, "OnChildDrag", null),
        (te = Object(a.b)([o.a], te));
      let re = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_elSlider = null),
            (this.m_nVolumeStartOfDrag = 0);
        }
        OnMouseDown(e) {
          let t = e.currentTarget;
          (this.m_elSlider = t),
            (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
            this.SetVolumeWithCoord(t, e.clientX),
            t.ownerDocument.defaultView.addEventListener(
              "mousemove",
              this.OnMouseMove
            ),
            t.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            this.props.onDrag(!0);
        }
        OnMouseMove(e) {
          this.m_elSlider &&
            this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
        }
        OnMouseUp(e) {
          if (!this.m_elSlider) return;
          this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
          let t = this.props.video;
          t.IsMuted() && t.SetVolume(this.m_nVolumeStartOfDrag),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mousemove",
              this.OnMouseMove
            ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            (this.m_nVolumeStartOfDrag = 0),
            (this.m_elSlider = null),
            this.props.onDrag(!1);
        }
        SetVolumeWithCoord(e, t) {
          let r = e.getBoundingClientRect(),
            a = O.c(t, r.left, r.right, 0, 1),
            i = O.a(a, 0, 1),
            s = this.props.video;
          s.SetMute(a < 0.01), s.SetVolume(i);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let r = { left: `${t}%` },
            a = { width: `${t}%` };
          return l.createElement(
            "div",
            {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
            },
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Track",
            }),
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Fill",
              style: a,
            }),
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: r,
            })
          );
        }
      };
      Object(a.b)([T.b], re.prototype, "OnMouseDown", null),
        Object(a.b)([T.b], re.prototype, "OnMouseMove", null),
        Object(a.b)([T.b], re.prototype, "OnMouseUp", null),
        Object(a.b)([n.k], re.prototype, "SetVolumeWithCoord", null),
        (re = Object(a.b)([o.a], re));
      const ae = (e) =>
        l.createElement(
          "div",
          {
            className: "timelineMarker",
            title: e.label,
            style: { left: e.pos + "%" },
            onMouseEnter: () => e.onMouseEnter(e.pos),
            onMouseLeave: e.onMouseLeave,
            onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
          },
          l.createElement(
            "div",
            { className: "timelineMarkerIcon" },
            l.createElement(y.lb, null)
          )
        );
      function ie(e) {
        let t = e.startPos,
          r = e.endPos,
          a = "",
          i = 1;
        return (
          t < 0 && ((i = (r - t) / 10), (t = 0), (a = " hideFront")),
          l.createElement(
            "div",
            {
              className: "STV_timelineSegment" + a,
              style: { left: t + "%", width: r - t + "%", opacity: i },
              onClick: e.onClick,
            },
            l.createElement("div", {
              className: "STV_timelineSegmentFrontFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            }),
            l.createElement(
              "div",
              {
                className: "STV_timelineSegmentLabel",
                style: { color: "rgb(" + e.color + ")" },
              },
              e.label
            ),
            l.createElement("div", {
              className: "STV_timelineSegmentBackFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            })
          )
        );
      }
      let se = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_elSlider = l.createRef()),
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
        OnMouseDown(e, t) {
          if (this.m_elSlider) {
            e.persist(),
              (this.m_rectSlider =
                this.m_elSlider.current &&
                this.m_elSlider.current.getBoundingClientRect());
            let r = {};
            "start" === t
              ? ((r = { bStartMouseDown: !0 }), e.stopPropagation())
              : "end" === t
              ? ((r = { bEndMouseDown: !0 }), e.stopPropagation())
              : (r = { bGrabberMouseDown: !0 }),
              this.setState(r, () => this.AdjustSliderForClientX(e.clientX)),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mousemove",
                this.OnMouseMove
              ),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mouseup",
                this.OnMouseUp
              );
          }
        }
        OnMouseMove(e) {
          this.AdjustSliderForClientX(e.clientX);
        }
        OnMouseUp(e) {
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
              (this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mousemove",
                this.OnMouseMove
              ),
              this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mouseup",
                this.OnMouseUp
              ));
        }
        OnKeyDown(e) {
          37 == e.keyCode
            ? (this.props.video.JumpTime(-15), e.preventDefault())
            : 39 == e.keyCode &&
              (this.props.video.JumpTime(15), e.preventDefault());
        }
        AdjustSliderForClientX(e) {
          let t = this.props.video,
            r = t.GetTimelineStartPos(),
            a = t.GetTimelineStartPos() + t.GetTimelineDuration(),
            i = t.GetTimeAtMousePosition(e, this.m_rectSlider, r, a);
          if (this.state.bStartMouseDown) {
            const e = O.a(i, r, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = O.a(i, t.m_editorStartTime + 5, a);
            t.m_editorEndTime = e;
          } else
            i != this.state.nGrabberMouseDownTime &&
              this.setState({ nGrabberMouseDownTime: i });
        }
        OnMouseHoverMove(e) {
          this.AdjustHoverForClientX(e.clientX);
        }
        OnMouseHoverLeave(e) {
          this.setState({ hoverX: 0 });
        }
        AdjustHoverForClientX(e) {
          let t = this.props.video,
            r = t.GetTimelineStartPos(),
            a = t.GetTimelineStartPos() + t.GetTimelineDuration();
          this.m_rectSlider =
            this.m_elSlider.current &&
            this.m_elSlider.current.getBoundingClientRect();
          t.GetTimeAtMousePosition(e, this.m_rectSlider, r, a);
        }
        OnSegmentClick(e) {
          this.props.video.Seek(e);
        }
        OnMarkerMouseEnter(e) {
          this.setState({ nHoverValue: e });
        }
        OnMarkerMouseLeave() {
          this.setState({ nHoverValue: void 0 });
        }
        render() {
          let e = this.props.video,
            t = this.state.bGrabberMouseDown,
            r = e.GetPercentOffsetFromTime(
              this.state.nGrabberMouseDownTime,
              h.c.Timeline
            ),
            a = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), h.c.Timeline),
            i = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              h.c.Timeline
            );
          i < 0.05 && (i = 0);
          let s = O.a(r, 0, 100).toFixed(1) + "%",
            n = O.a(a, 0, 100).toFixed(1) + "%",
            o = O.a(i, 0, 100).toFixed(1) + "%",
            c = {},
            d = {},
            m = {},
            u = {};
          t
            ? ((u.left = s), (c.width = s), (d.width = n), (m.width = o))
            : ((u.left = n), (d.width = n), (m.width = o));
          let b = Object(j.d)(e.GetPlaybackTime()),
            _ = Object(j.d)(this.state.nHoverValue),
            p = "STV_timelineContainer";
          this.state.bGrabberMouseDown && (p += " grabberDown"),
            e.IsTimelineMapActive() && (p += " minimapActive");
          let g = "";
          (r = t ? r : a),
            r > 100
              ? (g = " grabberOffScreenRight grabberOffscreen")
              : r < 0 && (g = " grabberOffScreenLeft grabberOffscreen");
          let B = [];
          e.GetTimelineMarkers().forEach((t, r) => {
            let a = e.GetPercentOffsetFromTime(t.nTime, h.c.Timeline);
            a < 0 ||
              a > 100 ||
              B.push(
                l.createElement(ae, {
                  key: r,
                  pos: a,
                  label: t.strTemplateName,
                  onMouseEnter: this.OnMarkerMouseEnter,
                  onMouseLeave: this.OnMarkerMouseLeave,
                })
              );
          });
          let S = [];
          e.GetTimelineSegments().forEach((t, r) => {
            let a = e.GetPercentOffsetFromTime(t.nTimeStart, h.c.Timeline);
            if (a > 100) return;
            let i = e.GetPercentOffsetFromTime(t.nTimeEnd, h.c.Timeline);
            i < 0 ||
              S.push(
                l.createElement(ie, {
                  key: r,
                  startPos: a,
                  endPos: i,
                  label: t.strTemplateName,
                  color: t.color,
                  onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                })
              );
          });
          const f = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              h.c.Timeline
            ),
            C = e.GetPercentOffsetFromTime(e.m_editorEndTime, h.c.Timeline),
            v = this.props.bIncludeClipEditor
              ? [
                  l.createElement(ae, {
                    key: "start",
                    pos: f,
                    label: Object(M.g)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  l.createElement(ae, {
                    key: "end",
                    pos: C,
                    label: Object(M.g)("#DASHPlayerControls_End"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "end"),
                  }),
                ]
              : [];
          return l.createElement(
            "div",
            {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
            },
            l.createElement(
              "div",
              { className: p },
              l.createElement("div", { className: "DialogLabel" }, b),
              l.createElement(
                "div",
                { className: "STV_timelineSegmentsContainer" },
                S
              ),
              l.createElement(
                "div",
                {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                },
                l.createElement(
                  "div",
                  { className: "VideoTimelineSlider" },
                  l.createElement("div", {
                    className: "STV_timelineValue",
                    style: c,
                  }),
                  l.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: d,
                  }),
                  l.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: m,
                  }),
                  B,
                  v,
                  Boolean(this.state.hoverX) &&
                    l.createElement(
                      "div",
                      {
                        key: "grabbertime",
                        style: {
                          position: "absolute",
                          left: this.state.hoverX - 75,
                          bottom: "30px",
                        },
                      },
                      l.createElement(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                          },
                        },
                        this.state.thumbnailURL &&
                          l.createElement("img", {
                            style: { width: "150px" },
                            src: this.state.thumbnailURL,
                          }),
                        l.createElement(
                          "span",
                          {
                            className: "STV_timelineGrabberValue",
                            style: { position: "absolute", bottom: "4px" },
                          },
                          _
                        )
                      )
                    ),
                  l.createElement(
                    "div",
                    { className: "STV_timelineGrabber_Wrapper", style: u },
                    l.createElement(
                      "div",
                      { className: "STV_timelineGrabber" + g },
                      l.createElement(
                        "div",
                        { className: "STV_timelineGrabberArrow" },
                        l.createElement(y.kb, null)
                      )
                    )
                  )
                )
              )
            )
          );
        }
      };
      Object(a.b)([T.b], se.prototype, "OnMouseDown", null),
        Object(a.b)([T.b], se.prototype, "OnMouseMove", null),
        Object(a.b)([T.b], se.prototype, "OnMouseUp", null),
        Object(a.b)([T.b], se.prototype, "OnKeyDown", null),
        Object(a.b)([T.b], se.prototype, "OnMouseHoverMove", null),
        Object(a.b)([T.b], se.prototype, "OnMouseHoverLeave", null),
        Object(a.b)([T.b], se.prototype, "AdjustHoverForClientX", null),
        Object(a.b)([T.b], se.prototype, "OnSegmentClick", null),
        Object(a.b)([T.b], se.prototype, "OnMarkerMouseEnter", null),
        Object(a.b)([T.b], se.prototype, "OnMarkerMouseLeave", null),
        (se = Object(a.b)([o.a], se));
      let ne = class extends l.Component {
        constructor() {
          super(...arguments), (this.state = { info: null });
        }
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info && (h.a.StopInfo(t.info), (t.info = null)), e.steamID)
          ) {
            return { info: h.a.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && h.a.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return E.a.stream[e]
            ? l.createElement(oe, {
                value: e,
                options: E.a.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: e } = this.state;
          if (!e) return null;
          let t = "";
          e.m_nViewerCount && (t = Object(L.a)(e.m_nViewerCount));
          let r = E.a.bValid && E.a.stream && E.a.stream[e.m_steamIDBroadcast],
            a =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || r);
          const i =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            r &&
            E.a.gidEvent;
          return l.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              l.createElement(g.b, {
                className: "broadcastDetailsThumbBlur",
                src: e.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
            l.createElement(
              "div",
              { className: "BroadcastDetailsHeader" },
              e &&
                e.m_strAppTitle &&
                l.createElement(
                  "div",
                  { className: "displayColumn" },
                  l.createElement(
                    "div",
                    { className: "Info" },
                    l.createElement(
                      "span",
                      { className: "AppTitle" },
                      e.m_strAppTitle
                    ),
                    e.m_strTitle &&
                      l.createElement(
                        "span",
                        { className: "BroadcastTitle" },
                        " - ",
                        e.m_strTitle
                      ),
                    this.props.onLocalStreamChange &&
                      this.RenderStreamSwitcher()
                  ),
                  t &&
                    l.createElement(
                      "div",
                      { className: "BroadcastDetailsHeader_ViewerCount" },
                      l.createElement(y.Jb, null),
                      Object(M.o)("#Broadcast_ViewerCount", t)
                    )
                ),
              r &&
                this.props.onOpenLinkInNewWindow &&
                l.createElement(
                  "div",
                  { className: "Actions" },
                  l.createElement(
                    "div",
                    {
                      onClick: (e) =>
                        this.props.onOpenLinkInNewWindow(e, E.a.link),
                      className: "BroadcastLink",
                    },
                    E.a.linkName
                  )
                )
            ),
            i && l.createElement(U, { gidEvent: E.a.gidEvent }),
            a &&
              l.createElement(B.j, {
                id:
                  E.a.bValid && E.a.stream && E.a.stream[e.m_steamIDBroadcast]
                    ? E.a.appID
                    : parseInt(e.m_strAppId),
                type: "game",
              })
          );
        }
      };
      ne = Object(a.b)([o.a], ne);
      class oe extends l.Component {
        showContextMenu(e) {
          const { options: t, value: r, onChange: a } = this.props,
            i = Object.keys(t).map((e) =>
              l.createElement(
                p.b,
                { key: e, onSelected: () => a(e), bChecked: e === r },
                Object(M.g)(t[e])
              )
            );
          Object(m.a)(l.createElement(p.c, null, i), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            r = t[e];
          return l.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            l.createElement("span", null, " - ", Object(M.g)(r)),
            l.createElement(
              "div",
              { className: "ContextMenuButton" },
              l.createElement(y.w, null)
            )
          );
        }
      }
      Object(a.b)([T.b], oe.prototype, "showContextMenu", null);
      let le = class extends l.Component {
        constructor(e) {
          super(e), (this.state = { sizableRegion: [] });
        }
        AddLinkRegion() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + e,
              yPosPct: 2.5 + e,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions()
              );
          });
        }
        componentDidUpdate(e) {
          0 == e.linkRegions.length &&
            this.props.linkRegions.forEach((e, t) => {
              this.LoadLinkRegion(e, t);
            });
        }
        LoadLinkRegion(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: e.left,
              yPosPct: e.top,
              widthPct: e.width,
              heightPct: e.height,
              link_url: e.url,
              link_description: e.link_description,
              link_index: e.link_index,
            }),
              yield this.setState({ sizableRegion: this.state.sizableRegion });
          });
        }
        OnSaveRegions() {
          let e;
          e = { links: [] };
          for (let t = 0; t < this.state.sizableRegion.length; t++) {
            let r;
            (r = {
              left: Math.floor(100 * this.state.sizableRegion[t].xPosPct),
              top: Math.floor(100 * this.state.sizableRegion[t].yPosPct),
              width: Math.floor(100 * this.state.sizableRegion[t].widthPct),
              height: Math.floor(100 * this.state.sizableRegion[t].heightPct),
              url: this.state.sizableRegion[t].link_url,
              link_description: this.state.sizableRegion[t].link_description,
              link_index: t,
            }),
              e.links.push(r);
          }
          this.props.onSaveLinkRegions(e);
        }
        DeleteRegion(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.state.sizableRegion.splice(e, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions()
              );
          });
        }
        UpdatePanel(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.state.sizableRegion[e] = t),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions()
              );
          });
        }
        render() {
          return l.createElement(
            "div",
            { className: "LinkOverlayContainer" },
            l.createElement(
              "div",
              { className: "LinkOverlayValidRegion" },
              !this.props.editMode && this.props.linkRegions
                ? this.props.linkRegions.map((e) => {
                    const t = Object(d.b)(e.url);
                    return l.createElement(
                      f.c,
                      {
                        key: e.link_index,
                        href: e.url,
                        bForceExternal: t,
                        bUseLinkFilter: t,
                      },
                      l.createElement(
                        "div",
                        {
                          className: "LinkRegion",
                          style: {
                            left: e.left + "%",
                            top: e.top + "%",
                            width: e.width + "%",
                            height: e.height + "%",
                          },
                        },
                        l.createElement(
                          "div",
                          { className: "LinkRegionText" },
                          e.link_description,
                          " "
                        )
                      )
                    );
                  })
                : null,
              this.props.editMode &&
                this.state.sizableRegion.map((e, t) =>
                  l.createElement(S.a, {
                    key: 100 * t + e.xPosPct,
                    index: t,
                    deleteFn: this.DeleteRegion,
                    updateFn: this.UpdatePanel,
                    xPosPct: e.xPosPct,
                    yPosPct: e.yPosPct,
                    widthPct: e.widthPct,
                    heightPct: e.heightPct,
                    link_url: e.link_url,
                    link_description: e.link_description,
                  })
                ),
              this.props.editMode &&
                l.createElement(
                  "div",
                  { className: "AddLinkRegion", onClick: this.AddLinkRegion },
                  Object(M.g)("#SteamTV_AddLinkRegion")
                )
            ),
            l.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              l.createElement(
                "div",
                null,
                Object(M.g)("#SteamTV_LinkRegionReserved")
              )
            )
          );
        }
      };
      Object(a.b)([T.b], le.prototype, "AddLinkRegion", null),
        Object(a.b)([T.b], le.prototype, "LoadLinkRegion", null),
        Object(a.b)([T.b], le.prototype, "OnSaveRegions", null),
        Object(a.b)([T.b], le.prototype, "DeleteRegion", null),
        Object(a.b)([T.b], le.prototype, "UpdatePanel", null),
        (le = Object(a.b)([o.a], le));
    },
  },
]);
//# sourceMappingURL=broadcast.js.map
