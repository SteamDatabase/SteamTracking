/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50970],
    {
      71698: (ae, fe, s) => {
        "use strict";
        s.d(fe, { H: () => i, s: () => j });
        var e = s(90626),
          F = s(41623);
        let f = 0;
        function i(ge, O) {
          (0, e.useEffect)(() => {
            if (!(ge || O))
              return (
                f++,
                () => {
                  --f == 0 && (0, F.s)();
                }
              );
          }, [ge, O]);
        }
        function j(ge) {
          const [O, $] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const X = window.setTimeout(() => $(!0), ge);
            return () => window.clearTimeout(X);
          }, [ge]),
            i(O);
        }
      },
      94699: (ae, fe, s) => {
        "use strict";
        s.d(fe, {
          w2: () => w,
          wN: () => I,
          Dw: () => U,
          vB: () => z,
          D$: () => e,
          bH: () => p,
        });
        var e = {};
        s.r(e), s.d(e, { w4: () => ge });
        var F = s(80613),
          f = s.n(F),
          i = s(75245),
          j = s(35038);
        const ge = 0,
          O = 1,
          $ = 2,
          X = 3;
        function ie(d) {
          return "unknown ENewsRecommendationState ( " + d + " )";
        }
        class _ extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _.prototype.gid || i.Sg(_.M()),
              F.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    type: {
                      n: 3,
                      d: 0,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    url: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    associated_apps: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    poll_interval: {
                      n: 6,
                      d: 300,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    kv_description: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    kv_filter: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    publish_to_clan_account_id: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    language: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_error: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_update: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_checked: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
          }
          toObject(t = !1) {
            return _.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(_.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(_.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new _();
            return _.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(_.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return _.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(_.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsFeedDef";
          }
        }
        class w extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.gid || i.Sg(w.M()),
              F.Message.initialize(this, t, 0, -1, [11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    news_feed_gid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    title: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    url: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    author: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    rtime_date: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    contents: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    commited: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                    deleted: { n: 9, br: i.qM.readBool, bw: i.gp.writeBool },
                    tags: { n: 10, br: i.qM.readString, bw: i.gp.writeString },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    recommendation_state: {
                      n: 12,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    received_compensation: {
                      n: 13,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    received_for_free: {
                      n: 14,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    blurb: { n: 15, br: i.qM.readString, bw: i.gp.writeString },
                    event_subtitle: {
                      n: 16,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    event_summary: {
                      n: 17,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(t = !1) {
            return w.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(w.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(w.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new w();
            return w.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(w.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(w.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsFeedPostDef";
          }
        }
        class k extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.content || i.Sg(k.M()),
              F.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    content: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    preserve_newlines: {
                      n: 2,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(k.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new k();
            return k.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(k.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(k.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_ConvertHTMLToBBCode_Request";
          }
        }
        class V extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.converted_content || i.Sg(V.M()),
              F.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    converted_content: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    found_html: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(V.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new V();
            return V.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(V.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(V.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_ConvertHTMLToBBCode_Response";
          }
        }
        class D extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              D.prototype.rss_message || i.Sg(D.M()),
              F.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    rss_message: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    unique_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    title: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    desc: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    jsondata: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    post: { n: 6, c: w },
                    valid_post: { n: 7, br: i.qM.readBool, bw: i.gp.writeBool },
                    post_error_msg: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = i.w0(D.M())), D.sm_mbf;
          }
          toObject(t = !1) {
            return D.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(D.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(D.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new D();
            return D.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(D.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return D.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(D.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsPartnerEventPreview";
          }
        }
        class U extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.rss_url || i.Sg(U.M()),
              F.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    rss_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    lang: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    clan_account_id: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = i.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(U.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new U();
            return U.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(U.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(U.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PreviewPartnerEvents_Request";
          }
        }
        class Y extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.rss_url || i.Sg(Y.M()),
              F.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    rss_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    results: { n: 2, c: D, r: !0, q: !0 },
                    error_msg: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = i.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(Y.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new Y();
            return Y.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(Y.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(Y.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PreviewPartnerEvents_Response";
          }
        }
        class T extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.clan_account_id || i.Sg(T.M()),
              F.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(T.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new T();
            return T.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(T.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(T.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetNewsFeedByRepublishClan_Request";
          }
        }
        class Z extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.feeds || i.Sg(Z.M()),
              F.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: { feeds: { n: 1, c: _, r: !0, q: !0 } },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = i.w0(Z.M())), Z.sm_mbf;
          }
          toObject(t = !1) {
            return Z.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(Z.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new Z();
            return Z.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(Z.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(Z.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetNewsFeedByRepublishClan_Response";
          }
        }
        class z extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.post || i.Sg(z.M()),
              F.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    post: { n: 1, c: w },
                    draft: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = i.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(z.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new z();
            return z.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(z.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(z.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PublishPartnerEvent_Request";
          }
        }
        class M extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.clan_event_gid || i.Sg(M.M()),
              F.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    news_post_gid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = i.w0(M.M())), M.sm_mbf;
          }
          toObject(t = !1) {
            return M.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(M.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(M.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new M();
            return M.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(M.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return M.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(M.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PublishPartnerEvent_Response";
          }
        }
        class I extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.news_feed_gid || i.Sg(I.M()),
              F.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    news_feed_gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    start_index: {
                      n: 2,
                      d: 0,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    amount: {
                      n: 3,
                      d: 100,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = i.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(I.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new I();
            return I.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(I.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(I.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetBatchPublishedPartnerEvent_Request";
          }
        }
        class m extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              m.prototype.clan_account_id || i.Sg(m.M()),
              F.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    news_feed_gid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    clan_event_gid: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                    news_post_gid: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                    news_url: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = i.w0(m.M())), m.sm_mbf;
          }
          toObject(t = !1) {
            return m.toObject(t, this);
          }
          static toObject(t, g) {
            return i.BT(m.M(), t, g);
          }
          static fromObject(t) {
            return i.Uq(m.M(), t);
          }
          static deserializeBinary(t) {
            let g = new (f().BinaryReader)(t),
              u = new m();
            return m.deserializeBinaryFromReader(u, g);
          }
          static deserializeBinaryFromReader(t, g) {
            return i.zj(m.MBF(), t, g);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, g) {
            i.i0(m.M(), t, g);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetBatchPublishedPartnerEvent_Response";
          }
        }
        var p;
        ((d) => {
          function t(N, ee, de) {
            return N.SendMsg(
              "News.ConvertHTMLToBBCode#1",
              (0, j.I8)(k, ee, de),
              V,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          d.ConvertHTMLToBBCode = t;
          function g(N, ee, de) {
            return N.SendMsg(
              "News.PreviewPartnerEvents#1",
              (0, j.I8)(U, ee, de),
              Y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          d.PreviewPartnerEvents = g;
          function u(N, ee, de) {
            return N.SendMsg(
              "News.GetNewsFeedByRepublishClan#1",
              (0, j.I8)(T, ee, de),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          d.GetNewsFeedByRepublishClan = u;
          function x(N, ee, de) {
            return N.SendMsg(
              "News.PublishPartnerEvent#1",
              (0, j.I8)(z, ee, de),
              M,
              { ePrivilege: 1 },
            );
          }
          d.PublishPartnerEvent = x;
          function E(N, ee, de) {
            return N.SendMsg(
              "News.GetBatchPublishedPartnerEvent#1",
              (0, j.I8)(I, ee, de),
              m,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          d.GetBatchPublishedPartnerEvent = E;
        })(p || (p = {}));
      },
      37656: (ae, fe, s) => {
        "use strict";
        s.d(fe, { w: () => M });
        var e = s(41735),
          F = s.n(e),
          f = s(14947),
          i = s(65946),
          j = s(90626),
          ge = s(27066),
          O = s(8323),
          $ = s(30096),
          X = s(3166),
          ie = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          w = (I, m, p, d) => {
            for (
              var t = d > 1 ? void 0 : d ? _(m, p) : m, g = I.length - 1, u;
              g >= 0;
              g--
            )
              (u = I[g]) && (t = (d ? u(m, p, t) : u(t)) || t);
            return d && t && ie(m, p, t), t;
          };
        const k = class Yt {
          constructor() {
            (0, f.Gn)(this);
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
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
          }
          clone() {
            const m = new Yt();
            return (
              (m.giveaway_id = this.giveaway_id),
              (m.seconds_until_drawing = this.seconds_until_drawing),
              (m.rtime_start = this.rtime_start),
              (m.rtime_end = this.rtime_end),
              (m.closed = this.closed),
              (m.winner_count = this.winner_count),
              m
            );
          }
        };
        w([f.sH], k.prototype, "giveaway_id", 2),
          w([f.sH], k.prototype, "seconds_until_drawing", 2),
          w([f.sH], k.prototype, "rtime_start", 2),
          w([f.sH], k.prototype, "rtime_end", 2),
          w([f.sH], k.prototype, "closed", 2),
          w([f.sH], k.prototype, "winner_count", 2);
        let V = k;
        const D = class et {
          constructor() {
            (0, f.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(m, p) {
            return m + "_" + p;
          }
          GetInfoByInstance(m, p) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(m, p),
            );
          }
          GetNextDrawChangeCallback(m) {
            let p = this.m_mapNextDrawChangeCallback.get(m);
            return (
              p ||
                ((p = new O.lu()), this.m_mapNextDrawChangeCallback.set(m, p)),
              p
            );
          }
          CopyToGiveaway(m, p) {
            p.closed != m.closed && (p.closed = m.closed),
              p.giveaway_id != m.giveaway_id && (p.giveaway_id = m.giveaway_id),
              p.rtime_start != m.rtime_start && (p.rtime_start = m.rtime_start),
              p.rtime_end != m.rtime_end && (p.rtime_end = m.rtime_end),
              p.winner_count != m.winner_count &&
                (p.winner_count = m.winner_count),
              p.seconds_until_drawing != m.seconds_until_drawing &&
                (p.seconds_until_drawing = m.seconds_until_drawing);
          }
          async ReloadGiveaway(m, p) {
            if (!m) return null;
            let d = X.TS.STORE_BASE_URL + "prizes/nextdraw/" + m,
              t = { origin: self.origin };
            const g = await F().get(d, { params: t }),
              u = (0, f.h5)(() => {
                let x = this.m_mapGiveawayIDToNextDrawInfo.get(m);
                if (
                  (x ||
                    ((x = new V()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(m, x)),
                  this.CopyToGiveaway(g.data, x),
                  p !== void 0)
                ) {
                  const E = this.GetKey(m, p);
                  let N = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(E);
                  N ||
                    ((N = new V()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(E, N)),
                    this.CopyToGiveaway(g.data, N);
                }
                return x;
              });
            return this.GetNextDrawChangeCallback(m).Dispatch(u), u;
          }
          static s_Singleton;
          static Get() {
            return (
              et.s_Singleton ||
                ((et.s_Singleton = new et()), et.s_Singleton.Init()),
              et.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let m = (0, X.Tc)("giveawaynextdraw", "application_config");
              if (m && m.giveaway_id) {
                let p = new V();
                this.CopyToGiveaway(m, p),
                  this.m_mapGiveawayIDToNextDrawInfo.set(m.giveaway_id, p);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        w([f.sH], D.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          w([f.XI], D.prototype, "CopyToGiveaway", 1);
        let U = D;
        const Y = class Wt {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Wt.s_GlobalInstance),
              (Wt.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(m, p) {
            if ((this.ClearRefreshInterval(), !m.closed)) {
              let t =
                m.seconds_until_drawing !== void 0 &&
                m.seconds_until_drawing <= 0 &&
                m.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(p, t);
            }
          }
          SetupCountDown(m, p) {
            m !== void 0 &&
              m > 0 &&
              (this.m_intervalCountDownID = window.setInterval(p, 1e3));
          }
        };
        w([ge.o], Y.prototype, "ClearRefreshInterval", 1),
          w([ge.o], Y.prototype, "ClearCountDown", 1),
          w([ge.o], Y.prototype, "SetupRefreshDataInterval", 1),
          w([ge.o], Y.prototype, "SetupCountDown", 1);
        let T = Y;
        function Z(I, m) {
          const p = U.Get().GetInfoByInstance(I, m.m_myInstanceNumber);
          !p ||
            p.seconds_until_drawing === void 0 ||
            ((p.seconds_until_drawing -= 1),
            p.seconds_until_drawing == 0 && m.ClearCountDown());
        }
        function z(I, m) {
          const p = U.Get().GetInfoByInstance(I, m.m_myInstanceNumber);
          p &&
            p.BIsValid() &&
            p.seconds_until_drawing !== void 0 &&
            p.seconds_until_drawing <= 0 &&
            !p.closed &&
            (m.ClearCountDown(),
            U.Get()
              .ReloadGiveaway(I, m.m_myInstanceNumber)
              .then((d) => {
                d && m.SetupCountDown(d.seconds_until_drawing, () => Z(I, m));
              }));
        }
        function M(I) {
          const [m] = (0, j.useState)(new T()),
            p = (0, $.CH)();
          (0, j.useEffect)(
            () => (
              U.Get()
                .ReloadGiveaway(I, m.m_myInstanceNumber)
                .then((x) => {
                  x &&
                    (m.SetupRefreshDataInterval(x, () => z(I, m)),
                    m.SetupCountDown(x.seconds_until_drawing, () => Z(I, m)),
                    p());
                }),
              () => {
                m.ClearRefreshInterval(), m.ClearCountDown();
              }
            ),
            [m, I, p],
          );
          const d = U.Get().GetInfoByInstance(I, m.m_myInstanceNumber),
            [t, g, u] = (0, i.q3)(() => [
              d?.winner_count,
              d?.closed,
              d?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !d || d.giveaway_id == null || !d.BStarted() || t === void 0,
            winner_count: t,
            closed: g,
            seconds_until_drawing: u,
          };
        }
      },
      35098: (ae, fe, s) => {
        "use strict";
        s.d(fe, { DW: () => w, js: () => ie, mK: () => Y, tb: () => U });
        var e = s(90626),
          F = s(80902),
          f = s(54806),
          i = s(99412),
          j = s(68312),
          ge = s(15369),
          O = s(5858),
          $ = s(76559),
          X = s(15860);
        function ie(M) {
          const I = (0, j.KV)(),
            m = e.useContext(D);
          return (0, F.I)(Y(m, I, M));
        }
        function _(M) {
          const I = React.useRef(void 0),
            m = ie(M);
          return m.data
            ? m
            : (I.current ||
                (I.current = new CPersonaStateImpl(
                  typeof M == "string"
                    ? new CSteamID(M)
                    : CSteamID.InitFromAccountID(M),
                )),
              { ...m, data: I.current });
        }
        function w(M) {
          const I = (0, j.KV)(),
            m = e.useContext(D);
          return (0, f.E)({ queries: M.map((p) => Y(m, I, p)) });
        }
        function k(M) {
          return ReactQueryClient.getQueryData(["PlayerSummary", M]);
        }
        function V(M) {
          const { loadPersonaState: I, children: m } = M,
            p = React.useMemo(() => ({ loadPersonaState: I }), [I]);
          return React.createElement(D.Provider, { value: p }, m);
        }
        const D = e.createContext({
          loadPersonaState: async (M, I) => {
            if (M == null) return null;
            const m = await Z(I).load(
              $.b.InitFromAccountID(M).ConvertTo64BitString(),
            );
            return z($.b.InitFromAccountID(M), m);
          },
        });
        function U() {
          return e.useContext(D);
        }
        function Y(M, I, m) {
          const p = typeof m == "string" ? new $.b(m).GetAccountID() : m;
          return {
            queryKey: ["PlayerSummary", p],
            queryFn: () => M.loadPersonaState(p, I),
            enabled: !!p,
          };
        }
        let T;
        function Z(M) {
          return (T ??= (0, X.c)(M));
        }
        function z(M, I) {
          let m = new O.Z(M);
          const p = I?.public_data,
            d = I?.private_data;
          return (
            (m.m_bInitialized = !!I),
            (m.m_ePersonaState = d?.persona_state ?? i.cU3),
            (m.m_strAvatarHash = p?.sha_digest_avatar
              ? (0, ge.Kx)(p.sha_digest_avatar)
              : O.dV),
            (m.m_strPlayerName = p?.persona_name ?? M.ConvertTo64BitString()),
            (m.m_strAccountName = d?.account_name),
            d?.persona_state_flags &&
              (m.m_unPersonaStateFlags = d?.persona_state_flags),
            d?.game_id && (m.m_gameid = d?.game_id),
            d?.game_server_ip_address &&
              (m.m_unGameServerIP = d?.game_server_ip_address),
            d?.lobby_steam_id && (m.m_game_lobby_id = d?.lobby_steam_id),
            d?.game_extra_info && (m.m_strGameExtraInfo = d?.game_extra_info),
            p?.profile_url && (m.m_strProfileURL = p.profile_url),
            m
          );
        }
      },
      57223: (ae, fe, s) => {
        "use strict";
        s.d(fe, { A: () => t });
        var e = s(41735),
          F = s.n(e),
          f = s(14947),
          i = s(3166),
          j = s(3685),
          ge = s(60298),
          O = s(35038),
          $ = s(94699),
          X = s(99412),
          ie = s(72604),
          _ = s(76559),
          w = s(77495);
        function k(g) {
          return "unknown EMsg ( " + g + " )";
        }
        function V(g) {
          return "unknown EClientPersonaStateFlag ( " + g + " )";
        }
        function D(g) {
          return "unknown EMsgClanAccountFlags ( " + g + " )";
        }
        function U(g) {
          return "unknown ESteamReviewScore ( " + g + " )";
        }
        function Y(g) {
          return "unknown ECodecUsagePlatform ( " + g + " )";
        }
        function T(g) {
          return "unknown ECodecUsageReason ( " + g + " )";
        }
        var Z = s(71742),
          z = s(34592),
          M = Object.defineProperty,
          I = Object.getOwnPropertyDescriptor,
          m = (g, u, x, E) => {
            for (
              var N = E > 1 ? void 0 : E ? I(u, x) : u, ee = g.length - 1, de;
              ee >= 0;
              ee--
            )
              (de = g[ee]) && (N = (E ? de(u, x, N) : de(N)) || N);
            return E && N && M(u, x, N), N;
          };
        class p {
          m_clanAccountID;
          m_clanSteamID;
          m_strRSSFeedURL = void 0;
          m_strRSSGID = void 0;
          m_rtimeRSSLastChecked = void 0;
          m_nPollIntervalSeconds = void 0;
          m_eRSSFeedLanguage = void 0;
          m_eCuratorLanguage = void 0;
          m_mapURLToPosted = new Map();
          constructor(u) {
            (0, f.Gn)(this),
              (this.m_clanAccountID = u.clanid),
              (this.m_clanSteamID = _.b.InitFromClanID(this.m_clanAccountID)),
              (this.m_strRSSFeedURL = u.rss_feed_url),
              (this.m_strRSSGID = u.rss_feed_gid),
              (this.m_eRSSFeedLanguage = u.rss_feed_language),
              (this.m_rtimeRSSLastChecked = u.rss_feed_last_checked),
              (this.m_nPollIntervalSeconds = u.poll_interval),
              (this.m_eCuratorLanguage = u.curation_language);
          }
          GetFeedLanguageHandleUnset() {
            return this.m_eRSSFeedLanguage == X.xPp
              ? this.m_eCuratorLanguage == X.xPp
                ? X.Bhc
                : this.m_eCuratorLanguage
              : this.m_eRSSFeedLanguage;
          }
          GetCuratorLanguage() {
            return this.m_eCuratorLanguage == X.xPp
              ? X.Bhc
              : this.m_eCuratorLanguage;
          }
          BHasSavedRSSURL() {
            return !!this.m_strRSSFeedURL;
          }
          GetRSSUrl() {
            return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
          }
          GetRSSLastRtimeChecked() {
            return this.m_rtimeRSSLastChecked;
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          GetClanAccountID() {
            return this.m_clanAccountID;
          }
          BHasSetupFeed(u) {
            return !!this.m_strRSSGID && this.m_strRSSFeedURL === u;
          }
          BIsAutomationEnabled() {
            return this.m_nPollIntervalSeconds > 0;
          }
          BHasFeedGID() {
            return !!this.m_strRSSGID;
          }
          async PreviewPartnerEventsFromRSSFeed(u) {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "PreviewPartnerEventsFromRSSFeed: User not logged in",
                ),
                null
              );
            const x = O.w.Init($.Dw);
            x.Body().set_rss_url(u),
              x.Body().set_lang(this.GetFeedLanguageHandleUnset()),
              x.Body().set_clan_account_id(this.GetClanAccountID());
            let E = await $.bH.PreviewPartnerEvents(
              t.Get().GetCuratorTransport(),
              x,
            );
            return (
              E.GetEResult() != ie.R &&
                console.error(
                  "PreviewPartnerEventsFromRSSFeed error: " +
                    E.GetEMsg() +
                    " " +
                    E.GetEResult(),
                ),
              E
            );
          }
          async FetchPublishedEvents(u = 100) {
            if (!this.BIsLoggedIn())
              return (
                console.error("FetchPublishedEvents: User not logged in"), null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "FetchPublishedEvents: Need to create a news feed first",
                ),
                null
              );
            const x = O.w.Init($.wN);
            x.Body().set_news_feed_gid(this.m_strRSSGID),
              x.Body().set_amount(u);
            let E = await $.bH.GetBatchPublishedPartnerEvent(
              t.Get().GetCuratorTransport(),
              x,
            );
            return (
              E.GetEResult() != ie.R
                ? console.error(
                    "FetchPublishedEvents error: EMsg:" +
                      k(E.GetEMsg()) +
                      " EResult:" +
                      E.GetEResult() +
                      " msg:" +
                      E.Hdr().error_message(),
                  )
                : (0, f.h5)(() => {
                    for (let N = 0; N < E.Body().clan_event_gid().length; ++N) {
                      let ee = {
                        url: E.Body().news_url()[N],
                        clan_event_gid: E.Body().clan_event_gid()[N],
                        news_post_gid: E.Body().news_post_gid()[N],
                      };
                      this.m_mapURLToPosted.set(ee.url, ee);
                    }
                  }),
              E
            );
          }
          MapArticleURLToClanEventGID(u) {
            let x = this.m_mapURLToPosted.get(u);
            if (x) return x.clan_event_gid;
          }
          BIsLoggedIn() {
            return i.iA.logged_in;
          }
          async CreateOrUpdateRSSNewFeed(u, x = 0) {
            let E = new FormData();
            E.append("sessionid", (0, i.KC)()),
              E.append("gid", this.m_strRSSGID),
              E.append("lang", "" + this.GetCuratorLanguage()),
              E.append("rss_url", u),
              E.append("polling_interval", "" + x);
            const N =
              i.TS.STORE_BASE_URL +
              "curator/" +
              this.m_clanAccountID +
              "/admin/ajaxmanagerssfeed";
            let ee = await F().post(N, E, { withCredentials: !0 });
            return (
              ee.data.success == ie.R &&
                (0, f.h5)(() => {
                  (this.m_strRSSGID = ee.data.gid),
                    (this.m_strRSSFeedURL = u),
                    (this.m_nPollIntervalSeconds = x);
                }),
              ee.data
            );
          }
          async UpdateAutomation(u) {
            return this.CreateOrUpdateRSSNewFeed(
              this.m_strRSSFeedURL,
              u ? 300 : 0,
            );
          }
          async CheckForNewUpdate() {
            if (this.m_strRSSGID) {
              let u = new FormData();
              u.append("sessionid", (0, i.KC)()),
                u.append("gid", this.m_strRSSGID);
              const x =
                i.TS.STORE_BASE_URL +
                "curator/" +
                this.m_clanAccountID +
                "/admin/ajaxcheckfornews";
              await F().post(x, u, { withCredentials: !0 });
            }
          }
          async CreatePost(u, x) {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: User not logged in",
                ),
                null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: Need to create a news feed first",
                ),
                null
              );
            let E = new $.w2();
            E.set_gid(u.post.gid),
              E.set_news_feed_gid(this.m_strRSSGID),
              E.set_title(u.post.title),
              E.set_url(u.post.url),
              E.set_author(u.post.author),
              E.set_rtime_date(u.post.rtime_date),
              E.set_contents(u.post.contents),
              E.set_commited(u.post.commited),
              E.set_deleted(u.post.deleted),
              E.set_tags(u.post.tags),
              E.set_appids(u.post.appids),
              E.set_recommendation_state(u.post.recommendation_state),
              E.set_received_for_free(u.post.received_for_free),
              E.set_received_compensation(u.post.received_compensation),
              E.set_blurb(u.post.blurb);
            const N = O.w.Init($.vB);
            N.Body().set_post(E), N.Body().set_draft(x);
            let ee = await $.bH.PublishPartnerEvent(
              t.Get().GetCuratorTransport(),
              N,
            );
            return (
              ee.GetEResult() != ie.R
                ? console.error(
                    "CreatePost error: " + ee.GetEMsg() + " " + ee.GetEResult(),
                  )
                : ((0, f.h5)(() => {
                    let de = {
                      url: u.post.url,
                      clan_event_gid: ee.Body().clan_event_gid(),
                      news_post_gid: ee.Body().news_post_gid(),
                    };
                    this.m_mapURLToPosted.set(u.post.url, de);
                  }),
                  w.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    this.m_clanSteamID,
                    ee.Body().clan_event_gid(),
                    0,
                  )),
              ee
            );
          }
        }
        m([f.sH], p.prototype, "m_strRSSFeedURL", 2),
          m([f.sH], p.prototype, "m_strRSSGID", 2),
          m([f.sH], p.prototype, "m_rtimeRSSLastChecked", 2),
          m([f.sH], p.prototype, "m_nPollIntervalSeconds", 2),
          m([f.sH], p.prototype, "m_eRSSFeedLanguage", 2),
          m([f.sH], p.prototype, "m_eCuratorLanguage", 2),
          m([f.sH], p.prototype, "m_mapURLToPosted", 2);
        const d = class tt {
          constructor() {
            (0, f.Gn)(this);
          }
          static s_CuratorAdminStore;
          m_transport;
          m_mapClanAccountToAdmin = new Map();
          m_defaultAdmin = void 0;
          m_mapClanToEventRSSStats = new Map();
          m_setPendingClanInfo = new Set();
          m_PendingClanInfoPromise;
          m_PendingClanInfoResolve;
          m_cClanInfoRequestsInFlight = 0;
          GetCuratorTransport() {
            return (
              (0, Z.wT)(
                this.m_transport,
                "Expects Transpoate to be initialized but it is now",
              ),
              this.m_transport
            );
          }
          GetDefaultAdmin() {
            return this.m_defaultAdmin;
          }
          GetRSSAdminStats(u) {
            return this.m_mapClanToEventRSSStats.get(u);
          }
          static Get() {
            return (
              tt.s_CuratorAdminStore ||
                ((tt.s_CuratorAdminStore = new tt()),
                tt.s_CuratorAdminStore.Init()),
              tt.s_CuratorAdminStore
            );
          }
          Init() {
            let u = (0, i.Tc)("curatoradmin", "application_config");
            this.ValidateStoreDefault(u) &&
              ((this.m_defaultAdmin = new p(u)),
              this.m_mapClanAccountToAdmin.set(u.clanid, this.m_defaultAdmin)),
              this.ValidateWebAPI(u) &&
                (this.m_transport = (0, ge.C)(
                  new j.D(i.TS.WEBAPI_BASE_URL, u.webapi_token),
                ).GetServiceTransport());
          }
          ValidateStoreDefault(u) {
            const x = u;
            return x && typeof x == "object" && typeof x.clanid == "number";
          }
          ValidateWebAPI(u) {
            const x = u;
            return x && typeof x.webapi_token == "string";
          }
          BIsLoggedIn() {
            return i.iA.logged_in;
          }
          BHavePendingInfoRequests() {
            return (
              this.m_setPendingClanInfo.size > 0 ||
              this.m_cClanInfoRequestsInFlight > 0
            );
          }
          BIsLoadingClanID(u) {
            return this.m_setPendingClanInfo.has(u);
          }
          BHasClanIDLoaded(u) {
            return this.m_mapClanAccountToAdmin.has(u);
          }
          GetRSSAdminForClanAccountID(u) {
            return this.m_mapClanAccountToAdmin.get(u);
          }
          async QueueCuratorAdminInfoLoad(u) {
            return u
              ? this.m_mapClanAccountToAdmin.has(u)
                ? Promise.resolve()
                : (this.m_setPendingClanInfo.size ||
                    ((this.m_PendingClanInfoPromise = new Promise(
                      (x) => (this.m_PendingClanInfoResolve = x),
                    )),
                    window.setTimeout(() => this.FlushPendingClanInfo(), 25)),
                  this.m_setPendingClanInfo.add(u),
                  this.m_PendingClanInfoPromise)
              : ((0, Z.wT)(!u, "unexpected clanid of zero or undefined: " + u),
                Promise.resolve());
          }
          async FlushPendingClanInfo() {
            const u = this.m_PendingClanInfoResolve,
              x = Array.from(this.m_setPendingClanInfo);
            (this.m_PendingClanInfoPromise = void 0),
              (this.m_PendingClanInfoResolve = void 0),
              this.m_setPendingClanInfo.clear(),
              await this.LoadBatchedClanRSSAdminInfo(x),
              u();
          }
          EnsureClanInfoLoaded(u) {
            const x = u.filter(
              (E) =>
                !this.m_mapClanAccountToAdmin.has(E) &&
                this.m_setPendingClanInfo.has(E),
            );
            return (
              x.forEach((E) => this.QueueCuratorAdminInfoLoad(E)),
              x.length > 0 && this.m_PendingClanInfoPromise
                ? this.m_PendingClanInfoPromise
                : Promise.resolve()
            );
          }
          async LoadBatchedClanRSSAdminInfo(u) {
            this.m_cClanInfoRequestsInFlight++;
            let x = u.filter((N) => !this.m_mapClanAccountToAdmin.has(N));
            const E = 50;
            for (; x.length > 0; ) {
              const N = Math.min(E, x.length),
                ee = x.slice(0, N);
              x = x.slice(N);
              try {
                const de =
                    i.TS.STORE_BASE_URL + "events_admin/ajaxgetrssadmininfo",
                  Te = { clanids: u },
                  we = await F().get(de, { params: Te, withCredentials: !0 });
                if (
                  we &&
                  we.data &&
                  we.data.success == ie.R &&
                  we.data.rss_admin_infos &&
                  Array.isArray(we.data.rss_admin_infos)
                )
                  (0, f.h5)(() => {
                    we.data.rss_admin_infos.forEach((ye) => {
                      this.m_mapClanAccountToAdmin.set(ye.clanid, new p(ye));
                    }),
                      we.data.rss_event_stats.forEach((ye) => {
                        this.m_mapClanToEventRSSStats.set(
                          ye.clan_account_id,
                          ye,
                        );
                      });
                  });
                else {
                  const ye = (0, z.H)(we.data || {});
                  console.error(
                    "LoadBatchedClanRSSAdminInfo error:" + ye.strErrorMsg,
                    ye,
                  );
                }
              } catch (de) {
                const Te = (0, z.H)(de);
                console.error(
                  "LoadBatchedClanRSSAdminInfo catched error:" + Te.strErrorMsg,
                  Te,
                );
              }
            }
            this.m_cClanInfoRequestsInFlight--;
          }
        };
        m([f.sH.shallow], d.prototype, "m_mapClanAccountToAdmin", 2),
          m([f.sH.shallow], d.prototype, "m_mapClanToEventRSSStats", 2);
        let t = d;
      },
      82559: (ae, fe, s) => {
        "use strict";
        s.d(fe, { q: () => me, A: () => Pe });
        var e = s(7850),
          F = s(41735),
          f = s.n(F),
          i = s(57223),
          j = s(3166),
          ge = s(76559);
        class O {
          static s_CuratorStore;
          m_mapClanToRecommendation = new Map();
          static Get() {
            return (
              O.s_CuratorStore ||
                ((O.s_CuratorStore = new O()),
                O.s_CuratorStore.Init(),
                (window.g_CuratorRecommendationStore = O.s_CuratorStore)),
              O.s_CuratorStore
            );
          }
          Init() {}
          GetReviewForApp(y, G) {
            if (this.m_mapClanToRecommendation.has(y.GetAccountID()))
              return this.m_mapClanToRecommendation
                .get(y.GetAccountID())
                .get(G);
          }
          BHasReviewForApp(y, G) {
            return !!this.GetReviewForApp(y, G);
          }
          BHasReviewForAppByClanAccount(y, G) {
            let C = ge.b.InitFromClanID(y);
            return !!this.GetReviewForApp(C, G);
          }
          async LoadAppRecommendation(y, G) {
            this.m_mapClanToRecommendation.has(y.GetAccountID()) ||
              this.m_mapClanToRecommendation.set(y.GetAccountID(), new Map());
            let C = this.m_mapClanToRecommendation.get(y.GetAccountID());
            const q = [];
            if (
              (G.forEach((ue) => {
                C.has(ue) || q.push(ue);
              }),
              q.length > 0)
            ) {
              const ue =
                  j.TS.STORE_BASE_URL +
                  "curator/" +
                  y.GetAccountID() +
                  "/admin/ajaxgetrecbyapps",
                Se = await f().get(ue, {
                  params: {
                    appids: q,
                    cc: j.TS.COUNTRY || "US",
                    l: j.TS.LANGUAGE,
                  },
                }),
                he = Se && Se.data;
              he &&
                he.rec_app &&
                he.rec_app.forEach((ve) => {
                  C.set(Number(ve.appid), ve);
                });
            }
          }
        }
        var $ = s(75844),
          X = s(90626),
          ie = s(99412),
          _ = s(72604),
          w = s(73259),
          k = s(94699),
          V = s(77495),
          D = s(16412),
          U = s(91424),
          Y = s(95695),
          T = s.n(Y),
          Z = s(12037),
          z = s(96538),
          M = s(88003),
          I = s(85599),
          m = s(53107),
          p = s(36707),
          d = s(82734),
          t = s(18210),
          g = s(34592),
          u = s(30096),
          x = s(71909),
          E = s(41635),
          N = s(48473),
          ee = s(56330),
          de = s.n(ee),
          Te = s(53113),
          we = s(92264),
          ye = Object.defineProperty,
          Ge = Object.getOwnPropertyDescriptor,
          te = (b, y, G, C) => {
            for (
              var q = C > 1 ? void 0 : C ? Ge(y, G) : y, ue = b.length - 1, Se;
              ue >= 0;
              ue--
            )
              (Se = b[ue]) && (q = (C ? Se(y, G, q) : Se(q)) || q);
            return C && q && ye(y, G, q), q;
          };
        let Pe = class extends X.Component {
          state = { strRssURL: i.A.Get().GetDefaultAdmin().GetRSSUrl() };
          m_Admin = i.A.Get().GetDefaultAdmin();
          OnChangeActualRSSURL(b) {
            this.setState({ strRssURL: b.target.value });
          }
          OnCreateOrSaveFeed(b) {
            b.preventDefault(),
              (0, M.pg)(
                (0, e.jsx)(Ke, {
                  strRSSUrl: this.state.strRssURL,
                  admin: this.m_Admin,
                }),
                (0, d.uX)(b),
              );
          }
          OnRevert(b) {
            b.preventDefault(),
              this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
          }
          render() {
            let b = this.state.strRssURL === this.m_Admin.GetRSSUrl();
            if (window.Prototype !== void 0)
              return window.location.reload(), null;
            const y = (0, ie.x6o)(
                (0, ie.LgB)(this.m_Admin.GetFeedLanguageHandleUnset()),
              ),
              G = i.A.Get().GetDefaultAdmin();
            return (0, e.jsxs)("div", {
              className: (0, p.A)(x.Ctn),
              children: [
                (0, e.jsxs)("div", {
                  className: "titleframe",
                  children: [
                    (0, e.jsx)("h4", {
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_title"),
                    }),
                    (0, e.jsx)("p", {
                      className: "subtitle",
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_desc"),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, t.PP)(
                        "#CuratorAdmin_RSSFeed_doc_link",
                        (0, e.jsx)("a", {
                          href: "https://partner.steamgames.com/doc/store/news/rss",
                          target: "_blank",
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_doc_link_text",
                          ),
                        }),
                      ),
                    }),
                    (0, e.jsx)("p", {
                      className: x.DashboardBtn,
                      children: (0, e.jsx)(m.uU, {
                        href:
                          j.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/",
                        className: (0, p.A)(T().Button, T().Primary),
                        children: (0, t.we)("#RSSManager_EventDashBoard"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: "darkframe",
                  children: [
                    (0, e.jsxs)("div", {
                      className: x.LanguageRow,
                      children: [
                        (0, e.jsx)("span", {
                          className: x.LanguageTitle,
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_lang_only",
                          ),
                        }),
                        (0, e.jsx)("span", {
                          className: x.LanguageSet,
                          children: y,
                        }),
                        (0, e.jsx)("a", {
                          href:
                            j.TS.COMMUNITY_BASE_URL +
                            "gid/" +
                            this.m_Admin
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/edit ",
                          target: "_blank",
                          className: (0, p.A)(T().Button, x.PreviewBtn),
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_edit_language",
                          ),
                        }),
                      ],
                    }),
                    this.m_Admin.GetFeedLanguageHandleUnset() !=
                      this.m_Admin.GetCuratorLanguage() &&
                      (0, e.jsx)("div", {
                        className: (0, p.A)(
                          x.LanguageRow,
                          de().WarningIconLayout,
                        ),
                        children: (0, e.jsx)("span", {
                          className: x.LanguageTitle,
                          children: (0, t.we)(
                            "#CuratorAdmin_Curator_lang_only",
                            (0, t.we)(
                              "#Language_" +
                                (0, ie.LgB)(this.m_Admin.GetCuratorLanguage()),
                            ),
                            y,
                          ),
                        }),
                      }),
                    (0, e.jsxs)("div", {
                      className: (0, p.A)(
                        T().FlexRowContainer,
                        x.UrlSettingCtn,
                      ),
                      children: [
                        (0, e.jsx)(D.pd, {
                          className: x.RssInpu,
                          type: "text",
                          name: "link_url",
                          id: "link_url",
                          value: this.state.strRssURL,
                          label: (0, t.we)("#CuratorAdmin_RSSFeed"),
                          placeholder: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_placeholder",
                          ),
                          onChange: this.OnChangeActualRSSURL,
                          mustBeURL: !0,
                        }),
                        (0, e.jsx)("a", {
                          className: "btn_green_white_innerfade btn_medium",
                          onClick: this.OnCreateOrSaveFeed,
                          children: (0, e.jsx)("span", {
                            children: (0, t.we)(
                              b ? "#Button_Saved" : "#Button_Save",
                            ),
                          }),
                        }),
                        !b &&
                          (0, e.jsx)("a", {
                            onClick: this.OnRevert,
                            className: "btn_grey_white_innerfade btn_medium",
                            children: (0, t.we)("#Button_Revert"),
                          }),
                      ],
                    }),
                    (0, e.jsx)(re, { admin: G }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)(me, {
                      strRssURL: this.state.strRssURL,
                      admin: G,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        te([u.oI], Pe.prototype, "OnChangeActualRSSURL", 1),
          te([u.oI], Pe.prototype, "OnCreateOrSaveFeed", 1),
          te([u.oI], Pe.prototype, "OnRevert", 1),
          (Pe = te([$.PA], Pe));
        let me = class extends X.Component {
          state = { strParseRssURL: this.props.strRssURL, bLoadingPreview: !1 };
          m_cancelSignal = f().CancelToken.source();
          componentDidMount() {
            const { admin: b } = this.props;
            b.BHasFeedGID() &&
              b.BHasSavedRSSURL() &&
              b.GetRSSUrl() == this.props.strRssURL &&
              this.OnLoadPreview();
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "PreviewRSSViewAndControl component unmounted",
            );
          }
          RenderPreviews() {
            let b = this.props.admin,
              y = new Array();
            if (this.state.previews) {
              let G = this.state.previews;
              (G = G.sort((C, q) => {
                let ue = b.MapArticleURLToClanEventGID(C.post.url),
                  Se = b.MapArticleURLToClanEventGID(q.post.url),
                  he = ue ? V.O3.GetClanEventModel(ue) : null,
                  ve = Se ? V.O3.GetClanEventModel(Se) : null;
                return he && ve
                  ? ve.postTime - he.postTime
                  : he
                    ? -1
                    : ve
                      ? 1
                      : q.post.rtime_date - C.post.rtime_date;
              })),
                G.forEach((C) => {
                  y.push(
                    (0, e.jsx)(
                      J,
                      {
                        newsData: C,
                        admin: b,
                        clanSteamID: b.GetClanSteamID(),
                        fnGetRSSUrl: this.GetRSSPreviewURL,
                      },
                      "id: " + C.unique_id,
                    ),
                  );
                });
            }
            return y;
          }
          GetRSSPreviewURL() {
            return this.state.strParseRssURL;
          }
          OnLoadPreview() {
            this.setState(
              {
                bLoadingPreview: !0,
                previews: void 0,
                strPreviewURL: this.props.strRssURL,
                strPreviewErrorMsg: void 0,
              },
              this.DoLoadPreview,
            );
          }
          async DoLoadPreview() {
            let b = this.props.admin,
              y = await b.PreviewPartnerEventsFromRSSFeed(this.props.strRssURL);
            if (y && y.GetEResult() == _.R) {
              let G = y.Body().toObject();
              this.setState(
                { strParseRssURL: G.rss_url, bLoadingPreview: !0 },
                async () => {
                  await b.FetchPublishedEvents(Math.max(100, G.results.length));
                  let C = new Array(),
                    q = new Array();
                  if (
                    (G.results.forEach((ue) => {
                      let Se = b.MapArticleURLToClanEventGID(ue.post.url);
                      Se && C.push(Se),
                        ue.post.appids &&
                          ue.post.appids.length === 1 &&
                          ue.post.recommendation_state !== k.D$.w4 &&
                          q.push(ue.post.appids[0]);
                    }),
                    C.length > 0 &&
                      (await V.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                        C,
                        null,
                        this.m_cancelSignal,
                      )),
                    q.length > 0)
                  ) {
                    const ue = b.GetClanSteamID();
                    await O.Get().LoadAppRecommendation(ue, q);
                  }
                  this.setState({
                    previews: G.results,
                    bLoadingPreview: void 0,
                  });
                },
              );
            } else
              this.setState({
                bLoadingPreview: void 0,
                strPreviewErrorMsg: (0, t.we)(
                  "#Error_Description",
                  y.GetEResult(),
                  y.Hdr().error_message(),
                ),
              });
          }
          render() {
            const b = this.RenderPreviews();
            let y = this.props.admin;
            return (0, e.jsxs)("div", {
              children: [
                !this.state.bLoadingPreview &&
                  this.state.strPreviewURL !== this.props.strRssURL &&
                  (0, e.jsx)("div", {
                    className: x.PreviewListBtn,
                    children: (0, e.jsx)(D.$n, {
                      disabled: !D.pd.validateUrl(this.props.strRssURL),
                      onClick: this.OnLoadPreview,
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_preview"),
                    }),
                  }),
                this.state.bLoadingPreview &&
                  (0, e.jsx)(I.t, {
                    string: (0, t.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                this.state.strPreviewErrorMsg &&
                  (0, e.jsx)("div", {
                    className: T().ErrorMsg,
                    children: this.state.strPreviewErrorMsg,
                  }),
                b.length > 0 &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, t.we)(
                          "#RSSManager_PreviewInfo",
                          this.state.strPreviewURL,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: x.PreviewListCtn,
                        children: b,
                      }),
                      (0, e.jsx)("p", {
                        className: x.DashboardBtn,
                        children: (0, e.jsx)(m.uU, {
                          href:
                            j.TS.COMMUNITY_BASE_URL +
                            "gid/" +
                            y.GetClanSteamID().ConvertTo64BitString() +
                            "/partnerevents/",
                          className: (0, p.A)(T().Button, T().Primary),
                          children: (0, t.we)("#RSSManager_EventDashBoard"),
                        }),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        te([u.oI], me.prototype, "GetRSSPreviewURL", 1),
          te([u.oI], me.prototype, "OnLoadPreview", 1),
          (me = te([$.PA], me));
        let re = class extends X.Component {
          state = {};
          OnToggleChannelAutomation(b) {
            b
              ? (this.setState({ strErrorMessage: void 0 }),
                (0, M.pg)(
                  (0, e.jsx)(Ke, {
                    strRSSUrl: this.props.admin.GetRSSUrl(),
                    admin: this.props.admin,
                    bActivatePooling: !0,
                  }),
                  window,
                ))
              : this.setState(
                  {
                    strErrorMessage: void 0,
                    strReasonWaiting: (0, t.we)("#Saving"),
                  },
                  this.BDisableAutomation,
                );
          }
          async BDisableAutomation() {
            this.props.admin
              .UpdateAutomation(!1)
              .catch(() =>
                this.setState({
                  strErrorMessage: (0, t.we)(
                    "#RSSManager_Status_Automation_DisableFailed",
                  ),
                }),
              )
              .finally(() => this.setState({ strReasonWaiting: void 0 }));
          }
          async OnQueueScan(b) {
            this.setState({
              strReasonWaiting: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
            }),
              this.props.admin
                .CheckForNewUpdate()
                .then(() =>
                  (0, M.pg)(
                    (0, e.jsx)(z.o0, {
                      strTitle: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: (0, t.we)("#CuratorAdmin_RSSFeed_queued"),
                    }),
                    (0, d.uX)(b),
                  ),
                )
                .catch((y) =>
                  (0, M.pg)(
                    (0, e.jsx)(z.KG, {
                      strTitle: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: (0, g.H)(y).strErrorMsg,
                    }),
                    (0, d.uX)(b),
                  ),
                )
                .finally(() => this.setState({ strReasonWaiting: void 0 }));
          }
          render() {
            return this.props.admin.BHasSavedRSSURL()
              ? (0, e.jsxs)("div", {
                  children: [
                    !!this.state.strReasonWaiting &&
                      (0, e.jsx)(I.t, {
                        size: "medium",
                        string: this.state.strReasonWaiting,
                      }),
                    !!this.state.strErrorMessage &&
                      (0, e.jsx)("div", {
                        className: x.Error,
                        children: this.state.strErrorMessage,
                      }),
                    (0, e.jsx)(D.RF, {
                      onChange: this.OnToggleChannelAutomation,
                      label: (0, t.we)("#RSSManager_Status_Automation_Desc"),
                      checked: this.props.admin.BIsAutomationEnabled(),
                      description: "",
                    }),
                    this.props.admin.BIsAutomationEnabled() &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, t.we)("#CuratorAdmin_RSSFeed_lastscanned"),
                          "\xA0",
                          (0, t.TW)(
                            this.props.admin.GetRSSLastRtimeChecked(),
                            !1,
                          ),
                          "\xA0 @ ",
                          (0, we.KC)(
                            this.props.admin.GetRSSLastRtimeChecked(),
                            { bForce24HourClock: !1 },
                          ),
                          "\xA0",
                          (0, e.jsx)("a", {
                            onClick: this.OnQueueScan,
                            children: (0, e.jsx)("span", {
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_scannow",
                              ),
                            }),
                          }),
                        ],
                      }),
                  ],
                })
              : null;
          }
        };
        te([u.oI], re.prototype, "OnToggleChannelAutomation", 1),
          te([u.oI], re.prototype, "OnQueueScan", 1),
          (re = te([$.PA], re));
        let J = class extends X.Component {
          state = {
            clan_event_gid: this.props.admin.MapArticleURLToClanEventGID(
              this.props.newsData.post.url,
            ),
            bLoadingPartnerEvent:
              !!this.props.admin.MapArticleURLToClanEventGID(
                this.props.newsData.post.url,
              ),
          };
          componentDidMount() {
            this.DoPartnerEventLoad();
          }
          async DoPartnerEventLoad() {
            if (this.state.clan_event_gid) {
              let b = this.props.admin.GetClanSteamID(),
                y = V.O3.GetClanEventModel(this.state.clan_event_gid);
              y ||
                (y = await V.O3.LoadHiddenPartnerEvent(
                  b,
                  this.state.clan_event_gid,
                )),
                this.setState({
                  bLoadingPartnerEvent: !1,
                  existingEventModel: y,
                });
            }
          }
          OnOpenPreviewAsPartnerEvent(b) {
            const { newsData: y, clanSteamID: G } = this.props;
            let C = new w.lh();
            (C.GID = "PreviewPartnerEventRow_0"),
              (C.clanSteamID = G),
              (C.postTime = Date.now() / 1e3),
              (C.startTime = Date.now() / 1e3),
              (C.type = ie.uYK),
              C.vecTags.push("auto_rssfeed"),
              C.vecTags.push("curator"),
              C.vecTags.push("curator_public"),
              C.name.set(ie.Bhc, y.title),
              C.description.set(ie.Bhc, y.desc),
              this.ValidateJSONDefault(y.jsondata) && (C.jsondata = y.jsondata),
              C.jsondata.read_more_link ||
                (C.jsondata.read_more_link = y.unique_id);
            let q = this.props.admin.GetFeedLanguageHandleUnset();
            !C.jsondata.localized_summary &&
              y.post.event_summary &&
              ((C.jsondata.localized_summary = (0, E.$Y)(
                C.jsondata.localized_summary,
                ie.bP9,
                null,
              )),
              (C.jsondata.localized_summary[ie.Bhc] = y.post.event_summary),
              q != ie.Bhc &&
                (C.jsondata.localized_summary[q] = y.post.event_summary)),
              !C.jsondata.localized_subtitle &&
                y.post.event_subtitle &&
                ((C.jsondata.localized_subtitle = (0, E.$Y)(
                  C.jsondata.localized_subtitle,
                  ie.bP9,
                  null,
                )),
                (C.jsondata.localized_subtitle[ie.Bhc] = y.post.event_subtitle),
                q != ie.Bhc &&
                  (C.jsondata.localized_subtitle[q] = y.post.event_subtitle)),
              this.ShowModalEvent(C);
          }
          OnViewEvent() {
            this.ShowModalEvent(
              V.O3.GetClanEventModel(this.state.clan_event_gid),
            );
          }
          ShowModalEvent(b) {
            let y = document.getElementById("curator_header_area_ctn_id");
            y &&
              (b
                ? y.classList.add("curator_header_area_ctn_hideme")
                : y.classList.remove("curator_header_area_ctn_hideme")),
              this.setState({ eventModelForPreviewNow: b });
          }
          ValidateJSONDefault(b) {
            const y = b;
            return !!(y && !Array.isArray(y) && typeof y == "object");
          }
          OnPostNewsEvent(b) {
            const { newsData: y, fnGetRSSUrl: G } = this.props;
            (0, M.pg)(
              (0, e.jsx)(Ke, {
                newsData: y,
                admin: this.props.admin,
                strRSSUrl: G(),
                fnClanEventGID: this.OnClanEventCreateSuccess,
              }),
              (0, d.uX)(b),
            );
          }
          OnUpdateNewsEvent(b) {
            const { newsData: y, fnGetRSSUrl: G } = this.props;
            (0, M.pg)(
              (0, e.jsx)(Ke, {
                newsData: y,
                strRSSUrl: G(),
                admin: this.props.admin,
                fnClanEventGID: this.OnClanEventCreateSuccess,
                bUpdatePost: !0,
              }),
              (0, d.uX)(b),
            );
          }
          HideModalEvent() {
            this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
          }
          OnClanEventCreateSuccess(b) {
            this.setState(
              { clan_event_gid: b, bLoadingPartnerEvent: !0 },
              this.DoPartnerEventLoad,
            );
          }
          OnShowRawRSS(b) {
            const y = this.props.newsData.rss_message,
              G = (() => {
                const C = y.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
                if (!C) return y;
                const q = C[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
                return q ? (0, N.EK)(q[0]) : C[0];
              })();
            (0, M.pg)(
              (0, e.jsx)(z.o0, {
                bAlertDialog: !0,
                strTitle: (0, t.we)("#RSSManager_PostEvent_ViewRaw"),
                children: (0, e.jsx)("textarea", {
                  className: x.RawRSS,
                  value: G,
                  disabled: !0,
                }),
              }),
              (0, d.uX)(b),
            );
          }
          render() {
            const { newsData: b } = this.props,
              {
                clan_event_gid: y,
                existingEventModel: G,
                bLoadingPartnerEvent: C,
              } = this.state;
            let q = this.props.admin,
              ue = q.GetClanSteamID(),
              Se = G && G.BIsStagedEvent(),
              he =
                b.post.appids && b.post.appids.length == 1 && b.post.appids[0],
              ve =
                b.post.recommendation_state !== k.D$.w4 &&
                he &&
                O.Get().BHasReviewForApp(ue, he),
              oe = "";
            if (G) {
              const Ye =
                G.GetVisibilityStartTimeAndDateUnixSeconds() ||
                G.GetPostTimeAndDateUnixSeconds();
              oe =
                (0, t.$z)(Ye) +
                " @ " +
                (0, we.KC)(Ye, { bForce24HourClock: !1 });
            }
            return (0, e.jsxs)("div", {
              className: (0, p.A)(
                x.PostCtn,
                y ? x.ActivePost : "",
                b.valid_post ? "" : x.ErrorPost,
              ),
              children: [
                (0, e.jsx)("span", {
                  className: x.PostTitle,
                  children: b.title,
                }),
                (0, e.jsx)("br", {}),
                !!G &&
                  (0, e.jsxs)(X.Fragment, {
                    children: [
                      !!G.BIsVisibleEvent() &&
                        (0, e.jsx)("span", {
                          className: x.PostDate,
                          children: (0, t.we)(
                            "#RSSManager_PostEvent_PostedDate",
                            oe,
                          ),
                        }),
                      !G.BIsVisibleEvent() &&
                        (0, e.jsx)("span", {
                          className: (0, p.A)(
                            x.PostDraft,
                            Se ? x.PostStaged : "",
                          ),
                          children: (0, t.we)(
                            Se
                              ? "#RSSManager_PostEvent_Staged"
                              : "#RSSManager_PostEvent_Draft",
                            oe,
                          ),
                        }),
                    ],
                  }),
                !!(!b.valid_post && b.post_error_msg) &&
                  (0, e.jsxs)("div", {
                    className: de().ErrorStylesBackground,
                    children: [
                      (0, t.we)("#Error_Generic_Label"),
                      " ",
                      (0, t.we)(b.post_error_msg),
                    ],
                  }),
                (0, e.jsxs)("div", {
                  className: x.ButtonCtn,
                  children: [
                    y
                      ? (0, e.jsxs)(X.Fragment, {
                          children: [
                            C
                              ? (0, e.jsx)(I.t, {
                                  string: (0, t.we)("#Loading"),
                                  size: "small",
                                  position: "center",
                                })
                              : (0, e.jsx)("div", {
                                  onClick: this.OnViewEvent,
                                  className: (0, p.A)(T().Button, x.PreviewBtn),
                                  children: (0, t.we)(
                                    "#RSSManager_PostEvent_ViewEvent",
                                  ),
                                }),
                            (0, e.jsx)("a", {
                              className: (0, p.A)(T().Button, x.PreviewBtn),
                              href:
                                j.TS.COMMUNITY_BASE_URL +
                                "gid/" +
                                q.GetClanSteamID().ConvertTo64BitString() +
                                "/partnerevents/edit/" +
                                this.state.clan_event_gid,
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_EditEvent",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              onClick: this.OnUpdateNewsEvent,
                              className: (0, p.A)(T().Button, x.PreviewBtn),
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_UpdateEvent",
                              ),
                            }),
                            ve &&
                              (0, e.jsx)("a", {
                                className: (0, p.A)(T().Button, x.PreviewBtn),
                                href: (0, Te.k2)(
                                  j.TS.STORE_BASE_URL +
                                    "app/" +
                                    b.post.appids[0] +
                                    "/?curator_clanid=" +
                                    ue.GetAccountID(),
                                ),
                                children: (0, t.we)("#RSSManager_SeeReview"),
                              }),
                          ],
                        })
                      : (0, e.jsxs)(X.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              onClick: this.OnOpenPreviewAsPartnerEvent,
                              className: (0, p.A)(T().Button, x.PreviewBtn),
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_col_preview_event",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              onClick: this.OnPostNewsEvent,
                              className: (0, p.A)(T().Button, x.PreviewBtn),
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_col_create_event",
                              ),
                            }),
                          ],
                        }),
                    !!(b.rss_message && b.rss_message.length > 0) &&
                      (0, e.jsx)("div", {
                        onClick: this.OnShowRawRSS,
                        className: x.ViewRaw,
                        children: (0, t.we)("#RSSManager_PostEvent_ViewRaw"),
                      }),
                    !!this.state.eventModelForPreviewNow &&
                      (0, e.jsx)(z.of, {
                        className: Z.StoreHeaderAdjust,
                        children: (0, e.jsx)("div", {
                          children: (0, e.jsx)(U.H, {
                            event: this.state.eventModelForPreviewNow,
                            fnClose: this.HideModalEvent,
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        te([u.oI], J.prototype, "DoPartnerEventLoad", 1),
          te([u.oI], J.prototype, "OnOpenPreviewAsPartnerEvent", 1),
          te([u.oI], J.prototype, "OnViewEvent", 1),
          te([u.oI], J.prototype, "OnPostNewsEvent", 1),
          te([u.oI], J.prototype, "OnUpdateNewsEvent", 1),
          te([u.oI], J.prototype, "HideModalEvent", 1),
          te([u.oI], J.prototype, "OnClanEventCreateSuccess", 1),
          te([u.oI], J.prototype, "OnShowRawRSS", 1),
          (J = te([$.PA], J));
        const W = class kt extends X.Component {
          state = {
            initialState: kt.DetermineStartState(this.props),
            step: kt.DetermineStartState(this.props),
            bDraftMode: !0,
          };
          static DetermineStartState(y) {
            let G = y.admin.BHasSetupFeed(y.strRSSUrl);
            return !y.newsData || !G
              ? y.bActivatePooling
                ? "activate_feed"
                : y.admin.BHasSavedRSSURL()
                  ? "update_feed"
                  : "feed_missing"
              : y.bUpdatePost
                ? "update_post"
                : "create_post";
          }
          OnCreateNewsFeed() {
            this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
          }
          async DoCreateNewsFeed() {
            let y = await this.props.admin.CreateOrUpdateRSSNewFeed(
              this.props.strRSSUrl,
              this.props.bActivatePooling ? 300 : 0,
            );
            y.success != _.R
              ? this.setState({
                  step: "failure",
                  eResult: y.success,
                  strErrorMessage: (0, t.we)("#RSSManager_PostEvent_Failure"),
                })
              : this.setState({
                  step: this.props.newsData ? "create_post" : "success",
                });
          }
          OnCreatePost() {
            this.setState({ step: "waiting_post" }, this.DoCreatePost);
          }
          async DoCreatePost() {
            let y = await this.props.admin.CreatePost(
              this.props.newsData,
              !!this.state.bDraftMode,
            );
            y.GetEResult() != _.R
              ? this.setState({
                  step: "failure",
                  eResult: y.GetEResult(),
                  strErrorMessage: (0, t.we)("#RSSManager_PostEvent_Failure"),
                })
              : (this.props.fnClanEventGID &&
                  this.props.fnClanEventGID(y.Body().clan_event_gid()),
                this.setState({
                  step: "success",
                  eventGID: y.Body().clan_event_gid(),
                }));
          }
          OnChangeDraftMode(y) {
            this.setState({ bDraftMode: y });
          }
          OnChangePermissionsCreateFeed(y) {
            this.setState({ bPermissions: y });
          }
          OnChangeConductCreateFeed(y) {
            this.setState({ bConduct: y });
          }
          GetStrTitle() {
            if (this.props.newsData)
              return (0, t.we)(
                this.props.bUpdatePost
                  ? "#RSSManager_PostEvent_UpdateEvent"
                  : "#RSSManager_PostEvent_Tilte",
              );
            switch (this.state.initialState) {
              case "feed_missing":
                return (0, t.we)("#RSSManager_PostEvent_CreateFeedTitle");
              default:
              case "update_feed":
                return (0, t.we)("#RSSManager_PostEvent_UpdateFeedTitle");
              case "activate_feed":
                return (0, t.we)("#RSSManager_Status_Automation_Activate");
            }
          }
          render() {
            const { strRSSUrl: y } = this.props;
            switch (this.state.step) {
              case "feed_missing":
              case "activate_feed":
              case "update_feed":
              default:
                return (0, e.jsx)(z.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(D.nB, {
                    children: [
                      (0, e.jsxs)(D.a3, {
                        children: [
                          this.props.newsData &&
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreateFeed_DuringPost",
                              ),
                            }),
                          this.state.step !== "activate_feed" &&
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreateFeed_Desc",
                                y,
                              ),
                            }),
                          (0, e.jsx)("div", {
                            children: (0, t.we)(
                              "#RSSManager_CreateFeed_Review",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(D.Yh, {
                              label: (0, t.we)(
                                "#RSSManager_CreateFeed_Permissions_v1",
                              ),
                              onChange: this.OnChangePermissionsCreateFeed,
                              checked: !!this.state.bPermissions,
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)(D.Yh, {
                                label: (0, t.we)(
                                  "#RSSManager_CreateFeed_Conduct_v1",
                                ),
                                onChange: this.OnChangeConductCreateFeed,
                                checked: !!this.state.bConduct,
                              }),
                              (0, e.jsx)(m.uU, {
                                href: j.TS.STORE_BASE_URL + "online_conduct/",
                                children: (0, t.we)(
                                  "#RSSManager_CreateFeed_Conduct_Link",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)(D.wi, {
                        children: (0, e.jsx)(D.CB, {
                          bOKDisabled: !(
                            this.state.bPermissions && this.state.bConduct
                          ),
                          onOK: this.OnCreateNewsFeed,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "failure":
                return (0, e.jsx)(z.KG, {
                  strDescription: (0, t.we)("#RSSManager_PostEvent_Failure"),
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)("div", {
                    children: (0, t.we)(
                      "#Error_Description",
                      this.state.eResult,
                      this.state.strErrorMessage,
                    ),
                  }),
                });
              case "creating_feed":
              case "waiting_post":
                return (0, e.jsx)(z.o0, {
                  strTitle: this.GetStrTitle(),
                  strDescription: (0, t.we)("#RSSManager_PostEvent_InFlight"),
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)(I.t, { position: "center" }),
                });
              case "create_post":
                return (0, e.jsx)(z.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(D.nB, {
                    children: [
                      (0, e.jsx)(D.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreatePost",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: x.DialogPostTitle,
                              children: this.props.newsData.title,
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              children: (0, e.jsx)(D.Yh, {
                                label: (0, t.we)(
                                  "#RSSManager_PostEvent_CreatePost_Draft",
                                ),
                                onChange: this.OnChangeDraftMode,
                                checked: !!this.state.bDraftMode,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)(D.wi, {
                        children: (0, e.jsx)(D.CB, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "update_post":
                return (0, e.jsx)(z.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(D.nB, {
                    children: [
                      (0, e.jsx)(D.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_UpdatePost",
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              className: x.DialogPostTitle,
                              children: this.props.newsData.title,
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }),
                      }),
                      (0, e.jsx)(D.wi, {
                        children: (0, e.jsx)(D.CB, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "success":
                return (0, e.jsx)(z.o0, {
                  strTitle: this.GetStrTitle(),
                  strDescription: (0, t.we)(
                    this.props.newsData
                      ? "#RSSManager_PostEvent_Success"
                      : "#RSSManager_PostEvent_Success_feed",
                  ),
                  closeModal: this.props.closeModal,
                  bAlertDialog: !0,
                  children:
                    !!this.state.eventGID &&
                    (0, e.jsx)("a", {
                      href:
                        j.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        this.props.admin
                          .GetClanSteamID()
                          .ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        this.state.eventGID,
                      children: (0, t.we)("#RSSManager_PostEvent_EventLink"),
                    }),
                });
            }
          }
        };
        te([u.oI], W.prototype, "OnCreateNewsFeed", 1),
          te([u.oI], W.prototype, "DoCreateNewsFeed", 1),
          te([u.oI], W.prototype, "OnCreatePost", 1),
          te([u.oI], W.prototype, "DoCreatePost", 1),
          te([u.oI], W.prototype, "OnChangeDraftMode", 1),
          te([u.oI], W.prototype, "OnChangePermissionsCreateFeed", 1),
          te([u.oI], W.prototype, "OnChangeConductCreateFeed", 1),
          te([u.oI], W.prototype, "GetStrTitle", 1);
        let Ke = W;
      },
      59970: (ae, fe, s) => {
        "use strict";
        s.d(fe, { d: () => pt });
        var e = s(7850),
          F = s(19367),
          f = s(90626),
          i = s(3685),
          j = s(85528),
          ge = s(77495),
          O = s(18210),
          $ = s(3166),
          X = s(75779),
          ie = s(80902),
          _ = s(30454);
        async function w() {
          const S = await (0, _.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!S.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return S.counts;
        }
        const k = 300 * 1e3;
        function V() {
          return ["DeckCompatCounts"];
        }
        function D() {
          return { queryKey: V(), queryFn: () => w(), staleTime: k, retry: !1 };
        }
        function U() {
          const { data: S } = (0, ie.I)(D());
          return S;
        }
        function Y(S, A) {
          switch (A) {
            case X.sd:
              return S?.playable;
            case X.V8:
              return S?.unsupported;
            default:
              return S?.verified;
          }
        }
        var T = s(70187),
          Z = s(36549),
          z = s(39153),
          M = s(99412),
          I = s(72609),
          m = s(25792),
          p = s(85599),
          d = s(41635),
          t = s(47610),
          g = s(18860),
          u = s(87805);
        function x(S) {
          const { event: A } = S.context,
            R = Number.parseInt((0, T.j$)(S.args)),
            Q = f.useMemo(() => {
              if (A)
                return A.jsondata.sale_sections?.find(
                  (K) =>
                    K.section_type == "vo_internal" &&
                    (K.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      K.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [A]);
          if (R && Q) {
            const K = Number.parseInt((0, T.j$)(S.args, "depositpackageid")),
              L = Number.parseInt((0, T.j$)(S.args, "psulesspackageid")),
              ce = (0, T.j$)(S.args, "out_of_stock_override"),
              Me = (0, T.j$)(S.args, "delivery_override"),
              Ee = (0, T.j$)(S.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(E, {
              section: Q,
              reservationPackageID: R,
              depositPackageID: K,
              psuLessPackageID: L,
              strOutOfStockOverride: ce,
              strDeliveryOverride: Ee || Me,
              bDeliveryOverrideOnlyIfOutOfStock: !!Ee,
              PreviewActions: S.PreviewActions,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        function E(S) {
          const {
              reservationPackageID: A,
              depositPackageID: R,
              bIsPreview: Q,
              psuLessPackageID: K,
              strOutOfStockOverride: L,
              strDeliveryOverride: ce,
              bDeliveryOverrideOnlyIfOutOfStock: Me,
              section: Ee,
              PreviewActions: je,
            } = S,
            { data: pe } = (0, t.DR)(A),
            { data: Ve } = (0, t.DR)(K),
            Be = (0, f.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + A,
                  reservation_package: A,
                  deposit_package: R,
                  localized_reservation_desc: (0, d.$Y)([], M.bP9, null),
                  localized_out_of_stock_override: (0, d.$Y)(
                    [L || null],
                    M.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, d.$Y)(
                    [ce || null],
                    M.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!Me,
                  psu_less_package: K,
                },
              ],
              [A, R, L, ce, Me, K],
            );
          if (!pe || (K && !Ve))
            return (0, e.jsx)(p.t, {
              string: (0, O.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const Ft = !I.iA.logged_in || !pe.account_restricted_from_purchasing,
            St =
              pe.reservation_state == g.G.k_EPurchaseReservationState_Reserved
                ? pe
                : void 0;
          return (0, e.jsxs)(m.tH, {
            children: [
              je &&
                (0, e.jsx)(f.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(je, {
                    bIsPreview: !!Q,
                    rgReservationDef: Be,
                  }),
                }),
              !!pe.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Be[0].unique_id,
                  children: [
                    (0, e.jsx)(u.b, {
                      reservationDef: Be[0],
                      hardwareDetail: pe,
                      bPSULessModel: !1,
                      reservedHardwareDetail: St,
                    }),
                    Ft &&
                      (0, e.jsx)(u.p, {
                        section: Ee,
                        reservationDef: Be[0],
                        hardwareDetail: pe,
                        reservedHardwareDetail: St,
                      }),
                    Ve &&
                      Ve?.allow_purchase_in_country &&
                      (0, e.jsx)(u.b, {
                        reservationDef: Be[0],
                        hardwareDetail: Ve,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var N = s(6878),
          ee = s(21035),
          de = s(72865),
          Te = s(38081),
          we = s.n(Te),
          ye = s(36707),
          Ge = s(69596),
          te = s(10026),
          Pe = s.n(te),
          me = s(19298),
          re = s(11996),
          J = s(19047),
          W = s(36118),
          Ke = s(47689),
          b = s(89926),
          y = s(32545),
          G = s.n(y);
        function C(S) {
          const { appID: A, classOverride: R, styleOverride: Q } = S,
            [K, L] = (0, f.useState)(!1),
            ce = (0, Ke.m)("GameHoverFollowButton"),
            { elDialogElement: Me, fnShowLogonDialog: Ee } = (0, b.l)(),
            je = (0, re.Fh)(A),
            { mutateAsync: pe } = (0, J.L)(A, !je, void 0),
            Ve = async (Be) => {
              Be.preventDefault(),
                Be.stopPropagation(),
                $.iA.logged_in
                  ? (L(!0), await pe(), ce.token.reason || L(!1))
                  : Ee();
            };
          return (0, e.jsxs)(me.Z, {
            className: (0, ye.A)(G().FollowButton, R),
            onClick: Ve,
            style: Q,
            children: [
              je ? (0, e.jsx)(W.pPV, {}) : (0, e.jsx)(W.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, ye.A)(
                  G().FollowButtonText,
                  K && G().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, O.we)(
                  je ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              Me,
            ],
          });
        }
        function q(S) {
          const { appid: A, color: R, bgcolor: Q } = S,
            K = (0, de.n9)();
          return (0, e.jsx)(C, {
            appID: A,
            classOverride: (0, ye.A)(
              we().FollowGameButtonNotTop,
              Pe().BBCodeFollowButton,
            ),
            styleOverride: { color: R, backgroundColor: Q },
          });
        }
        function ue(S) {
          const A = Number(S.args.appid);
          if (!A) return null;
          const R = (0, Ge.O)(S.args.color, "black"),
            Q = (0, Ge.O)(S.args.bgcolor, "white");
          return (0, e.jsx)(q, { appid: A, color: R, bgcolor: Q });
        }
        var Se = s(57646);
        function he(S) {
          const A = Number(S.args.packageid);
          return A
            ? (0, e.jsx)(Se.eF, {
                packageID: A,
                display_style: (0, Se._w)(S.args.display),
              })
            : null;
        }
        function ve(S) {
          const A = Number(S.args.packageid),
            R = Number(S.args.compareid);
          return !A || !R
            ? null
            : (0, e.jsx)(Se.hJ, { packageID: A, compareID: R });
        }
        function oe(S) {
          const A = S.args[""]?.trim();
          return A
            ? (0, e.jsx)("div", { className: A, children: S.children })
            : (0, e.jsx)(e.Fragment, { children: S.children });
        }
        var Ye = s(18657),
          mt = s.n(Ye),
          ut = s(63026);
        function ft(S) {
          const { clanAccountID: A, color: R, bgcolor: Q } = S,
            [K, L] = f.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, ye.A)(mt().BBCodeFollowButton, K && mt().isHovered),
            onMouseEnter: () => L(!0),
            onMouseLeave: () => L(!1),
            children: (0, e.jsx)(ut.Q, {
              nCreatorAccountID: A,
              classOverride: we().FollowGameButtonNotTop,
              styleOverride: { color: R, backgroundColor: Q },
              followType: "group",
            }),
          });
        }
        function yt(S) {
          const { event: A } = S.context,
            R = Number(S.args.groupid) || A?.clanSteamID.GetAccountID();
          if (!R) return null;
          const Q = (0, Ge.O)(S.args.color, "black"),
            K = (0, Ge.O)(S.args.bgcolor, "white");
          return (0, e.jsx)(ft, { clanAccountID: R, color: Q, bgcolor: K });
        }
        var Xe = s(83482),
          gt = s(44267),
          xt = s(9202),
          ht = s.n(xt),
          nt = s(29522);
        function At(S) {
          const { appid: A, color: R, bgcolor: Q } = S,
            K = (0, de.n9)(),
            L = (0, nt.$5)(A),
            ce = (0, Xe.L3)(K);
          return (0, e.jsx)("div", {
            className: ht().WishlistHoverCtn,
            children: (0, e.jsx)(gt.E, {
              snr: ce,
              id: L,
              classOverride: (0, ye.A)(
                we().WishlistButtonNotTop,
                ht().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: R, backgroundColor: Q },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function wt(S) {
          const A = Number(S.args.appid);
          if (!A) return null;
          const R = (0, Ge.O)(S.args.color, "black"),
            Q = (0, Ge.O)(S.args.bgcolor, "white");
          return (0, e.jsx)(At, { appid: A, color: R, bgcolor: Q });
        }
        let He = null;
        function Mt() {
          return (
            He == null &&
              (He = new Map([
                ["wishlist", { Constructor: wt, autocloses: !1 }],
                ["followgroup", { Constructor: yt, autocloses: !1 }],
                ["classname", { Constructor: oe, autocloses: !1 }],
                ["price", { Constructor: he, autocloses: !1 }],
                ["pricesavings", { Constructor: ve, autocloses: !1 }],
                ["reservationbutton", { Constructor: x, autocloses: !1 }],
              ])),
            He
          );
        }
        var It = s(37656),
          Ce = s(29868),
          Re = s(24642);
        function Ue(S) {
          return S < 10 ? "0" + S : S;
        }
        function Qe(S) {
          const { giveawayid: A } = S,
            R = (0, It.w)(A),
            {
              bLoadingGiveawayInfo: Q,
              winner_count: K,
              closed: L,
              seconds_until_drawing: ce,
            } = R;
          return Q
            ? null
            : (0, e.jsxs)("div", {
                className: Ce.countdownCtn,
                children: [
                  !!L &&
                    (0, e.jsx)("div", {
                      className: Ce.Closed,
                      children:
                        K > 0
                          ? (0, O.we)("#Giveaway_Closed", (0, Re.D)(K))
                          : (0, O.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !L &&
                    (0, e.jsxs)(f.Fragment, {
                      children: [
                        ce <= 0
                          ? (0, e.jsxs)("div", {
                              className: Ce.Throbber,
                              children: [
                                (0, e.jsx)(p.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, O.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Ce.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Ce.CountDownTime,
                                  children:
                                    Ue(Math.floor(ce / 60)) + ":" + Ue(ce % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Ce.CountDownText,
                                  children: [
                                    (0, O.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, O.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        K > 0 &&
                          (0, e.jsxs)("div", {
                            className: Ce.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Ce.WinnerCount,
                                children: (0, Re.D)(K),
                              }),
                              (0, e.jsx)("div", {
                                className: Ce.WinnerText,
                                children: (0, O.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var bt = s(88245),
          Et = s(35702),
          Fe = s(16412),
          jt = s(92757),
          Dt = s(39256),
          Tt = s(4720),
          Le = s(75110),
          We = s(57810),
          at = s(36631),
          Bt = s(76281),
          $e = s(81416);
        function Oe(S) {
          const { eventModel: A, nEventBadgeID: R } = S,
            Q = (0, Et.fy)(R);
          if (Q?.level > 0) {
            let K = Q.level;
            if (A?.BHasSaleEnabled()) {
              const L = A.GetSaleSectionsByType("badge_progress");
              if (L?.length == 1) {
                const ce = L[0].badge_progress;
                if (ce?.event_badgeid == R && ce?.granted_by_discovery_queue) {
                  const Me = ce.levels[ce.levels.length - 1].level;
                  return (0, e.jsx)(rt, {
                    eventModel: A,
                    nBadgeLevel: K,
                    nMaxLevel: Me,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Re.D)(K),
            });
          }
          return null;
        }
        function rt(S) {
          const { eventModel: A, nBadgeLevel: R, nMaxLevel: Q } = S,
            K = f.useMemo(() => {
              const je = A.GetSaleSections().filter(
                (pe) => pe.section_type == "discoveryqueue",
              );
              return je?.length > 0 ? je[0] : null;
            }, [A]),
            { storePageFilter: L, eStoreDiscoveryQueueType: ce } = f.useMemo(
              () => (0, Le.lx)(A, K),
              [A, K],
            ),
            Me = (0, We.Uf)(ce, L),
            Ee = Math.min(R + Me, Q);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Re.D)(Ee),
          });
        }
        function _e(S) {
          const { event: A } = S.context,
            R = Number.parseInt((0, T.j$)(S.args, "eventid"));
          return $.iA.logged_in && R
            ? (0, e.jsx)(Oe, { nEventBadgeID: R, eventModel: A })
            : null;
        }
        function Je(S) {
          const { nDoorIndex: A, children: R } = S,
            Q = (0, z.OM)(A),
            K = (0, z.gP)(),
            [L, ce] = f.useState(!1),
            [Me, Ee] = f.useState(!1),
            { elDialogElement: je, fnShowLogonDialog: pe } = (0, b.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Fe.$n, {
                disabled: Q,
                onClick: (Ve) => {
                  L ||
                    ($.iA.logged_in
                      ? (ce(!0),
                        K({ iDoorIndex: A })
                          .then((Be) => {
                            Be || Ee(!0), ce(!1);
                          })
                          .catch(() => {
                            Ee(!0), ce(!1);
                          }))
                      : pe());
                },
                children: Me
                  ? (0, e.jsx)("div", {
                      children: (0, O.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!L && (0, e.jsx)(p.t, { size: "small" }),
                        !!Q && (0, e.jsx)(W.Jlk, {}),
                        R,
                      ],
                    }),
              }),
              je,
            ],
          });
        }
        function ke(S) {
          const A = Number.parseInt((0, T.j$)(S.args)) || 0;
          return A >= 0 && A < 32
            ? (0, e.jsx)(Je, { nDoorIndex: A, children: S.children })
            : null;
        }
        const xe = (0, jt.y)(Bt.H);
        function Ct(S) {
          const A = Number.parseInt((0, T.j$)(S.args)),
            { event: R, showErrorInfo: Q } = S.context;
          if (A) {
            const K = R?.jsondata?.sale_sections?.findIndex(
              (L) => L.unique_id == A,
            );
            if (K >= 0) {
              const L = R.GetDayIndexFromEventStart();
              return (0, e.jsx)(at.Cs, {
                location: Q ? at.HY : at.bs,
                children: (0, e.jsx)(xe, {
                  event: R,
                  section: R.jsondata.sale_sections[K],
                  activeTab: new Tt.y(null, L),
                  language: S.language,
                  nSaleDayIndex: L,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: Q
                    ? $e.S.EPreviewMode_Enabled
                    : $e.S.EPreviewMode_Disabled,
                }),
              });
            } else if (Q)
              return (0, e.jsxs)("div", {
                className: Dt.ErrorDiv,
                children: ["Error could not find sale section ", A],
              });
          }
          return null;
        }
        let Ze = null;
        function be() {
          return (
            Ze == null &&
              (Ze = new Map([
                ...Array.from(Mt().entries()),
                [
                  "itemdef",
                  {
                    Constructor: Rt,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: ue, autocloses: !1 }],
                ["deckcompatcount", { Constructor: Lt, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Ot, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: vt, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: Gt, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: _e, autocloses: !1 }],
                ["optindoorquest", { Constructor: ke, autocloses: !1 }],
                ["localize", { Constructor: Ne, autocloses: !1 }],
                ["salesection", { Constructor: Ct, autocloses: !1 }],
                ["reservationbutton", { Constructor: st, autocloses: !1 }],
              ])),
            Ze
          );
        }
        function Rt(S) {
          const { event: A } = S.context,
            R = Number.parseInt((0, T.j$)(S.args, "appid")),
            Q = Number.parseInt((0, T.j$)(S.args, "itemdefid")),
            K = Number.parseInt((0, T.j$)(S.args, "maxquantity")),
            L = (0, T.j$)(S.args, "calltoaction");
          return !(0, bt.gS)(R, Q, !1) || !A
            ? (0, e.jsx)(p.t, {
                size: "small",
                position: "center",
                string: (0, O.we)("#Loading"),
              })
            : (0, e.jsx)(ee.f, {
                language: S.language,
                clanAccountID: A.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: R, nItemDefID: Q, max_quantity: K },
                strCallToAction: L,
              });
        }
        function Lt(S) {
          const A = U();
          if (!A) return (0, e.jsx)(p.t, { size: "small" });
          const R = Number.parseInt((0, T.j$)(S.args));
          return (0, e.jsx)("span", { children: (0, Re.D)(Number(Y(A, R))) });
        }
        function Ot(S) {
          const A = (0, Z.jR)($.iA.accountid, "library");
          if (!A) return (0, e.jsx)(p.t, { size: "small" });
          const R = Number.parseInt((0, T.j$)(S.args));
          let Q = A.verifiedList?.length || 0;
          switch (R) {
            case X.sd:
              Q = A.playableList?.length || 0;
              break;
            case X.V8:
              Q = A.unsupportedList?.length || 0;
              break;
            case X.YX:
              Q = A.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Re.D)(Number(Q)) });
        }
        function Gt(S) {
          const A = Number.parseInt((0, T.j$)(S.args)),
            R =
              "hide" in S.args && !!Number.parseInt((0, T.j$)(S.args, "hide"));
          return A >= 0
            ? (0, e.jsx)(Pt, { nDoorIndex: A, bHide: R, children: S.children })
            : null;
        }
        function Pt(S) {
          const { nDoorIndex: A, bHide: R, children: Q } = S,
            K = (0, z.OM)(A);
          return K == null
            ? null
            : (K && !R) || (!K && R)
              ? (0, e.jsx)(e.Fragment, { children: S.children })
              : null;
        }
        function Ne(S) {
          return (0, e.jsx)("span", {
            className: N.LocalizeBlock,
            children: (0, O.oW)(
              S.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function vt(S) {
          let A = (0, T.j$)(S.args);
          return A
            ? (0, e.jsx)(Qe, { giveawayid: A })
            : (0, e.jsx)(f.Fragment, {});
        }
        const Ut = void 0;
        function st(S) {
          return (0, e.jsx)(x, { ...S, PreviewActions: Ut });
        }
        var qe = s(71698),
          P = s(94520);
        function pt(S) {
          const { bSalePage: A } = S,
            [R, Q] = f.useState(!1);
          return (
            (0, qe.H)(R, A),
            f.useEffect(() => {
              j.Vw.Init(new i.D($.TS.WEBAPI_BASE_URL)), ge.O3.Init(), Q(!0);
            }, []),
            f.useEffect(() => {
              const K = (0, O.l4)();
              K && F.locale(K);
            }, []),
            R
              ? A
                ? (0, e.jsx)(P.d3, { dictionary: be(), children: S.children })
                : S.children
              : null
          );
        }
      },
      52671: (ae, fe, s) => {
        "use strict";
        s.r(fe), s.d(fe, { default: () => O });
        var e = s(7850),
          F = s(90626),
          f = s(92757),
          i = s(82559),
          j = s(57223),
          ge = s(25792);
        class O extends F.Component {
          state = { bIsLoading: !0 };
          componentDidMount() {
            j.A.Get(), this.setState({ bIsLoading: !1 });
          }
          render() {
            return this.state.bIsLoading
              ? null
              : (0, e.jsx)(ge.tH, {
                  children: (0, e.jsxs)(f.dO, {
                    children: [
                      (0, e.jsx)(f.qh, {
                        exact: !0,
                        path: "/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss",
                        component: i.A,
                      }),
                      (0, e.jsx)(f.qh, { children: !1 }),
                    ],
                  }),
                });
          }
        }
      },
      87278: (ae, fe, s) => {
        "use strict";
        s.r(fe), s.d(fe, { default: () => ln });
        var e = s(7850),
          F = s(58732),
          f = s(57223),
          i = s(72604),
          j = s(3166),
          ge = s(41735),
          O = s.n(ge),
          $ = s(34592);
        class X {
          static s_Singleton;
          m_rgRSSEnabledClans = [];
          GetAllRSSEnabledClans() {
            return this.m_rgRSSEnabledClans;
          }
          GetTrustedEnabledClans(n) {
            return this.m_rgRSSEnabledClans
              .filter((r) => r.is_trusted_press == n)
              .map((r) => r.clan_accoundid);
          }
          static Get() {
            return (
              X.s_Singleton ||
                ((X.s_Singleton = new X()), X.s_Singleton.Init()),
              X.s_Singleton
            );
          }
          Init() {
            let n = (0, j.Tc)("rssaccountinfo", "application_config");
            this.ValidateRSSAccountConfig(n) && (this.m_rgRSSEnabledClans = n);
          }
          ValidateRSSAccountConfig(n) {
            const r = n;
            return (
              r &&
              Array.isArray(r) &&
              r.length > 0 &&
              typeof r[0] == "object" &&
              typeof r[0].clan_accoundid == "number"
            );
          }
          async LoadKnownAllRSSInfo() {
            const n = new Array(),
              r = f.A.Get();
            this.m_rgRSSEnabledClans.forEach((o) => {
              r.BHasClanIDLoaded(o.clan_accoundid) ||
                n.push(r.QueueCuratorAdminInfoLoad(o.clan_accoundid));
            }),
              await Promise.all(n);
          }
          ExtractWithoutRSSAutomation() {
            const n = [],
              r = f.A.Get();
            return (
              this.m_rgRSSEnabledClans.forEach((o) => {
                const l = r.GetRSSAdminForClanAccountID(o.clan_accoundid);
                l && !l.BIsAutomationEnabled() && n.push(o.clan_accoundid);
              }),
              n
            );
          }
          async HintLoadAccounts() {}
          async ReindexClanEventsAndReloadAccount(n) {
            const r =
                j.TS.STORE_BASE_URL + "events_admin/ajaxflushandreindexrss",
              o = new FormData();
            o.set("sessionid", (0, j.KC)()), o.append("clanids", "" + n);
            try {
              if (
                (await O().post(r, o, { withCredentials: !0 }))?.data
                  ?.success == i.R
              )
                return !0;
            } catch (l) {
              const c = (0, $.H)(l);
              console.error(
                "Failed to ReindexClanEventsAndReloadAccount: " + c.strErrorMsg,
                c,
              );
            }
            return !1;
          }
        }
        var ie = s(82559),
          _ = s(75844),
          w = s(90626),
          k = s(92757),
          V = s(76559),
          D = s(813),
          U = s(16412),
          Y = s(25792),
          T = s(13784),
          Z = s(88003),
          z = s(36118),
          M = s(85599),
          I = s(71421),
          m = s(36707),
          p = s(82734),
          d = s(18210),
          t = s(52081),
          g = s.n(t),
          u = s(96538),
          x = s(2259),
          E = s(24642);
        const N = (a) => {
            const [n, r] = (0, w.useState)(!0);
            if (
              ((0, w.useEffect)(() => {
                (async () => (
                  D.ac.Init(), await X.Get().HintLoadAccounts(), r(!1)
                ))();
              }, []),
              n)
            )
              return (0, e.jsx)(M.t, {
                string: (0, d.we)("#Loading"),
                size: "medium",
              });
            const o = X.Get().GetTrustedEnabledClans(!0),
              l = X.Get().GetTrustedEnabledClans(!1);
            return (0, e.jsx)("div", {
              children: (0, e.jsxs)(Y.tH, {
                children: [
                  (0, e.jsx)("h1", {
                    children: (0, d.we)("#RSSModeration_Title"),
                  }),
                  (0, e.jsx)(de, {}),
                  (0, e.jsx)(te, {
                    rgClanIDs: X.Get()
                      .GetAllRSSEnabledClans()
                      .map((c) => c.clan_accoundid),
                  }),
                  (0, e.jsx)(Te, {
                    rgClanIDs: o,
                    strTitle: (0, d.we)("#RSSModeration_TrustTitle"),
                  }),
                  (0, e.jsx)(Te, {
                    rgClanIDs: l,
                    strTitle: (0, d.we)("#RSSModeration_RestTitle"),
                  }),
                ],
              }),
            });
          },
          ee = (0, k.y)(N),
          de = (0, _.PA)((a) => {
            const [n, r] = (0, w.useState)(!1),
              [o, l] = (0, w.useState)(void 0);
            return n
              ? (0, e.jsx)(M.t, {
                  string: (0, d.we)("#Loading"),
                  size: "medium",
                })
              : o !== void 0
                ? o.length > 0
                  ? (0, e.jsx)(Te, {
                      rgClanIDs: o,
                      strTitle: (0, d.we)("#RSSModeration_InactiveAutomation"),
                    })
                  : (0, e.jsx)("div", {
                      children: (0, d.we)(
                        "#RSSModreation_AllAutomationEnabled",
                      ),
                    })
                : (0, e.jsxs)(U.$n, {
                    onClick: async () => {
                      r(!0),
                        await X.Get().LoadKnownAllRSSInfo(),
                        l(X.Get().ExtractWithoutRSSAutomation()),
                        r(!1);
                    },
                    children: [(0, d.we)("#RSSModeration_FindInActive"), " "],
                  });
          }),
          Te = (a) => {
            const { rgClanIDs: n, strTitle: r } = a,
              [o, l] = (0, w.useState)(!1);
            let c = null;
            return (
              o || (c = n.map((h) => (0, e.jsx)(we, { clanAccountID: h }, h))),
              (0, e.jsxs)("div", {
                className: (0, m.A)(g().SectionContainer),
                children: [
                  (0, e.jsxs)("h2", {
                    className: (0, m.A)(g().ModSectionTitle),
                    onDoubleClick: () => l(!o),
                    children: [
                      r,
                      (0, e.jsx)("span", { children: "\xA0" }),
                      (0, e.jsx)(U.$n, {
                        className: g().ResizeButton,
                        onClick: () => l(!o),
                        children: o
                          ? (0, e.jsx)(z.hz4, {})
                          : (0, e.jsx)(z.Xjb, {}),
                      }),
                    ],
                  }),
                  o &&
                    (0, e.jsx)(U.$n, {
                      onClick: () => l(!1),
                      children: (0, d.we)("#Sale_ShowContents"),
                    }),
                  c,
                ],
              })
            );
          },
          we = (0, _.PA)((a) => {
            const { clanAccountID: n } = a;
            return D.ac.BHasClanInfoLoadedByAccountID(n) &&
              f.A.Get().BHasClanIDLoaded(n)
              ? (0, e.jsx)(Ge, {
                  clanInfo: D.ac.GetClanInfoByClanAccountID(n),
                  rssAdminInfo: f.A.Get().GetRSSAdminForClanAccountID(n),
                })
              : (0, e.jsx)(ye, { clanAccountID: n });
          }),
          ye = (a) => {
            const { clanAccountID: n } = a,
              r = "500px",
              o = async () => {
                const c = V.b.InitFromClanID(n);
                await Promise.all([
                  D.ac.LoadClanInfoForClanSteamID(c),
                  f.A.Get().QueueCuratorAdminInfoLoad(n),
                ]);
              },
              l = (0, x.OO)(
                { onEnter: o },
                { rootMargin: `${r} 0px ${r} 0px` },
              );
            return (0, e.jsx)("div", {
              ref: l,
              className: g().TileContainer,
              children: (0, e.jsxs)("div", {
                children: [(0, d.we)("#Loading"), " - ", n],
              }),
            });
          },
          Ge = (a) => {
            const { clanInfo: n, rssAdminInfo: r } = a,
              [o, l] = (0, w.useState)(!1),
              c = j.TS.STORE_BASE_URL + "newshub/group/" + n.clanAccountID,
              h =
                j.TS.STORE_BASE_URL +
                "curator/" +
                n.clanAccountID +
                "/admin/manage_rss",
              v = j.TS.COMMUNITY_BASE_URL + "group/" + n.clanAccountID,
              H =
                "https://steamsupport.valvesoftware.com/clan/overview/" +
                V.b.InitFromClanID(n.clanAccountID).ConvertTo64BitString(),
              se = f.A.Get().GetRSSAdminStats(n.clanAccountID);
            return (0, e.jsxs)("div", {
              className: (0, m.A)(g().TileContainer),
              children: [
                (0, e.jsxs)("div", {
                  className: (0, m.A)(g().TileSpread),
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          children: [n.group_name, " - ", n.clanAccountID],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, d.we)("#CuratorAdmin_RSSFeed"),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("a", {
                              href: r.GetRSSUrl(),
                              children: r.GetRSSUrl(),
                            }),
                          ],
                        }),
                        !!se &&
                          (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)("div", {
                                children: (0, d.we)(
                                  "#RSSModeration_TotalEvents",
                                  (0, E.D)(se.total_event_count),
                                ),
                              }),
                              (0, e.jsx)("div", {
                                children: (0, d.we)(
                                  "#RSSModeration_RSSEvents",
                                  (0, E.D)(se.rss_event_count),
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsx)(U.$n, {
                          onClick: () => l(!o),
                          children: (0, d.we)(
                            o
                              ? "#Bbcode_Expand_Details_Expanded"
                              : "#Bbcode_Expand_Details_Collapsed",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsxs)("ul", {
                        children: [
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: c,
                              children: (0, d.we)(
                                "#EventDisplay_NewsHubSubtitle",
                              ),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: h,
                              children: (0, d.we)(
                                "#CuratorAdmin_RSSFeed_title",
                              ),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: v,
                              children: (0, d.we)("#RSSModeration_GroupPage"),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: H,
                              children: (0, d.we)("#RSSModeration_SupportPage"),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(te, {
                              rgClanIDs: [n.clanAccountID],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: g().CreatorCtn,
                      children: (0, e.jsx)(T.hA, {
                        bHideCreatorType: !0,
                        creatorID: {
                          name: null,
                          clan_account_id: n.clanAccountID,
                          type: "developer",
                        },
                        bSmallFormat: !0,
                      }),
                    }),
                  ],
                }),
                !!o &&
                  (0, e.jsx)(e.Fragment, {
                    children: r.BHasSavedRSSURL()
                      ? (0, e.jsx)(ie.q, { strRssURL: r.GetRSSUrl(), admin: r })
                      : (0, e.jsx)("div", {
                          children: (0, d.we)("#RSSModeration_NoRSSFeed"),
                        }),
                  }),
              ],
            });
          },
          te = (a) => {
            const n = (r) => {
              (0, Z.pg)((0, e.jsx)(Pe, { ...a }), (0, p.uX)(r));
            };
            return (0, e.jsx)(I.he, {
              toolTipContent: (0, d.we)("#RSSModeration_ReindexAndReload_ttip"),
              children: (0, e.jsx)(U.$n, {
                onClick: n,
                children: (0, d.we)("#RSSModeration_ReindexAndReload"),
              }),
            });
          },
          Pe = (a) => {
            const [n, r] = (0, w.useState)(void 0),
              [o, l] = (0, w.useState)(!1),
              [c, h] = (0, w.useState)(void 0),
              v = () => a.closeModal && a.closeModal(),
              B = async () => {
                let H = 0;
                r(H);
                for (let se = 0; se < a.rgClanIDs.length; ++se) {
                  let ne = a.rgClanIDs[se];
                  if (await X.Get().ReindexClanEventsAndReloadAccount(ne))
                    (H += 1), r(H);
                  else {
                    h((0, d.we)("#Error_Generic_Label"));
                    break;
                  }
                }
                l(!0);
              };
            return (0, e.jsx)(u.x_, {
              onEscKeypress: v,
              children: (0, e.jsxs)(U.UC, {
                children: [
                  (0, e.jsxs)(U.Y9, {
                    children: [
                      " ",
                      (0, d.we)("#RSSModeration_ReindexAndReload"),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)(U.nB, {
                    children: [
                      (0, e.jsxs)(U.a3, {
                        children: [
                          n === void 0
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, d.we)(
                                      "#RSSModeration_Reindex_Verify",
                                      a.rgClanIDs.length,
                                    ),
                                  }),
                                  (0, e.jsx)(U.jn, {
                                    onClick: B,
                                    children: (0, d.we)("#Button_Continue"),
                                  }),
                                ],
                              })
                            : (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, d.we)(
                                      "#RSSModeration_Reindex_Action",
                                      n,
                                      a.rgClanIDs.length,
                                    ),
                                  }),
                                  o
                                    ? (0, e.jsx)("span", {
                                        children: (0, d.we)(
                                          "#EventEditor_ImportFromHTML_ConvertFinished",
                                        ),
                                      })
                                    : (0, e.jsx)(M.t, {
                                        size: "small",
                                        string: (0, d.we)("#Updating"),
                                      }),
                                ],
                              }),
                          !!c && (0, e.jsxs)("span", { children: [c, " "] }),
                        ],
                      }),
                      (0, e.jsx)(U.wi, {
                        children: (0, e.jsx)(U.$n, {
                          onClick: v,
                          children: (0, d.we)(
                            o ? "#Button_OK" : "#Button_Cancel",
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
        var me = s(77495),
          re = s(30096),
          J = s(99412),
          W = s(14947),
          Ke = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          y = (a, n, r, o) => {
            for (
              var l = o > 1 ? void 0 : o ? b(n, r) : n, c = a.length - 1, h;
              c >= 0;
              c--
            )
              (h = a[c]) && (l = (o ? h(n, r, l) : h(l)) || l);
            return o && l && Ke(n, r, l), l;
          };
        const G = class lt {
          static s_Singleton;
          m_mapEventGIDToSolrData = new Map();
          m_listEvents = new Array();
          BHasSolrEvent(n) {
            return this.m_mapEventGIDToSolrData.has(n);
          }
          GetAllSolrEvents() {
            return this.m_listEvents;
          }
          static Get() {
            return (
              lt.s_Singleton || (lt.s_Singleton = new lt()), lt.s_Singleton
            );
          }
          constructor() {
            (0, W.Gn)(this);
          }
          ClearAllSolrEvents() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          async LoadPartnerEventForQueryIncremental(
            n,
            r = 0,
            o = 10,
            l,
            c,
            h,
            v,
            B,
            H,
          ) {
            const se = await this.GetLatestPartnerEvents(
              n,
              r,
              o,
              l,
              c,
              h,
              v,
              B,
              H,
            );
            let ne = new Array();
            return (
              (0, W.h5)(() => {
                se.forEach((Ae) => {
                  this.m_mapEventGIDToSolrData.has(Ae.unique_id) ||
                    (ne.push(Ae),
                    this.m_mapEventGIDToSolrData.set(Ae.unique_id, Ae),
                    this.m_listEvents.push(Ae));
                });
              }),
              ne
            );
          }
          async GetLatestPartnerEvents(
            n,
            r = 0,
            o = 10,
            l,
            c,
            h,
            v,
            B,
            H,
            se,
            ne,
            Ae,
            le,
          ) {
            const Ie =
                j.TS.STORE_BASE_URL + "events_admin/ajaxgetlatestpartnerevents",
              De = {
                page: r,
                count: o,
                date: v,
                appids: l === void 0 ? void 0 : l.join(","),
                required_tags: c === void 0 ? void 0 : c.join(","),
                exclude_tags: h === void 0 ? void 0 : h.join(","),
                eventtypefilter: B === void 0 ? void 0 : B.join(","),
                orderByVisibility: H || void 0,
                creator_home_clan_id: se === void 0 ? void 0 : se.join(","),
                showUnpublished: Ae === void 0 ? void 0 : Ae,
                sale_only: le === void 0 ? void 0 : le,
                term: ne === void 0 ? void 0 : ne,
              },
              Ht = await O().get(Ie, {
                params: De,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
            return Ht.data ? Ht.data.docs : [];
          }
        };
        y([W.sH], G.prototype, "m_mapEventGIDToSolrData", 2),
          y([W.sH], G.prototype, "m_listEvents", 2),
          y([W.XI], G.prototype, "ClearAllSolrEvents", 1);
        let C = G;
        var q = s(9046),
          ue = Object.defineProperty,
          Se = Object.getOwnPropertyDescriptor,
          he = (a, n, r, o) => {
            for (
              var l = o > 1 ? void 0 : o ? Se(n, r) : n, c = a.length - 1, h;
              c >= 0;
              c--
            )
              (h = a[c]) && (l = (o ? h(n, r, l) : h(l)) || l);
            return o && l && ue(n, r, l), l;
          };
        class ve {
          constructor() {
            (0, W.Gn)(this);
          }
          m_backfill = void 0;
          m_mapEventGIDProcessed = new Map();
          m_vecEventGID = new Array();
          m_bBackfillInProgress = !1;
          m_nProcessed = 0;
          m_nSuccesses = 0;
          m_nFailures = 0;
          m_nWarning = 0;
          m_nSkipped = 0;
          GetBackfill() {
            return this.m_backfill;
          }
          SetBackfill(n) {
            this.m_backfill = n;
          }
          StartBackfill(n) {
            (this.m_backfill = n), (this.m_bBackfillInProgress = !0);
          }
          CompleteBackfill(n) {
            (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
          }
          BIsBackkFillInProgress() {
            return this.m_bBackfillInProgress;
          }
          GetEventBackfillProgress() {
            return this.m_mapEventGIDProcessed;
          }
          CreateOrGetBackfillProgess(n) {
            return (
              this.m_mapEventGIDProcessed.has(n) ||
                (this.m_mapEventGIDProcessed.set(n, { bProcessing: !1 }),
                this.m_vecEventGID.push(n)),
              this.m_mapEventGIDProcessed.get(n)
            );
          }
          BHasProgress(n) {
            return this.m_mapEventGIDProcessed.has(n);
          }
          GetBackfillGIDs() {
            return this.m_vecEventGID;
          }
          CloseProgress(n, r) {
            (this.m_nProcessed += 1),
              r.bAlreadyProcessed || r.bSkipped
                ? (this.m_nSkipped += 1)
                : r.bSucceeded
                  ? (this.m_nSuccesses += 1)
                  : r.bFailed && (this.m_nFailures += 1),
              r.bWarning && (this.m_nWarning += 1),
              this.m_mapEventGIDProcessed.set(n, r);
          }
        }
        he([W.sH], ve.prototype, "m_backfill", 2),
          he([W.sH], ve.prototype, "m_mapEventGIDProcessed", 2),
          he([W.sH], ve.prototype, "m_bBackfillInProgress", 2),
          he([W.sH], ve.prototype, "m_nProcessed", 2),
          he([W.sH], ve.prototype, "m_nSuccesses", 2),
          he([W.sH], ve.prototype, "m_nFailures", 2),
          he([W.sH], ve.prototype, "m_nWarning", 2),
          he([W.sH], ve.prototype, "m_nSkipped", 2),
          he([W.XI], ve.prototype, "StartBackfill", 1),
          he([W.XI], ve.prototype, "CompleteBackfill", 1),
          he([W.XI], ve.prototype, "CloseProgress", 1);
        const oe = new ve();
        var Ye = s(45559),
          mt = s(87498),
          ut = s(56492),
          ft = s(75909),
          yt = s(64),
          Xe = s(29630),
          gt = s(6658),
          xt = Object.defineProperty,
          ht = Object.getOwnPropertyDescriptor,
          nt = (a, n, r, o) => {
            for (
              var l = o > 1 ? void 0 : o ? ht(n, r) : n, c = a.length - 1, h;
              c >= 0;
              c--
            )
              (h = a[c]) && (l = (o ? h(n, r, l) : h(l)) || l);
            return o && l && xt(n, r, l), l;
          };
        const At = 25,
          wt = 5e3;
        let He = class extends w.Component {
          m_cancelSignal = O().CancelToken.source();
          m_nImageID = 0;
          m_mapArtworkResizeSuccess = new Map();
          state = { eBackfillState: void 0 };
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventBackfillLanding component unmounted",
            );
          }
          OnArtworkResizeBackfill() {
            this.state.eBackfillState == null &&
              this.setState(
                { eBackfillState: "started" },
                this.BeginArtworkResize,
              );
          }
          BeginArtworkResize() {
            this.m_mapArtworkResizeSuccess.set("capsule", 0),
              this.m_mapArtworkResizeSuccess.set("spotlight", 0),
              this.m_mapArtworkResizeSuccess.set("background", 0),
              this.RunArtworkResizeBackfill()
                .then(() => this.setState({ eBackfillState: "success" }))
                .catch((a) => {
                  let n = (0, $.H)(a);
                  console.error(
                    "EventBackfillLanding: error " + n.strErrorMsg,
                    n,
                  ),
                    this.setState({ eBackfillState: "error" });
                });
          }
          async GetImageInfo(a, n, r = "") {
            const o = (0, gt.yh)(n),
              l = Xe.zU.GetHashFromHashAndExt(n) + r;
            return Xe.zU.AsyncGetImageResolution(
              a,
              l,
              o,
              this.m_cancelSignal,
              !0,
            );
          }
          HandleErrorFatal(a, n, r, o) {
            let l = (0, $.H)(n),
              c =
                "EventBackfillLanding: " +
                r +
                " on GID " +
                a +
                " : " +
                l.strErrorMsg;
            console.error(c, l),
              o
                ? ((o.bFailed = !0), (o.strMessage = c), oe.CloseProgress(a, o))
                : oe.CompleteBackfill("resize_image");
          }
          async HandleResizeForImageType(a, n, r, o, l) {
            for (let c = J.Bhc; c < a.length && c < J.bP9; ++c)
              if (a[c] && a[c].length > 0) {
                let h = a[c],
                  v = (0, gt.yh)(h);
                const B = new V.b(n.clan_steamid);
                if (v) {
                  let H = await this.GetImageInfo(B, h).catch(
                    (se) => (
                      this.HandleErrorFatal(
                        null,
                        se,
                        "GetImageInfo Original",
                        r,
                      ),
                      { height: 0, width: 0, success: i.zi }
                    ),
                  );
                  if (H.success == i.R && (0, mt.yu)(H.width, H.height, o, !0))
                    if (
                      (
                        await this.GetImageInfo(B, h, l).catch(
                          (ne) => (
                            this.HandleErrorFatal(
                              null,
                              ne,
                              "GetImageInfo Resize",
                              r,
                            ),
                            { height: 0, width: 0, success: i.zi }
                          ),
                        )
                      ).success == i.R
                    )
                      r.bAlreadyProcessed = !0;
                    else {
                      r.bProcessing = !0;
                      let ne = Xe.zU.GetHashFromHashAndExt(h),
                        Ae = Xe.zU.GetExtStringFromHashAndExt(h),
                        le = (0, yt.K_)(o);
                      if (le)
                        try {
                          const Ie = await (0, ft.bT)(
                            this.m_cancelSignal.token,
                            B,
                            ne,
                            Ae,
                            le,
                          );
                          console.log("success on the resize request"),
                            Ie == le.length
                              ? ((r.bSucceeded = !0),
                                this.m_mapArtworkResizeSuccess.set(
                                  o,
                                  this.m_mapArtworkResizeSuccess.get(o) + 1,
                                ))
                              : ((r.bFailed = !0),
                                (r.strMessage =
                                  "Did not resize all: " +
                                  o +
                                  " " +
                                  Ie +
                                  " / " +
                                  le.length));
                        } catch (Ie) {
                          r.bFailed = !0;
                          let De = (0, $.H)(Ie);
                          (r.strMessage = De.strErrorMsg),
                            console.error("Resize: " + De.strErrorMsg, De);
                        }
                      else
                        (r.bFailed = !0),
                          console.error(
                            "Resize: resize request couldn't be determined from the artwork type",
                          );
                    }
                  else r.bSkipped = !0;
                } else r.bSkipped = !0;
              }
          }
          async RunArtworkResizeBackfill() {
            oe.StartBackfill("resize_image");
            let a = 0;
            for (; oe.BIsBackkFillInProgress(); ) {
              let n = await C.Get()
                .LoadPartnerEventForQueryIncremental(this.m_cancelSignal, a, At)
                .catch((r) =>
                  this.HandleErrorFatal(
                    null,
                    r,
                    "LoadPartnerEventForQueryIncremental",
                  ),
                );
              if (!n || n.length == 0) {
                oe.CompleteBackfill("resize_image"),
                  console.log("Compelted the backfill");
                break;
              }
              a += n.length;
              for (let r = 0; r < n.length; ++r) {
                let o = n[r],
                  l = oe.CreateOrGetBackfillProgess(o.unique_id);
                if (!o.announcement_gid || o.announcement_gid.length == 0) {
                  (l.bSkipped = !0),
                    (l.bWarning = !0),
                    oe.CloseProgress(o.unique_id, l);
                  continue;
                }
                if (
                  (await me.O3.LoadPartnerEventFromAnnoucementGID(
                    Number(o.appid),
                    o.announcement_gid,
                    100,
                  ).catch((h) => {
                    this.HandleErrorFatal(
                      o.announcement_gid,
                      h,
                      "LoadPartnerEventFromAnnoucementGID",
                      l,
                    );
                  }),
                  l.bFailed)
                )
                  continue;
                let c = me.O3.GetClanEventFromAnnouncementGID(
                  o.announcement_gid,
                );
                if (!c) {
                  (l.bFailed = !0),
                    (l.strMessage = "Failed to load the event: " + o.unique_id),
                    oe.CloseProgress(o.unique_id, l);
                  continue;
                }
                if (l.bSucceeded || l.bFailed || l.bAlreadyProcessed) {
                  (l.bAlreadyProcessed = !0), oe.CloseProgress(o.unique_id, l);
                  continue;
                }
                if (
                  ((l.bAnalysing = !0),
                  this.setState({
                    strInfo:
                      "Processing " +
                      oe.GetBackfillGIDs().length +
                      " Appid: " +
                      c.appid +
                      " Event " +
                      c.GID +
                      " Title: " +
                      c.GetNameWithFallback(J.Bhc),
                  }),
                  c.jsondata && c.jsondata.localized_capsule_image)
                ) {
                  let h = c.jsondata.localized_capsule_image;
                  await this.HandleResizeForImageType(
                    h,
                    o,
                    l,
                    "capsule",
                    q.wI.capsule_main,
                  ).catch((v) =>
                    this.HandleErrorFatal(
                      null,
                      v,
                      "HandleResizeForImageType capsule",
                      l,
                    ),
                  );
                }
                if (c.jsondata && c.jsondata.localized_title_image) {
                  let h = c.jsondata.localized_title_image;
                  await this.HandleResizeForImageType(
                    h,
                    o,
                    l,
                    "background",
                    q.wI.background_mini,
                  ).catch((v) =>
                    this.HandleErrorFatal(
                      null,
                      v,
                      "HandleResizeForImageType background",
                      l,
                    ),
                  );
                }
                if (c.jsondata && c.jsondata.localized_spotlight_image) {
                  let h = c.jsondata.localized_spotlight_image;
                  await this.HandleResizeForImageType(
                    h,
                    o,
                    l,
                    "spotlight",
                    q.wI.spotlight_main,
                  ).catch((v) =>
                    this.HandleErrorFatal(
                      null,
                      v,
                      "HandleResizeForImageType spotlight",
                      l,
                    ),
                  );
                }
                if (
                  (oe.CloseProgress(o.unique_id, l),
                  !oe.BIsBackkFillInProgress())
                )
                  break;
              }
              if (oe.m_nFailures > wt) {
                console.log("Hit too many errors, stoppinng the backfill");
                break;
              }
            }
          }
          RenderFailure() {
            let a = new Array();
            return (
              oe.m_nFailures > 0 &&
                oe.GetBackfillGIDs().forEach((n) => {
                  let r = oe.GetEventBackfillProgress().get(n);
                  if (r && r.bFailed) {
                    let o = me.O3.GetClanEventModel(n);
                    o &&
                      a.push(
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              (0, e.jsx)(ut.tj, {
                                eventModel: o,
                                route: ut.PH.k_eView,
                                children: o.GetNameWithFallback(J.Bhc),
                              }),
                              (0, e.jsx)("div", {
                                className: Ye.Error,
                                children: r.strMessage,
                              }),
                            ],
                          },
                          n,
                        ),
                      );
                  }
                }),
              a
            );
          }
          RenderResizeProgress() {
            let a = new Array();
            return (
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Capsule Resized: ",
                      this.m_mapArtworkResizeSuccess.get("capsule"),
                      " ",
                    ],
                  },
                  "res_capsule",
                ),
              ),
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Header Resized: ",
                      this.m_mapArtworkResizeSuccess.get("background"),
                      " ",
                    ],
                  },
                  "res_header",
                ),
              ),
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Spotlight Resized: ",
                      this.m_mapArtworkResizeSuccess.get("spotlight"),
                      " ",
                    ],
                  },
                  "res_spotlightr",
                ),
              ),
              a
            );
          }
          render() {
            let a = this.RenderFailure(),
              n = this.m_mapArtworkResizeSuccess.has("capsule")
                ? this.RenderResizeProgress()
                : void 0;
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("h2", {
                  children: "Partner Events Backfill Processing Page",
                }),
                this.state.eBackfillState == null &&
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("button", {
                      onClick: this.OnArtworkResizeBackfill,
                      children: "Begin Artwork Resize Backfill",
                    }),
                  }),
                (0, e.jsx)("div", {
                  children: (0, e.jsx)("button", {
                    onClick: () => oe.CompleteBackfill("resize_image"),
                    children: "Stop Backfill",
                  }),
                }),
                this.state.strInfo &&
                  (0, e.jsxs)("div", {
                    children: ["Processing: ", this.state.strInfo],
                  }),
                (0, e.jsxs)("div", {
                  children: ["Events Processed: ", oe.m_nProcessed],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Succeeded: ", oe.m_nSuccesses],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Warning: ", oe.m_nWarning],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Failed: ", oe.m_nFailures],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Skipped: ", oe.m_nSkipped],
                }),
                a.length > 0 &&
                  (0, e.jsxs)(w.Fragment, {
                    children: [
                      (0, e.jsx)("h2", { children: "Failure Info" }),
                      a,
                    ],
                  }),
                !!n &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h2", { children: "Resizing Actions" }),
                      n,
                    ],
                  }),
                this.state.eBackfillState == "started" &&
                  (0, e.jsx)(M.t, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress",
                  }),
              ],
            });
          }
        };
        nt([re.oI], He.prototype, "OnArtworkResizeBackfill", 1),
          nt([re.oI], He.prototype, "BeginArtworkResize", 1),
          (He = nt([_.PA], He));
        var Mt = s(65946),
          It = s(92298),
          Ce = s.n(It),
          Re = s(5634),
          Ue = s(73259),
          Qe = s(71684),
          bt = Object.defineProperty,
          Et = Object.getOwnPropertyDescriptor,
          Fe = (a, n, r, o) => {
            for (
              var l = o > 1 ? void 0 : o ? Et(n, r) : n, c = a.length - 1, h;
              c >= 0;
              c--
            )
              (h = a[c]) && (l = (o ? h(n, r, l) : h(l)) || l);
            return o && l && bt(n, r, l), l;
          };
        const jt = s(87937),
          Dt = ["mod_reviewed", "auto_migrated"],
          Tt = 20,
          Le = class dt {
            static s_Singleton;
            selectedTags = void 0;
            excludedTags = void 0;
            filterDate = void 0;
            filterDateAsString = void 0;
            eventsToLoadPerPaging = Tt;
            filterEventTypes = void 0;
            bOrderByVisibilityStartTime = !1;
            bUseCustomQuery = !1;
            static Get() {
              return (
                dt.s_Singleton || (dt.s_Singleton = new dt()), dt.s_Singleton
              );
            }
            constructor() {
              (0, W.Gn)(this);
            }
            Init(n) {
              const r = new URLSearchParams(window.location.search);
              let o;
              r.has("selectedTags") &&
                (o = r
                  .getAll("selectedTags")
                  .filter(Boolean)
                  .map((H) => ({ label: H, value: H })));
              let l = !1,
                c = Dt.map((H) => ({ label: H, value: H }));
              r.has("excludedTags") &&
                ((c = r
                  .getAll("excludedTags")
                  .filter(Boolean)
                  .map((H) => ({ label: H, value: H }))),
                (l = c?.length > 0));
              let h;
              r.has("eventtype") &&
                (h = r
                  .getAll("eventtype")
                  .filter(Boolean)
                  .map((H) => {
                    const se = Number.parseInt(r.get("eventtype"));
                    return { label: (0, Qe.rG)(se), value: se };
                  }));
              let v;
              r.has("filterDate") &&
                r.get("filterDate")?.length > 0 &&
                (v = jt.unix(Number(r.get("filterDate"))));
              let B = !1;
              r.has("orderByVisibility") &&
                r.get("orderByVisibility")?.length > 0 &&
                (B = !!r.get("orderByVisibility")),
                (0, W.h5)(() => {
                  (this.selectedTags = o),
                    (this.excludedTags = c),
                    (this.filterEventTypes = h),
                    (this.filterDate = v),
                    (this.bOrderByVisibilityStartTime = B),
                    (this.bUseCustomQuery =
                      (o && o.length > 0) || l || (h && h.length > 0));
                });
            }
          };
        Fe([W.sH], Le.prototype, "selectedTags", 2),
          Fe([W.sH], Le.prototype, "excludedTags", 2),
          Fe([W.sH], Le.prototype, "filterDate", 2),
          Fe([W.sH], Le.prototype, "filterDateAsString", 2),
          Fe([W.sH], Le.prototype, "eventsToLoadPerPaging", 2),
          Fe([W.sH], Le.prototype, "filterEventTypes", 2),
          Fe([W.sH], Le.prototype, "bOrderByVisibilityStartTime", 2),
          Fe([W.sH], Le.prototype, "bUseCustomQuery", 2);
        let We = Le;
        var at = Object.defineProperty,
          Bt = Object.getOwnPropertyDescriptor,
          $e = (a, n, r, o) => {
            for (
              var l = o > 1 ? void 0 : o ? Bt(n, r) : n, c = a.length - 1, h;
              c >= 0;
              c--
            )
              (h = a[c]) && (l = (o ? h(n, r, l) : h(l)) || l);
            return o && l && at(n, r, l), l;
          },
          Oe = ((a) => (
            (a[(a.k_ModReviewed = 0)] = "k_ModReviewed"),
            (a[(a.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
            (a[(a.k_ChangeEventType = 2)] = "k_ChangeEventType"),
            (a[(a.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
            (a[(a.k_ModReReviewed = 4)] = "k_ModReReviewed"),
            (a[(a.k_ModRemovedFromSteamChina = 5)] =
              "k_ModRemovedFromSteamChina"),
            (a[(a.k_ModFlagAdultOnlyContent = 6)] =
              "k_ModFlagAdultOnlyContent"),
            (a[(a.k_ModRemoveAdultOnlyContent = 7)] =
              "k_ModRemoveAdultOnlyContent"),
            (a[(a.k_ModFlagHalloweenEvent = 8)] = "k_ModFlagHalloweenEvent"),
            (a[(a.k_ModRemoveHalloweenEvent = 9)] =
              "k_ModRemoveHalloweenEvent"),
            a
          ))(Oe || {});
        const rt = "ModAct";
        class _e {
          m_moderator;
          m_rtWhen;
          m_action;
          m_newEventType;
          m_newTagAdded;
          ToModString() {
            let n =
              rt +
              "_" +
              this.m_moderator +
              "_" +
              Math.floor(this.m_rtWhen) +
              "_" +
              this.m_action;
            switch (this.m_action) {
              case 2:
                n += "_" + this.m_newEventType;
                break;
              case 3:
                n += "_" + this.m_newTagAdded;
                break;
            }
            return n;
          }
          FromString(n) {
            let r = n.split("_");
            if (!r || r[0] !== rt) return !1;
            switch (
              ((this.m_moderator = Number(r[1])),
              (this.m_rtWhen = Number(r[2])),
              (this.m_action = Number(r[3])),
              this.m_action)
            ) {
              case 2:
                this.m_newEventType = Number(r[4]);
                break;
              case 3:
                this.m_newTagAdded = r.slice(4).join("_");
                break;
            }
            return !0;
          }
          SetActionChangeEvent(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = 2),
              (this.m_newEventType = n),
              this
            );
          }
          SetReviewAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 0 : 1),
              this
            );
          }
          SetAdultOnlyContentAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 6 : 7),
              this
            );
          }
          SetHalloweenEventTypeAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 8 : 9),
              this
            );
          }
          SetReReviewAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 4 : 1),
              this
            );
          }
          static IsAuditAction(n) {
            return n.startsWith(rt);
          }
          SetUpdateSeasonalTags(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = 3),
              (this.m_newTagAdded = n),
              this
            );
          }
        }
        const Je = class ct {
          static s_Singleton;
          m_mapEventGIDToSolrData = new Map();
          m_listEvents = new Array();
          BHasSolrEvent(n) {
            return this.m_mapEventGIDToSolrData.has(n);
          }
          GetAllSolrEvents() {
            return this.m_listEvents;
          }
          static Get() {
            return (
              ct.s_Singleton || (ct.s_Singleton = new ct()), ct.s_Singleton
            );
          }
          constructor() {
            (0, W.Gn)(this);
          }
          ClearAllSolrEvents() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          async LoadPartnerEventForModerationIncremental(n, r = 30) {
            const o =
              j.TS.STORE_BASE_URL +
              "events_admin/ajaxgetmoderationspecificpartnerevents";
            let l = 0;
            this.m_listEvents?.length &&
              (this.m_listEvents.forEach(
                (v) =>
                  (l = Math.max(
                    l,
                    Math.floor(Date.parse(v.last_modified_date) / 1e3),
                  )),
              ),
              this.m_listEvents.filter(
                (v) => Math.floor(Date.parse(v.last_modified_date) / 1e3) == l,
              ).length >= r && l++);
            const c = { start_time: l, count: r };
            try {
              const h = await O().get(o, {
                params: c,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
              if (n && n.token.reason) return [];
              if (h && h.data) {
                let v = new Array();
                return (
                  (0, W.h5)(() => {
                    h.data.docs.forEach((B) => {
                      this.m_mapEventGIDToSolrData.has(B.unique_id) ||
                        (v.push(B),
                        this.m_mapEventGIDToSolrData.set(B.unique_id, B),
                        this.m_listEvents.push(B));
                    });
                  }),
                  v
                );
              }
            } catch (h) {
              const v = (0, $.H)(h);
              console.error(
                "LoadPartnerEventForModerationIncremental failed:" +
                  v.strErrorMsg,
                v,
              );
            }
            return [];
          }
          async UpdateTagsOnPartnerEvent(n, r, o, l, c, h) {
            const v = j.TS.STORE_BASE_URL + "events_admin/ajaxupdatetags";
            let B = l.join(",");
            h && (l.length > 0 && (B += ","), (B += h.ToModString()));
            const H = new FormData();
            return (
              H.append("sessionid", (0, j.KC)()),
              H.append("clan_accountid", "" + r.GetAccountID()),
              H.append("gid_announcement", o),
              H.append("add_tags", B),
              H.append("remove_tags", c.join(",")),
              (
                await O().post(v, H, {
                  withCredentials: !0,
                  cancelToken: n.token,
                })
              ).data.tags
            );
          }
          async UpdatePartnerEventType(n, r, o, l) {
            const c = j.TS.STORE_BASE_URL + "events_admin/ajaxupdateeventtype",
              h = new FormData();
            h.append("sessionid", (0, j.KC)()),
              h.append("clan_accountid", "" + r.GetAccountID()),
              h.append("gid_event", o),
              h.append("new_event_type", "" + l),
              await O().post(c, h, {
                withCredentials: !0,
                cancelToken: n.token,
              });
          }
        };
        $e([W.sH], Je.prototype, "m_mapEventGIDToSolrData", 2),
          $e([W.sH], Je.prototype, "m_listEvents", 2),
          $e([W.XI], Je.prototype, "ClearAllSolrEvents", 1);
        let ke = Je;
        var xe = s(10142),
          Ct = s(91424),
          Ze = s(92264),
          be = s(61311),
          Rt = s(35098);
        function Lt(a) {
          const { accountID: n, locToken: r } = a,
            o = w.useMemo(() => V.b.InitFromAccountID(n), [n]),
            { data: l } = (0, Rt.js)(n);
          let c =
            "https://steamsupport.valvesoftware.com/account/overview/" +
            o.ConvertTo64BitString();
          return (0, e.jsx)("div", {
            children: (0, d.PP)(
              r,
              (0, e.jsx)("a", {
                href: c,
                target: j.TS.IN_CLIENT ? void 0 : "_blank",
                children: l
                  ? (0, e.jsx)(w.Fragment, { children: l.m_strPlayerName })
                  : (0, e.jsx)(w.Fragment, {
                      children: (0, e.jsx)("span", { children: n }),
                    }),
              }),
            ),
          });
        }
        function Ot(a) {
          const { modAction: n } = a,
            r =
              (0, d.TW)(n.m_rtWhen) +
              " @ " +
              (0, Ze.KC)(n.m_rtWhen, { bForce24HourClock: !1 }),
            o = (0, e.jsx)(Lt, {
              locToken: "#EventModTile_Moderator",
              accountID: n.m_moderator,
            });
          switch (n.m_action) {
            case Oe.k_ModReviewed:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: (0, d.PP)(
                  "#EventModTile_Action_Reviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Oe.k_ModUnreviewed:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: (0, d.PP)(
                  "#EventModTile_Action_UnReviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Oe.k_ChangeEventType:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: (0, d.PP)(
                  "#EventModTile_Action_NewEventType",
                  (0, e.jsx)("span", { children: r }),
                  o,
                  (0, Qe.rG)(n.m_newEventType),
                ),
              });
            case Oe.k_UpdateSeasonTags:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: (0, d.PP)(
                  "#EventModTile_Action_SeasonTagUpdate",
                  (0, e.jsx)("span", { children: r }),
                  o,
                  n.m_newTagAdded,
                ),
              });
            case Oe.k_ModReReviewed:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: (0, d.PP)(
                  "#EventModTile_Action_ReReviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Oe.k_ModRemovedFromSteamChina:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: (0, d.PP)(
                  "#EventModTile_Action_RemoveFromSC",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Oe.k_ModFlagAdultOnlyContent:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: (0, d.PP)(
                  "#EventModTile_Action_FlagAdultContent",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Oe.k_ModRemoveAdultOnlyContent:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: (0, d.PP)(
                  "#EventModTile_Action_RemoveAdultContent",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            default:
              return (0, e.jsx)("div", {
                className: be.ModeratorAuditActionCtn,
                children: n.ToModString(),
              });
          }
        }
        function Gt(a) {
          const [n, r] = w.useState(!0),
            o = 3,
            l = (H) => {
              const { eventModel: se } = a;
              return H.map((ne) => {
                const Ae = new _e();
                return (
                  Ae.FromString(ne),
                  (0, e.jsx)(Ot, { modAction: Ae }, se.GID + ne)
                );
              });
            },
            { eventModel: c } = a;
          let h = c
            .GetAllTags()
            .filter((H) => _e.IsAuditAction(H))
            .reverse();
          const v = h.length,
            B = h.length > o && n;
          return h.length == 0
            ? null
            : (B && (h = h.splice(0, o)),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h4", {
                    children: (0, d.we)("#EventModTile_Action_Title"),
                  }),
                  l(h),
                  B &&
                    (0, e.jsx)("a", {
                      onClick: () => r(!1),
                      className: be.ExpandModActions,
                      children: (0, d.we)("#EventModTile_Action_More", v - o),
                    }),
                  !B &&
                    v > o &&
                    (0, e.jsx)("a", {
                      onClick: () => r(!0),
                      className: be.ExpandModActions,
                      children: (0, d.we)("#EventModTile_Action_Hide"),
                    }),
                ],
              }));
        }
        var Pt = s(95695),
          Ne = s.n(Pt),
          vt = s(95414),
          Ut = s(13465),
          st = s(53107),
          qe = s(53113),
          P = s(961),
          pt = s(7582),
          S = s(29522),
          A = s(88812),
          R = s(32606),
          Q = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          L = (a, n, r, o) => {
            for (
              var l = o > 1 ? void 0 : o ? K(n, r) : n, c = a.length - 1, h;
              c >= 0;
              c--
            )
              (h = a[c]) && (l = (o ? h(n, r, l) : h(l)) || l);
            return o && l && Q(n, r, l), l;
          };
        const ce = s(87937),
          Me = 500,
          Ee = 50,
          je = {
            bExhaustedEventList: !1,
            bInfiniteScrollLoading: !0,
            nLastFetchCompletedMS: 0,
          };
        let pe = class extends w.Component {
          m_cancelSignal = O().CancelToken.source();
          m_refScroll = w.createRef();
          m_IntervalTimer = void 0;
          state = {
            bInfiniteScrollLoading: !1,
            bExhaustedEventList: !1,
            nLastFetchCompletedMS: 0,
          };
          m_nPage = 0;
          componentDidMount() {
            this.setState(
              { bInfiniteScrollLoading: !0 },
              this.LoadMoreModerationEvents,
            ),
              window.addEventListener("scroll", this.OnScroll, !0),
              We.Get().Init(this.props.history.location.search);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventModerationLanding component unmounted",
            ),
              window.removeEventListener("scroll", this.OnScroll),
              this.ClearTimer();
          }
          HandleUpdateQueryParameter() {
            const a = We.Get();
            if (a.bUseCustomQuery) {
              const {
                selectedTags: n,
                excludedTags: r,
                filterEventTypes: o,
                filterDate: l,
                bOrderByVisibilityStartTime: c,
              } = a;
              if (n || r || o || l || c) {
                const h = new URLSearchParams();
                n?.forEach((v) => h.append("selectedTags", v.value)),
                  r?.forEach((v) => h.append("excludedTags", v.value)),
                  o?.forEach((v) => h.append("eventtype", "" + v.value)),
                  l?.unix() > 0 && h.append("filterDate", "" + l.unix()),
                  c && h.append("orderByVisibility", "1"),
                  this.props.history.push(`?${h.toString()}`);
              } else this.props.history.push("?");
            }
          }
          ClearTimer() {
            this.m_IntervalTimer &&
              (window.clearInterval(this.m_IntervalTimer),
              (this.m_IntervalTimer = void 0));
          }
          HandleError(a) {
            let n = (0, $.H)(a);
            console.error("EventModerationLanding error: " + n.strErrorMsg, n),
              this.setState({
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !0,
                nLastFetchCompletedMS: Date.now(),
              });
          }
          async LoadMorePublicEventWithDelay() {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMoreModerationEvents,
              Me,
            );
          }
          LoadMoreModerationEvents() {
            if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
              let a;
              const n = We.Get();
              if (n.bUseCustomQuery) {
                let r = n.filterEventTypes
                    ? n.filterEventTypes.map((c) => c.value)
                    : void 0,
                  o = n.selectedTags
                    ? n.selectedTags.map((c) => c.value)
                    : void 0,
                  l = n.excludedTags
                    ? n.excludedTags.map((c) => c.value)
                    : void 0;
                a = C.Get().LoadPartnerEventForQueryIncremental(
                  this.m_cancelSignal,
                  this.m_nPage,
                  n.eventsToLoadPerPaging,
                  [this.props.appid],
                  o,
                  l,
                  n.filterDate,
                  r,
                  n.bOrderByVisibilityStartTime,
                );
              } else
                a = ke
                  .Get()
                  .LoadPartnerEventForModerationIncremental(
                    this.m_cancelSignal,
                    n.eventsToLoadPerPaging,
                  );
              a.then((r) => {
                (this.m_nPage += n.eventsToLoadPerPaging),
                  this.setState({
                    bInfiniteScrollLoading: !1,
                    bExhaustedEventList: r.length == 0,
                    nLastFetchCompletedMS: Date.now(),
                  });
              }).catch((r) => this.HandleError(r));
            }
          }
          UpdateQueryParametersAndLoadMoreEvents() {
            this.HandleUpdateQueryParameter(), this.LoadMoreModerationEvents();
          }
          RenderTiles() {
            let a = new Array();
            return (
              (We.Get().bUseCustomQuery
                ? C.Get().GetAllSolrEvents()
                : ke.Get().GetAllSolrEvents()
              ).forEach((o) => {
                a.push((0, e.jsx)(ze, { solrData: o }, o.unique_id));
              }),
              a
            );
          }
          OnScroll() {
            if (!this.m_refScroll || !this.m_refScroll.current) return;
            let a = this.m_refScroll.current;
            a &&
              (this.state.bExhaustedEventList ||
                this.state.bInfiniteScrollLoading ||
                (a.getBoundingClientRect().bottom <= window.innerHeight + Ee &&
                  (this.state.nLastFetchCompletedMS + Me < Date.now()
                    ? this.setState(
                        { bInfiniteScrollLoading: !0 },
                        this.LoadMorePublicEventWithDelay,
                      )
                    : this.setState(
                        { bInfiniteScrollLoading: !0 },
                        this.LoadMoreModerationEvents,
                      ))));
          }
          RefetchAllEventTiles() {
            (this.m_nPage = 0),
              ke.Get().ClearAllSolrEvents(),
              C.Get().ClearAllSolrEvents(),
              this.setState(
                { ...je },
                this.UpdateQueryParametersAndLoadMoreEvents,
              );
          }
          render() {
            let a = this.RenderTiles();
            const n = We.Get();
            return (0, e.jsxs)("div", {
              className: P.ModerationContainer,
              ref: this.m_refScroll,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("h2", {
                      children: (0, d.we)("#EventModeration_Title"),
                    }),
                    (0, e.jsx)(Y.tH, {
                      children: (0, e.jsxs)("div", {
                        className: (0, m.A)(Ne().FlexRowContainer),
                        children: [
                          (0, e.jsx)(Be, {
                            fnRequireRefetchEvents: this.RefetchAllEventTiles,
                          }),
                          !!n.bUseCustomQuery &&
                            (0, e.jsx)(Ft, {
                              fnRequireRefetchEvents: this.RefetchAllEventTiles,
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(Y.tH, { children: a }),
                this.state.bInfiniteScrollLoading &&
                  (0, e.jsx)(M.t, {
                    position: "center",
                    size: "medium",
                    string: (0, d.we)("#Loading"),
                  }),
              ],
            });
          }
        };
        L([re.oI], pe.prototype, "HandleError", 1),
          L([re.oI], pe.prototype, "LoadMorePublicEventWithDelay", 1),
          L([re.oI], pe.prototype, "LoadMoreModerationEvents", 1),
          L([re.oI], pe.prototype, "UpdateQueryParametersAndLoadMoreEvents", 1),
          L([re.oI], pe.prototype, "OnScroll", 1),
          L([re.oI], pe.prototype, "RefetchAllEventTiles", 1),
          (pe = L([_.PA], pe));
        const Ve = (0, k.y)(pe),
          Be = (0, _.PA)((a) => {
            const n = We.Get(),
              { fnRequireRefetchEvents: r } = a;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: P.FilterContainer,
                  children: (0, e.jsx)(I.he, {
                    toolTipContent: (0, d.we)(
                      "#EventModeration_ShowCustomFilter_ttip",
                    ),
                    children: (0, e.jsx)(U.Yh, {
                      label: (0, d.we)("#EventModeration_ShowCustomFilter"),
                      checked: n.bUseCustomQuery,
                      onChange: (o) => {
                        (n.bUseCustomQuery = o), r();
                      },
                    }),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: P.FilterContainer,
                  children: [
                    (0, e.jsx)("label", {
                      htmlFor: "EventPerLoad",
                      children: (0, d.we)("#EventModeration_PerPageLoad"),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("input", {
                        type: "number",
                        id: "EventPerLoad",
                        min: "10",
                        max: "200",
                        value: n.eventsToLoadPerPaging,
                        onChange: (o) => {
                          let l = Number.parseInt(o.currentTarget.value);
                          l &&
                            l > 0 &&
                            l != n.eventsToLoadPerPaging &&
                            (n.eventsToLoadPerPaging = l);
                        },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
          Ft = (0, _.PA)((a) => {
            const n = We.Get(),
              { fnRequireRefetchEvents: r } = a,
              o = J.Zi8.map((v) => ({ value: v, label: (0, Qe.rG)(v) })).sort(
                (v, B) => v.label.localeCompare(B.label),
              ),
              l = Ue.FZ.map((v) => ({ value: v, label: v })).sort((v, B) =>
                v.label.localeCompare(B.label),
              ),
              c = { option: (v) => ({ ...v, color: "#444444" }) },
              h = (v) => {
                let B = new Date();
                return (
                  v.unix() <
                  ce
                    .unix(B.getTime() / 1e3 + 3600 * 24)
                    .hour(0)
                    .seconds(0)
                    .minute(0)
                    .unix()
                );
              };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: P.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, d.we)("#EventModeration_FilterByTag"),
                    }),
                    (0, e.jsx)(Re.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (v) => {
                        (n.selectedTags = v), r();
                      },
                      value: n.selectedTags,
                      options: l,
                      styles: c,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: P.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, d.we)(
                        "#EventModeration_FilterExcludeByTag",
                      ),
                    }),
                    (0, e.jsx)(Re.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (v) => {
                        (n.excludedTags = v), r();
                      },
                      value: n.excludedTags,
                      options: l,
                      styles: c,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: P.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, d.we)("#EventModeration_FilterToType"),
                    }),
                    (0, e.jsx)(Re.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (v) => {
                        (n.filterEventTypes = v), r();
                      },
                      value: n.filterEventTypes,
                      options: o,
                      styles: c,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: P.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, d.we)("#EventModeration_FilterToDate"),
                    }),
                    (0, e.jsx)(Ce(), {
                      timeFormat: !1,
                      onChange: (v) => {
                        if (typeof v == "string") {
                          let B = ce(v, "M/D/YYYY", !0);
                          if (!B.isValid()) {
                            n.filterDateAsString = v;
                            return;
                          }
                          v = B;
                        }
                        n.filterDate != v &&
                          ((n.filterDateAsString = void 0),
                          (n.filterDate = v),
                          r());
                      },
                      value: n.filterDate,
                      isValidDate: h,
                      inputProps: {
                        placeholder: (0, d.we)("#EventModeration_PickDatee"),
                        className: P.TimeWidth,
                      },
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: P.FilterContainer,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "VisibilityStart",
                      checked: n.bOrderByVisibilityStartTime,
                      onChange: (v) => {
                        (n.bOrderByVisibilityStartTime =
                          v.currentTarget.checked),
                          r();
                      },
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "VisibilityStart",
                      children: (0, d.we)(
                        "#EventModeration_OrderByFirstVisible",
                      ),
                    }),
                  ],
                }),
              ],
            });
          }),
          St = (0, _.PA)((a) => {
            const { onClick: n, event: r, bSaving: o } = a;
            let l = (0, d.we)("#EventModTile_Moderate_ClearReviewed"),
              c = P.EventModerateClearReview,
              h = !1;
            return (
              (0, Ue.Xx)(r) ||
                ((l = (0, d.we)("#EventModTile_Moderate_MarkReviewed")),
                (c = P.EventModerateMarkReview),
                (h = !0)),
              o &&
                ((l = (0, d.we)("#EventModTile_Moderate_Saving")),
                (c = P.EventModerateSaving)),
              (0, e.jsxs)("button", {
                className: (0, m.A)(Ne().Button, P.Button, c),
                onClick: () => n(h),
                disabled: o,
                children: [o && (0, e.jsx)(M.t, { size: "small" }), l],
              })
            );
          }),
          Vt = (0, _.PA)((a) => {
            const { onClick: n, event: r, bSaving: o } = a,
              l = r.BHasTag("adult_only_content");
            let c = (0, d.we)(
              l
                ? "#EventModTile_Moderate_RemoveAdultContent"
                : "#EventModTile_Moderate_FlagAdultContent",
            );
            return (
              o && (c = (0, d.we)("#EventModTile_Moderate_Saving")),
              (0, e.jsxs)("button", {
                className: (0, m.A)(Ne().Button, P.Button),
                onClick: () => n(!l),
                disabled: o,
                children: [o && (0, e.jsx)(M.t, { size: "small" }), c],
              })
            );
          });
        function Xt(a) {
          const { onClick: n, event: r, bSaving: o } = a,
            l = (0, Mt.q3)(() => r.BHasTag("halloween"));
          let c = (0, d.we)(
            l
              ? "#EventModTile_Moderate_RemoveHalloweenFlag"
              : "#EventModTile_Moderate_FlagHalloween",
          );
          o && (c = (0, d.we)("#EventModTile_Moderate_Saving"));
          const h = pt.HD.GetTimeNowWithOverrideAsDate();
          return h.getMonth() >= 8 && h.getMonth() <= 10
            ? (0, e.jsxs)("button", {
                className: (0, m.A)(Ne().Button, P.Button),
                onClick: () => n(!l),
                disabled: o,
                children: [o && (0, e.jsx)(M.t, { size: "small" }), c],
              })
            : null;
        }
        let ze = class extends w.Component {
          state = {
            bLoadingEvent: !me.O3.BHasClanEventModel(
              this.props.solrData.unique_id,
            ),
            bShowAsModal: !1,
            bSavingModeration: !1,
          };
          m_cancelSignal = O().CancelToken.source();
          componentDidMount() {
            const { solrData: a } = this.props,
              n = a.unique_id;
            me.O3.BHasClanEventModel(n) ||
              me.O3.LoadHiddenPartnerEvent(new V.b(a.clan_steamid), n)
                .then(() => this.setState({ bLoadingEvent: !1 }))
                .catch((r) => {
                  const o = (0, $.H)(r);
                  console.error(
                    "EventModerationTile: Event Load: " + o.strErrorMsg,
                    o,
                  ),
                    this.setState({ bLoadingEvent: !1 });
                });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventModerationTile component unmounted",
            );
          }
          ShowModalEvent(a) {
            const { solrData: n } = this.props,
              r = n.unique_id;
            !this.state.bLoadingEvent &&
              me.O3.BHasClanEventModel(r) &&
              this.setState({ bShowAsModal: !0 }),
              a.preventDefault(),
              a.stopPropagation();
          }
          HideModalEvent() {
            this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
          }
          SetAdultContentState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = me.O3.GetClanEventModel(r);
            if (!o) return;
            const l = o.BHasTag("adult_only_content");
            if (a === l) return;
            const c = new Array(),
              h = new Array();
            let v = new _e().SetAdultOnlyContentAction(a);
            a ? c.push("adult_only_content") : h.push("adult_only_content"),
              this.UpdateTagsOnEvent(r, c, h, v);
          }
          SetHalloweenEventState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = me.O3.GetClanEventModel(r);
            if (!o) return;
            const l = o.BHasTag("halloween");
            if (a === l) return;
            const c = new Array(),
              h = new Array();
            let v = new _e().SetHalloweenEventTypeAction(a);
            a ? c.push("halloween") : h.push("halloween"),
              this.UpdateTagsOnEvent(r, c, h, v);
          }
          SetModeratedState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = me.O3.GetClanEventModel(r);
            if (!o) return;
            const l = (0, Ue.Xx)(o);
            if (a === l) return;
            const c = new Array(),
              h = new Array();
            let v = new _e().SetReviewAction(a);
            a
              ? (c.push("mod_reviewed"),
                h.push("mod_require_rereview"),
                o.BHasTag("mod_require_rereview") && v.SetReReviewAction(a))
              : c.push("mod_require_rereview"),
              this.UpdateTagsOnEvent(r, c, h, v);
          }
          UpdateTagsOnEvent(a, n, r, o) {
            const l = async () => {
              let c = me.O3.GetClanEventModel(a);
              try {
                let h = await ke
                  .Get()
                  .UpdateTagsOnPartnerEvent(
                    this.m_cancelSignal,
                    c.clanSteamID,
                    c.AnnouncementGID,
                    n,
                    r,
                    o,
                  );
                c.vecTags = h;
              } catch (h) {
                let v = (0, $.H)(h);
                console.error("UpdateTagsOnPartnerEvent " + v.strErrorMsg, v);
              }
              this.setState({ bSavingModeration: !1 });
            };
            this.state.bSavingModeration ||
              this.setState({ bSavingModeration: !0 }, l);
          }
          OnChangeCategory(a) {
            const { solrData: n } = this.props;
            let r = me.O3.GetClanEventModel(n.unique_id);
            (0, Z.pg)((0, e.jsx)(it, { eventModel: r }), (0, p.uX)(a));
          }
          OnUpdateSeasonalTag(a) {
            const { solrData: n } = this.props;
            let r = me.O3.GetClanEventModel(n.unique_id);
            (0, Z.pg)((0, e.jsx)(ot, { eventModel: r }), (0, p.uX)(a));
          }
          render() {
            const { solrData: a } = this.props,
              n = a.unique_id,
              r = Number(a.appid);
            let o,
              l = (0, J.sfN)(j.TS.LANGUAGE),
              c = me.O3.GetClanEventModel(n),
              h = null;
            c
              ? (this.state.bShowAsModal &&
                  (h = (0, e.jsx)(u.of, {
                    className: P.StoreHeaderAdjust,
                    children: (0, e.jsx)("div", {
                      children: (0, e.jsx)(Ct.H, {
                        event: c,
                        fnClose: this.HideModalEvent,
                      }),
                    }),
                  })),
                (o = (0, e.jsx)($t, { eventModel: c, lang: l })))
              : (o = (0, d.we)("#Loading"));
            const v = a.last_modified_date
                ? Date.parse(a.last_modified_date) / 1e3
                : 0,
              B = c ? c.type : Number(a.event_type),
              H = new V.b(a.clan_steamid),
              se = r ? `app/${r}` : `group/${H.GetAccountID()}`,
              ne = `${j.TS.STORE_BASE_URL}news/${se}/view/${a.announcement_gid}`,
              Ae = !!(c && c.BHasTag("adult_only_content")),
              le = !!(c && c.BHasTag("halloween"));
            return (0, e.jsxs)(Y.tH, {
              children: [
                h,
                (0, e.jsxs)("div", {
                  className: (0, m.A)({ [P.Tile]: !0, [P.HalloweenEvent]: le }),
                  children: [
                    (0, e.jsx)("a", {
                      href: ne,
                      className: P.TileCapsule,
                      onClick: this.ShowModalEvent,
                      children: o,
                    }),
                    (0, e.jsxs)("div", {
                      className: P.TileDetails,
                      children: [
                        (0, e.jsxs)("div", {
                          className: P.DetailsLeft,
                          children: [
                            (0, e.jsx)("a", {
                              className: P.EventTitle,
                              href: ne,
                              onClick: this.ShowModalEvent,
                              children: a.event_name,
                            }),
                            (0, e.jsx)("div", {
                              className: (0, m.A)(
                                P.TileEventType,
                                B == J.DRF ? P.TileEventOtherType : "",
                              ),
                              children: c
                                ? c.GetCategoryAsString()
                                : a.event_type,
                            }),
                            Ae &&
                              (0, e.jsx)("div", {
                                className: P.HasAdultContent,
                                children: (0, d.we)(
                                  "#EventModTile_HasAdultContent",
                                ),
                              }),
                            this.state.bLoadingEvent &&
                              (0, e.jsx)(M.t, {
                                size: "small",
                                string: (0, d.we)("#Loading"),
                              }),
                            (0, e.jsx)("div", {
                              className: P.ChannelInfo,
                              children: (0, e.jsx)(Jt, {
                                appid: r,
                                clanSteamID: new V.b(a.clan_steamid),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: P.DetailsMiddle,
                          children:
                            c &&
                            (0, e.jsxs)(w.Fragment, {
                              children: [
                                (0, e.jsx)(St, {
                                  onClick: this.SetModeratedState,
                                  bSaving: this.state.bSavingModeration,
                                  event: c,
                                }),
                                (0, e.jsx)("button", {
                                  className: (0, m.A)(Ne().Button, P.Button),
                                  onClick: this.OnChangeCategory,
                                  children: (0, d.we)(
                                    "#EventModTile_ChangeEventType",
                                  ),
                                }),
                                (0, e.jsx)(Vt, {
                                  onClick: this.SetAdultContentState,
                                  bSaving: this.state.bSavingModeration,
                                  event: c,
                                }),
                                (0, e.jsx)(Xt, {
                                  onClick: this.SetHalloweenEventState,
                                  bSaving: this.state.bSavingModeration,
                                  event: c,
                                }),
                                !!c.BHasTag("halloween2019candidate") &&
                                  (0, e.jsx)("button", {
                                    className: (0, m.A)(Ne().Button),
                                    onClick: this.OnUpdateSeasonalTag,
                                    children: (0, d.we)(
                                      "#EventModTile_SeasonalTag",
                                    ),
                                  }),
                                (0, e.jsx)(Gt, { eventModel: c }),
                              ],
                            }),
                        }),
                        (0, e.jsxs)("div", {
                          className: P.DetailsRight,
                          children: [
                            (0, e.jsxs)("div", {
                              className: P.EventTimingBlock,
                              children: [
                                !!v &&
                                  (0, e.jsx)("div", {
                                    className: P.LastUpdateTime,
                                    children: (0, d.we)(
                                      "#EventModTile_LastModified",
                                      (0, d.TW)(v) +
                                        "@" +
                                        (0, Ze.KC)(v, {
                                          bForce24HourClock: !1,
                                        }),
                                    ),
                                  }),
                                c &&
                                  (0, e.jsx)(R.j, {
                                    event: c,
                                    stylesmodule: P,
                                    nOverrideEndTime:
                                      c.GetEndTimeAndDateUnixSeconds(),
                                    nOverrideStartTime:
                                      c.GetStartTimeAndDateUnixSeconds(),
                                  }),
                              ],
                            }),
                            c &&
                              (0, e.jsx)(_t, {
                                event: c,
                                hidden: a.hidden,
                                published: a.published,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        L([re.oI], ze.prototype, "ShowModalEvent", 1),
          L([re.oI], ze.prototype, "HideModalEvent", 1),
          L([re.oI], ze.prototype, "SetAdultContentState", 1),
          L([re.oI], ze.prototype, "SetHalloweenEventState", 1),
          L([re.oI], ze.prototype, "SetModeratedState", 1),
          L([re.oI], ze.prototype, "OnChangeCategory", 1),
          L([re.oI], ze.prototype, "OnUpdateSeasonalTag", 1),
          (ze = L([_.PA], ze));
        function $t(a) {
          const { eventModel: n, lang: r } = a,
            o = (0, A.WC)(n, "capsule", r, q.wI.capsule_main),
            l = n.BImageNeedScreenshotFallback("capsule", r);
          return o && o.length > 0
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(Ut.c, { rgSources: o }),
                  l &&
                    (0, e.jsx)("div", {
                      className: P.NoCapsuleFallback,
                      children: (0, d.we)("#EventModTile_FallbackImageText"),
                    }),
                ],
              })
            : (0, e.jsx)("div", {
                className: P.NoCapsule,
                children: (0, d.we)("#EventModTile_NoCapsule"),
              });
        }
        let Kt = class extends w.Component {
          state = { bDownloadingImages: !1, nLocLanguages: 0 };
          m_cancelSignal = O().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "ChangeEventTypeDialog component unmounted",
            );
          }
          CountLanguages(a) {
            let n = 0;
            if (a && a.length > 0)
              for (let r = 0; r < a.length && r < J.bP9; ++r)
                a[r] && a[r].length > 0 && (n += 1);
            return n;
          }
          componentDidMount() {
            const { event: a } = this.props;
            me.O3.LoadClanEventLocalizationFromAnnouncementGID(
              a.clanSteamID,
              a.AnnouncementGID,
            )
              .then((n) => {
                this.m_cancelSignal.token.reason ||
                  this.setState({ nLocLanguages: n.length });
              })
              .catch((n) => {
                let r = (0, $.H)(n);
                console.error(
                  "EventInspection.LoadLoc : error " + r.strErrorMsg,
                  r,
                ),
                  this.m_cancelSignal.token.reason ||
                    this.setState({ nLocLanguages: -1 });
              });
          }
          render() {
            const { event: a } = this.props;
            let n = this.CountLanguages(a.jsondata.localized_title_image),
              r = this.CountLanguages(a.jsondata.localized_capsule_image),
              o = this.CountLanguages(a.jsondata.localized_spotlight_image),
              l = Math.max(
                this.CountLanguages(a.jsondata.localized_broadcast_left_image),
                this.CountLanguages(a.jsondata.localized_broadcast_right_image),
              ),
              c = n + r + o + l,
              h = this.CountLanguages(a.jsondata.localized_summary),
              v = this.CountLanguages(a.jsondata.localized_subtitle);
            return (0, e.jsxs)("div", {
              className: P.AnalysisCtn,
              children: [
                (0, e.jsx)("div", {
                  className: P.TileTitle,
                  children: (0, d.we)("#EventModTile_Analysis"),
                }),
                (0, e.jsx)("div", {
                  children: (0, d.we)(
                    "#EventModTile_Stats_Comments",
                    a.nCommentCount,
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, d.we)("#EventModTile_Stats_VoteUp", a.nVotesUp),
                }),
                (0, e.jsx)("div", {
                  children: (0, d.we)(
                    "#EventModTile_Stats_VoteDown",
                    a.nVotesDown,
                  ),
                }),
                !!n &&
                  (0, e.jsxs)("div", {
                    className: P.ArtHeader,
                    children: [
                      (0, d.we)("#EventModTile_ImageAnalysis_Header", n),
                      " ",
                    ],
                  }),
                !!r &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, d.we)("#EventModTile_ImageAnalysis_Capsule", r),
                      " ",
                    ],
                  }),
                !!o &&
                  (0, e.jsxs)("div", {
                    className: P.ArtSpotlight,
                    children: [
                      (0, d.we)("#EventModTile_ImageAnalysis_Spotlight", o),
                      " ",
                    ],
                  }),
                !!l &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, d.we)("#EventModTile_ImageAnalysis_Broadcast", l),
                      " ",
                    ],
                  }),
                c == 0 &&
                  (0, e.jsxs)("div", {
                    className: P.AnalysisMissing,
                    children: [
                      (0, d.we)("#EventModTile_ImageAnalysis_None"),
                      " ",
                    ],
                  }),
                this.state.nLocLanguages == 0 &&
                  (0, e.jsx)(M.t, {
                    size: "small",
                    string: (0, d.we)("#EventModTile_LoadingLocs"),
                  }),
                this.state.nLocLanguages > 0 &&
                  (0, e.jsx)("div", {
                    children: (0, d.we)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages,
                    ),
                  }),
                !!h &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, d.we)("#EventModTile_Languages_Summary", h),
                      " ",
                    ],
                  }),
                !!v &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, d.we)("#EventModTile_Languages_Subtitle", v),
                      " ",
                    ],
                  }),
              ],
            });
          }
        };
        Kt = L([_.PA], Kt);
        const Jt = (0, _.PA)((a) => {
          const { appid: n, clanSteamID: r } = a,
            o = (0, S.$5)(n),
            [l, c] = (0, w.useState)(!xe.A.Get().BHasApp(a.appid)),
            h = w.useRef(O().CancelToken.source());
          if (
            ((0, w.useEffect)(
              () => () =>
                h.current.cancel(
                  "EventModerationChannelInfo component unmounted",
                ),
              [],
            ),
            (0, w.useEffect)(() => {
              const { appid: v, clanSteamID: B } = a;
              ((v && !xe.A.Get().BHasApp(v)) ||
                (B && !D.ac.BHasClanInfoLoaded(B))) &&
                (async () => {
                  try {
                    await Promise.all([
                      xe.A.Get().QueueAppRequest(v, {
                        include_assets: !0,
                        include_release: !0,
                        include_screenshots: !0,
                      }),
                      B ? D.ac.LoadClanInfoForClanSteamID(B) : void 0,
                    ]);
                  } catch (se) {
                    const ne = (0, $.H)(se);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + ne.strErrorMsg,
                      ne,
                    );
                  } finally {
                    h.current.token.reason || c(!1);
                  }
                })();
            }, [a]),
            l)
          )
            return (0, e.jsx)(M.t, {
              size: "small",
              string: (0, d.we)("#EventModTile_AppInfoLoading"),
            });
          if (n) {
            const v = xe.A.Get().GetApp(n);
            return v
              ? (0, e.jsx)("div", {
                  className: P.TileAppInfo,
                  children: (0, e.jsxs)("div", {
                    className: P.TileAppInfoTitle,
                    children: [
                      (0, e.jsx)(vt.j, {
                        id: o,
                        children: (0, e.jsx)(st.uU, {
                          href: (0, qe.k2)(v.GetStorePageURL()),
                          children: (0, e.jsx)("img", {
                            className: P.TileAppInfoImage,
                            src: v.GetAssets().GetMainCapsuleURL(),
                          }),
                        }),
                      }),
                      (0, e.jsx)(vt.j, {
                        id: o,
                        children: (0, e.jsx)(st.uU, {
                          href: (0, qe.k2)(v.GetStorePageURL()),
                          children: (0, e.jsx)("div", {
                            children: v.GetName(),
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              : null;
          } else if (r) {
            const v = r.GetAccountID(),
              B = D.ac.GetClanInfoByClanAccountID(v);
            if (B && B.is_curator)
              return (0, e.jsx)("div", {
                className: P.TileAppInfo,
                children: (0, e.jsx)("div", {
                  className: P.TileAppInfoTitle,
                  children: (0, e.jsxs)(st.uU, {
                    href: (0, qe.k2)(
                      j.TS.STORE_BASE_URL + "/curator/" + v + "/",
                    ),
                    children: [
                      (0, e.jsx)("img", {
                        className: P.TileAppInfoImage,
                        src: B.avatar_full_url,
                      }),
                      (0, e.jsx)("div", {
                        children: (0, d.we)(
                          "#EventModTile_CuratorName",
                          B.group_name,
                        ),
                      }),
                    ],
                  }),
                }),
              });
          }
          return null;
        });
        let _t = class extends w.Component {
          render() {
            const { event: a, hidden: n, published: r } = this.props,
              o = n
                ? r
                  ? (0, d.we)("#EVentModTile_State_Staged")
                  : (0, d.we)("#EVentModTile_State_Draft")
                : (0, d.we)("#EVentModTile_State_Published"),
              l = (0, Ue.iy)(a),
              c = (0, Ue.A4)(a),
              h = (0, Ue.ZA)(a);
            let v =
                h && !a.BHasTag("hide_store") && !a.BHasTag("mod_hide_store"),
              B =
                l &&
                !a.BHasTag("hide_library_overview") &&
                !a.BHasTag("mod_hide_library_overview"),
              H =
                c &&
                !a.BHasTag("hide_library_detail") &&
                !a.BHasTag("mod_hide_library_detail");
            return (0, e.jsxs)("div", {
              className: P.VisibiltyCtn,
              children: [
                (0, e.jsx)("div", { className: P.TileTitle, children: o }),
                (0, e.jsx)("div", {
                  children: (0, d.we)(
                    "#EventModTile_Store_Visibility",
                    v
                      ? (0, d.we)("#WriteReview_Dialog_Yes")
                      : (0, d.we)("#WriteReview_Dialog_No"),
                    v
                      ? ""
                      : h
                        ? (0, d.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_store")
                          ? (0, d.we)("#EventModTime_Hidden_OptOut")
                          : (0, d.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, d.we)(
                    "#EventModTile_LibraryHome_Visibility",
                    B
                      ? (0, d.we)("#WriteReview_Dialog_Yes")
                      : (0, d.we)("#WriteReview_Dialog_No"),
                    B
                      ? ""
                      : h
                        ? (0, d.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_library_overview")
                          ? (0, d.we)("#EventModTime_Hidden_OptOut")
                          : (0, d.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, d.we)(
                    "#EventModTile_LibraryDetail_Visibility",
                    H
                      ? (0, d.we)("#WriteReview_Dialog_Yes")
                      : (0, d.we)("#WriteReview_Dialog_No"),
                    H
                      ? ""
                      : h
                        ? (0, d.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_library_detail")
                          ? (0, d.we)("#EventModTime_Hidden_OptOut")
                          : (0, d.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                a.BHasTag("enable_steam_china") &&
                  (0, e.jsx)("div", {
                    children: (0, d.we)("#EventModTile_SteamChina_Visibility"),
                  }),
                a.BHasTag("disable_steam_global") &&
                  (0, e.jsx)("div", {
                    children: (0, d.we)("#EventModTile_SteamGlobal_Hidden"),
                  }),
              ],
            });
          }
        };
        _t = L([_.PA], _t);
        let it = class extends w.Component {
          state = {
            bUpdating: !1,
            newCategoryOption: {
              label: (0, Qe.rG)(J.HFK),
              value: { eventType: J.HFK },
            },
          };
          m_cancelSignal = O().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "ChangeEventTypeDialog component unmounted",
            );
          }
          async ChangeCategoryForEvent() {
            const { eventModel: a, closeModal: n } = this.props;
            try {
              const r = this.state.newCategoryOption,
                o = r.value.eventType;
              await ke
                .Get()
                .UpdatePartnerEventType(
                  this.m_cancelSignal,
                  a.clanSteamID,
                  a.GID,
                  o,
                );
              const l = Ue.Ac,
                c = [];
              r.value.tags &&
                r.value.tags.forEach((v) => {
                  c.push(v);
                  const B = new _e().SetUpdateSeasonalTags(v).ToModString();
                  c.push(B);
                });
              const h = await ke
                .Get()
                .UpdateTagsOnPartnerEvent(
                  this.m_cancelSignal,
                  a.clanSteamID,
                  a.GetAnnouncementGID(),
                  c,
                  l,
                  new _e().SetActionChangeEvent(o),
                );
              (0, W.h5)(() => {
                (a.type = o), (a.vecTags = h);
              }),
                this.setState({ bUpdating: !1 }, n);
            } catch (r) {
              const o = (0, $.H)(r);
              console.error("ChangeEventTypeDialog error " + o.strErrorMsg, o),
                this.setState({ bUpdating: !1, strErrorMsg: o.strErrorMsg });
            }
          }
          OnChangeSelection(a) {
            this.setState({ newCategoryOption: a });
          }
          render() {
            const { eventModel: a, closeModal: n } = this.props,
              r = J.Zi8.filter(
                (c) => c == J.DRF || c == J.Y3j || c >= J.L0X,
              ).map((c) => {
                const h = { eventType: c };
                return (
                  c == J.Fwr && (h.tags = ["patchnotes"]),
                  { label: (0, Qe.rG)(c), value: h }
                );
              });
            r.push({
              label: (0, d.we)("#PartnerEvent_Curator_Group_Members"),
              value: {
                eventType: J.uYK,
                tags: ["curator", "curator_group_members"],
              },
            }),
              r.push({
                label: (0, d.we)("#PartnerEvent_Curator_Public"),
                value: {
                  eventType: J.uYK,
                  tags: ["curator", "curator_public"],
                },
              }),
              r.push({
                label: (0, d.we)("#PartnerEvent_SteamAwardNominations"),
                value: {
                  eventType: J.uYK,
                  tags: [
                    "steam_award_nomination_request",
                    "mod_hide_library_overview",
                  ],
                },
              }),
              r.push({
                label: (0, d.we)("#PartnerEvent_SteamAwardVoteRequest"),
                value: {
                  eventType: J.uYK,
                  tags: [
                    "steam_award_vote_request",
                    "mod_hide_library_overview",
                  ],
                },
              });
            const o = [
                {
                  value: { eventType: J.f4X, tags: ["halloween"] },
                  label: "Halloween: " + (0, d.we)("#PartnerEvent_15"),
                },
                {
                  value: { eventType: J.zA, tags: ["halloween"] },
                  label: "Halloween: " + (0, d.we)("#PartnerEvent_22"),
                },
                {
                  value: { eventType: J.y6, tags: ["halloween"] },
                  label: "Halloween: " + (0, d.we)("#PartnerEvent_23"),
                },
                {
                  value: { eventType: J.hGl, tags: ["halloween"] },
                  label: "Halloween: " + (0, d.we)("#PartnerEvent_24"),
                },
                {
                  value: { eventType: J.WNR, tags: ["halloween"] },
                  label: "Halloween: " + (0, d.we)("#PartnerEvent_35"),
                },
              ],
              l = pt.HD.GetTimeNowWithOverrideAsDate();
            return (
              l.getMonth() == 8 || l.getMonth() == 9
                ? r.unshift(...o)
                : r.push(...o),
              (0, e.jsx)(u.o0, {
                strTitle: (0, d.we)("#EventModTile_ChangeEventType"),
                strDescription: (0, d.we)(
                  "#EventModTile_ChangeEventType_Desc",
                  a.GetEventTypeAsString(),
                ),
                onCancel: n,
                onOK: () =>
                  this.setState({ bUpdating: !0 }, this.ChangeCategoryForEvent),
                children: (0, e.jsx)(w.Fragment, {
                  children: (0, e.jsxs)("div", {
                    className: P.CategoryChangeDialog,
                    children: [
                      (0, e.jsx)("br", {}),
                      this.state.bUpdating &&
                        (0, e.jsx)(M.t, { size: "small" }),
                      this.state.strErrorMsg &&
                        (0, e.jsxs)("div", {
                          children: [
                            (0, d.we)("#Chat_Settings_Error_ServerError"),
                            (0, e.jsx)("br", {}),
                            this.state.strErrorMsg,
                          ],
                        }),
                      (0, e.jsx)(Re.Ay, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: r,
                      }),
                    ],
                  }),
                }),
              })
            );
          }
        };
        L([re.oI], it.prototype, "ChangeCategoryForEvent", 1),
          L([re.oI], it.prototype, "OnChangeSelection", 1),
          (it = L([_.PA], it));
        class ot extends w.Component {
          state = {
            bUpdating: !1,
            bAccept: this.props.eventModel.BHasTag("halloween2019"),
            bHorror: this.props.eventModel.BHasTag("horror"),
            bCute: this.props.eventModel.BHasTag("cute"),
          };
          m_cancelSignal = O().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "UpdateSeasonalTagDialog component unmounted",
            );
          }
          ChangeAcceptance() {
            this.setState({ bAccept: !this.state.bAccept });
          }
          ChangeHorror() {
            this.setState({ bHorror: !this.state.bHorror });
          }
          ChangeCute() {
            this.setState({ bCute: !this.state.bCute });
          }
          async ApplyAction() {
            let n = new Array(),
              r = new Array();
            this.state.bAccept
              ? (n.push("halloween2019"), r.push("halloween2019reviewed"))
              : (r.push("halloween2019"), n.push("halloween2019reviewed")),
              this.state.bCute ? n.push("cute") : r.push("cute"),
              this.state.bHorror ? n.push("horror") : r.push("horror");
            try {
              const { eventModel: o } = this.props;
              let l = await ke
                .Get()
                .UpdateTagsOnPartnerEvent(
                  this.m_cancelSignal,
                  o.clanSteamID,
                  o.AnnouncementGID,
                  n,
                  r,
                  new _e().SetUpdateSeasonalTags(
                    this.state.bAccept
                      ? "halloween2019"
                      : "halloween2019reviewed",
                  ),
                );
              (o.vecTags = l), this.props.closeModal();
            } catch (o) {
              let l = (0, $.H)(o);
              console.error("EventModerationTile " + l.strErrorMsg, l),
                this.setState({ strErrorMsg: l.strErrorMsg });
            }
          }
          render() {
            const { eventModel: n, closeModal: r } = this.props;
            return (0, e.jsx)(u.o0, {
              strTitle: (0, d.we)("#EventModTile_SeasonalTag"),
              onCancel: r,
              onOK: () => this.setState({ bUpdating: !0 }, this.ApplyAction),
              children: (0, e.jsx)(w.Fragment, {
                children: (0, e.jsxs)("div", {
                  className: P.CategoryChangeDialog,
                  children: [
                    (0, e.jsx)("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Acceptance",
                      children: (0, d.we)("#EventModTile_SeasonalTag_Desc"),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, d.we)(
                        "#EventModTile_SeasonalTag_Desc_Secondary",
                      ),
                    }),
                    (0, e.jsx)("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Horror",
                      children: "Horror Tag",
                    }),
                    (0, e.jsx)("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Cute",
                      children: "Cute Tag",
                    }),
                    this.state.bUpdating && (0, e.jsx)(M.t, { size: "small" }),
                    this.state.strErrorMsg &&
                      (0, e.jsxs)("div", {
                        children: [
                          (0, d.we)("#Chat_Settings_Error_ServerError"),
                          (0, e.jsx)("br", {}),
                          this.state.strErrorMsg,
                        ],
                      }),
                  ],
                }),
              }),
            });
          }
        }
        L([re.oI], ot.prototype, "ChangeAcceptance", 1),
          L([re.oI], ot.prototype, "ChangeHorror", 1),
          L([re.oI], ot.prototype, "ChangeCute", 1),
          L([re.oI], ot.prototype, "ApplyAction", 1);
        var Nt = s(48156),
          Zt = Object.defineProperty,
          qt = Object.getOwnPropertyDescriptor,
          en = (a, n, r, o) => {
            for (
              var l = o > 1 ? void 0 : o ? qt(n, r) : n, c = a.length - 1, h;
              c >= 0;
              c--
            )
              (h = a[c]) && (l = (o ? h(n, r, l) : h(l)) || l);
            return o && l && Zt(n, r, l), l;
          };
        let zt = class extends w.Component {
          state = { bLoadingEvent: !0 };
          m_cancelSignal = O().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "SteamGameFestivalStoreDebug to unload ",
            );
          }
          async componentDidMount() {
            const { clanEventGID: a, clanAccountID: n } = this.props;
            if (
              (console.log(a, n, typeof a, typeof n),
              a && !me.O3.BHasClanEventModel(a))
            ) {
              let r = V.b.InitFromClanID(Number.parseInt(n)),
                o = await me.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  r,
                  a,
                  0,
                ),
                l = new Array(),
                c = new Array();
              if (o.BHasSaleEnabled()) {
                this.setState({
                  event: o,
                  bLoadingEvent: !1,
                  bLoadingApps: !0,
                  bLoadingDemos: !0,
                  bLoadingAssociatedDemoInfo: !0,
                });
                let h = new Map();
                o.jsondata.sale_sections.forEach((H) => {
                  H.section_type == "tabs" &&
                    H.tabs.forEach((se) => {
                      se.capsules.forEach((ne) => {
                        ne.type == "game" ||
                        ne.type == "application" ||
                        ne.type == "software"
                          ? h.has(ne.id) || (h.set(ne.id, !0), l.push(ne.id))
                          : h.has(ne.id) || (h.set(ne.id, !0), c.push(ne.id));
                      });
                    });
                });
                const v = {
                  include_assets: !0,
                  include_screenshots: !0,
                  include_release: !0,
                };
                await xe.A.Get().QueueMultipleAppRequests(l, v),
                  this.setState({
                    rgAppIDs: l,
                    rgUnknownTypeAppIDs: c,
                    bLoadingApps: !1,
                  }),
                  await xe.A.Get().QueueMultipleAppRequests(l, v),
                  this.setState({ bLoadingAssociatedDemoInfo: !1 });
                const B = l.flatMap(
                  (H) => xe.A.Get().GetApp(H)?.GetDemoAppIDs() ?? [],
                );
                await xe.A.Get().QueueMultipleAppRequests(B, v),
                  this.setState({ bLoadingDemos: !1 });
              } else this.setState({ bLoadingEvent: !1, rgAppIDs: l });
            } else this.setState({ bLoadingEvent: !1 });
          }
          render() {
            if (
              this.state.bLoadingEvent ||
              this.state.bLoadingDemos ||
              this.state.bLoadingApps ||
              this.state.bLoadingAssociatedDemoInfo
            )
              return (0, e.jsx)(M.t, {
                string:
                  (0, d.we)("#Loading") +
                  (this.state.bLoadingEvent
                    ? " Events"
                    : this.state.bLoadingApps
                      ? " Apps"
                      : this.state.bLoadingAssociatedDemoInfo
                        ? " Associated Demo Info"
                        : this.state.bLoadingDemos
                          ? " Demos"
                          : "done"),
                position: "center",
              });
            if (!this.state.event)
              return (0, e.jsx)("div", { children: " Failed to load event" });
            const { event: a } = this.state;
            if (!a.jsondata.bSaleEnabled)
              return (0, e.jsx)("div", { children: "Not a sale event" });
            let n = new Array(),
              r = new Array();
            this.state.rgAppIDs
              .filter((le) => !xe.A.Get().GetApp(le))
              .forEach((le) => {
                n.push(
                  (0, e.jsx)(
                    "div",
                    {
                      children: (0, e.jsx)("a", {
                        href: j.TS.STORE_BASE_URL + "app/" + le + "/?beta=1",
                        target: "_blank",
                        children: le,
                      }),
                    },
                    "missing: " + le,
                  ),
                ),
                  r.push(le);
              });
            const o = this.state.rgAppIDs.reduce(
                (le, Ie) => le + (xe.A.Get().GetApp(Ie)?.BHasDemo() ? 1 : 0),
                0,
              ),
              l = new Array();
            this.state.rgAppIDs.forEach((le) => {
              const Ie = xe.A.Get().GetApp(le);
              if (Ie && !Ie.BHasDemo()) {
                let De = xe.A.Get().GetApp(le);
                l.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      children: [
                        De?.GetAppType() == Nt.uE.ue &&
                          (0, e.jsx)("b", {
                            children:
                              "--Error: Sale Page has Demo AppID, based game --\xA0",
                          }),
                        De?.GetName(),
                        " (",
                        le,
                        ")",
                        (0, e.jsx)("a", {
                          href: (0, qe.k2)(De.GetStorePageURL() + "?beta=0"),
                          target: "_blank",
                          children: "Store Page",
                        }),
                        "\xA0",
                        (0, e.jsx)("a", {
                          href: j.TS.PARTNER_BASE_URL + "apps/landing/" + le,
                          target: "_blank",
                          children: "App Landing Page",
                        }),
                      ],
                    },
                    "missingdemo_" + le,
                  ),
                );
              }
            });
            let c = 0,
              h = 0,
              v = 0,
              B = 0,
              H = 0,
              se = 0;
            this.state.rgAppIDs.forEach((le) => {
              let Ie = !1;
              const De = xe.A.Get().GetApp(le);
              De &&
                De.BHasDemo() &&
                (xe.A.Get().GetApp(De.GetDemoAppIDs()[0]).BIsComingSoon()
                  ? ((v += 1), (Ie = !0))
                  : (B += 1));
            });
            let ne = new Array(),
              Ae = 0;
            return (
              this.state.rgAppIDs.forEach((le) => {
                xe.A.Get().GetApp(le)?.GetAppType() != Nt.uE.ue && (Ae += 1);
              }),
              (0, e.jsxs)(Y.tH, {
                children: [
                  (0, e.jsx)("h1", {
                    children: a.GetNameWithFallback((0, J.sfN)(j.TS.LANGUAGE)),
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unique AppIDs:" }),
                      " ",
                      this.state.rgAppIDs.length,
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsxs)("b", {
                        children: ["Visible Apps in ", j.TS.COUNTRY, ":"],
                      }),
                      " ",
                      Ae,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unknown AppID types:" }),
                      " ",
                      this.state.rgUnknownTypeAppIDs.length,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Missing AppIDs:" }),
                      " ",
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [(0, e.jsx)("b", { children: "Demos:" }), " ", o],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "Visible apps missing demo store:",
                      }),
                      " ",
                      l.length,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "CApplications Loaded:" }),
                      " ",
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "CApplication with Associated Demos:",
                      }),
                      " ",
                      c,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "\xA0\xA0Associated with store page but not released: ",
                      }),
                      " ",
                      H,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "CApplication with demo without association:",
                      }),
                      " ",
                      h,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "\xA0\xA0Released but not associated with store page: ",
                      }),
                      " ",
                      se,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "CApplication missing:" }),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "CApplication without demo store and demo associations:",
                      }),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Released Demo: " }),
                      B,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unreleased Demo: " }),
                      v,
                    ],
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)("h2", { children: "Missing Appids:" }),
                  n,
                  (0, e.jsx)("h2", {
                    children:
                      "Missing BOTH demo list and associated demo on product page:",
                  }),
                  ne,
                  (0, e.jsx)("h2", {
                    children:
                      "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):",
                  }),
                  l,
                ],
              })
            );
          }
        };
        zt = en([_.PA], zt);
        var tn = s(3685),
          nn = s(60298),
          an = s(5827);
        function rn(a) {
          const [n, r] = (0, w.useState)(!1),
            [o] = (0, w.useState)(() => Qt()),
            l = (0, w.useMemo)(
              () => ({
                country: j.TS.COUNTRY,
                language: j.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, w.useEffect)(() => (r(!0), sn(o)), [o]),
            n
              ? (0, w.createElement)(an.V3, {
                  context: l,
                  serviceTransportOverride: o.GetServiceTransport(),
                  children: a.children,
                })
              : null
          );
        }
        function dn(a) {
          const [n] = useState(() => Qt()),
            r = useMemo(
              () => ({
                country: Config.COUNTRY,
                language: Config.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: a.bIncludeUnpublished,
              }),
              [a.bIncludeUnpublished],
            );
          return createElement(StoreBrowseLoaderRoot, {
            context: r,
            serviceTransportOverride: n.GetServiceTransport(),
            children: a.children,
          });
        }
        function Qt() {
          const a = (0, j.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (0, nn.p)(new tn.D(j.TS.WEBAPI_BASE_URL, a));
        }
        function sn(a) {
          return xe.A.Initialize(
            a.GetServiceTransport(),
            j.iA.is_partner_member,
          );
        }
        var on = s(59970);
        const ln = () =>
          (0, e.jsx)(rn, {
            children: (0, e.jsx)(on.d, {
              children: (0, e.jsxs)(k.dO, {
                children: [
                  (0, e.jsx)(k.qh, {
                    path: F.B.EventGameFestivalDebug(),
                    render: (a) =>
                      (0, e.jsx)(zt, {
                        ...a,
                        clanAccountID: a.match.params.clanacountid,
                        clanEventGID: a.match.params.claneventgid,
                      }),
                  }),
                  (0, e.jsx)(k.qh, {
                    exact: !0,
                    path: F.B.EventBackfill(),
                    render: (a) => (0, e.jsx)(He, { ...a }),
                  }),
                  (0, e.jsx)(k.qh, {
                    path: F.B.EventRSSModeration(),
                    render: (a) => (0, e.jsx)(ee, { ...a }),
                  }),
                  (0, e.jsx)(k.qh, {
                    path: F.B.EventModeration(),
                    render: (a) =>
                      (0, e.jsx)(Ve, {
                        ...a,
                        appid:
                          a.match.params.appid &&
                          Number.parseInt(a.match.params.appid),
                      }),
                  }),
                ],
              }),
            }),
          });
      },
      32545: (ae) => {
        ae.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        };
      },
      61311: (ae) => {
        ae.exports = {
          ModeratorAuditActionCtn: "f6z__AuHw6SOG9zsY2oKr",
          ExpandModActions: "_3nNMeqxuySIiNcmt7YEXb7",
        };
      },
      10026: (ae) => {
        ae.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (ae) => {
        ae.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (ae) => {
        ae.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      12037: (ae) => {
        ae.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
        };
      },
      9202: (ae) => {
        ae.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        };
      },
      71909: (ae) => {
        ae.exports = {
          Ctn: "_1cSpOjJvmGfNyu_HSwichZ",
          RssInput: "_8NQ9LUIbLO71H08qAYXDd",
          PreviewListCtn: "HRcOMhFkaVvhc6JpjMSNL",
          PostCtn: "_3MI2hkWsuzXcyDAibpwe7B",
          PostTitle: "_1ZsnsCKJmsJuCu04nd93lM",
          ActivePost: "h-qBFnVYUuO1I4P-cSkTz",
          PostDate: "_2vXmupKkh6p2BaA0K6CB5O",
          ErrorPost: "aBLy2PQkdVwQn6JBG8BN8",
          PostDraft: "_10_gLIbT6bnwWVSfTW2WSX",
          PostStaged: "nNzd6ujTYg6p9F7pRvFWy",
          PreviewListBtn: "_3NT8sO_AexM1KIu_MODBhK",
          PreviewButtons: "_3lbycruUbHtprPAsZH1xvl",
          UrlSettingCtn: "iN4AtnUn7apNTMq-bbs1m",
          Error: "_1ZZ510SPBPFH5AkrGEHFfu",
          DialogPostTitle: "_1XamDYGOmN-CAK2C5na9a5",
          DashboardBtn: "_2Hlrm7BUntwygz545o3zQI",
          RawRSS: "_2mOAhPzeuYmAf5zGBOdp7F",
          ButtonCtn: "_13jSBmDO_a-9t1cIUiiQGm",
          PreviewBtn: "_3HssDlgWiXjyOyu8qdcc-K",
          ViewRaw: "_2jvHrB2MnyHMk3_BUfXjgt",
          LanguageRow: "g_9tLawSDdTk6NiUPTRzd",
          LanguageTitle: "_2jkBiax2j-5uGiCq-TfyS0",
          LanguageSet: "_2zsMrGyxcvlo1yieM1i0d8",
        };
      },
      52081: (ae) => {
        ae.exports = {
          SectionContainer: "_3P-ffy_ncZSHdpLyO6f0qi",
          ModSectionTitle: "_2lc8mXoJp_A_p2dgalucda",
          ResizeButton: "_29RNNuE5kdZltMEtl37JLr",
          TileContainer: "_2D4XHyOtJNCevYR8usMUTn",
          CreatorCtn: "GKustVJ6kwH-yfSnQEsoc",
          TileSpread: "_1s_ElWG5sLvC6jn5bmx5lY",
        };
      },
      45559: (ae) => {
        ae.exports = { Error: "_1eWgIJNhXTPC8_jGAIqKPo" };
      },
      961: (ae) => {
        ae.exports = {
          AnalysisCtn: "_1YGfWUDh8ed60wRQsWWNIF",
          AnalysisMissing: "rH1DtJyqgJLBkBSxST7Pr",
          ModerationContainer: "_4HRKpSC9YY7qtf41FvW0t",
          FilterContainer: "qY07Ts46PtC9f_CkGYbuw",
          Tile: "_3oU1yN2Yb-ZuT2P5rHAev9",
          DetailsMiddle: "VcJpZMvg6yg6gvjet_lOL",
          EventModerateMarkReview: "_1RqKA7hTv6bcBGrMlmJBgz",
          EventModerateMarkReReview: "qd-K7NHXOsYzDV3efizgo",
          HalloweenEvent: "_34-bq70a3KzZ-vVd1v8whZ",
          TileEventOtherType: "_3LUrW7wuVtojLL2n5z-MO5",
          TileCapsule: "_36tP88olexdONuQPMAH7wS",
          NoCapsuleFallback: "_16oQL8__nFx7gB4SyJaXss",
          NoCapsule: "_1onVFUCJL4w1GOc9-5H6Me",
          TileDetails: "_2mRup7CUbcaFul1JHh9EZE",
          DetailsLeft: "_1O0y5744ePZj3bJR1znj1i",
          EventTitle: "_3ahHdkXDTdAX8N8qrlTO2A",
          DetailsRight: "_2BaxWyhld4ybAPEQ6OWPMr",
          ArtHeader: "_38IkFA1-NC1J4Nksi3nRFA",
          ArtSpotlight: "_2oUPYZHA2_Ta4GuTcTZbgd",
          ModeratedFlagCtn: "_2JGGc489-CEXdtyThZ-oQB",
          TitleLink: "_1OG__rbIbfwvZHVxRtcncy",
          TileAppInfo: "_2IJ__vdWVbYb-buHnhzfnA",
          TileAppInfoTitle: "_2X75q8B3vbGNtefxcW3jV7",
          TileAppInfoImage: "_1rVmL1div0uHwyMqwlJixh",
          TileSplit: "aaFuCFgI5Fl32h2pWEEfN",
          TileTitle: "yJw1iGP3a49nfGpsJLTX",
          TimeWidth: "xSOgV1OP-kC1LOJB_U6Lh",
          CategoryChangeDialog: "_1VSAjVr5FVxM5XYWbK0drT",
          Button: "wu9KrcTvKBuVbK28hlB7O",
          RightSideTitles: "XDAwDPCqcUwPgADyyo1I3",
          DateAndTime: "_2cW9NG6Q7uWRVnhAwe3juu",
          StoreHeaderAdjust: "_3U7jaAVOEBb0gDtFK1AkVR",
          LastUpdateTime: "_2x7zHBXixihuRXX3Rjt_0s",
          EventTimingBlock: "_31d_RSG49SZFyfID3s5Z4G",
          TileEventType: "_1z1xtCOtqCzGGGDRR-dRFr",
          ChannelInfo: "H__RKLMfFToIYF83TuW3k",
          HasAdultContent: "_2PcmCd2KPADlMtBUq-mAxi",
        };
      },
    },
  ]);
})();
