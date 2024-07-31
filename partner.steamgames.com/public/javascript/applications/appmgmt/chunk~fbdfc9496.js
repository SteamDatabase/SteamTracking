/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4227],
  {
    37403: (e, r, t) => {
      t.d(r, {
        $Y: () => j,
        BE: () => te,
        QU: () => F,
        _z: () => o,
        kZ: () => Z,
        wS: () => Y,
        zQ: () => u,
      });
      var i = t(80613),
        n = t(89068),
        a = t(56545),
        s = t(36003);
      const m = i.Message;
      class o extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.appids || n.Sg(o.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readInt32,
                    pbr: n.qM.readPackedInt32,
                    bw: n.gp.writeRepeatedInt32,
                  },
                  language: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
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
        static toObject(e, r) {
          return n.BT(o.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Request";
        }
      }
      class l extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.apps || n.Sg(l.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: { apps: { n: 1, c: s.WV, r: !0, q: !0 } },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Response";
        }
      }
      class u extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || n.Sg(u.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
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
        static toObject(e, r) {
          return n.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Request";
        }
      }
      class c extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || n.Sg(c.M()),
            m.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  token_lists: { n: 2, c: B, r: !0, q: !0 },
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
        static toObject(e, r) {
          return n.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response";
        }
      }
      class d extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.name || n.Sg(d.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  name: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  value: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
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
        static toObject(e, r) {
          return n.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
        }
      }
      class B extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.language || n.Sg(B.M()),
            m.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  language: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  tokens: { n: 2, c: d, r: !0, q: !0 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
        }
      }
      class b extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || n.Sg(b.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 5,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  start: { n: 6, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  count: { n: 7, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvoters: { n: 8, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  include_deleted: {
                    n: 9,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  gidcomment: {
                    n: 10,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  time_oldest: {
                    n: 11,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  oldest_first: {
                    n: 12,
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
        static toObject(e, r) {
          return n.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Request";
        }
      }
      class g extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.gidcomment || n.Sg(g.M()),
            m.initialize(this, e, 0, -1, [12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  text: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  upvotes: { n: 5, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  hidden: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  hidden_by_user: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  deleted: { n: 8, br: n.qM.readBool, bw: n.gp.writeBool },
                  ipaddress: { n: 9, c: s.kK },
                  total_hidden: {
                    n: 10,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  upvoted_by_user: {
                    n: 11,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  reactions: { n: 12, c: y, r: !0, q: !0 },
                  gidparentcomment: {
                    n: 13,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
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
        static toObject(e, r) {
          return n.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment";
        }
      }
      class y extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.reactionid || n.Sg(y.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  reactionid: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  count: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment_Reaction";
        }
      }
      class p extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.comments || n.Sg(p.M()),
            m.initialize(this, e, 0, -1, [1, 2, 9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  comments: { n: 1, c: g, r: !0, q: !0 },
                  deleted_comments: { n: 2, c: g, r: !0, q: !0 },
                  steamid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  start: { n: 5, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  count: { n: 6, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  total_count: {
                    n: 7,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  upvotes: { n: 8, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvoters: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  user_subscribed: {
                    n: 10,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  user_upvoted: {
                    n: 11,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  answer_commentid: {
                    n: 12,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  answer_actor: {
                    n: 13,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  answer_actor_rank: {
                    n: 14,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  can_post: { n: 15, br: n.qM.readBool, bw: n.gp.writeBool },
                  comment_thread_type: {
                    n: 16,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  gidfeature: {
                    n: 17,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 18,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
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
        static toObject(e, r) {
          return n.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Response";
        }
      }
      class w extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || n.Sg(w.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  text: { n: 6, br: n.qM.readString, bw: n.gp.writeString },
                  gidparentcomment: {
                    n: 7,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  suppress_notifications: {
                    n: 8,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  is_report: { n: 9, br: n.qM.readBool, bw: n.gp.writeBool },
                  start_hidden: {
                    n: 10,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
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
        static toObject(e, r) {
          return n.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Request";
        }
      }
      class _ extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.gidcomment || n.Sg(_.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  count: { n: 3, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvotes: { n: 4, br: n.qM.readInt32, bw: n.gp.writeInt32 },
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
        static toObject(e, r) {
          return n.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Response";
        }
      }
      class M extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || n.Sg(M.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  undelete: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
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
        static toObject(e, r) {
          return n.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Request";
        }
      }
      class z extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Response";
        }
      }
      class f extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.commentthreadtype || n.Sg(f.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  rate_up: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  suppress_notifications: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Request";
        }
      }
      class S extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.gidcomment || n.Sg(S.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  count: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  upvotes: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  has_upvoted: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Response";
        }
      }
      class R extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.commentthreadtype || n.Sg(R.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  max_results: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Request";
        }
      }
      class h extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.commentthreadid || n.Sg(h.M()),
            m.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  commentthreadid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  upvotes: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  has_upvoted: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  upvoter_accountids: {
                    n: 5,
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
        static toObject(e, r) {
          return n.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Response";
        }
      }
      class F extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.announcementid || n.Sg(F.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  vote_up: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                  clan_accountid: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
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
        static toObject(e, r) {
          return n.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Request";
        }
      }
      class W extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Response";
        }
      }
      class j extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.announcementid || n.Sg(j.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
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
        static toObject(e, r) {
          return n.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Request";
        }
      }
      class v extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.voted_up || n.Sg(v.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  voted_up: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                  voted_down: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
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
        static toObject(e, r) {
          return n.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Response";
        }
      }
      class q extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.steamid || n.Sg(q.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  filter_user_uploaded_only: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Request";
        }
      }
      class T extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.avatars || n.Sg(T.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { avatars: { n: 1, c: C, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return n.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response";
        }
      }
      class C extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.avatar_sha1 || n.Sg(C.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  avatar_sha1: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  user_uploaded: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  timestamp: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
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
        static toObject(e, r) {
          return n.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response_AvatarData";
        }
      }
      class O extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.priority || n.Sg(O.M()),
            m.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  priority: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  appid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
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
        static toObject(e, r) {
          return n.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppPriority";
        }
      }
      class U extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.count || n.Sg(U.M()),
            m.initialize(this, e, 0, -1, [5, 6, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  count: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  offset: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  rtime32_start_time: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  language_preference: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  filter_event_type: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
                  },
                  filter_to_appid: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  app_list: { n: 8, c: O, r: !0, q: !0 },
                  count_after: {
                    n: 9,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  count_before: {
                    n: 10,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
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
        static toObject(e, r) {
          return n.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Request";
        }
      }
      class I extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.results || n.Sg(I.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { results: { n: 1, c: s.h2, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return n.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Response";
        }
      }
      class x extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.include_steam_blog || n.Sg(x.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  include_steam_blog: {
                    n: 1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  filter_to_played_within_days: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  include_only_game_updates: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
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
        static toObject(e, r) {
          return n.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Request";
        }
      }
      class P extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.clanid || n.Sg(P.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  clanid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  appid: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  possible_takeover: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  rtime32_last_modified: {
                    n: 6,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  user_app_priority: {
                    n: 7,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
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
        static toObject(e, r) {
          return n.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventResult";
        }
      }
      class E extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.results || n.Sg(E.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { results: { n: 1, c: P, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return n.BT(E.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Response";
        }
      }
      class N extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
        }
      }
      class A extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
        }
      }
      class G extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.appid || n.Sg(G.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  user_app_priority: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
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
        static toObject(e, r) {
          return n.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsAppPriority";
        }
      }
      class k extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
        }
      }
      class L extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.priorities || n.Sg(L.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { priorities: { n: 1, c: G, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
        }
      }
      class V extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.appid || n.Sg(V.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
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
        static toObject(e, r) {
          return n.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
        }
      }
      class $ extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
        }
      }
      class D extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid || n.Sg(D.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(D.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Request";
        }
      }
      class H extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Response";
        }
      }
      class K extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.appid || n.Sg(K.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Request";
        }
      }
      class Q extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Response";
        }
      }
      class Y extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.markings || n.Sg(Y.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { markings: { n: 1, c: Z, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Y.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request";
        }
      }
      class Z extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.clanid || n.Sg(Z.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  clanid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  display_location: {
                    n: 3,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  mark_shown: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  mark_read: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
        }
      }
      class J extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Response";
        }
      }
      class X extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.event_gids || n.Sg(X.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  event_gids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readFixed64String,
                    pbr: n.qM.readPackedFixed64String,
                    bw: n.gp.writeRepeatedFixed64String,
                  },
                  include_read_events_only: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Request";
        }
      }
      class ee extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.events || n.Sg(ee.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { events: { n: 1, c: re, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response";
        }
      }
      class re extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.event_gid || n.Sg(re.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  event_gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  last_shown_time: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  last_read_time: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  clan_account_id: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
        }
      }
      var te;
      !(function (e) {
        (e.GetApps = function (e, r) {
          return e.SendMsg("Community.GetApps#1", (0, a.I8)(o, r), l, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetAppRichPresenceLocalization = function (e, r) {
            return e.SendMsg(
              "Community.GetAppRichPresenceLocalization#1",
              (0, a.I8)(u, r),
              c,
              { ePrivilege: 1 },
            );
          }),
          (e.GetCommentThread = function (e, r) {
            return e.SendMsg(
              "Community.GetCommentThread#1",
              (0, a.I8)(b, r),
              p,
              { ePrivilege: 2 },
            );
          }),
          (e.PostCommentToThread = function (e, r) {
            return e.SendMsg(
              "Community.PostCommentToThread#1",
              (0, a.I8)(w, r),
              _,
              { ePrivilege: 3 },
            );
          }),
          (e.DeleteCommentFromThread = function (e, r) {
            return e.SendMsg(
              "Community.DeleteCommentFromThread#1",
              (0, a.I8)(M, r),
              z,
              { ePrivilege: 1 },
            );
          }),
          (e.RateCommentThread = function (e, r) {
            return e.SendMsg(
              "Community.RateCommentThread#1",
              (0, a.I8)(f, r),
              S,
              { ePrivilege: 3 },
            );
          }),
          (e.GetCommentThreadRatings = function (e, r) {
            return e.SendMsg(
              "Community.GetCommentThreadRatings#1",
              (0, a.I8)(R, r),
              h,
              { ePrivilege: 2 },
            );
          }),
          (e.RateClanAnnouncement = function (e, r) {
            return e.SendMsg(
              "Community.RateClanAnnouncement#1",
              (0, a.I8)(F, r),
              W,
              { ePrivilege: 3 },
            );
          }),
          (e.GetClanAnnouncementVoteForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetClanAnnouncementVoteForUser#1",
              (0, a.I8)(j, r),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarHistory = function (e, r) {
            return e.SendMsg(
              "Community.GetAvatarHistory#1",
              (0, a.I8)(q, r),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventNews = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventNews#1",
              (0, a.I8)(U, r),
              I,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBestEventsForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetBestEventsForUser#1",
              (0, a.I8)(x, r),
              E,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.MarkPartnerEventsForUser = function (e, r) {
            return e.SendMsg(
              "Community.MarkPartnerEventsForUser#1",
              (0, a.I8)(Y, r),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventViewStatus = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventViewStatus#1",
              (0, a.I8)(X, r),
              ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowMoreForApp = function (e, r) {
            return e.SendMsg(
              "Community.PartnerEventsShowMoreForApp#1",
              (0, a.I8)(D, r),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowLessForApp = function (e, r) {
            return e.SendMsg(
              "Community.PartnerEventsShowLessForApp#1",
              (0, a.I8)(K, r),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.ClearUserPartnerEventsAppPriorities#1",
              (0, a.I8)(N, r),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventsAppPriorities#1",
              (0, a.I8)(k, r),
              L,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearSinglePartnerEventsAppPriority = function (e, r) {
            return e.SendMsg(
              "Community.ClearSinglePartnerEventsAppPriority#1",
              (0, a.I8)(V, r),
              $,
              { ePrivilege: 1 },
            );
          });
      })(te || (te = {}));
    },
  },
]);
