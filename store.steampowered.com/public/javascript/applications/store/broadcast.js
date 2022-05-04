/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
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
          return Qt;
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
        b = (r("msu0"), r("9XWO")),
        _ = r("WFtA"),
        p = r("rmVU"),
        g = r("oleE"),
        B = r("hRO2"),
        S = r("3dpo");
      const y = B.Message;
      class f extends y {
        constructor(e = null) {
          super(),
            f.prototype.broadcast_channel_id || S.a(f.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = S.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(f.M(), e, t);
        }
        static fromObject(e) {
          return S.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_CreateBroadcastChannel_Response";
        }
      }
      class C extends y {
        constructor(e = null) {
          super(),
            C.prototype.broadcast_channel_id || S.a(C.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  steamid: {
                    n: 3,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = S.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(C.M(), e, t);
        }
        static fromObject(e) {
          return S.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelID_Response";
        }
      }
      class v extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
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
          let t = new B.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelProfile_Response";
        }
      }
      class w extends y {
        constructor(e = null) {
          super(),
            w.prototype.unique_name || S.a(w.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  unique_name: {
                    n: 1,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  owner_steamid: {
                    n: 2,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  name: { n: 3, br: S.d.readString, bw: S.h.writeString },
                  language: { n: 4, br: S.d.readString, bw: S.h.writeString },
                  headline: { n: 5, br: S.d.readString, bw: S.h.writeString },
                  summary: { n: 6, br: S.d.readString, bw: S.h.writeString },
                  schedule: { n: 7, br: S.d.readString, bw: S.h.writeString },
                  rules: { n: 8, br: S.d.readString, bw: S.h.writeString },
                  panels: { n: 9, br: S.d.readString, bw: S.h.writeString },
                  is_partnered: { n: 10, br: S.d.readBool, bw: S.h.writeBool },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = S.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(w.M(), e, t);
        }
        static fromObject(e) {
          return S.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelProfile_Response";
        }
      }
      class M extends y {
        constructor(e = null) {
          super(),
            M.prototype.replace_image_hash || S.a(M.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  replace_image_hash: {
                    n: 1,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = S.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(M.M(), e, t);
        }
        static fromObject(e) {
          return S.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelImage_Response";
        }
      }
      class O extends y {
        constructor(e = null) {
          super(),
            O.prototype.images || S.a(O.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { images: { n: 1, c: R, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = S.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(O.M(), e, t);
        }
        static fromObject(e) {
          return S.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response";
        }
      }
      class R extends y {
        constructor(e = null) {
          super(),
            R.prototype.image_type || S.a(R.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  image_type: { n: 1, br: S.d.readEnum, bw: S.h.writeEnum },
                  image_path: { n: 2, br: S.d.readString, bw: S.h.writeString },
                  image_index: {
                    n: 3,
                    br: S.d.readUint32,
                    bw: S.h.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = S.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(R.M(), e, t);
        }
        static fromObject(e) {
          return S.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response_Images";
        }
      }
      class T extends y {
        constructor(e = null) {
          super(),
            T.prototype.links || S.a(T.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { links: { n: 1, c: j, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = S.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(T.M(), e, t);
        }
        static fromObject(e) {
          return S.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response";
        }
      }
      class j extends y {
        constructor(e = null) {
          super(),
            j.prototype.link_index || S.a(j.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  link_index: { n: 1, br: S.d.readUint32, bw: S.h.writeUint32 },
                  url: { n: 2, br: S.d.readString, bw: S.h.writeString },
                  link_description: {
                    n: 3,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  left: { n: 4, br: S.d.readUint32, bw: S.h.writeUint32 },
                  top: { n: 5, br: S.d.readUint32, bw: S.h.writeUint32 },
                  width: { n: 6, br: S.d.readUint32, bw: S.h.writeUint32 },
                  height: { n: 7, br: S.d.readUint32, bw: S.h.writeUint32 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = S.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(j.M(), e, t);
        }
        static fromObject(e) {
          return S.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
        }
      }
      class F extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
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
          let t = new B.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
        }
      }
      class E extends y {
        constructor(e = null) {
          super(),
            E.prototype.is_live || S.a(E.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  is_live: { n: 1, br: S.d.readBool, bw: S.h.writeBool },
                  is_disabled: { n: 2, br: S.d.readBool, bw: S.h.writeBool },
                  appid: { n: 3, br: S.d.readUint32, bw: S.h.writeUint32 },
                  viewers: {
                    n: 4,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  views: {
                    n: 5,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  broadcaster_steamid: {
                    n: 6,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  subscribers: {
                    n: 9,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  unique_name: {
                    n: 10,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  broadcast_session_id: {
                    n: 11,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = S.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(E.M(), e, t);
        }
        static fromObject(e) {
          return S.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelStatus_Response";
        }
      }
      class z extends y {
        constructor(e = null) {
          super(),
            z.prototype.broadcast_channel_id || S.a(z.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  name: { n: 3, br: S.d.readString, bw: S.h.writeString },
                  appid: { n: 4, br: S.d.readUint32, bw: S.h.writeUint32 },
                  viewers: {
                    n: 5,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  views: {
                    n: 6,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  headline: { n: 9, br: S.d.readString, bw: S.h.writeString },
                  avatar_url: {
                    n: 10,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  broadcaster_steamid: {
                    n: 11,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  subscribers: {
                    n: 12,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  background_url: {
                    n: 13,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  is_featured: { n: 14, br: S.d.readBool, bw: S.h.writeBool },
                  is_disabled: { n: 15, br: S.d.readBool, bw: S.h.writeBool },
                  is_live: { n: 16, br: S.d.readBool, bw: S.h.writeBool },
                  language: { n: 17, br: S.d.readString, bw: S.h.writeString },
                  reports: { n: 18, br: S.d.readUint32, bw: S.h.writeUint32 },
                  is_partnered: { n: 19, br: S.d.readBool, bw: S.h.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = S.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(z.M(), e, t);
        }
        static fromObject(e) {
          return S.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GetBroadcastChannelEntry";
        }
      }
      class I extends y {
        constructor(e = null) {
          super(),
            I.prototype.results || S.a(I.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { results: { n: 1, c: z, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = S.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(I.M(), e, t);
        }
        static fromObject(e) {
          return S.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetFollowedChannels_Response";
        }
      }
      class W extends y {
        constructor(e = null) {
          super(),
            W.prototype.results || S.a(W.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { results: { n: 1, c: z, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = S.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(W.M(), e, t);
        }
        static fromObject(e) {
          return S.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSubscribedChannels_Response";
        }
      }
      class P extends y {
        constructor(e = null) {
          super(),
            P.prototype.is_followed || S.a(P.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  is_followed: { n: 1, br: S.d.readBool, bw: S.h.writeBool },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = S.e(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(P.M(), e, t);
        }
        static fromObject(e) {
          return S.c(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_FollowBroadcastChannel_Response";
        }
      }
      class D extends y {
        constructor(e = null) {
          super(),
            D.prototype.is_subscribed || S.a(D.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  is_subscribed: { n: 1, br: S.d.readBool, bw: S.h.writeBool },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = S.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(D.M(), e, t);
        }
        static fromObject(e) {
          return S.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SubscribeBroadcastChannel_Response";
        }
      }
      class N extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ReportBroadcastChannel_Response";
        }
      }
      class x extends y {
        constructor(e = null) {
          super(),
            x.prototype.is_followed || S.a(x.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  is_followed: { n: 1, br: S.d.readBool, bw: S.h.writeBool },
                  is_subscribed: { n: 2, br: S.d.readBool, bw: S.h.writeBool },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = S.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(x.M(), e, t);
        }
        static fromObject(e) {
          return S.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelInteraction_Response";
        }
      }
      class k extends y {
        constructor(e = null) {
          super(),
            k.prototype.appid || S.a(k.M()),
            y.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: S.d.readUint32, bw: S.h.writeUint32 },
                  name: { n: 2, br: S.d.readString, bw: S.h.writeString },
                  image: { n: 3, br: S.d.readString, bw: S.h.writeString },
                  viewers: {
                    n: 4,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  channels: { n: 5, c: z, r: !0, q: !0 },
                  release_date: {
                    n: 6,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  developer: { n: 7, br: S.d.readString, bw: S.h.writeString },
                  publisher: { n: 8, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = S.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(k.M(), e, t);
        }
        static fromObject(e) {
          return S.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Game";
        }
      }
      class U extends y {
        constructor(e = null) {
          super(),
            U.prototype.results || S.a(U.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { results: { n: 1, c: k, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = S.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(U.M(), e, t);
        }
        static fromObject(e) {
          return S.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetGames_Response";
        }
      }
      class V extends y {
        constructor(e = null) {
          super(),
            V.prototype.results || S.a(V.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { results: { n: 1, c: z, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = S.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(V.M(), e, t);
        }
        static fromObject(e) {
          return S.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChannels_Response";
        }
      }
      class G extends y {
        constructor(e = null) {
          super(),
            G.prototype.broadcasters || S.a(G.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { broadcasters: { n: 1, c: A, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = S.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(G.M(), e, t);
        }
        static fromObject(e) {
          return S.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
        }
      }
      class A extends y {
        constructor(e = null) {
          super(),
            A.prototype.steamid || S.a(A.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  name: { n: 2, br: S.d.readString, bw: S.h.writeString },
                  rtmp_token: { n: 3, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = S.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(A.M(), e, t);
        }
        static fromObject(e) {
          return S.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
        }
      }
      class L extends y {
        constructor(e = null) {
          super(),
            L.prototype.issuer_steamid || S.a(L.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  issuer_steamid: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  time_expires: {
                    n: 3,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  permanent: { n: 4, br: S.d.readBool, bw: S.h.writeBool },
                  name: { n: 5, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = S.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(L.M(), e, t);
        }
        static fromObject(e) {
          return S.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatBan";
        }
      }
      class H extends y {
        constructor(e = null) {
          super(),
            H.prototype.broadcast_channel_id || S.a(H.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  duration: { n: 3, br: S.d.readUint32, bw: S.h.writeUint32 },
                  permanent: { n: 4, br: S.d.readBool, bw: S.h.writeBool },
                  undo: { n: 5, br: S.d.readBool, bw: S.h.writeBool },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = S.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(H.M(), e, t);
        }
        static fromObject(e) {
          return S.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Request";
        }
      }
      class q extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Response";
        }
      }
      class $ extends y {
        constructor(e = null) {
          super(),
            $.prototype.results || S.a($.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: { results: { n: 1, c: L, r: !0, q: !0 } },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = S.e($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g($.M(), e, t);
        }
        static fromObject(e) {
          return S.c($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f($.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatBans_Response";
        }
      }
      class J extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatModerator_Response";
        }
      }
      class X extends y {
        constructor(e = null) {
          super(),
            X.prototype.broadcast_channel_id || S.a(X.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = S.e(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(X.M(), e, t);
        }
        static fromObject(e) {
          return S.c(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Request";
        }
      }
      class K extends y {
        constructor(e = null) {
          super(),
            K.prototype.steamid || S.a(K.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  name: { n: 2, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = S.e(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(K.M(), e, t);
        }
        static fromObject(e) {
          return S.c(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatModerator";
        }
      }
      class Y extends y {
        constructor(e = null) {
          super(),
            Y.prototype.results || S.a(Y.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { results: { n: 1, c: K, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = S.e(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(Y.M(), e, t);
        }
        static fromObject(e) {
          return S.c(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Response";
        }
      }
      class Q extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddWordBan_Response";
        }
      }
      class Z extends y {
        constructor(e = null) {
          super(),
            Z.prototype.results || S.a(Z.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  results: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: S.d.readString,
                    bw: S.h.writeRepeatedString,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = S.e(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(Z.M(), e, t);
        }
        static fromObject(e) {
          return S.c(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetWordBans_Response";
        }
      }
      class ee extends y {
        constructor(e = null) {
          super(),
            ee.prototype.broadcast_channel_id || S.a(ee.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = S.e(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(ee.M(), e, t);
        }
        static fromObject(e) {
          return S.c(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Request";
        }
      }
      class te extends y {
        constructor(e = null) {
          super(),
            te.prototype.chat_id || S.a(te.M()),
            y.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  chat_id: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  view_url_template: {
                    n: 2,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  flair_group_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: S.d.readUint64String,
                    bw: S.h.writeRepeatedUint64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = S.e(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(te.M(), e, t);
        }
        static fromObject(e) {
          return S.c(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Response";
        }
      }
      class re extends y {
        constructor(e = null) {
          super(),
            re.prototype.results || S.a(re.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { results: { n: 1, c: z, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = S.e(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(re.M(), e, t);
        }
        static fromObject(e) {
          return S.c(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Search_Response";
        }
      }
      class ae extends y {
        constructor(e = null) {
          super(),
            ae.prototype.stream_live_email || S.a(ae.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  stream_live_email: {
                    n: 1,
                    br: S.d.readBool,
                    bw: S.h.writeBool,
                  },
                  stream_live_notification: {
                    n: 2,
                    br: S.d.readBool,
                    bw: S.h.writeBool,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = S.e(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(ae.M(), e, t);
        }
        static fromObject(e) {
          return S.c(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSteamTVUserSettings_Response";
        }
      }
      class ie extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetSteamTVUserSettings_Response";
        }
      }
      class se extends y {
        constructor(e = null) {
          super(),
            se.prototype.results || S.a(se.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { results: { n: 1, c: z, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = S.e(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(se.M(), e, t);
        }
        static fromObject(e) {
          return S.c(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetMyBroadcastChannels_Response";
        }
      }
      class ne extends y {
        constructor(e = null) {
          super(),
            ne.prototype.broadcasts || S.a(ne.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { broadcasts: { n: 1, c: z, r: !0, q: !0 } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = S.e(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(ne.M(), e, t);
        }
        static fromObject(e) {
          return S.c(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Takeover";
        }
      }
      class oe extends y {
        constructor(e = null) {
          super(),
            oe.prototype.broadcasts || S.a(oe.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  broadcasts: { n: 1, c: z, r: !0, q: !0 },
                  appid: { n: 2, br: S.d.readUint32, bw: S.h.writeUint32 },
                  title: { n: 3, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = S.e(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(oe.M(), e, t);
        }
        static fromObject(e) {
          return S.c(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_SingleGame";
        }
      }
      class le extends y {
        constructor(e = null) {
          super(),
            le.prototype.appid || S.a(le.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: S.d.readUint32, bw: S.h.writeUint32 },
                  game_name: { n: 2, br: S.d.readString, bw: S.h.writeString },
                  broadcast: { n: 3, c: z },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = S.e(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(le.M(), e, t);
        }
        static fromObject(e) {
          return S.c(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GameListEntry";
        }
      }
      class ce extends y {
        constructor(e = null) {
          super(),
            ce.prototype.entries || S.a(ce.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  entries: { n: 1, c: le, r: !0, q: !0 },
                  title: { n: 2, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = S.e(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(ce.M(), e, t);
        }
        static fromObject(e) {
          return S.c(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_GameList";
        }
      }
      class de extends y {
        constructor(e = null) {
          super(),
            de.prototype.broadcasts || S.a(de.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  broadcasts: { n: 1, c: z, r: !0, q: !0 },
                  title: { n: 2, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = S.e(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(de.M(), e, t);
        }
        static fromObject(e) {
          return S.c(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_QuickExplore";
        }
      }
      class me extends y {
        constructor(e = null) {
          super(),
            me.prototype.broadcasts || S.a(me.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  broadcasts: { n: 1, c: z, r: !0, q: !0 },
                  title: { n: 2, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = S.e(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(me.M(), e, t);
        }
        static fromObject(e) {
          return S.c(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_ConveyorBelt";
        }
      }
      class ue extends y {
        constructor(e = null) {
          super(),
            ue.prototype.broadcast || S.a(ue.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  broadcast: { n: 1, c: z },
                  title: { n: 2, br: S.d.readString, bw: S.h.writeString },
                  chat_group_id: {
                    n: 3,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = S.e(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(ue.M(), e, t);
        }
        static fromObject(e) {
          return S.c(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_WatchParty";
        }
      }
      class he extends y {
        constructor(e = null) {
          super(),
            he.prototype.broadcast || S.a(he.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  broadcast: { n: 1, c: z },
                  title: { n: 2, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = S.e(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(he.M(), e, t);
        }
        static fromObject(e) {
          return S.c(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Developer";
        }
      }
      class be extends y {
        constructor(e = null) {
          super(),
            be.prototype.title || S.a(be.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  title: { n: 1, br: S.d.readString, bw: S.h.writeString },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = S.e(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(be.M(), e, t);
        }
        static fromObject(e) {
          return S.c(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Event";
        }
      }
      class _e extends y {
        constructor(e = null) {
          super(),
            _e.prototype.template_type || S.a(_e.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  template_type: { n: 1, br: S.d.readEnum, bw: S.h.writeEnum },
                  takeover: { n: 2, c: ne },
                  single_game: { n: 3, c: oe },
                  game_list: { n: 4, c: ce },
                  quick_explore: { n: 5, c: de },
                  conveyor_belt: { n: 6, c: me },
                  watch_party: { n: 7, c: ue },
                  developer: { n: 8, c: he },
                  event: { n: 9, c: be },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = S.e(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(_e.M(), e, t);
        }
        static fromObject(e) {
          return S.c(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageContentRow";
        }
      }
      class pe extends y {
        constructor(e = null) {
          super(),
            pe.prototype.rows || S.a(pe.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: { rows: { n: 1, c: _e, r: !0, q: !0 } },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = S.e(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(pe.M(), e, t);
        }
        static fromObject(e) {
          return S.c(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetHomePageContents_Response";
        }
      }
      class ge extends y {
        constructor(e = null) {
          super(),
            ge.prototype.broadcast_clip_id || S.a(ge.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  channel_id: {
                    n: 2,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                  app_id: { n: 3, br: S.d.readUint32, bw: S.h.writeUint32 },
                  broadcaster_steamid: {
                    n: 4,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  creator_steamid: {
                    n: 5,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  video_description: {
                    n: 6,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                  live_time: { n: 7, br: S.d.readUint32, bw: S.h.writeUint32 },
                  length_ms: { n: 8, br: S.d.readUint32, bw: S.h.writeUint32 },
                  thumbnail_path: {
                    n: 9,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = S.e(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(ge.M(), e, t);
        }
        static fromObject(e) {
          return S.c(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_BroadcastClipInfo";
        }
      }
      class Be extends y {
        constructor(e = null) {
          super(),
            Be.prototype.clips || S.a(Be.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  clips: { n: 1, c: ge, r: !0, q: !0 },
                  thumbnail_host: {
                    n: 2,
                    br: S.d.readString,
                    bw: S.h.writeString,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = S.e(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(Be.M(), e, t);
        }
        static fromObject(e) {
          return S.c(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelClips_Response";
        }
      }
      class Se extends y {
        constructor(e = null) {
          super(),
            Se.prototype.aggregation_delay_ms || S.a(Se.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  aggregation_delay_ms: {
                    n: 1,
                    br: S.d.readUint32,
                    bw: S.h.writeUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = S.e(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(Se.M(), e, t);
        }
        static fromObject(e) {
          return S.c(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AppCheer_Response";
        }
      }
      var ye;
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, f, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, C, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, v, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, w, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, M, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, O, {
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
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              G,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, I, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, W, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, E, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, P, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, D, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, Be, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, N, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", t, x, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, U, {
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
            return e.SendMsg("SteamTV.AddChatBan#1", t, q, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, $, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, J, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, Y, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, Q, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, Z, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, te, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, re, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, ae, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, ie, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, se, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, pe, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, Se, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(ye || (ye = {}));
      r("sTxY");
      var fe = r("3u1o"),
        Ce = r("GXif"),
        ve = r("vYsE"),
        we = r("/Q1a");
      const Me = B.Message;
      class Oe extends Me {
        constructor(e = null) {
          super(),
            Oe.prototype.bincremental || S.a(Oe.M()),
            Me.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  bincremental: { n: 1, br: S.d.readBool, bw: S.h.writeBool },
                  friends: { n: 2, c: Re, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: S.d.readUint32,
                    bw: S.h.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: S.d.readUint32,
                    bw: S.h.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: S.d.readBool,
                    bw: S.h.writeBool,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = S.e(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(Oe.M(), e, t);
        }
        static fromObject(e) {
          return S.c(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class Re extends Me {
        constructor(e = null) {
          super(),
            Re.prototype.ulfriendid || S.a(Re.M()),
            Me.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: S.d.readFixed64String,
                    bw: S.h.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: S.d.readUint32,
                    bw: S.h.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = S.e(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(Re.M(), e, t);
        }
        static fromObject(e) {
          return S.c(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      const Te = B.Message;
      class je extends Te {
        constructor(e = null) {
          super(),
            je.prototype.groupid || S.a(je.M()),
            Te.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  groupid: { n: 1, br: S.d.readUint32, bw: S.h.writeUint32 },
                  name: { n: 2, br: S.d.readString, bw: S.h.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: S.d.readUint32,
                    bw: S.h.writeRepeatedUint32,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = S.e(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(je.M(), e, t);
        }
        static fromObject(e) {
          return S.c(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class Fe extends Te {
        constructor(e = null) {
          super(),
            Fe.prototype.categories || S.a(Fe.M()),
            Te.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: { categories: { n: 1, c: je, r: !0, q: !0 } },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = S.e(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(Fe.M(), e, t);
        }
        static fromObject(e) {
          return S.c(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class Ee extends Te {
        constructor(e = null) {
          super(),
            Ee.prototype.accountid || S.a(Ee.M()),
            Te.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  accountid: { n: 1, br: S.d.readUint32, bw: S.h.writeUint32 },
                  clanid: { n: 2, br: S.d.readUint32, bw: S.h.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: S.d.readUint64String,
                    bw: S.h.writeUint64String,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = S.e(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(Ee.M(), e, t);
        }
        static fromObject(e) {
          return S.c(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class ze extends Te {
        constructor(e = null) {
          super(),
            ze.prototype.favorites || S.a(ze.M()),
            Te.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: { favorites: { n: 1, c: Ee, r: !0, q: !0 } },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = S.e(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(ze.M(), e, t);
        }
        static fromObject(e) {
          return S.c(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class Ie extends Te {
        constructor(e = null) {
          super(), Te.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ie();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class We extends Te {
        constructor(e = null) {
          super(),
            We.prototype.favorites || S.a(We.M()),
            Te.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { favorites: { n: 1, c: Ee, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = S.e(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(We.M(), e, t);
        }
        static fromObject(e) {
          return S.c(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class Pe extends Te {
        constructor(e = null) {
          super(), Te.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Pe();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class De extends Te {
        constructor(e = null) {
          super(),
            De.prototype.friendslist || S.a(De.M()),
            Te.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: { friendslist: { n: 1, c: Oe } },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = S.e(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return S.g(De.M(), e, t);
        }
        static fromObject(e) {
          return S.c(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.b(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.f(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var Ne, xe;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, Fe, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, De, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, ze, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, Ie, {
              ePrivilege: 1,
            });
          });
      })(Ne || (Ne = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: We,
          };
        })(xe || (xe = {}));
      var ke = r("ztGc"),
        Ue = (r("uWhj"), r("Zdsb")),
        Ve = r("kslQ");
      class Ge {
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
            (this.m_TextFilterPreferences = new Ue.m());
          {
            let e = new ke.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends());
          }
          this.m_TextFilterWords = new ke.m();
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
              yield this.LoadLanguage(we.d.LANGUAGE),
              "english" !== we.d.LANGUAGE &&
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
              e && (this.m_TextFilterWords = ke.m.fromObject(e));
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
            let e = new ke.a();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = b.b.Init(ke.b);
                  e = (yield ke.n.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: we.d.SESSIONID, origin: Object(we.f)() };
                  const r = yield s.a.get(
                    we.d.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 }
                  );
                  e = ke.a.fromObject(r.data.preferences);
                }
              } catch (e) {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new ke.m();
              if (0 !== e.text_filter_words_revision())
                try {
                  if (this.m_Transport) {
                    let e = b.b.Init(ke.f);
                    t = (yield ke.n.GetTextFilterWords(this.m_Transport, e))
                      .Body()
                      .words();
                  } else {
                    let e = {
                      sessionid: we.d.SESSIONID,
                      origin: Object(we.f)(),
                    };
                    const r = yield s.a.get(
                      we.d.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: e, withCredentials: !0 }
                    );
                    t = ke.m.fromObject(r.data.words);
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
            ((this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
            (t = !0)),
            e.text_filter_ignore_friends() !==
              this.m_TextFilterPreferences.bIgnoreFriends &&
              ((this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
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
            let e = new Oe();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = b.b.Init(Pe);
                  e = (yield Ne.GetFriendsList(this.m_Transport, t))
                    .Body()
                    .friendslist();
                } else {
                  let t = { sessionid: we.d.SESSIONID, origin: Object(we.f)() };
                  const r = yield s.a.get(
                    we.d.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist",
                    { params: t, withCredentials: !0 }
                  );
                  e = Oe.fromObject(r.data.friendslist);
                }
              } catch (e) {}
            this.SetFriendsList(e);
          });
        }
        SetFriendsList(e) {
          e.bincremental() || this.m_mapPlayerCache.clear();
          for (let t of e.friends()) {
            let e = new g.a(t.ulfriendid());
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
              we.d.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${Object(
              we.f
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strBannedWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              we.d.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${Object(
              we.f
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strProfanityWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              we.d.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${Object(
              we.f
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
                Object(Ve.a)().ReportError(
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
                Object(Ve.a)().ReportError(
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
            r = new g.a(e).GetAccountID();
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
      Object(a.b)([d.C], Ge.prototype, "m_TextFilterPreferences", void 0),
        Object(a.b)([d.C], Ge.prototype, "m_mapPlayerCache", void 0),
        Object(a.b)([d.C], Ge.prototype, "m_regexBannedWords", void 0),
        Object(a.b)([d.C], Ge.prototype, "m_regexCleanWords", void 0),
        Object(a.b)([d.k], Ge.prototype, "UpdateCommunityPreferences", null),
        Object(a.b)([d.k], Ge.prototype, "SetFriendsList", null),
        Object(a.b)([d.k], Ge.prototype, "BRebuildFilter", null);
      class Ae {
        constructor() {
          this.m_mapChats = new Map();
        }
        GetChat(e, t) {
          return this.m_mapChats.get(e) || this.m_mapChats.get(t);
        }
        GetOrCreateChat(e, t) {
          let r = this.GetChat(e, t);
          return r || ((r = new Le()), this.m_mapChats.set(e || t, r)), r;
        }
      }
      Object(a.b)([d.C], Ae.prototype, "m_mapChats", void 0);
      class Le {
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
            (this.m_webAPIInterface = new p.a(
              we.d.WEBAPI_BASE_URL,
              we.k.webapi_token
            ));
        }
        InitTextFilter() {
          this.m_textFilterStore = new Ge();
          let e = 0;
          if ("" !== we.k.steamid) {
            e = new g.a(we.k.steamid).GetAccountID();
          }
          this.m_textFilterStore.Init(e, null, new _.a());
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
          (this.m_webAPIInterface = new p.a(
            we.d.WEBAPI_BASE_URL,
            we.k.webapi_token
          )),
            (this.m_ulBroadcastSteamID = e),
            (this.m_ulBroadcastID = t),
            this.InitTextFilter(),
            this.RequestChatInfo();
        }
        StartForChannel(e) {
          (this.m_webAPIInterface = new p.a(
            we.d.WEBAPI_BASE_URL,
            we.k.webapi_token
          )),
            (this.m_ulBroadcastChannelID = e),
            (this.m_strUserSteamID = we.k.steamid),
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
                      `${we.d.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      e
                    )),
                    (a = r.data && r.data.response);
                } else {
                  const r = b.b.Init(u.c);
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
                        ? Object(Ce.f)("#BroadcastChat_YouMuted")
                        : 84 == a.result
                        ? Object(Ce.f)(
                            "#BroadcastChat_Cooldown",
                            a.cooldown_time_seconds
                          )
                        : Object(Ce.f)("#BroadcastChat_FailedToSendMsg", t)),
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
                  msg: Object(Ce.f)("#BroadcastChat_FailedToSendMsg", t),
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
                  sessionid: we.d.SESSIONID,
                },
                r = yield s.a.get(
                  `${we.d.CHAT_BASE_URL}broadcast/getchatinfo`,
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
                        msg: Object(Ce.f)("#BroadcastChat_DefaultMessage"),
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
                    (this.m_chatScheduledFunc = new fe.b()),
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
              const e = b.b.Init(ee);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = yield ye.JoinChat(
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
                  msg: Object(Ce.f)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new fe.b()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (e) {
              console.error(e), console.log("Failed to join chat!");
            }
          });
        }
        FetchChatModerators() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = b.b.Init(X);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const t = (yield ye.GetChatModerators(
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
                      ? Object(Ce.f)("#BroadcastChat_YouMuted", e.persona_name)
                      : Object(Ce.f)(
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
                    msg: Object(Ce.f)("#BroadcastChat_UnableToJoinChat"),
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
                a.append("sessionid", we.d.SESSIONID);
              try {
                yield s.a.post(
                  `${we.d.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, t);
                const i = Object(Ce.f)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  r
                );
                this.m_rgChatMessages.push({ type: h.a.Notification, msg: i });
              } catch (e) {
                const a = Object(Ce.f)(
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
              const t = b.b.Init(H);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: 3600 * r,
                permanent: i,
                undo: o,
              }),
                yield ye.AddChatBan(
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
                o.append("sessionid", we.d.SESSIONID);
              try {
                yield s.a.post(
                  `${we.d.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
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
                      `${we.d.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = b.b.Init(u.b);
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
                    msg: Object(Ce.f)("#BroadcastChat_UserMuteFailed", t),
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
                msg: Object(Ce.f)("#BroadcastChat_UserMutedLocal", t),
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
                      `${we.d.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = b.b.Init(u.b);
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
                  msg: Object(Ce.f)("#BroadcastChat_UserUnmutedLocal", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: h.a.Error,
                  msg: Object(Ce.f)("#BroadcastChat_UserUnmuteFailed", t),
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
                msg: Object(Ce.f)("#BroadcastChat_UserUnmutedLocal", t),
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
                      `${we.d.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = b.b.Init(u.d);
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
                  msg: Object(Ce.f)("#BroadcastChat_RemoveMessagesFailed", t),
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
                  `${we.d.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  t
                );
            } else {
              const t = b.b.Init(u.e);
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
      Object(a.b)([d.C], Le.prototype, "m_mapChannelModeratorUsers", void 0),
        Object(a.b)(
          [d.C],
          Le.prototype,
          "m_mapBroadcastModeratorUsers",
          void 0
        ),
        Object(a.b)([d.C], Le.prototype, "m_nRateLimitSeconds", void 0),
        Object(a.b)([d.C], Le.prototype, "m_bRateLimited", void 0),
        Object(a.b)([d.C], Le.prototype, "m_rgChatMessages", void 0),
        Object(a.b)([ve.a], Le.prototype, "FetchChatModerators", null),
        Object(a.b)([ve.a], Le.prototype, "RequestLoop", null),
        Object(a.b)([ve.a], Le.prototype, "MuteUserForSession", null);
      const He = new Ae();
      window.g_BroadcastChatStore = He;
      var qe = r("Y6GK"),
        $e = (r("QwK/"), r("Wjgn")),
        Je = r("USh/"),
        Xe = r.n(Je),
        Ke = r("SS8s"),
        Ye = r("7ast"),
        Qe = r("55de"),
        Ze = r("c8QL"),
        et = r("tXj3"),
        tt = r("GfUI"),
        rt = r("TCgL"),
        at = r.n(rt);
      const it = () =>
          c.a.createElement(
            "div",
            { className: at.a.FriendsListInsetShadowCtn },
            c.a.createElement("div", {
              className: at.a.FriendListInsetShadowTop,
            })
          ),
        st = () =>
          c.a.createElement(
            "div",
            { className: at.a.FriendsListInsetShadowCtn },
            c.a.createElement("div", {
              className: at.a.FriendListInsetShadowBottom,
            })
          );
      var nt = r("e356"),
        ot = r("GbHM"),
        lt = r("hCpY"),
        ct = r("mE5e"),
        dt = r.n(ct);
      const mt = new RegExp("ː([^ː]*)ː", "g"),
        ut =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      const ht = (e) => {
          const { userType: t, msg: r, presenterInfo: a } = e;
          if ("presenter" === t)
            return l.createElement(
              "span",
              null,
              l.createElement(
                tt.b,
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
                    className: Object(ot.a)(
                      dt.a.MessageName,
                      dt.a.MessagePresenter
                    ),
                    href: we.d.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
                ? (e = dt.a.MessageBroadcaster)
                : "moderator" === t && (e = dt.a.MessageModerator),
              l.createElement(
                "span",
                null,
                l.createElement(
                  "a",
                  {
                    className: Object(ot.a)(dt.a.MessageName, e),
                    href: we.d.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
        bt = (e) => {
          switch (e.userType) {
            case "presenter":
              return l.createElement(
                "span",
                {
                  className: dt.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Ce.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                l.createElement(nt.i, null)
              );
            case "moderator":
              return l.createElement(
                "span",
                {
                  className: dt.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Ce.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                l.createElement(nt.j, null)
              );
            case "broadcaster":
              return l.createElement(
                "span",
                {
                  className: dt.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Ce.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                l.createElement(nt.h, null)
              );
            default:
              return null;
          }
        };
      let _t = class extends l.Component {
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
            (this.m_chat = He.GetOrCreateChat(
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
          return !!e.match(ut);
        }
        AddLinksEmoticons(e, t) {
          let r = mt;
          t && (r = this.m_chat.GetUserEmoticons());
          let a = e.split(mt);
          const i = [];
          for (let e = 0; e < a.length; e += 1)
            e % 2 == 1
              ? i.push(
                  l.createElement(Qe.b, {
                    emoticonHoverStore: $e.a,
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
            ((we.k && we.k.is_support) || a || i
              ? r.push(
                  l.createElement(
                    Ke.d,
                    {
                      key: "remove",
                      onSelected: () =>
                        this.m_chat.RemoveUserMessagesServer(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(Ce.f)("#BroadcastChat_RemoveMessages")
                  ),
                  l.createElement(
                    Ke.d,
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
                    Object(Ce.f)("#BroadcastChat_half_Mute")
                  ),
                  l.createElement(
                    Ke.d,
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
                    Object(Ce.f)("#BroadcastChat_day_Mute")
                  ),
                  l.createElement(
                    Ke.d,
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
                    Object(Ce.f)("#BroadcastChat_week_Mute")
                  ),
                  l.createElement(
                    Ke.d,
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
                    Object(Ce.f)("#BroadcastChat_perm_Mute")
                  ),
                  l.createElement(
                    Ke.d,
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
                    Object(Ce.f)("#BroadcastChat_Unmute")
                  )
                )
              : this.m_chat.IsUserMutedLocally(t.steamid)
              ? r.push(
                  l.createElement(
                    Ke.d,
                    {
                      key: "unmuteuser",
                      onSelected: () =>
                        this.m_chat.UnmuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(Ce.f)("#BroadcastChat_UnmuteLocal")
                  )
                )
              : r.push(
                  l.createElement(
                    Ke.d,
                    {
                      key: "muteuser",
                      onSelected: () =>
                        this.m_chat.MuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(Ce.f)("#BroadcastChat_MuteLocal")
                  )
                ),
            ((we.k && we.k.is_support) ||
              this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
              t.steamid)
          ) {
            this.m_chat.BIsUserBroadcastModerator(t.steamid)
              ? r.push(
                  l.createElement(
                    Ke.d,
                    {
                      key: "removemod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(Ce.f)("#BroadcastChat_Remove_Moderator")
                  )
                )
              : r.push(
                  l.createElement(
                    Ke.d,
                    {
                      key: "addmod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(Ce.f)("#BroadcastChat_Add_Moderator")
                  )
                );
          }
          return r.length
            ? Object(m.a)(
                l.createElement(
                  Ke.c,
                  null,
                  l.createElement(
                    "div",
                    { className: dt.a.SelectedUserNameCtn },
                    Object(Ce.f)("#BroadcastChat_User"),
                    l.createElement("br", null),
                    l.createElement(
                      "span",
                      { className: dt.a.SelectedUserName },
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
            ? dt.a.MessageNotification
            : e.type === h.a.Error
            ? dt.a.MessageError
            : dt.a.MessageChat;
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
            e.type === h.a.Chat && l.createElement(bt, { userType: i }),
            e.flair &&
              l.createElement(
                "span",
                { className: dt.a.FlairContainer },
                this.AddLinksEmoticons(e.flair, !1)
              ),
            e.type === h.a.Chat &&
              l.createElement(ht, { userType: i, msg: e, presenterInfo: a }),
            e.type === h.a.Chat &&
              this.m_chat.GetBroadcastSteamID() === e.steamid &&
              l.createElement(
                "span",
                {
                  className: `${dt.a.MessageNotification} ${dt.a.MessageContents}`,
                },
                ` (${Object(Ce.f)("#BroadcastChat_Broadcaster")})`
              ),
            e.type === h.a.Chat &&
              this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
              l.createElement(
                "span",
                {
                  className: `${dt.a.MessageNotification} ${dt.a.MessageContents}`,
                },
                ` (${Object(Ce.f)("#BroadcastChat_Moderator")})`
              ),
            l.createElement(
              "span",
              {
                className: `${dt.a.MessageContents} ${
                  this.AddLinksEmoticons(e.msg, !1).filter(
                    (e) => e && "string" == typeof e
                  ).length
                    ? ""
                    : dt.a.EmoticonsOnly
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
              ? qe.b.GetPresenterMapForBroadcasterSteamID(
                  this.m_chat.GetBroadcastSteamID()
                )
              : void 0;
          return l.createElement(
            "div",
            {
              className: Object(ot.a)(dt.a.ChatPanel, "ChatPanel"),
              style: e ? { display: "none" } : void 0,
            },
            r &&
              !!this.m_chat &&
              l.createElement(pt, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              }),
            l.createElement(it, null),
            l.createElement(
              "div",
              {
                className: Object(ot.a)(
                  `${dt.a.ChatMessages} ${Xe.a.minHeightZero}`,
                  "ChatMessages"
                ),
                onScroll: this.HandleScroll,
                ref: this.messagesContainer,
              },
              i.map((e, t) => this.RenderUserChatLine(e, t, s))
            ),
            l.createElement(st, null),
            !r &&
              !!this.m_chat &&
              l.createElement(pt, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              })
          );
        }
      };
      function pt(e) {
        const { oChat: t, emoticonStore: r, bPartnerMemberOnlyChat: a } = e;
        return !a ||
          ((null === we.k || void 0 === we.k ? void 0 : we.k.logged_in) &&
            (null === we.k || void 0 === we.k
              ? void 0
              : we.k.is_partner_member))
          ? (null === we.k || void 0 === we.k ? void 0 : we.k.logged_in)
            ? l.createElement(gt, { oChat: t, emoticonStore: r })
            : null
          : l.createElement(yt, null);
      }
      function gt(e) {
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
          { className: Object(ot.a)(dt.a.ChatEntryCtn, "ChatEntryCtn") },
          l.createElement(
            "div",
            { className: Object(ot.a)(dt.a.ChatEntry, "ChatEntry") },
            l.createElement(
              "form",
              { className: `${Xe.a.chatEntryControls}` },
              l.createElement("textarea", {
                className: Xe.a.chatTextarea,
                placeholder: Object(Ce.f)("#BroadcastChat_EnterResponse"),
                onKeyPress: n,
                onChange: (e) => i(e.target.value),
                value: a,
                ref: s,
              }),
              Boolean(t.m_bRateLimited) &&
                l.createElement(St, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              l.createElement(
                "button",
                {
                  className: `${Xe.a.chatSubmitButton} ${
                    a ? "" : Xe.a.disabled
                  }`,
                  title: Object(Ce.f)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: () => {
                    t.SendMessage(a), i("");
                  },
                },
                l.createElement(nt.pb, null)
              )
            ),
            l.createElement(
              "div",
              {
                style: { height: "50px" },
                className: `${Xe.a.chatEntryActionsContainer}`,
              },
              l.createElement(
                "div",
                { className: Xe.a.chatEntryActionsGroup },
                l.createElement(Ze.a, {
                  disabled: !1,
                  OnEmoticonSelected: o,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: $e.a,
                }),
                l.createElement(Bt, Object.assign({}, e, { textInputRef: s }))
              )
            )
          )
        );
      }
      function Bt(e) {
        var t;
        const { oChat: r, emoticonStore: a, textInputRef: i } = e;
        return r.m_strFlairGroupID &&
          a.flair_list &&
          (null === (t = a.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? l.createElement(Ze.a, {
              disabled: !1,
              OnEmoticonSelected: (e) => {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: a,
              emoticonHoverStore: $e.a,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(Ce.f)("#ChatEntryButton_Flair"),
              buttonIcon: l.createElement(nt.k, null),
            })
          : null;
      }
      Object(a.b)([d.C], _t.prototype, "m_chat", void 0),
        Object(a.b)([lt.b], _t.prototype, "StartChat", null),
        Object(a.b)([lt.b], _t.prototype, "HandleScroll", null),
        Object(a.b)([lt.b], _t.prototype, "OnContextMenu", null),
        Object(a.b)([lt.b], _t.prototype, "RenderUserChatLine", null),
        (_t = Object(a.b)([n.a], _t));
      class St extends l.Component {
        render() {
          return l.createElement(
            "div",
            { className: dt.a.TimedProgressBarContainer },
            l.createElement(
              "div",
              { className: dt.a.wrapper },
              l.createElement("div", {
                className: `${dt.a.spinner} ${dt.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              l.createElement("div", {
                className: `${dt.a.filler} ${dt.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              l.createElement("div", {
                className: dt.a.mask,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              })
            )
          );
        }
      }
      function yt(e) {
        return l.createElement(
          "div",
          { className: dt.a.Description },
          l.createElement(
            "div",
            { className: dt.a.LogInPrompt },
            Object(Ce.f)("#Broadcast_PartnerChat_Login")
          ),
          !we.k.logged_in &&
            l.createElement(
              Ye.f,
              { onClick: et.a, className: Object(ot.a)(dt.a.SignInButton) },
              Object(Ce.f)("#Login_SignIn")
            )
        );
      }
      var ft = r("y+i+"),
        Ct = r("lfGQ"),
        vt = (r("yfxr"), r("RrtU")),
        wt = r("zy5s"),
        Mt = r("1QaA"),
        Ot = r("5ZQm"),
        Rt = r("0JCO"),
        Tt = r("kWcV"),
        jt = r("0CKs"),
        Ft = r.n(jt);
      const Et = Object(n.a)((e) => {
        const { appid: t } = e,
          r = Object(Rt.c)(),
          a = Object(l.useRef)({ include_assets: !0, include_release: !0 }),
          [i, s] = Object(vt.b)(t, a.current);
        let n = Ft.a.StoreSaleWidgetContainer_mini,
          o = Ft.a.StoreSaleWidgetImage_mini,
          d = Ft.a.StoreSaleImage_mini;
        if (!i && 2 != s)
          return c.a.createElement(
            "div",
            { className: n },
            c.a.createElement(Tt.a, { size: "medium" }),
            ";"
          );
        if (2 == s || !i.GetName())
          return c.a.createElement("div", {
            className: wt.StoreSaleWidgetEmptyContainer,
          });
        const m = 8 != i.GetAppType(),
          u = Object(Ct.b)(i.GetStorePageURL(), r);
        return c.a.createElement(
          "div",
          { className: n },
          c.a.createElement(
            "div",
            { className: wt.Actions },
            c.a.createElement(
              "a",
              { href: u, target: we.d.IN_CLIENT ? void 0 : "_blank" },
              c.a.createElement(
                Ot.b,
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
            { className: wt.StoreSaleBroadcastWidgetRight },
            c.a.createElement(
              "div",
              { className: wt.Actions },
              c.a.createElement(
                "a",
                { href: u, target: we.d.IN_CLIENT ? void 0 : "_blank" },
                c.a.createElement(
                  Ot.b,
                  { type: "app", id: t },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(ot.a)(
                        wt.StoreSaleWidgetTitle,
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
              { className: wt.StoreSaleWidgetRelease },
              i.GetFormattedSteamReleaseDate()
            ),
            Boolean(m) &&
              c.a.createElement(Mt.c, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      r("uLSr");
      var zt = r("3XYX"),
        It = r("bmfB"),
        Wt = (r("Wtw7"), r("4EJs")),
        Pt = r("poS6"),
        Dt = r("/HXi"),
        Nt = r("uuth");
      const xt = (e) => {
        const { onPositionChange: t, onLeave: r } = e,
          a = l.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === Nt.a.above &&
                r &&
                r(e),
              t && t(e)
            ),
            [t, r]
          );
        return l.createElement(
          Nt.a,
          Object.assign({}, e, { onPositionChange: a })
        );
      };
      r("jrt+"), r("XrGS");
      var kt = r("10xk"),
        Ut = r("GOJk"),
        Vt = r.n(Ut);
      const Gt = Object(n.a)((e) => {
        const { event: t } = e,
          r = t.clanSteamID.GetAccountID(),
          i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = Object(l.useRef)(null),
          [o, d] = Object(l.useState)(
            t ? kt.a.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          (Object(l.useEffect)(() => {
            const e = s.a.CancelToken.source();
            n.current = e.cancel;
            return (
              Object(a.a)(void 0, void 0, void 0, function* () {
                const t = g.a.InitFromClanID(r),
                  a = yield kt.a.LoadCreatorHome(t, e);
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
          we.d.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return c.a.createElement(
          "div",
          { className: Vt.a.item_drop_ctn },
          c.a.createElement(
            "div",
            null,
            Object(Ce.f)(
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
                { href: m, target: we.d.IN_CLIENT ? "" : "_blank" },
                Object(Ce.f)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var At,
        Lt = r("Ys0h"),
        Ht = r("C1a2"),
        qt = r("XFIJ");
      r("WOjH");
      const $t = {
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
      let Jt = (At = class extends c.a.Component {
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
          return we.d.EREALM != Ue.h.k_ESteamRealmChina && !we.d.IN_GAMEPADUI;
        }
        componentDidMount() {
          return Object(a.a)(this, void 0, void 0, function* () {
            At.IsBroadcastAllowed() &&
              (Object(Ht.a)(null),
              yield It.a
                .Get()
                .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !It.a
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: It.a
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
                ? It.a.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : It.a.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (It.a
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
          let e = It.a.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            r = zt.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          Object(It.e)(r, t ? 2 : 3, e.snr),
            t && Object(qt.a)() && Object(qt.a)().AddEvent(1005),
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
                It.a.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              It.a.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              It.a.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield It.a.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = It.a
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            Object(It.f)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield It.a
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
          const a = It.a.Get().GetConcurrentStreams(this.props) > 1;
          let i = zt.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = c.a.createElement(
              "div",
              { className: Vt.a.rightPanel },
              c.a.createElement(Yt, { key: "right" + i, ImgUrl: e.right_panel })
            ),
            n = c.a.createElement(Yt, {
              key: "left" + i,
              ImgUrl: e.left_panel,
            });
          if (i < 11) {
            const t = qe.b.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((s = c.a.createElement(Et, {
                key: "mini" + e.accountid,
                appid: i,
              })),
              (r.bRightPanelArtworkOrEmpty = !1)),
            a && !t
              ? ((r.leftPanel = c.a.createElement(er, {
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
                (r.rightPanel = c.a.createElement(ar, {
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
            Object(qt.a)() && Object(qt.a)().AddEvent(1004));
        }
        render() {
          if (!At.IsBroadcastAllowed() || this.state.bLoadingPreference)
            return null;
          let e = It.a.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === It.a.Get().GetChatVisibility();
            const {
              event: r,
              language: a,
              fnRenderBroadcastContext: i,
            } = this.props;
            r &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: r.GetImageURL(
                  "broadcast_left",
                  a || Object(Ue.l)(we.d.LANGUAGE)
                ),
                right_panel: r.GetImageURL(
                  "broadcast_right",
                  a || Object(Ue.l)(we.d.LANGUAGE)
                ),
                store_title: r.GetBroadcastTitle(
                  a || Object(Ue.l)(we.d.LANGUAGE)
                ),
                broadcast_chat_visibility: r.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              n = e.store_title ? e.store_title : e.title,
              o = It.a.Get().GetConcurrentStreams(this.props) > 1;
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
                    className: Object(ot.a)({
                      [Vt.a.bordered_container]: !0,
                      [Vt.a.Event]: Boolean(r),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(ot.a)(
                        Vt.a.bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    c.a.createElement(Wt.h, null),
                    n,
                    c.a.createElement(
                      "div",
                      { className: Vt.a.bordered_corner_container },
                      !this.state.bExpanded &&
                        c.a.createElement("div", {
                          className: Vt.a.broadcast_settings_icon,
                          "data-tooltip-text": Object(Ce.f)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${we.d.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      c.a.createElement("div", {
                        className: this.state.bExpanded
                          ? Vt.a.bordered_corner_expanded
                          : Vt.a.bordered_corner_shrinked,
                        "data-tooltip-text": Object(Ce.f)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      c.a.createElement(
                        "div",
                        { className: Vt.a.bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  this.state.bExpanded &&
                    c.a.createElement(
                      "div",
                      {
                        className: Object(ot.a)({
                          [Vt.a.container]: !0,
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
                      c.a.createElement(Xt, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      this.state.bExpanded &&
                        c.a.createElement(Kt, { stream: e, bMultistream: o })
                    )
                ),
                Boolean(
                  r && r.jsondata && r.jsondata.broadcast_item_drops_enabled
                ) && c.a.createElement(Gt, { event: r }),
                this.state.bExpanded &&
                  c.a.createElement(
                    "div",
                    { className: `${r ? Vt.a.Event : ""}` },
                    c.a.createElement(Kt, { stream: e, bMultistream: o })
                  ),
                c.a.createElement("div", { className: Vt.a.clear_div })
              )
            );
          }
          return c.a.createElement("div", {
            className: "NoBroadcastAvailable",
          });
        }
      });
      Object(a.b)([lt.b], Jt.prototype, "ToggleBroadcastExpandShrink", null),
        Object(a.b)([lt.b], Jt.prototype, "OnShrinkTransitionEnd", null),
        Object(a.b)([lt.b], Jt.prototype, "onStreamSelect", null),
        Object(a.b)([lt.b], Jt.prototype, "PlayTopNonVOD", null),
        (Jt = At = Object(a.b)([n.a], Jt));
      t.default = Jt;
      class Xt extends c.a.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = c.a.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = zt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(It.e)(e, 7, this.props.stream.snr),
            Object(qt.a)() && Object(qt.a)().AddEvent(1006),
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
            { className: Vt.a.wrapper },
            c.a.createElement(
              xt,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              c.a.createElement(
                "div",
                {
                  className: Object(ot.a)({
                    [Vt.a.video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [Vt.a.WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                c.a.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? Vt.a.broadcast_floating
                      : Vt.a.video_container,
                  },
                  this.state.bPopout &&
                    c.a.createElement(Qt, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  c.a.createElement(
                    "div",
                    { className: Vt.a.BroadcastPlayerContainer },
                    c.a.createElement(ft.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: 6,
                      bStartMuted: this.props.bStartMuted,
                      fnRenderBroadcastContext: this.props
                        .fnRenderBroadcastContext,
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
      Object(a.b)([lt.b], Xt.prototype, "CloseBroadcastPopup", null),
        Object(a.b)([lt.b], Xt.prototype, "OnEnter", null),
        Object(a.b)([lt.b], Xt.prototype, "OnLeave", null);
      let Kt = class extends c.a.Component {
        ConstructBroadcastLink() {
          let e = this.props.stream;
          const t = zt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          let r = $t.list.find(
            (r) =>
              r.appid == t &&
              (!r.broadcasterAccountID || r.broadcasterAccountID == e.accountid)
          );
          if (r) {
            let e = r.url;
            return (
              (we.d.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (e = "steam://openurl/" + e),
              c.a.createElement(
                "a",
                { href: e },
                Object(Ce.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
              )
            );
          }
          {
            let e = this.props.stream.steamid,
              t = we.d.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return c.a.createElement(
              "a",
              {
                href: t,
                className: Vt.a.external_link,
                "data-tooltip-text": Object(Ce.f)(
                  "#BroadcastWatch_View_Broadcast_Page"
                ),
              },
              c.a.createElement(nt.E, null)
            );
          }
        }
        OnToggleChat(e) {
          e.preventDefault();
          const t = zt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(It.e)(
            t,
            "show" === It.a.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            It.a.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = zt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(It.e)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = this.ConstructBroadcastLink(),
            t = "remove" != It.a.Get().GetChatVisibility(),
            r = "hide" === It.a.Get().GetChatVisibility();
          let a = Number.parseInt(
            "" +
              zt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return c.a.createElement(
            "div",
            { className: Object(ot.a)(Vt.a.viewer_bar, "viewer_bar") },
            c.a.createElement(
              "div",
              { className: Object(ot.a)(Vt.a.viewer_count, "viewer_count") },
              c.a.createElement(nt.zb, null),
              a.toLocaleString(Ce.e.GetPreferredLocales())
            ),
            c.a.createElement(
              "div",
              { className: Object(ot.a)(Vt.a.viewer_links, "viewer_links") },
              Boolean(t && !r && this.props.bMultistream) &&
                c.a.createElement(
                  "div",
                  { className: Vt.a.chat_link },
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: Vt.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(Ce.f)("#sale_three_section_show_streams")
                  )
                ),
              t &&
                c.a.createElement(
                  "div",
                  { className: Vt.a.chat_link },
                  c.a.createElement(nt.l, null),
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: Vt.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(Ce.f)(
                      r
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              t && c.a.createElement("span", { className: Vt.a.ChatToggle }),
              c.a.createElement(
                "a",
                {
                  href:
                    we.d.STORE_BASE_URL +
                    "account/preferences/#store_broadcast_settings",
                  target: we.d.IN_CLIENT ? void 0 : "_blank",
                  className: Vt.a.settings_link,
                  "data-tooltip-text": Object(Ce.f)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                c.a.createElement(nt.fb, null)
              ),
              e
            )
          );
        }
      };
      Object(a.b)([lt.b], Kt.prototype, "OnToggleChat", null),
        Object(a.b)([lt.b], Kt.prototype, "onWatchBroadcastPage", null),
        (Kt = Object(a.b)([n.a], Kt));
      class Yt extends c.a.Component {
        render() {
          let e = this.props.ImgUrl;
          return c.a.createElement(
            c.a.Fragment,
            null,
            e &&
              c.a.createElement("img", {
                className: Vt.a.side_panels,
                src: this.props.ImgUrl,
              }),
            !e && c.a.createElement("div", { className: Vt.a.side_panels })
          );
        }
      }
      const Qt = Object(n.a)((e) => {
        const { steamIDBroadcast: t } = e,
          r = zt.a.GetOrCreateBroadcastInfo(t).m_nAppID,
          [a] = Object(vt.b)(r, {});
        return c.a.createElement(
          "div",
          { className: [Vt.a.PopOutVideoTitleBar, Vt.a.NoSeslect].join(" ") },
          Boolean(a)
            ? c.a.createElement(
                Ot.a,
                { type: "app", id: r, className: Vt.a.PopOutVideoTitleText },
                Object(Ce.f)("#StoreBroadcast_Detault_popout_Title")
              )
            : c.a.createElement(
                "div",
                { className: Vt.a.PopOutVideoTitleText },
                Object(Ce.f)("#StoreBroadcast_Detault_popout_Title")
              ),
          c.a.createElement(
            "button",
            {
              className: Vt.a.PopOutVideoCloseButton,
              "data-tooltip-text": Object(Ce.f)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            c.a.createElement(nt.Db, null)
          )
        );
      });
      function Zt(e, t) {
        var r;
        const a = zt.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          i = Lt.a.Get().GetApp(a);
        return e &&
          (null === (r = null == i ? void 0 : i.GetAssets()) || void 0 === r
            ? void 0
            : r.GetHeaderURL())
          ? parseInt(Vt.a.strStreamIconCapsuleArtHeight)
          : parseInt(Vt.a.strStreamIconScreenshotArtHeight);
      }
      function er(e) {
        const {
            curStream: t,
            onStreamSelect: r,
            fnFilterStreams: a,
            bShowCapsuleArt: i,
            broadcastEmbedContext: s,
          } = e,
          n = Object(l.useRef)(),
          o = Object(l.useMemo)(() => {
            const e = It.a
              .Get()
              .GetStreams(s)
              .filter((e) => !a || a(e));
            return Object(It.f)(e), e;
          }, [s, a]);
        return (
          Object(l.useEffect)(() => {
            if (n && n.current) {
              const e = o
                .map((e) => zt.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              Lt.a
                .Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (n.current) {
                    let e = 0;
                    for (const r of o) {
                      if (t.accountid == r.accountid) break;
                      e += Zt(i, r);
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
              className: Object(ot.a)({
                [Vt.a.side_panels]: !0,
                side_panels: !0,
                [Vt.a.multistream]: !0,
                [Vt.a.scrollingstreams]: o.length > 3,
              }),
            },
            o.map((e) => {
              var a;
              return c.a.createElement(tr, {
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
      function tr(e) {
        var t;
        const {
            onStreamSelect: r,
            bSelected: a,
            stream: i,
            bShowCapsuleArt: s,
          } = e,
          n = Object(o.d)(
            () => zt.a.GetOrCreateBroadcastInfo(i.steamid).m_nAppID
          ),
          [l] = Object(vt.b)(
            null !== (t = i.nAppIDVOD) && void 0 !== t ? t : n,
            { include_assets: !0 }
          );
        if (!Object(It.d)(i)) return null;
        const d = s && (null == l ? void 0 : l.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + i.viewer_count),
          u = !Number.isNaN(m),
          h = !!i.nAppIDVOD && (null == l ? void 0 : l.GetName());
        return c.a.createElement(
          "div",
          {
            className: Object(ot.a)({
              [Vt.a.stream_icon_and_viewer_container]: !0,
              [Vt.a.stream_featured]:
                i.current_selection_priority == It.b.k_eFeatured,
              [Vt.a.display_capsule_art]: Boolean(d),
            }),
          },
          c.a.createElement(
            Ot.b,
            { type: "app", id: n },
            c.a.createElement(
              Dt.a,
              {
                className: Vt.a.stream_icon_container,
                onClick: () => r && r(i),
                rootMargin: "100px 0px 100px 0px",
              },
              c.a.createElement(rr, {
                strThumbnail: i.thumbnail_http_address,
                bSelected: a,
                strCapsuleArtURL: d,
              }),
              a &&
                c.a.createElement("div", { className: Vt.a.stream_icon_arrow })
            )
          ),
          c.a.createElement(
            "div",
            {
              className: Object(ot.a)(Vt.a.viewer_count, !u && Vt.a.vod_title),
            },
            u
              ? c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(nt.zb, null),
                  " ",
                  m.toLocaleString(Ce.e.GetPreferredLocales())
                )
              : h
          )
        );
      }
      function rr(e) {
        const { strCapsuleArtURL: t, strThumbnail: r, bSelected: a } = e,
          i = a ? Vt.a.stream_icon_selected : Vt.a.stream_icon;
        if (t) {
          const e = [t];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement("img", {
              className: Object(ot.a)(i, Vt.a.stream_icon_hide_on_hover),
              src: t,
            }),
            c.a.createElement(Pt.b, {
              className: Object(ot.a)(i, Vt.a.stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return c.a.createElement("img", { className: i, src: r });
      }
      function ar(e) {
        const { stream: t, orientation: r } = e,
          a = "below" == r,
          i = Object(o.d)(() => zt.a.GetBroadcast(t.steamid));
        return i
          ? c.a.createElement(
              "div",
              {
                className: Object(ot.a)({
                  [Vt.a.chat_below_container]: a,
                  [Vt.a.chat_rightside_container]: !a,
                  [Vt.a.store_chat_ctn]: !0,
                }),
              },
              c.a.createElement(
                "div",
                { className: Vt.a.ChatContainer },
                c.a.createElement(_t, {
                  emoticonStore: It.g,
                  watchLocation: 6,
                  steamID: t.steamid,
                  broadcastID: i.m_ulBroadcastID,
                })
              )
            )
          : null;
      }
    },
    C1a2: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return m;
      }),
        r.d(t, "a", function () {
          return u;
        }),
        r.d(t, "b", function () {
          return h;
        });
      var a = r("mrSG"),
        i = r("/cMS"),
        s = r("q1tI"),
        n = r("rmVU"),
        o = r("Ys0h"),
        l = r("2VXD"),
        c = r("f5iL"),
        d = r("/Q1a");
      function m() {
        const e = Object(l.a)("usePartnerStoreBrowseAPI"),
          [t, r] = Object(s.useState)(!1);
        return (
          Object(s.useEffect)(() => {
            (function (e = !1) {
              return Object(a.a)(this, void 0, void 0, function* () {
                if (e && o.a.BIsInitialized()) return;
                const t = Object(d.h)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                Object(c.a)(Boolean(t), "require partnerbrowse_webapi_token");
                const r = new n.a(d.d.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != d.d.WEB_UNIVERSE && "beta" != d.d.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  u(t),
                  o.a.Initialize(r, d.k.is_partner_member)
                );
              });
            })().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || r(!0);
            });
          }, []),
          t
        );
      }
      function u(e) {
        i.a.BIsInitialized() || i.a.Initialize(new n.a(d.d.WEBAPI_BASE_URL, e));
      }
      function h(e) {
        return i.a.BIsInitialized() || u(e || null), !0;
      }
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
    kQFG: function (e, t, r) {},
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
          return re;
        }),
        r.d(t, "LinkOverlay", function () {
          return ie;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("2vnA"),
        o = r("TyAF"),
        l = r("q1tI"),
        c = r("uzoi"),
        d = (r("Zdsb"), r("pC2t")),
        m = (r("/0nC"), r("lfGQ")),
        u = (r("ZBhF"), r("3XYX")),
        h = r("Ys0h"),
        b = r("hCpY"),
        _ = r("3u1o");
      class p extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_schUpdate = new _.b()),
            (this.m_bSetupComplete = !1);
        }
        componentDidMount() {
          0 == this.props.updateRate && this.updateCanvas();
        }
        componentWillUnmount() {
          this.m_schUpdate.Cancel();
        }
        componentDidUpdate() {
          this.updateCanvas();
        }
        BindCanvasRef(e) {
          this.m_elCanvas = e;
        }
        updateCanvas() {
          if (
            null == this.props.elementRef ||
            null == this.m_elCanvas ||
            this.m_bSetupComplete
          )
            return;
          let e = this.props.scaleFactor || [1, 1],
            t = this.props.elementRef,
            r = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let a = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor
            ),
            i = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor
            );
          (this.m_elCanvas.width = a),
            (this.m_elCanvas.height = i),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let s = () => {
            this.m_Context.drawImage(t, 0, 0, a * e[0], i * e[1]),
              r > 0 && this.m_schUpdate.Schedule(r, s);
          };
          s(), (this.m_bSetupComplete = !0);
        }
        render() {
          return l.createElement("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      Object(a.b)([b.b], p.prototype, "BindCanvasRef", null),
        Object(a.b)([b.b], p.prototype, "updateCanvas", null);
      var g = r("SS8s"),
        B = r("VeD8"),
        S = r("pQ8y"),
        y = r("GbHM");
      r("kQFG");
      class f extends l.Component {
        render() {
          let e = this.props,
            {
              keyExtractor: t,
              style: r,
              duration: i,
              className: s,
              children: n,
            } = e,
            o = Object(a.c)(e, [
              "keyExtractor",
              "style",
              "duration",
              "className",
              "children",
            ]);
          const c = Object.assign(Object.assign({}, r || {}), {
            transitionDuration: i / 1e3 + "s",
          });
          return l.createElement(
            B.a,
            Object.assign({}, o, { className: Object(y.a)("crossfade", s) }),
            l.createElement(
              S.a,
              {
                classNames: "crossfade-anim",
                timeout: i || 500,
                key: t(),
                style: c,
              },
              n
            )
          );
        }
      }
      class C extends l.Component {
        render() {
          const e = this.props,
            { src: t } = e,
            r = Object(a.c)(e, ["src"]),
            i = { backgroundImage: `url(${t})` };
          return l.createElement(
            f,
            Object.assign({ style: i, keyExtractor: () => t }, r),
            l.createElement("div", { className: "crossfade-img" })
          );
        }
      }
      var v = r("4EJs"),
        w = r("/IT7"),
        M = r("e356"),
        O = r("tQrp"),
        R = r("rSrx"),
        T = r("GXif"),
        j = r("7VqR"),
        F = r("/Q1a"),
        E = (r("2mvG"), r("JsFJ")),
        z = r("VnJP"),
        I = r("Pmtj"),
        W = r.n(I),
        P = r("kWcV");
      function D() {
        return l.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          Object(T.f)("#DASHPlayerControls_IsReplay")
        );
      }
      const N = Object(o.a)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let r = u.b.Loading,
          a = "";
        if (t) {
          (r = t.GetBroadcastState()), (a = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          r == u.b.Ready && e && ((r = u.b.Loading), (a = ""));
        }
        if (t && r != u.b.Error && t.GetUserInputNeeded()) return null;
        if (r == u.b.Ready) return null;
        let i = r == u.b.Loading;
        return l.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
          },
          i && l.createElement(P.a, null),
          !i &&
            l.createElement(
              "div",
              { className: "BroadcastVideoWatchState_Text" },
              a
            )
        );
      });
      class x extends l.Component {
        OnClick() {
          u.a.UserInputClickVideo(this.props.video);
        }
        render() {
          return l.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            l.createElement(M.Y, null),
            l.createElement(
              "span",
              null,
              Object(T.f)("#DASHPlayerControls_ClickToPlay")
            )
          );
        }
      }
      Object(a.b)([b.b], x.prototype, "OnClick", null);
      r("pJv3");
      let k = class extends l.Component {
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
              l.createElement(M.Eb, null)
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_BufferingResolution"),
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
              Object(T.f)("#DASHPlayerStats_PlaybackResolution"),
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
              Object(T.f)("#DASHPlayerStats_HtmlResolution"),
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
              Object(T.f)("#DASHPlayerStats_ContentServer"),
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
              Object(T.f)("#DASHPlayerStats_StallEvents"),
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
              Object(T.f)("#DASHPlayerStats_FailedDownloads"),
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
              Object(T.f)("#DASHPlayerStats_TimeToFirstFrame"),
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
              Object(T.f)("#DASHPlayerStats_PlaybackRate"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay()
              )
            ),
            l.createElement(U, { stats: e })
          );
        }
      };
      Object(a.b)([b.b], k.prototype, "HideStats", null),
        (k = Object(a.b)([o.a], k));
      let U = class extends l.Component {
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
              let i = Object(T.f)(
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
            let t = Object(T.f)(
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
              Object(T.f)("#DASHPlayerStats_BytesReceived"),
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
                Object(T.f)("#DASHPlayerStats_DroppedFrames"),
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
              Object(T.f)("#DASHPlayerStats_VideoBuffered"),
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
              Object(T.f)("#DASHPlayerStats_AudioBuffered"),
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
              Object(T.f)("#DASHPlayerStats_BandwidthRequired"),
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
              Object(T.f)("#DASHPlayerStats_BandwidthVideo"),
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
              Object(T.f)("#DASHPlayerStats_BandwidthNums"),
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
              Object(T.f)("#DASHPlayerStats_DownloadNums"),
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
              Object(T.f)("#DASHPlayerStats_ActiveDownloads"),
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
              Object(T.f)("#DASHPlayerStats_VideoDownloadProgress"),
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
              Object(T.f)("#DASHPlayerStats_DroppingFrames"),
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
              Object(T.f)("#DASHPlayerStats_CurrentFPS"),
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
      U = Object(a.b)([o.a], U);
      r("bFkU");
      const V = 15;
      let G = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_schHideControls = new _.b()),
            (this.m_schUnmountControls = new _.b()),
            (this.m_elBroadcastPlayer = null),
            (this.m_bMouseDown = !1),
            (this.m_elMouseDown = null),
            (this.m_listeners = new _.c()),
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
          e && (u.a.StopVideo(e), this.setState({ video: null }));
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
              h.a
                .Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const e = h.a.Get().GetApp(this.props.nAppIDVOD),
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
                (t = u.a.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC
                ))
              : this.props.broadcastClipID
              ? e &&
                (t = u.a.CreateClipVideo(
                  e,
                  this.props.broadcastClipID,
                  this.props.watchLocation
                ))
              : this.props.nAppIDVOD &&
                e &&
                ((t = u.a.CreateVODVideo(
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
            (Object(d.a)(
              l.createElement(g.c, null, this.GetContextMenuItems()),
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
          let a = Object(m.a)(`${F.d.STORE_BASE_URL}app/${r.m_strAppId}`);
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
                g.b,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                },
                Object(T.f)("#Broadcast_VideoContext_ToggleStats")
              )
            ),
            r &&
              "0" != r.m_strAppId &&
              Number.parseInt(r.m_strAppId) != u.d &&
              e.push(
                l.createElement(
                  g.d,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  Object(T.f)("#Broadcast_VideoContext_OpenStore")
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
            (Object(R.b)(this.m_elBroadcastPlayer)
              ? Object(R.g)(this.m_elBroadcastPlayer)
              : Object(R.u)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = Object(R.b)(this.m_elBroadcastPlayer);
          this.setState({ bFullscreen: t });
        }
        BHideVideoControls() {
          let e = this.state.video;
          return (
            !e ||
            !!e.GetUserInputNeeded() ||
            u.a.GetBroadcastState(e) == u.b.Error
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
                  title: Object(T.f)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                })
              ),
            d.push(
              l.createElement("div", {
                key: "FullscreenToggle",
                title: Object(T.f)("#Broadcast_View_Fullscreen"),
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
            h && l.createElement("div", { className: W.a.BroadcastContext }, h),
            a && l.createElement(D, null),
            this.props.showVideoBackgroundBlur &&
              l.createElement(p, {
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
              ? l.createElement(ie, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            o &&
              l.createElement("img", {
                loading: "lazy",
                className: Object(y.a)(
                  W.a.BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg"
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            m &&
              l.createElement(A, {
                video: e,
                actions: d,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            u && l.createElement(L, { onClick: this.props.onRequestClose }),
            r &&
              l.createElement(k, {
                stats: e.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            l.createElement(N, { video: e }),
            n && l.createElement(x, { video: e })
          );
        }
      };
      Object(a.b)([b.b], G.prototype, "BindBroadcastPlayerRef", null),
        Object(a.b)([b.b], G.prototype, "BindVideoRef", null),
        Object(a.b)([b.b], G.prototype, "OnMouseDown", null),
        Object(a.b)([b.b], G.prototype, "OnMouseUp", null),
        Object(a.b)([b.b], G.prototype, "OnMouseMove", null),
        Object(a.b)([b.b], G.prototype, "OnMouseLeave", null),
        Object(a.b)([b.b], G.prototype, "HideControls", null),
        Object(a.b)([b.b], G.prototype, "UmountControls", null),
        Object(a.b)([b.b], G.prototype, "ShowStatsView", null),
        Object(a.b)([b.b], G.prototype, "OnContextMenu", null),
        Object(a.b)([b.b], G.prototype, "ToggleStatsView", null),
        Object(a.b)([b.b], G.prototype, "ShowStorePage", null),
        Object(a.b)([b.b], G.prototype, "CloseStats", null),
        Object(a.b)([b.b], G.prototype, "OnToggleFullscreen", null),
        Object(a.b)([b.b], G.prototype, "OnFullscreenChange", null),
        (G = Object(a.b)([o.a], G));
      t.default = G;
      let A = class extends l.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return l.createElement(
            "div",
            { className: "videoControls" },
            l.createElement(re, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            l.createElement(
              "div",
              { className: "videoControlsBottom" + (t ? "" : " noSegments") },
              l.createElement(te, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              l.createElement(
                "div",
                { className: "STV_BroadcastController" },
                l.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                l.createElement(H, { video: e }),
                l.createElement(q, { video: e }),
                l.createElement(K, {
                  video: e,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                })
              )
            )
          );
        }
      };
      A = Object(a.b)([o.a], A);
      class L extends l.PureComponent {
        render() {
          return this.props.onClick
            ? l.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                l.createElement(M.Eb, null)
              )
            : null;
        }
      }
      class H extends l.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(V);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return l.createElement(
            "div",
            { className: "videoControlsButtons PlayControls" },
            l.createElement(J, { video: e }),
            t &&
              l.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                l.createElement(M.R, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                l.createElement("div", { className: "jumpAheadValue" }, V)
              ),
            l.createElement($, { video: e }),
            t &&
              l.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                l.createElement(M.R, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                l.createElement("div", { className: "jumpAheadValue" }, V)
              ),
            t && l.createElement(X, { video: e })
          );
        }
      }
      Object(a.b)([b.b], H.prototype, "OnJumpBackward", null),
        Object(a.b)([b.b], H.prototype, "OnJumpForward", null);
      const q = Object(o.a)((e) => {
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
            l.createElement(M.R, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            l.createElement(
              "div",
              { className: "jumpGoLive" },
              Object(T.f)(
                t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive"
              )
            )
          )
        );
      });
      let $ = class extends l.Component {
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
            e ? l.createElement(M.Y, null) : l.createElement(M.X, null)
          );
        }
      };
      Object(a.b)([b.b], $.prototype, "OnTogglePlayPause", null),
        ($ = Object(a.b)([o.a], $));
      let J = class extends l.Component {
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
            l.createElement(M.R, { bHidePostArrow: !0, bFlipHorizontal: !0 })
          );
        }
      };
      Object(a.b)([n.n], J.prototype, "has_previous_marker", null),
        Object(a.b)([b.b], J.prototype, "OnJumpToPreviousMarkerClicked", null),
        (J = Object(a.b)([o.a], J));
      let X = class extends l.Component {
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
            l.createElement(M.R, { bHidePostArrow: !0, bFlipHorizontal: !1 })
          );
        }
      };
      Object(a.b)([n.n], X.prototype, "has_next_marker", null),
        Object(a.b)([b.b], X.prototype, "OnJumpToNextMarkerClicked", null),
        (X = Object(a.b)([o.a], X));
      class K extends l.Component {
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
            Object(R.e)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            Object(R.e)(this.m_elSubtitlesPanel.current, e.target) ||
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
                  g.b,
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
                  g.d,
                  { key: "statsToggle", onSelected: this.OnShowStats },
                  Object(T.f)("#Broadcast_VideoContext_ToggleStats"),
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
                  g.b,
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
                  Object(T.f)("#Broadcast_None")
                )
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              s.push(
                l.createElement(
                  g.b,
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
                  l.createElement(M.r, null)
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
              l.createElement(M.fb, null)
            ),
            l.createElement(Y, { video: r }),
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
      Object(a.b)([b.b], K.prototype, "OnVideoControlClick", null),
        Object(a.b)([b.b], K.prototype, "OnSubtitlesClick", null),
        Object(a.b)([b.b], K.prototype, "OnMouseUp", null),
        Object(a.b)([b.b], K.prototype, "bindSettingsButton", null),
        Object(a.b)([b.b], K.prototype, "BindSettingsPanel", null),
        Object(a.b)([b.b], K.prototype, "OnShowStats", null);
      let Y = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.k_nHideSliderTimeout = 1500),
            (this.m_bShowSlider = true),
            (this.m_schHideSlider = new _.b()),
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
                  l.createElement(M.Ab, null)
                ),
                l.createElement(Q, { video: e, onDrag: this.OnChildDrag })
              )
            )
          );
        }
      };
      Object(a.b)([n.C], Y.prototype, "m_bShowSlider", void 0),
        Object(a.b)([b.b], Y.prototype, "ToggleMute", null),
        Object(a.b)([b.b], Y.prototype, "OnMouseEnter", null),
        Object(a.b)([b.b], Y.prototype, "OnMouseLeave", null),
        Object(a.b)([b.b], Y.prototype, "OnChildDrag", null),
        (Y = Object(a.b)([o.a], Y));
      let Q = class extends l.Component {
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
            a = j.c(t, r.left, r.right, 0, 1),
            i = j.a(a, 0, 1),
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
      Object(a.b)([b.b], Q.prototype, "OnMouseDown", null),
        Object(a.b)([b.b], Q.prototype, "OnMouseMove", null),
        Object(a.b)([b.b], Q.prototype, "OnMouseUp", null),
        Object(a.b)([n.k], Q.prototype, "SetVolumeWithCoord", null),
        (Q = Object(a.b)([o.a], Q));
      const Z = (e) =>
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
            l.createElement(M.eb, null)
          )
        );
      function ee(e) {
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
      let te = class extends l.Component {
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
            const e = j.a(i, r, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = j.a(i, t.m_editorStartTime + 5, a);
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
              u.c.Timeline
            ),
            a = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), u.c.Timeline),
            i = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              u.c.Timeline
            );
          i < 0.05 && (i = 0);
          let s = j.a(r, 0, 100).toFixed(1) + "%",
            n = j.a(a, 0, 100).toFixed(1) + "%",
            o = j.a(i, 0, 100).toFixed(1) + "%",
            c = {},
            d = {},
            m = {},
            h = {};
          t
            ? ((h.left = s), (c.width = s), (d.width = n), (m.width = o))
            : ((h.left = n), (d.width = n), (m.width = o));
          let b = Object(z.d)(e.GetPlaybackTime()),
            _ = Object(z.d)(this.state.nHoverValue),
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
            let a = e.GetPercentOffsetFromTime(t.nTime, u.c.Timeline);
            a < 0 ||
              a > 100 ||
              B.push(
                l.createElement(Z, {
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
            let a = e.GetPercentOffsetFromTime(t.nTimeStart, u.c.Timeline);
            if (a > 100) return;
            let i = e.GetPercentOffsetFromTime(t.nTimeEnd, u.c.Timeline);
            i < 0 ||
              S.push(
                l.createElement(ee, {
                  key: r,
                  startPos: a,
                  endPos: i,
                  label: t.strTemplateName,
                  color: t.color,
                  onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                })
              );
          });
          const y = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              u.c.Timeline
            ),
            f = e.GetPercentOffsetFromTime(e.m_editorEndTime, u.c.Timeline),
            C = this.props.bIncludeClipEditor
              ? [
                  l.createElement(Z, {
                    key: "start",
                    pos: y,
                    label: Object(T.f)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  l.createElement(Z, {
                    key: "end",
                    pos: f,
                    label: Object(T.f)("#DASHPlayerControls_End"),
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
                  C,
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
                    { className: "STV_timelineGrabber_Wrapper", style: h },
                    l.createElement(
                      "div",
                      { className: "STV_timelineGrabber" + g },
                      l.createElement(
                        "div",
                        { className: "STV_timelineGrabberArrow" },
                        l.createElement(M.db, null)
                      )
                    )
                  )
                )
              )
            )
          );
        }
      };
      Object(a.b)([b.b], te.prototype, "OnMouseDown", null),
        Object(a.b)([b.b], te.prototype, "OnMouseMove", null),
        Object(a.b)([b.b], te.prototype, "OnMouseUp", null),
        Object(a.b)([b.b], te.prototype, "OnKeyDown", null),
        Object(a.b)([b.b], te.prototype, "OnMouseHoverMove", null),
        Object(a.b)([b.b], te.prototype, "OnMouseHoverLeave", null),
        Object(a.b)([b.b], te.prototype, "AdjustHoverForClientX", null),
        Object(a.b)([b.b], te.prototype, "OnSegmentClick", null),
        Object(a.b)([b.b], te.prototype, "OnMarkerMouseEnter", null),
        Object(a.b)([b.b], te.prototype, "OnMarkerMouseLeave", null),
        (te = Object(a.b)([o.a], te));
      let re = class extends l.Component {
        constructor() {
          super(...arguments), (this.state = { info: null });
        }
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info && (u.a.StopInfo(t.info), (t.info = null)), e.steamID)
          ) {
            return { info: u.a.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && u.a.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return E.a.stream[e]
            ? l.createElement(ae, {
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
          e.m_nViewerCount &&
            (t = e.m_nViewerCount.toLocaleString(T.e.GetPreferredLocales()));
          let r = E.a.bValid && E.a.stream && E.a.stream[e.m_steamIDBroadcast],
            a =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || r);
          return l.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              l.createElement(C, {
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
                      l.createElement(M.zb, null),
                      Object(T.l)("#Broadcast_ViewerCount", t)
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
            a &&
              l.createElement(v.j, {
                id:
                  E.a.bValid && E.a.stream && E.a.stream[e.m_steamIDBroadcast]
                    ? E.a.appID
                    : parseInt(e.m_strAppId),
                type: "game",
              })
          );
        }
      };
      re = Object(a.b)([o.a], re);
      class ae extends l.Component {
        showContextMenu(e) {
          const { options: t, value: r, onChange: a } = this.props,
            i = Object.keys(t).map((e) =>
              l.createElement(
                g.b,
                { key: e, onSelected: () => a(e), bChecked: e === r },
                Object(T.f)(t[e])
              )
            );
          Object(d.a)(l.createElement(g.c, null, i), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            r = t[e];
          return l.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            l.createElement("span", null, " - ", Object(T.f)(r)),
            l.createElement(
              "div",
              { className: "ContextMenuButton" },
              l.createElement(M.x, null)
            )
          );
        }
      }
      Object(a.b)([b.b], ae.prototype, "showContextMenu", null);
      let ie = class extends l.Component {
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
                    const t = Object(c.b)(e.url);
                    return l.createElement(
                      O.b,
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
                  l.createElement(w.a, {
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
                  Object(T.f)("#SteamTV_AddLinkRegion")
                )
            ),
            l.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              l.createElement(
                "div",
                null,
                Object(T.f)("#SteamTV_LinkRegionReserved")
              )
            )
          );
        }
      };
      Object(a.b)([b.b], ie.prototype, "AddLinkRegion", null),
        Object(a.b)([b.b], ie.prototype, "LoadLinkRegion", null),
        Object(a.b)([b.b], ie.prototype, "OnSaveRegions", null),
        Object(a.b)([b.b], ie.prototype, "DeleteRegion", null),
        Object(a.b)([b.b], ie.prototype, "UpdatePanel", null),
        (ie = Object(a.b)([o.a], ie));
    },
  },
]);
